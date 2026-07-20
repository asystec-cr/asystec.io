import CommercialLanding from '~/components/seo/CommercialLanding';
import { facturaProProductPage } from '~/shared/data/products/factura-pro.data';
import { buildPageMetadata } from '~/utils/seo';

export const metadata = buildPageMetadata(facturaProProductPage);

const Page = () => <CommercialLanding page={facturaProProductPage} />;

export default Page;
