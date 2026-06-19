import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSanctuaryText } from '../../utils/sanctuaryTranslations'
import { usePrivateDocuments } from '../../context/PrivateDocumentsContext'
import { openFile } from '../../utils/documentDownloads'
import MapModal from './MapModal'

function deriveZoning(property) {
  const z = (property.technical?.zoning || '').toLowerCase()
  if (z.includes('sinac') || z.includes('zpcc')) return 'SINAC · ZPCC'
  if (z.includes('unesco')) return 'UNESCO'
  if (z.includes('ramsar')) return 'Ramsar'
  return 'Zona Protegida'
}

export default function PropertyCard({ property, index }) {
  const { t } = useTranslation()
  const sanctuary = useSanctuaryText(property)
  const navigate = useNavigate()
  const { isUnlocked } = usePrivateDocuments()
  const [showAnexos, setShowAnexos] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const anexosRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (anexosRef.current && !anexosRef.current.contains(event.target)) {
        setShowAnexos(false)
      }
    }

    if (showAnexos) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showAnexos])

  const handleDownload = (e) => {
    e.stopPropagation()
    const sanctuaryId = property.id === 'division-perez-zeledon' ? 'division_pz' : 'la_carpintera'
    openFile('technical-sheet', sanctuaryId)
  }

  // Combine anexos + DD documents
  const getCombinedDocuments = () => {
    const docs = [...(property.anexos || [])]

    // Add DD from fincas (La Carpintera)
    if (property.fincas) {
      property.fincas.forEach((finca, idx) => {
        if (finca.dueDiligence) {
          docs.push({
            name: `Due Diligence Finca ${idx + 1}`,
            file: finca.dueDiligence
          })
        }
      })
    }

    // Add root-level DD (División PZ)
    if (property.dueDiligence && property.id === 'division-perez-zeledon') {
      docs.push({
        name: t('property_card.due_diligence'),
        file: property.dueDiligence
      })
    }

    return docs
  }

  const combinedDocs = getCombinedDocuments()

  const area = property.technical?.area?.split('(')[0]?.split(',')[0]?.trim() ?? ''
  const elevation = property.technical?.elevation?.split('·')[0]?.trim() ?? ''
  const certification = deriveZoning(property)

  // Override taglines for homepage display (from translations)
  const getDisplayTagline = () => {
    if (property.id === 'division-perez-zeledon') {
      return t('home.property_cards.division_pz.tagline')
    }
    if (property.id === 'la-carpintera') {
      return t('home.property_cards.la_carpintera.tagline')
    }
    return property.tagline
  }

  const displayTagline = getDisplayTagline()

  // Split title: first word gold, rest dark
  const nameParts = property.name.split(' ')
  const nameFirst = nameParts[0]
  const nameRest = nameParts.slice(1).join(' ')

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => navigate(`/sanctuary/${property.slug}`)}
      style={{
        borderRadius: 24,
        overflow: 'hidden',
        background: '#ffffff',
        cursor: 'pointer',
        boxShadow: '0 4px 32px rgba(17,26,16,0.09), 0 1px 4px rgba(17,26,16,0.06)',
        display: 'grid',
        gridTemplateColumns: index % 2 === 0 ? '52% 48%' : '48% 52%',
      }}
    >
      {/* ── Image panel ───────────────────────────────────────────────── */}
      {index % 2 === 0 && <ImagePanel property={property} onMapClick={() => setShowMap(true)} />}

      {/* ── Content panel ─────────────────────────────────────────────── */}
      <div style={{
        padding: 'clamp(2rem, 4vw, 3.5rem)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        background: index % 2 === 1 ? '#ffffff' : '#ffffff',
        order: index % 2 === 1 ? -1 : 0,
      }}>
        <div>
          {/* Certification badge */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.3rem 0.85rem',
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: 999,
            fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.72rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#c9a84c', marginBottom: '1.5rem',
          }}>
            <span style={{
              display: 'inline-block', width: 6, height: 6,
              borderRadius: '50%', background: '#c9a84c',
            }} />
            {certification}
          </span>

          {/* Sanctuary name — small gold label */}
          <p style={{
            fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.72rem',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'rgba(17,26,16,0.38)', marginBottom: '0.6rem',
          }}>
            {property.sanctuaryName?.split('—')[0]?.trim()}
          </p>

          {/* Two-tone title */}
          <h2 style={{
            fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 500, lineHeight: 1.05,
            marginBottom: '1rem', letterSpacing: '-0.02em',
          }}>
            <span style={{ color: '#c9a84c' }}>{nameFirst}</span>
            {nameRest && <span style={{ color: '#111a10' }}> {nameRest}</span>}
          </h2>

          {/* Tagline */}
          <p style={{
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: '1.05rem', fontWeight: 300,
            color: 'rgba(17,26,16,0.45)', lineHeight: 1.6,
            marginBottom: '1.25rem',
          }}>
            {displayTagline}
          </p>

          {/* Energy tags */}
          {property.energy?.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
              {property.energy.map(tag => (
                <span key={tag} style={{
                  fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.65rem',
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'rgba(17,26,16,0.4)',
                  padding: '0.2rem 0.65rem',
                  border: '1px solid rgba(17,26,16,0.1)',
                  borderRadius: 999,
                }}>
                  {t(`categories.${tag}`)}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p style={{
            fontFamily: '"DM Sans", Inter, sans-serif',
            fontSize: '0.82rem', fontWeight: 300,
            color: 'rgba(17,26,16,0.5)', lineHeight: 1.9,
            display: '-webkit-box',
            WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {sanctuary.description}
          </p>
        </div>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '0.75rem', flexWrap: 'wrap',
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(17,26,16,0.07)',
        }}>
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: '"DM Sans", Inter, sans-serif',
              fontSize: '0.72rem', letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(17,26,16,0.45)',
              background: 'transparent',
              border: '1px solid rgba(17,26,16,0.15)',
              borderRadius: 999,
              padding: '0.65rem 1.25rem',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 6,
            }}
          >
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
              <path d="M7 10L3 6h2.5V1h3v5H11L7 10zM2 12h10v1.5H2V12z" fill="currentColor"/>
            </svg>
            {t('property_card.technical_sheet')}
          </motion.button>

          {/* Anexos + DD dropdown */}
          {combinedDocs?.length > 0 && isUnlocked && (
            <div ref={anexosRef} style={{ position: 'relative' }}>
              <motion.button
                onClick={e => { e.stopPropagation(); setShowAnexos(!showAnexos) }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: '"DM Sans", Inter, sans-serif',
                  fontSize: '0.72rem', letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,26,16,0.45)',
                  background: 'transparent',
                  border: '1px solid rgba(17,26,16,0.15)',
                  borderRadius: 999,
                  padding: '0.65rem 1.25rem',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                </svg>
                {t('property_card.attachments')}
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                  <path d={showAnexos ? 'M2 7l3-3 3 3' : 'M2 3l3 3 3-3'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </motion.button>

              {showAnexos && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  onClick={e => e.stopPropagation()}
                  style={{
                    position: 'absolute', bottom: 'calc(100% + 8px)', left: 0,
                    background: '#ffffff',
                    border: '1px solid rgba(17,26,16,0.1)',
                    borderRadius: 10,
                    boxShadow: '0 8px 32px rgba(17,26,16,0.12)',
                    minWidth: 240, zIndex: 50, overflow: 'hidden',
                  }}
                >
                  {combinedDocs.map((doc, i) => (
                    <button
                      key={i}
                      onClick={e => { e.stopPropagation(); window.open(doc.file, '_blank') }}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        gap: '1rem', padding: '0.85rem 1.1rem',
                        textDecoration: 'none',
                        borderBottom: i < combinedDocs.length - 1 ? '1px solid rgba(17,26,16,0.06)' : 'none',
                        transition: 'background 0.15s',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        width: '100%',
                        textAlign: 'left',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(17,26,16,0.03)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <span style={{
                        fontFamily: '"DM Sans", Inter, sans-serif',
                        fontSize: '0.72rem', color: '#111a10', lineHeight: 1.3,
                      }}>
                        {doc.name}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M7 10L3 6h2.5V1h3v5H11L7 10zM2 12h10v1.5H2V12z" fill="#c9a84c"/>
                      </svg>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          )}

          <motion.button
            onClick={(e) => { e.stopPropagation(); navigate(`/sanctuary/${property.slug}`) }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: '"DM Sans", Inter, sans-serif',
              fontSize: '0.72rem', letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#ffffff',
              background: 'linear-gradient(135deg, #2d4a2b, #3a6038)',
              border: 'none', borderRadius: 999,
              padding: '0.65rem 1.5rem',
              cursor: 'pointer', fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 6,
            }}
          >
            {t('property_card.explore')}
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
      </div>

      {/* ── Image panel (right side for odd cards) ────────────────────── */}
      {index % 2 === 1 && <ImagePanel property={property} onMapClick={() => setShowMap(true)} />}

      {/* Map Modal */}
      <AnimatePresence>
        {showMap && <MapModal property={property} onClose={() => setShowMap(false)} />}
      </AnimatePresence>
    </motion.article>
  )
}

function ImagePanel({ property, onMapClick }) {
  const { t } = useTranslation()
  return (
    <div style={{
      position: 'relative', overflow: 'hidden', minHeight: 380,
    }}>
      <motion.img
        src={property.image}
        alt={property.name}
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          filter: 'brightness(0.82) saturate(0.9)',
        }}
      />
      {/* Gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(5,13,5,0.05) 0%, rgba(5,13,5,0.55) 100%)',
      }} />
      {/* Location badges */}
      <div style={{
        position: 'absolute', bottom: '1.5rem', left: '1.5rem',
        display: 'flex', gap: '0.6rem', flexWrap: 'wrap',
        alignItems: 'flex-start',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          padding: '0.35rem 0.85rem',
          background: 'rgba(45,74,43,0.72)',
          backdropFilter: 'blur(8px)',
          borderRadius: 999,
          border: '1px solid rgba(201,168,76,0.2)',
        }}>
          <svg width="7" height="9" viewBox="0 0 8 10" fill="none">
            <path d="M4 0C1.79 0 0 1.79 0 4c0 3 4 6 4 6s4-3 4-6c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 4 2.5 1.5 1.5 0 0 1 4 5.5z" fill="#c9a84c"/>
          </svg>
          <span style={{
            fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.72rem',
            color: 'rgba(245,240,232,0.85)', letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            {property.location.split(',')[0]}
          </span>
        </div>

        {/* Ver Mapa button */}
        <motion.button
          onClick={(e) => { e.stopPropagation(); onMapClick() }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.35rem 0.85rem',
            background: 'rgba(201,168,76,0.85)',
            backdropFilter: 'blur(8px)',
            borderRadius: 999,
            border: 'none',
            cursor: 'pointer',
            fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.72rem',
            color: '#111a10', letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3" fill="currentColor"/>
          </svg>
          {t('common.viewMap')}
        </motion.button>
      </div>
    </div>
  )
}
