import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const TABS = [
  { id: 'technical',  label: 'Ficha Técnica',      short: 'Técnica'    },
  { id: 'flora',      label: 'Flora & Fauna',       short: 'Flora'      },
  { id: 'memory',     label: 'Memoria',             short: 'Memoria'    },
  { id: 'prosperity', label: 'Prosperidad',         short: 'Prosperidad'},
  { id: 'ancestral',  label: 'Sabiduría Ancestral', short: 'Ancestral'  },
  { id: 'pulse',      label: 'Pulso Comunidad',     short: 'Comunidad'  },
  { id: 'index',      label: 'Índice Virtuoso',     short: 'Índice'     },
  { id: 'legacy',     label: 'Legado',              short: 'Legado'     },
  { id: 'potencial',  label: 'Potencial Virtus',    short: 'Potencial'  },
  { id: 'gallery',    label: 'Galería',             short: 'Galería'    },
]

export default function TabNav({ activeTab, onTabChange, navRef, fincas, selectedFinca, onFincaChange, showPortal }) {
  const scrollRef = useRef(null)
  const activeRef = useRef(null)

  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [activeTab])

  const hasFincas = fincas && fincas.length > 1

  return (
    <div
      ref={navRef}
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(45,74,43,0.97)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center',
        maxWidth: 1100, margin: '0 auto', padding: '0 2rem',
      }}>
        {/* ── Portal button (appears when hero scrolls out) ─────────── */}
        <AnimatePresence>
          {showPortal && (
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.35rem',
                color: 'rgba(245,240,232,0.55)',
                fontFamily: 'Inter, sans-serif', fontSize: '0.65rem',
                letterSpacing: '0.16em', textTransform: 'uppercase',
                textDecoration: 'none', flexShrink: 0,
                marginRight: '0.75rem', padding: '0.25rem 0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.9)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.55)')}
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Portal
            </motion.a>
          )}
        </AnimatePresence>

        {/* Divider after Portal button */}
        <AnimatePresence>
          {showPortal && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ width: 1, height: 18, background: 'rgba(245,240,232,0.12)', flexShrink: 0, marginRight: '0.5rem' }}
            />
          )}
        </AnimatePresence>

        {/* ── Finca switcher (left) ─────────────────────────────────── */}
        {hasFincas && (
          <>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '2px',
              padding: '0.5rem 0', flexShrink: 0, marginRight: '0.5rem',
            }}>
              {fincas.map((f, i) => {
                const isActive = selectedFinca === i
                return (
                  <button
                    key={f.id}
                    onClick={() => onFincaChange(i)}
                    style={{
                      fontFamily: '"DM Sans", Inter, sans-serif',
                      fontSize: '0.62rem', letterSpacing: '0.12em',
                      fontWeight: isActive ? 700 : 400,
                      textTransform: 'uppercase',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 999, cursor: 'pointer',
                      background: isActive ? '#c9a84c' : 'transparent',
                      color: isActive ? '#2d4a2b' : 'rgba(245,240,232,0.45)',
                      border: isActive ? 'none' : '1px solid rgba(245,240,232,0.15)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {f.label}
                  </button>
                )
              })}
            </div>

            {/* Vertical divider */}
            <div style={{
              width: 1, height: 20,
              background: 'rgba(245,240,232,0.15)',
              flexShrink: 0, marginRight: '0.5rem',
            }} />
          </>
        )}

        {/* ── Section tabs ──────────────────────────────────────────── */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex', alignItems: 'center',
            overflowX: 'auto', scrollbarWidth: 'none', flex: 1,
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
                    position: 'relative', flexShrink: 0,
                    padding: '1.5rem 1.75rem',
                    fontFamily: 'Inter, sans-serif', fontSize: '0.72rem',
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: isActive ? '#f5f0e8' : 'rgba(245,240,232,0.35)',
                    fontWeight: isActive ? 500 : 400,
                    background: 'none', border: 'none',
                    whiteSpace: 'nowrap', cursor: 'pointer',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'rgba(245,240,232,0.75)' }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(245,240,232,0.35)' }}
                >
                  <span>{tab.short}</span>
                  {isActive && (
                    <motion.div
                      layoutId="sanctuary-tab-underline"
                      style={{
                        position: 'absolute', bottom: 0,
                        left: '1.75rem', right: '1.75rem',
                        height: 1.5, background: '#c9a84c',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>

                {index < TABS.length - 1 && (
                  <span style={{
                    color: 'rgba(245,240,232,0.12)', fontSize: '0.45rem',
                    flexShrink: 0, userSelect: 'none',
                  }}>
                    ●
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
