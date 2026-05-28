import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CONSERVATION_IMAGE = '/images/carpintera/IMG_3028.jpg'

function FlipCard({ item, index, dark }) {
  const [flipped, setFlipped] = useState(false)

  const frontBg     = dark ? 'rgba(255,255,255,0.05)' : '#ffffff'
  const frontBorder = dark ? 'rgba(201,168,76,0.15)'  : 'rgba(23,60,28,0.1)'
  const frontText   = dark ? 'rgba(245,240,232,0.78)' : '#173C1C'
  const hintColor   = dark ? 'rgba(245,240,232,0.2)'  : 'rgba(23,60,28,0.22)'

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
          padding: '1.75rem',
          border: `1px solid ${frontBorder}`,
          background: frontBg,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div>
            <span style={{
              fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.57rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(180,60,60,0.65)',
            }}>
              Problemática
            </span>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1rem', color: frontText,
              lineHeight: 1.7, marginTop: '0.65rem',
            }}>
              {item.problem}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{
              fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.54rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: hintColor,
            }}>
              Toca para ver la respuesta
            </span>
            <span style={{ color: '#c9a84c', fontSize: '0.7rem' }}>›</span>
          </div>
        </div>

        {/* BACK */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          padding: '1.75rem',
          background: '#173C1C',
          border: '1px solid rgba(201,168,76,0.18)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div>
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.57rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#c9a84c',
            }}>
              Respuesta
            </span>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1rem', color: '#f5f0e8',
              lineHeight: 1.75, marginTop: '0.65rem', fontWeight: 300,
            }}>
              {item.solution}
            </p>
          </div>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.54rem',
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

export default function LocalProsperity({ property, dark }) {
  const { prosperity, sectionImages } = property
  const img = sectionImages?.prosperity || CONSERVATION_IMAGE

  const textMain    = dark ? '#f5f0e8'                : '#173C1C'
  const statCardBg  = dark ? 'rgba(255,255,255,0.04)' : '#ffffff'
  const statVal     = dark ? '#f5f0e8'                : '#173C1C'
  const statNote    = dark ? 'rgba(245,240,232,0.38)' : 'rgba(23,60,28,0.36)'
  const statUnit    = dark ? 'rgba(245,240,232,0.35)' : 'rgba(23,60,28,0.32)'
  const flipFrontBg = dark ? 'rgba(255,255,255,0.05)' : '#ffffff'
  const flipFrontBorder = dark ? 'rgba(201,168,76,0.15)' : 'rgba(23,60,28,0.1)'
  const flipFrontText   = dark ? 'rgba(245,240,232,0.78)' : '#173C1C'
  const flipHint        = dark ? 'rgba(245,240,232,0.2)'  : 'rgba(23,60,28,0.22)'
  const gridBg          = dark ? 'rgba(201,168,76,0.08)'  : 'rgba(201,168,76,0.1)'
  const gridBorder      = dark ? 'rgba(201,168,76,0.08)'  : 'rgba(201,168,76,0.1)'

  return (
    <div>
      {/* Section label */}
      <p style={{
        fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.6rem',
        letterSpacing: '0.28em', textTransform: 'uppercase',
        color: '#c9a84c', marginBottom: '0.9rem',
      }}>
        Custodia del Ecosistema
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
          fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
          fontWeight: 400, lineHeight: 1.05, margin: '0 0 3rem',
        }}
      >
        <span style={{ color: '#c9a84c' }}>Conservación</span>
        <span style={{ color: textMain }}> Activa</span>
      </motion.h2>

      {/* ── Image + pull quote — side by side ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          border: '1px solid rgba(201,168,76,0.12)',
          overflow: 'hidden',
          marginBottom: '0',
          borderBottom: 'none',
        }}
      >
        {/* Left — image */}
        <div style={{ position: 'relative', minHeight: 340, overflow: 'hidden' }}>
          <img
            src={img}
            alt="La Carpintera — bosque nuboso"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 35%',
              filter: 'brightness(0.55) saturate(0.8)',
            }}
          />
          {/* Subtle dark overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(23,60,28,0.4) 0%, rgba(23,60,28,0.1) 100%)',
          }} />
          {/* Caption bottom */}
          <div style={{
            position: 'absolute', bottom: '1.5rem', left: '1.75rem',
          }}>
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.55rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.55)',
            }}>
              Bosque nuboso · 1,500–1,800 msnm
            </span>
          </div>
        </div>

        {/* Right — description + context */}
        <div style={{
          background: '#173C1C',
          padding: '3rem 2.5rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          gap: '1.5rem',
          borderLeft: '1px solid rgba(201,168,76,0.1)',
        }}>
          <div style={{ width: 32, height: 1, background: 'rgba(201,168,76,0.4)' }} />
          <p style={{
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            fontWeight: 300, color: '#f5f0e8',
            lineHeight: 1.85,
          }}>
            {prosperity.description}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: 24, height: 1, background: 'rgba(201,168,76,0.35)' }} />
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.56rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.6)',
            }}>
              VIRTUOSO · La Carpintera
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── 5 conservation stat cards ─────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '1px',
        background: gridBg,
        border: `1px solid ${gridBorder}`,
        borderTop: 'none',
        marginBottom: '4.5rem',
      }}>
        {prosperity.indicators.map((ind, i) => (
          <motion.div
            key={ind.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            style={{
              background: statCardBg,
              padding: '1.75rem 1.25rem 1.5rem',
              display: 'flex', flexDirection: 'column', gap: '0.3rem',
              borderTop: '3px solid rgba(201,168,76,0.4)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
                fontWeight: 300, color: statVal, lineHeight: 1,
              }}>
                {ind.value}
              </span>
              {ind.unit && (
                <span style={{
                  fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.57rem',
                  color: statUnit, letterSpacing: '0.06em',
                }}>
                  {ind.unit}
                </span>
              )}
            </div>
            <span style={{
              fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.54rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#c9a84c', fontWeight: 500,
            }}>
              {ind.label}
            </span>
            <span style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '0.8rem', color: statNote,
              lineHeight: 1.5, marginTop: '0.1rem',
            }}>
              {ind.note}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ── Desafíos del custodio ─────────────────────────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '1.5rem',
        marginBottom: '2rem',
      }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.2)' }} />
        <span style={{
          fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.54rem',
          letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a84c',
          flexShrink: 0,
        }}>
          Desafíos del Custodio
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.2)' }} />
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem',
      }}>
        {prosperity.issues.map((item, i) => (
          <FlipCard key={i} item={item} index={i} dark={dark} />
        ))}
      </div>
    </div>
  )
}
