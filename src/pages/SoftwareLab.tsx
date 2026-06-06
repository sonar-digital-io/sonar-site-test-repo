import LabPage from '../components/LabPage'

export default function SoftwareLab() {
  return (
    <LabPage
      labName="Software Lab"
      tagline="Build concepts into products"
      heroImage="/images/software-lab.avif"
      helpsWithTitle="The software lab helps you with"
      helpsWithItems={[
        'Slow development cycles',
        'Lacking specialized expertise',
        'Insufficient engineering resources',
        'Unscalable technical debt',
        'Persistent software bugs',
        'Legacy architecture bottlenecks',
      ]}
      whyTitle="Why software development?"
      whyContent={
        <>
          <strong>Full-stack development</strong> to build robust, end-to-end solutions using modern, high-performance tech stacks.<strong><br /><br />
          DevOps &amp; CI/CD automation </strong>to ensure seamless deployments, high availability, and rapid iteration cycles.<br /><strong><br />
          Quality assurance &amp; E2E testing </strong>to guarantee technical stability, security, and a bug-free user experience.
        </>
      }
      methodologyContent={
        <>
          We transform technical specifications or validated screen designs into high-performance digital products. <br /><br />
          Our engineers build secure, end-to-end solutions, from backend architecture to frontend component libraries, using agentic engineering. <br /><br />
          With automated CI/CD pipelines and rigorous E2E testing, we ensure a resilient technical foundation ready for enterprise-scale deployment.
        </>
      }
      processItems={['Stack & architecture design', 'Full-stack development', 'API & data flow design', 'CI/CD & DevOps automation', 'QA & E2E testing']}
      expertChip="Your software expert"
      expertImage="/images/Gyuri_2.svg"
      expertName="György Herbszt"
      expertBio={
        <>
          • 20+ years in human-centered product design and development<br />
          • 10+ years in strategic and product management roles<br />
          • Experience in SaaS, AI &amp; ML, and marketing automation industries<br />
        </>
      }
      promoChip="Growth lab"
      promoTitle={<>We also have <br />a Growth Lab</>}
      promoItems={[
        'Deploy precision outreach systems that identify high-intent ICPs and generate leads through automated messaging.',
        'Optimize revenue operations for a seamless transition from lead to closed deal.',
        'Execute market experiments to refine pricing, positioning, and funnels to maximize your long-term scaling potential.',
      ]}
      promoButtonHref="/growth-lab"
      promoBackgroundClass="growth-background"
      ctaTitle={<>Are you ready to level up <br />your technical performance?</>}
    />
  )
}
