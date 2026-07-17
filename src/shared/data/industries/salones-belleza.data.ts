import type { LandingPageData } from '../seo-landings.data';

const contactCta = { label: 'Coordinar demo', href: '/contact' };
const whatsappCta = {
  label: 'Consultar por WhatsApp',
  href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20evaluar%20software%20para%20mi%20salon%20de%20belleza.',
};

export const salonesBellezaIndustryPage: LandingPageData = {
  slug: 'salones-belleza',
  path: '/industrias/salones-belleza',
  kind: 'industry',
  schemaType: 'Service',
  title: 'Software para salones de belleza en Costa Rica',
  seoTitle: 'Software para salones de belleza en Costa Rica | Asystec',
  description:
    'Software para salones de belleza en Costa Rica con agenda, clientes, cobros, facturacion, inventario, caja y reportes segun el flujo del negocio.',
  eyebrow: 'Industria belleza y cuidado personal',
  heroTitle: 'Software para salones de belleza, agenda, caja e inventario',
  answer:
    'Un salon de belleza en Costa Rica debe evaluar agenda, clientes, servicios, profesionales, cobros, facturacion electronica, productos, inventario y reportes en un mismo flujo. Asystec puede combinar POS, facturacion, CRM o una plataforma a medida segun lo que el negocio necesite controlar.',
  intro:
    'Esta pagina ayuda a salones, barberias, estudios de unas, spas y centros de estetica a preparar una demo basada en su operacion real, sin asumir que todos necesitan la misma herramienta.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  highlights: [
    'Agenda y clientes alineados con la atencion diaria.',
    'Caja, cobros y facturacion conectados al servicio.',
    'Productos e inventario para venta y consumo interno.',
    'Reportes por servicio, profesional, periodo o sucursal segun alcance.',
  ],
  modules: [
    'Agenda, reservas y disponibilidad',
    'Clientes e historial de atencion',
    'Servicios, paquetes y profesionales',
    'Caja, cobros y facturacion electronica',
    'Productos e inventario',
    'Reportes, usuarios y sucursales',
  ],
  sections: [
    {
      title: 'Cuando la agenda vive en mensajes y cuadernos',
      body: 'El problema no es solo reservar una cita. El equipo necesita saber quien atiende, que servicio se hara, cuanto dura, si hubo cancelacion y que debe pasar despues del servicio.',
      items: [
        'Disponibilidad por profesional o cabina',
        'Duracion y preparacion de cada servicio',
        'Cancelaciones, reprogramaciones y espacios libres',
        'Datos del cliente disponibles para la proxima visita',
      ],
    },
    {
      title: 'Caja, cobros y facturacion sin doble digitacion',
      body: 'La atencion debe terminar en un cobro claro. Conviene revisar como se registran servicios, productos, descuentos, medios de pago, comprobantes y cierres para evitar informacion separada entre recepcion y administracion.',
      items: [
        'Servicios y productos en la misma venta cuando aplica',
        'Pagos, descuentos y comprobantes por cliente',
        'Facturacion electronica dentro del flujo comercial',
        'Cierres y reportes para administracion',
      ],
    },
    {
      title: 'Productos, consumo e inventario',
      body: 'Un salon puede vender productos al cliente y tambien consumir insumos durante el servicio. La demo debe separar ambos flujos para definir el nivel de inventario, compras y trazabilidad que realmente necesita.',
      items: [
        'Productos disponibles para venta',
        'Insumos usados durante servicios',
        'Compras, ajustes y reposicion',
        'Control por sede o bodega si existe mas de una ubicacion',
      ],
    },
    {
      title: 'Producto existente o plataforma a medida',
      body: 'POS, facturacion, inventario y CRM pueden cubrir parte de la operacion. Agenda avanzada, recordatorios, comisiones, reservas en linea o flujos propios deben validarse en la demo y pueden requerir configuracion, integracion o una plataforma a medida.',
      items: [
        'Asystec POS para caja, ventas, inventario y facturacion',
        'Factura Pro cuando el foco es facturar y administrar clientes',
        'CRM para seguimiento e historial comercial',
        'Plataforma a medida para flujos que un producto estandar no cubre',
      ],
    },
  ],
  decisionTable: {
    title: 'Que revisar antes de elegir software para un salon',
    body: 'Estas preguntas convierten una necesidad general en un alcance demostrable y ayudan a comparar opciones sin decidir solo por una lista de funciones.',
    rows: [
      {
        factor: 'Agenda y recursos',
        question: 'La disponibilidad depende de profesionales, cabinas, equipos, duracion o tipo de servicio?',
        impact: 'Define si basta una agenda sencilla o si se necesita un flujo especializado de reservas.',
      },
      {
        factor: 'Servicios y clientes',
        question: 'Que historial, preferencias, paquetes, notas o seguimientos debe guardar el negocio?',
        impact: 'Aclara la informacion necesaria para atender mejor y preparar futuras visitas.',
      },
      {
        factor: 'Cobros y facturacion',
        question: 'Como se cobran servicios, productos, anticipos, descuentos y diferentes medios de pago?',
        impact: 'Permite validar caja, comprobantes, cierres y el enlace con facturacion electronica.',
      },
      {
        factor: 'Inventario',
        question: 'El salon vende productos, consume insumos o necesita existencias por sucursal?',
        impact: 'Determina si requiere catalogo, compras, ajustes, consumo interno o control por ubicacion.',
      },
      {
        factor: 'Equipo y reportes',
        question: 'Que usuarios, permisos, comisiones, indicadores o comparaciones por sede necesita gerencia?',
        impact: 'Puede cambiar la configuracion, los reportes y el nivel de desarrollo o integracion requerido.',
      },
    ],
  },
  faqs: [
    {
      question: 'Que debe tener un software para salones de belleza?',
      answer:
        'Debe ayudar a controlar agenda, clientes, servicios, profesionales, cobros, facturacion, productos e inventario. Si el salon maneja paquetes, comisiones, recordatorios o varias sedes, esos flujos deben probarse antes de elegir.',
    },
    {
      question: 'Asystec tiene una opcion para caja y facturacion del salon?',
      answer:
        'Asystec POS puede evaluarse cuando el salon necesita ventas, caja, facturacion electronica, productos, inventario, usuarios y reportes. La demo confirma que funciones aplican y que necesidades requieren otra solucion.',
    },
    {
      question: 'La agenda y las reservas vienen incluidas?',
      answer:
        'Depende del alcance. Agenda, reservas en linea, recordatorios, recursos y comisiones deben revisarse con el flujo real del salon; pueden requerir una plataforma a medida o una integracion.',
    },
    {
      question: 'El sistema puede controlar productos e insumos?',
      answer:
        'Puede evaluarse inventario para productos de venta, compras, ajustes y existencias. El consumo de insumos por servicio debe definirse aparte para confirmar si requiere configuracion o desarrollo adicional.',
    },
    {
      question: 'Puedo pedir una demo para mi salon, barberia o spa?',
      answer:
        'Si. Puedes coordinar una demo o consultar por WhatsApp con tus servicios, cantidad de profesionales, forma de cobro, productos, agenda, sucursales y reportes esperados.',
    },
  ],
  related: [
    { label: 'Asystec POS', href: '/asystec-pos' },
    { label: 'Sistema POS', href: '/soluciones/pos' },
    { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
    { label: 'Inventario', href: '/soluciones/inventario' },
    { label: 'CRM', href: '/soluciones/crm' },
    { label: 'Multi-sucursal', href: '/soluciones/multi-sucursal' },
    { label: 'Plataformas a medida', href: '/plataformas' },
    { label: 'Coordinar demo', href: '/contact' },
  ],
};
