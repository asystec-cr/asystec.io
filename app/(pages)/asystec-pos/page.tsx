import type { Metadata } from 'next';
import PosImageCarousel from '~/components/widgets/PosImageCarousel';

export const metadata: Metadata = {
  title: 'Asystec POS',
  description:
    'Sistema POS de escritorio 100% offline para pymes en Costa Rica con facturación electrónica TRIBU/Hacienda, app móvil, seguridad y autoupdate.',
};

const benefits = [
  {
    title: 'Operación continua',
    description: 'Seguís vendiendo aunque falle internet. El POS funciona localmente sin frenar caja.',
  },
  {
    title: 'Control total del negocio',
    description: 'Inventario, ventas y reportes en tiempo real para decidir con datos claros.',
  },
  {
    title: 'Acompañamiento experto',
    description: 'Implementación y soporte profesional para comercios, talleres, restaurantes y pymes.',
  },
];

const features = [
  'Facturación electrónica para Costa Rica (TRIBU / Hacienda).',
  'Sistema POS de escritorio de alto rendimiento.',
  'Aplicación móvil para indicadores y control operativo.',
  'Actualizaciones automáticas del sistema.',
  'Seguridad por perfiles de usuario y trazabilidad de operaciones.',
];

const reasons = [
  {
    title: 'Enfocado en pymes',
    description: 'Diseñado para la operación real de comercios y servicios en Costa Rica.',
  },
  {
    title: 'Confiable y profesional',
    description: 'Arquitectura robusta para uso diario intensivo y crecimiento sostenido.',
  },
  {
    title: 'Mejora continua',
    description: 'Evolución constante del producto con nuevas capacidades y mejoras de desempeño.',
  },
];

const securityItems = [
  'Respaldo periódico de información.',
  'Control de acceso por roles y permisos.',
  'Registro de actividad para auditoría.',
  'Buenas prácticas de seguridad en cada release.',
];

const faqs = [
  {
    q: '¿Funciona 100% offline?',
    a: 'Sí. El sistema POS opera localmente en escritorio para ventas y gestión, sin depender de internet para trabajar.',
  },
  {
    q: '¿Incluye facturación electrónica para Costa Rica?',
    a: 'Sí. Incluye integración para TRIBU/Hacienda bajo el esquema vigente.',
  },
  {
    q: '¿Para qué tipo de negocios está recomendado?',
    a: 'Comercios, tiendas, talleres, restaurantes, servicios y pymes que requieren velocidad, control y estabilidad.',
  },
  {
    q: '¿Cómo es el proceso de implementación?',
    a: 'Se coordina una demo, configuración inicial, capacitación y acompañamiento para salida en producción.',
  },
];

const Page = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-sm lg:p-10 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-blue-300/35 blur-2xl dark:bg-blue-500/20" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-cyan-300/30 blur-2xl dark:bg-cyan-500/20" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-800 dark:border-blue-700 dark:bg-slate-800 dark:text-blue-300">
              Asystec POS • Sistema de escritorio para Costa Rica
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Vendé rápido. Facturá en regla. Operá incluso sin internet.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg dark:text-slate-300">
              Un POS moderno para pymes con facturación electrónica TRIBU/Hacienda, app móvil, seguridad avanzada y
              actualizaciones automáticas para que tu negocio nunca se detenga.
            </p>

            <div className="mt-5 grid gap-2 text-sm text-gray-700 dark:text-slate-300 sm:grid-cols-2">
              <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                100% offline para operación diaria
              </p>
              <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                Alto rendimiento para caja e inventario
              </p>
              <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                Aplicación móvil para monitoreo
              </p>
              <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                Seguridad y respaldos empresariales
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contacto-pos"
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Solicitar demo
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

          <div>
            <PosImageCarousel
              images={[
                { src: '/images/pos/pos0.jpeg', alt: 'Vista del entorno profesional para Asystec POS' },
                { src: '/images/pos/pos1.jpeg', alt: 'Vista operativa de Asystec POS' },
                { src: '/images/pos/pos2.jpeg', alt: 'Módulo de ventas en Asystec POS' },
              ]}
            />

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-blue-100 bg-white/95 px-3 py-2 text-xs shadow-md dark:border-slate-700 dark:bg-slate-900/95 sm:text-sm">
                <p className="font-semibold text-gray-900 dark:text-white">Modo offline activo</p>
                <p className="text-gray-500 dark:text-slate-400">Caja funcionando sin interrupción</p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-white/95 px-3 py-2 text-xs shadow-md dark:border-slate-700 dark:bg-slate-900/95 sm:text-sm">
                <p className="font-semibold text-gray-900 dark:text-white">Facturación electrónica</p>
                <p className="text-gray-500 dark:text-slate-400">Conectada a Costa Rica</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Beneficios principales</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Por qué elegirnos</h2>
          <div className="mt-4 space-y-3">
            {reasons.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-100 p-4 dark:border-slate-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Seguridad y respaldos</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-slate-300">
            {securityItems.map((item) => (
              <li key={item} className="rounded-lg bg-gray-50 px-3 py-2 dark:bg-slate-700/40">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Planes y precios</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-4 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Básico</h3>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                $39 <span className="text-sm font-medium text-gray-500 dark:text-slate-400">/mes</span>
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-slate-300">
                <li>1 punto de venta</li>
                <li>Facturación electrónica CR</li>
                <li>Reportes esenciales</li>
                <li>Soporte en horario laboral</li>
              </ul>
            </div>
            <div className="rounded-lg border-2 border-blue-600 p-4">
              <p className="inline-flex rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800">Más elegido</p>
              <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">Pro</h3>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                $79 <span className="text-sm font-medium text-gray-500 dark:text-slate-400">/mes</span>
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-slate-300">
                <li>Múltiples puntos de venta</li>
                <li>App móvil</li>
                <li>Módulos avanzados y autoupdate</li>
                <li>Soporte prioritario</li>
              </ul>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Testimonios</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-gray-700 dark:text-slate-300">
              &ldquo;Desde que usamos Asystec POS el cierre diario de caja es mucho más rápido y estable.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">Laura M. - Tienda retail, Heredia</p>
          </article>
          <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-gray-700 dark:text-slate-300">
              &ldquo;La facturación electrónica integrada nos ahorró tiempo y evitó errores operativos.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">Daniel R. - Taller automotriz, San José</p>
          </article>
          <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-gray-700 dark:text-slate-300">
              &ldquo;Tenemos control de dos sucursales y revisión desde móvil sin complicaciones.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">Karla V. - Restaurante, Alajuela</p>
          </article>
        </div>
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

      <div id="contacto-pos" className="mt-12 grid gap-4">
        <article className="flex flex-col items-start justify-between gap-4 rounded-xl bg-green-700 p-6 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold">Contacto por WhatsApp</h2>
            <p className="mt-1 text-sm text-green-50">Escribinos y coordinamos una demo personalizada para tu negocio.</p>
          </div>
          <a
            href="https://wa.me/50688888888"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-50"
          >
            Abrir WhatsApp
          </a>
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-7 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Modernizá tu punto de venta hoy</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 dark:text-slate-300">
            Solicitá una demo y descubrí cómo Asystec POS impulsa tu operación con velocidad, estabilidad y control.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="#contacto-pos"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Solicitar demo
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50 dark:border-blue-700 dark:bg-transparent dark:text-blue-300 dark:hover:bg-blue-900/20"
            >
              Contáctanos
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Page;
