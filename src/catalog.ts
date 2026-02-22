// src/catalog.ts
export type Product = {
  id: string;
  label: string;
  category: "Finestre" | "Porte";
  material: "alluminio" | "pvc" | string;
  variant?: string;
  imageUrl: string; // URL pubblico GCS
};

const BASE = "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/";

export const PRODUCTS: Product[] = [
  {
    id: "finestre_arrogance_aperta",
    label: "Arrogance (aperta)",
    category: "Finestre",
    material: "alluminio",
    imageUrl: `${BASE}Arrogance-aperta.png`,
  },
  {
    id: "finestre_arrogance_chiusa",
    label: "Arrogance (chiusa)",
    category: "Finestre",
    material: "alluminio",
    imageUrl: `${BASE}Arrogance-chiusa.png`,
  },

  {
    id: "finestre_epiq_pvc_aperta",
    label: "Epiq PVC (aperta)",
    category: "Finestre",
    material: "pvc",
    imageUrl: `${BASE}Epiq-PVC-aperta.png`,
  },
  {
    id: "finestre_epiq_pvc_chiusa",
    label: "Epiq PVC (chiusa)",
    category: "Finestre",
    material: "pvc",
    imageUrl: `${BASE}Epiq-PVC-chiusa.png`,
  },

  {
    id: "finestre_pvc_aperta",
    label: "PVC (aperta)",
    category: "Finestre",
    material: "pvc",
    imageUrl: `${BASE}PVC-aperta.png`,
  },
  {
    id: "finestre_pvc_chiusa",
    label: "PVC (chiusa)",
    category: "Finestre",
    material: "pvc",
    imageUrl: `${BASE}PVC-chiusa.png`,
  },

  {
    id: "finestre_panorama",
    label: "Panorama",
    category: "Finestre",
    material: "alluminio",
    imageUrl: `${BASE}Panorama.png`,
  },

  {
    id: "finestre_scorrevole_arrogance_aperta",
    label: "Scorrevole Arrogance (aperta)",
    category: "Finestre",
    material: "alluminio",
    imageUrl: `${BASE}Scorrevole-Arrogance-aperta.png`,
  },
  {
    id: "finestre_scorrevole_arrogance_chiusa",
    label: "Scorrevole Arrogance (chiusa)",
    category: "Finestre",
    material: "alluminio",
    imageUrl: `${BASE}Scorrevole-Arrogance-chiusa.png`,
  },

  {
    id: "finestre_traslante_pvc_aperto",
    label: "Traslante PVC (aperto)",
    category: "Finestre",
    material: "pvc",
    imageUrl: `${BASE}Traslante-PVC-aperto.png`,
  },
  {
    id: "finestre_traslante_pvc_chiusa",
    label: "Traslante PVC (chiusa)",
    category: "Finestre",
    material: "pvc",
    imageUrl: `${BASE}Traslante-PVC-chiusa.png`,
  },
];
