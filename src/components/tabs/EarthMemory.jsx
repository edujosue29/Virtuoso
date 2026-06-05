import { motion } from 'framer-motion'

export default function EarthMemory({ property, dark }) {
  const { timeline, name } = property

  // Split name for two-tone heading
  const nameParts = name.split(' ')
  const nameFirst = nameParts[0]
  const nameRest  = nameParts.slice(1).join(' ')

  // Grid background matches section background
  const gridBg = dark ? 'rgba(255,255,255,0.02)' : '#faf9f6'
  const gridBorder = dark ? 'rgba(255,255,255,0.05)' : 'rgba(17,26,16,0.07)'

  return (
    <div>

      {/* ── Top: heading left + brief intro right ──────────────────────── */}
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
              fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.72rem',
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: '#c9a84c', marginBottom: '1rem',
            }}
          >
            Memoria de la Tierra
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
            <span style={{ color: '#111a10', display: 'block' }}>Historia</span>
            <span style={{ color: '#c9a84c', display: 'block' }}>
              {nameFirst}
              {nameRest && <span style={{ color: '#111a10', fontWeight: 400 }}> {nameRest}</span>}
            </span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
            fontWeight: 300, color: 'rgba(17,26,16,0.58)',
            lineHeight: 1.9, paddingBottom: '0.5rem',
          }}
        >
          Cada año es una capa de memoria. Cada capa sostiene el valor del presente.
        </motion.p>
      </div>

      {/* ── Timeline grid — 2 columns × N rows ─────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1px',
        background: gridBg,
        border: `1px solid ${gridBorder}`,
      }}>
        {timeline.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: '#faf9f6',
              padding: '2.5rem 2.25rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Giant year backdrop */}
            <div style={{
              position: 'absolute',
              top: '-0.5rem', right: '1rem',
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(4rem, 8vw, 7rem)',
              fontWeight: 300,
              color: 'rgba(201,168,76,0.1)',
              lineHeight: 1,
              userSelect: 'none', pointerEvents: 'none',
              whiteSpace: 'nowrap',
            }}>
              {event.year}
            </div>

            {/* Year pill */}
            <span style={{
              display: 'inline-block',
              fontFamily: '"DM Sans", Inter, sans-serif',
              fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#c9a84c',
              marginBottom: '0.75rem',
              position: 'relative', zIndex: 1,
            }}>
              {event.year}
            </span>

            {/* Title */}
            <h3 style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
              fontWeight: 400, color: '#111a10',
              lineHeight: 1.2, marginBottom: '0.75rem',
              position: 'relative', zIndex: 1,
            }}>
              {event.title}
            </h3>

            {/* Description */}
            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '0.95rem', fontWeight: 300,
              color: 'rgba(17,26,16,0.58)', lineHeight: 1.8,
              position: 'relative', zIndex: 1,
              margin: 0,
            }}>
              {event.description}
            </p>

            {/* Top accent line */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: 2,
              background: i === 0 || i === timeline.length - 1
                ? 'rgba(201,168,76,0.55)'
                : 'rgba(201,168,76,0.18)',
            }} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
