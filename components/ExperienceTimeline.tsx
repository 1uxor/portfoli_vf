"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { experiences } from "@/data/experience";

const years = ["2026", "2025", "2024"];

export function ExperienceTimeline() {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const reducedMotion = useReducedMotion();

  return (
    <div className="experience-layout">
      <aside className="timeline-rail" aria-label="Chronologie des expériences">
        <p>CHRONOLOGIE</p>
        <div className="timeline-line">
          {years.map((year) => {
            const yearExperiences = experiences.filter((item) => item.year === year);
            return (
              <div className="timeline-year" key={year}>
                <strong>{year}</strong>
                <div className="timeline-nodes">
                  {yearExperiences.map((experience) => (
                    <button
                      type="button"
                      key={experience.id}
                      className={activeId === experience.id ? "active" : ""}
                      onClick={() => {
                        setActiveId(experience.id);
                        document.getElementById(experience.id)?.scrollIntoView({
                          behavior: reducedMotion ? "auto" : "smooth",
                          block: "center",
                        });
                      }}
                      aria-label={`Voir ${experience.role} chez ${experience.company}`}
                    >
                      <i />
                      <span>{experience.company.split(" — ")[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <motion.article
            id={experience.id}
            key={experience.id}
            className={`experience-card ${activeId === experience.id ? "is-active" : ""}`}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: reducedMotion ? 0 : 0.5,
              delay: reducedMotion ? 0 : Math.min(index * 0.04, 0.16),
            }}
            onMouseEnter={() => setActiveId(experience.id)}
            onFocus={() => setActiveId(experience.id)}
            tabIndex={0}
          >
            <div className="experience-card-head">
              <div>
                {experience.type ? <span className="experience-type">{experience.type}</span> : null}
                <h3>{experience.company}</h3>
                <p className="experience-role">{experience.role}</p>
              </div>
              <div className="experience-meta">
                <time>{experience.period}</time>
                <span>
                  <MapPin size={14} /> {experience.location}
                </span>
              </div>
            </div>

            <div className="experience-body">
              {experience.project ? (
                <div className="experience-project">
                  <span>PROJET</span>
                  <strong>{experience.project}</strong>
                </div>
              ) : null}
              <p>{experience.description}</p>
              {experience.responsibilities ? (
                <ul>
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="experience-stack">
              {experience.stack.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <AnimatePresence>
              {activeId === experience.id ? (
                <motion.div
                  className="experience-accent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                />
              ) : null}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
