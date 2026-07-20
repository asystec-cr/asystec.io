import CommercialLanding from '~/components/seo/CommercialLanding';
import PlatformPortfolio from '~/components/widgets/PlatformPortfolio';
import { getPortfolioPage } from '~/shared/data/seo-landings.data';
import { buildPageMetadata } from '~/utils/seo';

const seoPage = getPortfolioPage('plataformas');

if (!seoPage) {
  throw new Error('Plataformas landing data is missing.');
}

export const metadata = buildPageMetadata(seoPage);

const Page = () => {
  return (
    <>
      <CommercialLanding page={seoPage} />
      <PlatformPortfolio headingLevel="h2" />
    </>
  );
};

export default Page;
