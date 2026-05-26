import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function deriveZoning(property) {
  const z = (property.technical?.zoning || '').toLowerCase()
  if (z.includes('unesco')) return 'UNESCO'
  if (z.includes('sinac')) return 'SINAC'
  if (z.includes('zpcc')) return 'ZPCC'
  if (z.includes('ramsar')) return 'Ramsar'
  if (z.includes('reserva')) return 'Reserva'
  return 'Costa Rica'
}

export default function PropertyCard({ property, index }) {
  const navigate = useNavigate()

  const handleDownload = (e) => {
    e.stopPropagation()
    const link = document.createElement('a')
    link.href = property.techSheet
    link.download = `Ficha-Tecnica-${property.slug}.pdf`
    link.click()
  }

  const area = property.technical?.area?.split('(')[0]?.split(',')[0]?.trim() ?? ''
  const elevation = property.technical?.elevation?.split('·')[0]?.trim() ?? ''
  const certification = deriveZoning(property)
  const stats = [area, elevation, certification].filter(Boolean)

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden cursor-pointer"
      style={{
        background: '#ffffff',
        borderLeft: '3px solid #c9a84c',
        boxShadow: '0 2px 0 rgba(17,26,16,0.06)',
      }}
      onClick={() => navigate(`/sanctuary/${property.slug}`)}
      whileHover={{ y: -2 }}
    >
      {/* Inner flex row on desktop */}
      <div className="flex flex-col md:flex-row">

        {/* ── Image — left 42% on desktop ───────────────────────── */}
        <div className="relative overflow-hidden flex-shrink-0 w-full md:w-[42%] h-64 md:h-auto">
          <motion.img
            src={property.image}
            alt={property.name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.88)' }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(5,13,5,0.5) 100%)' }}
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
            <svg width="7" height="9" viewBox="0 0 8 10" fill="none">
              <path d="M4 0C1.79 0 0 1.79 0 4c0 3 4 6 4 6s4-3 4-6c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 4 2.5 1.5 1.5 0 0 1 4 5.5z" fill="#c9a84c"/>
            </svg>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', color: 'rgba(245,240,232,0.8)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {property.location.split(',')[0]}
            </span>
          </div>
        </div>

        {/* ── Content — right 58% on desktop ─────────────────────── */}
        <div
          className="flex flex-col justify-between flex-1"
          style={{ padding: '2.25rem 2.5rem' }}
        >
          <div>
            {/* Micro label */}
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '0.6rem' }}>
              {property.sanctuaryName}
            </p>

            {/* Property name */}
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 300,
                color: '#111a10',
                lineHeight: 1.05,
                marginBottom: '0.45rem',
                letterSpacing: '-0.01em',
              }}
            >
              {property.name}
            </h2>

            {/* Tagline */}
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1rem',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'rgba(17,26,16,0.42)',
                lineHeight: 1.5,
                marginBottom: '1.25rem',
              }}
            >
              {property.tagline}
            </p>

            <Divider />

            {/* Description */}
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.8rem',
                color: 'rgba(17,26,16,0.52)',
                lineHeight: 1.85,
                fontWeight: 300,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                marginBottom: '1.2rem',
              }}
            >
              {property.description}
            </p>

            <Divider />

            {/* Stats inline */}
            <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
              {stats.map((val, i) => (
                <span key={i} className="flex items-center gap-3">
                  <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '0.88rem', color: '#111a10' }}>
                    {val}
                  </span>
                  {i < stats.length - 1 && (
                    <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: '0.75rem', lineHeight: 1 }}>·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div>
            <Divider />
            <div className="flex items-center gap-3" style={{ marginTop: '1.2rem' }}>
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,26,16,0.4)',
                  background: 'transparent',
                  border: '1px solid rgba(17,26,16,0.14)',
                  borderRadius: 2,
                  padding: '0.55rem 1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                  <path d="M7 10L3 6h2.5V1h3v5H11L7 10zM2 12h10v1.5H2V12z" fill="currentColor"/>
                </svg>
                Ficha Técnica
              </motion.button>

              <motion.button
                onClick={(e) => { e.stopPropagation(); navigate(`/sanctuary/${property.slug}`) }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  background: 'linear-gradient(135deg, #c9a84c, #d4b558)',
                  border: 'none',
                  borderRadius: 2,
                  padding: '0.55rem 1.4rem',
                  cursor: 'pointer',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                Explorar Santuario
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function Divider() {
  return <div style={{ height: 1, background: 'rgba(17,26,16,0.07)', marginBottom: '1.2rem' }} />
}
