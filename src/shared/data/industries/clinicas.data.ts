import type { LandingPageData } from '../seo-landings.data';

const contactCta = { label: 'Coordinar demo', href: '/contact' };
const whatsappCta = {
  label: 'Escribir por WhatsApp',
  href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20evaluar%20software%20administrativo%20para%20una%20clinica.',
};

export const clinicasIndustryPage: LandingPageData = {
  slug: 'clinicas',
  path: '/industrias/clinicas',
  kind: 'industry',
  schemaType: 'Service',
  title: 'Software administrativo para clinicas',
  seoTitle: 'Software administrativo para clinicas en Costa Rica | Asystec',
  description:
    'Evalua software administrativo para clinicas en Costa Rica: facturacion, cobros, clientes, reportes, usuarios e integraciones, con alcance clinico por validar.',
  eyebrow: 'Software para clinicas en Costa Rica',
  heroTitle: 'Software administrativo para clinicas: facturacion, cobros y control operativo',
  answer:
    'Una clinica en Costa Rica puede usar software administrativo para centralizar clientes, servicios facturables, cobros, saldos, usuarios, reportes e integraciones. La agenda medica, el expediente clinico y los datos de salud requieren una evaluacion separada de alcance, seguridad y requisitos aplicables.',
  intro:
    'Asystec ayuda a revisar si Factura Pro, Cobros Pro, CRM, integraciones o una plataforma a la medida pueden ordenar la parte administrativa. Esta pagina no presenta a Asystec como un sistema medico especializado ni promete expediente clinico.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  highlights: [
    'Separar necesidades administrativas y clinicas antes de cotizar.',
    'Conectar facturacion, cobros, clientes y reportes cuando el flujo lo permita.',
    'Definir usuarios, permisos e integraciones con datos reales de la operacion.',
    'Llegar a una demo con alcance, limites y siguientes pasos claros.',
  ],
  modules: [
    'Clientes y contactos',
    'Facturacion electronica',
    'Cobros y saldos',
    'Usuarios y permisos',
    'Reportes administrativos',
    'Integraciones',
  ],
  sections: [
    {
      title: 'Separa la operacion administrativa del expediente clinico',
      body: 'El primer paso es distinguir procesos administrativos de funciones medicas. Facturacion, cobros, usuarios, reportes o seguimiento comercial pueden evaluarse con soluciones empresariales; notas clinicas, diagnosticos, ordenes, imagenes y expedientes necesitan requisitos especializados antes de proponer software.',
      items: [
        'Procesos administrativos que pueden revisarse con productos existentes',
        'Funciones clinicas que requieren validacion funcional y legal separada',
        'Datos que cada rol necesita consultar o modificar',
        'Sistemas actuales que no deben duplicar informacion',
      ],
    },
    {
      title: 'Ordena facturacion, cobros y seguimiento administrativo',
      body: 'Una clinica puede necesitar emitir comprobantes, registrar pagos, revisar saldos, dar seguimiento a clientes y preparar reportes para administracion. La demo debe confirmar si conviene Factura Pro, Cobros Pro, CRM, una integracion o un desarrollo a la medida.',
      items: [
        'Servicios, clientes y datos necesarios para facturar',
        'Pagos, abonos, saldos y cuentas por cobrar',
        'Seguimiento administrativo sin convertir el CRM en expediente medico',
        'Reportes para caja, facturacion, cartera y gerencia',
      ],
    },
    {
      title: 'Define usuarios, permisos y manejo de datos',
      body: 'Recepcion, caja, administracion, profesionales y gerencia no necesitan el mismo acceso. Antes de implementar, conviene mapear roles, datos sensibles, trazabilidad, respaldos e integraciones. Si el alcance incluye informacion de salud, debe validarse con responsables legales, tecnicos y clinicos.',
      items: [
        'Roles y permisos por responsabilidad',
        'Separacion entre informacion comercial, fiscal y clinica',
        'Trazabilidad de cambios y acceso a reportes',
        'Requisitos de seguridad, respaldo y continuidad por validar',
      ],
    },
    {
      title: 'Prepara una demo que responda al flujo real',
      body: 'Una demo util no empieza por una lista de funciones. Empieza por sedes, usuarios, servicios, facturacion, pagos, saldos, reportes y sistemas existentes. Con ese mapa se puede decidir que ya cubre un producto y que requiere integracion, desarrollo o una herramienta clinica especializada.',
      items: [
        'Cantidad de sedes, usuarios y roles administrativos',
        'Flujo actual para facturar, cobrar y revisar saldos',
        'Reportes que necesita administracion o gerencia',
        'Agenda, expediente u otros sistemas que deben mantenerse o conectarse',
      ],
    },
  ],
  decisionTable: {
    title: 'Criterios para elegir software administrativo para una clinica',
    body: 'Estas preguntas ayudan a evitar dos errores: comprar un sistema empresarial esperando funciones medicas que no ofrece, o contratar una plataforma clinica sin resolver facturacion, cobros e integraciones administrativas.',
    rows: [
      {
        factor: 'Alcance',
        question: 'La prioridad es administrativa, clinica o una integracion entre ambos mundos?',
        impact: 'Define si aplica un producto Asystec, una plataforma a la medida o software medico especializado.',
      },
      {
        factor: 'Facturacion y pagos',
        question: 'Como se registran servicios, comprobantes, pagos, abonos y cierres?',
        impact: 'Permite evaluar Factura Pro, caja, cuentas por cobrar y reportes sin prometer un flujo universal.',
      },
      {
        factor: 'Clientes y seguimiento',
        question: 'Que datos administrativos se necesitan antes y despues de prestar el servicio?',
        impact: 'Ayuda a separar CRM y contacto comercial de notas, diagnosticos o expedientes clinicos.',
      },
      {
        factor: 'Usuarios y datos',
        question: 'Que puede consultar o modificar recepcion, caja, administracion, profesionales y gerencia?',
        impact: 'Reduce accesos innecesarios y muestra que requisitos de privacidad y trazabilidad deben validarse.',
      },
      {
        factor: 'Integraciones',
        question: 'Que agenda, expediente, laboratorio, facturacion u otro sistema ya usa la clinica?',
        impact: 'Evita doble digitacion y permite estimar si una integracion es viable antes de comprometer alcance.',
      },
    ],
  },
  faqs: [
    {
      question: 'Que software administrativo necesita una clinica en Costa Rica?',
      answer:
        'Depende de si necesita facturacion electronica, pagos, cuentas por cobrar, clientes, usuarios, reportes, sucursales o integraciones. Agenda medica, expediente, diagnosticos e imagenes deben evaluarse como un alcance clinico separado.',
    },
    {
      question: 'Asystec ofrece expediente clinico electronico?',
      answer:
        'El portafolio publico de Asystec no presenta un producto de expediente clinico especializado. Si ese es un requisito, debe definirse y validarse aparte antes de comprometer una solucion o integracion.',
    },
    {
      question: 'Se puede conectar facturacion electronica con el proceso de una clinica?',
      answer:
        'Se puede evaluar Factura Pro o una integracion segun los servicios, emisores, datos, comprobantes y sistema actual. La viabilidad y el alcance se confirman en una demo tecnica con el flujo real.',
    },
    {
      question: 'Se pueden controlar pagos y saldos pendientes?',
      answer:
        'Cobros Pro y las soluciones de cuentas por cobrar pueden evaluarse para registrar clientes, creditos, pagos, saldos y reportes. La demo debe confirmar como se relacionan con facturacion y los sistemas de la clinica.',
    },
    {
      question: 'Que debo llevar a una demo de software para clinicas?',
      answer:
        'Conviene llevar cantidad de sedes y usuarios, roles, servicios facturables, flujo de cobro, saldos, reportes, sistemas actuales y una lista separada de requisitos administrativos y clinicos.',
    },
  ],
  related: [
    { label: 'Factura Pro', href: '/facturacionapp' },
    { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
    { label: 'Cobros Pro', href: '/cobrosapp' },
    { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
    { label: 'CRM', href: '/soluciones/crm' },
    { label: 'Integraciones', href: '/soluciones/integraciones' },
    { label: 'Plataformas a medida', href: '/plataformas' },
    { label: 'Coordinar demo', href: '/contact' },
  ],
  relatedTitle: 'Soluciones para el alcance administrativo',
  relatedIntro:
    'Estas paginas ayudan a revisar productos, integraciones y servicios sin asumir que sustituyen un sistema medico especializado.',
  finalCta: {
    title: 'Define primero el alcance administrativo y clinico',
    body: 'Coordina una demo para revisar facturacion, cobros, usuarios, reportes e integraciones. Si el proyecto incluye expediente u otras funciones medicas, se documentan como requisitos separados antes de cotizar.',
    primary: contactCta,
    secondary: whatsappCta,
  },
  showTrustpilotStrip: true,
};
