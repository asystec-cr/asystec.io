import type { Metadata } from 'next';
import JsonLd from '~/components/seo/JsonLd';
import TrustpilotProof from '~/components/widgets/TrustpilotProof';
import { trustpilotProfile, trustpilotThemes } from '~/shared/data/trustpilot.data';
import { absoluteUrl } from '~/utils/seo';

const pagePath = '/opiniones';
const title = 'Opiniones de clientes sobre Asystec';
const description =
  'Resenas publicas de clientes sobre Asystec, soporte, facturacion electronica, acompanamiento y software para negocios en Costa Rica.';

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
  '@type': 'CollectionPage',
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
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
              Fuente publica de opiniones
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-normal text-neutral-950 dark:text-white md:text-5xl">
              Clientes que confian en Asystec y recomiendan nuestro trabajo
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700 dark:text-slate-300">
              Esta pagina reune resenas publicas y resumenes de experiencias de clientes que valoran el soporte,
              facturacion electronica, acompanamiento y mejora continua de Asystec.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
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
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-emerald-600 hover:text-emerald-700 dark:border-neutral-700 dark:text-white dark:hover:border-emerald-300 dark:hover:text-emerald-300"
                data-analytics-event="cta_trustpilot"
                data-analytics-label="Opiniones ver Trustpilot"
              >
                Ver perfil original
              </a>
            </div>
          </div>

          <aside className="rounded-md border border-emerald-200 bg-white p-6 shadow-sm dark:border-emerald-800 dark:bg-slate-950">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
              Trustpilot
            </p>
            <p className="mt-3 text-5xl font-bold text-neutral-950 dark:text-white">{trustpilotProfile.score}</p>
            <p className="mt-2 text-lg font-semibold text-neutral-900 dark:text-white">
              {trustpilotProfile.scoreLabel}
            </p>
            <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-slate-300">
              {trustpilotProfile.reviewCount} opiniones publicas, {trustpilotProfile.fiveStarShare} de 5 estrellas
              visibles y perfil reclamado por la empresa.
            </p>
            <p className="mt-4 text-xs leading-6 text-neutral-500 dark:text-slate-400">
              Datos revisados el {trustpilotProfile.lastChecked}. Las resenas pueden cambiar en el perfil original.
            </p>
          </aside>
        </div>
      </section>

      <TrustpilotProof variant="page" id="opiniones-clientes" hasBackground={false} showThemes={false} />

      <section className="border-t border-neutral-200 bg-neutral-50 py-12 dark:border-slate-800 dark:bg-slate-900 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Que puede validar un visitante nuevo</h2>
              <p className="mt-4 text-base leading-8 text-neutral-700 dark:text-slate-300">
                Las opiniones no reemplazan una demo, pero si ayudan a confirmar que otros clientes han recibido
                soporte, acompanamiento y soluciones utiles para operar mejor.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {trustpilotThemes.map((theme) => (
                <section
                  key={theme.title}
                  className="rounded-md border border-neutral-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"
                >
                  <h3 className="text-lg font-bold text-neutral-950 dark:text-white">{theme.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-700 dark:text-slate-300">{theme.body}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  </>
);

export default Page;
