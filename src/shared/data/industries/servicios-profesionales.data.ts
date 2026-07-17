import type { LandingPageData } from '../seo-landings.data';

const contactCta = { label: 'Coordinar demo', href: '/contact' };
const whatsappCta = {
  label: 'Consultar por WhatsApp',
  href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20evaluar%20software%20para%20mi%20empresa%20de%20servicios%20profesionales.',
};

export const serviciosProfesionalesIndustryPage: LandingPageData = {
  slug: 'servicios-profesionales',
  path: '/industrias/servicios-profesionales',
  kind: 'industry',
  schemaType: 'Service',
  title: 'Software para servicios profesionales en Costa Rica',
  seoTitle: 'Software para servicios profesionales en Costa Rica | Asystec',
  description:
    'Software para empresas de servicios profesionales en Costa Rica con clientes, cotizaciones, facturacion, cobros, CRM, reportes e integraciones.',
  eyebrow: 'Industria de servicios profesionales',
  heroTitle: 'Software para controlar clientes, facturacion y cobros en empresas de servicios',
  answer:
    'Una empresa de servicios profesionales necesita conectar clientes, seguimiento comercial, cotizaciones, facturacion electronica, cobros y reportes sin duplicar datos. Asystec puede combinar Factura Pro, Cobros Pro, CRM e integraciones, o evaluar una plataforma a medida cuando el flujo es propio.',
  intro:
    'Esta pagina ayuda a consultorias, agencias, despachos, firmas y equipos de servicios tecnicos a preparar una demo basada en su proceso real, desde la oportunidad comercial hasta la factura y el cobro.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  highlights: [
    'Clientes, contactos y seguimiento comercial en un flujo claro.',
    'Cotizaciones, facturacion electronica y pagos conectados.',
    'Cobros, saldos y estados de cuenta segun la operacion.',
    'Reportes e integraciones definidos a partir de decisiones reales.',
  ],
  modules: [
    'Clientes y contactos',
    'Cotizaciones y facturacion',
    'Cobros y saldos',
    'CRM y seguimiento',
    'Reportes y usuarios',
    'Integraciones o plataforma a medida',
  ],
  sections: [
    {
      title: 'Del contacto inicial a la cotizacion',
      body: 'Cuando consultas, contactos, oportunidades y cotizaciones viven en correos, mensajes y hojas separadas, el equipo pierde contexto y seguimiento. La demo debe revisar que informacion comercial necesita conservar y quien debe actuar en cada etapa.',
      items: [
        'Clientes, empresas y personas de contacto',
        'Historial de conversaciones y proximos pasos',
        'Oportunidades, cotizaciones y responsables',
        'Permisos para ventas, administracion y gerencia',
      ],
    },
    {
      title: 'Facturacion, pagos y cuentas por cobrar',
      body: 'Prestar el servicio no cierra el ciclo administrativo. Conviene conectar la cotizacion con facturacion electronica, registrar pagos y mantener visibilidad sobre saldos para evitar conciliaciones manuales entre personas o sistemas.',
      items: [
        'Factura Pro para comprobantes, clientes, cotizaciones, pagos y reportes',
        'Cobros Pro para creditos, pagos, saldos y estados de cuenta',
        'Cuentas por cobrar con seguimiento segun el proceso acordado',
        'Datos consistentes entre servicio, comprobante y cobro',
      ],
    },
    {
      title: 'Reportes para administrar el negocio',
      body: 'La herramienta debe responder las preguntas que usa la administracion: que se cotizo, que se facturo, que se pago, que saldo queda y que clientes requieren seguimiento. El alcance cambia segun usuarios, volumen y fuentes de datos.',
      items: [
        'Cotizaciones y facturacion por cliente o periodo',
        'Pagos, saldos y cartera pendiente',
        'Seguimiento comercial por responsable o etapa',
        'Reportes propios cuando una vista estandar no es suficiente',
      ],
    },
    {
      title: 'Producto existente, integracion o plataforma a medida',
      body: 'Factura Pro, Cobros Pro y CRM cubren necesidades comerciales y administrativas concretas. Proyectos, horas, contratos, aprobaciones, agenda o portales de clientes deben validarse en la demo y pueden requerir configuracion, integracion o desarrollo a medida.',
      items: [
        'Empezar por el problema operativo prioritario',
        'Confirmar que funciones ya cubre cada producto',
        'Identificar sistemas y datos que deben conectarse',
        'Separar requisitos iniciales de futuras mejoras',
      ],
    },
  ],
  decisionTable: {
    title: 'Que revisar antes de elegir software para una empresa de servicios',
    body: 'Estas preguntas ayudan a comparar opciones por el flujo completo del negocio y a preparar una demo enfocada en clientes, facturacion, cobros y control administrativo.',
    rows: [
      {
        factor: 'Flujo comercial',
        question: 'Como llegan las consultas y que seguimiento necesita el equipo hasta aprobar una cotizacion?',
        impact: 'Define clientes, contactos, etapas, responsables, historial y permisos del CRM.',
      },
      {
        factor: 'Facturacion',
        question: 'Se factura por servicio, anticipo, periodo, entregable u otra condicion comercial?',
        impact: 'Permite validar cotizaciones, comprobantes, pagos y datos que deben conservarse.',
      },
      {
        factor: 'Cobranza',
        question: 'El negocio maneja credito, pagos parciales, vencimientos o estados de cuenta?',
        impact: 'Determina si basta registrar pagos o si se necesita un flujo dedicado de cuentas por cobrar.',
      },
      {
        factor: 'Usuarios y reportes',
        question: 'Que puede ver cada rol y que indicadores necesita administracion o gerencia?',
        impact: 'Alinea permisos y reportes con decisiones reales, sin exponer datos innecesarios.',
      },
      {
        factor: 'Proceso propio',
        question: 'Hay contratos, proyectos, horas, aprobaciones, agenda o portales que el software debe manejar?',
        impact: 'Aclara si aplica un producto existente, una integracion o una plataforma a medida.',
      },
    ],
  },
  faqs: [
    {
      question: 'Que software necesita una empresa de servicios profesionales?',
      answer:
        'Depende de como vende, cotiza, factura y cobra. Como base conviene evaluar clientes y contactos, seguimiento comercial, cotizaciones, facturacion electronica, pagos, saldos, reportes, usuarios e integraciones.',
    },
    {
      question: 'Que producto Asystec puede servir para un negocio de servicios?',
      answer:
        'Factura Pro puede evaluarse para clientes, cotizaciones, comprobantes, pagos y reportes; Cobros Pro para creditos, saldos, pagos y estados de cuenta; y CRM para seguimiento comercial. La demo confirma que combinacion aplica.',
    },
    {
      question: 'Se pueden controlar facturas pendientes de pago?',
      answer:
        'Asystec puede evaluar un flujo de cuentas por cobrar con clientes, pagos, saldos, estados de cuenta y reportes. El alcance depende de si hay credito, abonos, vencimientos o integraciones con otros sistemas.',
    },
    {
      question: 'Incluye proyectos, horas, contratos o agenda?',
      answer:
        'Esas funciones no deben asumirse. Se revisan durante la demo y, segun el proceso, pueden requerir configuracion, una integracion o una plataforma a medida.',
    },
    {
      question: 'Que informacion conviene llevar a la demo?',
      answer:
        'Conviene llevar el flujo desde la consulta hasta el cobro, tipos de cliente y servicio, forma de cotizar y facturar, usuarios, saldos, reportes actuales y sistemas que deban conectarse.',
    },
  ],
  related: [
    { label: 'Factura Pro', href: '/facturacionapp' },
    { label: 'Cobros Pro', href: '/cobrosapp' },
    { label: 'CRM', href: '/soluciones/crm' },
    { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
    { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
    { label: 'Reportes', href: '/soluciones/reportes' },
    { label: 'Integraciones', href: '/soluciones/integraciones' },
    { label: 'Plataformas a medida', href: '/plataformas' },
    { label: 'Coordinar demo', href: '/contact' },
  ],
  finalCta: {
    title: 'Revisa el flujo completo de tu empresa de servicios',
    body: 'Comparte como captas clientes, cotizas, facturas, cobras y reportas para definir si aplica un producto Asystec, una integracion o una plataforma a medida.',
    primary: contactCta,
    secondary: whatsappCta,
  },
};
