import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '~/components/seo/JsonLd';
import { absoluteUrl } from '~/utils/seo';

const cases = [
  {
    name: 'Candock Costa Rica',
    category: 'Sitio comercial y catalogo',
    href: 'https://candockcostarica.com/',
    summary: 'Presencia digital publica para catalogo, productos, cotizacion y contacto comercial en Costa Rica.',
  },
  {
    name: 'Tecnicore',
    category: 'Plataforma operativa para talleres',
    href: 'https://tecnicore.asysteccr.com/',
    summary: 'Plataforma publica de acceso para operaciones de taller, ordenes, usuarios y flujo administrativo.',
  },
  {
    name: 'CobrosApp',
    category: 'Credito y cobranza',
    href: '/cobrosapp',
    summary: 'Producto Asystec para administrar clientes, creditos, pagos, estados de cuenta y reportes.',
  },
  {
    name: 'FacturacionApp',
    category: 'Facturacion electronica',
    href: '/facturacionapp',
    summary: 'Producto Asystec para comprobantes electronicos, clientes, pagos, cotizaciones y reportes.',
  },
];

export const metadata: Metadata = {
  title: 'Casos y portafolio publico',
  description:
    'Portafolio publico de Asystec con productos, plataformas y sitios visibles. No se publican resenas, nombres privados ni metricas sin aprobacion.',
  alternates: {
    canonical: '/casos',
  },
  openGraph: {
    title: 'Casos y portafolio publico',
    description:
      'Productos y plataformas publicas de Asystec para software empresarial, POS, facturacion, cobros y operaciones.',
    url: '/casos',
  },
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${absoluteUrl('/casos')}#collection`,
  name: 'Casos y portafolio publico de Asystec',
  description:
    'Portafolio publico de Asystec. La pagina evita Review schema y metricas privadas cuando no existe evidencia aprobada.',
  url: absoluteUrl('/casos'),
};

const Page = () => (
  <>
    <JsonLd data={collectionSchema} />
    <main className="bg-white text-neutral-950 dark:bg-slate-950 dark:text-white">
      <section className="border-b border-neutral-200 bg-neutral-50 py-14 dark:border-slate-800 dark:bg-slate-900 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
            Autoridad y evidencia
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-normal md:text-5xl">Casos y portafolio publico</h1>
          <p className="mt-5 text-lg leading-8 text-neutral-700 dark:text-slate-300">
            Esta pagina reune productos y plataformas visibles de Asystec. Las resenas, nombres de clientes privados,
            resultados cuantitativos o citas comerciales solo deben publicarse cuando exista permiso confirmado.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-2 md:px-6">
          {cases.map((item) => {
            const isExternal = item.href.startsWith('http');

            return (
              <article key={item.name} className="rounded-md border border-neutral-200 p-6 dark:border-slate-800">
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">{item.category}</p>
                <h2 className="mt-2 text-2xl font-bold">{item.name}</h2>
                <p className="mt-3 text-base leading-8 text-neutral-700 dark:text-slate-300">{item.summary}</p>
                {isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-300"
                  >
                    Abrir sitio publico
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-300"
                  >
                    Ver pagina
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  </>
);

export default Page;
