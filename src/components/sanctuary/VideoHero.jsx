import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

function deriveTechStats(property) {
  const t = property.technical || {}
  const area      = t.area?.split('(')[0]?.split(',')[0]?.trim() ?? ''
  const elevation = t.elevation?.split('·')[0]?.replace(/^Finca \d+:\s*/i, '').trim() ?? ''
  const z = (t.zoning || '').toLowerCase()
  const zoning = z.includes('sinac') || z.includes('zpcc') ? 'SINAC · ZPCC'
    : z.includes('unesco') ? 'UNESCO · Patrimonio'
    : z.includes('ramsar') ? 'Ramsar'
    : t.zoning?.split('—')[0]?.trim() ?? ''
  return [area, elevation, zoning].filter(Boolean)
}

export default function VideoHero({ property }) {
  const techStats = deriveTechStats(property)
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  return (
    <section
      style={{
        position: 'relative',
        height: '42vh',
        minHeight: 320,
        maxHeight: 560,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      {/* Background — video or image */}
      {property.videoSrc ? (
        <video
          ref={videoRef}
          src={property.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.52)',
          }}
        />
      ) : (
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${property.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            filter: 'brightness(0.5)',
          }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Gradient — strong at bottom for text legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(49,87,44,0.2) 0%, rgba(49,87,44,0) 30%, rgba(49,87,44,0.75) 75%, rgba(49,87,44,0.92) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top bar — back + logo + mute */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 2rem',
        }}
      >
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'rgba(245,240,232,0.65)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Portal
        </a>

        <img
          src="/images/logo-virtus-letras.png"
          alt="Virtus"
          style={{
            height: 18,
            width: 'auto',
            filter: 'invert(1) brightness(1.1)',
            mixBlendMode: 'screen',
            opacity: 0.8,
          }}
        />

        {property.videoSrc ? (
          <button
            onClick={toggleMute}
            style={{
              color: 'rgba(245,240,232,0.45)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.85rem',
              padding: '0.25rem',
            }}
          >
            {muted ? '🔇' : '🔊'}
          </button>
        ) : (
          <div style={{ width: 24 }} />
        )}
      </div>

      {/* Bottom content — location, name, tagline, energy tags */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '0 2.5rem 2rem',
        }}
      >
        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: '0.5rem',
          }}
        >
          {property.location}
        </motion.p>

        {/* Property name */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 300,
            color: '#f5f0e8',
            lineHeight: 1.05,
            marginBottom: '0.4rem',
          }}
        >
          {property.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'rgba(245,240,232,0.52)',
            lineHeight: 1.5,
            maxWidth: 520,
            marginBottom: '0.75rem',
          }}
        >
          {property.tagline}
        </motion.p>

        {/* Area · Elevation · Zoning */}
        {techStats.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.48 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}
          >
            {techStats.map((stat) => (
              <span
                key={stat}
                style={{
                  padding: '0.22rem 0.75rem',
                  borderRadius: 999,
                  fontFamily: '"DM Sans", Inter, sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,240,232,0.75)',
                  background: 'rgba(49,87,44,0.45)',
                  border: '1px solid rgba(245,240,232,0.14)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                {stat}
              </span>
            ))}
          </motion.div>
        )}

        {/* Energy tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}
        >
          {property.energy.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '0.2rem 0.7rem',
                borderRadius: 999,
                fontSize: '0.58rem',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                background: 'rgba(49,87,44,0.55)',
                border: '1px solid rgba(201,168,76,0.22)',
                backdropFilter: 'blur(6px)',
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
