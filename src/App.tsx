// src/App.tsx
import { useMemo, useState } from "react";
import ProductSelector from "./ProductSelector";
import { PRODUCTS } from "./catalog";
import { analyzeProductImage } from "./api";

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    PRODUCTS[0]?.id ?? ""
  );
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>("");

  const selected = useMemo(
    () => PRODUCTS.find((p) => p.id === selectedProductId),
    [selectedProductId]
  );

  async function onAnalyze() {
    if (!selected) return;

    setLoading(true);
    setOutput("");

    try {
      const res = await analyzeProductImage(selected.imageUrl);
      setOutput(res.output);
    } catch (e: any) {
      setOutput(`ERRORE: ${e?.message ?? String(e)}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: 20,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 20 }}>Configuratore Serramenti</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "420px 1fr",
          gap: 24,
        }}
      >
        {/* COLONNA SINISTRA */}
        <div>
          <h3>Scegli il prodotto</h3>

          <ProductSelector
            value={selectedProductId}
            onChange={setSelectedProductId}
          />

          <div style={{ marginTop: 16 }}>
            <button
              onClick={onAnalyze}
              disabled={!selected || loading}
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                border: "1px solid #333",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Analizzo..." : "Analizza immagine prodotto"}
            </button>
          </div>
        </div>

        {/* COLONNA DESTRA */}
        <div>
          <h3>Preview</h3>

          {selected ? (
            <img
              src={selected.imageUrl}
              alt={selected.label}
              style={{
                width: "100%",
                borderRadius: 12,
                border: "1px solid #333",
                marginBottom: 16,
              }}
            />
          ) : (
            <div>Nessun prodotto selezionato</div>
          )}

          <h3>Output Gemini</h3>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              padding: 12,
              borderRadius: 12,
              border: "1px solid #333",
              minHeight: 120,
            }}
          >
            {output || "—"}
          </pre>
        </div>
      </div>
    </div>
  );
}
