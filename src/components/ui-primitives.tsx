import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Sanctra UI primitives — small, composable, brand-aware building blocks.
 * Every marketing/docs page composes from these to keep visual consistency.
 */

/* ─────────────────────────── Section ─────────────────────────── */

export function Section({
  id,
  className,
  children,
  reveal = true,
  bleed = false,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  reveal?: boolean;
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      data-reveal={reveal ? "" : undefined}
      className={cn(
        reveal && "reveal",
        "border-b border-border",
        className
      )}
    >
      <div className={cn("mx-auto max-w-[1280px]", !bleed && "px-6 py-20 md:py-24")}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="mono-label text-primary">{eyebrow}</div>
      )}
      <h2 className="mt-3 font-display text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.05] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  );
}

/* ─────────────────────────── Pill / Badge ─────────────────────────── */

type PillTone = "neutral" | "brand" | "success" | "warning" | "danger" | "info";

const pillTones: Record<PillTone, string> = {
  neutral: "border-border bg-surface-muted text-foreground/85",
  brand:   "border-primary/40 bg-primary/10 text-primary",
  success: "border-[color:var(--color-success)]/40 bg-[color:var(--color-success)]/10 text-[color:var(--color-success)]",
  warning: "border-[color:var(--color-warning)]/40 bg-[color:var(--color-warning)]/10 text-[color:var(--color-warning)]",
  danger:  "border-destructive/40 bg-destructive/10 text-destructive",
  info:    "border-[color:var(--color-info)]/40 bg-[color:var(--color-info)]/10 text-[color:var(--color-info)]",
};

export function Pill({
  tone = "neutral",
  children,
  className,
  dot = false,
}: {
  tone?: PillTone;
  children: ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "mono-label inline-flex items-center gap-2 rounded-md border px-2 py-1 text-[10px]",
        pillTones[tone],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "size-1.5 rounded-full",
            tone === "brand" && "bg-primary",
            tone === "success" && "bg-[color:var(--color-success)]",
            tone === "warning" && "bg-[color:var(--color-warning)]",
            tone === "danger"  && "bg-destructive",
            tone === "info"    && "bg-[color:var(--color-info)]",
            tone === "neutral" && "bg-foreground/60"
          )}
        />
      )}
      {children}
    </span>
  );
}

/* ─────────────────────────── Buttons ─────────────────────────── */

type ButtonVariant = "primary" | "secondary" | "ghost";

const btn: Record<ButtonVariant, string> = {
  primary:   "border-primary bg-primary text-primary-foreground hover:brightness-110",
  secondary: "border-border bg-surface text-foreground hover:bg-surface-muted",
  ghost:     "border-transparent text-foreground/80 hover:text-foreground hover:bg-surface-muted",
};

export function buttonClass(variant: ButtonVariant = "primary", size: "md" | "sm" = "md") {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-md border font-medium transition",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    size === "md" ? "px-4 py-2.5 text-sm" : "px-3 py-1.5 text-xs",
    btn[variant]
  );
}

/* ─────────────────────────── Card ─────────────────────────── */

export function Card({
  className,
  children,
  interactive = false,
  padded = true,
}: {
  className?: string;
  children: ReactNode;
  interactive?: boolean;
  padded?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card",
        padded && "p-6",
        interactive && "transition hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_6px_30px_-12px_rgba(199,162,74,0.25)]",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────── Terminal / Code ─────────────────────────── */

export function TerminalWindow({
  title,
  status,
  children,
  className,
}: {
  title: string;
  status?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border bg-[#0B1120]/95 shadow-2xl shadow-black/30", className)}>
      <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[color:var(--color-danger)]/70" />
          <span className="size-2.5 rounded-full bg-[color:var(--color-warning)]/70" />
          <span className="size-2.5 rounded-full bg-[color:var(--color-success)]/70" />
          <span className="mono-label ml-3 text-white/50">{title}</span>
        </div>
        {status && <div className="mono-label text-white/50">{status}</div>}
      </div>
      <div className="p-5 font-mono text-[12.5px] leading-[1.7] text-white/85">
        {children}
      </div>
    </div>
  );
}

export function CodeLine({
  n,
  tone,
  children,
}: {
  n?: number;
  tone?: "add" | "remove" | "comment" | "default";
  children: ReactNode;
}) {
  const toneCls = {
    add: "bg-[color:var(--color-success)]/10 border-l-2 border-[color:var(--color-success)]",
    remove: "bg-destructive/10 border-l-2 border-destructive",
    comment: "text-white/45",
    default: "border-l-2 border-transparent",
  }[tone ?? "default"];
  return (
    <div className={cn("flex gap-3 pl-2 pr-2", toneCls)}>
      {n !== undefined && (
        <span className="mono-label w-6 shrink-0 text-right text-white/30">{n}</span>
      )}
      <span className="whitespace-pre">{children}</span>
    </div>
  );
}

/* ─────────────────────────── Feature card ─────────────────────────── */

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Card interactive className={cn("group h-full", className)}>
      {icon && (
        <div className="mb-4 inline-flex size-9 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary transition group-hover:scale-105">
          {icon}
        </div>
      )}
      <h3 className="font-display text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </Card>
  );
}

/* ─────────────────────────── Stat ─────────────────────────── */

export function Stat({
  value,
  label,
  hint,
  className,
}: {
  value: string;
  label: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border border-border bg-surface p-5", className)}>
      <div className="font-display text-3xl tracking-tight text-primary">{value}</div>
      <div className="mt-1 text-sm text-foreground">{label}</div>
      {hint && <div className="mono-label mt-2 text-muted-foreground">{hint}</div>}
    </div>
  );
}
