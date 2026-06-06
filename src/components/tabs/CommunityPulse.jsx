import { motion } from 'framer-motion'

const PULSE_IMAGE = '/images/carpintera/IMG_3036.jpg'

// SVG icons for activities — no emojis
const ACTIVITY_ICONS = {
  'Observación de Aves':     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>,
  'Avistamiento de Quetzales': <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>,
  'Senderismo de Bosque':    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20h18M5 20L9 10l4 6 3-4 4 8"/></svg>,
  'Senderismo de Montaña':   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20h18M5 20L9 10l4 6 3-4 4 8"/></svg>,
  'Baño en Ríos y Pozas':    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 7c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></svg>,
  'Agroturismo Orgánico':    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12M12 12C12 7 8 4 4 5c4 0 8 3 8 7zM12 12C12 7 16 4 20 5c-4 0-8 3-8 7z"/></svg>,
  'Meditación en Naturaleza':<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/></svg>,
  'Fotografía de Naturaleza': <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  'Fotografía de Neblina':   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  'Yoga al Amanecer':        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v5l3 3M9 20l3-5 3 5M6 12h3M15 12h3"/></svg>,
  'Tour de Flora Endémica':  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  'Trabajo Remoto en Altura': <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
}
const DEFAULT_ICON = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>

export default function CommunityPulse({ property, dark }) {
  const { communityPulse, name, sectionImages } = property
  const img  = sectionImages?.pulse || PULSE_IMAGE
  const acts = communityPulse.activities

  // Use first 4 lifestyle phrases as the editorial highlights
  const highlights = communityPulse.lifestyle.slice(0, 4)

  const cream = '#faf9f6'
  const muted = 'rgba(245,240,232,0.52)'
  const border = 'rgba(255,255,255,0.07)'

  return (
    <div>

      {/* ── Top: heading left + pull phrase right ──────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'flex-end',
        marginBottom: '3.5rem',
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
            El Pulso de la Comunidad
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
            <span style={{ color: cream, display: 'block' }}>Vivir en</span>
            <span style={{ color: '#c9a84c', display: 'block' }}>{name}</span>
          </motion.h2>
        </div>

        {/* Right — first lifestyle phrase as pull quote */}
        <motion.p
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: 'clamp(1.15rem, 1.5vw, 1.35rem)',
            fontWeight: 300, color: muted,
            lineHeight: 1.9, paddingBottom: '0.5rem',
          }}
        >
          "{communityPulse.lifestyle[0]}"
        </motion.p>
      </div>

      {/* ── Main: image left + lifestyle highlights right ───────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 3fr',
          gap: '0',
          marginBottom: '4rem',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Tall image */}
        <div style={{ position: 'relative', minHeight: 460, overflow: 'hidden' }}>
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
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(45,74,43,0.6) 0%, transparent 50%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '1.75rem', left: '1.75rem', right: '1.75rem',
          }}>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
              fontSize: '1.05rem', color: 'rgba(245,240,232,0.6)',
              lineHeight: 1.6,
            }}>
              "No es retirarse del mundo. Es regresar a él."
            </p>
          </div>
        </div>

        {/* Right — 4 lifestyle highlights in 2x2 grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          borderLeft: '1px solid rgba(255,255,255,0.07)',
        }}>
          {highlights.map((phrase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              style={{
                padding: '2.25rem 2rem',
                borderBottom: i < 2 ? `1px solid ${border}` : 'none',
                borderRight: i % 2 === 0 ? `1px solid ${border}` : 'none',
                display: 'flex', flexDirection: 'column', gap: '0.75rem',
              }}
            >
              {/* Small dot accent */}
              <div style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'rgba(201,168,76,0.6)', flexShrink: 0,
              }} />
              <p style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                fontWeight: 300, color: 'rgba(245,240,232,0.78)',
                lineHeight: 1.7, margin: 0,
              }}>
                {phrase}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Activities — 2×3 feature grid with SVG icons ───────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '1.25rem',
        marginBottom: '2rem',
      }}>
        <span style={{
          fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.65rem',
          letterSpacing: '0.24em', textTransform: 'uppercase',
          color: '#c9a84c', flexShrink: 0,
        }}>
          Actividades
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.2)' }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0',
        border: '1px solid rgba(255,255,255,0.07)',
      }}>
        {acts.map((act, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            style={{
              padding: '1.75rem 1.5rem',
              borderBottom: i < 3 ? `1px solid ${border}` : 'none',
              borderRight: (i + 1) % 3 !== 0 ? `1px solid ${border}` : 'none',
              display: 'flex', flexDirection: 'column', gap: '0.85rem',
            }}
          >
            {/* Icon */}
            <div style={{
              width: 38, height: 38,
              borderRadius: '50%',
              border: '1px solid rgba(201,168,76,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#c9a84c',
            }}>
              {ACTIVITY_ICONS[act.name] || DEFAULT_ICON}
            </div>

            {/* Name */}
            <span style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1rem', fontWeight: 500,
              color: cream, lineHeight: 1.3,
            }}>
              {act.name}
            </span>

            {/* Level */}
            <span style={{
              fontFamily: '"DM Sans", Inter, sans-serif',
              fontSize: '0.65rem', letterSpacing: '0.16em',
              textTransform: 'uppercase', color: muted,
            }}>
              {act.level}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
