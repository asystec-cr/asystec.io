import Image from 'next/image';
import {
  IconArrowRight,
  IconCheck,
  IconDeviceDesktopAnalytics,
  IconExternalLink,
  IconLayoutDashboard,
  IconLifebuoy,
  IconLock,
} from '@tabler/icons-react';

type PortfolioItem = {
  name: string;
  category: string;
  href: string;
  image: string;
  alt: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

type PlatformPortfolioProps = {
  headingLevel?: 'h1' | 'h2';
  portfolioHref?: string;
};

const servicePillars = [
  {
    title: 'Estrategia y alcance',
    description: 'Definimos procesos, usuarios, permisos, datos críticos y prioridades antes de construir.',
    icon: IconLayoutDashboard,
  },
  {
    title: 'Experiencia operativa',
    description: 'Diseñamos flujos claros para ventas, cobros, talleres, facturación, clientes y soporte.',
    icon: IconDeviceDesktopAnalytics,
  },
  {
    title: 'Desarrollo e integraciones',
    description: 'Creamos portales, sitios comerciales, backoffice, reportes, autenticación e integraciones clave.',
    icon: IconLock,
  },
  {
    title: 'Evolución continua',
    description: 'Acompañamos despliegue, soporte, mejoras, seguridad y crecimiento de cada plataforma.',
    icon: IconLifebuoy,
  },
];

const portfolioItems: PortfolioItem[] = [
  {
    name: 'Candock Costa Rica',
    category: 'Sitio comercial y catálogo',
    href: 'https://candockcostarica.com/',
    image: '/images/portfolio/candockcostarica.png',
    alt: 'Candock Costa Rica',
    summary:
      'Presencia digital para muelles flotantes modulares, dry docks, plataformas para motos acuáticas, accesorios y anclajes en Costa Rica.',
    highlights: [
      'Catálogo para residencias, marinas, hoteles, clubes náuticos y operaciones turísticas.',
      'Ruta directa para productos, cotización, contacto y asesoría local.',
      'Mensaje comercial apoyado en experiencia Candock, garantía y red internacional.',
    ],
    tags: ['Web comercial', 'Catálogo', 'Cotización', 'Náutico'],
  },
  {
    name: 'Tecnicore',
    category: 'Plataforma operativa para talleres',
    href: 'https://tecnicore.asysteccr.com/',
    image: '/images/portfolio/tecnicore.png',
    alt: 'Tecnicore',
    summary:
      'Software para talleres de reparación que concentra recepción, diagnóstico, aprobación, cobro y entrega en una sola orden.',
    highlights: [
      'Flujo multiempresa y multisucursal con roles para recepción, técnicos y administración.',
      'Historial compartido, hitos visibles por orden y aprobaciones conectadas al diagnóstico.',
      'Cobros parciales, saldo claro y comprobantes listos antes de la entrega.',
    ],
    tags: ['SaaS', 'Talleres', 'Órdenes', 'Laravel'],
  },
  {
    name: 'FacturacionApp',
    category: 'Facturación electrónica',
    href: 'https://facturacionapp.com/',
    image: '/images/portfolio/facturacionapp.png',
    alt: 'FacturacionApp',
    summary: 'Sitio y producto en línea para emitir comprobantes electrónicos de forma rápida y segura en Costa Rica.',
    highlights: [
      'Beneficios orientados a reducción de costos, seguridad, calidad de servicio y ahorro de tiempo.',
      'Operación desde distintos dispositivos con aceptación de comprobantes por Hacienda.',
      'Módulos comerciales visibles para clientes, facturación, pagos, cotizaciones, reportes y configuración.',
    ],
    tags: ['Facturación', 'Hacienda', 'Reportes', 'SaaS'],
  },
  {
    name: 'CobrosApp',
    category: 'Créditos y cobros',
    href: 'https://cobrosapp.com/',
    image: '/images/portfolio/cobrosapp.png',
    alt: 'CobrosApp',
    summary:
      'Plataforma para administrar clientes, créditos, pagos, reportes de ingresos, gastos, utilidad neta y capital invertido.',
    highlights: [
      'Acceso web para operar desde cualquier lugar con conexión a internet.',
      'Comprobantes de pago y estados de cuenta por correo electrónico.',
      'Respaldo en AWS, soporte técnico y datos clave para la gestión financiera.',
    ],
    tags: ['Cobros', 'Créditos', 'AWS', 'Reportes'],
  },
  {
    name: 'JAS Admin',
    category: 'Portal administrativo',
    href: 'https://jas.asystec.io/login',
    image: '/images/portfolio/jas-asystec-login.png',
    alt: 'JAS Admin',
    summary:
      'Portal web de administración para JVentas y JRestaurante, con acceso para usuarios registrados y registro de cuenta.',
    highlights: [
      'Inicio de sesión por correo y contraseña para continuar al sistema.',
      'Flujo visible de recuperación de contraseña desde la pantalla de acceso.',
      'Registro público para nuevas cuentas desde el portal JAdmin.',
    ],
    tags: ['JAdmin', 'JVentas', 'JRestaurante', 'Login'],
  },
  {
    name: 'Portal FacturacionApp',
    category: 'Acceso de usuarios',
    href: 'https://app.asystec.io/login',
    image: '/images/portfolio/app-asystec-login.png',
    alt: 'Portal FacturacionApp',
    summary:
      'Pantalla de acceso para usuarios registrados de FacturacionApp, con registro de cuenta, recuperación de contraseña y enlaces legales.',
    highlights: [
      'Autenticación por usuario y contraseña para continuar al sistema.',
      'Registro público para nuevas cuentas desde el mismo portal.',
      'Política de privacidad y términos accesibles desde la entrada.',
    ],
    tags: ['Login', 'Usuarios', 'Legal', 'SaaS'],
  },
  {
    name: 'Portal CobrosApp',
    category: 'Acceso de usuarios',
    href: 'https://cobros.asystec.io/login',
    image: '/images/portfolio/cobros-asystec-login.png',
    alt: 'Portal CobrosApp',
    summary:
      'Acceso a CobrosApp para equipos que gestionan crédito y cobranza, con registro, recuperación de contraseña e ingreso con Google.',
    highlights: [
      'Ingreso con correo y contraseña para cuentas registradas.',
      'Opción de crear cuenta desde el portal de acceso.',
      'Autenticación alternativa con Google para reducir fricción.',
    ],
    tags: ['Login', 'Google', 'Cobros', 'SaaS'],
  },
  {
    name: 'TallerApp',
    category: 'Acceso operativo para talleres',
    href: 'https://taller.asystec.io/login',
    image: '/images/portfolio/taller-asystec-login.png',
    alt: 'TallerApp',
    summary:
      'Portal de acceso TPro para operaciones de taller, con inicio de sesión, recuperación de contraseña y creación de cuenta.',
    highlights: [
      'Entrada preparada para usuarios operativos de taller.',
      'Flujo de recuperación de contraseña visible para soporte de cuenta.',
      'Registro directo para nuevas cuentas desde el portal.',
    ],
    tags: ['Talleres', 'Login', 'TPro', 'Operaciones'],
  },
];

const PlatformPortfolio = ({ headingLevel = 'h2', portfolioHref = '#portfolio-cases' }: PlatformPortfolioProps) => {
  const HeadingTag = headingLevel;

  return (
    <section
      id="platform-portfolio"
      className="relative not-prose scroll-mt-24 border-y border-neutral-200 bg-white py-14 text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Servicios especializados</p>
            <HeadingTag className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Diseño y desarrollo de plataformas
            </HeadingTag>
            <p className="mt-5 text-base leading-8 text-neutral-700 dark:text-neutral-300 sm:text-lg">
              Construimos plataformas web, portales operativos y productos SaaS para negocios que necesitan vender,
              facturar, cobrar, administrar órdenes, controlar usuarios y crecer sin procesos manuales dispersos.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
              >
                Cotizar plataforma
                <IconArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={portfolioHref}
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-emerald-600 hover:text-emerald-700 dark:border-neutral-700 dark:text-white dark:hover:border-emerald-300 dark:hover:text-emerald-300"
              >
                Ver portafolio
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {servicePillars.map(({ title, description, icon: Icon }) => (
              <div key={title} className="border-l-2 border-emerald-500 pl-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="portfolio-cases" className="mt-14 scroll-mt-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-rose-700 dark:text-rose-300">Portafolio</p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Plataformas públicas y productos activos</h3>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              Capturas públicas verificadas en abril 2026. Los portales con login muestran solo información visible sin
              credenciales.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map(({ name, category, href, image, alt, summary, highlights, tags }) => (
              <article
                key={name}
                className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800"
                  aria-label={`Abrir ${name}`}
                >
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">{category}</p>
                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h4 className="min-w-0 break-words text-xl font-bold">{name}</h4>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-neutral-200 text-neutral-700 transition hover:border-emerald-600 hover:text-emerald-700 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-emerald-300 dark:hover:text-emerald-300"
                      aria-label={`Visitar ${name}`}
                    >
                      <IconExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">{summary}</p>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                    {highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <IconCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:text-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPortfolio;
