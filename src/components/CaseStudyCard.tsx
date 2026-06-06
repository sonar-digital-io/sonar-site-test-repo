import Button from './Button'
import { useScrollAnimations, fadeUp } from '../hooks/useGsap'

interface CaseStudyCardProps {
  chipText?: string
  title: string
  description: string
  buttonText?: string
  buttonHref: string
  imageSrc: string
  imageAlt?: string
}

export default function CaseStudyCard({ chipText = 'Case study', title, description, buttonText = 'Learn more', buttonHref, imageSrc, imageAlt = '' }: CaseStudyCardProps) {
  const ref = useScrollAnimations((container) => {
    fadeUp('.link-card, .case-study-thumb-wrapper', 0)(container)
  })

  return (
    <div className="case-study-grid" ref={ref}>
      <div className="link-card">
        <div className="w-layout-vflex chip">
          <h4 className="paragraph-normal">{chipText}</h4>
        </div>
        <div className="text-wrapper">
          <div className="w-layout-vflex">
            <h5 className="heading-5">{title}</h5>
            <div className="space-82-copy"></div>
            <p className="paragraph-large">{description}</p>
          </div>
          <Button text={buttonText} href={buttonHref} variant="dark" />
        </div>
      </div>
      <div className="w-layout-vflex case-study-thumb-wrapper">
        <img loading="lazy" src={imageSrc} alt={imageAlt} className="case-study-thumb" />
      </div>
    </div>
  )
}
