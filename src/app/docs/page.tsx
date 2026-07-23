"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Pill, buttonClass } from "@/components/ui-primitives";


function Code({ children }: { children: ReactNode }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-md border border-border bg-[#0B1120]/95 p-4 font-mono text-[12.5px] leading-[1.7] text-white/85">
      <code>{children}</code>
    </pre>
  );
}

function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-5 rounded-md border-l-2 border-primary bg-primary/5 p-4">
      <div className="mono-label text-primary">{label}</div>
      <div className="mt-1 text-sm text-foreground/85">{children}</div>
    </div>
  );
}

const sections: { id: string; title: string; body: ReactNode }[] = [
  {
    id: "intro",
    title: "Introduction",
    body: (
      <>
        <p>
          Sanctra is a GitHub-connected DevOps platform. You install the Sanctra GitHub
          App on a repository; it analyzes the code, produces recommendations, and
          opens a pull request containing the CI/CD, container, and deployment
          configuration your project needs.
        </p>
        <p className="mt-3">
          Nothing is committed to your default branch. Every change is a reviewable
          diff you can question, dismiss, or refine.
        </p>
        <Callout label="Status">
          Sanctra is in private beta. Some behaviors and templates will change before v1.0.
        </Callout>
      </>
    ),
  },
  {
    id: "install",
    title: "Install the GitHub App",
    body: (
      <>
        <p>Sanctra reads repositories through a GitHub App you install with least-privilege scopes on the repositories you select.</p>
        <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-sm">
          <li>Sign in to Sanctra with GitHub.</li>
          <li>Install the Sanctra GitHub App on your organization or personal account.</li>
          <li>Choose which repositories Sanctra can see.</li>
        </ol>
        <Callout label="Permissions">
          Sanctra requests read access to code, metadata, and workflows; write access is limited to Sanctra-created branches for PRs. Sanctra never merges on your behalf.
        </Callout>
      </>
    ),
  },
  {
    id: "first-analysis",
    title: "Run your first analysis",
    body: (
      <>
        <p>From the dashboard, pick a connected repository and click <strong>Analyze</strong>. Sanctra performs a sparse checkout, detects your stack, and generates a health score with ranked recommendations.</p>
        <Code>{`sanctra analyze \\
  --repo   acme/api \\
  --target railway`}</Code>
        <p className="mt-4">A completed analysis produces:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
          <li>Detected stack (framework, runtime, package manager)</li>
          <li>Existing infrastructure snapshot</li>
          <li>Ranked findings with severity, effort, and evidence</li>
          <li>Suggested deployment target(s)</li>
        </ul>
      </>
    ),
  },
  {
    id: "generate",
    title: "Generate a pull request",
    body: (
      <>
        <p>The generation wizard walks through target, scope, and configuration. You'll see the exact file tree, diff, and any warnings before the branch is created.</p>
        <Code>{`# .github/workflows/deploy.yml   (added)
# Dockerfile                     (added)
# .env.example                   (added)
# DEPLOYMENT.md                  (added)`}</Code>
        <Callout label="Validation">
          Validators run against every generated file. Errors block PR creation; warnings require explicit acknowledgment.
        </Callout>
      </>
    ),
  },
  {
    id: "stacks",
    title: "Supported stacks",
    body: (
      <>
        <p>Sanctra ships first-class detection for common stacks and a generic Docker fallback for anything else.</p>
        <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
          {["Next.js", "Remix", "Node/Express", "Fastify", "NestJS", "Astro", "SvelteKit", "Django", "FastAPI", "Rails", "Laravel", "Go/net-http"].map((s) => (
            <div key={s} className="rounded-md border border-border bg-surface px-3 py-2 text-sm">{s}</div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "faq",
    title: "FAQ",
    body: (
      <div className="space-y-4">
        <div>
          <p className="font-medium">Does Sanctra deploy my application?</p>
          <p className="mt-1 text-sm text-muted-foreground">No. Sanctra prepares your repository for deployment on providers you choose (Vercel, Railway, Render, Fly, AWS, or a Docker-based VPS). You keep the deployment relationship with those providers.</p>
        </div>
        <div>
          <p className="font-medium">Can Sanctra merge PRs automatically?</p>
          <p className="mt-1 text-sm text-muted-foreground">No. Merge is always a human action. This is intentional.</p>
        </div>
        <div>
          <p className="font-medium">Does Sanctra store my secrets?</p>
          <p className="mt-1 text-sm text-muted-foreground">No. We generate templates (<code className="rounded bg-surface-muted px-1 text-xs">.env.example</code>) and instructions. You add the values in your provider.</p>
        </div>
      </div>
    ),
  },
];

export default function DocsPage() {
  const [active, setActive] = useState(sections[0].id);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-16 lg:grid-cols-12">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24">
            <Pill tone="brand" dot>Docs · v0.1</Pill>
            <nav className="mt-6 space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setActive(s.id)}
                  className={
                    "block rounded-md px-3 py-2 text-sm transition " +
                    (active === s.id
                      ? "bg-surface text-foreground border-l-2 border-primary"
                      : "text-muted-foreground hover:bg-surface-muted hover:text-foreground")
                  }
                >
                  {s.title}
                </a>
              ))}
            </nav>
            <div className="mt-8">
              <Link href="/waitlist" className={buttonClass("primary", "sm") + " w-full"}>
                Request access →
              </Link>
            </div>
          </div>
        </aside>

        {/* Content */}
        <article className="lg:col-span-9 space-y-16">
          <header>
            <h1 className="font-display text-4xl tracking-tight md:text-5xl">Documentation</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Everything you need to install Sanctra, analyze a repository, and review
              the pull request it produces.
            </p>
          </header>

          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="font-display text-2xl tracking-tight md:text-3xl">{s.title}</h2>
              <div className="prose-sanctra mt-4 max-w-none text-foreground/90 [&_p]:leading-relaxed">
                {s.body}
              </div>
            </section>
          ))}
        </article>
      </div>
      <SiteFooter />
    </div>
  );
}