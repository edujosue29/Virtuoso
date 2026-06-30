import { useState, useEffect, useRef } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PROPERTIES } from '../data/properties'
import VideoHero from '../components/sanctuary/VideoHero'
import TabNav, { TABS } from '../components/sanctuary/TabNav'
import ImageGallery from '../components/ui/ImageGallery'
import TechnicalSheet from '../components/tabs/TechnicalSheet'
import FloraFauna from '../components/tabs/FloraFauna'
import FloraFaunaCarpintera from '../components/tabs/FloraFaunaCarpintera'
import FloraFaunaStarMountain from '../components/tabs/FloraFaunaStarMountain'
import EarthMemory from '../components/tabs/EarthMemory'
import LocalProsperity from '../components/tabs/LocalProsperity'
import AncestralWisdom from '../components/tabs/AncestralWisdom'
import AncestralWisdomCarpintera from '../components/tabs/AncestralWisdomCarpintera'
import CommunityPulse from '../components/tabs/CommunityPulse'
import VirtuosoIndex from '../components/tabs/VirtuosoIndex'
import CustodyLegacy from '../components/tabs/CustodyLegacy'
import VirtuosPotential from '../components/tabs/VirtuosPotential'
import VirtuosPotentialCarpintera from '../components/tabs/VirtuosPotentialCarpintera'

const TAB_COMPONENTS_DEFAULT = {
  technical:  TechnicalSheet,
  flora:      FloraFauna,
  memory:     EarthMemory,
  prosperity: LocalProsperity,
  ancestral:  AncestralWisdom,
  pulse:      CommunityPulse,
  index:      VirtuosoIndex,
  legacy:     CustodyLegacy,
  potencial:  VirtuosPotential,
}

const TAB_COMPONENTS_CARPINTERA = {
  technical:  TechnicalSheet,
  flora:      FloraFaunaCarpintera,
  memory:     EarthMemory,
  prosperity: LocalProsperity,
  ancestral:  AncestralWisdomCarpintera,
  pulse:      CommunityPulse,
  index:      VirtuosoIndex,
  legacy:     CustodyLegacy,
  potencial:  VirtuosPotentialCarpintera,
}

const TAB_COMPONENTS_STAR_MOUNTAIN = {
  technical:  TechnicalSheet,
  flora:      FloraFaunaStarMountain,
  memory:     EarthMemory,
  prosperity: LocalProsperity,
  pulse:      CommunityPulse,
  index:      VirtuosoIndex,
}

const CONTENT_TABS = TABS.filter(t => t.id !== 'gallery')

// 9 content sections — alternating dark/light
const SECTION_BG   = ['#faf9f6', '#2d4a2b', '#faf9f6', '#2d4a2b', '#faf9f6', '#2d4a2b', '#ffffff', '#2d4a2b', '#faf9f6']
const SECTION_DARK = [false,     true,       false,     true,      false,     true,      false,     true,      false    ]

export default function Sanctuary() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const property = PROPERTIES.find(p => p.slug === slug)

  const [activeTab,     setActiveTab]     = useState(TABS[0].id)
  const [selectedFinca, setSelectedFinca] = useState(0)
  const [heroVisible,   setHeroVisible]   = useState(true)

  const sectionRefs = useRef({})
  const heroRef     = useRef(null)
  const navRef      = useRef(null)
  const scrollingTo = useRef(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  // Track hero visibility to show Portal button in TabNav
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollingTo.current) return
      const navHeight = navRef.current?.offsetHeight ?? 64
      const scrollY = window.scrollY
      let current = TABS[0].id
      for (const { id } of TABS) {
        const el = sectionRefs.current[id]
        if (el && scrollY >= el.offsetTop - navHeight - 80) current = id
      }
      setActiveTab(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = tabId => {
    const el = sectionRefs.current[tabId]
    if (!el) return
    const navHeight = navRef.current?.offsetHeight ?? 64
    scrollingTo.current = true
    setActiveTab(tabId)
    window.scrollTo({ top: el.offsetTop - navHeight, behavior: 'smooth' })
    setTimeout(() => { scrollingTo.current = false }, 1200)
  }

  if (!property) return <Navigate to="/" replace />

  const finca = property.fincas?.[selectedFinca] ?? null

  // Override technical & timeline with finca-specific data when available
  const resolvedProperty = finca
    ? {
        ...property,
        technical: finca.technical ?? property.technical,
        timeline:  finca.timeline ?? property.timeline,
        species:   property.species,
      }
    : property

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <div ref={heroRef}><VideoHero key={property.slug} property={property} /></div>
      <TabNav
        navRef={navRef}
        activeTab={activeTab}
        onTabChange={scrollToSection}
        fincas={property.fincas ?? null}
        selectedFinca={selectedFinca}
        onFincaChange={setSelectedFinca}
        showPortal={!heroVisible}
        property={property}
      />

      <main>
        {CONTENT_TABS.map((tab, index) => {
          const isCarpintera = property?.slug === 'la-carpintera'
          const isStarMountain = property?.slug === 'star-mountain'
          const TAB_COMPONENTS = isCarpintera
            ? TAB_COMPONENTS_CARPINTERA
            : isStarMountain
            ? TAB_COMPONENTS_STAR_MOUNTAIN
            : TAB_COMPONENTS_DEFAULT
          const Component = TAB_COMPONENTS[tab.id]

          // Skip rendering if component doesn't exist (e.g., ancestral for Star Mountain)
          if (!Component) return null

          const bg   = SECTION_BG[index]
          const dark = SECTION_DARK[index]
          return (
            <section
              key={tab.id}
              ref={el => { sectionRefs.current[tab.id] = el }}
            >
              <div style={{ background: bg }}>
                <div style={{ maxWidth: 1100, margin: '0 auto', padding: '7rem 3rem 9rem' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Component property={resolvedProperty} dark={dark} finca={finca} />
                  </motion.div>
                </div>
              </div>
            </section>
          )
        })}

        {/* Gallery */}
        <section ref={el => { sectionRefs.current['gallery'] = el }}>
          <div style={{ background: '#2d4a2b' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '7rem 3rem 9rem' }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '3.5rem' }}>
                <p style={{ fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.72rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1rem', fontWeight: 600 }}>
                  {t('image_gallery.visual_collection')}
                </p>
                <h3 style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400, lineHeight: 1.2, margin: 0, color: '#faf9f6' }}>
                  {t('image_gallery.gallery')}
                </h3>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
                <ImageGallery images={[...property.gallery, ...property.floraFaunaImages]} title={property.name} />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <div style={{ background: '#ffffff', padding: '4rem 0', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <img src="/images/logo-virtus.png" alt="Virtus Realty" style={{ height: 52, width: 'auto', opacity: 0.3 }} />
        </div>
        <p style={{ fontSize: '0.72rem', color: 'rgba(17,26,16,0.4)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          VIRTUS REAL ESTATE · VIRTUOSO · {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}
