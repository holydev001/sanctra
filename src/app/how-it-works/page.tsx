"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useReveal } from "@/hooks/use-reveal";
import {
  Section,
  Card,
  Pill,
  TerminalWindow,
  CodeLine,
  buttonClass,
} from "@/components/ui-primitives";


const steps = [
  {
    n: "01",
    label: "Connect",
    title: "Install the GitHub App on the repos you choose.",
    body: "OAuth into Sanctra, install the GitHub App with least-privilege scopes, and pick exactly which repositories Sanctra can see. Access is per-installation and revocable at any time.",
    bullets: ["OAuth 2.0 sign-in", "Per-repo installation", "Read-only by default"],
  },
  {
    n: "02",
    label: "Analyze",
    title: "Sanctra reads the repository and reports what it found.",
    body: "A sparse checkout inspects your package files, lockfiles, existing Dockerfiles, workflows, env hints, and folder shape. You get a health score, detected stack, and a ranked list of findings — each backed by evidence.",
    bullets: ["Stack detection", "Health score", "Evidence-backed findings"],
  },
  {
    n: "03",
    label: "Review",
    title: "Recommendations you can question, dismiss, or defer.",
    body: "Each recommendation carries severity, effort, and the files it applies to. Include what you want in the generation pass; skip the rest with an optional reason kept in history.",
    bullets: ["Severity + effort", "Optional dismissal", "History preserved"],
  },
  {
    n: "04",
    label: "Generate",
    title: "Preview the exact files before any commit.",
    body: "The generation wizard shows a file tree, code diff, and validation results. Errors block PR creation; warnings require explicit acknowledgment. Nothing writes to your default branch.",
    bullets: ["File tree + diff", "Validators run first", "Warnings gated"],
  },
  {
    n: "05",
    label: "Merge",
    title: "Sanctra opens a branch and PR. You merge.",
    body: "A Sanctra branch appears in GitHub with the generated files, a summary description, and links back to the analysis. Review it like any other PR. Merge on your schedule.",
    bullets: ["Branch + PR opened", "Traceable summary", "No auto-merge, ever"],
  },
];

export default function HowItWorks() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-6 pt-20 pb-16 md:pt-24">
          <Pill tone="brand" dot>The Sanctra workflow</Pill>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5.4vw,4.25rem)] leading-[1.05] tracking-tight max-w-3xl">
            Five clear steps from a repository to a reviewable pull request.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Sanctra is deliberate. Every stage is transparent, every artifact is
            inspectable, and nothing modifies your default branch without your
            explicit review.
          </p>
        </div>
      </section>

      {/* Steps */}
      <Section>
        <div className="space-y-14">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="grid gap-8 lg:grid-cols-12 lg:items-center"
            >
              <div className={"lg:col-span-6 " + (i % 2 ? "lg:order-2" : "")}>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-5xl text-primary">{s.n}</span>
                  <span className="mono-label text-muted-foreground">{s.label}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl md:text-3xl leading-tight tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-3 text-muted-foreground">{s.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.bullets.map((b) => (
                    <Pill key={b}>{b}</Pill>
                  ))}
                </ul>
              </div>

              <div className={"lg:col-span-6 " + (i % 2 ? "lg:order-1" : "")}>
                <StepVisual n={s.n} label={s.label} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="!border-b-0">
        <Card className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl">Want to see it on your own repo?</h3>
            <p className="mt-2 text-muted-foreground">Request access to the private beta.</p>
          </div>
          <Link href="/waitlist" className={buttonClass("primary")}>
            Request early access →
          </Link>
        </Card>
      </Section>

      <SiteFooter />
    </div>
  );
}

/* Each step gets a small illustrative widget so the page doesn't just repeat itself. */
function StepVisual({ n, label }: { n: string; label: string }) {
  if (n === "01") {
    return (
      <Card>
        <div className="mono-label text-muted-foreground">Installation</div>
        <div className="mt-4 space-y-2">
          {["acme/api", "acme/dashboard", "acme/marketing"].map((r, i) => (
            <div key={r} className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2 text-sm">
              <span className="font-mono">{r}</span>
              <Pill tone={i < 2 ? "success" : "neutral"} dot>{i < 2 ? "granted" : "skipped"}</Pill>
            </div>
          ))}
        </div>
      </Card>
    );
  }
  if (n === "02") {
    return (
      <TerminalWindow title="analysis · acme/api">
        <CodeLine tone="comment"># sparse checkout · scanning</CodeLine>
        <CodeLine><span className="text-[color:var(--color-info)]">→</span> stack: Node.js 22 · Fastify · Postgres</CodeLine>
        <CodeLine><span className="text-[color:var(--color-info)]">→</span> health: <span className="text-[color:var(--color-warning)]">62/100</span></CodeLine>
          <CodeLine><span className="text-[color:var(--color-success)]">✓</span> 4 recommendations · 2 unknowns</CodeLine>
      </TerminalWindow>
    );
  }
  if (n === "03") {
    return (
      <Card>
        <div className="mono-label text-muted-foreground">Recommendations</div>
        <ul className="mt-4 space-y-2 text-sm">
          {[
            { s: "danger", t: "Missing container health check" },
            { s: "warning", t: "No CI workflow present" },
            { s: "warning", t: "Env vars undocumented" },
            { s: "neutral", t: "Add DEPLOYMENT.md" },
          ].map((r) => (
            <li key={r.t} className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2">
              <span>{r.t}</span>
              <Pill tone={r.s as "danger" | "warning" | "neutral"} dot>{r.s}</Pill>
            </li>
          ))}
        </ul>
      </Card>
    );
  }
  if (n === "04") {
    return (
      <TerminalWindow title="preview · pr #142">
        <CodeLine tone="add">+ .github/workflows/deploy.yml   58 lines</CodeLine>
        <CodeLine tone="add">+ Dockerfile                    32 lines</CodeLine>
        <CodeLine tone="add">+ .env.example                   12 lines</CodeLine>
        <CodeLine tone="add">+ DEPLOYMENT.md                  74 lines</CodeLine>
        <CodeLine> </CodeLine>
        <CodeLine><span className="text-[color:var(--color-success)]">✓</span> validators passed · 0 warnings</CodeLine>
      </TerminalWindow>
    );
  }
  return (
    <Card>
      <div className="mono-label text-muted-foreground">Pull request</div>
      <div className="mt-4 rounded-md border border-border bg-surface p-4">
        <div className="flex items-center gap-2">
          <Pill tone="success" dot>{label}</Pill>
          <span className="mono-label text-muted-foreground">#142</span>
        </div>
        <div className="mt-3 font-display text-lg">chore(sanctra): production-ready infra</div>
        <div className="mt-1 text-xs text-muted-foreground">by sanctra-app · 4 files changed · +176 −0</div>
      </div>
    </Card>
  );
}
