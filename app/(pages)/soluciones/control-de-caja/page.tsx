import CommercialLanding from '~/components/seo/CommercialLanding';
import { controlCajaSolutionPage } from '~/shared/data/solutions/control-caja.data';
import { buildPageMetadata } from '~/utils/seo';

export const metadata = buildPageMetadata(controlCajaSolutionPage);

const Page = () => <CommercialLanding page={controlCajaSolutionPage} />;

export default Page;
