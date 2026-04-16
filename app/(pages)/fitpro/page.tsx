import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FitPro',
  description:
    'Software para gimnasios y estudios fitness: membresias, cobros, clases, check-ins y reportes operativos en una sola plataforma.',
};

const benefits = [
  {
    title: 'Operacion centralizada',
    description: 'Controla membresias, pagos y asistencia desde un solo panel.',
  },
  {
    title: 'Cobros mas ordenados',
    description: 'Reduce morosidad con seguimiento de vencimientos y estado de cuenta por cliente.',
  },
  {
    title: 'Mejor experiencia del cliente',
    description: 'Agenda clases, verifica accesos y acelera la atencion en recepcion.',
  },
];

const features = [
  'Gestion de membresias y renovaciones.',
  'Registro de clientes y contratos.',
  'Control de pagos y saldos pendientes.',
  'Agenda de clases y cupos por horario.',
  'Reportes de ingresos, asistencia y rendimiento.',
  'Panel web para supervision administrativa.',
];

const useCases = [
  {
    title: 'Gimnasios',
    description: 'Control de acceso, membresias activas y seguimiento de cobros recurrentes.',
  },
  {
    title: 'Estudios boutique',
    description: 'Gestion de cupos por clase, horarios y asistencia por instructor.',
  },
  {
    title: 'Centros de entrenamiento',
    description: 'Visibilidad de indicadores operativos para decisiones diarias mas rapidas.',
  },
];

const faqs = [
  {
    q: 'Que tipo de negocio puede usar FitPro?',
    a: 'Gimnasios, centros fitness, estudios de entrenamiento y negocios con membresias o clases.',
  },
  {
    q: 'FitPro permite controlar pagos y vencimientos?',
    a: 'Si. El sistema facilita el seguimiento de membresias activas, vencidas y cobros pendientes.',
  },
  {
    q: 'Se puede usar para administrar clases?',
    a: 'Si. Puedes organizar horarios, cupos y asistencia para mejorar la operacion diaria.',
  },
  {
    q: 'Como solicito una demo?',
    a: 'Desde esta pagina puedes ir directo a FitPro o escribirnos por WhatsApp para coordinar una presentacion.',
  },
];

const Page = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-6 shadow-sm lg:p-10 dark:border-emerald-900 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-emerald-300/35 blur-2xl dark:bg-emerald-500/20" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-lime-300/30 blur-2xl dark:bg-lime-500/20" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-800 dark:bg-slate-800 dark:text-emerald-300">
              FitPro • Gestion para gimnasios y centros fitness
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Organiza tu gimnasio, mejora cobros y acelera tu operacion diaria
            </h1>
            <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg dark:text-slate-300">
              FitPro te ayuda a administrar clientes, membresias, clases y pagos en una sola plataforma, con enfoque en
              control operativo y crecimiento sostenible.
            </p>

            <div className="mt-5 grid gap-2 text-sm text-gray-700 dark:text-slate-300 sm:grid-cols-2">
              <p className="rounded-lg border border-emerald-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                Membresias y renovaciones centralizadas
              </p>
              <p className="rounded-lg border border-emerald-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                Seguimiento de cobros y vencimientos
              </p>
              <p className="rounded-lg border border-emerald-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                Agenda de clases con control de cupos
              </p>
              <p className="rounded-lg border border-emerald-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                Indicadores para decisiones operativas
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://fitpro.asystec.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Ir a FitPro
              </a>
              <a
                href="#contacto-fitpro"
                className="inline-flex items-center justify-center rounded-lg border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 dark:border-emerald-700 dark:bg-transparent dark:text-emerald-300 dark:hover:bg-emerald-900/20"
              >
                Solicitar demo
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white/95 p-5 shadow-md dark:border-slate-700 dark:bg-slate-900/95">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Indicadores que podras monitorear</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-emerald-50 px-4 py-3 dark:bg-slate-800">
                <p className="text-xs uppercase tracking-wide text-emerald-700 dark:text-emerald-300">Membresias</p>
                <p className="mt-1 text-xl font-bold text-gray-900 dark:text-white">Activas y por vencer</p>
              </div>
              <div className="rounded-lg bg-emerald-50 px-4 py-3 dark:bg-slate-800">
                <p className="text-xs uppercase tracking-wide text-emerald-700 dark:text-emerald-300">Cobros</p>
                <p className="mt-1 text-xl font-bold text-gray-900 dark:text-white">Pagado vs pendiente</p>
              </div>
              <div className="rounded-lg bg-emerald-50 px-4 py-3 dark:bg-slate-800">
                <p className="text-xs uppercase tracking-wide text-emerald-700 dark:text-emerald-300">Asistencia</p>
                <p className="mt-1 text-xl font-bold text-gray-900 dark:text-white">Check-ins diarios</p>
              </div>
              <div className="rounded-lg bg-emerald-50 px-4 py-3 dark:bg-slate-800">
                <p className="text-xs uppercase tracking-wide text-emerald-700 dark:text-emerald-300">Clases</p>
                <p className="mt-1 text-xl font-bold text-gray-900 dark:text-white">Cupos y ocupacion</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Beneficios principales</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Funcionalidades destacadas</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-slate-300">
            {features.map((item) => (
              <li key={item} className="rounded-lg bg-gray-50 px-3 py-2 dark:bg-slate-700/40">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Para que tipo de negocio?</h2>
          <div className="mt-4 space-y-3">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-100 p-4 dark:border-slate-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Preguntas frecuentes</h2>
        <div className="mt-4 divide-y divide-gray-200 dark:divide-slate-700">
          {faqs.map((item) => (
            <article key={item.q} className="py-4">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{item.q}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-slate-300">{item.a}</p>
            </article>
          ))}
        </div>
      </div>

      <div id="contacto-fitpro" className="mt-12 grid gap-4">
        <article className="flex flex-col items-start justify-between gap-4 rounded-xl bg-emerald-700 p-6 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold">Contacto por WhatsApp</h2>
            <p className="mt-1 text-sm text-emerald-50">Escribenos para coordinar demo, implementacion y soporte.</p>
          </div>
          <a
            href="https://wa.me/50689754741"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
          >
            Abrir WhatsApp
          </a>
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-7 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Listo para impulsar tu centro fitness?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 dark:text-slate-300">
            Conoce FitPro y mejora la administracion de tu operacion con mayor control, orden y velocidad.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="https://fitpro.asystec.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Abrir FitPro
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 dark:border-emerald-700 dark:bg-transparent dark:text-emerald-300 dark:hover:bg-emerald-900/20"
            >
              Contactanos
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Page;
