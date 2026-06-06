# Design System

Visual and motion language for the Sonar Digital site. The static
visual identity comes from the original Webflow design and is shipped
unchanged in `public/css/sonardigital-io.webflow.css`; this document
describes how to read and reuse that system from React.

## Brand

**Sonar Digital** — a boutique innovation lab. The product proposition
is "discovery → design → development → growth", expressed as four Labs.
The visual tone is calm, technical, slightly editorial — dark hero
backgrounds with vivid accent colors, generous typography, and motion
that reveals rather than performs.

## Color tokens

Defined as CSS custom properties on `:root` in
`sonardigital-io.webflow.css`. Use the variables, not raw hex.

| Token                    | Hex       | Role                              |
|--------------------------|-----------|-----------------------------------|
| `--_colors---dark`       | `#030e23` | Primary dark surface, dark text   |
| `--_colors---white`      | `#ffffff` | Light surface, inverted text      |
| `--_colors---blue`       | `#3f69dc` | Brand accent, name highlights     |
| `--_colors---green`      | `#57fdd4` | CTA accent, "Contact Us" chip     |
| `--_colors---intense`    | `#2f00ff` | Heavy accent (sparingly)          |
| `--_colors---gray`       | `#e9edf2` | Section background `.section.gray`|
| `--_colors---pale`       | `#ccf6ff` | Soft cyan tint                    |
| `--_colors---scalelab`   | `#f5f2ef` | Scaleplex case study surface      |
| `--_colors---yfy`        | `#e9eef6` | Yuspify case study surface        |

## Typography

- **Heading face**: `DM Sans` (set as `--_fonts---primary-font` and
  `--_fonts---secondary-font`). Webflow also loads `Montserrat` for
  legacy elements.
- **Icon face**: `Material Symbols Sharp` — used as plain text content
  (`<div className="icon">arrow_forward</div>`), not as an SVG sprite.

Font-size tokens:

| Token                              | Size  | Used as          |
|------------------------------------|-------|------------------|
| `--_fonts---headline`              | 92px  | Hero h1          |
| `--_fonts---h1`                    | 64px  | `.heading-1`     |
| `--_fonts---h2`, `--_fonts---h3`   | 48px  | `.heading-2/3`   |
| `--_fonts---h4`                    | 38px  | `.heading-4`     |
| `--_fonts---h5`                    | 28px  | `.heading-5`     |
| `--_fonts---h6`                    | 24px  | `.heading-6`     |
| `--_fonts---paragraph-large`       | 20px  | `.paragraph-large` |
| `--_fonts---paragraph-medium`      | 16px  | `.paragraph-normal`|
| `--_fonts---paragraph-small`       | 12px  | tags, captions   |

The site has only one font weight system — semantic class
(`heading-1` through `paragraph-small`) carries the size, weight, and
letter-spacing together. Don't apply ad-hoc `font-size` inline.

## Spacing

A coarse, Webflow-style spacing scale exposed as utility tokens. Used
mostly as spacer `<div>`s between sections to maintain rhythm.

| Token                       | Size  | Helper class      |
|-----------------------------|-------|-------------------|
| `--_sizes---gap-1` .. `gap-3` | 2/4/8 px | (inline tweaks) |
| `--_sizes---gap-4`          | 16px  | `space-16`        |
| `--_sizes---gap-5`          | 24px  | `space-24`        |
| `--_sizes---gap-6`          | 32px  | (inline)          |
| `--_sizes---gap-7`          | 48px  | `space-48`        |
| `--_sizes---gap-8`          | 62px  | (inline)          |
| `--_sizes---gap-9`          | 72px  | (inline)          |
| `--_sizes---gap-10`         | 82px  | `space-82`        |

Layout tokens:

- `--_sizes---container-large` = `1400px`
- `--_sizes---container-small` = `1200px`
- `--_sizes---menu-height` = `100px`
- `--_sizes---mobile-menu-height` = `82px`
- `--_sizes---atf-upper-padding` = `148px`
- `--_sizes---br-large` = `16px` (default rounded radius)

## Component inventory

All components live under `src/components/` and assume the Webflow CSS
is loaded.

### `Button`
Two variants. `base` = light pill, `dark` = solid dark pill (used on
dark backgrounds). Always includes a leading text part and a trailing
`arrow_forward` icon part. `external` (or any `http`-prefixed `href`)
renders an `<a>`; otherwise a react-router `<Link>`.

```tsx
<Button text="Learn more" href="/design-lab" variant="dark" />
<Button text="Book a call" href={URL} variant="dark" external />
```

### `Navbar`
Sticky top bar with two desktop dropdowns (Services, Case studies),
About link, and a `Book a call` CTA. Mobile collapses to a clip-path
revealed accordion. Animates in on mount; mobile menu open/close uses
a clip-path wipe (see `Animation language` below).

### `Footer`
Single-row centered footer with logo + copyright. Fades up on enter.

### `CTABlock`
The "Are you ready to level up?" panel that closes most pages. Takes
an optional `title` prop so individual pages can specialize the
headline (e.g. "Are you facing similar challenges?"). Holds two
"Intro call" / "Discovery call" link cards that book external Google
Calendar URLs.

