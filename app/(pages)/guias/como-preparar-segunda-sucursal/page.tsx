import CommercialLanding from '~/components/seo/CommercialLanding';
import { segundaSucursalGuidePage } from '~/shared/data/guides/segunda-sucursal.data';
import { buildPageMetadata } from '~/utils/seo';

export const metadata = buildPageMetadata(segundaSucursalGuidePage);

const Page = () => <CommercialLanding page={segundaSucursalGuidePage} />;

export default Page;
