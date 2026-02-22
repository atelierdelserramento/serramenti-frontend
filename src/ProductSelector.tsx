// src/ProductSelector.tsx
import { PRODUCTS } from "./catalog";

type Props = {
  value: string;
  onChange: (id: string) => void;
};

export default function ProductSelector({ value, onChange }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 12,
      }}
    >
      {PRODUCTS.map((p) => {
        const active = p.id === value;
        return (
          <button
            key={p.id}
            onClick={() => onChange(p.id)}
            style={{
              cursor: "pointer",
              textAlign: "left",
              padding: 10,
              borderRadius: 12,
              border: active ? "2px solid #2563eb" : "1px solid #333",
              background: active ? "rgba(37,99,235,0.10)" : "transparent",
              color: "inherit",
            }}
          >
            <div style={{ width: "100%", aspectRatio: "16/10", overflow: "hidden", borderRadius: 10, border: "1px solid #222" }}>
              <img
                src={p.imageUrl}
                alt={p.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
              />
            </div>

            <div style={{ marginTop: 8, fontWeight: 700 }}>{p.label}</div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>
              {p.category} · {p.material}
              {p.variant ? ` · ${p.variant}` : ""}
            </div>
          </button>
        );
      })}
    </div>
  );
}
