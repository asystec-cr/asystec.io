import type { Metadata } from 'next';

import JsonLd from '~/components/seo/JsonLd';
import CallToAction from '~/components/widgets/CallToAction';
import FAQs4 from '~/components/widgets/FAQs4';
import Hero from '~/components/widgets/Hero';
import { callToActionFaqs, electronicBillingFaqItems, faqs4Faqs, heroFaqs } from '~/shared/data/pages/faqs.data';
import { absoluteUrl } from '~/utils/seo';

const faqsDescription =
  'Preguntas frecuentes sobre facturacion electronica en Costa Rica, POS, comprobantes, demos y soporte local de Asystec para pymes.';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes de facturacion electronica',
  description: faqsDescription,
  alternates: {
    canonical: '/faqs',
  },
  openGraph: {
    title: 'Preguntas frecuentes de facturacion electronica',
    description: faqsDescription,
    url: '/faqs',
  },
  twitter: {
    title: 'Preguntas frecuentes de facturacion electronica',
    description: faqsDescription,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${absoluteUrl('/faqs')}#faq`,
  mainEntity: electronicBillingFaqItems.map((faq) => ({
    '@type': 'Question',
    name: faq.title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.description,
    },
  })),
};

const Page = () => {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Hero {...heroFaqs} />
      <FAQs4 {...faqs4Faqs} />
      <CallToAction {...callToActionFaqs} />
    </>
  );
};

export default Page;
