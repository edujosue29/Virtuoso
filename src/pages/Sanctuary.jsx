import { useState, useEffect, useRef } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PROPERTIES } from '../data/properties'
import VideoHero from '../components/sanctuary/VideoHero'
import TabNav, { TABS } from '../components/sanctuary/TabNav'
import ImageGallery from '../components/ui/ImageGallery'
import TechnicalSheet from '../components/tabs/TechnicalSheet'
import FloraFauna from '../components/tabs/FloraFauna'
import EarthMemory from '../components/tabs/EarthMemory'
import LocalProsperity from '../components/tabs/LocalProsperity'
import AncestralWisdom from '../components/tabs/AncestralWisdom'
import CommunityPulse from '../components/tabs/CommunityPulse'
import VirtuosoIndex from '../components/tabs/VirtuosoIndex'
import CustodyLegacy from '../components/tabs/CustodyLegacy'

const TAB_COMPONENTS = {
  technical:  TechnicalSheet,
  flora:      FloraFauna,
  memory:     EarthMemory,
  prosperity: LocalProsperity,
  ancestral:  AncestralWisdom,
  pulse:      CommunityPulse,
  index:      VirtuosoIndex,
  legacy:     CustodyLegacy,
}

const CONTENT_TABS = TABS.filter((t) => t.id !== 'gallery')

// Alternating dark / light sections — dark = #31572C (deep forest), light = #ffffff
const SECTION_BG   = ['#ffffff', '#31572C', '#ffffff', '#31572C', '#ffffff', '#31572C', '#ffffff', '#31572C']
const SECTION_DARK = [false,     true,       false,     true,      false,     true,      false,     true    ]

// ── Sanctuary page ────────────────────────────────────────────────────────────
export default function Sanctuary() {
  const { slug } = useParams()
  const property = PROPERTIES.find((p) => p.slug === slug)
  const [activeTab, setActiveTab] = useState(TABS[0].id)
  const sectionRefs = useRef({})
  const navRef = useRef(null)
  const scrollingTo = useRef(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  // Scroll-spy
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

  const scrollToSection = (tabId) => {
    const el = sectionRefs.current[tabId]
    if (!el) return
    const navHeight = navRef.current?.offsetHeight ?? 64
    scrollingTo.current = true
    setActiveTab(tabId)
    window.scrollTo({ top: el.offsetTop - navHeight, behavior: 'smooth' })
    setTimeout(() => { scrollingTo.current = false }, 1200)
  }

  if (!property) return <Navigate to="/" replace />

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>

      <VideoHero property={property} />
      <TabNav navRef={navRef} activeTab={activeTab} onTabChange={scrollToSection} />

      <main>
        {/* ── 8 content sections ── */}
        {CONTENT_TABS.map((tab, index) => {
          const Component = TAB_COMPONENTS[tab.id]
          const bg   = SECTION_BG[index]
          const dark = SECTION_DARK[index]

          return (
            <section
              key={tab.id}
              ref={(el) => { sectionRefs.current[tab.id] = el }}
            >
              <div style={{ background: bg }}>
                <div style={{ maxWidth: 1100, margin: '0 auto', padding: '7rem 3rem 9rem' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Component property={property} dark={dark} />
                  </motion.div>
                </div>
              </div>
            </section>
          )
        })}

        {/* ── Gallery section ── */}
        <section ref={(el) => { sectionRefs.current['gallery'] = el }}>
          <div style={{ background: '#f8f6f1' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '7rem 3rem 9rem' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '3.5rem' }}
              >
                <p style={{
                  fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.6rem',
                  letterSpacing: '0.32em', textTransform: 'uppercase',
                  color: '#c9a84c', marginBottom: '1rem',
                }}>
                  El Santuario en Imágenes
                </p>
                <h3 style={{
                  fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400,
                  lineHeight: 1.2, margin: 0,
                }}>
                  {(() => {
                    const parts = property.name.split(' ')
                    return <>
                      <span style={{ color: '#c9a84c' }}>{parts[0]}</span>
                      {parts.length > 1 && <span style={{ color: '#31572C' }}> {parts.slice(1).join(' ')}</span>}
                    </>
                  })()}
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <ImageGallery images={property.gallery} title={property.name} />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div style={{
        background: '#31572C', padding: '4rem 0', textAlign: 'center',
      }}>
        <div style={{ marginBottom: '1.25rem' }}>
          <img
            src="/images/logo-virtus.png"
            alt="Virtus Realty"
            style={{ height: 52, width: 'auto', filter: 'invert(1)', opacity: 0.18 }}
          />
        </div>
        <p style={{
          fontSize: '0.58rem', color: 'rgba(245,240,232,0.25)',
          fontFamily: 'Inter, sans-serif', letterSpacing: '0.2em', textTransform: 'uppercase',
        }}>
          VIRTUS REAL ESTATE · VIRTUOSO · {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}
