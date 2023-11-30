import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandWhatsapp,
  IconBrandTwitter,
  IconBulb,
  IconRegistered,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconHeart,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
  IconRss,
  IconBrandBlogger,
  IconUserPlus,
  IconHelpCircle,
  IconClipboardData,
  IconClockHour5
} from '@tabler/icons-react';
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialProps,
} from './types';

import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import heroImg from '~/assets/images/hero.jpg';
import hero2Img from '~/assets/images/hero2.jpg';
import gasImg from '~/assets/images/gas.jpg';
import asystecLogo from '~/assets/images/asystec-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import CallToAction from '~/components/widgets/CallToAction';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'SOPORTE!',
  callToAction: {
    text: 'Contactar al equipo de Soporte! »',
    href: 'https://wa.me/message/FSR5FX2SAKTDP1',
    targetBlank: true
  },
  callToAction2: {
    text: 'Síguenos en Twitter',
    href: 'https://twitter.com/asysteccr',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    // {
    //   label: 'Pages',
    //   icon: IconChevronDown,
    //   links: [
         {
           label: 'Servicios',
           href: '/servicios',
         },
        {
          label: 'Planes',
          href: '/planes',
        },
    //     {
    //       label: 'FAQs',
    //       href: '/faqs',
    //     },
    //     {
    //       label: 'Privacy Policy',
    //       href: '/privacy',
    //     },
    //     {
    //       label: 'Terms & Conditions',
    //       href: '/terms',
    //     },
    //   ],
    // },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contacto',
      href: '/contacto',
    },
  ],
  actions: [
    {
      text: 'Iniciar Sesion',
      href: 'https://mi.cobrosapp.com',
      targetBlank: true,
      btnType: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Hero data
export const heroData: HeroProps = {
  title: (
    <>
        Tu éxito es nuestro compromiso
      {/* Free template for <span className="hidden md:inline">starts a website using</span> <span>Next.js</span> +{' '}
      <span className="sm:whitespace-nowrap">Tailwind CSS</span> */}
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          {/* TailNext */}
        </span>{' '}
        {/* is a production ready template to start your new website using <em>Next.js</em> + <em>Tailwind CSS</em>. */}
      </span>{' '}
      Estamos comprometidos con tu éxito y respaldamos nuestras soluciones de software con un equipo de expertos altamente capacitados y un soporte excepcional. Confía en nosotros para impulsar la innovación y el crecimiento de tu negocio.
    </>
  ),
  callToAction: {
    text: 'Crear Cuenta',
    href: 'https://mi.cobrosapp.com/register',
    icon: IconUserPlus,
    targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Learn more',
    href: '/',
  },
  image: {
    src: heroImg,
    alt: 'Hero Asystec',
  },
};

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'Las grandes empresas las hacen las grandes personas',
  subtitle:
    'Estamos comprometidos con tu éxito y respaldamos nuestras soluciones de software con un equipo de expertos altamente capacitados y un soporte excepcional. Confía en nosotros para impulsar la innovación y el crecimiento de tu negocio.',
  callToAction: {
    text: 'Ver planes',
    href: 'https://www.linkedin.com/',
    targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Contacto',
    href: '/contacto',
  },
  image: {
    src: hero2Img,
    alt: 'Hero TailNext',
  },
};

// SocialProof data
export const socialProofData: SocialProofProps = {
  images: [
    {
      link: 'https://asystec.io',
      src: asystecLogo,
      alt: 'Asystec Logo',
    },
  ],
};

// FAQS data
export const faqsData: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'Who we are and what we do?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What values and principles guide our work?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'What is our experience?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What is our team like?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'How do we engage with the community?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'What support channels do we offer?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// FAQS data 2
export const faqsData2: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'What do I need to start?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'How to install the NextJS + Tailwind CSS template?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: "What's something that you completely don't understand?",
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: "What's an example of when you changed your mind?",
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'What is something that you would really like to try again?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'If you could only ask one question to each person you meet, what would that question be?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    // highlight: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'Which plan is best for me?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What are my payment options?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'How do I change my plan to a different one?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What happen at the end of my free trial?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'Can I import data from other tools?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'Can I cancel my plan at any time?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnText: 'uppercase',
    btnType: 'primary',
  },
};

