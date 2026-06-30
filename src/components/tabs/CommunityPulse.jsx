import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { getSanctuaryKeyFromProperty } from '../../utils/sanctuaryTranslations'

function getBackgroundImage(property) {
  return property.sectionImages?.pulse || '/images/nature/bosquedrone.jpg'
}

// Activity name mapping: Spanish and English names to i18n keys
const ACTIVITY_TRANSLATION_MAP = {
  // Spanish names - La Carpintera
  'Observación de Aves': 'community_pulse.activity_bird_watching',
  'Avistamiento de Quetzales': 'community_pulse.activity_quetzal_sighting',
  'Senderismo de Bosque': 'community_pulse.activity_forest_hiking',
  'Senderismo de Montaña': 'community_pulse.activity_mountain_hiking',
  'Baño en Ríos y Pozas': 'community_pulse.activity_river_swimming',
  'Agroturismo Orgánico': 'community_pulse.activity_agro_tourism',
  'Meditación en Naturaleza': 'community_pulse.activity_nature_meditation',
  'Fotografía de Naturaleza': 'community_pulse.activity_nature_photography',
  'Fotografía de Neblina': 'community_pulse.activity_mist_photography',
  'Yoga al Amanecer': 'community_pulse.activity_sunrise_yoga',
  'Tour de Flora Endémica': 'community_pulse.activity_endemic_flora_tour',
  'Trabajo Remoto en Altura': 'community_pulse.activity_remote_work',
  // Spanish names - División PZ
  'Observación de Quetzales': 'community_pulse.activity_quetzal_sighting',
  'Investigación Científica': 'community_pulse.activity_nature_meditation',
  'Turismo Regenerativo': 'community_pulse.activity_agro_tourism',
  'Educación Ambiental': 'community_pulse.activity_endemic_flora_tour',
  'Investigación Hidrológica': 'community_pulse.activity_river_swimming',
  // Spanish names - Star Mountain
  'Tours guiados en Cuadraciclo': 'community_pulse.activity_atv_tours',
  'Canopy Tour (Tirolesa)': 'community_pulse.activity_canopy_tour',
  'Excursión de Snorkeling a Isla Tortuga': 'community_pulse.activity_snorkeling',
  'Pesca deportiva y artesanal': 'community_pulse.activity_sport_fishing',
  'Clases de Yoga y Retiros de Bienestar': 'community_pulse.activity_yoga_wellness',
  'Visita a las Cataratas de Montezuma': 'community_pulse.activity_montezuma_waterfall',
  'Cabalgatas al atardecer en la playa': 'community_pulse.activity_horseback_rides',
  // English names (División PZ and La Carpintera)
  'Quetzal Observation': 'community_pulse.activity_quetzal_sighting',
  'Quetzal Spotting': 'community_pulse.activity_quetzal_sighting',
  'Mountain Hiking': 'community_pulse.activity_mountain_hiking',
  'Scientific Research': 'community_pulse.activity_nature_meditation',
  'Regenerative Tourism': 'community_pulse.activity_agro_tourism',
  'Environmental Education': 'community_pulse.activity_endemic_flora_tour',
  'Hydrological Research': 'community_pulse.activity_river_swimming',
  'Mist Photography': 'community_pulse.activity_mist_photography',
  'Sunrise Yoga': 'community_pulse.activity_sunrise_yoga',
  'Endemic Flora Tour': 'community_pulse.activity_endemic_flora_tour',
  'Remote Work at Altitude': 'community_pulse.activity_remote_work',
  // English names - Star Mountain
  'Guided ATV Tours': 'community_pulse.activity_atv_tours',
  'Canopy Tour (Zip-line)': 'community_pulse.activity_canopy_tour',
  'Snorkeling Expedition to Tortuga Island': 'community_pulse.activity_snorkeling',
  'Sport & Traditional Fishing': 'community_pulse.activity_sport_fishing',
  'Yoga Classes & Wellness Retreats': 'community_pulse.activity_yoga_wellness',
  'Montezuma Waterfall Visit': 'community_pulse.activity_montezuma_waterfall',
  'Sunset Beach Horseback Rides': 'community_pulse.activity_horseback_rides',
}

