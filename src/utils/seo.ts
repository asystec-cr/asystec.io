import type { Metadata } from 'next';
import { SITE } from '~/config.js';
import type { FaqItem, LandingPageData } from '~/shared/data/seo-landings.data';

const organizationId = `${SITE.origin}/#organization`;
const localBusinessId = `${SITE.origin}/#local-business`;

export const absoluteUrl = (path = '/') => new URL(path, SITE.origin).toString();

export const buildPageMetadata = (page: LandingPageData): Metadata => ({
  title: page.seoTitle,
  description: page.description,
  alternates: {
    canonical: page.path,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    siteName: SITE.name,
    title: page.seoTitle,
    description: page.description,
    url: page.path,
    images: page.image
      ? [
          {
            url: page.image,
            alt: page.title,
          },
        ]
      : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title: page.seoTitle,
    description: page.description,
    images: page.image ? [page.image] : undefined,
  },
});

export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: 'Asystec',
  url: SITE.origin,
  logo: absoluteUrl('/favicon.ico'),
  description: SITE.description,
  email: 'info@asystec.io',
  telephone: '+50689754741',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Torres Paseo Colon',
    addressLocality: 'San Jose',
    addressCountry: 'CR',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Costa Rica',
  },
  sameAs: [
    'https://x.com/asysteccr',
    'https://www.instagram.com/asystec/',
    'https://www.facebook.com/asysteccr',
    'https://github.com/asystec-cr',
  ],
});

export const buildLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': localBusinessId,
  name: 'Asystec',
  url: SITE.origin,
  image: absoluteUrl('/images/pos/pos0.jpeg'),
  telephone: '+50689754741',
  email: 'info@asystec.io',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Torres Paseo Colon',
    addressLocality: 'San Jose',
    addressCountry: 'CR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Costa Rica',
  },
  parentOrganization: {
    '@id': organizationId,
  },
});

const buildFaqSchema = (faqs: FaqItem[], page: LandingPageData) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${absoluteUrl(page.path)}#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

const buildBreadcrumbSchema = (page: LandingPageData) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${absoluteUrl(page.path)}#breadcrumb`,
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
      name: page.title,
      item: absoluteUrl(page.path),
    },
  ],
});

const buildCommercialSchema = (page: LandingPageData) => {
  if (page.schemaType === 'SoftwareApplication') {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      '@id': `${absoluteUrl(page.path)}#software`,
      name: page.title,
      description: page.description,
      url: page.externalUrl ?? absoluteUrl(page.path),
      applicationCategory: page.applicationCategory ?? 'BusinessApplication',
      operatingSystem: page.operatingSystem ?? 'Web',
      inLanguage: 'es-CR',
      image: page.image ? absoluteUrl(page.image) : undefined,
      provider: {
        '@id': organizationId,
      },
    };
  }

  if (page.schemaType === 'Article') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${absoluteUrl(page.path)}#article`,
      headline: page.title,
      description: page.description,
      inLanguage: 'es-CR',
      author: {
        '@id': organizationId,
      },
      publisher: {
        '@id': organizationId,
      },
      mainEntityOfPage: absoluteUrl(page.path),
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(page.path)}#service`,
    name: page.title,
    description: page.description,
    serviceType: page.title,
    areaServed: {
      '@type': 'Country',
      name: 'Costa Rica',
    },
    provider: {
      '@id': organizationId,
    },
    url: absoluteUrl(page.path),
  };
};

type LandingSchemaOptions = {
  faqs?: FaqItem[];
  includeFaq?: boolean;
};

export const buildLandingSchemas = (page: LandingPageData, options: LandingSchemaOptions = {}) => {
  const schemas: Array<Record<string, unknown>> = [buildCommercialSchema(page), buildBreadcrumbSchema(page)];
  const faqs = options.faqs ?? page.faqs;

  if (options.includeFaq !== false && faqs.length > 0) {
    schemas.push(buildFaqSchema(faqs, page));
  }

  return schemas;
};
