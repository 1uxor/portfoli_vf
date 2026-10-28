import { ArrowDown, FileText, Languages, ScanText, Sparkles } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeader } from "@/components/SectionHeader";

const pipeline = [
  { label: "PDF / Text", icon: FileText },
  { label: "OCR / Extraction", icon: ScanText },
  { label: "Cleaning", icon: null },
  { label: "Dataset preparation", icon: null },
  { label: "Fine-tuning", icon: Sparkles },
  { label: "LLM Translation", icon: Languages },
];

const technologies = ["Python", "LLM", "NLP", "OCR", "VLM", "Fine-tuning", "SQL"];

export function ResearchSection() {
  return (
    <section className="research-section">
      <div className="page-shell">
        <MotionReveal>
          <div className="research-shell">
            <div className="research-copy">
              <SectionHeader eyebrow="RESEARCH" title={"LLM pour les langues\nà faibles ressources."} />
              <div className="research-project-label">
                <span>PROJECT</span>
                <strong>EulCat</strong>
              </div>
              <p>
                Travail de recherche et d&apos;ingénierie autour de la traduction français-normand,
                du traitement multimodal de documents, de la préparation des données et du
                fine-tuning de LLM.
              </p>
              <div className="research-stack">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="research-pipeline" aria-label="Architecture du projet EulCat">
              <div className="pipeline-header">
                <span>PIPELINE / EULCAT</span>
                <span>FR → NORMAND</span>
              </div>
              <div className="pipeline-flow">
                {pipeline.map(({ label, icon: Icon }, index) => (
                  <div className="pipeline-item" key={label}>
                    <div className="pipeline-node">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {Icon ? <Icon size={16} aria-hidden="true" /> : <i />}
                      <strong>{label}</strong>
                    </div>
                    {index < pipeline.length - 1 ? (
                      <ArrowDown className="pipeline-arrow" size={15} aria-hidden="true" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
