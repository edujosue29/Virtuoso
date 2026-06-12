import { motion } from 'framer-motion'

function SpecRow({ label, value, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: '2rem',
        padding: '1.35rem 0',
        borderBottom: '1px solid rgba(17,26,16,0.06)',
        alignItems: 'start',
      }}
    >
      <span style={{
        fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.72rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: '#c9a84c', paddingTop: '0.2rem', fontWeight: 700,
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: '1.2rem', color: '#111a10',
        fontWeight: 400, lineHeight: 1.65,
      }}>
        {value}
      </span>
    </motion.div>
  )
}

export default function TechnicalSheet({ property }) {
  const { technical, name, location, tagline, techSheet } = property

  const nameParts = name.split(' ')
  const nameFirst = nameParts[0]
  const nameRest  = nameParts.slice(1).join(' ')

  const specs = [
    { label: 'Ubicación y Extensión',    value: technical.area },
    { label: 'Soberanía Hídrica',        value: technical.water },
    { label: 'Estatus Global',           value: technical.zoning },
    { label: 'Elevación y Clima',        value: technical.elevation },
    { label: 'Biodiversidad Crítica',    value: technical.biodiversity },
    { label: 'Potencial Constructivo',   value: technical.constructive },
    { label: 'Privacidad y Aislamiento', value: technical.privacy },
    { label: 'Accesibilidad Logística',  value: technical.access },
    { label: 'Accesibilidad',            value: technical.infrastructure },
  ].filter((r) => r.value)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = techSheet
    link.download = `Ficha-Tecnica-${name}.pdf`
    link.click()
  }

  return (
    <div>

      {/* ── Top: heading left + tagline right ──────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'flex-end',
        marginBottom: '4rem',
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
            Ficha de Rigor Técnico
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
            <span style={{ color: '#c9a84c', display: 'block' }}>{nameFirst}</span>
            {nameRest && (
              <span style={{ color: '#111a10', display: 'block', fontWeight: 400 }}>
                {nameRest}
              </span>
            )}
          </motion.h2>
        </div>

        {tagline && (
          <motion.p
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
              fontSize: 'clamp(1.15rem, 1.6vw, 1.35rem)',
              fontWeight: 300, color: 'rgba(17,26,16,0.85)',
              lineHeight: 1.9, paddingBottom: '0.5rem',
            }}
          >
            "{tagline}"
          </motion.p>
        )}
      </div>

      {/* ── Divider ─────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          height: 1,
          background: 'linear-gradient(to right, rgba(201,168,76,0.5), transparent)',
          marginBottom: '0',
          transformOrigin: 'left',
        }}
      />

      {/* ── Specs table ─────────────────────────────────────────────────── */}
      <div>
        {specs.map((row, i) => (
          <SpecRow key={row.label} label={row.label} value={row.value} index={i} />
        ))}
      </div>

      {/* ── Footer: disclaimer + download ──────────────────────────────── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '2rem',
        marginTop: '3rem',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(17,26,16,0.06)',
      }}>
        <p style={{
          fontSize: '0.72rem',
          color: 'rgba(17,26,16,0.55)', fontFamily: 'Inter, sans-serif',
          lineHeight: 1.8, maxWidth: 500,
        }}>
          Información basada en registros catastrales y estudios de campo. Sujeta a verificación
          legal y técnica. VIRTUS REALTY CR · VIRTUOSO — {new Date().getFullYear()}
        </p>

        <motion.button
          onClick={handleDownload}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.9rem 2.25rem',
            background: 'linear-gradient(135deg, #c9a84c, #e8c96e)',
            color: '#2d4a2b', border: 'none', borderRadius: 999, cursor: 'pointer',
            fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.64rem',
            fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
            flexShrink: 0,
          }}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M8 12L3 7h3.5V2h3v5H13L8 12zM2 14h12v1.5H2V14z" fill="currentColor"/>
          </svg>
          Descargar PDF
        </motion.button>
      </div>
    </div>
  )
}
