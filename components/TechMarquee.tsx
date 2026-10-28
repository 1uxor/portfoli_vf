import type { IconType } from "react-icons";
import {
  SiApacheairflow,
  SiApachekafka,
  SiDocker,
  SiHuggingface,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";
import { Braces, CloudCog, Database, GitBranch, Workflow } from "lucide-react";
import { marqueeTechnologies } from "@/data/skills";

const iconMap: Record<string, IconType> = {
  Python: SiPython,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  "Hugging Face": SiHuggingface,
  LangChain: GitBranch,
  LangGraph: Workflow,
  RAG: Braces,
  PostgreSQL: SiPostgresql,
  Qdrant: Database,
  Airflow: SiApacheairflow,
  Kafka: SiApachekafka,
  Docker: SiDocker,
  Azure: CloudCog,
};

function MarqueeSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee-set" aria-hidden={hidden || undefined}>
      {marqueeTechnologies.map((technology) => {
        const Icon = iconMap[technology];
        return (
          <span className="technology-pill" key={technology}>
            <Icon aria-hidden="true" />
            {technology}
          </span>
        );
      })}
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="marquee-section" aria-label="Technologies et outils">
      <div className="page-shell marquee-label">
        <span>TECHNOLOGIES &amp; OUTILS</span>
        <span className="marquee-index">STACK / 01</span>
      </div>
      <div className="marquee-window">
        <div className="marquee-track">
          <MarqueeSet />
          <MarqueeSet hidden />
        </div>
      </div>
    </section>
  );
}
