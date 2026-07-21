import type { Metadata } from 'next';
import Link from 'next/link';

import JsonLd from '~/components/seo/JsonLd';
import Contact from '~/components/widgets/Contact';
import { contactLeadContact } from '~/shared/data/pages/contact.data';
import { absoluteUrl } from '~/utils/seo';

const pagePath = '/contact';
const whatsappUrl =
  'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20coordinar%20una%20demo%20para%20mi%20negocio.';
const contactDescription =
  'Coordina una demo de software con Asystec en Costa Rica para revisar POS, facturación electrónica, inventario, cobros, CRM, reportes, sucursales o integraciones.';

export const metadata: Metadata = {
  title: 'Solicita una demo de software en Costa Rica',
  description: contactDescription,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: 'Solicita una demo de software en Costa Rica | Asystec',
    description: contactDescription,
    url: pagePath,
  },
  twitter: {
    title: 'Solicita una demo de software en Costa Rica | Asystec',
    description: contactDescription,
  },
};

const solutionGroups = [
  {
    title: 'Ventas y operación diaria',
    body: 'Evalúa punto de venta, caja, inventario y reportes con el flujo real del negocio.',
    links: [
      { label: 'Sistema POS', href: '/soluciones/pos' },
      { label: 'Control de caja', href: '/soluciones/control-de-caja' },
      { label: 'Inventario', href: '/soluciones/inventario' },
    ],
  },
  {
    title: 'Administración y seguimiento',
    body: 'Revisa facturación electrónica, cobros y CRM sin separar información necesaria para decidir.',
    links: [
      { label: 'Facturación electrónica', href: '/soluciones/facturacion-electronica' },
      { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
      { label: 'CRM', href: '/soluciones/crm' },
    ],
  },
  {
    title: 'Crecimiento y procesos propios',
    body: 'Compara multi-sucursal, integraciones o una plataforma a medida cuando el flujo requiere más alcance.',
    links: [
      { label: 'Multi-sucursal', href: '/soluciones/multi-sucursal' },
      { label: 'Integraciones', href: '/soluciones/integraciones' },
      { label: 'Software a medida', href: '/plataformas' },
    ],
  },
];

const demoChecklist = [
  'Tipo de negocio y problema operativo que quieres resolver.',
  'Cantidad aproximada de usuarios, cajas, sucursales o bodegas.',
  'Cómo vendes, facturas, controlas inventario o das seguimiento hoy.',
  'Reportes, controles o integraciones que necesitas comprobar.',
  'Una muestra sin datos sensibles cuando quieras revisar una migración.',
];

const faqs = [
  {
    question: 'Qué información debo enviar para coordinar una demo?',
    answer:
      'Indica el tipo de negocio, el problema principal, los usuarios o sucursales involucrados y el proceso que necesitas revisar. Con ese contexto Asystec puede orientar la conversación hacia POS, facturación, inventario, cobros, CRM, reportes, integraciones o una plataforma a medida.',
  },
  {
    question: 'La demo puede concentrarse en un solo problema?',
    answer:
      'Sí. Puedes pedir una revisión enfocada en caja, facturación electrónica, inventario, cobros, reportes, varias sucursales u otro flujo concreto. No es necesario evaluar todos los productos o módulos al mismo tiempo.',
  },
  {
    question: 'Cómo se define el alcance o la cotización?',
    answer:
      'El alcance depende del producto, los usuarios, las sucursales, los datos, los reportes y las integraciones necesarias. La demo sirve para revisar esas variables antes de preparar una propuesta concreta, sin publicar precios o tiempos que no correspondan al caso real.',
  },
  {
    question: 'Dónde solicito soporte si ya uso un producto de Asystec?',
    answer:
      'Si ya eres cliente, escribe por WhatsApp e indica el producto, la situación y el resultado esperado. También puedes consultar las preguntas frecuentes y la documentación pública antes de enviar el caso.',
  },
];

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${absoluteUrl(pagePath)}#webpage`,
    url: absoluteUrl(pagePath),
    name: 'Solicita una demo de software en Costa Rica',
    description: contactDescription,
    about: {
      '@id': `${absoluteUrl('/')}#organization`,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(pagePath)}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: absoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Solicitar demo',
        item: absoluteUrl(pagePath),
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(pagePath)}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
];

