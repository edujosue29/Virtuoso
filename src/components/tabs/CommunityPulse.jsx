import { motion } from 'framer-motion'

const PULSE_IMAGE = '/images/carpintera/IMG_3036.jpg'

// Alternating font sizes for editorial rhythm
const SIZES = ['1.55rem', '1.05rem', '1.3rem', '0.98rem', '1.45rem', '1.05rem', '1.2rem']

function ActivityItem({ act, index, dark }) {
  const text     = dark ? 'rgba(245,240,232,0.82)' : '#111a10'
  const border   = dark ? 'rgba(245,240,232,0.07)'  : 'rgba(17,26,16,0.06)'

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      style={{
        display: 'flex', alignItems: 'baseline',
        justifyContent: 'space-between',
        padding: '1rem 0',
        borderBottom: `1px solid ${border}`,
        gap: '1rem',
      }}
    >
      <span style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: '1.1rem', fontWeight: 300, color: text,
      }}>
        {act.name}
      </span>
      <span style={{
        fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.55rem',
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: '#c9a84c', flexShrink: 0,
      }}>
        {act.level}
      </span>
    </motion.div>
  )
}

export default function CommunityPulse({ property, dark }) {
  const { communityPulse, name, sectionImages } = property
  const img     = sectionImages?.pulse || PULSE_IMAGE
  const phrases = communityPulse.lifestyle
  const acts    = communityPulse.activities

  const textMain   = dark ? '#f5f0e8'                 : '#111a10'
  const textStrong = dark ? 'rgba(245,240,232,0.85)'  : 'rgba(17,26,16,0.78)'
  const textMid    = dark ? 'rgba(245,240,232,0.65)'  : 'rgba(17,26,16,0.52)'
  const textSoft   = dark ? 'rgba(245,240,232,0.52)'  : 'rgba(17,26,16,0.65)'
  const borderCol  = 'rgba(201,168,76,0.12)'

  // Three levels of opacity cycling through phrases
  const PHRASE_COLORS = [textStrong, textMid, textSoft]

  return (
    <div>
      {/* Section label */}
      <p style={{
        fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.6rem',
        letterSpacing: '0.28em', textTransform: 'uppercase',
        color: '#c9a84c', marginBottom: '0.9rem',
      }}>
        El Pulso de la Comunidad
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
          fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
          fontWeight: 400, lineHeight: 1.05, margin: '0 0 3.5rem',
        }}
      >
        <span style={{ color: '#c9a84c' }}>Vivir</span>
        <span style={{ color: textMain }}> en {name}</span>
      </motion.h2>

      {/* ── Two-column: phrases left, image right ────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '55% 45%',
        gap: '0',
        border: `1px solid ${borderCol}`,
        marginBottom: '4.5rem',
        overflow: 'hidden',
      }}>
        {/* LEFT — stacked lifestyle phrases */}
        <div style={{ padding: '2.5rem 2.75rem 2.5rem 2.5rem', borderRight: `1px solid ${borderCol}` }}>
          {phrases.map((phrase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              {i > 0 && (
                <div style={{
                  height: 1,
                  background: borderCol,
                  margin: '1.25rem 0',
                }} />
              )}
              <p style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: 'italic',
                fontSize: SIZES[i % SIZES.length],
                fontWeight: 300,
                color: PHRASE_COLORS[i % 3],
                lineHeight: 1.65,
                paddingLeft: i % 2 === 0 ? '0' : '1.5rem',
              }}>
                {phrase}
              </p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT — image */}
        <div style={{ position: 'relative', minHeight: 480 }}>
          <img
            src={img}
            alt={`${name} — vida en el bosque`}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 30%',
              filter: 'brightness(0.65) saturate(0.85)',
            }}
          />
          {/* Gradient */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(5,13,5,0.1) 0%, rgba(5,13,5,0.55) 100%)',
          }} />
          {/* Bottom badge */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '1.5rem 2rem',
          }}>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '0.82rem', fontStyle: 'italic',
              color: 'rgba(245,240,232,0.6)', lineHeight: 1.6,
            }}>
              "No es retirarse del mundo. Es regresar a él."
            </p>
          </div>
        </div>
      </div>

      {/* ── Actividades ───────────────────────────────────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '1.5rem',
        marginBottom: '2rem',
      }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.2)' }} />
        <span style={{
          fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.54rem',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: '#c9a84c', flexShrink: 0,
        }}>
          Actividades
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.2)' }} />
      </div>

      {/* 2-column elegant activity list */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        columnGap: '4rem',
        marginBottom: '3.5rem',
      }}>
        {acts.map((act, i) => (
          <ActivityItem key={i} act={act} index={i} dark={dark} />
        ))}
      </div>
    </div>
  )
}
