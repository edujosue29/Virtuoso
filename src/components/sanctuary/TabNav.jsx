import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export const TABS = [
  { id: 'technical',   label: 'Ficha Técnica',      short: 'Técnica' },
  { id: 'flora',       label: 'Flora & Fauna',       short: 'Flora' },
  { id: 'memory',      label: 'Memoria',             short: 'Memoria' },
  { id: 'prosperity',  label: 'Prosperidad',         short: 'Prosperidad' },
  { id: 'ancestral',   label: 'Sabiduría Ancestral', short: 'Ancestral' },
  { id: 'pulse',       label: 'Pulso Comunidad',     short: 'Comunidad' },
  { id: 'index',       label: 'Índice Virtuoso',     short: 'Índice' },
  { id: 'legacy',      label: 'Legado',              short: 'Legado' },
  { id: 'gallery',     label: 'Galería',             short: 'Galería' },
]

export default function TabNav({ activeTab, onTabChange, navRef }) {
  const scrollRef = useRef(null)
  const activeRef = useRef(null)

  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [activeTab])

  return (
    <div
      ref={navRef}
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(49,87,44,0.97)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
        borderTop: 'none',
      }}
    >
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        {TABS.map((tab, index) => {
          const isActive = activeTab === tab.id
          return (
            <div key={tab.id} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <button
                ref={isActive ? activeRef : null}
                onClick={() => onTabChange(tab.id)}
                style={{
                  position: 'relative',
                  flexShrink: 0,
                  padding: '1.5rem 1.75rem',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.68rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: isActive ? '#f5f0e8' : 'rgba(245,240,232,0.35)',
                  fontWeight: isActive ? 500 : 400,
                  background: 'none',
                  border: 'none',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = 'rgba(245,240,232,0.75)' }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'rgba(245,240,232,0.35)' }}
              >
                <span style={{ display: 'inline' }}>{tab.short}</span>

                {isActive && (
                  <motion.div
                    layoutId="sanctuary-tab-underline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '1.75rem',
                      right: '1.75rem',
                      height: 1.5,
                      background: '#c9a84c',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>

              {index < TABS.length - 1 && (
                <span
                  style={{
                    color: 'rgba(245,240,232,0.12)',
                    fontSize: '0.45rem',
                    flexShrink: 0,
                    userSelect: 'none',
                  }}
                >
                  ●
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
