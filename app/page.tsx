import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import PosHero from '~/components/widgets/PosHero';
import NexoHero from '~/components/widgets/NexoHero';
import JsonLd from '~/components/seo/JsonLd';
import { absoluteUrl, buildPageMetadata } from '~/utils/seo';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import PlatformPortfolio from '~/components/widgets/PlatformPortfolio';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,
  featuresHome,
  pricingHome,
  socialProofHome,
  stepsHome,
  teamHome,
  testimonialsHome,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = buildPageMetadata({
  path: '/',
  title: SITE.name,
  seoTitle: SITE.title,
  description: SITE.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': absoluteUrl('/#webpage'),
          url: absoluteUrl('/'),
          name: SITE.title,
          description: SITE.description,
          inLanguage: 'es-CR',
          isPartOf: { '@id': absoluteUrl('/#website') },
          about: { '@id': absoluteUrl('/#organization') },
          publisher: { '@id': absoluteUrl('/#organization') },
        }}
      />
      <NexoHero variant="home" />
      <div className="mt-6 md:mt-8 lg:mt-10">
        <SocialProof {...socialProofHome} />
      </div>
      <Features {...featuresHome} />
      <PlatformPortfolio portfolioHref="/plataformas#portfolio-cases" />
      <div className="mt-10">
        <PosHero />
      </div>
      {/* <Content {...contentHomeOne} /> */}
      {/* <Content {...contentHomeTwo} /> */}
      {/* <Steps {...stepsHome} /> */}
      {/* <Testimonials {...testimonialsHome} /> */}
      {/* <FAQs2 {...faqs2Home} /> */}
      {/* <Pricing {...pricingHome} /> */}
      <Team {...teamHome} />
      <Contact {...contactHome} />
      <CallToAction2 {...callToAction2Home} />
    </>
  );
}
