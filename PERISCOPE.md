# Periscope prep — `static-site` branch audit

Run per site-standard §12. No fixes applied here; each FAIL names
`file:line` + smallest fix.

## Structure

| Check | Result | Fix |
|---|---|---|
| Plain HTML/CSS/JS, no framework/bundler | PASS | — |
| Layout matches §2 | FAIL | `css/style.css` → `css/main.css`; missing `tests/pages.json`, `tests/css-checks.mjs`, `pointer.config.json`, `design.md`, `CLAUDE.md` |
| Two stylesheets per page, main.css first | FAIL | `index.html:7` links only one sheet; split into `css/main.css` (tokens+shared) + `css/index.css`, link main first |
| No inline `<style>` / `style=""` / `<script>` | PASS | — |
| No 2+-page component in page CSS | N/A | single page |

## Tokens & CSS

| Check | Result | Fix |
|---|---|---|
| One `:root`, no raw hex outside it | FAIL | `css/style.css:5,74-76,82` raw hex (`#0a0a0a`, `#222`, `#eee`, `#444`, `#333`) — move to `:root` as `--bg`, `--replay-bg`, `--replay-fg`, `--replay-border`, `--replay-bg-hover` |
| Every `var()` resolves; traceable to `design.md` | FAIL | zero tokens exist; `design.md` missing |
| No `@import`; sheet real under `css/` | PASS | — |
| Class names greppable/unique/flat, no nesting | PASS | — |
| No Tailwind utility prefix (`text-`, `flex`, `grid`, `bg-`, …) | PASS | — |
| Every styled element has a class | PASS (body is a landmark exception) | — |
| Component child unique among siblings | PASS | each `cp-*` unique |
| Component root's FIRST class = block name | PASS | `comp-piece` first on every img |
| One base = one axis | PASS | no modifier syntax used |
| No page CSS restating wrapper width; every wrapper is `container` | FAIL | `css/style.css:14-18` `.composition` sets its own width — no `.container` system exists; introduce `container` + `--container-max` token, let the composition size by distribution |
| **No flex/grid child in `px` unless `position:absolute\|fixed` or intrinsic** (icon/avatar/44px target) | PASS | `.comp-piece:22` uses `33.31%` — distribution-based |
| Flex 1D, grid only 2D, `minmax(0, ...)` | PASS | no grid used |

## HTML & SEO

| Check | Result | Fix |
|---|---|---|
| Head matches §5 template | FAIL | `index.html:3-8` missing description, canonical, og:*, twitter:card, favicon, apple-touch-icon; title `"Cover composition"` should be `"Page - Brand"` |
| Unique title + description per page | FAIL | `index.html:6` no description; add unique ≤155-char one |
| Canonical/OG/twitter/favicon/apple-touch-icon | FAIL | all missing; add per §5 |
| One `<h1>`, one `<main>`, `lang`, landmarks | FAIL | `index.html:9-32` no `<h1>`, no `<main>`, no `<header>`/`<footer>`; wrap composition in `<main>`, add an `<h1>` (sr-only if design forbids visible) |
| `hreflang` if multilingual | N/A | — |

## Routing

| Check | Result | Fix |
|---|---|---|
| Clean URLs on, no `.html` in links, trailingSlash consistent | N/A | no host config yet; add `vercel.json` with `cleanUrls: true`, `trailingSlash: false` before deploy |
| Styled `404.html`; redirects | FAIL | `404.html` missing |

## Assets

| Check | Result | Fix |
|---|---|---|
| WebP/SVG only, downscaled | FAIL | `images/*.png` (14 files) — convert to `.webp` and downscale to display size (~800px wide max), update `src=` refs in `index.html:13-28` |
| Every `<img>` has `width`, `height`, `alt`; below-fold `loading="lazy"` | FAIL | `index.html:13-28` all 14 imgs lack `width`/`height` → layout shift; add intrinsic px dims |
| Fonts self-hosted woff2, `swap` | PASS | system-ui stack, no web fonts |
| Icons inline SVG or self-hosted | PASS | no icons |

## Accessibility

| Check | Result | Fix |
|---|---|---|
| Keyboard-complete, visible `:focus-visible` ring | FAIL | `css/style.css:70-82` `.replay` relies on UA default; add `.replay:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }` |
| Contrast ≥4.5:1 body / 3:1 large | PASS | `#eee` on `#222` ≈ 14:1 |
| Real `<label>` per input | N/A | — |
| Touch target ≥44px; `aria-label` on icon-only buttons | FAIL | `css/style.css:78` `.replay` padding likely under 44px; add `min-height: 44px; min-width: 44px` |
| `prefers-reduced-motion` honoured | FAIL | `css/style.css:31-68` motion always runs; wrap piece animation in `@media (prefers-reduced-motion: no-preference)` or force final state under `reduce` |

## Verification

| Check | Result | Fix |
|---|---|---|
| `node tests/css-checks.mjs` passes | FAIL | `tests/css-checks.mjs` missing; seed from `C:\code\iconplc-site\tests\css-checks.mjs` |
| `layout-audit.html` clean 375/768/1280 | FAIL | `tests/layout-audit.html` missing |
| Lighthouse mobile ≥90 perf / 100 a11y, recorded | FAIL | no baseline recorded |

## Launch gate

| Check | Result | Fix |
|---|---|---|
| `robots.txt` not `Disallow: /` | FAIL | file missing |
| `X-Robots-Tag: noindex` removed | N/A | no host config yet |
| Canonical/OG point at prod domain | FAIL | tags missing entirely |
| Analytics + cookie notice | FAIL | none |
| Forms deliver + verified end-to-end | N/A | no forms |
| `sitemap.xml` present, referenced from robots.txt | FAIL | missing |

## Project CLAUDE.md

| Check | Result | Fix |
|---|---|---|
| Under ~250 lines, no rotting numbers, contains §3+§4+verify cmd | FAIL | `CLAUDE.md` deleted on this branch; author a fresh one for the static site |

---

**Blocker count:** 20 FAIL.

**Nearest to standard (one commit closes 5 FAILs):** rename `style.css` → `main.css`, add `:root` tokens for the 5 hex values, add `<meta description>` + landmarks + `prefers-reduced-motion` wrap.

**Highest leverage next:** seed `tests/css-checks.mjs` + `tests/pages.json` from iconplc — every subsequent fix becomes verifiable, and the checker will find drift for you.

## Suggested new §12 line (not yet in the standard)

> **No flex/grid child declared in `px`** (`width:`, `flex-basis: <px>`, `min-width: <px>`) unless `position: absolute|fixed` OR intrinsic (icon/avatar/44px touch target). Rationale: 4-item flex row on a 1200px container is `25%`/`1fr`, not `400px`; the pixel value silently breaks when the container width changes.
