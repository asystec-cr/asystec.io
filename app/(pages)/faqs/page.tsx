import type { Metadata } from 'next';

import CallToAction from '~/components/widgets/CallToAction';
import FAQs4 from '~/components/widgets/FAQs4';
import { heroFaqs, callToActionFaqs, faqs4Faqs } from '~/shared/data/pages/faqs.data';
import Hero from '~/components/widgets/Hero';

const faqsDescription =
  'Resuelve dudas frecuentes sobre facturación electrónica, comprobantes digitales y soporte de Asystec para empresas en Costa Rica.';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes',
  description: faqsDescription,
  alternates: {
    canonical: '/faqs',
  },
  openGraph: {
    title: 'Preguntas frecuentes',
    description: faqsDescription,
    url: '/faqs',
  },
  twitter: {
    title: 'Preguntas frecuentes',
    description: faqsDescription,
  },
};

const Page = () => {
  return (
    <>
      <Hero {...heroFaqs} />
      <FAQs4 {...faqs4Faqs} />
      <CallToAction {...callToActionFaqs} />
    </>
  );
};

export default Page;
