export const profile = {
  name: "Saad Filali",
  initials: "SF.",
  title: "Ingénieur Data & Intelligence Artificielle",
  alternateTitle: "AI & Data Engineer",
  positioning: ["LLM", "RAG", "AI Agents", "NLP", "Data Engineering"],
  availability: "Ouvert aux opportunités",
  valueProposition:
    "Je conçois des systèmes d'Intelligence Artificielle qui transforment les données en solutions concrètes.",
  introduction:
    "Spécialisé en LLM, RAG, AI Agents, NLP et Data Engineering, je construis des solutions allant de la préparation des données jusqu'au déploiement d'applications IA.",
  statement: "From data pipelines to production AI.",
  email: "saadfilali410@gmail.com",
  phone: "+212 6 73 96 98 32",
  linkedin: "https://linkedin.com/in/saadfilali1",
  github: null as string | null,
  cvPath: "/cv/Saad-Filali-CV.pdf",
  profileImage: "/images/profile.jpg",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://saad-filali-ai-data.idealgecko8.chatgpt.site",
  navItems: [
    { label: "Accueil", href: "/#accueil" },
    { label: "Expertise", href: "/#expertise" },
    { label: "Projets", href: "/#projets" },
    { label: "Expériences", href: "/#experiences" },
    { label: "Formation", href: "/#formation" },
    { label: "À propos", href: "/#a-propos" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export const about = {
  title: "Ingénierie, données\net intelligence artificielle.",
  paragraphs: [
    "Ingénieur en informatique spécialisé en Data Science, Intelligence Artificielle et solutions LLM/RAG.",
    "Mon parcours combine recherche appliquée, développement de systèmes IA, automatisation, NLP et ingénierie des données.",
    "Je m'intéresse particulièrement à la construction de systèmes intelligents complets : préparation et structuration des données, modèles IA, architectures RAG et agents, jusqu'au déploiement d'applications utilisables en production.",
  ],
  languages: [
    { language: "Arabe", level: "Natif" },
    { language: "Français", level: "Courant" },
    { language: "Anglais", level: "Courant" },
  ],
} as const;

export const contactConfig = {
  provider: "unconfigured" as "unconfigured" | "emailjs" | "resend",
  endpoint: "",
  note: "Formulaire prêt à connecter à Resend ou EmailJS.",
} as const;
