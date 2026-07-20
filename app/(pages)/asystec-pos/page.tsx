import JsonLd from '~/components/seo/JsonLd';
import PosImageCarousel from '~/components/widgets/PosImageCarousel';
import TrustpilotProof from '~/components/widgets/TrustpilotProof';
import { getPortfolioPage } from '~/shared/data/seo-landings.data';
import { buildLandingSchemas, buildPageMetadata } from '~/utils/seo';

const seoPage = getPortfolioPage('asystec-pos');

if (!seoPage) {
  throw new Error('Asystec POS landing data is missing.');
}

export const metadata = buildPageMetadata(seoPage);

const benefits = [
  {
    title: 'Operacion continua',
    description: 'Seguis vendiendo aunque falle internet. El POS funciona localmente sin frenar caja.',
  },
  {
    title: 'Control total del negocio',
    description: 'Inventario, ventas y reportes para decidir con datos claros.',
  },
  {
    title: 'Acompanamiento experto',
    description: 'Implementacion y soporte profesional para comercios, talleres, restaurantes y pymes.',
  },
];

const features = [
  'Facturacion electronica para Costa Rica (TRIBU / Hacienda).',
  'Sistema POS de escritorio de alto rendimiento.',
  'Aplicacion movil para indicadores y control operativo.',
  'Actualizaciones automaticas del sistema.',
  'Seguridad por perfiles de usuario y trazabilidad de operaciones.',
];

const reasons = [
  {
    title: 'Enfocado en pymes',
    description: 'Disenado para la operacion real de comercios y servicios en Costa Rica.',
  },
  {
    title: 'Confiable y profesional',
    description: 'Arquitectura robusta para uso diario intensivo y crecimiento sostenido.',
  },
  {
    title: 'Mejora continua',
    description: 'Evolucion constante del producto con nuevas capacidades y mejoras de desempeno.',
  },
];

const securityItems = [
  'Respaldo periodico de informacion.',
  'Control de acceso por roles y permisos.',
  'Registro de actividad para auditoria.',
  'Buenas practicas de seguridad en cada release.',
];

const decisionGuides = [
  {
    title: 'Cómo controlar aperturas y cierres de caja',
    description: 'Revisa sesiones, medios de pago, ingresos, retiros, responsables y reportes antes de elegir.',
    href: '/soluciones/control-de-caja',
  },
  {
    title: 'POS local/offline vs POS en la nube',
    description: 'Compara continuidad en caja, internet, inventario, facturacion, usuarios y soporte antes de decidir.',
    href: '/guias/pos-local-vs-pos-en-la-nube',
  },
  {
    title: 'Como elegir un sistema POS',
    description: 'Checklist para evaluar caja, productos, reportes, soporte e implementacion en una pyme.',
    href: '/guias/como-elegir-sistema-pos',
  },
  {
    title: 'Como estimar el alcance de un POS',
    description: 'Factores que conviene revisar antes de solicitar una cotizacion formal.',
    href: '/guias/cuanto-cuesta-un-pos-costa-rica',
  },
  {
    title: 'Que sistema necesita un negocio nuevo',
    description: 'Prepara ventas, facturacion, inventario, caja, usuarios y reportes antes de abrir un local.',
    href: '/guias/que-sistema-necesita-negocio',
  },
];

const faqs = [
  {
    q: 'Funciona 100% offline?',
    a: 'Si. El sistema POS opera localmente en escritorio para ventas y gestion, sin depender de internet para trabajar.',
  },
  {
    q: 'Incluye facturacion electronica para Costa Rica?',
    a: 'Si. Incluye integracion para TRIBU/Hacienda bajo el esquema vigente.',
  },
  {
    q: 'Para que tipo de negocios esta recomendado?',
    a: 'Comercios, tiendas, talleres, restaurantes, servicios y pymes que requieren velocidad, control y estabilidad.',
  },
  {
    q: 'Como es el proceso de implementacion?',
    a: 'Se coordina una demo, configuracion inicial, capacitacion y acompanamiento para salida en produccion.',
  },
];

const faqSchemaItems = faqs.map(({ q, a }) => ({
  question: q,
  answer: a,
}));

