"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import type { MouseEvent } from "react";
import type { Project } from "@/data/projects";
import { ProjectArchitecture } from "@/components/ProjectArchitecture";

export function ProjectCard({ project }: { project: Project }) {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(-300);
  const pointerY = useMotionValue(-300);
  const glowX = useSpring(pointerX, { stiffness: 120, damping: 22 });
  const glowY = useSpring(pointerY, { stiffness: 120, damping: 22 });

  function handlePointerMove(event: MouseEvent<HTMLElement>) {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const rect = event.currentTarget.getBoundingClientRect();
      pointerX.set(event.clientX - rect.left);
      pointerY.set(event.clientY - rect.top);
    }
  }

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handlePointerMove}
      onMouseLeave={() => {
        pointerX.set(-300);
        pointerY.set(-300);
      }}
    >
      <motion.div
        className="pointer-glow"
        aria-hidden="true"
        style={{ left: glowX, top: glowY }}
      />
      <div className="project-meta">
        <span>PROJECT / {project.index}</span>
        <p>{project.category}</p>
      </div>
      <div className="project-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-visual">
        <div className="project-visual-head">
          <span>ARCHITECTURE</span>
          <span>LIVE FLOW</span>
        </div>
        <ProjectArchitecture architecture={project.architecture} compact />
      </div>
      <div className="project-tags">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      <div className="project-actions">
        <Link href={`/projects/${project.slug}`}>
          Voir l&apos;étude de cas <ArrowUpRight size={16} />
        </Link>
        <div>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`GitHub — ${project.title}`}>
              <Github size={16} /> GitHub
            </a>
          ) : (
            <span title="Lien à ajouter dans data/projects.ts">
              <Github size={16} /> GitHub — bientôt
            </span>
          )}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live demo <ArrowUpRight size={15} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
