import Link from 'next/link';
import type { LandingPageData } from '~/shared/data/seo-landings.data';
import { trustpilotProfile } from '~/shared/data/trustpilot.data';
import { buildLandingSchemas } from '~/utils/seo';
import JsonLd from './JsonLd';
import PosImageCarousel from '../widgets/PosImageCarousel';
import TrustpilotProof from '../widgets/TrustpilotProof';

type CommercialLandingProps = {
  page: LandingPageData;
};

const getEventName = (href: string) => {
  if (href.includes('wa.me')) return 'cta_whatsapp';
  if (href.includes('/contact')) return 'cta_demo';
  return 'cta_navigation';
};

const LandingLink = ({
  href,
  label,
  variant = 'primary',
  location = 'content',
  analyticsType,
}: {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
  location?: string;
  analyticsType?: string;
}) => {
  const isExternal = href.startsWith('http');
  const resolvedAnalyticsType = analyticsType ?? variant;
  const className =
    variant === 'primary'
      ? 'inline-flex w-full items-center justify-center rounded-md bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 sm:w-auto dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200'
      : 'inline-flex w-full items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-emerald-600 hover:text-emerald-700 sm:w-auto dark:border-neutral-700 dark:text-white dark:hover:border-emerald-300 dark:hover:text-emerald-300';

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        data-analytics-event={getEventName(href)}
        data-analytics-label={label}
        data-analytics-location={location}
        data-analytics-type={resolvedAnalyticsType}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      className={className}
      href={href}
      data-analytics-event={getEventName(href)}
      data-analytics-label={label}
      data-analytics-location={location}
      data-analytics-type={resolvedAnalyticsType}
    >
      {label}
    </Link>
  );
};

