import type { Metadata } from 'next';
import JsonLd from '~/components/seo/JsonLd';
import { trustpilotProfile } from '~/shared/data/trustpilot.data';
import { absoluteUrl } from '~/utils/seo';

const pagePath = '/opiniones';
const title = 'Opiniones de clientes sobre Asystec';
const description =
  'Consulta las opiniones de clientes de Asystec en su perfil público y coordina una demo para conocer nuestras soluciones.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    siteName: 'Asystec',
    title,
    description,
    url: pagePath,
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${absoluteUrl(pagePath)}#webpage`,
  name: title,
  description,
  url: absoluteUrl(pagePath),
  inLanguage: 'es-CR',
  about: {
    '@id': `${absoluteUrl('/')}#organization`,
  },
  sameAs: trustpilotProfile.profileUrl,
};

const Page = () => (
  <>
    <JsonLd data={pageSchema} />
    <article className="bg-white text-neutral-950 dark:bg-slate-950 dark:text-white">
      <section className="border-b border-neutral-200 bg-neutral-50 py-14 dark:border-slate-800 dark:bg-slate-900 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
            Opiniones de clientes
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-normal text-neutral-950 dark:text-white md:text-5xl">
            Conoce las experiencias de clientes de Asystec
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700 dark:text-slate-300">
            Visita nuestro perfil público para leer las opiniones de clientes. Si quieres conocer cómo nuestras
            soluciones pueden ayudar a tu negocio, coordina una demo con nuestro equipo.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
              data-analytics-event="cta_demo"
              data-analytics-label="Opiniones solicitar demo"
            >
              Coordinar demo
            </a>
            <a
              href={trustpilotProfile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 underline underline-offset-4 hover:text-neutral-950 dark:text-slate-300 dark:hover:text-white"
              data-analytics-event="cta_trustpilot"
              data-analytics-label="Opiniones ver Trustpilot"
              data-analytics-location="opiniones"
              data-analytics-type="external"
            >
              Consulta las opiniones de Asystec en Trustpilot
            </a>
          </div>
        </div>
      </section>
    </article>
  </>
);

export default Page;
