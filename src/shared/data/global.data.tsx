import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconKey,
  IconRss,
  icons,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'SOPORTE!',
  callToAction: {
    text: 'Contactar al equipo de Soporte! »',
    href: 'https://wa.me/message/FSR5FX2SAKTDP1',
  },
  callToAction2: {
    text: 'Síguenos en X',
    href: 'https://x.com/asysteccr',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Soluciones de Software',
      icon: IconChevronDown,
      links: [
        {
          label: 'CobrosApp',
          href: '/',
        },
        {
          label: 'FacturacionApp',
          href: '/',
        },
        {
          label: 'TallerApp',
          href: '/',
        },
      ],
    },
    {
      label: 'Contabilidad',
      icon: IconChevronDown,
      links: [
        {
          label: 'CPA',
          href: '/',
        },
        {
          label: 'CPI',
          href: '/',
        },
        {
          label: 'Certificaciones de Ingresos',
          href: '/',
        },
      ],
    },
    {
      label: 'Fiscal',
      icon: IconChevronDown,
      links: [
        {
          label: 'Declaraciones de Impuestos',
          href: '/',
        },
        {
          label: 'Auditorias',
          href: '/',
        },
      ],
    },
    {
      label: 'Legal',
      icon: IconChevronDown,
      links: [
        {
          label: 'Traspasos',
          href: '/',
        },
        {
          label: 'Representaciones',
          href: '/',
        },
        {
          label: 'Trámites',
          href: '/',
        },
      ],
    },
    {
      label: 'Herramientas',
      icon: IconChevronDown,
      links: [
        {
          label: 'Estado API Hacienda',
          href: 'https://apis.gometa.org/status',
          target: 'blank'
        },
        {
          label: 'Plugin JVentas',
          href: 'https://drive.google.com/open?id=1R-sAdkOceMYKw2zKyXWhp6VHwu4iN_2a&usp=drive_fs',
          target: 'blank'
        },
        {
          label: 'Plugin JRest',
          href: 'https://drive.google.com/open?id=1DKoEH4aZJ8ZzITyEzV6oGHh0_A2XISpL&usp=drive_fs',
          target: 'blank'
        },
      ],
    },
    {
      label: 'Blog',
      href: 'https://blog.asystec.io',
      target: 'blank'
    },
    {
      label: 'Contacto',
      href: '/contact',
    },
  ],
  actions: [
    {
      text: 'Iniciar Sesion',
      href: 'https://cobros.asystec.io/login',
      icon: IconKey,
      targetBlank: true,
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
    <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Hecho con <span>&#10084; </span>
     por <a target='_blank' className="text-blue-600 hover:underline dark:text-gray-200" href="https://asystec.io">
           Asystec
      </a> - Todos los derechos reservados.

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
      title: 'Dirección',
      texts: ['Torres Paseo Colón', 'San José, Costa Rica'],
    },
    {
      title: 'Teléfono',
      texts: ['Teléfono: +506 8975-4741'],
    },
    {
      title: 'Correo',
      texts: ['Info: info@asystec.io'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/asysteccr', target: "blank"},
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/asystec/' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://www.facebook.com/asysteccr' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/asystec-cr' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
        Hecho con <span>&#10084; </span>
       por <a target='_blank' className="text-blue-600 hover:underline dark:text-gray-200" href="https://asystec.io">
             Asystec
        </a> - Todos los derechos reservados.

    </div>
  ),
};
