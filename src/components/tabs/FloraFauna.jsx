import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FILTERS = [
  { id: 'all',   label: 'Todas' },
  { id: 'fauna', label: 'Fauna' },
  { id: 'flora', label: 'Flora' },
]

const STATUS_COLOR = {
  fauna: { bg: 'rgba(45,90,39,0.18)', border: 'rgba(45,180,90,0.3)', text: '#5dba82' },
  flora: { bg: 'rgba(201,168,76,0.12)', border: 'rgba(201,168,76,0.3)', text: '#c9a84c' },
}

export default function FloraFauna({ property, dark }) {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(0)

  const list = property.species.filter((s) => filter === 'all' || s.type === filter)
  const safeIdx = Math.min(selected, list.length - 1)
  const featured = list[safeIdx] ?? list[0]

  const handleFilter = (f) => {
    setFilter(f)
    setSelected(0)
  }

  if (!featured) return null

  const col = STATUS_COLOR[featured.type] ?? STATUS_COLOR.fauna

  // Dark/light adaptive tokens
  const textMain   = dark ? '#f5f0e8'                 : '#111a10'
  const textMuted  = dark ? 'rgba(245,240,232,0.65)'  : 'rgba(17,26,16,0.72)'
  const pillText   = dark ? 'rgba(245,240,232,0.45)'  : 'rgba(17,26,16,0.45)'
  const pillBorder = dark ? 'rgba(245,240,232,0.14)'  : 'rgba(17,26,16,0.14)'
  const panelBg    = dark ? 'rgba(255,255,255,0.04)'  : '#ffffff'
  const metaBg     = dark ? 'rgba(201,168,76,0.07)'   : 'rgba(201,168,76,0.04)'
  const metaVal    = dark ? 'rgba(245,240,232,0.8)'   : '#111a10'
  const countColor = dark ? 'rgba(245,240,232,0.25)'  : 'rgba(17,26,16,0.25)'

  return (
    <div>
      {/* Section label */}
      <p style={{
        fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.6rem',
        letterSpacing: '0.28em', textTransform: 'uppercase',
        color: '#c9a84c', marginBottom: '0.9rem',
      }}>
        Santuario Vivo
      </p>

      {/* Title + filters row */}
      <div style={{
        display: 'flex', alignItems: 'flex-end',
        justifyContent: 'space-between', flexWrap: 'wrap',
        gap: '1.5rem', marginBottom: '3rem',
      }}>
        <h2 style={{
          fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
          fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
          fontWeight: 400, lineHeight: 1.05, margin: 0,
        }}>
          <span style={{ color: '#c9a84c' }}>Flora</span>
          <span style={{ color: textMain }}> &amp; Fauna del Santuario</span>
        </h2>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => handleFilter(f.id)}
              style={{
                fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.6rem',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                padding: '0.45rem 1.1rem', borderRadius: 999, cursor: 'pointer',
                color: filter === f.id ? '#050d05' : pillText,
                background: filter === f.id ? 'linear-gradient(135deg,#c9a84c,#e8c96e)' : 'transparent',
                border: `1px solid ${filter === f.id ? 'transparent' : pillBorder}`,
                transition: 'all 0.2s ease',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Featured panel ─────────────────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '55% 45%',
        border: '1px solid rgba(201,168,76,0.14)',
        overflow: 'hidden',
        minHeight: 480,
        borderRadius: 4,
      }}>
        {/* LEFT — photo */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={featured.id + '-img'}
              src={featured.image}
              alt={featured.name}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
              }}
            />
          </AnimatePresence>

          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(5,13,5,0.88) 0%, rgba(5,13,5,0.1) 55%)',
          }} />

          {/* Name + scientific overlaid bottom-left */}
          <AnimatePresence mode="wait">
            <motion.div
              key={featured.id + '-label'}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '2.5rem 2rem 2rem',
              }}
            >
              <p style={{
                fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
                fontSize: '0.9rem', color: 'rgba(245,240,232,0.5)', marginBottom: '0.35rem',
              }}>
                {featured.scientific}
              </p>
              <h3 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 300, color: '#f5f0e8', lineHeight: 1.1, margin: 0,
              }}>
                {featured.name}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — details */}
        <div style={{
          background: panelBg, padding: '2.5rem 2.25rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          borderLeft: '1px solid rgba(201,168,76,0.1)',
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={featured.id + '-info'}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}
            >
              {/* Type badge */}
              <span style={{
                display: 'inline-flex', alignSelf: 'flex-start',
                padding: '0.3rem 0.9rem', borderRadius: 999,
                background: col.bg, border: `1px solid ${col.border}`,
                fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.58rem',
                letterSpacing: '0.18em', textTransform: 'uppercase', color: col.text,
              }}>
                {featured.type}
              </span>

              {/* Description */}
              <p style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.08rem', fontWeight: 300,
                color: textMuted, lineHeight: 1.8,
                flex: 1,
              }}>
                {featured.description}
              </p>

              {/* Habitat + Status pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'Hábitat', value: featured.habitat },
                  { label: 'Estado', value: featured.status },
                ].map(({ label, value }) => (
                  <div key={label} style={{
                    display: 'grid', gridTemplateColumns: '72px 1fr',
                    gap: '1rem', padding: '0.75rem 1rem',
                    background: metaBg,
                    border: '1px solid rgba(201,168,76,0.12)',
                  }}>
                    <span style={{
                      fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.58rem',
                      letterSpacing: '0.16em', textTransform: 'uppercase', color: '#c9a84c',
                      paddingTop: 2,
                    }}>
                      {label}
                    </span>
                    <span style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '0.98rem', color: metaVal, lineHeight: 1.5,
                    }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Thumbnail strip ────────────────────────────────────────────── */}
      <div style={{
        display: 'flex', gap: '0.75rem',
        overflowX: 'auto', scrollbarWidth: 'none',
        paddingTop: '1.25rem', paddingBottom: '0.25rem',
      }}>
        {list.map((sp, i) => {
          const isActive = i === safeIdx
          return (
            <button
              key={sp.id}
              onClick={() => setSelected(i)}
              style={{
                flexShrink: 0, width: 90, height: 64,
                position: 'relative', overflow: 'hidden',
                border: isActive ? '2px solid #c9a84c' : '2px solid transparent',
                cursor: 'pointer', padding: 0, background: 'none',
                transition: 'border-color 0.2s ease',
                outline: 'none',
              }}
            >
              <img
                src={sp.image}
                alt={sp.name}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: isActive ? 'brightness(1)' : 'brightness(0.65) saturate(0.7)',
                  transition: 'filter 0.25s ease',
                }}
              />
              {!isActive && (
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(17,26,16,0.18)',
                }} />
              )}
            </button>
          )
        })}
      </div>

      {/* Thumbnail count hint */}
      <p style={{
        fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.58rem',
        color: countColor, letterSpacing: '0.12em',
        marginTop: '0.75rem',
      }}>
        {safeIdx + 1} / {list.length}
      </p>
    </div>
  )
}
