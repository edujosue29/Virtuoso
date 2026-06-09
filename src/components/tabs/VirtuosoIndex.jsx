import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PILLARS = [
  {
    key: 'salud',
    label: 'Salud',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        <path d="M12 8c-2.5 0-4 1.5-4 3.5C8 14 10 16 12 18c2-2 4-4 4-6.5C16 9.5 14.5 8 12 8z" />
      </svg>
    ),
  },
  {
    key: 'amor',
    label: 'Amor',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
      </svg>
    ),
  },
  {
    key: 'sabiduria',
    label: 'Sabiduría',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5z" />
      </svg>
    ),
  },
  {
    key: 'prosperidad',
    label: 'Prosperidad',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12C12 7 8 4 4 5c4 0 8 3 8 7zM12 12C12 7 16 4 20 5c-4 0-8 3-8 7zM12 12C12 17 9 20 5 21c4-1 7-4 7-9zM12 12C12 17 15 20 19 21c-4-1-7-4-7-9z" />
      </svg>
    ),
  },
]

export default function VirtuosoIndex({ property }) {
  const { virtuosoIndex } = property
  const [selected, setSelected] = useState(null)

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
            Índice de Alineación
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
            <span style={{ color: '#c9a84c', display: 'block' }}>Índice</span>
            <span style={{ color: '#111a10', display: 'block', fontWeight: 400 }}>Virtuoso</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.15rem, 1.6vw, 1.3rem)',
            fontWeight: 300,
            color: 'rgba(17,26,16,0.85)',
            lineHeight: 1.9,
            paddingBottom: '0.5rem',
          }}
        >
          Metodología propietaria de Virtus Real Estate para la evaluación holística de propiedades de alto valor natural.
        </motion.p>
      </div>

      {/* ── Grid of 4 cards (1 row) ────────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem',
        marginBottom: '3rem',
      }}>
        {PILLARS.map((pillar, i) => (
          <motion.button
            key={pillar.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => setSelected(selected === pillar.key ? null : pillar.key)}
            style={{
              background: selected === pillar.key ? 'rgba(42,92,56,0.08)' : '#ffffff',
              border: selected === pillar.key ? '2px solid rgba(42,92,56,0.4)' : '1px solid rgba(42,92,56,0.18)',
              borderRadius: '12px',
              padding: '2.5rem 2rem',
              boxShadow: selected === pillar.key ? '0 8px 24px rgba(42,92,56,0.12)' : '0 4px 16px rgba(17,26,16,0.08)',
              transition: 'all 0.35s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              if (selected !== pillar.key) {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(42,92,56,0.12)'
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
              }
            }}
            onMouseLeave={(e) => {
              if (selected !== pillar.key) {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(17,26,16,0.08)'
                e.currentTarget.style.borderColor = 'rgba(42,92,56,0.18)'
              }
            }}
          >
            {/* Icon */}
            <div style={{
              marginBottom: '1rem',
              color: selected === pillar.key ? '#c9a84c' : 'rgba(201,168,76,0.7)',
              display: 'flex',
              justifyContent: 'center',
              transition: 'color 0.35s ease',
            }}>
              {pillar.icon}
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.2rem',
                fontWeight: 400,
                color: selected === pillar.key ? '#111a10' : 'rgba(17,26,16,0.8)',
                margin: 0,
                transition: 'color 0.35s ease',
              }}
            >
              {pillar.label}
            </h3>
          </motion.button>
        ))}
      </div>

      {/* ── Info Modal ──────────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            style={{
              background: 'rgba(201,168,76,0.04)',
              border: '1px solid rgba(201,168,76,0.22)',
              borderRadius: '14px',
              padding: '2rem 2.5rem',
              marginTop: '2rem',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem',
              marginBottom: '1.2rem',
            }}>
              <span style={{ color: '#c9a84c', flexShrink: 0, marginTop: '0.2rem' }}>
                {selectedPillar?.icon}
              </span>
              <span style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.5rem',
                fontWeight: 300,
                color: '#111a10',
              }}>
                {selectedPillar?.label}
              </span>
            </div>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.1rem',
              fontWeight: 300,
              color: 'rgba(17,26,16,0.8)',
              lineHeight: 1.85,
              margin: 0,
            }}>
              {virtuosoIndex.descriptions?.[selected]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
