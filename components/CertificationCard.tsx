import { BadgeCheck, ExternalLink } from "lucide-react";

type CertificationCardProps = {
  provider: string;
  title: string;
  mark: string;
  issued?: string;
  credentialId?: string;
  credentialUrl: string;
};

export function CertificationCard({
  provider,
  title,
  mark,
  issued,
  credentialId,
  credentialUrl,
}: CertificationCardProps) {
  return (
    <a
      className="certification-card"
      href={credentialUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Voir le diplôme ${title} (nouvel onglet)`}
    >
      <div className="certification-mark">{mark}</div>
      <div className="certification-content">
        <span className="certification-provider">{provider}</span>
        <h3>{title}</h3>
        {(issued || credentialId) && (
          <p className="certification-meta">
            {issued && <span>{issued}</span>}
            {credentialId && <span>ID · {credentialId}</span>}
          </p>
        )}
      </div>
      <BadgeCheck
        className="certification-status"
        size={19}
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <span className="certification-action">
        Voir le diplôme
        <ExternalLink size={13} strokeWidth={1.7} aria-hidden="true" />
      </span>
    </a>
  );
}
