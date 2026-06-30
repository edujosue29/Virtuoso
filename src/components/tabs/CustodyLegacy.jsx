import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { getSanctuaryKeyFromProperty } from '../../utils/sanctuaryTranslations'

export default function CustodyLegacy({ property, finca, dark }) {
  const { t } = useTranslation()
  const { name, slug } = property
  // Use finca-specific legacy when available
  const legacyRaw = finca?.legacy ?? property.legacy

  // Get sanctuary translation key
  const sanctuaryKey = getSanctuaryKeyFromProperty(property)

  // Translate legacy data
  const legacy = legacyRaw ? {
    ...legacyRaw,
    title: t(`sections.${sanctuaryKey}.legacy.title`),
    message: t(`sections.${sanctuaryKey}.legacy.message`),
  } : legacyRaw

  const gold = '#c9a84c'
  const darkGreen = '#2a5c38'
  const cream = '#faf9f6'

  // Heading: split title
  const titleParts = (legacy?.title || '').split(' ')
  const titleFirst = titleParts[0]
  const titleRest = titleParts.slice(1).join(' ')

  return (
    <div>
      {/* ── Section Label ──────────────────────────────────────────────────── */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: '"DM Sans", Inter, sans-serif',
          fontSize: '0.72rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: gold,
          marginBottom: '2rem',
        }}
      >
        {t('custody_legacy.title')}
      </motion.p>

      {/* ── Main Legacy Card ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: `linear-gradient(135deg, rgba(42,92,56,0.08) 0%, rgba(201,168,76,0.04) 100%)`,
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '16px',
          padding: '3.5rem 4rem',
          marginBottom: '3rem',
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
            fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '0 0 2rem 0',
            color: cream,
          }}
        >
          <span style={{ color: gold, display: 'block' }}>{titleFirst}</span>
          {titleRest && <span style={{ display: 'block', fontWeight: 400 }}>{titleRest}</span>}
        </h2>

        {/* Main Message */}
        <p
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
            fontWeight: 300,
            lineHeight: 1.9,
            color: 'rgba(245,240,232,0.85)',
            margin: 0,
            maxWidth: '900px',
          }}
        >
          {legacy.message}
        </p>

        {/* Decorative divider */}
        <div
          style={{
            height: '1px',
            background: `linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)`,
            margin: '2.5rem 0',
          }}
        />

        {/* Property Name & Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}>
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: gold,
            }}
          />
          <span
            style={{
              fontFamily: '"DM Sans", Inter, sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.65)',
            }}
          >
            {name} · {t('common.portal')}
          </span>
        </div>
      </motion.div>

    </div>
  )
}
