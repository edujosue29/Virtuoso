import { motion } from 'framer-motion'
import { ENERGIES } from '../../data/properties'

export default function FilterBar({ active, onChange }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ overflowX: 'auto', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
    >
      <div className="flex items-center" style={{ gap: '2rem', whiteSpace: 'nowrap' }}>
        <Tab label="Todos" isActive={active === null} onClick={() => onChange(null)} />
        {ENERGIES.map((e) => (
          <Tab
            key={e.id}
            label={e.label}
            isActive={active === e.id}
            onClick={() => onChange(e.id)}
          />
        ))}
      </div>
    </div>
  )
}

function Tab({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative"
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0.4rem 0',
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.65rem',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: isActive ? '#111a10' : 'rgba(17,26,16,0.35)',
        fontWeight: isActive ? 500 : 400,
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = 'rgba(17,26,16,0.65)' }}
      onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'rgba(17,26,16,0.35)' }}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="tab-underline"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background: '#c9a84c',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
        />
      )}
    </button>
  )
}
