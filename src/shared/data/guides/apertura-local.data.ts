import type { LandingPageData } from '../seo-landings.data';

const contactCta = { label: 'Coordinar demo', href: '/contact' };
const whatsappCta = {
  label: 'Escribir por WhatsApp',
  href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20preparar%20el%20sistema%20para%20abrir%20mi%20negocio.',
};

export const aperturaLocalGuidePage: LandingPageData = {
  slug: 'que-sistema-necesita-negocio',
  path: '/guias/que-sistema-necesita-negocio',
  kind: 'guide',
  schemaType: 'Article',
  title: 'Que sistema necesita un negocio antes de abrir un local',
  seoTitle: 'Que sistema necesita un negocio en Costa Rica | Asystec',
  description:
    'Guia para preparar POS, facturacion electronica, inventario, caja, usuarios y reportes antes de abrir un negocio o local en Costa Rica.',
  eyebrow: 'Guia para la apertura operativa de un negocio',
  heroTitle: 'Que sistema necesita un negocio antes de abrir un local en Costa Rica',
  answer:
    'Antes de abrir un local, define como venderas, facturaras, controlaras inventario y cerraras caja. El sistema debe probarse con productos, usuarios, comprobantes y reportes reales antes del primer dia. Los tramites y requisitos formales dependen de la actividad; esta guia se concentra en preparar la operacion y la demo del software.',
  intro:
    'Esta guia convierte la eleccion del sistema en un plan de apertura verificable. Ayuda a separar lo que debe estar listo para vender desde el primer dia de las funciones que pueden incorporarse despues, sin confundir la implementacion del software con los tramites oficiales del negocio.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  heroNote:
    'El alcance cambia segun el giro, la cantidad de productos, cajas, usuarios, comprobantes, inventario e integraciones del negocio.',
  highlightsTitle: 'Decisiones que conviene cerrar antes de abrir',
  highlights: [
    'Definir el flujo completo desde la venta hasta el cierre y el reporte diario.',
    'Preparar productos, precios, impuestos, existencias y datos de clientes que realmente se usaran.',
    'Asignar permisos para venta, anulaciones, cambios de precio, inventario y supervision.',
    'Ejecutar una prueba de apertura con el equipo, los dispositivos y la conectividad del local.',
  ],
  modulesTitle: 'Mapa operativo minimo para el primer dia',
  modulesIntro:
    'Cada punto debe tener una decision, un responsable y una prueba concreta. La lista exacta depende de lo que venda el negocio y de como necesita controlar la operacion.',
  modules: [
    'POS, ventas y medios de pago',
    'Facturacion electronica',
    'Productos, precios e impuestos',
    'Inventario inicial y movimientos',
    'Cajas, aperturas y cierres',
    'Usuarios, roles y permisos',
    'Reportes para gerencia',
    'Equipos, soporte y contingencia',
  ],
  sections: [
    {
      title: '1. Dibuja como ocurrira una venta real',
      body: 'Empieza por el recorrido que seguira el equipo: buscar un producto o servicio, registrar al cliente cuando corresponda, cobrar, emitir el comprobante y actualizar la informacion operativa. Ese flujo permite decidir si necesitas un POS completo, facturacion o una combinacion de modulos.',
      items: [
        'Tipo de venta: mostrador, servicio, credito, apartado o entrega.',
        'Medios de pago y responsables de cada caja.',
        'Comprobantes y datos que se solicitaran al cliente.',
        'Informacion que debe quedar disponible para cierre y gerencia.',
      ],
    },
    {
      title: '2. Prepara catalogo e inventario con una muestra',
      body: 'No esperes al ultimo dia para descubrir que los codigos, unidades, precios o existencias no estan listos. Una muestra representativa permite validar la estructura de datos y acordar que puede importarse antes de cargar todo el catalogo.',
      items: [
        'Productos o servicios con nombres y codigos consistentes.',
        'Precios, impuestos, unidades, variantes y categorias.',
        'Existencias iniciales y responsable de confirmarlas.',
        'Compras, ajustes o movimientos que deben quedar registrados.',
      ],
    },
    {
      title: '3. Configura caja, usuarios y facturacion',
      body: 'La demostracion debe mostrar quien puede vender, anular, cambiar precios, ajustar inventario, cerrar caja y consultar reportes. Tambien debe revisar los datos fiscales y el flujo de comprobantes que aplican a la operacion.',
      items: [
        'Usuarios y permisos segun la tarea de cada persona.',
        'Aperturas, ingresos, retiros, cierres y diferencias de caja.',
        'Datos fiscales, comprobantes y escenarios de correccion.',
        'Reportes que se revisaran al final del dia o de la semana.',
      ],
    },
    {
      title: '4. Simula el primer dia antes de abrir',
      body: 'Realiza un piloto con el equipo, los dispositivos y una jornada representativa. La prueba debe incluir venta, comprobante, inventario, cierre y consulta de reportes, ademas de acordar soporte y que hacer ante un problema de equipo, datos o conectividad.',
      items: [
        'Prueba los productos, usuarios y pagos mas frecuentes.',
        'Registra hallazgos y vuelve a validar los cambios importantes.',
        'Capacita a cada rol con las tareas que ejecutara en el local.',
        'Define el canal de soporte y una contingencia para la apertura.',
      ],
    },
  ],
  decisionTable: {
    title: 'Checklist para llevar a la demo del sistema',
    body: 'Estas preguntas ayudan a convertir una demostracion general en una prueba de la operacion que tendra el negocio al abrir.',
    rows: [
      {
        factor: 'Flujo de venta',
        question: 'Como se registran productos o servicios, clientes, pagos y comprobantes en una venta real?',
        impact: 'Permite comprobar si el equipo puede completar la operacion sin pasos ni archivos paralelos.',
      },
      {
        factor: 'Datos iniciales',
        question: 'Que productos, precios, impuestos, clientes o existencias pueden prepararse o importarse?',
        impact: 'Reduce trabajo de ultima hora y aclara que informacion necesita limpieza o carga manual.',
      },
      {
        factor: 'Caja y permisos',
        question: 'Quien puede abrir, retirar, anular, cambiar precios, cerrar y consultar resultados?',
        impact: 'Ayuda a configurar responsabilidades y trazabilidad antes de que el equipo empiece a vender.',
      },
      {
        factor: 'Reportes',
        question: 'Que necesita revisar la persona duena o gerente al terminar el dia y la semana?',
        impact: 'Evita contratar un sistema sin confirmar que las decisiones del negocio tendran datos utiles.',
      },
      {
        factor: 'Puesta en marcha',
        question: 'Que equipos, pruebas, capacitacion, soporte y contingencia estaran listos para la apertura?',
        impact: 'Reduce improvisacion cuando aparece un problema operativo durante los primeros dias.',
      },
    ],
  },
  faqs: [
    {
      question: 'Que sistema necesita un negocio nuevo?',
      answer:
        'Depende de como vende y controla la operacion. Un comercio suele necesitar POS, facturacion electronica, productos, inventario, caja, usuarios y reportes. Un negocio de servicios puede necesitar facturacion, clientes, cobros y seguimiento sin una caja POS completa. La demo debe usar el flujo real para definir el alcance.',
    },
    {
      question: 'Necesito POS o solo facturacion electronica?',
      answer:
        'Un POS conviene cuando hay ventas frecuentes en mostrador, caja, productos e inventario. Si el negocio emite pocos comprobantes y no maneja una caja operativa, una solucion de facturacion puede ser suficiente. La decision debe considerar usuarios, volumen, cobros y reportes.',
    },
    {
      question: 'Cuando debo implementar el sistema antes de abrir?',
      answer:
        'Antes de cargar los datos finales y capacitar al equipo. Deja tiempo para probar una venta completa, corregir catalogo y permisos, revisar equipos y repetir los escenarios que sean criticos para el primer dia.',
    },
    {
      question: 'Puedo cargar productos desde Excel?',
      answer:
        'Puede ser posible despues de revisar una muestra con codigos, nombres, precios, impuestos y existencias. Esa revision permite confirmar que campos pueden importarse, que datos necesitan preparacion y como se validara el inventario inicial.',
    },
    {
      question: 'Asystec realiza los tramites para abrir el negocio?',
      answer:
        'No. Asystec se concentra en el software y la preparacion operativa. Los permisos, registros y obligaciones dependen de la actividad y deben verificarse con las instituciones oficiales y los asesores correspondientes antes de abrir.',
    },
  ],
  relatedTitle: 'Recursos para completar la preparacion operativa',
  relatedIntro:
    'Compara el punto de venta, la facturacion, el inventario y las guias oficiales que correspondan antes de definir la puesta en marcha.',
  related: [
    { label: 'Asystec POS', href: '/asystec-pos' },
    { label: 'Sistema POS', href: '/soluciones/pos' },
    { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
    { label: 'Inventario', href: '/soluciones/inventario' },
    { label: 'Reportes', href: '/soluciones/reportes' },
    { label: 'Como elegir un sistema POS', href: '/guias/como-elegir-sistema-pos' },
    { label: 'Requisitos de factura electronica', href: '/guias/factura-electronica-costa-rica-requisitos' },
    {
      label: 'Guia oficial del MEIC para abrir una empresa',
      href: 'https://www.meic.go.cr/tramites-y-servicios/apertura-de-una-empresa-en-costa-rica/',
    },
  ],
  finalCta: {
    title: 'Prueba el sistema antes del primer dia de ventas',
    body: 'Asystec puede revisar el giro, los productos o servicios, las cajas, los usuarios, la facturacion y los reportes para preparar una demo alrededor de la apertura real del negocio.',
    primary: contactCta,
    secondary: whatsappCta,
  },
};
