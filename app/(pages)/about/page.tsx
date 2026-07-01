import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '~/components/seo/JsonLd';
import { absoluteUrl } from '~/utils/seo';

export const metadata: Metadata = {
  title: 'Sobre Asystec',
  description:
    'Conoce Asystec: empresa de software en Costa Rica enfocada en POS, facturacion electronica, cobros, inventario, reportes, CRM, plataformas e integraciones.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Sobre Asystec',
    description:
      'Empresa de software en Costa Rica para pymes, comercios y equipos que necesitan vender, facturar, cobrar y operar con mas control.',
    url: '/about',
  },
};

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${absoluteUrl('/about')}#profile`,
  name: 'Sobre Asystec',
  url: absoluteUrl('/about'),
  mainEntity: {
    '@type': 'Organization',
    '@id': `${absoluteUrl('/')}#organization`,
    name: 'Asystec',
    url: absoluteUrl('/'),
    email: 'info@asystec.io',
    telephone: '+50689754741',
    areaServed: {
      '@type': 'Country',
      name: 'Costa Rica',
    },
  },
};

const products = [
  { label: 'Asystec POS', href: '/asystec-pos' },
  { label: 'FitPro', href: '/fitpro' },
  { label: 'CobrosApp', href: '/cobrosapp' },
  { label: 'FacturacionApp', href: '/facturacionapp' },
  { label: 'TallerApp', href: '/tallerapp' },
  { label: 'Plataformas a medida', href: '/plataformas' },
];

const capabilities = [
  'Punto de venta y caja',
  'Facturacion electronica',
  'Inventario y productos',
  'Cuentas por cobrar',
  'Reportes operativos',
  'CRM y seguimiento',
  'Multi-sucursal',
  'Integraciones',
];

const Page = () => (
  <>
    <JsonLd data={profileSchema} />
    <main className="bg-white text-neutral-950 dark:bg-slate-950 dark:text-white">
      <section className="border-b border-neutral-200 bg-neutral-50 py-14 dark:border-slate-800 dark:bg-slate-900 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
            Fuente de informacion
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-normal md:text-5xl">Sobre Asystec</h1>
          <p className="mt-5 text-lg leading-8 text-neutral-700 dark:text-slate-300">
            Asystec es una empresa de software en Costa Rica enfocada en ayudar a pymes, comercios y equipos operativos
            a vender, facturar, cobrar, controlar inventario, revisar reportes y digitalizar procesos.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Que hace Asystec</h2>
            <p className="mt-4 text-base leading-8 text-neutral-700 dark:text-slate-300">
              El portafolio combina productos propios y desarrollo de plataformas a medida. La prioridad es resolver
              procesos reales: caja, ventas, facturacion, cobros, usuarios, reportes, sucursales e integraciones.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/software-para-negocios-costa-rica"
                className="inline-flex items-center justify-center rounded-md bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
              >
                Ver soluciones
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-emerald-600 hover:text-emerald-700 dark:border-neutral-700 dark:text-white dark:hover:border-emerald-300 dark:hover:text-emerald-300"
              >
                Contactar
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div key={capability} className="rounded-md border border-neutral-200 p-4 dark:border-slate-800">
                <p className="font-semibold">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50 py-12 dark:border-slate-800 dark:bg-slate-900 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-2xl font-bold md:text-3xl">Productos y servicios publicos</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="rounded-md border border-neutral-200 bg-white px-4 py-4 text-sm font-semibold transition hover:border-emerald-600 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-300 dark:hover:text-emerald-300"
              >
                {product.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-3">
          <article className="rounded-md border border-neutral-200 p-6 dark:border-slate-800">
            <h2 className="text-xl font-bold">Cobertura</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-slate-300">
              Asystec atiende negocios en Costa Rica con soporte local y conocimiento del contexto operativo y fiscal.
            </p>
          </article>
          <article className="rounded-md border border-neutral-200 p-6 dark:border-slate-800">
            <h2 className="text-xl font-bold">Contacto</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-slate-300">
              Correo: info@asystec.io. Telefono y WhatsApp: +506 8975-4741. Ubicacion: San Jose, Costa Rica.
            </p>
          </article>
          <article className="rounded-md border border-neutral-200 p-6 dark:border-slate-800">
            <h2 className="text-xl font-bold">Evidencia publica</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-slate-300">
              Las plataformas y casos publicos se documentan sin publicar metricas privadas, resenas o nombres no
              aprobados.
            </p>
          </article>
        </div>
      </section>
    </main>
  </>
);

export default Page;
