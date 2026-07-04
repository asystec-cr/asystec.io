import type { Metadata } from 'next';

import JsonLd from '~/components/seo/JsonLd';
import { SITE } from '~/config.js';

const canonicalPath = '/guias/pos-local-vs-pos-en-la-nube';
const absoluteUrl = `${SITE.origin}${canonicalPath}`;
const pageTitle = 'POS local/offline vs POS en la nube en Costa Rica';
const pageDescription =
  'Compara POS local, offline y en la nube para pymes en Costa Rica. Revisa criterios de caja, internet, inventario, facturacion, soporte y demo.';

export const metadata: Metadata = {
  title: `${pageTitle} | Asystec`,
  description: pageDescription,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalPath,
    type: 'article',
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
};

const comparisonRows = [
  {
    criterion: 'Continuidad en caja',
    local: 'Puede seguir vendiendo si el POS opera localmente y no depende de internet para registrar ventas.',
    cloud: 'Depende mas de la conexion disponible en el local, aunque puede facilitar acceso remoto a datos.',
    demoQuestion: 'Que pasa si se cae internet durante una fila de clientes?',
  },
  {
    criterion: 'Control de inventario',
    local: 'Conviene probar productos, codigos, existencias y movimientos directamente en el flujo de venta.',
    cloud: 'Puede ser util si varias personas necesitan consultar datos desde diferentes ubicaciones.',
    demoQuestion: 'Como se actualizan existencias, ajustes, bodegas y productos con alta rotacion?',
  },
  {
    criterion: 'Facturacion electronica',
    local: 'Debe validar comprobantes, consecutivos, impuestos y el flujo real de emision para Costa Rica.',
    cloud: 'Debe mostrar como maneja comprobantes, reintentos, reportes y soporte cuando hay fallos de conexion.',
    demoQuestion: 'Como se manejan comprobantes electronicos, errores y cierres diarios?',
  },
  {
    criterion: 'Usuarios y permisos',
    local: 'Es clave revisar roles por caja, vendedor, administrador y auditoria de operaciones sensibles.',
    cloud: 'Tambien debe demostrar permisos, historial y control cuando hay accesos desde fuera del local.',
    demoQuestion: 'Quien puede anular, cambiar precios, cerrar caja o ver reportes?',
  },
  {
    criterion: 'Soporte e implementacion',
    local: 'Requiere instalacion, configuracion, capacitacion y claridad sobre respaldos o actualizaciones.',
    cloud: 'Requiere revisar disponibilidad, soporte, exportacion de datos y condiciones del servicio.',
    demoQuestion: 'Que incluye la implementacion y que soporte recibe el negocio despues de salir en vivo?',
  },
];

const decisionSignals = [
  {
    title: 'POS local/offline puede convenir si',
    items: [
      'La caja no puede detenerse por internet inestable.',
      'El negocio necesita velocidad en punto de venta.',
      'La operacion diaria ocurre en una o pocas cajas fisicas.',
      'Se quiere probar inventario, cierres y facturacion con datos reales antes de decidir.',
    ],
  },
  {
    title: 'POS en la nube puede convenir si',
    items: [
      'El equipo necesita consultar datos desde varios lugares.',
      'La operacion depende menos de una caja fisica fija.',
      'La prioridad es acceso remoto, reportes centralizados o administracion distribuida.',
      'La conexion del negocio es estable y existe un plan claro para contingencias.',
    ],
  },
  {
    title: 'Evalua un enfoque mixto si',
    items: [
      'Necesitas continuidad en caja y visibilidad gerencial.',
      'Hay sucursales, bodegas o administradores fuera del local.',
      'La facturacion, inventario y reportes deben trabajar como un solo proceso.',
      'Quieres comparar producto listo contra una plataforma a la medida.',
    ],
  },
];

const demoChecklist = [
  'Tipo de negocio, cantidad de cajas y horarios de mayor movimiento.',
  'Calidad real de internet y que debe pasar si falla.',
  'Productos, variantes, codigos de barra, combos o servicios vendidos.',
  'Necesidad de facturacion electronica, notas, anulaciones e impuestos.',
  'Cantidad de usuarios, permisos y controles de caja.',
  'Reportes que el dueno o gerente necesita revisar cada dia o semana.',
  'Sucursales, bodegas, integraciones o migracion desde Excel u otro sistema.',
];

const relatedLinks = [
  { label: 'Ver Asystec POS', href: '/asystec-pos' },
  { label: 'Sistema POS para negocios', href: '/soluciones/pos' },
  { label: 'Guia para elegir un sistema POS', href: '/guias/como-elegir-sistema-pos' },
  { label: 'Cuanto cuesta un POS', href: '/guias/cuanto-cuesta-un-pos-costa-rica' },
  { label: 'Software local vs extranjero', href: '/guias/software-local-vs-extranjero' },
];

