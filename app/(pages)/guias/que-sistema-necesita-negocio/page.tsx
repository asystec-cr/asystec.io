import CommercialLanding from '~/components/seo/CommercialLanding';
import { aperturaLocalGuidePage } from '~/shared/data/guides/apertura-local.data';
import { buildPageMetadata } from '~/utils/seo';

export const metadata = buildPageMetadata(aperturaLocalGuidePage);

const Page = () => <CommercialLanding page={aperturaLocalGuidePage} />;

export default Page;
