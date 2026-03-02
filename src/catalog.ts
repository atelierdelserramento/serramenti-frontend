// src/catalog.ts
export type Product = {
  id: string;
  label: string;
  category: "Finestre" | "Porte";
  material: "alluminio" | "pvc" | string;
  variant?: string;
  imageUrl: string;
};

const BASE_FINESTRE = "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/";
const BASE_PORTE_ALLUMINIO = "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Porte/alluminio/";

export const PRODUCTS: Product[] = [
  // ==================== FINESTRE ====================
  {
    id: "finestre_arrogance_aperta",
    label: "Arrogance (aperta)",
    category: "Finestre",
    material: "alluminio",
    imageUrl: `${BASE_FINESTRE}Arrogance-aperta.png`,
  },
  {
    id: "finestre_arrogance_chiusa",
    label: "Arrogance (chiusa)",
    category: "Finestre",
    material: "alluminio",
    imageUrl: `${BASE_FINESTRE}Arrogance-chiusa.png`,
  },
  {
    id: "finestre_epiq_pvc_aperta",
    label: "Epiq PVC (aperta)",
    category: "Finestre",
    material: "pvc",
    imageUrl: `${BASE_FINESTRE}Epiq-PVC-aperta.png`,
  },
  {
    id: "finestre_epiq_pvc_chiusa",
    label: "Epiq PVC (chiusa)",
    category: "Finestre",
    material: "pvc",
    imageUrl: `${BASE_FINESTRE}Epiq-PVC-chiusa.png`,
  },
  {
    id: "finestre_pvc_aperta",
    label: "PVC (aperta)",
    category: "Finestre",
    material: "pvc",
    imageUrl: `${BASE_FINESTRE}PVC-aperta.png`,
  },
  {
    id: "finestre_pvc_chiusa",
    label: "PVC (chiusa)",
    category: "Finestre",
    material: "pvc",
    imageUrl: `${BASE_FINESTRE}PVC-chiusa.png`,
  },
  {
    id: "finestre_panorama",
    label: "Panorama",
    category: "Finestre",
    material: "alluminio",
    imageUrl: `${BASE_FINESTRE}Panorama.png`,
  },
  {
    id: "finestre_scorrevole_arrogance_aperta",
    label: "Scorrevole Arrogance (aperta)",
    category: "Finestre",
    material: "alluminio",
    imageUrl: `${BASE_FINESTRE}Scorrevole-Arrogance-aperta.png`,
  },
  {
    id: "finestre_scorrevole_arrogance_chiusa",
    label: "Scorrevole Arrogance (chiusa)",
    category: "Finestre",
    material: "alluminio",
    imageUrl: `${BASE_FINESTRE}Scorrevole-Arrogance-chiusa.png`,
  },
  {
    id: "finestre_traslante_pvc_aperto",
    label: "Traslante PVC (aperto)",
    category: "Finestre",
    material: "pvc",
    imageUrl: `${BASE_FINESTRE}Traslante-PVC-aperta.png`,
  },
  {
    id: "finestre_traslante_pvc_chiusa",
    label: "Traslante PVC (chiusa)",
    category: "Finestre",
    material: "pvc",
    imageUrl: `${BASE_FINESTRE}Traslante-PVC-chiusa.png`,
  },

  // ==================== PORTE ====================
  // Tutte le porte QF-SU (alluminio)
  ...Array.from({ length: 33 }, (_, i) => {
    const num = (i + 1).toString().padStart(2, '0'); // 01, 02, ..., 33
    return {
      id: `porte_alluminio_qf_su_${num}`,
      label: `Porta Alluminio QF-SU-${num}`,
      category: "Porte" as const,
      material: "alluminio",
      imageUrl: `${BASE_PORTE_ALLUMINIO}QF-SU-${num}.png`,
    };
  }),
];
