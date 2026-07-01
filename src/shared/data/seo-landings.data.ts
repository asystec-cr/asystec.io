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
  solution(
    'pos',
    'Sistema POS para negocios',
    'Sistema POS para comercios en Costa Rica con caja, ventas, inventario, facturacion electronica, usuarios y reportes.',
    'Un sistema POS permite vender, cobrar, controlar productos, emitir comprobantes y revisar reportes desde una operacion mas ordenada.',
    ['Caja', 'Ventas', 'Inventario', 'Facturacion electronica', 'Cierres', 'Usuarios'],
    [
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Restaurantes', href: '/industrias/restaurantes' },
      { label: 'Minisuper', href: '/industrias/minisuper' },
    ],
  ),
  solution(
    'facturacion-electronica',
    'Facturacion electronica para pymes',
    'Software y acompanamiento para facturacion electronica en Costa Rica, comprobantes, clientes, pagos y reportes.',
    'La facturacion electronica ayuda a emitir comprobantes en regla y mantener informacion comercial organizada para clientes, ventas y reportes.',
    ['Comprobantes electronicos', 'Clientes', 'Productos o servicios', 'Pagos', 'Reportes', 'Soporte'],
    [
      { label: 'FacturacionApp', href: '/facturacionapp' },
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Preguntas frecuentes', href: '/faqs' },
    ],
  ),
  solution(
    'inventario',
    'Sistema de inventario para tiendas',
    'Software para controlar inventario, existencias, ventas, movimientos y reportes para negocios en Costa Rica.',
    'Un sistema de inventario ayuda a saber que productos hay, que se vendio, que falta reponer y donde se esta perdiendo control.',
    ['Productos', 'Existencias', 'Movimientos', 'Ventas', 'Alertas', 'Reportes'],
    [
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Alternativas a Excel', href: '/guias/alternativas-excel-inventario' },
      { label: 'Retail', href: '/industrias/retail' },
    ],
  ),
  solution(
    'reportes',
    'Reportes para gerencia y operacion',
    'Reportes de ventas, cobros, inventario, ingresos, saldos y desempeno para pymes y equipos operativos.',
    'Los reportes convierten datos diarios en informacion accionable para decidir compras, cobros, inventario, personal y prioridades comerciales.',
    ['Ventas', 'Ingresos', 'Inventario', 'Cobros', 'Saldos', 'Indicadores'],
    [
      { label: 'CobrosApp', href: '/cobrosapp' },
      { label: 'FacturacionApp', href: '/facturacionapp' },
      { label: 'Plataformas', href: '/plataformas' },
    ],
  ),
  solution(
    'cuentas-por-cobrar',
    'Cuentas por cobrar y seguimiento de pagos',
    'Software para controlar creditos, pagos, saldos, clientes y estados de cuenta en operaciones de cobranza.',
    'Una solucion de cuentas por cobrar ayuda a ver quien debe, cuanto debe, que se pago y que acciones siguen para recuperar cartera.',
    ['Clientes', 'Creditos', 'Pagos', 'Estados de cuenta', 'Recordatorios', 'Reportes'],
    [
      { label: 'CobrosApp', href: '/cobrosapp' },
      { label: 'Reportes', href: '/soluciones/reportes' },
      { label: 'CRM', href: '/soluciones/crm' },
    ],
  ),
  solution(
    'crm',
    'CRM y gestion de clientes',
    'Software para ordenar clientes, contactos, historial, oportunidades, soporte y seguimiento comercial.',
    'Un CRM ayuda a centralizar informacion de clientes y contactos para vender mejor, dar seguimiento y mantener contexto del historial.',
    ['Clientes', 'Contactos', 'Historial', 'Seguimiento', 'Oportunidades', 'Soporte'],
    [
      { label: 'CobrosApp', href: '/cobrosapp' },
      { label: 'Plataformas', href: '/plataformas' },
      { label: 'Servicios profesionales', href: '/industrias/servicios-profesionales' },
    ],
  ),
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
  solution(
    'integraciones',
    'Integraciones de software',
    'Integraciones entre plataformas, portales, facturacion, pagos, reportes, APIs y procesos internos.',
    'Las integraciones conectan sistemas que ya usa la empresa para reducir doble digitacion, mejorar reportes y automatizar pasos repetitivos.',
    ['APIs', 'Portales', 'Facturacion', 'Pagos', 'Reportes', 'Automatizacion'],
    [
      { label: 'Plataformas', href: '/plataformas' },
      { label: 'Software local vs extranjero', href: '/guias/software-local-vs-extranjero' },
      { label: 'Contacto', href: '/contact' },
    ],
  ),
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
  industry(
    'minisuper',
    'Sistema POS para minisuper',
    'Software POS para minisuper y abastecedores con ventas rapidas, inventario, facturacion electronica y reportes.',
    'Un minisuper necesita vender rapido, controlar existencias, revisar margenes y mantener la facturacion sin interrumpir la atencion.',
    ['Caja rapida', 'Codigos y productos', 'Inventario', 'Cierres', 'Facturacion', 'Reportes'],
    [
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Inventario', href: '/soluciones/inventario' },
      { label: 'Cuanto cuesta un POS', href: '/guias/cuanto-cuesta-un-pos-costa-rica' },
    ],
  ),
  industry(
    'ferreterias',
    'Software para ferreterias',
    'Software para ferreterias con inventario, ventas, facturacion, busqueda de productos, reportes y control operativo.',
    'Una ferreteria necesita encontrar productos rapido, controlar inventario amplio y mantener ventas/facturacion sin perder trazabilidad.',
    ['Catalogo amplio', 'Inventario', 'Ventas', 'Facturacion', 'Reportes', 'Usuarios'],
    [
      { label: 'Inventario', href: '/soluciones/inventario' },
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Alternativas a Excel', href: '/guias/alternativas-excel-inventario' },
    ],
  ),
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
  industry(
    'talleres',
    'Software para talleres',
    'Software para talleres con ordenes de trabajo, clientes, diagnosticos, aprobaciones, cobros y reportes.',
    'Un taller necesita controlar ordenes, estados, clientes, diagnosticos, aprobaciones, saldos y entrega de trabajos.',
    ['Ordenes', 'Clientes', 'Diagnosticos', 'Aprobaciones', 'Cobros', 'Reportes'],
    [
      { label: 'TallerApp', href: '/tallerapp' },
      { label: 'CRM', href: '/soluciones/crm' },
      { label: 'Reportes', href: '/soluciones/reportes' },
    ],
  ),
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
  guide(
    'como-elegir-sistema-pos',
    'Como elegir un sistema POS para una tienda',
    'Guia para elegir un sistema POS en Costa Rica considerando caja, inventario, facturacion, soporte, reportes e integraciones.',
    'Para elegir un POS conviene evaluar velocidad de caja, estabilidad, inventario, facturacion electronica, reportes, soporte local, seguridad y crecimiento.',
    ['Caja y ventas', 'Inventario', 'Facturacion electronica', 'Reportes', 'Soporte', 'Seguridad'],
    [
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Sistema POS', href: '/soluciones/pos' },
      { label: 'Retail', href: '/industrias/retail' },
    ],
  ),
  guide(
    'alternativas-excel-inventario',
    'Alternativas a Excel para controlar inventario',
    'Guia para pasar de inventario en Excel a un sistema con productos, movimientos, ventas, reportes y control por usuarios.',
    'Excel puede servir al inicio, pero cuando hay mas productos, usuarios o ventas, un sistema reduce errores y da trazabilidad de movimientos.',
    ['Productos', 'Movimientos', 'Usuarios', 'Ventas', 'Alertas', 'Reportes'],
    [
      { label: 'Inventario', href: '/soluciones/inventario' },
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Ferreterias', href: '/industrias/ferreterias' },
    ],
  ),
  guide(
    'software-local-vs-extranjero',
    'Software local vs software extranjero',
    'Comparativa para elegir entre software local y extranjero segun soporte, facturacion electronica, integraciones, costos y adaptacion al negocio.',
    'El software local puede aportar soporte cercano y conocimiento del contexto fiscal; el extranjero puede ofrecer escala. La decision depende del proceso y los riesgos.',
    ['Soporte', 'Contexto fiscal', 'Integraciones', 'Costos', 'Adaptacion', 'Continuidad'],
    [
      { label: 'Plataformas', href: '/plataformas' },
      { label: 'Integraciones', href: '/soluciones/integraciones' },
      { label: 'Software para negocios', href: '/software-para-negocios-costa-rica' },
    ],
  ),
  guide(
    'cuanto-cuesta-un-pos-costa-rica',
    'Cuanto cuesta un POS en Costa Rica',
    'Guia de factores que influyen en el costo de un sistema POS en Costa Rica: usuarios, sucursales, modulos, soporte e integraciones.',
    'El costo de un POS depende de usuarios, sucursales, modulos, facturacion electronica, soporte, implementacion, migracion e integraciones requeridas.',
    ['Usuarios', 'Sucursales', 'Modulos', 'Soporte', 'Implementacion', 'Integraciones'],
    [
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Sistema POS', href: '/soluciones/pos' },
      { label: 'Minisuper', href: '/industrias/minisuper' },
    ],
  ),
];

export const allLandingPages = [pillarPage, ...portfolioPages, ...solutionPages, ...industryPages, ...guidePages];
export const newProductPages = portfolioPages.filter(({ slug }) =>
  ['cobrosapp', 'facturacionapp', 'tallerapp'].includes(slug),
);

export const getPortfolioPage = (slug: string) => portfolioPages.find((page) => page.slug === slug);
export const getSolutionPage = (slug: string) => solutionPages.find((page) => page.slug === slug);
export const getIndustryPage = (slug: string) => industryPages.find((page) => page.slug === slug);
export const getGuidePage = (slug: string) => guidePages.find((page) => page.slug === slug);
