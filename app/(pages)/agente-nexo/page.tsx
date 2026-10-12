import type { Metadata } from 'next';
import JsonLd from '~/components/seo/JsonLd';
import NexoHero from '~/components/widgets/NexoHero';
import NexoUseCases from '~/components/nexo/NexoUseCases';
import NexoDetails from '~/components/nexo/NexoDetails';
import { NEXO_TITLE, NEXO_DESCRIPTION, nexoFaqs } from '~/shared/data/agente-nexo.data';
import styles from '~/components/nexo/Nexo.module.css';

const pageUrl = 'https://asystec.io/agente-nexo';
const socialImage = '/images/agente-nexo/og-agente-nexo.jpg';

export const metadata: Metadata = {
  title: { absolute: NEXO_TITLE },
  description: NEXO_DESCRIPTION,
  alternates: { canonical: '/agente-nexo' },
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    siteName: 'Asystec',
    title: NEXO_TITLE,
    description: NEXO_DESCRIPTION,
    url: pageUrl,
    images: [
      { url: socialImage, width: 1200, height: 630, alt: 'Agente Nexo: inteligencia artificial para su empresa, 24/7' },
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
  name: 'Agente Nexo',
  alternateName: 'Nexo Agent',
  description: NEXO_DESCRIPTION,
  serviceType: 'Automatización de tareas y procesos empresariales con inteligencia artificial',
  url: pageUrl,
  image: 'https://asystec.io' + socialImage,
  provider: { '@id': 'https://asystec.io/#organization' },
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: nexoFaqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://asystec.io' },
    { '@type': 'ListItem', position: 2, name: 'Agente Nexo', item: pageUrl },
  ],
};

export default function Page() {
  return (
    <div id="nexo-main" className={`${styles.theme} ${styles.landing}`} tabIndex={-1}>
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />
      <NexoHero />
      <NexoUseCases />
      <NexoDetails />
    </div>
  );
}
