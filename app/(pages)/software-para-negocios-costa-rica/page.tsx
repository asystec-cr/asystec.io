import CommercialLanding from '~/components/seo/CommercialLanding';
import { pillarPage } from '~/shared/data/seo-landings.data';
import { buildPageMetadata } from '~/utils/seo';

export const metadata = buildPageMetadata(pillarPage);

const Page = () => <CommercialLanding page={pillarPage} />;

export default Page;
