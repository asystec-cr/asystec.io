import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';
import JsonLd from '~/components/seo/JsonLd';
import { buildLocalBusinessSchema, buildOrganizationSchema } from '~/utils/seo';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });
const verification: Metadata['verification'] = {};
const otherVerification: Record<string, string> = {};

if (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION) {
  verification.google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
}

if (process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION) {
  otherVerification['msvalidate.01'] = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
}

if (Object.keys(otherVerification).length > 0) {
  verification.other = otherVerification;
}

const socialImage = {
  url: '/images/pos/pos0.jpeg',
  width: 1417,
  height: 897,
  alt: 'Asystec POS para pymes en Costa Rica',
};

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  applicationName: SITE.name,
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: [socialImage.url],
  },
  ...(Object.keys(verification).length > 0 ? { verification } : {}),
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-4933416531249437"></meta>
        <JsonLd data={[buildOrganizationSchema(), buildLocalBusinessSchema()]} />
        <script
          src="https://cobros.asystec.io/widget/cobros-chat.js"
          data-cobros-widget="pk_B8rn2jbyOZKHowj8wXz4dBDLQT1vwvzAeIUK7w3w"
          async
        ></script>
      </head>

      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300 dark:bg-slate-900">
        <Providers>
          <Announcement />
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
