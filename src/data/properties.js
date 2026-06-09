// ─── VIRTUOSO · VIRTUS REAL ESTATE ─────────────────────────────────────────
// Datos actualizados con información real de fichas técnicas, documentos y
// sitio web de Virtus Realty CR.
// Imágenes: archivos reales en /public/images/
// Video: /public/videos/carpintera.mp4

export const ENERGIES = [
  { id: 'agua',        label: 'Agua',         icon: '💧' },
  { id: 'bosque',      label: 'Bosque',        icon: '🌿' },
  { id: 'montaña',     label: 'Montaña',       icon: '⛰️' },
  { id: 'agricultura', label: 'Agricultura',   icon: '🌱' },
  { id: 'comunidad',   label: 'Comunidad',     icon: '🤝' },
  { id: 'ancestral',   label: 'Ancestral',     icon: '🗿' },
]

// ─── NATURE IMAGES (para secciones de fondo, flora, etc.) ───────────────────
export const NATURE = {
  costaRica: '/images/nature/costa-rica-2400159_1920.jpg',
  bird1:     '/images/nature/zdenek-machacek-GlGSLLmfO4I-unsplash.jpg',
  bird2:     '/images/nature/zdenek-machacek-6SKXHxVqgso-unsplash.jpg',
  bird3:     '/images/nature/zdenek-machacek-HKUXTajl8Is-unsplash.jpg',
  bird4:     '/images/nature/zdenek-machacek-UI2ZWYwTn8U-unsplash.jpg',
  forest1:   '/images/nature/casey-horner-4rDCa5hBlCs-unsplash.jpg',
  forest2:   '/images/nature/ales-krivec-h7bNiN2AzNM-unsplash.jpg',
  forest3:   '/images/nature/matthew-smith-Rfflri94rs8-unsplash.jpg',
  water:     '/images/nature/natalia-blauth-BcbuyNGC1CM-unsplash.jpg',
  sky:       '/images/nature/unsplash-community-0sjmO4peVKE-unsplash.jpg',
  soul:      '/images/nature/a-chosen-soul-SxQ9fZq3uQ0-unsplash.jpg',
}

