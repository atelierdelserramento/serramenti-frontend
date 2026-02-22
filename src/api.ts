// src/api.ts
type AnalyzeResponse = { output: string };

const API_BASE =
  (import.meta as any).env?.VITE_BACKEND_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export async function analyzeProductImage(imageUrl: string): Promise<AnalyzeResponse> {
  const res = await fetch(`${API_BASE}/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageUrl }),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`Backend error ${res.status}: ${txt || res.statusText}`);
  }

  return (await res.json()) as AnalyzeResponse;
}
