import type { LandingPageData } from '../seo-landings.data';

const contactCta = { label: 'Coordinar demo', href: '/contact' };
const whatsappCta = {
  label: 'Escribir por WhatsApp',
  href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20preparar%20el%20sistema%20para%20abrir%20una%20segunda%20sucursal.',
};

export const segundaSucursalGuidePage: LandingPageData = {
  slug: 'como-preparar-segunda-sucursal',
  path: '/guias/como-preparar-segunda-sucursal',
  kind: 'guide',
  schemaType: 'Article',
  title: 'Como preparar el sistema para abrir una segunda sucursal',
  seoTitle: 'Como preparar una segunda sucursal con POS en Costa Rica | Asystec',
  description:
    'Guia para preparar POS, inventario, cajas, usuarios, permisos, reportes y facturacion antes de abrir una segunda sucursal en Costa Rica.',
  eyebrow: 'Guia para crecer a una segunda sucursal',
  heroTitle: 'Como preparar POS, inventario y reportes antes de abrir una segunda sucursal',
  answer:
    'Antes de abrir una segunda sucursal, define que datos comparte con el local actual y que debe controlarse por separado: cajas, inventario, usuarios, permisos, cierres y reportes. Prueba el flujo completo antes de la apertura y confirma en una demo como se configuraran las ubicaciones, la facturacion y el soporte.',
  intro:
    'Esta guia ayuda a convertir la apertura de otro local en un plan operativo verificable. El objetivo es evitar archivos separados, permisos improvisados y reportes que obliguen a consolidar la informacion manualmente despues de empezar a vender.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  heroNote:
    'La configuracion exacta depende de las cajas, bodegas, usuarios, comprobantes, integraciones y controles que necesite cada negocio.',
  highlightsTitle: 'Decisiones que conviene cerrar antes de abrir',
  highlights: [
    'Separar que datos pertenecen a cada sucursal y cuales necesita consolidar gerencia.',
    'Definir existencias, bodegas y movimientos antes de cargar el inventario inicial.',
    'Asignar permisos por rol para caja, inventario, supervision y administracion.',
    'Probar venta, cierre, reportes y contingencia con el equipo que operara el nuevo local.',
  ],
  modulesTitle: 'Mapa minimo para la segunda sucursal',
  modulesIntro:
    'Estos procesos deben tener un responsable y una prueba concreta antes de la apertura. No basta con crear otro nombre de sucursal dentro del sistema.',
  modules: [
    'Sucursales, cajas y terminales',
    'Inventario por ubicacion',
    'Usuarios, roles y permisos',
    'Ventas, cierres y anulaciones',
    'Facturacion y consecutivos',
    'Reportes por local y consolidados',
    'Movimientos entre ubicaciones',
    'Soporte y plan de contingencia',
  ],
  sections: [
    {
      title: '1. Dibuja el flujo actual antes de copiarlo',
      body: 'La segunda sucursal no deberia heredar procesos que ya generan diferencias en caja o inventario. Documenta como se vende, quien recibe mercaderia, como se hacen cierres y que revisa gerencia para decidir que conviene mantener, cambiar o integrar.',
      items: [
        'Lista cajas, bodegas, usuarios y responsables actuales.',
        'Identifica hojas, sistemas o mensajes que duplican informacion.',
        'Separa controles obligatorios de mejoras que pueden esperar.',
        'Define que debe funcionar aunque el local principal no este disponible.',
      ],
    },
    {
      title: '2. Decide como se manejara el inventario',
      body: 'Aclara si cada local tendra existencias propias, si habra una bodega central y como se documentaran los movimientos. Esta decision afecta compras, conteos, reposicion y la forma en que el personal consulta disponibilidad.',
      items: [
        'Prepara una muestra de productos, variantes y codigos.',
        'Define quien puede ajustar cantidades o registrar movimientos.',
        'Acorda como se tratara el inventario inicial de la nueva ubicacion.',
        'Pide demostrar reportes por sucursal y una vista consolidada.',
      ],
    },
    {
      title: '3. Configura permisos con tareas reales',
      body: 'Los permisos deben responder a responsabilidades concretas. Caja, bodega, supervision y gerencia no necesitan el mismo acceso. Probar cada rol reduce el riesgo de descubrir restricciones o accesos excesivos durante la apertura.',
      items: [
        'Venta, devoluciones, anulaciones y cambios de precio.',
        'Recepcion, conteos y ajustes de inventario.',
        'Cierres, reportes y supervision por ubicacion.',
        'Creacion de usuarios y cambios de configuracion.',
      ],
    },
    {
      title: '4. Ejecuta un piloto antes del primer dia',
      body: 'La prueba debe recorrer una jornada completa: apertura de caja, venta, comprobante, movimiento de inventario, cierre y revision gerencial. Tambien conviene acordar responsables, soporte y que hacer si falla una conexion, un equipo o una integracion.',
      items: [
        'Usa productos, usuarios y escenarios representativos.',
        'Registra hallazgos y vuelve a probar los cambios importantes.',
        'Capacita con las mismas tareas que ejecutara cada rol.',
        'Define un canal de soporte y una contingencia para la apertura.',
      ],
    },
  ],
  decisionTable: {
    title: 'Checklist para evaluar el sistema de la nueva sucursal',
    body: 'Lleva estas preguntas a la demo y solicita una prueba con un flujo representativo. Las respuestas deben quedar alineadas con la operacion real, no solo con una lista de funciones.',
    rows: [
      {
        factor: 'Estructura de ubicaciones',
        question: 'Como se representaran sucursales, cajas, terminales y bodegas dentro del sistema?',
        impact: 'Define separacion de datos, permisos, cierres y reportes desde el primer dia.',
      },
      {
        factor: 'Inventario inicial',
        question: 'Como se cargaran las existencias y como se registraran movimientos entre ubicaciones?',
        impact: 'Evita empezar con cantidades sin origen claro o depender de ajustes manuales posteriores.',
      },
      {
        factor: 'Usuarios y permisos',
        question: 'Que puede vender, ajustar, anular, cerrar o consultar cada rol en cada sucursal?',
        impact: 'Ayuda a mantener control operativo y trazabilidad sin bloquear tareas necesarias.',
      },
      {
        factor: 'Reportes para gerencia',
        question: 'Que indicadores se veran por local y cuales se consolidaran para comparar la operacion?',
        impact: 'Permite supervisar ventas, caja e inventario sin unir archivos de forma manual.',
      },
      {
        factor: 'Apertura y contingencia',
        question: 'Que soporte, pruebas y pasos de contingencia estaran listos para el primer dia?',
        impact: 'Reduce improvisacion cuando aparece un problema de equipo, conexion, datos o configuracion.',
      },
    ],
  },
  faqs: [
    {
      question: 'Que sistema necesito para abrir una segunda sucursal?',
      answer:
        'Necesitas un sistema que permita separar ventas, cajas, inventario, usuarios y cierres por ubicacion, y que tambien entregue los reportes consolidados que requiere gerencia. La forma correcta de validarlo es probar el flujo completo con datos y roles del negocio.',
    },
    {
      question: 'Puedo usar el mismo POS en dos sucursales?',
      answer:
        'Depende de como el POS maneje ubicaciones, cajas, usuarios, inventario, facturacion y reportes. Antes de abrir, pide una demo que muestre que ve cada local y como se consolida la informacion para administracion.',
    },
    {
      question: 'Como preparo el inventario para el nuevo local?',
      answer:
        'Define el inventario inicial por ubicacion, el responsable de validar cantidades y el proceso para registrar movimientos o reposicion. Conviene probar con una muestra real de productos antes de cargar todo el catalogo.',
    },
    {
      question: 'Que reportes debo revisar entre sucursales?',
      answer:
        'Como minimo, revisa ventas, cierres, movimientos de inventario y resultados por ubicacion. Los reportes exactos dependen de las decisiones que toma gerencia y deben demostrarse con la estructura real del negocio.',
    },
    {
      question: 'Cuando debo coordinar la demo del sistema?',
      answer:
        'Hazlo antes de definir la carga final de datos y la capacitacion. Lleva cantidad de sucursales, cajas, usuarios, bodegas, productos, reportes e integraciones para convertir la demo en una prueba operativa.',
    },
  ],
  relatedTitle: 'Soluciones y guias para preparar el crecimiento',
  relatedIntro:
    'Conecta el plan de apertura con la solucion multi-sucursal, el punto de venta, inventario, reportes y las decisiones de migracion que correspondan.',
  related: [
    { label: 'Software multi-sucursal', href: '/soluciones/multi-sucursal' },
    { label: 'Asystec POS', href: '/asystec-pos' },
    { label: 'Sistema POS', href: '/soluciones/pos' },
    { label: 'Inventario', href: '/soluciones/inventario' },
    { label: 'Reportes', href: '/soluciones/reportes' },
    { label: 'Integraciones', href: '/soluciones/integraciones' },
    { label: 'Como migrar de sistema POS', href: '/guias/como-migrar-sistema-pos' },
    { label: 'Coordinar demo', href: '/contact' },
  ],
  finalCta: {
    title: 'Prueba la segunda sucursal antes de abrirla',
    body: 'Asystec puede revisar cajas, inventario, usuarios, permisos, reportes e integraciones para preparar una demo con el flujo real del nuevo local.',
    primary: contactCta,
    secondary: whatsappCta,
  },
};
