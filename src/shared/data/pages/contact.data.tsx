import {
  IconBrandBlogger,
  IconBuildingStore,
  IconChartBar,
  IconClock,
  IconHelp,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconUsers,
} from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  title: 'Contáctanos',
  subtitle: <>Nuestro equipo está listo para ayudarte</>,
  tagline: 'Contacto',
};

export const contactLeadContact: ContactProps = {
  id: 'coordinar-demo',
  hasBackground: true,
  header: {
    title: 'Cuéntanos qué necesitas resolver',
    subtitle:
      'Comparte el contexto básico y WhatsApp abrirá un mensaje listo para enviar al equipo comercial de Asystec.',
    tagline: 'Contacto comercial',
  },
  content:
    'Para preparar una demo útil, describe el giro del negocio, el problema principal y el resultado que necesitas comprobar. No incluyas contraseñas, certificados ni datos sensibles.',
  items: [
    {
      title: 'Operación actual',
      description: ['Tipo de negocio', 'Usuarios, cajas o sucursales'],
      icon: IconBuildingStore,
    },
    {
      title: 'Problema prioritario',
      description: ['Qué proceso se hace manualmente', 'Dónde se pierde control o tiempo'],
      icon: IconUsers,
    },
    {
      title: 'Resultado esperado',
      description: ['Qué flujo quieres ver en la demo', 'Qué reporte o control necesitas validar'],
      icon: IconChartBar,
    },
  ],
  form: {
    title: 'Preparar mensaje por WhatsApp',
    description: 'Completa los datos básicos y agrega el contexto de la operación.',
    inputs: [
      {
        type: 'text',
        label: 'Nombre',
        name: 'name',
        autocomplete: 'name',
        placeholder: 'Tu nombre',
      },
      {
        type: 'email',
        label: 'Correo electrónico',
        name: 'email',
        autocomplete: 'email',
        placeholder: 'correo@negocio.com',
      },
    ],
    textarea: {
      cols: 30,
      rows: 6,
      label: 'Contexto para la demo',
      name: 'textarea',
      placeholder:
        'Ejemplo: tienda con dos cajas; necesito conectar ventas, inventario, facturación y cierres por usuario.',
    },
    btn: {
      title: 'Continuar en WhatsApp',
      type: 'submit',
    },
    submitAction: {
      type: 'whatsapp',
      phone: '50689754741',
      messagePrefix: 'Hola Asystec, quiero coordinar una demo para mi negocio.',
      trackingEvent: 'contact_whatsapp_form_submit',
      trackingLabel: 'Formulario de demo en contacto',
    },
  },
};

// Contact data on Contact page *******************
export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Contact us',
    subtitle: (
      <>
        Please take a moment to fill out this form.{' '}
        <span className="hidden md:inline">{`So we can better understand your needs and get the process started smoothly.`}</span>
      </>
    ),
  },
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        autocomplete: 'off',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Email address',
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Technical help',
        },
        {
          label: 'Claims',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
      {
        label: 'Do you want to receive monthly updates by email?',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  header: {
    title: 'Centro de Soporte',
    subtitle: '¿Estás buscando algo en particular?',
  },
  items: [
    {
      title: '¿Tienes una pregunta?',
      description: 'Mira nuestra sección de preguntas frecuentes',
      icon: IconHelp,
      callToAction: {
        text: 'Ir a preguntas frecuentes',
        href: '/faqs',
      },
    },
    {
      title: 'Chatea con nosotros',
      description: 'Chatea ahora con el equipo de Soporte',
      icon: IconMessages,
      callToAction: {
        text: 'Escríbenos',
        href: 'https://wa.me/50689754741',
        targetBlank: true,
      },
    },
    {
      title: 'Obtener ayuda',
      description: 'Mira nuestro blog',
      icon: IconBrandBlogger,
      callToAction: {
        text: 'Ir al blog',
        href: 'https://blog.asystec.io',
      },
    },
  ],
};