export const PROPERTIES = [

  // ═══════════════════════════════════════════════════════════════════════════
  // FINCA 1: DIVISIÓN PÉREZ ZELEDÓN — El Robledal
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id:   'division-perez-zeledon',
    slug: 'division-perez-zeledon',

    // ── Identidad ──────────────────────────────────────────────────────────
    name:          'División Pérez Zeledón',
    sanctuaryName: 'El Robledal — Refugio de Conservación Hidrológica',
    tagline:       'Donde el bosque primario es el banco de agua que el mundo necesita.',
    description:
      'Casi 600 hectáreas de bosque primario y secundario en el Corredor Biológico La Amistad Pacífico Sur, declarado Patrimonio de la Humanidad por la UNESCO. Nacientes propias con convenio de abastecimiento a comunidades, acceso directo desde la Ruta Interamericana y potencial agroforestal activo.',

    // ── Imágenes reales ────────────────────────────────────────────────────
    heroImage: '/images/division/division-1.jpeg',
    image:   '/images/division/division-2.jpeg',
    gallery: [
      '/images/division/division-1.jpeg',
      '/images/division/division-2.jpeg',
      '/images/division/division-3.jpeg',
      '/images/division/division-4.jpeg',
      '/images/division/division-5.jpeg',
      '/images/division/division-6.jpeg',
      '/images/division/division-7.jpeg',
      '/images/division/division-8.jpeg',
      '/images/division/division-9.jpeg',
      '/images/division/division-10.jpeg',
      '/images/division/division-11.jpeg',
      '/images/division/division-12.jpeg',
      '/images/division/division-13.jpeg',
      '/images/division/division-14.jpeg',
      '/images/division/division-15.jpeg',
      '/images/division/division-16.jpeg',
      '/images/division/division-17.jpeg',
      '/images/division/division-18.jpeg',
      '/images/division/division-19.jpeg',
      '/images/division/division-20.jpeg',
      '/images/division/division-21.jpeg',
      '/images/division/division-22.jpeg',
      '/images/division/division-23.jpeg',
      '/images/division/division-24.jpeg',
      '/images/division/division-25.jpeg',
      '/images/division/division-26.jpeg',
      '/images/division/division-27.jpeg',
      '/images/division/division-28.jpeg',
      '/images/division/division-29.jpeg',
      '/images/division/division-30.jpeg',
      '/images/division/division-31.jpeg',
      '/images/division/division-32.jpeg',
      '/images/division/division-33.jpeg',
      '/images/division/division-34.jpeg',
      '/images/division/division-35.jpeg',
    ],
    videoSrc:  '/videos/division-portada.mp4',

    // ── Ubicación ──────────────────────────────────────────────────────────
    coordinates: {
      lat: 9.513555,
      lng: -83.710393,
      display: '9°30\'48" N  83°42\'38" O',
    },
    location: 'División, Pérez Zeledón, San José, Costa Rica',
    energy:   ['agua', 'bosque', 'agricultura', 'ancestral'],

    // ── Ficha técnica ──────────────────────────────────────────────────────
    techSheet: '/ficha-tecnica-placeholder.pdf',
    technical: {
      area:          '594.9 hectáreas (5,948,615 m²)',
      areaDesglose:  'Bosque primario y secundario (mayoría) · Reforestación pino y ciprés ~15% · Agropecuario (moras y aguacate) ~5%',
      zoning:        'Corredor Biológico La Amistad Pacífico Sur — Reserva de Biosfera UNESCO (Cuenca Río Savegre/División) · Área de Conservación La Amistad Pacífico Sur — Patrimonio de la Humanidad',
      water:         'Naciente principal del Río División + Río Savegre · Quebradas: División, Angostura, En Medio · Soberanía hídrica certificada · Concesión de Aguas Superficiales R-1342-2020 MINAE vigente hasta 2030 (1 L/s para uso doméstico y comercial)',
      elevation:     '1,800 a 2,800 msnm — Transición excepcional entre bosque tropical lluvioso y nuboso de montaña',
      access:        'Acceso directo desde Ruta Nacional 2 (Interamericana Sur) — carretera asfaltada',
      titleStatus:   'Plena propiedad, inscrito en Registro Nacional de Costa Rica',
      folio:         'SJ-762238-1988 y SJ-437167-1981 · Propiedad Inversiones Comerciales APA S.A. y ROBLESA S.A.',
      value:         'USD $4,950,400',
      restrictions:  'Uso de Suelo: Conservación estricta · Permite 1 vivienda cada 10,000 m² (hasta 6 viviendas máximo en 594 ha) · Certificación de Servicios Ambientales (FONAFIFO) — exención fiscal de renta e IVA · Contratos PSA vigentes hasta 29 de agosto de 2029',
      infrastructure: 'Casa de cuidador · 7 km de caminos internos de lastre en buen estado · Vigilancia permanente de linderos · Red eléctrica · Internet · Telefonía · Agua potable por naciente propia',
      soilType:      'Inceptisoles/Ultisoles — alta fertilidad con aptitud forestal, agroforestal y producción orgánica',
      builtArea:     '200 m² construidos (residencia de cuidador)',
      yearBuilt:     '1980 (estructuras existentes)',
      agent:         'Ciany Devoto Chen · +506 7293-5269 · cianydevoto@virtusrealtycr.com',
    },

    // ── Flora & Fauna ──────────────────────────────────────────────────────
    species: [
      {
        id:          'quetzal-pz',
        name:        'Quetzal Resplandeciente',
        scientific:  'Pharomachrus mocinno',
        type:        'fauna',
        image:       '/images/species/quetzal.jpg',
        description: 'Ave sagrada de Mesoamérica. Documentada en El Robledal como anidador permanente en las zonas de mayor elevación (2,000+ msnm). Su presencia confirma la madurez del bosque con aguacatillos silvestres abundantes.',
        status:      'Vulnerable (UICN)',
        habitat:     'Bosque nuboso y de montaña, 1,500–3,000 msnm',
      },
                                                      {
        id:          'tapir-danta',
        name:        'Tapir (Danta)',
        scientific:  'Tapirus bairdii',
        type:        'fauna',
        image:       '/images/species/tapir-centroamericano.jpg',
        description: 'Megafauna característica del Corredor Biológico La Amistad. El Robledal ofrece hábitat óptimo como dispersador de semillas en zonas de bosque primario de altura.',
        status:      'Vulnerable (UICN)',
        habitat:     'Bosque tropical primario y secundario, 1,200–3,000 msnm',
      },
      {
        id:          'coyote',
        name:        'Coyote',
        scientific:  'Canis latrans',
        type:        'fauna',
        image:       '/images/species/coyote.jpg',
        description: 'Depredador clave del ecosistema de El Robledal. Presente en zonas de bosque primario como regulador de poblaciones de pequeños mamíferos.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano y premontano, 1,200–3,000 msnm',
      },
      {
        id:          'halcon-rojo',
        name:        'Halcón Rojo (Halcón Cola Roja)',
        scientific:  'Buteo jamaicensis',
        type:        'fauna',
        image:       '/images/species/halcon-rojo.jpg',
        description: 'Ave rapaz nativa del Corredor Biológico. Documentada en El Robledal como indicadora de ecosistema prístino. Patrulla las zonas de bosque abierto en búsqueda de presas pequeñas.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso y montano, 1,200–3,000 msnm',
      },
      {
        id:          'cabro-monte',
        name:        'Cabro de Monte (Venado Cola Blanca)',
        scientific:  'Odocoileus virginianus',
        type:        'fauna',
        image:       '/images/species/venado-cola-blanca.jpg',
        description: 'Megafauna herbívora documentada en El Robledal. Presente en zonas de bosque primario como indicador de ecosistema con baja presión de caza. Dispersador de semillas clave.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque tropical y montano, 1,200–3,000 msnm',
      },
                            ],

    // ── Historia / Memoria ─────────────────────────────────────────────────
    timeline: [
      {
        year:        '~3000 a.C.',
        title:       'Territorio Boruca-Brunca',
        description: 'Los pueblos Boruca (Brunca) establecen su civilización en la cuenca del río División. La tierra es comprendida como ser vivo con memoria y propósito sagrado.',
      },
      {
        year:        'Siglo XVI',
        title:       'Contacto Colonial',
        description: 'La conquista española altera las dinámicas territoriales de la Zona Sur. Los Boruca resisten con tenacidad y preservan gran parte de su cosmovisión y lengua hasta hoy.',
      },
      {
        year:        '1800s',
        title:       'Colonización Agrícola',
        description: 'Familias colonas se establecen en Pérez Zeledón. Café, caña y ganadería comienzan a transformar el paisaje, aunque las zonas altas mantienen su cobertura forestal.',
      },
      {
        year:        '1970-1990',
        title:       'Políticas de Conservación',
        description: 'Costa Rica establece un marco legal de conservación pionero en América Latina. El Corredor Biológico La Amistad es establecido, protegiendo el territorio de El Robledal.',
      },
      {
        year:        '2000s',
        title:       'Reconocimiento UNESCO',
        description: 'El Área de Conservación La Amistad Pacífico Sur es confirmada como Patrimonio de la Humanidad. El Robledal, dentro del corredor, adquiere estatus de conservación internacional.',
      },
      {
        year:        'Hoy',
        title:       'Custodia VIRTUOSO',
        description: 'Casi 600 hectáreas de bosque primario buscan un custodio consciente. Un proyecto de vida que honre el Patrimonio Mundial que esta tierra representa.',
      },
    ],

    // ── Prosperidad ────────────────────────────────────────────────────────
    prosperity: {
      description:
        'La ubicación estratégica dentro del Corredor Biológico UNESCO, el volumen de agua propio y el acceso desde la Interamericana hacen de El Robledal un activo de alta valorización. Su potencial en ecoturismo, producción orgánica (moras y aguacate activos) y servicios ambientales es inmediato.',
      indicators: [
        { label: 'Potencial Ecoturístico',      note: 'Acceso directo a corredores biológicos y certificaciones activas de turismo sostenible en la región.' },
        { label: 'Producción Orgánica Activa',  note: 'Parcelas de cacao, banano y plantas medicinales Boruca en producción sin agroquímicos.' },
        { label: 'Servicios Ambientales PSA',   note: 'Inscrito en programa PSA del FONAFIFO — ingresos anuales garantizados por conservación de bosque.' },
        { label: 'Plusvalía Corredor UNESCO',   note: 'Colindante con Zona Núcleo de Reserva de Biosfera UNESCO — valorización patrimonial excepcional.' },
        { label: 'Impacto Comunitario',         note: 'Alianzas con comunidades Boruca y Bribri para gestión cultural y agrícola compartida.' },
      ],
      issues: [
        {
          problem:  'Desempleo en zonas rurales de Pérez Zeledón',
          solution: 'Generación de empleos verdes: guías de naturaleza, agricultores orgánicos, artesanos locales integrados al proyecto.',
        },
        {
          problem:  'Pérdida de biodiversidad por presión agrícola',
          solution: 'Corredores biológicos activos y reforestación con especies nativas que incrementan el valor del Patrimonio Mundial.',
        },
        {
          problem:  'Dependencia hídrica de comunidades vecinas',
          solution: 'Modelo de custodia hídrica responsable: las nacientes propias abastecen comunidades vecinas bajo convenio de colaboración.',
        },
      ],
    },

    // ── Sabiduría Ancestral ────────────────────────────────────────────────
    ancestral: {
      title:       'Memoria Boruca — Guardianes del Sur',
      description: 'La nación Boruca (Brunca) ha habitado estas tierras durante milenios. Su cosmovisión reconoce en cada río, montaña y árbol un ser vivo con memoria y propósito. El Festival de los Diablitos, que se celebra anualmente cerca de estas tierras, es la resistencia cultural más antigua de América Central.',
      architecture: [],
    },

    // ── Pulso de la Comunidad ──────────────────────────────────────────────
    communityPulse: {
      lifestyle: [
        'Amanecer con el coro de bosque nuboso — transición de zonas de vida entre 1,800 y 2,800 msnm',
        'Clima de eterna primavera: 15 a 22°C todo el año sin sistemas mecánicos de climatización',
        'Caminatas en 7 km de senderos internos en bosque primario — acceso directo a las nacientes del Río División',
        'Agua certificada de naciente propia, capturada de los torrentes acuíferos de la montaña',
        'A 2 km de la comunidad de División · 30 km (45 min) de San Gerardo de Dota · 35 km (45 min) de San Isidro',
        'Cielos estrellados sin contaminación lumínica en una de las cuencas más limpias de Centroamérica (UNESCO)',
        'Soberanía operativa: acceso directo desde Ruta Interamericana pavimentada + infraestructura de servicios completa',
      ],
      activities: [
        { name: 'Observación de Quetzales', icon: '🦜', level: 'Experto — Anidador permanente' },
        { name: 'Senderismo de Montaña',    icon: '⛰️', level: 'Moderado-Exigente' },
        { name: 'Investigación Científica', icon: '🔬', level: 'Equipo especializado' },
        { name: 'Turismo Regenerativo',     icon: '♻️', level: 'Sostenible' },
        { name: 'Educación Ambiental',      icon: '🎓', level: 'Instituciones' },
        { name: 'Investigación Hidrológica',icon: '💧', level: 'Especializado' },
      ],
    },

    // ── Potencial Observado por el Equipo Virtus ──────────────────────────
    potencial: [
      { icon: 'sun',    title: 'Bienestar Integral',       desc: 'El Robledal ofrece un escenario superlativo para la salud integral. Al abarcar altitudes desde los 1,800 hasta los 2,800 msnm, garantiza un clima de confort perpetuo. Su aire de alta montaña y su soberanía total sobre el agua (al poseer la naciente misma del Río División) crean un entorno prístino, ideal para establecer santuarios aislados.' },
      { icon: 'tree',   title: 'Conservación Ambiental',   desc: 'Mega-activo de conservación con 594 hectáreas y 91% de cobertura forestal, funcionando como ancla crítica para la conectividad del Corredor Biológico hacia el Pacífico Central. Su ubicación dentro del territorio de la Reserva de la Biosfera (UNESCO) y la presencia de megafauna como el tapir y el puma, le otorgan una validación internacional inigualable aparte de sus importantes recursos hídricos.' },
      { icon: 'book',   title: 'Educación e Investigación', desc: 'Alberga en una sola propiedad la transición de todas las Zonas de Vida de Holdridge, convirtiéndola en un laboratorio ecológico a escala real. Es el emplazamiento idóneo para establecer una estación universitaria internacional enfocada en el manejo de cuencas y el cambio climático.' },
      { icon: 'leaf',   title: 'Turismo Regenerativo',     desc: 'A diferencia de otras reservas con restricción total, el uso de suelo de El Robledal permite la construcción de baja densidad (viviendas cada 10,000 m²). Apalancado en sus 7 km de caminos internos y su acceso pavimentado, el comprador tiene el lienzo perfecto para desarrollar un eco-lodge de lujo sostenible.' },
      { icon: 'globe',  title: 'Investigación Científica', desc: 'La finca es la cuna del Río División y tributaria clave del Río Savegre. Monitorear las poblaciones de dantas, felinos y aves en estas 600 hectáreas representa una oportunidad inagotable para atraer grants y turismo científico de alto nivel.' },
      { icon: 'shield', title: 'Desarrollo Espiritual',    desc: 'El aislamiento que brindan casi 600 hectáreas, sumado a la energía constante de los torrentes de agua pura, generan la atmósfera de silencio y aislamiento absoluto que exigen los proyectos de retiro más exclusivos del mundo.' },
      { icon: 'coin',   title: 'Integración Comunitaria',  desc: 'Establecer un proyecto institucional aquí mitigará la migración y la pobreza local frenando la deforestación y la caza furtiva mediante la generación de empleos verdes estables (guardabosques, guías, hospitalidad).' },
    ],

    // ── Índice Virtuoso ────────────────────────────────────────────────────
    virtuosoIndex: {
      amor:        90,
      salud:       95,
      sabiduria:   92,
      prosperidad: 89,
      descriptions: {
        amor:
          'Naciente del Río División nace dentro de la propiedad y abastece a poblaciones y ecosistemas en las zonas bajas del Pacífico Central. Soberanía hídrica certificada bajo Concesión R-1342-2020 MINAE. La tierra nutre sin pedir nada a cambio: eso es amor en acción ecológica.',
        salud:
          'Transición excepcional entre bosque tropical lluvioso (1,800 msnm) y nuboso de montaña (2,800 msnm). Clima de 15-22°C perpetuo, precipitación 4,500-6,000 mm anuales que genera aire saturado de oxígeno, agua de naciente pura certificada, ausencia total de contaminación. Megafauna presente: Puma, Tapir, Quetzal.',
        sabiduria:
          'Patrimonio de la Humanidad UNESCO — Reserva de la Biosfera (Cuenca Río Savegre/División) reconocida como la más limpia de Centroamérica. Territorio ancestral Boruca que los documentos históricos revelan como lugar sagrado. Protección legal de clase mundial bajo MINAE/SINAC.',
        prosperidad:
          'USD $4,950,400 con acceso directo Ruta Interamericana. Certificación de Servicios Ambientales FONAFIFO (PSA vigentes hasta 2029) = exención fiscal renta e IVA. Concesión comercial de aguas (1 L/s) = flujo financiero garantizado. Potencial de turismo regenerativo en 594 hectáreas con 91% cobertura forestal.',
      },
    },

    // ── Legado ─────────────────────────────────────────────────────────────
    legacy: {
      title:         'Un Legado Intergeneracional',
      custodianName: 'Mauricio y Fabián Ortiz',
      message:
        'Heredada del abuelo y consolidada por los hermanos Ortiz, El Robledal fue comprada íntegra para proteger la unidad de las 594 hectáreas. Los hijos de los actuales dueños tienen otros proyectos de vida y desean pasar la custodia a una organización, ONG, fundación u individuo que entienda el valor macroecológico de esta mega-reserva. Quien la acoja se convierte en guardián de la naciente del Río División, en custodio de un Patrimonio de la Humanidad, en protector de megafauna nativa y en garantía de agua pura para las generaciones futuras. Este es el llamado del Corredor Biológico La Amistad Pacífico Sur.',
      videoUrl: '',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FINCA 2: LA CARPINTERA — Zona Protectora Cerros de La Carpintera
  // Dos fincas: Finca 1 (n.87513) + Finca 2 (n.134469)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id:   'la-carpintera',
    slug: 'la-carpintera',

    // ── Identidad ──────────────────────────────────────────────────────────
    name:          'La Carpintera',
    sanctuaryName: 'Santuario del Bosque Nuboso — Zona Protectora SINAC',
    tagline:       'En la neblina que abraza los cerros, la capital se desvanece y el alma respira.',
    description:
      'Dos fincas contiguas de ~21.9 ha totales en los Cerros de La Carpintera, Tres Ríos, Cartago. Zona Protectora oficial bajo SINAC/MINAE con Plan General de Manejo aprobado. Bosque nuboso con 250+ especies de aves, Quetzal, osos perezosos, puma y orquídeas endémicas. Energía solar (Starlink), naciente propia y acceso asfaltado a 22 km de San José.',
    // ── Imágenes reales ────────────────────────────────────────────────────
    heroImage: '/images/nature/NCA.jpg',
    image:   '/images/carpintera/prop-1.jpeg',
    gallery: [
      '/images/carpintera/prop-1.jpeg',
      '/images/carpintera/prop-2.jpeg',
      '/images/carpintera/prop-3.png',
      '/images/carpintera/prop-4.png',
      '/images/carpintera/apt-1.png',
      '/images/carpintera/apt-2.jpeg',
      '/images/carpintera/apt-3.jpeg',
      '/images/carpintera/apt-4.jpeg',
      '/images/carpintera/apt-5.jpeg',
      '/images/carpintera/apt-6.png',
      '/images/carpintera/apt-7.png',
      '/images/carpintera/apt-8.png',
      '/images/carpintera/invernadero-1.png',
      '/images/carpintera/invernadero-2.jpeg',
      '/images/carpintera/invernadero-3.png',
      '/images/carpintera/bodegas.png',
    ],
    videoSrc: '/videos/carpintera-final.mp4',

    // ── Imágenes por sección (banners editoriales) ─────────────────────────
    sectionImages: {
      technical:  '/images/carpintera/prop-2.jpeg',
      prosperity: '/images/carpintera/naciente.png',
      pulse:      '/images/carpintera/apt-2.jpeg',
      legacy:     '/images/carpintera/prop-4.png',
    },

    // ── Ubicación ──────────────────────────────────────────────────────────
    coordinates: {
      lat: 9.8972,
      lng: -83.9778,
      display: '9°53\'50" N  83°58\'40" O',
    },
    location: 'San Rafael, La Unión, Cartago, Costa Rica',
    energy:   ['bosque', 'montaña', 'comunidad', 'agua'],

    // ── Ficha técnica (compartida — datos base) ────────────────────────────
    techSheet: '/ficha-tecnica-placeholder.pdf',
    technical: {
      area:          '~13.7 ha totales · Finca 1: 10.96 ha + Finca 2: 2.78 ha',
      zoning:        'Zona Protectora Cerros de la Carpintera (ZPCC) — SINAC/MINAE · Área de Conservación Cordillera Volcánica Central',
      elevation:     '1,550 – 1,800 msnm',
      access:        'Asfaltada hasta 400m del portón · Últimos 400m lastre (4×4)',
      restrictions:  'Uso: Conservación de Agua y Biodiversidad · Ley Forestal 7575 · Exonerado Impuesto de Bienes Inmuebles',
    },

    // ── Fincas (datos específicos por finca) ───────────────────────────────
    anexos: [
      { label: 'Avalúo Finca 1',             file: '/docs/avaluo-finca-1.pdf' },
      { label: 'Plan General de Manejo ZPCC', file: '/docs/plan-manejo-carpintera.pdf' },
    ],
    fincas: [
      {
        id: 1,
        label: 'Finca 1',
        folio: 'n.87613',
        dueDiligence: '/docs/dd-legal-finca-1.pdf',
        technical: {
          area:          '10.96 ha · 109,615.34 m²',
          areaDesglose:  '60% potrero y tacotales · 40% cobertura forestal (bosque nuboso activo)',
          elevation:     '1,550 – 1,800 msnm',
          zoning:        'Zona Protectora Cerros de la Carpintera — SINAC/MINAE · ZPCC',
          water:         'Naciente propia en zona alta · Permiso MINAE Expediente 7479-A · Resolución R-0263-25',
          access:        'Asfaltada hasta 400m del portón · Últimos 400m lastre solo 4×4',
          titleStatus:   'Folio Real 87613-000 · Provincia de Cartago · Al día en obligaciones',
          folio:         '87613-000 · Plano catastrado C-1845182-2015',
          soilType:      'Relieve quebrado e irregular · Bosque Muy Húmedo Montano Bajo (Holdridge)',
          infrastructure: 'Dos unidades habitacionales · Bodegas · Paneles solares · Starlink · Accesos de concreto',
          restrictions:  'Plan General de Manejo ZPCC · Ley Forestal 7575 · Exonerado Impuesto IBI · Elegible PSA FONAFIFO',
          value:         '$550,000 USD solicitado · $610,000 USD valor estimado de mercado',
          legalStatus:   'Hipoteca en 2do grado — Citas: 2022-00213073-01-0002-001 · Servidumbre de acueducto activa',
        },
        prosperity: {
          description: 'Combina conectividad logística privilegiada con potencial de desarrollo real.',
          indicators: [
            { label: 'Superficie habilitada',  note: '60% de potrero y tacotales (13.2 ha) disponibles para planificar infraestructura de bajo impacto sin afectar el bosque maduro.' },
            { label: 'Potencial constructivo', note: 'Hasta el 10% del área (~2.2 ha) habilitado legalmente para edificaciones: centros de capacitación, residencias, laboratorios dentro del Plan de Manejo SINAC.' },
            { label: 'Infraestructura lista',  note: 'Dos unidades habitacionales, bodegas, sistema solar 25kW y Starlink instalados. Concesión de agua tramitada y activa.' },
            { label: 'Eficiencia fiscal',      note: 'Exonerado de Impuesto de Bienes Inmuebles (Ley Forestal 7575, Boleta 8888519). Elegible para Pago por Servicios Ambientales FONAFIFO.' },
            { label: 'Blindaje territorial',   note: 'Colinda con 4 ha de Municipalidad de La Unión, reserva ASOMOCICU y áreas Scouts. Cinturón de protección triple contra urbanización.' },
          ],
          issues: [
            { problem: 'Alta presión urbana sobre el corredor biológico', solution: 'Posición dentro de la ZPCC con colindancia de áreas municipales protegidas crea un blindaje legal infranqueable contra urbanización.' },
            { problem: 'Dependencia energética de red pública', solution: 'Sistema de paneles solares fotovoltaicos completamente instalado y funcional. Operación autónoma sin ICE desde el primer día.' },
            { problem: 'Acceso limitado en época lluviosa', solution: 'Últimos 400m de lastre aptos para 4×4. Plan de mantenimiento selectivo con criterio de infraestructura verde.' },
          ],
        },
        legacy: {
          title:   'Un Ciclo de Vida que Se Completa',
          message: 'Esta finca fue transformada de ganadería erosiva a santuario de bosque nuboso por manos que creyeron en ella cuando nadie más lo hacía. Hoy, tras años de restauración, soberanía energética y cumplimiento del Plan de Manejo SINAC, el ecosistema está maduro y listo para su siguiente fase. La propietaria tiene total disposición de acompañar al nuevo custodio durante la transición, aportando el conocimiento técnico y operativo acumulado. Buscamos a quien entienda que esta tierra es un activo de valor intergeneracional.',
        },
        potencial: [
          { icon: 'leaf',    title: 'Turismo Regenerativo',   desc: '60% de antiguos potreros permiten planificar infraestructura de bajísimo impacto — eco-lodges o centros de capacitación hasta un 10% del área.' },
          { icon: 'sun',     title: 'Bienestar Integral',     desc: 'Microclima 14°C–22°C sin climatización mecánica. Vecino más cercano a 400 metros. Silencio absoluto y pureza del aire.' },
          { icon: 'book',    title: 'Educación e Investigación', desc: '"Aula abierta" para permacultura y restauración. Ecosistema de bosque muy húmedo montano bajo como laboratorio vivo a 45 min de San José.' },
          { icon: 'shield',  title: 'Soberanía Operativa',    desc: 'Energía solar, Starlink y agua de naciente por gravedad. Operación 100% autónoma sin dependencia de red eléctrica ni acueducto público.' },
          { icon: 'tree',    title: 'Conservación Activa',    desc: '40% cobertura forestal: hábitat para 250+ especies de aves, Quetzal y puma. Corredor biológico vital de la Gran Área Metropolitana.' },
          { icon: 'globe',   title: 'Seguridad Territorial',  desc: 'Cinturón de protección único: reservas municipales, Scouts y ASOMOCICU. Más de 10 años sin incidentes de seguridad.' },
          { icon: 'coin',    title: 'Atractivo Financiero',   desc: 'Precio $550,000 USD vs valor de mercado $610,000 USD. Exoneración fiscal permanente (Ley Forestal 7575). Elegible para PSA FONAFIFO.' },
        ],
        timeline: [
          {
            year:        '~1000 a.C.',
            title:       'Rutas Huetar',
            description: 'El pueblo Huetar, habitantes del Valle Central, utilizaba las laderas de La Carpintera como ruta comercial y espiritual entre el Caribe y el Pacífico.',
          },
          {
            year:        'Siglo XIX–Años 2000s',
            title:       'Herencia Ganadera',
            description: 'La finca perteneció durante generaciones a una familia que la dedicó exclusivamente a ganadería de engorde tradicional. Esta actividad compactaba el suelo y limitaba la regeneración forestal.',
          },
          {
            year:        '2012',
            title:       'Visión de Transformación',
            description: '"Para Siempre Amigos de La Carpintera" adquiere Finca 1 con propósito radical: frenar la degradación erosiva y transformarla en santuario de bosque nuboso.',
          },
          {
            year:        '2012–2015',
            title:       'Fin de la Ganadería',
            description: 'Detención total de la actividad pecuaria. El suelo comienza a recuperar su capacidad de infiltración. Primeras especies arbóreas recolonizadoras aparecen en los potreros.',
          },
          {
            year:        '2015–2020',
            title:       'Restauración Ecosistémica',
            description: 'Reforestación activa con especies nativas. Instalación de paneles solares como compromiso con cero emisiones. Rescate y consolidación de las nacientes de agua potable.',
          },
          {
            year:        '2020–2024',
            title:       'Soberanía Operativa',
            description: 'Implementación de Starlink para conectividad autónoma. Sistema hídrico propio funcional y mejorado. La finca alcanza 40% cobertura forestal en proceso activo de regeneración.',
          },
          {
            year:        '2024–2026',
            title:       'Ecosistema Maduro',
            description: 'Cumplimiento pleno del Plan de Manejo SINAC. Registro de 250+ especies de aves. Presencia documentada de Quetzal, puma y perezoso. Listo para siguiente fase bajo nuevo custodio.',
          },
        ],
      },
      {
        id: 2,
        label: 'Finca 2',
        folio: 'n.71964',
        dueDiligence: '/docs/dd-legal-finca-2.pdf',
        technical: {
          area:          '2.78 ha · 27,848.74 m²',
          areaDesglose:  '85-90% cobertura forestal · Bosque nuboso denso · 12 años en regeneración natural',
          elevation:     '1,650 – 1,720 msnm',
          zoning:        'Zona Protectora Cerros de la Carpintera — SINAC/MINAE · ZPCC',
          water:         'Naciente en zona baja · Servidumbre de acueducto vinculada a Finca 1 · Resolución R-0382-2016-MINAE · Expediente A-15494',
          access:        'Asfaltada hasta 400m del portón · Últimos 400m lastre solo 4×4',
          titleStatus:   'Tomo 2022, Asiento 213073 · Provincia de Cartago · Sin gravámenes ni hipotecas',
          folio:         '71964 · Plano catastrado C-0639908-1986',
          soilType:      'Relieve quebrado e irregular · Bosque Muy Húmedo Montano Bajo · 12 años libre de agroquímicos',
          infrastructure: 'Casa de habitación operativa · Paneles solares · Starlink · Vivero orgánico · Estanques para fauna y apicultura',
          restrictions:  'Plan General de Manejo ZPCC · Ley Forestal 7575 · Exonerado IBI Boleta 8888519 · Elegible PSA FONAFIFO',
          value:         '$345,000 USD solicitado · $410,000 USD valor estimado de mercado',
          legalStatus:   'Sin hipotecas ni gravámenes · Libre de litigios · Exoneración IBI activa',
        },
        prosperity: {
          description: 'Es una plataforma operativa con la mayor densidad boscosa del corredor.',
          indicators: [
            { label: 'Cobertura forestal',  note: '85-90% bosque nuboso denso montano en 2.78 ha (2.36 ha de bosque puro). Sumidero de carbono activo y corredor biológico de máxima densidad.' },
            { label: 'Pureza ambiental',    note: '12 años libre de agroquímicos. Apicultura activa, vivero orgánico certificado y frutales nativos como indicadores biológicos de calidad excepcional.' },
            { label: 'Llave en mano',       note: 'Casa operativa, paneles solares, Starlink, estanques de fauna y apicultura instalados. Sistema hídrico funcional por gravedad desde naciente.' },
            { label: 'Sin cargas legales',  note: 'Sin hipotecas ni gravámenes. Exoneración IBI activa (Boleta 8888519). Elegible para PSA de FONAFIFO.' },
            { label: 'Centro de operaciones', note: 'Por su tamaño compacto y alta densidad boscosa, funciona como sede administrativa perfecta para un proyecto mayor de conservación.' },
          ],
          issues: [
            { problem: 'Suministro hídrico dependiente de servidumbre', solution: 'Servidumbre de acueducto legalmente amarrada a concesión de Finca 1. Suministro garantizado por instrumento legal independiente del propietario.' },
            { problem: 'Banco de baterías solares requiere actualización', solution: 'Sustitución técnica puntual del banco de baterías. Oportunidad de modernizar el sistema a última generación con retorno inmediato.' },
            { problem: 'Infraestructura interior requiere adecuación', solution: 'Casa operable desde el primer día. Mantenimiento preventivo y adecuación de espacios internos a requerimientos técnicos del comprador (laboratorios u oficinas).' },
          ],
        },
        legacy: {
          title:   'Una Plataforma Lista para el Siguiente Ciclo',
          message: 'Finca 2 pasó de cafetal y lechería de cabras a bosque nuboso denso gracias a 12 años de custodia activa y regeneración natural sin intervención química. Hoy es el activo de conservación más puro del corredor. La propietaria ofrece acompañamiento técnico total durante la transición, con conocimiento profundo del ecosistema hídrico, la biodiversidad y la infraestructura de soberanía energética instalada. Esta finca espera a quien entienda que conservar es la forma más inteligente de invertir.',
        },
        potencial: [
          { icon: 'leaf',   title: 'Conservación Pura',       desc: '85-90% cobertura forestal en 2.78 ha. La mayor densidad boscosa del corredor. Refugio de biodiversidad inmediato desde el día uno.' },
          { icon: 'sun',    title: 'Bienestar y Retiro',      desc: 'Última finca habitada del sector. Acceso único, privacidad total y aislamiento acústico absoluto. Vecino más cercano a 400 metros.' },
          { icon: 'book',   title: 'Investigación Científica', desc: 'Suelo puro (12 años sin agroquímicos), red de estanques y apicultura activa. Laboratorio vivo elegible para certificación Bandera Azul.' },
          { icon: 'shield', title: 'Soberanía Operativa',     desc: 'Paneles solares funcionales, agua de manantial con tratamiento propio y Starlink. Operación 100% autónoma desde el primer día.' },
          { icon: 'tree',   title: 'Educación Ambiental',     desc: 'Historial comprobado de sucesión ecológica (de cafetal a bosque nuboso). Vivero orgánico y apicultura activa como aula viva.' },
          { icon: 'coin',   title: 'Eficiencia Financiera',   desc: 'Precio $345,000 USD vs valor de mercado $410,000 USD. 100% exonerado de impuestos territoriales. Sin cargas legales.' },
          { icon: 'globe',  title: 'Integración al Corredor', desc: 'Complemento natural de Finca 1. Adquisición conjunta disponible con precio preferencial. Proyecto de conservación de escala internacional.' },
        ],
        timeline: [
          {
            year:        '~1000 a.C.',
            title:       'Rutas Huetar',
            description: 'El pueblo Huetar, habitantes del Valle Central, utilizaba las laderas de La Carpintera como ruta comercial y espiritual entre el Caribe y el Pacífico.',
          },
          {
            year:        'Años 1990s–2000s',
            title:       'Producción Tradicional',
            description: 'Finca 2 funcionaba como cafetal y lechería de cabras. Uso intensivo del suelo con agroquímicos y manejo extractivo de recursos naturales.',
          },
          {
            year:        '2012',
            title:       'Cambio de Vocación',
            description: 'Adquisición conjunta con Finca 1 por "Para Siempre Amigos de La Carpintera". Decisión: transformar la parcela de cafetal en bosque nuboso puro sin intervención química.',
          },
          {
            year:        '2012–2014',
            title:       'Transición sin Agroquímicos',
            description: 'Eliminación gradual de cultivos de café. Cese total de aplicaciones químicas. El suelo comienza a recuperarse. Primera regeneración forestal observable.',
          },
          {
            year:        '2014–2018',
            title:       'Sucesión Ecológica Activa',
            description: 'Nacimiento natural de bosque secundario. Instalación de vivero orgánico para propagación de especies nativas. Apiarios establecidos como indicador biológico de salud ambiental.',
          },
          {
            year:        '2018–2022',
            title:       'Densificación Forestal',
            description: 'Bosque nuboso denso comienza a dominar. 70-80% cobertura alcanzada. Infraestructura mejorada: paneles solares, Starlink, estanques de fauna. Casa rehabilitada.',
          },
          {
            year:        '2022–2026',
            title:       'Plataforma Llave en Mano',
            description: 'Finca 2 alcanza 85-90% cobertura de bosque nuboso primario regenerado. 12 años sin agroquímicos. Operativa desde el primer día. Lista para proyecto de conservación de escala internacional.',
          },
        ],
      },
    ],

    // ── Flora & Fauna ──────────────────────────────────────────────────────
    species: [
      // ── Aves Registro eBird L854298: 250+ especies documentadas ────────────
      {
        id:          'quetzal-carpintera',
        name:        'Quetzal Resplandeciente',
        scientific:  'Pharomachrus mocinno',
        type:        'fauna',
        image:       '/images/species/quetzal.jpg',
        description: 'Ave sagrada de Mesoamérica. Indicadora de bosque maduro. Presente estacionalmente en La Carpintera entre 1,550–1,800 msnm.',
        status:      'Vulnerable (UICN)',
        habitat:     'Bosque nuboso, 1,200–3,000 msnm',
      },
      {
        id:          'jilguero',
        name:        'Jilguero / Solitario Carinegro',
        scientific:  'Myadestes melanops',
        type:        'fauna',
        image:       '/images/species/jilguero.jpg',
        description: 'Especie endémica de las tierras altas de Costa Rica. Cantor nocturno del dosel del bosque nuboso. Documentada en La Carpintera como residente permanente.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso montano, 1,500–3,000 msnm',
      },
      {
        id:          'tucancillo',
        name:        'Tucancillo Verde',
        scientific:  'Aulacorhynchus prasinus',
        type:        'fauna',
        image:       '/images/species/tucancillo-verde.jpg',
        description: 'Residente de altura vital para la dispersión de semillas. Presente en el dosel de La Carpintera frugando en lauráceas y melastomáceas.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso, 1,500–3,000 msnm',
      },
      {
        id:          'colibri-montanes',
        name:        'Colibrí Montañés Garganta Morada',
        scientific:  'Lampornis calolaemus',
        type:        'fauna',
        image:       '/images/species/colibri-montanes.jpg',
        description: 'Polinizador clave en los estratos medio y bajo. Especie especialista de flores de Gesneriaceae y Loranthaceae en La Carpintera.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso de montaña, 1,800–3,200 msnm',
      },
      {
        id:          'colibri-magnifico',
        name:        'Colibrí Magnífico',
        scientific:  'Eugenes fulgens',
        type:        'fauna',
        image:       '/images/species/colibri-magnifico.jpg',
        description: 'Uno de los colibríes más grandes de la zona. Atraído por la floración de flores tubulares en sotobosque nuboso de La Carpintera.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso, 1,500–3,000 msnm',
      },
      {
        id:          'colibri-centelleante',
        name:        'Colibrí Centelleante',
        scientific:  'Selasphorus scintilla',
        type:        'fauna',
        image:       '/images/species/colibri-centelleante.jpg',
        description: 'El colibrí más pequeño del país. Especialista de flores bajas en bordes y claros del bosque nuboso de La Carpintera.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso y matorrales de altura, 1,200–3,000 msnm',
      },
      {
        id:          'trogon-collarejo',
        name:        'Trogón Collarejo',
        scientific:  'Trogon collaris',
        type:        'fauna',
        image:       '/images/species/trogon-collarejo.jpg',
        description: 'Ave territorial y leal del dosel. Documentada en La Carpintera como residente permanente del bosque maduro.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso y montano, 1,500–2,500 msnm',
      },
      {
        id:          'tangara-dorada',
        name:        'Tangara Dorada',
        scientific:  'Tangara icterocephala',
        type:        'fauna',
        image:       '/images/species/tangara-dorada.jpg',
        description: 'Frugívora gregaria de dosel y sotobosque. Importante dispersadora de semillas de Melastomataceae en La Carpintera.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso y montano, 1,200–2,400 msnm',
      },
      {
        id:          'clorofonia',
        name:        'Clorofonia / Cejiazul',
        scientific:  'Chlorophonia callophrys',
        type:        'fauna',
        image:       '/images/species/clorofonia.jpg',
        description: 'Pequeña tanágara de dosel especializada en frutos de mistletoes. Endémica de bosques húmedos montanos de Centroamérica.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso, 1,500–3,000 msnm',
      },
      {
        id:          'perico-frentirrojo',
        name:        'Loro Perico Frentirrojo',
        scientific:  'Psittacara finschi',
        type:        'fauna',
        image:       '/images/species/perico-frentirrojo.jpg',
        description: 'Loro social y ruidoso del dosel. Documentado en La Carpintera frugando en árboles frutales nativos.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso y montano, 1,000–2,500 msnm',
      },
      {
        id:          'gavilan-colifajeado',
        name:        'Gavilán Colifajeado',
        scientific:  'Buteo albonotatus',
        type:        'fauna',
        image:       '/images/species/gavilan-colifajeado.jpg',
        description: 'Raptor de mediano tamaño cazador de reptiles y mamíferos pequeños. Presente en bordes y claros de La Carpintera.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano abierto, 1,200–3,000 msnm',
      },
      {
        id:          'carpintero-hoffmann',
        name:        'Carpintero de Hoffmann',
        scientific:  'Melanerpes hoffmannii',
        type:        'fauna',
        image:       '/images/species/carpintero-hoffmann.jpg',
        description: 'Carpintero activo del dosel que genera nidos usados por otras especies. Indicador de salud de bosque maduro en La Carpintera.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso montano, 1,500–2,500 msnm',
      },
      {
        id:          'trogon-dorado',
        name:        'Trogón Dorado',
        scientific:  'Trogon aurantiiventris',
        type:        'fauna',
        image:       '/images/species/trogon-dorado.jpg',
        description: 'Trogón de dosel con plumaje dorado distintivo. Presente en La Carpintera como residente permanente del bosque maduro.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso, 1,500–3,000 msnm',
      },
      {
        id:          'chipe-antifaz',
        name:        'Chipe Antifaz',
        scientific:  'Chlorospingus pileatus',
        type:        'fauna',
        image:       '/images/species/antifaz.jpg',
        description: 'Pequeño chipe de dosel con distintivo patrón facial. Documentado en La Carpintera en bandadas mixtas de aves de altura.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso montano, 1,500–3,000 msnm',
      },
      {
        id:          'tangara-plateada',
        name:        'Tangara Plateada',
        scientific:  'Tangara icterocephala',
        type:        'fauna',
        image:       '/images/species/tangara-plateada.jpg',
        description: 'Tanágara frugívora gregaria de dosel y sotobosque. Importante dispersadora de semillas de plantas nativas en La Carpintera.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso y montano, 1,200–2,400 msnm',
      },
      {
        id:          'chipe-comun',
        name:        'Chipe Común',
        scientific:  'Chlorospingus ophthalmicus',
        type:        'fauna',
        image:       '/images/species/chipe-comun.jpg',
        description: 'Especie endémica de tierras altas de Centroamérica. Documentada como residente permanente en La Carpintera.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso de montaña, 1,500–3,000 msnm',
      },
      {
        id:          'loro-perrito',
        name:        'Loro Perico Perrito',
        scientific:  'Touit costaricensis',
        type:        'fauna',
        image:       '/images/species/loro-perrito.jpg',
        description: 'Loro pequeño endémico de altitud. Documentado en La Carpintera alimentándose en árboles frutales nativos del bosque.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso montano, 1,500–2,500 msnm',
      },
      {
        id:          'colibri-rabirrufo',
        name:        'Colibrí Rabirrufo',
        scientific:  'Amazilia tzacatl',
        type:        'fauna',
        image:       '/images/species/rabirrufo.jpg',
        description: 'Colibrí activo y territorial del sotobosque. Polinizador clave de flores de altura en La Carpintera.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso, 1,500–3,000 msnm',
      },
      {
        id:          'atlapete-matorrales',
        name:        'Atlapete de Matorrales',
        scientific:  'Atlapetes albinucha',
        type:        'fauna',
        image:       '/images/species/atlapete-matorrales.jpg',
        description: 'Especie de sotobosque del bosque montano. Documentada en La Carpintera en matorrales de baja densidad y bordes de bosque.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano abierto, 1,500–2,800 msnm',
      },
      {
        id:          'cucarachero-comun',
        name:        'Cucarachero Común',
        scientific:  'Troglodytes aedon',
        type:        'fauna',
        image:       '/images/species/cucarachero-comun.jpg',
        description: 'Ave pequeña y territorial conocida por su canto fuerte. Presente en La Carpintera en bordes de bosque y áreas abiertas.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano y matorrales, 500–2,500 msnm',
      },
      {
        id:          'azuleja',
        name:        'Azuleja',
        scientific:  'Thraupis episcopus',
        type:        'fauna',
        image:       '/images/species/azuleja.jpg',
        description: 'Tanágara azul brillante y visible. Común en dosel y sotobosque de La Carpintera.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano, 500–2,500 msnm',
      },
      {
        id:          'elaenia-copetona',
        name:        'Elaenia Copetona',
        scientific:  'Elaenia flavogaster',
        type:        'fauna',
        image:       '/images/species/elaenia-copetona.jpg',
        description: 'Atrapamoscas pequeño del dosel. Documentado en La Carpintera como residente de la zona de altura.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano, 1,200–2,500 msnm',
      },
      {
        id:          'gavilán-caminero',
        name:        'Gavilán Caminero',
        scientific:  'Rupornis magnirostris',
        type:        'fauna',
        image:       '/images/species/gavilán-caminero.jpg',
        description: 'Rapaz pequeña y activa cazadora de reptiles y pequeños mamíferos. Presente en bordes y claros de La Carpintera.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano abierto, 500–2,500 msnm',
      },
      {
        id:          'chorlo-collares',
        name:        'Chorlo Collares',
        scientific:  'Charadrius vociferus',
        type:        'fauna',
        image:       '/images/species/chorlo-collares.jpg',
        description: 'Chorlo territorial y ruidoso. Documentado en áreas abiertas de La Carpintera.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Áreas abiertas y bordes de bosque, 0–2,500 msnm',
      },
      {
        id:          'colibri-azul',
        name:        'Colibrí Azul',
        scientific:  'Amazilia saucerrottei',
        type:        'fauna',
        image:       '/images/species/colibri-azul.jpg',
        description: 'Colibrí pequeño de color azul metálico. Visitante del sotobosque de La Carpintera alimentándose de flores nativas.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano, 1,000–2,500 msnm',
      },
      {
        id:          'perezoso-dos-dedos-carpintera',
        name:        'Oso Perezoso de Dos Dedos',
        scientific:  'Choloepus hoffmanni',
        type:        'fauna',
        image:       '/images/species/perezoso-dos-dedos.jpg',
        description: 'Habitante emblemático documentado en La Carpintera. Presente en los robles y helechos arborescentes del bosque nuboso. Su presencia confirma la madurez del ecosistema.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso montano, canopeo alto, 1,400–2,400 msnm',
      },
      {
        id:          'puma-carpintera',
        name:        'Puma',
        scientific:  'Puma concolor',
        type:        'fauna',
        image:       '/images/species/puma.jpg',
        description: 'Felino de montaña documentado en La Carpintera. Parte vital del corredor biológico. Su presencia confirma la madurez del ecosistema y la ausencia de presión de caza.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano denso, 1,200–3,000 msnm',
      },
      {
        id:          'orquidea-endemica-carpintera',
        name:        'Orquídea Endémica',
        scientific:  'Orchidaceae (sp. endémica de La Carpintera)',
        type:        'flora',
        image:       '/images/species/orquidea-endemica.jpg',
        description: 'Orquídea endémica documentada en La Carpintera. Floración restringida a las condiciones específicas del bosque muy húmedo montano bajo. Epífita en dosel y sotobosque nuboso.',
        status:      'En evaluación — Zona Protectora',
        habitat:     'Epífita en dosel y sotobosque nuboso, 1,500–2,100 msnm',
      },
      {
        id:          'helecho-arborescente',
        name:        'Helecho Arborescente',
        scientific:  'Sphaeropteris (sp.)',
        type:        'flora',
        image:       '/images/species/helecho-arborescente.jpg',
        description: 'Helecho arborescente documentado en La Carpintera. Componente crucial del sotobosque del bosque nuboso. Proporciona microhábitat para epífitas y fauna.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Sotobosque de bosque nuboso montano, 1,500–2,500 msnm',
      },
      {
        id:          'roble-blanco-carpintera',
        name:        'Roble Blanco',
        scientific:  'Quercus spp.',
        type:        'flora',
        image:       '/images/species/roble-blanco.jpg',
        description: 'Árbol dominante del dosel documentado en La Carpintera. Especie clave en zona de alta carga hídrica. Sostiene la biodiversidad de insectos, epífitas y aves del bosque nuboso.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso montano, 1,500–3,000 msnm',
      },
    ],

    // ── Historia / Memoria ─────────────────────────────────────────────────
    timeline: [
      {
        year:        '~1000 a.C.',
        title:       'Rutas Huetar',
        description: 'El pueblo Huetar, habitantes del Valle Central, utilizaba las laderas de La Carpintera como ruta comercial y espiritual entre el Caribe y el Pacífico.',
      },
      {
        year:        'Siglo XIX',
        title:       'Herencia Familiar',
        description: 'La finca pasa a manos de una familia que la dedicará durante generaciones a la ganadería de engorde tradicional, compactando el suelo y reduciendo la cobertura forestal.',
      },
      {
        year:        '1990-2000',
        title:       'Reconocimiento SINAC',
        description: 'Los Cerros de La Carpintera son declarados Zona Protectora oficial bajo SINAC/MINAE. Se aprueba el Plan General de Manejo para conservación de agua y biodiversidad.',
      },
      {
        year:        '2015-2020',
        title:       'Transformación Consciente',
        description: '"Para Siempre Amigos de La Carpintera" adquiere la finca y detiene la ganadería. Inicia la fase de restauración ecológica, instalación de energía solar y rescate hídrico.',
      },
      {
        year:        '2022-2025',
        title:       'Infraestructura Soberana',
        description: 'Instalación de paneles solares, Starlink y consolidación del sistema hídrico propio. La finca opera con huella de carbono mínima, en pleno cumplimiento del PGM SINAC.',
      },
      {
        year:        'Hoy',
        title:       'Custodia VIRTUOSO',
        description: 'Un ecosistema maduro y listo para su siguiente fase. La propietaria ofrece acompañar la transición y custodia durante la instalación del nuevo plan maestro.',
      },
    ],

    // ── Prosperidad ────────────────────────────────────────────────────────
    prosperity: {
      description:
        'La Carpintera es un ecosistema de bosque nuboso en proceso activo de restauración — transformado de ganadería erosiva a santuario vivo en menos de una década. Su adquisición implica asumir la custodia de un corredor biológico irreemplazable a las puertas de la Gran Área Metropolitana. No es una inversión. Es un compromiso con la tierra.',
      indicators: [
        { value: '21.9',   unit: 'ha',            label: 'Bosque protegido',   note: 'Zona Protectora SINAC/MINAE — uso estrictamente regulado por el PGM' },
        { value: '250+',   unit: 'especies',       label: 'Aves registradas',   note: 'Lista eBird L854298 · presencia confirmada de Quetzal y Puma' },
        { value: '2',      unit: 'nacientes',      label: 'Agua propia',        note: 'Permisos MINAE activos · agua de montaña sin tratamiento químico' },
        { value: '~10',    unit: 'años',           label: 'Restauración',       note: 'Ganadería detenida desde 2015 — bosque en recuperación activa' },
        { value: '0',      unit: 'proyectos',      label: 'Sin urbanizar',      note: 'Zona no urbanizable de forma permanente · ZPCC protege el corredor' },
      ],
      issues: [
        {
          problem:  'Presión de urbanización en los alrededores de Tres Ríos',
          solution: 'La Zona Protectora ZPCC garantiza que esta tierra jamás será urbanizada — su valor reside en ser un refugio irreplicable a minutos de la GAM.',
        },
        {
          problem:  'Dependencia de la red eléctrica nacional',
          solution: 'La finca ya opera con soberanía energética total mediante paneles solares: cero factura eléctrica, cero dependencia de ICE.',
        },
        {
          problem:  'Pérdida de bosque nuboso en el Gran Área Metropolitana',
          solution: 'La gestión regenerativa activa de La Carpintera ha recuperado cobertura forestal desde la ganadería, convirtiéndola en pulmón verde de la GAM.',
        },
      ],
    },

    // ── Sabiduría Ancestral ────────────────────────────────────────────────
    ancestral: {
      title:       'Memoria Huetar y Herencia Cafetalera',
      description: 'El pueblo Huetar, primeros habitantes del Valle Central, dejaron en los Cerros de La Carpintera rutas, mitos y una comprensión profunda del ciclo hídrico de la montaña. La cultura cafetalera posterior fusionó esta sabiduría con técnicas de cultivo de altura que aún se practican en las comunidades vecinas de San Rafael.',
      architecture: [
        {
          name:        'Infraestructura de Soberanía',
          description: 'Los actuales custodios instalaron paneles solares y conectividad Starlink renunciando a la red ICE convencional. Una decisión arquitectónica que refleja los valores de autonomía y mínima huella de carbono.',
          image:       '/images/carpintera/f1.jpg',
        },
        {
          name:        'El Bosque como Arquitectura',
          description: 'El Plan General de Manejo SINAC reconoce el bosque nuboso como el activo principal. Los senderos, las terrazas naturales y las nacientes son la infraestructura que la tierra construyó por siglos.',
          image:       '/images/carpintera/prop-3.png',
        },
      ],
    },

    // ── Pulso de la Comunidad ──────────────────────────────────────────────
    communityPulse: {
      lifestyle: [
        'Despertar a 1,500 msnm — la neblina abraza el bosque de robles y el frío es el primer saludo del día',
        '250+ especies de aves registradas — el coro del amanecer en La Carpintera es una sinfonía sin partitura',
        'A 22 km de San José, 12 km de Cartago: lo mejor de dos mundos en menos de 45 minutos',
        'Temperatura de 15 a 21°C todo el año — sin aire acondicionado, sin calefacción',
        'Internet Starlink y energía solar: conectividad global con soberanía operativa total',
        'San Rafael de La Unión a 2 km — comunidades cafetaleras con siglos de tradición',
        'Senderos privados en bosque nuboso: la biodiversidad de un Área de Conservación como jardín trasero',
      ],
      activities: [
        { name: 'Avistamiento de Quetzales', icon: '🦜', level: 'Experto' },
        { name: 'Senderismo de Montaña',     icon: '⛰️', level: 'Moderado' },
        { name: 'Fotografía de Neblina',     icon: '📸', level: 'Todos' },
        { name: 'Yoga al Amanecer',          icon: '🧘', level: 'Todos' },
        { name: 'Tour de Flora Endémica',    icon: '🌺', level: 'Familiar' },
        { name: 'Trabajo Remoto en Altura',  icon: '💻', level: 'Profesionales' },
      ],
    },

    // ── Índice Virtuoso ────────────────────────────────────────────────────
    // Basado directamente en los datos de la ficha técnica de Maribel (ZPCC)
    virtuosoIndex: {
      amor:        88,
      salud:       95,
      sabiduria:   90,
      prosperidad: 87,
      descriptions: {
        amor: 'Custodia consciente que detiene la erosión. Paneles solares renunciando a la red eléctrica. Compromiso ético con la regeneración del bosque nuboso.',
        salud: '250+ especies de aves. Aire puro, agua de naciente, 15-21°C natural. Bosque nuboso que restaura el cuerpo sin intervención artificial.',
        sabiduria: 'Plan de Manejo SINAC/MINAE aprobado. Gestión inteligente documentada y protegida legalmente. Garantía de preservación intergeneracional.',
        prosperidad: 'Energía solar + agua propia = $0 utilidades. Exención fiscal permanente. Plusvalía en zona protegida a 22 km de San José.',
      },
    },

    // ── Legado (fallback — per-finca data in fincas[]) ─────────────────────
    legacy: {
      title:         'Un Ciclo de Vida que Se Completa',
      custodianName: '',
      message:       'Dos fincas que comparten una visión: conservar el bosque nuboso de La Carpintera para las generaciones que vienen. Este es el tipo de legado que trasciende generaciones.',
      videoUrl: '',
    },
  },
]
