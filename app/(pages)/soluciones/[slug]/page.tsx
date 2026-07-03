import { notFound } from 'next/navigation';
import CommercialLanding from '~/components/seo/CommercialLanding';
import { multiSucursalSolutionPage } from '~/shared/data/solutions/multi-sucursal.data';
import { getSolutionPage, solutionPages } from '~/shared/data/seo-landings.data';
import { buildPageMetadata } from '~/utils/seo';

type PageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = () => solutionPages.map(({ slug }) => ({ slug }));

const getPage = (slug: string) =>
  slug === multiSucursalSolutionPage.slug ? multiSucursalSolutionPage : getSolutionPage(slug);

export const generateMetadata = ({ params }: PageProps) => {
  const page = getPage(params.slug);

  if (!page) {
    return {};
  }

  return buildPageMetadata(page);
};

const Page = ({ params }: PageProps) => {
  const page = getPage(params.slug);

  if (!page) {
    notFound();
  }

  return <CommercialLanding page={page} />;
};

export default Page;