// FAQS4 data
export const faqs4Data: FAQsProps = {
  header: {
    title: 'Preguntas Frecuentes',
    subtitle:
      'Aquí encontrarás respuestas a las preguntas más comunes que nuestros clientes suelen hacer. Esperamos que esta sección te ayude a aclarar cualquier duda o inquietud que puedas tener. Si no encuentras la respuesta que buscas, no dudes en contactarnos directamente y estaremos encantados de ayudarte.',
    highlight: '',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'Factura Electrónica',
        href: '/tab1',
      },
      items: [
        {
          title: '¿Qué es una factura digital o electrónica?',
          description: `La factura electrónica es un documento comercial con efectos tributarios generado y transmitido en formato electrónico. Debe cumplir con los requisitos legales que se exigen a las facturas tradicionales garantizando la autenticidad de su origen y la integridad de su contenido.
          Para que la factura electrónica tenga validez debe estar firmado por una llave criptográfica.`,
        },
        {
          title: '¿Qué es la llave criptográfica?',
          description: `La llave criptográfica es un archivo que permite garantizar la autoría e integridad de los documentos digitales, posibilitando que éstos gocen de una característica que únicamente era propia de los documentos en papel. Esta llave criptografica es generada en el sistema ATV del Ministerio de Hacienda.`,
        },
        {
          title: "¿Qué opciones existen para comenzar a facturar digitalmente?",
          description: `La Dirección General de Tributación ha autorizado a los contribuyentes a desarrollar sus propias aplicaciones o a contratar a proveedores de soluciones para la facturación electrónica. Asystec es uno de los mejores proveedores de facturación electrónica en la que brindan soporte gratuito para que puedas realizar tus facturas y cobrar a tus clientes de una forma fácil y rápida.`,
        },
        {
          title: "¿Qué exige Tributación dentro del sistema de factura electrónica?",
          description: `El sistema de facturación electrónica debe contar con una opción de consulta para la utilización de la Administración Tributaria, que admita el acceso en línea a los datos, copia o descarga en un archivo electrónico de la información consultada.`,
        },
        {
          title: '¿Se debe imprimir la factura digital o solo se envía por correo?',
          description: `En el caso de los consumidores finales se debe imprimir la factura digital a menos que el receptor especifique que prefiere recibirla por correo electrónico. Cuando la trasacción se realiza entre personas físicas o jurídicas registradas en la Administración Tributaria, para emitir y recibir documentos electrónicos no es necesaria la impresión de la factura electrónica.`,
        },
        {
          title: '¿Cuáles otros documentos se pueden emitir electrónicamente además de las facturas?',
          description: `Los comprobantes electrónicos deberán conservarse por un plazo de cinco años conforme con lo establecido en el artículo 109 del Código de Normas y Procedimientos Tributarios y sus reformas, independientemente de que los contribuyentes se encuentren obligados a enviarlos al Ministerio de Hacienda para su respectiva validación.`,
        },
        {
            title: '¿Cuánto tiempo deben conservarse los comprobantes electrónicos?',
            description: `Los comprobantes electrónicos deberán conservarse por un plazo de cinco años conforme con lo establecido en el artículo 109 del Código de Normas y Procedimientos Tributarios y sus reformas, independientemente de que los contribuyentes se encuentren obligados a enviarlos al Ministerio de Hacienda para su respectiva validación.`,
          },
          {
            title: '¿Qué validez tienen los comprobantes electrónicos para el Ministerio de Hacienda?',
            description: `La validez que los comprobantes electrónicos establecidos en la Resolución DGT-R-48-2016, tienen para el Ministerio de Hacienda, para los efectos tributarios, consiste en la eficacia jurídica y fuerza probatoria en las mismas condiciones que los comprobantes físicos autorizados.`,
          },
          {
            title: '¿Se puede modificar o anular la factura electrónica original?',
            description: `La validez que los comprobantes electrónicos establecidos en la Resolución DGT-R-48-2016, tienen para el Ministerio de Hacienda, para los efectos tributarios, consiste en la eficacia jurídica y fuerza probatoria en las mismas condiciones que los comprobantes físicos autorizados.`,
          },
          {
            title: '¿Hay sanciones por incumplimiento?',
            description: `Sí. Debido a que la facturación electrónica es obligatoria en Costa Rica, las personas que incumplan con su uso se exponen a sanciones en forma de multas económicas, que dependerán del tipo de infracción y pueden ir desde dos salarios base hasta el 2% de los ingresos brutos del infractor.`,
          },
      ],
    },
    {
      link: {
        label: 'Plans, prices and payments',
        href: '/tab2',
      },
      items: [
        {
          title: 'Which plan is best for me?',
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: 'What are my payment options?',
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: 'How do I change my plan to a different one?',
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: 'What happen at the end of my free trial?',
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: 'Can I import data from other tools?',
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: 'Can I cancel my plan at any time?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: 'Others',
        href: '/tab3',
      },
      items: [
        {
          title: 'How do I download the template?',
          description: `In ullamcorper pellentesque ante, nec commodo ex euismod viverra. Phasellus facilisis, justo a bibendum pellentesque, nibh est egestas lectus, volutpat ullamcorper arcu ante ac dolor.`,
        },
        {
          title: 'How do I customize the template?',
          description: `Pellentesque semper euismod malesuada. Curabitur quis lectus tortor. Aliquam efficitur pretium tellus, ut sagittis turpis dignissim eget. Etiam scelerisque nec risus eget iaculis. Nunc maximus metus id felis dapibus, sed ullamcorper sapien faucibus.`,
        },
        {
          title: 'Does the template come with any tutorials or instructions?',
          description: `Sed sagittis arcu suscipit auctor suscipit. Nam dapibus risus vitae tristique fermentum. In egestas turpis elit, id gravida diam dictum eu. Ut dictum libero ut rhoncus egestas. Ut sit amet tortor blandit, faucibus tellus vitae, consequat purus. Nullam id odio enim.`,
        },
        {
          title: 'Are there any additional fees or charges for using the template?',
          description: `Fusce efficitur, augue et vulputate pharetra, augue turpis viverra turpis, id tempor purus eros sed erat. Curabitur blandit eget sem vitae malesuada.`,
        },
      ],
    },
  ],
};

