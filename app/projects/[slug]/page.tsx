import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectFooter, ProjectHeader } from "@/components/project-chrome";
import { ProjectPreview } from "@/components/project-preview";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
  type Project,
} from "@/lib/projects";

type ProjectPageProps = PageProps<"/projects/[slug]">;

export const instant = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found — Eric K." };
  }

  return {
    title: project.caseStudyReady === false
      ? `${project.title} — Project details | Eric K.`
      : `${project.title} — Case study | Eric K.`,
    description: project.shortDescription,
  };
}

function DetailSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="case-section">
      <p className="section-label"><span>{number} /</span> {title}</p>
      {children}
    </section>
  );
}

function CopyList({ items }: { items: string[] }) {
  return (
    <ul className="case-copy-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function ProjectActions({ project }: { project: Project }) {
  if (!project.liveUrl && !project.repositoryUrl) {
    return null;
  }

  return (
    <div className="case-actions">
      {project.liveUrl && (
        <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noreferrer">
          Visit project website <span aria-hidden="true">↗</span>
        </a>
      )}
      {project.repositoryUrl && (
        <a className="button button--quiet" href={project.repositoryUrl} target="_blank" rel="noreferrer">
          View repository <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

function MetadataValue({ label, value }: { label: string; value: string }) {
  return (
    <div className="case-metadata-item">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <ProjectHeader />
      <main id="top" className="page-shell case-study">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span>
          <Link href="/projects">Projects</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{project.title}</span>
        </nav>

        <header className="case-hero">
          <div className="case-hero-copy">
            <p className="section-label">
              <span>{project.caseStudyReady === false ? "PROJECT RECORD" : "CASE STUDY"} / {project.category}</span>
            </p>
            <h1>{project.title}</h1>
            <div className="case-status"><span className="status">{project.status}</span></div>
            <p className="case-introduction">{project.shortDescription}</p>
            <ProjectActions project={project} />
          </div>
          <div className="case-hero-side">
            <span>PROJECT FILE / {project.slug.toUpperCase()}</span>
            <span>STATUS / {project.status.toUpperCase()}</span>
            <span>DETAILS / VERIFIED WHEN AVAILABLE</span>
          </div>
        </header>

        {project.caseStudyReady !== false ? (
          <>
            <ProjectPreview
              variant={project.preview.variant}
              title={project.title}
              label={project.preview.label}
              className="case-preview"
            />
            <p className="case-preview-caption">{project.preview.label}</p>

            <div className="case-body">
              <aside className="case-sidebar" aria-label="Project metadata">
                <p className="section-label"><span>INDEX / 01</span> Project notes</p>
                <dl className="case-metadata">
                  <MetadataValue label="Category" value={project.category} />
                  <MetadataValue label="Status" value={project.status} />
                  {project.role && <MetadataValue label="Role" value={project.role} />}
                  {project.platform && <MetadataValue label="Platform" value={project.platform} />}
                  {project.dateInfo && <MetadataValue label="Dates" value={project.dateInfo} />}
                  {project.technologies?.length ? (
                    <div className="case-metadata-item">
                      <dt>Technologies</dt>
                      <dd>
                        <ul className="case-tech-list">
                          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                        </ul>
                      </dd>
                    </div>
                  ) : null}
                </dl>
                <ProjectActions project={project} />
              </aside>

              <div className="case-content">
                {project.overview && (
                  <DetailSection number="01" title="Overview">
                    <h2>{project.overview}</h2>
                  </DetailSection>
                )}

                {project.problem && (
                  <DetailSection number="02" title="Problem & context">
                    <p className="case-body-copy">{project.problem}</p>
                  </DetailSection>
                )}

                {project.goals?.length ? (
                  <DetailSection number="03" title="Goals & scope">
                    <CopyList items={project.goals} />
                  </DetailSection>
                ) : null}

                {project.completedWork?.length ? (
                  <DetailSection number="04" title="Completed so far">
                    <CopyList items={project.completedWork} />
                  </DetailSection>
                ) : null}

                {project.currentProgress?.length ? (
                  <DetailSection number="05" title="Current progress">
                    <CopyList items={project.currentProgress} />
                  </DetailSection>
                ) : null}

                {project.contributions?.length ? (
                  <DetailSection number="06" title="Role & contribution">
                    <CopyList items={project.contributions} />
                  </DetailSection>
                ) : null}

                {project.features?.length ? (
                  <DetailSection number="07" title="Feature status">
                    <ul className="case-feature-list">
                      {project.features.map((feature) => (
                        <li key={feature.name}>
                          <div><strong>{feature.name}</strong><span>{feature.status}</span></div>
                          {feature.description && <p>{feature.description}</p>}
                        </li>
                      ))}
                    </ul>
                  </DetailSection>
                ) : null}

                {project.designDecisions?.length ? (
                  <DetailSection number="08" title="Design & technical decisions">
                    <CopyList items={project.designDecisions} />
                  </DetailSection>
                ) : null}

                {project.challenges?.length ? (
                  <DetailSection number="09" title="Challenges">
                    <CopyList items={project.challenges} />
                  </DetailSection>
                ) : null}

                {project.lessonsLearned?.length ? (
                  <DetailSection number="10" title="Lessons learned">
                    <CopyList items={project.lessonsLearned} />
                  </DetailSection>
                ) : null}

                {project.nextSteps?.length ? (
                  <DetailSection number="11" title="Planned improvements & next steps">
                    <CopyList items={project.nextSteps} />
                  </DetailSection>
                ) : null}

                {project.areasToEvaluate?.length ? (
                  <DetailSection number="12" title="Areas to evaluate">
                    <CopyList items={project.areasToEvaluate} />
                  </DetailSection>
                ) : null}

                {project.pendingDetails?.length ? (
                  <DetailSection number="13" title="Details to confirm">
                    <p className="case-body-copy">These notes will be expanded as project details are verified.</p>
                    <CopyList items={project.pendingDetails} />
                  </DetailSection>
                ) : null}
              </div>
            </div>
          </>
        ) : (
          <section className="case-not-ready" aria-labelledby="case-not-ready-title">
            <p className="section-label"><span>DETAILS / PENDING</span> Project information</p>
            <h2 id="case-not-ready-title">Case study in preparation.</h2>
            <p>
              The project purpose, contribution, implementation details, and correct
              project link have not yet been confirmed. This page will be updated
              when those details are available.
            </p>
          </section>
        )}

        <nav className="case-project-nav" aria-label="Other projects">
          {previous && (
            <Link href={`/projects/${previous.slug}`}>
              <span>← Previous project</span><strong>{previous.title}</strong>
            </Link>
          )}
          <Link className="case-project-index" href="/projects">
            <span>PROJECT INDEX</span><strong>All projects ↗</strong>
          </Link>
          {next && (
            <Link className="case-project-next" href={`/projects/${next.slug}`}>
              <span>Next project →</span><strong>{next.title}</strong>
            </Link>
          )}
        </nav>

        <section className="case-contact">
          <p className="section-label"><span>→</span> Start a conversation</p>
          <h2>Good work starts<br />with a <em>question.</em></h2>
          <Link className="button button--primary" href="/#contact">
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </section>
        <ProjectFooter />
      </main>
    </>
  );
}
