export type Experience = {
  id: string;
  company: string;
  location: string;
  role: string;
  type: string;
  period: string;
  year: string;
  project?: string;
  description: string;
  responsibilities?: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    id: "litis-insa",
    company: "LITIS — INSA Rouen Normandie",
    location: "Rouen, France",
    role: "Ingénieur de Recherche en Data & IA — Stage",
    type: "RESEARCH · LLM · NLP",
    period: "03/2026 – 09/2026",
    year: "2026",
    project: "EulCat",
    description:
      "Développement d'un traducteur français-normand basé sur les LLM afin d'enrichir une base linguistique.",
    responsibilities: [
      "Développement d'un système de traduction basé sur LLM.",
      "Construction d'un pipeline multimodal texte/PDF.",
      "Préparation des données pour le fine-tuning.",
      "Nettoyage et structuration de données hétérogènes.",
      "Travail sur des dialectes normands à faibles ressources.",
    ],
    stack: ["Python", "LLM", "NLP", "OCR", "SQL", "Fine-tuning", "VLM"],
  },
  {
    id: "alten",
    company: "ALTEN",
    location: "Fès, Maroc",
    role: "Ingénieur IA — Stage",
    type: "GENERATIVE AI · RAG",
    period: "01/2026 – 03/2026",
    year: "2026",
    description:
      "Déploiement d'un assistant conversationnel interne basé sur une architecture RAG.",
    responsibilities: [
      "Architecture RAG",
      "Backend Python",
      "Frontend React",
      "Déploiement cloud Azure",
    ],
    stack: ["Python", "React", "Azure", "RAG", "MCP"],
  },
  {
    id: "experio",
    company: "EXPERIO",
    location: "Casablanca, Maroc",
    role: "Ingénieur IA — Stage",
    type: "AI ENGINEERING",
    period: "07/2025 – 09/2025",
    year: "2025",
    description:
      "Conception et mise en production d'un chatbot d'assistance comptable basé sur Gemini et RAG.",
    responsibilities: [
      "Chatbot IA comptable",
      "Intégration Gemini",
      "Architecture RAG",
      "Automatisation de processus métier",
      "Persistance des conversations",
    ],
    stack: ["Python", "Gemini", "RAG", "Odoo", "PostgreSQL", "JavaScript"],
  },
  {
    id: "technocolabs",
    company: "Technocolabs Softwares",
    location: "Inde",
    role: "Data Scientist — Stage",
    type: "DATA SCIENCE · ML",
    period: "10/2024 – 01/2025",
    year: "2024",
    description:
      "Développement d'un modèle prédictif destiné à optimiser les livraisons et réduire les retards.",
    responsibilities: [
      "Analyse des données",
      "Modélisation prédictive",
      "Identification des facteurs de performance",
      "API du modèle",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "Flask", "Power BI"],
  },
  {
    id: "al-ghassani",
    company: "Centre Hospitalier Al Ghassani",
    location: "Fès, Maroc",
    role: "Développeur Web — Stage",
    type: "",
    period: "07/2024 – 08/2024",
    year: "2024",
    description:
      "Participation à la digitalisation des dossiers patients et des flux d'information.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
  },
];
