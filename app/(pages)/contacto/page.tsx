import type { Metadata } from 'next';

import Contact from '~/components/widgets/Contact';
import Features2 from '~/components/widgets/Features2';
import { features2Data } from '~/shared/data';


export const metadata: Metadata = {
  title: 'Contáctanos',
};

const Page = () => {
  return (
    <>
      <Contact />
      <Features2 {...features2Data} />
    </>
  );
};

export default Page;
