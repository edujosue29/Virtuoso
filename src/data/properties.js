// ─── VIRTUOSO · PROPERTIES INDEX ──────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════════
// ARCHIVO ÍNDICE PRINCIPAL - Importa todos los santuarios independientes
// ══════════════════════════════════════════════════════════════════════════

import { ENERGIES, NATURE } from './properties-shared.js'
import { divisionPzData } from './properties-division-pz.js'
import { laCarpinteraData } from './properties-carpintera.js'
import { starMountainData } from './properties-star-mountain.js'

// ── EXPORT: Datos compartidos entre todos los santuarios ──────────────────
export { ENERGIES, NATURE }

// ── EXPORT: Array PROPERTIES con todos los santuarios ────────────────────
export const PROPERTIES = [
  divisionPzData,
  laCarpinteraData,
  starMountainData,
]
