# Sanctra Design System

## Brand character

Sanctra is an engineering control plane: dark-first, restrained, precise, calm, and operational. It uses a single gold accent, hard square geometry, hairline borders, technical typography, and motion that explains state. It should never resemble a rounded generic SaaS template.

## Color system

Dark is the default. The primary canvas is `#050505`; surfaces step through `#0A0A0A`, `#0D0D0D`, and `#171717`. Primary text is `#F5F7FA`, secondary text is `#A1A1AA`, and the brand/action color is `#F5B324`. Borders are white at 8% opacity and inputs at 14% opacity.

The opt-in light theme uses `#F7F8FB` for the canvas, white surfaces, `#0F1422` text, `#4A5468` secondary text, and the darker accessible amber `#B77A00`. Borders are `#0F1422` at 10% opacity.

Semantic colors are success `#2EAD78`, warning `#D99A32`, destructive `#D95C5C`, and info `#5B8DEF`. Color must be paired with text, iconography, or shape when it communicates status.

## Typography

- Display: Space Grotesk, weights 400–700. Headings use weight 600 and `-0.02em` tracking.
- UI/body: Inter, weights 400–700, with OpenType features `cv11`, `ss01`, and `ss03`.
- Code/operations: JetBrains Mono, weights 400–700.
- Technical labels: 11px, weight 500, `0.12em` tracking, uppercase.
- Large display text uses fluid `clamp()` sizing rather than fixed desktop values.

Fonts are loaded through `next/font` and exposed as CSS variables to avoid layout shift.

## Geometry and layout

- All corners are square. A global rule enforces `border-radius: 0` even where inherited utility classes name a radius.
- Primary content width: 1280px.
- Horizontal page gutter: 24px.
- Standard section padding: 80px vertically on small screens and 96px from the `md` breakpoint.
- The background grid uses 48px cells and a radial mask.
- Borders are normally 1px hairlines using the semantic border color.
- Elevation is rare. Interactive cards use a small 3px lift and a restrained gold-tinted shadow.

## Surfaces

Use `background` for the page canvas, `card` for contained modules, `surface` for elevated operational regions, and `surface-muted` for quiet secondary regions. Do not introduce glass cards, colorful gradients, or large blur fields except the subtle atmospheric glow already present in hero compositions.

## Components

- Navigation: sticky, translucent dark canvas with backdrop blur and a single bottom hairline. Desktop labels use a clipped hover swap; active routes show gold state.
- Buttons: square, bordered, compact, and mechanical. Primary buttons are solid gold; secondary buttons use a surface and hairline; ghost buttons preserve layout without visible chrome.
- Pills: compact mono labels with a border, tinted surface, and optional status dot.
- Cards: square modules with a hairline border and card surface. Interactive cards may lift by 3px.
- Terminal: near-black `#0B1120` canvas, mono 12.5px type at 1.7 line height, and semantic diff rails.
- Forms: explicit labels, square controls, strong focus rings, and compact explanatory copy.
- Footer: architectural three-column “colonnades,” system-status details, and an oversized ceremonial SANCTRA wordmark.

## Motion language

Motion is calm and diagnostic. Scroll reveal transitions use 800ms with `cubic-bezier(.2,.7,.2,1)` and a 14px vertical distance. Mount rise uses 900ms and 18px. Supporting patterns include scan at 3.4s, pulse at 1.8s, ticker at 40s, marquee at 60s, type-in at 1.2s, and stamp-in at 700ms. Hover transitions generally range from 250–350ms.

Every looping or reveal animation must stop under `prefers-reduced-motion`. Avoid bounce, playful overshoot outside the existing stamp treatment, and decorative motion with no information value.

## Responsive behavior

Tailwind v4 defaults apply: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, and `2xl` 1536px. Navigation changes to a menu below `md`. Major grids generally collapse to one column, then expand at `md` or `lg`. Fluid display type and horizontal overflow containment are mandatory.

## Accessibility

Maintain semantic heading order, visible keyboard focus rings, native controls, descriptive labels, reduced-motion behavior, and AA contrast. Interactive state cannot depend on hover or color alone. Code panes must scroll horizontally instead of shrinking below readable size.

## Do / do not

Do use hard edges, hairlines, calm spacing, code artifacts, system states, repository flows, and one gold accent. Do preserve high information density while keeping hierarchy clear.

Do not add rounded cards, pill-shaped primary buttons, purple AI gradients, mascots, fake dashboards, excessive glassmorphism, or generic stock illustration. Do not replace Space Grotesk, Inter, or JetBrains Mono without a deliberate brand revision.
