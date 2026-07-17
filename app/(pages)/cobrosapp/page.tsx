import CommercialLanding from '~/components/seo/CommercialLanding';
import { getPortfolioPage } from '~/shared/data/seo-landings.data';
import { buildPageMetadata } from '~/utils/seo';

const page = getPortfolioPage('cobrosapp');

if (!page) {
  throw new Error('Cobros Pro landing data is missing.');
}

export const metadata = buildPageMetadata(page);

const Page = () => <CommercialLanding page={page} />;

export default Page;
