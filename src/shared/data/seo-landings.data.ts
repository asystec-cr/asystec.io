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
  headers?: {
    factor: string;
    question: string;
    impact: string;
  };
  rows: LandingDecisionRow[];
};

export type LandingHeroImage = {
  src: string;
  alt: string;
};

export type LandingFinalCta = {
  title: string;
  body: string;
  primary: LandingLink;
  secondary?: LandingLink;
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
  heroImages?: LandingHeroImage[];
  heroNote?: string;
  showTrustpilotStrip?: boolean;
  modulesTitle?: string;
  modulesIntro?: string;
  highlightsTitle?: string;
  relatedTitle?: string;
  relatedIntro?: string;
  finalCta?: LandingFinalCta;
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
  eyebrow: 'Software empresarial en Costa Rica',
  heroTitle: 'Software para vender, facturar, cobrar y controlar tu negocio en Costa Rica',
  answer:
    'El software adecuado depende del flujo que necesita ordenar el negocio. Una pyme con ventas de mostrador puede requerir POS e inventario; una empresa de servicios puede empezar con facturacion, clientes y cobros; una operacion con procesos propios puede necesitar integraciones o una plataforma a la medida.',
  intro:
    'Asystec ayuda a negocios en Costa Rica a comparar esas rutas con su operacion real antes de elegir producto, alcance o implementacion.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  heroNote: 'La demo revisa el proceso actual; no obliga a contratar todos los modulos.',
  highlights: [
    'Elegir por el problema operativo y no por una lista generica de funciones.',
    'Comparar un producto existente, una integracion o una plataforma a la medida.',
    'Conectar ventas, facturacion, inventario, cobros y reportes cuando el flujo lo exige.',
    'Preparar una demo con usuarios, sucursales, datos y controles reales del negocio.',
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
      title: 'Cuando conviene un sistema POS',
      body: 'Un POS encaja cuando el negocio vende con frecuencia en mostrador o caja y necesita que productos, cobros, facturacion, inventario, cierres y reportes formen parte del mismo flujo.',
      items: [
        'Ventas diarias con productos o servicios definidos',
        'Caja, medios de pago y cierres por usuario o turno',
        'Inventario que debe rebajarse con cada venta',
        'Facturacion electronica y reportes conectados con la operacion',
      ],
    },
    {
      title: 'Cuando basta con facturacion y cobros',
      body: 'Una empresa que emite pocos comprobantes y no opera una caja de mostrador puede empezar con clientes, cotizaciones, facturacion electronica, pagos y seguimiento de saldos sin implementar un POS completo.',
      items: [
        'Servicios profesionales o ventas por cotizacion',
        'Comprobantes, clientes y pagos por controlar',
        'Cuentas por cobrar que requieren seguimiento',
        'Reportes administrativos sin inventario de mostrador',
      ],
    },
    {
      title: 'Cuando conectar CRM, sucursales o reportes',
      body: 'El alcance crece cuando varias personas atienden oportunidades, existen saldos por cobrar, se abren nuevas sucursales o gerencia necesita consolidar informacion que hoy vive en archivos y sistemas separados.',
      items: [
        'CRM para contactos, responsables y seguimiento comercial',
        'Permisos y datos por usuario, caja o ubicacion',
        'Reportes consolidados para ventas, cobros e inventario',
        'Integraciones para reducir doble digitacion entre sistemas',
      ],
    },
    {
      title: 'Cuando evaluar una plataforma a la medida',
      body: 'Una plataforma propia puede tener sentido si el flujo diferencia al negocio, participan varios roles, existen aprobaciones especiales o las herramientas listas obligan a mantener pasos criticos fuera del sistema.',
      items: [
        'Procesos propios que no caben en un producto estandar',
        'Portales, backoffice o accesos distintos por tipo de usuario',
        'Integraciones y reportes especificos para la operacion',
        'Implementacion por etapas para validar primero el proceso critico',
      ],
    },
  ],
  decisionTable: {
    title: 'Que tipo de software evaluar segun la necesidad',
    body: 'Esta tabla sirve como punto de partida para llegar a una demo con un problema concreto. El alcance final depende de usuarios, volumen, datos, sucursales, equipos e integraciones.',
    headers: {
      factor: 'Necesidad principal',
      question: 'Ruta que conviene evaluar',
      impact: 'Que llevar a la demo',
    },
    rows: [
      {
        factor: 'Vender en caja y controlar productos',
        question: 'Asystec POS con ventas, inventario, facturacion y reportes.',
        impact: 'Cantidad de cajas, usuarios, productos, medios de pago y forma actual de cerrar.',
      },
      {
        factor: 'Emitir comprobantes sin una caja completa',
        question: 'Factura Pro o la solucion de facturacion electronica.',
        impact: 'Tipos de comprobante, clientes, cotizaciones, pagos y volumen de documentos.',
      },
      {
        factor: 'Dar seguimiento a saldos y pagos',
        question: 'Cobros Pro y la solucion de cuentas por cobrar.',
        impact: 'Cartera actual, responsables, recordatorios, acuerdos de pago y reportes necesarios.',
      },
      {
        factor: 'Ordenar ventas, contactos y seguimiento',
        question: 'CRM conectado con el proceso comercial y administrativo.',
        impact: 'Etapas de venta, responsables, fuentes de contactos, tareas e informacion que debe conservarse.',
      },
      {
        factor: 'Resolver un proceso propio o conectar sistemas',
        question: 'Integracion o plataforma a la medida por etapas.',
        impact: 'Flujo actual, usuarios, aprobaciones, sistemas existentes, datos criticos y resultado esperado.',
      },
    ],
  },
  faqs: [
    {
      question: 'Que software necesita una pyme para vender, facturar y controlar inventario?',
      answer:
        'Si vende productos en mostrador, normalmente conviene evaluar un POS que conecte caja, ventas, inventario, facturacion electronica y reportes. La cantidad de productos, usuarios, bodegas y sucursales define el alcance real.',
    },
    {
      question: 'Todos los negocios necesitan un sistema POS?',
      answer:
        'No. Un negocio de servicios que emite pocos comprobantes y no maneja caja ni inventario puede necesitar facturacion, clientes y cobros sin un POS completo. La decision debe partir del flujo de venta y control diario.',
    },
    {
      question: 'Se pueden conectar facturacion, inventario, cobros y CRM?',
      answer:
        'Se puede evaluar una solucion integrada o integraciones entre sistemas cuando el proceso lo requiere. Antes de prometer una conexion, Asystec revisa las herramientas actuales, datos disponibles y puntos donde existe doble digitacion.',
    },
    {
      question: 'Cuando conviene software a la medida en lugar de un producto listo?',
      answer:
        'Conviene evaluarlo cuando el negocio tiene flujos propios, varios roles, aprobaciones, portales o integraciones que una herramienta lista deja fuera. Si el proceso es estandar, un producto existente suele reducir tiempo y complejidad.',
    },
    {
      question: 'Que informacion debo llevar a una demo con Asystec?',
      answer:
        'Conviene llevar el problema prioritario, cantidad de usuarios y sucursales, productos o servicios, forma actual de vender y facturar, archivos que se desean migrar, reportes necesarios e integraciones existentes.',
    },
  ],
  related: [
    { label: 'Asystec POS', href: '/asystec-pos' },
    { label: 'Factura Pro', href: '/facturacionapp' },
    { label: 'Cobros Pro', href: '/cobrosapp' },
    { label: 'Inventario', href: '/soluciones/inventario' },
    { label: 'CRM', href: '/soluciones/crm' },
    { label: 'Multi-sucursal', href: '/soluciones/multi-sucursal' },
    { label: 'Integraciones', href: '/soluciones/integraciones' },
    { label: 'Plataformas a medida', href: '/plataformas' },
    { label: 'Casos y portafolio', href: '/casos' },
  ],
  finalCta: {
    title: 'Lleva tu proceso real a una demo',
    body: 'Revisemos como vendes, facturas, cobras y controlas la operacion para definir si conviene un producto Asystec, una integracion o una plataforma a la medida.',
    primary: contactCta,
    secondary: whatsappCta,
  },
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
      { label: 'Migrar desde otro POS', href: '/guias/como-migrar-sistema-pos' },
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
    title: 'Cobros Pro',
    seoTitle: 'Cobros Pro | Plataforma de credito y cobranza en Costa Rica',
    description:
      'Software web para administrar clientes, creditos, pagos, saldos, estados de cuenta y reportes de cobranza en Costa Rica.',
    eyebrow: 'Producto Asystec',
    heroTitle: 'Cobros Pro para ordenar creditos, pagos y saldos',
    answer:
      'Cobros Pro es un software web para negocios que necesitan administrar clientes, creditos, pagos, saldos, estados de cuenta y reportes de cobranza. Ayuda a que ventas, cobros y administracion consulten la misma cartera sin depender de hojas o controles separados.',
    intro:
      'La demo parte de ejemplos reales de cartera para revisar como se registran creditos y pagos, que debe mostrar cada estado de cuenta y cuales reportes necesita el equipo antes de confirmar el alcance.',
    primaryCta: contactCta,
    secondaryCta: {
      label: 'Consultar por WhatsApp',
      href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20coordinar%20una%20demo%20de%20Cobros%20Pro.',
    },
    heroNote:
      'Recordatorios, canales de contacto, facturacion e integraciones se validan durante la demo; no se asumen como funciones estandar.',
    highlightsTitle: 'Que puedes evaluar en Cobros Pro',
    highlights: [
      'Cartera de clientes y creditos en un sistema web',
      'Pagos, abonos y saldos vinculados con cada cliente',
      'Estados de cuenta e historial para responder consultas',
      'Reportes para revisar la operacion de cobranza',
    ],
    modulesTitle: 'Procesos que Cobros Pro ayuda a ordenar',
    modulesIntro:
      'El alcance visible cubre la administracion de clientes, creditos, pagos, saldos, estados de cuenta, reportes y usuarios. La configuracion exacta debe comprobarse con la cartera del negocio.',
    modules: [
      'Clientes',
      'Creditos',
      'Pagos y abonos',
      'Saldos pendientes',
      'Estados de cuenta',
      'Historial por cliente',
      'Reportes de cobranza',
      'Usuarios',
    ],
    sections: [
      {
        title: 'Centraliza clientes, creditos y saldos',
        body: 'Cuando la cartera vive en hojas, mensajes y reportes separados, ventas y administracion pueden terminar revisando datos distintos. Cobros Pro concentra la informacion necesaria para consultar cada cuenta desde un mismo sistema.',
        items: [
          'Cliente y credito relacionados en una misma cuenta',
          'Saldo pendiente visible para el equipo autorizado',
          'Historial disponible para responder consultas',
          'Usuarios que trabajan sobre la misma cartera',
        ],
      },
      {
        title: 'Registra pagos y conserva el historial',
        body: 'Un control de cobros necesita explicar que se pago y que sigue pendiente. Relacionar pagos y abonos con el cliente ayuda a mantener un saldo comprensible sin reconstruir movimientos manualmente.',
        items: [
          'Pagos y abonos asociados con el cliente',
          'Movimientos disponibles para revisar diferencias',
          'Saldo actualizado dentro del flujo de cobranza',
          'Informacion util para preparar estados de cuenta',
        ],
      },
      {
        title: 'Comparte estados de cuenta y reportes utiles',
        body: 'Cobros Pro permite evaluar estados de cuenta y reportes para que el equipo consulte cartera, movimientos y resultados de cobranza con criterios consistentes.',
        items: [
          'Estados de cuenta por cliente',
          'Reportes para administracion y gerencia',
          'Datos de pagos, saldos y creditos en contexto',
          'Revision periodica sin armar hojas desde cero',
        ],
      },
      {
        title: 'Valida el alcance antes de implementar',
        body: 'La demo debe usar ejemplos reales para separar lo que ya cubre Cobros Pro de cualquier configuracion, integracion o desarrollo adicional que necesite la operacion.',
        items: [
          'Cantidad de clientes, creditos y usuarios',
          'Reglas de pagos parciales y ajustes',
          'Formato de estados de cuenta y reportes',
          'Facturacion, recordatorios, canales e integraciones por confirmar',
        ],
      },
    ],
    decisionTable: {
      title: 'Que revisar en una demo de software de cuentas por cobrar',
      body: 'Estas preguntas ayudan a comprobar si Cobros Pro encaja con la cartera actual y que necesidades requieren configuracion o alcance adicional.',
      rows: [
        {
          factor: 'Cartera actual',
          question: 'Cuantos clientes, creditos y saldos activos necesita administrar el negocio?',
          impact: 'Define la estructura inicial, los usuarios y la forma de consultar la cartera.',
        },
        {
          factor: 'Pagos y abonos',
          question: 'Como se registran hoy pagos parciales, cancelaciones, ajustes o diferencias?',
          impact: 'Permite validar que el historial y el saldo resultante sean comprensibles para el equipo.',
        },
        {
          factor: 'Estados de cuenta',
          question: 'Que movimientos, periodos y datos debe ver el cliente en su estado de cuenta?',
          impact: 'Ayuda a confirmar el formato y la informacion que necesita entregar la operacion.',
        },
        {
          factor: 'Reportes y usuarios',
          question: 'Que debe revisar cada responsable y que reportes necesita gerencia?',
          impact: 'Alinea accesos, seguimiento y decisiones con el trabajo real de cobranza.',
        },
        {
          factor: 'Canales e integraciones',
          question: 'Se necesitan recordatorios, WhatsApp, correo, facturacion, POS, CRM u otros sistemas?',
          impact:
            'Separa las funciones visibles de Cobros Pro de integraciones o automatizaciones que deben cotizarse.',
        },
      ],
    },
    faqs: [
      {
        question: 'Que controla Cobros Pro?',
        answer:
          'Cobros Pro administra clientes, creditos, pagos, abonos, saldos, estados de cuenta, historial, reportes de cobranza y usuarios desde una plataforma web.',
      },
      {
        question: 'Cuando conviene dejar Excel para controlar cobros?',
        answer:
          'Conviene evaluar un sistema cuando varias personas actualizan la cartera, existen pagos parciales, los estados de cuenta se arman a mano o gerencia no puede consultar saldos y movimientos con rapidez.',
      },
      {
        question: 'Cobros Pro permite registrar pagos parciales y abonos?',
        answer:
          'Pagos, abonos y saldos forman parte del alcance visible de cuentas por cobrar. La demo debe confirmar las reglas, ajustes y reportes que usa el negocio para mantener el saldo correcto.',
      },
      {
        question: 'Cobros Pro genera estados de cuenta?',
        answer:
          'Los estados de cuenta forman parte del alcance publicado. Conviene llevar un ejemplo a la demo para validar periodos, movimientos, datos del cliente y formato necesario.',
      },
      {
        question: 'Cobros Pro envia recordatorios por WhatsApp o correo?',
        answer:
          'Los recordatorios, canales de contacto y automatizaciones deben validarse durante la demo. Esta pagina no los presenta como funciones estandar sin confirmar el flujo requerido.',
      },
      {
        question: 'Cobros Pro se integra con facturacion, POS o CRM?',
        answer:
          'Las integraciones dependen de los sistemas actuales, los datos disponibles y el alcance. Asystec revisa esas conexiones antes de confirmar una implementacion.',
      },
    ],
    relatedTitle: 'Revisa el producto, la guia y el siguiente paso',
    relatedIntro:
      'Estas rutas permiten abrir Cobros Pro, consultar su documentacion publica, preparar la cartera y coordinar una demo con Asystec.',
    related: [
      { label: 'Abrir Cobros Pro', href: 'https://cobros.asystec.io/login' },
      { label: 'Documentacion de Cobros Pro', href: 'https://docs.cobrosapp.com' },
      { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
      { label: 'Guía para organizar cobros', href: '/guias/como-organizar-cuentas-por-cobrar' },
      { label: 'Reportes', href: '/soluciones/reportes' },
      { label: 'CRM', href: '/soluciones/crm' },
      { label: 'Casos y portafolio', href: '/casos' },
    ],
    finalCta: {
      title: 'Prueba Cobros Pro con una muestra de tu cartera',
      body: 'Revisemos clientes, creditos, pagos, saldos, estados de cuenta, usuarios y reportes para confirmar que cubre el producto y que requiere alcance adicional.',
      primary: contactCta,
      secondary: {
        label: 'Consultar por WhatsApp',
        href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20coordinar%20una%20demo%20de%20Cobros%20Pro.',
      },
    },
    image: '/images/portfolio/cobrosapp.png',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
  },
  {
    slug: 'facturacionapp',
    path: '/facturacionapp',
    kind: 'product',
    schemaType: 'SoftwareApplication',
    title: 'Factura Pro',
    seoTitle: 'Factura Pro | Facturacion electronica en Costa Rica',
    description:
      'Factura Pro es una solucion para emitir y administrar comprobantes electronicos, clientes, pagos, cotizaciones y reportes en Costa Rica.',
    eyebrow: 'Producto Asystec',
    heroTitle: 'Facturacion electronica y gestion comercial para pymes',
    answer:
      'Factura Pro ayuda a negocios en Costa Rica a emitir comprobantes electronicos, administrar clientes, cotizaciones, pagos y reportes desde una plataforma web.',
    intro:
      'La pagina posiciona el producto dentro del portafolio Asystec y lo conecta con preguntas frecuentes de facturacion electronica.',
    primaryCta: { label: 'Abrir Factura Pro', href: 'https://app.asystec.io/login' },
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
        question: 'Factura Pro es para Costa Rica?',
        answer: 'Si. La pagina esta orientada a empresas y pymes que necesitan facturacion electronica en Costa Rica.',
      },
      {
        question: 'Cuando elegir Factura Pro frente a un POS?',
        answer:
          'Puede convenir cuando el foco es facturar, administrar clientes y reportes, sin requerir una caja local de punto de venta.',
      },
    ],
    related: [
      { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
      { label: 'Guia de factura electronica', href: '/guias/factura-electronica-costa-rica-requisitos' },
      {
        label: 'Cambiar de sistema de facturacion',
        href: '/guias/como-cambiar-sistema-facturacion-electronica',
      },
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
      'Asystec POS conecta ventas, facturación electrónica, inventario, cierres y reportes para comercios y pymes en Costa Rica.',
    eyebrow: 'Asystec POS para comercios en Costa Rica',
    heroTitle: 'Vende sin detener la caja, factura en regla y controla tu inventario',
    answer:
      'Asystec POS es un sistema de punto de venta de escritorio que conecta caja, ventas, inventario, facturación electrónica, cierres y reportes para mantener la operación diaria bajo control.',
    intro:
      'Conecta ventas, facturación electrónica, inventario, cierres y reportes en una aplicación de escritorio con operación local y acompañamiento en Costa Rica.',
    primaryCta: {
      label: 'Agendar demo por WhatsApp',
      href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20coordinar%20una%20demo%20de%20Asystec%20POS%20para%20mi%20negocio.',
    },
    secondaryCta: { label: 'Ver funciones', href: '/asystec-pos' },
    heroNote: 'Agenda una demo para revisar alcance, implementación y acompañamiento según tu operación.',
    showTrustpilotStrip: true,
    heroImages: [
      { src: '/images/pos/pos0.jpeg', alt: 'Vista general de Asystec POS para comercios' },
      { src: '/images/pos/pos1.jpeg', alt: 'Pantalla operativa de Asystec POS' },
      { src: '/images/pos/pos2.jpeg', alt: 'Módulo de ventas de Asystec POS' },
    ],
    modulesTitle: 'Todo lo esencial, conectado',
    modulesIntro:
      'La venta actualiza la información que necesitas para revisar caja, productos, inventario y reportes sin depender de archivos separados.',
    highlightsTitle: 'Lo que Asystec POS aporta a tu operación',
    highlights: [
      'Operación local para mantener la caja trabajando aunque falle internet.',
      'Facturación electrónica para Costa Rica dentro del flujo de venta.',
      'Inventario, cierres, usuarios y reportes conectados a la operación diaria.',
      'Acompañamiento local para revisar el alcance antes de implementar.',
    ],
    modules: [
      'Caja y ventas',
      'Productos, códigos e inventario',
      'Facturación electrónica',
      'Cierres de caja',
      'Clientes, créditos y apartados',
      'Compras y proveedores',
      'Reportes operativos',
      'Usuarios, roles y permisos',
    ],
    sections: [
      {
        title: 'Vende y cierra caja con menos pasos',
        body: 'Registra productos, clientes, pagos y comprobantes en un mismo flujo. Al cierre, la información queda disponible para revisar movimientos, responsables y resultados de la jornada.',
        items: [
          'Ventas, pagos y comprobantes en una sola operación',
          'Sesiones, ingresos, retiros y cierres de caja',
          'Usuarios, roles y trazabilidad de movimientos',
          'Reportes para revisar la operación diaria',
        ],
      },
      {
        title: 'Adáptalo al giro de tu negocio',
        body: 'La evaluación cambia según la cantidad de productos, la rotación, los comprobantes, las cajas y los reportes que necesita cada comercio.',
        items: [
          'Minisúper, pulperías y tiendas de conveniencia',
          'Ferreterías y comercios con catálogos amplios',
          'Restaurantes, sodas y negocios con caja rápida',
          'Retail, talleres y servicios con inventario o cobros',
        ],
      },
      {
        title: 'Una demo basada en tu operación',
        body: 'La demostración parte de cómo vendes hoy para comprobar el flujo que realmente usaría tu equipo y aclarar pendientes antes de elegir.',
        items: [
          'Revisamos cajas, productos, comprobantes y usuarios',
          'Mostramos una venta, el movimiento de inventario y el cierre',
          'Aclaramos alcance, configuración y datos por migrar',
          'Documentamos lo que requiere validación adicional',
        ],
      },
      {
        title: 'Implementación acompañada',
        body: 'El cambio de sistema se organiza por etapas para reducir sorpresas y preparar al equipo antes de trabajar con el POS en el día a día.',
        items: [
          'Revisión del proceso y de una muestra de datos',
          'Configuración, importación y pruebas según el alcance acordado',
          'Capacitación para los usuarios que operarán el sistema',
          'Salida a producción y acompañamiento posterior',
        ],
      },
    ],
    decisionTable: {
      title: 'Lo que revisamos antes de recomendar el alcance',
      body: 'Estas preguntas permiten confirmar el alcance real, identificar pendientes y evitar que el negocio contrate funciones que no necesita.',
      headers: {
        factor: 'Tu operación',
        question: 'Qué revisamos en la demo',
        impact: 'Por qué importa',
      },
      rows: [
        {
          factor: 'Cajas y usuarios',
          question: 'Cuántas personas venden, qué permisos requieren y cómo realizan aperturas y cierres.',
          impact: 'Define la configuración de accesos, sesiones y puntos de venta.',
        },
        {
          factor: 'Productos e inventario',
          question: 'Cantidad de productos, códigos, unidades, existencias, compras y ajustes que manejas.',
          impact: 'Permite preparar el catálogo y validar cómo se actualizará el inventario.',
        },
        {
          factor: 'Facturación electrónica',
          question: 'Comprobantes, datos fiscales, clientes y reglas que aplican a tus ventas en Costa Rica.',
          impact: 'Aclara la configuración necesaria antes de emitir comprobantes desde caja.',
        },
        {
          factor: 'Migración de datos',
          question: 'Qué productos, clientes, saldos o inventario existen en Excel o en el sistema anterior.',
          impact: 'Una muestra real permite confirmar qué puede importarse y qué necesita preparación.',
        },
        {
          factor: 'Crecimiento',
          question: 'Si necesitas más puntos de venta, usuarios, bodegas o una aplicación móvil.',
          impact: 'Ayuda a comparar el alcance inicial con las necesidades previstas del negocio.',
        },
      ],
    },
    faqs: [
      {
        question: '¿Cómo se cotiza Asystec POS?',
        answer:
          'La cotización depende de los puntos de venta, la aplicación móvil, los módulos, la implementación y el nivel de soporte. En la demo se revisa el alcance real antes de contratar.',
      },
      {
        question: '¿Asystec POS funciona si se cae internet?',
        answer:
          'La operación principal del POS trabaja localmente para que la caja no dependa siempre de la conexión. El envío fiscal, los respaldos y las integraciones que usan servicios externos sí requieren conectividad y se revisan según la configuración.',
      },
      {
        question: '¿Incluye facturación electrónica para Costa Rica?',
        answer:
          'Sí. Asystec POS incluye capacidades de facturación electrónica para Costa Rica. En la demo se validan los datos fiscales, comprobantes, clientes, productos y reglas que aplican a tu negocio.',
      },
      {
        question: '¿Puedo migrar desde Excel u otro sistema?',
        answer:
          'Sí, después de revisar una muestra real de productos, códigos, clientes, saldos e inventario. Con esa evidencia se confirma qué puede importarse y qué información necesita preparación.',
      },
      {
        question: '¿Qué equipo necesito para usar el POS?',
        answer:
          'Depende del flujo de caja y de los periféricos que ya utiliza el negocio. En la demo se revisan la computadora, impresora, lector, gaveta, red y cualquier equipo adicional antes de confirmar compatibilidad.',
      },
      {
        question: '¿Cómo es el proceso de implementación?',
        answer:
          'Primero se revisan el proceso y los datos; después se acuerdan configuración, importación y pruebas; finalmente se capacita a los usuarios y se coordina la salida a producción con acompañamiento.',
      },
      {
        question: '¿Puedo agregar más puntos de venta o usuarios?',
        answer:
          'Sí. La demo permite confirmar cuántos usuarios, cajas y módulos necesita tu operación actual y cómo podría crecer.',
      },
    ],
    relatedTitle: 'Sigue evaluando con información concreta',
    relatedIntro:
      'Revisa el producto y las guías de decisión; si el alcance encaja, agenda una demostración con el contexto de tu negocio.',
    related: [
      { label: 'Producto Asystec POS', href: '/asystec-pos' },
      { label: 'Opciones de implementación', href: '/asystec-pos#planes-pos' },
      { label: 'Cómo elegir un POS', href: '/guias/como-elegir-sistema-pos' },
      { label: 'Cómo migrar desde otro POS', href: '/guias/como-migrar-sistema-pos' },
      { label: 'POS local vs POS en la nube', href: '/guias/pos-local-vs-pos-en-la-nube' },
      { label: 'POS para minisúper', href: '/industrias/minisuper' },
      { label: 'POS para ferreterías', href: '/industrias/ferreterias' },
      { label: 'POS para restaurantes', href: '/industrias/restaurantes' },
    ],
    finalCta: {
      title: '¿Quieres ver cómo encaja en tu negocio?',
      body: 'Cuéntanos tu giro, cuántas cajas utilizas y qué quieres mejorar. Prepararemos la demo alrededor de esa operación.',
      primary: {
        label: 'Agendar demo por WhatsApp',
        href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20coordinar%20una%20demo%20de%20Asystec%20POS%20para%20mi%20negocio.',
      },
      secondary: { label: 'Ver funciones', href: '/asystec-pos' },
    },
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
      'Asystec ayuda a negocios que necesitan ordenar facturacion electronica, ventas, clientes, pagos y reportes desde Factura Pro, Asystec POS o una plataforma ajustada al flujo del negocio.',
    primaryCta: contactCta,
    secondaryCta: whatsappCta,
    highlights: [
      'Responder a busquedas de facturacion electronica para pymes en Costa Rica.',
      'Conectar comprobantes con clientes, ventas, pagos, inventario y reportes.',
      'Ayudar a comparar si conviene Factura Pro, Asystec POS o una plataforma a medida.',
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
          impact: 'Define si conviene Factura Pro, Asystec POS o una plataforma con integraciones.',
        },
        {
          factor: 'Clientes y catalogo',
          question: 'Los clientes, productos o servicios se mantienen en un solo lugar y con datos limpios?',
          impact: 'Reduce doble digitacion, errores al facturar y trabajo manual al revisar historiales.',
        },
        {
          factor: 'Pagos y cobros',
          question: 'El negocio necesita registrar pagos, saldos, creditos o seguimiento posterior al comprobante?',
          impact: 'Puede conectar facturacion con cuentas por cobrar, Cobros Pro o reportes financieros.',
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
        question: 'Cuando conviene Factura Pro y cuando Asystec POS?',
        answer:
          'Factura Pro puede convenir cuando el foco es emitir comprobantes, clientes, cotizaciones, pagos y reportes desde una plataforma web. Asystec POS conviene cuando la facturacion debe estar conectada con caja, ventas e inventario.',
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
      { label: 'Factura Pro', href: '/facturacionapp' },
      { label: 'Guia de factura electronica', href: '/guias/factura-electronica-costa-rica-requisitos' },
      {
        label: 'Cambiar de sistema de facturacion',
        href: '/guias/como-cambiar-sistema-facturacion-electronica',
      },
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
      'Asystec ayuda a negocios que necesitan convertir datos operativos en reportes utiles para gerencia, administracion y equipos de venta, ya sea desde POS, Cobros Pro, Factura Pro o una plataforma a la medida.',
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
          'Si. La evaluacion puede conectar reportes con Asystec POS, inventario, Factura Pro, Cobros Pro o una plataforma a medida, segun los sistemas que ya usa el negocio.',
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
      { label: 'Cobros Pro', href: '/cobrosapp' },
      { label: 'Factura Pro', href: '/facturacionapp' },
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
      'Asystec ayuda a negocios que necesitan ordenar clientes, creditos, pagos, estados de cuenta y reportes de cobranza desde Cobros Pro, una integracion con POS/facturacion o una plataforma ajustada al flujo real.',
    primaryCta: contactCta,
    secondaryCta: whatsappCta,
    highlights: [
      'Aterrizar busquedas sobre software de cuentas por cobrar en Costa Rica.',
      'Conectar cobranza con clientes, pagos, saldos, reportes y gerencia.',
      'Preparar una demo con cartera actual, reglas de pago y estados de cuenta.',
      'Dirigir a Cobros Pro, contacto y WhatsApp sin inventar promesas financieras.',
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
        body: 'Una demo util debe revisar ejemplos reales de clientes, saldos y pagos. Asi se define si conviene Cobros Pro, una integracion o una plataforma a medida para el proceso de cobranza.',
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
        question: 'Cobros Pro sirve para cuentas por cobrar?',
        answer:
          'Cobros Pro puede aplicar cuando el negocio necesita administrar clientes, creditos, pagos, estados de cuenta, reportes e indicadores de cobranza desde una plataforma web.',
      },
      {
        question: 'Puedo conectar cuentas por cobrar con facturacion o reportes?',
        answer:
          'Si. La evaluacion puede revisar conexion con facturacion electronica, POS, CRM, reportes o una plataforma a medida, segun los sistemas actuales y el alcance que necesite el negocio.',
      },
    ],
    related: [
      { label: 'Cobros Pro', href: '/cobrosapp' },
      { label: 'Cómo organizar cuentas por cobrar', href: '/guias/como-organizar-cuentas-por-cobrar' },
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
      'Ayudar a decidir entre Cobros Pro, una plataforma CRM o una integracion a medida.',
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
        body: 'Para muchas pymes, CRM no debe quedar aislado. Puede necesitar relacionarse con facturacion, cuentas por cobrar, Cobros Pro, POS, formularios, portales de clientes o reportes gerenciales.',
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
          impact:
            'Puede requerir conexion con Cobros Pro, cuentas por cobrar, facturacion, POS o reportes gerenciales.',
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
          'Si. La evaluacion puede revisar conexion con Cobros Pro, cuentas por cobrar, facturacion electronica, POS, reportes o plataformas internas, segun el flujo real y los datos disponibles.',
      },
      {
        question: 'Puedo pedir una demo con mi proceso actual de ventas?',
        answer:
          'Si. Puedes coordinar una demo o escribir por WhatsApp para revisar fuentes de clientes, etapas, responsables, tareas, reportes, cobros e integraciones necesarias antes de definir el alcance.',
      },
    ],
    related: [
      { label: 'Cobros Pro', href: '/cobrosapp' },
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
          'Si. La evaluacion puede revisar Asystec POS, Factura Pro, Cobros Pro, CRM, reportes, plataformas internas o sistemas externos, siempre segun datos disponibles, reglas de negocio y restricciones de cada proveedor.',
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
      body: 'Segun la operacion, puede aplicar Asystec POS, Factura Pro, Cobros Pro, FitPro o una plataforma a la medida.',
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
      { label: 'Cobros Pro', href: '/cobrosapp' },
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
      'factura-electronica-costa-rica-requisitos',
      'Factura electronica en Costa Rica 2026: requisitos para pymes',
      'Guia de factura electronica en Costa Rica para pymes: requisitos, comprobantes, version 4.4, CAByS, Hacienda, software y demo.',
      'En Costa Rica la factura electronica es un comprobante digital en XML que respalda ventas o servicios y debe emitirse con datos tributarios correctos, mecanismo de seguridad, codigos CAByS, version vigente y un sistema capaz de enviar y recibir validacion de Hacienda.',
      [
        'Comprobantes electronicos',
        'Version 4.4',
        'Llave o firma',
        'CAByS',
        'Validacion Hacienda',
        'Software y soporte',
      ],
      [
        { label: 'Factura Pro', href: '/facturacionapp' },
        { label: 'Software de facturacion electronica', href: '/soluciones/facturacion-electronica' },
        { label: 'Asystec POS', href: '/asystec-pos' },
        { label: 'Preguntas frecuentes', href: '/faqs' },
        { label: 'Coordinar demo', href: '/contact' },
      ],
    ),
    seoTitle: 'Factura electronica Costa Rica 2026: requisitos y guia para pymes | Asystec',
    intro:
      'Esta guia explica, en lenguaje practico, que debe revisar una pyme antes de emitir comprobantes electronicos, cambiar de proveedor o conectar facturacion con POS, inventario, cobros y reportes.',
    highlights: [
      'Entender que es el XML validado por Hacienda y que papel cumple el PDF.',
      'Revisar version 4.4, nuevos ajustes de Anexos y Estructuras y datos obligatorios.',
      'Preparar contribuyente, mecanismo de seguridad, actividad, clientes, CAByS e impuestos.',
      'Comparar si conviene Factura Pro, Asystec POS o una integracion a medida.',
    ],
    modules: [
      'XML y PDF',
      'Factura y tiquete electronico',
      'Notas de credito y debito',
      'Recibo electronico de pago',
      'CAByS e impuestos',
      'Contingencia y soporte',
    ],
    sections: [
      {
        title: 'Que es la factura electronica',
        body: 'La factura electronica es el comprobante digital que respalda la venta de bienes o servicios. Para efectos operativos, el documento valido nace como XML, se firma o protege con el mecanismo requerido, se envia a Hacienda y normalmente se entrega al cliente con una representacion legible en PDF.',
        items: [
          'El XML contiene la estructura fiscal que valida Hacienda',
          'El PDF facilita lectura, envio y archivo para el cliente',
          'La respuesta de Hacienda confirma aceptacion o rechazo',
          'El sistema debe conservar trazabilidad de cada comprobante',
        ],
      },
      {
        title: 'Requisitos antes de emitir',
        body: 'Antes de empezar o migrar, la pyme debe revisar que los datos tributarios y comerciales esten completos. Muchos errores de facturacion no vienen de la venta, sino de informacion incompleta en contribuyente, cliente, producto, impuesto o configuracion.',
        items: [
          'Estar inscrito y con datos tributarios actualizados',
          'Tener mecanismo de seguridad vigente para firmar comprobantes',
          'Definir actividades economicas, impuestos, moneda y medios de pago',
          'Ordenar clientes, productos, servicios y correos de envio',
        ],
      },
      {
        title: 'Version 4.4 y cambios 2026',
        body: 'La version 4.4 es la estructura vigente para comprobantes electronicos y trajo mas detalle en campos, referencias, medios de pago, impuestos y comprobantes como el Recibo Electronico de Pago. En 2026 Hacienda tambien comunico ajustes a Anexos y Estructuras que los sistemas deben revisar antes de su implementacion obligatoria.',
        items: [
          'Uso de version vigente en factura, tiquete, notas y recibos electronicos',
          'Revision de nuevos codigos y documentos de referencia',
          'Compatibilidad con cedulas juridicas alfanumericas cuando aplique',
          'Pruebas en ambiente de calidad antes de afectar produccion',
        ],
      },
      {
        title: 'CAByS, catalogo e impuestos',
        body: 'CAByS clasifica bienes y servicios para uso tributario. El sistema de facturacion debe ayudar a escoger codigos correctos, mantenerlos actualizados y evitar que productos o servicios queden con tarifas, categorias o descripciones que generen rechazos o revisiones posteriores.',
        items: [
          'Relacionar cada producto o servicio con su codigo CAByS',
          'Revisar tarifas reducidas, exenciones o tratamientos especiales',
          'Actualizar catalogos internos cuando BCCR y Hacienda publiquen cambios',
          'Validar productos sensibles como medicamentos, vehiculos o surtidos',
        ],
      },
      {
        title: 'Como funciona el flujo',
        body: 'El flujo ideal debe ser simple para el usuario: vender, cobrar, emitir, enviar, consultar y reportar. Por debajo, el sistema debe construir el XML, enviarlo a Hacienda, registrar la respuesta, notificar al cliente y dejar datos listos para reportes o conciliacion.',
        items: [
          'Generar comprobante desde venta, cotizacion, caja o proceso administrativo',
          'Enviar XML a Hacienda y guardar mensaje de aceptacion o rechazo',
          'Entregar XML, PDF y respuesta de Hacienda cuando corresponda',
          'Conectar ventas, pagos, inventario y reportes si el negocio lo requiere',
        ],
      },
      {
        title: 'Que software conviene elegir',
        body: 'No todos los negocios necesitan lo mismo. Una oficina de servicios puede resolver con una plataforma web de facturacion. Una tienda con caja e inventario necesita que el comprobante salga desde el punto de venta. Una empresa con sistemas propios puede necesitar integraciones.',
        items: [
          'Factura Pro si el foco es emitir, consultar, cobrar y reportar',
          'Asystec POS si la factura debe nacer desde caja e inventario',
          'Integraciones cuando ya existen ERP, ecommerce, CRM o sistemas internos',
          'Soporte local cuando facturacion, ventas o caja no pueden detenerse',
        ],
      },
    ],
    decisionTable: {
      title: 'Checklist para escoger sistema de facturacion electronica',
      body: 'Usa estas preguntas para comparar proveedores, preparar una demo y evitar una implementacion que cumpla en papel pero no resuelva la operacion diaria.',
      rows: [
        {
          factor: 'Cumplimiento',
          question:
            'El sistema esta alineado con version 4.4, Anexos y Estructuras, tipos de comprobante y validacion de Hacienda?',
          impact: 'Reduce riesgo de rechazos, reprocesos y facturas que no sirvan como respaldo fiscal.',
        },
        {
          factor: 'Catalogo',
          question: 'Permite mantener clientes, productos, servicios, CAByS, impuestos y correos sin doble digitacion?',
          impact: 'Evita errores repetitivos y facilita mantener datos consistentes cuando cambia el catalogo.',
        },
        {
          factor: 'Operacion',
          question: 'La factura nace desde el flujo real: POS, venta web, cotizacion, servicio o administracion?',
          impact: 'Define si basta una plataforma web o si se necesita POS, inventario o integraciones.',
        },
        {
          factor: 'Soporte',
          question: 'Quien acompana salida a produccion, llave o firma, pruebas, rechazos y cambios normativos?',
          impact: 'Afecta continuidad cuando el negocio depende de facturar para vender o cobrar.',
        },
        {
          factor: 'Reportes',
          question: 'Que puede revisar gerencia: ventas, clientes, pagos, saldos, impuestos, usuarios o sucursales?',
          impact: 'Convierte la facturacion en una fuente de control comercial, no solo en un tramite.',
        },
      ],
    },
    faqs: [
      {
        question: 'Que necesito para emitir factura electronica en Costa Rica?',
        answer:
          'Necesitas datos tributarios al dia, mecanismo de seguridad para firmar, actividad economica, clientes, productos o servicios con CAByS, impuestos correctos y un sistema que genere XML, envie a Hacienda y registre la respuesta.',
      },
      {
        question: 'La factura electronica es el PDF o el XML?',
        answer:
          'El comprobante fiscal se estructura como XML y se valida ante Hacienda. El PDF funciona como representacion legible para revisar, enviar o archivar, pero el sistema debe conservar el XML y la respuesta asociada.',
      },
      {
        question: 'Que cambio con la version 4.4?',
        answer:
          'La version 4.4 actualizo la estructura de comprobantes, incorporo mas detalle en campos, referencias, medios de pago, impuestos y comprobantes como el Recibo Electronico de Pago. Tambien exige que los sistemas se mantengan atentos a ajustes de Anexos y Estructuras.',
      },
      {
        question: 'Cuando conviene un POS con facturacion en vez de solo facturacion web?',
        answer:
          'Conviene un POS cuando la venta ocurre en caja, debe rebajar inventario, cerrar turnos, controlar usuarios o generar reportes operativos. Si el foco es emitir comprobantes y administrar clientes o pagos, una plataforma web puede ser suficiente.',
      },
      {
        question: 'Asystec puede revisar mi caso antes de cambiar de sistema?',
        answer:
          'Si. Puedes coordinar una demo para revisar tipo de negocio, flujo actual, datos tributarios, productos, CAByS, POS, inventario, pagos, reportes e integraciones necesarias antes de migrar.',
      },
    ],
    related: [
      { label: 'Factura Pro', href: '/facturacionapp' },
      { label: 'Software de facturacion electronica', href: '/soluciones/facturacion-electronica' },
      {
        label: 'Cambiar de sistema de facturacion',
        href: '/guias/como-cambiar-sistema-facturacion-electronica',
      },
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Sistema POS', href: '/soluciones/pos' },
      { label: 'Software local vs extranjero', href: '/guias/software-local-vs-extranjero' },
      { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
      { label: 'Preguntas frecuentes', href: '/faqs' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
  },
  {
    ...guide(
      'como-cambiar-sistema-facturacion-electronica',
      'Como cambiar de sistema de facturacion electronica',
      'Guia para cambiar de sistema de facturacion electronica en Costa Rica: datos, XML, clientes, productos, CAByS, pruebas, integraciones y salida a produccion.',
      'Para cambiar de sistema de facturacion electronica sin interrumpir el negocio, primero hay que inventariar datos, documentos, configuracion tributaria e integraciones; despues se valida una muestra en el sistema nuevo, se acuerda que historial se conservara y se coordina una fecha de corte con respaldo y responsables.',
      [
        'Datos y configuracion actual',
        'Clientes, productos y CAByS',
        'XML y respuestas de Hacienda',
        'Pruebas de emision',
        'Integraciones y reportes',
        'Fecha de corte y soporte',
      ],
      [
        { label: 'Factura Pro', href: '/facturacionapp' },
        { label: 'Software de facturacion electronica', href: '/soluciones/facturacion-electronica' },
        { label: 'Requisitos de factura electronica', href: '/guias/factura-electronica-costa-rica-requisitos' },
        { label: 'Integraciones', href: '/soluciones/integraciones' },
        { label: 'Coordinar demo', href: '/contact' },
      ],
    ),
    intro:
      'Esta guia ayuda a pymes y profesionales en Costa Rica a preparar un cambio de proveedor o plataforma de facturacion electronica sin asumir que todos los datos, historiales o integraciones se pueden trasladar de la misma forma.',
    highlights: [
      'Separar lo obligatorio para operar de lo que solo conviene conservar como consulta.',
      'Validar clientes, productos, impuestos y CAByS con una muestra real.',
      'Definir el alcance de XML, respuestas, reportes e integraciones antes del corte.',
      'Coordinar responsables, respaldo, pruebas y soporte para la salida a produccion.',
    ],
    sections: [
      {
        title: 'Inventaria el sistema actual antes de elegir otro',
        body: 'El cambio debe empezar por una lista concreta de lo que hoy sostiene la operacion. No basta con contar facturas: hay que identificar configuracion tributaria, clientes, productos o servicios, impuestos, CAByS, consecutivos, documentos, reportes, usuarios e integraciones.',
        items: [
          'Datos de la empresa, actividades y configuracion tributaria',
          'Clientes, productos, servicios, impuestos y codigos CAByS',
          'XML emitidos y recibidos, respuestas y representaciones PDF',
          'Usuarios, permisos, reportes e integraciones que usa el equipo',
        ],
      },
      {
        title: 'Separa migracion operativa de archivo historico',
        body: 'No todo el historial necesita quedar cargado dentro del sistema nuevo. Conviene definir que datos deben estar disponibles para facturar desde el primer dia, que saldos o catalogos requieren continuidad y que documentos pueden conservarse en un archivo seguro para consulta.',
        items: [
          'Datos maestros necesarios para emitir nuevos comprobantes',
          'Saldos, pagos o cotizaciones que siguen activos',
          'Documentos historicos que deben conservarse para consulta',
          'Formato de exportacion y acceso posterior al sistema anterior',
        ],
      },
      {
        title: 'Valida una muestra antes de mover todo',
        body: 'Una muestra permite detectar columnas incompletas, identificaciones invalidas, impuestos mal asignados, codigos duplicados o diferencias entre el archivo fuente y el modelo del sistema nuevo. El alcance de importacion debe acordarse despues de revisar esa evidencia.',
        items: [
          'Clientes con distintos tipos de identificacion y ubicacion',
          'Productos o servicios con impuestos y CAByS diferentes',
          'Comprobantes, notas y medios de pago representativos',
          'Reportes que administracion necesita comparar despues del cambio',
        ],
      },
      {
        title: 'Planifica pruebas, corte y contingencia',
        body: 'Antes de dejar el sistema anterior, el equipo debe probar el flujo real: crear clientes, emitir comprobantes, revisar respuestas, enviar documentos, consultar reportes y confirmar integraciones. La fecha de corte debe tener responsables, respaldo y una ruta clara si aparece un error.',
        items: [
          'Prueba de emision y recepcion con configuracion revisada',
          'Comparacion de catalogos, saldos y reportes acordados',
          'Capacitacion de usuarios y canales de soporte',
          'Respaldo, acceso de consulta y plan de contingencia',
        ],
      },
    ],
    decisionTable: {
      title: 'Checklist para cambiar de sistema de facturacion electronica',
      body: 'Estas preguntas ayudan a convertir una promesa de migracion en un alcance verificable antes de contratar o coordinar la salida a produccion.',
      rows: [
        {
          factor: 'Datos maestros',
          question: 'Que clientes, productos, servicios, impuestos y CAByS deben quedar listos para operar?',
          impact: 'Define la muestra, limpieza, mapeo e importacion necesaria antes del primer comprobante.',
        },
        {
          factor: 'Historial',
          question:
            'Que XML, respuestas, PDF, cotizaciones, pagos o saldos deben migrarse y cuales solo deben conservarse?',
          impact:
            'Evita prometer una migracion total cuando parte del historial puede quedar como archivo de consulta.',
        },
        {
          factor: 'Configuracion fiscal',
          question:
            'Que actividades, consecutivos, sucursales, terminales, impuestos y medios de pago usa hoy el negocio?',
          impact: 'Permite preparar y probar la configuracion que sostendra la emision en el sistema nuevo.',
        },
        {
          factor: 'Integraciones',
          question: 'La facturacion recibe datos de POS, inventario, cobros, tienda, contabilidad u otra plataforma?',
          impact: 'Una integracion omitida puede obligar a duplicar datos o detener procesos despues del cambio.',
        },
        {
          factor: 'Salida a produccion',
          question: 'Quien valida la muestra, capacita usuarios, aprueba el corte y responde si aparece un error?',
          impact: 'Asigna responsables y reduce el riesgo de improvisar durante el primer dia de operacion.',
        },
      ],
    },
    faqs: [
      {
        question: 'Se puede cambiar de sistema de facturacion electronica en Costa Rica?',
        answer:
          'Si, pero conviene planificar el cambio alrededor de la continuidad operativa. Antes del corte hay que revisar datos, configuracion tributaria, documentos, consecutivos, usuarios, integraciones, respaldo y pruebas en el sistema nuevo.',
      },
      {
        question: 'Hay que migrar todas las facturas y XML historicos?',
        answer:
          'No siempre. El alcance depende de los datos que el sistema anterior permita exportar, las necesidades de consulta y lo que acepte el sistema nuevo. Parte del historial puede conservarse en un archivo seguro sin cargarse como operacion activa.',
      },
      {
        question: 'Que informacion conviene exportar antes de cancelar el sistema anterior?',
        answer:
          'Conviene respaldar clientes, productos o servicios, impuestos, CAByS, XML, respuestas, PDF, reportes, saldos, pagos, cotizaciones y cualquier configuracion o integracion necesaria para operar y consultar el historial.',
      },
      {
        question: 'Como se valida una migracion de facturacion?',
        answer:
          'Se revisa una muestra representativa, se compara el mapeo de datos, se prueban comprobantes y respuestas, se verifican reportes acordados y se documentan diferencias antes de importar el resto o fijar la fecha de corte.',
      },
      {
        question: 'Asystec puede revisar una muestra antes de cambiar de sistema?',
        answer:
          'Si. Puedes coordinar una demo para revisar una muestra, el sistema actual, catalogos, comprobantes, integraciones y reportes. Con esa evidencia se define que puede importarse, que requiere limpieza y que conviene conservar como archivo.',
      },
    ],
    finalCta: {
      title: 'Revisa una muestra antes de cambiar de sistema',
      body: 'Coordina una demo para revisar catalogos, comprobantes, integraciones y reportes actuales. Con una muestra se puede definir un alcance realista para la migracion y la salida a produccion.',
      primary: contactCta,
      secondary: {
        label: 'Consultar por WhatsApp',
        href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20evaluar%20un%20cambio%20de%20sistema%20de%20facturacion%20electronica.',
      },
    },
    related: [
      { label: 'Factura Pro', href: '/facturacionapp' },
      { label: 'Software de facturacion electronica', href: '/soluciones/facturacion-electronica' },
      { label: 'Requisitos de factura electronica', href: '/guias/factura-electronica-costa-rica-requisitos' },
      { label: 'Integraciones', href: '/soluciones/integraciones' },
      { label: 'Software local vs extranjero', href: '/guias/software-local-vs-extranjero' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
  },
  {
    ...guide(
      'como-organizar-cuentas-por-cobrar',
      'Cómo organizar las cuentas por cobrar de una pyme',
      'Guía para organizar cuentas por cobrar en una pyme de Costa Rica: clientes, créditos, vencimientos, pagos, responsables, seguimiento y reportes.',
      'Para organizar las cuentas por cobrar, una pyme debe registrar cada crédito con cliente, saldo, fecha de vencimiento, pagos, responsable y próxima acción. Después conviene separar cuentas al día y vencidas, documentar cada gestión y revisar un reporte periódico para decidir a quién contactar y qué saldo requiere atención.',
      ['Clientes y créditos', 'Saldos y vencimientos', 'Pagos y abonos', 'Responsables', 'Seguimiento', 'Reportes'],
      [
        { label: 'Software de cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
        { label: 'Cobros Pro', href: '/cobrosapp' },
        { label: 'Reportes para pymes', href: '/soluciones/reportes' },
        { label: 'Coordinar demo', href: '/contact' },
      ],
    ),
    seoTitle: 'Cómo organizar cuentas por cobrar en una pyme | Asystec',
    intro:
      'Esta guía ayuda a dueños, administradores y equipos de cobro en Costa Rica a pasar de hojas, mensajes y recordatorios dispersos a un proceso trazable que conecte clientes, saldos, pagos, seguimiento y decisiones de gerencia.',
    highlights: [
      'Definir qué información debe tener cada cuenta antes de iniciar el seguimiento.',
      'Separar saldos al día, próximos a vencer y vencidos sin perder el historial.',
      'Asignar responsables y próximas acciones para evitar gestiones duplicadas.',
      'Preparar una demo con una muestra real de clientes, créditos, pagos y reportes.',
    ],
    modules: [
      'Clientes y condiciones de crédito',
      'Saldos y fechas de vencimiento',
      'Pagos, abonos y movimientos',
      'Responsables y próximas acciones',
      'Estados de cuenta',
      'Reportes de cartera',
    ],
    sections: [
      {
        title: 'Empieza con un registro único por cuenta',
        body: 'Cada crédito debe poder leerse sin reconstruir la historia desde facturas, chats y hojas distintas. El punto de partida es una ficha que conecte al cliente con el saldo, los vencimientos, los pagos y el responsable del seguimiento.',
        items: [
          'Cliente, contacto y documento que origina el saldo',
          'Monto original, saldo pendiente y moneda cuando aplique',
          'Fecha de emisión, condición de crédito y vencimiento',
          'Pagos, abonos, ajustes y notas con fecha',
        ],
      },
      {
        title: 'Ordena la cartera por estado y prioridad',
        body: 'Una lista total de clientes pendientes no indica qué debe atenderse primero. Conviene separar cuentas al día, próximas a vencer y vencidas, y añadir contexto comercial antes de decidir la siguiente gestión.',
        items: [
          'Cuentas al día que solo requieren monitoreo',
          'Saldos próximos a vencer que necesitan recordatorio',
          'Cuentas vencidas que requieren seguimiento y responsable',
          'Casos con diferencias, promesas de pago o revisión interna',
        ],
      },
      {
        title: 'Documenta cada gestión de cobro',
        body: 'El seguimiento pierde continuidad cuando depende de la memoria de una persona. Cada contacto debe dejar fecha, canal, resultado, compromiso y próxima acción para que ventas, administración y cobros trabajen con el mismo contexto.',
        items: [
          'Responsable y fecha de la gestión',
          'Canal utilizado y respuesta del cliente',
          'Compromiso o fecha acordada cuando exista',
          'Próxima acción y persona que debe ejecutarla',
        ],
      },
      {
        title: 'Convierte el control en decisiones',
        body: 'El reporte útil no es solo una suma de saldos. Debe permitir revisar qué está vencido, qué pagos se registraron, qué cuentas no tienen seguimiento y dónde necesita actuar el equipo antes del próximo corte.',
        items: [
          'Saldos por estado, cliente, responsable o periodo',
          'Pagos y abonos registrados durante el corte',
          'Cuentas vencidas sin próxima acción definida',
          'Estados de cuenta e historial para responder al cliente',
        ],
      },
    ],
    decisionTable: {
      title: 'Checklist para ordenar el proceso de cuentas por cobrar',
      body: 'Estas preguntas ayudan a detectar qué información falta y qué debe probarse antes de elegir una hoja mejorada, Cobros Pro, una integración o una plataforma a medida.',
      headers: {
        factor: 'Etapa',
        question: 'Qué revisar',
        impact: 'Qué debe quedar claro',
      },
      rows: [
        {
          factor: 'Origen del saldo',
          question: '¿Qué factura, crédito, venta o documento creó la cuenta por cobrar?',
          impact: 'El equipo puede explicar el saldo y rastrear su origen sin buscar en varios sistemas.',
        },
        {
          factor: 'Vencimiento',
          question: '¿Cuál es la condición de crédito y qué fecha determina que la cuenta está vencida?',
          impact: 'Permite ordenar la cartera por estado y preparar el seguimiento correcto.',
        },
        {
          factor: 'Pagos y abonos',
          question: '¿Cómo se registran pagos parciales, cancelaciones, ajustes o diferencias?',
          impact: 'Mantiene un saldo comprensible para el negocio y para el cliente.',
        },
        {
          factor: 'Seguimiento',
          question: '¿Quién contactó al cliente, qué respondió y cuál es la próxima acción?',
          impact: 'Evita contactos duplicados, cuentas olvidadas y dependencia de la memoria individual.',
        },
        {
          factor: 'Reporte',
          question: '¿Qué necesita revisar gerencia cada semana o mes para decidir prioridades?',
          impact: 'Conecta saldos, vencimientos, pagos y responsables con una decisión operativa.',
        },
      ],
    },
    faqs: [
      {
        question: '¿Cuál es la diferencia entre cuentas por cobrar y cobranza?',
        answer:
          'Las cuentas por cobrar son los saldos que los clientes mantienen pendientes. La cobranza es el proceso de revisar esos saldos, contactar, registrar respuestas, aplicar pagos y definir la siguiente acción hasta cerrar la cuenta.',
      },
      {
        question: '¿Qué datos debe tener un control de cuentas por cobrar?',
        answer:
          'Como mínimo debe conectar cliente, documento de origen, monto, saldo, fecha de vencimiento, pagos, responsable, historial de gestiones y próxima acción. Los campos adicionales dependen del tipo de crédito y del proceso del negocio.',
      },
      {
        question: '¿Cuándo deja de ser suficiente Excel para controlar cobros?',
        answer:
          'Cuando varias personas actualizan la cartera, existen pagos parciales, se pierden gestiones, los estados de cuenta se arman a mano o gerencia no puede confiar rápidamente en saldos y vencimientos.',
      },
      {
        question: '¿Qué debe mostrar un reporte de cuentas por cobrar?',
        answer:
          'Debe permitir revisar saldos, vencimientos, pagos, cuentas sin seguimiento y responsables. También conviene poder consultar el detalle por cliente y el historial que explica cada saldo.',
      },
      {
        question: '¿Cómo puede ayudar Cobros Pro?',
        answer:
          'Cobros Pro puede evaluarse cuando la pyme necesita administrar clientes, créditos, pagos, saldos, estados de cuenta y reportes desde una plataforma web. La demo debe confirmar datos, usuarios, integraciones y flujo de seguimiento requeridos.',
      },
    ],
    related: [
      { label: 'Software de cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
      { label: 'Cobros Pro', href: '/cobrosapp' },
      { label: 'Reportes para pymes', href: '/soluciones/reportes' },
      { label: 'CRM y seguimiento de clientes', href: '/soluciones/crm' },
      { label: 'Facturación electrónica', href: '/soluciones/facturacion-electronica' },
      { label: 'Integraciones de software', href: '/soluciones/integraciones' },
      { label: 'Software para distribuidores', href: '/industrias/distribuidores' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
    finalCta: {
      title: '¿Quieres ordenar tu cartera con datos reales?',
      body: 'Trae una muestra de clientes, saldos, vencimientos, pagos y el reporte que hoy manejas. Asystec puede ayudarte a evaluar si conviene Cobros Pro, una integración o una plataforma ajustada al proceso.',
      primary: contactCta,
      secondary: whatsappCta,
    },
  },
  {
    ...guide(
      'como-migrar-sistema-pos',
      'Cómo migrar de sistema POS sin frenar el negocio',
      'Guía para cambiar de sistema POS en Costa Rica: productos, clientes, inventario, saldos, facturación electrónica, pruebas y salida a producción.',
      'Para migrar de sistema POS sin frenar el negocio, primero hay que identificar qué datos existen y cuáles realmente se necesitan; después se limpia una muestra, se valida el mapeo en el sistema nuevo, se comparan saldos e inventario y se coordina una fecha de corte con responsables, respaldo y plan de contingencia.',
      [
        'Inventario de datos actuales',
        'Productos y códigos',
        'Clientes y saldos',
        'Existencias iniciales',
        'Configuración fiscal',
        'Pruebas y salida a producción',
      ],
      [
        { label: 'Asystec POS', href: '/asystec-pos' },
        { label: 'Sistema POS para comercios', href: '/soluciones/pos' },
        { label: 'Inventario', href: '/soluciones/inventario' },
        { label: 'Coordinar demo', href: '/contact' },
      ],
    ),
    seoTitle: 'Cómo migrar de sistema POS en Costa Rica | Asystec',
    intro:
      'Esta guía ayuda a dueños y administradores de comercios en Costa Rica a preparar el cambio desde Excel, un POS anterior o controles separados hacia un sistema nuevo, con una ruta verificable para datos, operación, capacitación y continuidad de caja.',
    highlights: [
      'Definir qué se migra antes de prometer una importación completa.',
      'Probar con una muestra real de productos, clientes, saldos e inventario.',
      'Comparar resultados y documentar pendientes antes de la fecha de corte.',
      'Preparar usuarios, respaldo y contingencia para la salida a producción.',
    ],
    modules: [
      'Fuentes y formatos disponibles',
      'Productos, códigos y precios',
      'Clientes, créditos y saldos',
      'Inventario y existencias iniciales',
      'Datos fiscales y comprobantes',
      'Usuarios, pruebas y fecha de corte',
    ],
    sections: [
      {
        title: 'Haz un inventario de datos y procesos',
        body: 'Antes de exportar archivos conviene identificar qué información usa realmente caja, inventario, facturación y gerencia. El objetivo no es copiar todo por inercia, sino separar los datos operativos que deben quedar listos de los historiales que pueden conservarse como consulta o respaldo.',
        items: [
          'Productos, códigos, categorías, precios e impuestos',
          'Clientes, contactos, créditos y saldos pendientes',
          'Existencias por bodega o ubicación y fecha del conteo',
          'Usuarios, permisos, comprobantes y reportes indispensables',
        ],
      },
      {
        title: 'Limpia y mapea una muestra real',
        body: 'Cada sistema organiza columnas, identificadores y reglas de forma distinta. Una muestra pequeña permite detectar códigos duplicados, campos vacíos, impuestos inconsistentes o saldos sin origen antes de preparar el lote completo.',
        items: [
          'Elegir registros representativos, no solo los casos sencillos',
          'Acordar qué campo del origen corresponde a cada campo del destino',
          'Separar errores de datos de diferencias funcionales entre sistemas',
          'Documentar transformaciones y decisiones para repetir el proceso',
        ],
      },
      {
        title: 'Prueba el flujo completo antes del cambio',
        body: 'La validación no termina cuando el archivo carga. Hay que probar una venta, el movimiento de inventario, la facturación electrónica, el cierre y los reportes que usará el negocio, y comparar resultados con la fuente acordada.',
        items: [
          'Buscar y vender productos con los códigos que usará caja',
          'Confirmar existencias, clientes, saldos y permisos de usuario',
          'Probar comprobantes y configuración fiscal antes de operar',
          'Revisar reportes y diferencias con responsables del negocio',
        ],
      },
      {
        title: 'Coordina la fecha de corte y la contingencia',
        body: 'La salida a producción necesita una hora límite para dejar de actualizar el sistema anterior, cargar los datos finales y comenzar a registrar movimientos en el nuevo. El acceso anterior debe conservarse como respaldo hasta confirmar que la operación y los totales acordados son consistentes.',
        items: [
          'Definir responsables, horario de corte y movimientos pendientes',
          'Respaldar archivos y dejar evidencia de los totales de referencia',
          'Capacitar a caja y administración con escenarios cotidianos',
          'Acordar soporte inicial y qué hacer si una validación falla',
        ],
      },
    ],
    decisionTable: {
      title: 'Checklist para planificar la migración del POS',
      body: 'Estas preguntas ayudan a convertir el cambio de sistema en un alcance verificable antes de cotizar, importar o fijar la fecha de salida a producción.',
      headers: {
        factor: 'Etapa',
        question: 'Qué confirmar',
        impact: 'Resultado esperado',
      },
      rows: [
        {
          factor: 'Alcance',
          question: '¿Qué datos deben operar desde el primer día y qué historial solo necesita conservarse?',
          impact: 'Evita inflar la migración y concentra las pruebas en la continuidad del negocio.',
        },
        {
          factor: 'Calidad',
          question: '¿Hay códigos duplicados, campos vacíos, saldos sin detalle o inventario sin fecha de corte?',
          impact: 'Permite corregir la fuente antes de trasladar errores al sistema nuevo.',
        },
        {
          factor: 'Prueba',
          question: '¿Una muestra representativa completa ventas, inventario, facturación, cierres y reportes?',
          impact: 'Confirma que datos y flujo funcionan juntos, no solo que el archivo fue aceptado.',
        },
        {
          factor: 'Conciliación',
          question: '¿Qué totales, saldos y existencias se compararán antes de aprobar el cambio?',
          impact: 'Deja evidencia objetiva para aceptar la carga o corregir diferencias.',
        },
        {
          factor: 'Salida',
          question: '¿Quién ejecuta el corte, capacita usuarios, atiende incidentes y autoriza operar en el nuevo POS?',
          impact: 'Reduce ambigüedad durante el momento más sensible de la implementación.',
        },
      ],
    },
    faqs: [
      {
        question: '¿Qué datos conviene migrar a un sistema POS nuevo?',
        answer:
          'Depende de la operación, pero normalmente se revisan productos, códigos, categorías, precios, impuestos, clientes, saldos, existencias y usuarios. El historial completo debe evaluarse por separado según su utilidad, formato y costo de preparación.',
      },
      {
        question: '¿Es necesario migrar todas las ventas y facturas históricas?',
        answer:
          'No siempre. Puede ser suficiente iniciar con catálogos, saldos y existencias, mientras el sistema anterior o un respaldo conserva el historial para consulta. La decisión debe considerar obligaciones de archivo, reportes necesarios y capacidad real de exportación e importación.',
      },
      {
        question: '¿Cómo evitar diferencias de inventario al cambiar de POS?',
        answer:
          'Conviene acordar una fecha y hora de corte, detener o registrar por separado los movimientos durante la carga, comparar existencias con un conteo o reporte de referencia y corregir diferencias antes de comenzar a vender en el sistema nuevo.',
      },
      {
        question: '¿Cuándo se puede dejar de usar el sistema anterior?',
        answer:
          'Después de validar datos, flujo de venta, facturación, inventario, cierres y reportes, y de confirmar que el equipo puede operar. El acceso anterior conviene conservarlo como respaldo durante el periodo acordado, sin duplicar movimientos entre ambos sistemas.',
      },
      {
        question: '¿Asystec puede revisar la migración antes de contratar?',
        answer:
          'Sí. En una demo se puede revisar una muestra real de productos, clientes, saldos e inventario, además del flujo de caja y facturación. Con esa evidencia se define qué puede importarse, qué necesita preparación y qué queda fuera del alcance inicial.',
      },
    ],
    related: [
      { label: 'Asystec POS', href: '/asystec-pos' },
      { label: 'Sistema POS para comercios', href: '/soluciones/pos' },
      { label: 'Cómo elegir un POS', href: '/guias/como-elegir-sistema-pos' },
      { label: 'Alternativas a Excel para inventario', href: '/guias/alternativas-excel-inventario' },
      { label: 'Facturación electrónica', href: '/soluciones/facturacion-electronica' },
      { label: 'Inventario', href: '/soluciones/inventario' },
      { label: 'Integraciones de software', href: '/soluciones/integraciones' },
      { label: 'Coordinar demo', href: '/contact' },
    ],
    finalCta: {
      title: '¿Estás evaluando cambiar de POS?',
      body: 'Trae una muestra de productos, clientes, saldos e inventario y explica cómo vende y factura hoy tu negocio. Asystec puede ayudarte a convertir esa información en un alcance de migración y una demo verificable.',
      primary: contactCta,
      secondary: whatsappCta,
    },
  },
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
