export const designTokens = {
  colors: {
    dark: { background: "#050505", foreground: "#F5F7FA", surface: "#0D0D0D", surfaceMuted: "#171717", card: "#0A0A0A", primary: "#F5B324", mutedForeground: "#A1A1AA" },
    light: { background: "#F7F8FB", foreground: "#0F1422", surface: "#FFFFFF", surfaceMuted: "#EEF1F6", card: "#FFFFFF", primary: "#B77A00", mutedForeground: "#4A5468" },
    semantic: { success: "#2EAD78", warning: "#D99A32", destructive: "#D95C5C", info: "#5B8DEF" },
  },
  typography: {
    families: { display: "Space Grotesk", sans: "Inter", mono: "JetBrains Mono" },
    weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
    displayTracking: "-0.02em",
    monoLabel: { size: "11px", weight: 500, tracking: "0.12em", transform: "uppercase" },
  },
  layout: { maxWidth: "1280px", pageGutter: "1.5rem", sectionY: { mobile: "5rem", desktop: "6rem" }, grid: "48px" },
  radii: { global: "0px" },
  motion: {
    reveal: { duration: "800ms", easing: "cubic-bezier(.2,.7,.2,1)", distance: "14px" },
    rise: { duration: "900ms", easing: "cubic-bezier(.2,.7,.2,1)", distance: "18px" },
    ticker: "40s linear infinite",
    marquee: "60s linear infinite",
    scan: "3.4s ease-in-out infinite",
  },
  breakpoints: { sm: "40rem", md: "48rem", lg: "64rem", xl: "80rem", twoXl: "96rem" },
} as const;
