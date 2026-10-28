export type Architecture =
  | { type: "linear"; nodes: string[] }
  | {
      type: "multimodal";
      source: string;
      branches: { label: string; model: string }[];
      target: string;
    };

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  architecture: Architecture;
  github: string | null;
  demo: string | null;
  overview: string;
  problem: string;
  dataPipeline: string[];
  aiApproach: string | null;
  screenshots: string[];
  results: string[];
  challenges: string[];
  learnings: string[];
};

export const projects: Project[] = [
  {
    slug: "pipeline-donnees-crypto",
    index: "01",
    title: "Pipeline de données crypto",
    category: "DATA ENGINEERING · ML",
    description:
      "Pipeline de données basé sur l'API Binance permettant de collecter, traiter, stocker et analyser des données de marché.",
    technologies: [
      "Python",
      "SQL",
      "Apache Airflow",
      "PostgreSQL",
      "Power BI",
      "Scikit-learn",
      "Binance API",
    ],
    architecture: {
      type: "linear",
      nodes: [
        "Binance API",
        "Data ingestion",
        "Airflow",
        "PostgreSQL",
        "ML / Analytics",
        "Power BI",
      ],
    },
    github: null,
    demo: null,
    overview:
      "Un flux de données de marché conçu autour de l'ingestion, de l'orchestration, du stockage et de l'analyse.",
    problem:
      "Structurer des données de marché issues d'une API afin de les rendre exploitables pour l'analyse et la modélisation.",
    dataPipeline: [
      "Collecte via Binance API",
      "Orchestration des traitements avec Airflow",
      "Stockage relationnel dans PostgreSQL",
      "Analyse ML et restitution Power BI",
    ],
    aiApproach:
      "Scikit-learn intervient dans l'étape ML / Analytics du pipeline après la préparation et le stockage des données.",
    screenshots: [],
    results: [],
    challenges: [],
    learnings: [],
  },
  {
    slug: "detection-multimodale-fake-news",
    index: "02",
    title: "Détection multimodale des Fake News",
    category: "NLP · COMPUTER VISION · DEEP LEARNING",
    description:
      "Système de détection de fausses informations combinant analyse textuelle NLP et analyse d'images.",
    technologies: ["PyTorch", "BERT", "CNN", "NLP", "Scikit-learn", "Flask"],
    architecture: {
      type: "multimodal",
      source: "Article",
      branches: [
        { label: "Texte", model: "BERT" },
        { label: "Image", model: "CNN" },
      ],
      target: "Classification",
    },
    github: null,
    demo: null,
    overview:
      "Une architecture multimodale qui rapproche les signaux sémantiques du texte et les caractéristiques visuelles de l'image.",
    problem:
      "Analyser conjointement le contenu textuel et visuel d'un article pour produire une classification unifiée.",
    dataPipeline: [
      "Préparation du texte et des images",
      "Encodage séparé des deux modalités",
      "Fusion des représentations",
      "Exposition de l'inférence via Flask",
    ],
    aiApproach:
      "BERT traite le texte tandis qu'un CNN analyse l'image ; leurs représentations alimentent ensuite la classification.",
    screenshots: [],
    results: [],
    challenges: [],
    learnings: [],
  },
  {
    slug: "pipeline-veille-financiere",
    index: "03",
    title: "Pipeline de veille financière",
    category: "AI AUTOMATION · DATA",
    description:
      "Workflow automatisé de collecte, traitement et génération d'alertes à partir de données financières provenant d'API et de flux RSS.",
    technologies: ["n8n", "Python", "REST API", "PostgreSQL", "Telegram API"],
    architecture: {
      type: "linear",
      nodes: [
        "API / RSS",
        "Collection",
        "Processing",
        "PostgreSQL",
        "Rules / Analysis",
        "Telegram Alerts",
      ],
    },
    github: null,
    demo: null,
    overview:
      "Un workflow d'automatisation qui centralise des sources financières et transforme leur contenu en alertes ciblées.",
    problem:
      "Réduire la collecte manuelle d'informations financières provenant de sources hétérogènes.",
    dataPipeline: [
      "Collecte depuis API et flux RSS",
      "Traitement et normalisation",
      "Persistance PostgreSQL",
      "Application de règles d'analyse",
      "Diffusion via Telegram API",
    ],
    aiApproach: null,
    screenshots: [],
    results: [],
    challenges: [],
    learnings: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
