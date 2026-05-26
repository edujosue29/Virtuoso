import { motion } from 'framer-motion'

const ROW_VARIANTS = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.06, duration: 0.5 } }),
}

export default function TechnicalSheet({ property }) {
  const { technical, name, techSheet } = property

  const rows = [
    { label: 'Área Total',       value: technical.area },
    { label: 'Desglose',         value: technical.areaDesglose },
    { label: 'Zonificación',     value: technical.zoning },
    { label: 'Recursos Hídricos',value: technical.water },
    { label: 'Elevación',        value: technical.elevation },
    { label: 'Acceso',           value: technical.access },
    { label: 'Estado de Título', value: technical.titleStatus },
    { label: 'Folio Real',       value: technical.folio },
    { label: 'Tipo de Suelo',    value: technical.soilType },
    { label: 'Infraestructura',  value: technical.infrastructure },
    { label: 'Restricciones',    value: technical.restrictions },
    { label: 'Valor Referencial',value: technical.value },
  ]

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = techSheet
    link.download = `Ficha-Tecnica-${name}.pdf`
    link.click()
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
        <div>
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
            Ficha de Rigor Técnico
          </p>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 300,
              color: '#111a10',
              lineHeight: 1.1,
            }}
          >
            {name}
          </h2>
        </div>

        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-7 py-3.5 text-xs uppercase tracking-widest"
          style={{
            background: 'linear-gradient(135deg,#c9a84c,#e8c96e)',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            letterSpacing: '0.15em',
            border: 'none',
            borderRadius: 2,
            cursor: 'pointer',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 12L3 7h3.5V2h3v5H13L8 12zM2 14h12v1.5H2V14z" fill="currentColor"/>
          </svg>
          Descargar PDF
        </motion.button>
      </div>

      {/* Data table */}
      <div
        className="overflow-hidden"
        style={{ border: '1px solid rgba(17,26,16,0.08)', borderRadius: 4 }}
      >
        {rows.map((row, i) => (
          <motion.div
            key={row.label}
            custom={i}
            variants={ROW_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-start gap-3 px-8 py-6"
            style={{
              background: i % 2 === 0 ? 'rgba(17,26,16,0.025)' : 'transparent',
              borderBottom: i < rows.length - 1 ? '1px solid rgba(17,26,16,0.06)' : 'none',
            }}
          >
            <span
              className="sm:w-52 flex-shrink-0 text-xs uppercase tracking-widest pt-0.5"
              style={{ color: '#c9a84c', fontFamily: 'Inter, sans-serif', letterSpacing: '0.14em' }}
            >
              {row.label}
            </span>
            <span
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.1rem',
                color: '#111a10',
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              {row.value}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Disclaimer */}
      <p
        className="mt-10 text-xs text-center"
        style={{ color: 'rgba(17,26,16,0.28)', fontFamily: 'Inter, sans-serif', lineHeight: 1.9 }}
      >
        Información basada en registros catastrales y estudios de campo. Sujeta a verificación legal y técnica.
        <br />
        Virtus Real Estate · VIRTUOSO — {new Date().getFullYear()}
      </p>
    </div>
  )
}
