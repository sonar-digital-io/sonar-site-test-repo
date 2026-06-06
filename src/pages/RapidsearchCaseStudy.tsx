import LabPromoSection from '../components/LabPromoSection'
import CTABlock from '../components/CTABlock'

export default function RapidsearchCaseStudy() {
  return (
    <div>
      <section className="above-the-fold plain">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="w-layout-vflex atf-text-wrapper home-page">
            <div className="w-layout-vflex main-text">
              <div className="w-layout-vflex line-1 narrow">
                <div className="dual-grid">
                  <div className="w-layout-vflex">
                    <h1 className="heading-1">UX &amp; market discovery for a Shopify app</h1>
                    <div className="space-24"></div>
                    <h1 className="heading-5">Learn how we uncovered that an "app lottery" market was the true cause of a 53% uninstall rate for the 4.9-star-rated app.</h1>
                  </div>
                  <img src="/images/Rapidsearch-illustration.avif" loading="lazy" alt="" />
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
            <p className="paragraph-large">Rapidsearch is a bootstrapped Shopify app with a 4.9-star rating and "Built for Shopify" badge, founded in 2019.<br /><br />It provides AI-powered search and filtering for 5,000+ merchants and handles 33 million daily queries.<br /><br />Despite its technical excellence and 400+ five-star reviews, the small team operates in a "hyper-saturated" market, making scaling challenging.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="dual-grid">
            <h1 className="heading-2">The "same-day" leak</h1>
            <p className="paragraph-large">Rapidsearch faced a critical retention gap: 53% of users uninstalled the app on the same day they installed it. Often within minutes.<br /><br />This "same-day uninstall" rate led to wasted acquisition costs and lost future revenue.<br /><br />The team didn't know whether the uninstalls were caused by bugs, poor onboarding, or just the way the market works.</p>
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
              <h5 className="heading-2">UX &amp; market discovery</h5>
              <p className="paragraph-large">We conducted a deep-dive audit to uncover these blind spots:<br /><br /><strong>User interviews:</strong> to uncover pains, behaviors, and preferences<br /><br /><strong>Expert intelligence: </strong>to provide insights and market data from e-commerce specialists<br /><br /><strong>UX audit:</strong> to analyze the onboarding flow and user experience</p>
              <div className="space-82-copy"></div>
            </div>
            <div className="w-layout-vflex case-study-thumb-wrapper rapidsearch-discovery"></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="key-results green">
            <h5 className="heading-2">Key results</h5>
            <div className="results-grid">
              <div className="w-layout-vflex results-cell">
                <div className="result-icon">search</div>
                <p className="paragraph-large">Conducted in-depth UX &amp; market discovery</p>
              </div>
              <div className="w-layout-vflex results-cell">
                <div className="result-icon">candlestick_chart</div>
                <p className="paragraph-large">Identified "app lottery" market dynamics</p>
              </div>
              <div className="w-layout-vflex results-cell">
                <div className="result-icon">find_in_page</div>
                <p className="paragraph-large">Provided strategic clarity on market limits</p>
              </div>
              <div className="w-layout-vflex results-cell">
                <div className="result-icon">trending_down</div>
                <p className="paragraph-large">Reduced marketing and acquisition waste</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="case-study-grid">
            <div>
              <div className="text-wrapper">
                <div className="w-layout-vflex">
                  <h5 className="heading-2">Strategic alignment</h5>
                  <div className="space-82-copy"></div>
                  <p className="paragraph-large">The project provided the evidence needed to stop chasing the unfixable same-day uninstall rate.<br /><br />We uncovered that Rapidsearch operates in an "app lottery" reality, where users randomly choose competing apps and uninstall them after a bad first impression.<br /><br />While technical sync improvements reduced uninstalls from 53% to 38%, our research delivered a "stop" signal for over-investing in impossible retention goals.</p>
                </div>
              </div>
            </div>
            <div className="w-layout-vflex case-study-thumb-wrapper rapidsearch-app-lottery"></div>
          </div>
        </div>
      </section>

      <div className="space-82"></div>

      <CTABlock title={<>Are you facing similar <br />challanges?</>} />
    </div>
  )
}
