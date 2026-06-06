import { Link } from 'react-router-dom'
import { useScrollAnimations, fadeUp } from '../hooks/useGsap'

export default function Footer() {
  const ref = useScrollAnimations((container) => {
    fadeUp('.footer-inner', 0.1, 'top 92%')(container)
  })

  return (
    <section className="footer" ref={ref}>
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-vflex footer-inner">
          <div className="w-layout-vflex footer-wrapper">
            <Link to="/" className="logo w-inline-block">
              <img src="/images/sonar-logo.svg" loading="lazy" alt="" className="sonar-logo footer" />
            </Link>
            <h4 className="paragraph-large white">&copy; All rights reserved - 2025 - Sonar Digital </h4>
          </div>
        </div>
      </div>
    </section>
  )
}
