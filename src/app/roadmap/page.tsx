"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useReveal } from "@/hooks/use-reveal";
import { Section, SectionHeader, Card, Pill, buttonClass } from "@/components/ui-primitives";


const phases = [
  {
    id: "mvp",
    label: "MVP",
    tone: "success" as const,
    status: "shipping now",
    outcome: "Analyze repositories and open DevOps pull requests.",
    items: [
      "GitHub OAuth + GitHub App installation",
      "Stack detection and repository health score",
      "GitHub Actions workflow generation",
      "Dockerfile, compose, and .env template generation",
      "Provider-targeted deployment guidance (six targets)",
      "PR preview, validation, and history",
    ],
  },
  {
    id: "v1-1",
    label: "V1.1",
    tone: "info" as const,
    status: "next",
    outcome: "Improve reliability and team collaboration.",
    items: [
      "Teams and workspaces",
      "Reusable policies and presets",
      "Notifications and PR digests",
      "Repository comparison across an organization",
    ],
  },
  {
    id: "v2",
    label: "V2",
    tone: "warning" as const,
    status: "planned",
    outcome: "Observe deployments after they ship.",
    items: [
      "Deployment events and status ingestion",
      "Aggregated logs and failure diagnosis",
      "Health-check monitoring and alerts",
    ],
  },
  {
    id: "v3",
    label: "V3",
    tone: "neutral" as const,
    status: "exploring",
    outcome: "Recommend and remediate.",
    items: [
      "AI-assisted fix PRs for detected failures",
      "Cost, security, and reliability suggestions",
      "Preset marketplace for common stacks",
    ],
  },
  {
    id: "v4",
    label: "V4",
    tone: "neutral" as const,
    status: "vision",
    outcome: "Policy-bounded autonomous operations.",
    items: [
      "Rules-based auto-remediation within guardrails",
      "Continuous optimization inside policy",
      "Enterprise-scale governance and audit",
    ],
  },
];

export default function RoadmapPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-6 pt-20 pb-16 md:pt-24">
          <Pill tone="brand" dot>Roadmap · public</Pill>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-tight tracking-tight max-w-3xl">
            From reviewable PRs to policy-bounded autonomy.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Sanctra is intentionally shaped in phases. Each release earns the next
            level of autonomy by building trust through transparency.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Phases" title="Where we are, and where we're going." />
        <div className="relative mt-14">
          {/* vertical rail */}
          <div aria-hidden className="absolute left-4 top-3 bottom-3 hidden w-px bg-border md:block" />
          <ol className="space-y-6">
            {phases.map((p) => (
              <li key={p.id} className="relative md:pl-14">
                <span
                  aria-hidden
                  className="absolute left-2.5 top-6 hidden size-3 rounded-full border-2 border-primary bg-background md:block"
                />
                <Card interactive>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xl">{p.label}</span>
                      <Pill tone={p.tone} dot>{p.status}</Pill>
                    </div>
                  </div>
                  <p className="mt-3 text-base text-foreground">{p.outcome}</p>
                  <ul className="mt-4 grid gap-2 md:grid-cols-2">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 size-1.5 rounded-full bg-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="!border-b-0">
        <Card className="text-center">
          <h3 className="font-display text-2xl">Have a target or feature you need?</h3>
          <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
            Beta members vote on priorities. Your feedback moves the roadmap.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/waitlist" className={buttonClass("primary")}>Request early access →</Link>
          </div>
        </Card>
      </Section>

      <SiteFooter />
    </div>
  );
}