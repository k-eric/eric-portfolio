import { NextResponse, type NextRequest } from "next/server";
import { projectSlugs, type ProjectSlug } from "@/lib/project-slugs";

function isProjectSlug(slug: string | undefined): slug is ProjectSlug {
  return slug !== undefined && projectSlugs.some((projectSlug) => projectSlug === slug);
}

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/").pop();

  if (isProjectSlug(slug)) {
    return NextResponse.next();
  }

  const year = new Date().getFullYear();
  const notFoundDocument = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex">
    <title>Project not found — Eric K.</title>
    <style>
      :root{color-scheme:dark;font-family:Arial,Helvetica,sans-serif;background:#111210;color:#f3f2ea}
      *{box-sizing:border-box}
      body{min-height:100vh;margin:0}
      header,main{width:min(100% - 48px,1120px);margin-inline:auto}
      header{height:72px;display:flex;align-items:center;border-bottom:1px solid #34372f}
      header a{color:#f3f2ea;text-decoration:none;font-size:21px;font-weight:700;letter-spacing:-.09em}
      header span,em{color:#c4f56a}
      main{min-height:calc(100vh - 72px);display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding-block:60px}
      .label{font-family:monospace;font-size:10px;letter-spacing:.12em;color:#a0a398;text-transform:uppercase}
      .label span{color:#c4f56a}
      h1{margin:24px 0 0;font-size:clamp(56px,10vw,120px);font-weight:500;letter-spacing:-.09em;line-height:.92}
      em{font-style:normal}
      main>p:not(.label){max-width:390px;margin:20px 0 0;color:#b2b4ab;font-size:14px;line-height:1.8}
      nav{display:flex;flex-wrap:wrap;gap:10px;margin-top:25px}
      nav a{min-height:46px;display:inline-flex;align-items:center;gap:14px;padding:0 16px;border:1px solid #34372f;color:#f3f2ea;font-size:12px;text-decoration:none}
      nav a:first-child{border-color:#c4f56a;background:#c4f56a;color:#171914}
      a:focus-visible{outline:2px solid #c4f56a;outline-offset:4px}
      footer{margin-top:auto;padding-top:55px;color:#a0a398;font-family:monospace;font-size:9px;letter-spacing:.08em}
      @media(max-width:480px){header,main{width:calc(100% - 36px)}header{height:62px}main{min-height:calc(100vh - 62px)}}
    </style>
  </head>
  <body>
    <header><a href="/" aria-label="Eric K. home">EK<span>.</span></a></header>
    <main>
      <p class="label"><span>404 /</span> Project file missing</p>
      <h1>This project<br><em>doesn&apos;t exist.</em></h1>
      <p>The project link may be out of date, or the address may be incorrect.</p>
      <nav aria-label="Recovery links">
        <a href="/projects">Browse all projects <span aria-hidden="true">↗</span></a>
        <a href="/">Back to home <span aria-hidden="true">↗</span></a>
      </nav>
      <footer>© ${year} / ERIC K.</footer>
    </main>
  </body>
</html>`;

  return new NextResponse(notFoundDocument, {
    status: 404,
    headers: {
      "cache-control": "no-store",
      "content-type": "text/html; charset=utf-8",
    },
  });
}

export const config = {
  matcher: "/projects/:slug",
};
