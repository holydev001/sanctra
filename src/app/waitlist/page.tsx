"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WaitlistForm } from "@/components/waitlist-form";
import { useReveal } from "@/hooks/use-reveal";
import { Section, SectionHeader, Pill, Card } from "@/components/ui-primitives";


export default function WaitlistPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <Timeline />
      <FinePrint />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
      <div className="absolute right-0 top-0 h-[420px] w-[520px] rounded-full bg-primary/10 blur-[120px]" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] px-6 pt-20 pb-20">
        <Link href="/" className="mono-label text-muted-foreground hover:text-primary">
          ← back to home
        </Link>
        <div className="mt-8 grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Pill tone="brand" dot>Private beta</Pill>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5.4vw,4.25rem)] leading-[1.05] tracking-tight">
              Request access to <span className="text-primary">Sanctra</span>.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              A small number of teams board every week. Founding-member workspaces
              keep priority pricing and get a direct line to the engineering team.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Read-only repository access for detection and analysis.",
                "Every change lands as a reviewable pull request.",
                "One activation email — no drip campaigns.",
              ].map((t, i) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mono-label mt-0.5 w-6 shrink-0 text-primary">0{i + 1}</span>
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const steps = [
    { k: "T+0",   t: "Submit",          b: "You enter the queue with a position number." },
    { k: "T+24h", t: "Confirm",         b: "We send a confirmation and briefing document." },
    { k: "T+~2w", t: "Invite",          b: "Your batch boards. Activate with one click." },
    { k: "T+30m", t: "First PR",        b: "Connect a repo. Watch Sanctra open its first PR." },
  ];
  return (
    <Section>
      <SectionHeader eyebrow="What happens next" title="Boarding sequence." />
      <ol className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.k}>
            <Card interactive className="h-full">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-3xl">0{i + 1}</span>
                <span className="mono-label text-primary">{s.k}</span>
              </div>
              <div className="mt-4 font-display text-lg">{s.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function FinePrint() {
  return (
    <Section className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Pill tone="neutral">Fine print</Pill>
          <p className="mono-label mt-3 text-muted-foreground">Doc 006-B</p>
        </div>
        <div className="lg:col-span-8 space-y-4 text-muted-foreground">
          <p className="text-foreground text-2xl font-display leading-snug">
            We only email you about your slot.
          </p>
          <p>
            No waitlist referrals. No leaderboards. If we ship something notable
            during the beta, we send a single monthly briefing — opt-in from your
            welcome email.
          </p>
          <p>
            If we can't onboard you within eight weeks, you'll receive a note
            explaining why, with the option to hold your seat or hand it back.
          </p>
        </div>
      </div>
    </Section>
  );
}