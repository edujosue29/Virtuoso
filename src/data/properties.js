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
    image:   '/images/pz/pz-1.jpg',
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
        id:          'danta',
        name:        'Tapir Centroamericano',
        scientific:  'Tapirus bairdii',
        type:        'fauna',
        image:       '/images/nature/getty-images-I3DSUNY61XY-unsplash.jpg',
        description: 'Jardinero mayor del bosque tropical. Dispersor de semillas clave para la regeneración, su presencia en El Robledal confirma la salud del corredor biológico La Amistad.',
        status:      'En Peligro (UICN)',
        habitat:     'Bosque húmedo tropical, riberas y zonas de alta precipitación',
      },
      {
        id:          'jaguar',
        name:        'Jaguar',
        scientific:  'Panthera onca',
        type:        'fauna',
        image:       '/images/nature/getty-images-PZSpZQAtuG4-unsplash.jpg',
        description: 'Guardián supremo del ecosistema. Su territorio en el corredor La Amistad-Osa es uno de los últimos refugios viables para esta especie en Mesoamérica.',
        status:      'Casi Amenazado (UICN)',
        habitat:     'Bosque denso, corredores biológicos amplios',
      },
      {
        id:          'quetzal-pz',
        name:        'Quetzal Resplandeciente',
        scientific:  'Pharomachrus mocinno',
        type:        'fauna',
        image:       '/images/nature/zdenek-machacek-GlGSLLmfO4I-unsplash.jpg',
        description: 'Ave sagrada mesoamericana. Su presencia en las zonas altas de El Robledal es indicador de ecosistemas primarios intactos.',
        status:      'Vulnerable (UICN)',
        habitat:     'Bosque nuboso y premontano, 800–3,000 msnm',
      },
      {
        id:          'heliconia',
        name:        'Heliconia',
        scientific:  'Heliconia wagneriana',
        type:        'flora',
        image:       '/images/nature/natalia-blauth-_mu0vTle47w-unsplash.jpg',
        description: 'Icono del trópico húmedo. Atrae colibríes y mariposas, estructurando la red de polinización del bosque ribereño de El Robledal.',
        status:      'Abundante — especie nativa',
        habitat:     'Riberas y claros de bosque, hasta 1,500 msnm',
      },
      {
        id:          'cedro',
        name:        'Cedro Real',
        scientific:  'Cedrela odorata',
        type:        'flora',
        image:       '/images/nature/casey-horner-4rDCa5hBlCs-unsplash.jpg',
        description: 'Árbol patriarcal del bosque tropical húmedo. Madera preciosa bajo protección forestal; su presencia en El Robledal data de la cobertura primaria original.',
        status:      'Vulnerable (UICN) — protegido Ley Forestal 7575',
        habitat:     'Bosque tropical húmedo de bajura y premontano',
      },
      {
        id:          'rana-ojos-rojos',
        name:        'Rana de Ojos Rojos',
        scientific:  'Agalychnis callidryas',
        type:        'fauna',
        image:       '/images/nature/unsplash-community-rV3I056upS8-unsplash.jpg',
        description: 'Ícono visual del trópico. Bioindicador crítico de la calidad hídrica — su abundancia en El Robledal certifica la pureza de las nacientes propias.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Vegetación ribereña, pozas y quebradas limpias',
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
        { label: 'Potencial Ecoturístico',        value: 90 },
        { label: 'Producción Orgánica Activa',    value: 75 },
        { label: 'Servicios Ambientales (PSA)',   value: 92 },
        { label: 'Plusvalía / Corredor UNESCO',   value: 95 },
        { label: 'Impacto Comunitario',           value: 88 },
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
    image:   '/images/carpintera/foto-1.jpg',
    gallery: [
      '/images/carpintera/foto-1.jpg',
      '/images/carpintera/foto-2.jpg',
      '/images/carpintera/foto-3.jpg',
      '/images/carpintera/foto-4.jpg',
      '/images/carpintera/foto-5.jpg',
      '/images/carpintera/IMG_3024.jpg',
      '/images/carpintera/IMG_3028.jpg',
      '/images/carpintera/IMG_3031.jpg',
      '/images/carpintera/IMG_3036.jpg',
      '/images/carpintera/IMG_3039.jpg',
      '/images/carpintera/IMG_3043.jpg',
    ],
    videoSrc: '/videos/carpintera.mp4',

    // ── Imágenes por sección (banners editoriales) ─────────────────────────
    sectionImages: {
      technical:  '/images/carpintera/IMG_3024.jpg',
      flora:      '/images/nature/zdenek-machacek-HKUXTajl8Is-unsplash.jpg',
      memory:     '/images/nature/a-chosen-soul-SxQ9fZq3uQ0-unsplash.jpg',
      prosperity: '/images/carpintera/IMG_3028.jpg',
      ancestral:  '/images/nature/casey-horner-4rDCa5hBlCs-unsplash.jpg',
      pulse:      '/images/carpintera/IMG_3036.jpg',
      index:      '/images/nature/ales-krivec-h7bNiN2AzNM-unsplash.jpg',
      legacy:     '/images/carpintera/IMG_3043.jpg',
      gallery:    '/images/carpintera/foto-2.jpg',
    },

    // ── Ubicación ──────────────────────────────────────────────────────────
    coordinates: {
      lat: 9.8972,
      lng: -83.9778,
      display: '9°53\'50" N  83°58\'40" O',
    },
    location: 'San Rafael, La Unión, Cartago, Costa Rica',
    energy:   ['bosque', 'montaña', 'comunidad', 'agua'],

    // ── Ficha técnica ──────────────────────────────────────────────────────
    techSheet: '/ficha-tecnica-placeholder.pdf',
    technical: {
      area:          '~21.9 ha totales (Finca 1: 109,615.34 m² + Finca 2: 109,615.34 m²)',
      areaDesglose:  'Finca 1 (n.87513): 10.96 ha · Finca 2 (n.134469): 10.96 ha — Agroturismo, reforestación y vivienda',
      zoning:        'Zona Protectora Cerros de la Carpintera (ZPCC) — SINAC / Área de Conservación Cordillera Volcánica Central (ACCVC)',
      water:         'Naciente propia (sin registrar, Expediente 7479-A MINAE) + Permiso de agua R-0263-25 / R-537-2017',
      elevation:     'Finca 1: ~1,500 msnm · Finca 2: 1,600–1,800 msnm',
      access:        'Asfaltado hasta 400 m antes del portón · Últimos 400 m lastre (4×4 recomendado)',
      titleStatus:   'Plena propiedad inscrita en Registro Nacional · Hipoteca en 2° grado (saldo por confirmar)',
      folio:         'Finca 1: Folio Real 87613-000, Plano C-1845182-2015 · Finca 2: Folio Real 134469',
      value:         'Consultar — activo de plusvalía estratégica en zona protegida no urbanizable',
      restrictions:  'Plan General de Manejo ZPCC: uso estrictamente regulado por MINAE/SINAC para conservación de agua y biodiversidad',
      infrastructure: 'Residencia principal · 2 cabinas ecoturísticas · Sistema solar fotovoltaico · Starlink · Senderos marcados',
      soilType:      'Andisoles volcánicos — alta fertilidad, alta retención hídrica, relieve quebrado e irregular',
      builtArea:     'Residencia + cabinas (m² por confirmar)',
      yearBuilt:     'Herencia familiar — ganadería histórica, transformado a ecoturismo desde adquisición actual',
      agent:         'Maribel · Para Siempre Amigos de La Carpintera',
    },

    // ── Flora & Fauna ──────────────────────────────────────────────────────
    species: [
      {
        id:          'quetzal-carpintera',
        name:        'Quetzal Resplandeciente',
        scientific:  'Pharomachrus mocinno',
        type:        'fauna',
        image:       '/images/nature/zdenek-machacek-GlGSLLmfO4I-unsplash.jpg',
        description: 'Ave sagrada presente en La Carpintera. Una de las 250+ especies registradas en eBird (L854298). Su presencia confirma la integridad del bosque nuboso montano.',
        status:      'Vulnerable (UICN)',
        habitat:     'Bosque nuboso, 1,200–3,000 msnm',
      },
      {
        id:          'puma',
        name:        'Puma',
        scientific:  'Puma concolor',
        type:        'fauna',
        image:       '/images/nature/getty-images-Kki-9qA8nTs-unsplash.jpg',
        description: 'Felino de montaña documentado en La Carpintera. Su presencia en el corredor biológico vital de los cerros confirma la madurez del ecosistema.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque montano, 1,000–3,000 msnm',
      },
      {
        id:          'perezoso',
        name:        'Oso Perezoso de Dos Dedos',
        scientific:  'Choloepus hoffmanni',
        type:        'fauna',
        image:       '/images/nature/getty-images-Ld_tvAfU37E-unsplash.jpg',
        description: 'Habitante emblemático del bosque nuboso de La Carpintera. Presente en los robles y helechos arborescentes de la propiedad.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso montano, canopeo alto',
      },
      {
        id:          'tucancillo',
        name:        'Tucancillo Verde',
        scientific:  'Aulacorhynchus prasinus',
        type:        'fauna',
        image:       '/images/nature/zdenek-machacek-UI2ZWYwTn8U-unsplash.jpg',
        description: 'Tucán de montaña presente en los registros de eBird de La Carpintera. Dispersor de semillas esencial para la dinámica del bosque nuboso.',
        status:      'Preocupación Menor (UICN)',
        habitat:     'Bosque nuboso y bordes de bosque montano',
      },
      {
        id:          'orquidea',
        name:        'Orquídea Endémica',
        scientific:  'Orchidaceae (sp. endémica)',
        type:        'flora',
        image:       '/images/nature/natalia-blauth-BcbuyNGC1CM-unsplash.jpg',
        description: 'La Carpintera alberga orquídeas endémicas que solo florecen en las condiciones específicas del bosque muy húmedo montano bajo. Indicadoras de la unicidad del ecosistema.',
        status:      'En evaluación — Zona Protectora',
        habitat:     'Epífita en bosque nuboso, 1,400–2,100 msnm',
      },
      {
        id:          'roble',
        name:        'Roble Blanco',
        scientific:  'Quercus costaricensis',
        type:        'flora',
        image:       '/images/nature/ales-krivec-h7bNiN2AzNM-unsplash.jpg',
        description: 'Especie dominante del bosque nuboso de La Carpintera. Presente en zona de alta carga hídrica, sus raíces alimentan las nacientes propias de la propiedad.',
        status:      'Casi Amenazado (UICN) — Protegido Ley 7575',
        habitat:     'Bosque montano húmedo, 1,200–3,000 msnm',
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
          image:       '/images/carpintera/foto-3.jpg',
        },
        {
          name:        'El Bosque como Arquitectura',
          description: 'El Plan General de Manejo SINAC reconoce el bosque nuboso como el activo principal. Los senderos, las terrazas naturales y las nacientes son la infraestructura que la tierra construyó por siglos.',
          image:       '/images/carpintera/foto-5.jpg',
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

    // ── Legado ─────────────────────────────────────────────────────────────
    legacy: {
      title:         'Un Ciclo de Vida que Se Completa',
      custodianName: 'Maribel · Para Siempre Amigos de La Carpintera',
      message:
        'Esta finca fue transformada de ganadería erosiva a santuario de bosque nuboso por manos que creyeron en ella cuando nadie más lo hacía. Hoy, tras años de restauración, soberanía energética y cumplimiento del Plan de Manejo SINAC, el ecosistema está maduro y listo para su siguiente fase. La propietaria tiene total disposición de acompañar al nuevo custodio durante la transición, aportando el conocimiento técnico y operativo acumulado. Buscamos a quien entienda que esta tierra es un activo de valor intergeneracional.',
      videoUrl: '',
    },
  },
]
