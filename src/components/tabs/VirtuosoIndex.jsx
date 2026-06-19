import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

const PILLARS = [
  {
    key: 'salud',
    labelKey: 'virtuoso_index.pillar_salud',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        <path d="M12 8c-2.5 0-4 1.5-4 3.5C8 14 10 16 12 18c2-2 4-4 4-6.5C16 9.5 14.5 8 12 8z" />
      </svg>
    ),
    accentColor: '#1b7847',
    lightAccent: '#e6f5f0',
  },
  {
    key: 'amor',
    labelKey: 'virtuoso_index.pillar_amor',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
      </svg>
    ),
    accentColor: '#c44569',
    lightAccent: '#fce6ed',
  },
  {
    key: 'sabiduria',
    labelKey: 'virtuoso_index.pillar_sabiduria',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5z" />
      </svg>
    ),
    accentColor: '#2d5a8a',
    lightAccent: '#e8f2f9',
  },
  {
    key: 'prosperidad',
    labelKey: 'virtuoso_index.pillar_prosperidad',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12C12 7 8 4 4 5c4 0 8 3 8 7zM12 12C12 7 16 4 20 5c-4 0-8 3-8 7zM12 12C12 17 9 20 5 21c4-1 7-4 7-9zM12 12C12 17 15 20 19 21c-4-1-7-4-7-9z" />
      </svg>
    ),
    accentColor: '#d4a041',
    lightAccent: '#fef8f0',
  },
]

export default function VirtuosoIndex({ property }) {
  const { t } = useTranslation()
  const { virtuosoIndex, slug } = property
  const [selected, setSelected] = useState(null)

  const getSanctuaryKey = () => {
    if (slug === 'division-perez-zeledon') return 'division_pz'
    if (slug === 'la-carpintera') return 'la_carpintera'
    return 'division_pz'
  }

  // Get translated descriptions
  const descriptions = t(`sections.${getSanctuaryKey()}.virtuoso_index.descriptions`, { returnObjects: true }) || {}

  const selectedPillar = selected ? PILLARS.find(p => p.key === selected) : null

  return (
    <div>
      {/* ── Heading block ───────────────────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'flex-end',
        marginBottom: '4rem',
      }}>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: '"DM Sans", Inter, sans-serif',
              fontSize: '0.72rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#c9a84c',
              marginBottom: '1rem',
            }}
          >
            {t('virtuoso_index.title')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
              fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)',
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            <span style={{ color: '#1a3a2d', display: 'block' }}>{t('virtuoso_index.subtitle')}</span>
          </motion.h2>
        </div>

      </div>

      {/* ── Grid of 4 cards (1 row) ────────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem',
        marginBottom: '3rem',
      }}>
        {PILLARS.map((pillar, i) => {
          const isSelected = selected === pillar.key
          return (
            <motion.button
              key={pillar.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSelected(selected === pillar.key ? null : pillar.key)}
              style={{
                background: isSelected ? pillar.lightAccent : '#f8f7f5',
                border: `2px solid ${isSelected ? pillar.accentColor : '#e0dcd5'}`,
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                boxShadow: isSelected
                  ? `0 12px 32px ${pillar.accentColor}20`
                  : '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.boxShadow = `0 16px 40px ${pillar.accentColor}15`
                  e.currentTarget.style.borderColor = pillar.accentColor
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.background = pillar.lightAccent
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
                  e.currentTarget.style.borderColor = '#e0dcd5'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = '#f8f7f5'
                }
              }}
            >
              {/* Icon Container */}
              <div style={{
                marginBottom: '1.25rem',
                color: pillar.accentColor,
                display: 'flex',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                alignItems: 'center',
                background: `${pillar.accentColor}08`,
                borderRadius: '12px',
                transition: 'all 0.4s ease',
              }}>
                {pillar.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.35rem',
                  fontWeight: 500,
                  color: '#1a3a2d',
                  margin: 0,
                  transition: 'color 0.35s ease',
                  letterSpacing: '-0.5px',
                }}
              >
                {t(pillar.labelKey)}
              </h3>
            </motion.button>
          )
        })}
      </div>

      {/* ── Info Modal ──────────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {selected && selectedPillar && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            style={{
              background: `linear-gradient(135deg, ${selectedPillar.lightAccent} 0%, #ffffff 100%)`,
              border: `2px solid ${selectedPillar.accentColor}30`,
              borderRadius: '16px',
              padding: '2.5rem 3rem',
              marginTop: '2.5rem',
              boxShadow: `0 12px 32px ${selectedPillar.accentColor}12`,
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.5rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                color: selectedPillar.accentColor,
                flexShrink: 0,
                marginTop: '0.2rem',
                display: 'flex',
                width: '56px',
                height: '56px',
                alignItems: 'center',
                justifyContent: 'center',
                background: `${selectedPillar.accentColor}12`,
                borderRadius: '10px',
              }}>
                {selectedPillar.icon}
              </div>
              <span style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.8rem',
                fontWeight: 400,
                color: '#1a3a2d',
                marginTop: '0.25rem',
              }}>
                {t(selectedPillar.labelKey)}
              </span>
            </div>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.1rem',
              fontWeight: 300,
              color: '#333333',
              lineHeight: 1.9,
              margin: 0,
              letterSpacing: '0.3px',
            }}>
              {descriptions?.[selected]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
