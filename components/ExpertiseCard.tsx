"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, Database, Layers3, Sparkles } from "lucide-react";
import type { expertise } from "@/data/skills";

type Expertise = (typeof expertise)[number];

const iconMap = {
  spark: Sparkles,
  brain: BrainCircuit,
  database: Database,
  layers: Layers3,
};

export function ExpertiseCard({ item }: { item: Expertise }) {
  const Icon = iconMap[item.icon];
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      className="expertise-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={reducedMotion ? undefined : { y: -6 }}
      transition={{ duration: reducedMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="expertise-topline">
        <span>{item.index}</span>
        <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="mini-diagram" aria-hidden="true">
        <span className="mini-node node-a" />
        <span className="mini-node node-b" />
        <span className="mini-node node-c" />
        <i />
        <i />
      </div>
      <h3>{item.title}</h3>
      <div className="expertise-tags">
        {item.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </motion.article>
  );
}
