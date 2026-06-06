import CaseStudyCard from '../components/CaseStudyCard'
import CTABlock from '../components/CTABlock'
import { useScrollAnimations, heroIntro, textReveal, fadeUp, staggerChildren, scaleIn } from '../hooks/useGsap'

const impactItems = [
  'Visionaries', 'Strategists', 'Researchers', 'Designers', 'Architects',
  'Developers', 'Marketers', 'Analysts', 'Builders', 'Problem Solvers',
]

const teamMembers = [
  { name: 'György Herbszt', role: 'CEO & Co-Founder', image: '/images/Gyuri_2.svg' },
  { name: 'Dr. András Lőrincz', role: 'CCO & Co-Founder', image: '/images/Lőrincz-András-round.avif' },
  { name: 'Judit Szántó', role: 'Senior product & service designer', image: '/images/Judit_1.svg' },
  { name: 'Márton Kopp', role: 'Marketing manager', image: '/images/Kopp-Márton----round-min.png' },
  { name: 'Lídia Kecseti', role: 'Visual & product designer', image: '/images/Gyuri.svg' },
]

export default function About() {
  const containerRef = useScrollAnimations((container) => {
    heroIntro('.above-the-fold', 0.1)(container)
    textReveal('.heading-2')(container)
    fadeUp('.chip', 0.08, 'top 90%')(container)
    fadeUp('.dual-grid .paragraph-large', 0.08, 'top 82%')(container)
    staggerChildren('.impact-listing', 0.06)(container)
    staggerChildren('.team-wrapper', 0.08)(container)
    scaleIn('.profile-image', 0.08)(container)
  })

  return (
    <div ref={containerRef}>
      <section className="above-the-fold discovery-lab">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="w-layout-vflex atf-text-wrapper home-page">
            <div className="w-layout-vflex main-text">
              <div className="w-layout-vflex line-1 narrow">
                <h1 className="heading-1">We are a boutique innovation lab creating experiences that matter</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="w-layout-blockcontainer container narrow w-container">
          <h1 className="heading-2 white">We are</h1>
          <div className="space-48"></div>
          <div className="w-layout-vflex impact-listing">
            {impactItems.map(item => (
              <div key={item} className="w-layout-vflex impact-blocks">
                <h4 className="paragraph-large">{item}</h4>
              </div>
            ))}
          </div>
          <div className="space-48"></div>
        </div>
      </section>

      <section className="section-4 blue">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="second-section-inner-2">
            <div className="w-layout-vflex flex-block-6">
              <h4 className="heading-2 white">We bridge the gap between abstract ideas and experiences that matter through discovery, design, development, and growth.</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="space-82"></div>
          <div className="w-layout-vflex section-title centered">
            <div className="w-layout-vflex chip purple">
              <h4 className="paragraph-normal">about us</h4>
            </div>
            <h2 className="heading-2 centered dark">Meet the team</h2>
          </div>
        </div>
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="team-wrapper">
            {teamMembers.map(m => (
              <div key={m.name} className="team-member">
                <div className="team-member-wrapper">
                  <img width="273" height="273" alt="" src={m.image} loading="lazy" className="profile-image" />
                  <div className="w-layout-vflex member-text-wrapper">
                    <div className="heading-6 blue">{m.name}</div>
                    <div className="paragraph-normal">{m.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-82"></div>
      </section>

      <section className="section">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="dual-grid">
            <h1 className="heading-2">We are innovative</h1>
            <p className="paragraph-large">We use cutting-edge tech to build competitive market advantages.<br /><br />By constantly pushing the boundaries of new products, new business models and automating workflows, we ensure you scale your business sustainably. <br /><br />We focus on practical innovation: applying the right tech to solve real-world problems and keeping your operations efficient, scalable, and future-proof.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="dual-grid">
            <h1 className="heading-2">We are boutique</h1>
            <p className="paragraph-large">We remain intentionally boutique and prioritize close, high-performance partnerships over high volume, delivering customized products and personalized GTM strategies.<br /><br />Sonar is a innovation lab where every team member is both a specialist and a generalist to ensure you always work directly with experts who are personally invested in your project's success.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="dual-grid">
            <h1 className="heading-2">We are end-to-end</h1>
            <p className="paragraph-large">We transform ideas into scalable realities. By owning the entire lifecycle, we ensure your idea survives the journey to market and scales.<br /><br />We eliminate friction, turning abstract concepts into high-performing, revenue-generating products. From first idea to final market execution, we are your engine.</p>
          </div>
        </div>
      </section>

      <div className="space-82"></div>

      <section className="section blue">
        <div className="w-layout-blockcontainer container narrow w-container">
          <div className="second-section-inner-2">
            <div className="w-layout-vflex flex-block-6">
              <h4 className="heading-2 white">Our vision is to be the global benchmark for boutique innovation.</h4>
            </div>
          </div>
        </div>
      </section>

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

      <CTABlock />
    </div>
  )
}
