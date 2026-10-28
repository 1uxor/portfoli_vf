import { ArrowUpRight } from "lucide-react";
import { about, profile } from "@/data/profile";
import { MotionReveal } from "@/components/MotionReveal";

export function About() {
  return (
    <section id="a-propos" className="about-section section-anchor">
      <div className="page-shell about-grid">
        <MotionReveal className="about-title-block">
          <span className="eyebrow-inline">06 / À PROPOS</span>
          <h2>
            {about.title.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="about-statement">“{profile.statement}”</p>
        </MotionReveal>

        <MotionReveal className="about-copy" delay={0.08}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a href="#contact">
            Parlons de votre projet <ArrowUpRight size={16} />
          </a>
        </MotionReveal>

        <MotionReveal className="languages" delay={0.14}>
          <span>LANGUES</span>
          {about.languages.map((item) => (
            <div key={item.language}>
              <strong>{item.language}</strong>
              <i />
              <p>{item.level}</p>
            </div>
          ))}
        </MotionReveal>
      </div>
    </section>
  );
}
