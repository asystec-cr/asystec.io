import type { Metadata } from 'next';

import Contact2 from '~/components/widgets/Contact2';
import Contact from '~/components/widgets/Contact';

import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero';
import { heroContact, contact2Contact, features2Contact } from '~/shared/data/pages/contact.data';
import { contactHome } from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: 'Contacto',
};

const Page = () => {
  return (
    <>
      {/* <Hero {...heroContact} /> */}
      <Contact {...contactHome} />
      <Features2 {...features2Contact} />
    </>
  );
};

export default Page;
