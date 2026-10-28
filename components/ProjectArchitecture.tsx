import { ArrowDown, ArrowRight, Braces, Database, ImageIcon, Type } from "lucide-react";
import type { Architecture } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectArchitectureProps = {
  architecture: Architecture;
  compact?: boolean;
};

export function ProjectArchitecture({ architecture, compact }: ProjectArchitectureProps) {
  if (architecture.type === "multimodal") {
    return (
      <div className={cn("architecture architecture-multimodal", compact && "architecture-compact")}>
        <div className="architecture-source">
          <Braces size={15} /> {architecture.source}
        </div>
        <ArrowDown className="mobile-flow-arrow" size={15} />
        <div className="architecture-branches">
          {architecture.branches.map((branch, index) => (
            <div className="architecture-branch" key={branch.label}>
              <span>
                {index === 0 ? <Type size={14} /> : <ImageIcon size={14} />} {branch.label}
              </span>
              <ArrowRight size={14} />
              <strong>{branch.model}</strong>
            </div>
          ))}
        </div>
        <ArrowDown className="mobile-flow-arrow" size={15} />
        <div className="architecture-target">{architecture.target}</div>
      </div>
    );
  }

  return (
    <div className={cn("architecture architecture-linear", compact && "architecture-compact")}>
      {architecture.nodes.map((node, index) => (
        <div className="architecture-step" key={node}>
          <span>
            {index === 0 ? <Braces size={14} /> : index === 3 ? <Database size={14} /> : null}
            {node}
          </span>
          {index < architecture.nodes.length - 1 ? (
            <ArrowRight className="flow-arrow" size={14} aria-hidden="true" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
