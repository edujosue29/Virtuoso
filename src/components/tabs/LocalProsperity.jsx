import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CONSERVATION_IMAGE = '/images/carpintera/IMG_3028.jpg'

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

        {/* Pull quote right */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
            color: muted, lineHeight: 1.8,
            maxWidth: 340, textAlign: 'right',
          }}
        >
          {prosperity.description}
        </motion.p>
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
        {/* Tall image */}
        <div style={{
          position: 'relative',
          height: '100%',
          minHeight: 480,
          overflow: 'hidden',
          borderRadius: 6,
        }}>
          <img
            src={img}
            alt="Bosque nuboso en conservación"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 30%',
              filter: 'brightness(0.72) saturate(0.85)',
              display: 'block',
            }}
          />
          {/* Bottom label */}
          <div style={{
            position: 'absolute', bottom: '1.5rem', left: '1.5rem',
          }}>
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.65rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.45)',
            }}>
              Bosque nuboso · SINAC
            </span>
          </div>
        </div>

        {/* Feature grid — 2 columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
        }}>
          {prosperity.indicators.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                padding: '2rem 1.75rem',
                borderBottom: i < prosperity.indicators.length - 2
                  ? '1px solid rgba(255,255,255,0.07)'
                  : 'none',
                borderRight: i % 2 === 0
                  ? '1px solid rgba(255,255,255,0.07)'
                  : 'none',
              }}
            >
              {/* Icon */}
              <div style={{
                width: 40, height: 40,
                borderRadius: '50%',
                border: '1px solid rgba(201,168,76,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#c9a84c',
                marginBottom: '1.1rem',
              }}>
                {ICONS[i]}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.3rem', fontWeight: 500,
                color: cream, lineHeight: 1.3,
                marginBottom: '0.55rem',
              }}>
                {ind.label}
              </h3>

              {/* Ultra-brief description */}
              {ind.note && (
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem', color: muted,
                  lineHeight: 1.65,
                }}>
                  {ind.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Desafíos ─────────────────────────────────────────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '1.25rem',
        marginBottom: '2rem',
      }}>
        <span style={{
          fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.65rem',
          letterSpacing: '0.24em', textTransform: 'uppercase',
          color: '#c9a84c', flexShrink: 0,
        }}>
          Desafíos del Custodio
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.2)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {prosperity.issues.map((item, i) => (
          <AccordionItem key={i} item={item} index={i} dark={dark} />
        ))}
      </div>
    </div>
  )
}
