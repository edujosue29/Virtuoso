import { motion } from 'framer-motion'

export default function CustodyLegacy({ property }) {
  const { legacy, name } = property

  return (
    <div className="max-w-3xl mx-auto text-center">
      {/* Header */}
      <div style={{ marginBottom: '4rem' }}>
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
          El Legado de la Custodia
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
          {legacy.title}
        </h2>
      </div>

      {/* Video placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          position: 'relative',
          aspectRatio: '16/9',
          background: 'rgba(17,26,16,0.04)',
          border: '1px solid rgba(17,26,16,0.1)',
          borderRadius: 16,
          overflow: 'hidden',
          marginBottom: '3rem',
        }}
      >
        {legacy.videoUrl ? (
          <iframe
            src={legacy.videoUrl}
            title={`Carta de ${legacy.custodianName}`}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.25)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M7 4l12 7-12 7V4z" fill="#c9a84c"/>
              </svg>
            </motion.div>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(17,26,16,0.3)' }}>
              Video testimonial del custodio actual
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', color: 'rgba(17,26,16,0.18)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Reemplaza legacy.videoUrl con la URL del video
            </p>
          </div>
        )}
      </motion.div>

      {/* Custodian name */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.62rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#c9a84c',
          marginBottom: '2rem',
        }}
      >
        {legacy.custodianName}
      </motion.p>

      {/* Letter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          background: 'rgba(201,168,76,0.04)',
          border: '1px solid rgba(201,168,76,0.15)',
          borderRadius: 16,
          padding: '3rem 3.5rem',
          textAlign: 'left',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -24,
            left: 32,
            fontSize: '7rem',
            lineHeight: 1,
            color: 'rgba(201,168,76,0.13)',
            fontFamily: '"Cormorant Garamond", serif',
          }}
        >
          "
        </div>
        <p
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
            fontWeight: 300,
            color: 'rgba(17,26,16,0.65)',
            lineHeight: 1.9,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {legacy.message}
        </p>
        <div
          style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            borderTop: '1px solid rgba(201,168,76,0.12)',
          }}
        >
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(201,168,76,0.3), transparent)' }} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', letterSpacing: '0.22em', color: '#c9a84c', textTransform: 'uppercase' }}>
            {name} · VIRTUOSO
          </span>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, rgba(201,168,76,0.3), transparent)' }} />
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ marginTop: '4rem' }}
      >
        <p
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.1rem',
            color: 'rgba(17,26,16,0.36)',
            fontStyle: 'italic',
            marginBottom: '1.75rem',
            lineHeight: 1.6,
          }}
        >
          ¿Sientes el llamado de esta tierra?
        </p>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: 'linear-gradient(135deg,#c9a84c,#e8c96e)',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '0.72rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            border: 'none',
            borderRadius: 999,
            padding: '1rem 2.5rem',
            cursor: 'pointer',
          }}
        >
          Iniciar Conversación
        </motion.button>
      </motion.div>
    </div>
  )
}
