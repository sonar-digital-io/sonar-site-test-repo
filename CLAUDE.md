# CLAUDE.md

Working context for Claude Code when collaborating on this repo.

## Project

React port of the Sonar Digital marketing site (originally Webflow). The
goal is to preserve the Webflow visual design verbatim while moving the
codebase to React so we can add real interactivity (GSAP animations,
routing, future product widgets) without fighting Webflow.

## Stack

- **React 19** + **react-router-dom 7** (SPA, browser router)
- **Vite 8** + **TypeScript 5.9** (strict, ES2022)
- **GSAP 3** (`gsap` + `ScrollTrigger`) for all motion
- **@splidejs/splide 4** for the home-page service carousel
- **No CSS framework** — the original Webflow CSS (`normalize.css`,
  `webflow.css`, `sonardigital-io.webflow.css`) is served as-is from
  `public/css/` and linked from `index.html`. Do **not** rewrite or
  modularize this CSS unless explicitly asked — the visual identity
  depends on the existing class names matching exactly.

## Layout

```
sona-site/
├── index.html              Vite entry; links the Webflow CSS bundles
├── public/                 Static, served at /
│   ├── css/                The three Webflow stylesheets (do not edit)
│   ├── images/             All site imagery (kept at original paths)
│   ├── fonts/              Webflow-bundled font files
│   └── js/                 Original webflow.js (currently unused)
├── src/
│   ├── main.tsx            React root + BrowserRouter
│   ├── App.tsx             Routes + ScrollToTop + ScrollTrigger reset
│   ├── components/
│   │   ├── Navbar.tsx          Desktop dropdowns + mobile accordion
│   │   ├── Footer.tsx
│   │   ├── Button.tsx          base/dark variants, internal/external
│   │   ├── CTABlock.tsx        Reused on most pages
│   │   ├── CaseStudyCard.tsx   The link-card + thumb pair
│   │   ├── LabPromoSection.tsx Dark "We also have a X Lab" block
│   │   └── LabPage.tsx         Shared shell for the four Lab pages
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── DiscoveryLab.tsx / DesignLab.tsx / SoftwareLab.tsx / GrowthLab.tsx
│   │   ├── MedtechCaseStudy.tsx
│   │   ├── YuspDataFlowEditor.tsx
│   │   ├── YuspifySaasAdmin.tsx
│   │   ├── ScaleplexBrandIdentity.tsx
│   │   └── RapidsearchCaseStudy.tsx
│   └── hooks/
│       ├── useGsap.ts                Animation primitives (see below)
│       ├── useLabPageAnimations.ts   Preset bundle for Lab pages
│       └── useCaseStudyAnimations.ts Preset bundle for case studies
└── legacy/                 The original Webflow HTML, kept for reference
```

## Commands

```powershell
npm install        # install deps
npm run dev        # Vite dev server on http://localhost:5173
npm run build      # tsc -b && vite build → dist/
npm run preview    # serve the production build
```

There is no test runner or linter wired up beyond TypeScript itself
(`npx tsc --noEmit -p tsconfig.app.json`).

## Routing

All routes live in `src/App.tsx`. URL paths intentionally mirror the
old `.html` filenames minus the extension, so old marketing links keep
working:

| Route                       | Page                       |
|-----------------------------|----------------------------|
| `/`                         | Home                       |
| `/about`                    | About                      |
| `/discovery-lab`            | DiscoveryLab               |
| `/design-lab`               | DesignLab                  |
| `/software-lab`             | SoftwareLab                |
| `/growth-lab`               | GrowthLab                  |
| `/medtech-case-study`       | MedtechCaseStudy           |
| `/yusp-data-flow-editor`    | YuspDataFlowEditor         |
| `/yuspify-saas-admin`       | YuspifySaasAdmin           |
| `/scaleplex-brand-identity` | ScaleplexBrandIdentity     |
| `/rapidsearch-case-study`   | RapidsearchCaseStudy       |

`ScrollToTop` in `App.tsx` resets scroll position **and** kills all
`ScrollTrigger` instances on every route change — without that, stale
triggers cause flickering and incorrect animations after navigation.

## Animation system

All motion comes through one container hook. Pattern:

```tsx
import { useScrollAnimations, fadeUp, textReveal } from '../hooks/useGsap'

export default function MyPage() {
  const containerRef = useScrollAnimations((container) => {
    textReveal('.heading-2')(container)
    fadeUp('.chip', 0.08, 'top 90%')(container)
  })
  return <div ref={containerRef}>...</div>
}
```

`useScrollAnimations` wraps a `gsap.context` scoped to the container, so
every selector is resolved relative to that container and all tweens
are reverted on unmount — safe under React 19 StrictMode double-mount.

**Available primitives** (all in `src/hooks/useGsap.ts`):

- `fadeUp(selector, stagger, triggerOffset)` — y:30 → 0, opacity 0 → 1
- `fadeIn(selector, stagger, triggerOffset)` — opacity only
- `textReveal(selector, stagger)` — clip-path mask wipe + tiny rise
- `scaleIn(selector, stagger)` — scale 0.94 → 1 with fade
- `staggerChildren(selector, stagger)` — animates direct children
- `slideInLeft/Right(selector, stagger)` — x:±40 → 0
- `parallax(selector, speed)` — gentle scrub on scroll
- `heroIntro(selector, delay)` — non-scroll timeline (image + heading
  clip-path + subtitle stagger) that plays on mount

**Preset bundles**:
- `labPageAnimations` (`useLabPageAnimations.ts`) — applied via
  `LabPage` so all four Lab pages animate identically.
- `caseStudyAnimations` (`useCaseStudyAnimations.ts`) — applied in
  every case-study page directly.

**When adding a new page**: pick a preset bundle if it fits, otherwise
compose primitives inside `useScrollAnimations`. Always rely on
`gsap.fromTo` (the primitives already do this) so re-runs and StrictMode
double-mounts don't leave elements in an interim state.

## Component conventions

- **Webflow classes are sacred** — `w-container`, `w-layout-vflex`,
  `w-layout-blockcontainer`, `chip`, `heading-1..6`, `paragraph-large`,
  `cta-block`, `unit-hero`, `dual-grid`, etc. all map to selectors in
  the Webflow CSS. Don't rename them, don't normalize them, don't
  combine them — animation selectors and visual styling both depend on
  these literal class names.
- **Buttons** always go through `<Button>` so the dark/base variant
  classes (`w-variant-93bbec15-...`) stay consistent.
- **External links** use a plain `<a>` (via `external` prop on Button);
  internal links use `<Link>` from `react-router-dom`.
- **Images** live under `/images/...` (served from `public/images/`).

## Branch / commit conventions

- `main` is the deployable trunk.
- Feature work goes on a branch and merges with `--no-ff` so the merge
  commit captures the scope (e.g. `Merge branch 'initial-animations'`).
- Git branch names cannot contain spaces — use hyphens
  (`initial-animations`, not `initial animations`).

## When in doubt

- The original Webflow HTML for every page is preserved under
  `legacy/`. If a section's styling or class structure is unclear, diff
  against the relevant `legacy/*.html` file — that's the source of
  truth for visual fidelity.
- The animation patterns were ported from
  `C:\code\sonar-frontend-experiments\sonar-react` — that's the
  reference for "how should motion feel on this brand".
