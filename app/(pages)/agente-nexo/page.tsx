import type { Metadata } from 'next';
import JsonLd from '~/components/seo/JsonLd';
import NexoHero from '~/components/widgets/NexoHero';
import NexoUseCases from '~/components/nexo/NexoUseCases';
import NexoDetails from '~/components/nexo/NexoDetails';
import { NEXO_TITLE, NEXO_DESCRIPTION, nexoFaqs } from '~/shared/data/agente-nexo.data';
import styles from '~/components/nexo/Nexo.module.css';
import { absoluteUrl } from '~/utils/seo';

const pageUrl = absoluteUrl('/agente-nexo');
const socialImage = '/images/agente-nexo/og-agente-nexo.jpg';
const organizationId = absoluteUrl('/#organization');

export const metadata: Metadata = {
  title: { absolute: NEXO_TITLE },
  description: NEXO_DESCRIPTION,
  alternates: { canonical: '/agente-nexo' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    siteName: 'Asystec',
    title: NEXO_TITLE,
    description: NEXO_DESCRIPTION,
    url: pageUrl,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: 'Nexo de Asystec: inteligencia artificial para su empresa, 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: NEXO_TITLE,
    description: NEXO_DESCRIPTION,
    images: [socialImage],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': pageUrl + '#service',
  name: 'Nexo de Asystec',
  alternateName: ['Nexo', 'Agente Nexo'],
  description: NEXO_DESCRIPTION,
  serviceType: 'Automatización de tareas y procesos empresariales con inteligencia artificial',
  url: pageUrl,
  image: absoluteUrl(socialImage),
  provider: { '@id': organizationId },
  areaServed: { '@type': 'Country', name: 'Costa Rica' },
  mainEntityOfPage: { '@id': pageUrl + '#webpage' },
};
const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': pageUrl + '#webpage',
  url: pageUrl,
  name: NEXO_TITLE,
  description: NEXO_DESCRIPTION,
  inLanguage: 'es-CR',
  isPartOf: { '@id': absoluteUrl('/#website') },
  publisher: { '@id': organizationId },
  mainEntity: { '@id': serviceSchema['@id'] },
  breadcrumb: { '@id': pageUrl + '#breadcrumb' },
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': pageUrl + '#preguntas',
  isPartOf: { '@id': webpageSchema['@id'] },
  mainEntity: nexoFaqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': pageUrl + '#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://asystec.io' },
    { '@type': 'ListItem', position: 2, name: 'Nexo de Asystec', item: pageUrl },
  ],
};

export default function Page() {
  return (
    <div id="nexo-main" className={`${styles.theme} ${styles.landing}`} tabIndex={-1}>
      <JsonLd data={[webpageSchema, serviceSchema, faqSchema, breadcrumbSchema]} />
      <NexoHero />
      <NexoUseCases />
      <NexoDetails />
    </div>
  );
}