### `CaseStudyCard`
Two-column "link-card + thumbnail" grid used on Home, About, and the
Lab pages to surface case studies.

### `LabPromoSection`
The dark-background block that lives at the bottom of each Lab page
(and on case studies) — "We also have a X Lab" + bullet list + CTA.
The `backgroundClass` prop chooses the imagery (`discovery-background`,
`design-background`, `software-background`, `growth-background`).

### `LabPage` (template, not a route)
Shared shell for the four Lab pages. Takes a structured props payload
(hero copy, six "helps with" bullets, why-section, optional case
study + centered image, methodology + process tags, expert card, and
the next-lab promo block) and renders the standard Lab layout. Adding
a new Lab is purely a data change in a new page file.

## Page templates

Two templates cover most of the site:

1. **Lab page** — hero with image + headline + tagline → impact list →
   "why X" prose → optional case study + full-width image → methodology
   box with process tag chain + expert card → next-lab promo →
   `CTABlock`. Implemented by `LabPage`.
2. **Case study page** — narrow hero with headline + thumbnail → about
   the client → numbered chapters of prose paragraphs alternating with
   thumbs → optional `LabPromoSection` blocks → key results grid →
   `CTABlock`. Animations come from `caseStudyAnimations`.

Home and About are bespoke: Home leads with a Splide-powered service
carousel and two case-study cards; About has the "We are…" impact list
and a team grid.

## Decorative classes worth knowing

- `.chip` (`.chip.green`, `.chip.purple`) — small rounded tag above
  section titles.
- `.heading-1.highlight` / `.heading-2.highlight` — sets headline color
  to the page-local accent (dark on light surfaces).
- `.dual-grid`, `.dual-grid-2`, `.dual-grid-5` — two-column section
  bodies with varying gap/alignment defaults.
- `.section.gray`, `.section.blue`, `.section.dark` — section
  background variants.
- `.unit-hero` — full-bleed hero used by Home and the Lab pages.
- `.above-the-fold`, `.above-the-fold-2`, `.case-study-hero` — hero
  variants for case studies.
- `.decor-on-image` — the inset card-on-image used by `LabPromoSection`.
- `.results-grid`, `.results-grid-2`, `.results-grid-3` — case study
  metrics grids (3, 4, and 4-up).

## Animation language

Motion is part of the design, not an after-effect. Every page wires
animations through `useScrollAnimations` from `src/hooks/useGsap.ts`.
Five recurring gestures define the brand's motion vocabulary:

| Gesture       | Where it fires                                | Feel        |
|---------------|-----------------------------------------------|-------------|
| `heroIntro`   | Every hero on mount (image + headline + sub)  | One-shot reveal |
| `textReveal`  | `heading-2` headlines as they enter view      | Clip-path wipe up |
| `fadeUp`      | Chips, paragraphs, link-cards                 | Subtle rise |
| `scaleIn`     | Full-width images, lightbox thumbs, bento     | Gentle pop  |
| `parallax`    | Hero cover images                             | Slow drift  |

Plus two structural helpers:

- `staggerChildren` — used on lists (`impact-listing`, `results-grid`,
  `team-wrapper`) so siblings cascade in sequence.
- `heroIntro` is *not* scroll-triggered — it plays once on mount with
  a small delay, so the first paint feels intentional.

**Duration defaults** (set on `gsap.defaults`): `0.7–1.4s` per tween,
`power2.out` / `power3.out` easing. Once is once — every scroll
animation runs with `once: true`, so the page doesn't replay motion
on scroll-back.

**ScrollTrigger lifecycle**: `App.tsx` calls
`ScrollTrigger.getAll().forEach(t => t.kill())` on every route change.
That's necessary because mounted-and-still triggers from the previous
route otherwise fire against the new DOM.

### How to extend the motion

- Match an existing pattern when adding new sections — pick the
  closest gesture from the table above. Consistency is the point.
- Need something new? Add a primitive factory to `useGsap.ts` next to
  `fadeUp`/`scaleIn`/etc. Keep the API
  `(selector, stagger?, triggerOffset?) → (container) => void` so it
  composes inside `useScrollAnimations`.
- Avoid `gsap.set(...).to(...)` chains — they leave elements in an
  interim state if the hook re-runs (StrictMode). Use `gsap.fromTo`
  with explicit `from` and `to` like the existing primitives.

## What not to do

- **Don't restyle from scratch.** The Webflow CSS is the design.
  Adding Tailwind, CSS-in-JS, or scoped CSS modules will fragment the
  visual language. If a tweak is needed, prefer a small override in a
  new global CSS file loaded *after* the Webflow bundle.
- **Don't rename Webflow class names.** Both styling and animation
  selectors depend on the literal `chip`, `heading-2`, `unit-hero`,
  `case-study-cover`, etc.
- **Don't inline GSAP in components.** Always go through
  `useScrollAnimations` so triggers participate in the `gsap.context`
  cleanup. The one exception is `Navbar`, which uses raw `gsap` for
  the mount-and-menu animations that aren't scroll-driven.
