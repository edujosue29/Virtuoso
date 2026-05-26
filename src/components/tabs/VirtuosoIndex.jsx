import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function polar(angleDeg, radius, cx = 0, cy = 0) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) }
}

function polygonPoints(values, maxRadius, cx, cy, angles) {
  return angles
    .map((a, i) => {
      const r = (values[i] / 100) * maxRadius
      const p = polar(a, r, cx, cy)
      return `${p.x},${p.y}`
    })
    .join(' ')
}

const PILLARS = [
  { key: 'amor',        label: 'Amor',        angle: 0,   emoji: '❤️' },
  { key: 'salud',       label: 'Salud',        angle: 90,  emoji: '🌿' },
  { key: 'prosperidad', label: 'Prosperidad',  angle: 180, emoji: '✦'  },
  { key: 'sabiduria',   label: 'Sabiduría',    angle: 270, emoji: '🦋' },
]
const CX = 160
const CY = 160
const MAX_R = 110
const GRID_STEPS = [25, 50, 75, 100]

export default function VirtuosoIndex({ property }) {
  const { virtuosoIndex } = property
  const [hovered, setHovered] = useState(null)

  const values = PILLARS.map((p) => virtuosoIndex[p.key] ?? 0)
  const angles  = PILLARS.map((p) => p.angle)

  const activeDesc = hovered ? virtuosoIndex.descriptions[hovered] : null
  const activePillar = hovered ? PILLARS.find((p) => p.key === hovered) : null

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.62rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: '1rem',
          }}
        >
          Índice de Alineación
        </p>
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 300,
            color: '#111a10',
            lineHeight: 1.1,
            marginBottom: '0.8rem',
          }}
        >
          Índice Virtuoso
        </h2>
        <p
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: '1.05rem',
            color: 'rgba(17,26,16,0.38)',
            lineHeight: 1.6,
          }}
        >
          Haz hover sobre cada pilar para expandir su descripción.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center" style={{ gap: '4rem' }}>
        {/* SVG Radar */}
        <div className="relative flex-shrink-0" style={{ width: 340, height: 340 }}>
          <svg width="340" height="340" viewBox="0 0 320 320" fill="none">
            {GRID_STEPS.map((step) => (
              <circle key={step} cx={CX} cy={CY} r={(step / 100) * MAX_R}
                stroke="rgba(201,168,76,0.15)" strokeWidth="1" fill="none" />
            ))}

            {GRID_STEPS.map((step) => (
              <text key={`lbl-${step}`} x={CX + 4} y={CY - (step / 100) * MAX_R + 4}
                fill="rgba(201,168,76,0.35)" fontSize="7" fontFamily="Inter, sans-serif">
                {step}
              </text>
            ))}

            {PILLARS.map((p) => {
              const end = polar(p.angle, MAX_R, CX, CY)
              const isHov = hovered === p.key
              return (
                <motion.line key={p.key} x1={CX} y1={CY} x2={end.x} y2={end.y}
                  stroke={isHov ? '#c9a84c' : 'rgba(201,168,76,0.25)'}
                  strokeWidth={isHov ? 1.5 : 1}
                  animate={{ opacity: isHov ? 1 : 0.6 }} />
              )
            })}

            <motion.polygon
              points={polygonPoints(values, MAX_R, CX, CY, angles)}
              fill="rgba(201,168,76,0.12)"
              stroke="#c9a84c"
              strokeWidth="1.5"
              strokeLinejoin="round"
              animate={{ fill: hovered ? 'rgba(201,168,76,0.2)' : 'rgba(201,168,76,0.12)' }}
              transition={{ duration: 0.3 }}
            />

            {PILLARS.map((p, i) => {
              const val = values[i]
              const dot = polar(p.angle, (val / 100) * MAX_R, CX, CY)
              const labelPt = polar(p.angle, MAX_R + 28, CX, CY)
              const isHov = hovered === p.key
              return (
                <g key={p.key}>
                  <AnimatePresence>
                    {isHov && (
                      <motion.circle cx={dot.x} cy={dot.y} r={10}
                        fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.4)" strokeWidth={1}
                        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.2 }} />
                    )}
                  </AnimatePresence>

                  <motion.circle cx={dot.x} cy={dot.y} r={isHov ? 5 : 3.5}
                    fill={isHov ? '#e8c96e' : '#c9a84c'}
                    animate={{ r: isHov ? 5 : 3.5 }} transition={{ duration: 0.2 }} />

                  <g
                    onMouseEnter={() => setHovered(p.key)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setHovered(hovered === p.key ? null : p.key)}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle cx={labelPt.x} cy={labelPt.y} r={20} fill="transparent" />
                    <motion.text x={labelPt.x} y={labelPt.y - 6} textAnchor="middle"
                      fill={isHov ? '#c9a84c' : '#111a10'}
                      fontSize={isHov ? 13 : 11}
                      fontFamily='"Cormorant Garamond", serif'
                      fontWeight={isHov ? '500' : '300'}
                      animate={{ fontSize: isHov ? 13 : 11, fill: isHov ? '#c9a84c' : '#111a10' }}
                      transition={{ duration: 0.2 }}>
                      {p.label}
                    </motion.text>
                    <text x={labelPt.x} y={labelPt.y + 9} textAnchor="middle"
                      fill={isHov ? 'rgba(201,168,76,0.8)' : 'rgba(201,168,76,0.5)'}
                      fontSize="9" fontFamily="Inter, sans-serif">
                      {val}
                    </text>
                  </g>
                </g>
              )
            })}

            <text x={CX} y={CY + 4} textAnchor="middle"
              fill="rgba(201,168,76,0.35)" fontSize="8"
              fontFamily="Inter, sans-serif" letterSpacing="1">
              VIRTUOSO
            </text>
          </svg>
        </div>

        {/* Right panel */}
        <div className="flex-1 w-full">
          <AnimatePresence mode="wait">
            {hovered ? (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'rgba(201,168,76,0.05)',
                  border: '1px solid rgba(201,168,76,0.18)',
                  borderRadius: 16,
                  padding: '1.75rem',
                  marginBottom: '2rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{activePillar?.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '0.2rem' }}>
                      Pilar
                    </p>
                    <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', fontWeight: 400, color: '#111a10', lineHeight: 1.1 }}>
                      {activePillar?.label}
                    </h3>
                  </div>
                  <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.8rem', fontWeight: 300, color: '#c9a84c', lineHeight: 1 }}>
                    {virtuosoIndex[hovered]}
                  </div>
                </div>
                <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.05rem', fontWeight: 300, color: 'rgba(17,26,16,0.65)', lineHeight: 1.8 }}>
                  {activeDesc}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  background: 'rgba(17,26,16,0.02)',
                  border: '1px dashed rgba(201,168,76,0.14)',
                  borderRadius: 16,
                  padding: '1.75rem',
                  marginBottom: '2rem',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', color: 'rgba(17,26,16,0.28)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  Selecciona un pilar para explorar su significado en esta tierra.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pillar score bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {PILLARS.map((p) => {
              const val = virtuosoIndex[p.key] ?? 0
              const isHov = hovered === p.key
              return (
                <motion.div
                  key={p.key}
                  onMouseEnter={() => setHovered(p.key)}
                  onMouseLeave={() => setHovered(null)}
                  animate={{ scale: isHov ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span>{p.emoji}</span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: isHov ? '#c9a84c' : 'rgba(17,26,16,0.6)', letterSpacing: '0.06em', transition: 'color 0.2s' }}>
                        {p.label}
                      </span>
                    </div>
                    <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: isHov ? '#e8c96e' : '#c9a84c', transition: 'color 0.2s' }}>
                      {val}/100
                    </span>
                  </div>
                  <div style={{ height: 5, borderRadius: 999, background: 'rgba(201,168,76,0.1)', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        height: '100%',
                        borderRadius: 999,
                        background: isHov
                          ? 'linear-gradient(to right, #c9a84c, #e8c96e, #ffe9a0)'
                          : 'linear-gradient(to right, #c9a84c, #e8c96e)',
                      }}
                      animate={{
                        background: isHov
                          ? 'linear-gradient(to right, #c9a84c, #e8c96e, #ffe9a0)'
                          : 'linear-gradient(to right, #c9a84c, #e8c96e)',
                      }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Overall score */}
          <div style={{ marginTop: '1.75rem', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(17,26,16,0.08)' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', color: 'rgba(17,26,16,0.32)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Índice Global
            </span>
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.2rem', fontWeight: 300, color: '#c9a84c' }}>
              {Math.round(PILLARS.reduce((acc, p) => acc + (virtuosoIndex[p.key] ?? 0), 0) / PILLARS.length)}
              <span style={{ fontSize: '1rem', color: 'rgba(201,168,76,0.5)' }}>/100</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
