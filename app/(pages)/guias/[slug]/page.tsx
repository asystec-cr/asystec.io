import { notFound } from 'next/navigation';
import CommercialLanding from '~/components/seo/CommercialLanding';
import { getGuidePage, guidePages } from '~/shared/data/seo-landings.data';
import { buildPageMetadata } from '~/utils/seo';

type PageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = () => guidePages.map(({ slug }) => ({ slug }));

export const generateMetadata = ({ params }: PageProps) => {
  const page = getGuidePage(params.slug);

  if (!page) {
    return {};
  }

  return buildPageMetadata(page);
};

const Page = ({ params }: PageProps) => {
  const page = getGuidePage(params.slug);

  if (!page) {
    notFound();
  }

  return <CommercialLanding page={page} />;
};

export default Page;
