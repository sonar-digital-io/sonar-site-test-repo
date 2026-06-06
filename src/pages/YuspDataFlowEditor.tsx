import { useScrollAnimations } from '../hooks/useGsap'
import { caseStudyAnimations } from '../hooks/useCaseStudyAnimations'
import LabPromoSection from '../components/LabPromoSection'
import CTABlock from '../components/CTABlock'

export default function YuspDataFlowEditor() {
  const containerRef = useScrollAnimations(caseStudyAnimations)

  return (
    <div ref={containerRef}>
      <section className="above-the-fold-2 plain">
        <div className="w-layout-blockcontainer container-5 narrow w-container">
          <div className="w-layout-vflex atf-text-wrapper-2 home-page">
            <div className="w-layout-vflex main-text">
              <div className="w-layout-vflex line-1 narrow">
                <div className="dual-grid-2">
                  <div className="w-layout-vflex">
                    <h1 className="heading-1">New product cutting integration time drastically</h1>
                    <div className="space-24-2"></div>
                    <h1 className="heading-5">Learn how we created a new product for Yusp, turning a slow and costly integration "black box" into a visual drag-and-drop editor.</h1>
                  </div>
                  <img loading="lazy" src="/images/yusp-hero.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="space-82"></div>

      <section className="section">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="dual-grid">
            <h1 className="heading-2">About the client</h1>
            <p className="paragraph-large">Yusp is a personalization service provider that delivers state-of-the-art recommendations to large enterprises.<br /><br />Yusp recognized the potential of their customized recommendations but stuck to providing a streamlined customization method for their clients.</p>
          </div>
        </div>
      </section>

      <div className="space-82"></div>

      <section className="section">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="case-study-grid">
            <div>
              <div className="text-wrapper">
                <div className="w-layout-vflex">
                  <h5 className="heading-2">Strategic discovery</h5>
                  <div className="space-82-copy"></div>
                  <p className="paragraph-large">Yusp's cutting-edge recommendation engine was trapped in an integration "black box." Enterprise integrations took months or even years, requiring manual SQL scripts that were costly and unscalable.<br /><br />Through a domain deep dive and tech stack evaluation, we interviewed engineers and business leaders to map the integration friction. We uncovered that this reliance on manual coding prevented Yusp from serving SME clients profitably.<br /><br />To fix this, we created a new strategy and a roadmap to replace scripts with a visual foundation.</p>
                </div>
              </div>
            </div>
            <div className="w-layout-vflex case-study-thumb-wrapper yusp-cs-discovery"></div>
          </div>
        </div>
      </section>

      <div className="space-82"></div>

      <LabPromoSection
        chipText="Discovery lab"
        title="We created a Discovery Lab where we go from idea to insight"
        items={[
          'Conduct market intelligence to identify new opportunities and hidden pain points within your current scaling efforts.',
          'Evaluate technical feasibility for new feature sets to determine whether to improve, rebuild, or replace components.',
          'Validate product-market fit through research and data to align stakeholders on a clear, evidence-based strategic direction.',
        ]}
        buttonHref="/discovery-lab"
        backgroundClass="discovery-background"
      />

      <div className="space-82"></div>

      <section className="section">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="case-study-grid">
            <div className="w-layout-vflex">
              <h5 className="heading-2">Product design</h5>
              <div className="space-82-copy"></div>
              <p className="paragraph-large">We translated discovery insights into a functional visual editor concept.<br /><br />By mapping complex user journeys and information architecture, we replaced manual scripts with a drag-and-drop "whiteboard" interface. Through high-fidelity prototyping and a shared design language, we validated the experience against benchmarks in Illustrator, Shaderforge, and Blender.<br /><br />Abstract data flows evolved into a seamless, interactive concept, allowing engineers and business leaders to collaborate on a single, transparent, and launch-ready UI.</p>
            </div>
            <div className="w-layout-vflex case-study-thumb-wrapper yusp-data-design"></div>
          </div>
        </div>
      </section>

      <div className="space-82"></div>

      <section className="section">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="w-layout-vflex cenered-image-wrapper">
            <img src="/images/design-lab-3.avif" loading="lazy" sizes="100vw" alt="" className="full-width-image" />
          </div>
          <div className="space-24"></div>
          <div className="case-study-grid gap">
            <img src="/images/yusp-data-50-50-1.avif" loading="lazy" alt="" className="image-5" />
            <img src="/images/yusp-data-50-50-2.avif" loading="lazy" alt="" className="image-6" />
          </div>
        </div>
      </section>

      <div className="space-82"></div>

      <LabPromoSection
        chipText="Design lab"
        title="We created a Design Lab where we convert insight into concepts"
        items={[
          'Map user journeys to translate strategic discovery into seamless product workflows.',
          'Create high-fidelity prototypes to test your product concept before a single line of code is written.',
          'Establish scalable design systems that ensure visual consistency across every touchpoint.',
        ]}
        buttonHref="/design-lab"
        backgroundClass="design-background"
      />

      <section className="section">
        <div className="space-82"></div>
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="case-study-grid">
            <div>
              <div className="text-wrapper">
                <div className="w-layout-vflex">
                  <h5 className="heading-2">Business design &amp; scaling</h5>
                  <div className="space-82-copy"></div>
                  <p className="paragraph-large">Scaling required shifting from manual engineering to a self-service model.<br /><br />Beyond technical delivery, we empowered client-side professionals to champion the tool and drive organizational adoption. By proving that integration time could be cut from months to minutes, we turned technical skeptics into product advocates.<br /><br />This shift transformed Yusp's business model, allowing them to serve both enterprise and SME clients profitably while empowering data teams to manage flows independently.</p>
                </div>
              </div>
            </div>
            <div className="w-layout-vflex case-study-thumb-wrapper yusp-data-scaling"></div>
          </div>
        </div>
        <div className="space-82"></div>
      </section>

      <section className="section">
        <div className="w-layout-blockcontainer container-5 narrow w-container">
          <div className="key-results green">
            <h5 className="heading-2 centered">Key results</h5>
            <div className="results-grid-2">
              <div className="w-layout-vflex results-cell-2">
                <div className="result-icon">map</div>
                <p className="paragraph-large">Audited technical debt and created a recovery roadmap.</p>
              </div>
              <div className="w-layout-vflex results-cell-2">
                <div className="result-icon">design_services</div>
                <p className="paragraph-large">Designed and validated a drag-and-drop editor replacing manual SQL.</p>
              </div>
              <div className="w-layout-vflex results-cell-2">
                <div className="result-icon">av_timer</div>
                <p className="paragraph-large">Cut integration time from months to minutes.</p>
              </div>
              <div className="w-layout-vflex results-cell-2">
                <div className="result-icon">insights</div>
                <p className="paragraph-large">Unlocked profitable scaling for SME &amp; enterprise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock title={<>Are you facing similar <br />challanges?</>} />
    </div>
  )
}
