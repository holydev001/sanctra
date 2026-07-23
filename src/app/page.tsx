"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useReveal } from "@/hooks/use-reveal";
import {
  Section,
  SectionHeader,
  Pill,
  Card,
  FeatureCard,
  buttonClass,
} from "@/components/ui-primitives";


export default function HomePage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <TrustStrip />
      <RepoToPR />
      <Benefits />
      <Targets />
      <SecurityCallout />
      <CTA />
      <SiteFooter />
    </div>
  );
}

/* ────────── Hero ────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Ambient sanctuary glow + dotted architectural grid */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.09] blur-[180px]" />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, color-mix(in oklab, var(--color-primary) 22%, transparent) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 85%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-6 pt-24 pb-24 md:pt-32">
        <Pill tone="brand" dot className="animate-rise-sm">
          Infrastructure Sanctuary · Private beta
        </Pill>

        {/* Massive wordmark */}
        <h1
          className="mt-8 text-center font-display font-bold tracking-tighter animate-rise leading-[0.9] text-[clamp(4.5rem,15vw,10rem)]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, var(--color-foreground) 0%, color-mix(in oklab, var(--color-foreground) 82%, transparent) 45%, var(--color-primary) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Sanctra
        </h1>

        <p
          className="mt-8 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground md:text-xl animate-rise-sm"
          style={{ animationDelay: "120ms" }}
        >
          The AI-assisted DevOps control plane that turns infrastructure drift
          into <span className="font-semibold text-foreground">verified pull requests</span> —
          before they ever hit production.
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-rise-sm"
          style={{ animationDelay: "220ms" }}
        >
          <Link
            href="/waitlist"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 font-bold text-primary-foreground shadow-[0_0_40px_-8px_color-mix(in_oklab,var(--color-primary)_60%,transparent)] transition hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="absolute inset-0 translate-y-full bg-white/25 transition-transform duration-300 group-hover:translate-y-0" />
            <span className="relative">Start shipping</span>
            <span aria-hidden className="relative">→</span>
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-8 py-4 font-semibold text-foreground backdrop-blur-sm transition hover:bg-surface-muted"
          >
            View documentation
          </Link>
        </div>

        {/* Control plane artifact */}
        <div
          className="relative mt-20 w-full max-w-5xl animate-rise"
          style={{ animationDelay: "300ms" }}
        >
          <div
            aria-hidden
            className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-primary/15 via-transparent to-primary/5 blur-xl"
          />
          <div className="relative overflow-hidden border border-border bg-card shadow-[0_32px_64px_-12px_color-mix(in_oklab,var(--color-foreground)_35%,transparent)]">
            <ControlPlane />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Dashboard artifact — the "Celestial Control Plane" */
