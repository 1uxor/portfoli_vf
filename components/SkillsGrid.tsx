import { skillGroups } from "@/data/skills";
import { MotionReveal } from "@/components/MotionReveal";

export function SkillsGrid() {
  return (
    <div className="skills-grid">
      {skillGroups.map((group, index) => (
        <MotionReveal key={group.title} delay={index * 0.045}>
          <article className="skills-group">
            <div className="skills-group-head">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
            </div>
            <div className="skills-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </MotionReveal>
      ))}
    </div>
  );
}
