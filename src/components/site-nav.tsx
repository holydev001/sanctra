"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { SanctraMark } from "./sanctra-mark";

/**
 * Sanctra nav — minimal. Each label sits in a clipped stack and
 * swaps to a gold copy of itself on hover (up-slide). Active route
 * is marked with a gold dot + gold label + a hairline underneath.
 * Mobile: hamburger opens a full-width panel.
 */
const links = [
  { to: "/",             label: "Home" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/integrations", label: "Integrations" },
  { to: "/security",     label: "Security" },
  { to: "/roadmap",      label: "Roadmap" },
  { to: "/docs",         label: "Docs" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-background/75 backdrop-blur-xl">
      {/* single gold hairline at the bottom — the only rule */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-border" />

      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-6 py-5">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Sanctra — home"
        >
          <SanctraMark size={26} />
          <span className="font-display text-[16px] font-semibold tracking-tight">
            Sanctra
          </span>
        </Link>

        {/* Links — hover-swap label */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              data-status={pathname === l.to ? "active" : undefined}
              className="group relative flex items-center gap-2 px-3 py-2 text-[13px] leading-none transition-colors"
            >
              {/* active dot */}
              <span
                aria-hidden
                className="h-1.5 w-1.5 scale-0 bg-primary transition-transform duration-300 group-data-[status=active]:scale-100"
                style={{ borderRadius: "9999px" }}
              />
              {/* swap stack — label slides up, gold copy slides in */}
              <span className="relative block h-[13px] overflow-hidden">
                <span className="invisible block whitespace-nowrap font-medium tracking-tight">
                  {l.label}
                </span>
                <span className="absolute inset-0 block whitespace-nowrap font-medium tracking-tight transition-transform duration-300 ease-out group-hover:-translate-y-full group-data-[status=active]:text-primary">
                  {l.label}
                </span>
                <span className="absolute inset-0 block translate-y-full whitespace-nowrap font-medium tracking-tight text-primary transition-transform duration-300 ease-out group-hover:translate-y-0">
                  {l.label}
                </span>
              </span>
              {/* active underline */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-data-[status=active]:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/waitlist"
            className="group hidden items-center gap-2 bg-primary px-4 py-2 text-xs font-semibold tracking-wide text-primary-foreground transition hover:brightness-110 sm:inline-flex"
          >
            <span>Join waitlist</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center border border-border text-foreground transition hover:bg-surface-muted md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-[1280px] flex-col px-6 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                data-status={pathname === l.to ? "active" : undefined}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-border/60 py-3 text-[15px] font-medium tracking-tight last:border-b-0"
              >
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 scale-0 bg-primary transition-transform group-data-[status=active]:scale-100"
                    style={{ borderRadius: "9999px" }}
                  />
                  {l.label}
                </span>
                <span aria-hidden className="text-muted-foreground transition group-hover:translate-x-0.5">→</span>
              </Link>
            ))}
            <Link
              href="/waitlist"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-primary px-4 py-3 text-xs font-semibold tracking-wide text-primary-foreground"
            >
              Join waitlist <span aria-hidden>→</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
