import type { Metadata } from 'next';
import JsonLd from '~/components/seo/JsonLd';
import { buildLandingSchemas, buildPageMetadata } from '~/utils/seo';
import type { LandingPageData } from '~/shared/data/seo-landings.data';
import NexoHero from '~/components/widgets/NexoHero';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import Pricing from '~/components/widgets/Pricing';
import Comparison from '~/components/widgets/Comparison';
import FAQs from '~/components/widgets/FAQs';
import CallToAction from '~/components/widgets/CallToAction';

const whatsappDemoHref =
  'https://wa.me/50689754741?text=Hola%2C%20quiero%20una%20demo%20del%20Agente%20Nexo';

const page: LandingPageData = {
  slug: 'agente-nexo',
  path: '/agente-nexo',
  kind: 'product',
  schemaType: 'Service',
  title: 'Agente Nexo',
  seoTitle: 'Agente Nexo | Agente de IA para WhatsApp | Asystec',
  description:
    'Agente Nexo (Nexo Agent): agente de IA para WhatsApp que atiende, da seguimiento y vende de 6 a. m. a 11 p. m. Planes desde $100/mes. Pida su demo.',
  eyebrow: 'Nuevo de Asystec · Agente Nexo',
  heroTitle: 'Agente Nexo: su agente de IA para WhatsApp que atiende y vende todos los días',
  answer:
    'Nexo responde a sus clientes, da seguimiento, maneja objeciones y registra las ventas cerradas sin intervención humana.',
  intro:
    'Disponible de 6:00 a. m. a 11:00 p. m., todos los días. Al final del día, usted recibe un resumen.',
  primaryCta: { label: 'Solicitar demo', href: whatsappDemoHref },
  highlights: [],
  modules: [],
  sections: [],
  faqs: [],
  related: [],
  image: '/images/agente-nexo/og-agente-nexo.jpg',
};

export const metadata: Metadata = buildPageMetadata(page);

// JSON-LD: Product + FAQ
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Agente Nexo',
  alternateName: 'Nexo Agent',
  description:
    'Agente de IA para WhatsApp que atiende y vende de 6 a. m. a 11 p. m. todos los días, da seguimiento, maneja objeciones, consulta el POS en solo lectura, registra ventas cerradas y envía un resumen diario.',
  brand: { '@type': 'Brand', name: 'Agente Nexo' },
  category: 'Agente de IA para WhatsApp',
  url: 'https://asystec.io/agente-nexo',
  image: 'https://asystec.io/images/agente-nexo/og-agente-nexo.jpg',
  manufacturer: {
    '@type': 'Organization',
    name: 'Asystec',
    legalName: 'ASYSTEC IT & TRADING COMPANY S.A.',
    url: 'https://asystec.io',
    address: { '@type': 'PostalAddress', addressCountry: 'CR' },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+506-8975-4741',
      contactType: 'sales',
      availableLanguage: 'es',
    },
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Plan Esencial',
      price: '100',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '100',
        priceCurrency: 'USD',
        unitText: 'MONTH',
        referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
      },
      url: 'https://asystec.io/agente-nexo#planes',
      seller: { '@type': 'Organization', name: 'Asystec' },
    },
    {
      '@type': 'Offer',
      name: 'Plan Crecimiento',
      price: '350',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '350',
        priceCurrency: 'USD',
        unitText: 'MONTH',
        referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
      },
      url: 'https://asystec.io/agente-nexo#planes',
      seller: { '@type': 'Organization', name: 'Asystec' },
    },
    {
      '@type': 'Offer',
      name: 'Plan Empresa',
      price: '800',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '800',
        priceCurrency: 'USD',
        unitText: 'MONTH',
        referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
      },
      url: 'https://asystec.io/agente-nexo#planes',
      seller: { '@type': 'Organization', name: 'Asystec' },
    },
  ],
};

