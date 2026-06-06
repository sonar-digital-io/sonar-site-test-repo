import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

const BOOK_CALL_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2shxvK2fg74A2heUDk_8v42ZTIx_4W8YG37h8tCGcjVzw2oX8p_bhq7aV2I4sL4h2McgtN8ygb'

const serviceLinks = [
  { to: '/discovery-lab', label: 'Discovery Lab' },
  { to: '/design-lab', label: 'Design Lab' },
  { to: '/software-lab', label: 'Software Lab' },
  { to: '/growth-lab', label: 'Growth Lab' },
]

const caseStudyLinks = [
  { to: '/medtech-case-study', label: 'Medtech cold outreach' },
  { to: '/yusp-data-flow-editor', label: 'New product for Yusp' },
  { to: '/yuspify-saas-admin', label: 'New B2B SaaS product UI' },
  { to: '/scaleplex-brand-identity', label: 'New brand identity for Scaleplex' },
  { to: '/rapidsearch-case-study', label: 'Discovery for a Shopify app' },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [casesOpen, setCasesOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [desktopCasesOpen, setDesktopCasesOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => location.pathname === path

  useEffect(() => {
    if (!navRef.current) return
    gsap.fromTo(navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.05 }
    )
    if (mobileMenuRef.current) {
      gsap.set(mobileMenuRef.current, { clipPath: 'inset(100% 0 0 0)', opacity: 0 })
      const items = mobileMenuRef.current.querySelectorAll('#mobile-menu .accordion, #mobile-menu .button')
      gsap.set(items, { opacity: 0, y: 10 })
    }
  }, [])

  useEffect(() => {
    if (!mobileMenuRef.current) return
    const items = mobileMenuRef.current.querySelectorAll('#mobile-menu .accordion, #mobile-menu .button')
    if (mobileMenuOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
        { clipPath: 'inset(0% 0 0 0)', opacity: 1, duration: 0.45, ease: 'power3.out' }
      )
      gsap.fromTo(items,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.06, ease: 'power2.out', delay: 0.15 }
      )
    } else {
      gsap.to(mobileMenuRef.current, { clipPath: 'inset(100% 0 0 0)', opacity: 0, duration: 0.3, ease: 'power2.in' })
      gsap.set(items, { opacity: 0, y: 10 })
    }
  }, [mobileMenuOpen])

  return (
    <div role="banner" className="navbar-work navbar navbar-2 w-nav" ref={navRef}>
      <div className="desktop-menu">
        <div className="container w-container">
          <div className="w-layout-hflex main-nav-wrapper">
            <Link to="/" className={`desktop-brand w-inline-block${isActive('/') ? ' w--current' : ''}`}>
              <img src="/images/sonar-logo.svg" loading="lazy" alt="" className="sonar-logo-desktop" />
            </Link>
            <div className="main-menu hidden">
              <div className="menu">
                <div
                  className="w-dropdown"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  <div className="dropdown-toggle-2 w-dropdown-toggle">
                    <div className="menu-item-2">Services</div>
                    <div className="icon">expand_more</div>
                  </div>
                  {desktopServicesOpen && (
                    <nav className="fbl-dropdown-list-5 w-dropdown-list w--open">
                      <div className="fbl-dropdown-7">
                        <div className="w-layout-vflex dropdown-menu-lisitng">
                          {serviceLinks.map(link => (
                            <Link key={link.to} to={link.to} className={`menu-item${isActive(link.to) ? ' w--current' : ''}`}>
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </nav>
                  )}
                </div>
                <div
                  className="w-dropdown"
                  onMouseEnter={() => setDesktopCasesOpen(true)}
                  onMouseLeave={() => setDesktopCasesOpen(false)}
                >
                  <div className="dropdown-toggle-2 w-dropdown-toggle">
                    <div className="menu-item-2">Case studies</div>
                    <div className="icon">expand_more</div>
                  </div>
                  {desktopCasesOpen && (
                    <nav className="fbl-dropdown-list-5 w-dropdown-list w--open">
                      <div className="fbl-dropdown-7">
                        <div className="w-layout-vflex dropdown-menu-lisitng">
                          {caseStudyLinks.map(link => (
                            <Link key={link.to} to={link.to} className={`menu-item${isActive(link.to) ? ' w--current' : ''}`}>
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </nav>
                  )}
                </div>
                <Link to="/about" className={`link-block w-inline-block${isActive('/about') ? ' w--current' : ''}`}>
                  <div className="menu-item-2">About us</div>
                </Link>
              </div>
            </div>
            <a href={BOOK_CALL_URL} className="button w-inline-block">
              <div className="w-layout-vflex text-part">
                <div className="button--text">Book a call</div>
              </div>
              <div className="w-layout-vflex icon-part">
                <div className="icon">arrow_forward</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-layout-vflex mobile-menu">
        <div className={`mobile-menu--openable${mobileMenuOpen ? ' opened' : ''}`} ref={mobileMenuRef} style={{ transition: 'none', maxHeight: 'calc(100dvh - 98px)', overflowY: 'scroll' }}>
          <div className="container">
            <div id="mobile-menu" className="mobile-accordion-list">
              <div className="accordion">
                <div className="accordion_header" onClick={() => setServicesOpen(!servicesOpen)}>
                  <div className="mob-menu-category">Services</div>
                  <div className="accordion_icon-wrapper">
                    <div className="material-icons" style={{ transform: servicesOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>add</div>
                  </div>
                </div>
                <div className="accordion_panel" style={servicesOpen ? { display: 'block', height: 'auto' } : { display: 'none' }}>
                  <div className="w-layout-vflex mobile-menu-group">
                    {serviceLinks.map(link => (
                      <Link key={link.to} to={link.to} className={`mobile-menu-link${isActive(link.to) ? ' w--current' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="accordion">
                <div className="accordion_header" onClick={() => setCasesOpen(!casesOpen)}>
                  <div className="mob-menu-category">Case studies</div>
                  <div className="accordion_icon-wrapper">
                    <div className="material-icons" style={{ transform: casesOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>add</div>
                  </div>
                </div>
                <div className="accordion_panel" style={casesOpen ? { display: 'block', height: 'auto' } : { display: 'none' }}>
                  <div className="w-layout-vflex mobile-menu-group">
                    {caseStudyLinks.map(link => (
                      <Link key={link.to} to={link.to} className={`mobile-menu-link${isActive(link.to) ? ' w--current' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="accordion">
                <div className="accordion_header">
                  <Link to="/about" className={`menu-link-item w-inline-block${isActive('/about') ? ' w--current' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                    <div className="mob-menu-category">About us</div>
                  </Link>
                </div>
              </div>
              <a href={BOOK_CALL_URL} className="button w-inline-block">
                <div className="w-layout-vflex text-part">
                  <div className="button--text">Book a call</div>
                </div>
                <div className="w-layout-vflex icon-part">
                  <div className="icon">arrow_forward</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-layout-vflex mobile-nav">
          <div className="w-layout-vflex container">
            <div className="w-layout-vflex mobile-nav-header">
              <Link to="/" className="brand-mobile w-nav-brand" onClick={() => setMobileMenuOpen(false)}>
                <img src="/images/sonar-logo.svg" loading="lazy" alt="" className="sonar-logo-white" />
              </Link>
              <div className="w-layout-vflex mobile-menu-opener-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <div className="material-icons">{mobileMenuOpen ? 'close' : 'menu'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
