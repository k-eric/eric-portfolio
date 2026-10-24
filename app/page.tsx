import { Suspense } from "react";
import { io } from "next/cache";
import Link from "next/link";
import { ProjectPreview } from "@/components/project-preview";
import { projects } from "@/lib/projects";

const profile = {
  location: "Nairobi, Kenya",
  focus: "Full-stack web development",
  developmentStatus: "Building and learning",
  version: "01.0",
  availability: null,
  email: "ekwendo5@gmail.com",
  github: "https://github.com/k-eric",
  linkedin: "https://www.linkedin.com/in/erickwendo67677/?isSelfProfile=true",
  whatsapp: "+25415122917",
};

const stackGroups = [
  {
    number: "01",
    title: "Currently using",
    description: "Tools and languages present in this portfolio project.",
    items: ["HTML & CSS", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Git & GitHub"],
  },
  {
    number: "02",
    title: "Currently learning",
    description: "Foundations I am actively building through practice.",
    items: ["Full-stack engineering", "SQL & databases", "Working with APIs"],
  },
  {
    number: "03",
    title: "Plan to explore",
    description: "Areas to approach as the fundamentals become stronger.",
    items: ["Automated testing", "Backend data modeling", "Deployment workflows"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Clarify the people, problem, and constraints before reaching for a solution.",
  },
  {
    number: "02",
    title: "Design",
    description: "Give the idea structure, a clear interaction, and a deliberate visual direction.",
  },
  {
    number: "03",
    title: "Build",
    description: "Turn the design into working software in small, understandable steps.",
  },
  {
    number: "04",
    title: "Refine",
    description: "Test the details, simplify what can be clearer, and improve from what I learn.",
  },
];

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`project-card project-card--${project.preview.variant}${project.featuredOnHome ? " project-card--featured" : ""}`}>
      <Link href={`/projects/${project.slug}`} aria-label={`Read the ${project.title} case study`}>
        <ProjectPreview
          variant={project.preview.variant}
          title={project.title}
          label={project.preview.label}
        />
      </Link>
      <div className="project-details">
        <div className="project-kicker">
          <span>{project.category}</span>
          <span className={`status status--${project.status.toLowerCase().replaceAll(" ", "-")}`}>{project.status}</span>
        </div>
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p className="project-description">{project.shortDescription}</p>
        {project.technologies?.length ? (
          <ul className="tag-list" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        ) : null}
        <Link className="text-link" href={`/projects/${project.slug}`}>
          Explore case study <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}

function ExternalLink({ href, children }: { href: string; children: string }) {
  return <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">{children} <span aria-hidden="true">↗</span></a>;
}

