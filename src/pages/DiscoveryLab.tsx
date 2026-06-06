import LabPage from '../components/LabPage'

export default function DiscoveryLab() {
  return (
    <LabPage
      labName="Discovery Lab"
      tagline="Go from idea to insight"
      heroImage="/images/submarine.png"
      helpsWithTitle="The discovery lab helps you with"
      helpsWithItems={[
        'Overwhelming user needs',
        'Invisible competitor strategies',
        'Unvalidated market needs',
        'Unclear roadmap direction',
        'Lacking pricing validation',
        'Misaligned stakeholder vision',
      ]}
      whyTitle="Why strategic discovery?"
      whyContent={
        <>
          <strong>Domain deep dive</strong> to fully understand your business and market landscape.<br /><br />
          <strong>Market intelligence</strong> to uncover hidden pain points and traction-ready opportunities.<br /><br />
          <strong>Tech stack evaluation</strong> to determine whether to improve, rebuild, or replace.
        </>
      }
      caseStudy={{
        title: 'Uncovering a "black box" bottleneck for a personalization platform',
        description: 'Learn how we diagnosed why enterprise integrations were taking over a year and costing Yusp millions in lost opportunity. Discover how our strategic deep dive transformed a script-heavy technical limitation into a clear roadmap for a scalable, visual-first product strategy.',
        buttonHref: '/yusp-data-flow-editor',
        imageSrc: '/images/discovery-medtech-case-study.avif',
      }}
      centeredImage={{ src: '/images/discoverypagemiro.jpg' }}
      methodologyContent={
        <>
          We execute a domain deep dive to master your market and technical landscape. <br /><br />
          By interviewing users and auditing your tech stack, we uncover traction-ready opportunities and hidden pain points. <br /><br />
          This intelligence eliminates hidden risks, creating an evidence-based strategic foundation for your entire product roadmap.
        </>
      }
      processItems={['Market Intelligence', 'In-depth Interviews', 'User research', 'Competitor analysis', 'Tech stack audit']}
      expertChip="Your discovery expert"
      expertImage="/images/Gyuri_2.svg"
      expertName="György Herbszt"
      expertBio={
        <>
          • 20+ years in human-centered product design and development<br />
          • 10+ years in strategic and product management roles<br />
          • Experience in SaaS, AI &amp; ML, and marketing automation industries<br />
        </>
      }
      promoChip="Design lab"
      promoTitle={<>We also have<br />a Design Lab</>}
      promoItems={[
        'Map user journeys to translate strategic discovery into seamless product workflows.',
        'Create high-fidelity prototypes to test your product concept before a single line of code is written.',
        'Establish scalable design systems that ensure visual consistency across every touchpoint.',
      ]}
      promoButtonHref="/design-lab"
      promoBackgroundClass="design-background"
      ctaTitle={<>Are you ready to level up <br />your product strategy?</>}
    />
  )
}
