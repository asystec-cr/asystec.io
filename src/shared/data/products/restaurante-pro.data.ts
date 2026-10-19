import type { LandingPageData } from '../seo-landings.data';

export const restauranteProDownloadUrl =
  'https://asystec-apps.s3.us-east-2.amazonaws.com/updates/restaurante-pro/latest/RestaurantePro-Setup.exe';

const downloadCta = { label: 'Descargar Restaurante Pro', href: restauranteProDownloadUrl };
const demoCta = { label: 'Coordinar demo', href: '/contact' };

export const restauranteProProductPage: LandingPageData = {
  slug: 'restaurante-pro',
  path: '/restaurante-pro',
  kind: 'product',
  schemaType: 'SoftwareApplication',
  title: 'Restaurante Pro',
  seoTitle: 'Restaurante Pro | POS para restaurantes en Costa Rica — Asystec',
  description:
    'Restaurante Pro de Asystec para Windows: mesas, comandas, cocina KDS, división de cuenta, caja y facturación electrónica. Descarga el instalador o coordina una demo.',
  eyebrow: 'Restaurante Pro de Asystec · Windows',
  heroTitle: 'De la mesa a la cocina y la caja, con Restaurante Pro',
  intro:
    'Organiza mesas, envía comandas por estación, sigue la preparación en cocina y divide la cuenta al cobrar. Un sistema de escritorio pensado para la operación diaria de tu restaurante.',
  answer:
    'Restaurante Pro es el POS de Asystec para restaurantes en Windows. Opera localmente y reúne mesas, comandas, pantalla de cocina KDS, división de cuenta, caja y facturación electrónica. Puede conectar meseros, cocina y caja a un equipo principal dentro de la red local.',
  primaryCta: downloadCta,
  secondaryCta: demoCta,
  heroNote:
    'Instalador para Windows de 64 bits. Coordina la configuración y una prueba del flujo de tu restaurante antes de empezar a operar.',
  operatingSystem: 'Windows',
  applicationCategory: 'BusinessApplication',
  highlights: [
    'Mesas y pedidos para llevar en el mismo flujo de atención.',
    'Comandas por estación y seguimiento desde cocina KDS.',
    'División de cuenta, cobro y caja conectados con el servicio.',
    'Operación local con terminales conectadas dentro del restaurante.',
  ],
  modulesTitle: 'Todo el recorrido del servicio',
  modulesIntro: 'Conecta la toma del pedido, la preparación y el cobro con los roles del equipo.',
  modules: ['Mesas', 'Comandas por estación', 'Cocina KDS', 'División de cuenta', 'Caja', 'Facturación electrónica'],
  sections: [
    {
      title: 'Meseros y cocina coordinados',
      body: 'Abre una mesa o un pedido para llevar, agrega productos y envía las comandas a las estaciones correspondientes. Cocina puede seguir la preparación desde su pantalla KDS.',
      items: ['Atención por mesa o para llevar', 'Envío de comandas por estación', 'Pantalla de cocina KDS'],
    },
    {
      title: 'Del pedido al cobro',
      body: 'Revisa la cuenta, divídela cuando el servicio lo requiera y continúa con caja y facturación electrónica. La demo permite probar este recorrido con tu menú y formas de pago.',
      items: ['División de cuenta', 'Operación de caja', 'Facturación electrónica para Costa Rica'],
    },
    {
      title: 'Trabaja dentro de la red de tu restaurante',
      body: 'El equipo principal conserva los datos y las terminales de meseros, cocina y caja se conectan por la red local. Los meseros también pueden tomar pedidos desde un teléfono o tablet conectado al restaurante.',
      items: ['Equipo principal en Windows', 'Terminales dentro de la red local', 'Pedidos desde teléfono o tablet'],
    },
    {
      title: 'Prepara tu puesta en marcha',
      body: 'Coordina con Asystec la instalación, el menú, las estaciones, los usuarios y la configuración fiscal. Valida impresoras, conectividad y un servicio completo antes de usarlo con clientes.',
      items: ['Menú y estaciones de cocina', 'Usuarios y equipos del local', 'Prueba de pedido, preparación y cobro'],
    },
  ],
  faqs: [
    {
      question: '¿Cómo descargo Restaurante Pro?',
      answer:
        'El botón Descargar Restaurante Pro abre el instalador para Windows de 64 bits. Después de descargarlo, coordina con Asystec la configuración del restaurante y una prueba antes de empezar a operar.',
    },
    {
      question: '¿Funciona sin internet?',
      answer:
        'La operación principal es local. Las terminales necesitan conexión con el equipo principal dentro de la red del restaurante. La facturación ante Hacienda, las actualizaciones y otros servicios externos requieren internet cuando corresponda.',
    },
    {
      question: '¿Los meseros pueden tomar pedidos desde un teléfono?',
      answer:
        'Sí. El equipo principal puede habilitar una aplicación web para tomar pedidos desde teléfonos o tablets dentro de la red local. La configuración y el acceso de cada usuario se revisan durante la implementación.',
    },
    {
      question: '¿Incluye mesas, cocina y división de cuenta?',
      answer:
        'Sí. Restaurante Pro incluye mesas, comandas por estación, cocina KDS y división de cuenta, además de caja y facturación electrónica. Prueba el recorrido con ejemplos del servicio de tu local en una demo.',
    },
  ],
  related: [
    { label: 'POS para restaurantes', href: '/industrias/restaurantes' },
    { label: 'Asystec POS', href: '/asystec-pos' },
    demoCta,
  ],
  finalCta: {
    title: 'Prepara el próximo servicio con Restaurante Pro',
    body: 'Descarga el instalador para Windows y coordina una demo con el flujo real de tu restaurante.',
    primary: downloadCta,
    secondary: demoCta,
  },
};
