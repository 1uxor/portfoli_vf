import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Check, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { MotionReveal } from "@/components/MotionReveal";
import { Navbar } from "@/components/Navbar";
import { ProjectArchitecture } from "@/components/ProjectArchitecture";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Saad Filali`,
      description: project.description,
      url: `/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main id="main-content" className="case-study">
        <header className="case-hero">
          <div className="page-shell">
            <Link href="/#projets" className="case-back">
              <ArrowLeft size={16} /> Retour aux projets
            </Link>
            <div className="case-hero-grid">
              <MotionReveal immediate>
                <div className="case-meta">
                  <span>CASE STUDY / {project.index}</span>
                  <p>{project.category}</p>
                </div>
                <h1>{project.title}</h1>
                <p className="case-lead">{project.description}</p>
                <div className="case-actions">
                  {project.github ? (
                    <a className="button button-primary" href={project.github} target="_blank" rel="noreferrer">
                      <Github size={17} /> GitHub
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a className="button button-secondary" href={project.demo} target="_blank" rel="noreferrer">
                      Voir la démo <ArrowUpRight size={17} />
                    </a>
                  ) : null}
                </div>
              </MotionReveal>
              <MotionReveal className="case-architecture-card" delay={0.12} immediate>
                <div className="project-visual-head">
                  <span>SYSTEM ARCHITECTURE</span>
                  <span>PROJECT / {project.index}</span>
                </div>
                <ProjectArchitecture architecture={project.architecture} />
              </MotionReveal>
            </div>
          </div>
        </header>

        <div className="page-shell case-content">
          <aside className="case-aside">
            <span>SECTIONS</span>
            <a href="#overview">Overview</a>
            <a href="#problem">Problem</a>
            <a href="#pipeline">Data Pipeline</a>
            {project.aiApproach ? <a href="#approach">AI/ML Approach</a> : null}
            <a href="#technologies">Technologies</a>
            <a href="#screenshots">Screenshots</a>
          </aside>

          <div className="case-sections">
            <CaseSection id="overview" index="01" title="Overview">
              <p>{project.overview}</p>
            </CaseSection>

            <CaseSection id="problem" index="02" title="Problem">
              <p>{project.problem}</p>
            </CaseSection>

            <CaseSection id="pipeline" index="03" title="Architecture & Data Pipeline">
              <div className="case-diagram-wide">
                <ProjectArchitecture architecture={project.architecture} />
              </div>
              <ul className="case-checklist">
                {project.dataPipeline.map((step) => (
                  <li key={step}>
                    <Check size={15} /> {step}
                  </li>
                ))}
              </ul>
            </CaseSection>

            {project.aiApproach ? (
              <CaseSection id="approach" index="04" title="AI / ML Approach">
                <p>{project.aiApproach}</p>
              </CaseSection>
            ) : null}

            <CaseSection id="technologies" index="05" title="Technologies">
              <div className="case-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="screenshots" index="06" title="Screenshots">
              {project.screenshots.length ? (
                <div className="case-screenshots">
                  {project.screenshots.map((screenshot) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={screenshot} src={screenshot} alt={`Capture du projet ${project.title}`} />
                  ))}
                </div>
              ) : (
                <div className="case-empty">
                  <span>VISUELS À AJOUTER</span>
                  <p>
                    Les captures pourront être ajoutées dans <code>data/projects.ts</code> sans modifier cette page.
                  </p>
                </div>
              )}
            </CaseSection>

            {project.results.length ? (
              <CaseSection id="results" index="07" title="Results">
                <ul>{project.results.map((result) => <li key={result}>{result}</li>)}</ul>
              </CaseSection>
            ) : null}

            {project.challenges.length ? (
              <CaseSection id="challenges" index="08" title="Challenges">
                <ul>{project.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul>
              </CaseSection>
            ) : null}

            {project.learnings.length ? (
              <CaseSection id="learnings" index="09" title="What I Learned">
                <ul>{project.learnings.map((learning) => <li key={learning}>{learning}</li>)}</ul>
              </CaseSection>
            ) : null}

            <div className="case-next">
              <span>DISCOVER MORE</span>
              <Link href="/#projets">
                Voir les autres projets <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function CaseSection({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <MotionReveal>
      <section id={id} className="case-section section-anchor">
        <header>
          <span>{index}</span>
          <h2>{title}</h2>
        </header>
        <div className="case-section-body">{children}</div>
      </section>
    </MotionReveal>
  );
}
