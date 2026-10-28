import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  index?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  index,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("section-heading", className)}>
      <div className="section-eyebrow">
        {index ? <span>{index}</span> : null}
        <p>{eyebrow}</p>
      </div>
      <h2>
        {title.split("\n").map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h2>
      {description ? <p className="section-description">{description}</p> : null}
    </header>
  );
}
