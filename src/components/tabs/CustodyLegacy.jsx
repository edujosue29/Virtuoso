import { motion } from 'framer-motion'

export default function CustodyLegacy({ property, finca, dark }) {
  const { name } = property
  // Use finca-specific legacy when available
  const legacy = finca?.legacy ?? property.legacy

  // Split: first sentence → hero quote; rest → body
  const dotIdx   = legacy.message.indexOf('.')
  const heroQuote = dotIdx > -1 ? legacy.message.slice(0, dotIdx + 1) : legacy.message
  const bodyText  = dotIdx > -1 ? legacy.message.slice(dotIdx + 1).trim() : ''

  const cream = '#faf9f6'
  const muted = 'rgba(245,240,232,0.52)'
  const gold  = '#c9a84c'

  // Heading: split title
  const titleParts = (legacy.title || '').split(' ')
  const titleFirst = titleParts[0]
  const titleRest  = titleParts.slice(1).join(' ')

  return (
    <div>

      {/* ── Top: heading left + hero quote right ───────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'flex-end',
        marginBottom: '4.5rem',
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
              color: gold, marginBottom: '1rem',
            }}
          >
            El Legado de la Custodia
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
              fontSize: 'clamp(2.4rem, 5vw, 4.4rem)',
              fontWeight: 700, lineHeight: 1.0,
              letterSpacing: '-0.02em', margin: 0,
            }}
          >
            <span style={{ color: gold, display: 'block' }}>{titleFirst}</span>
            {titleRest && (
              <span style={{ color: cream, display: 'block', fontWeight: 400 }}>
                {titleRest}
              </span>
            )}
          </motion.h2>
        </div>

        {/* Right — hero quote */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.18 }}
          style={{ paddingBottom: '0.5rem' }}
        >
          <p style={{
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
            fontWeight: 300, color: 'rgba(245,240,232,0.68)',
            lineHeight: 1.9,
          }}>
            "{heroQuote}"
          </p>
        </motion.div>
      </div>

      {/* ── Full-width editorial divider ────────────────────────────────── */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          height: 1,
          background: `linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)`,
          marginBottom: '4rem',
          transformOrigin: 'left',
        }}
      />

      {/* ── Body + Custodian block ──────────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '3fr 2fr',
        gap: '4rem',
        alignItems: 'start',
        marginBottom: '5rem',
      }}>
        {/* Left — body text */}
        {bodyText && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              fontWeight: 300, color: 'rgba(245,240,232,0.68)',
              lineHeight: 1.95, margin: 0,
            }}
          >
            {bodyText}
          </motion.p>
        )}

        {/* Right — custodian card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          style={{
            border: '1px solid rgba(201,168,76,0.2)',
            padding: '2.25rem 2rem',
          }}
        >
          {/* Decorative star */}
          <div style={{ marginBottom: '1.5rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
                stroke="rgba(201,168,76,0.5)" strokeWidth="1.2" fill="none" />
            </svg>
          </div>

          <span style={{
            fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.68rem',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: muted, display: 'block',
          }}>
            {name} · VIRTUOSO
          </span>
        </motion.div>
      </div>
    </div>
  )
}
