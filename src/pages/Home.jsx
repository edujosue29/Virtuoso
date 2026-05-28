import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import PropertyCard from '../components/home/PropertyCard'
import { PROPERTIES } from '../data/properties'

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: '#ffffff' }}>

      <Hero />

      {/* ── Properties section — dark forest green ─────────────────── */}
      <section style={{ background: '#173C1C', padding: '6rem 0 7rem' }}>

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
            fontSize: '0.6rem', letterSpacing: '0.32em',
            textTransform: 'uppercase', color: '#c9a84c',
          }}>
            Santuarios
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
          <span style={{ color: '#c9a84c' }}>Tierras</span>
          <span style={{ color: '#f5f0e8' }}> que buscan custodio</span>
        </motion.h2>

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

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <div style={{
        background: '#173C1C', padding: '3.5rem 0',
        textAlign: 'center',
        borderTop: '1px solid rgba(201,168,76,0.1)',
      }}>
        <div style={{ marginBottom: '1rem' }}>
          <img
            src="/images/logo-virtus.png"
            alt="Virtus Realty"
            style={{ height: 52, width: 'auto', filter: 'invert(1)', opacity: 0.2 }}
          />
        </div>
        <p style={{
          fontFamily: '"DM Sans", Inter, sans-serif',
          fontSize: '0.58rem', letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(245,240,232,0.2)',
        }}>
          VIRTUS REAL ESTATE · VIRTUOSO · {new Date().getFullYear()}
        </p>
      </div>
    </main>
  )
}
