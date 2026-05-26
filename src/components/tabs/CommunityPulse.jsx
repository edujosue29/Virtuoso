import { motion } from 'framer-motion'

export default function CommunityPulse({ property }) {
  const { communityPulse, name } = property

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.62rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: '1rem',
          }}
        >
          El Pulso de la Comunidad
        </p>
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 300,
            color: '#111a10',
            lineHeight: 1.1,
          }}
        >
          Vivir en {name}
        </h2>
      </div>

      {/* Lifestyle — immersive text */}
      <div style={{ marginBottom: '5rem' }}>
        {communityPulse.lifestyle.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem',
              padding: '1.5rem 0',
              borderBottom: i < communityPulse.lifestyle.length - 1
                ? '1px solid rgba(17,26,16,0.07)'
                : 'none',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.4, rotate: 15 }}
              style={{
                flexShrink: 0,
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#c9a84c',
                marginTop: 10,
              }}
            />
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)',
                fontWeight: 300,
                color: 'rgba(17,26,16,0.7)',
                lineHeight: 1.75,
                fontStyle: i % 3 === 2 ? 'italic' : 'normal',
              }}
            >
              {line}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Activities grid */}
      <div style={{ marginBottom: '3rem' }}>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.62rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          Actividades
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3" style={{ gap: '1.25rem' }}>
          {communityPulse.activities.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{
                background: 'rgba(17,26,16,0.03)',
                border: '1px solid rgba(17,26,16,0.08)',
                borderRadius: 12,
                padding: '1.5rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>{act.icon}</div>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.05rem',
                  fontWeight: 400,
                  color: '#111a10',
                  marginBottom: '0.35rem',
                  lineHeight: 1.3,
                }}
              >
                {act.name}
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.62rem',
                  color: 'rgba(17,26,16,0.3)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {act.level}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Spiritual connection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          background: 'rgba(201,168,76,0.04)',
          border: '1px solid rgba(201,168,76,0.15)',
          borderRadius: 16,
          padding: '3rem',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        <p
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.05rem, 2.5vw, 1.4rem)',
            fontWeight: 300,
            color: 'rgba(17,26,16,0.6)',
            lineHeight: 1.8,
            marginBottom: '1rem',
          }}
        >
          "Vivir aquí no es retirarse del mundo. Es regresar a él."
        </p>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.62rem',
            color: '#c9a84c',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          — Virtus Real Estate
        </p>
      </motion.div>
    </div>
  )
}
