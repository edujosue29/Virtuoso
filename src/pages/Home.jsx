import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Hero from '../components/home/Hero'
import PropertyCard from '../components/home/PropertyCard'
import { PROPERTIES } from '../data/properties'

export default function Home() {
  const { t } = useTranslation()
  return (
    <main className="relative min-h-screen" style={{ background: '#ffffff' }}>

      <Hero />

      {/* ── Properties section — dark forest green ─────────────────── */}
      <section style={{ background: '#2d4a2b', padding: '6rem 0 7rem' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ flex: 1, maxWidth: 120, height: 1, background: 'rgba(201,168,76,0.3)' }} />
          <span style={{
            fontFamily: '"DM Sans", Inter, sans-serif',
            fontSize: '0.72rem', letterSpacing: '0.32em',
            textTransform: 'uppercase', color: '#c9a84c',
          }}>
            {t('home.section_label')}
          </span>
          <div style={{ flex: 1, maxWidth: 120, height: 1, background: 'rgba(201,168,76,0.3)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400, textAlign: 'center',
            marginBottom: '4rem', lineHeight: 1.2,
          }}
        >
          <span style={{ color: '#c9a84c' }}>{t('home.section_title_part1')}</span>
          <span style={{ color: '#f5f0e8' }}> {t('home.section_title_part2')}</span>
        </motion.h2>

        {/* Bridge paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          style={{
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', fontWeight: 300,
            color: 'rgba(245,240,232,0.5)', lineHeight: 1.85,
            textAlign: 'center', maxWidth: 580,
            margin: '0 auto 4rem',
          }}
        >
          {t('home.section_description')}
        </motion.p>

        {/* Cards */}
        <div style={{
          maxWidth: 1000, margin: '0 auto',
          padding: '0 2rem',
          display: 'flex', flexDirection: 'column', gap: '2.5rem',
        }}>
          {PROPERTIES.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>
      </section>

      {/* ── Footer: Minimal Luxury ────────────────────────────────────────── */}
      <footer style={{
        background: '#faf9f6',
        padding: '5rem 0 4rem',
        borderTop: '1px solid rgba(42,92,56,0.1)',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 2rem',
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}>
            <h3 style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: '#2a5c38',
              letterSpacing: '-0.01em',
              margin: '0 0 1rem 0',
            }}>
              VIRTUS REALTY CR
            </h3>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.1rem',
              fontWeight: 300,
              color: 'rgba(42,92,56,0.7)',
              margin: 0,
            }}>
              {t('home.footer_subtitle')}
            </p>
          </div>

          {/* Decorative line */}
          <div style={{
            width: '80px',
            height: '2px',
            background: 'linear-gradient(to right, transparent, #c9a84c, transparent)',
            margin: '0 auto 4rem',
          }} />

          {/* Content Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
            textAlign: 'center',
          }}>
            {/* Contacto */}
            <div>
              <h4 style={{
                fontFamily: '"DM Sans", Inter, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                fontWeight: 600,
                marginBottom: '1.5rem',
                margin: '0 0 1.5rem 0',
              }}>
                {t('home.contact_section')}
              </h4>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '0.95rem',
                color: '#2a5c38',
                lineHeight: 1.8,
              }}>
                <p style={{ margin: '0 0 0.75rem 0' }}>
                  {t('home.phone')}
                </p>
                <a href="mailto:info@virtusrealtycr.com" style={{
                  color: '#2a5c38',
                  textDecoration: 'none',
                  borderBottom: '1px solid #c9a84c',
                  transition: 'color 0.3s',
                }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a84c'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#2a5c38'}>
                  {t('home.email')}
                </a>
              </div>
            </div>

            {/* Síguenos */}
            <div>
              <h4 style={{
                fontFamily: '"DM Sans", Inter, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                fontWeight: 600,
                marginBottom: '1.5rem',
                margin: '0 0 1.5rem 0',
              }}>
                {t('home.follow_section')}
              </h4>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
              }}>
                <a href="https://www.facebook.com/VirtusRealtyCR" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '0.95rem',
                  color: '#2a5c38',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  cursor: 'pointer',
                }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a84c'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#2a5c38'}>
                  Facebook
                </a>
                <a href="https://instagram.com/virtusrealty.cr" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '0.95rem',
                  color: '#2a5c38',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  cursor: 'pointer',
                }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a84c'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#2a5c38'}>
                  Instagram
                </a>
                <a href="https://www.youtube.com/@VirtusRealtyCostaRica" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '0.95rem',
                  color: '#2a5c38',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  cursor: 'pointer',
                }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a84c'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#2a5c38'}>
                  YouTube
                </a>
              </div>
            </div>

            {/* Web */}
            <div>
              <h4 style={{
                fontFamily: '"DM Sans", Inter, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                fontWeight: 600,
                marginBottom: '1.5rem',
                margin: '0 0 1.5rem 0',
              }}>
                {t('home.visit_section')}
              </h4>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '0.95rem',
              }}>
                <a href="https://virtusrealtycr.com" target="_blank" rel="noopener noreferrer" style={{
                  color: '#2a5c38',
                  textDecoration: 'none',
                  borderBottom: '1px solid #c9a84c',
                  transition: 'color 0.3s',
                  cursor: 'pointer',
                }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a84c'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#2a5c38'}>
                  virtusrealtycr.com
                </a>
              </div>
            </div>
          </div>

          {/* Decorative line */}
          <div style={{
            width: '80px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, #c9a84c, transparent)',
            margin: '0 auto 3rem',
          }} />

          {/* Copyright */}
          <p style={{
            fontFamily: '"DM Sans", Inter, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(42,92,56,0.4)',
            textAlign: 'center',
            margin: 0,
          }}>
            {t('home.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
    </main>
  )
}
