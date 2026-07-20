import type { LandingPageData } from '../seo-landings.data';

const contactCta = { label: 'Coordinar demo', href: '/contact' };
const whatsappCta = {
  label: 'Consultar por WhatsApp',
  href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20evaluar%20Factura%20Pro%20para%20mi%20negocio.',
};

export const facturaProProductPage: LandingPageData = {
  slug: 'facturacionapp',
  path: '/facturacionapp',
  kind: 'product',
  schemaType: 'SoftwareApplication',
  title: 'Factura Pro',
  seoTitle: 'Factura Pro | Facturacion electronica en Costa Rica',
  description:
    'Evalua Factura Pro para emitir comprobantes electronicos y administrar clientes, productos o servicios, cotizaciones, pagos y reportes en Costa Rica.',
  eyebrow: 'Producto Asystec',
  heroTitle: 'Factura Pro para facturacion electronica y gestion comercial',
  answer:
    'Factura Pro es una plataforma web de Asystec para negocios en Costa Rica que necesitan emitir comprobantes electronicos y administrar clientes, productos o servicios, cotizaciones, pagos y reportes. La demo permite confirmar si este alcance basta o si la operacion requiere POS, cobros, inventario o integraciones.',
  intro:
    'Revisa el flujo desde el cliente y la cotizacion hasta el comprobante, el pago y el reporte. Asi puedes comparar el producto con tu operacion real sin asumir funciones que deban validarse.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  highlights: [
    'Comprobantes electronicos y datos comerciales en un solo flujo.',
    'Clientes y catalogo de productos o servicios.',
    'Cotizaciones y pagos para dar seguimiento a la operacion.',
    'Reportes para consultar la actividad registrada.',
  ],
  modules: ['Comprobantes', 'Clientes', 'Productos o servicios', 'Cotizaciones', 'Pagos', 'Reportes'],
  modulesTitle: 'Procesos que conviene revisar en Factura Pro',
  modulesIntro:
    'Estas son las funciones visibles del producto. Lleva ejemplos reales a la demo para confirmar documentos, usuarios, volumen de trabajo y cualquier conexion adicional.',
  sections: [
    {
      title: 'Del cliente y la cotizacion al comprobante',
      body: 'Cuando clientes, catalogos, cotizaciones y comprobantes se trabajan en herramientas separadas, se repiten datos y aumenta la posibilidad de inconsistencias. Factura Pro permite evaluar ese recorrido dentro de una plataforma web.',
      items: [
        'Datos de clientes para reutilizar en la operacion',
        'Catalogo de productos o servicios',
        'Cotizaciones antes de emitir el comprobante',
        'Comprobantes electronicos dentro del flujo comercial',
      ],
    },
    {
      title: 'Pagos y seguimiento administrativo',
      body: 'Registrar el pago junto con la actividad comercial ayuda a consultar que ocurrio despues de emitir. Si el negocio maneja credito, abonos, vencimientos, saldos o estados de cuenta, conviene validar tambien Cobros Pro o una solucion de cuentas por cobrar.',
      items: [
        'Pagos vinculados al proceso comercial',
        'Consulta de informacion para seguimiento',
        'Reportes segun los datos registrados',
        'Evaluacion separada de cartera y cobranza cuando aplique',
      ],
    },
    {
      title: 'Que llevar a una demo de Factura Pro',
      body: 'Una muestra pequena permite revisar el flujo con menos supuestos. Conviene llevar ejemplos de clientes, productos o servicios, cotizaciones, comprobantes, formas de pago, usuarios y reportes que hoy usa el negocio.',
      items: [
        'Tipos de comprobante que utiliza la operacion',
        'Ejemplos de productos, servicios y clientes',
        'Forma actual de cotizar y registrar pagos',
        'Consultas y reportes necesarios para administrar',
      ],
    },
    {
      title: 'Funciones que deben confirmarse antes de decidir',
      body: 'POS, inventario, credito avanzado, facturacion recurrente, contabilidad, migraciones e integraciones no deben asumirse como parte del alcance estandar. Se revisan en la demo y pueden requerir otro producto, configuracion o desarrollo adicional.',
      items: [
        'Caja, ventas presenciales e inventario',
        'Creditos, abonos, saldos y estados de cuenta',
        'Importacion o migracion de datos historicos',
        'Integraciones, automatizaciones o reportes especiales',
      ],
    },
  ],
  decisionTable: {
    title: 'Criterios para evaluar Factura Pro',
    body: 'Usa estas preguntas para decidir si Factura Pro cubre el flujo principal o si necesitas combinarlo con otra solucion Asystec.',
    rows: [
      {
        factor: 'Comprobantes',
        question: 'Que documentos emite el negocio y que datos necesita conservar en cada operacion?',
        impact: 'Define el flujo que debe demostrarse antes de adoptar la plataforma.',
      },
      {
        factor: 'Clientes y catalogo',
        question: 'Como administra clientes, productos, servicios y cotizaciones actualmente?',
        impact: 'Permite revisar la calidad de los datos y evitar trabajo duplicado.',
      },
      {
        factor: 'Pagos y cobranza',
        question: 'Solo registra pagos o tambien maneja credito, abonos, vencimientos y estados de cuenta?',
        impact: 'Aclara si Factura Pro basta o si conviene evaluar Cobros Pro y cuentas por cobrar.',
      },
      {
        factor: 'Operacion de venta',
        question: 'Necesita caja, ventas presenciales, inventario, lectores o trabajo por sucursal?',
        impact: 'Ayuda a separar facturacion web de un alcance POS o multi-sucursal.',
      },
      {
        factor: 'Datos e integraciones',
        question: 'Que informacion debe importarse y con cuales sistemas debe conectarse?',
        impact: 'Determina las muestras, validaciones e integraciones que deben cotizarse por separado.',
      },
    ],
  },
  faqs: [
    {
      question: 'Que es Factura Pro?',
      answer:
        'Factura Pro es un producto web de Asystec para negocios en Costa Rica que necesitan emitir comprobantes electronicos y administrar clientes, productos o servicios, cotizaciones, pagos y reportes.',
    },
    {
      question: 'Cuando conviene Factura Pro frente a un sistema POS?',
      answer:
        'Conviene evaluarlo cuando el proceso principal es administrar clientes, cotizaciones, comprobantes, pagos y reportes desde la web. Si el negocio necesita caja, venta presencial, inventario o hardware, debe comparar el alcance con Asystec POS.',
    },
    {
      question: 'Factura Pro permite trabajar con productos y servicios?',
      answer:
        'La pagina publica incluye un catalogo de productos o servicios dentro del alcance visible. La demo debe confirmar como se configuran los datos que necesita tu operacion.',
    },
    {
      question: 'Se pueden registrar cotizaciones y pagos?',
      answer:
        'Cotizaciones y pagos forman parte del alcance visible de Factura Pro. Si el negocio necesita credito, abonos, vencimientos, saldos o estados de cuenta, conviene evaluar tambien Cobros Pro.',
    },
    {
      question: 'Se pueden migrar clientes y productos desde otro sistema?',
      answer:
        'La migracion no debe asumirse. Asystec necesita revisar una muestra, calidad de datos, campos disponibles, volumen y alcance historico antes de confirmar una importacion.',
    },
    {
      question: 'Factura Pro incluye inventario, contabilidad o integraciones?',
      answer:
        'Esas capacidades deben validarse en la demo. Segun la necesidad, pueden requerir Asystec POS, Cobros Pro, una integracion o una plataforma a medida.',
    },
  ],
  related: [
    { label: 'Ingresar a Factura Pro', href: 'https://app.asystec.io/login' },
    { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
    { label: 'Requisitos de factura electronica', href: '/guias/factura-electronica-costa-rica-requisitos' },
    {
      label: 'Cambiar de sistema de facturacion',
      href: '/guias/como-cambiar-sistema-facturacion-electronica',
    },
    { label: 'Cobros Pro', href: '/cobrosapp' },
    { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
    { label: 'Asystec POS', href: '/asystec-pos' },
    { label: 'Servicios profesionales', href: '/industrias/servicios-profesionales' },
    { label: 'Casos publicos', href: '/casos' },
  ],
  relatedTitle: 'Compara Factura Pro con el resto del flujo',
  relatedIntro:
    'Estas paginas ayudan a separar facturacion, venta presencial, cobranza, migracion y necesidades propias de una empresa de servicios.',
  finalCta: {
    title: 'Prueba Factura Pro con una muestra real',
    body: 'Comparte ejemplos de clientes, productos o servicios, cotizaciones, comprobantes, pagos y reportes para confirmar el alcance antes de cambiar de sistema.',
    primary: contactCta,
    secondary: whatsappCta,
  },
  image: '/images/portfolio/facturacionapp.png',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
};
