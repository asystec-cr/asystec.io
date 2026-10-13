import fs from 'fs';
import path from 'path';
import md from 'markdown-it';
import { buildPageMetadata } from '~/utils/seo';

export const metadata = buildPageMetadata({
  path: '/privacy',
  title: 'Política de Privacidad',
  seoTitle: 'Política de Privacidad | Asystec',
  description:
    'Consulta cómo Asystec recopila y trata datos personales en su sitio web, solicitudes comerciales, campañas y servicios, y cómo ejercer tus derechos.',
});

const Page = () => {
  const filePath = path.join(process.cwd(), 'src/content/privacy/privacy.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div
      className="prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
      dangerouslySetInnerHTML={{
        __html: md({
          html: true,
        }).render(fileContent),
      }}
    />
  );
};

export default Page;
