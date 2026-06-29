import type { Metadata } from 'next';
import PlatformPortfolio from '~/components/widgets/PlatformPortfolio';

const platformsTitle = 'Diseño y desarrollo de plataformas';
const platformsDescription =
  'Portafolio de plataformas web, portales operativos y productos SaaS desarrollados por Asystec para Costa Rica.';
const platformsImage = {
  url: '/images/portfolio/app-asystec-login.png',
  width: 1440,
  height: 1050,
  alt: 'Plataformas web y portales operativos desarrollados por Asystec',
};

export const metadata: Metadata = {
  title: platformsTitle,
  description: platformsDescription,
  alternates: {
    canonical: '/plataformas',
  },
  openGraph: {
    title: platformsTitle,
    description: platformsDescription,
    url: '/plataformas',
    images: [platformsImage],
  },
  twitter: {
    title: platformsTitle,
    description: platformsDescription,
    images: [platformsImage.url],
  },
};

const Page = () => {
  return <PlatformPortfolio headingLevel="h1" />;
};

export default Page;
