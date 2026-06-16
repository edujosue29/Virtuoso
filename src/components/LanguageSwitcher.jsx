import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function LanguageSwitcher({ showText = true }) {
  const { i18n, t } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(newLang)
    localStorage.setItem('virtuoso-language', newLang)
  }

  const isEnglish = i18n.language === 'en'

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: showText ? '0.5rem' : '0',
        padding: showText ? '0.5rem 0.85rem' : '0.35rem',
        background: 'rgba(201,168,76,0.12)',
        border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: 999,
        cursor: 'pointer',
        fontFamily: '"DM Sans", Inter, sans-serif',
        fontSize: showText ? '0.72rem' : '0.65rem',
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#c9a84c',
        transition: 'all 0.2s ease',
      }}
      title={t('common.toggle_language')}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
      {showText && (
        <span>{isEnglish ? 'ES' : 'EN'}</span>
      )}
    </motion.button>
  )
}
