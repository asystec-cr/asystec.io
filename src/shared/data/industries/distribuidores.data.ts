import type { LandingPageData } from '../seo-landings.data';

const contactCta = { label: 'Coordinar demo', href: '/contact' };
const whatsappCta = {
  label: 'Consultar por WhatsApp',
  href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20evaluar%20software%20para%20mi%20distribuidora.',
};

export const distribuidoresIndustryPage: LandingPageData = {
  slug: 'distribuidores',
  path: '/industrias/distribuidores',
  kind: 'industry',
  schemaType: 'Service',
  title: 'Software para distribuidores en Costa Rica',
  seoTitle: 'Software para distribuidores en Costa Rica | Asystec',
  description:
    'Software para distribuidores en Costa Rica: inventario, facturacion, cuentas por cobrar, vendedores, bodegas, reportes e integraciones. Evalua el alcance en una demo.',
  eyebrow: 'Industria de distribucion y mayoreo',
  heroTitle: 'Software para conectar inventario, ventas y cobros en una distribuidora',
  answer:
    'Una distribuidora necesita conectar clientes, productos, inventario, ventas, facturacion, cuentas por cobrar y reportes. Asystec puede combinar productos existentes, integraciones o una plataforma a medida; las rutas, pedidos moviles y procesos de campo deben validarse antes de definir el alcance.',
  intro:
    'Esta pagina ayuda a distribuidoras, mayoristas y empresas con ventas recurrentes a preparar una demo basada en su operacion real, desde la disponibilidad del producto hasta la factura, el pago y el reporte gerencial.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  highlights: [
    'Inventario y existencias evaluados por bodega o sucursal.',
    'Facturacion, pagos y saldos conectados al ciclo comercial.',
    'Usuarios y reportes definidos para ventas, administracion y gerencia.',
    'Rutas, movilidad e integraciones validadas antes de prometer alcance.',
  ],
  modules: [
    'Clientes y catalogo',
    'Inventario y bodegas',
    'Ventas y facturacion',
    'Cuentas por cobrar',
    'Usuarios y reportes',
    'Integraciones o plataforma a medida',
  ],
  sections: [
    {
      title: 'Conecta el ciclo desde inventario hasta cobro',
      body: 'Cuando bodega, ventas, facturacion y cobranza trabajan con archivos separados, gerencia pierde visibilidad sobre existencias, pedidos, saldos y resultados. La evaluacion debe seguir una operacion completa y confirmar que informacion necesita cada responsable.',
      items: [
        'Clientes, productos, listas o condiciones comerciales',
        'Existencias, movimientos y ubicaciones de inventario',
        'Venta, comprobante, pago y saldo pendiente',
        'Indicadores para ventas, administracion y gerencia',
      ],
    },
    {
      title: 'Inventario, facturacion y cartera con el mismo contexto',
      body: 'Asystec POS, Factura Pro, Cobros Pro y las soluciones de inventario, reportes y multi-sucursal cubren partes concretas del proceso. La demo debe definir si basta un producto, si varios sistemas deben integrarse o si el flujo necesita desarrollo propio.',
      items: [
        'Asystec POS para evaluar ventas, inventario y facturacion',
        'Factura Pro para comprobantes, clientes, pagos y reportes',
        'Cobros Pro para creditos, abonos, saldos y estados de cuenta',
        'Integraciones cuando los datos viven en mas de un sistema',
      ],
    },
    {
      title: 'Separa la operacion central de las ventas en ruta',
      body: 'Asignacion de rutas, pedidos desde campo, inventario por vehiculo, entregas, devoluciones, geolocalizacion o trabajo sin conexion no deben asumirse como funciones estandar. Son requisitos que se validan con ejemplos reales y pueden requerir integracion o una plataforma a medida.',
      items: [
        'Tareas que realiza el vendedor antes, durante y despues de la visita',
        'Datos que necesita consultar o capturar fuera de la oficina',
        'Aprobaciones, devoluciones y evidencia de entrega',
        'Conexion con inventario, facturacion, cobros y reportes',
      ],
    },
    {
      title: 'Prepara una demo con una venta y un saldo reales',
      body: 'Una muestra concreta permite revisar el flujo sin depender de una lista generica de funciones. Conviene llevar un cliente, productos, ubicaciones, condicion de pago, usuarios, documentos y reportes para identificar brechas desde el inicio.',
      items: [
        'Un pedido o venta representativa de inicio a fin',
        'Una muestra de productos y existencias por ubicacion',
        'Un caso con credito, abono o saldo vencido',
        'Los reportes y sistemas que hoy usa el equipo',
      ],
    },
  ],
  decisionTable: {
    title: 'Que revisar antes de elegir software para una distribuidora',
    body: 'Estas preguntas ayudan a comparar alternativas por el proceso completo y a distinguir funciones disponibles, configuracion, integraciones y desarrollo a medida.',
    rows: [
      {
        factor: 'Venta y facturacion',
        question: 'Como nace una venta y que debe ocurrir hasta emitir el comprobante y registrar el pago?',
        impact: 'Define clientes, catalogo, condiciones comerciales, documentos, responsables y estados del proceso.',
      },
      {
        factor: 'Inventario y bodegas',
        question: 'Donde se guarda el inventario y que movimientos necesita controlar cada ubicacion?',
        impact: 'Permite validar existencias, traslados, conteos, permisos y reportes por bodega o sucursal.',
      },
      {
        factor: 'Credito y cobro',
        question: 'Hay limites de credito, pagos parciales, vencimientos, estados de cuenta o seguimiento de cartera?',
        impact: 'Aclara si basta registrar pagos o si se necesita un flujo dedicado de cuentas por cobrar.',
      },
      {
        factor: 'Vendedores y rutas',
        question: 'Que debe consultar, registrar o aprobar el equipo cuando visita clientes fuera de la oficina?',
        impact:
          'Identifica necesidades moviles, trabajo sin conexion, entrega, devoluciones e integraciones que deben validarse.',
      },
      {
        factor: 'Reportes e integraciones',
        question: 'Que decisiones necesita tomar gerencia y que sistemas contienen hoy los datos necesarios?',
        impact:
          'Determina indicadores, fuentes de verdad, permisos y conexiones necesarias para evitar doble digitacion.',
      },
    ],
  },
  faqs: [
    {
      question: 'Que software necesita una distribuidora en Costa Rica?',
      answer:
        'Como base conviene evaluar clientes, productos, inventario, ventas, facturacion electronica, pagos, cuentas por cobrar, usuarios y reportes. Bodegas, rutas, pedidos moviles e integraciones dependen del flujo real de la empresa.',
    },
    {
      question: 'Asystec puede ayudar a controlar saldos de clientes?',
      answer:
        'Cobros Pro y la solucion de cuentas por cobrar pueden evaluarse para creditos, pagos, saldos, estados de cuenta y reportes. La demo confirma como se originan los saldos y que seguimiento necesita el equipo.',
    },
    {
      question: 'El software incluye ventas en ruta o una app para vendedores?',
      answer:
        'No debe asumirse como una funcion estandar. Se revisan tareas, conectividad, pedidos, entregas, devoluciones y datos necesarios para definir si aplica una integracion o una plataforma a medida.',
    },
    {
      question: 'Se puede controlar inventario en varias bodegas o sucursales?',
      answer:
        'Asystec puede evaluar inventario y operacion multi-sucursal. La configuracion concreta depende de ubicaciones, movimientos, permisos, conteos, ventas y reportes que la distribuidora necesite controlar.',
    },
    {
      question: 'Que informacion conviene llevar a la demo?',
      answer:
        'Conviene llevar una venta real, una muestra de productos y existencias, condiciones de credito, tipos de usuario, reportes actuales y los sistemas que deben conectarse. Asi se puede separar alcance inicial y mejoras futuras.',
    },
  ],
  related: [
    { label: 'Inventario', href: '/soluciones/inventario' },
    { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
    { label: 'Cobros Pro', href: '/cobrosapp' },
    { label: 'Factura Pro', href: '/facturacionapp' },
    { label: 'Multi-sucursal', href: '/soluciones/multi-sucursal' },
    { label: 'Reportes', href: '/soluciones/reportes' },
    { label: 'Integraciones', href: '/soluciones/integraciones' },
    { label: 'Plataformas a medida', href: '/plataformas' },
    { label: 'Guia para organizar cuentas por cobrar', href: '/guias/como-organizar-cuentas-por-cobrar' },
    { label: 'Coordinar demo', href: '/contact' },
  ],
  finalCta: {
    title: 'Evalua una operacion real de tu distribuidora',
    body: 'Comparte una venta, una muestra de inventario y un caso de cobro para definir si aplica un producto Asystec, una integracion o una plataforma a medida.',
    primary: contactCta,
    secondary: whatsappCta,
  },
};
