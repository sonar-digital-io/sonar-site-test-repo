import Button from './Button'
import { useScrollAnimations, textReveal, fadeUp } from '../hooks/useGsap'

interface CTABlockProps {
  title?: React.ReactNode
}

const INTRO_CALL_URL = 'https://calendar.app.google/W2cVxdgLq4jSWLW26'
const DISCOVERY_CALL_URL = 'https://calendar.app.google/YBB9tNu7EKVPiYUu7'

export default function CTABlock({ title = <>Are you ready to level up?</> }: CTABlockProps) {
  const ref = useScrollAnimations((container) => {
    textReveal('.heading-2')(container)
    fadeUp('.section-title .chip', 0.1, 'top 90%')(container)
    fadeUp('.link-card.dark', 0.15)(container)
  })

  return (
    <section className="cta-block" ref={ref}>
      <div className="w-layout-blockcontainer container narrow w-container">
        <div className="w-layout-vflex section-title centered">
          <div className="w-layout-vflex chip green">
            <h4 className="paragraph-normal">Contact Us</h4>
          </div>
          <h2 className="heading-2 centered white">{title}</h2>
        </div>
        <div className="w-layout-vflex atf-text-wrapper-2">
          <div className="call-to-action-4">
            <div className="cta-grid">
              <div className="link-card dark">
                <div className="w-layout-vflex chip">
                  <h4 className="paragraph-normal">Intro call</h4>
                </div>
                <div className="w-layout-vflex cta-block-wrapper">
                  <div className="paragraph-large dark">Interested in our service? Book a 40-minute intro call. Let's get to know each other and explore working together.<br /></div>
                  <div className="space-24"></div>
                  <Button text="Book a call" href={INTRO_CALL_URL} variant="dark" external />
                </div>
              </div>
              <div className="link-card dark">
                <div className="w-layout-vflex chip">
                  <h4 className="paragraph-normal">Discovery call</h4>
                </div>
                <div className="w-layout-vflex cta-block-wrapper">
                  <div className="paragraph-large dark">You have a challenge you don't know how to solve? Book a 2-hour session to explore working together and kickstart a project.<br /></div>
                  <div className="space-24"></div>
                  <Button text="Book a call" href={DISCOVERY_CALL_URL} variant="dark" external />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-hflex atf-menu-2">
          {[0, 1, 2].map(i => (
            <div key={i} className="w-layout-vflex button">
              <div className="w-layout-vflex text-part-2">
                <div className="button-text-10">services</div>
              </div>
              <div className="w-layout-vflex icon-part-2">
                <div className="icon-2">arrow_forward</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
