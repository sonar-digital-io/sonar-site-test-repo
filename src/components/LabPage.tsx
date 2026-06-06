import Button from './Button'
import CTABlock from './CTABlock'
import CaseStudyCard from './CaseStudyCard'

export interface LabPageProps {
  labName: string
  tagline: string
  heroImage: string
  helpsWithTitle: string
  helpsWithItems: string[]
  whyTitle: string
  whyContent: React.ReactNode
  caseStudy?: {
    title: string
    description: string
    buttonHref: string
    imageSrc: string
  }
  centeredImage?: { src: string; className?: string }
  methodologyTitle?: string
  methodologyContent: React.ReactNode
  processItems: string[]
  expertChip: string
  expertImage: string
  expertName: string
  expertBio: React.ReactNode
  promoChip: string
  promoTitle: React.ReactNode
  promoItems: string[]
  promoButtonHref: string
  promoBackgroundClass: string
  ctaTitle: React.ReactNode
}

export default function LabPage(props: LabPageProps) {
  return (
    <div>
      <section className="unit-hero">
        <img src={props.heroImage} loading="lazy" alt="" className="case-study-cover absolute" />
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-vflex atf-block">
            <div className="w-layout-vflex atf-text-wrapper half-width dark-text">
              <h1 className="heading-1 highlight">{props.labName}</h1>
              <h1 className="heading-2 highlight">{props.tagline}</h1>
              <div className="w-layout-vflex">
                <div className="space-24"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer container w-container">
          <h1 className="heading-2 highlight">{props.helpsWithTitle}</h1>
          <div className="space-48"></div>
          <div className="w-layout-vflex impact-listing">
            {props.helpsWithItems.map(item => (
              <div key={item} className="w-layout-vflex impact-blocks">
                <div className="point"></div>
                <h4 className="paragraph-large">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="space-82 gray"></div>

      <section className="section gray">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="dual-grid">
            <h1 className="heading-2">{props.whyTitle}</h1>
            <p className="paragraph-large">{props.whyContent}</p>
          </div>
        </div>
      </section>

      <div className="space-82 gray"></div>

      {props.caseStudy && (
        <>
          <section className="section gray">
            <div className="w-layout-blockcontainer container narrow w-container">
              <CaseStudyCard
                title={props.caseStudy.title}
                description={props.caseStudy.description}
                buttonHref={props.caseStudy.buttonHref}
                imageSrc={props.caseStudy.imageSrc}
              />
            </div>
          </section>
          <div className="space-82 gray"></div>
        </>
      )}

      {props.centeredImage && (
        <>
          <section className="section gray">
            <div className="w-layout-blockcontainer container narrow w-container">
              <div className={`w-layout-vflex ${props.centeredImage.className || 'cenered-image-wrapper'}`}>
                <img sizes="100vw" alt="" src={props.centeredImage.src} loading="lazy" className="full-width-image" />
              </div>
            </div>
          </section>
          <div className="space-82 gray"></div>
        </>
      )}

      <section className="section gray">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="dual-grid">
            <div className="w-layout-vflex methodology-box">
              <h1 className="heading-2">{props.methodologyTitle || "What's the methodology?"}</h1>
              <div className="space-82-copy"></div>
              <p className="paragraph-large">{props.methodologyContent}</p>
              <div className="space-82-copy"></div>
              <div className="process">
                {props.processItems.map((p, i) => (
                  <span key={p} style={{ display: 'contents' }}>
                    <a href="#" className="tag-normal">
                      <div className="text-13">{p}</div>
                    </a>
                    {i < props.processItems.length - 1 && <div className="tag-icon">arrow_forward</div>}
                  </span>
                ))}
              </div>
            </div>
            <div className="link-card no-border">
              <div className="w-layout-vflex chip">
                <h4 className="paragraph-normal">{props.expertChip}</h4>
              </div>
              <img src={props.expertImage} loading="lazy" alt="" />
              <p className="heading-6">{props.expertName}<br /></p>
              <p className="paragraph-large">{props.expertBio}</p>
              <div className="text-wrapper"></div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section dark ${props.promoBackgroundClass}`}>
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="w-layout-vflex dual-grid">
            <div className="decor-on-image">
              <div className="w-layout-vflex chip">
                <h4 className="paragraph-normal">{props.promoChip}</h4>
              </div>
              <h1 className="heading-2 dark">{props.promoTitle}</h1>
              <ul role="list" className="list">
                {props.promoItems.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <Button text="Learn more" href={props.promoButtonHref} variant="dark" />
            </div>
            <div className="full-width-block"></div>
          </div>
        </div>
      </section>

      <CTABlock title={props.ctaTitle} />
    </div>
  )
}
