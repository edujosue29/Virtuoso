import i18n from '../i18n/i18n'

export function getSanctuaryText(sanctuaryId, key, fallback = '') {
  try {
    const lang = i18n.language || 'es'
    const translationKey = `sanctuary_data.${sanctuaryId}.${key}`
    const translated = i18n.t(translationKey)

    // Si la traducción no existe, devuelve el fallback
    if (translated === translationKey) {
      return fallback
    }
    return translated
  } catch (error) {
    return fallback
  }
}

export function useSanctuaryText(property) {
  const sanctuaryId = property.id === 'division-perez-zeledon' ? 'division_pz' : 'la_carpintera'

  const getTranslation = (key, fallback) => {
    try {
      const translationKey = `infrastructure.${sanctuaryId}`
      const translated = i18n.t(translationKey)
      if (translated === translationKey) {
        return fallback
      }
      return translated
    } catch {
      return fallback
    }
  }

  return {
    name: getSanctuaryText(sanctuaryId, 'name', property.name),
    sanctuaryName: getSanctuaryText(sanctuaryId, 'sanctuary_name', property.sanctuaryName),
    tagline: getSanctuaryText(sanctuaryId, 'tagline', property.tagline),
    description: getSanctuaryText(sanctuaryId, 'description', property.description),
    location: getSanctuaryText(sanctuaryId, 'location', property.location),
    technicalArea: getSanctuaryText(sanctuaryId, 'technical_area', property.technical?.area || ''),
    technicalWater: getSanctuaryText(sanctuaryId, 'technical_water', property.technical?.water || ''),
    technicalZoning: getSanctuaryText(sanctuaryId, 'technical_zoning', property.technical?.zoning || ''),
    technicalElevation: getSanctuaryText(sanctuaryId, 'technical_elevation', property.technical?.elevation || ''),
    technicalBiodiversity: getSanctuaryText(sanctuaryId, 'technical_biodiversity', property.technical?.biodiversity || ''),
    technicalPotential: getSanctuaryText(sanctuaryId, 'technical_potential', property.technical?.potential || ''),
    technicalPrivacy: getSanctuaryText(sanctuaryId, 'technical_privacy', property.technical?.privacy || ''),
    technicalLogistics: getSanctuaryText(sanctuaryId, 'technical_logistics', property.technical?.logistics || ''),
    infrastructure: getTranslation('infrastructure', property.technical?.infrastructure || ''),
  }
}
