import Link from 'next/link';
import { restauranteProDownloadUrl } from '~/shared/data/products/restaurante-pro.data';

const RestauranteProHero = () => (
  <section id="restaurante-pro-home" className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:pt-20">
    <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-sm lg:p-10 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">Restaurante Pro de Asystec</p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Mesas, cocina y caja en el mismo flujo
      </h2>
      <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-slate-300">
        Organiza el servicio con comandas por estación, cocina KDS, división de cuenta y facturación electrónica. Opera
        localmente y conecta al equipo dentro de la red de tu restaurante.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href="/restaurante-pro"
          className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Conocer Restaurante Pro
        </Link>
        <a
          href={restauranteProDownloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50 dark:border-blue-700 dark:bg-transparent dark:text-blue-300 dark:hover:bg-blue-900/20"
          data-analytics-event="download_installer"
          data-analytics-label="Descargar Restaurante Pro"
          data-analytics-location="home"
        >
          Descargar Restaurante Pro
        </a>
      </div>
      <p className="mt-3 text-sm text-gray-600 dark:text-slate-400">Disponible para Windows de 64 bits.</p>
    </div>
  </section>
);

export default RestauranteProHero;
