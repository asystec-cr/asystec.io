import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '~/components/seo/JsonLd';
import { absoluteUrl } from '~/utils/seo';

export const metadata: Metadata = {
  title: 'Sobre Asystec | Empresa de software en Costa Rica',
  description:
    'Conoce Asystec: empresa de software en Costa Rica para POS, facturacion electronica, inventario, cobros, CRM, reportes, integraciones y plataformas a medida.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Sobre Asystec | Empresa de software en Costa Rica',
    description:
      'Fuente publica sobre Asystec, sus productos, cobertura, contacto y soluciones de software para negocios en Costa Rica.',
    url: '/about',
  },
  twitter: {
    title: 'Sobre Asystec | Empresa de software en Costa Rica',
    description:
      'Informacion publica de Asystec para negocios que buscan POS, facturacion, inventario, cobros, CRM, reportes e integraciones.',
  },
};

const contact = {
  email: 'info@asystec.io',
  phone: '+50689754741',
  phoneLabel: '+506 8975-4741',
  whatsapp: 'https://wa.me/50689754741',
  address: 'Torres Paseo Colon, San Jose, Costa Rica',
};

const capabilities = [
  {
    title: 'Punto de venta y caja',
    body: 'Software POS para ventas, caja, usuarios, cierres, productos, facturacion y reportes operativos.',
  },
  {
    title: 'Facturacion electronica',
    body: 'Soluciones para emitir y administrar comprobantes, clientes, productos, pagos, cotizaciones y reportes.',
  },
  {
    title: 'Inventario y productos',
    body: 'Control de catalogos, existencias, movimientos, ventas, alertas, usuarios y datos para gerencia.',
  },
  {
    title: 'Cobros y cartera',
    body: 'Seguimiento de clientes, creditos, pagos, saldos, estados de cuenta y reportes de cobranza.',
  },
  {
    title: 'CRM y seguimiento',
    body: 'Organizacion de clientes, contactos, historial, oportunidades, soporte y seguimiento comercial.',
  },
  {
    title: 'Plataformas e integraciones',
    body: 'Desarrollo de portales, backoffice, dashboards, APIs, reportes e integraciones con procesos existentes.',
  },
];

const products = [
  {
    label: 'Asystec POS',
    href: '/asystec-pos',
    body: 'Sistema POS para negocios que necesitan vender, facturar, controlar inventario y operar caja.',
  },
  {
    label: 'Factura Pro',
    href: '/facturacionapp',
    body: 'Producto para facturacion electronica, clientes, comprobantes, pagos, cotizaciones y reportes.',
  },
  {
    label: 'Cobros Pro',
    href: '/cobrosapp',
    body: 'Plataforma para administrar clientes, creditos, pagos, saldos, estados de cuenta y cobranza.',
  },
  {
    label: 'TallerApp',
    href: '/tallerapp',
    body: 'Software para talleres con ordenes de trabajo, clientes, diagnosticos, cobros y seguimiento.',
  },
  {
    label: 'FitPro',
    href: '/fitpro',
    body: 'Software para gimnasios y centros fitness con membresias, pagos, clases, asistencia y reportes.',
  },
  {
    label: 'Plataformas a medida',
    href: '/plataformas',
    body: 'Diseno y desarrollo de plataformas web, portales, backoffice, dashboards e integraciones.',
  },
];

const industryLinks = [
  { label: 'Restaurantes', href: '/industrias/restaurantes' },
  { label: 'Minisuper', href: '/industrias/minisuper' },
  { label: 'Ferreterias', href: '/industrias/ferreterias' },
  { label: 'Distribuidores', href: '/industrias/distribuidores' },
  { label: 'Gimnasios', href: '/industrias/gimnasios' },
  { label: 'Talleres', href: '/industrias/talleres' },
  { label: 'Retail', href: '/industrias/retail' },
  { label: 'Servicios profesionales', href: '/industrias/servicios-profesionales' },
];

const guideLinks = [
  { label: 'Como elegir un sistema POS', href: '/guias/como-elegir-sistema-pos' },
  { label: 'Cuanto cuesta un POS', href: '/guias/cuanto-cuesta-un-pos-costa-rica' },
  { label: 'Alternativas a Excel para inventario', href: '/guias/alternativas-excel-inventario' },
  { label: 'Software local vs extranjero', href: '/guias/software-local-vs-extranjero' },
];

