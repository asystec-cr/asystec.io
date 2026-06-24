import type { Metadata } from 'next';

import Contact2 from '~/components/widgets/Contact2';
import Contact from '~/components/widgets/Contact';

import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero';
import { heroContact, contact2Contact, features2Contact } from '~/shared/data/pages/contact.data';
import { contactHome } from '~/shared/data/pages/home.data';

const contactDescription =
  'Contacta al equipo de Asystec en Costa Rica para soporte, demostraciones y asesoría sobre software empresarial, facturación electrónica y soluciones POS.';

export const metadata: Metadata = {
  title: 'Contacto',
  description: contactDescription,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contacto',
    description: contactDescription,
    url: '/contact',
  },
  twitter: {
    title: 'Contacto',
    description: contactDescription,
  },
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
