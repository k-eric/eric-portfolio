import Link from "next/link";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export function ProjectHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="monogram" href="/" aria-label="Eric K. — home">EK<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#stack">Stack</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <span className="availability"><i />Personal portfolio</span>
        <details className="mobile-menu">
          <summary aria-label="Toggle navigation menu"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/projects">All projects <span>01</span></Link>
            <Link href="/#about">About <span>02</span></Link>
            <Link href="/#stack">Stack <span>03</span></Link>
            <Link href="/#contact">Contact <span>04</span></Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export async function ProjectFooter() {
  const currentYear = await CurrentYear();

  return (
    <footer className="site-footer project-site-footer">
      <Link className="monogram" href="/" aria-label="EK — home">EK<span>.</span></Link>
      <span>© {currentYear} / ERIC K.</span>
      <nav aria-label="Footer navigation">
        <Link href="/projects">Projects</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <Link className="back-to-top" href="#top">Back to top <span aria-hidden="true">↑</span></Link>
    </footer>
  );
}
