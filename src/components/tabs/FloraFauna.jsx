import { useState } from 'react'
import { motion } from 'framer-motion'

function FlipCard({ species }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="perspective cursor-pointer"
      style={{ height: 340 }}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="preserve-3d relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT */}
        <div
          className="backface-hidden absolute inset-0 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden', border: '1px solid rgba(17,26,16,0.1)' }}
        >
          <img
            src={species.image}
            alt={species.name}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.7)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(5,13,5,0.92) 0%, rgba(5,13,5,0) 55%)' }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span
              className="inline-block px-2.5 py-0.5 rounded-full text-xs mb-3"
              style={{
                background: species.type === 'fauna' ? 'rgba(45,90,39,0.6)' : 'rgba(90,60,20,0.6)',
                border: `1px solid ${species.type === 'fauna' ? 'rgba(45,180,90,0.4)' : 'rgba(201,168,76,0.4)'}`,
                color: species.type === 'fauna' ? '#7ddfab' : '#c9a84c',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {species.type}
            </span>
            <h3
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.4rem',
                fontWeight: 400,
                color: '#f5f0e8',
                lineHeight: 1.2,
                marginBottom: '0.3rem',
              }}
            >
              {species.name}
            </h3>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: 'rgba(245,240,232,0.5)',
              }}
            >
              {species.scientific}
            </p>
          </div>
          <div
            className="absolute top-4 right-4"
            style={{ color: 'rgba(201,168,76,0.55)', fontSize: '0.6rem', fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}
          >
            ↺ info
          </div>
        </div>

        {/* BACK */}
        <div
          className="backface-hidden absolute inset-0 rounded-2xl p-7 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: '#ffffff',
            border: '1px solid rgba(201,168,76,0.2)',
            boxShadow: '0 4px 24px rgba(17,26,16,0.06)',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                marginBottom: '0.5rem',
              }}
            >
              {species.scientific}
            </p>
            <h3
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#111a10',
                marginBottom: '0.9rem',
              }}
            >
              {species.name}
            </h3>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.02rem',
                fontWeight: 300,
                color: 'rgba(17,26,16,0.65)',
                lineHeight: 1.75,
              }}
            >
              {species.description}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1rem' }}>
            <InfoPill label="Estado" value={species.status} />
            <InfoPill label="Hábitat" value={species.habitat} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function InfoPill({ label, value }) {
  return (
    <div
      className="flex items-start gap-3 p-3 rounded-lg"
      style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.14)' }}
    >
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.6rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#c9a84c',
          minWidth: 56,
          flexShrink: 0,
          paddingTop: 2,
        }}
      >
        {label}
      </span>
      <span
        style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(17,26,16,0.65)', lineHeight: 1.5 }}
      >
        {value}
      </span>
    </div>
  )
}

export default function FloraFauna({ property }) {
  const [filter, setFilter] = useState('all')

  const filtered = property.species.filter(
    (s) => filter === 'all' || s.type === filter
  )

  return (
    <div>
      {/* Header */}
      <div className="text-center" style={{ marginBottom: '3.5rem' }}>
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
          Santuario Vivo
        </p>
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 300,
            color: '#111a10',
            lineHeight: 1.1,
            marginBottom: '0.9rem',
          }}
        >
          Flora & Fauna del Santuario
        </h2>
        <p
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            color: 'rgba(17,26,16,0.42)',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            maxWidth: 480,
            margin: '0 auto',
          }}
        >
          Haz hover o toca cada carta para descubrir la historia de cada especie.
        </p>
      </div>

      {/* Filter */}
      <div className="flex justify-center gap-3" style={{ marginBottom: '3rem' }}>
        {[
          { id: 'all', label: 'Todas' },
          { id: 'fauna', label: 'Fauna' },
          { id: 'flora', label: 'Flora' },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.62rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '0.5rem 1.2rem',
              borderRadius: 999,
              color: filter === f.id ? '#ffffff' : 'rgba(17,26,16,0.45)',
              background: filter === f.id ? 'linear-gradient(135deg,#c9a84c,#e8c96e)' : 'transparent',
              border: `1px solid ${filter === f.id ? 'transparent' : 'rgba(17,26,16,0.14)'}`,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>
        {filtered.map((species, i) => (
          <motion.div
            key={species.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <FlipCard species={species} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