async function CurrentYear() {
  await io();
  return <>{new Date().getFullYear()}</>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
          <a className="monogram" href="#top" aria-label="Eric K. — back to top">EK<span>.</span></a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </nav>
          <span className="availability"><i />{profile.availability ?? "Availability not listed"}</span>
          <details className="mobile-menu">
            <summary aria-label="Toggle navigation menu"><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#work">Work <span>01</span></a>
              <a href="#about">About <span>02</span></a>
              <a href="#stack">Stack <span>03</span></a>
              <a href="#contact">Contact <span>04</span></a>
              <p>{profile.availability ?? "Availability not listed"}</p>
            </nav>
          </details>
        </div>
      </header>

      <div className="page-shell">
        <section className="hero section-grid" aria-labelledby="intro-heading">
          <div className="hero-copy">
            <SectionLabel number="00 /">Introduction</SectionLabel>
            <h1 id="intro-heading">I build for the web.<br />I engineer <em>what comes next.</em></h1>
            <p className="hero-intro">
              I&apos;m moving from design and digital creation into full-stack software engineering,
              bringing a people-first perspective to the process of building useful things for the web.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">Explore selected work <span aria-hidden="true">↘</span></a>
              <a className="button button--quiet" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-note"><span>01—04</span><span>DESIGN AWARENESS / ENGINEERING IN PROGRESS</span></div>
          </div>

          <div className="editor-wrap">
            <div className="editor-window" aria-label="Code editor showing a developer profile">
              <div className="editor-titlebar">
                <span className="editor-lights" aria-hidden="true"><i /><i /><i /></span>
                <span>workspace / profile.ts</span>
                <span className="editor-title-side">UTF—8</span>
              </div>
              <div className="editor-body">
                <aside className="file-rail" aria-label="Project files">
                  <span>EXPLORER</span>
                  <b>⌄ portfolio</b>
                  <i>◇ profile.ts</i>
                  <i>◇ approach.ts</i>
                  <i>◇ projects.json</i>
                  <i>◇ README.md</i>
                  <div className="rail-footer">LOCAL / MAIN</div>
                </aside>
                <div className="code-pane">
                  <div className="code-tab"><span>TS</span> profile.ts <i /></div>
                  <pre aria-label="TypeScript developer profile"><code>
                    <span className="code-muted">01  // CURRENT DIRECTION</span>{"\n"}
                    <span className="code-purple">02  const</span> <span className="code-green">builder</span> = {"{"}{"\n"}
                    <span className="code-line">03    background: </span><span className="code-yellow">&quot;design&quot;</span>,{"\n"}
                    <span className="code-line">04    learning: </span><span className="code-yellow">&quot;software&quot;</span>,{"\n"}
                    <span className="code-line">05    focus: </span><span className="code-yellow">&quot;the web&quot;</span>,{"\n"}
                    <span className="code-line">06    method: [</span>{"\n"}
                    <span className="code-line">07      </span><span className="code-yellow">&quot;understand&quot;</span>,{"\n"}
                    <span className="code-line">08      </span><span className="code-yellow">&quot;make&quot;</span>,{"\n"}
                    <span className="code-line">09      </span><span className="code-yellow">&quot;refine&quot;</span>{"\n"}
                    <span className="code-line">10    ]</span>{"\n"}
                    <span className="code-line">11  {"}"}</span>{"\n"}
                    <span className="code-purple">12  export default</span> <span className="code-green">builder</span>
                  </code></pre>
                  <div className="editor-terminal">
                    <span>TERMINAL</span>
                    <code><i>~</i> npm run build <b>_</b></code>
                  </div>
                </div>
              </div>
            </div>
            <div className="system-panel">
              <span>SYS / 001</span><span>DESIGN SENSIBILITY</span><span>→</span>
            </div>
            <p className="editor-caption">A WORK IN PROGRESS / ALWAYS ITERATING</p>
          </div>
        </section>

        <section className="metadata-strip" aria-label="Portfolio metadata">
          <div><span>01 / LOCATION</span><strong>{profile.location ?? "Not specified"}</strong></div>
          <div><span>02 / CURRENT FOCUS</span><strong>{profile.focus}</strong></div>
          <div><span>03 / DEVELOPMENT</span><strong>{profile.developmentStatus}</strong></div>
          <div><span>04 / PORTFOLIO</span><strong>VERSION {profile.version}</strong></div>
        </section>

        <section id="work" className="content-section work-section">
          <div className="section-heading">
            <div><SectionLabel number="01 /">Selected work</SectionLabel><h2>Ideas, in progress.</h2></div>
            <p>A growing collection of digital products, creative work, and lessons from building for the web.</p>
            <Link className="text-link archive-link" href="/projects">View all projects <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="project-grid">
            {projects.filter((project) => project.featuredOnHome).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
            <div className="supporting-projects">
              {projects.filter((project) => !project.featuredOnHome).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="content-section about-section">
          <div className="about-heading">
            <SectionLabel number="02 /">About</SectionLabel>
            <h2>From shaping<br />the <em>experience</em> to<br />building the system.</h2>
            <span className="about-index">A DESIGN-LED<br />ENGINEERING PRACTICE</span>
          </div>
          <div className="about-copy">
            <p className="about-lead">Good software is more than a polished surface. It makes sense, works reliably, and can keep getting better.</p>
            <p>My background in design and digital creation has taught me to consider how people interact with a product, not just how it looks. I&apos;m carrying that perspective into software engineering.</p>
            <p>I&apos;m learning by building: working through interfaces, data, and the systems that connect them. I value clear structure, maintainable code, and the patience to understand a problem before trying to solve it.</p>
            <div className="about-principles"><span>01 / Stay curious</span><span>02 / Make it useful</span><span>03 / Leave it clearer</span></div>
          </div>
        </section>

        <section id="stack" className="content-section stack-section">
          <div className="section-heading">
            <div><SectionLabel number="03 /">Technical stack</SectionLabel><h2>Tools, in motion.</h2></div>
            <p>A practical, editable snapshot of what I use today, what I&apos;m learning, and where I want to go next.</p>
          </div>
          <div className="stack-groups">
            {stackGroups.map((group) => (
              <article className="stack-group" key={group.number}>
                <span className="stack-number">{group.number}</span>
                <div><h3>{group.title}</h3><p>{group.description}</p></div>
                <ul>{group.items.map((item) => <li key={item}>{item}<span aria-hidden="true">↗</span></li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section process-section">
          <div className="section-heading">
            <div><SectionLabel number="04 /">Process</SectionLabel><h2>Make it make sense.</h2></div>
            <p>A simple loop for turning a question into a more thoughtful, useful outcome.</p>
          </div>
          <ol className="process-grid">
            {processSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-heading">
          <div className="contact-topline"><SectionLabel number="05 /">Contact</SectionLabel><span>THE NEXT GOOD THING STARTS WITH A CONVERSATION</span></div>
          <h2 id="contact-heading">Let&apos;s build something meaningful.</h2>
          <div className="contact-bottom">
            <div className="contact-intro">
              <p>I&apos;m open to software development opportunities, collaborations, and freelance projects. If you have an idea to discuss or a role that could be a good fit, I&apos;d be glad to hear from you.</p>
              <a className="button button--primary" href={`mailto:${profile.email}`}>
                Email me <span aria-hidden="true">↗</span>
              </a>
            </div>
            <ul className="contact-options" aria-label="Contact details">
              <li>
                <span className="contact-option-label">Email</span>
                <div className="contact-option-detail">
                  <a href={`mailto:${profile.email}`} aria-label={`Email Eric at ${profile.email}`}>Email me <span aria-hidden="true">↗</span></a>
                  <span className="contact-option-value">{profile.email}</span>
                </div>
              </li>
              <li>
                <span className="contact-option-label">LinkedIn</span>
                <div className="contact-option-detail">
                  <ExternalLink href={profile.linkedin}>View profile</ExternalLink>
                  <span className="contact-option-value">Professional profile</span>
                </div>
              </li>
              <li>
                <span className="contact-option-label">GitHub</span>
                <div className="contact-option-detail">
                  <ExternalLink href={profile.github}>View profile</ExternalLink>
                  <span className="contact-option-value">Code and projects</span>
                </div>
              </li>
              <li>
                <span className="contact-option-label">WhatsApp</span>
                <div className="contact-option-detail">
                  <span className="contact-option-value">{profile.whatsapp}</span>
                  <span className="contact-option-note">Number provided; link not verified</span>
                </div>
              </li>
              <li>
                <span className="contact-option-label">Location</span>
                <div className="contact-option-detail">
                  <span className="contact-option-value">{profile.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <footer className="site-footer">
          <a className="monogram" href="#top" aria-label="EK — back to top">EK<span>.</span></a>
          <span>© <Suspense fallback="—"><CurrentYear /></Suspense> / ERIC K.</span>
          <nav aria-label="Footer navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#stack">Stack</a><a href="#contact">Contact</a></nav>
          <a className="back-to-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </footer>
      </div>
    </main>
  );
}
