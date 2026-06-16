import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import esTranslations from './locales/es.json'
import enTranslations from './locales/en.json'

const resources = {
  es: { translation: esTranslations },
  en: { translation: enTranslations },
}

// Initialize i18next synchronously
i18next.use(initReactI18next).init(
  {
    resources,
    lng: 'es',
    fallbackLng: 'es',
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // Disable suspense to avoid loading issues
    },
  },
  (err, t) => {
    if (err) console.error('i18next init error:', err)
    else console.log('i18next initialized')
  }
)

// Load saved language after initialization
if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
  try {
    const saved = localStorage.getItem('virtuoso-language')
    if (saved && ['es', 'en'].includes(saved)) {
      i18next.changeLanguage(saved)
    } else {
      const browserLang = navigator.language?.split('-')[0]
      if (browserLang && ['es', 'en'].includes(browserLang)) {
        i18next.changeLanguage(browserLang)
      }
    }
  } catch (e) {
    console.warn('Could not load language preference:', e)
  }
}

export default i18next
