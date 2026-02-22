// src/api.ts
export type AnalyzeResponse = { output: string };

const API_BASE =
  (import.meta as any).env?.VITE_API_URL?.replace(/\/$/, "") || "";

export async function analyzeImage(imageUrl: string): Promise<AnalyzeResponse> {
  if (!API_BASE) {
    throw new Error(
      "VITE_API_URL non impostata. Metti l'URL del backend su Railway in VITE_API_URL."
    );
  }

  const res = await fetch(`${API_BASE}/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageUrl }),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`API /analyze error ${res.status}: ${txt}`);
  }

  return res.json();
}
