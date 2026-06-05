import { useRef, useState, useEffect } from 'react'
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

function IconMuted() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  )
}

function IconUnmuted() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  )
}

export default function VideoHero({ property }) {
  const techStats  = deriveTechStats(property)
  const videoRef   = useRef(null)
  const sectionRef = useRef(null)
  // Audio ON by default when there's a video with sound
  const [muted, setMuted] = useState(!property.videoSrc)

  // ── Fade volume as hero scrolls out — full at 50%+, silent at 10% ────────
  useEffect(() => {
    if (!property.videoSrc) return
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current
        if (!video) return
        const ratio = entry.intersectionRatio

        if (ratio <= 0.1) {
          // Almost gone — silence and pause
          video.volume = 0
          video.muted  = true
          video.pause()
          setMuted(true)
        } else if (ratio >= 0.5) {
          // Fully visible — full volume
          video.muted  = false
          video.volume = 1
          video.play().catch(() => {})
          setMuted(false)
        } else {
          // Between 10% and 50% — linear fade: 0 → 1
          const vol = (ratio - 0.1) / (0.5 - 0.1)
          video.muted  = false
          video.volume = Math.max(0, Math.min(1, vol))
          video.play().catch(() => {})
          setMuted(false)
        }
      },
      {
        // Fine-grained thresholds for smooth fade
        threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.75, 1],
      }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [property.videoSrc])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  const sanctuaryLabel = property.sanctuaryName
    ? property.sanctuaryName.split('—')[0].split('·')[0].trim()
    : ''

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        height: '70vh',
        minHeight: 480,
        maxHeight: 860,
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
          poster={property.heroImage}
          autoPlay
          muted={false}
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${property.heroImage || property.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Overlay — black at 50% */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'rgba(0,0,0,0.6)',
      }} />

      {/* Top bar — back + logo + mute */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.5rem 2.25rem',
      }}>
        <a
          href="/"
          style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            color: 'rgba(245,240,232,0.7)',
            fontFamily: 'Inter, sans-serif', fontSize: '0.62rem',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            textDecoration: 'none', transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.45')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
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
            height: 156, width: 'auto',
            filter: 'invert(1) brightness(1.1)',
            mixBlendMode: 'screen', opacity: 0.9,
          }}
        />

        {property.videoSrc ? (
          <button
            onClick={toggleMute}
            style={{
              color: 'rgba(245,240,232,0.5)',
              background: 'none', border: 'none',
              cursor: 'pointer', padding: '0.25rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.9)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.5)')}
            aria-label={muted ? 'Activar sonido' : 'Silenciar'}
          >
            {muted ? <IconMuted /> : <IconUnmuted />}
          </button>
        ) : (
          <div style={{ width: 24 }} />
        )}
      </div>

      {/* Bottom content */}
      <div style={{
        position: 'relative', zIndex: 10,
        padding: '0 2.75rem 2.75rem',
      }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.72rem',
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: '#c9a84c', marginBottom: '0.6rem',
          }}
        >
          {property.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 300, color: '#f5f0e8',
            lineHeight: 1.0, letterSpacing: '-0.01em',
            marginBottom: '0.65rem',
          }}
        >
          {property.name}
        </motion.h1>

        {sanctuaryLabel && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)',
              fontStyle: 'italic', fontWeight: 300,
              color: 'rgba(245,240,232,0.45)',
              lineHeight: 1.5, maxWidth: 540, marginBottom: '1rem',
            }}
          >
            {sanctuaryLabel}
          </motion.p>
        )}

        {techStats.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.52 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.6rem' }}
          >
            {techStats.map(stat => (
              <span key={stat} style={{
                padding: '0.22rem 0.75rem', borderRadius: 999,
                fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.72rem',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.75)',
                background: 'rgba(45,74,43,0.45)',
                border: '1px solid rgba(245,240,232,0.12)',
                backdropFilter: 'blur(8px)',
              }}>
                {stat}
              </span>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}
        >
          {property.energy.map(tag => (
            <span key={tag} style={{
              padding: '0.2rem 0.7rem', borderRadius: 999,
              fontSize: '0.72rem', fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#c9a84c',
              background: 'rgba(45,74,43,0.55)',
              border: '1px solid rgba(201,168,76,0.22)',
              backdropFilter: 'blur(8px)',
            }}>
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
