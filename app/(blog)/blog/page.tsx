import type { Metadata } from 'next';
import Link from 'next/link';

import { fetchPosts } from '~/utils/posts';

export const metadata: Metadata = {
  title: 'Blog de Asystec',
  description:
    'Artículos prácticos para operar comercios en Costa Rica: caja, inventario, facturación electrónica y cobros.',
  alternates: { canonical: '/blog' },
};

type BlogPost = { slug: string; title: string; description?: string; publishDate?: string };

export default async function Blog() {
  const posts = (await fetchPosts()) as BlogPost[];

  return (
    <section className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <header className="mb-10">
        <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">Blog de Asystec</h1>
        <p className="mt-4 max-w-2xl text-lg">
          Ideas y ejemplos para resolver tareas de caja, inventario, facturación y cobros en comercios de Costa Rica.
        </p>
      </header>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {posts.map(({ slug, title, description, publishDate }) => (
          <li key={slug} className="rounded-xl border border-gray-200 p-6 dark:border-slate-700">
            {publishDate && (
              <time dateTime={publishDate} className="text-sm">
                {publishDate}
              </time>
            )}
            <h2 className="mt-2 text-xl font-bold">
              <Link href={`/blog/${slug}`} className="underline-offset-4 hover:underline focus-visible:underline">
                {title}
              </Link>
            </h2>
            {description && <p className="mt-3">{description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
