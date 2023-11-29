import type { Metadata } from 'next';

import FAQs from '~/components/widgets/FAQs';
import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import Content from '~/components/widgets/Content';
import { featuresData3, hero2Data, content2Data, contentData, faqsData } from '~/shared/data';

export const metadata: Metadata = {
  title: `Servicios`,
};

const Page = () => {
  return (
    <>
      <Hero2 data={hero2Data} />
      <Content {...contentData} />
      <Content {...content2Data} />
      <Features4 {...featuresData3} />
      {/* <FAQs {...faqsData} /> */}
    </>
  );
};

export default Page;
