import { motion } from 'framer-motion'

export default function EarthMemory({ property }) {
  const { timeline, name } = property

  return (
    <div className="max-w-3xl mx-auto">
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
          Memoria de la Tierra
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
          Historia Viva de {name}
        </h2>
      </div>

      {/* Map placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl flex items-center justify-center"
        style={{
          height: 300,
          background: 'rgba(17,26,16,0.03)',
          border: '1px solid rgba(201,168,76,0.15)',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '5rem',
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${(i + 1) * 12}%`,
              height: `${(i + 1) * 12}%`,
              border: '1px solid rgba(201,168,76,0.12)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          />
        ))}
        <div className="relative z-10 text-center">
          <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>🗺️</div>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.15rem',
              fontStyle: 'italic',
              color: 'rgba(17,26,16,0.3)',
              marginBottom: 6,
            }}
          >
            Mapa Topográfico 3D
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.62rem',
              color: 'rgba(17,26,16,0.18)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Integra tu visor de mapas aquí
          </p>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        <div
          className="absolute left-6 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.4), rgba(201,168,76,0.04))' }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {timeline.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', paddingLeft: '4.5rem' }}
            >
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
                style={{
                  position: 'absolute',
                  left: 24,
                  top: 6,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: i === timeline.length - 1 ? '#c9a84c' : '#ffffff',
                  border: `2px solid ${i === timeline.length - 1 ? '#c9a84c' : 'rgba(201,168,76,0.4)'}`,
                  boxShadow: i === timeline.length - 1
                    ? '0 0 12px rgba(201,168,76,0.4)'
                    : '0 0 0 3px rgba(17,26,16,0.05)',
                }}
              >
                {i === timeline.length - 1 && (
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ffffff' }} />
                )}
              </motion.div>

              <span
                style={{
                  display: 'inline-block',
                  marginBottom: '0.5rem',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.62rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#c9a84c',
                }}
              >
                {event.year}
              </span>

              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.4rem',
                  fontWeight: 400,
                  color: '#111a10',
                  lineHeight: 1.2,
                  marginBottom: '0.7rem',
                }}
              >
                {event.title}
              </h3>

              <p
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.05rem',
                  fontWeight: 300,
                  color: 'rgba(17,26,16,0.55)',
                  lineHeight: 1.8,
                }}
              >
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
