import JsonLd from '~/components/seo/JsonLd';
import CallToAction from '~/components/widgets/CallToAction';
import FAQs4 from '~/components/widgets/FAQs4';
import Hero from '~/components/widgets/Hero';
import { callToActionFaqs, electronicBillingFaqItems, faqs4Faqs, heroFaqs } from '~/shared/data/pages/faqs.data';
import { absoluteUrl, buildPageMetadata } from '~/utils/seo';

const seoPage = {
  path: '/faqs',
  title: 'Preguntas frecuentes de facturación electrónica',
  seoTitle: 'Preguntas frecuentes de facturación electrónica | Asystec',
  description:
    'Resuelve dudas sobre facturación electrónica en Costa Rica: comprobantes, configuración, Factura Pro, Asystec POS, demos y soporte para pymes.',
};

export const metadata = buildPageMetadata(seoPage);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${absoluteUrl('/faqs')}#faq`,
  url: absoluteUrl(seoPage.path),
  name: seoPage.seoTitle,
  description: seoPage.description,
  inLanguage: 'es-CR',
  isPartOf: { '@id': absoluteUrl('/#website') },
  publisher: { '@id': absoluteUrl('/#organization') },
  breadcrumb: { '@id': `${absoluteUrl(seoPage.path)}#breadcrumb` },
  mainEntity: electronicBillingFaqItems.map((faq) => ({
    '@type': 'Question',
    name: faq.title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.description,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${absoluteUrl(seoPage.path)}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl('/') },
    { '@type': 'ListItem', position: 2, name: seoPage.title, item: absoluteUrl(seoPage.path) },
  ],
};

const Page = () => {
  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema]} />
      <Hero {...heroFaqs} />
      <FAQs4 {...faqs4Faqs} />
      <CallToAction {...callToActionFaqs} />
    </>
  );
};

export default Page;
