import { notFound } from 'next/navigation';
import CommercialLanding from '~/components/seo/CommercialLanding';
import { restaurantesIndustryPage } from '~/shared/data/industries/restaurantes.data';
import { retailIndustryPage } from '~/shared/data/industries/retail.data';
import { salonesBellezaIndustryPage } from '~/shared/data/industries/salones-belleza.data';
import { serviciosProfesionalesIndustryPage } from '~/shared/data/industries/servicios-profesionales.data';
import { getIndustryPage, industryPages } from '~/shared/data/seo-landings.data';
import { buildPageMetadata } from '~/utils/seo';

type PageProps = {
  params: {
    slug: string;
  };
};

const dedicatedIndustryPages = [
  restaurantesIndustryPage,
  retailIndustryPage,
  salonesBellezaIndustryPage,
  serviciosProfesionalesIndustryPage,
];

const getPage = (slug: string) => dedicatedIndustryPages.find((page) => page.slug === slug) ?? getIndustryPage(slug);

export const generateStaticParams = () => industryPages.map(({ slug }) => ({ slug }));

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
