"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useReveal } from "@/hooks/use-reveal";
import { Section, SectionHeader, Card, Pill, buttonClass } from "@/components/ui-primitives";


const source = [
  {
    name: "GitHub",
    status: "available",
    tone: "success" as const,
    description: "OAuth sign-in and a scoped GitHub App installation. Read-only by default; write access limited to Sanctra branches for PRs.",
  },
  {
    name: "GitLab",
    status: "roadmap",
    tone: "neutral" as const,
    description: "Not in MVP. Planned once GitHub flow is stable.",
  },
  {
    name: "Bitbucket",
    status: "roadmap",
    tone: "neutral" as const,
    description: "Not in MVP. Prioritized by beta feedback.",
  },
];

const targets = [
  { name: "Vercel",    tag: "Frontend / Next.js",       body: "next.config, build & preview environments, edge-friendly routes." },
  { name: "Railway",   tag: "Full-stack + Postgres",    body: "Service definitions, health checks, environment variables template." },
  { name: "Render",    tag: "Services + cron",          body: "render.yaml scaffolding for web services, workers, and cron jobs." },
  { name: "Fly.io",    tag: "Global VMs",               body: "fly.toml, Dockerfile, release commands, and region hints." },
  { name: "AWS",       tag: "ECS / Fargate",            body: "Task definitions, CloudWatch health checks, deployment workflow." },
  { name: "Docker VPS",tag: "docker-compose",           body: "Dockerfile, compose file, and a deployment README for SSH-based rollouts." },
];

export default function IntegrationsPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-6 pt-20 pb-16 md:pt-24">
          <Pill tone="brand" dot>Integrations</Pill>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-tight tracking-tight max-w-3xl">
            One source. Many targets. Zero lock-in.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Sanctra reads from GitHub and produces configuration tailored to the
            deployment target you pick. Switch providers later without rewriting
            your pipeline.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Source" title="Where Sanctra reads your code." />
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {source.map((s) => (
            <Card key={s.name} interactive>
              <div className="flex items-center justify-between">
                <div className="font-display text-xl">{s.name}</div>
                <Pill tone={s.tone} dot>{s.status}</Pill>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Deployment targets"
          title="Where Sanctra prepares your app to run."
          description="Sanctra prepares repositories for these providers — it does not host them. You keep the deployment relationship."
        />
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {targets.map((t) => (
            <Card key={t.name} interactive className="h-full">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-lg">{t.name}</div>
                  <div className="mono-label mt-1 text-muted-foreground">{t.tag}</div>
                </div>
                <Pill tone="success" dot>ready</Pill>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="!border-b-0">
        <Card className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl">Don't see your provider?</h3>
            <p className="mt-2 text-muted-foreground">Every adapter is versioned. New targets ship as the roadmap advances.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/roadmap" className={buttonClass("secondary")}>See roadmap</Link>
            <Link href="/waitlist" className={buttonClass("primary")}>Request access →</Link>
          </div>
        </Card>
      </Section>

      <SiteFooter />
    </div>
  );
}