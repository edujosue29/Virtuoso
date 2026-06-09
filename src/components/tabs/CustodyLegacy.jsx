import { motion } from 'framer-motion'

export default function CustodyLegacy({ property, finca, dark }) {
  const { name } = property
  // Use finca-specific legacy when available
  const legacy = finca?.legacy ?? property.legacy

  const gold = '#c9a84c'
  const darkGreen = '#2a5c38'
  const cream = '#faf9f6'

  // Heading: split title
  const titleParts = (legacy.title || '').split(' ')
  const titleFirst = titleParts[0]
  const titleRest = titleParts.slice(1).join(' ')

  return (
    <div>
      {/* ── Section Label ──────────────────────────────────────────────────── */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: '"DM Sans", Inter, sans-serif',
          fontSize: '0.72rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: gold,
          marginBottom: '2rem',
        }}
      >
        El Legado de la Custodia
      </motion.p>

      {/* ── Main Legacy Card ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: `linear-gradient(135deg, rgba(42,92,56,0.08) 0%, rgba(201,168,76,0.04) 100%)`,
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '16px',
          padding: '3.5rem 4rem',
          marginBottom: '3rem',
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
            fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '0 0 2rem 0',
            color: cream,
          }}
        >
          <span style={{ color: gold, display: 'block' }}>{titleFirst}</span>
          {titleRest && <span style={{ display: 'block', fontWeight: 400 }}>{titleRest}</span>}
        </h2>

        {/* Main Message */}
        <p
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
            fontWeight: 300,
            lineHeight: 1.9,
            color: 'rgba(245,240,232,0.85)',
            margin: 0,
            maxWidth: '900px',
          }}
        >
          {legacy.message}
        </p>

        {/* Decorative divider */}
        <div
          style={{
            height: '1px',
            background: `linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)`,
            margin: '2.5rem 0',
          }}
        />

        {/* Property Name & Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}>
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: gold,
            }}
          />
          <span
            style={{
              fontFamily: '"DM Sans", Inter, sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.65)',
            }}
          >
            {name} · Proyecto VIRTUOSO
          </span>
        </div>
      </motion.div>

      {/* ── Pillars of Legacy (3 columns) ───────────────────────────────────── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}
      >
        {[
          {
            title: 'Transformación',
            icon: (
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22V12M12 12C12 7 8 4 4 5c4 0 8 3 8 7zM12 12C12 7 16 4 20 5c-4 0-8 3-8 7z"/>
              </svg>
            ),
            text: 'De prácticas extractivas a custodia regenerativa. El cambio que necesita el mundo.',
          },
          {
            title: 'Integridad',
            icon: (
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
            ),
            text: 'Decisiones tomadas pensando en generaciones futuras, no en ganancias inmediatas.',
          },
          {
            title: 'Comunidad',
            icon: (
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            ),
            text: 'Alianzas que ponen la tierra y sus pueblos en el centro, nunca al margen.',
          },
        ].map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                marginBottom: '1.5rem',
                color: gold,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {pillar.icon}
            </div>
            <h3
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.25rem',
                fontWeight: 400,
                color: cream,
                margin: '0 0 0.75rem 0',
              }}
            >
              {pillar.title}
            </h3>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '0.95rem',
                fontWeight: 300,
                color: 'rgba(245,240,232,0.7)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {pillar.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
