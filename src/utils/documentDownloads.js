import i18n from '../i18n/i18n'

export const getDownloadUrl = (docType, sanctuaryId, fincaIndex = null) => {
  const language = i18n.language || 'es'
  const basePath = '/docs'

  // Determine sanctuary folder
  let sanctuaryFolder = 'division-pz'
  if (sanctuaryId === 'la_carpintera' || sanctuaryId === 'la-carpintera') {
    sanctuaryFolder = 'la-carpintera'
  }

  // Document types and their logic
  if (docType === 'technical-sheet') {
    // Ficha técnica: respeta el idioma
    if (sanctuaryFolder === 'division-pz') {
      const filename = language === 'en' ? 'ficha-tecnica-en.pdf' : 'ficha-tecnica-es.pdf'
      return `${basePath}/division-pz/FichaTecnica/${filename}`
    } else {
      // La Carpintera tiene 2 fincas
      const fincaNum = fincaIndex === 0 ? 'finca1' : 'finca2'
      const filename = language === 'en'
        ? `ficha-tecnica-${fincaNum}-en.pdf`
        : `ficha-tecnica-${fincaNum}-es.pdf`
      return `${basePath}/la-carpintera/FichaTecnica/${filename}`
    }
  }

  if (docType === 'debida-diligencia') {
    // DD: siempre en español
    return `${basePath}/${sanctuaryFolder}/DD/debida-diligencia-es.pdf`
  }

  if (docType === 'anexos') {
    // Anexos: retorna la carpeta general
    return `${basePath}/${sanctuaryFolder}/Anexos/`
  }

  return null
}

export const openFile = (docType, sanctuaryId, fincaIndex = null) => {
  const url = getDownloadUrl(docType, sanctuaryId, fincaIndex)
  if (!url) return
  window.open(url, '_blank')
}
