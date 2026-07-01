import JsonLd from '~/components/seo/JsonLd';
import PlatformPortfolio from '~/components/widgets/PlatformPortfolio';
import { getPortfolioPage } from '~/shared/data/seo-landings.data';
import { buildLandingSchemas, buildPageMetadata } from '~/utils/seo';

const seoPage = getPortfolioPage('plataformas');

if (!seoPage) {
  throw new Error('Plataformas landing data is missing.');
}

export const metadata = buildPageMetadata(seoPage);

const Page = () => {
  return (
    <>
      <JsonLd data={buildLandingSchemas(seoPage, { includeFaq: false })} />
      <PlatformPortfolio headingLevel="h1" />
    </>
  );
};

export default Page;
