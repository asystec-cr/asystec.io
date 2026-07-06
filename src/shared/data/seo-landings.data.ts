export type FaqItem = {
  question: string;
  answer: string;
};

export type LandingLink = {
  label: string;
  href: string;
};

export type LandingSection = {
  title: string;
  body: string;
  items?: string[];
};

export type LandingDecisionRow = {
  factor: string;
  question: string;
  impact: string;
};

export type LandingDecisionTable = {
  title: string;
  body: string;
  rows: LandingDecisionRow[];
};

export type LandingPageData = {
  slug: string;
  path: string;
  kind: 'pillar' | 'product' | 'solution' | 'industry' | 'guide';
  schemaType: 'SoftwareApplication' | 'Service' | 'Article';
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  answer: string;
  intro: string;
  primaryCta: LandingLink;
  secondaryCta?: LandingLink;
  highlights: string[];
  modules: string[];
  sections: LandingSection[];
  decisionTable?: LandingDecisionTable;
  faqs: FaqItem[];
  related: LandingLink[];
  image?: string;
  externalUrl?: string;
  applicationCategory?: string;
  operatingSystem?: string;
};

const contactCta = { label: 'Coordinar demo', href: '/contact' };
const whatsappCta = { label: 'Escribir por WhatsApp', href: 'https://wa.me/50689754741' };

