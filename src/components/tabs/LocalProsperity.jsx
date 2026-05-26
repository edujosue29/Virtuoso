import { motion } from 'framer-motion'
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  ResponsiveContainer, Tooltip,
} from 'recharts'

export default function LocalProsperity({ property }) {
  const { prosperity } = property

  const radarData = prosperity.indicators.map((ind) => ({
    subject: ind.label,
    value: ind.value,
    fullMark: 100,
  }))

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
          Prosperidad Local
        </p>
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 300,
            color: '#111a10',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}
        >
          Impacto Socioeconómico
        </h2>
        <p
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'rgba(17,26,16,0.48)',
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '0 auto',
          }}
        >
          {prosperity.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '4rem' }}>
        {/* Radar chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'rgba(17,26,16,0.03)',
            border: '1px solid rgba(201,168,76,0.12)',
            borderRadius: 16,
            padding: '2rem',
          }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(201,168,76,0.15)" gridType="polygon" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: 'rgba(17,26,16,0.6)', fontSize: 11, fontFamily: 'Inter, sans-serif' }}
              />
              <Radar
                name="Indicadores"
                dataKey="value"
                stroke="#c9a84c"
                fill="rgba(201,168,76,0.12)"
                strokeWidth={1.5}
                dot={{ fill: '#c9a84c', r: 3 }}
              />
              <Tooltip
                contentStyle={{
                  background: 'rgba(255,255,255,0.98)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: 8,
                  color: '#111a10',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 12,
                  boxShadow: '0 4px 16px rgba(17,26,16,0.08)',
                }}
                formatter={(v) => [`${v}/100`, 'Índice']}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Bar indicators */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {prosperity.indicators.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem' }}>
                <span
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(17,26,16,0.65)', letterSpacing: '0.04em' }}
                >
                  {ind.label}
                </span>
                <span
                  style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: '#c9a84c' }}
                >
                  {ind.value}
                </span>
              </div>
              <div
                style={{ height: 5, borderRadius: 999, background: 'rgba(201,168,76,0.1)', overflow: 'hidden' }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${ind.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    height: '100%',
                    borderRadius: 999,
                    background: 'linear-gradient(to right, #c9a84c, #e8c96e)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Problem / Solution cards */}
      <div style={{ marginTop: '5rem' }}>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.62rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          Mitigación de Problemáticas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.5rem' }}>
          {prosperity.issues.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'rgba(17,26,16,0.03)',
                border: '1px solid rgba(17,26,16,0.08)',
                borderRadius: 8,
                padding: '1.75rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.58rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(200,70,70,0.65)',
                  marginBottom: '0.6rem',
                }}
              >
                Problemática
              </div>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.05rem',
                  color: '#111a10',
                  lineHeight: 1.6,
                  marginBottom: '1.2rem',
                }}
              >
                {item.problem}
              </p>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.58rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#c9a84c',
                  marginBottom: '0.6rem',
                }}
              >
                Solución
              </div>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: 'rgba(17,26,16,0.58)',
                  lineHeight: 1.7,
                }}
              >
                {item.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
