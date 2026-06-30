import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../LanguageSwitcher'
import PrivateDocumentsLock from './PrivateDocumentsLock'

const WORD_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.07, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  const { t } = useTranslation()
  const headline = t('hero.headline') || 'Portal de Santuarios Regenerativos'
  const words = headline?.split(' ') || []

  const videoRef = useRef(null)
  const sectionRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  // ── Trigger video load immediately (not waiting for viewport) ────────
  useEffect(() => {
    // Set to true immediately so observer can trigger play()
    setShouldLoadVideo(true)
  }, [])

  // ── Fade volume as hero scrolls out — full at 50%+, silent at 10% ────────
  useEffect(() => {
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
          video.muted = true
          video.pause()
        } else if (ratio >= 0.5) {
          // Fully visible — full volume and play
          video.muted = false
          video.volume = 1
          video.play().catch(() => {})
        } else {
          // Between 10% and 50% — linear fade: 0 → 1
          const vol = (ratio - 0.1) / (0.5 - 0.1)
          video.muted = false
          video.volume = Math.max(0, Math.min(1, vol))
          video.play().catch(() => {})
        }
      },
      {
        // Fine-grained thresholds for smooth fade
        threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.75, 1],
      }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleCanPlay = () => {
    setVideoReady(true)
    // Play video immediately when ready
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* ── Placeholder while video loads ─────────────────────────── */}
      {!videoReady && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/nature/hero-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              border: '3px solid rgba(201,168,76,0.3)',
              borderTop: '3px solid #c9a84c',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      {/* ── Video background (no poster = no play icon) ───────────── */}
      <video
        ref={videoRef}
        src={shouldLoadVideo ? '/videos/hero.mp4' : undefined}
        autoPlay
        muted={false}
        loop
        playsInline
        preload="metadata"
        onCanPlay={handleCanPlay}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'brightness(0.52) saturate(0.85)',
          opacity: videoReady ? 1 : 0,
          transition: 'opacity 0.6s ease-out',
        }}
      />

      {/* Dark gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,13,5,0.55) 0%, rgba(5,13,5,0.1) 35%, rgba(5,13,5,0.15) 65%, rgba(5,13,5,0.75) 100%)',
        }}
      />
      {/* Subtle green radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(30,65,28,0.18) 0%, transparent 70%)',
        }}
      />

      {/* ── Logo top-center ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        {/* Symbol logo */}
        <img
          src="/images/logo-virtus.png"
          alt="Virtus Realty"
          style={{
            height: 88,
            width: 'auto',
            filter: 'invert(1) brightness(1.15)',
            mixBlendMode: 'screen',
            opacity: 0.92,
          }}
        />
      </motion.div>

      {/* ── Language Switcher & Private Lock top-right ────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 right-8 flex items-center gap-3"
      >
        <PrivateDocumentsLock />
        <div style={{ width: '1px', height: '24px', background: 'rgba(201,168,76,0.2)' }} />
        <LanguageSwitcher showText={true} />
      </motion.div>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center" style={{ marginTop: 60 }}>

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="h-px w-10" style={{ background: 'linear-gradient(to right, transparent, #c9a84c)' }} />
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#c9a84c',
            }}
          >
            Virtus Realty CR & Virtuoso
          </span>
          <div className="h-px w-10" style={{ background: 'linear-gradient(to left, transparent, #c9a84c)' }} />
        </motion.div>

        {/* Headline */}
        <h1
          className="max-w-4xl"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            color: '#f5f0e8',
            marginTop: '4.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={WORD_VARIANTS}
              initial="hidden"
              animate="visible"
              style={{ display: 'inline-block', marginRight: '0.28em' }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Inspirational phrase */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.15rem, 2.5vw, 1.55rem)',
            fontWeight: 300,
            color: 'rgba(245,240,232,0.72)',
            lineHeight: 1.65,
            maxWidth: 640,
            marginBottom: '1rem',
          }}
        >
          {t('hero.tagline')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.9 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.78rem',
            fontWeight: 300,
            color: 'rgba(245,240,232,0.42)',
            letterSpacing: '0.12em',
            maxWidth: 520,
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          {t('hero.description')}
        </motion.p>

        {/* CTA scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
          className="flex flex-col items-center gap-4"
          style={{ color: 'rgba(201,168,76,0.5)' }}
        >
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.7)',
              fontWeight: 700,
            }}
          >
            {t('hero.cta')}
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          >
            <svg width="48" height="48" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12M4 10l6 6 6-6" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade into forest green */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #2d4a2b)',
        }}
      />
    </section>
  )
}
