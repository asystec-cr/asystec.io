import CommercialLanding from '~/components/seo/CommercialLanding';
import { inventoryDifferencesGuidePage } from '~/shared/data/guides/diferencias-inventario.data';
import { buildPageMetadata } from '~/utils/seo';

export const metadata = buildPageMetadata(inventoryDifferencesGuidePage);

const Page = () => <CommercialLanding page={inventoryDifferencesGuidePage} />;

export default Page;
