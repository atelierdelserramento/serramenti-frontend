// src/App.tsx
import { useMemo, useState } from "react";
import ProductSelector from "./ProductSelector";
import { PRODUCTS } from "./catalog";
import { analyzeProductImage } from "./api";

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS[0]?.id ?? "");
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
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 16, fontFamily: "system-ui" }}>
      <h1 style={{ marginBottom: 12 }}>Configuratore Serramenti</h1>

      <div style={{ display: "grid", gridTemplateColumns: "380px 1fr", gap: 16 }}>
        <div>
          <h3 style={{ marginTop: 0 }}>Scegli il prodotto</h3>

          {/* ✅ QUI è la prova che App usa davvero il selettore */}
          <ProductSelector value={selectedProductId} onChange={setSelectedProductId} />

          <div style={{ marginTop: 12 }}>
            <button onClick={onAnalyze} disabled={!selected || loading}>
              {loading ? "Analizzo..." : "Analizza immagine prodotto"}
            </button>
          </div>
        </div>

        <div>
          <h3 style={{ marginTop: 0 }}>Preview</h3>
          {selected ? (
            <img
              src={selected.imageUrl}
              alt={selected.label}
              style={{ width: "100%", borderRadius: 12, border: "1px solid #333" }}
            />
          ) : (
            <div>Nessun prodotto selezionato</div>
          )}

          <h3>Output Gemini</h3>
          <pre style={{ whiteSpace: "pre-wrap", padding: 12, borderRadius: 12, border: "1px solid #333" }}>
            {output || "—"}
          </pre>
        </div>
      </div>
    </div>
  );
}
