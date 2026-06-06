import { heroIntro, fadeUp, staggerChildren, parallax, scaleIn } from './useGsap'

export function labPageAnimations(container: HTMLElement) {
  heroIntro('.unit-hero', 0.1)(container)
  parallax('.case-study-cover.absolute', 20)(container)
  staggerChildren('.impact-listing', 0.06)(container)
  fadeUp('.dual-grid .heading-2', 0.12)(container)
  fadeUp('.dual-grid .paragraph-large', 0.08, 'top 82%')(container)
  scaleIn('.full-width-image', 0.1)(container)
  fadeUp('.methodology-box', 0.1)(container)
  fadeUp('.link-card.no-border', 0.1, 'top 82%')(container)
  fadeUp('.chip', 0.08, 'top 90%')(container)
  staggerChildren('.process', 0.04)(container)
}
