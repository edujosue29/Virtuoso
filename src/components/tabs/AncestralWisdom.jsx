import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { getSanctuaryKeyFromProperty } from '../../utils/sanctuaryTranslations'

const ROMANS = ['I', 'II']

export default function AncestralWisdom({ property }) {
  const { t } = useTranslation()
  const { ancestral, name, slug } = property

  // Get sanctuary translation key
  const sanctuaryKey = getSanctuaryKeyFromProperty(property)

  const attributionKey = name.includes('Carpintera')
    ? 'ancestral_wisdom.memory_huetar'
    : 'ancestral_wisdom.memory_boruca'
  const attribution = t(attributionKey)

  // Translate ancestral data
  const ancestralData = t(`sections.${sanctuaryKey}.ancestral`, { returnObjects: true }) || {}
  const ancestralTranslated = {
    title: ancestralData.title || ancestral?.title,
    description: ancestralData.description || ancestral?.description,
    architecture: ancestralData.architecture || ancestral?.architecture || [],
  }

  // Split title: first word gold, rest dark
  const parts = (ancestralTranslated.title || '').split(' — ')
  const titleMain = parts[0] || ''
  const titleSub  = parts[1] || ''

  return (
    <div>

      {/* ── Top: heading left + description right (mockup layout) ──────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'flex-end',
        marginBottom: '4rem',
      }}>
        {/* Left — heading block */}
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
            {t('ancestral_wisdom.title')}
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
            <span style={{ color: '#c9a84c', display: 'block' }}>
              {titleMain}
            </span>
            {titleSub && (
              <span style={{ color: '#111a10', display: 'block', fontWeight: 400, fontSize: '0.6em' }}>
                {titleSub}
              </span>
            )}
          </motion.h2>
        </div>

        {/* Right — description */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ paddingBottom: '0.5rem' }}
        >
          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.15rem, 1.6vw, 1.35rem)',
            fontWeight: 300, color: 'rgba(17,26,16,0.85)',
            lineHeight: 1.9,
            textAlign: 'right',
          }}>
            {ancestralTranslated.description}
          </p>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            marginTop: '1.5rem',
          }}>
            <div style={{ width: 28, height: 1, background: 'rgba(201,168,76,0.4)' }} />
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.66rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(17,26,16,0.55)',
            }}>
              {attribution}
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── Architecture cards — image + text, 2 columns ───────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
      }}>
        {ancestralTranslated.architecture.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'grid',
              gridTemplateRows: item.image ? '260px auto' : 'auto',
              overflow: 'hidden',
              border: '1px solid rgba(17,26,16,0.15)',
            }}
          >
            {/* Image */}
            {item.image && (
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center 40%',
                    filter: 'brightness(0.78) saturate(0.85)',
                    display: 'block',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Roman numeral overlay */}
                <div style={{
                  position: 'absolute', top: '1rem', left: '1.25rem',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '0.75rem', letterSpacing: '0.15em',
                  color: 'rgba(245,240,232,0.6)',
                  textTransform: 'uppercase',
                }}>
                  {ROMANS[i]}
                </div>
              </div>
            )}

            {/* Text block */}
            <div style={{
              padding: '2rem 2rem 2.25rem',
              background: '#faf9f6',
              borderTop: '2px solid rgba(201,168,76,0.35)',
            }}>
              <h3 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(1.15rem, 2vw, 1.55rem)',
                fontWeight: 400, color: '#111a10',
                lineHeight: 1.2, marginBottom: '0.85rem',
              }}>
                {item.name}
              </h3>
              <p style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.1rem', fontWeight: 300,
                color: 'rgba(17,26,16,0.85)', lineHeight: 1.8,
                margin: 0,
              }}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
