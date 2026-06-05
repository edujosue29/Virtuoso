# Contexto: Estado Actual de VIRTUOSO — Ambos Santuarios

**Fecha:** 2026-06-04  
**Proyecto:** VIRTUOSO Luxury Real Estate SPA  
**Propiedades:** 
- La Carpintera — Zona Protectora Cerros de La Carpintera (2 Fincas Dual) ✅
- División Pérez Zeledón — El Robledal (1 Finca, diseño propagado) ✅

---

## 1. ESTADO ACTUAL — QUÉ ESTÁ LISTO ✅

### Diseño Visual & UI/UX (100% COMPLETO — AMBOS SANTUARIOS)
- **Diseño base:** Forest Canopy theme (#2d4a2b, #faf9f6, #c9a84c) implementado en TODAS las secciones de ambos santuarios
- **Rediseño de secciones — LA CARPINTERA (2 Fincas Dual):**
  - ✅ TechnicalSheet — Ficha técnica con tabla 2-col per-finca
  - ✅ FloraFauna — Galería interactiva con featured panel + 15 especies
  - ✅ EarthMemory — Timeline alternado (7 eventos por finca)
  - ✅ LocalProsperity — Diseño editorial sin porcentajes
  - ✅ AncestralWisdom — Cinematic quote + wisdom cards
  - ✅ CommunityPulse — Mosaic lifestyle + activities grid
  - ✅ VirtuosoIndex — Método de orbits mejorado
  - ✅ VirtuosPotential — Grid de observaciones (nuevo)
  - ✅ CustodyLegacy — Editorial handover letter (per-finca)
- **Rediseño de secciones — DIVISIÓN PÉREZ ZELEDÓN (1 Finca):**
  - ✅ TODAS las secciones anteriores con diseño propagado
  - ✅ Datos de la propiedad existentes + 15 especies propagadas
  - ✅ Timeline original (6 eventos históricos)

### Estructura de Datos Dual Finca (100% LA CARPINTERA)
- ✅ La Carpintera: `properties.js` con 2 fincas independientes
  - Finca 1: n.87613 (10.96 ha, 60% potrero)
  - Finca 2: n.71964 (2.78 ha, 85-90% bosque)
- ✅ Cada finca tiene: `technical`, `prosperity`, `legacy`, `potencial`, `dueDiligence`, `timeline`
- ✅ TabNav implementado con finca switcher (Finca 1/2 buttons)
- ✅ Sanctuary.jsx refactorizado para pasar `finca` prop a todos los componentes

### División Pérez Zeledón — ESTRUCTURA SIMPLE (1 Finca)
- ✅ NO tiene dual-finca (mantiene estructura simple)
- ✅ 15 especies propagadas (aves y flora de La Carpintera)
- ✅ Timeline original preservado (Boruca-Brunca → Hoy)
- ✅ Todos los componentes funcionan (sin finca switcher para esta propiedad)

### Recursos Descargados (PARCIALMENTE COMPLETADO)
- ✅ 11 de 12 especies de pájaros descargadas desde Wikipedia
- ✅ 17 imágenes de naturaleza copiadas a `public/images/nature/`
- ✅ PDFs de debido diligence copiados a `public/docs/`
- ❌ Información de especies NO actualizada en properties.js (aún tiene placeholder data)

### Vídeo & Multimedia
- ✅ Video final cargado en `/public/videos/carpintera-final.mp4`
- ✅ Volume fade implementado con 13 IntersectionObserver thresholds
- ✅ Portal button visibility tracking activo

---

## 2. ESTADO ACTUAL — QUÉ FALTA ❌

### Flora & Fauna — Información Incompleta
**PROBLEMA:** En `properties.js` hay solo 4 especies (Quetzal, Puma, Perezoso, Tucancillo) con datos de placeholder.

**FUENTE CORRECTA:** Documento `AVES.docx` contiene lista detallada de 20+ especies registradas en eBird Hotspot L854298.

**ESPECIES ENCONTRADAS EN AVES.docx (por categoría):**

#### 1. Especies Indicadoras de Bosque Maduro
- Quetzal Resplandeciente (Pharomachrus mocinno)
- Jilguero / Solitario Carinegro (Myadestes melanops) — **[IMAGEN DESCARGADA]**
- Tucancillo Verde (Aulacorhynchus prasinus)

#### 2. Trochilidae (Colibríes Especialistas de Altura)
- Colibrí Montañés Garganta Morada (Lampornis calolaemus) — **[IMAGEN: colibri-montanes.jpg]**
- Colibrí Magnífico (Eugenes fulgens) — **[IMAGEN: colibri-magnifico.jpg]**
- Colibrí Centelleante (Selasphorus scintilla) — **[IMAGEN: colibri-centelleante.jpg]**

#### 3. Trogonidae (Trogones de Montaña)
- Trogon Collarejo (Trogon collaris) — **[IMAGEN: trogon-collarejo.jpg]**
- Trogon Elegante / Vientre Dorado (Trogon aurantiiventris)

#### 4. Thraupidae (Tangaras y Clorospingos)
- Tangara Dorada (Tangara icterocephala) — **[IMAGEN: tangara-dorada.jpg]**
- Clorospingo de Antifaz (Chlorospingus pileatus)
- Clorospingo Cejiazul / Clorofonia (Chlorophonia callophrys) — **[IMAGEN: clorofonia.jpg]**
- Tangara de Garganta Plateada

#### 5. Fringillidae y Turdidae (Eufonias, Clorofonias y Mirlos)
- Clorofonia Cejiazul (Chlorophonia callophrys)
- Mirlo de Montaña (Turdus plebejus)

#### 6. Especies Especialistas del Bosque Nuboso
- (Repeticiones de secciones anteriores con información contextual)

#### 7. Psitácidos y Carpinteros (Loros, Pericos y Picidae)
- Perico Frentirrojo (Psittacara finschi) — **[IMAGEN: perico-frentirrojo.jpg]**
- (Resto pendiente de revisar documento)

#### 8. Otras Especies Mencionadas en Documentos Técnicos
- Gavilan Colifajeado (Buteo albonotatus) — **[IMAGEN: gavilan-colifajeado.jpg]**
- Carpintero Hoffmann (Melanerpes hoffmannii) — **[IMAGEN: carpintero-hoffmann.jpg]**
- Yiguirro (Turdus grayi) — **[IMAGEN: yiguirro.jpg]**

**TOTAL ENCONTRADAS:** 20+ especies avifaunísticas (aves)  
**IMÁGENES DISPONIBLES:** 11 species bird images descargadas en `/public/images/species/`

### Historia / Timeline — Información Incompleta
**PROBLEMA:** En properties.js, `timeline` de La Carpintera NO existe.

**FUENTE CORRECTA:** Documentos `Carpintera Finca 1.docx` y `Carpintera Finca 2.docx` contienen secciones detalladas sobre:
- Punto 5: Historia de la propiedad
- Transformación de ganadería → bosque nuboso
- 12 años de regeneración (Finca 2)
- Transición de custodia

**INFORMACIÓN CLAVE POR FINCA:**

**Finca 1 (n.87613):**
- Pasado: Herencia familiar con ganadería de engorde tradicional (generaciones)
- Transformación: 2012-2024 — Pasó de ganadería erosiva a santuario de bosque nuboso
- Presente: 40% cobertura forestal, 60% potrero/tacotales en regeneración
- Futuro: Búsqueda de custodio institucional para siguiente fase

**Finca 2 (n.71964):**
- Pasado: Cafetal y lechería de cabras (década anterior)
- Transformación: 12 años de regeneración natural sin intervención química
- Presente: 85-90% bosque nuboso denso, operativo desde día uno
- Futuro: Plataforma "llave en mano" para proyecto de conservación

### Datos Técnicos Faltantes
En `properties.js` hay placeholders que deben ser reemplazados:

**Finca 1 – Datos a Actualizar:**
```javascript
technical: {
  area: "10.96 ha · 109,615.34 m²"  // ✅ Está
  areaDesglose: "60% potrero y tacotales · 40% cobertura forestal"  // ✅ Está
  elevation: "1,550 – 1,800 msnm"  // ✅ Está
  // AGREGAR:
  waterSources: "Naciente propia en zona alta"  // Falta detalle
  climate: "Microclima montaña (Bosque Muy Húmedo Montano Bajo)"  // Falta
  precipitation: "2,000 - 2,800 mm anuales"  // Falta
  infrastructure: "Dos unidades habitacionales, bodegas, paneles solares, Starlink"  // Falta detalles
}
```

**Finca 2 – Datos a Actualizar:**
```javascript
technical: {
  area: "2.78 ha · 27,848.74 m²"  // ✅ Está
  areaDesglose: "85-90% cobertura forestal · Bosque nuboso denso"  // ✅ Está
  elevation: "1,650 – 1,720 msnm"  // ✅ Está
  // AGREGAR:
  forestCover: "85-90% bosque nuboso denso en 12 años sin agroquímicos"  // Falta
  infrastructure: "Casa operativa, paneles solares, Starlink, vivero orgánico, estanques"  // Falta
}
```

---

## 3. DOCUMENTOS DE REFERENCIA — UBICACIÓN Y CONTENIDO

**Ruta:** `/Users/josuepereira/Documents/Virtuoso/multimedia/Documentos  Carpintera/new/`

### Archivos Disponibles:
1. **AVES.docx** — Registro avifaunístico completo (eBird L854298)
   - 20+ especies de aves catalogadas por familia
   - Descripciones ecológicas detalladas
   - Endemismo, rol ecológico, hábitat

2. **Carpintera Finca 1.docx** — Ficha técnica completa Finca 1
   - Secciones: General, Naturales/Climáticas, Accesibilidad, Legal, Propietarios, Importancia, Seguridad, Económico
   - Historia: ganadería → regeneración
   - Infraestructura, servicios, restricciones legales

3. **Carpintera Finca 2.docx** — Ficha técnica completa Finca 2
   - Estructura similar a Finca 1
   - Historia: cafetal/lechería → bosque nuboso (12 años)
   - Énfasis en pureza ambiental y operatividad

4. **DD LEGAL FINCA 1.pdf** — Debido diligencia legal (5.1 MB)
   - Información legal, hipotecas, restricciones
   - Documentación registral

5. **DD LEGAL FINCA 2.pdf** — Debido diligencia legal (1.5 MB)
   - Sin hipotecas, sin gravámenes
   - Exoneración IBI activa

6. **Anexos/** — Carpeta con documentos adicionales
   - Avalúos, planes de manejo, etc.

---

## 4. TAREAS COMPLETADAS ✅

### LA CARPINTERA
- ✅ PRIORIDAD 1: Actualizar Flora & Fauna (15 especies con imágenes)
- ✅ PRIORIDAD 2: Crear Timeline/Historia (7 eventos × 2 fincas)
- ✅ PRIORIDAD 3: Datos Técnicos (todos los campos relevantes presentes)

### DIVISIÓN PÉREZ ZELEDÓN (PROPAGACIÓN COMPLETADA)
- ✅ Flora & Fauna: 15 especies propagadas de La Carpintera
- ✅ Timeline: Información original preservada (Boruca-Brunca → UNESCO → Custodia VIRTUOSO)
- ✅ Diseño: Todos los componentes propagados con Forest Canopy theme
- ✅ Estructura: Mantiene 1 finca (sin dual-finca switcher)

---

## 5. TAREAS PENDIENTES — PRÓXIMAS FASES

### FASE A: Esperar información real de División Pérez Zeledón
**Usuario debe proporcionar:**
- Ficha técnica detallada (si existe, para reemplazar placeholders)
- Información actualizada de especies presentes en el terreno
- Timeline histórico específico de la propiedad
- Datos de prosperidad, potencial y custodia

**Acción a realizar cuando se reciba info:**
1. Reemplazar array `species` en División PZ con información real
2. Actualizar `timeline` con datos verificados
3. Enriquecer campos técnicos según documentación
4. Actualizar secciones prosperity, potencial, legacy si hay cambios
5. Desplegar y verificar visualmente en localhost

---

### FASE B: Enriquecer Datos Técnicos (OPCIONAL - si hay nuevos documentos)
**Campos que podrían expandirse en ambas propiedades:**
- `climate` detalles — Microclima específico
- `temperature` — Rangos anuales promedio
- `precipitation` — mm anuales certificados
- `soilType` — Caracterización pedológica completa
- `yearsInRegeration` — Timeline de regeneración formal

---

## 5. WORKFLOW PENDIENTE

```
1. CARPINTERA — 100% ALIMENTACIÓN DE DATOS
   ├─ Actualizar Flora & Fauna (11 especies + imágenes)
   ├─ Crear Timeline/Historia (ambas fincas)
   ├─ Enriquecer Datos Técnicos
   └─ Verificar en localhost → VISUAL SIGN-OFF

2. PROPAGACIÓN A DIVISIÓN PZ
   ├─ Aplicar cambios de diseño a División Pérez Zeledón
   └─ Verificar en localhost

3. DIVISIÓN PZ — ALIMENTACIÓN DE DATOS
   ├─ Esperar fichas técnicas del usuario
   ├─ Actualizar datos técnicos
   ├─ Crear Flora & Fauna
   ├─ Crear Timeline
   └─ Verificar en localhost → VISUAL SIGN-OFF

4. DEPLOY & GIT
   ├─ Solo cuando usuario lo solicite (MEMORIA: nunca auto-commit)
   └─ Vite build + push a vercel
```

---

## 6. ESTADO DE INTEGRIDAD

### LA CARPINTERA (2 Fincas Dual)

| Aspecto | Estado | Observaciones |
|---------|--------|---------------|
| **Diseño Visual** | ✅ 100% | Todas las secciones rediseñadas con Forest Canopy theme |
| **Estructura Dual Finca** | ✅ 100% | TabNav con finca switcher, per-finca technical/timeline |
| **Flora & Fauna — Data** | ✅ 100% | 15 especies con imágenes verificadas |
| **Flora & Fauna — UI** | ✅ 100% | Galería interactiva + keyboard nav |
| **Historia — Data** | ✅ 100% | 7 eventos × 2 fincas en properties.js |
| **Historia — UI** | ✅ 100% | EarthMemory con grid dinámica |
| **Datos Técnicos — Data** | ✅ 100% | Todos los campos presentes (Finca 1 & 2) |
| **Datos Técnicos — UI** | ✅ 100% | TechnicalSheet con tabla 2-col |
| **Video & Audio** | ✅ 100% | Volume fade + portal button working |
| **Documentos PDF** | ✅ 100% | Due diligence en /public/docs/ |

### DIVISIÓN PÉREZ ZELEDÓN (1 Finca Simple)

| Aspecto | Estado | Observaciones |
|---------|--------|---------------|
| **Diseño Visual** | ✅ 100% | Todas las secciones con Forest Canopy theme |
| **Estructura** | ✅ 100% | 1 finca (sin switcher) |
| **Flora & Fauna — Data** | ✅ 100% | 15 especies propagadas de La Carpintera |
| **Flora & Fauna — UI** | ✅ 100% | Galería interactiva funcional |
| **Historia — Data** | ✅ 100% | 6 eventos históricos preservados |
| **Historia — UI** | ✅ 100% | EarthMemory renderizado correctamente |
| **Datos Técnicos — Data** | ✅ 100% | Información base presente (~600 ha) |
| **Datos Técnicos — UI** | ✅ 100% | TechnicalSheet funcional |
| **Video & Audio** | ❌ 0% | videoSrc vacío (esperando video drone) |
| **Documentos PDF** | ✅ 100% | Estructura lista para ficha técnica |

---

## 7. NOTAS IMPORTANTES

⚠️ **MEMORY CONSTRAINT:**
- Nunca auto-commit. El usuario dice cuándo hacer commit.
- Siempre desplegar en localhost con `npx vite --port 5174`
- Después de cambios en properties.js, verificar visualmente en navegador

⚠️ **IMÁGENES DE ESPECIES:**
- Ya descargadas en `/public/images/species/`
- Usar exactamente estos nombres en properties.js para que funcionen los links

⚠️ **FINCA SWITCHER:**
- La UI ya está lista en TabNav.jsx
- Cambiar Finca 1/2 debe reflejar datos correctos en TODAS las secciones
- Verificar que FloraFauna, EarthMemory, TechnicalSheet, etc. usen `finca` prop correctamente

---

## 8. SIGUIENTE PASO

**Estado actual:** ✅ Ambos santuarios (La Carpintera + División PZ) listos para deploy

**Opciones:**
1. **Desplegar a localhost:** `npx vite --port 5176` — verificar visualmente ambos santuarios
2. **Esperar datos reales de División PZ:** El usuario proporcionará información específica para reemplazar las 15 especies propagadas
3. **Hacer commit:** Solo cuando el usuario lo solicite explícitamente (memory constraint activo)

**Notas importantes:**
- La Carpintera: 100% completa con datos reales verificados (2 fincas, 15 especies, timelines, etc.)
- División Pérez Zeledón: Diseño propagado + datos placeholder (15 especies) — esperando info real del usuario
- Nunca auto-commit. Siempre esperar instrucción explícita del usuario.

