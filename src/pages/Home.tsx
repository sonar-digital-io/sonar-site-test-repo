import { useEffect, useRef } from 'react'
import Button from '../components/Button'
import CaseStudyCard from '../components/CaseStudyCard'
import CTABlock from '../components/CTABlock'

export default function Home() {
  const splideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let splideInstance: any = null
    const loadSplide = async () => {
      const { default: Splide } = await import('@splidejs/splide')
      // @ts-ignore
      await import('@splidejs/splide/dist/css/splide-core.min.css')
      if (splideRef.current) {
        splideInstance = new Splide(splideRef.current, {
          perPage: 3, perMove: 1, focus: 0, type: 'slide', gap: '16px',
          arrows: 'slider' as any, pagination: 'slider' as any, speed: 600,
          dragAngleThreshold: 30, autoWidth: false, rewind: false, rewindSpeed: 400,
          waitForTransition: false, updateOnMove: true, trimSpace: false,
          breakpoints: {
            991: { perPage: 2, gap: '16px' },
            767: { perPage: 1, gap: '16px' },
            479: { perPage: 1, gap: '16px' },
          }
        })
        splideInstance.mount()
      }
    }
    loadSplide()
    return () => { splideInstance?.destroy() }
  }, [])

  const services = [
    { num: '01', name: 'Discovery lab', desc: 'We make sure you solve the right problem. Market or user needs to generate revenue or internal processes to make life easier.', href: '/discovery-lab' },
    { num: '02', name: 'Design lab', desc: 'We help you solve the problem the way people need it: new products, new services, or new business models.', href: '/design-lab' },
    { num: '03', name: 'Software lab', desc: 'We turn concepts into products by shipping the entire stack: architecture, frontend, backend, and infrastructure.', href: '/software-lab' },
    { num: '04', name: 'Growth lab', desc: 'We make sure you solve the problem for more people. We refine your go-to-market, sales, and commercial organisation.', href: '/growth-lab' },
  ]

  return (
    <div>
      <section className="unit-hero">
        <img
          src="/images/sonar-homepage-illustration.png"
          loading="lazy"
          alt=""
          className="case-study-cover absolute"
        />
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-vflex atf-block homepage">
            <h1 className="heading-1 white">Turn problems <br />into experiences that matter</h1>
          </div>
        </div>
        <div className="w-layout-blockcontainer container w-container"></div>
      </section>

      <section className="section blue">
        <div className="w-layout-blockcontainer container w-container">
          <div className="space-48"></div>
          <h1 className="heading-2 white">We are a boutique innovation lab creating experiences that matter. We use discovery, design, development, and growth to turn any challange into a growing business.</h1>
          <div className="space-82"></div>
          <div className="splide slider1" ref={splideRef}>
            <div className="splide__track" style={{ overflow: 'visible' }}>
              <div className="splide__list">
                {services.map(s => (
                  <div key={s.num} className="splide__slide">
                    <div className="service-card-swiper light">
                      <p className="paragraph-large">serivce<br />{s.num}</p>
                      <div className="text-wrapper">
                        <div className="w-layout-vflex">
                          <p className="heading-5">{s.name}</p>
                        </div>
                        <p className="paragraph-large">{s.desc}</p>
                        <Button text="Learn more" href={s.href} variant="dark" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev"></button>
              <button className="splide__arrow splide__arrow--next"></button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-porfolio">
        <section className="section">
          <div className="w-layout-blockcontainer container narrow w-container">
            <div className="w-layout-vflex section-title centered">
              <div className="w-layout-vflex chip purple">
                <h4 className="paragraph-normal">case studies</h4>
              </div>
              <h2 className="heading-2 centered dark">Our work</h2>
            </div>
            <CaseStudyCard
              title='New product cutting integration time from months to minutes'
              description='Learn how we turned Yusp&apos;s abstract integration "black box" into a visual mindmap that clients, managers, and engineers alike can understand. Discover how this drag-and-drop editor cut integration time from months to minutes.'
              buttonHref="/yusp-data-flow-editor"
              imageSrc="/images/yusp-data-scaling.avif"
            />
          </div>
        </section>
        <section className="section">
          <div className="w-layout-blockcontainer container narrow w-container">
            <CaseStudyCard
              title="Cold outreach resulting in 4 closed deals for a Medtech company"
              description="Learn how we repositioned a promising but feature-heavy Medtech product as a simple, cloud-based, scalable framework. Discover why our cold outreach to 300+ decision-makers achieved 3x industry engagement and 4 closed deals."
              buttonHref="/medtech-case-study"
              imageSrc="/images/funnel-small.png"
            />
          </div>
        </section>
      </section>

      <CTABlock />
    </div>
  )
}
