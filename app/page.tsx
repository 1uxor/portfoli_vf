import { existsSync } from "node:fs";
import path from "node:path";
import { ArrowUpRight } from "lucide-react";
import { About } from "@/components/About";
import { CertificationCard } from "@/components/CertificationCard";
import { Contact } from "@/components/Contact";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ExpertiseCard } from "@/components/ExpertiseCard";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MotionReveal } from "@/components/MotionReveal";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { ResearchSection } from "@/components/ResearchSection";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillsGrid } from "@/components/SkillsGrid";
import { TechMarquee } from "@/components/TechMarquee";
import { certifications } from "@/data/certifications";
import { projects } from "@/data/projects";
import { expertise } from "@/data/skills";

export default function HomePage() {
  const hasProfileImage = existsSync(path.join(process.cwd(), "public", "images", "profile.jpg"));
  const hasCv = existsSync(path.join(process.cwd(), "public", "cv", "Saad-Filali-CV.pdf"));

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero hasProfileImage={hasProfileImage} hasCv={hasCv} />
        <TechMarquee />

        <section id="expertise" className="content-section section-anchor">
          <div className="page-shell">
            <MotionReveal>
              <SectionHeader
                eyebrow="CE QUE JE CONSTRUIS"
                index="01"
                title={"De la donnée brute\naux systèmes intelligents."}
                description="Une approche complète : modèles, données, orchestration et mise en production réunis dans des systèmes cohérents."
              />
            </MotionReveal>
            <div className="expertise-grid">
              {expertise.map((item) => (
                <ExpertiseCard key={item.index} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="projets" className="content-section projects-section section-anchor">
          <div className="page-shell">
            <MotionReveal>
              <SectionHeader
                eyebrow="SELECTED WORK"
                index="02"
                title={"Des systèmes IA & Data\nconstruits pour résoudre\ndes problèmes concrets."}
                description="Trois projets majeurs, présentés par leur logique d'architecture plutôt que par une simple liste de technologies."
              />
            </MotionReveal>
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="experiences" className="content-section experience-section section-anchor">
          <div className="page-shell">
            <MotionReveal>
              <SectionHeader
                eyebrow="EXPÉRIENCES"
                index="03"
                title={"Entre recherche,\nIA appliquée et production."}
                description="Un parcours au croisement de la recherche, de l'ingénierie des données et des applications IA."
              />
            </MotionReveal>
            <ExperienceTimeline />
          </div>
        </section>

        <ResearchSection />

        <section id="competences" className="content-section skills-section section-anchor">
          <div className="page-shell">
            <MotionReveal>
              <SectionHeader
                eyebrow="STACK"
                index="04"
                title={"Technologies avec lesquelles\nje construis."}
                description="Des modèles aux pipelines, de l'infrastructure aux interfaces qui les rendent utilisables."
              />
            </MotionReveal>
            <SkillsGrid />
          </div>
        </section>

        <section id="formation" className="content-section education-section section-anchor">
          <div className="page-shell">
            <MotionReveal>
              <SectionHeader
                eyebrow="FORMATION"
                index="05"
                title={"Fondations scientifiques,\nspécialisation IA & Data."}
              />
            </MotionReveal>
            <EducationSection />

            <MotionReveal className="certifications-block">
              <div className="certifications-title">
                <span>CERTIFICATIONS</span>
                <p>4 certifications sélectionnées sur 26</p>
                <a
                  className="certifications-all-link"
                  href="https://www.linkedin.com/in/saadfilali1/details/certifications/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir les 26 sur LinkedIn
                  <ArrowUpRight size={14} strokeWidth={1.7} aria-hidden="true" />
                </a>
              </div>
              <div className="certifications-grid">
                {certifications.map((certification) => (
                  <CertificationCard key={certification.title} {...certification} />
                ))}
              </div>
            </MotionReveal>
          </div>
        </section>

        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