// CallToAction data
export const callToActionData: CallToActionProps = {
  title: 'Asystec + Innovación',
  subtitle:
    ' Descubre cómo nuestra experiencia, pasión y compromiso se traducen en una colaboración sólida y exitosa con nuestros clientes. Confía en nuestro equipo para superar tus expectativas y lograr tus objetivos comerciales.',
  callToAction: {
    text: 'Registrarme',
    href: 'https://app.asystec.io/register',
    icon: IconUserPlus,
  },
  items: [
    // {
    //   title: 'Registrarme',
    //   description: 'Quiero tomar el control de mi negocio',
    //   href: 'https://app.asystec.io/register',
    // },
    {
      title: 'Ver Blog',
      description: 'Échale un vistazo a nuestro blog',
      href: '/blog',
    },
    {
      title: 'Suscribirme',
      description: 'Suscribete para enterarte de las ultimas novedades',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          placeholder: 'Digite a su correo',
        },
        btn: {
          title: 'Suscribir',
          type: 'submit',
        },
      },
    },
  ],
};

// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: 'Tu pregunta no esta en la lista?',
  subtitle:
    'Contáctanos, sera un gusto responder a todas tus preguntas, incluso si aun no disfrutas de los servicios de Asystec! ',
  callToAction: {
    text: 'Contáctanos',
    href: '/contacto',
    btnType: 'primary',
  },
};

