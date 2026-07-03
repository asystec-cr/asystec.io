import type { LandingPageData } from '../seo-landings.data';

const contactCta = { label: 'Coordinar demo', href: '/contact' };
const whatsappCta = {
  label: 'Escribir por WhatsApp',
  href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20coordinar%20una%20demo%20para%20varias%20sucursales.',
};

export const multiSucursalSolutionPage: LandingPageData = {
  slug: 'multi-sucursal',
  path: '/soluciones/multi-sucursal',
  kind: 'solution',
  schemaType: 'Service',
  title: 'Software para negocios con varias sucursales',
  seoTitle: 'Software para negocios con varias sucursales en Costa Rica | Asystec',
  description:
    'Software multi-sucursal en Costa Rica para controlar ventas, inventario, usuarios, permisos, reportes y operacion por ubicacion.',
  eyebrow: 'Solucion multi-sucursal',
  heroTitle: 'Software para controlar varias sucursales desde una operacion central',
  answer:
    'Un negocio con varias sucursales necesita ver ventas, inventario, usuarios, permisos y reportes por ubicacion sin duplicar datos. Antes de elegir software, conviene revisar que necesita controlar cada local y que informacion debe consolidar gerencia.',
  intro:
    'Asystec ayuda a pymes en Costa Rica a evaluar sistemas para crecer de un local a varias sucursales, conectar inventario y ventas, ordenar permisos y preparar reportes utiles para tomar decisiones.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  highlights: [
    'Responder a busquedas de software para varias sucursales en Costa Rica.',
    'Conectar el crecimiento multi-sucursal con POS, inventario y reportes.',
    'Preparar una demo basada en permisos, ubicaciones y datos reales.',
    'Dar una ruta clara hacia contacto, WhatsApp y soluciones relacionadas.',
  ],
  modules: [
    'Ventas por sucursal',
    'Inventario por ubicacion',
    'Usuarios y permisos',
    'Reportes consolidados',
    'Cierres y supervision',
    'Integraciones segun el proceso',
  ],
  sections: [
    {
      title: 'Cuando un solo local deja de ser suficiente',
      body: 'El control se complica cuando cada sucursal maneja archivos, cierres o reportes separados. El sistema debe ayudar a comparar locales, revisar diferencias y mantener datos consistentes para que gerencia no dependa de consolidaciones manuales.',
      items: [
        'Ventas separadas por ubicacion',
        'Cierres que deben revisarse por local',
        'Inventario distribuido entre tiendas o bodegas',
        'Usuarios con responsabilidades diferentes',
      ],
    },
    {
      title: 'Que debe ver gerencia',
      body: 'La conversacion debe empezar por las decisiones que necesita tomar la administracion: que sucursal vende mas, donde hay faltantes, quien puede hacer ajustes y que reportes se necesitan cada dia, semana o mes.',
      items: [
        'Comparacion de ventas por sucursal',
        'Productos con alta o baja rotacion por ubicacion',
        'Usuarios, permisos y trazabilidad de cambios',
        'Indicadores para compras, caja y supervision',
      ],
    },
    {
      title: 'Inventario y permisos por ubicacion',
      body: 'Un sistema multi-sucursal debe definir si el inventario se maneja por tienda, bodega central o ambos. Tambien debe separar permisos para que cada usuario vea o edite solo lo que corresponde.',
      items: [
        'Existencias por punto operativo',
        'Movimientos entre sucursales o bodegas',
        'Roles para caja, bodega, administracion y gerencia',
        'Reportes centralizados sin perder detalle local',
      ],
    },
    {
      title: 'Como enfocar la demo',
      body: 'Una demo util debe usar el mapa real del negocio: cantidad de sucursales, cajas, usuarios, bodegas, productos, cierres, reportes actuales y cualquier integracion necesaria para evitar doble digitacion.',
      items: [
        'Llevar cantidad de locales, cajas y usuarios',
        'Separar reportes obligatorios de mejoras futuras',
        'Identificar integraciones con facturacion, POS o sistemas actuales',
        'Confirmar soporte, migracion y crecimiento esperado',
      ],
    },
  ],
  decisionTable: {
    title: 'Criterios para elegir software multi-sucursal',
    body: 'Estas preguntas ayudan a evaluar si el sistema puede sostener el crecimiento del negocio sin perder control operativo ni duplicar trabajo administrativo.',
    rows: [
      {
        factor: 'Sucursales y cajas',
        question: 'Cuantos puntos de venta, bodegas o ubicaciones necesita administrar el negocio?',
        impact: 'Define estructura de datos, permisos, reportes y nivel de configuracion requerido.',
      },
      {
        factor: 'Inventario por ubicacion',
        question: 'Cada sucursal maneja existencias propias, bodega central o transferencias entre puntos?',
        impact: 'Afecta movimientos, conteos, reposicion y visibilidad para compras o gerencia.',
      },
      {
        factor: 'Usuarios y permisos',
        question: 'Que puede hacer cada rol: vender, ajustar inventario, ver reportes o administrar usuarios?',
        impact: 'Reduce riesgos operativos y ayuda a mantener trazabilidad por persona y sucursal.',
      },
      {
        factor: 'Reportes consolidados',
        question: 'Que indicadores necesita comparar gerencia entre sucursales y con que frecuencia?',
        impact: 'Evita consolidar hojas manualmente y convierte ventas, inventario y caja en informacion accionable.',
      },
    ],
  },
  faqs: [
    {
      question: 'Que debe tener un software para varias sucursales?',
      answer:
        'Debe permitir ventas, inventario, usuarios, permisos, cierres y reportes por sucursal. Tambien debe dar una vista consolidada para gerencia sin perder el detalle de cada ubicacion.',
    },
    {
      question: 'Cuando conviene cambiar a un sistema multi-sucursal?',
      answer:
        'Conviene cuando el negocio ya opera mas de un local, bodega o punto de venta, o cuando planea crecer y necesita evitar archivos separados, datos duplicados y reportes manuales.',
    },
    {
      question: 'El control multi-sucursal puede conectarse con POS e inventario?',
      answer:
        'Si. La evaluacion puede conectar ventas, caja, inventario, facturacion electronica, usuarios y reportes dentro de Asystec POS o mediante una plataforma ajustada al proceso del negocio.',
    },
    {
      question: 'Puedo pedir una demo enfocada en mis sucursales?',
      answer:
        'Si. Puedes coordinar una demo o escribir por WhatsApp para revisar sucursales, cajas, usuarios, inventario, permisos, reportes e integraciones necesarias antes de decidir.',
    },
  ],
  related: [
    { label: 'Asystec POS', href: '/asystec-pos' },
    { label: 'Sistema POS', href: '/soluciones/pos' },
    { label: 'Inventario', href: '/soluciones/inventario' },
    { label: 'Reportes', href: '/soluciones/reportes' },
    { label: 'Integraciones', href: '/soluciones/integraciones' },
    { label: 'Distribuidores', href: '/industrias/distribuidores' },
    { label: 'Retail', href: '/industrias/retail' },
    { label: 'Coordinar demo', href: '/contact' },
  ],
};
