/**
 * Helper function to get bilingual text based on current language
 * @param {string|object} text - Either a simple string or {es: '...', en: '...'}
 * @param {string} language - Current language code ('es' or 'en')
 * @returns {string} The text in the selected language, or fallback to Spanish
 */
export function getBilingualText(text, language = 'es') {
  if (!text) return ''
  if (typeof text === 'string') return text
  if (typeof text === 'object' && text[language]) return text[language]
  if (typeof text === 'object' && text.es) return text.es
  return text.en || ''
}

/**
 * Transform a property object to use the correct language
 * @param {object} property - The property object
 * @param {string} language - Target language ('es' or 'en')
 * @returns {object} Property with all text fields in target language
 */
export function getPropertyInLanguage(property, language = 'es') {
  const transform = (obj) => {
    if (!obj || typeof obj !== 'object') return obj
    if (Array.isArray(obj)) return obj.map(item => transform(item))

    const result = {}
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string' || (value && value.es && value.en)) {
        result[key] = getBilingualText(value, language)
      } else if (typeof value === 'object' && value !== null) {
        result[key] = transform(value)
      } else {
        result[key] = value
      }
    }
    return result
  }

  return transform(property)
}
