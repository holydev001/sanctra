"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useReveal } from "@/hooks/use-reveal";
import { Section, SectionHeader, Card, Pill, buttonClass } from "@/components/ui-primitives";


const principles = [
  {
    t: "Least-privilege access",
    d: "Sanctra requests only the GitHub scopes required to analyze code and open PRs. Installation is per-repository and revocable at any time.",
  },
  {
    t: "No direct commits",
    d: "Every change ships as a pull request on a Sanctra branch. Sanctra cannot merge, force-push, or modify your default branch.",
  },
  {
    t: "Secrets stay yours",
    d: "Sanctra generates .env templates and secret checklists. It never retrieves, stores, or forwards secret values.",
  },
  {
    t: "Auditable by design",
    d: "Every analysis, generation, and PR is logged with a diagnostic ID. History is preserved even for dismissed recommendations.",
  },
];

const data = [
  { k: "Source access",     v: "Sparse GitHub checkout, in-memory analysis, discarded after job completion." },
  { k: "Persistence",       v: "Repository metadata, analysis reports, and generated files. Not raw source." },
  { k: "Retention",         v: "Analyses retained per plan. Deletable on request." },
  { k: "Encryption",        v: "TLS in transit. AES-256 at rest for stored analyses and metadata." },
  { k: "Isolation",         v: "Per-tenant workspaces. Analysis jobs run in isolated compute contexts." },
  { k: "Third parties",     v: "GitHub for source. AI providers only receive redacted repository summaries." },
];

export default function SecurityPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-6 pt-20 pb-16 md:pt-24">
          <Pill tone="brand" dot>Security overview</Pill>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-tight tracking-tight max-w-3xl">
            Boring, on purpose.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Sanctra touches your repository. That deserves conservative defaults,
            transparent behavior, and mechanics you can audit. Here's how we
            approach it.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Principles" title="Four commitments that don't change." />
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {principles.map((p) => (
            <Card key={p.t} interactive>
              <h3 className="font-display text-xl">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Data handling" title="What Sanctra touches, keeps, and forgets." />
        <dl className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {data.map((row) => (
            <div key={row.k} className="bg-card p-5">
              <dt className="mono-label text-primary">{row.k}</dt>
              <dd className="mt-2 text-sm text-foreground/85">{row.v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="!border-b-0">
        <Card>
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="font-display text-2xl">Have a security question?</h3>
              <p className="mt-2 text-muted-foreground">
                We publish incident notes, respond to responsible disclosure, and
                sign customer questionnaires for beta partners.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="mailto:security@sanctra.dev" className={buttonClass("secondary")}>security@sanctra.dev</a>
              <Link href="/waitlist" className={buttonClass("primary")}>Request access →</Link>
            </div>
          </div>
        </Card>
      </Section>

      <SiteFooter />
    </div>
  );
}