function ControlPlane() {
  return (
    <div className="flex min-h-[440px] flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="flex w-full flex-col gap-6 border-b border-border bg-surface/30 p-4 md:w-56 md:border-b-0 md:border-r">
        <div className="flex items-center gap-3 px-2">
          <span className="flex size-6 items-center justify-center rounded-md border border-primary/40 bg-primary/15">
            <span className="size-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
          </span>
          <span className="mono-label text-foreground/80">Sanctra</span>
        </div>

        <nav className="space-y-1 text-xs font-medium">
          <NavRow active label="Deployments" />
          <NavRow label="Infrastructure" />
          <NavRow label="Policies" />
          <NavRow label="Audit trail" />
        </nav>

        <div className="mt-auto rounded-xl border border-border bg-background/50 p-3">
          <div className="mono-label mb-2 text-muted-foreground">System health</div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-muted">
            <div className="h-full w-[88%] rounded-full bg-primary/70" />
          </div>
          <div className="mono-label mt-2 text-primary">88 · nominal</div>
        </div>
      </aside>

      {/* Main panel */}
      <div className="flex flex-1 flex-col">
        <div className="flex h-12 items-center justify-between border-b border-border px-5 text-xs">
          <div className="text-muted-foreground">
            Environment: <span className="text-foreground">production-cluster-01</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="mono-label rounded border border-[color:var(--color-success)]/30 bg-[color:var(--color-success)]/10 px-2 py-0.5 text-[10px] text-[color:var(--color-success)]">
              synced
            </span>
            <span className="mono-label text-muted-foreground">us-east-1</span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-5 p-5 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {/* Open PR card */}
            <div className="rounded-2xl border border-border bg-background/40 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">Open infrastructure changes</h3>
                <span className="mono-label text-primary">2 awaiting review</span>
              </div>
              <div className="space-y-3">
                <PRRow
                  title="PR #482 — Auto-scaling policy tuned"
                  meta="Proposed by Sanctra · 12 files changed · +148 −22"
                />
                <PRRow
                  quiet
                  title="PR #481 — Rotate RDS credentials"
                  meta="Proposed by Sanctra · 3 files changed · +38 −6"
                />
              </div>
            </div>

            {/* Live telemetry */}
            <div className="rounded-2xl border border-border bg-black/60 p-5 font-mono text-[12.5px] leading-relaxed">
              <div className="mb-3 flex items-center gap-2">
                <span className="size-2 rounded-full bg-destructive/60" />
                <span className="size-2 rounded-full bg-[color:var(--color-warning)]/70" />
                <span className="size-2 rounded-full bg-[color:var(--color-success)]/70" />
                <span className="mono-label ml-2 text-white/40">Live telemetry</span>
              </div>
              <div className="text-white/60">
                <span className="text-primary/80">[sanctra-agent]</span> scanning aws-east-1 resources…
              </div>
              <div className="text-white/60">
                <span className="text-primary/80">[sanctra-agent]</span> identified 4 unmanaged S3 buckets
              </div>
              <div className="text-[color:var(--color-success)]/85">
                [action] generating terraform manifest for import…
              </div>
              <div className="text-white/60">
                <span className="text-primary/80">[sanctra-agent]</span> opened <span className="text-primary underline decoration-primary/40">PR #482</span> · waiting for review
                <span className="caret ml-0.5 inline-block h-3 w-[7px] translate-y-0.5 bg-primary" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-4">
            <MiniStat label="Deploy success" value="99.9%" />
            <MiniStat label="Cost avoidance" value="$12,402" accent />
            <MiniStat label="Median PR review" value="4m 12s" />
            <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-border p-6 text-center">
              <span className="mono-label text-muted-foreground">+ Add integration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavRow({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={
        "flex items-center gap-3 rounded-lg px-3 py-2 transition " +
        (active
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-surface-muted hover:text-foreground")
      }
    >
      <span className={"size-1.5 rounded-full " + (active ? "bg-primary" : "bg-foreground/25")} />
      {label}
    </div>
  );
}

function PRRow({ title, meta, quiet = false }: { title: string; meta: string; quiet?: boolean }) {
  return (
    <div
      className={
        "flex items-center justify-between rounded-xl border p-3 transition " +
        (quiet
          ? "border-border bg-surface/30"
          : "border-primary/30 bg-primary/[0.04] hover:border-primary/60")
      }
    >
      <div className="flex items-center gap-4">
        <span
          className={
            "flex size-10 items-center justify-center rounded-lg " +
            (quiet ? "bg-surface-muted text-muted-foreground" : "bg-primary/15 text-primary")
          }
        >
          <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </span>
        <div className="min-w-0">
          <div className="truncate text-xs font-semibold text-foreground">{title}</div>
          <div className="mono-label mt-0.5 text-muted-foreground">{meta}</div>
        </div>
      </div>
      {!quiet && (
        <span className="rounded-md bg-primary px-3 py-1 text-[10px] font-bold text-primary-foreground">
          REVIEW
        </span>
      )}
    </div>
  );
}

function MiniStat({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-background/40 p-4">
      <div className="mono-label text-muted-foreground">{label}</div>
      <div className={"mt-1 font-display text-2xl tracking-tight " + (accent ? "text-primary" : "text-foreground")}>
        {value}
      </div>
    </div>
  );
}

/* ────────── Trust strip ────────── */

function TrustStrip() {
  const items = [
    "GitHub App", "OAuth 2.0", "Least-privilege scopes", "SOC 2 aligned",
    "No auto-merge", "Repo-scoped access", "Audit trail",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-b border-border bg-surface">
      <div className="ticker flex gap-10 whitespace-nowrap py-4">
        {row.map((t, i) => (
          <span key={i} className="mono-label flex items-center gap-10 text-muted-foreground">
            <span className="size-1 rounded-full bg-primary" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ────────── Repo → PR flow ────────── */

function RepoToPR() {
  const steps = [
    { n: "01", t: "Connect", d: "Install the Sanctra GitHub App on the repositories you choose. Read-only by default." },
    { n: "02", t: "Analyze", d: "We detect your stack, existing infra, and reliability gaps — with evidence you can inspect." },
    { n: "03", t: "Recommend", d: "Ranked recommendations, each with severity, effort, and the file paths that back it up." },
    { n: "04", t: "Generate", d: "Preview the exact files, diff, and warnings before any commit is made." },
    { n: "05", t: "Merge", d: "Sanctra opens a branch and PR. You review and merge — nothing touches main automatically." },
  ];
  return (
    <Section id="flow">
      <SectionHeader
        eyebrow="How Sanctra works"
        title={<>Five steps from repository to a reviewable pull request.</>}
        description="Sanctra never writes directly to your default branch. Every proposed change is a diff you can read, question, or reject."
      />
      <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((s) => (
          <li key={s.n}>
            <Card interactive className="flex h-full flex-col">
              <div className="mono-label text-primary">Step {s.n}</div>
              <div className="mt-4 font-display text-xl">{s.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ────────── Benefits ────────── */

function Benefits() {
  const items = [
    { t: "Reviewable, not autonomous", d: "Every recommendation, every generated file, every commit lives inside a pull request. Merge is a human decision." },
    { t: "Provider-agnostic", d: "Sanctra prepares your app for Vercel, Railway, Render, Fly, AWS, or a Docker-based VPS. You keep the choice." },
    { t: "Deterministic + explainable", d: "AI reasons about your repo. Deterministic templates write the files. Every output is traceable to the evidence." },
    { t: "Least-privilege by default", d: "Scoped GitHub App installation. No secret retrieval. No third-party access beyond what you approve." },
    { t: "Repository health score", d: "See CI, container, reliability, security, and documentation posture at a glance — with the gaps ranked." },
    { t: "Built for developers", d: "Feels like a modern engineering tool: fast, dense, keyboard-friendly, mono where it counts." },
  ];
  return (
    <Section>
      <SectionHeader
        eyebrow="What Sanctra ships"
        title="A control plane for the operational work you keep postponing."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <FeatureCard key={it.t} title={it.t} description={it.d} icon={<Dot />} />
        ))}
      </div>
    </Section>
  );
}

function Dot() {
  return <span className="size-2 rounded-full bg-primary" />;
}

/* ────────── Deploy targets ────────── */

function Targets() {
  const targets = [
    { name: "Vercel",    tag: "Frontend / Next.js" },
    { name: "Railway",   tag: "Full-stack + Postgres" },
    { name: "Render",    tag: "Services + cron" },
    { name: "Fly.io",    tag: "Global VMs" },
    { name: "AWS",       tag: "ECS / Fargate" },
    { name: "VPS",       tag: "Docker + compose" },
  ];
  return (
    <Section id="targets">
      <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Deployment targets"
            title="Sanctra prepares your app — you pick where it runs."
            description="Provider adapters produce configuration tailored to each target. Switch later without rewriting your workflows."
          />
          <div className="mt-8">
            <Link href="/integrations" className={buttonClass("secondary", "sm")}>
              View all integrations →
            </Link>
          </div>
        </div>
        <div className="grid gap-3 lg:col-span-7 md:grid-cols-2">
          {targets.map((t) => (
            <Card key={t.name} interactive className="flex items-center justify-between">
              <div>
                <div className="font-display text-lg">{t.name}</div>
                <div className="mono-label mt-1 text-muted-foreground">{t.tag}</div>
              </div>
              <Pill tone="success" dot>ready</Pill>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ────────── Security callout ────────── */

function SecurityCallout() {
  const items = [
    { k: "Repository access", v: "Scoped per-installation via GitHub App. You choose which repos." },
    { k: "No auto-merge",     v: "Sanctra opens PRs. Merge is always a human action." },
    { k: "Secrets stay yours",v: "We generate .env templates. We never fetch or store secret values." },
    { k: "Auditable",         v: "Every analysis and generation is logged, timestamped, and reviewable." },
  ];
  return (
    <Section className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <Pill tone="brand" dot>Security posture</Pill>
          <h2 className="mt-5 font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-tight tracking-tight">
            Boring, on purpose.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sanctra follows least-privilege access, transparent generation, and
            reviewable output. Nothing surprising happens to your repository.
          </p>
          <div className="mt-6">
            <Link href="/security" className={buttonClass("secondary", "sm")}>
              Read the security overview →
            </Link>
          </div>
        </div>
        <dl className="grid gap-3 lg:col-span-7 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.k} className="rounded-lg border border-border bg-card p-5">
              <dt className="mono-label text-primary">{it.k}</dt>
              <dd className="mt-2 text-sm text-foreground/85">{it.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

/* ────────── CTA ────────── */

function CTA() {
  return (
    <Section className="!border-b-0">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface to-background p-10 md:p-16 text-center">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden />
        <Pill tone="brand" dot className="mx-auto">Private beta open</Pill>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-tight">
          Give Sanctra a repository. Get a pull request back.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Onboarding is invite-based. We work with a small group of teams each week
          to keep the beta experience deliberate.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/waitlist" className={buttonClass("primary")}>
            Request early access
          </Link>
          <Link href="/docs" className={buttonClass("secondary")}>
            Read the docs
          </Link>
        </div>
      </div>
    </Section>
  );
}