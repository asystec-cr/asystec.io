import type { LandingPageData } from '../seo-landings.data';

const contactCta = { label: 'Coordinar demo', href: '/contact' };
const whatsappCta = {
  label: 'Consultar por WhatsApp',
  href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20evaluar%20software%20retail%20para%20mi%20tienda.',
};

export const retailIndustryPage: LandingPageData = {
  slug: 'retail',
  path: '/industrias/retail',
  kind: 'industry',
  schemaType: 'Service',
  title: 'Software retail para tiendas en Costa Rica',
  seoTitle: 'Software retail y POS para tiendas en Costa Rica | Asystec',
  description:
    'Software retail para tiendas en Costa Rica con POS, inventario, facturacion electronica, caja, reportes, usuarios y control multi-sucursal.',
  eyebrow: 'Industria retail',
  heroTitle: 'Software retail para tiendas: POS, inventario y multi-sucursal',
  answer:
    'El software para retail en Costa Rica debe conectar POS, inventario, facturacion electronica, caja y reportes. Asystec ayuda a tiendas a evaluar ese flujo en una demo y puede incorporar control multi-sucursal segun el alcance.',
  intro:
    'Esta pagina ayuda a tiendas, boutiques y comercios minoristas a comparar el proceso completo de venta, desde el catalogo y la caja hasta las existencias, cierres y reportes que necesita gerencia.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  highlights: [
    'Caja y facturacion conectadas con la venta diaria.',
    'Catalogo e inventario alineados con cada movimiento.',
    'Usuarios, cierres y reportes para supervisar la operacion.',
    'Control por tienda o sucursal cuando el negocio crece.',
  ],
  modules: [
    'Punto de venta y caja',
    'Catalogo, productos y codigos',
    'Inventario y movimientos',
    'Facturacion electronica',
    'Usuarios, permisos y cierres',
    'Reportes y multi-sucursal',
  ],
  sections: [
    {
      title: 'Cuando caja y catalogo frenan la venta',
      body: 'Una tienda necesita encontrar productos, registrar la venta, cobrar y emitir el comprobante sin duplicar datos. La demo debe probar el flujo real de caja y no limitarse a mostrar una lista de funciones.',
      items: [
        'Busqueda por nombre, codigo o categoria',
        'Ventas, medios de pago y facturacion electronica',
        'Permisos para caja, anulaciones y cierres',
        'Operacion local de Asystec POS cuando internet falla',
      ],
    },
    {
      title: 'Inventario que acompana cada venta',
      body: 'El inventario aporta valor cuando ventas, compras, ajustes y existencias usan la misma informacion. Conviene definir desde el inicio si el negocio controla una tienda, una bodega o varias ubicaciones.',
      items: [
        'Productos, categorias y codigos consistentes',
        'Existencias y movimientos por ubicacion segun alcance',
        'Ajustes, conteos y reposicion con historial',
        'Reportes para revisar faltantes y rotacion',
      ],
    },
    {
      title: 'Reportes para duenos y gerencia',
      body: 'Registrar ventas no basta si administracion sigue consolidando archivos. La evaluacion debe partir de las decisiones que necesita tomar el negocio y del nivel de detalle esperado por tienda, caja, usuario o periodo.',
      items: [
        'Ventas y cierres por periodo',
        'Productos con mayor o menor movimiento',
        'Usuarios, permisos y trazabilidad operativa',
        'Comparacion por sucursal cuando corresponde',
      ],
    },
    {
      title: 'Como preparar una demo retail',
      body: 'Una demo util debe usar datos cercanos a la operacion: cantidad de productos, cajas, usuarios, bodegas, sucursales, forma actual de facturar y reportes prioritarios. Asi se separa lo indispensable de futuras mejoras o integraciones.',
      items: [
        'Llevar el flujo actual desde producto hasta cierre',
        'Identificar controles manuales o archivos separados',
        'Definir usuarios, ubicaciones y reportes obligatorios',
        'Confirmar migracion, soporte e integraciones necesarias',
      ],
    },
  ],
  decisionTable: {
    title: 'Que revisar antes de elegir software retail',
    body: 'Estas preguntas ayudan a comparar opciones con base en la operacion diaria de la tienda y preparan una demo enfocada en ventas, inventario y crecimiento.',
    rows: [
      {
        factor: 'Caja y venta',
        question: 'Cuantas cajas, usuarios, medios de pago y tipos de comprobante debe manejar la tienda?',
        impact: 'Define el flujo de venta, los permisos, los cierres y la capacitacion necesaria.',
      },
      {
        factor: 'Catalogo',
        question: 'Cuantos productos, categorias, codigos o variantes forman parte del catalogo?',
        impact: 'Afecta la busqueda en caja, la migracion inicial y la calidad de los reportes.',
      },
      {
        factor: 'Inventario',
        question: 'Las existencias se controlan en tienda, bodega o varias ubicaciones?',
        impact: 'Determina movimientos, conteos, reposicion y visibilidad disponible para compras.',
      },
      {
        factor: 'Reportes',
        question: 'Que necesita revisar gerencia por producto, usuario, caja, periodo o sucursal?',
        impact: 'Alinea la configuracion con decisiones reales y evita consolidaciones manuales.',
      },
      {
        factor: 'Crecimiento',
        question: 'El negocio planea agregar cajas, bodegas, tiendas o integraciones?',
        impact: 'Permite evaluar desde hoy permisos, datos y arquitectura para crecer con menos retrabajo.',
      },
    ],
  },
  faqs: [
    {
      question: 'Que debe tener un software retail para una tienda?',
      answer:
        'Debe conectar punto de venta, catalogo, inventario, facturacion electronica, usuarios, cierres y reportes. Si hay varias tiendas o bodegas, tambien debe revisarse el control por ubicacion y la vista consolidada para gerencia.',
    },
    {
      question: 'Asystec POS sirve para tiendas retail?',
      answer:
        'Puede evaluarse para tiendas que necesitan caja, ventas, inventario, facturacion electronica, usuarios y reportes. La demo confirma el volumen de productos, codigos, cajas y cualquier necesidad multi-sucursal o de integracion.',
    },
    {
      question: 'El sistema puede seguir vendiendo si falla internet?',
      answer:
        'Asystec POS opera localmente en escritorio para ventas y gestion sin depender de internet para trabajar. En la demo conviene confirmar el flujo de facturacion electronica y cualquier servicio externo que si requiera conexion.',
    },
    {
      question: 'Puedo controlar varias tiendas o bodegas?',
      answer:
        'Asystec puede evaluar ventas, inventario, usuarios, permisos y reportes por ubicacion. El alcance debe definir sucursales, bodegas, movimientos entre puntos y la informacion consolidada que necesita gerencia.',
    },
    {
      question: 'Que informacion conviene llevar a la demo?',
      answer:
        'Conviene llevar cantidad de productos, cajas, usuarios, tiendas, bodegas, forma actual de facturar, archivos que se desean migrar y reportes necesarios para compras, caja y gerencia.',
    },
  ],
  related: [
    { label: 'Asystec POS', href: '/asystec-pos' },
    { label: 'Sistema POS', href: '/soluciones/pos' },
    { label: 'Inventario', href: '/soluciones/inventario' },
    { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
    { label: 'Reportes', href: '/soluciones/reportes' },
    { label: 'Multi-sucursal', href: '/soluciones/multi-sucursal' },
    { label: 'Como elegir un POS', href: '/guias/como-elegir-sistema-pos' },
    { label: 'Reducir diferencias de inventario', href: '/guias/como-reducir-diferencias-inventario' },
    { label: 'Coordinar demo', href: '/contact' },
  ],
  finalCta: {
    title: 'Evalua el flujo real de tu tienda en una demo',
    body: 'Revisemos productos, cajas, inventario, facturacion, usuarios, sucursales y reportes para definir un alcance util para tu operacion retail.',
    primary: contactCta,
    secondary: whatsappCta,
  },
};
