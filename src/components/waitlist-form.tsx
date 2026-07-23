"use client";

import { useState } from "react";
import { Pill } from "./ui-primitives";

const roles = [
  { v: "solo",     l: "Solo builder",      d: "Just me, shipping fast" },
  { v: "startup",  l: "Startup team",      d: "2–15 engineers" },
  { v: "agency",   l: "Agency",            d: "Multi-client repos" },
  { v: "platform", l: "Platform team",     d: "Scaling standards" },
] as const;

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<(typeof roles)[number]["v"]>("solo");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [position, setPosition] = useState<number | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("err");
      return;
    }
    try {
      const raw = localStorage.getItem("sanctra-waitlist") ?? "[]";
      const arr: { email: string; role: string; at: number }[] = JSON.parse(raw);
      if (!arr.find((a) => a.email === email)) {
        arr.push({ email, role, at: Date.now() });
      }
      localStorage.setItem("sanctra-waitlist", JSON.stringify(arr));
      setPosition(842 + arr.length);
      setStatus("ok");
    } catch {
      setStatus("ok");
      setPosition(843);
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-lg border border-border bg-card p-8">
        <Pill tone="success" dot>Access requested</Pill>
        <p className="mt-5 font-display text-3xl leading-tight">You're on the list.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Position <span className="font-mono text-foreground">#{position}</span>.
          We'll email <span className="text-foreground">{email}</span> when your workspace
          is ready — usually within two weeks.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {["Repository access", "Stack detection", "First PR"].map((s, i) => (
            <div key={s} className="rounded-md border border-border bg-background p-3">
              <div className="mono-label text-muted-foreground">Step {i + 1}</div>
              <div className="mt-1 text-xs">{s}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-border bg-card p-6 sm:p-8" aria-label="Request access">
      <div className="flex items-center justify-between">
        <div className="mono-label text-muted-foreground">Request access</div>
        <Pill tone="brand" dot>842 in queue</Pill>
      </div>

      <div className="mt-6 space-y-5">
        <label className="block">
          <span className="text-sm font-medium text-foreground">Work email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </label>

        <fieldset className="block">
          <legend className="text-sm font-medium text-foreground">I ship as</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {roles.map((r) => (
              <button
                type="button"
                key={r.v}
                onClick={() => setRole(r.v)}
                aria-pressed={role === r.v}
                className={
                  "group rounded-md border px-3 py-2.5 text-left text-sm transition " +
                  (role === r.v
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-background hover:border-primary/40")
                }
              >
                <span className="font-medium">{r.l}</span>
                <span className="mt-0.5 block text-[11px] text-muted-foreground">{r.d}</span>
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      {status === "err" && (
        <p className="mt-4 text-xs text-destructive">Please enter a valid email address.</p>
      )}

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        Request early access
        <span aria-hidden>→</span>
      </button>

      <p className="mt-4 text-xs text-muted-foreground">
        We'll only email you about your access. No newsletter. Unsubscribe anytime.
      </p>
    </form>
  );
}