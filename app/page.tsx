import type { Metadata } from 'next';
import Link from 'next/link';

import { SITE } from '~/config.js';

import PosHero from '~/components/widgets/PosHero';
import RestauranteProHero from '~/components/widgets/RestauranteProHero';
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

const businessNeeds = [
  { title: 'Vender en caja', description: 'Explorá cómo manejar ventas, inventario y cierre de caja.', href: '/asystec-pos' },
  { title: 'Facturar', description: 'Conocé Factura Pro para emitir comprobantes electrónicos.', href: '/facturacionapp' },
  { title: 'Cobrar', description: 'Conocé Cobros Pro para dar seguimiento a cuentas por cobrar.', href: '/cobrosapp' },
  { title: 'Gestionar varias empresas', description: 'Revisá qué validar cuando facturás para más de una empresa.', href: '/blog/facturacion-electronica-varias-empresas' },
] as const;

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
      <section aria-labelledby="necesidades-negocio" className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="necesidades-negocio" className="text-2xl font-bold text-slate-900 dark:text-white">
          ¿Qué necesitás resolver en tu negocio?
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {businessNeeds.map(({ title, description, href }) => (
            <li key={href} className="flex">
              <Link
                href={href}
                className="block w-full rounded-xl border border-slate-300 bg-white p-4 transition hover:border-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:hover:border-blue-400"
              >
                <span className="block font-semibold text-blue-800 dark:text-blue-300">{title}</span>
                <span className="mt-1 block text-sm text-slate-700 dark:text-slate-200">{description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-6 md:mt-8 lg:mt-10">
        <SocialProof {...socialProofHome} />
      </div>
      <Features {...featuresHome} />
      <PlatformPortfolio portfolioHref="/plataformas#portfolio-cases" />
      <div className="mt-10">
        <PosHero />
        <RestauranteProHero />
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
