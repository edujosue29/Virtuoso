import { motion } from 'framer-motion'

export default function AncestralWisdom({ property }) {
  const { ancestral } = property

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center" style={{ marginBottom: '4rem' }}>
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
          Sabiduría Ancestral
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
          {ancestral.title}
        </h2>
      </div>

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', marginBottom: '4.5rem', position: 'relative', padding: '0 3rem' }}
      >
        <div
          style={{
            position: 'absolute',
            top: -16,
            left: 16,
            fontSize: '6rem',
            lineHeight: 1,
            color: 'rgba(201,168,76,0.18)',
            fontFamily: '"Cormorant Garamond", serif',
          }}
        >
          "
        </div>
        <p
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
            fontWeight: 300,
            color: 'rgba(17,26,16,0.62)',
            lineHeight: 1.8,
          }}
        >
          {ancestral.description}
        </p>
      </motion.blockquote>

      {/* Architecture / Cultural elements */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem', marginBottom: '4rem' }}>
        {ancestral.architecture.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            style={{ overflow: 'hidden', border: '1px solid rgba(17,26,16,0.08)', borderRadius: 4 }}
          >
            <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.75) sepia(0.15)' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(17,26,16,0.55) 0%, transparent 65%)',
                }}
              />
            </div>
            <div style={{ padding: '1.75rem', background: '#ffffff' }}>
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.3rem',
                  fontWeight: 400,
                  color: '#111a10',
                  marginBottom: '0.6rem',
                  lineHeight: 1.2,
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: 'rgba(17,26,16,0.55)',
                  lineHeight: 1.75,
                }}
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          background: 'rgba(201,168,76,0.03)',
          border: '1px dashed rgba(201,168,76,0.2)',
          borderRadius: 16,
          padding: '2.5rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: '1.05rem',
            color: 'rgba(17,26,16,0.26)',
            lineHeight: 1.7,
          }}
        >
          Leyendas, rituales y conocimiento ecológico ancestral · Contenido adicional por integrar
        </p>
      </motion.div>
    </div>
  )
}
