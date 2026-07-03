import type { LandingPageData } from '../seo-landings.data';

const contactCta = { label: 'Coordinar demo', href: '/contact' };
const whatsappCta = {
  label: 'Escribir por WhatsApp',
  href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20coordinar%20una%20demo%20de%20POS%20para%20restaurante.',
};

export const restaurantesIndustryPage: LandingPageData = {
  slug: 'restaurantes',
  path: '/industrias/restaurantes',
  kind: 'industry',
  schemaType: 'Service',
  title: 'Software POS para restaurantes en Costa Rica',
  seoTitle: 'Software POS para restaurantes en Costa Rica | Asystec',
  description:
    'Software POS para restaurantes en Costa Rica: caja, facturacion electronica, inventario, reportes, usuarios y demo comercial con Asystec.',
  eyebrow: 'Industria restaurantes',
  heroTitle: 'Software POS para restaurantes en Costa Rica',
  answer:
    'Un restaurante en Costa Rica necesita un POS que conecte caja, facturacion electronica, productos, usuarios, cierres e inventario. Antes de elegir, conviene hacer una demo con el flujo real del local, incluyendo turnos, menu, reportes y cualquier operacion con mesas o cocina.',
  intro:
    'Asystec ayuda a restaurantes a evaluar un POS para vender rapido, facturar, controlar caja, ordenar productos, revisar cierres y preparar reportes sin depender de hojas separadas.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  highlights: [
    'Responder a busquedas de POS para restaurantes en Costa Rica.',
    'Preparar una demo con caja, menu, facturacion e inventario.',
    'Conectar la industria con Asystec POS, inventario y reportes.',
    'Dar una ruta directa a contacto y WhatsApp.',
  ],
  modules: [
    'Caja rapida y ventas por turno',
    'Facturacion electronica desde el flujo de venta',
    'Catalogo, categorias y productos',
    'Cierres de caja y usuarios',
    'Inventario segun el nivel de control requerido',
    'Reportes de ventas, productos y operacion',
  ],
  sections: [
    {
      title: 'Cuando el problema esta en caja',
      body: 'El restaurante debe revisar velocidad de venta, permisos, cierres, anulaciones, medios de pago y control por usuario. Un POS mal alineado puede crear filas, errores de cobro o reportes incompletos al cierre.',
      items: [
        'Cantidad de cajas, usuarios y turnos',
        'Flujo para emitir comprobantes',
        'Control de anulaciones, cierres y permisos',
        'Datos que gerencia necesita revisar cada dia',
      ],
    },
    {
      title: 'Cuando el problema esta en inventario',
      body: 'El alcance depende de si el restaurante solo necesita productos terminados o si tambien quiere revisar insumos, categorias, movimientos, combos o reportes de rotacion.',
      items: [
        'Catalogo simple o categorias de menu',
        'Productos con alta rotacion',
        'Control manual que hoy vive en Excel',
        'Reportes para compras y reposicion',
      ],
    },
    {
      title: 'Cuando el problema esta en reportes',
      body: 'La demo debe aterrizar que quiere ver el dueno o gerente: ventas, productos, caja, turnos, usuarios, sucursales o tendencias. El valor del POS aumenta cuando los reportes ayudan a decidir.',
      items: [
        'Ventas por periodo o turno',
        'Productos mas vendidos',
        'Cierres y diferencias de caja',
        'Comparacion si hay mas de una sucursal',
      ],
    },
    {
      title: 'Como decidir sin promesas genericas',
      body: 'Antes de elegir, conviene probar el flujo real: quien vende, como factura, que productos se registran, que pasa al cierre y que informacion debe quedar lista para administracion.',
      items: [
        'Llevar escenarios reales a la demo',
        'Comparar el proceso actual contra el sistema',
        'Separar necesidades obligatorias de mejoras futuras',
        'Confirmar soporte, capacitacion e integraciones necesarias',
      ],
    },
  ],
  decisionTable: {
    title: 'Preguntas para llevar a la demo',
    body: 'Esta tabla ayuda a preparar una conversacion comercial util y evita elegir un sistema que luego no calza con la operacion diaria del restaurante.',
    rows: [
      {
        factor: 'Caja y velocidad de atencion',
        question: 'Cuantos puntos de venta, usuarios y turnos necesita controlar el restaurante?',
        impact: 'Define permisos, cierres, trazabilidad de ventas y capacitacion para operar sin frenar la atencion.',
      },
      {
        factor: 'Facturacion electronica',
        question: 'El restaurante emite comprobantes desde caja o necesita flujos separados por tipo de cliente?',
        impact: 'Evita duplicar ventas, facturas y reportes cuando el equipo trabaja bajo presion.',
      },
      {
        factor: 'Inventario y productos',
        question: 'El control actual es por producto terminado, insumos, combos o categorias de menu?',
        impact: 'Determina si basta un catalogo simple o si se requiere una configuracion mas detallada.',
      },
      {
        factor: 'Reportes para gerencia',
        question: 'Que necesita revisar el dueno al cierre: ventas, caja, productos, usuarios o sucursales?',
        impact: 'Alinea el POS con decisiones diarias y no solo con el registro de ventas.',
      },
    ],
  },
  faqs: [
    {
      question: 'Que debe tener un POS para restaurantes en Costa Rica?',
      answer:
        'Debe cubrir caja rapida, productos, usuarios, cierres, facturacion electronica, reportes e inventario segun el flujo real del restaurante. Si opera con mesas, cocina, turnos o varias sucursales, esos puntos deben revisarse en la demo.',
    },
    {
      question: 'Asystec POS sirve para restaurantes pequenos?',
      answer:
        'Puede evaluarse para restaurantes que necesitan ordenar ventas, caja, facturacion, productos y reportes. Lo correcto es revisar el flujo actual para definir si aplica una configuracion sencilla o una solucion mas completa.',
    },
    {
      question: 'Puedo pedir una demo enfocada en mi restaurante?',
      answer:
        'Si. Puedes coordinar una demo o escribir por WhatsApp para revisar caja, menu, facturacion, inventario, usuarios, reportes y cualquier integracion necesaria antes de decidir.',
    },
    {
      question: 'Conviene cambiar de Excel o caja manual a un POS?',
      answer:
        'Conviene cuando el restaurante ya necesita menos errores en caja, control de productos, facturacion consistente, cierres claros o reportes para tomar decisiones. La demo ayuda a comparar el proceso actual contra un sistema.',
    },
  ],
  related: [
    { label: 'Asystec POS', href: '/asystec-pos' },
    { label: 'Sistema POS', href: '/soluciones/pos' },
    { label: 'Inventario', href: '/soluciones/inventario' },
    { label: 'Reportes', href: '/soluciones/reportes' },
    { label: 'Como elegir un POS', href: '/guias/como-elegir-sistema-pos' },
    { label: 'Cuanto cuesta un POS', href: '/guias/cuanto-cuesta-un-pos-costa-rica' },
    { label: 'Software para negocios', href: '/software-para-negocios-costa-rica' },
    { label: 'Coordinar demo', href: '/contact' },
  ],
};
