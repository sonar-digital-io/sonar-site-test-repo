import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <section className="footer">
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