const Page = () => (
  <>
    <JsonLd data={schemas} />
    <main className="bg-white text-gray-950 dark:bg-slate-950 dark:text-white">
      <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-14 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
            Demo y diagnóstico comercial
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Coordina una demo de software para tu negocio en Costa Rica
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700 dark:text-slate-300">
            Cuéntanos qué necesita resolver tu negocio, cómo opera hoy y qué quieres comprobar. Asystec puede preparar
            una conversación enfocada en POS, facturación electrónica, inventario, cobros, CRM, reportes,
            multi-sucursal, integraciones o software a medida.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#coordinar-demo"
              className="btn btn-primary sm:mb-0"
              data-analytics-event="cta_demo"
              data-analytics-label="Preparar demo desde contacto"
              data-analytics-location="contact_hero"
              data-analytics-type="primary"
            >
              Preparar la demo
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn sm:mb-0"
              data-analytics-event="cta_whatsapp"
              data-analytics-label="WhatsApp desde contacto"
              data-analytics-location="contact_hero"
              data-analytics-type="secondary"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-gray-600 dark:text-slate-400">
            Para una migración, basta con describir el origen y el resultado esperado. No envíes contraseñas, llaves,
            certificados ni datos sensibles por este formulario.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20" aria-labelledby="demo-routes-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
              Elige el punto de partida
            </p>
            <h2 id="demo-routes-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Qué puedes revisar en la demo
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-slate-300">
              No necesitas conocer el nombre del producto. Empieza por el proceso que quieres ordenar y usa estas rutas
              para preparar preguntas concretas.
            </p>
          </div>
          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {solutionGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-slate-700 dark:bg-slate-900"
              >
                <h3 className="text-xl font-bold">{group.title}</h3>
                <p className="mt-3 leading-7 text-gray-700 dark:text-slate-300">{group.body}</p>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link className="font-semibold text-blue-700 hover:underline dark:text-blue-300" href={link.href}>
                        {link.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact {...contactLeadContact} />

      <section className="py-14 md:py-20" aria-labelledby="demo-checklist-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
              Preparación
            </p>
            <h2 id="demo-checklist-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Qué conviene tener a mano
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-slate-300">
              Estos datos convierten una presentación general en una revisión útil del flujo, el alcance y la siguiente
              decisión comercial.
            </p>
          </div>
          <ol className="space-y-4">
            {demoChecklist.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 rounded-xl border border-gray-200 p-4 dark:border-slate-700 dark:bg-slate-900"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                  {index + 1}
                </span>
                <span className="pt-1 leading-7 text-gray-700 dark:text-slate-300">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 py-14 dark:border-slate-800 dark:bg-slate-900 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Preguntas frecuentes antes de contactar</h2>
          <div className="mt-8 divide-y divide-gray-200 dark:divide-slate-700">
            {faqs.map((faq) => (
              <article key={faq.question} className="py-6 first:pt-0 last:pb-0">
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-gray-700 dark:text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-blue-950 px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">¿Listo para revisar tu operación?</h2>
              <p className="mt-4 text-lg leading-8 text-blue-100">
                Envía el contexto básico por WhatsApp o revisa primero el portafolio y las opiniones públicas de
                clientes.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-blue-950 hover:bg-blue-50 sm:mb-0"
                data-analytics-event="cta_whatsapp"
                data-analytics-label="WhatsApp final de contacto"
                data-analytics-location="contact_final"
                data-analytics-type="primary"
              >
                Coordinar por WhatsApp
              </a>
              <Link className="text-center font-semibold text-blue-100 hover:text-white hover:underline" href="/casos">
                Ver casos y portafolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Page;
