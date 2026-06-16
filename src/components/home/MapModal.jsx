import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSanctuaryText } from '../../utils/sanctuaryTranslations'

const GENERIC_PLACE_TYPES = {
  'gasolinera': 'gas_station',
  'gasolina': 'gas_station',
  'combustible': 'gas_station',
  'restaurante': 'restaurant',
  'comida': 'restaurant',
  'hospital': 'hospital',
  'farmacia': 'pharmacy',
  'hotel': 'lodging',
  'hospedaje': 'lodging',
  'supermercado': 'supermarket',
  'mercado': 'supermarket',
  'banco': 'bank',
  'atm': 'atm',
  'café': 'cafe',
  'coffee': 'cafe',
  'parque': 'park',
  'escuela': 'school',
  'colegio': 'school',
  'universidad': 'university',
  'iglesia': 'church',
  'taller': 'car_repair',
  'mecánico': 'car_repair',
  'policía': 'police',
  'bomberos': 'fire_station',
  'aeropuerto': 'airport',
  'aerop': 'airport',
  'estación': 'train_station',
  'estacion': 'train_station',
  'parada': 'bus_station',
  'dentista': 'dentist',
  'médico': 'doctor',
  'medico': 'doctor',
  'veterinaria': 'veterinary_care',
  'cine': 'movie_theater',
  'musée': 'museum',
  'museo': 'museum',
  'biblioteca': 'library',
  'parqueo': 'parking',
  'estacionamiento': 'parking',
  'tienda': 'store',
  'oficina': 'local_government_office',
  'correo': 'post_office',
}

