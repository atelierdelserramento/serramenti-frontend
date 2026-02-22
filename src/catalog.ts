// src/catalog.ts

export type Product = {
  id: string;
  label: string;
  category: "Finestre" | "Porte";
  material: "alluminio" | "pvc" | string;
  variant?: string; // es. "01_alluminio_supreme"
  imageUrl: string; // URL pubblico GCS
};

export const PRODUCTS: Product[] = [
  // =========================
  // FINESTRE - ARROGANCE
  // =========================
  {
    id: "finestre_arrogance_aperta",
    label: "Arrogance (aperta)",
    category: "Finestre",
    material: "alluminio",
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/Arrogance-aperta.png",
  },
  {
    id: "finestre_arrogance_chiusa",
    label: "Arrogance (chiusa)",
    category: "Finestre",
    material: "alluminio",
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/Arrogance-chiusa.png",
  },

  // =========================
  // FINESTRE - EPIQ PVC
  // =========================
  {
    id: "finestre_epiq_pvc_aperta",
    label: "Epiq PVC (aperta)",
    category: "Finestre",
    material: "pvc",
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/Epiq-PVC-aperta.png",
  },
  {
    id: "finestre_epiq_pvc_chiusa",
    label: "Epiq PVC (chiusa)",
    category: "Finestre",
    material: "pvc",
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/Epiq-PVC-chiusa.png",
  },

  // =========================
  // FINESTRE - PVC
  // =========================
  {
    id: "finestre_pvc_aperta",
    label: "PVC (aperta)",
    category: "Finestre",
    material: "pvc",
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/PVC-aperta.png",
  },
  {
    id: "finestre_pvc_chiusa",
    label: "PVC (chiusa)",
    category: "Finestre",
    material: "pvc",
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/PVC-chiusa.png",
  },

  // =========================
  // FINESTRE - PANORAMA
  // =========================
  {
    id: "finestre_panorama",
    label: "Panorama",
    category: "Finestre",
    material: "alluminio", // se vuoi, cambialo se non corretto
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/Panorama.png",
  },

  // =========================
  // FINESTRE - SCORREVOLE ARROGANCE
  // =========================
  {
    id: "finestre_scorrevole_arrogance_aperta",
    label: "Scorrevole Arrogance (aperta)",
    category: "Finestre",
    material: "alluminio",
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/Scorrevole-Arrogance-aperta.png",
  },
  {
    id: "finestre_scorrevole_arrogance_chiusa",
    label: "Scorrevole Arrogance (chiusa)",
    category: "Finestre",
    material: "alluminio",
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/Scorrevole-Arrogance-chiusa.png",
  },

  // =========================
  // FINESTRE - TRASLANTE PVC
  // =========================
  {
    id: "finestre_traslante_pvc_aperto",
    label: "Traslante PVC (aperto)",
    category: "Finestre",
    material: "pvc",
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/Traslante-PVC-aperto.png",
  },
  {
    id: "finestre_traslante_pvc_chiusa",
    label: "Traslante PVC (chiusa)",
    category: "Finestre",
    material: "pvc",
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/Traslante-PVC-chiusa.png",
  },
];
