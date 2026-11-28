import { productDemoHref } from '~/shared/marketing/demo-contact.mjs';
import CommercialLanding from '~/components/seo/CommercialLanding';
import { getPortfolioPage } from '~/shared/data/seo-landings.data';
import { buildPageMetadata } from '~/utils/seo';

const page = getPortfolioPage('cobrosapp');

if (!page) {
  throw new Error('Cobros Pro landing data is missing.');
}

export const metadata = buildPageMetadata(page);

const demoHref = productDemoHref('cobros-pro');
const pageWithDemo = {
  ...page,
  primaryCta: { ...page.primaryCta, href: demoHref },
  finalCta: page.finalCta && { ...page.finalCta, primary: { ...page.finalCta.primary, href: demoHref } },
};

const Page = () => <CommercialLanding page={pageWithDemo} />;

export default Page;
