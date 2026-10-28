export const expertise = [
  {
    index: "01",
    title: "Generative AI",
    icon: "spark",
    skills: [
      "LLM",
      "RAG",
      "AI Agents",
      "LangChain",
      "LangGraph",
      "crewAI",
      "MCP",
      "Hugging Face",
    ],
  },
  {
    index: "02",
    title: "Machine Learning & NLP",
    icon: "brain",
    skills: [
      "Transformers",
      "NLP",
      "Fine-tuning",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "VLM",
    ],
  },
  {
    index: "03",
    title: "Data Engineering",
    icon: "database",
    skills: [
      "Data Pipelines",
      "Airflow",
      "Kafka",
      "Hadoop",
      "Databricks",
      "Talend",
      "SQL",
    ],
  },
  {
    index: "04",
    title: "AI Production",
    icon: "layers",
    skills: [
      "FastAPI / Flask",
      "React",
      "Docker",
      "Azure",
      "GCP",
      "CI/CD",
      "MLOps",
      "Vector Databases",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "AI & Data Science",
    skills: [
      "LLM",
      "AI Agents",
      "NLP",
      "Transformers",
      "RAG",
      "LangChain",
      "LangGraph",
      "crewAI",
      "Hugging Face",
      "MCP",
    ],
  },
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    title: "Data Engineering & BI",
    skills: [
      "Apache Kafka",
      "Airflow",
      "Hadoop",
      "Databricks",
      "Talend",
      "Power BI",
      "Tableau",
    ],
  },
  {
    title: "Development",
    skills: ["Python", "R", "Java", "SQL", "Flask", "React"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Qdrant", "ChromaDB"],
  },
  {
    title: "Cloud / DevOps",
    skills: ["Azure", "GCP", "Docker", "Git", "CI/CD", "MLOps"],
  },
] as const;

export const marqueeTechnologies = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Hugging Face",
  "LangChain",
  "LangGraph",
  "RAG",
  "PostgreSQL",
  "Qdrant",
  "Airflow",
  "Kafka",
  "Docker",
  "Azure",
] as const;
