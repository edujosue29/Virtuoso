import { motion } from 'framer-motion'

export default function CustodyLegacy({ property, dark }) {
  const { legacy, name } = property

  // Split message: first sentence → pull quote; rest → body columns
  const dotIdx = legacy.message.indexOf('.')
  const pullQuote = dotIdx > -1 ? legacy.message.slice(0, dotIdx + 1) : legacy.message
  const bodyText = dotIdx > -1 ? legacy.message.slice(dotIdx + 1).trim() : ''

  const textMain    = dark ? '#f5f0e8'                 : '#31572C'
  const quoteColor  = dark ? 'rgba(245,240,232,0.8)'   : 'rgba(49,87,44,0.75)'
  const bodyColor   = dark ? 'rgba(245,240,232,0.72)'  : '#31572C'
  const attrColor   = dark ? 'rgba(245,240,232,0.35)'  : 'rgba(49,87,44,0.35)'
  const ctaColor    = dark ? 'rgba(245,240,232,0.45)'  : 'rgba(49,87,44,0.38)'
  const colRule     = dark ? 'rgba(201,168,76,0.15)'   : 'rgba(201,168,76,0.12)'

  // Split legacy title: first word gold, rest adapts
  const titleParts = (legacy.title || '').split(' ')
  const titleFirst = titleParts[0]
  const titleRest  = titleParts.slice(1).join(' ')

  return (
    <div>
      {/* Section label */}
      <p style={{
        fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.6rem',
        letterSpacing: '0.28em', textTransform: 'uppercase',
        color: '#c9a84c', marginBottom: '0.9rem',
      }}>
        El Legado de la Custodia
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
          fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
          fontWeight: 400, lineHeight: 1.05, margin: '0 0 5rem',
        }}
      >
        <span style={{ color: '#c9a84c' }}>{titleFirst}</span>
        {titleRest && <span style={{ color: textMain }}> {titleRest}</span>}
      </motion.h2>

      {/* ── Pull quote ────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: '1.5rem' }}
      >
        <p style={{
          fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
          fontWeight: 300, color: quoteColor,
          lineHeight: 1.8, maxWidth: 720, margin: '0 auto',
        }}>
          {pullQuote}
        </p>
      </motion.div>

      {/* Gold rule below pull quote */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '1.25rem', marginBottom: '4rem',
      }}>
        <div style={{ width: 60, height: 1, background: 'rgba(201,168,76,0.35)' }} />
        <div style={{
          width: 5, height: 5, borderRadius: '50%',
          background: 'rgba(201,168,76,0.45)',
        }} />
        <div style={{ width: 60, height: 1, background: 'rgba(201,168,76,0.35)' }} />
      </div>

      {/* ── Body text — 2 columns ─────────────────────────────────────── */}
      {bodyText && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ marginBottom: '4.5rem' }}
        >
          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            fontWeight: 300, color: bodyColor,
            lineHeight: 1.9,
            columnCount: 2,
            columnGap: '3rem',
            columnRule: `1px solid ${colRule}`,
          }}>
            {bodyText}
          </p>
        </motion.div>
      )}

      {/* ── Custodian signature ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ textAlign: 'center', marginBottom: '5rem' }}
      >
        {/* Decorative element */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '1.5rem', marginBottom: '1.5rem',
        }}>
          <div style={{ flex: 1, maxWidth: 120, height: 1, background: 'rgba(201,168,76,0.3)' }} />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
              stroke="rgba(201,168,76,0.45)" strokeWidth="1.2" fill="none" />
          </svg>
          <div style={{ flex: 1, maxWidth: 120, height: 1, background: 'rgba(201,168,76,0.3)' }} />
        </div>

        <p style={{
          fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          color: '#c9a84c', lineHeight: 1.4,
          marginBottom: '0.5rem',
        }}>
          {legacy.custodianName}
        </p>
        <span style={{
          fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.58rem',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: attrColor,
        }}>
          {name} · VIRTUOSO
        </span>
      </motion.div>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ textAlign: 'center' }}
      >
        <p style={{
          fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
          fontSize: '1.1rem', color: ctaColor,
          lineHeight: 1.6, marginBottom: '2rem',
        }}>
          ¿Sientes el llamado de esta tierra?
        </p>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: 'linear-gradient(135deg, #c9a84c, #e8c96e)',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600, fontSize: '0.7rem',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            border: 'none', borderRadius: 999,
            padding: '1.1rem 3rem',
            cursor: 'pointer',
          }}
        >
          Iniciar Conversación
        </motion.button>
      </motion.div>
    </div>
  )
}
