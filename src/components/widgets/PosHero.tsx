import PosImageCarousel from './PosImageCarousel';

const PosHero = () => {
  return (
    <section id="hero-pos-home" className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:pt-20">
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-sm lg:p-10 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-blue-300/35 blur-2xl dark:bg-blue-500/20" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-cyan-300/30 blur-2xl dark:bg-cyan-500/20" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-800 dark:border-blue-700 dark:bg-slate-800 dark:text-blue-300">
              Lanzamiento destacado • Asystec POS
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              El POS que mantiene tu negocio activo incluso sin internet
            </h1>
            <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg dark:text-slate-300">
              Sistema de escritorio para pymes en Costa Rica con facturación electrónica TRIBU/Hacienda, app móvil,
              seguridad y autoupdate.
            </p>

            <div className="mt-5 grid gap-2 text-sm text-gray-700 dark:text-slate-300 sm:grid-cols-2">
              <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                100% offline para operación diaria
              </p>
              <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                Alto rendimiento en caja e inventario
              </p>
              <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                Integración con TRIBU/Hacienda
              </p>
              <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                Soporte y mejora continua
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/asystec-pos"
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Conocer Asystec POS
              </a>
              <a
                href="https://asystec-apps.s3.us-east-2.amazonaws.com/updates/asystec-pos/latest/AsystecPOS-Setup.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50 dark:border-blue-700 dark:bg-transparent dark:text-blue-300 dark:hover:bg-blue-900/20"
              >
                Descargar Asystec POS
              </a>
            </div>
          </div>

          <div className="relative">
            <PosImageCarousel
              images={[
                { src: '/images/pos/pos0.jpeg', alt: 'Asystec POS en entorno de trabajo profesional' },
                { src: '/images/pos/pos1.jpeg', alt: 'Vista adicional de Asystec POS' },
                { src: '/images/pos/pos2.jpeg', alt: 'Módulo adicional de Asystec POS' },
              ]}
              heightClassName="h-[360px] sm:h-[430px]"
            />

            <div className="mt-3 grid grid-cols-3 rounded-xl border border-blue-100 bg-white/95 text-center dark:border-slate-700 dark:bg-slate-900/95">
              <div className="px-3 py-3">
                <p className="text-xl font-bold text-gray-900 dark:text-white">24/7</p>
                <p className="text-xs text-gray-500 dark:text-slate-400">Operación local</p>
              </div>
              <div className="border-x border-blue-100 px-3 py-3 dark:border-slate-700">
                <p className="text-xl font-bold text-gray-900 dark:text-white">CR</p>
                <p className="text-xs text-gray-500 dark:text-slate-400">Facturación al día</p>
              </div>
              <div className="px-3 py-3">
                <p className="text-xl font-bold text-gray-900 dark:text-white">Auto</p>
                <p className="text-xs text-gray-500 dark:text-slate-400">Update continuo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosHero;
