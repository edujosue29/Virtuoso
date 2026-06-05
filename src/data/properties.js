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
    heroImage: '/images/nature/NPZ.jpg',
    image:   '/images/pz/PZ1.jpg',
    gallery: [
      '/images/pz/pz-1.jpg',
      '/images/pz/pz-3.jpg',
      '/images/pz/pz-5.jpg',
      '/images/pz/pz-7.jpg',
      '/images/pz/pz-9.jpg',
      '/images/pz/pz-11.jpg',
      '/images/pz/pz-14.jpg',
      '/images/pz/IMG_2943.jpg',
      '/images/pz/IMG_2947.jpg',
      '/images/pz/IMG_2966.jpg',
      '/images/pz/IMG_2984.jpg',
      '/images/pz/IMG_3002.jpg',
      '/images/pz/IMG_3006.jpg',
    ],
    videoSrc:  '', // ← Pendiente: agregar video drone cuando esté disponible

    // ── Ubicación ──────────────────────────────────────────────────────────
    coordinates: {
      lat: 9.3437,
      lng: -83.6882,
      display: '9°20\'37" N  83°41\'17" O',
    },
    location: 'División, Pérez Zeledón, San José, Costa Rica',
    energy:   ['agua', 'bosque', 'agricultura', 'ancestral'],

    // ── Ficha técnica ──────────────────────────────────────────────────────
    techSheet: '/ficha-tecnica-placeholder.pdf',
    technical: {
      area:          '594.9 hectáreas (5,948,615 m²)',
      areaDesglose:  'Bosque primario y secundario (mayoría) · Reforestación pino y ciprés ~15% · Agropecuario (moras y aguacate) ~5%',
      zoning:        'Corredor Biológico Área de Conservación La Amistad Pacífico Sur — Patrimonio Mundial UNESCO',
      water:         'Nacientes propias con convenio de abastecimiento a comunidades vecinas + fuentes del Río División',
      elevation:     'Variable — zona sur, entre 500 y 2,000 msnm según sector',
      access:        'Acceso directo desde Ruta Nacional 2 (Interamericana Sur) — carretera asfaltada',
      titleStatus:   'Plena propiedad, inscrito en Registro Nacional de Costa Rica',
      folio:         '9451464 (Virtus Realty CR)',
      value:         'USD $4,950,400',
      restrictions:  'Corredor Biológico — uso regulado por MINAE/SINAC conforme a vocación forestal e hídrica',
      infrastructure: 'Casa de cuidador · 3 habitaciones · 2 baños · 2 estacionamientos · 5.5 km de caminos internos de lastre · Bodega',
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
        description: 'Ave sagrada de Mesoamérica. Documentada en El Robledal entre 500–2,000 msnm según sector. Su presencia confirma la madurez del bosque con aguacatillos silvestres abundantes.',
        status:      'Vulnerable (UICN)',
        habitat:     'Bosque nuboso y premontano, 800–3,000 msnm',
      },
      {
        id:          'jilguero',
        name:        'Jilguero / Solitario Carinegro',
        scientific:  'Myadestes melanops',
        type:        'fauna',
        image:       '/images/species/jilguero.jpg',
        description: 'Especie endémica de las tierras altas de Costa Rica y Panamá. Sumamente cotizada por observadores de aves por su canto metálico complejo. Indicadora de bosque maduro.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso de altura, 1,500–2,400 msnm',
      },
      {
        id:          'colibri-montanes',
        name:        'Colibrí Montañés Garganta Morada',
        scientific:  'Lampornis calolaemus',
        type:        'fauna',
        image:       '/images/species/colibri-montanes.jpg',
        description: 'Polinizador clave en los estratos medio y bajo del bosque. Residente de altura adaptado a las condiciones frías de El Robledal. Especialista en flores de montaña.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso, 1,400–3,000 msnm',
      },
      {
        id:          'colibri-magnifico',
        name:        'Colibrí Magnífico',
        scientific:  'Eugenes fulgens',
        type:        'fauna',
        image:       '/images/species/colibri-magnifico.jpg',
        description: 'Uno de los colibríes más grandes de la zona, atraído por la floración de epífitas en el dosel. Visitante estacional importante para la polinización de altura.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso y premontano, 1,200–2,600 msnm',
      },
      {
        id:          'colibri-centelleante',
        name:        'Colibrí Centelleante',
        scientific:  'Selasphorus scintilla',
        type:        'fauna',
        image:       '/images/species/colibri-centelleante.jpg',
        description: 'Endémico regional y uno de los colibríes más pequeños del mundo. Adaptado a las flores de sotobosque del bosque muy húmedo tropical de El Robledal.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso denso, 1,500–2,200 msnm',
      },
      {
        id:          'trogon-collarejo',
        name:        'Trogon Collarejo',
        scientific:  'Trogon collaris',
        type:        'fauna',
        image:       '/images/species/trogon-collarejo.jpg',
        description: 'Ave de sotobosque denso que se alimenta de insectos y frutos pequeños. Residente del bosque tropical montano. Indicador de cobertura forestal intacta.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso y montano, 1,400–2,600 msnm',
      },
      {
        id:          'tangara-dorada',
        name:        'Tangara Dorada',
        scientific:  'Tangara icterocephala',
        type:        'fauna',
        image:       '/images/species/tangara-dorada.jpg',
        description: 'Resalta por su plumaje amarillo brillante. Usualmente vista en bandadas mixtas recorriendo el dosel del bosque. Indicadora de bosque húmedo de altura en buen estado.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano y nuboso, 1,500–2,600 msnm',
      },
      {
        id:          'clorofonia',
        name:        'Clorofonia Cejiazul',
        scientific:  'Chlorophonia callophrys',
        type:        'fauna',
        image:       '/images/species/clorofonia.jpg',
        description: 'Conocida por su espectacular plumaje verde y azul brillante. Se alimenta casi exclusivamente de muérdago en las copas de los árboles del dosel superior.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Dosel de bosque nuboso, 1,500–2,600 msnm',
      },
      {
        id:          'perico-frentirrojo',
        name:        'Perico Frentirrojo',
        scientific:  'Psittacara finschi',
        type:        'fauna',
        image:       '/images/species/perico-frentirrojo.jpg',
        description: 'Especie históricamente común en la zona. Muy fácil de observar o escuchar en el corredor biológico La Amistad. Gregario, usualmente en bandadas ruidosas.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano abierto y bordes, 1,200–2,400 msnm',
      },
      {
        id:          'gavilan-colifajeado',
        name:        'Gavilán Colifajeado',
        scientific:  'Buteo albonotatus',
        type:        'fauna',
        image:       '/images/species/gavilan-colifajeado.jpg',
        description: 'Ave rapaz de altura que patrulla los claros y bordes del corredor en búsqueda de presas pequeñas. Su presencia indica salud del ecosistema de montaña.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque abierto y zonas de transición, 1,200–3,000 msnm',
      },
      {
        id:          'carpintero-hoffmann',
        name:        'Carpintero de Hoffmann',
        scientific:  'Melanerpes hoffmannii',
        type:        'fauna',
        image:       '/images/species/carpintero-hoffmann.jpg',
        description: 'Carpintero residente que habita el sotobosque y dosel medio. Esencial en la creación de cavidades que otras especies usan para nidación.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano y nuboso, 1,200–2,600 msnm',
      },
      {
        id:          'yiguirro',
        name:        'Yiguirro / Mirlo Pardo',
        scientific:  'Turdus grayi',
        type:        'fauna',
        image:       '/images/species/yiguirro.jpg',
        description: 'Ave nacional de Costa Rica. Presente en El Robledal como indicador de bosque secundario y zonas en regeneración. Su canto es característico del amanecer tropical.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque secundario y áreas cultivadas, hasta 2,500 msnm',
      },
      {
        id:          'tucancillo',
        name:        'Tucancillo Verde',
        scientific:  'Aulacorhynchus prasinus',
        type:        'fauna',
        image:       '/images/species/tucancillo-verde.jpg',
        description: 'Tucán de montaña residente de altura. Vital para la dispersión de semillas de árboles nativos y la regeneración forestal en el corredor biológico UNESCO.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso y bordes de bosque montano, 1,400–2,400 msnm',
      },
      {
        id:          'puma',
        name:        'Puma',
        scientific:  'Puma concolor',
        type:        'fauna',
        image:       '/images/species/puma.jpg',
        description: 'Felino de montaña documentado en el corredor La Amistad. Su presencia confirma la madurez del ecosistema y la ausencia de presión de caza.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano denso, 1,200–3,000 msnm',
      },
      {
        id:          'roble',
        name:        'Roble Blanco',
        scientific:  'Quercus costaricensis',
        type:        'flora',
        image:       '/images/species/roble-blanco.jpg',
        description: 'Especie dominante del bosque del Corredor La Amistad. Presente en zona de alta carga hídrica, sus raíces alimentan las nacientes de El Robledal.',
        status:      'Casi Amenazado (UICN) — Protegido Ley 7575',
        habitat:     'Bosque montano húmedo, 1,200–3,000 msnm',
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
      architecture: [
        {
          name:        'Rancho Boruca Tradicional',
          description: 'Estructura de madera local y techo de palma tejida. Diseñada para la ventilación cruzada natural y la vida comunitaria en el trópico húmedo.',
          image:       '/images/pz/pz-14.jpg',
        },
        {
          name:        'Arquitectura de la Finca',
          description: 'Las estructuras existentes de El Robledal siguen los principios de construcción funcional-rural: adaptadas al clima y el entorno, sin imposición sobre el paisaje.',
          image:       '/images/pz/IMG_3006.jpg',
        },
      ],
    },

    // ── Pulso de la Comunidad ──────────────────────────────────────────────
    communityPulse: {
      lifestyle: [
        'Amanecer con el coro del bosque primario — más de 300 especies de aves registradas en el corredor',
        'Cosecha de moras y aguacate antes del desayuno — producción orgánica activa',
        'Caminatas en los 5.5 km de senderos internos entre bosque primario',
        'Senderismo hasta las nacientes: agua cristalina directamente de la montaña',
        'Comunidades Boruca a minutos — artesanía en balsa, Festival de los Diablitos',
        'Cielos estrellados sin contaminación lumínica: la Vía Láctea es un espectáculo nocturno',
        'Acceso inmediato a la Ruta Interamericana — conexión con el mundo sin perder el santuario',
      ],
      activities: [
        { name: 'Observación de Aves',     icon: '🦜', level: 'Experto y familias' },
        { name: 'Senderismo de Bosque',    icon: '🥾', level: 'Moderado-Exigente' },
        { name: 'Baño en Ríos y Pozas',    icon: '🏊', level: 'Todos los niveles' },
        { name: 'Agroturismo Orgánico',    icon: '🌾', level: 'Familiar' },
        { name: 'Meditación en Naturaleza',icon: '🧘', level: 'Todos' },
        { name: 'Fotografía de Naturaleza',icon: '📸', level: 'Todos' },
      ],
    },

    // ── Índice Virtuoso ────────────────────────────────────────────────────
    virtuosoIndex: {
      amor:        87,
      salud:       92,
      sabiduria:   85,
      prosperidad: 88,
      descriptions: {
        amor:
          'El Robledal puntúa alto en Amor porque sus nacientes son compartidas con las comunidades vecinas bajo convenio. La tierra no solo sostiene su propio ecosistema: alimenta de agua a quienes la rodean. Eso es amor en acción ecológica.',
        salud:
          'Bosque primario que produce oxígeno en abundancia, agua de naciente sin tratamiento, aire libre de contaminación y la vibración de un Corredor Biológico Patrimonio UNESCO. Vivir en El Robledal es una práctica de salud integral que pocas tierras en el mundo pueden ofrecer.',
        sabiduria:
          'Dentro del Corredor Biológico La Amistad — uno de los más estudiados y protegidos de América Latina. Décadas de investigación científica, historia Boruca milenaria y un marco legal de conservación de clase mundial. Esta tierra ha sido reconocida por la humanidad entera como un bien a preservar.',
        prosperidad:
          'USD $4,950,400 con acceso directo desde la Interamericana, producción activa de moras y aguacate, potencial de ecoturismo de alto valor y elegibilidad para Pago por Servicios Ambientales (PSA) de FONAFIFO. El corredor UNESCO le otorga una plusvalía sostenida e irreplicable.',
      },
    },

    // ── Legado ─────────────────────────────────────────────────────────────
    legacy: {
      title:         'El Llamado del Corredor',
      custodianName: 'Custodio Actual — Por revelar',
      message:
        'El Robledal no es una propiedad. Es un fragmento del Patrimonio de la Humanidad reconocido por la UNESCO. Quien tome custodia de estas casi 600 hectáreas, asume la responsabilidad sagrada de ser guardián de un ecosistema que el mundo entero ha decidido proteger. Este es el tipo de legado que trasciende generaciones.',
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
    videoSrc: '/videos/carpintera.mp4',

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
          description: 'Finca 1 combina conectividad logística privilegiada con potencial de desarrollo real: 60% del terreno en zonas abiertas permite planificar infraestructura hasta un 10% del área dentro del marco del Plan General de Manejo SINAC.',
          indicators: [
            { label: 'Superficie habilitada',  note: '60% de potrero y tacotales disponibles para planificar infraestructura de bajo impacto sin afectar el bosque maduro.' },
            { label: 'Potencial constructivo', note: 'Hasta el 10% del área (~1 ha) habilitado legalmente para edificaciones: centros de capacitación, residencias, laboratorios.' },
            { label: 'Infraestructura lista',  note: 'Dos unidades habitacionales, bodegas, sistema solar y Starlink instalados. Concesión de agua tramitada y activa.' },
            { label: 'Eficiencia fiscal',      note: 'Exonerado de Impuesto de Bienes Inmuebles (Ley Forestal 7575). Elegible para Pago por Servicios Ambientales FONAFIFO.' },
            { label: 'Blindaje territorial',   note: 'Colinda con 4 ha de la Municipalidad de La Unión, reserva ASOMOCICU y áreas Scouts. Cinturón de protección triple.' },
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
          description: 'Finca 2 es una plataforma operativa "llave en mano" con la mayor densidad boscosa del corredor. Su alta cobertura forestal, pureza ambiental de 12 años y ausencia total de cargas legales la convierten en el activo de conservación más eficiente del sector.',
          indicators: [
            { label: 'Cobertura forestal',  note: '85-90% bosque nuboso denso en 2.78 ha. Sumidero de carbono activo y corredor biológico de alta densidad.' },
            { label: 'Pureza ambiental',    note: '12 años libre de agroquímicos. Apicultura activa, vivero orgánico y frutales como indicadores biológicos de calidad excepcional.' },
            { label: 'Llave en mano',       note: 'Casa operativa, paneles solares, Starlink y estanques de fauna instalados. Sin inversión inicial requerida en infraestructura base.' },
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
        description: 'Ave sagrada de Mesoamérica. Presente estacionalmente en La Carpintera entre 1,550–1,800 msnm. Su presencia confirma la madurez del bosque nuboso con aguacatillos silvestres abundantes.',
        status:      'Vulnerable (UICN)',
        habitat:     'Bosque nuboso, 1,200–3,000 msnm',
      },
      {
        id:          'jilguero',
        name:        'Jilguero / Solitario Carinegro',
        scientific:  'Myadestes melanops',
        type:        'fauna',
        image:       '/images/species/jilguero.jpg',
        description: 'Especie endémica de las tierras altas de Costa Rica y Panamá. Sumamente cotizada por observadores de aves por la complejidad y belleza de su canto metálico. Indicadora de bosque maduro.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso de altura, 1,500–2,400 msnm',
      },
      {
        id:          'colibri-montanes',
        name:        'Colibrí Montañés Garganta Morada',
        scientific:  'Lampornis calolaemus',
        type:        'fauna',
        image:       '/images/species/colibri-montanes.jpg',
        description: 'Polinizador clave en los estratos medio y bajo del bosque nuboso. Residente de altura adaptado a las condiciones frías de La Carpintera. Especialista en flores de montaña.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso, 1,400–3,000 msnm',
      },
      {
        id:          'colibri-magnifico',
        name:        'Colibrí Magnífico',
        scientific:  'Eugenes fulgens',
        type:        'fauna',
        image:       '/images/species/colibri-magnifico.jpg',
        description: 'Uno de los colibríes más grandes de la zona, atraído por la floración de epífitas en el dosel del bosque nuboso. Visitante estacional importante para la polinización.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso y premontano, 1,200–2,600 msnm',
      },
      {
        id:          'colibri-centelleante',
        name:        'Colibrí Centelleante',
        scientific:  'Selasphorus scintilla',
        type:        'fauna',
        image:       '/images/species/colibri-centelleante.jpg',
        description: 'Endémico regional y uno de los colibríes más pequeños del mundo. Adaptado a las flores de sotobosque del bosque muy húmedo montano bajo de La Carpintera.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso denso, 1,500–2,200 msnm',
      },
      {
        id:          'trogon-collarejo',
        name:        'Trogon Collarejo',
        scientific:  'Trogon collaris',
        type:        'fauna',
        image:       '/images/species/trogon-collarejo.jpg',
        description: 'Ave de sotobosque denso que se alimenta de insectos y frutos pequeños. Residente del bosque nuboso montano. Indicador de cobertura forestal intacta.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso y montano, 1,400–2,600 msnm',
      },
      {
        id:          'tangara-dorada',
        name:        'Tangara Dorada',
        scientific:  'Tangara icterocephala',
        type:        'fauna',
        image:       '/images/species/tangara-dorada.jpg',
        description: 'Resalta por su plumaje amarillo brillante. Usualmente vista en bandadas mixtas recorriendo el dosel del bosque. Indicadora de bosque húmedo de altura en buen estado.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano y nuboso, 1,500–2,600 msnm',
      },
      {
        id:          'clorofonia',
        name:        'Clorofonia Cejiazul',
        scientific:  'Chlorophonia callophrys',
        type:        'fauna',
        image:       '/images/species/clorofonia.jpg',
        description: 'Conocida localmente por su espectacular plumaje verde y azul brillante. Se alimenta casi exclusivamente de muérdago en las copas de los árboles del dosel superior.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Dosel de bosque nuboso, 1,500–2,600 msnm',
      },
      {
        id:          'perico-frentirrojo',
        name:        'Perico Frentirrojo',
        scientific:  'Psittacara finschi',
        type:        'fauna',
        image:       '/images/species/perico-frentirrojo.jpg',
        description: 'Especie históricamente común en la zona alta. Muy fácil de observar o escuchar cruzando el corredor biológico. Gregario, usualmente en bandadas ruidosas.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano abierto y bordes, 1,200–2,400 msnm',
      },
      {
        id:          'gavilan-colifajeado',
        name:        'Gavilán Colifajeado',
        scientific:  'Buteo albonotatus',
        type:        'fauna',
        image:       '/images/species/gavilan-colifajeado.jpg',
        description: 'Ave rapaz de altura que patrulla los claros y bordes del bosque en búsqueda de presas pequeñas. Su presencia indica salud del ecosistema de montaña.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque abierto y zonas de transición, 1,200–3,000 msnm',
      },
      {
        id:          'carpintero-hoffmann',
        name:        'Carpintero de Hoffmann',
        scientific:  'Melanerpes hoffmannii',
        type:        'fauna',
        image:       '/images/species/carpintero-hoffmann.jpg',
        description: 'Carpintero residente que habita el sotobosque y el dosel medio del bosque nuboso. Esencial en la creación de cavidades que otras especies usan para nidación.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano y nuboso, 1,200–2,600 msnm',
      },
      {
        id:          'yiguirro',
        name:        'Yiguirro / Mirlo Pardo',
        scientific:  'Turdus grayi',
        type:        'fauna',
        image:       '/images/species/yiguirro.jpg',
        description: 'Ave nacional de Costa Rica. Presente en La Carpintera como indicador de bosque secundario y zonas en regeneración. Su canto es característico del amanecer tropical.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque secundario y áreas cultivadas, hasta 2,500 msnm',
      },
      // ── Flora: Especies Dominantes ─────────────────────────────────────────
      {
        id:          'tucancillo',
        name:        'Tucancillo Verde',
        scientific:  'Aulacorhynchus prasinus',
        type:        'fauna',
        image:       '/images/species/tucancillo-verde.jpg',
        description: 'Tucán de montaña residente de altura. Vital para la dispersión de semillas de árboles nativos y la regeneración forestal. Presente en registros de eBird L854298.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso y bordes de bosque montano, 1,400–2,400 msnm',
      },
      {
        id:          'puma',
        name:        'Puma',
        scientific:  'Puma concolor',
        type:        'fauna',
        image:       '/images/species/puma.jpg',
        description: 'Felino de montaña documentado en La Carpintera. Su presencia en el corredor biológico vital de los cerros confirma la madurez del ecosistema y la ausencia de presión cacería.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano denso, 1,200–3,000 msnm',
      },
      {
        id:          'perezoso',
        name:        'Oso Perezoso de Dos Dedos',
        scientific:  'Choloepus hoffmanni',
        type:        'fauna',
        image:       '/images/species/perezoso-dos-dedos.jpg',
        description: 'Habitante emblemático del bosque nuboso de La Carpintera. Presente en los robles y helechos arborescentes. Su documentación en esta elevación es rara en el Valle Central.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso montano, canopeo alto, 1,400–2,400 msnm',
      },
      {
        id:          'roble',
        name:        'Roble Blanco',
        scientific:  'Quercus costaricensis',
        type:        'flora',
        image:       '/images/species/roble-blanco.jpg',
        description: 'Especie dominante del bosque nuboso de La Carpintera. Presente en zona de alta carga hídrica, sus raíces alimentan las nacientes propias de la propiedad.',
        status:      'Casi Amenazado (UICN) — Protegido Ley 7575',
        habitat:     'Bosque montano húmedo, 1,200–3,000 msnm',
      },
      {
        id:          'orquidea',
        name:        'Orquídea Endémica',
        scientific:  'Orchidaceae (sp. endémica)',
        type:        'flora',
        image:       '/images/species/orquidea-endemica.jpg',
        description: 'La Carpintera alberga orquídeas endémicas que solo florecen en las condiciones específicas del bosque muy húmedo montano bajo. Epífitas que dependen del microclima único de 1,550–1,800 msnm.',
        status:      'En evaluación — Zona Protectora',
        habitat:     'Epífita en dosel y sotobosque nuboso, 1,500–2,100 msnm',
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
        amor:
          'Los actuales custodios asumieron un sacrificio financiero para detener décadas de ganadería erosiva y permitir que el bosque nuboso se recupere activamente. Renunciaron a la electricidad del ICE en favor de paneles solares. Ese compromiso ético con la tierra es la definición de amor en acción regenerativa.',
        salud:
          'Bosque nuboso a 1,500–1,800 msnm con 250+ especies de aves. Aire de montaña sin contaminación. Agua de naciente propia con permiso MINAE. Temperatura de 15-21°C sin climatización artificial. Silencio real. La Carpintera ofrece condiciones de restauración humana que ningun spa o resort urbano puede replicar.',
        sabiduria:
          'La propiedad cuenta con Plan General de Manejo aprobado por SINAC/MINAE — el marco más riguroso de gestión inteligente del territorio que existe en Costa Rica. El uso del suelo está documentado, certificado y protegido. Esto no es una restricción: es la garantía de que esta tierra nunca perderá su valor.',
        prosperidad:
          'Alta plusvalía en zona protegida no urbanizable. Ahorro operativo total: energía solar propia + agua de naciente propia = USD $0 en utilities. Exención de Impuesto sobre Bienes Inmuebles (Ley Forestal 7575). Elegible para PSA de FONAFIFO. A 22 km de San José: el retiro de lujo más accesible de Costa Rica.',
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
