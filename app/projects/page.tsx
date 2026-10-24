import type { Metadata } from "next";
import Link from "next/link";
import { ProjectArchiveCard } from "@/components/project-archive-card";
import { ProjectFooter, ProjectHeader } from "@/components/project-chrome";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Eric K.",
  description:
    "An archive of developing and live creative projects, with case studies and verified project details.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectHeader />
      <main id="top" className="page-shell project-archive">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span>Projects</span>
        </nav>
        <header className="archive-heading">
          <p className="section-label"><span>06 /</span> Project archive</p>
          <h1>Selected work,<br /><em>still becoming.</em></h1>
          <p className="archive-intro">
            A considered record of the digital products and creative work I&apos;m
            building. Details are included as they are verified.
          </p>
          <span className="archive-count">01—0{projects.length} / CURRENT PROJECTS</span>
        </header>
        <section className="archive-grid" aria-label="Project case studies">
          {projects.map((project) => (
            <ProjectArchiveCard
              key={project.slug}
              project={project}
            />
          ))}
        </section>
        <section className="archive-contact">
          <p className="section-label"><span>→</span> Continue the conversation</p>
          <h2>Have a project<br />in mind?</h2>
          <Link className="button button--primary" href="/#contact">
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </section>
        <ProjectFooter />
      </main>
    </>
  );
}
