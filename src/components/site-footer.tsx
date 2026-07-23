import Link from "next/link";
import { SanctraMark } from "./sanctra-mark";

/**
 * The Altar — Sanctra's footer.
 * A cathedral floor: gold nave hairline down the center, colonnades of links
 * either side, a large ceremonial wordmark that fades into the foundation.
 */

const colonnades = [
  {
    numeral: "I",
    heading: "The Rite",
    links: [
      { to: "/how-it-works", label: "How it works" },
      { to: "/integrations", label: "Integrations" },
      { to: "/roadmap",      label: "Roadmap" },
    ],
  },
  {
    numeral: "II",
    heading: "Scripture",
    links: [
      { to: "/docs",     label: "Documentation" },
      { to: "/security", label: "Security & trust" },
      { to: "/waitlist", label: "Join the waitlist" },
    ],
  },
  {
    numeral: "III",
    heading: "Communion",
    links: [
      { to: "/", label: "hello@sanctra.dev", external: "mailto:hello@sanctra.dev" },
      { to: "/", label: "@sanctra_dev",      external: "https://twitter.com/sanctra_dev" },
      { to: "/", label: "github.com/sanctra", external: "https://github.com/sanctra" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      {/* Gold nave — vertical hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/60 via-primary/10 to-transparent"
      />
      {/* Ambient altar glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-16 h-[400px] w-[900px] -translate-x-1/2 bg-primary/[0.05] blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 pt-20 pb-6">
        {/* Opening inscription */}
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Sanctra — home">
              <SanctraMark size={34} />
              <span className="font-display text-xl font-semibold tracking-tight">Sanctra</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A sanctuary for infrastructure. Every change is a reviewable pull request —
              nothing touches production without a human hand and a witnessed diff.
            </p>

            <div className="mono-label mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="relative inline-flex">
                  <span className="absolute inset-0 rounded-full bg-[color:var(--color-success)] animate-pulse-dot" />
                  <span className="relative size-1.5 rounded-full bg-[color:var(--color-success)]" />
                </span>
                All systems nominal
              </span>
              <span className="opacity-30">·</span>
              <span>v0.1 · private beta</span>
              <span className="opacity-30">·</span>
              <span>us-east-1</span>
            </div>
          </div>

          {/* Colonnades */}
          <div className="grid gap-8 md:col-span-7 md:grid-cols-3">
            {colonnades.map((c) => (
              <div key={c.heading}>
                <div className="mb-5 flex items-baseline gap-2 border-b border-border pb-2">
                  <span className="mono-label text-primary">{c.numeral}</span>
                  <span className="font-display text-sm text-foreground">{c.heading}</span>
                </div>
                <ul className="space-y-3 text-sm">
                  {c.links.map((l) => {
                    const isExternal = "external" in l && l.external;
                    const commonCls =
                      "group inline-flex items-center gap-2 text-foreground/75 transition hover:text-primary";
                    const inner = (
                      <>
                        <span
                          aria-hidden
                          className="h-px w-3 bg-border transition-all group-hover:w-6 group-hover:bg-primary"
                        />
                        <span>{l.label}</span>
                      </>
                    );
                    return (
                      <li key={l.label}>
                        {isExternal ? (
                          <a href={l.external!} className={commonCls}>{inner}</a>
                        ) : (
                          <Link href={l.to} className={commonCls}>{inner}</Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Ceremonial oversized wordmark — the foundation stone */}
        <div className="relative mt-16 select-none">
          <div
            aria-hidden
            className="text-center font-display font-bold leading-none tracking-tighter text-[clamp(5rem,18vw,14rem)]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, color-mix(in oklab, var(--color-primary) 45%, transparent) 0%, transparent 90%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            SANCTRA
          </div>
        </div>

        {/* Base course */}
        <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="mono-label text-muted-foreground">
            © 2026 Sanctra Labs · Consecrated in production
          </div>
          <div className="mono-label flex items-center gap-4 text-muted-foreground">
            <Link href="/security" className="transition hover:text-primary">privacy</Link>
            <span className="opacity-30">·</span>
            <Link href="/security" className="transition hover:text-primary">terms</Link>
            <span className="opacity-30">·</span>
            <Link href="/security" className="transition hover:text-primary">trust</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}