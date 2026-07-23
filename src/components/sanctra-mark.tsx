import { cn } from "@/lib/utils";

/**
 * Sanctra brand mark — a monogrammed square with the "S" letterform.
 * Reusable across nav, footer, empty states, and doc headers.
 */
export function SanctraMark({
  size = 32,
  className,
  showWord = false,
}: {
  size?: number;
  className?: string;
  showWord?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        style={{ width: size, height: size }}
        className="relative inline-flex items-center justify-center rounded-md border border-primary/60 bg-primary/10 text-primary"
      >
        <svg viewBox="0 0 32 32" className="h-[65%] w-[65%]" fill="none">
          <path
            d="M22 9.5c-1.6-1.7-4-2.5-6.5-2.5-3.9 0-6.5 2-6.5 4.8 0 2.4 1.7 3.6 5.6 4.4l2 .4c3 .6 4.1 1.4 4.1 3 0 1.9-1.8 3.1-4.6 3.1-2.6 0-4.7-.9-6.6-2.9"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
        <span className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-primary/20" />
      </span>
      {showWord && (
        <span className="font-display text-lg tracking-tight">
          Sanctra
        </span>
      )}
    </span>
  );
}
