import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

gsap.defaults({ ease: 'power2.out', duration: 0.9 })
gsap.ticker.lagSmoothing(0)

export function useScrollAnimations(setup: (container: HTMLElement) => void) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const el = containerRef.current

    const ctx = gsap.context(() => {
      setup(el)
    }, el)

    return () => ctx.revert()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return containerRef
}

export function fadeUp(selector: string, stagger = 0.12, triggerOffset = 'top 85%') {
  return (container: HTMLElement) => {
    const els = container.querySelectorAll(selector)
    if (!els.length) return
    gsap.fromTo(els,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        scrollTrigger: {
          trigger: els[0].closest('section') || els[0],
          start: triggerOffset,
          once: true,
        },
      }
    )
  }
}

export function fadeIn(selector: string, stagger = 0.1, triggerOffset = 'top 85%') {
  return (container: HTMLElement) => {
    const els = container.querySelectorAll(selector)
    if (!els.length) return
    gsap.fromTo(els,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger,
        scrollTrigger: {
          trigger: els[0].closest('section') || els[0],
          start: triggerOffset,
          once: true,
        },
      }
    )
  }
}

export function textReveal(selector: string, stagger = 0.08) {
  return (container: HTMLElement) => {
    const els = container.querySelectorAll(selector)
    if (!els.length) return
    ScrollTrigger.batch(els, {
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 20 },
          {
            clipPath: 'inset(0 0 0% 0)',
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger,
            ease: 'power3.out',
          }
        )
      },
      start: 'top 88%',
      once: true,
    })
  }
}

export function parallax(selector: string, speed = 20) {
  return (container: HTMLElement) => {
    const els = container.querySelectorAll(selector)
    els.forEach(el => {
      gsap.to(el, {
        y: -speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8,
        },
      })
    })
  }
}

export function scaleIn(selector: string, stagger = 0.1) {
  return (container: HTMLElement) => {
    const els = container.querySelectorAll(selector)
    if (!els.length) return
    ScrollTrigger.batch(els, {
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, scale: 0.94 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger,
            ease: 'power2.out',
          }
        )
      },
      start: 'top 88%',
      once: true,
    })
  }
}

export function staggerChildren(selector: string, stagger = 0.06) {
  return (container: HTMLElement) => {
    const parents = container.querySelectorAll(selector)
    parents.forEach(parent => {
      const children = parent.children
      if (!children.length) return
      gsap.fromTo(children,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger,
          scrollTrigger: {
            trigger: parent,
            start: 'top 85%',
            once: true,
          },
        }
      )
    })
  }
}

export function slideInLeft(selector: string, stagger = 0.12) {
  return (container: HTMLElement) => {
    const els = container.querySelectorAll(selector)
    if (!els.length) return
    ScrollTrigger.batch(els, {
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger,
            ease: 'power2.out',
          }
        )
      },
      start: 'top 85%',
      once: true,
    })
  }
}

export function slideInRight(selector: string, stagger = 0.12) {
  return (container: HTMLElement) => {
    const els = container.querySelectorAll(selector)
    if (!els.length) return
    ScrollTrigger.batch(els, {
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger,
            ease: 'power2.out',
          }
        )
      },
      start: 'top 85%',
      once: true,
    })
  }
}

export function refreshScrollTrigger() {
  ScrollTrigger.refresh()
}

export function heroIntro(selector: string, delay = 0.2) {
  return (container: HTMLElement) => {
    const el = container.querySelector(selector)
    if (!el) return

    const heading = el.querySelector('.heading-1')
    const subtitles = el.querySelectorAll('.atf-text-wrapper .heading-2, .atf-block .heading-2')
    const image = el.querySelector('.case-study-cover')

    const tl = gsap.timeline({ delay })

    if (image) {
      tl.fromTo(image,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, ease: 'power2.out' },
        0
      )
    }

    if (heading) {
      tl.fromTo(heading,
        { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 30 },
        { clipPath: 'inset(0 0 0% 0)', opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        0.15
      )
    }

    if (subtitles.length) {
      tl.fromTo(subtitles,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out' },
        0.4
      )
    }
  }
}

export { gsap, ScrollTrigger }
