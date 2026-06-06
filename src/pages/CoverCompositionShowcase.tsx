import CoverComposition from '../components/CoverComposition'

export default function CoverCompositionShowcase() {
  return (
    <section className="section" style={{ padding: '12vh 6vw' }}>
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-vflex section-title centered">
          <div className="w-layout-vflex chip purple">
            <h4 className="paragraph-normal">animation asset</h4>
          </div>
          <h2 className="heading-2 centered dark">Cover composition</h2>
        </div>
        <div style={{ height: '78vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CoverComposition />
        </div>
      </div>
    </section>
  )
}
