import { heroIntro, textReveal, fadeUp, scaleIn, staggerChildren, parallax } from './useGsap'

export function caseStudyAnimations(container: HTMLElement) {
  const heroEl = container.querySelector('.unit-hero, .above-the-fold, .above-the-fold-2, .case-study-hero')
  if (heroEl) {
    heroIntro('.unit-hero, .above-the-fold, .above-the-fold-2, .case-study-hero', 0.1)(container)
  }

  parallax('.case-study-cover, .case-study-cover.absolute', 20)(container)
  fadeUp('.chip', 0.08, 'top 90%')(container)
  fadeUp('.dual-grid .heading-2, .dual-grid-2 .heading-2, .dual-grid-5 .heading-2, .dual-grid h1', 0.12)(container)
  fadeUp('.dual-grid .paragraph-large, .dual-grid-2 .paragraph-large, .dual-grid-5 .paragraph-large', 0.08, 'top 82%')(container)
  scaleIn('.full-width-image')(container)
  staggerChildren('.results-grid, .results-grid-2, .results-grid-3', 0.1)(container)
  fadeUp('.key-results .heading-2, .key-results h1', 0.1)(container)
  fadeUp('.decor-on-image .chip', 0.1)(container)
  textReveal('.decor-on-image .heading-2')(container)
  staggerChildren('.decor-on-image .list', 0.08)(container)
  scaleIn('.lightbox-thumb, .lightbox-images-2 img', 0.12)(container)
  scaleIn('.scaleplex-bento-block-1 img, .main-bento-wrapper-2 img, .dfe-bento-wrapper-1 img', 0.1)(container)
  fadeUp('.half-block', 0.12)(container)
  fadeUp('.section-title', 0.1)(container)
}