const faqItems = [
  {
    q: '¿Qué es el Agente Nexo?',
    a: 'El Agente Nexo (también conocido como Nexo Agent) es un agente de IA para WhatsApp creado por Asystec. Atiende y vende por WhatsApp a nombre de su negocio: responde consultas, da seguimiento, maneja objeciones y registra las ventas cerradas sin intervención humana.',
  },
  { q: '¿En qué horario atiende Nexo?', a: 'Nexo atiende de 6:00 a. m. a 11:00 p. m., todos los días de la semana.' },
  {
    q: '¿Cómo se presenta Nexo ante mis clientes?',
    a: 'Cada agente se llama Nexo y firma sus mensajes con el nombre de su negocio, con el formato «Nexo | Su Empresa».',
  },
  {
    q: '¿Nexo puede modificar la información de mi POS?',
    a: 'No. Nexo consulta su POS únicamente en modo de solo lectura, para responder con información de su negocio. No modifica los datos de su punto de venta.',
  },
  {
    q: '¿Cómo me entero de lo que hizo Nexo durante el día?',
    a: 'Usted recibe un resumen diario de la actividad. En el plan Crecimiento se suma además un reporte semanal.',
  },
  {
    q: '¿Qué plan me conviene?',
    a: 'Esencial ($100/mes) incluye 1 agente de WhatsApp. Crecimiento ($350/mes) agrega redes sociales, recuperación de clientes y reporte semanal. Empresa ($800/mes) suma agentes personalizados de cobros, inventario y facturación, sucursales, integraciones y soporte prioritario. En la demo le ayudamos a elegir.',
  },
  {
    q: '¿Qué pasa con la privacidad de mis datos y los de mis clientes?',
    a: 'La privacidad de su información es importante para nosotros. En la demo le explicamos cómo se maneja la información de su negocio y de sus clientes, y respondemos cualquier consulta específica que tenga.',
  },
  {
    q: '¿Cómo solicito una demo?',
    a: 'Escríbanos por WhatsApp al +506 8975 4741 o use cualquiera de los botones «Solicitar demo» de esta página. Asystec (ASYSTEC IT & TRADING COMPANY S.A.) es la empresa costarricense detrás del Agente Nexo.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const problemFeatures = [
  {
    title: 'Mensajes que llegan fuera de horario',
    description:
      'Muchas consultas entran temprano, en la noche o el fin de semana, cuando nadie está pendiente del teléfono.',
  },
  {
    title: 'Seguimientos que se olvidan',
    description:
      'El cliente que dijo “lo voy a pensar” rara vez recibe un segundo mensaje, y esa venta se enfría.',
  },
  {
    title: 'Poca visibilidad de lo que se vendió',
    description:
      'Sin un registro ordenado, es difícil saber qué se cerró por WhatsApp y qué quedó pendiente.',
  },
];

const howItWorks = [
  {
    title: 'Demo y diagnóstico',
    description:
      'Nos escribe por WhatsApp, le mostramos el Agente Nexo y conversamos sobre cómo vende su negocio.',
  },
  {
    title: 'Configuración a su medida',
    description:
      'Preparamos a Nexo con la información de su empresa y lo conectamos a su POS en modo de solo lectura.',
  },
  {
    title: 'Nexo atiende y vende',
    description:
      'De 6:00 a. m. a 11:00 p. m., todos los días, Nexo responde, da seguimiento, maneja objeciones y registra las ventas cerradas.',
  },
  {
    title: 'Usted recibe el resumen',
    description:
      'Cada día le llega un resumen de la actividad para que sepa qué pasó, sin tener que revisar cada chat.',
  },
];

const whatItDoes = [
  { title: 'Responde y vende por WhatsApp', description: 'Atiende las consultas y acompaña hasta cerrar la venta.' },
  { title: 'De 6:00 a. m. a 11:00 p. m.', description: 'Disponible todos los días, incluidos fines de semana.' },
  { title: 'Da seguimiento', description: 'Retoma conversaciones pendientes para no perder interesados.' },
  { title: 'Maneja objeciones', description: 'Responde dudas y objeciones comunes con su información.' },
  { title: 'Consulta su POS (solo lectura)', description: 'Responde con datos reales sin modificar nada.' },
  { title: 'Registra ventas cerradas', description: 'Usted recibe un resumen diario de la operación.' },
];

const plans = [
  {
    title: 'Esencial',
    subtitle: 'Para empezar a vender por WhatsApp con un agente de IA.',
    price: 100,
    period: 'usd/mes',
    items: [
      { title: '1 agente Nexo para WhatsApp' },
      { title: 'Atención y ventas 6:00 a. m. – 11:00 p. m., todos los días' },
      { title: 'Seguimiento y manejo de objeciones' },
      { title: 'Consulta del POS en solo lectura' },
      { title: 'Registro de ventas cerradas y resumen diario' },
    ],
    callToAction: {
      text: 'Solicitar demo',
      href: whatsappDemoHref,
      trackingEvent: 'cta_whatsapp',
      trackingLabel: 'Agente Nexo plan Esencial',
    },
  },
  {
    title: 'Crecimiento',
    subtitle: 'Para negocios que quieren llegar a más clientes y recuperar a los que se alejaron.',
    price: 350,
    period: 'usd/mes',
    hasRibbon: true,
    ribbonTitle: 'Más completo para crecer',
    items: [
      { title: 'Todo lo del plan Esencial' },
      { title: 'Redes sociales' },
      { title: 'Recuperación de clientes' },
      { title: 'Reporte semanal' },
    ],
    callToAction: {
      text: 'Solicitar demo',
      href: whatsappDemoHref,
      trackingEvent: 'cta_whatsapp',
      trackingLabel: 'Agente Nexo plan Crecimiento',
    },
  },
  {
    title: 'Empresa',
    subtitle: 'Para operaciones que necesitan agentes a la medida.',
    price: 800,
    period: 'usd/mes',
    items: [
      { title: 'Todo lo del plan Crecimiento' },
      { title: 'Agentes personalizados: cobros, inventario y facturación' },
      { title: 'Sucursales' },
      { title: 'Integraciones' },
      { title: 'Soporte prioritario' },
    ],
    callToAction: {
      text: 'Solicitar demo',
      href: whatsappDemoHref,
      trackingEvent: 'cta_whatsapp',
      trackingLabel: 'Agente Nexo plan Empresa',
    },
  },
];

const comparisonColumns = [
  {
    title: 'Incluye',
    items: [
      { title: 'Agente Nexo para WhatsApp (6 a. m. – 11 p. m., todos los días)' },
      { title: 'Seguimiento y manejo de objeciones' },
      { title: 'Consulta del POS (solo lectura)' },
      { title: 'Registro de ventas cerradas y resumen diario' },
      { title: 'Redes sociales' },
      { title: 'Recuperación de clientes' },
      { title: 'Reporte semanal' },
      { title: 'Agentes personalizados (cobros, inventario, facturación)' },
      { title: 'Sucursales e integraciones' },
      { title: 'Soporte prioritario' },
    ],
  },
  {
    title: 'Esencial $100/mes',
    items: [true, true, true, true, false, false, false, false, false, false].map((v) => ({ title: v as unknown as string })),
    callToAction: { text: 'Solicitar demo', href: whatsappDemoHref, trackingEvent: 'cta_whatsapp', trackingLabel: 'Comparación plan Esencial' },
  },
  {
    title: 'Crecimiento $350/mes',
    items: [true, true, true, true, true, true, true, false, false, false].map((v) => ({ title: v as unknown as string })),
    callToAction: { text: 'Solicitar demo', href: whatsappDemoHref, trackingEvent: 'cta_whatsapp', trackingLabel: 'Comparación plan Crecimiento' },
  },
  {
    title: 'Empresa $800/mes',
    items: [true, true, true, true, true, true, true, true, true, true].map((v) => ({ title: v as unknown as string })),
    callToAction: { text: 'Solicitar demo', href: whatsappDemoHref, trackingEvent: 'cta_whatsapp', trackingLabel: 'Comparación plan Empresa' },
  },
];

const Page = () => {
  return (
    <>
      {/* Organization/local business + default landing structured data */}
      <JsonLd data={buildLandingSchemas(page, { includeFaq: false })} />
      {/* Product and FAQPage structured data */}
      <JsonLd data={[productSchema, faqSchema]} />

      <NexoHero />

      <Features
        header={{
          tagline: 'El problema',
          title: 'Sus clientes escriben por WhatsApp a toda hora. ¿Quién les responde?',
          subtitle:
            'Cada mensaje sin respuesta es una venta que se puede ir a la competencia. Atender WhatsApp a mano consume tiempo de su equipo y deja oportunidades por el camino.',
        }}
        items={problemFeatures}
        hasBackground
        id="problema"
      />

      <Steps
        header={{
          tagline: 'Cómo funciona',
          title: 'Su agente Nexo, listo en 4 pasos',
          subtitle: 'Nosotros nos encargamos de la configuración. Usted se enfoca en su negocio.',
        }}
        items={howItWorks}
        id="como-funciona"
      />

      <Features
        header={{
          tagline: 'Qué hace Nexo',
          title: 'Un vendedor digital que no deja mensajes sin contestar',
          subtitle: 'Nexo Agent es el agente de IA para WhatsApp de Asystec, pensado para negocios que venden por chat.',
        }}
        items={whatItDoes}
        columns={3}
        hasBackground
        id="que-hace"
      />

      <section className="mx-auto max-w-5xl px-4 py-8">
        <div className="rounded-md border border-dashed border-blue-300 bg-blue-50 p-5 text-center dark:border-blue-900 dark:bg-blue-950/40">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-800 dark:text-blue-300">
            Próximamente: casos de éxito
          </p>
          <p className="mt-2 text-sm leading-7 text-neutral-700 dark:text-slate-300">
            Estamos preparando ejemplos públicos de implementación del Agente Nexo en negocios de Costa Rica.
          </p>
        </div>
      </section>

      <Pricing
        header={{
          tagline: 'Planes',
          title: 'Elija el plan del Agente Nexo para su negocio',
          subtitle: 'Precios en dólares estadounidenses (USD), por mes.',
          position: 'center',
        }}
        prices={plans}
        id="planes"
        hasBackground
      />

      <Comparison
        header={{ title: 'Comparación de planes', subtitle: 'Resumen de lo que incluye cada plan', position: 'left' }}
        columns={comparisonColumns}
      />

      <FAQs
        header={{ tagline: 'Preguntas frecuentes', title: 'Preguntas frecuentes sobre el Agente Nexo' }}
        items={faqItems.map(({ q, a }) => ({ title: q, description: a }))}
        id="preguntas"
        hasBackground
      />

      <CallToAction
        title="Ponga a Nexo a atender su WhatsApp"
        subtitle="Solicite una demo del Agente Nexo y vea cómo un agente de IA para WhatsApp puede atender, dar seguimiento y vender por su negocio todos los días."
        callToAction={{
          text: 'Solicitar demo: +506 8975 4741',
          href: whatsappDemoHref,
          trackingEvent: 'cta_whatsapp',
          trackingLabel: 'Agente Nexo CTA final',
        }}
      />
    </>
  );
};

export default Page;

