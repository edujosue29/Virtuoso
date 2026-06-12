import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Bento span map for up to 9 images — asymmetric editorial layout
const BENTO = [
  { col: 2, row: 2 }, // 0 — featured large
  { col: 1, row: 1 }, // 1
  { col: 1, row: 1 }, // 2
  { col: 1, row: 1 }, // 3
  { col: 1, row: 1 }, // 4
  { col: 1, row: 2 }, // 5 — tall
  { col: 2, row: 1 }, // 6 — wide
  { col: 1, row: 1 }, // 7
  { col: 1, row: 1 }, // 8
]

const ROW_H = 220 // px per grid row unit

export default function ImageGallery({ images, title }) {
  const [lightbox, setLightbox] = useState(null)
  const [hovered,  setHovered]  = useState(null)

  const close = useCallback(() => setLightbox(null), [])

  const prev  = useCallback(() => {
    setLightbox(i => {
      const newIndex = (i - 1 + images.length) % images.length
      setTimeout(() => scrollToImage(newIndex), 0)
      return newIndex
    })
  }, [images.length])

  const next  = useCallback(() => {
    setLightbox(i => {
      const newIndex = (i + 1) % images.length
      setTimeout(() => scrollToImage(newIndex), 0)
      return newIndex
    })
  }, [images.length])

  const scrollToImage = (index) => {
    const container = document.querySelector('[data-gallery-container]')
    const elem = document.querySelector(`[data-gallery-index="${index}"]`)
    if (container && elem) {
      const scrollLeft = elem.offsetLeft - container.offsetWidth / 2 + elem.offsetWidth / 2
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (lightbox === null) return
    const h = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'Escape')     close()
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [lightbox, next, prev, close])

  const visible = images

  return (
    <div>
      {/* ── Bento grid ──────────────────────────────────────────────────── */}
      <div
        data-gallery-container
        style={{
          overflowX: 'hidden',
          overflowY: 'visible',
          paddingBottom: '8px',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: `${ROW_H}px`,
          gap: '6px',
          width: '100%',
        }}>
        {visible.map((src, i) => {
          const { col, row } = BENTO[i] ?? { col: 1, row: 1 }
          const isHov = hovered === i

          return (
            <motion.div
              key={src}
              data-gallery-index={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setLightbox(i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                gridColumn: `span ${col}`,
                gridRow: `span ${row}`,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 10,
                cursor: 'pointer',
                background: '#2d4a2b',
              }}
            >
              <img
                src={src}
                alt={`${title} — ${i + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transform: isHov ? 'scale(1.07)' : 'scale(1)',
                  filter: isHov ? 'brightness(0.68)' : 'brightness(0.9)',
                  transition: 'transform 0.65s cubic-bezier(0.16,1,0.3,1), filter 0.4s ease',
                }}
              />

              {/* Persistent bottom gradient on the featured tile */}
              {col === 2 && row === 2 && (
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  height: '45%',
                  background: 'linear-gradient(to top, rgba(45,74,43,0.52) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />
              )}

              {/* Expand icon on hover */}
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: isHov ? 1 : 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
              }}>
                <div style={{
                  width: 44, height: 44,
                  borderRadius: '50%',
                  background: 'rgba(45,74,43,0.52)',
                  border: '1px solid rgba(201,168,76,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                      stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

            </motion.div>
          )
        })}
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(45,74,43,0.95)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={lightbox}
                src={images[lightbox]}
                alt={`${title} — ${lightbox + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={e => e.stopPropagation()}
                style={{
                  maxHeight: '85vh',
                  maxWidth: '90vw',
                  objectFit: 'contain',
                  borderRadius: 12,
                  boxShadow: '0 0 80px rgba(201,168,76,0.1)',
                }}
              />
            </AnimatePresence>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              style={{
                position: 'absolute', left: '2rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(201,168,76,0.15)',
                border: '1px solid rgba(201,168,76,0.3)',
                cursor: 'pointer',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9l5 5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); next() }}
              style={{
                position: 'absolute', right: '2rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(201,168,76,0.15)',
                border: '1px solid rgba(201,168,76,0.3)',
                cursor: 'pointer',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4l5 5-5 5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Close */}
            <button
              onClick={close}
              style={{
                position: 'absolute', top: '1rem', right: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 32, height: 32, borderRadius: '50%',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.2)',
                cursor: 'pointer',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Counter */}
            <div style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              color: 'rgba(201,168,76,0.6)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