export const pillarPage: LandingPageData = {
  slug: 'software-para-negocios-costa-rica',
  path: '/software-para-negocios-costa-rica',
  kind: 'pillar',
  schemaType: 'Service',
  title: 'Software para negocios en Costa Rica',
  seoTitle: 'Software para negocios en Costa Rica | Asystec',
  description:
    'Asystec desarrolla e implementa software para pymes en Costa Rica: POS, facturacion electronica, inventario, reportes, cobros, CRM, multi-sucursal e integraciones.',
  eyebrow: 'Hub de soluciones Asystec',
  heroTitle: 'Software para vender, facturar, cobrar y controlar tu negocio en Costa Rica',
  answer:
    'Asystec crea e implementa software empresarial para pymes que necesitan ordenar ventas, facturacion electronica, inventario, cobros, reportes, usuarios, sucursales e integraciones sin depender de procesos manuales dispersos.',
  intro:
    'Esta pagina centraliza el portafolio publico de Asystec y conecta cada necesidad comercial con una solucion concreta, una industria y una ruta de contacto.',
  primaryCta: contactCta,
  secondaryCta: { label: 'Ver Asystec POS', href: '/asystec-pos' },
  highlights: [
    'Soporte local para negocios en Costa Rica.',
    'Productos propios y plataformas a la medida.',
    'Enfoque en operacion real: caja, inventario, cobros, facturacion y reportes.',
    'Integraciones con sistemas externos cuando el proceso lo requiere.',
  ],
  modules: [
    'Punto de venta',
    'Facturacion electronica',
    'Inventario',
    'Reportes',
    'Cuentas por cobrar',
    'CRM',
    'Multi-sucursal',
    'Usuarios y permisos',
  ],
  sections: [
    {
      title: 'Arquitectura comercial',
      body: 'El sitio se organiza por productos, soluciones, industrias y guias para que clientes, buscadores y asistentes de IA puedan entender que ofrece Asystec y para quien aplica.',
      items: [
        'Productos con pagina publica',
        'Soluciones por problema operativo',
        'Industrias con lenguaje especifico',
        'Guias para preguntas de compra',
      ],
    },
    {
      title: 'Como convertimos interes en ventas',
      body: 'Cada pagina incluye una respuesta directa, contexto suficiente para evaluar la opcion y llamadas a demo, WhatsApp o contacto comercial.',
      items: [
        'Respuesta corta en el primer bloque',
        'Modulos y escenarios de uso',
        'Preguntas frecuentes visibles',
        'Enlaces internos hacia paginas relacionadas',
      ],
    },
  ],
  faqs: [
    {
      question: 'Que tipo de software ofrece Asystec?',
      answer:
        'Asystec ofrece software para POS, facturacion electronica, inventario, cobros, reportes, CRM, operaciones multi-sucursal y plataformas web a la medida.',
    },
    {
      question: 'Asystec trabaja solo con un tipo de negocio?',
      answer:
        'No. El portafolio esta pensado para comercios, restaurantes, talleres, gimnasios, servicios profesionales y empresas que necesitan procesos mas ordenados.',
    },
    {
      question: 'Como se empieza un proyecto?',
      answer:
        'Normalmente se agenda una demo o diagnostico, se revisan procesos actuales y se define si aplica un producto existente o una plataforma a la medida.',
    },
  ],
  related: [
    { label: 'Asystec POS', href: '/asystec-pos' },
    { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
    { label: 'Inventario', href: '/soluciones/inventario' },
    { label: 'Plataformas a medida', href: '/plataformas' },
  ],
};

export const portfolioPages: LandingPageData[] = [
  {
    slug: 'asystec-pos',
    path: '/asystec-pos',
    kind: 'product',
    schemaType: 'SoftwareApplication',
    title: 'Asystec POS',
    seoTitle: 'Asystec POS para pymes en Costa Rica',
    description:
      'Sistema POS de escritorio para pymes en Costa Rica con operacion offline, facturacion electronica, inventario, reportes, seguridad y soporte local.',
    eyebrow: 'Producto Asystec',
    heroTitle: 'Sistema POS para negocios que necesitan vender aunque internet falle',
    answer:
      'Asystec POS es un sistema de punto de venta para pymes en Costa Rica que combina caja, ventas, inventario, facturacion electronica, reportes y operacion local para mantener el negocio trabajando.',
    intro:
      'Es una opcion para comercios, talleres, restaurantes y servicios que necesitan velocidad en caja, control operativo y acompanamiento local.',
    primaryCta: contactCta,
    secondaryCta: {
      label: 'Descargar instalador',
      href: 'https://asystec-apps.s3.us-east-2.amazonaws.com/updates/asystec-pos/latest/AsystecPOS-Setup.exe',
    },
    highlights: [
      'Operacion local/offline',
      'Facturacion electronica para Costa Rica',
      'Inventario y reportes',
      'Roles, seguridad y respaldos',
    ],
    modules: ['Caja', 'Ventas', 'Inventario', 'Facturacion electronica', 'Reportes', 'Usuarios y permisos'],
    sections: [
      {
        title: 'Cuando conviene',
        body: 'Conviene cuando el negocio necesita un punto de venta estable para atender rapido, controlar productos y emitir comprobantes sin frenar la operacion diaria.',
        items: [
          'Caja con alto movimiento',
          'Inventario que cambia a diario',
          'Necesidad de facturar en regla',
          'Soporte local para salida a produccion',
        ],
      },
    ],
    faqs: [
      {
        question: 'Asystec POS funciona sin internet?',
        answer:
          'Si. La operacion principal del POS esta pensada para trabajar localmente, de modo que la caja no dependa siempre de la conexion.',
      },
      {
        question: 'Incluye facturacion electronica?',
        answer:
          'Incluye capacidades orientadas a facturacion electronica para Costa Rica y acompana el proceso de configuracion segun el caso.',
      },
    ],
    related: [
      { label: 'Sistema POS', href: '/soluciones/pos' },
      { label: 'Inventario', href: '/soluciones/inventario' },
      { label: 'Restaurantes', href: '/industrias/restaurantes' },
      { label: 'Como elegir un POS', href: '/guias/como-elegir-sistema-pos' },
      { label: 'Cuanto cuesta un POS', href: '/guias/cuanto-cuesta-un-pos-costa-rica' },
    ],
    image: '/images/pos/pos0.jpeg',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Windows',
  },
  {
    slug: 'fitpro',
    path: '/fitpro',
    kind: 'product',
    schemaType: 'SoftwareApplication',
    title: 'FitPro',
    seoTitle: 'FitPro | Software para gimnasios y centros fitness',
    description:
      'Software para gimnasios y estudios fitness con membresias, cobros, clases, check-ins y reportes operativos.',
    eyebrow: 'Producto Asystec',
    heroTitle: 'Software para administrar gimnasios, membresias y clases',
    answer:
      'FitPro ayuda a gimnasios y centros fitness a administrar clientes, membresias, pagos, clases, cupos, asistencia y reportes desde una plataforma operativa.',
    intro:
      'Esta pagina posiciona FitPro dentro del portafolio Asystec y conecta el producto con industrias y necesidades de cobro recurrente.',
    primaryCta: { label: 'Abrir FitPro', href: 'https://fitpro.asystec.io/' },
    secondaryCta: contactCta,
    highlights: ['Membresias', 'Cobros y vencimientos', 'Agenda de clases', 'Reportes de asistencia e ingresos'],
    modules: ['Clientes', 'Membresias', 'Pagos', 'Clases', 'Check-ins', 'Reportes'],
    sections: [
      {
        title: 'Para quien aplica',
        body: 'Aplica para gimnasios, estudios boutique, centros de entrenamiento y negocios con pagos recurrentes o cupos por horario.',
        items: [
          'Control de membresias activas',
          'Seguimiento de saldos pendientes',
          'Clases con cupos',
          'Indicadores para recepcion y gerencia',
        ],
      },
    ],
    faqs: [
      {
        question: 'FitPro sirve para controlar vencimientos?',
        answer: 'Si. La plataforma esta orientada a dar visibilidad sobre membresias, pagos pendientes y renovaciones.',
      },
      {
        question: 'FitPro es solo para gimnasios grandes?',
        answer:
          'No. Tambien puede aplicar a estudios pequenos o centros con clases, horarios y membresias recurrentes.',
      },
    ],
    related: [
      { label: 'Gimnasios y fitness', href: '/industrias/gimnasios' },
      { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
      { label: 'Reportes', href: '/soluciones/reportes' },
      { label: 'Servicios profesionales', href: '/industrias/servicios-profesionales' },
    ],
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
  },
  {
    slug: 'plataformas',
    path: '/plataformas',
    kind: 'product',
    schemaType: 'Service',
    title: 'Diseno y desarrollo de plataformas',
    seoTitle: 'Diseno y desarrollo de plataformas en Costa Rica | Asystec',
    description:
      'Diseno y desarrollo de plataformas web, portales operativos y productos SaaS para empresas en Costa Rica.',
    eyebrow: 'Servicio especializado',
    heroTitle: 'Plataformas web y productos SaaS para procesos operativos reales',
    answer:
      'Asystec disena y desarrolla plataformas web para empresas que necesitan digitalizar ventas, cobros, usuarios, permisos, reportes, portales de clientes o integraciones.',
    intro: 'El servicio combina analisis del proceso, diseno de flujo, desarrollo, despliegue y mejora continua.',
    primaryCta: contactCta,
    secondaryCta: { label: 'Ver portafolio', href: '/plataformas#portfolio-cases' },
    highlights: ['Backoffice', 'Portales de clientes', 'SaaS', 'Integraciones y reportes'],
    modules: ['Usuarios', 'Roles', 'Flujos operativos', 'Dashboards', 'Integraciones', 'Seguridad'],
    sections: [
      {
        title: 'Que se construye',
        body: 'Se construyen portales y sistemas a la medida cuando un producto existente no cubre el flujo especifico del negocio.',
        items: [
          'Portales con login',
          'Procesos por estado',
          'Paneles administrativos',
          'Reportes y control de permisos',
        ],
      },
    ],
    faqs: [
      {
        question: 'Cuando conviene una plataforma a la medida?',
        answer:
          'Conviene cuando el proceso de negocio es propio, involucra varios roles o requiere integraciones que un sistema estandar no cubre bien.',
      },
      {
        question: 'Asystec mantiene las plataformas despues del lanzamiento?',
        answer:
          'Si. El trabajo puede incluir soporte, mejoras, seguridad, despliegue y evolucion continua segun el acuerdo del proyecto.',
      },
    ],
    related: [
      { label: 'Integraciones', href: '/soluciones/integraciones' },
      { label: 'CRM', href: '/soluciones/crm' },
      { label: 'Reportes', href: '/soluciones/reportes' },
      { label: 'Casos y portafolio', href: '/casos' },
    ],
  },
  {
    slug: 'cobrosapp',
    path: '/cobrosapp',
    kind: 'product',
    schemaType: 'SoftwareApplication',
    title: 'CobrosApp',
    seoTitle: 'CobrosApp | Software para credito y cobranza',
    description:
      'CobrosApp ayuda a administrar clientes, creditos, pagos, estados de cuenta, reportes e indicadores para operaciones de cobranza.',
    eyebrow: 'Producto Asystec',
    heroTitle: 'Software para ordenar creditos, pagos y cuentas por cobrar',
    answer:
      'CobrosApp es una plataforma para equipos que necesitan controlar clientes, creditos, pagos, saldos, estados de cuenta y reportes de cobranza desde un sistema web.',
    intro:
      'La pagina publica explica el producto para que clientes y asistentes de IA puedan asociarlo con cobranza, credito, seguimiento y reportes financieros.',
    primaryCta: { label: 'Abrir CobrosApp', href: 'https://cobros.asystec.io/login' },
    secondaryCta: contactCta,
    highlights: ['Clientes y creditos', 'Pagos y estados de cuenta', 'Reportes financieros', 'Acceso web'],
    modules: ['Clientes', 'Creditos', 'Pagos', 'Estados de cuenta', 'Reportes', 'Usuarios'],
    sections: [
      {
        title: 'Problemas que resuelve',
        body: 'Ayuda cuando la cobranza depende de hojas de calculo, notas manuales o datos repartidos entre varias personas.',
        items: [
          'Saldos pendientes visibles',
          'Historial por cliente',
          'Reportes de ingresos',
          'Seguimiento por equipo',
        ],
      },
    ],
    faqs: [
      {
        question: 'CobrosApp reemplaza hojas de Excel?',
        answer:
          'Puede reemplazar controles manuales de credito y cobranza cuando se necesita trazabilidad, reportes y estados por cliente.',
      },
      {
        question: 'CobrosApp es parte del portafolio Asystec?',
        answer: 'Si. Es una de las plataformas publicas vinculadas al portafolio de soluciones de Asystec.',
      },
    ],
    related: [
      { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
      { label: 'Reportes', href: '/soluciones/reportes' },
      { label: 'CRM', href: '/soluciones/crm' },
    ],
    image: '/images/portfolio/cobrosapp.png',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
  },
  {
    slug: 'facturacionapp',
    path: '/facturacionapp',
    kind: 'product',
    schemaType: 'SoftwareApplication',
    title: 'FacturacionApp',
    seoTitle: 'FacturacionApp | Facturacion electronica en Costa Rica',
    description:
      'FacturacionApp es una solucion para emitir y administrar comprobantes electronicos, clientes, pagos, cotizaciones y reportes en Costa Rica.',
    eyebrow: 'Producto Asystec',
    heroTitle: 'Facturacion electronica y gestion comercial para pymes',
    answer:
      'FacturacionApp ayuda a negocios en Costa Rica a emitir comprobantes electronicos, administrar clientes, cotizaciones, pagos y reportes desde una plataforma web.',
    intro:
      'La pagina posiciona el producto dentro del portafolio Asystec y lo conecta con preguntas frecuentes de facturacion electronica.',
    primaryCta: { label: 'Abrir FacturacionApp', href: 'https://app.asystec.io/login' },
    secondaryCta: contactCta,
    highlights: ['Comprobantes electronicos', 'Clientes', 'Cotizaciones', 'Pagos y reportes'],
    modules: ['Facturas', 'Clientes', 'Productos', 'Pagos', 'Cotizaciones', 'Reportes'],
    sections: [
      {
        title: 'Para negocios que necesitan orden fiscal',
        body: 'Esta orientado a negocios que necesitan emitir comprobantes, consultar informacion comercial y reducir errores en procesos repetitivos.',
        items: [
          'Emision de comprobantes',
          'Datos de clientes',
          'Catalogo de productos o servicios',
          'Reportes para seguimiento',
        ],
      },
    ],
    faqs: [
      {
        question: 'FacturacionApp es para Costa Rica?',
        answer: 'Si. La pagina esta orientada a empresas y pymes que necesitan facturacion electronica en Costa Rica.',
      },
      {
        question: 'Cuando elegir FacturacionApp frente a un POS?',
        answer:
          'Puede convenir cuando el foco es facturar, administrar clientes y reportes, sin requerir una caja local de punto de venta.',
      },
    ],
    related: [
      { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
      { label: 'Reportes', href: '/soluciones/reportes' },
      { label: 'Software para pymes', href: '/software-para-negocios-costa-rica' },
    ],
    image: '/images/portfolio/facturacionapp.png',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
  },
  {
    slug: 'tallerapp',
    path: '/tallerapp',
    kind: 'product',
    schemaType: 'SoftwareApplication',
    title: 'TallerApp',
    seoTitle: 'TallerApp | Software para talleres',
    description:
      'TallerApp ayuda a talleres a ordenar clientes, ordenes de trabajo, diagnosticos, aprobaciones, cobros y seguimiento operativo.',
    eyebrow: 'Producto Asystec',
    heroTitle: 'Software para talleres con ordenes, clientes y seguimiento',
    answer:
      'TallerApp es una plataforma orientada a talleres que necesitan registrar clientes, ordenes, estados, diagnosticos, aprobaciones, cobros y entrega de trabajos.',
    intro:
      'La pagina publica conecta el producto con talleres automotrices, servicios tecnicos y negocios que trabajan por ordenes.',
    primaryCta: { label: 'Abrir TallerApp', href: 'https://taller.asystec.io/login' },
    secondaryCta: contactCta,
    highlights: ['Ordenes de trabajo', 'Clientes', 'Estados operativos', 'Cobros y seguimiento'],
    modules: ['Ordenes', 'Clientes', 'Diagnosticos', 'Aprobaciones', 'Cobros', 'Reportes'],
    sections: [
      {
        title: 'Para operaciones por orden',
        body: 'Ayuda a negocios que reciben equipos, vehiculos o trabajos, los procesan por etapas y necesitan visibilidad hasta la entrega.',
        items: ['Recepcion ordenada', 'Historial por cliente', 'Estados claros', 'Control de saldos y entrega'],
      },
    ],
    faqs: [
      {
        question: 'TallerApp sirve para talleres automotrices?',
        answer:
          'Si. Tambien puede aplicar a otros servicios que trabajan con ordenes, diagnosticos, aprobaciones y entregas.',
      },
      {
        question: 'TallerApp se conecta con otros sistemas?',
        answer: 'Las integraciones dependen del alcance del proyecto y se revisan durante la etapa de diagnostico.',
      },
    ],
    related: [
      { label: 'Talleres', href: '/industrias/talleres' },
      { label: 'Reportes', href: '/soluciones/reportes' },
      { label: 'CRM', href: '/soluciones/crm' },
    ],
    image: '/images/portfolio/taller-asystec-login.png',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
  },
];

const solution = (
  slug: string,
  title: string,
  description: string,
  answer: string,
  modules: string[],
  related: LandingLink[],
): LandingPageData => ({
  slug,
  path: `/soluciones/${slug}`,
  kind: 'solution',
  schemaType: 'Service',
  title,
  seoTitle: `${title} en Costa Rica | Asystec`,
  description,
  eyebrow: 'Solucion Asystec',
  heroTitle: title,
  answer,
  intro: 'Esta solucion conecta una necesidad operativa especifica con productos, plataformas y asesorias de Asystec.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  highlights: [
    'Diagnostico del proceso actual',
    'Configuracion segun el flujo del negocio',
    'Soporte local',
    'Ruta hacia demo o cotizacion',
  ],
  modules,
  sections: [
    {
      title: 'Problema operativo',
      body: 'Cuando la informacion esta dispersa, el negocio pierde tiempo, aumenta errores y se vuelve mas dificil tomar decisiones con datos confiables.',
      items: modules.slice(0, 4),
    },
    {
      title: 'Como lo aborda Asystec',
      body: 'La implementacion puede usar un producto existente o una plataforma a la medida, segun el nivel de control, integracion y personalizacion que requiera el negocio.',
    },
  ],
  faqs: [
    {
      question: `Que incluye una solucion de ${title.toLowerCase()}?`,
      answer:
        'Incluye revision del proceso, definicion de usuarios y datos, configuracion o desarrollo de modulos, acompanamiento y una ruta de soporte posterior.',
    },
    {
      question: 'Se puede adaptar por industria?',
      answer:
        'Si. El lenguaje, los flujos y los reportes se ajustan segun el tipo de negocio y el producto o plataforma que aplique.',
    },
  ],
  related,
});

export const solutionPages: LandingPageData[] = [
  {
    slug: 'pos',
    path: '/soluciones/pos',
    kind: 'solution',
    schemaType: 'Service',
    title: 'Sistema POS para comercios en Costa Rica',
    seoTitle: 'Sistema POS para comercios en Costa Rica | Asystec',
    description:
      'Sistema POS para vender, facturar, controlar inventario, cerrar caja, administrar usuarios y revisar reportes en comercios de Costa Rica.',
    eyebrow: 'Solucion Asystec POS',
    heroTitle: 'Sistema POS para vender, facturar y controlar inventario sin depender de hojas separadas',
    answer:
      'Un sistema POS para comercios en Costa Rica debe conectar caja, ventas, inventario, facturacion electronica, cierres, usuarios y reportes en un mismo flujo para que el negocio opere con menos controles manuales.',
    intro:
      'Asystec ayuda a pymes, tiendas, minisuper, restaurantes, ferreterias y servicios a evaluar Asystec POS con su flujo real de caja, productos, comprobantes, inventario, usuarios y reportes antes de cotizar o implementar.',
    primaryCta: contactCta,
    secondaryCta: whatsappCta,
    highlights: [
      'Caja, ventas e inventario conectados en la operacion diaria.',
      'Facturacion electronica para Costa Rica dentro del flujo de venta.',
      'Usuarios, roles, cierres y reportes para administrar con mas control.',
      'Demo orientada al caso real del negocio, no a una lista generica de pantallas.',
    ],
    modules: [
      'Caja y ventas',
      'Productos, codigos e inventario',
      'Facturacion electronica',
      'Cierres de caja',
      'Clientes, creditos y apartados',
      'Compras y proveedores',
      'Reportes operativos',
      'Usuarios, roles y permisos',
    ],
    sections: [
      {
        title: 'Beneficios para la operacion',
        body: 'La meta no es tener otra pantalla, sino reducir controles paralelos entre caja, inventario, facturacion y administracion. La demo debe probar como el equipo vende, cobra, emite comprobantes y revisa la informacion al cierre.',
        items: [
          'Menos doble digitacion entre ventas, comprobantes e inventario',
          'Mas trazabilidad sobre usuarios, pagos, cierres y ajustes',
          'Informacion de productos y ventas disponible para revisar la operacion',
          'Acompanamiento local para configurar el flujo antes de salir a produccion',
        ],
      },
      {
        title: 'Problemas que resuelve',
        body: 'Un negocio empieza a necesitar POS cuando caja, hojas de Excel, comprobantes, productos y reportes dejan de contar la misma historia. Esa desalineacion afecta cierres, compras, atencion y decisiones de gerencia.',
        items: [
          'Inventario que no coincide con lo vendido',
          'Cierres de caja lentos o dificiles de revisar',
          'Facturacion separada del punto de venta',
          'Usuarios sin permisos claros o poca trazabilidad',
        ],
      },
      {
        title: 'Caracteristicas reales del sistema',
        body: 'Asystec POS es una aplicacion de escritorio con base local y modulos para venta, productos, caja, clientes, compras, reportes, configuracion fiscal, usuarios, roles y respaldos. Las funciones externas, como envio fiscal o tracking comercial, se validan segun la configuracion del negocio.',
        items: [
          'Venta con productos, cliente, medios de pago, descuentos y notas',
          'Catalogo con codigos, departamentos, costo, stock y datos fiscales',
          'Cajas, sesiones, ingresos, retiros, cierres y movimientos',
          'Reportes de ventas, facturas, inventario, cierres y utilidad',
        ],
      },
      {
        title: 'Industrias objetivo',
        body: 'La misma categoria POS cambia segun el giro. Por eso la evaluacion debe revisar productos, rotacion, comprobantes, usuarios, cajas, bodegas, horarios y reportes esperados por industria.',
        items: [
          'Minisuper, pulperias y tiendas de conveniencia',
          'Ferreterias y negocios con catalogo amplio',
          'Restaurantes, sodas y comercios con caja rapida',
          'Boutiques, retail, talleres y servicios con inventario o cobros',
        ],
      },
      {
        title: 'Objeciones que conviene resolver',
        body: 'Antes de decidir, conviene aclarar alcance, migracion, soporte, continuidad, facturacion electronica, reportes y crecimiento. Si falta un dato, debe quedar como pendiente de demo o aprobacion, no como promesa publica.',
        items: [
          'Que datos se pueden migrar desde Excel o sistema anterior',
          'Que requiere la facturacion electronica del negocio',
          'Cuantos usuarios, cajas o sucursales entran en el alcance',
          'Que eventos de lead, demo y venta se mediran despues de publicar campanas',
        ],
      },
    ],
    decisionTable: {
      title: 'Comparativa contra Excel, caja manual, POS generico y software extranjero',
      body: 'Esta tabla resume criterios cualitativos para decidir con menos riesgo. No reemplaza la demo: ayuda a preparar preguntas concretas sin inventar precios, rankings ni resultados garantizados.',
      rows: [
        {
          factor: 'Excel',
          question:
            'Las ventas, productos, existencias y ajustes quedan en archivos separados o sin historial confiable?',
          impact:
            'Cuando inventario y caja viven fuera del flujo de venta, aumentan las diferencias y el retrabajo administrativo.',
        },
        {
          factor: 'Caja manual',
          question:
            'Como se registran pagos, cierres, anulaciones, cliente, comprobante y responsable de cada operacion?',
          impact:
            'La caja manual puede funcionar al inicio, pero limita trazabilidad, reportes y revision de errores cuando crece el movimiento.',
        },
        {
          factor: 'POS generico',
          question:
            'El sistema cubre facturacion electronica, inventario, permisos, reportes y soporte segun el contexto de Costa Rica?',
          impact:
            'Una herramienta generica puede dejar pasos criticos fuera del sistema y obligar a operar con procesos paralelos.',
        },
        {
          factor: 'Software extranjero',
          question:
            'Que pasa con soporte, horarios, configuracion fiscal, integraciones, datos y continuidad si aparece un problema operativo?',
          impact:
            'La decision debe considerar ajuste al proceso local, acompanamiento y costo total, no solo marca o precio visible.',
        },
      ],
    },
    faqs: [
      {
        question: 'Que incluye una landing de sistema POS para Asystec?',
        answer:
          'Debe explicar el problema, beneficios, modulos reales, industrias objetivo, comparativas, objeciones, FAQs, CTA a demo y schema. Esta pagina usa la ruta existente de soluciones y enlaza a Asystec POS, guias e industrias.',
      },
      {
        question: 'Asystec POS funciona si se cae internet?',
        answer:
          'El producto esta planteado como aplicacion de escritorio con base local para la operacion de caja. Las funciones que dependen de servicios externos, como envio fiscal, respaldos o integraciones, se revisan segun la configuracion del negocio.',
      },
      {
        question: 'Incluye facturacion electronica?',
        answer:
          'Asystec POS tiene modulos orientados a facturacion electronica para Costa Rica. En la demo conviene validar datos fiscales, ambiente, comprobantes, clientes, productos y reglas que aplican al negocio.',
      },
      {
        question: 'Que negocios deberian pedir una demo de POS?',
        answer:
          'Conviene para comercios, minisuper, ferreterias, restaurantes, tiendas retail, talleres y servicios que necesitan ordenar caja, productos, inventario, facturacion, usuarios y reportes.',
      },
      {
        question: 'Puedo migrar desde Excel, caja manual u otro POS?',
        answer:
          'La migracion debe evaluarse con datos reales: productos, codigos, clientes, saldos, inventario, usuarios y reportes esperados. Si falta evidencia, se documenta como pendiente antes de prometer alcance.',
      },
      {
        question: 'Como se mide si la landing genera leads calificados?',
        answer:
          'El sistema web ya marca CTAs con eventos de analitica. Antes de pauta pagada faltan pruebas de GA4/GTM, formulario o chat, CRM, UTMs y eventos como lead, schedule_demo, qualified_lead y demo_completed.',
      },
    ],
    related: [
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Como elegir un POS', href: '/guias/como-elegir-sistema-pos' },
      { label: 'Cuanto cuesta un POS', href: '/guias/cuanto-cuesta-un-pos-costa-rica' },
      { label: 'Software local vs extranjero', href: '/guias/software-local-vs-extranjero' },
      { label: 'Minisuper', href: '/industrias/minisuper' },
      { label: 'Ferreterias', href: '/industrias/ferreterias' },
      { label: 'Restaurantes', href: '/industrias/restaurantes' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
    image: '/images/pos/pos0.jpeg',
  },
  {
    slug: 'facturacion-electronica',
    path: '/soluciones/facturacion-electronica',
    kind: 'solution',
    schemaType: 'Service',
    title: 'Software de facturacion electronica para pymes en Costa Rica',
    seoTitle: 'Software de facturacion electronica para pymes en Costa Rica | Asystec',
    description:
      'Software de facturacion electronica para pymes en Costa Rica con comprobantes, clientes, productos, pagos, reportes, POS y soporte local.',
    eyebrow: 'Solucion Asystec',
    heroTitle: 'Facturacion electronica para vender y administrar mejor',
    answer:
      'Un software de facturacion electronica para pymes en Costa Rica debe ayudar a emitir comprobantes, mantener clientes y productos ordenados, conectar ventas y pagos, y dar soporte cuando el flujo comercial se detiene. La evaluacion conviene hacerla junto con POS, inventario, reportes y la forma real en que opera el negocio.',
    intro:
      'Asystec ayuda a negocios que necesitan ordenar facturacion electronica, ventas, clientes, pagos y reportes desde FacturacionApp, Asystec POS o una plataforma ajustada al flujo del negocio.',
    primaryCta: contactCta,
    secondaryCta: whatsappCta,
    highlights: [
      'Responder a busquedas de facturacion electronica para pymes en Costa Rica.',
      'Conectar comprobantes con clientes, ventas, pagos, inventario y reportes.',
      'Ayudar a comparar si conviene FacturacionApp, Asystec POS o una plataforma a medida.',
      'Dar una ruta clara hacia demo, WhatsApp y contacto comercial.',
    ],
    modules: [
      'Comprobantes electronicos',
      'Clientes y productos',
      'Cotizaciones, pagos y saldos',
      'Reportes comerciales',
      'Conexion con POS e inventario',
      'Soporte y salida a produccion',
    ],
    sections: [
      {
        title: 'Cuando facturar se vuelve un cuello de botella',
        body: 'La facturacion deja de ser solo un tramite cuando ventas, clientes, pagos y reportes quedan separados. En ese punto el negocio pierde tiempo conciliando informacion, buscando comprobantes o armando datos para gerencia.',
        items: [
          'Comprobantes emitidos fuera del flujo de venta',
          'Clientes, productos o servicios repetidos en varias herramientas',
          'Pagos y saldos revisados manualmente',
          'Reportes comerciales armados tarde o con datos incompletos',
        ],
      },
      {
        title: 'Que debe resolver la herramienta',
        body: 'La evaluacion debe empezar por el proceso diario: como se vende, quien factura, como se registran clientes, que se cobra, que reportes se revisan y que informacion no puede quedar dispersa.',
        items: [
          'Emision y consulta de comprobantes desde un flujo claro',
          'Catalogo de clientes, productos o servicios ordenado',
          'Registro de pagos, cotizaciones o saldos cuando aplique',
          'Reportes para ventas, administracion y seguimiento comercial',
        ],
      },
      {
        title: 'Facturacion conectada con la operacion',
        body: 'Para muchos negocios, facturacion electronica no vive sola. Puede necesitar conectarse con punto de venta, inventario, cuentas por cobrar, CRM, plataformas internas o reportes gerenciales.',
        items: [
          'Asystec POS cuando la venta ocurre en caja',
          'Inventario si los productos deben rebajarse al vender',
          'Cuentas por cobrar cuando hay creditos o saldos',
          'Integraciones si ya existen sistemas internos',
        ],
      },
      {
        title: 'Como preparar una demo util',
        body: 'Una demo comercial debe probar el flujo real del negocio, no solo pantallas aisladas. Conviene llegar con ejemplos de comprobantes, clientes, productos, usuarios, pagos y reportes esperados.',
        items: [
          'Tipo de negocio y forma actual de vender',
          'Cantidad de usuarios que facturan o revisan reportes',
          'Necesidad de POS, inventario, cobros o integraciones',
          'Dolores actuales: doble digitacion, errores, soporte o lentitud',
        ],
      },
    ],
    decisionTable: {
      title: 'Criterios para elegir software de facturacion electronica',
      body: 'Estas preguntas ayudan a llevar la conversacion a una demo o cotizacion concreta. La meta es validar si el sistema resuelve el flujo comercial completo del negocio.',
      rows: [
        {
          factor: 'Flujo de venta',
          question: 'La factura nace desde caja, una cotizacion, una venta web o un proceso administrativo?',
          impact: 'Define si conviene FacturacionApp, Asystec POS o una plataforma con integraciones.',
        },
        {
          factor: 'Clientes y catalogo',
          question: 'Los clientes, productos o servicios se mantienen en un solo lugar y con datos limpios?',
          impact: 'Reduce doble digitacion, errores al facturar y trabajo manual al revisar historiales.',
        },
        {
          factor: 'Pagos y cobros',
          question: 'El negocio necesita registrar pagos, saldos, creditos o seguimiento posterior al comprobante?',
          impact: 'Puede conectar facturacion con cuentas por cobrar, CobrosApp o reportes financieros.',
        },
        {
          factor: 'POS e inventario',
          question: 'La venta debe rebajar inventario, cerrar caja o alimentar reportes operativos?',
          impact: 'Evita que facturacion quede aislada de caja, productos, existencias y cierres.',
        },
        {
          factor: 'Soporte e integraciones',
          question: 'Quien acompana salida a produccion, cambios de configuracion e integraciones necesarias?',
          impact: 'Afecta continuidad operativa cuando el equipo depende del sistema para vender o administrar.',
        },
      ],
    },
    faqs: [
      {
        question: 'Que debe tener un software de facturacion electronica para una pyme?',
        answer:
          'Debe permitir administrar comprobantes, clientes, productos o servicios, pagos y reportes. Si el negocio vende en caja o maneja inventario, tambien conviene revisar conexion con POS, existencias y cierres.',
      },
      {
        question: 'Cuando conviene FacturacionApp y cuando Asystec POS?',
        answer:
          'FacturacionApp puede convenir cuando el foco es emitir comprobantes, clientes, cotizaciones, pagos y reportes desde una plataforma web. Asystec POS conviene cuando la facturacion debe estar conectada con caja, ventas e inventario.',
      },
      {
        question: 'La facturacion electronica puede conectarse con inventario o cuentas por cobrar?',
        answer:
          'Si. La evaluacion puede conectar facturacion con inventario, POS, cuentas por cobrar, CRM, reportes o integraciones, segun el flujo real del negocio y el alcance requerido.',
      },
      {
        question: 'Puedo pedir una demo con mi flujo actual de facturacion?',
        answer:
          'Si. Puedes coordinar una demo o escribir por WhatsApp para revisar como vendes, facturas, cobras, administras clientes, controlas productos y que reportes necesita tu negocio.',
      },
    ],
    related: [
      { label: 'FacturacionApp', href: '/facturacionapp' },
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Sistema POS', href: '/soluciones/pos' },
      { label: 'Inventario', href: '/soluciones/inventario' },
      { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
      { label: 'Software local vs extranjero', href: '/guias/software-local-vs-extranjero' },
      { label: 'Preguntas frecuentes', href: '/faqs' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
  },
  {
    slug: 'inventario',
    path: '/soluciones/inventario',
    kind: 'solution',
    schemaType: 'Service',
    title: 'Sistema de inventario para tiendas en Costa Rica',
    seoTitle: 'Sistema de inventario para tiendas en Costa Rica | Asystec',
    description:
      'Sistema de inventario para tiendas en Costa Rica con productos, existencias, movimientos, ventas, reportes y conexion con POS.',
    eyebrow: 'Solucion Asystec',
    heroTitle: 'Sistema de inventario para controlar productos, ventas y existencias',
    answer:
      'Un sistema de inventario para tiendas en Costa Rica debe conectar productos, existencias, ventas, movimientos, ajustes y reportes. El objetivo es saber que hay disponible, que se vendio, que falta reponer y donde se pierde control antes de que afecte caja, compras o clientes.',
    intro:
      'Asystec ayuda a comercios, minisuper, ferreterias y tiendas retail a evaluar inventario junto con POS, facturacion electronica, reportes y procesos de bodega, segun el flujo real del negocio.',
    primaryCta: contactCta,
    secondaryCta: whatsappCta,
    highlights: [
      'Responder a busquedas de sistema de inventario para tiendas en Costa Rica.',
      'Conectar inventario con ventas, POS, facturacion y reportes.',
      'Ayudar a preparar una demo con productos, bodegas y movimientos reales.',
      'Dar una ruta clara hacia Asystec POS, contacto y WhatsApp.',
    ],
    modules: [
      'Productos y categorias',
      'Existencias y movimientos',
      'Ventas conectadas con inventario',
      'Ajustes y conteos',
      'Bodegas o sucursales',
      'Reportes para compras y reposicion',
    ],
    sections: [
      {
        title: 'Cuando Excel deja de alcanzar',
        body: 'El inventario se vuelve dificil de controlar cuando compras, ventas, ajustes y conteos viven en archivos separados. En ese punto el negocio necesita historial, usuarios, movimientos y reportes que reduzcan conciliaciones manuales.',
        items: [
          'Existencias que no coinciden con caja o bodega',
          'Productos duplicados o con codigos inconsistentes',
          'Reposicion decidida sin historial confiable',
          'Reportes armados tarde para compras o gerencia',
        ],
      },
      {
        title: 'Que debe conectar el sistema',
        body: 'La evaluacion debe empezar por el flujo diario: como se crean productos, quien vende, como se rebajan existencias, como se hacen ajustes y que reportes necesita administracion para decidir compras.',
        items: [
          'Catalogo de productos, categorias y codigos',
          'Ventas que rebajan inventario desde el POS',
          'Movimientos, ajustes, conteos y trazabilidad',
          'Reportes de existencias, rotacion y faltantes',
        ],
      },
      {
        title: 'Inventario para mas de una ubicacion',
        body: 'Si el negocio maneja bodega, sucursales o varias cajas, conviene revisar permisos, existencias por ubicacion, reportes centralizados y el nivel de detalle que necesita cada usuario.',
        items: [
          'Existencias por punto operativo',
          'Usuarios y permisos por rol',
          'Consulta centralizada para gerencia',
          'Escalamiento hacia multi-sucursal si aplica',
        ],
      },
      {
        title: 'Como llevar la demo a tierra',
        body: 'Una demo util debe usar ejemplos del negocio: productos de alta rotacion, ajustes frecuentes, compras, faltantes, reportes esperados y el punto donde el control manual ya genera perdida de tiempo o errores.',
        items: [
          'Preparar categorias y productos representativos',
          'Llevar dudas sobre ventas, ajustes y cierres',
          'Separar necesidades obligatorias de mejoras futuras',
          'Confirmar soporte, migracion e integraciones necesarias',
        ],
      },
    ],
    decisionTable: {
      title: 'Criterios para elegir un sistema de inventario',
      body: 'Estas preguntas ayudan a comparar opciones antes de comprar software por lista de funciones y sirven para enfocar una demo en el control real del negocio.',
      rows: [
        {
          factor: 'Catalogo de productos',
          question: 'El negocio necesita codigos, categorias, variaciones, precios o datos especiales por producto?',
          impact: 'Define como se cargan productos, como se busca en caja y que tan facil sera mantener datos limpios.',
        },
        {
          factor: 'Movimientos y ajustes',
          question: 'Quien puede ajustar inventario y que historial debe quedar para revisar diferencias?',
          impact: 'Afecta trazabilidad, permisos, auditoria interna y confianza en las existencias.',
        },
        {
          factor: 'Conexion con ventas',
          question: 'Las ventas del POS rebajan inventario y quedan conectadas con facturacion y cierres?',
          impact: 'Evita duplicar trabajo entre caja, bodega y administracion.',
        },
        {
          factor: 'Bodegas o sucursales',
          question: 'El inventario se maneja en una sola tienda, varias ubicaciones o una bodega central?',
          impact: 'Determina permisos, reportes, visibilidad por ubicacion y crecimiento futuro.',
        },
      ],
    },
    faqs: [
      {
        question: 'Que debe tener un sistema de inventario para tiendas?',
        answer:
          'Debe cubrir productos, categorias, existencias, movimientos, ajustes, ventas conectadas, usuarios y reportes. Si hay bodegas o sucursales, tambien conviene revisar permisos y existencias por ubicacion.',
      },
      {
        question: 'Cuando conviene dejar Excel para controlar inventario?',
        answer:
          'Conviene cuando las existencias afectan ventas, compras, facturacion o reportes, o cuando el equipo pierde tiempo conciliando archivos, conteos y movimientos manuales.',
      },
      {
        question: 'El inventario puede conectarse con Asystec POS?',
        answer:
          'Si. La evaluacion puede conectar inventario con ventas, caja, facturacion electronica y reportes dentro de Asystec POS o con una solucion ajustada al flujo del negocio.',
      },
      {
        question: 'Puedo pedir una demo enfocada en mi inventario actual?',
        answer:
          'Si. Puedes coordinar una demo o escribir por WhatsApp para revisar productos, categorias, ventas, ajustes, bodegas, sucursales, reportes e integraciones necesarias.',
      },
    ],
    related: [
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Sistema POS', href: '/soluciones/pos' },
      { label: 'Alternativas a Excel', href: '/guias/alternativas-excel-inventario' },
      { label: 'Ferreterias', href: '/industrias/ferreterias' },
      { label: 'Minisuper', href: '/industrias/minisuper' },
      { label: 'Restaurantes', href: '/industrias/restaurantes' },
      { label: 'Multi-sucursal', href: '/soluciones/multi-sucursal' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
  },
  {
    slug: 'reportes',
    path: '/soluciones/reportes',
    kind: 'solution',
    schemaType: 'Service',
    title: 'Reportes para gerencia y operacion',
    seoTitle: 'Reportes para pymes y gerencia en Costa Rica | Asystec',
    description:
      'Software de reportes para pymes en Costa Rica con ventas, caja, inventario, cobros, saldos, sucursales e indicadores para gerencia.',
    eyebrow: 'Solucion Asystec',
    heroTitle: 'Reportes para decidir con datos de ventas, cobros e inventario',
    answer:
      'Una pyme en Costa Rica necesita reportes que conecten ventas, caja, inventario, cobros, facturacion y sucursales en una sola lectura. El objetivo no es tener mas graficos, sino saber que paso, donde hay atrasos y que decision debe tomar gerencia sin armar hojas manuales cada semana.',
    intro:
      'Asystec ayuda a negocios que necesitan convertir datos operativos en reportes utiles para gerencia, administracion y equipos de venta, ya sea desde POS, CobrosApp, FacturacionApp o una plataforma a la medida.',
    primaryCta: contactCta,
    secondaryCta: whatsappCta,
    highlights: [
      'Responder a busquedas sobre reportes para pymes y gerencia en Costa Rica.',
      'Conectar ventas, caja, inventario, cobros y facturacion con decisiones reales.',
      'Ayudar a preparar una demo con indicadores y fuentes de datos actuales.',
      'Dirigir a contacto, WhatsApp y productos Asystec segun el flujo del negocio.',
    ],
    modules: [
      'Ventas y caja',
      'Inventario y productos',
      'Cobros y saldos',
      'Facturacion',
      'Sucursales y usuarios',
      'Indicadores para gerencia',
    ],
    sections: [
      {
        title: 'Cuando los reportes llegan tarde',
        body: 'El problema aparece cuando administracion necesita decidir compras, cobros, personal o prioridades comerciales, pero los datos viven en el POS, hojas de Excel, facturacion, bancos o mensajes separados.',
        items: [
          'Cierres de caja revisados tarde o sin detalle por usuario',
          'Inventario y ventas comparados manualmente',
          'Saldos por cobrar sin seguimiento claro',
          'Indicadores de gerencia armados con informacion incompleta',
        ],
      },
      {
        title: 'Que debe conectar un buen reporte',
        body: 'Antes de construir o elegir reportes conviene definir que decision debe tomar cada persona: compras, ventas, cobranza, servicio, finanzas, sucursales o direccion general.',
        items: [
          'Ventas por fecha, producto, caja, usuario o sucursal',
          'Inventario disponible, rotacion, faltantes y movimientos',
          'Clientes, creditos, pagos, saldos y vencimientos',
          'Facturacion, comprobantes, ingresos y tendencias comerciales',
        ],
      },
      {
        title: 'Reportes por rol, no solo pantallas',
        body: 'Gerencia, caja, bodega, ventas y cobros no necesitan ver lo mismo. El valor esta en permisos claros, datos confiables y vistas que reduzcan trabajo manual sin exponer informacion innecesaria.',
        items: [
          'Indicadores resumidos para duenos o gerencia',
          'Detalle operativo para caja, bodega o cobranza',
          'Permisos por usuario y necesidad de consulta',
          'Exportaciones o integraciones cuando el proceso lo requiere',
        ],
      },
      {
        title: 'Como preparar una demo de reportes',
        body: 'Una demo util debe partir de los reportes que hoy se arman a mano y de las preguntas que el negocio no puede contestar rapido. Con eso se define si conviene un producto existente, una configuracion o una plataforma a medida.',
        items: [
          'Llevar ejemplos de reportes actuales o archivos manuales',
          'Separar indicadores diarios, semanales y mensuales',
          'Identificar sistemas fuente: POS, facturacion, cobros o inventario',
          'Confirmar usuarios, permisos, exportaciones e integraciones necesarias',
        ],
      },
    ],
    decisionTable: {
      title: 'Criterios para definir reportes de negocio',
      body: 'Estas preguntas ayudan a convertir una necesidad general de reportes en una demo concreta, con fuentes de datos, responsables y decisiones esperadas.',
      rows: [
        {
          factor: 'Decision de negocio',
          question: 'Que decision debe tomar gerencia con este reporte y con que frecuencia?',
          impact: 'Evita construir graficos que no cambian compras, cobros, ventas, caja o prioridades operativas.',
        },
        {
          factor: 'Fuentes de datos',
          question: 'Los datos vienen de POS, facturacion, inventario, cobros, Excel u otro sistema?',
          impact: 'Define integraciones, limpieza de datos y si el reporte puede actualizarse sin trabajo manual.',
        },
        {
          factor: 'Nivel de detalle',
          question: 'Se necesita ver informacion por producto, cliente, usuario, caja, sucursal o periodo?',
          impact: 'Afecta estructura, permisos y utilidad del reporte para equipos operativos y gerencia.',
        },
        {
          factor: 'Cobros y saldos',
          question: 'El negocio necesita alertas de clientes pendientes, pagos parciales o cartera vencida?',
          impact: 'Conecta reportes con cuentas por cobrar, seguimiento comercial y flujo de caja.',
        },
        {
          factor: 'Acceso y permisos',
          question: 'Quien puede ver indicadores sensibles y quien solo necesita informacion operativa?',
          impact: 'Reduce riesgo de exponer datos financieros o de clientes a usuarios que no los necesitan.',
        },
      ],
    },
    faqs: [
      {
        question: 'Que reportes necesita una pyme en Costa Rica?',
        answer:
          'Normalmente necesita reportes de ventas, caja, inventario, facturacion, cobros, saldos, usuarios y sucursales. La prioridad depende de las decisiones que gerencia toma cada dia, semana o mes.',
      },
      {
        question: 'Cuando conviene implementar software de reportes?',
        answer:
          'Conviene cuando el negocio ya pierde tiempo armando hojas manuales, no puede confiar en los datos o necesita comparar ventas, inventario, cobros y sucursales sin esperar cierres largos.',
      },
      {
        question: 'Los reportes pueden conectarse con POS, inventario y cobros?',
        answer:
          'Si. La evaluacion puede conectar reportes con Asystec POS, inventario, FacturacionApp, CobrosApp o una plataforma a medida, segun los sistemas que ya usa el negocio.',
      },
      {
        question: 'Puedo pedir una demo basada en mis reportes actuales?',
        answer:
          'Si. Puedes coordinar una demo o escribir por WhatsApp para revisar archivos actuales, sistemas fuente, usuarios, permisos e indicadores que necesitas ver con mas claridad.',
      },
    ],
    related: [
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Inventario', href: '/soluciones/inventario' },
      { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
      { label: 'Multi-sucursal', href: '/soluciones/multi-sucursal' },
      { label: 'CobrosApp', href: '/cobrosapp' },
      { label: 'FacturacionApp', href: '/facturacionapp' },
      { label: 'Plataformas a medida', href: '/plataformas' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
  },
  {
    slug: 'cuentas-por-cobrar',
    path: '/soluciones/cuentas-por-cobrar',
    kind: 'solution',
    schemaType: 'Service',
    title: 'Cuentas por cobrar y seguimiento de pagos',
    seoTitle: 'Software de cuentas por cobrar en Costa Rica | Asystec',
    description:
      'Software de cuentas por cobrar para pymes en Costa Rica con clientes, creditos, pagos, saldos, estados de cuenta y reportes de cobranza.',
    eyebrow: 'Solucion Asystec',
    heroTitle: 'Cuentas por cobrar con saldos, pagos y seguimiento claro',
    answer:
      'Una pyme en Costa Rica necesita controlar cuentas por cobrar cuando vende a credito, acepta pagos parciales o debe dar seguimiento a clientes con saldos pendientes. El objetivo es saber quien debe, cuanto debe, que se pago, que esta vencido y que accion comercial sigue.',
    intro:
      'Asystec ayuda a negocios que necesitan ordenar clientes, creditos, pagos, estados de cuenta y reportes de cobranza desde CobrosApp, una integracion con POS/facturacion o una plataforma ajustada al flujo real.',
    primaryCta: contactCta,
    secondaryCta: whatsappCta,
    highlights: [
      'Aterrizar busquedas sobre software de cuentas por cobrar en Costa Rica.',
      'Conectar cobranza con clientes, pagos, saldos, reportes y gerencia.',
      'Preparar una demo con cartera actual, reglas de pago y estados de cuenta.',
      'Dirigir a CobrosApp, contacto y WhatsApp sin inventar promesas financieras.',
    ],
    modules: [
      'Clientes y creditos',
      'Pagos y abonos',
      'Saldos pendientes',
      'Estados de cuenta',
      'Seguimiento de cobranza',
      'Reportes de cartera',
    ],
    sections: [
      {
        title: 'Cuando la cartera se vuelve dificil de controlar',
        body: 'El problema aparece cuando ventas, pagos, saldos y conversaciones con clientes quedan separados entre facturacion, hojas de calculo, mensajes o reportes manuales.',
        items: [
          'Clientes con saldos pendientes sin responsable claro',
          'Pagos parciales que se revisan manualmente',
          'Estados de cuenta armados a mano para cada cliente',
          'Gerencia sin visibilidad rapida de cartera vencida o recuperada',
        ],
      },
      {
        title: 'Que debe ordenar una solucion de cobros',
        body: 'La evaluacion debe empezar por el flujo real: como se otorga credito, como se registran pagos, quien da seguimiento y que reportes necesita administracion para tomar decisiones.',
        items: [
          'Cliente, credito, saldo, abonos y vencimientos',
          'Historial de pagos y movimientos por cuenta',
          'Estados de cuenta consultables o exportables',
          'Indicadores de cartera para ventas, cobros y gerencia',
        ],
      },
      {
        title: 'Cobranza conectada con otros procesos',
        body: 'Las cuentas por cobrar no viven solas. Pueden necesitar conexion con facturacion electronica, POS, CRM, reportes gerenciales o plataformas internas para evitar doble digitacion.',
        items: [
          'Facturacion y pagos conectados cuando el flujo lo requiere',
          'Reportes de saldos por cliente, vendedor o periodo',
          'Seguimiento comercial con contexto de cada cuenta',
          'Permisos por rol para proteger informacion financiera',
        ],
      },
      {
        title: 'Como preparar una demo de cuentas por cobrar',
        body: 'Una demo util debe revisar ejemplos reales de clientes, saldos y pagos. Asi se define si conviene CobrosApp, una integracion o una plataforma a medida para el proceso de cobranza.',
        items: [
          'Cantidad de clientes con credito o saldos activos',
          'Formas de pago y reglas de abonos parciales',
          'Estados de cuenta que el negocio necesita entregar',
          'Reportes actuales que se arman en Excel o manualmente',
        ],
      },
    ],
    decisionTable: {
      title: 'Criterios para elegir software de cuentas por cobrar',
      body: 'Estas preguntas convierten una necesidad general de cobro en una conversacion concreta para demo, alcance e integraciones.',
      rows: [
        {
          factor: 'Cartera actual',
          question: 'Cuantos clientes tienen credito, pagos parciales o saldos pendientes?',
          impact: 'Define estructura de cuentas, carga inicial, reportes y nivel de seguimiento requerido.',
        },
        {
          factor: 'Registro de pagos',
          question: 'Como se registran abonos, cancelaciones, ajustes o pagos por cliente?',
          impact: 'Afecta trazabilidad, conciliacion y confianza en los saldos que ve administracion.',
        },
        {
          factor: 'Estados de cuenta',
          question: 'El cliente necesita recibir o consultar movimientos, saldos y pagos realizados?',
          impact: 'Puede requerir formatos, filtros, exportaciones o portales segun el proceso comercial.',
        },
        {
          factor: 'Seguimiento comercial',
          question: 'Quien da seguimiento a saldos vencidos y que contexto necesita ver?',
          impact: 'Conecta cobranza con CRM, responsables, historial del cliente y prioridades de recuperacion.',
        },
        {
          factor: 'Reportes de gerencia',
          question: 'Que indicadores necesita direccion: saldos, recuperacion, vencimientos o clientes criticos?',
          impact: 'Permite convertir cobranza en decisiones sobre credito, ventas y flujo de caja.',
        },
      ],
    },
    faqs: [
      {
        question: 'Que debe tener un software de cuentas por cobrar?',
        answer:
          'Debe permitir registrar clientes, creditos, pagos, abonos, saldos, estados de cuenta, historial y reportes. Si el negocio ya factura o vende con POS, tambien conviene revisar integraciones para no duplicar datos.',
      },
      {
        question: 'Cuando conviene dejar Excel para controlar cobros?',
        answer:
          'Conviene cuando hay pagos parciales, varios responsables, saldos vencidos, estados de cuenta frecuentes o reportes que se arman manualmente y atrasan decisiones de ventas, cobros o gerencia.',
      },
      {
        question: 'CobrosApp sirve para cuentas por cobrar?',
        answer:
          'CobrosApp puede aplicar cuando el negocio necesita administrar clientes, creditos, pagos, estados de cuenta, reportes e indicadores de cobranza desde una plataforma web.',
      },
      {
        question: 'Puedo conectar cuentas por cobrar con facturacion o reportes?',
        answer:
          'Si. La evaluacion puede revisar conexion con facturacion electronica, POS, CRM, reportes o una plataforma a medida, segun los sistemas actuales y el alcance que necesite el negocio.',
      },
    ],
    related: [
      { label: 'CobrosApp', href: '/cobrosapp' },
      { label: 'Reportes', href: '/soluciones/reportes' },
      { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
      { label: 'CRM', href: '/soluciones/crm' },
      { label: 'Distribuidores', href: '/industrias/distribuidores' },
      { label: 'Gimnasios y fitness', href: '/industrias/gimnasios' },
      { label: 'Plataformas a medida', href: '/plataformas' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
  },
  {
    slug: 'crm',
    path: '/soluciones/crm',
    kind: 'solution',
    schemaType: 'Service',
    title: 'CRM para ventas, clientes y seguimiento en Costa Rica',
    seoTitle: 'CRM para ventas y clientes en Costa Rica | Asystec',
    description:
      'Software CRM para pymes en Costa Rica con clientes, contactos, historial, oportunidades, tareas, soporte, cobros y reportes comerciales.',
    eyebrow: 'Solucion CRM',
    heroTitle: 'CRM para ordenar clientes, seguimiento comercial y soporte sin perder contexto',
    answer:
      'Un CRM para pymes en Costa Rica debe centralizar clientes, contactos, conversaciones, oportunidades, tareas, soporte y reportes para que ventas y administracion den seguimiento sin depender de chats, hojas sueltas o memoria del equipo.',
    intro:
      'Asystec ayuda a negocios que necesitan ordenar su relacion con clientes, conectar seguimiento comercial con cobros, reportes o plataformas internas, y preparar una demo con el flujo real de ventas, soporte y administracion.',
    primaryCta: contactCta,
    secondaryCta: whatsappCta,
    highlights: [
      'Responder a busquedas de CRM para pymes y negocios en Costa Rica.',
      'Conectar clientes, oportunidades, tareas, soporte, cobros y reportes.',
      'Ayudar a decidir entre CobrosApp, una plataforma CRM o una integracion a medida.',
      'Dar una ruta clara hacia demo, WhatsApp y contacto comercial.',
    ],
    modules: [
      'Clientes y contactos',
      'Historial de conversaciones',
      'Oportunidades y seguimiento',
      'Tareas y responsables',
      'Soporte y casos',
      'Cobros y saldos cuando aplica',
      'Reportes comerciales',
      'Integraciones con sistemas actuales',
    ],
    sections: [
      {
        title: 'Cuando el seguimiento deja de caber en WhatsApp o Excel',
        body: 'El problema aparece cuando ventas, soporte y administracion manejan datos de clientes en lugares distintos. Sin historial comun, se pierden acuerdos, se repiten preguntas y cuesta saber quien debe dar el siguiente paso.',
        items: [
          'Clientes duplicados o sin responsable claro',
          'Seguimiento comercial disperso entre chats, correos y hojas',
          'Promesas, cotizaciones o casos sin historial visible',
          'Reportes de ventas o soporte armados tarde y con datos incompletos',
        ],
      },
      {
        title: 'Que debe centralizar el CRM',
        body: 'La evaluacion debe empezar por el ciclo real: de donde llega el contacto, quien lo atiende, que datos se guardan, que tareas se crean, como se da seguimiento y que informacion necesita gerencia para decidir.',
        items: [
          'Ficha de cliente con contactos, notas, estado y responsable',
          'Historial de llamadas, mensajes, tareas, cotizaciones o casos',
          'Oportunidades por etapa, prioridad, origen y proximo paso',
          'Reportes de seguimiento, actividad, ventas, soporte o cartera',
        ],
      },
      {
        title: 'CRM conectado con ventas, cobros y reportes',
        body: 'Para muchas pymes, CRM no debe quedar aislado. Puede necesitar relacionarse con facturacion, cuentas por cobrar, CobrosApp, POS, formularios, portales de clientes o reportes gerenciales.',
        items: [
          'Cuentas por cobrar cuando el seguimiento depende de saldos y pagos',
          'Reportes cuando gerencia necesita actividad, cartera o conversion',
          'Facturacion o POS cuando el historial debe conectar con compras',
          'Plataformas a medida si hay flujos, roles o integraciones propias',
        ],
      },
      {
        title: 'Como preparar una demo util',
        body: 'Una demo comercial debe usar ejemplos reales de clientes, etapas, responsables, seguimientos, reportes e integraciones esperadas. Asi se valida si el CRM reduce trabajo manual o solo agrega otra herramienta.',
        items: [
          'Fuentes de leads o contactos actuales',
          'Tipos de clientes y responsables de seguimiento',
          'Etapas comerciales, tareas y reportes esperados',
          'Sistemas que ya guardan datos de clientes o pagos',
        ],
      },
    ],
    decisionTable: {
      title: 'Criterios para elegir o implementar un CRM',
      body: 'Estas preguntas ayudan a convertir una necesidad general de CRM en un alcance concreto para demo, configuracion, integraciones y reportes.',
      rows: [
        {
          factor: 'Datos de clientes',
          question: 'Donde viven hoy los contactos, notas, historial, cotizaciones, casos o saldos?',
          impact: 'Define migracion, limpieza de datos y si el equipo puede confiar en una ficha unica de cliente.',
        },
        {
          factor: 'Seguimiento comercial',
          question: 'Que etapas, tareas, responsables y recordatorios necesita el equipo para no perder oportunidades?',
          impact: 'Convierte el CRM en una herramienta de accion diaria, no solo en una libreta de contactos.',
        },
        {
          factor: 'Soporte y postventa',
          question: 'El negocio necesita registrar casos, solicitudes, compromisos o historial posterior a la venta?',
          impact: 'Alinea ventas, soporte y administracion alrededor del mismo contexto del cliente.',
        },
        {
          factor: 'Cobros y reportes',
          question: 'El seguimiento depende de saldos, pagos, cartera, reportes o datos de otros sistemas?',
          impact: 'Puede requerir conexion con CobrosApp, cuentas por cobrar, facturacion, POS o reportes gerenciales.',
        },
        {
          factor: 'Integraciones',
          question: 'Que formularios, portales, sistemas internos o procesos actuales deben alimentar el CRM?',
          impact: 'Sin integraciones claras, el equipo termina duplicando datos y mantiene procesos paralelos.',
        },
      ],
    },
    faqs: [
      {
        question: 'Que debe tener un CRM para una pyme en Costa Rica?',
        answer:
          'Debe ordenar clientes, contactos, historial, tareas, oportunidades, responsables y reportes. Si el negocio tambien maneja cobros, soporte o sistemas internos, conviene revisar integraciones desde la demo.',
      },
      {
        question: 'Cuando conviene implementar un CRM?',
        answer:
          'Conviene cuando el seguimiento depende de WhatsApp, Excel, correos o memoria del equipo, y eso provoca clientes duplicados, oportunidades perdidas, reportes incompletos o poca visibilidad para gerencia.',
      },
      {
        question: 'El CRM puede conectarse con cobros o facturacion?',
        answer:
          'Si. La evaluacion puede revisar conexion con CobrosApp, cuentas por cobrar, facturacion electronica, POS, reportes o plataformas internas, segun el flujo real y los datos disponibles.',
      },
      {
        question: 'Puedo pedir una demo con mi proceso actual de ventas?',
        answer:
          'Si. Puedes coordinar una demo o escribir por WhatsApp para revisar fuentes de clientes, etapas, responsables, tareas, reportes, cobros e integraciones necesarias antes de definir el alcance.',
      },
    ],
    related: [
      { label: 'CobrosApp', href: '/cobrosapp' },
      { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
      { label: 'Reportes', href: '/soluciones/reportes' },
      { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
      { label: 'Integraciones', href: '/soluciones/integraciones' },
      { label: 'Plataformas a medida', href: '/plataformas' },
      { label: 'Servicios profesionales', href: '/industrias/servicios-profesionales' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
  },
  solution(
    'multi-sucursal',
    'Software para negocios con varias sucursales',
    'Sistemas para controlar ventas, usuarios, inventario, reportes y permisos en negocios con varias sucursales.',
    'Una operacion multi-sucursal necesita visibilidad centralizada y permisos claros para comparar desempeno, controlar inventario y evitar datos duplicados.',
    ['Sucursales', 'Usuarios', 'Permisos', 'Inventario', 'Ventas', 'Reportes'],
    [
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Reportes', href: '/soluciones/reportes' },
      { label: 'Distribuidores', href: '/industrias/distribuidores' },
      { label: 'Retail', href: '/industrias/retail' },
    ],
  ),
  {
    slug: 'integraciones',
    path: '/soluciones/integraciones',
    kind: 'solution',
    schemaType: 'Service',
    title: 'Integraciones de software para empresas',
    seoTitle: 'Integraciones de software en Costa Rica | Asystec',
    description:
      'Integraciones de software para empresas en Costa Rica: APIs, facturacion, POS, pagos, cobros, reportes, portales y procesos internos.',
    eyebrow: 'Solucion Asystec',
    heroTitle: 'Integraciones de software para conectar sistemas, datos y procesos',
    answer:
      'Una integracion de software conecta sistemas que ya usa la empresa para reducir doble digitacion, consolidar datos, automatizar pasos repetitivos y mejorar reportes. Antes de desarrollarla conviene mapear que datos entran, que sistema manda, que errores pueden ocurrir y que necesita ver gerencia.',
    intro:
      'Asystec ayuda a pymes y empresas en Costa Rica a evaluar integraciones entre POS, facturacion electronica, cobros, CRM, reportes, portales, APIs y plataformas internas cuando el proceso comercial ya no puede depender de archivos separados o digitacion manual.',
    primaryCta: contactCta,
    secondaryCta: whatsappCta,
    highlights: [
      'Responder a busquedas de integraciones de software en Costa Rica.',
      'Conectar la necesidad con plataformas, POS, cobros, CRM y reportes.',
      'Preparar una demo tecnica-comercial con datos, sistemas y responsables.',
      'Evitar promesas genericas: cada integracion depende del proceso real.',
    ],
    modules: [
      'APIs y conectores entre sistemas',
      'Facturacion electronica y POS',
      'Pagos, cobros y cuentas por cobrar',
      'CRM, clientes y seguimiento comercial',
      'Reportes gerenciales y consolidacion de datos',
      'Portales internos o de clientes',
      'Automatizacion de tareas repetitivas',
      'Validacion, errores y trazabilidad',
    ],
    sections: [
      {
        title: 'Cuando una integracion empieza a tener sentido',
        body: 'La senal mas clara aparece cuando el equipo digita la misma informacion en varios sistemas, exporta archivos para cruzar datos, mantiene reportes manuales o depende de una persona para mover informacion entre ventas, facturacion, cobros y gerencia.',
        items: [
          'Duplicacion de clientes, facturas, pagos o productos',
          'Reportes que se preparan a mano cada semana',
          'Sistemas externos que no conversan con el flujo local',
          'Errores por copiar y pegar datos entre plataformas',
        ],
      },
      {
        title: 'Que debe revisarse antes de cotizar',
        body: 'Una buena integracion no empieza por programar. Primero se define que sistema es fuente de verdad, que datos viajan, con que frecuencia, que reglas deben validarse y como se manejan errores cuando un servicio externo no responde.',
        items: [
          'Sistema origen y sistema destino',
          'Campos, reglas y permisos involucrados',
          'Frecuencia: tiempo real, por lote o bajo demanda',
          'Manejo de errores, bitacora y soporte',
        ],
      },
      {
        title: 'Integraciones frecuentes para pymes',
        body: 'El alcance puede ir desde conectar facturacion con ventas y cobros hasta crear portales, APIs o reportes consolidados. La prioridad debe ser reducir friccion en el proceso que mas afecta caja, atencion al cliente o decisiones gerenciales.',
        items: [
          'POS con facturacion electronica e inventario',
          'Cobros, pagos, saldos y estados de cuenta',
          'CRM con seguimiento comercial o soporte',
          'Reportes que consolidan varias fuentes de datos',
        ],
      },
      {
        title: 'Como llevar el caso a una demo',
        body: 'Para que la conversacion sea util, conviene llegar con ejemplos reales: pantallas actuales, archivos que se exportan, campos obligatorios, reportes esperados, responsables y errores que hoy consumen tiempo. Asi se define si basta configurar, integrar o desarrollar una plataforma a medida.',
        items: [
          'Mostrar el flujo actual de inicio a fin',
          'Separar datos obligatorios de datos deseables',
          'Confirmar restricciones de cada proveedor o API',
          'Definir quien valida el resultado en produccion',
        ],
      },
    ],
    decisionTable: {
      title: 'Preguntas para evaluar una integracion',
      body: 'Esta tabla ayuda a convertir una solicitud general de integracion en una conversacion concreta sobre alcance, riesgo, datos y valor comercial.',
      rows: [
        {
          factor: 'Fuente de verdad',
          question: 'Que sistema debe mandar para clientes, productos, facturas, pagos o saldos?',
          impact: 'Evita conflictos de datos y define que pasa cuando dos sistemas tienen informacion distinta.',
        },
        {
          factor: 'Frecuencia y volumen',
          question:
            'La informacion debe viajar en tiempo real, por lote diario o solo cuando alguien ejecuta una accion?',
          impact: 'Afecta arquitectura, monitoreo, costos de operacion y tolerancia a fallos.',
        },
        {
          factor: 'Reglas y errores',
          question: 'Que validaciones, permisos, campos obligatorios y mensajes de error debe respetar el flujo?',
          impact: 'Define trazabilidad, soporte y como se corrige una transaccion cuando algo falla.',
        },
        {
          factor: 'Valor para gerencia',
          question: 'Que decision o proceso mejora cuando la integracion funciona correctamente?',
          impact: 'Prioriza integraciones que reducen trabajo manual, aceleran cobro o mejoran reportes utiles.',
        },
      ],
    },
    faqs: [
      {
        question: 'Que es una integracion de software para una empresa?',
        answer:
          'Es una conexion entre sistemas para que datos como clientes, productos, ventas, facturas, pagos, saldos o reportes fluyan sin digitacion duplicada. Puede usar APIs, archivos, procesos programados o una plataforma intermedia segun el caso.',
      },
      {
        question: 'Asystec puede integrar POS, facturacion, cobros o CRM?',
        answer:
          'Si. La evaluacion puede revisar Asystec POS, FacturacionApp, CobrosApp, CRM, reportes, plataformas internas o sistemas externos, siempre segun datos disponibles, reglas de negocio y restricciones de cada proveedor.',
      },
      {
        question: 'Cuanto tarda una integracion de software?',
        answer:
          'Depende del numero de sistemas, calidad de datos, APIs disponibles, reglas, pruebas y manejo de errores. Por eso conviene iniciar con una demo o diagnostico para separar una integracion sencilla de un desarrollo mas amplio.',
      },
      {
        question: 'Cuando conviene una plataforma a medida en vez de una integracion puntual?',
        answer:
          'Conviene cuando hay varios roles, aprobaciones, portales, reportes, permisos o reglas que no se resuelven conectando dos sistemas. En esos casos se puede evaluar una plataforma a medida con integraciones como parte del alcance.',
      },
    ],
    related: [
      { label: 'Plataformas a medida', href: '/plataformas' },
      { label: 'Software local vs extranjero', href: '/guias/software-local-vs-extranjero' },
      { label: 'CRM', href: '/soluciones/crm' },
      { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
      { label: 'Reportes', href: '/soluciones/reportes' },
      { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
      { label: 'Software para negocios', href: '/software-para-negocios-costa-rica' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
  },
];

const industry = (
  slug: string,
  title: string,
  description: string,
  answer: string,
  modules: string[],
  related: LandingLink[],
): LandingPageData => ({
  slug,
  path: `/industrias/${slug}`,
  kind: 'industry',
  schemaType: 'Service',
  title,
  seoTitle: `${title} | Asystec Costa Rica`,
  description,
  eyebrow: 'Industria',
  heroTitle: title,
  answer,
  intro:
    'Cada industria necesita lenguaje, prioridades y flujos distintos. Esta pagina aterriza las soluciones Asystec al tipo de negocio.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  highlights: [
    'Flujo de trabajo por industria',
    'Modulos conectados a la operacion',
    'Soporte local',
    'Ruta de demo personalizada',
  ],
  modules,
  sections: [
    {
      title: 'Dolores frecuentes',
      body: 'El objetivo es reducir procesos manuales, mejorar control y dar visibilidad a los indicadores que importan para este tipo de negocio.',
      items: modules.slice(0, 5),
    },
    {
      title: 'Soluciones relacionadas',
      body: 'Segun la operacion, puede aplicar Asystec POS, FacturacionApp, CobrosApp, FitPro o una plataforma a la medida.',
    },
  ],
  faqs: [
    {
      question: `Que software necesita ${title.toLowerCase()}?`,
      answer:
        'Depende del volumen de ventas, inventario, facturacion, cantidad de usuarios, sucursales y necesidad de reportes. La demo ayuda a definir el alcance correcto.',
    },
    {
      question: 'Se puede empezar con una version sencilla?',
      answer:
        'Si. Lo recomendable es iniciar con los modulos que resuelven el dolor principal y luego ampliar segun datos y prioridades.',
    },
  ],
  related,
});

export const industryPages: LandingPageData[] = [
  industry(
    'restaurantes',
    'Sistema POS para restaurantes',
    'Sistema POS y software operativo para restaurantes en Costa Rica: ventas, caja, inventario, facturacion, reportes y usuarios.',
    'Un restaurante necesita velocidad en caja, control de productos, cierres claros, facturacion en regla y reportes para tomar decisiones diarias.',
    [
      'Caja rapida',
      'Ventas por turno',
      'Inventario de productos',
      'Facturacion electronica',
      'Reportes de caja',
      'Usuarios',
    ],
    [
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Sistema POS', href: '/soluciones/pos' },
      { label: 'Reportes', href: '/soluciones/reportes' },
    ],
  ),
  {
    slug: 'minisuper',
    path: '/industrias/minisuper',
    kind: 'industry',
    schemaType: 'Service',
    title: 'Sistema POS para minisuper',
    seoTitle: 'Sistema POS para minisuper en Costa Rica | Asystec',
    description:
      'Sistema POS para minisuper en Costa Rica con caja rapida, codigos, inventario, facturacion electronica, cierres y reportes.',
    eyebrow: 'Industria',
    heroTitle: 'Sistema POS para minisuper con caja rapida, inventario y facturacion',
    answer:
      'Un minisuper en Costa Rica necesita vender rapido en caja, encontrar productos por codigo, controlar existencias, emitir comprobantes y revisar cierres sin frenar la atencion. Asystec POS conecta ventas, inventario, facturacion electronica y reportes para operar con menos controles separados.',
    intro:
      'Esta landing ayuda a duenos y administradores de minisuper, abastecedores y tiendas de conveniencia a evaluar que debe cubrir un POS antes de coordinar una demo.',
    primaryCta: contactCta,
    secondaryCta: whatsappCta,
    highlights: [
      'Caja rapida para ventas de alto movimiento',
      'Productos, codigos y existencias conectados',
      'Facturacion electronica dentro del flujo de venta',
      'Cierres y reportes para administrar mejor compras y caja',
    ],
    modules: [
      'Punto de venta',
      'Codigos de productos',
      'Inventario',
      'Facturacion electronica',
      'Cierres de caja',
      'Reportes',
    ],
    sections: [
      {
        title: 'Dolores frecuentes en minisuper',
        body: 'Cuando las ventas son rapidas y el inventario cambia todos los dias, el negocio puede perder control si caja, productos, existencias y facturacion viven en herramientas separadas.',
        items: [
          'Filas lentas porque el equipo no encuentra productos o precios',
          'Existencias que no coinciden con compras, bodega o estante',
          'Cierres de caja revisados tarde o con datos incompletos',
          'Reportes insuficientes para decidir reposicion y margen',
        ],
      },
      {
        title: 'Flujo que conviene controlar',
        body: 'Un POS para minisuper debe cubrir el ciclo diario: vender, facturar, rebajar inventario, cerrar caja y consultar reportes para que administracion no dependa de recuentos manuales.',
        items: [
          'Busqueda por codigo, nombre o categoria',
          'Ventas conectadas con inventario y comprobantes',
          'Usuarios y permisos para caja y administracion',
          'Reportes de ventas, productos, cierres y movimientos',
        ],
      },
      {
        title: 'Que preparar antes de una demo',
        body: 'Para definir el alcance conviene revisar cantidad de productos, cajas, usuarios, categorias, necesidad de codigos de barras, facturacion y reportes que se usan para compras o gerencia.',
        items: [
          'Cantidad aproximada de productos y categorias',
          'Numero de cajas, usuarios y turnos',
          'Uso actual de inventario, codigos y facturacion',
          'Reportes necesarios para compras, ventas y cierre diario',
        ],
      },
    ],
    decisionTable: {
      title: 'Criterios para elegir POS para un minisuper',
      body: 'Estas preguntas ayudan a comparar opciones antes de comprar por precio o lista de funciones, y sirven para llevar una demo enfocada en el flujo real del negocio.',
      rows: [
        {
          factor: 'Caja rapida',
          question: 'El equipo puede vender por codigo, buscar productos y corregir errores sin detener la fila?',
          impact: 'La velocidad de caja afecta atencion, cierres y adopcion del sistema por parte del personal.',
        },
        {
          factor: 'Inventario',
          question: 'Las ventas rebajan existencias y dejan historial para revisar compras, faltantes o ajustes?',
          impact: 'Si inventario y caja no estan conectados, el negocio termina conciliando datos manualmente.',
        },
        {
          factor: 'Facturacion',
          question: 'La facturacion electronica queda dentro del flujo de venta diario?',
          impact: 'Separar facturacion del POS agrega pasos, retrabajo y riesgo de errores operativos.',
        },
        {
          factor: 'Reportes',
          question: 'El sistema muestra ventas, cierres, productos y movimientos utiles para administrar?',
          impact: 'Sin reportes accionables, compras y supervision dependen de percepcion o archivos separados.',
        },
        {
          factor: 'Crecimiento',
          question: 'Puede crecer a mas cajas, usuarios, bodegas o sucursales si el negocio lo necesita?',
          impact: 'Elegir solo para el problema de hoy puede obligar a migrar cuando el negocio crece.',
        },
      ],
    },
    faqs: [
      {
        question: 'Que debe tener un POS para minisuper?',
        answer:
          'Debe cubrir caja rapida, busqueda de productos, codigos, inventario, facturacion electronica, cierres, usuarios y reportes para revisar ventas, movimientos y productos.',
      },
      {
        question: 'Sirve si el negocio maneja muchos productos y codigos?',
        answer:
          'Si. Lo importante es preparar el catalogo, categorias, codigos y reglas de venta para que caja e inventario usen la misma informacion desde el inicio.',
      },
      {
        question: 'Puedo empezar con caja e inventario y agregar mas despues?',
        answer:
          'Si. Una implementacion puede iniciar con ventas, productos, inventario y facturacion, y luego ampliar usuarios, reportes, permisos o sucursales segun el crecimiento.',
      },
      {
        question: 'Que informacion conviene llevar a la demo?',
        answer:
          'Conviene llevar cantidad de productos, cajas, usuarios, categorias, forma actual de facturar, reportes necesarios y problemas concretos de inventario o cierres.',
      },
    ],
    related: [
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Sistema POS', href: '/soluciones/pos' },
      { label: 'Inventario', href: '/soluciones/inventario' },
      { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
      { label: 'Reportes', href: '/soluciones/reportes' },
      { label: 'Cuanto cuesta un POS', href: '/guias/cuanto-cuesta-un-pos-costa-rica' },
      { label: 'Como elegir un POS', href: '/guias/como-elegir-sistema-pos' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
  },
  {
    slug: 'ferreterias',
    path: '/industrias/ferreterias',
    kind: 'industry',
    schemaType: 'Service',
    title: 'Software para ferreterias',
    seoTitle: 'Software para ferreterias en Costa Rica | Asystec',
    description:
      'Software para ferreterias en Costa Rica con POS, inventario, catalogo amplio, codigos, facturacion electronica, reportes y control operativo.',
    eyebrow: 'Industria',
    heroTitle: 'Software para ferreterias con POS, inventario y facturacion',
    answer:
      'Una ferreteria en Costa Rica necesita encontrar productos rapido, controlar un catalogo amplio, revisar existencias, vender en caja, emitir comprobantes y ver reportes sin depender de hojas separadas. Asystec conecta POS, inventario, facturacion y control operativo para reducir errores en ventas y bodega.',
    intro:
      'Esta landing aterriza la demanda de software para ferreterias hacia soluciones Asystec que ordenan caja, catalogo, inventario, facturacion electronica y reportes para comercios con muchos productos.',
    primaryCta: contactCta,
    secondaryCta: whatsappCta,
    highlights: [
      'Catalogo amplio con busqueda rapida',
      'Inventario, existencias y movimientos',
      'Caja, ventas y facturacion electronica',
      'Reportes para compras, rotacion y gerencia',
    ],
    modules: ['Catalogo', 'Codigos', 'Inventario', 'Ventas', 'Facturacion electronica', 'Reportes'],
    sections: [
      {
        title: 'Dolores frecuentes en ferreterias',
        body: 'Cuando el catalogo crece, una ferreteria puede perder ventas por busquedas lentas, existencias desactualizadas, precios inconsistentes o inventario manejado en archivos separados.',
        items: [
          'Productos similares dificiles de encontrar en caja',
          'Existencias que no coinciden con bodega o estante',
          'Facturacion y ventas separadas del control de inventario',
          'Compras y reposicion decididas sin reportes claros',
        ],
      },
      {
        title: 'Flujo operativo que conviene controlar',
        body: 'Un sistema para ferreterias debe conectar catalogo, caja, facturacion, inventario y reportes para que ventas, bodega y gerencia trabajen con la misma informacion.',
        items: [
          'Catalogo de productos, familias, codigos y precios',
          'Ventas en caja conectadas con inventario',
          'Comprobantes y clientes dentro del flujo comercial',
          'Reportes para rotacion, faltantes, ventas y margen',
        ],
      },
      {
        title: 'Que revisar antes de una demo',
        body: 'Para definir el alcance conviene revisar cantidad de productos, usuarios, cajas, bodegas, necesidad de codigos de barras, reportes esperados y si se debe migrar inventario desde Excel.',
        items: [
          'Volumen de productos, codigos y categorias',
          'Cantidad de cajas, usuarios y permisos',
          'Manejo de inventario por estante, bodega o sucursal',
          'Reportes de ventas, compras, rotacion y faltantes',
        ],
      },
    ],
    decisionTable: {
      title: 'Criterios para elegir software para una ferreteria',
      body: 'Esta tabla ayuda a preparar una demo o cotizacion enfocada en el flujo real de una ferreteria, no solo en la lista general de funciones.',
      rows: [
        {
          factor: 'Catalogo y busqueda',
          question: 'Cuantos productos, codigos, familias o variantes maneja la ferreteria?',
          impact:
            'Define que tan importante es buscar rapido en caja, ordenar categorias y evitar ventas con productos incorrectos.',
        },
        {
          factor: 'Inventario y bodegas',
          question: 'Las existencias se controlan por tienda, bodega, estante o sucursal?',
          impact: 'Afecta movimientos, conteos, reposicion, reportes y visibilidad para compras.',
        },
        {
          factor: 'Caja y facturacion',
          question: 'El punto de venta debe emitir comprobantes y rebajar inventario en el mismo flujo?',
          impact: 'Reduce doble digitacion y ayuda a que ventas, facturacion e inventario no queden separados.',
        },
        {
          factor: 'Precios y margenes',
          question: 'El negocio necesita revisar costos, precios, descuentos o margenes por categoria?',
          impact: 'Permite tomar mejores decisiones de compra, promocion y control comercial.',
        },
        {
          factor: 'Reportes y permisos',
          question: 'Que puede ver o editar cada usuario y que reportes necesita gerencia?',
          impact: 'Ayuda a separar caja, administracion y gerencia con controles mas claros.',
        },
      ],
    },
    faqs: [
      {
        question: 'Que software necesita una ferreteria en Costa Rica?',
        answer:
          'Necesita un sistema que conecte catalogo, busqueda de productos, ventas, inventario, facturacion electronica, usuarios y reportes. Si maneja bodegas o sucursales, tambien conviene revisar permisos y existencias por ubicacion.',
      },
      {
        question: 'Asystec POS sirve para ferreterias?',
        answer:
          'Puede aplicar cuando la ferreteria necesita caja, ventas, inventario, facturacion electronica y reportes. La demo debe revisar catalogo, codigos, usuarios, bodegas y flujo de facturacion para definir el alcance correcto.',
      },
      {
        question: 'Cuando conviene dejar Excel para controlar inventario?',
        answer:
          'Conviene migrar cuando las existencias afectan ventas, compras, faltantes, facturacion o reportes. Un sistema ayuda a tener historial, usuarios, movimientos y datos mas trazables que una hoja separada.',
      },
      {
        question: 'Puedo coordinar una demo para mi ferreteria?',
        answer:
          'Si. Puedes coordinar una demo o escribir por WhatsApp para revisar catalogo, inventario, caja, facturacion, usuarios, reportes y migracion de datos actuales.',
      },
    ],
    related: [
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Inventario', href: '/soluciones/inventario' },
      { label: 'Alternativas a Excel', href: '/guias/alternativas-excel-inventario' },
      { label: 'Cuanto cuesta un POS', href: '/guias/cuanto-cuesta-un-pos-costa-rica' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
  },
  industry(
    'retail',
    'Sistema para tiendas retail',
    'Software para tiendas retail con POS, inventario, ventas, caja, reportes, usuarios y multi-sucursal.',
    'Una tienda retail necesita controlar ventas, inventario, caja, productos, descuentos, usuarios y reportes para crecer con orden.',
    ['POS', 'Inventario', 'Ventas', 'Caja', 'Multi-sucursal', 'Reportes'],
    [
      { label: 'Sistema POS', href: '/soluciones/pos' },
      { label: 'Multi-sucursal', href: '/soluciones/multi-sucursal' },
      { label: 'Reportes', href: '/soluciones/reportes' },
    ],
  ),
  {
    slug: 'distribuidores',
    path: '/industrias/distribuidores',
    kind: 'industry',
    schemaType: 'Service',
    title: 'Software para distribuidores',
    seoTitle: 'Software para distribuidores en Costa Rica',
    description:
      'Software para distribuidores en Costa Rica con ventas, inventario, cuentas por cobrar, facturacion, rutas, reportes y control multi-sucursal.',
    eyebrow: 'Industria',
    heroTitle: 'Software para distribuidores, inventario y cuentas por cobrar',
    answer:
      'Un distribuidor en Costa Rica necesita controlar inventario, ventas, facturacion, cuentas por cobrar, vendedores, rutas, bodegas y reportes sin depender de hojas separadas. Asystec conecta POS, cobros, reportes e integraciones para ordenar la operacion comercial.',
    intro:
      'Esta landing aterriza la demanda de software para distribuidores, mayoristas y negocios con ventas recurrentes hacia soluciones Asystec que conectan inventario, cobranza, reportes y control por sucursal.',
    primaryCta: contactCta,
    secondaryCta: whatsappCta,
    highlights: [
      'Inventario y existencias por bodega',
      'Cuentas por cobrar y saldos por cliente',
      'Reportes de ventas, rutas y cartera',
      'Permisos para vendedores, caja y gerencia',
    ],
    modules: ['Inventario', 'Ventas', 'Facturacion', 'Cuentas por cobrar', 'Reportes', 'Multi-sucursal'],
    sections: [
      {
        title: 'Dolores frecuentes en distribucion',
        body: 'Cuando ventas, bodega y cobros trabajan con datos separados, la empresa pierde visibilidad sobre existencias, saldos pendientes, pedidos, rutas y desempeno comercial.',
        items: [
          'Existencias desactualizadas entre bodega y ventas',
          'Saldos por cliente controlados en hojas manuales',
          'Pedidos, facturacion y cobros sin trazabilidad completa',
          'Reportes de vendedores o rutas dificiles de comparar',
        ],
      },
      {
        title: 'Flujo que conviene evaluar',
        body: 'Un sistema para distribuidores debe conectar catalogo, inventario, ventas, facturacion, pagos y reportes para que gerencia pueda revisar cartera, rotacion y cumplimiento comercial.',
        items: [
          'Catalogo de productos, precios y clientes',
          'Ventas, pedidos o facturacion por usuario',
          'Cartera, pagos, saldos y estados de cuenta',
          'Indicadores por sucursal, bodega, ruta o vendedor',
        ],
      },
      {
        title: 'Que revisar antes de una demo',
        body: 'Para definir alcance conviene mapear numero de vendedores, bodegas, sucursales, productos, condiciones de credito, reportes esperados e integraciones existentes.',
        items: [
          'Cantidad de clientes activos y vendedores',
          'Manejo de credito, pagos parciales y saldos vencidos',
          'Necesidad de inventario por bodega o sucursal',
          'Integraciones con facturacion, POS o reportes actuales',
        ],
      },
    ],
    faqs: [
      {
        question: 'Que software necesita un distribuidor en Costa Rica?',
        answer:
          'Necesita un sistema que conecte clientes, productos, inventario, ventas, facturacion, cuentas por cobrar y reportes. Si maneja bodegas, rutas o sucursales, tambien debe revisar permisos e indicadores por punto operativo.',
      },
      {
        question: 'Como se controla la cartera de clientes en una distribuidora?',
        answer:
          'Conviene registrar creditos, pagos, saldos, estados de cuenta y reportes por cliente para que ventas, cobros y gerencia trabajen con la misma informacion.',
      },
      {
        question: 'Puedo coordinar una demo para una distribuidora?',
        answer:
          'Si. Puedes escribir por WhatsApp o coordinar una demo para revisar inventario, ventas, cartera, sucursales, usuarios e integraciones necesarias.',
      },
    ],
    related: [
      { label: 'Inventario', href: '/soluciones/inventario' },
      { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
      { label: 'Multi-sucursal', href: '/soluciones/multi-sucursal' },
      { label: 'Asystec POS', href: '/asystec-pos' },
    ],
  },
  industry(
    'clinicas',
    'Software para clinicas',
    'Software y plataformas para clinicas con clientes, citas, cobros, facturacion, reportes y procesos administrativos.',
    'Una clinica necesita orden administrativo, informacion de clientes, cobros, reportes y procesos claros para reducir friccion operativa.',
    ['Clientes', 'Citas o servicios', 'Cobros', 'Facturacion', 'Reportes', 'Usuarios'],
    [
      { label: 'CRM', href: '/soluciones/crm' },
      { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
      { label: 'Plataformas', href: '/plataformas' },
    ],
  ),
  industry(
    'salones-belleza',
    'Software para salones de belleza',
    'Software para salones de belleza con clientes, citas, ventas, cobros, inventario y reportes.',
    'Un salon de belleza necesita controlar clientes, servicios, productos, agenda, cobros y reportes sin depender solo de mensajes o cuadernos.',
    ['Clientes', 'Agenda', 'Ventas', 'Cobros', 'Inventario', 'Reportes'],
    [
      { label: 'CRM', href: '/soluciones/crm' },
      { label: 'Inventario', href: '/soluciones/inventario' },
      { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
    ],
  ),
  {
    slug: 'gimnasios',
    path: '/industrias/gimnasios',
    kind: 'industry',
    schemaType: 'Service',
    title: 'Software para gimnasios',
    seoTitle: 'Software para gimnasios en Costa Rica | Asystec',
    description:
      'Software para gimnasios y centros fitness en Costa Rica con membresias, pagos, clases, cupos, asistencia, reportes y seguimiento comercial.',
    eyebrow: 'Industria',
    heroTitle: 'Software para gimnasios, membresias y centros fitness',
    answer:
      'Un gimnasio en Costa Rica necesita controlar membresias, pagos, vencimientos, clases, cupos, asistencia y reportes sin depender de hojas de calculo o mensajes dispersos. FitPro y Asystec ayudan a ordenar esa operacion desde una plataforma enfocada en centros fitness.',
    intro:
      'Esta landing conecta la demanda de software para gimnasios con FitPro, cobros recurrentes, reportes y una ruta directa para coordinar una demo comercial.',
    primaryCta: contactCta,
    secondaryCta: whatsappCta,
    highlights: [
      'Membresias y renovaciones',
      'Cobros, saldos y vencimientos',
      'Clases, cupos y asistencia',
      'Reportes para recepcion y gerencia',
    ],
    modules: ['Clientes', 'Membresias', 'Pagos', 'Clases', 'Check-ins', 'Reportes'],
    sections: [
      {
        title: 'Dolores frecuentes en gimnasios',
        body: 'Cuando recepcion, ventas y entrenadores trabajan con listas separadas, el gimnasio pierde visibilidad sobre quien esta activo, quien debe, que clases tienen cupo y que ingresos se pueden revisar al cierre.',
        items: [
          'Renovaciones manuales y membresias vencidas',
          'Pagos pendientes sin seguimiento claro',
          'Cupos de clases controlados por mensajes',
          'Reportes de asistencia e ingresos dificiles de consultar',
        ],
      },
      {
        title: 'Como lo conecta FitPro',
        body: 'FitPro centraliza clientes, membresias, pagos, clases y asistencia para que la operacion diaria sea mas facil de revisar y el equipo pueda tomar decisiones con datos del negocio.',
        items: [
          'Clientes y membresias activas',
          'Pagos, saldos y renovaciones',
          'Agenda de clases con cupos',
          'Indicadores de asistencia e ingresos',
        ],
      },
      {
        title: 'Que revisar antes de una demo',
        body: 'Para cotizar o elegir el alcance conviene conocer cantidad de sedes, usuarios, tipos de membresia, clases, volumen de clientes y reportes que necesita gerencia.',
        items: [
          'Cantidad de sucursales o sedes',
          'Tipos de membresia y cobro',
          'Necesidad de control de acceso o check-ins',
          'Reportes comerciales y operativos esperados',
        ],
      },
    ],
    faqs: [
      {
        question: 'Que software necesita un gimnasio en Costa Rica?',
        answer:
          'Necesita un sistema que controle clientes, membresias, pagos, vencimientos, clases, asistencia y reportes. Si tambien maneja varias sedes, conviene revisar permisos, usuarios e indicadores por sucursal.',
      },
      {
        question: 'FitPro sirve para clases y cupos?',
        answer:
          'Si. FitPro esta orientado a centros fitness que necesitan ordenar horarios, cupos, asistencia y seguimiento de clientes con membresias o pagos recurrentes.',
      },
      {
        question: 'Puedo coordinar una demo para mi gimnasio?',
        answer:
          'Si. Puedes escribir por WhatsApp o coordinar una demo para revisar el flujo actual, cantidad de clientes, membresias, clases y reportes que necesita el negocio.',
      },
    ],
    related: [
      { label: 'FitPro', href: '/fitpro' },
      { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
      { label: 'Reportes', href: '/soluciones/reportes' },
      { label: 'Contacto', href: '/contact' },
    ],
  },
  {
    slug: 'talleres',
    path: '/industrias/talleres',
    kind: 'industry',
    schemaType: 'Service',
    title: 'Software para talleres',
    seoTitle: 'Software para talleres en Costa Rica | Asystec',
    description:
      'Software para talleres en Costa Rica con ordenes de trabajo, clientes, diagnosticos, aprobaciones, cobros, estados y reportes operativos.',
    eyebrow: 'Industria',
    heroTitle: 'Software para talleres con ordenes de trabajo y seguimiento',
    answer:
      'Un taller en Costa Rica necesita registrar clientes, vehiculos o equipos, ordenes de trabajo, diagnosticos, aprobaciones, repuestos, cobros, estados y entregas sin perder trazabilidad entre recepcion, tecnico, caja y gerencia.',
    intro:
      'Esta landing conecta la demanda de software para talleres con TallerApp y las soluciones Asystec para controlar ordenes, saldos, seguimiento de clientes y reportes de operacion.',
    primaryCta: contactCta,
    secondaryCta: whatsappCta,
    highlights: [
      'Ordenes de trabajo por estado',
      'Historial de clientes, equipos o vehiculos',
      'Aprobaciones, cobros y saldos pendientes',
      'Reportes para recepcion, caja y gerencia',
    ],
    modules: ['Ordenes de trabajo', 'Clientes', 'Diagnosticos', 'Aprobaciones', 'Cobros', 'Reportes'],
    sections: [
      {
        title: 'Dolores frecuentes en talleres',
        body: 'Cuando las ordenes se manejan en papeles, mensajes o hojas separadas, el taller pierde visibilidad sobre trabajos pendientes, aprobaciones, saldos, repuestos, prioridades y entregas prometidas.',
        items: [
          'Ordenes sin estado claro entre recepcion y tecnico',
          'Diagnosticos o aprobaciones dispersas en mensajes',
          'Saldos pendientes que caja no ve a tiempo',
          'Historial de clientes dificil de consultar en nuevas visitas',
        ],
      },
      {
        title: 'Flujo operativo que conviene controlar',
        body: 'Un sistema para talleres debe ordenar el recorrido completo: ingreso del cliente, registro de equipo o vehiculo, diagnostico, aprobacion, trabajo, cobro y entrega.',
        items: [
          'Recepcion con datos del cliente y descripcion del trabajo',
          'Estados para diagnostico, aprobacion, proceso y entrega',
          'Cobros, abonos o saldos vinculados a cada orden',
          'Reportes de trabajos abiertos, cerrados y pendientes',
        ],
      },
      {
        title: 'Como encaja TallerApp',
        body: 'TallerApp esta orientado a operaciones por orden de trabajo donde el equipo necesita trazabilidad, estados, clientes, diagnosticos, aprobaciones, cobros y seguimiento hasta la entrega.',
        items: [
          'Ordenes y estados para seguimiento diario',
          'Historial por cliente, equipo o vehiculo',
          'Control de cobros asociados a trabajos',
          'Informacion visible para recepcion y gerencia',
        ],
      },
      {
        title: 'Que revisar antes de una demo',
        body: 'Para definir alcance conviene revisar tipos de trabajo, cantidad de usuarios, roles, volumen de ordenes, necesidad de facturacion, reportes y si el taller requiere integrarse con otros sistemas.',
        items: [
          'Roles: recepcion, tecnico, caja, administracion y gerencia',
          'Datos que debe guardar cada orden de trabajo',
          'Estados, aprobaciones y entregas que usa el taller',
          'Reportes, cobros o integraciones necesarias',
        ],
      },
    ],
    decisionTable: {
      title: 'Criterios para elegir software para un taller',
      body: 'Esta tabla ayuda a preparar una demo comercial sin reducir la decision solo al precio. El objetivo es revisar si el sistema cubre el flujo real del taller.',
      rows: [
        {
          factor: 'Tipo de taller',
          question: 'Trabaja con vehiculos, equipos, servicios tecnicos u ordenes de otro tipo?',
          impact: 'Define los campos de la orden, el historial necesario y los reportes relevantes.',
        },
        {
          factor: 'Estados de trabajo',
          question: 'Que etapas necesita controlar desde ingreso hasta entrega?',
          impact: 'Ayuda a evitar trabajos sin seguimiento, aprobaciones perdidas o entregas sin cierre.',
        },
        {
          factor: 'Cobros y saldos',
          question: 'El taller maneja abonos, pagos parciales o saldos pendientes por orden?',
          impact: 'Conecta recepcion, caja y gerencia con la misma informacion financiera.',
        },
        {
          factor: 'Usuarios y permisos',
          question: 'Quienes pueden ver, editar, aprobar, cobrar o cerrar trabajos?',
          impact: 'Reduce errores operativos y protege informacion sensible del negocio.',
        },
        {
          factor: 'Reportes e integraciones',
          question: 'Que indicadores necesita gerencia y que sistemas actuales deben conectarse?',
          impact: 'Puede requerir reportes por estado, responsable, cliente, ingreso o integraciones externas.',
        },
      ],
    },
    faqs: [
      {
        question: 'Que software necesita un taller en Costa Rica?',
        answer:
          'Necesita un sistema que controle clientes, ordenes de trabajo, estados, diagnosticos, aprobaciones, cobros, saldos, entregas y reportes. Si maneja facturacion o integraciones, esos puntos deben revisarse durante la demo.',
      },
      {
        question: 'TallerApp sirve solo para talleres automotrices?',
        answer:
          'No necesariamente. TallerApp puede aplicar a operaciones que trabajan por ordenes, diagnosticos, aprobaciones y entregas, incluyendo talleres automotrices y otros servicios tecnicos.',
      },
      {
        question: 'Como ayuda un sistema a controlar trabajos pendientes?',
        answer:
          'Ayuda al registrar cada orden con estado, cliente, responsable, cobros y seguimiento. Eso facilita revisar trabajos abiertos, pendientes de aprobacion, listos para entrega o cerrados.',
      },
      {
        question: 'Puedo coordinar una demo para mi taller?',
        answer:
          'Si. Puedes coordinar una demo o escribir por WhatsApp para revisar el flujo actual del taller, roles, ordenes, cobros, reportes e integraciones necesarias.',
      },
    ],
    related: [
      { label: 'TallerApp', href: '/tallerapp' },
      { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
      { label: 'CRM', href: '/soluciones/crm' },
      { label: 'Reportes', href: '/soluciones/reportes' },
    ],
  },
  industry(
    'servicios-profesionales',
    'Software para servicios profesionales',
    'Software para servicios profesionales con clientes, cobros, facturacion, reportes, CRM y plataformas a medida.',
    'Un negocio de servicios necesita seguimiento de clientes, cobros, facturacion, reportes y procesos claros para vender y atender mejor.',
    ['Clientes', 'Seguimiento', 'Cobros', 'Facturacion', 'Reportes', 'CRM'],
    [
      { label: 'CRM', href: '/soluciones/crm' },
      { label: 'CobrosApp', href: '/cobrosapp' },
      { label: 'Plataformas', href: '/plataformas' },
    ],
  ),
];

const guide = (
  slug: string,
  title: string,
  description: string,
  answer: string,
  modules: string[],
  related: LandingLink[],
): LandingPageData => ({
  slug,
  path: `/guias/${slug}`,
  kind: 'guide',
  schemaType: 'Article',
  title,
  seoTitle: `${title} | Guia Asystec`,
  description,
  eyebrow: 'Guia de decision',
  heroTitle: title,
  answer,
  intro:
    'Esta guia responde una pregunta frecuente de compra para ayudar a comparar opciones sin depender solo de precio o promesas comerciales.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  highlights: ['Criterios de decision', 'Preguntas para cotizar', 'Riesgos comunes', 'Siguiente paso recomendado'],
  modules,
  sections: [
    {
      title: 'Criterios de evaluacion',
      body: 'Antes de elegir software conviene revisar procesos, datos, soporte, integraciones, usuarios, crecimiento y costo total de operacion.',
      items: modules,
    },
    {
      title: 'Siguiente paso',
      body: 'La mejor forma de aterrizar la decision es revisar el flujo actual, identificar el dolor principal y comparar opciones con una demo enfocada en el negocio.',
    },
  ],
  faqs: [
    {
      question: 'La opcion mas barata siempre conviene?',
      answer:
        'No necesariamente. El costo real incluye soporte, configuracion, migracion, integraciones, estabilidad y tiempo que el equipo ahorra o pierde.',
    },
    {
      question: 'Que informacion debo preparar para una demo?',
      answer:
        'Conviene tener claro el tipo de negocio, cantidad de usuarios, sucursales, volumen de ventas, inventario, facturacion y reportes necesarios.',
    },
  ],
  related,
});

export const guidePages: LandingPageData[] = [
  {
    ...guide(
      'como-elegir-sistema-pos',
      'Como elegir un sistema POS para una tienda',
      'Guia para elegir un sistema POS en Costa Rica considerando caja, inventario, facturacion electronica, soporte, reportes, usuarios e integraciones.',
      'Para elegir un POS en Costa Rica conviene probar el flujo real de venta: caja, productos, facturacion electronica, inventario, usuarios, cierres, reportes y soporte. La mejor opcion no es la que tiene mas funciones, sino la que reduce errores diarios y puede crecer con el negocio.',
      ['Caja y ventas', 'Inventario', 'Facturacion electronica', 'Reportes', 'Soporte', 'Seguridad'],
      [
        { label: 'Asystec POS', href: '/asystec-pos' },
        { label: 'Sistema POS', href: '/soluciones/pos' },
        { label: 'Cuanto cuesta un POS', href: '/guias/cuanto-cuesta-un-pos-costa-rica' },
        { label: 'Coordinar demo', href: '/contact' },
      ],
    ),
    intro:
      'Esta guia ayuda a duenos y administradores de tiendas, minisuper, restaurantes y comercios a preparar una comparacion practica antes de contratar un sistema POS.',
    highlights: [
      'Separar funciones obligatorias de mejoras deseables.',
      'Probar caja, inventario y facturacion con escenarios reales.',
      'Comparar soporte, implementacion, migracion y crecimiento.',
      'Llegar a la demo con preguntas concretas para cotizar mejor.',
    ],
    modules: [
      'Caja rapida y cierres',
      'Catalogo, codigos e inventario',
      'Facturacion electronica',
      'Usuarios y permisos',
      'Reportes para gerencia',
      'Soporte, migracion e integraciones',
    ],
    sections: [
      {
        title: 'Empieza por el flujo de venta',
        body: 'Antes de comparar pantallas o precios, conviene describir como vende el negocio: quien atiende, como busca productos, que comprobante emite, como cobra y que ocurre al cierre. Esa prueba revela si el POS calza con la operacion diaria.',
        items: [
          'Cantidad de cajas, usuarios y turnos',
          'Busqueda por codigo, categoria o descripcion',
          'Medios de pago y control de cierres',
          'Datos que deben quedar listos para administracion',
        ],
      },
      {
        title: 'Revisa inventario y productos',
        body: 'Un POS debil en inventario puede obligar a mantener hojas externas. La demo debe probar catalogo, existencias, codigos, movimientos, reportes y cualquier control por bodega o sucursal que el negocio necesite.',
        items: [
          'Productos, variantes, codigos y categorias',
          'Existencias, movimientos y ajustes',
          'Productos de alta rotacion o bajo margen',
          'Necesidad de bodegas, sucursales o alertas',
        ],
      },
      {
        title: 'Confirma facturacion y soporte',
        body: 'En Costa Rica la facturacion electronica, la salida a produccion y el soporte local pueden pesar tanto como las funciones. Un POS debe reducir friccion operativa cuando caja, facturacion o inventario se detienen.',
        items: [
          'Flujo para emitir comprobantes desde la venta',
          'Capacitacion para usuarios de caja y administracion',
          'Soporte durante implementacion y operacion diaria',
          'Ruta para resolver errores o cambios de configuracion',
        ],
      },
      {
        title: 'Evalua crecimiento antes de comprar',
        body: 'Aunque el negocio empiece pequeno, conviene saber si el sistema puede crecer a mas usuarios, cajas, reportes, bodegas, sucursales o integraciones sin rehacer el proceso desde cero.',
        items: [
          'Permisos por rol y trazabilidad de acciones',
          'Reportes para ventas, caja, inventario y gerencia',
          'Integraciones con otros sistemas si aplican',
          'Exportacion de datos y continuidad operativa',
        ],
      },
    ],
    decisionTable: {
      title: 'Criterios para comparar sistemas POS',
      body: 'Usa estas preguntas para evaluar opciones en una demo. La meta es comprobar si el sistema resuelve el proceso real del negocio, no solo si cumple una lista generica de funciones.',
      rows: [
        {
          factor: 'Caja y velocidad',
          question: 'El equipo puede vender, cobrar, anular y cerrar caja sin pasos manuales innecesarios?',
          impact: 'Afecta filas, errores de cobro, diferencias de caja y tiempo de capacitacion.',
        },
        {
          factor: 'Inventario',
          question: 'El POS rebaja existencias, permite buscar productos y muestra informacion util para reponer?',
          impact: 'Evita controles paralelos en Excel y mejora compras, disponibilidad y margen.',
        },
        {
          factor: 'Facturacion electronica',
          question: 'La venta y el comprobante quedan conectados en el mismo flujo operativo?',
          impact: 'Reduce doble digitacion, inconsistencias y problemas al revisar ventas o reportes.',
        },
        {
          factor: 'Reportes',
          question: 'Que puede revisar gerencia al cierre: ventas, productos, usuarios, caja o sucursales?',
          impact: 'Convierte el POS en una herramienta de decision, no solo en una caja registradora.',
        },
        {
          factor: 'Soporte y crecimiento',
          question: 'Quien acompana implementacion, migracion, capacitacion y cambios cuando el negocio crece?',
          impact: 'Define continuidad operativa y evita que el sistema quede corto al agregar usuarios o sucursales.',
        },
      ],
    },
    faqs: [
      {
        question: 'Que debe tener un buen sistema POS para una tienda en Costa Rica?',
        answer:
          'Debe cubrir caja, ventas, productos, inventario, facturacion electronica, usuarios, cierres, reportes y soporte. Si el negocio maneja varias cajas, bodegas o sucursales, tambien debe revisar permisos e indicadores por ubicacion.',
      },
      {
        question: 'Como comparo dos sistemas POS sin decidir solo por precio?',
        answer:
          'Prueba el flujo real: venta, busqueda de productos, comprobantes, inventario, cierres, reportes, usuarios, soporte e integraciones. Luego compara costo total, implementacion y tiempo que el equipo ahorra o pierde.',
      },
      {
        question: 'Cuando conviene cambiar de caja manual o Excel a un POS?',
        answer:
          'Conviene cuando hay errores de inventario, cierres lentos, facturacion separada, reportes incompletos, productos dificiles de controlar o crecimiento hacia mas usuarios, cajas o sucursales.',
      },
      {
        question: 'Puedo pedir una demo de POS con mi caso real?',
        answer:
          'Si. Puedes coordinar una demo con Asystec para revisar tipo de negocio, cajas, productos, inventario, facturacion, usuarios, reportes, soporte e integraciones antes de elegir.',
      },
    ],
    related: [
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Sistema POS', href: '/soluciones/pos' },
      { label: 'Cuanto cuesta un POS', href: '/guias/cuanto-cuesta-un-pos-costa-rica' },
      { label: 'Minisuper', href: '/industrias/minisuper' },
      { label: 'Restaurantes', href: '/industrias/restaurantes' },
      { label: 'Ferreterias', href: '/industrias/ferreterias' },
      { label: 'Retail', href: '/industrias/retail' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
  },
  {
    ...guide(
      'alternativas-excel-inventario',
      'Alternativas a Excel para controlar inventario',
      'Guia para pasar de inventario en Excel a un sistema con productos, movimientos, ventas, reportes y control por usuarios.',
      'Excel puede servir para empezar, pero cuando el inventario afecta ventas, compras, facturacion o reportes, conviene migrar a un sistema con productos, movimientos, usuarios, alertas e historial trazable.',
      ['Productos', 'Movimientos', 'Usuarios', 'Ventas', 'Alertas', 'Reportes'],
      [
        { label: 'Inventario', href: '/soluciones/inventario' },
        { label: 'Asystec POS', href: '/asystec-pos' },
        { label: 'Ferreterias', href: '/industrias/ferreterias' },
        { label: 'Coordinar demo', href: '/contact' },
      ],
    ),
    highlights: [
      'Identificar cuando Excel ya no alcanza para inventario.',
      'Separar control de productos, ventas, compras y reportes.',
      'Reducir errores por archivos duplicados o ediciones sin historial.',
      'Preparar una demo con datos reales del negocio.',
    ],
  },
  {
    ...guide(
      'software-local-vs-extranjero',
      'Software local vs software extranjero',
      'Comparativa para elegir entre software local y extranjero en Costa Rica segun soporte, facturacion electronica, integraciones, datos, costos y continuidad operativa.',
      'Para una pyme en Costa Rica, la decision entre software local y extranjero depende de facturacion electronica, soporte, integraciones, continuidad, propiedad de datos y costo total. Lo correcto no es elegir por pais, sino por ajuste al proceso critico del negocio.',
      ['Soporte', 'Facturacion electronica', 'Integraciones', 'Datos', 'Costo total', 'Continuidad'],
      [
        { label: 'Plataformas', href: '/plataformas' },
        { label: 'Integraciones', href: '/soluciones/integraciones' },
        { label: 'Software para negocios', href: '/software-para-negocios-costa-rica' },
        { label: 'Coordinar demo', href: '/contact' },
      ],
    ),
    intro:
      'Esta guia ayuda a gerentes y duenos de pymes a comparar una solucion local, una herramienta internacional o una plataforma a la medida antes de comprometer ventas, caja, inventario, facturacion o cobros.',
    highlights: [
      'Comparar soporte y salida a produccion, no solo funciones.',
      'Validar facturacion electronica e integraciones para Costa Rica.',
      'Revisar propiedad, exportacion y continuidad de los datos.',
      'Pedir una demo con el flujo real del negocio antes de decidir.',
    ],
    sections: [
      {
        title: 'Cuando conviene software local',
        body: 'Una opcion local suele convenir cuando el negocio necesita acompanamiento cercano, configuracion alineada al contexto fiscal de Costa Rica, soporte para salida a produccion o adaptaciones alrededor del proceso operativo.',
        items: [
          'Facturacion electronica y reglas locales son parte del flujo diario',
          'Caja, inventario, cobros o reportes no pueden quedar sin soporte',
          'Se requiere migracion, capacitacion o ajustes por industria',
          'El equipo necesita contacto directo para resolver dudas operativas',
        ],
      },
      {
        title: 'Cuando conviene software extranjero',
        body: 'Una herramienta extranjera puede tener sentido cuando el proceso es estandar, el equipo ya trabaja con esa categoria, no se requieren ajustes locales importantes y las integraciones cubren el flujo completo.',
        items: [
          'El proceso se adapta bien a plantillas globales',
          'No hay dependencia fuerte de configuracion fiscal local',
          'Las integraciones necesarias ya existen y estan probadas',
          'El soporte remoto, idioma y horarios no afectan la operacion',
        ],
      },
      {
        title: 'Riesgos que se deben revisar',
        body: 'El riesgo aparece cuando una decision barata o rapida deja procesos fuera del sistema. Antes de comprar, conviene probar ventas, facturacion, inventario, cobros, permisos, reportes y exportacion de datos.',
        items: [
          'Llevar controles criticos en hojas separadas despues de comprar',
          'No poder emitir, consultar o conciliar informacion fiscal clave',
          'Depender de soporte lejano cuando caja o cobros estan detenidos',
          'No tener una ruta clara para migrar datos si el sistema no funciona',
        ],
      },
      {
        title: 'Como decidir sin sesgo',
        body: 'La comparacion debe empezar con el flujo real: que vende la empresa, como factura, cuantos usuarios operan, que reportes necesita gerencia, que sistemas deben conectarse y que pasa si el sistema falla en horario laboral.',
        items: [
          'Documentar el flujo actual antes de ver demos',
          'Pedir prueba con productos, clientes o escenarios reales',
          'Comparar costo total: licencia, implementacion, soporte e integraciones',
          'Elegir el proveedor que reduzca mas riesgo operativo verificable',
        ],
      },
    ],
    decisionTable: {
      title: 'Comparativa para elegir software local o extranjero',
      body: 'Esta tabla resume preguntas que una pyme en Costa Rica puede llevar a una demo o cotizacion para evitar una decision basada solo en precio, marca o lista de funciones.',
      rows: [
        {
          factor: 'Facturacion electronica',
          question: 'El sistema cubre el flujo fiscal que usa mi negocio en Costa Rica?',
          impact: 'Si la facturacion queda fuera o requiere procesos manuales, aumenta el riesgo operativo y contable.',
        },
        {
          factor: 'Soporte y salida a produccion',
          question: 'Quien responde cuando caja, inventario, cobros o usuarios no pueden operar?',
          impact:
            'El soporte cercano puede reducir tiempo detenido durante implementacion, capacitacion y operacion diaria.',
        },
        {
          factor: 'Integraciones',
          question: 'Se conecta con POS, inventario, CRM, cobros, reportes o sistemas existentes?',
          impact: 'Sin integraciones claras, el equipo termina duplicando datos o manteniendo hojas paralelas.',
        },
        {
          factor: 'Datos y continuidad',
          question: 'Puedo exportar datos, auditar cambios y migrar si el negocio crece o cambia?',
          impact: 'La continuidad depende de no quedar encerrado en datos inaccesibles o procesos imposibles de mover.',
        },
        {
          factor: 'Costo total',
          question: 'La cotizacion separa licencia, implementacion, migracion, soporte y ajustes?',
          impact:
            'Un precio mensual bajo puede ocultar costos de configuracion, tiempo interno o trabajo manual permanente.',
        },
      ],
    },
    faqs: [
      {
        question: 'Es mejor usar software local o extranjero en Costa Rica?',
        answer:
          'Depende del proceso. Si el negocio necesita soporte cercano, facturacion electronica, integraciones locales o ajustes por industria, una opcion local puede reducir riesgo. Si el proceso es estandar y la herramienta extranjera cubre todo, tambien puede ser viable.',
      },
      {
        question: 'Que debo preguntar antes de contratar software extranjero?',
        answer:
          'Pregunta por soporte en tu horario, idioma, facturacion electronica, integraciones, exportacion de datos, costos de implementacion, seguridad, usuarios, permisos y que pasa si necesitas adaptar el proceso.',
      },
      {
        question: 'Cuando conviene una plataforma a la medida?',
        answer:
          'Conviene cuando el negocio tiene flujos propios, varios roles, integraciones especiales, reportes no estandar o procesos que una herramienta lista obliga a manejar fuera del sistema.',
      },
      {
        question: 'Puedo comparar opciones con Asystec antes de decidir?',
        answer:
          'Si. Puedes coordinar una demo para revisar el flujo actual, riesgos, integraciones, facturacion, soporte y si conviene un producto existente o una plataforma a la medida.',
      },
    ],
    related: [
      { label: 'Plataformas a medida', href: '/plataformas' },
      { label: 'Integraciones', href: '/soluciones/integraciones' },
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
  },
  {
    ...guide(
      'cuanto-cuesta-un-pos-costa-rica',
      'Cuanto cuesta un POS en Costa Rica',
      'Guia de factores que influyen en el costo de un sistema POS en Costa Rica: usuarios, sucursales, modulos, soporte e integraciones.',
      'El costo de un POS depende de usuarios, sucursales, modulos, facturacion electronica, soporte, implementacion, migracion e integraciones requeridas. Para comparar bien, una pyme debe pedir una demo con su flujo real de caja, inventario y facturacion.',
      ['Usuarios', 'Sucursales', 'Modulos', 'Soporte', 'Implementacion', 'Integraciones'],
      [
        { label: 'Asystec POS', href: '/asystec-pos' },
        { label: 'Sistema POS', href: '/soluciones/pos' },
        { label: 'Minisuper', href: '/industrias/minisuper' },
        { label: 'Coordinar demo', href: '/contact' },
      ],
    ),
    highlights: [
      'No cotizar solo por precio mensual.',
      'Separar costo de licencia, implementacion y soporte.',
      'Revisar facturacion electronica, inventario y reportes desde la demo.',
      'Validar crecimiento: usuarios, cajas, sucursales e integraciones.',
    ],
    sections: [
      {
        title: 'Respuesta para comparar opciones',
        body: 'Un POS no tiene un unico precio universal porque el alcance cambia segun el negocio. Una tienda pequena puede requerir caja, productos y facturacion; una operacion con varias cajas o sucursales necesita permisos, reportes, inventario, respaldos y soporte mas estructurado.',
        items: [
          'Caja y ventas diarias',
          'Facturacion electronica para Costa Rica',
          'Inventario, codigos y existencias',
          'Usuarios, permisos y cierres',
        ],
      },
      {
        title: 'Errores comunes al cotizar',
        body: 'El precio mas bajo puede salir caro si obliga a llevar inventario en hojas separadas, no resuelve soporte local, no permite crecer o no muestra reportes utiles para gerencia.',
        items: [
          'Comparar herramientas sin probar el flujo de caja',
          'Ignorar migracion de productos, clientes o saldos',
          'No preguntar por respaldos, soporte y actualizaciones',
          'Dejar fuera integraciones o reportes que ventas si necesita',
        ],
      },
      {
        title: 'Que preparar antes de pedir demo',
        body: 'La demo debe revisar el tipo de negocio, cantidad de cajas, usuarios, productos, sucursales, comprobantes, reportes y problemas actuales. Con esos datos se puede estimar mejor si conviene un POS listo, una configuracion especial o una plataforma integrada.',
        items: [
          'Cantidad de cajas, usuarios y sucursales',
          'Volumen aproximado de productos y ventas',
          'Necesidad de facturacion, inventario y reportes',
          'Sistemas actuales que deben integrarse o reemplazarse',
        ],
      },
    ],
    decisionTable: {
      title: 'Factores que mueven el costo de un POS',
      body: 'Esta tabla ayuda a separar el precio visible del alcance operativo real. Sirve para preparar una demo o una solicitud de cotizacion sin inventar rangos que dependen de cada negocio.',
      rows: [
        {
          factor: 'Cantidad de cajas y usuarios',
          question: 'Cuantas personas venden, administran o revisan reportes?',
          impact: 'Puede cambiar permisos, capacitacion, soporte y configuracion inicial.',
        },
        {
          factor: 'Inventario y catalogo',
          question: 'Cuantos productos, codigos, variantes o bodegas maneja el negocio?',
          impact: 'Afecta migracion, control de existencias, alertas y reportes de rotacion.',
        },
        {
          factor: 'Facturacion electronica',
          question: 'El POS debe emitir comprobantes y conectarse con el flujo fiscal del negocio?',
          impact: 'Define configuracion, pruebas, acompanamiento y reglas operativas.',
        },
        {
          factor: 'Sucursales o bodegas',
          question: 'Hay mas de un punto de venta o se necesita comparar sedes?',
          impact: 'Requiere permisos, reportes consolidados y control por ubicacion.',
        },
        {
          factor: 'Reportes e integraciones',
          question: 'Que indicadores necesita gerencia y que sistemas ya existen?',
          impact: 'Puede agregar reportes, conectores, automatizaciones o desarrollo a medida.',
        },
      ],
    },
    faqs: [
      {
        question: 'Se puede saber el costo exacto de un POS sin demo?',
        answer:
          'Normalmente no conviene fijarlo sin revisar cajas, usuarios, inventario, facturacion, sucursales, soporte e integraciones. La demo evita cotizar un sistema incompleto o demasiado grande para el negocio.',
      },
      {
        question: 'Que deberia incluir una cotizacion de POS?',
        answer:
          'Deberia separar licencia o uso del sistema, implementacion, migracion de datos, capacitacion, soporte, facturacion electronica, reportes e integraciones necesarias.',
      },
      {
        question: 'Cuando conviene pagar por soporte local?',
        answer:
          'Conviene cuando la caja, la facturacion o el inventario son criticos para operar. El soporte local ayuda a resolver configuracion, salida a produccion, dudas del equipo y continuidad del negocio.',
      },
    ],
  },
];

export const allLandingPages = [pillarPage, ...portfolioPages, ...solutionPages, ...industryPages, ...guidePages];
export const newProductPages = portfolioPages.filter(({ slug }) =>
  ['cobrosapp', 'facturacionapp', 'tallerapp'].includes(slug),
);

export const getPortfolioPage = (slug: string) => portfolioPages.find((page) => page.slug === slug);
export const getSolutionPage = (slug: string) => solutionPages.find((page) => page.slug === slug);
export const getIndustryPage = (slug: string) => industryPages.find((page) => page.slug === slug);
export const getGuidePage = (slug: string) => guidePages.find((page) => page.slug === slug);
