"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Network,
} from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { BackgroundGrid } from "@/components/BackgroundGrid";

type HeroProps = {
  hasProfileImage: boolean;
  hasCv: boolean;
};

const labels = ["LLM", "RAG", "AI Agents", "Data Engineering"];

export function Hero({ hasProfileImage, hasCv }: HeroProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section id="accueil" className="hero section-anchor">
      <BackgroundGrid />
      <div className="page-shell hero-layout">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.08 } },
          }}
        >
          <motion.div
            className="availability"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="availability-dot" aria-hidden="true" />
            {profile.availability}
          </motion.div>

          <motion.p className="hero-kicker" variants={itemVariants(reducedMotion)}>
            {profile.title}
          </motion.p>
          <motion.h1 variants={itemVariants(reducedMotion)}>
            <span>Saad</span>
            <span className="outline-name">FILALI</span>
          </motion.h1>
          <motion.p className="hero-alt-title" variants={itemVariants(reducedMotion)}>
            {profile.alternateTitle} <span aria-hidden="true">/</span> 01
          </motion.p>
          <motion.p className="hero-value" variants={itemVariants(reducedMotion)}>
            {profile.valueProposition}
          </motion.p>
          <motion.p className="hero-description" variants={itemVariants(reducedMotion)}>
            {profile.introduction}
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants(reducedMotion)}>
            <a className="button button-primary" href="#projets">
              Découvrir mes projets <ArrowRight size={17} />
            </a>
            {hasCv ? (
              <a className="button button-secondary" href={profile.cvPath} download>
                Télécharger mon CV <ArrowDownToLine size={17} />
              </a>
            ) : (
              <span className="button button-secondary button-disabled" title="Ajoutez le PDF dans public/cv/">
                CV à ajouter <ArrowDownToLine size={17} />
              </span>
            )}
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants(reducedMotion)}>
            {profile.github ? (
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub
              </a>
            ) : (
              <span title="Configurez l'URL dans data/profile.ts">
                <Github size={16} /> GitHub — à configurer
              </span>
            )}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={16} /> Email
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual-wrap"
          initial={{ opacity: 0, scale: 0.96, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: reducedMotion ? 0 : 0.85,
            delay: reducedMotion ? 0 : 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
          aria-label="Visualisation du profil technique de Saad Filali"
        >
          <div className="visual-coordinate coordinate-top">35.7595° N</div>
          <div className="visual-coordinate coordinate-bottom">AI_SYSTEMS / 2026</div>
          <svg className="visual-lines" viewBox="0 0 620 660" fill="none" aria-hidden="true">
            <path d="M90 120C182 176 190 204 249 235" />
            <path d="M530 142C455 182 443 230 389 259" />
            <path d="M79 511C156 471 192 433 243 413" />
            <path d="M531 503C465 464 447 419 393 395" />
            <circle cx="90" cy="120" r="3" />
            <circle cx="530" cy="142" r="3" />
            <circle cx="79" cy="511" r="3" />
            <circle cx="531" cy="503" r="3" />
          </svg>

          <div className="profile-frame">
            <div className="profile-frame-corner corner-a" />
            <div className="profile-frame-corner corner-b" />
            {hasProfileImage ? (
              <Image
                src={profile.profileImage}
                alt="Portrait professionnel de Saad Filali"
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 430px"
                className="profile-photo"
              />
            ) : (
              <div className="profile-placeholder">
                <div className="placeholder-grid" />
                <div className="placeholder-monogram">SF</div>
                <div className="placeholder-status">
                  <span /> DATA → INTELLIGENCE
                </div>
              </div>
            )}
          </div>

          {labels.map((label, index) => (
            <motion.span
              key={label}
              className={`floating-label floating-label-${index + 1}`}
              animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
              transition={{
                duration: 4 + index * 0.45,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <i /> {label}
            </motion.span>
          ))}

          <div className="research-card">
            <span>MODE / 01</span>
            <strong>Research × Engineering</strong>
          </div>
          <div className="production-card">
            <Network size={18} />
            <span>AI</span>
            <i />
            <span>Data</span>
            <i />
            <span>Production</span>
          </div>
        </motion.div>
      </div>

      <div className="page-shell hero-footnote" aria-hidden="true">
        <span>SCROLL TO EXPLORE</span>
        <div />
        <span>FÈS · MAROC</span>
      </div>
    </section>
  );
}

const itemVariants = (reducedMotion: boolean | null) => ({
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reducedMotion ? 0 : 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
});
