import type { Metadata } from 'next';
import PlatformPortfolio from '~/components/widgets/PlatformPortfolio';

export const metadata: Metadata = {
  title: 'Diseño y desarrollo de plataformas',
  description:
    'Portafolio de plataformas web, portales operativos y productos SaaS desarrollados por Asystec para Costa Rica.',
};

const Page = () => {
  return <PlatformPortfolio headingLevel="h1" />;
};

export default Page;
