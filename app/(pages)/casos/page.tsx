import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '~/components/seo/JsonLd';
import { absoluteUrl } from '~/utils/seo';

type PublicCase = {
  name: string;
  category: string;
  href: string;
  image: string;
  alt: string;
  summary: string;
  proofPoints: string[];
  services: string[];
  ctaLabel: string;
};

type Faq = {
  question: string;
  answer: string;
};

const cases: PublicCase[] = [
  {
    name: 'Asystec POS',
    category: 'Punto de venta e inventario',
    href: '/asystec-pos',
    image: '/images/pos/pos0.jpeg',
    alt: 'Pantalla publica de Asystec POS',
    summary:
      'Sistema POS para pymes en Costa Rica con caja, ventas, inventario, facturacion electronica, reportes y operacion local.',
    proofPoints: [
      'Pagina publica con producto, alcance, instalador y ruta a demo.',
      'Conecta con necesidades de caja, inventario, facturacion y reportes.',
      'Sirve como referencia para comercios que necesitan vender aun con internet inestable.',
    ],
    services: ['POS', 'Inventario', 'Facturacion electronica'],
    ctaLabel: 'Ver Asystec POS',
  },
  {
    name: 'FacturacionApp',
    category: 'Facturacion electronica',
    href: '/facturacionapp',
    image: '/images/portfolio/facturacionapp.png',
    alt: 'Pantalla publica de FacturacionApp',
    summary:
      'Producto Asystec para emitir y administrar comprobantes electronicos, clientes, pagos, cotizaciones y reportes en Costa Rica.',
    proofPoints: [
      'Pagina publica conectada con facturacion electronica para pymes.',
      'Flujo orientado a comprobantes, clientes, cotizaciones, pagos y reportes.',
      'Ruta de evaluacion para negocios que no necesitan caja POS completa.',
    ],
    services: ['Facturacion', 'Clientes', 'Reportes'],
    ctaLabel: 'Ver FacturacionApp',
  },
  {
    name: 'CobrosApp',
    category: 'Creditos y cobranza',
    href: '/cobrosapp',
    image: '/images/portfolio/cobrosapp.png',
    alt: 'Pantalla publica de CobrosApp',
    summary:
      'Plataforma para administrar clientes, creditos, pagos, estados de cuenta y reportes de cobranza desde un sistema web.',
    proofPoints: [
      'Producto publico del portafolio Asystec para operaciones de cobro.',
      'Apoya procesos con clientes, saldos, pagos, estados de cuenta y reportes.',
      'Conecta con necesidades de cuentas por cobrar, seguimiento y control financiero.',
    ],
    services: ['Cobros', 'Creditos', 'Estados de cuenta'],
    ctaLabel: 'Ver CobrosApp',
  },
  {
    name: 'TallerApp',
    category: 'Software para talleres',
    href: '/tallerapp',
    image: '/images/portfolio/taller-asystec-login.png',
    alt: 'Pantalla publica de TallerApp',
    summary:
      'Producto orientado a talleres que necesitan registrar clientes, ordenes, diagnosticos, aprobaciones, cobros y entregas.',
    proofPoints: [
      'Pagina publica con alcance de ordenes de trabajo y seguimiento operativo.',
      'Referente para negocios que trabajan por estados, aprobaciones y entrega.',
      'Conecta con la industria de talleres y con plataformas operativas por orden.',
    ],
    services: ['Ordenes', 'Talleres', 'Seguimiento'],
    ctaLabel: 'Ver TallerApp',
  },
  {
    name: 'Tecnicore',
    category: 'Plataforma operativa para talleres',
    href: 'https://tecnicore.asysteccr.com/',
    image: '/images/portfolio/tecnicore.png',
    alt: 'Pantalla publica de Tecnicore',
    summary:
      'Plataforma publica de acceso para operaciones de taller, usuarios, ordenes y flujo administrativo por estados.',
    proofPoints: [
      'Portal visible sin credenciales para validar entrada, marca y flujo de acceso.',
      'Ejemplo de plataforma operativa para negocios que trabajan con ordenes.',
      'Referencia util para conversaciones sobre desarrollo a medida y roles internos.',
    ],
    services: ['Plataforma web', 'Talleres', 'Roles'],
    ctaLabel: 'Abrir Tecnicore',
  },
  {
    name: 'Candock Costa Rica',
    category: 'Sitio comercial y catalogo',
    href: 'https://candockcostarica.com/',
    image: '/images/portfolio/candockcostarica.png',
    alt: 'Sitio publico de Candock Costa Rica',
    summary: 'Presencia digital publica para catalogo, productos, cotizacion y contacto comercial en Costa Rica.',
    proofPoints: [
      'Ejemplo visible de sitio comercial con catalogo y rutas de contacto.',
      'Muestra como una marca puede ordenar oferta, productos y cotizacion.',
      'Sirve como referencia para negocios que necesitan capturar consultas desde web.',
    ],
    services: ['Web comercial', 'Catalogo', 'Cotizacion'],
    ctaLabel: 'Abrir sitio publico',
  },
  {
    name: 'JAS Admin',
    category: 'Portal administrativo',
    href: 'https://jas.asystec.io/login',
    image: '/images/portfolio/jas-asystec-login.png',
    alt: 'Pantalla publica de JAS Admin',
    summary: 'Portal web de administracion para usuarios registrados, con entrada publica para operaciones internas.',
    proofPoints: [
      'Pantalla publica de acceso para validar marca, entrada y recuperacion de cuenta.',
      'Ejemplo de portal administrativo con login para usuarios registrados.',
      'Referencia para proyectos que requieren backoffice, permisos y continuidad operativa.',
    ],
    services: ['Backoffice', 'Usuarios', 'Portal web'],
    ctaLabel: 'Abrir JAS Admin',
  },
];

