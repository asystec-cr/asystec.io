import CommercialLanding from '~/components/seo/CommercialLanding';
import { restauranteProProductPage } from '~/shared/data/products/restaurante-pro.data';
import { buildPageMetadata } from '~/utils/seo';

export const metadata = buildPageMetadata(restauranteProProductPage);

const Page = () => <CommercialLanding page={restauranteProProductPage} />;

export default Page;