const Page = () => {
  return (
    <>
      <JsonLd data={buildLandingSchemas(seoPage, { faqs: faqSchemaItems })} />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-sm lg:p-10 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
          <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-blue-300/35 blur-2xl dark:bg-blue-500/20" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-cyan-300/30 blur-2xl dark:bg-cyan-500/20" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-800 dark:border-blue-700 dark:bg-slate-800 dark:text-blue-300">
                Asystec POS - Sistema de escritorio para Costa Rica
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                Vende rapido, factura en regla y opera incluso sin internet
              </h1>
              <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg dark:text-slate-300">
                Un POS moderno para pymes con facturacion electronica TRIBU/Hacienda, app movil, seguridad avanzada y
                actualizaciones automaticas para que tu negocio no se detenga.
              </p>

              <div className="mt-5 grid gap-2 text-sm text-gray-700 dark:text-slate-300 sm:grid-cols-2">
                <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                  100% offline para operacion diaria
                </p>
                <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                  Alto rendimiento para caja e inventario
                </p>
                <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                  Aplicacion movil para monitoreo
                </p>
                <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                  Seguridad y respaldos empresariales
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contacto-pos"
                  data-analytics-event="cta_demo"
                  data-analytics-label="Asystec POS hero demo"
                  data-analytics-location="product_hero"
                  data-analytics-type="primary"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Solicitar demo
                </a>
                <a
                  href="https://asystec-apps.s3.us-east-2.amazonaws.com/updates/asystec-pos/latest/AsystecPOS-Setup.exe"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="cta_download"
                  data-analytics-label="Descargar Asystec POS"
                  data-analytics-location="product_hero"
                  data-analytics-type="secondary"
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
                  { src: '/images/pos/pos2.jpeg', alt: 'Modulo de ventas en Asystec POS' },
                ]}
              />

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-blue-100 bg-white/95 px-3 py-2 text-xs shadow-md dark:border-slate-700 dark:bg-slate-900/95 sm:text-sm">
                  <p className="font-semibold text-gray-900 dark:text-white">Modo offline activo</p>
                  <p className="text-gray-500 dark:text-slate-400">Caja funcionando sin interrupcion</p>
                </div>
                <div className="rounded-xl border border-blue-100 bg-white/95 px-3 py-2 text-xs shadow-md dark:border-slate-700 dark:bg-slate-900/95 sm:text-sm">
                  <p className="font-semibold text-gray-900 dark:text-white">Facturacion electronica</p>
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Por que elegirnos</h2>
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
          <article
            id="planes-pos"
            className="scroll-mt-28 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Opciones de implementacion</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-4 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Operacion inicial</h3>
                <p className="mt-1 text-sm font-medium text-gray-600 dark:text-slate-300">
                  Para negocios que necesitan ordenar caja, inventario y facturacion electronica desde un punto de
                  venta.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-slate-300">
                  <li>1 punto de venta</li>
                  <li>Facturacion electronica CR</li>
                  <li>Reportes esenciales</li>
                  <li>Soporte en horario laboral</li>
                </ul>
              </div>
              <div className="rounded-lg border-2 border-blue-600 p-4">
                <p className="inline-flex rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800">
                  Mas elegido
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">Operacion en crecimiento</h3>
                <p className="mt-1 text-sm font-medium text-gray-600 dark:text-slate-300">
                  Para equipos que necesitan mas control, aplicacion movil, modulos avanzados y soporte prioritario.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-slate-300">
                  <li>Multiples puntos de venta</li>
                  <li>App movil</li>
                  <li>Modulos avanzados y autoupdate</li>
                  <li>Soporte prioritario</li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-12">
          <TrustpilotProof
            id="trustpilot-proof-asystec-pos"
            variant="compact"
            hasBackground={false}
            containerClass="px-0 py-0 md:py-0 lg:py-0"
          />
        </div>

        <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Guias para comparar antes de elegir POS</h2>
          <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-slate-300">
            Si estas comparando proveedores, lleva estas preguntas a la demo para revisar continuidad, facturacion,
            inventario, soporte y crecimiento antes de decidir.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {decisionGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="rounded-xl border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-blue-950/30"
              >
                <h3 className="text-base font-semibold text-blue-800 dark:text-blue-300">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-slate-300">{guide.description}</p>
              </a>
            ))}
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
              <p className="mt-1 text-sm text-green-50">
                Escribinos y coordinamos una demo personalizada para tu negocio.
              </p>
            </div>
            <a
              href="https://wa.me/50689754741"
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="cta_whatsapp"
              data-analytics-label="Asystec POS contacto WhatsApp"
              data-analytics-location="product_contact"
              data-analytics-type="primary"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-50"
            >
              Abrir WhatsApp
            </a>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-7 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Moderniza tu punto de venta hoy</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 dark:text-slate-300">
              Solicita una demo y descubre como Asystec POS impulsa tu operacion con velocidad, estabilidad y control.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href="#contacto-pos"
                data-analytics-event="cta_demo"
                data-analytics-label="Asystec POS solicitar demo"
                data-analytics-location="product_final_cta"
                data-analytics-type="primary"
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Solicitar demo
              </a>
              <a
                href="/contact"
                data-analytics-event="cta_contact"
                data-analytics-label="Asystec POS contacto"
                data-analytics-location="product_final_cta"
                data-analytics-type="secondary"
                className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50 dark:border-blue-700 dark:bg-transparent dark:text-blue-300 dark:hover:bg-blue-900/20"
              >
                Contactanos
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Page;
