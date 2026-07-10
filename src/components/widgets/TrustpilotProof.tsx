import Link from 'next/link';
import { IconExternalLink, IconStarFilled, IconUserCheck } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';
import WidgetWrapper from '../common/WidgetWrapper';
import { trustpilotProfile, trustpilotReviews, trustpilotThemes } from '~/shared/data/trustpilot.data';

type TrustpilotProofVariant = 'home' | 'landing' | 'compact' | 'page';

type TrustpilotProofProps = {
  id?: string;
  variant?: TrustpilotProofVariant;
  hasBackground?: boolean;
  title?: string;
  subtitle?: string;
  reviewLimit?: number;
  showThemes?: boolean;
  containerClass?: string;
};

const variantDefaults: Record<
  TrustpilotProofVariant,
  {
    title: string;
    subtitle: string;
    reviewLimit: number;
    showThemes: boolean;
  }
> = {
  home: {
    title: 'Clientes que confían en Asystec y nos recomiendan',
    subtitle:
      'La confianza no se declara: se demuestra con experiencias reales de clientes que han usado nuestro soporte, facturación electrónica y acompañamiento operativo.',
    reviewLimit: 3,
    showThemes: true,
  },
  landing: {
    title: 'Confianza visible antes de coordinar una demo',
    subtitle: 'Clientes en Trustpilot destacan soporte, respuesta rápida, facturación electrónica y atención cercana.',
    reviewLimit: 3,
    showThemes: false,
  },
  compact: {
    title: 'Clientes que recomiendan Asystec',
    subtitle: 'Prueba social externa para validar soporte, confianza y acompañamiento antes de elegir software.',
    reviewLimit: 3,
    showThemes: false,
  },
  page: {
    title: 'Opiniones de clientes sobre Asystec',
    subtitle:
      'Estas reseñas públicas ayudan a nuevos visitantes a entender por qué otros negocios confían en Asystec para soporte, facturación y software empresarial.',
    reviewLimit: trustpilotReviews.length,
    showThemes: true,
  },
};

const profileStats = [
  { value: trustpilotProfile.score, label: 'valoración pública' },
  { value: `${trustpilotProfile.reviewCount}`, label: 'opiniones en Trustpilot' },
  { value: trustpilotProfile.fiveStarShare, label: 'de opiniones visibles son 5 estrellas' },
];

const RatingStars = ({ label }: { label: string }) => (
  <div className="flex items-center gap-1 text-emerald-500" role="img" aria-label={label}>
    {Array.from({ length: 5 }).map((_, index) => (
      <IconStarFilled key={`trustpilot-star-${index}`} className="h-4 w-4 shrink-0" aria-hidden="true" />
    ))}
  </div>
);

const TrustpilotSource = ({ className }: { className?: string }) => (
  <a
    href={trustpilotProfile.profileUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={twMerge(
      'inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-white px-3 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-400 hover:bg-emerald-50 dark:border-emerald-700 dark:bg-slate-950 dark:text-emerald-300 dark:hover:bg-emerald-950/40',
      className,
    )}
    data-analytics-event="cta_trustpilot"
    data-analytics-label="Ver perfil de Asystec en Trustpilot"
    data-analytics-location="trustpilot_proof"
    data-analytics-type="external"
  >
    Ver perfil en Trustpilot
    <IconExternalLink className="h-4 w-4" aria-hidden="true" />
  </a>
);

const ReviewCard = ({ review }: { review: (typeof trustpilotReviews)[number] }) => (
  <article className="flex h-full flex-col justify-between rounded-md border border-neutral-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
    <div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-neutral-950 dark:text-white">{review.topic}</h3>
          <p className="mt-1 text-sm text-neutral-500 dark:text-slate-400">
            {review.author} - {review.country} - {review.date}
          </p>
        </div>
        <RatingStars label={`${review.rating} de 5 estrellas en Trustpilot`} />
      </div>
      <blockquote className="mt-4 border-l-2 border-emerald-600 pl-3 text-sm font-semibold leading-7 text-neutral-900 dark:text-white">
        &quot;{review.excerpt}&quot;
      </blockquote>
      <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-slate-300">{review.summary}</p>
    </div>
    <div className="mt-5 flex flex-wrap gap-2">
      {review.tags.map((tag) => (
        <span
          key={`${review.author}-${tag}`}
          className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
        >
          {tag}
        </span>
      ))}
    </div>
  </article>
);

const TrustpilotProof = ({
  id,
  variant = 'home',
  hasBackground,
  title,
  subtitle,
  reviewLimit,
  showThemes,
  containerClass,
}: TrustpilotProofProps) => {
  const defaults = variantDefaults[variant];
  const resolvedReviewLimit = reviewLimit ?? defaults.reviewLimit;
  const resolvedShowThemes = showThemes ?? defaults.showThemes;
  const resolvedHasBackground = hasBackground ?? variant !== 'compact';
  const reviews = trustpilotReviews.slice(0, resolvedReviewLimit);

  return (
    <WidgetWrapper
      id={id ?? `trustpilot-proof-${variant}`}
      hasBackground={resolvedHasBackground}
      containerClass={twMerge(variant === 'compact' ? 'py-10 md:py-12 lg:py-14' : undefined, containerClass)}
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-white px-3 py-1.5 text-sm font-semibold text-emerald-800 dark:border-emerald-700 dark:bg-slate-950 dark:text-emerald-300">
            <IconUserCheck className="h-4 w-4" aria-hidden="true" />
            Reseñas públicas en Trustpilot
          </div>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-normal text-neutral-950 dark:text-white md:text-4xl">
            {title ?? defaults.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-neutral-700 dark:text-slate-300">
            {subtitle ?? defaults.subtitle}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {profileStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md border border-neutral-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950"
              >
                <p className="text-2xl font-bold text-neutral-950 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm leading-7 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100">
            <p className="font-semibold">
              {trustpilotProfile.scoreLabel} en {trustpilotProfile.category}
            </p>
            <p className="mt-1">{trustpilotProfile.disclosure}</p>
            <p className="mt-1 text-xs text-emerald-800 dark:text-emerald-300">
              Datos revisados el {trustpilotProfile.lastChecked}. {trustpilotProfile.profileClaimed}.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/opiniones"
              className="inline-flex items-center justify-center rounded-md bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
              data-analytics-event="cta_reviews"
              data-analytics-label="Ver opiniones de clientes"
              data-analytics-location="trustpilot_proof"
              data-analytics-type="internal"
            >
              Ver opiniones de clientes
            </Link>
            <TrustpilotSource />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {reviews.map((review) => (
            <ReviewCard key={`${review.author}-${review.date}`} review={review} />
          ))}
        </div>
      </div>

      {resolvedShowThemes && (
        <div className="mt-8 grid gap-4 md:grid-cols-3">
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
      )}
    </WidgetWrapper>
  );
};

export default TrustpilotProof;
