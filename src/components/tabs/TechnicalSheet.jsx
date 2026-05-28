import { motion } from 'framer-motion'

// ── Hero stat card ────────────────────────────────────────────────────────────
function StatCard({ value, label, sub, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{
        padding: '2.5rem 2rem',
        border: '1px solid rgba(201,168,76,0.18)',
        borderTop: '3px solid rgba(201,168,76,0.55)',
        background: '#ffffff',
        display: 'flex', flexDirection: 'column', gap: '0.5rem',
      }}
    >
      <span style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
        fontWeight: 300, color: '#31572C', lineHeight: 1,
      }}>
        {value}
      </span>
      <span style={{
        fontFamily: 'Inter, sans-serif', fontSize: '0.6rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: '#c9a84c', fontWeight: 500,
      }}>
        {label}
      </span>
      {sub && (
        <span style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '0.9rem', color: 'rgba(49,87,44,0.42)',
          lineHeight: 1.4, marginTop: '0.25rem',
        }}>
          {sub}
        </span>
      )}
    </motion.div>
  )
}

// ── Spec row ─────────────────────────────────────────────────────────────────
function SpecRow({ label, value, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '190px 1fr',
        gap: '2rem',
        padding: '1.5rem 0',
        borderBottom: '1px solid rgba(49,87,44,0.06)',
        alignItems: 'start',
      }}
    >
      <span style={{
        fontFamily: 'Inter, sans-serif', fontSize: '0.58rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: '#c9a84c', paddingTop: '0.15rem',
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: '1.05rem', color: '#31572C',
        fontWeight: 300, lineHeight: 1.65,
      }}>
        {value}
      </span>
    </motion.div>
  )
}

// ── TechnicalSheet ────────────────────────────────────────────────────────────
export default function TechnicalSheet({ property }) {
  const { technical, name, techSheet } = property

  // Derive clean hero stat values
  const areaClean = technical.area.split('(')[0].trim()
  const elevClean = technical.elevation.split('·')[0].replace(/^Finca \d+:\s*/i, '').trim()
  const zoneClean = technical.zoning.includes('UNESCO')
    ? 'UNESCO · Patrimonio'
    : technical.zoning.includes('SINAC') ? 'SINAC · ZPCC' : technical.zoning.split('—')[0].trim()

  const heroStats = [
    { value: areaClean, label: 'Área Total',  sub: technical.areaDesglose?.split('·')[0]?.trim() },
    { value: elevClean, label: 'Elevación',    sub: 'Bosque nuboso de montaña' },
    { value: zoneClean, label: 'Zonificación', sub: 'Plan General de Manejo' },
  ]

  const specs = [
    { label: 'Desglose',          value: technical.areaDesglose },
    { label: 'Recursos Hídricos', value: technical.water },
    { label: 'Acceso',            value: technical.access },
    { label: 'Estado de Título',  value: technical.titleStatus },
    { label: 'Folio Real',        value: technical.folio },
    { label: 'Tipo de Suelo',     value: technical.soilType },
    { label: 'Infraestructura',   value: technical.infrastructure },
    { label: 'Restricciones',     value: technical.restrictions },
    { label: 'Valor Referencial', value: technical.value },
  ].filter((r) => r.value)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = techSheet
    link.download = `Ficha-Tecnica-${name}.pdf`
    link.click()
  }

  return (
    <div>
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.6rem',
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: '#c9a84c', marginBottom: '0.9rem',
        }}
      >
        Ficha de Rigor Técnico
      </motion.p>

      {/* Property name + download CTA */}
      <div style={{
        display: 'flex', alignItems: 'flex-start',
        justifyContent: 'space-between', flexWrap: 'wrap',
        gap: '1.5rem', marginBottom: '3.5rem',
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          style={{
            fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 400, lineHeight: 1.05, margin: 0,
          }}
        >
          {(() => {
            const parts = name.split(' ')
            return <>
              <span style={{ color: '#c9a84c' }}>{parts[0]}</span>
              {parts.length > 1 && <span style={{ color: '#31572C' }}> {parts.slice(1).join(' ')}</span>}
            </>
          })()}
        </motion.h2>

        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.9rem 2rem',
            background: 'linear-gradient(135deg, #c9a84c, #e8c96e)',
            color: '#ffffff', border: 'none', borderRadius: 2, cursor: 'pointer',
            fontFamily: 'Inter, sans-serif', fontSize: '0.65rem',
            fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M8 12L3 7h3.5V2h3v5H13L8 12zM2 14h12v1.5H2V14z" fill="currentColor"/>
          </svg>
          Descargar PDF
        </motion.button>
      </div>

      {/* ── Hero stat cards — 3 across ────────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: 'rgba(201,168,76,0.1)',
        border: '1px solid rgba(201,168,76,0.1)',
        marginBottom: '4rem',
      }}>
        {heroStats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} delay={i * 0.1} />
        ))}
      </div>

      {/* ── Detailed specs list ──────────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid rgba(49,87,44,0.06)' }}>
        {specs.map((row, i) => (
          <SpecRow key={row.label} label={row.label} value={row.value} index={i} />
        ))}
      </div>

      {/* Disclaimer */}
      <p style={{
        marginTop: '3.5rem', fontSize: '0.6rem',
        color: 'rgba(49,87,44,0.25)', fontFamily: 'Inter, sans-serif',
        lineHeight: 1.9, textAlign: 'center',
      }}>
        Información basada en registros catastrales y estudios de campo. Sujeta a verificación legal y técnica.
        <br />
        Virtus Real Estate · VIRTUOSO — {new Date().getFullYear()}
      </p>
    </div>
  )
}