// SVG icons for activities — no emojis
const ACTIVITY_ICONS = {
  'community_pulse.activity_bird_watching':     <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>,
  'community_pulse.activity_quetzal_sighting': <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>,
  'community_pulse.activity_forest_hiking':    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20h18M5 20L9 10l4 6 3-4 4 8"/></svg>,
  'community_pulse.activity_mountain_hiking':   <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20h18M5 20L9 10l4 6 3-4 4 8"/></svg>,
  'community_pulse.activity_river_swimming':    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 7c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></svg>,
  'community_pulse.activity_agro_tourism':    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12M12 12C12 7 8 4 4 5c4 0 8 3 8 7zM12 12C12 7 16 4 20 5c-4 0-8 3-8 7z"/></svg>,
  'community_pulse.activity_nature_meditation':<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/></svg>,
  'community_pulse.activity_nature_photography': <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  'community_pulse.activity_mist_photography':   <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  'community_pulse.activity_sunrise_yoga':        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v5l3 3M9 20l3-5 3 5M6 12h3M15 12h3"/></svg>,
  'community_pulse.activity_endemic_flora_tour':  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  'community_pulse.activity_remote_work': <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
}
const DEFAULT_ICON = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>

export default function CommunityPulse({ property, dark }) {
  const { t } = useTranslation()
  const { communityPulse, name, slug } = property

  // Get sanctuary translation key
  const sanctuaryKey = getSanctuaryKeyFromProperty(property)

  // Get translated lifestyle and activities
  const acts = (t(`sections.${sanctuaryKey}.community_pulse.activities`, { returnObjects: true }) || [])
  const highlights = (t(`sections.${sanctuaryKey}.community_pulse.lifestyle`, { returnObjects: true }) || [])

  const cream = '#faf9f6'
  const muted = 'rgba(245,240,232,0.52)'
  const backgroundImage = getBackgroundImage(property)

  return (
    <div>
      {/* ── Full background section with drone image ────────────────────── */}
      <div style={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        marginBottom: '4rem',
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.6)',
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1400px', margin: '0 auto', padding: '0 2rem',
        }}>
          {/* Top: heading left + pull phrase right */}
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
                {t('community_pulse.title')}
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
                  color: '#c9a84c',
                }}
              >
                {t('community_pulse.title')}
              </motion.h2>
            </div>

          </div>

          {/* Lifestyle mosaic — 7 phrases in asymmetric grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto auto',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}>
            {highlights.slice(1).map((phrase, i) => {
              let colSpan = 1
              if (i === 0) colSpan = 2
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{
                    gridColumn: `span ${colSpan}`,
                    padding: '2rem',
                    background: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    borderLeft: '4px solid #c9a84c',
                  }}
                >
                  <p style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: colSpan === 2 ? 'clamp(1.25rem, 1.7vw, 1.45rem)' : 'clamp(1rem, 1.4vw, 1.25rem)',
                    fontWeight: 300, color: cream,
                    lineHeight: 1.8, margin: 0,
                  }}>
                    {phrase}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Activities section label */}
          <p style={{
            fontFamily: '"DM Sans", Inter, sans-serif', fontSize: '0.72rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#c9a84c', marginBottom: '1.5rem', fontWeight: 600,
          }}>
            {t('community_pulse.activities')}
          </p>

          {/* Activities grid — 3 columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
          }}>
            {acts.map((act, i) => {
              const translationKey = ACTIVITY_TRANSLATION_MAP[act.name]
              const icon = ACTIVITY_ICONS[translationKey] || DEFAULT_ICON
              const displayName = act.name
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  style={{
                    padding: '1.25rem',
                    background: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 4,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.4)'
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.25)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div style={{ marginBottom: '0.6rem', color: '#c9a84c' }}>
                    {icon}
                  </div>

                  <h3 style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '0.95rem', fontWeight: 400,
                    color: cream, lineHeight: 1.2,
                    margin: '0 0 0.5rem',
                  }}>
                    {displayName}
                  </h3>

                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Bottom CTA quote ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: 'center',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          borderTop: '1px solid rgba(201,168,76,0.2)',
        }}
      >
        <p style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.25rem', fontWeight: 300,
          color: muted, lineHeight: 1.7,
          maxWidth: 620, margin: '0 auto',
        }}>
          "{t('community_pulse.lifestyle')}"
        </p>
      </motion.div>

    </div>
  )
}
