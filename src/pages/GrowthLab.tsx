import LabPage from '../components/LabPage'

export default function GrowthLab() {
  return (
    <LabPage
      labName="Growth Lab"
      tagline="Turn products into growth"
      heroImage="/images/growth-lab.avif"
      helpsWithTitle="The growth lab helps you with"
      helpsWithItems={[
        'Unreachable ideal customers',
        'Unscalable market execution',
        'High acquisition costs',
        'Unreliable growth metrics',
        'Misaligned sales/marketing',
        'Unoptimized pricing strategy',
      ]}
      whyTitle="Why go-to-market?"
      whyContent={
        <>
          <strong>Precision outreach systems </strong>to identify high-intent ICPs and deploy personalized, automated messaging that converts<strong><br /><br />
          Revenue operations</strong> to align your tech stack and teams, ensuring a seamless flow from first touch to closed deal.<strong><br /><br />
          Growth optimization &amp; experiments</strong> to continuously test pricing, messaging, and funnels to maximize lifetime <strong>value.</strong>
        </>
      }
      caseStudy={{
        title: 'Cold outreach resulting in 4 closed deals for a Medtech company',
        description: 'Learn how we repositioned a promising but chaotic Medtech product as a simple, cloud-based, scalable framework. Discover why our cold outreach to 300+ decision-makers achieved 10x industry engagement and 4 closed deals.',
        buttonHref: '/medtech-case-study',
        imageSrc: '/images/main-bento-yusp-dfe.png',
      }}
      centeredImage={{ src: '/images/n8n-stilizalt-full-width-green.png' }}
      methodologyContent={
        <>
          We engineer a repeatable engine for commercial scaling. <br /><br />
          By identifying high-intent ICPs and designing data-driven sales automations, we turn products into growth. <br /><br />
          Through precision outreach and market experiments, we validate your value proposition in real-time to ensure sustainable, measurable revenue.
        </>
      }
      processItems={['ICP creation', 'Value proposition design', 'Pricing strategy', 'Growth strategy & experiments', 'AI powered lead generation', 'Sales process automation']}
      expertChip="Your go-to-market expert"
      expertImage="/images/Lőrincz-András-round.avif"
      expertName="András Lőrincz"
      expertBio={
        <>
          • 10+ years in strategic advisory &amp; startup mentorship<br />
          • 5+ years in operational &amp; investment leadership roles<br />
          • Experience in biotech, SaaS, and energy &amp; mobility innovation<br />
        </>
      }
      promoChip="Discovery lab"
      promoTitle={<>We also have a Discovery Lab</>}
      promoItems={[
        'Conduct market intelligence to identify new opportunities and hidden pain points within your current scaling efforts.',
        'Evaluate technical feasibility for new feature sets to determine whether to improve, rebuild, or replace components.',
        'Validate product-market fit through research and data to align stakeholders on a clear, evidence-based strategic direction.',
      ]}
      promoButtonHref="/discovery-lab"
      promoBackgroundClass="discovery-background"
      ctaTitle={<>Are you ready to level up <br />your growth?</>}
    />
  )
}
