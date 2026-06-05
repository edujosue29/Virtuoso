import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ORBIT_R = 204
const CONTAINER = 552

const PILLARS = [
  {
    key: 'salud',
    label: 'Salud',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        <path d="M12 8c-2.5 0-4 1.5-4 3.5C8 14 10 16 12 18c2-2 4-4 4-6.5C16 9.5 14.5 8 12 8z" />
      </svg>
    ),
  },
  {
    key: 'amor',
    label: 'Amor',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
      </svg>
    ),
  },
  {
    key: 'sabiduria',
    label: 'Sabiduría',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5z" />
      </svg>
    ),
  },
  {
    key: 'prosperidad',
    label: 'Prosperidad',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12C12 7 8 4 4 5c4 0 8 3 8 7zM12 12C12 7 16 4 20 5c-4 0-8 3-8 7zM12 12C12 17 9 20 5 21c4-1 7-4 7-9zM12 12C12 17 15 20 19 21c-4-1-7-4-7-9z" />
      </svg>
    ),
  },
]

export default function VirtuosoIndex({ property }) {
  const { virtuosoIndex } = property
  const [rotation, setRotation] = useState(-20)
  const [selected, setSelected] = useState(null)
  const [autoRotate, setAutoRotate] = useState(true)

  useEffect(() => {
    if (!autoRotate) return
    const id = setInterval(() => setRotation(r => (r + 0.38) % 360), 50)
    return () => clearInterval(id)
  }, [autoRotate])

  const handleNodeClick = (key) => {
    if (selected === key) {
      setSelected(null)
      setAutoRotate(true)
    } else {
      setSelected(key)
      setAutoRotate(false)
    }
  }

  const selectedPillar = selected ? PILLARS.find(p => p.key === selected) : null

  return (
    <div>
      {/* ── Heading block — bold pattern ───────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'flex-end',
        marginBottom: '3.5rem',
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
              fontWeight: 700, lineHeight: 1.0,
              letterSpacing: '-0.02em', margin: 0,
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
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            fontWeight: 300, color: 'rgba(17,26,16,0.52)',
            lineHeight: 1.9, paddingBottom: '0.5rem',
          }}
        >
          Metodología propietaria de Virtus Real Estate para la evaluación holística de propiedades de alto valor natural.
        </motion.p>
      </div>

      {/* ── Orbital graphic (white bg) ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div style={{
          position: 'relative',
          width: CONTAINER,
          height: CONTAINER,
          maxWidth: '100%',
        }}>

          {/* Outer dashed ring */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            width: ORBIT_R * 2 + 48,
            height: ORBIT_R * 2 + 48,
            transform: 'translate(-50%, -50%)',
            border: '2px dashed rgba(42,92,56,0.14)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />

          {/* Main orbit ring */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            width: ORBIT_R * 2,
            height: ORBIT_R * 2,
            transform: 'translate(-50%, -50%)',
            border: '2px solid rgba(42,92,56,0.22)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />

          {/* Inner decorative ring */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            width: 163,
            height: 163,
            transform: 'translate(-50%, -50%)',
            border: '2px solid rgba(42,92,56,0.14)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />

          {/* Central hub */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 130,
            height: 130,
            borderRadius: '50%',
            background: '#ffffff',
            border: '2px solid rgba(42,92,56,0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            boxShadow: '0 0 0 6px rgba(42,92,56,0.05)',
          }}>
            {/* Leaf icon — nature theme */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a5c38" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '0.35rem' }}>
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
            </svg>
            <span style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '0.68rem', fontWeight: 400, fontStyle: 'italic',
              color: '#2a5c38', letterSpacing: '0.08em',
            }}>
              Virtus
            </span>
          </div>

          {/* Orbiting nodes */}
          {PILLARS.map((pillar, i) => {
            const angle = ((i / PILLARS.length) * 360 + rotation) % 360
            const rad = (angle * Math.PI) / 180
            const x = Math.cos(rad) * ORBIT_R
            const y = Math.sin(rad) * ORBIT_R
            const depth = (1 + Math.sin(rad)) / 2
            const nodeOpacity = 0.38 + 0.62 * depth
            const nodeScale = 0.78 + 0.26 * depth
            const nodeZ = Math.round(depth * 10)
            const isSelected = selected === pillar.key

            return (
              <div
                key={pillar.key}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: `translate(-50%, -50%) scale(${nodeScale})`,
                  opacity: nodeOpacity,
                  zIndex: nodeZ,
                }}
              >
                <button
                  onClick={() => handleNodeClick(pillar.key)}
                  style={{
                    cursor: 'pointer',
                    background: isSelected ? 'rgba(42,92,56,0.07)' : '#ffffff',
                    border: isSelected
                      ? '2px solid rgba(42,92,56,0.6)'
                      : '2px solid rgba(42,92,56,0.22)',
                    borderRadius: 14,
                    padding: '0.9rem 1.1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.45rem',
                    width: 106,
                    boxShadow: isSelected
                      ? '0 4px 24px rgba(42,92,56,0.15)'
                      : '0 2px 16px rgba(17,26,16,0.06)',
                    transition: 'background 0.35s, border-color 0.35s, box-shadow 0.35s',
                  }}
                >
                  <span style={{
                    color: isSelected ? '#2a5c38' : 'rgba(42,92,56,0.55)',
                    transition: 'color 0.35s',
                  }}>
                    {pillar.icon}
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '0.5rem',
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: isSelected ? '#111a10' : 'rgba(17,26,16,0.45)',
                    transition: 'color 0.35s',
                  }}>
                    {pillar.label}
                  </span>
                </button>
              </div>
            )
          })}
        </div>

        {/* Interaction hint / description panel */}
        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.5rem',
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'rgba(17,26,16,0.42)',
                marginTop: '-0.5rem', marginBottom: '0.5rem',
              }}
            >
              Selecciona un pilar para explorar
            </motion.p>
          ) : (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '100%', maxWidth: 620, marginTop: '-0.5rem' }}
            >
              <div style={{
                background: 'rgba(201,168,76,0.04)',
                border: '1px solid rgba(201,168,76,0.22)',
                borderRadius: 14,
                padding: '1.5rem 1.75rem',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center',
                  gap: '0.75rem', marginBottom: '0.9rem',
                }}>
                  <span style={{ color: '#c9a84c', flexShrink: 0 }}>
                    {selectedPillar?.icon}
                  </span>
                  <span style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.35rem', fontWeight: 300, color: '#111a10',
                  }}>
                    {selectedPillar?.label}
                  </span>
                </div>
                <p style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.02rem', fontWeight: 300,
                  color: 'rgba(17,26,16,0.65)', lineHeight: 1.85,
                  margin: '0 0 1.1rem',
                }}>
                  {virtuosoIndex.descriptions?.[selected]}
                </p>
                <button
                  onClick={() => { setSelected(null); setAutoRotate(true) }}
                  style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '0.5rem',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'rgba(17,26,16,0.38)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  ← Continuar órbita
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </div>
  )
}
