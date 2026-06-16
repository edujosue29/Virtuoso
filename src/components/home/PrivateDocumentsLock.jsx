import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { usePrivateDocuments } from '../../context/PrivateDocumentsContext'

export default function PrivateDocumentsLock() {
  const { t } = useTranslation()
  const { isUnlocked, unlockDocuments, lockDocuments } = usePrivateDocuments()
  const [showModal, setShowModal] = useState(false)
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')

  const handleUnlock = () => {
    setError('')
    if (unlockDocuments(pin)) {
      setPin('')
      setShowModal(false)
    } else {
      setError(t('common.private_documents_incorrect'))
      setPin('')
    }
  }

  const handleLock = () => {
    lockDocuments()
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleUnlock()
    }
  }

  if (isUnlocked) {
    return (
      <motion.button
        onClick={handleLock}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={t('common.private_documents_lock')}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.35rem',
          background: 'rgba(201,168,76,0.12)',
          border: '1px solid rgba(201,168,76,0.25)',
          borderRadius: 999,
          cursor: 'pointer',
          color: '#c9a84c',
          transition: 'all 0.2s ease',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      </motion.button>
    )
  }

  return (
    <>
      <motion.button
        onClick={() => setShowModal(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={t('common.private_documents_unlock_button')}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.35rem',
          background: 'rgba(201,168,76,0.12)',
          border: '1px solid rgba(201,168,76,0.25)',
          borderRadius: 999,
          cursor: 'pointer',
          color: '#c9a84c',
          transition: 'all 0.2s ease',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 9.2-1"/>
        </svg>
      </motion.button>

      <AnimatePresence>
        {showModal && (
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }} onClick={() => setShowModal(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '2rem',
                maxWidth: '380px',
                width: '90%',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              <h3 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#111a10',
                margin: 0,
                marginBottom: '2rem',
                textAlign: 'center',
              }}>
                {t('common.private_documents_enter_pin')}
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="••••"
                  autoFocus
                  maxLength="4"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontFamily: '"DM Sans", Inter, sans-serif',
                    fontSize: '2rem',
                    border: error ? '2px solid #e74c3c' : '2px solid rgba(17,26,16,0.15)',
                    borderRadius: '8px',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                    textAlign: 'center',
                    letterSpacing: '0.5rem',
                    color: '#111a10',
                  }}
                />
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  marginTop: '1.5rem',
                }}>
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        background: pin.length > i ? '#111a10' : 'rgba(17,26,16,0.1)',
                        transition: 'all 0.2s ease',
                      }}
                    />
                  ))}
                </div>
              </div>

              {error && (
                <p style={{
                  color: '#e74c3c',
                  fontSize: '0.85rem',
                  marginBottom: '1rem',
                  margin: '0 0 1rem 0',
                }}>
                  {error}
                </p>
              )}

              <div style={{
                display: 'flex',
                gap: '0.75rem',
                justifyContent: 'flex-end',
              }}>
                <motion.button
                  onClick={() => setShowModal(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: '1px solid rgba(17,26,16,0.15)',
                    background: 'transparent',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontFamily: '"DM Sans", Inter, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'rgba(17,26,16,0.6)',
                  }}
                >
                  {t('common.private_documents_cancel')}
                </motion.button>
                <motion.button
                  onClick={handleUnlock}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, #c9a84c, #e8c96e)',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontFamily: '"DM Sans", Inter, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#2d4a2b',
                  }}
                >
                  {t('common.private_documents_unlock')}
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
