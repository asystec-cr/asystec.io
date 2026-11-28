import Image from 'next/image';
import Link from 'next/link';

const PosHero = () => {
  return (
    <section id="hero-pos-home" className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:pt-20">
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-sm lg:p-10 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-blue-300/35 blur-2xl dark:bg-blue-500/20" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-cyan-300/30 blur-2xl dark:bg-cyan-500/20" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-800 dark:border-blue-700 dark:bg-slate-800 dark:text-blue-300">
              Asystec POS · Caja de escritorio
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Registrá ventas en caja aunque se caiga internet
            </h2>
            <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg dark:text-slate-300">
              Con Asystec POS podés registrar una venta en efectivo en la caja local sin conexión. Enviar o consultar
              un comprobante electrónico con Hacienda requiere conexión.
            </p>

            <Link
              href="/asystec-pos#demo-venta-sin-internet"
              className="mt-3 inline-flex min-h-11 items-center rounded text-sm font-semibold text-blue-800 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 dark:text-blue-300"
            >
              Simular una venta en efectivo
            </Link>

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

          <figure>
            <Image
              src="/images/pos/pos0.jpeg"
              alt="Pantalla de caja de Asystec POS con el carrito vacío y el método de pago en efectivo seleccionado"
              width={1417}
              height={897}
              sizes="(min-width: 1280px) 540px, (min-width: 1024px) 43vw, 90vw"
              className="h-auto w-full rounded-xl border border-blue-100 dark:border-slate-700"
            />
            <figcaption className="mt-2 text-xs text-gray-600 dark:text-slate-300">
              Pantalla de caja de Asystec POS antes de agregar productos.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default PosHero;
