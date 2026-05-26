import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
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

export default function Sanctuary() {
  const { slug } = useParams()
  const property = PROPERTIES.find((p) => p.slug === slug)
  const [activeTab, setActiveTab] = useState(TABS[0].id)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  if (!property) return <Navigate to="/" replace />

  const ActiveComponent = TAB_COMPONENTS[activeTab]

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>

      {/* Video Hero */}
      <VideoHero property={property} />

      {/* Tab Navigation — sticky */}
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content — generous top/bottom breathing room */}
      <main
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '6rem 3rem 8rem',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <ActiveComponent property={property} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Gallery Section */}
      <div style={{ borderTop: '1px solid rgba(17,26,16,0.07)', background: '#ffffff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '6rem 3rem 8rem' }}>

          {/* Editorial header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '3rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.35)' }} />
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: '#c9a84c',
                }}
              >
                Galería
              </span>
              <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.35)' }} />
            </div>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 300,
                color: '#111a10',
                lineHeight: 1.2,
              }}
            >
              El Santuario en Imágenes
            </h2>
          </motion.div>

          <ImageGallery images={property.gallery} title={property.name} />
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          background: '#ffffff',
          borderTop: '1px solid rgba(17,26,16,0.06)',
          padding: '3.5rem 0',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
          <img
            src="/images/logo-virtus.png"
            alt="Virtus Realty"
            style={{ height: 56, width: 'auto', opacity: 0.3 }}
          />
        </div>
        <p
          style={{
            fontSize: '0.65rem',
            color: 'rgba(17,26,16,0.22)',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          VIRTUS REAL ESTATE · VIRTUOSO · {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}
