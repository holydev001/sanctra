# TanStack to Next.js Migration Notes

## Route mapping

- `/` → `src/app/page.tsx`
- `/how-it-works` → `src/app/how-it-works/page.tsx`
- `/integrations` → `src/app/integrations/page.tsx`
- `/security` → `src/app/security/page.tsx`
- `/roadmap` → `src/app/roadmap/page.tsx`
- `/docs` → `src/app/docs/page.tsx`
- `/waitlist` → `src/app/waitlist/page.tsx`
- generated TanStack sitemap → `src/app/sitemap.ts`

## Framework decisions

TanStack Router links were replaced by Next `Link`; navigation active state now comes from `usePathname`. TanStack route head declarations moved to the App Router metadata foundation. Google font stylesheets were replaced with `next/font` while preserving Space Grotesk, Inter, and JetBrains Mono. The TanStack root shell became `src/app/layout.tsx`; the original 404 design became `not-found.tsx`.

The current pages remain client components because the source uses intersection-observer reveals and local interaction state. Static subtrees can be separated into server components later without changing visuals.

## Fidelity statement

Page order, copy, CSS variables, color values, type hierarchy, global square corners, component proportions, responsive breakpoints, and animation definitions were carried over. No intentional product redesign was performed.

## Known product follow-up

The waitlist form intentionally retains the prototype’s browser-local behavior for visual fidelity. Before production launch, replace it with a server-side adapter and real persistence, remove synthetic queue-position copy, and review all security/availability claims. These are product/data changes, not migration requirements.
