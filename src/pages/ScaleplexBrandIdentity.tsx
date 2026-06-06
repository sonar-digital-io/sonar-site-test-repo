import { useScrollAnimations } from '../hooks/useGsap'
import { caseStudyAnimations } from '../hooks/useCaseStudyAnimations'
import CTABlock from '../components/CTABlock'

export default function ScaleplexBrandIdentity() {
  const containerRef = useScrollAnimations(caseStudyAnimations)

  return (
    <div ref={containerRef}>
      <section className="case-study-hero scalelab">
        <img src="/images/yfy-comp.svg" loading="lazy" alt="" className="comp" />
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-vflex atf-block">
            <div className="w-layout-vflex atf-text-wrapper half-width dark-text">
              <div className="w-layout-vflex main-text">
                <div className="w-layout-vflex line-1">
                  <h1 className="heading-1">New brand identify</h1>
                </div>
              </div>
              <div className="w-layout-vflex">
                <div className="space-24"></div>
                <h4 className="heading-5">Learn how we created Scaleplex's bold and inventive new identity rooted in strategic research and design.</h4>
              </div>
            </div>
            <img src="/images/scalelab-cover.png" loading="lazy" alt="" className="case-study-cover scalelab" />
          </div>
          <div className="w-layout-hflex atf-menu">
            {[0, 1, 2].map(i => (
              <a key={i} href="#" className="button w-inline-block">
                <div className="w-layout-vflex text-part">
                  <div className="button--text">Learn more</div>
                </div>
                <div className="w-layout-vflex icon-part">
                  <div className="icon">arrow_forward</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section scalelab">
        <div className="w-layout-blockcontainer container w-container">
          <div className="problem-chellange">
            <div className="w-layout-vflex problem-challange-inner">
              <div className="half-block">
                <h2 className="button-text">/ The challenge</h2>
                <div className="space-24"></div>
                <h4 className="heading-6 dark">Scaleplex is an innovative business thinking laboratory that needed a brand identity and marketing assets to convey its bold and forward-thinking character. They also asked us to support the work with research, adding strategic insight to the project.</h4>
              </div>
              <div className="half-block">
                <h2 className="button-text">/ The solution</h2>
                <div className="space-24"></div>
                <div className="heading-6 dark">We created a unique brand identity and developed presentation materials, pitch decks, and case studies that seamlessly work on Scaleplex's digital touchpoints. We grounded the project in competitor analysis, market research, and value proposition design.<br /><br /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark scalelab-edgecase">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-vflex before-after-wrapper">
            <div className="space-24"></div>
            <img src="/images/scaleplex-large.png" loading="lazy" alt="" className="scalelab-key-visual" />
          </div>
          <div className="space-16"></div>
          <div className="w-layout-grid lightbox-images-2">
            <img loading="lazy" src="/images/scaleplex-medium-1.svg" alt="" className="lightbox-thumb" />
            <img loading="lazy" src="/images/scaleplex-medium-2.svg" alt="" className="lightbox-thumb" />
          </div>
          <div className="space-16"></div>
          <img src="/images/jpeg-optimizer_scaleplex-mockup.jpg" loading="lazy" alt="" className="scalelab-key-visual" />
          <div className="space-16"></div>
          <div className="scaleplex-bento-block-1">
            <div className="w-layout-vflex scaleplex-bento-70">
              <div className="w-layout-vflex main-bento-wrapper-2">
                <img src="/images/scaleplex-bento-3.svg" loading="lazy" alt="" className="scalelab-bento-3" />
              </div>
            </div>
            <div className="w-layout-vflex scaleplex-bento-30">
              <div className="dfe-bento-wrapper-1">
                <img src="/images/scaleplex-bento-4.jpg" loading="lazy" alt="" className="scalelab-bento-4" />
                <img src="/images/dfe-bento-1.png" loading="lazy" alt="" className="dfe-bento-1 mobile" />
              </div>
            </div>
          </div>
          <div className="space-16"></div>
          <div className="scaleplex-bento-block-1">
            <div className="w-layout-vflex scaleplex-bento-30">
              <div className="dfe-bento-wrapper-1">
                <img src="/images/scaleplex-bento-2.png" loading="lazy" alt="" className="scalelab-bento-4" />
                <img src="/images/dfe-bento-1.png" loading="lazy" alt="" className="dfe-bento-1 mobile" />
              </div>
            </div>
            <div className="w-layout-vflex scaleplex-bento-70">
              <div className="w-layout-vflex main-bento-wrapper-2">
                <img src="/images/scaleplex-bento-1.png" loading="lazy" alt="" className="scalelab-bento-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  )
}
