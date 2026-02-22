// src/ProductSelector.tsx
import React, { useMemo, useState } from "react";
import { PRODUCTS, type Product } from "./catalog";

type Props = {
  value: string | null;
  onChange: (id: string) => void;
};

function ProductCard({
  p,
  selected,
  onClick,
}: {
  p: Product;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        textAlign: "left",
        width: "100%",
        borderRadius: 12,
        border: selected ? "2px solid #3b82f6" : "1px solid #e5e7eb",
        background: selected ? "#eff6ff" : "white",
        padding: 10,
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          borderRadius: 10,
          overflow: "hidden",
          background: "#f3f4f6",
          marginBottom: 8,
        }}
      >
        <img
          src={p.imageUrl}
          alt={p.label}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 6 }}>
        <span
          style={{
            fontSize: 11,
            padding: "2px 8px",
            borderRadius: 999,
            background: "#eef2ff",
            color: "#3730a3",
            fontWeight: 600,
          }}
        >
          {p.material.toUpperCase()}
        </span>
        <span
          style={{
            fontSize: 11,
            padding: "2px 8px",
            borderRadius: 999,
            background: "#f1f5f9",
            color: "#0f172a",
            fontWeight: 600,
          }}
        >
          {p.category}
        </span>
      </div>

      <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>
        {p.label}
      </div>
      {p.variant ? (
        <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
          {p.variant}
        </div>
      ) : null}
    </button>
  );
}

export default function ProductSelector({ value, onChange }: Props) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<"Tutte" | Product["category"]>("Tutte");
  const [mat, setMat] = useState<"Tutti" | string>("Tutti");

  const materials = useMemo(() => {
    const set = new Set(PRODUCTS.map((p) => p.material));
    return ["Tutti", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (cat !== "Tutte" && p.category !== cat) return false;
      if (mat !== "Tutti" && p.material !== mat) return false;
      if (!qq) return true;
      return (
        p.label.toLowerCase().includes(qq) ||
        p.id.toLowerCase().includes(qq) ||
        (p.variant || "").toLowerCase().includes(qq)
      );
    });
  }, [q, cat, mat]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cerca prodotto..."
          style={{
            flex: 1,
            minWidth: 180,
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #e5e7eb",
          }}
        />

        <select
          value={cat}
          onChange={(e) => setCat(e.target.value as any)}
          style={{
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #e5e7eb",
          }}
        >
          <option value="Tutte">Tutte</option>
          <option value="Finestre">Finestre</option>
          <option value="Porte">Porte</option>
        </select>

        <select
          value={mat}
          onChange={(e) => setMat(e.target.value)}
          style={{
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #e5e7eb",
          }}
        >
          {materials.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 12,
        }}
      >
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            p={p}
            selected={value === p.id}
            onClick={() => onChange(p.id)}
          />
        ))}
      </div>
    </div>
  );
}
