import { useState } from "react";

type Product = {
  id: string;
  label: string;
  imageUrl: string;
};

const PRODUCTS: Product[] = [
  {
    id: "arrogance_aperta",
    label: "Arrogance Aperta",
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/Arrogance-aperta.png",
  },
  {
    id: "arrogance_chiusa",
    label: "Arrogance Chiusa",
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/Arrogance-chiusa.png",
  }
];

export default function App() {
  const [selected, setSelected] = useState<string>("");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: 40,
        fontFamily: "system-ui"
      }}
    >
      <h1 style={{ marginBottom: 30 }}>
        Configuratore Serramenti
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 20
        }}
      >
        {PRODUCTS.map((p) => {
          const isSelected = selected === p.id;

          return (
            <div
              key={p.id}
              onClick={() => setSelected(p.id)}
              style={{
                cursor: "pointer",
                borderRadius: 16,
                border: isSelected
                  ? "3px solid #fff"
                  : "1px solid rgba(255,255,255,0.2)",
                padding: 12,
                background: isSelected
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(255,255,255,0.05)",
                transition: "all 0.2s ease"
              }}
            >
              <div
                style={{
                  aspectRatio: "1/1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 12,
                  overflow: "hidden"
                }}
              >
                <img
                  src={p.imageUrl}
                  alt={p.label}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: 10,
                  fontWeight: 600,
                  fontSize: 14
                }}
              >
                {p.label}
              </div>
            </div>
          );
        })}
      </div>

      {selected && (
        <div style={{ marginTop: 30 }}>
          <strong>Selezionato:</strong> {selected}
        </div>
      )}
    </div>
  );
}
