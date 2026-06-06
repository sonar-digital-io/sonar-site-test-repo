import { useScrollAnimations } from '../hooks/useGsap'
import { caseStudyAnimations } from '../hooks/useCaseStudyAnimations'
import LabPromoSection from '../components/LabPromoSection'
import CTABlock from '../components/CTABlock'

export default function YuspifySaasAdmin() {
  const containerRef = useScrollAnimations(caseStudyAnimations)

  return (
    <div ref={containerRef}>
      <section className="case-study-hero yfy-admin">
        <img src="/images/yfy-comp.svg" loading="lazy" alt="" className="comp" />
        <img src="/images/yfy-cover.png" loading="lazy" alt="" className="case-study-cover absolute" />
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-vflex atf-block">
            <div className="w-layout-vflex atf-text-wrapper half-width dark-text">
              <div className="w-layout-vflex main-text">
                <div className="w-layout-vflex line-1">
                  <h1 className="heading-1">New B2B Saas admin page for Yuspify</h1>
                </div>
              </div>
              <div className="w-layout-vflex">
                <div className="space-24"></div>
                <h4 className="heading-5">We turned Gravity's enterprise-grade recommendation engine into a self-service SaaS platform for SMEs, simplifying setup and creating a scalable product for e-commerce personalization.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="w-layout-blockcontainer container-5 narrow w-container">
          <div className="dual-grid-5">
            <h1 className="heading-2">About the client</h1>
            <p className="paragraph-large">Yusp is a personalization service provider that delivers state-of-the-art recommendation engines to large enterprises.<br /><br />To scale, they developed a self-service SaaS platform that delivers powerful, automated AI recommendations to global SMEs and the Shopify market.</p>
          </div>
        </div>
      </section>

      <section className="section discovery">
        <div className="w-layout-blockcontainer container-5 narrow w-container">
          <div className="dual-grid-5">
            <h1 className="heading-2">Discovery &amp; A/B testing</h1>
            <p className="paragraph-large">Gravity's recommendation engine needed to be adapted.<br /><br />It was designed for enterprises that relied on data teams for integration, while SMEs had to configure everything themselves, often without any technical background.<br /><br />To bridge this gap, we conducted a six-month experiment with regional resellers to validate demand. By manually onboarding early users and running live A/B tests on their sites, we gained critical insights into their technical limitations and UX needs.</p>
          </div>
        </div>
        <div className="space-82"></div>
      </section>

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

      <section className="section design">
        <div className="space-82"></div>
        <div className="w-layout-blockcontainer container-5 narrow w-container">
          <div className="dual-grid-5">
            <h1 className="heading-2">Product design</h1>
            <p className="paragraph-large">We built a self-service SaaS platform that shifted integration and configuration from engineers to users.<br /><br />Guided by automations and usage-based pricing, we focused on simplifying critical tasks: tracking setup, database syncing, recommendation box design, and multichannel analytics. Each feature followed a cycle of problem definition, ideation, and testing to ensure non-technical owners could achieve high-quality results independently.<br /><br />As the product grew, we transitioned from wireframes to a Vue.js design system to provide a scalable foundation for new features. We also rebranded Yuspify to differentiate it from the enterprise service and refined its value proposition.</p>
          </div>
        </div>
        <div className="space-82"></div>
      </section>

      <section className="section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-vflex before-after-wrapper">
            <a href="#" className="case-study-gallery w-inline-block">
              <img loading="eager" src="/images/yfy-saas-4.jpg" alt="" className="lightobx-flagship" />
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-grid lightbox-images-2">
            <img src="/images/yfy-saas-2.png" loading="lazy" alt="" className="lightbox-thumb" />
            <img src="/images/yfy-saas-3.png" loading="lazy" alt="" className="lightbox-thumb" />
          </div>
        </div>
      </section>

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

      <section className="section design">
        <div className="space-82"></div>
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="dual-grid-5">
            <h1 className="heading-2">Scaling &amp; Growth</h1>
            <p className="paragraph-large">We prioritized high-impact features that drove revenue without adding complexity for SMEs.<br /><br />This shift evolved Yuspify into a scalable SaaS platform, allowing shop owners to deploy enterprise AI recommendations without engineers.<br /><br />The project bridged the gap between Gravity's proven recommendation engine and the SME segment, creating a new, distinct product line, rebranded and optimized for growth.</p>
          </div>
          <div className="space-82"></div>
          <div className="key-results green">
            <h5 className="heading-2 centered">Key results</h5>
            <div className="results-grid-3">
              <div className="w-layout-vflex results-cell">
                <div className="result-icon">access_time</div>
                <p className="paragraph-large">SME setup time cut from months to minutes</p>
              </div>
              <div className="w-layout-vflex results-cell">
                <div className="result-icon">design_services</div>
                <p className="paragraph-large">Self-service configuration without technical teams</p>
              </div>
              <div className="w-layout-vflex results-cell">
                <div className="result-icon">inventory</div>
                <p className="paragraph-large">Scalable, new SaaS product built on enterprise tech</p>
              </div>
              <div className="w-layout-vflex results-cell">
                <div className="result-icon">computer</div>
                <p className="paragraph-large">Modern UX optimized for e-commerce</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-82"></div>
      </section>

      <CTABlock title={<>Are you facing similar challenges?</>} />
    </div>
  )
}
