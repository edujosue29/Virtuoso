import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { getDownloadUrl } from '../../utils/documentDownloads'
import { usePrivateDocuments } from '../../context/PrivateDocumentsContext'

const ICONS = {
  leaf: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  sun: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  ),
  book: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  tree: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12M12 12C12 7 8 4 4 5c4 0 8 3 8 7zM12 12C12 7 16 4 20 5c-4 0-8 3-8 7z"/>
      <path d="M12 12c0 5-3 8-7 9 4-1 7-4 7-9zM12 12c0 5 3 8 7 9-4-1-7-4-7-9z"/>
    </svg>
  ),
  globe: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  coin: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v2M12 16v2M9 9.5a3 3 0 0 1 3-1.5 3 3 0 0 1 0 6 3 3 0 0 0 0 6"/>
    </svg>
  ),
}

export default function VirtuosPotentialCarpintera({ property, finca, dark }) {
  const { t } = useTranslation()
  const { isUnlocked } = usePrivateDocuments()
  const potencial = finca?.potencial ?? property?.potencial ?? []
  const sanctuaryId = property.id === 'division-perez-zeledon' ? 'division_pz' : 'la_carpintera'
  const ddLink = getDownloadUrl('debida-diligencia', sanctuaryId)
  const fincaLabel = finca?.label ?? t('virtus_potential.finca_label')

  const cream  = dark ? '#faf9f6' : '#111a10'
  const muted  = dark ? 'rgba(245,240,232,0.55)' : 'rgba(17,26,16,0.52)'
  const border = dark ? 'rgba(255,255,255,0.08)' : 'rgba(17,26,16,0.07)'
  const cardBg = dark ? 'rgba(255,255,255,0.04)' : '#ffffff'

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
          color: '#c9a84c',
          marginBottom: '1.5rem',
          fontWeight: 600,
        }}
      >
        {t('virtus_potential.title')} · {fincaLabel}
      </motion.p>

      {/* ── Main Heading ────────────────────────────────────────────────────── */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
          fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
          fontWeight: 700,
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          margin: '0 0 4rem 0',
        }}
      >
        <span style={{ color: '#c9a84c', display: 'block' }}>{t('virtus_potential.subtitle').split(' ')[0]}</span>
        <span style={{ color: cream, display: 'block', fontWeight: 400 }}>{t('virtus_potential.subtitle').substring(t('virtus_potential.subtitle').indexOf(' ') + 1)}</span>
      </motion.h2>

      {/* ── Editorial Items — Alternating Layout ────────────────────────────── */}
      <div style={{ marginBottom: '4rem' }}>
        {potencial.map((item, i) => {
          const isEven = i % 2 === 0
          const itemNumber = String(i + 1).padStart(2, '0')

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: isEven ? '120px 1fr' : '1fr 120px',
                gap: '3rem',
                alignItems: 'flex-start',
                marginBottom: i < potencial.length - 1 ? '3.5rem' : 0,
                minHeight: 'auto',
                maxWidth: '100%',
              }}
            >
              {/* Left side — number (for even) / content (for odd) */}
              {isEven ? (
                <div style={{ paddingTop: '0.5rem' }}>
                  <div
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: '8rem',
                      fontWeight: 700,
                      color: 'rgba(201,168,76,0.12)',
                      lineHeight: 1,
                    }}
                  >
                    {itemNumber}
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.2rem',
                  }}
                >
                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: cream,
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.1rem',
                      fontWeight: 300,
                      color: dark ? '#e8e8e8' : '#1a1a1a',
                      lineHeight: 1.75,
                      margin: 0,
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal',
                      maxWidth: '100%',
                      width: '100%',
                      display: 'block',
                      overflow: 'visible',
                      textOverflow: 'clip',
                      minHeight: 'auto',
                    }}
                  >
                    {item.desc}
                  </p>

                  {/* Decorative line */}
                  <div
                    style={{
                      marginTop: '0.5rem',
                      width: '50px',
                      height: '1.5px',
                      background: `linear-gradient(to right, #c9a84c, transparent)`,
                      opacity: 0.5,
                    }}
                  />
                </div>
              )}

              {/* Right side — content (for even) / number (for odd) */}
              {isEven ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.2rem',
                  }}
                >
                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: cream,
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.1rem',
                      fontWeight: 300,
                      color: dark ? '#e8e8e8' : '#1a1a1a',
                      lineHeight: 1.75,
                      margin: 0,
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal',
                      maxWidth: '100%',
                      width: '100%',
                      display: 'block',
                      overflow: 'visible',
                      textOverflow: 'clip',
                      minHeight: 'auto',
                    }}
                  >
                    {item.desc}
                  </p>

                  {/* Decorative line */}
                  <div
                    style={{
                      marginTop: '0.5rem',
                      width: '50px',
                      height: '1.5px',
                      background: `linear-gradient(to right, #c9a84c, transparent)`,
                      opacity: 0.5,
                    }}
                  />
                </div>
              ) : (
                <div style={{ paddingTop: '0.5rem', textAlign: 'right' }}>
                  <div
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: '8rem',
                      fontWeight: 700,
                      color: 'rgba(201,168,76,0.12)',
                      lineHeight: 1,
                    }}
                  >
                    {itemNumber}
                  </div>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* ── Due Diligence CTA ────────────────────────────────────────────── */}
      {ddLink && isUnlocked && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '1.5rem',
            padding: '2rem 2.5rem',
            border: '1px solid rgba(201,168,76,0.2)',
            background: dark ? 'rgba(201,168,76,0.05)' : 'rgba(201,168,76,0.04)',
          }}
        >
          <div>
            <p style={{
              fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.72rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#c9a84c', fontWeight: 700, marginBottom: '0.4rem',
            }}>
              {t('common.download_due_diligence')}
            </p>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
              fontSize: '1rem', color: muted, lineHeight: 1.6,
            }}>
              {t('virtus_potential.potential_description')} {fincaLabel} — Licda. Clarita Solano Villalobos, abogada y notaria pública.
            </p>
          </div>
          <button
            onClick={() => window.open(ddLink, '_blank')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
              padding: '0.85rem 2rem',
              background: 'linear-gradient(135deg, #c9a84c, #e8c96e)',
              color: '#2d4a2b', borderRadius: 999, textDecoration: 'none',
              fontFamily: '"DM Sans", Inter, sans-serif',
              fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              flexShrink: 0,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 12L3 7h3.5V2h3v5H13L8 12zM2 14h12v1.5H2V14z" fill="currentColor"/>
            </svg>
            {t('virtus_potential.download_due_diligence', { label: fincaLabel })}
          </button>
        </motion.div>
      )}
    </div>
  )
}