const CommercialLanding = ({ page }: CommercialLandingProps) => {
  return (
    <>
      <JsonLd data={buildLandingSchemas(page)} />
      <article className="bg-white text-neutral-950 dark:bg-slate-950 dark:text-white">
        <section className="border-b border-neutral-200 bg-neutral-50 py-14 dark:border-slate-800 dark:bg-slate-900 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                {page.eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-normal text-neutral-950 sm:text-4xl md:text-5xl dark:text-white">
                {page.heroTitle}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700 dark:text-slate-300">{page.intro}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <LandingLink {...page.primaryCta} location="hero" />
                {page.secondaryCta && <LandingLink {...page.secondaryCta} variant="secondary" location="hero" />}
              </div>
              {page.heroNote && (
                <p className="mt-4 text-sm font-medium leading-6 text-neutral-600 dark:text-slate-400">
                  {page.heroNote}
                </p>
              )}
            </div>

            {page.heroImages?.length ? (
              <div>
                <PosImageCarousel
                  images={page.heroImages}
                  heightClassName="h-[260px] sm:h-[360px]"
                  showThumbnails={false}
                />
              </div>
            ) : (
              <aside className="border-l-4 border-emerald-600 bg-white p-6 shadow-sm dark:bg-slate-950">
                <h2 className="text-lg font-bold">Respuesta corta</h2>
                <p className="mt-3 text-base leading-8 text-neutral-700 dark:text-slate-300">{page.answer}</p>
              </aside>
            )}
          </div>
        </section>

        {page.showTrustpilotStrip && (
          <section
            className="border-b border-neutral-200 bg-white py-5 dark:border-slate-800 dark:bg-slate-950"
            aria-label="Confianza y opiniones de clientes"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-neutral-700 sm:flex-row sm:items-center sm:justify-between md:px-6 dark:text-slate-300">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <p>
                  <strong className="text-neutral-950 dark:text-white">{trustpilotProfile.score}</strong> en Trustpilot
                </p>
                <p>{trustpilotProfile.reviewCount} opiniones públicas</p>
                <p>Soporte local en Costa Rica</p>
              </div>
              <a
                href={trustpilotProfile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300"
                data-analytics-event="cta_trustpilot"
                data-analytics-label="Ver opiniones públicas en Trustpilot"
                data-analytics-location="trust_strip"
                data-analytics-type="external"
              >
                Ver perfil público
              </a>
            </div>
          </section>
        )}

        <section className="py-12 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">{page.modulesTitle ?? 'Lo que cubre'}</h2>
              <p className="mt-4 text-base leading-8 text-neutral-700 dark:text-slate-300">
                {page.modulesIntro ??
                  'Estos son los módulos y procesos principales que conviene revisar para confirmar si la solución encaja con tu operación.'}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {page.modules.map((module) => (
                <div key={module} className="rounded-md border border-neutral-200 px-4 py-3 dark:border-slate-800">
                  <p className="font-semibold">{module}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-neutral-50 py-12 dark:border-slate-800 dark:bg-slate-900 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-2xl font-bold md:text-3xl">{page.highlightsTitle ?? 'Puntos clave'}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {page.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-md border border-neutral-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950"
                >
                  <p className="text-sm leading-6 text-neutral-700 dark:text-slate-300">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-2">
            {page.sections.map((section) => (
              <section key={section.title} className="rounded-md border border-neutral-200 p-6 dark:border-slate-800">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <p className="mt-3 text-base leading-8 text-neutral-700 dark:text-slate-300">{section.body}</p>
                {section.items && (
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-neutral-700 dark:text-slate-300">
                    {section.items.map((item) => (
                      <li key={item} className="border-l-2 border-emerald-600 pl-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </section>

        {page.decisionTable && (
          <section className="border-y border-neutral-200 bg-neutral-50 py-12 dark:border-slate-800 dark:bg-slate-900 md:py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold md:text-3xl">{page.decisionTable.title}</h2>
                <p className="mt-3 text-base leading-8 text-neutral-700 dark:text-slate-300">
                  {page.decisionTable.body}
                </p>
              </div>
              <div className="mt-7 overflow-x-auto rounded-md border border-neutral-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                <table className="min-w-full divide-y divide-neutral-200 text-left text-sm dark:divide-slate-800">
                  <thead className="bg-neutral-100 text-xs uppercase tracking-wide text-neutral-600 dark:bg-slate-900 dark:text-slate-300">
                    <tr>
                      <th scope="col" className="px-5 py-4 font-semibold">
                        {page.decisionTable.headers?.factor ?? 'Factor'}
                      </th>
                      <th scope="col" className="px-5 py-4 font-semibold">
                        {page.decisionTable.headers?.question ?? 'Pregunta para la demo'}
                      </th>
                      <th scope="col" className="px-5 py-4 font-semibold">
                        {page.decisionTable.headers?.impact ?? 'Por qué afecta el alcance'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 dark:divide-slate-800">
                    {page.decisionTable.rows.map((row) => (
                      <tr key={row.factor}>
                        <th
                          scope="row"
                          className="w-56 px-5 py-4 align-top font-semibold text-neutral-950 dark:text-white"
                        >
                          {row.factor}
                        </th>
                        <td className="px-5 py-4 align-top leading-7 text-neutral-700 dark:text-slate-300">
                          {row.question}
                        </td>
                        <td className="px-5 py-4 align-top leading-7 text-neutral-700 dark:text-slate-300">
                          {row.impact}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        <TrustpilotProof variant="landing" id={`trustpilot-proof-${page.slug}`} />

        <section className="border-b border-neutral-200 bg-neutral-50 py-12 dark:border-slate-800 dark:bg-slate-900 md:py-16">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="text-2xl font-bold md:text-3xl">Preguntas frecuentes</h2>
            <div className="mt-6 divide-y divide-neutral-200 rounded-md border border-neutral-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-950">
              {page.faqs.map((faq) => (
                <section key={faq.question} className="p-5">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-700 dark:text-slate-300">{faq.answer}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">{page.relatedTitle ?? 'Siguientes páginas útiles'}</h2>
                <p className="mt-3 max-w-2xl text-base leading-8 text-neutral-700 dark:text-slate-300">
                  {page.relatedIntro ??
                    'Estas rutas ayudan a comparar el contexto, la industria o la solución relacionada.'}
                </p>
              </div>
              <LandingLink {...page.primaryCta} location="related_pages" />
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {page.related.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md border border-neutral-200 px-4 py-4 text-sm font-semibold transition hover:border-emerald-600 hover:text-emerald-700 dark:border-slate-800 dark:hover:border-emerald-300 dark:hover:text-emerald-300"
                  data-analytics-event="cta_navigation"
                  data-analytics-label={link.label}
                  data-analytics-location="related_pages"
                  data-analytics-type="card"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {page.finalCta && (
          <section className="border-t border-emerald-200 bg-emerald-50 py-12 text-neutral-950 dark:border-emerald-900 dark:bg-emerald-950 dark:text-white md:py-16">
            <div className="mx-auto flex max-w-5xl flex-col gap-7 px-4 md:flex-row md:items-center md:justify-between md:px-6">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">{page.finalCta.title}</h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-emerald-950 dark:text-emerald-100">
                  {page.finalCta.body}
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                <LandingLink {...page.finalCta.primary} location="final_cta" />
                {page.finalCta.secondary && (
                  <LandingLink {...page.finalCta.secondary} variant="secondary" location="final_cta" />
                )}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
};

export default CommercialLanding;
