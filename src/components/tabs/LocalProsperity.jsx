import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CONSERVATION_IMAGE = '/images/division/ca.jpeg'

// ═════════════════════════════════════════════════════════════════════════════
// CLEAN STATIC CAROUSEL — Static design with icon row and hover effects
// ═════════════════════════════════════════════════════════════════════════════
function StaticConservationSection({ indicators, cream, dark }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 650,
        overflow: 'hidden',
        borderRadius: 6,
      }}
    >
      {/* ──── Full-Width Image (No Parallax) ──── */}
      <img
        src={CONSERVATION_IMAGE}
        alt="Conservación Activa"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'right 30%',
          zIndex: 0,
        }}
      />

      {/* ──── Overlay Black ──── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.70)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* ──── Center Row: 5 Icons (Horizontal Layout) ──── */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          gap: '1.5rem',
          zIndex: 10,
          alignItems: 'center',
        }}
      >
        {indicators.map((ind, i) => (
          <div
            key={ind.label}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: hoveredIndex === i ? 'scale(1.12)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Icon Circle */}
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.2) 0%, rgba(201,168,76,0.05) 100%)',
                border: '1.5px solid rgba(201,168,76,0.35)',
                boxShadow: hoveredIndex === i
                  ? '0 0 24px rgba(201,168,76,0.4)'
                  : 'inset 0 1px 4px rgba(255,255,255,0.1), 0 0 12px rgba(201,168,76,0.15)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                marginBottom: '0.8rem',
              }}
            >
              {/* SVG Icon */}
              <div
                style={{
                  transform: 'scale(1.8)',
                  color: '#c9a84c',
                  filter: 'drop-shadow(0 2px 6px rgba(201,168,76,0.25))',
                  opacity: 0.92,
                }}
              >
                {ICONS[i]}
              </div>
            </div>

            {/* Title */}
            <h4
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: cream,
                lineHeight: 1.3,
                margin: 0,
                letterSpacing: '0.3px',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                maxWidth: 110,
              }}
            >
              {ind.label}
            </h4>
          </div>
        ))}
      </div>

      {/* ──── Description Overlay (Bottom Left) ──── */}
      <div
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '3rem',
          maxWidth: '45%',
          zIndex: 5,
        }}
      >
      </div>
    </div>
  )
}

// Minimal SVG icons — one per indicator
const ICONS = [
  // Compass / ecoturismo
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>,
  // Leaf / organic
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>,
  // Tree / PSA
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12"/><path d="M12 12C12 7 8 4 4 5c4 0 8 3 8 7z"/>
    <path d="M12 12C12 7 16 4 20 5c-4 0-8 3-8 7z"/>
    <path d="M12 12c0 5-3 8-7 9 4-1 7-4 7-9z"/>
    <path d="M12 12c0 5 3 8 7 9-4-1-7-4-7-9z"/>
  </svg>,
  // Globe / UNESCO
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>,
  // People / community
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
]

function AccordionItem({ item, index, dark }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        borderBottom: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      {/* Header - Problem */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '100%',
          padding: '1.5rem 2rem',
          background: dark ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.5)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={(e) => !dark && (e.currentTarget.style.background = 'rgba(255,255,255,0.7)')}
        onMouseLeave={(e) => !dark && (e.currentTarget.style.background = 'rgba(255,255,255,0.5)')}
      >
        <p style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.25rem', lineHeight: 1.75,
          color: dark ? 'rgba(245,240,232,0.82)' : '#111a10',
          fontWeight: 300,
          margin: 0,
          textAlign: 'left',
          flex: 1,
        }}>
          {item.problem}
        </p>

        {/* Plus/Minus Icon */}
        <motion.span
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            color: '#c9a84c',
            fontSize: '1.5rem',
            flexShrink: 0,
            marginLeft: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          +
        </motion.span>
      </button>

      {/* Expandable content - Solution */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '1.5rem 2rem',
              background: dark ? 'rgba(45,74,43,0.15)' : 'rgba(201,168,76,0.04)',
              borderLeft: '4px solid #c9a84c',
            }}>
              <p style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.15rem', fontWeight: 300,
                color: dark ? 'rgba(245,240,232,0.75)' : '#111a10',
                lineHeight: 1.8,
                margin: 0,
              }}>
                {item.solution}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function LocalProsperity({ property, finca, dark }) {
  const { sectionImages } = property
  // Use finca-specific prosperity data when available
  const prosperity = finca?.prosperity ?? property.prosperity
  const img = sectionImages?.prosperity || CONSERVATION_IMAGE

  const cream = '#faf9f6'
  const muted = 'rgba(245,240,232,0.52)'

  return (
    <div>

      {/* ── Top: heading block ──────────────────────────────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'flex-end',
        justifyContent: 'space-between', flexWrap: 'wrap',
        gap: '1.5rem', marginBottom: '3.5rem',
      }}>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.72rem',
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: '#c9a84c', marginBottom: '1rem',
            }}
          >
            Custodia del Ecosistema
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
              fontSize: 'clamp(2.6rem, 6vw, 5rem)',
              fontWeight: 700, lineHeight: 1.0,
              letterSpacing: '-0.02em', margin: 0,
            }}
          >
            <span style={{ color: cream, display: 'block' }}>Conservación</span>
            <span style={{ color: '#c9a84c', display: 'block' }}>Activa</span>
          </motion.h2>
        </div>

      </div>

      {/* ── Main: tall image left + feature grid right ──────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 3fr',
          gap: '3rem',
          alignItems: 'stretch',
          marginBottom: '5rem',
        }}
      >
        {/* Text content left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '3rem 2rem',
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: 6,
            minHeight: 480,
          }}
        >
          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)',
            fontWeight: 300,
            color: cream,
            lineHeight: 1.95,
            margin: 0,
          }}>
            {prosperity.description}
          </p>
        </motion.div>

        {/* ──── STATIC CONSERVATION SECTION ──── */}
        <StaticConservationSection indicators={prosperity.indicators} cream={cream} dark={dark} />

      </motion.div>

      {/* ── Desafíos ─────────────────────────────────────────────────────── */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
          fontSize: 'clamp(2rem, 4vw, 2.8rem)',
          fontWeight: 700,
          color: cream,
          letterSpacing: '-0.01em',
          marginBottom: '3rem',
          margin: '4rem 0 3rem 0',
        }}
      >
        Desafíos del Custodio
      </motion.h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {prosperity.issues.map((item, i) => (
          <AccordionItem key={i} item={item} index={i} dark={dark} />
        ))}
      </div>
    </div>
  )
}
