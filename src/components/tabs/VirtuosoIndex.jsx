import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const R = 46
const CIRC = 2 * Math.PI * R // ≈ 289

const PILLARS = [
  {
    key: 'salud',
    label: 'Salud',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        <path d="M12 8c-2.5 0-4 1.5-4 3.5C8 14 10 16 12 18c2-2 4-4 4-6.5C16 9.5 14.5 8 12 8z" />
      </svg>
    ),
  },
  {
    key: 'amor',
    label: 'Amor',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
      </svg>
    ),
  },
  {
    key: 'sabiduria',
    label: 'Sabiduría',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5z" />
      </svg>
    ),
  },
  {
    key: 'prosperidad',
    label: 'Prosperidad',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12C12 7 8 4 4 5c4 0 8 3 8 7zM12 12C12 7 16 4 20 5c-4 0-8 3-8 7zM12 12C12 17 9 20 5 21c4-1 7-4 7-9zM12 12C12 17 15 20 19 21c-4-1-7-4-7-9z" />
      </svg>
    ),
  },
]

// Animated SVG ring gauge
function RingGauge({ score, label, icon, isActive, onClick }) {
  const filled = (score / 100) * CIRC
  const gap = CIRC - filled

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      onClick={onClick}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '0.75rem', cursor: 'pointer',
      }}
    >
      <div style={{ position: 'relative', width: 116, height: 116 }}>
        <svg width="116" height="116" viewBox="0 0 116 116" fill="none">
          {/* Background ring */}
          <circle
            cx="58" cy="58" r={R}
            stroke="rgba(201,168,76,0.1)"
            strokeWidth="7"
            fill="none"
          />
          {/* Animated score arc */}
          <motion.circle
            cx="58" cy="58" r={R}
            stroke={isActive ? '#e8c96e' : '#c9a84c'}
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${filled} ${gap}`}
            strokeDashoffset={CIRC * 0.25} // start at top
            initial={{ strokeDasharray: `0 ${CIRC}` }}
            whileInView={{ strokeDasharray: `${filled} ${gap}` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transform: 'rotate(-90deg)', transformOrigin: '58px 58px' }}
          />
        </svg>

        {/* Center content */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '0.15rem',
        }}>
          <span style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.6rem', fontWeight: 300,
            color: isActive ? '#c9a84c' : '#111a10',
            lineHeight: 1, transition: 'color 0.25s',
          }}>
            {score}
          </span>
          <span style={{
            color: isActive ? '#c9a84c' : 'rgba(17,26,16,0.35)',
            transition: 'color 0.25s',
          }}>
            {icon}
          </span>
        </div>
      </div>

      <span style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: '0.95rem', fontWeight: 300,
        color: isActive ? '#111a10' : 'rgba(17,26,16,0.55)',
        letterSpacing: '0.02em', transition: 'color 0.25s',
      }}>
        {label}
      </span>
    </motion.div>
  )
}

export default function VirtuosoIndex({ property }) {
  const { virtuosoIndex } = property
  const [expanded, setExpanded] = useState('salud')

  const toggle = (key) => setExpanded(expanded === key ? null : key)

  const avg = Math.round(
    PILLARS.reduce((acc, p) => acc + (virtuosoIndex[p.key] ?? 0), 0) / PILLARS.length
  )

  return (
    <div>
      {/* Section label */}
      <p style={{
        fontFamily: 'Inter, sans-serif', fontSize: '0.6rem',
        letterSpacing: '0.28em', textTransform: 'uppercase',
        color: '#c9a84c', marginBottom: '0.9rem',
      }}>
        Índice de Alineación
      </p>

      <div style={{
        display: 'flex', alignItems: 'flex-end',
        justifyContent: 'space-between', flexWrap: 'wrap',
        gap: '1.5rem', marginBottom: '3.5rem',
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 400, lineHeight: 1.05, margin: 0,
          }}
        >
          <span style={{ color: '#c9a84c' }}>Índice</span>
          <span style={{ color: '#111a10' }}> Virtuoso</span>
        </motion.h2>

        {/* Global avg */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
          <span style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300, color: '#c9a84c', lineHeight: 1,
          }}>
            {avg}
          </span>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.58rem',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.45)',
          }}>
            / 100
          </span>
        </div>
      </div>

      {/* ── Ring gauges ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          background: 'rgba(201,168,76,0.06)',
          border: '1px solid rgba(201,168,76,0.12)',
          padding: '2.5rem 1rem',
          marginBottom: '3rem',
          position: 'relative',
        }}
      >
        {PILLARS.map((p, i) => (
          <div key={p.key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {i > 0 && (
              <div style={{
                position: 'absolute',
                left: `${(i / 4) * 100}%`,
                top: '15%', bottom: '15%',
                width: 1,
                background: 'rgba(201,168,76,0.15)',
              }} />
            )}
            <RingGauge
              score={virtuosoIndex[p.key] ?? 0}
              label={p.label}
              icon={p.icon}
              isActive={expanded === p.key}
              onClick={() => toggle(p.key)}
            />
          </div>
        ))}

        {/* Tap hint */}
        <p style={{
          position: 'absolute', bottom: 10, left: 0, right: 0, textAlign: 'center',
          fontFamily: 'Inter, sans-serif', fontSize: '0.54rem',
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'rgba(17,26,16,0.22)',
        }}>
          Selecciona un pilar para leer su análisis
        </p>
      </motion.div>

      {/* ── Accordion strips ─────────────────────────────────────────── */}
      <div style={{ border: '1px solid rgba(201,168,76,0.12)' }}>
        {PILLARS.map((pillar, i) => {
          const score = virtuosoIndex[pillar.key] ?? 0
          const desc = virtuosoIndex.descriptions?.[pillar.key]
          const isOpen = expanded === pillar.key

          return (
            <motion.div
              key={pillar.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              {i > 0 && <div style={{ height: 1, background: 'rgba(201,168,76,0.1)' }} />}

              <button
                onClick={() => toggle(pillar.key)}
                style={{
                  width: '100%', display: 'grid',
                  gridTemplateColumns: '1fr auto auto',
                  alignItems: 'center', gap: '2rem',
                  padding: '1.75rem 2rem',
                  background: isOpen ? 'rgba(17,26,16,0.025)' : '#ffffff',
                  border: 'none', cursor: 'pointer', textAlign: 'left',
                  transition: 'background 0.3s ease',
                  borderLeft: isOpen ? '3px solid #c9a84c' : '3px solid transparent',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: isOpen ? '#c9a84c' : 'rgba(17,26,16,0.3)', transition: 'color 0.25s' }}>
                    {pillar.icon}
                  </span>
                  <span style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                    fontWeight: 300,
                    color: isOpen ? '#111a10' : 'rgba(17,26,16,0.6)',
                    transition: 'color 0.25s',
                  }}>
                    {pillar.label}
                  </span>
                </div>

                <span style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  fontWeight: 300, color: '#c9a84c', lineHeight: 1,
                }}>
                  {score}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', minWidth: 72 }}>
                  <span style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '0.56rem',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: isOpen ? '#c9a84c' : 'rgba(17,26,16,0.22)',
                    transition: 'color 0.25s',
                  }}>
                    {isOpen ? 'Cerrar' : 'Leer'}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ display: 'inline-block', color: '#c9a84c', fontSize: '1rem', lineHeight: 1 }}
                  >
                    ›
                  </motion.span>
                </div>
              </button>

              <AnimatePresence>
                {isOpen && desc && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      padding: '0 2rem 2rem',
                      paddingLeft: 'calc(2rem + 18px + 1rem + 3px)',
                      background: 'rgba(17,26,16,0.025)',
                      borderLeft: '3px solid #c9a84c',
                    }}>
                      <p style={{
                        fontFamily: '"Cormorant Garamond", serif',
                        fontSize: '1.02rem', fontWeight: 300,
                        color: 'rgba(17,26,16,0.65)', lineHeight: 1.9,
                        maxWidth: 680,
                      }}>
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      <p style={{
        marginTop: '1.75rem', fontFamily: 'Inter, sans-serif', fontSize: '0.56rem',
        color: 'rgba(17,26,16,0.2)', lineHeight: 1.8, textAlign: 'center',
        letterSpacing: '0.06em',
      }}>
        El Índice Virtuoso es una metodología propietaria de Virtus Real Estate para la evaluación holística de propiedades de alto valor natural.
      </p>
    </div>
  )
}
