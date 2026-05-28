import { motion } from 'framer-motion'

const ROMANS = ['I', 'II']

export default function AncestralWisdom({ property }) {
  const { ancestral } = property

  return (
    <div>
      {/* Section label */}
      <p style={{
        fontFamily: 'Inter, sans-serif', fontSize: '0.6rem',
        letterSpacing: '0.28em', textTransform: 'uppercase',
        color: '#c9a84c', marginBottom: '0.9rem',
      }}>
        Sabiduría Ancestral
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
        {(() => {
          const parts = (ancestral.title || '').split(' ')
          return <>
            <span style={{ color: '#c9a84c' }}>{parts[0]}</span>
            {parts.length > 1 && <span style={{ color: '#31572C' }}> {parts.slice(1).join(' ')}</span>}
          </>
        })()}
      </motion.h2>

      {/* ── Cinematic full-width quote ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', marginBottom: '6rem', padding: '0 3rem' }}
      >
        {/* Decorative giant quote mark */}
        <div style={{
          position: 'absolute', top: -60, left: -8,
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(8rem, 14vw, 13rem)',
          lineHeight: 1,
          color: 'rgba(201,168,76,0.08)',
          userSelect: 'none', pointerEvents: 'none',
        }}>
          "
        </div>

        {/* Quote text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.85rem)',
            fontWeight: 300, color: 'rgba(49,87,44,0.72)',
            lineHeight: 1.85, textAlign: 'center',
            maxWidth: 800, margin: '0 auto',
            position: 'relative', zIndex: 1,
          }}
        >
          {ancestral.description}
        </motion.p>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '1.25rem', marginTop: '2.5rem',
          }}
        >
          <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.35)' }} />
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.58rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(49,87,44,0.32)',
          }}>
            Memoria Huetar · La Carpintera
          </span>
          <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.35)' }} />
        </motion.div>
      </motion.div>

      {/* ── Wisdom Diptych — 2 cards ──────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1px',
        background: 'rgba(201,168,76,0.1)',
        border: '1px solid rgba(201,168,76,0.1)',
      }}>
        {ancestral.architecture.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: '#ffffff',
              padding: i === 0 ? '3.5rem 2.5rem 4.5rem' : '3.5rem 2.5rem 3rem',
              position: 'relative', overflow: 'hidden',
              borderTop: '3px solid rgba(201,168,76,0.5)',
            }}
          >
            {/* Roman numeral backdrop */}
            <div style={{
              position: 'absolute', top: -12, right: 20,
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(5rem, 9vw, 8rem)',
              fontWeight: 300,
              color: 'rgba(201,168,76,0.07)',
              lineHeight: 1, userSelect: 'none',
              pointerEvents: 'none',
            }}>
              {ROMANS[i]}
            </div>

            {/* Content */}
            <span style={{
              display: 'block',
              fontFamily: 'Inter, sans-serif', fontSize: '0.55rem',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#c9a84c', marginBottom: '1rem',
            }}>
              {ROMANS[i]}
            </span>

            <h3 style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
              fontWeight: 300, color: '#31572C',
              lineHeight: 1.2, marginBottom: '1.25rem',
            }}>
              {item.name}
            </h3>

            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.02rem', fontWeight: 300,
              color: 'rgba(49,87,44,0.58)', lineHeight: 1.85,
            }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
