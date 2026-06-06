import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import DiscoveryLab from './pages/DiscoveryLab'
import DesignLab from './pages/DesignLab'
import SoftwareLab from './pages/SoftwareLab'
import GrowthLab from './pages/GrowthLab'
import MedtechCaseStudy from './pages/MedtechCaseStudy'
import YuspDataFlowEditor from './pages/YuspDataFlowEditor'
import YuspifySaasAdmin from './pages/YuspifySaasAdmin'
import ScaleplexBrandIdentity from './pages/ScaleplexBrandIdentity'
import RapidsearchCaseStudy from './pages/RapidsearchCaseStudy'

gsap.registerPlugin(ScrollTrigger)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    ScrollTrigger.getAll().forEach(t => t.kill())
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discovery-lab" element={<DiscoveryLab />} />
        <Route path="/design-lab" element={<DesignLab />} />
        <Route path="/software-lab" element={<SoftwareLab />} />
        <Route path="/growth-lab" element={<GrowthLab />} />
        <Route path="/medtech-case-study" element={<MedtechCaseStudy />} />
        <Route path="/yusp-data-flow-editor" element={<YuspDataFlowEditor />} />
        <Route path="/yuspify-saas-admin" element={<YuspifySaasAdmin />} />
        <Route path="/scaleplex-brand-identity" element={<ScaleplexBrandIdentity />} />
        <Route path="/rapidsearch-case-study" element={<RapidsearchCaseStudy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
