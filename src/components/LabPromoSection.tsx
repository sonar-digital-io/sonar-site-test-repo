import Button from './Button'

interface LabPromoSectionProps {
  chipText: string
  title: React.ReactNode
  items: string[]
  buttonHref: string
  backgroundClass: string
}

export default function LabPromoSection({ chipText, title, items, buttonHref, backgroundClass }: LabPromoSectionProps) {
  return (
    <section className={`section dark ${backgroundClass}`}>
      <div className="w-layout-blockcontainer container narrow w-container">
        <div className="w-layout-vflex dual-grid">
          <div className="decor-on-image">
            <div className="w-layout-vflex chip">
              <h4 className="paragraph-normal">{chipText}</h4>
            </div>
            <h1 className="heading-2 dark">{title}</h1>
            <ul role="list" className="list">
              {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <Button text="Learn more" href={buttonHref} variant="dark" />
          </div>
          <div className="full-width-block"></div>
        </div>
      </div>
    </section>
  )
}