const faqs: Faq[] = [
  {
    question: 'Que demuestra el portafolio publico de Asystec?',
    answer:
      'Muestra productos, plataformas y sitios visibles que ayudan a negocios en Costa Rica con POS, facturacion electronica, cobros, talleres, catalogos, portales y operaciones web.',
  },
  {
    question: 'Por que no se publican metricas o nombres privados de clientes?',
    answer:
      'Porque Asystec no debe publicar resultados cuantitativos, resenas, nombres privados ni datos comerciales sensibles sin permiso confirmado. Esta pagina usa evidencia publica y verificable.',
  },
  {
    question: 'Puedo usar estos casos para pedir una demo?',
    answer:
      'Si. Puedes coordinar una demo y mencionar el caso mas parecido a tu operacion para revisar flujos, usuarios, reportes, integraciones y alcance real.',
  },
  {
    question: 'Asystec desarrolla software a medida o solo productos propios?',
    answer:
      'Asystec combina productos propios, como Asystec POS, FacturacionApp, CobrosApp y TallerApp, con desarrollo de plataformas web y portales operativos a la medida.',
  },
];

const relatedLinks = [
  { label: 'Diseno de plataformas', href: '/plataformas' },
  { label: 'Software para negocios', href: '/software-para-negocios-costa-rica' },
  { label: 'Sistema POS', href: '/soluciones/pos' },
  { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
  { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
  { label: 'Coordinar demo', href: '/contact' },
];

const getSchemaUrl = (href: string) => (href.startsWith('http') ? href : absoluteUrl(href));

export const metadata: Metadata = {
  title: 'Portafolio de software en Costa Rica',
  description:
    'Casos publicos y portafolio de Asystec en Costa Rica: POS, facturacion electronica, cobros, talleres, portales, catalogos y plataformas web.',
  alternates: {
    canonical: '/casos',
  },
  openGraph: {
    title: 'Portafolio de software en Costa Rica | Asystec',
    description:
      'Evidencia publica de productos, plataformas y sitios desarrollados por Asystec para negocios en Costa Rica.',
    url: '/casos',
    images: [
      {
        url: '/images/portfolio/cobrosapp.png',
        alt: 'Portafolio publico de software Asystec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portafolio de software en Costa Rica | Asystec',
    description:
      'Productos, plataformas y sitios publicos de Asystec para negocios que necesitan vender, facturar, cobrar y operar mejor.',
    images: ['/images/portfolio/cobrosapp.png'],
  },
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${absoluteUrl('/casos')}#collection`,
    name: 'Portafolio publico de software en Costa Rica',
    description:
      'Casos publicos y portafolio de Asystec para POS, facturacion electronica, cobros, talleres, catalogos, portales y plataformas web.',
    url: absoluteUrl('/casos'),
    inLanguage: 'es-CR',
    mainEntity: {
      '@id': `${absoluteUrl('/casos')}#item-list`,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${absoluteUrl('/casos')}#item-list`,
    name: 'Productos y plataformas publicas de Asystec',
    itemListElement: cases.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': item.href.startsWith('http') ? 'CreativeWork' : 'SoftwareApplication',
        name: item.name,
        description: item.summary,
        url: getSchemaUrl(item.href),
        image: absoluteUrl(item.image),
      },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${absoluteUrl('/casos')}#faq`,
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
    '@id': `${absoluteUrl('/casos')}#breadcrumb`,
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
        name: 'Casos y portafolio',
        item: absoluteUrl('/casos'),
      },
    ],
  },
];

const CaseLink = ({ href, label }: { href: string; label: string }) => {
  const className =
    'mt-5 inline-flex items-center justify-center rounded-md border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:border-emerald-600 hover:text-emerald-700 dark:border-neutral-700 dark:text-white dark:hover:border-emerald-300 dark:hover:text-emerald-300';

  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
};

const Page = () => (
  <>
    <JsonLd data={schemas} />
    <article className="bg-white text-neutral-950 dark:bg-slate-950 dark:text-white">
      <section className="border-b border-neutral-200 bg-neutral-50 py-14 dark:border-slate-800 dark:bg-slate-900 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
              Autoridad y evidencia publica
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-normal md:text-5xl">
              Portafolio de software para negocios en Costa Rica
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700 dark:text-slate-300">
              Asystec desarrolla productos, plataformas y sitios comerciales para negocios que necesitan vender,
              facturar, cobrar, administrar ordenes, controlar usuarios y convertir procesos manuales en sistemas
              operativos.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                data-analytics-event="cta_demo"
                data-analytics-label="Casos coordinar demo"
              >
                Coordinar demo
              </Link>
              <a
                href="https://wa.me/50689754741"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-emerald-600 hover:text-emerald-700 dark:border-neutral-700 dark:text-white dark:hover:border-emerald-300 dark:hover:text-emerald-300"
                data-analytics-event="cta_whatsapp"
                data-analytics-label="Casos WhatsApp"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          <aside className="border-l-4 border-emerald-600 bg-white p-6 shadow-sm dark:bg-slate-950">
            <h2 className="text-lg font-bold">Respuesta corta</h2>
            <p className="mt-3 text-base leading-8 text-neutral-700 dark:text-slate-300">
              Si buscas una empresa de software en Costa Rica, este portafolio permite revisar evidencia publica de
              productos y plataformas de Asystec antes de pedir una demo o cotizar un proyecto.
            </p>
          </aside>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Que puedes validar aqui</h2>
            <p className="mt-4 text-base leading-8 text-neutral-700 dark:text-slate-300">
              La pagina no reemplaza una demo, pero ayuda a filtrar si Asystec tiene experiencia visible en el tipo de
              sistema que tu negocio esta evaluando.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'Productos propios con paginas publicas.',
              'Portales web, login y backoffice para operaciones internas.',
              'Flujos de POS, facturacion, cobros, talleres y catalogos.',
              'Rutas claras a contacto, demo o revision de alcance.',
            ].map((item) => (
              <div key={item} className="rounded-md border border-neutral-200 px-4 py-3 dark:border-slate-800">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50 py-12 dark:border-slate-800 dark:bg-slate-900 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold md:text-3xl">Productos, plataformas y sitios publicos</h2>
            <p className="mt-3 text-base leading-8 text-neutral-700 dark:text-slate-300">
              Cada referencia enlaza a una pagina, producto o portal visible. No se incluyen metricas privadas,
              testimonios, clientes confidenciales ni resultados sin autorizacion.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cases.map((item) => (
              <article
                key={item.name}
                className="flex min-w-0 flex-col overflow-hidden rounded-md border border-neutral-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="relative aspect-[16/10] bg-neutral-100 dark:bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">{item.category}</p>
                  <h3 className="mt-2 text-2xl font-bold">{item.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-slate-300">{item.summary}</p>

                  <ul className="mt-5 space-y-2 text-sm leading-6 text-neutral-700 dark:text-slate-300">
                    {item.proofPoints.map((point) => (
                      <li key={point} className="border-l-2 border-emerald-600 pl-3">
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-md border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:border-slate-800 dark:text-slate-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <CaseLink href={item.href} label={item.ctaLabel} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold md:text-3xl">Como comparar tu proyecto con estos casos</h2>
            <p className="mt-3 text-base leading-8 text-neutral-700 dark:text-slate-300">
              Usa esta tabla para llegar a la demo con una referencia concreta, sin asumir que un caso publico cubre
              exactamente tu proceso.
            </p>
          </div>

          <div className="mt-7 overflow-x-auto rounded-md border border-neutral-200 dark:border-slate-800">
            <table className="min-w-full divide-y divide-neutral-200 text-left text-sm dark:divide-slate-800">
              <thead className="bg-neutral-100 text-xs uppercase tracking-wide text-neutral-600 dark:bg-slate-900 dark:text-slate-300">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Si tu negocio necesita
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Revisa primero
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Pregunta clave para la demo
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white dark:divide-slate-800 dark:bg-slate-950">
                {[
                  {
                    need: 'Caja, inventario y facturacion en un comercio',
                    reference: 'Asystec POS',
                    question: 'Cuantas cajas, usuarios, productos y reportes necesita operar sin hojas paralelas?',
                  },
                  {
                    need: 'Comprobantes, clientes, pagos y cotizaciones',
                    reference: 'FacturacionApp',
                    question: 'El foco es facturar y reportar, o tambien se necesita una caja POS completa?',
                  },
                  {
                    need: 'Credito, pagos, saldos y estados de cuenta',
                    reference: 'CobrosApp',
                    question: 'Como se registran pagos, saldos, comprobantes y seguimiento por cliente hoy?',
                  },
                  {
                    need: 'Ordenes de trabajo, estados y aprobaciones',
                    reference: 'TallerApp o Tecnicore',
                    question: 'Que roles participan desde recepcion hasta entrega y cobro?',
                  },
                  {
                    need: 'Sitio comercial, catalogo o portal a medida',
                    reference: 'Candock Costa Rica o JAS Admin',
                    question: 'Que informacion debe ser publica y que debe quedar detras de login?',
                  },
                ].map((row) => (
                  <tr key={row.need}>
                    <th scope="row" className="w-64 px-5 py-4 align-top font-semibold text-neutral-950 dark:text-white">
                      {row.need}
                    </th>
                    <td className="px-5 py-4 align-top leading-7 text-neutral-700 dark:text-slate-300">
                      {row.reference}
                    </td>
                    <td className="px-5 py-4 align-top leading-7 text-neutral-700 dark:text-slate-300">
                      {row.question}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50 py-12 dark:border-slate-800 dark:bg-slate-900 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-2">
          <section className="rounded-md border border-neutral-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-2xl font-bold">Siguiente paso comercial</h2>
            <p className="mt-3 text-base leading-8 text-neutral-700 dark:text-slate-300">
              En una demo se revisa el flujo actual, cantidad de usuarios, sucursales, datos, reportes e integraciones
              para decidir si conviene un producto existente o una plataforma a la medida.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
              >
                Coordinar demo
              </Link>
              <a
                href="https://wa.me/50689754741"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-emerald-600 hover:text-emerald-700 dark:border-neutral-700 dark:text-white dark:hover:border-emerald-300 dark:hover:text-emerald-300"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </section>

          <section className="rounded-md border border-neutral-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-2xl font-bold">Rutas relacionadas</h2>
            <p className="mt-3 text-base leading-8 text-neutral-700 dark:text-slate-300">
              Estas paginas ayudan a conectar el portafolio con una necesidad, industria o categoria de software.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md border border-neutral-200 px-4 py-3 text-sm font-semibold transition hover:border-emerald-600 hover:text-emerald-700 dark:border-slate-800 dark:hover:border-emerald-300 dark:hover:text-emerald-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-2xl font-bold md:text-3xl">Preguntas frecuentes</h2>
          <div className="mt-6 divide-y divide-neutral-200 rounded-md border border-neutral-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-950">
            {faqs.map((faq) => (
              <section key={faq.question} className="p-5">
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-700 dark:text-slate-300">{faq.answer}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </article>
  </>
);

export default Page;
