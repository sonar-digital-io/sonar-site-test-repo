import { useScrollAnimations } from '../hooks/useGsap'
import { caseStudyAnimations } from '../hooks/useCaseStudyAnimations'
import LabPromoSection from '../components/LabPromoSection'
import CTABlock from '../components/CTABlock'

export default function MedtechCaseStudy() {
  const containerRef = useScrollAnimations(caseStudyAnimations)

  return (
    <div ref={containerRef}>
      <section className="above-the-fold plain">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="w-layout-vflex atf-text-wrapper home-page">
            <div className="w-layout-vflex main-text">
              <div className="w-layout-vflex line-1 narrow">
                <div className="dual-grid">
                  <div className="w-layout-vflex">
                    <h1 className="heading-1">Cold outreach for a Medtech company</h1>
                    <div className="space-24"></div>
                    <h1 className="heading-5">Learn how we repositioned a promising but feature-heavy Medtech product, reached out to 300+ decision-makers, and 4 closed deals.</h1>
                  </div>
                  <img src="/images/funnel-small.avif" loading="lazy" alt="" />
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
            <p className="paragraph-large">A medical technology company developing AI-enabled imaging and computational analysis software to improve biomedical image processing and interpretation. <br /><br />The company supports research- and diagnostics-adjacent applications, enabling faster and more accurate insights for medical R&amp;D and translational research. <br /><br />Its solutions are designed for advanced imaging-driven analysis and have applications in single-cell and multi-omics workflows.</p>
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
                  <h5 className="heading-2">Go-to-market discovery</h5>
                  <div className="space-82-copy"></div>
                  <p className="paragraph-large">The company struggled with scaling. Through user interviews, surveys, and data audits, we mapped a complex sales and product setup with an unclear value proposition and ad hoc pricing. <br /><br />During discovery, we uncovered undefined features, user confusion, and technical debt. <br /><br />We decided to rebuild the foundations: structure data, clarify value, and define a scaling strategy.</p>
                </div>
              </div>
            </div>
            <div className="w-layout-vflex case-study-thumb-wrapper medtech-cs-discovery"></div>
          </div>
        </div>
      </section>

      <div className="space-82"></div>

      <LabPromoSection
        chipText="Discovery lab"
        title="We created a Discovery Lab where we go from idea to insight"
        items={[
          'Conduct market intelligence to identify untapped opportunities and hidden pain points within your current scaling efforts.',
          'Evaluate technical feasibility for new feature sets to determine whether to improve, rebuild, or replace components.',
          'Validate product-market fit through research and data to align stakeholders on a clear, evidence-based strategic direction.',
        ]}
        buttonHref="/discovery-lab"
        backgroundClass="discovery-background"
      />

      <div className="space-82"></div>

      <section className="section">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="dual-grid">
            <div className="text-wrapper">
              <h5 className="heading-2">Growth strategy &amp; experiments</h5>
              <p className="paragraph-large">Building on discovery insights, we mapped the value chain and identified 6 ICPs across complex sectors, including research and medical fields.<br /><br />Through workshops and interviews with current customers, as well as competitor and prospect data scraping, we found that the complex, code-heavy desktop tool hindered adoption.<br /><br />Users needed a visual, drag-and-drop interface and effortless online access. So, we created a roadmap for a lightweight, cloud-based framework with automated updates and streamlined usability. With this new positioning, we also created improved pricing and a clearer value proposition, ready for scaling.</p>
              <div className="space-82-copy"></div>
            </div>
            <div className="w-layout-vflex case-study-thumb-wrapper medtech-cs-design"></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="key-results green">
            <h5 className="heading-2">Key results</h5>
            <div className="results-grid">
              <div className="w-layout-vflex results-cell">
                <div className="result-icon">business_center</div>
                <p className="paragraph-large">Developed 6 ICPs and created new sharper use cases</p>
              </div>
              <div className="w-layout-vflex results-cell">
                <div className="result-icon">map</div>
                <p className="paragraph-large">Repositioned product and created a roadmap for cloud-based framework</p>
              </div>
              <div className="w-layout-vflex results-cell">
                <div className="result-icon">mail</div>
                <p className="paragraph-large">Cold outreach to 300+ decision-makers</p>
              </div>
              <div className="w-layout-vflex results-cell">
                <div className="result-icon">insights</div>
                <p className="paragraph-large">Closed 4 deals proving scalability and traction.</p>
              </div>
            </div>
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
                  <h5 className="heading-2">Lead generation &amp; sales</h5>
                  <div className="space-82-copy"></div>
                  <p className="paragraph-large">Before executing the cold outreach, we validated the new product positioning, pricing, and value proposition through real-world market testing. Then, we turned the validated use cases into targeted, high-impact offers.<br /><br />Using reverse-engineered ICPs and AI-powered outreach, we scraped and enriched data from 200+ organizations, mapping 300+ decision-makers.<br /><br />To reach decision-makers, we launched an AI-assisted personalized campaign, delivering a 17% response rate, 3x the industry average, resulting in 12 demos and 4 closed deals that proved scalability and traction.</p>
                </div>
              </div>
            </div>
            <div className="w-layout-vflex case-study-thumb-wrapper medtech-cs-leadgen"></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="w-layout-vflex cenered-image-wrapper">
            <img src="/images/n8n-stilizalt-full-width-green.png" loading="lazy" sizes="100vw" alt="" className="full-width-image" />
          </div>
        </div>
      </section>

      <LabPromoSection
        chipText="Growth lab"
        title="We created a Growth Lab where we turn products into growth"
        items={[
          'Deploy precision outreach systems that identify high-intent ICPs and generate leads through automated messaging.',
          'Optimize revenue operations for a seamless transition from lead to closed deal.',
          'Execute market experiments to refine pricing, positioning, and funnels to maximize your long-term scaling potential.',
        ]}
        buttonHref="/growth-lab"
        backgroundClass="growth-background"
      />

      <CTABlock title={<>Are you facing similar <br />challanges?</>} />
    </div>
  )
}
