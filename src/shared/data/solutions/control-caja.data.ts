import type { LandingPageData } from '../seo-landings.data';

const contactCta = { label: 'Coordinar demo', href: '/contact' };
const whatsappCta = {
  label: 'Consultar por WhatsApp',
  href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20evaluar%20un%20sistema%20para%20controlar%20la%20caja%20de%20mi%20negocio.',
};

export const controlCajaSolutionPage: LandingPageData = {
  slug: 'control-de-caja',
  path: '/soluciones/control-de-caja',
  kind: 'solution',
  schemaType: 'Service',
  title: 'Sistema para control de caja',
  seoTitle: 'Sistema para control de caja en Costa Rica | Asystec',
  description:
    'Sistema para control de caja en Costa Rica con ventas, pagos, ingresos, retiros, cierres, usuarios, trazabilidad y reportes conectados al POS.',
  eyebrow: 'Control de caja para negocios en Costa Rica',
  heroTitle: 'Controla aperturas, movimientos y cierres de caja desde el POS',
  answer:
    'Un sistema para control de caja ayuda a registrar quién opera, qué ventas y pagos entran, cuáles ingresos o retiros se realizan y cómo termina cada sesión. La meta es que administración pueda revisar movimientos, responsables y resultados sin reconstruir el día desde recibos, mensajes o archivos separados.',
  intro:
    'Asystec POS conecta caja, ventas, facturación electrónica, inventario, usuarios y reportes para comercios que necesitan ordenar la operación diaria y revisar cada cierre con mejor contexto.',
  primaryCta: whatsappCta,
  secondaryCta: contactCta,
  heroNote: 'La demo valida cajas, usuarios, medios de pago, movimientos y reportes según tu operación real.',
  highlights: [
    'Sesiones, ingresos, retiros y cierres vinculados con la operación diaria.',
    'Ventas, pagos y comprobantes dentro del mismo flujo de caja.',
    'Usuarios, roles y trazabilidad para identificar responsables.',
    'Reportes para revisar movimientos y resultados de cada jornada.',
  ],
  modules: [
    'Aperturas y sesiones de caja',
    'Ventas y medios de pago',
    'Ingresos y retiros',
    'Cierres por jornada o responsable',
    'Usuarios, roles y permisos',
    'Trazabilidad de movimientos',
    'Facturación electrónica',
    'Reportes operativos',
  ],
  sections: [
    {
      title: 'Qué significa controlar la caja',
      body: 'Controlar la caja no es solo guardar el total vendido. El negocio necesita saber quién inició la sesión, qué pagos se registraron, qué movimientos cambiaron el efectivo y qué información debe revisar administración al terminar la jornada.',
      items: [
        'Responsable, punto de venta y momento de apertura',
        'Ventas y pagos registrados durante la sesión',
        'Ingresos o retiros con motivo y responsable',
        'Cierre y reporte que queda disponible para revisión',
      ],
    },
    {
      title: 'Qué conviene revisar cuando hay diferencias',
      body: 'Una diferencia no se resuelve mirando únicamente el total final. Conviene reconstruir ventas, medios de pago, anulaciones, ingresos, retiros y cambios de responsable para ubicar en qué momento apareció el desajuste.',
      items: [
        'Comparar ventas con los medios de pago registrados',
        'Revisar ingresos, retiros, anulaciones y correcciones',
        'Identificar el usuario y la sesión de cada movimiento',
        'Documentar la causa antes de ajustar la operación',
      ],
    },
    {
      title: 'Cuándo conviene conectarlo con un POS',
      body: 'Si el negocio vende productos o servicios en mostrador, la caja suele depender también de facturación, inventario, clientes y reportes. Mantener esos procesos separados obliga a conciliar datos y aumenta el trabajo manual al cierre.',
      items: [
        'La venta debe emitir un comprobante electrónico',
        'El inventario cambia con cada producto vendido',
        'Varias personas atienden, cobran o supervisan',
        'Gerencia necesita revisar ventas y cierres con el mismo contexto',
      ],
    },
    {
      title: 'Cómo preparar una demo útil',
      body: 'La mejor prueba usa una jornada parecida a la real. Lleva los medios de pago, tipos de movimiento, cantidad de usuarios, forma actual de abrir y cerrar, y el reporte que hoy utiliza administración.',
      items: [
        'Cantidad de cajas, usuarios, turnos o responsables',
        'Efectivo, tarjetas, transferencias y otros medios de pago',
        'Ingresos, retiros, devoluciones o ajustes habituales',
        'Reporte de cierre y diferencias que hoy se investigan',
      ],
    },
  ],
  decisionTable: {
    title: 'Checklist para evaluar un sistema de control de caja',
    body: 'Estas preguntas convierten una necesidad general en una demo verificable. El alcance final depende de cómo vende, cobra, factura y supervisa cada negocio.',
    headers: {
      factor: 'Momento de caja',
      question: 'Qué comprobar en la demo',
      impact: 'Por qué importa',
    },
    rows: [
      {
        factor: 'Apertura',
        question: 'Cómo se identifica la caja, el usuario y el inicio de cada sesión?',
        impact: 'Define desde dónde se revisan responsabilidades y movimientos de la jornada.',
      },
      {
        factor: 'Ventas y pagos',
        question: 'Cómo quedan separados efectivo, tarjetas, transferencias y otros medios de pago?',
        impact: 'Permite comparar el flujo registrado con los reportes y comprobantes disponibles.',
      },
      {
        factor: 'Ingresos y retiros',
        question: 'El movimiento conserva motivo, monto, momento y usuario responsable?',
        impact: 'Ayuda a explicar cambios de efectivo que no nacen de una venta.',
      },
      {
        factor: 'Cierre',
        question: 'Qué datos muestra el reporte para revisar movimientos, responsables y resultado de la sesión?',
        impact: 'Evita reconstruir el día desde recibos, chats o archivos separados.',
      },
      {
        factor: 'Control y crecimiento',
        question: 'Qué permisos, reportes, cajas o sucursales necesita revisar administración?',
        impact: 'Aclara si el alcance inicial podrá acompañar nuevos usuarios o puntos de venta.',
      },
    ],
  },
  faqs: [
    {
      question: 'Qué debe tener un sistema para control de caja?',
      answer:
        'Debe registrar usuarios, sesiones, ventas, medios de pago, ingresos, retiros y cierres, y dejar reportes que permitan revisar movimientos y responsables. Si el negocio vende productos, también conviene conectarlo con facturación e inventario.',
    },
    {
      question: 'Cómo ayuda un sistema cuando aparecen diferencias de caja?',
      answer:
        'Ayuda a revisar la sesión con contexto: ventas, medios de pago, ingresos, retiros, anulaciones, usuarios y cierres. La causa debe investigarse con la operación real; el sistema aporta trazabilidad, pero no sustituye el procedimiento interno del negocio.',
    },
    {
      question: 'Asystec POS funciona si se cae internet?',
      answer:
        'La operación principal del POS trabaja localmente para que la caja no dependa siempre de la conexión. El envío fiscal, los respaldos y las integraciones que utilizan servicios externos sí requieren conectividad y se revisan según la configuración.',
    },
    {
      question: 'Se pueden manejar varios usuarios o cajas?',
      answer:
        'Sí. En la demo se revisan usuarios, roles, permisos, cajas y puntos de venta para confirmar la configuración que necesita la operación actual y cómo podría crecer.',
    },
    {
      question: 'El control de caja se conecta con facturación e inventario?',
      answer:
        'En Asystec POS, la evaluación puede conectar la venta y el pago con facturación electrónica, productos, inventario y reportes. La demo confirma el flujo y las reglas que aplican al negocio.',
    },
    {
      question: 'Qué debo llevar a una demo de control de caja?',
      answer:
        'Lleva la cantidad de cajas y usuarios, medios de pago, tipos de ingresos o retiros, forma actual de abrir y cerrar, ejemplos de diferencias frecuentes y el reporte que necesita administración.',
    },
  ],
  related: [
    { label: 'Asystec POS', href: '/asystec-pos' },
    { label: 'Sistema POS para comercios', href: '/soluciones/pos' },
    { label: 'Reportes para pymes', href: '/soluciones/reportes' },
    { label: 'Inventario', href: '/soluciones/inventario' },
    { label: 'Software multi-sucursal', href: '/soluciones/multi-sucursal' },
    { label: 'Cómo elegir un sistema POS', href: '/guias/como-elegir-sistema-pos' },
    { label: 'Cuánto cuesta un POS', href: '/guias/cuanto-cuesta-un-pos-costa-rica' },
    { label: 'POS para minisúper', href: '/industrias/minisuper' },
    { label: 'POS para restaurantes', href: '/industrias/restaurantes' },
  ],
  finalCta: {
    title: 'Prueba una jornada real antes de elegir',
    body: 'Cuéntanos cómo abre, vende, cobra y cierra tu equipo. Prepararemos la demo alrededor de tus cajas, usuarios, medios de pago y reportes.',
    primary: whatsappCta,
    secondary: contactCta,
  },
};