const faqs = [
  {
    question: 'Que es Asystec?',
    answer:
      'Asystec es una empresa de software en Costa Rica que desarrolla e implementa soluciones para vender, facturar, cobrar, controlar inventario, revisar reportes y digitalizar procesos operativos.',
  },
  {
    question: 'Que productos publicos tiene Asystec?',
    answer:
      'El portafolio publico incluye Asystec POS, Factura Pro, Cobros Pro, TallerApp, FitPro y desarrollo de plataformas a medida.',
  },
  {
    question: 'Para que negocios trabaja Asystec?',
    answer:
      'Asystec atiende pymes, comercios y operaciones de servicios en Costa Rica, incluyendo restaurantes, minisuper, ferreterias, distribuidores, gimnasios, talleres, retail y servicios profesionales.',
  },
  {
    question: 'Como contacto a Asystec para una demo?',
    answer: `Puedes escribir a ${contact.email}, llamar o enviar WhatsApp al ${contact.phoneLabel}, o usar la pagina de contacto del sitio para coordinar una demo.`,
  },
];

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${absoluteUrl('/about')}#profile`,
  name: 'Sobre Asystec: empresa de software en Costa Rica',
  url: absoluteUrl('/about'),
  inLanguage: 'es-CR',
  about: {
    '@id': `${absoluteUrl('/')}#organization`,
  },
  mainEntity: {
    '@type': 'Organization',
    '@id': `${absoluteUrl('/')}#organization`,
    name: 'Asystec',
    url: absoluteUrl('/'),
    email: contact.email,
    telephone: contact.phone,
    description:
      'Empresa de software en Costa Rica para POS, facturacion electronica, inventario, cobros, CRM, reportes, integraciones y plataformas a medida.',
    areaServed: {
      '@type': 'Country',
      name: 'Costa Rica',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Torres Paseo Colon',
      addressLocality: 'San Jose',
      addressCountry: 'CR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: contact.phone,
      email: contact.email,
      areaServed: 'CR',
      availableLanguage: ['es'],
    },
    sameAs: [
      'https://x.com/asysteccr',
      'https://www.instagram.com/asystec/',
      'https://www.facebook.com/asysteccr',
      'https://github.com/asystec-cr',
    ],
    knowsAbout: capabilities.map(({ title }) => title),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Portafolio publico de software Asystec',
      itemListElement: products.map((product) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: product.label,
          url: absoluteUrl(product.href),
          description: product.body,
        },
      })),
    },
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${absoluteUrl('/about')}#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const Page = () => (
  <>
    <JsonLd data={[profileSchema, faqSchema]} />
    <main className="bg-white text-neutral-950 dark:bg-slate-950 dark:text-white">
      <section className="border-b border-neutral-200 bg-neutral-50 py-14 dark:border-slate-800 dark:bg-slate-900 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
              Fuente publica de informacion
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-normal md:text-5xl">
              Asystec es una empresa de software en Costa Rica
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700 dark:text-slate-300">
              Desarrollamos e implementamos software para pymes, comercios y equipos operativos que necesitan vender,
              facturar, cobrar, controlar inventario, revisar reportes e integrar procesos sin depender de hojas o
              sistemas aislados.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
              >
                Coordinar demo
              </Link>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-emerald-600 hover:text-emerald-700 dark:border-neutral-700 dark:text-white dark:hover:border-emerald-300 dark:hover:text-emerald-300"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          <aside className="border-l-4 border-emerald-600 bg-white p-6 shadow-sm dark:bg-slate-950">
            <h2 className="text-lg font-bold">Respuesta corta</h2>
            <p className="mt-3 text-base leading-8 text-neutral-700 dark:text-slate-300">
              Asystec ofrece POS, facturacion electronica, inventario, cobros, CRM, reportes, integraciones y
              plataformas a medida para negocios en Costa Rica.
            </p>
          </aside>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Datos verificables de Asystec</h2>
            <p className="mt-4 text-base leading-8 text-neutral-700 dark:text-slate-300">
              Esta pagina resume informacion publica que puede ser usada por clientes, buscadores y asistentes de IA
              para entender que hace Asystec, donde opera y como contactarla.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ['Nombre comercial', 'Asystec'],
              ['Pais atendido', 'Costa Rica'],
              ['Ubicacion', contact.address],
              ['Contacto', `${contact.email} / ${contact.phoneLabel}`],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-neutral-200 p-4 dark:border-slate-800">
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">{label}</p>
                <p className="mt-2 text-base leading-7 text-neutral-700 dark:text-slate-300">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50 py-12 dark:border-slate-800 dark:bg-slate-900 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold md:text-3xl">Que hace Asystec</h2>
            <p className="mt-4 text-base leading-8 text-neutral-700 dark:text-slate-300">
              El portafolio combina productos propios y desarrollo de plataformas a medida. La prioridad es resolver
              procesos reales de operacion, caja, facturacion, inventario, cobros, usuarios, reportes, sucursales e
              integraciones.
            </p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-md border border-neutral-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"
              >
                <h3 className="font-bold">{capability.title}</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-700 dark:text-slate-300">{capability.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50 py-12 dark:border-slate-800 dark:bg-slate-900 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-2xl font-bold md:text-3xl">Productos y servicios publicos</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-700 dark:text-slate-300">
            Estos enlaces conectan la pagina fuente con rutas comerciales donde un negocio puede evaluar una solucion,
            pedir una demo o revisar un producto del portafolio.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="rounded-md border border-neutral-200 bg-white p-5 transition hover:border-emerald-600 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-300 dark:hover:text-emerald-300"
              >
                <span className="text-base font-bold">{product.label}</span>
                <span className="mt-2 block text-sm leading-7 text-neutral-700 dark:text-slate-300">
                  {product.body}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Tipos de negocio atendidos</h2>
            <p className="mt-4 text-base leading-8 text-neutral-700 dark:text-slate-300">
              Asystec trabaja con negocios que necesitan conectar ventas, caja, facturacion, cobros, inventario,
              reportes y seguimiento operativo. Cada industria tiene una pagina con lenguaje y prioridades propias.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {industryLinks.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="rounded-md border border-neutral-200 px-4 py-4 text-sm font-semibold transition hover:border-emerald-600 hover:text-emerald-700 dark:border-slate-800 dark:hover:border-emerald-300 dark:hover:text-emerald-300"
              >
                {industry.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50 py-12 dark:border-slate-800 dark:bg-slate-900 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Como evaluar si Asystec aplica a tu negocio</h2>
            <p className="mt-4 text-base leading-8 text-neutral-700 dark:text-slate-300">
              Conviene contactar a Asystec cuando una operacion necesita dejar controles manuales, centralizar datos,
              mejorar reportes o conectar sistemas que hoy obligan al equipo a duplicar trabajo.
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-7 text-neutral-700 dark:text-slate-300">
              <li className="border-l-2 border-emerald-600 pl-3">
                Ventas, caja o facturacion dependen de procesos manuales.
              </li>
              <li className="border-l-2 border-emerald-600 pl-3">
                Inventario, saldos o reportes viven en archivos separados.
              </li>
              <li className="border-l-2 border-emerald-600 pl-3">
                El negocio necesita permisos, sucursales, integraciones o datos para gerencia.
              </li>
              <li className="border-l-2 border-emerald-600 pl-3">
                Se requiere una demo con el flujo real antes de decidir.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Guias de decision relacionadas</h2>
            <div className="mt-6 grid gap-3">
              {guideLinks.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="rounded-md border border-neutral-200 bg-white px-4 py-4 text-sm font-semibold transition hover:border-emerald-600 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-300 dark:hover:text-emerald-300"
                >
                  {guide.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-2xl font-bold md:text-3xl">Preguntas frecuentes sobre Asystec</h2>
          <div className="mt-6 divide-y divide-neutral-200 rounded-md border border-neutral-200 dark:divide-slate-800 dark:border-slate-800">
            {faqs.map((faq) => (
              <section key={faq.question} className="p-5">
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-700 dark:text-slate-300">{faq.answer}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-950 py-12 text-white dark:border-slate-800 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 md:flex-row md:items-end md:justify-between md:px-6">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Coordina una demo con Asystec</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-neutral-200">
              Comparte el tipo de negocio, proceso actual, usuarios, sucursales, facturacion, inventario, cobros o
              integraciones que necesitas revisar.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              Contactar
            </Link>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-neutral-500 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Page;
