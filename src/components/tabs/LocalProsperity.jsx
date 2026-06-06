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

function FlipCard({ item, index, dark }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      style={{ perspective: 900, height: 240 }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%', height: '100%',
          position: 'relative', transformStyle: 'preserve-3d',
          cursor: 'pointer',
        }}
      >
        {/* FRONT */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          padding: '1.75rem 2rem',
          border: '1px solid rgba(255,255,255,0.09)',
          background: dark ? 'rgba(255,255,255,0.04)' : '#ffffff',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div>
            <span style={{
              fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.65rem',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(200,80,80,0.7)',
            }}>
              Problemática
            </span>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1rem', lineHeight: 1.75, marginTop: '0.7rem',
              color: dark ? 'rgba(245,240,232,0.82)' : '#111a10',
            }}>
              {item.problem}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{
              fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.65rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: dark ? 'rgba(245,240,232,0.2)' : 'rgba(17,26,16,0.22)',
            }}>
              Ver respuesta
            </span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              style={{ color: '#c9a84c', fontSize: '0.9rem', lineHeight: 1 }}
            >
              ›
            </motion.span>
          </div>
        </div>

        {/* BACK */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          padding: '1.75rem 2rem',
          background: '#2d4a2b',
          border: '1px solid rgba(201,168,76,0.2)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div>
            <span style={{
              fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.65rem',
              letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a84c',
            }}>
              Respuesta
            </span>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1rem', color: '#f5f0e8',
              lineHeight: 1.75, marginTop: '0.7rem', fontWeight: 300,
            }}>
              {item.solution}
            </p>
          </div>
          <span style={{
            fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.65rem',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.18)',
          }}>
            Toca para volver
          </span>
        </div>
      </motion.div>
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
          alignItems: 'start',
          marginBottom: '5rem',
        }}
      >
        {/* Tall image */}
        <div style={{
          position: 'relative',
          height: 520,
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
                fontSize: '1.05rem', fontWeight: 500,
                color: cream, lineHeight: 1.3,
                marginBottom: '0.55rem',
              }}>
                {ind.label}
              </h3>

              {/* Ultra-brief description */}
              {ind.note && (
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.78rem', color: muted,
                  lineHeight: 1.65,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
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
          <FlipCard key={i} item={item} index={i} dark={dark} />
        ))}
      </div>
    </div>
  )
}
