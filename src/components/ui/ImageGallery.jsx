import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ImageGallery({ images, title }) {
  const [lightbox, setLightbox] = useState(null) // index of open image

  const close = useCallback(() => setLightbox(null), [])
  const prev  = useCallback(() => setLightbox((i) => (i - 1 + images.length) % images.length), [images.length])
  const next  = useCallback(() => setLightbox((i) => (i + 1) % images.length), [images.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return
    const handler = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'Escape')     close()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, next, prev, close])

  // Show only the first 8 in the grid
  const visible = images.slice(0, 9)

  return (
    <div>
      {/* Grid */}
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {visible.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative overflow-hidden rounded-xl cursor-pointer group"
            style={{ aspectRatio: '4/3' }}
            onClick={() => setLightbox(i)}
          >
            <motion.img
              src={src}
              alt={`${title} — foto ${i + 1}`}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.85)' }}
              whileHover={{ scale: 1.06, filter: 'brightness(1)' }}
              transition={{ duration: 0.4 }}
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(49,87,44,0.35)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            {/* Last tile overlay: "Ver todas" */}
            {i === 8 && images.length > 9 && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ background: 'rgba(49,87,44,0.72)' }}
              >
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.5rem',
                    color: '#c9a84c',
                  }}
                >
                  +{images.length - 9}
                </span>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6rem',
                    color: 'rgba(245,240,232,0.5)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  más fotos
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'rgba(49,87,44,0.95)', backdropFilter: 'blur(12px)' }}
            onClick={close}
          >
            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={lightbox}
                src={images[lightbox]}
                alt={`${title} — ${lightbox + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
                onClick={(e) => e.stopPropagation()}
                style={{ boxShadow: '0 0 80px rgba(201,168,76,0.1)' }}
              />
            </AnimatePresence>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 md:left-8 flex items-center justify-center w-10 h-10 rounded-full"
              style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9l5 5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 md:right-8 flex items-center justify-center w-10 h-10 rounded-full"
              style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4l5 5-5 5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full"
              style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Counter */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                color: 'rgba(201,168,76,0.6)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
