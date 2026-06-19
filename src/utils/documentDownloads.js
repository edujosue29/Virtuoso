import i18n from '../i18n/i18n'

const BLOB_BASE_URL = 'https://raxqx36bylqlnogp.public.blob.vercel-storage.com'

export const getDownloadUrl = (docType, sanctuaryId, fincaIndex = null) => {
  const language = i18n.language || 'es'

  // Document types and their logic
  if (docType === 'technical-sheet') {
    // Ficha técnica: respeta el idioma
    if (sanctuaryId === 'division-pz' || sanctuaryId === 'division_pz') {
      const filename = language === 'en' ? 'ficha-tecnica-en.pdf' : 'ficha-tecnica-es.pdf'
      return `${BLOB_BASE_URL}/${filename}`
    } else {
      // La Carpintera tiene 2 fincas
      const fincaNum = fincaIndex === 0 ? 'finca1' : 'finca2'
      const filename = language === 'en'
        ? `ficha-tecnica-${fincaNum}-en.pdf`
        : `ficha-tecnica-${fincaNum}-es.pdf`
      return `${BLOB_BASE_URL}/${filename}`
    }
  }

  if (docType === 'debida-diligencia') {
    // DD: siempre en español
    if (sanctuaryId === 'division-pz' || sanctuaryId === 'division_pz') {
      return `${BLOB_BASE_URL}/pz-debida-diligencia-es.pdf`
    } else {
      return `${BLOB_BASE_URL}/debida-diligencia-es.pdf`
    }
  }

  if (docType === 'anexos') {
    // Anexos: retorna la URL base
    return `${BLOB_BASE_URL}/`
  }

  return null
}

export const openFile = (docType, sanctuaryId, fincaIndex = null) => {
  const url = getDownloadUrl(docType, sanctuaryId, fincaIndex)
  if (!url) return
  window.open(url, '_blank')
}
