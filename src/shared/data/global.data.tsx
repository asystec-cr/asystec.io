import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandX,
  IconChevronDown,
  IconKey,
  IconRss,
  icons,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NUEVO',
  callToAction: {
    text: 'Asystec POS: conocelo y descargalo »',
    href: '/asystec-pos',
  },
  callToAction2: {
    text: 'Síguenos en X',
    href: 'https://x.com/asysteccr',
    targetBlank: true,
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Software',
      icon: IconChevronDown,
      links: [
        {
          label: 'Software para negocios',
          href: '/software-para-negocios-costa-rica',
        },
        {
          label: 'Asystec POS',
          href: '/asystec-pos',
        },
        {
          label: 'FitPro',
          href: '/fitpro',
        },
        {
          label: 'Diseño de plataformas',
          href: '/plataformas',
        },
        {
          label: 'CobrosApp',
          href: '/cobrosapp',
        },
        {
          label: 'FacturacionApp',
          href: '/facturacionapp',
        },
        {
          label: 'TallerApp',
          href: '/tallerapp',
        },
        {
          label: 'Jas Admin',
          href: 'https://jas.asystec.io',
          target: 'blank',
        },
        {
          label: 'Instaladores',
          href: 'https://drive.google.com/drive/u/0/folders/1x78WOg_WMsivxhi6UwAUC_vua-LHhIa-',
          target: 'blank',
        },
        {
          label: 'Recursos',
          href: 'https://drive.google.com/drive/folders/17-r9wm4TyOd2Q9rWzOvQ2z0fSZszj3gJ?usp=drive_link',
          target: 'blank',
        },
      ],
    },
    {
      label: 'Soluciones',
      icon: IconChevronDown,
      links: [
        {
          label: 'Sistema POS',
          href: '/soluciones/pos',
        },
        {
          label: 'Facturacion electronica',
          href: '/soluciones/facturacion-electronica',
        },
        {
          label: 'Inventario',
          href: '/soluciones/inventario',
        },
        {
          label: 'Reportes',
          href: '/soluciones/reportes',
        },
        {
          label: 'Cuentas por cobrar',
          href: '/soluciones/cuentas-por-cobrar',
        },
        {
          label: 'CRM',
          href: '/soluciones/crm',
        },
        {
          label: 'Multi-sucursal',
          href: '/soluciones/multi-sucursal',
        },
        {
          label: 'Integraciones',
          href: '/soluciones/integraciones',
        },
      ],
    },
    {
      label: 'Industrias',
      icon: IconChevronDown,
      links: [
        {
          label: 'Restaurantes',
          href: '/industrias/restaurantes',
        },
        {
          label: 'Minisuper',
          href: '/industrias/minisuper',
        },
        {
          label: 'Ferreterias',
          href: '/industrias/ferreterias',
        },
        {
          label: 'Retail',
          href: '/industrias/retail',
        },
        {
          label: 'Distribuidores',
          href: '/industrias/distribuidores',
        },
        {
          label: 'Clinicas',
          href: '/industrias/clinicas',
        },
        {
          label: 'Salones de belleza',
          href: '/industrias/salones-belleza',
        },
        {
          label: 'Gimnasios',
          href: '/industrias/gimnasios',
        },
        {
          label: 'Talleres',
          href: '/industrias/talleres',
        },
        {
          label: 'Servicios profesionales',
          href: '/industrias/servicios-profesionales',
        },
      ],
    },
    {
      label: 'Guias',
      icon: IconChevronDown,
      links: [
        {
          label: 'Elegir sistema POS',
          href: '/guias/como-elegir-sistema-pos',
        },
        {
          label: 'Alternativas a Excel',
          href: '/guias/alternativas-excel-inventario',
        },
        {
          label: 'Software local vs extranjero',
          href: '/guias/software-local-vs-extranjero',
        },
        {
          label: 'Costo de un POS',
          href: '/guias/cuanto-cuesta-un-pos-costa-rica',
        },
        {
          label: 'Preguntas frecuentes',
          href: '/faqs',
        },
        {
          label: 'Casos y portafolio',
          href: '/casos',
        },
      ],
    },
    {
      label: 'Documentación',
      icon: IconChevronDown,
      links: [
        {
          label: 'FacturacionApp',
          href: 'https://docs.facturacionapp.com',
          target: 'blank',
        },
        {
          label: 'CobrosApp',
          href: 'https://docs.cobrosapp.com',
          target: 'blank',
        },
        {
          label: 'JVentas',
          href: 'https://docs.jventas.asystec.io/',
          target: 'blank',
        },
        {
          label: 'JRestaurante',
          href: 'https://docs.jrestaurante.asystec.io',
          target: 'blank',
        },
      ],
    },
    {
      label: 'Herramientas',
      icon: IconChevronDown,
      links: [
        {
          label: 'Estado Sistemas Asystec',
          href: 'https://status.asysteccr.com',
          target: 'blank',
        },
        {
          label: 'Probar Credenciales',
          href: 'https://app.asystec.io/hacienda/prueba-conexion',
          target: 'blank',
        },
        {
          label: 'Estado API Hacienda',
          href: 'https://apis.gometa.org/status',
          target: 'blank',
        },
        {
          label: 'Consultas',
          href: 'https://consultas.asystec.io/',
          target: 'blank',
        },
        {
          label: 'Plugin JVentas',
          href: 'https://asystec-apps.s3.us-east-2.amazonaws.com/updates/plugin_jventas/latest/PluginJVentas-Setup.exe',
          target: 'blank',
        },
        {
          label: 'Plugin JRest',
          href: 'https://drive.google.com/open?id=1DKoEH4aZJ8ZzITyEzV6oGHh0_A2XISpL&usp=drive_fs',
          target: 'blank',
        },
      ],
    },
    {
      label: 'Contacto',
      href: '/contact',
    },
  ],
  actions: [
    {
      text: 'Solicitar demo',
      href: '/contact',
      icon: IconKey,
      trackingEvent: 'cta_demo',
      trackingLabel: 'Header solicitar demo',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'Asystec',
  links: [
    {
      label: 'Tienda',
      href: 'https://tienda.asystec.io',
      target: 'blank',
    },
    {
      label: 'Términos y Condiciones',
      href: '/terms',
    },
    {
      label: 'Política de Privacidad',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span
        aria-hidden="true"
        className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(/favicon.ico)] bg-cover md:-mt-0.5 md:h-6 md:w-6"
      ></span>
      Hecho con <span>&#10084; </span>
      por{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline dark:text-gray-200"
        href="https://asystec.io"
      >
        Asystec
      </a>{' '}
      - Todos los derechos reservados.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Términos y Condiciones',
      href: '/terms',
    },
    {
      label: 'Política de Privacidad',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Software',
      links: [
        { label: 'Software para negocios', href: '/software-para-negocios-costa-rica' },
        { label: 'Asystec POS', href: '/asystec-pos' },
        { label: 'CobrosApp', href: '/cobrosapp' },
        { label: 'FacturacionApp', href: '/facturacionapp' },
      ],
    },
    {
      title: 'Soluciones',
      links: [
        { label: 'Facturacion electronica', href: '/soluciones/facturacion-electronica' },
        { label: 'Inventario', href: '/soluciones/inventario' },
        { label: 'Reportes', href: '/soluciones/reportes' },
        { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
      ],
    },
    {
      title: 'Autoridad',
      links: [
        { label: 'Sobre Asystec', href: '/about' },
        { label: 'Casos y portafolio', href: '/casos' },
        { label: 'Preguntas frecuentes', href: '/faqs' },
        { label: 'Contacto', href: '/contact' },
      ],
    },
    {
      title: 'Contacto',
      texts: ['Torres Paseo Colon', 'San Jose, Costa Rica', 'Telefono: +506 8975-4741', 'Info: info@asystec.io'],
    },
  ],
  socials: [
    { label: 'X', icon: IconBrandX, href: 'https://x.com/asysteccr', target: 'blank' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/asystec/', target: 'blank' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://www.facebook.com/asysteccr', target: 'blank' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/asystec-cr', target: 'blank' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span
        aria-hidden="true"
        className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(/favicon.ico)] bg-cover md:-mt-0.5 md:h-6 md:w-6"
      ></span>
      Hecho con <span>&#10084; </span>
      por{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline dark:text-gray-200"
        href="https://asystec.io"
      >
        Asystec
      </a>{' '}
      - Todos los derechos reservados.
    </div>
  ),
};