// Feature data
export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        Porque elegir <span className="whitespace-nowrap">Asystec?</span>
      </>
    ),
    subtitle:
      'Aqui tienes algunas razones por las que deberias adquirir nuestras soluciones de Software',
    highlight: 'Beneficios',
  },
  items: [
    {
      title: 'Soporte y servicio al cliente excepcionales',
      description: 'Estamos aquí para ti. Nuestro excepcional servicio al cliente brinda soporte confiable y soluciones efectivas a tus necesidades.',
      icon: IconHelpCircle,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Eficiencia y ahorro de tiempo',
      description:
        'Gana tiempo para disfrutar con tu familia. Nuestra solución eficiente automatiza tareas, liberándote para compartir con los que mas amas.',
      icon: IconClockHour5,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Acceso a información y análisis en tiempo real',
      description:
        'Toma decisiones estratégicas con información actualizada al instante. Accede a datos y análisis en tiempo real para impulsar tu negocio.',
      icon: IconListCheck,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Innovacion y actualizaion constante',
      description: 'Destaca en el mercado. Nuestra solución se actualiza constantemente con innovaciones que te mantienen por delante de la competencia.',
      icon: IconRocket,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Reducción de costos',
      description:
        'Optimiza tus recursos y maximiza tu rentabilidad. Nuestra solución reduce costos al automatizar tareas y optimizar procesos.',
      icon: IconBulb,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Facilidad de uso e interfaz intuitiva',
      description:
        'Simplifica tu experiencia. Nuestra interfaz intuitiva y fácil de usar te permite aprovechar al máximo nuestra solución sin complicaciones.',
      icon: IconClipboardData,
      
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Feature2 data
export const features2Data: FeaturesProps = {
  header: {
    title: 'Centro de Soporte',
    subtitle: 'Estas buscando algo en particular?',
  },
  items: [
    {
      title: 'Tienes una pregunta?',
      description: 'Mira nuestra seccion de preguntas frecuentes',
      icon: IconHelp,
      link: {
        href: '/faqs',
      },
    },
    {
      title: 'Chatea con nosotros',
      description: 'Chatea ahora con el equipo de Soporte',
      icon: IconMessages,
      link: {
        href: 'https://wa.me/message/FSR5FX2SAKTDP1',
        target: '_blank'
      },
    },
    {
      title: 'Obtener ayuda',
      description: 'Mira nuestro blog',
      icon: IconBrandBlogger,
      link: {
        href: '/blog',
      },
    },
  ],
};

// Feature data 3
export const featuresData3: FeaturesProps = {
  header: {
    title: 'Services',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconListCheck,
    },
    {
      title: 'Excellent Page Speed',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Open to new ideas and contributions',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconBulb,
    },
  ],
};

// Content data
export const contentData: ContentProps = {
  header: {
    title: 'CobrosApp',
    subtitle: 'Simplifica tu gestión financiera con eficiencia y rapidez.',
    highlight: 'Nuestros sistemas',
  },
  content:
    'Transforma la gestión de cobros con la innovación de CobrosApp: eficiencia, control y resultados excepcionales en un solo sistema.',
  items: [
    {
      title: 'Recordatorios Automáticos',
      description:
        'Olvídate de perder seguimientos. CobrosApp te notifica automáticamente para mantener un flujo constante de cobros.',
    },
    {
      title: 'Informe Detallado',
      description:
        'Accede a análisis detallados de cuentas pendientes y estados de pago para tomar decisiones informadas y estratégicas.',
    },
    {
      title: 'Centralización Eficiente',
      description:
        'Gestiona todos tus cobros desde una plataforma centralizada, simplificando el proceso y mejorando la liquidez de tu negocio.',
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1617228679684-890412dc57a5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'CobrosApp',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content2 data
export const content2Data: ContentProps = {
  header: {
    title: 'FacturacionApp',
    subtitle: 'Agiliza tus procesos de facturación con precisión y rapidez.',
  },
  content:
    'Facturación Simplificada: Descubre cómo FacturacionApp optimiza el proceso de emisión de facturas para tu negocio.',
  items: [
    {
      title: 'Emisión Rápida y Precisa',
      description:
        'Genera facturas de manera eficiente, asegurando la precisión de los datos del proyecto.',
    },
    {
      title: 'Integración Perfecta',
      description:
        'Conéctate sin esfuerzo con Asystec para una gestión fluida de datos y proyectos.',
    },
    {
      title: 'Seguridad de Datos',
      description:
        'Garantiza la confidencialidad de tu información financiera con sólidas medidas de seguridad.',
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'FacturacionApp',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data
export const stepsData: StepsProps = {
  title: 'Sed ac magna sit amet risus tristique interdum. hac.',
  items: [
    {
      title: 'Step 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
      icon: IconCheck,
    },
  ],
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
};

// Team data
export const teamData: TeamProps = {
  header: {
    title: 'Nuestro Equipo',
    subtitle:
      'Conoce a nuestro equipo altamente capacitado y comprometido en proporcionarte un servicio excepcional. Nuestros profesionales son expertos en sus respectivos campos y están dedicados a ofrecerte soluciones personalizadas y resultados de calidad.',
    // highlight: 'Team',
  },
  teams: [
    {
      name: 'Bryan Valerin',
      occupation: 'CEO, Desarrollador, Soporte',
      image: {
        src: '/images/team/bryan.png',
        alt: 'Bryan Valerin',
      },
      items: [
        {
          title: 'WhatsaApp',
          icon: IconBrandWhatsapp,
          href: 'https://wa.me/message/FSR5FX2SAKTDP1',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://github.com/bvalerin',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    // {
    //     name: 'Steven Gonzalez',
    //     occupation: 'Administrativo, Soporte',
    //     image: {
    //       src: '',
    //       alt: 'Steven Gonzalez',
    //     },
    //     items: [
    //       {
    //         title: 'WhatsaApp',
    //         icon: IconBrandWhatsapp,
    //         href: 'https://wa.me/message/FSR5FX2SAKTDP1',
    //       },
    //       {
    //         title: 'Know more on Linkedin',
    //         icon: IconBrandLinkedin,
    //         href: 'https://wa.me/message/FSR5FX2SAKTDP1',
    //       },
    //       {
    //         title: 'Contact by email',
    //         icon: IconMail,
    //         href: 'https://wa.me/message/FSR5FX2SAKTDP1',
    //       },
    //     ],
    //   },
  ],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    title: 'What our customers say about us',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
    // highlight: 'Testimonial',
  },
  testimonials: [
    {
      name: 'Tayla Kirsten',
      occupation: 'Marketing Manager',
      comment:
        'Suspendisse mollis ante turpis, ut fermentum nulla finibus ac. Integer ut justo id dolor lobortis pharetra. Integer ultrices leo a nunc ullamcorper commodo. In id nulla et nibh pretium pretium non vel metus. Suspendisse dapibus quis lorem sit amet fermentum. Ut a dapibus justo. In faucibus molestie pretium. Cras eros orci, bibendum fringilla elit at, vehicula maximus eros. Aenean placerat aliquet mi, et pellentesque dolor gravida at.',
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Silver Jordan',
      occupation: 'Senior Marketer',
      comment:
        'Mauris semper enim dolor, ac dictum sapien sollicitudin quis. Quisque id pharetra mi. Phasellus eu posuere lectus, vitae rhoncus velit. Nullam imperdiet purus quis dapibus vestibulum. Integer purus ex, hendrerit at elementum non, varius a nibh. Ut eget convallis mi. Morbi mattis, felis sit amet consectetur scelerisque, odio purus ornare sapien, in feugiat lorem tellus et magna. Pellentesque luctus dolor in ornare mattis.',
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Kelsey Arden',
      occupation: 'Co-Founder & CEO',
      comment:
        'Sed malesuada rhoncus arcu, sit amet condimentum leo pharetra feugiat. In augue quam, venenatis nec dui in, auctor tempus libero. Aliquam tempus ex id metus viverra blandit. Proin varius venenatis tortor, a pellentesque enim malesuada a. Aliquam lectus magna, interdum eget odio non, consequat imperdiet ipsum.',
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
  ],
};

// Pricing data
export const pricingData: PricingProps = {
  header: {
    title: 'Precios para cada plan',
    subtitle:
      'Descubre nuestros planes de CobrosApp: opciones flexibles, precios competitivos y soluciones adaptadas para todas las necesidades empresariales.',
    highlight: 'CobrosApp',
  },
  prices: [
    {
      title: 'Free',
      value: 0,
      period: 'por mes',
      texts: [
        '1 Empresa',
        '1 Usuario Administrador activo',
        '20 clientes',
        '20 creditos activos',
        '20 facturas por mes',
        '20 facturas recurrentes activas',
      ],
      callToAction: {
        text: 'Obtener plan',
        href: 'https://mi.cobrosapp.com/register',
        targetBlank: true,
      },
      hasRibbon: false,
    },
    {
      title: 'Basico',
      value: 20,
      period: 'por mes',
      texts: [        
      '2 Empresa',
      '2 Usuarios activos',
      '100 clientes',
      '100 creditos activos',
      '100 facturas por mes',
      '100 facturas recurrentes activas',],
      callToAction: {
        text: 'Obtener plan',
        href: 'https://mi.cobrosapp.com/register',
        targetBlank: true,
      },
      hasRibbon: false,
    },
    {
      title: 'Estandar',
      value: 50,
      period: 'por mes',
      texts: [
        '3 Empresa',
        '5 Usuarios activos',
        '500 clientes',
        '500 creditos activos',
        '100 facturas por mes',
        '50 facturas recurrentes activas',
      ],
      callToAction: {
        text: 'Obtener plan',
        href: 'https://mi.cobrosapp.com/register',
        targetBlank: true,
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'Premium',
      value: 150,
      period: 'por mes',
      texts: [
        '5 Empresa',
        '10 Usuario Administrador activo',
        '2000 clientes',
        '2000 creditos activos',
        '500 facturas por mes',
        '100 facturas recurrentes activas',
      ],
      callToAction: {
        text: 'Obtener plan',
        href: 'https://mi.cobrosapp.com/register',
        targetBlank: true,
      },
      hasRibbon: false,
    },
  ],
};

// Comparar planes
export const comparisonData: ComparisonProps = {
  header: {
    title: "¿Qué ofrece cada plan?",
    subtitle:
      'Explora las características distintivas de cada plan de CobrosApp: personaliza tu experiencia, optimiza la gestión y potencia tu negocio con facilidad',
    highlight: 'Comparación',
  },
  columns: [
    {
      title: 'compare los planes',
      items: [
        {
          title: 'Empresas',
        },
        {
          title: 'Usuarios activos',
        },
        {
          title: 'Precio',
        },
        {
          title: 'Vestibulum ornare',
        },
        {
          title: 'In hendrerit',
        },
        {
          title: 'Ut pharetra',
        },
      ],
    },
    {
      title: 'free',
      items: [
        {
          title: 'Free 7-day trial',
        },
        {
          title: 'Limited',
        },
        {
          title: '$29',
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'basico',
      items: [
        {
          title: 'Free 15-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$69',
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'estandar',
      items: [
        {
          title: 'Free 30-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$199',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: 'Free 30-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$199',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
  ],
};

// Stats
export const statsData: StatsProps = {
  items: [
    {
      title: 13269,
      description: 'Downloads',
    },
    {
      title: 24.8,
      description: 'Stars',
    },
    {
      title: 1767.77,
      description: 'Forks',
    },
    {
      title: 484000,
      description: 'Users',
    },
  ],
};

// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Contáctanos',
    subtitle: 'Nuestro equipo esta listo para ayudarte',
    highlight: 'Contacto',
  },
  content:
    '¡Nos encantaría saber de ti! Si tienes alguna pregunta, comentario o solicitud, no dudes en ponerte en contacto con nosotros a través de los siguientes medios:',
  items: [
    {
      title: 'Direccion',
      description: ['Torres Paseo Colón', 'San José, Costa Rica'],
      icon: IconMapPin,
    },
    {
      title: 'Teléfono',
      description: ['Teléfono: +506 8975-4741', 'Correo: info@asystec.io'],
      icon: IconPhoneCall,
    },
    {
      title: 'Horario',
      description: ['Lunes - Viernes: 8:00 - 17:00', 'Sábado y Domingo: Cerrado'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Listo para empezar?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Nombre',
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Correo',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Escribe aqui tu mensaje...',
    },
    btn: {
      title: 'Enviar Mensaje',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Get in Touch',
    subtitle: 'In hac habitasse platea dictumst',
    highlight: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
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
    description:
      'Mauris consequat, urna vel varius auctor, enim risus ornare felis, at hendrerit erat justo eu justo. Curabitur sagittis efficitur aliquam. Duis eget porttitor lectus, vel pharetra ex. Nam volutpat nibh ut porta egestas.',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
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

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
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
          label: 'Servicios',
          href: '/servicios',
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
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
        {' '}
        onWidget
      </a>{' '}
      · All rights reserved.
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
      label: 'Politica de Privacidad',
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
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/asysteccr' },
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
