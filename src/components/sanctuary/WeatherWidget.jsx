import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const WEATHER_ICONS = {
  sunny:   '☀️',
  cloudy:  '⛅',
  rainy:   '🌧️',
  foggy:   '🌫️',
  stormy:  '⛈️',
  default: '🌿',
}

function useRealTime() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function WeatherWidget({ coordinates, location }) {
  const now = useRealTime()
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!coordinates) return
    const city = encodeURIComponent(location?.split(',')[0] || 'San Jose')
    fetch(`https://wttr.in/${city}?format=j1`)
      .then((r) => r.json())
      .then((data) => {
        const current = data.current_condition?.[0]
        if (current) {
          setWeather({
            temp: current.temp_C,
            humidity: current.humidity,
            desc: current.weatherDesc?.[0]?.value || '',
            feels: current.FeelsLikeC,
          })
        }
      })
      .catch(() => {
        // Fallback con datos simulados coherentes con la ubicación
        setWeather({ temp: '22', humidity: '80', desc: 'Parcialmente nublado', feels: '21' })
      })
      .finally(() => setLoading(false))
  }, [coordinates, location])

  const timeStr = now.toLocaleTimeString('es-CR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
  const dateStr = now.toLocaleDateString('es-CR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex flex-col gap-3"
      style={{
        background: 'rgba(5,13,5,0.55)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: 16,
        padding: '16px 20px',
        minWidth: 200,
      }}
    >
      {/* Clock */}
      <div className="text-center">
        <div
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '2rem',
            fontWeight: 300,
            color: '#f5f0e8',
            lineHeight: 1,
            letterSpacing: '0.05em',
          }}
        >
          {timeStr}
        </div>
        <div
          className="mt-1 capitalize"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.65rem',
            color: 'rgba(201,168,76,0.7)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {dateStr}
        </div>
      </div>

      <div className="h-px" style={{ background: 'rgba(201,168,76,0.15)' }} />

      {/* Weather */}
      {loading ? (
        <div className="text-center" style={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.75rem' }}>
          Cargando clima…
        </div>
      ) : weather ? (
        <div className="flex items-center justify-between gap-3">
          <div>
            <div
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: '#f5f0e8',
                lineHeight: 1,
              }}
            >
              {weather.temp}°C
            </div>
            <div
              className="mt-1"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', color: 'rgba(245,240,232,0.5)', letterSpacing: '0.08em' }}
            >
              Sensación {weather.feels}°C
            </div>
          </div>
          <div className="text-right">
            <div style={{ fontSize: '1.6rem' }}>{WEATHER_ICONS.default}</div>
            <div
              className="mt-0.5"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', color: 'rgba(245,240,232,0.45)', letterSpacing: '0.06em' }}
            >
              💧 {weather.humidity}%
            </div>
          </div>
        </div>
      ) : null}

      {/* Coordinates */}
      <div
        className="text-center"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.6rem',
          color: 'rgba(201,168,76,0.5)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {coordinates?.display}
      </div>
    </motion.div>
  )
}