export default function MapModal({ property, onClose }) {
  const sanctuary = useSanctuaryText(property)
  const { t } = useTranslation()
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [searchedPlace, setSearchedPlace] = useState(null)
  const [distance, setDistance] = useState(null)
  const [duration, setDuration] = useState(null)
  const [searchInput, setSearchInput] = useState('')
  const [nearbyResults, setNearbyResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const mapRef = useRef(null)
  const markersRef = useRef([])
  const debounceTimerRef = useRef(null)
  const { lat, lng } = property.coordinates || {}

  // Load Google Maps script
  useEffect(() => {
    if (!lat || !lng) return

    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`
      script.onload = () => setScriptLoaded(true)
      script.onerror = () => console.error('Failed to load Google Maps')
      document.head.appendChild(script)
    } else {
      setScriptLoaded(true)
    }
  }, [lat, lng])

  // Initialize map
  useEffect(() => {
    if (!scriptLoaded || !lat || !lng) return

    const map = new window.google.maps.Map(document.getElementById('google-map'), {
      center: { lat, lng },
      zoom: 14,
      mapTypeId: 'satellite',
      fullscreenControl: true,
      zoomControl: true,
    })

    mapRef.current = map

    // Clear previous markers
    markersRef.current.forEach(marker => marker.setMap(null))
    markersRef.current = []

    // Add property marker
    const propertyMarker = new window.google.maps.Marker({
      position: { lat, lng },
      map,
      title: property.name,
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    })
    markersRef.current.push(propertyMarker)
  }, [scriptLoaded, lat, lng, property.name])

  // Auto-search as user types (with debounce) - using Google Places Autocomplete
  useEffect(() => {
    if (!searchInput.trim() || !scriptLoaded) {
      setShowResults(false)
      setNearbyResults([])
      return
    }

    // Clear previous timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }

    // Set new timer
    debounceTimerRef.current = setTimeout(() => {
      getPlacePredictions(searchInput)
    }, 400)

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
    }
  }, [searchInput, scriptLoaded])

  // Get place predictions using Google Places Text Search
  const getPlacePredictions = (query) => {
    if (!window.google || !mapRef.current || !query.trim()) return

    const service = new window.google.maps.places.PlacesService(mapRef.current)

    service.textSearch(
      {
        query: query,
        location: new window.google.maps.LatLng(lat, lng),
        radius: 50000,
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results && results.length > 0) {
          setNearbyResults(results.slice(0, 8))
          setShowResults(true)
        } else {
          setNearbyResults([])
          setShowResults(false)
        }
      }
    )
  }

  // Handle search
  const handleSearch = (query) => {
    if (!query.trim() || !mapRef.current) return

    const lowerQuery = query.toLowerCase().trim()

    // Check if query matches a generic place type (exact or partial match)
    let placeType = GENERIC_PLACE_TYPES[lowerQuery]

    // If no exact match, check for partial matches
    if (!placeType) {
      for (const [key, value] of Object.entries(GENERIC_PLACE_TYPES)) {
        if (key.startsWith(lowerQuery)) {
          placeType = value
          break
        }
      }
    }

    if (placeType) {
      searchNearbyPlaces(placeType)
    } else {
      searchSpecificPlace(query)
    }
  }

  // Search nearby places by type
  const searchNearbyPlaces = (type) => {
    if (!window.google || !mapRef.current) return

    const service = new window.google.maps.places.PlacesService(mapRef.current)
    service.nearbySearch(
      {
        location: { lat, lng },
        radius: 5000,
        type,
      },
      (results, status) => {
        if (status === 'OK' && results && results.length > 0) {
          const topResults = results.slice(0, 5)
          setNearbyResults(topResults)
          setShowResults(true)
        } else {
          setNearbyResults([])
          setShowResults(false)
        }
      }
    )
  }

  // Search for specific place using geocoding
  const searchSpecificPlace = (query) => {
    if (!window.google || !mapRef.current) return

    const geocoder = new window.google.maps.Geocoder()
    geocoder.geocode({ address: query }, (results, status) => {
      if (status === 'OK' && results.length > 0) {
        const place = results[0]
        const placeLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        }
        selectPlace(place.formatted_address, placeLocation)
      }
    })
  }

  // Select place from text search results
  const selectPlaceFromNearby = (place) => {
    if (!place.geometry?.location) return

    const placeLocation = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    }

    selectPlace(place.name, placeLocation)
    setNearbyResults([])
    setShowResults(false)
    setSearchInput('')
  }

  // Common place selection logic
  const selectPlace = (name, location) => {
    if (!mapRef.current) return

    // Remove old search marker
    if (markersRef.current[1]) {
      markersRef.current[1].setMap(null)
      markersRef.current.splice(1, 1)
    }

    // Add new search marker
    const searchMarker = new window.google.maps.Marker({
      position: location,
      map: mapRef.current,
      title: name,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    })
    markersRef.current.push(searchMarker)

    // Center map between two points
    const bounds = new window.google.maps.LatLngBounds()
    bounds.extend({ lat, lng })
    bounds.extend(location)
    mapRef.current.fitBounds(bounds)

    setSearchedPlace({ name, location })

    // Calculate distance and duration
    calculateDistance({ lat, lng }, location)
  }

  // Calculate distance using Distance Matrix API
  const calculateDistance = (origin, destination) => {
    if (!window.google) return

    const service = new window.google.maps.DistanceMatrixService()
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: 'DRIVING',
      },
      (response, status) => {
        if (status === 'OK') {
          const result = response.rows[0].elements[0]
          if (result.status === 'OK') {
            setDistance(result.distance.text)
            setDuration(result.duration.text)
          }
        }
      }
    )
  }

  if (!lat || !lng) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => { e.stopPropagation(); onClose() }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem',
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: 16,
          overflow: 'visible',
          boxShadow: '0 20px 64px rgba(0, 0, 0, 0.2)',
          width: '100%',
          maxWidth: 900,
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(17,26,16,0.1)',
        }}>
          <h2 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.8rem',
            fontWeight: 300,
            color: '#111a10',
            margin: 0,
          }}>
            {property.name}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#c9a84c',
              fontSize: '1.5rem',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>

        {/* Map container */}
        <div
          id="google-map"
          style={{
            width: '100%',
            height: 450,
            flex: 1,
            minHeight: 350,
            position: 'relative',
            overflow: 'hidden',
          }}
        />

        {/* Footer with location info and search */}
        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(45,74,43,0.06) 0%, rgba(201,168,76,0.03) 100%)',
          borderTop: '1px solid rgba(201,168,76,0.15)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '1.5rem',
          alignItems: 'start',
        }}>
          {/* Property location */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', gridColumn: '1', gridRow: '1' }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2d4a2b, #3a6038)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              border: '2px solid #c9a84c',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3" fill="#c9a84c"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{
                fontFamily: '"DM Sans", Inter, sans-serif',
                fontSize: '0.7rem',
                color: 'rgba(17,26,16,0.55)',
                margin: '0 0 0.3rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600,
              }}>
                {t('map_modal.location')}
              </p>
              <p style={{
                fontFamily: '"DM Sans", Inter, sans-serif',
                fontSize: '0.85rem',
                color: '#111a10',
                margin: '0 0 0.3rem 0',
                fontWeight: 600,
              }}>
                {sanctuary.location}
              </p>
              <p style={{
                fontFamily: '"DM Sans", Inter, sans-serif',
                fontSize: '0.7rem',
                color: 'rgba(17,26,16,0.45)',
                margin: 0,
              }}>
                {property.coordinates?.display}
              </p>
            </div>
          </div>

          {/* Search and results section */}
          <div style={{ position: 'relative', gridColumn: '2', gridRow: '1' }}>
            <div style={{ position: 'relative', marginBottom: '0.75rem' }}>
              <input
                type="text"
                placeholder={t('map_modal.location')}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onFocus={() => searchInput.trim() && setShowResults(true)}
                style={{
                  width: '100%',
                  padding: '0.85rem 2.5rem 0.85rem 1rem',
                  fontSize: '0.85rem',
                  border: '1.5px solid #c9a84c',
                  borderRadius: 10,
                  fontFamily: '"DM Sans", Inter, sans-serif',
                  boxSizing: 'border-box',
                  background: '#ffffff',
                  color: '#111a10',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(201,168,76,0.12)',
                  outline: 'none',
                }}
              />
              <style>{`
                input:focus {
                  box-shadow: 0 4px 12px rgba(201,168,76,0.2) !important;
                }
                input::placeholder {
                  color: rgba(17,26,16,0.35);
                }
              `}</style>
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput('')
                    setNearbyResults([])
                    setShowResults(false)
                  }}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#c9a84c',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#111a10'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#c9a84c'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              )}
            </div>

            {/* Search results list */}
            <AnimatePresence>
              {showResults && nearbyResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: '#ffffff',
                    border: '1.5px solid #c9a84c',
                    borderRadius: 10,
                    marginTop: '0.75rem',
                    zIndex: 9999,
                    boxShadow: '0 8px 24px rgba(201,168,76,0.15)',
                    maxHeight: 220,
                    overflowY: 'auto',
                  }}
                >
                  {nearbyResults.map((place, idx) => (
                    <button
                      key={place.place_id || idx}
                      onClick={() => selectPlaceFromNearby(place)}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        background: 'none',
                        border: idx < nearbyResults.length - 1 ? '1px solid rgba(201,168,76,0.1)' : 'none',
                        borderBottom: idx < nearbyResults.length - 1 ? '1px solid rgba(201,168,76,0.1)' : 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        fontFamily: '"DM Sans", Inter, sans-serif',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(45,74,43,0.05))'
                        e.currentTarget.style.borderLeft = '3px solid #c9a84c'
                        e.currentTarget.style.paddingLeft = 'calc(1rem - 3px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'none'
                        e.currentTarget.style.borderLeft = 'none'
                        e.currentTarget.style.paddingLeft = '1rem'
                      }}
                    >
                      <p style={{
                        margin: '0 0 0.25rem 0',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#111a10',
                      }}>
                        {place.name}
                      </p>
                      <p style={{
                        margin: 0,
                        fontSize: '0.7rem',
                        color: 'rgba(17,26,16,0.5)',
                      }}>
                        {place.formatted_address}
                      </p>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Distance info - Below property location */}
          <div style={{ gridColumn: '1', gridRow: '2' }}>
            {searchedPlace ? (
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                padding: '1rem',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(45,74,43,0.08) 100%)',
                borderRadius: 10,
                border: '1px solid rgba(201,168,76,0.2)',
              }}>
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #c9a84c, #d4b957)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111a10" strokeWidth="2.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3" fill="#111a10"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontFamily: '"DM Sans", Inter, sans-serif',
                    fontSize: '0.7rem',
                    color: 'rgba(17,26,16,0.55)',
                    margin: '0 0 0.3rem 0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}>
                    {t('map_modal.coordinates')}
                  </p>
                  <p style={{
                    fontFamily: '"DM Sans", Inter, sans-serif',
                    fontSize: '0.85rem',
                    color: '#111a10',
                    margin: '0 0 0.3rem 0',
                    fontWeight: 600,
                  }}>
                    {searchedPlace.name}
                  </p>
                  {distance && duration && (
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      fontFamily: '"DM Sans", Inter, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}>
                      <span style={{ color: '#c9a84c' }}>
                        📍 {distance}
                      </span>
                      <span style={{ color: '#c9a84c' }}>
                        ⏱️ {duration}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(45,74,43,0.05) 100%)',
                borderRadius: 10,
                border: '1px solid rgba(201,168,76,0.15)',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4l3 2"/>
                </svg>
                <p style={{
                  fontFamily: '"DM Sans", Inter, sans-serif',
                  fontSize: '0.75rem',
                  color: '#c9a84c',
                  margin: 0,
                  fontWeight: 500,
                }}>
                  {t('map_modal.close')}
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
