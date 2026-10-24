import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectPreview } from "@/components/project-preview";

export function ProjectArchiveCard({ project }: { project: Project }) {
  return (
    <article className="archive-card">
      {project.preview && (
        <Link className="archive-card-preview" href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}>
          <ProjectPreview
            variant={project.preview.variant}
            title={project.title}
            label={project.preview.label}
          />
        </Link>
      )}
      <div className="archive-card-body">
        <div className="archive-card-meta">
          <span>{project.category}</span>
          <span className="status">{project.status}</span>
        </div>
        <h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2>
        <p>{project.shortDescription}</p>
        {project.platform || project.technologies?.length ? (
          <ul className="tag-list" aria-label={`${project.title} platform and technologies`}>
            {project.platform && <li>Platform: {project.platform}</li>}
            {project.technologies?.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        ) : project.caseStudyReady !== false ? (
          <p className="archive-detail-note">Technology details to be confirmed</p>
        ) : null}
        <Link className="text-link" href={`/projects/${project.slug}`}>
            {project.caseStudyReady === false ? "Details pending" : "Read case study"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