const faqs = [
  {
    question: 'Que es mejor para una pyme en Costa Rica, POS local u online?',
    answer:
      'Depende del flujo del negocio. Si la caja no puede parar cuando falla internet, un POS local/offline puede ser mas seguro. Si el equipo necesita acceso remoto constante, un sistema en la nube puede ser util. La decision debe validarse con una demo usando productos, usuarios, facturacion e inventario reales.',
  },
  {
    question: 'Un POS local puede funcionar con facturacion electronica?',
    answer:
      'Si el proveedor lo implementa correctamente, puede operar el punto de venta local y conectar la facturacion electronica de Costa Rica segun el flujo requerido. En la demo conviene revisar emision, errores, consecutivos, impuestos y reportes.',
  },
  {
    question: 'Que debo preguntar antes de cambiar de POS?',
    answer:
      'Pregunta que pasa si falla internet, como se migran productos, como se controlan permisos, como se hacen cierres, como se emiten comprobantes y que soporte recibes despues de la implementacion.',
  },
  {
    question: 'Asystec POS es una opcion para operacion offline?',
    answer:
      'Asystec POS esta orientado a operacion local de escritorio para que la caja pueda seguir trabajando sin depender de internet. La recomendacion es coordinar una demo con el flujo real del negocio para validar alcance, facturacion, inventario y soporte.',
  },
];

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: pageTitle,
    description: pageDescription,
    inLanguage: 'es-CR',
    datePublished: '2026-07-04',
    dateModified: '2026-07-04',
    mainEntityOfPage: absoluteUrl,
    author: {
      '@type': 'Organization',
      name: 'Asystec',
      url: SITE.origin,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Asystec',
      url: SITE.origin,
    },
    about: ['Sistema POS', 'POS offline', 'POS en la nube', 'Facturacion electronica', 'Inventario'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: SITE.origin,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guias',
        item: `${SITE.origin}/guias`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pageTitle,
        item: absoluteUrl,
      },
    ],
  },
];

const Page = () => {
  return (
    <>
      <JsonLd data={schemas} />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="border-b border-gray-200 pb-10 dark:border-slate-700">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
            Guia POS para Costa Rica
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            POS local/offline vs POS en la nube: como decidir para una pyme en Costa Rica
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700 dark:text-slate-300">
            Un POS local/offline suele convenir cuando la caja no puede detenerse por internet inestable. Un POS en la
            nube puede convenir cuando el negocio necesita acceso remoto y administracion distribuida. La mejor decision
            sale de una demo con caja, inventario, facturacion, usuarios y reportes reales.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-slate-400">
            <span>Actualizado: 4 de julio de 2026</span>
            <span className="hidden h-1 w-1 rounded-full bg-gray-400 sm:inline-flex" />
            <span>Tiempo de lectura: 6 minutos</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact"
              data-analytics-event="cta_demo"
              data-analytics-label="Guia POS local vs nube demo"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Coordinar demo
            </a>
            <a
              href="https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20comparar%20POS%20local%20vs%20POS%20en%20la%20nube%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="cta_whatsapp"
              data-analytics-label="Guia POS local vs nube WhatsApp"
              className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/20"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </section>

        <section className="py-10">
          <div className="grid gap-5 md:grid-cols-3">
            {decisionSignals.map((signal) => (
              <article
                key={signal.title}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
              >
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">{signal.title}</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700 dark:text-slate-300">
                  {signal.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Comparacion practica antes de comprar</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-slate-300">
              La comparacion no debe quedarse en la etiqueta local o nube. Para un negocio en Costa Rica, el punto
              critico es probar el flujo completo: venta, comprobante electronico, inventario, cierre, permisos, soporte
              y datos para gerencia.
            </p>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="overflow-x-auto">
              <table className="min-w-[840px] divide-y divide-gray-200 text-left text-sm dark:divide-slate-700">
                <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-600 dark:bg-slate-900 dark:text-slate-300">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Criterio
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      POS local/offline
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      POS en la nube
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Pregunta para la demo
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                  {comparisonRows.map((row) => (
                    <tr key={row.criterion} className="align-top">
                      <th scope="row" className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
                        {row.criterion}
                      </th>
                      <td className="px-4 py-4 text-gray-700 dark:text-slate-300">{row.local}</td>
                      <td className="px-4 py-4 text-gray-700 dark:text-slate-300">{row.cloud}</td>
                      <td className="px-4 py-4 text-gray-700 dark:text-slate-300">{row.demoQuestion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="grid gap-8 py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900/60 dark:bg-blue-950/30">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Donde encaja Asystec POS</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-slate-300">
              Asystec POS es una opcion de escritorio para negocios que necesitan continuidad en caja, facturacion
              electronica para Costa Rica, control de inventario, reportes y acompanamiento de implementacion. La
              decision debe validarse con una demo sobre el flujo real del local, no solo con una lista de funciones.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/asystec-pos"
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Ver Asystec POS
              </a>
              <a
                href="/soluciones/pos"
                className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-800 transition hover:bg-blue-50 dark:border-blue-700 dark:bg-transparent dark:text-blue-300 dark:hover:bg-blue-900/20"
              >
                Ver solucion POS
              </a>
            </div>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Que llevar a la demo</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-slate-300">
              Esta lista ayuda a convertir una comparacion general en una decision comercial concreta.
            </p>
            <ul className="mt-5 grid gap-3 text-sm text-gray-700 dark:text-slate-300 sm:grid-cols-2">
              {demoChecklist.map((item) => (
                <li key={item} className="rounded-lg bg-gray-50 px-3 py-3 dark:bg-slate-700/40">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Guias relacionadas para decidir mejor</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-blue-800 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-300 dark:hover:bg-blue-950/30"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Preguntas frecuentes</h2>
          <div className="mt-5 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-800">
            {faqs.map((faq) => (
              <article key={faq.question} className="p-5">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700 dark:text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-xl bg-slate-900 p-6 text-white sm:p-8">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-bold">Compara con tu flujo real antes de decidir</h2>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Asystec puede revisar caja, inventario, facturacion, reportes, usuarios y soporte para aterrizar si tu
                negocio necesita POS local, nube o un enfoque combinado.
              </p>
            </div>
            <a
              href="/contact"
              data-analytics-event="cta_demo"
              data-analytics-label="Guia POS local vs nube final"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Coordinar demo
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
