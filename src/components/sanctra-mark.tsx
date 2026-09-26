import { cn } from "@/lib/utils";

/**
 * Sanctra brand mark supplied by the brand team. Each asset is named for the
 * surface it belongs on, and switches with the site theme to retain contrast.
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
        className="inline-flex shrink-0"
      >
        {/* The original SVGs contain the approved raster-backed logo artwork. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/sanctra-logo-on-light.svg"
          alt=""
          className="h-full w-full object-contain dark:hidden"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/sanctra-logo-on-dark.svg"
          alt=""
          className="hidden h-full w-full object-contain dark:block"
        />
      </span>
      {showWord && (
        <span className="font-display text-lg tracking-tight">
          Sanctra
        </span>
      )}
    </span>
  );
}
