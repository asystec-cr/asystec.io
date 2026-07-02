import { CallToActionProps, FAQsProps, HeroProps } from '~/shared/types';

export const electronicBillingFaqItems = [
  {
    title: 'Que necesita una pyme para empezar con facturacion electronica en Costa Rica?',
    description:
      'Necesita tener claro su estado tributario, acceso a las credenciales o llave que correspondan, datos de clientes, productos o servicios, impuestos, consecutivos y el flujo para emitir, enviar y consultar comprobantes. En una demo se revisa si conviene FacturacionApp, Asystec POS o una plataforma integrada.',
  },
  {
    title: 'Que es la llave criptografica y por que importa?',
    description:
      'La llave o credencial de emision permite autenticar el envio de comprobantes electronicos. Si esta vencida, mal configurada o no coincide con el emisor, la facturacion puede fallar. Por eso se revisa antes de migrar o configurar un sistema.',
  },
  {
    title: 'Puedo emitir facturas electronicas desde un POS?',
    description:
      'Si el POS esta preparado para el flujo fiscal de Costa Rica, puede conectar ventas de caja con comprobantes, clientes, productos, impuestos, cierres y reportes. Asystec POS se evalua cuando el negocio tambien necesita caja, inventario y operacion local.',
  },
  {
    title: 'Que documentos debe controlar un sistema de facturacion?',
    description:
      'Depende del tipo de contribuyente y del caso de uso, pero normalmente conviene controlar facturas, tiquetes, notas de credito, notas de debito, comprobantes recibidos y reportes. Los casos especiales deben validarse con Hacienda o con el contador del negocio.',
  },
  {
    title: 'Excel reemplaza un sistema de facturacion electronica?',
    description:
      'No. Excel puede ayudar a ordenar datos, pero no resuelve por si solo la emision, validacion, trazabilidad, consecutivos, clientes, impuestos, reportes y soporte operativo que necesita un negocio al facturar todos los dias.',
  },
  {
    title: 'Cuando elegir FacturacionApp, Asystec POS o una plataforma a medida?',
    description:
      'FacturacionApp conviene cuando el foco es emitir y administrar comprobantes, clientes, pagos y reportes. Asystec POS conviene cuando hay caja, ventas rapidas e inventario. Una plataforma a medida aplica cuando hay integraciones, roles o flujos propios.',
  },
  {
    title: 'Que informacion debo preparar para una demo de facturacion electronica?',
    description:
      'Conviene preparar tipo de negocio, cantidad de usuarios, volumen de comprobantes, productos o servicios, sucursales, cajas, sistema actual, reportes necesarios y problemas que hoy generan atrasos o errores.',
  },
  {
    title: 'Asystec ofrece soporte local para facturacion electronica?',
    description:
      'Si. Asystec atiende negocios en Costa Rica y puede acompanar la configuracion, salida a produccion, revision de errores operativos y seleccion entre POS, facturacion web o desarrollo integrado segun el flujo real.',
  },
];

// Hero data on FAQs page *******************
export const heroFaqs: HeroProps = {
  title: 'Preguntas frecuentes de facturacion electronica',
  subtitle: (
    <>
      Respuestas para pymes y negocios en Costa Rica que necesitan emitir comprobantes, ordenar clientes, conectar caja
      o inventario y escoger entre un sistema de facturacion, POS o plataforma integrada.
    </>
  ),
  tagline: 'FAQ comercial',
};

// FAQS4 data on FAQs page *******************
export const faqs4Faqs: FAQsProps = {
  id: 'faqsFour-on-faqs',
  hasBackground: true,
  header: {
    title: 'Dudas clave antes de cotizar',
    subtitle:
      'Estas respuestas ayudan a preparar una demo sin inventar precios ni prometer requisitos fiscales que deben validarse segun cada contribuyente.',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'Facturacion electronica',
        href: '/faqs#facturacion-electronica',
      },
      items: electronicBillingFaqItems,
    },
  ],
};

// CallToAction data on FAQs page *******************
export const callToActionFaqs: CallToActionProps = {
  id: 'callToAction-on-faqs',
  hasBackground: true,
  title: 'Quieres revisar tu flujo de facturacion?',
  subtitle:
    'Agenda una demo para comparar si tu negocio necesita FacturacionApp, Asystec POS o una plataforma conectada con inventario, cobros y reportes.',
  callToAction: {
    text: 'Coordinar demo',
    href: '/contact',
    trackingEvent: 'cta_demo',
    trackingLabel: 'FAQ facturacion electronica coordinar demo',
  },
};
