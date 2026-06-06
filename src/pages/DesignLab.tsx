import LabPage from '../components/LabPage'

export default function DesignLab() {
  return (
    <LabPage
      labName="Design Lab"
      tagline="Convert insight into concepts"
      heroImage="/images/design-lab.avif"
      helpsWithTitle="The design lab helps you with"
      helpsWithItems={[
        'Complicated product workflows',
        'Outdated interface design',
        'Inconsistent design language',
        'Lacking design expertise',
        'Frustrating user journeys',
        'Unappealing visual identity',
      ]}
      whyTitle="Why product & service design?"
      whyContent={
        <>
          <strong>User journey &amp; information architecture </strong>to structure seamless flows that eliminate user friction.<strong><br /><br />
          High-fidelity prototyping </strong>to visualize, test, and validate the product concept before development.<strong><br /><br />
          Scalable design systems</strong> to ensure visual consistency and brand power across every touchpoint.
        </>
      }
      caseStudy={{
        title: 'From months of coding to minutes of dragging and dropping',
        description: 'Learn how we translated complex SQL scripts into a human-centric visual editor for a recommendation engine. Discover how high-fidelity prototyping and a shared design language allowed engineers, analysts, and business leaders to collaborate on a "whiteboard" interface that eliminated user friction.',
        buttonHref: '/yusp-data-flow-editor',
        imageSrc: '/images/dfe-opened-versions.jpg',
      }}
      centeredImage={{ src: '/images/design-lab-3.avif', className: 'cenered-image-wrapper-2' }}
      methodologyContent={
        <>
          We translate product requirements or discovery insights into functional reality. <br /><br />
          By mapping user journeys and information architecture, we bridge the gap between abstract strategy and high-fidelity UI. <br /><br />
          Through interactive prototyping and scalable design systems, we deliver validated screen designs that ensure a seamless, launch-ready experience.
        </>
      }
      processItems={['Market Intelligence', 'In-depth Interviews', 'User research', 'Competitor analysis', 'Tech stack audit']}
      expertChip="Your design expert"
      expertImage="/images/Judit_1.svg"
      expertName="Judit Szántó"
      expertBio={
        <>
          • 8 years in digital product design &amp; 4 years in service design<br />
          • Experience in medtech, logistics, telco and public service domains<br />
          • Comprehensive skill set from initial research to pixel perfect UI implementation<br />
        </>
      }
      promoChip="Software lab"
      promoTitle={<>We also have <br />a Software Lab</>}
      promoItems={[
        'Engineer full-stack solutions using high-performance tech stacks to turn validated designs into resilient products.',
        'Automate DevOps and CI/CD to ensure your product supports rapid iteration cycles and high-availability scaling.',
        'Execute strict QA testing to guarantee a bug-free, secure, and stable environment for your growing user base.',
      ]}
      promoButtonHref="/software-lab"
      promoBackgroundClass="software-background"
      ctaTitle={<>Are you ready to level up <br />your product design?</>}
    />
  )
}
