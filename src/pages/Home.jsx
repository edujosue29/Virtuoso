import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import PropertyCard from '../components/home/PropertyCard'
import { PROPERTIES } from '../data/properties'

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: '#ffffff' }}>

      {/* Hero — full screen video */}
      <Hero />

      {/* ── Properties Section ────────────────────────────────────── */}
      <section
        className="relative px-6 pt-20 pb-32"
        style={{ maxWidth: 900, margin: '0 auto' }}
      >
        {/* Thin gold rule header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.35)' }} />
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#c9a84c',
            }}
          >
            Santuarios
          </span>
          <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.35)' }} />
        </motion.div>

        {/* Cards — stacked full-width */}
        <div className="flex flex-col" style={{ gap: '3rem' }}>
          {PROPERTIES.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <div
        className="py-12 text-center"
        style={{ background: '#ffffff', borderTop: '1px solid rgba(17,26,16,0.06)' }}
      >
        <div className="flex items-center justify-center gap-4 mb-3">
          <img
            src="/images/logo-virtus.png"
            alt="Virtus Realty"
            style={{ height: 56, width: 'auto', opacity: 0.3 }}
          />
        </div>
        <p
          className="text-xs"
          style={{ color: 'rgba(17,26,16,0.22)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}
        >
          VIRTUS REAL ESTATE · VIRTUOSO · {new Date().getFullYear()}
        </p>
      </div>
    </main>
  )
}
