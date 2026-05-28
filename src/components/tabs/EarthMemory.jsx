import { motion } from 'framer-motion'

function Chapter({ event, index }) {
  const isEven = index % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      {index > 0 && (
        <div style={{ height: 1, background: 'rgba(201,168,76,0.15)', margin: '0 0 2.5rem' }} />
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: isEven ? '1fr 160px' : '160px 1fr',
        gap: '2.5rem',
        alignItems: 'start',
        marginBottom: '2.5rem',
      }}>
        {/* Big year — LEFT for odd events */}
        {!isEven && (
          <div style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 300,
            color: 'rgba(201,168,76,0.2)',
            lineHeight: 1,
            textAlign: 'right',
            userSelect: 'none',
            paddingTop: '0.1rem',
          }}>
            {event.year}
          </div>
        )}

        {/* Content */}
        <div>
          <span style={{
            display: 'inline-block',
            fontFamily: 'Inter, sans-serif', fontSize: '0.57rem',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: '#c9a84c', marginBottom: '0.6rem',
          }}>
            {event.year}
          </span>

          <h3 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
            fontWeight: 300, color: '#31572C',
            lineHeight: 1.15, marginBottom: '0.6rem',
          }}>
            {event.title}
          </h3>

          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.02rem', fontWeight: 300,
            color: 'rgba(49,87,44,0.6)', lineHeight: 1.8,
          }}>
            {event.description}
          </p>
        </div>

        {/* Big year — RIGHT for even events */}
        {isEven && (
          <div style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 300,
            color: 'rgba(201,168,76,0.2)',
            lineHeight: 1,
            textAlign: 'left',
            userSelect: 'none',
            paddingTop: '0.1rem',
          }}>
            {event.year}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function EarthMemory({ property }) {
  const { timeline, name } = property

  return (
    <div>
      <p style={{
        fontFamily: 'Inter, sans-serif', fontSize: '0.6rem',
        letterSpacing: '0.28em', textTransform: 'uppercase',
        color: '#c9a84c', marginBottom: '0.9rem',
      }}>
        Memoria de la Tierra
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
        <span style={{ color: '#c9a84c' }}>Historia</span>
        <span style={{ color: '#31572C' }}> Viva de {name}</span>
      </motion.h2>

      <div>
        {timeline.map((event, i) => (
          <Chapter key={i} event={event} index={i} />
        ))}
      </div>

      <div style={{ height: 1, background: 'rgba(201,168,76,0.15)', marginTop: '0.5rem', marginBottom: '2rem' }} />
      <p style={{
        fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
        fontSize: '0.95rem', color: 'rgba(49,87,44,0.28)',
        lineHeight: 1.75, textAlign: 'center',
        maxWidth: 480, margin: '0 auto',
      }}>
        Cada año es una capa de memoria. Cada capa sostiene el valor del presente.
      </p>
    </div>
  )
}
