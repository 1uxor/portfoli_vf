import { MapPin } from "lucide-react";
import { education } from "@/data/education";
import { MotionReveal } from "@/components/MotionReveal";

export function EducationSection() {
  return (
    <div className="education-list">
      {education.map((item, index) => (
        <MotionReveal key={item.school} delay={index * 0.08}>
          <article className="education-card">
            <div className="education-index">0{index + 1}</div>
            <div className="education-content">
              <span>{item.period}</span>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              <strong>{item.specialization}</strong>
            </div>
            <div className="education-location">
              <MapPin size={14} /> {item.location}
            </div>
          </article>
        </MotionReveal>
      ))}
    </div>
  );
}
