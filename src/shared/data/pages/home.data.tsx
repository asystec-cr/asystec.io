import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
  IconUserPlus,
  IconBrandWhatsapp,
  IconHelpCircle,
  IconClockHour5,
  IconClipboardData
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hero.jpg';
import asystecLogo from '~/assets/images/asystec-logo.png';
import pymeLogo from '~/assets/images/pyme.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import gasImg from '~/assets/images/gas.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Tu éxito es nuestro compromiso
    </>
  ),
  subtitle: (
    <>
      Estamos comprometidos con tu éxito y respaldamos nuestras soluciones de software con un equipo de expertos altamente capacitados y un soporte excepcional. Confía en nosotros para impulsar la innovación y el crecimiento de tu negocio.
    </>
  ),
  callToAction: {
    text: 'Crear Cuenta',
    href: 'https://cobros.asystec.io/register',
    icon: IconUserPlus,
    targetBlank: true,
  },
  callToAction2: {
    text: 'Learn more',
    href: '/',
  },
  image: {
    src: heroImg,
    alt: 'Asystec',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: true,
  images: [
    {
      link: '/',
      src: asystecLogo,
      alt: 'Asystec Logo',
    },
    {
      link: '/',
      src: pymeLogo,
      alt: 'Pyme Logo',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        Porque elegir <span className="whitespace-nowrap">Asystec?</span>
      </>
    ),
    subtitle: 'Aqui tienes algunas razones por las que deberias adquirir nuestras soluciones de Software',
    tagline: 'Beneficios',
  },
  items: [
    {
      title: 'Soporte y servicio al cliente excepcionales',
      description: 'Estamos aquí para ti. Nuestro excepcional servicio al cliente brinda soporte confiable y soluciones efectivas a tus necesidades.',
      icon: IconHelpCircle,
      // callToAction: {
      //   text: 'Discover now',
      //   href: '/',
      // },
    },
    {
      title: 'Eficiencia y ahorro de tiempo',
      description:
        'Gana tiempo para disfrutar con tu familia. Nuestra solución eficiente automatiza tareas, liberándote para compartir con los que mas amas.',
      icon: IconClockHour5,
      // callToAction: {
      //   text: 'Discover now',
      //   href: '/',
      // },
    },
    {
      title: 'Acceso a información y análisis en tiempo real',
      description:
        'Toma decisiones estratégicas con información actualizada al instante. Accede a datos y análisis en tiempo real para impulsar tu negocio.',
      icon: IconListCheck,
      // callToAction: {
      //   text: 'Discover now',
      //   href: '/',
      // },
    },
    {
      title: 'Innovacion y actualizaion constante',
      description: 'Destaca en el mercado. Nuestra solución se actualiza constantemente con innovaciones que te mantienen por delante de la competencia.',
      icon: IconRocket,
      // callToAction: {
      //   text: 'Discover now',
      //   href: '/',
      // },
    },
    {
      title: 'Reducción de costos',
      description:
        'Optimiza tus recursos y maximiza tu rentabilidad. Nuestra solución reduce costos al automatizar tareas y optimizar procesos.',
      icon: IconBulb,
      // callToAction: {
      //   text: 'Discover now',
      //   href: '/',
      // },
    },
    {
      title: 'Facilidad de uso e interfaz intuitiva',
      description:
        'Simplifica tu experiencia. Nuestra interfaz intuitiva y fácil de usar te permite aprovechar al máximo nuestra solución sin complicaciones.',
      icon: IconClipboardData,
      // callToAction: {
      //   text: 'Discover now',
      //   href: '/',
      // },
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Aliquip definiebas ad est',
    subtitle: 'Quando cetero his ne, eum admodum sapientem ut',
    tagline: 'Content',
  },
  content:
    'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
      description:
        'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
    },
    {
      title: 'Cu imperdiet posidonium sed',
      description:
        'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
      description:
        'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: 'Sed ac magna sit amet risus tristique interdum.',
  },
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
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What our customers say about us',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
  },
  testimonials: [
    {
      name: 'Tayla Kirsten',
      job: 'Marketing Manager',
      testimonial: `I'm impressed by the speed and performance of these templates. My website now loads in the blink of an eye, significantly enhancing my visitors' experience. Thanks to TailNext, my online business is thriving.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tayla Kirsten',
      },
      href: '/',
    },
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `I had never found it so easy to customize a website. TailNext's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Kelsey Arden',
      job: 'Co-Founder & CEO',
      testimonial: `As a beginner in web development, I really needed clear guidance. Tailnext made it possible. I was able to install and customize my website seamlessly, and I'm thrilled with the results!`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Kelsey Arden',
      },
      href: '/',
    },
    {
      name: 'Sarah Johnson',
      job: 'Business Owner',
      testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Keith Young',
      job: 'Freelance Developer',
      testimonial: `The clean code and integration with Next.js make my projects a breeze. Plus, the responsive design ensures that my clients' websites look amazing on any device. These templates have become my secret weapon for success!`,
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Keith Young',
      },
      href: '/',
    },
    {
      name: 'Lisa Gordon',
      job: 'Project Manager',
      testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with TailNext.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    tagline: 'FAQS',
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

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Etiam in libero, et volutpat',
        },
        {
          description: 'Aenean ac nunc dolor tristique',
        },
        {
          description: 'Cras scelerisque accumsan lib',
        },
        {
          description: 'In hac habitasse',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Proin vel laoreet',
        },
        {
          description: 'Ut efficitur egestas',
        },
        {
          description: 'Pellentesque ut nibh',
        },
        {
          description: 'Donec fringilla sem',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Curabitur suscipit risus',
        },
        {
          description: 'Aliquam blandit malesuada',
        },
        {
          description: 'Suspendisse sit amet',
        },
        {
          description: 'Suspendisse auctor dui',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Nuestro Equipo',
    subtitle:
    'Conoce a nuestro equipo altamente capacitado y comprometido en proporcionarte un servicio excepcional. Nuestros profesionales son expertos en sus respectivos campos y están dedicados a ofrecerte soluciones personalizadas y resultados de calidad.',
    // tagline: 'Equipo',
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
    {
      name: 'Jherson Trigoso',
      occupation: 'Desarrollador, Soporte',
      image: {
        src: '/images/team/foto-perfil.jpg',
        alt: 'Jherson Trigoso',
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
          href: 'https://wa.me/message/FSR5FX2SAKTDP1',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'https://wa.me/message/FSR5FX2SAKTDP1',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Contáctanos',
    subtitle: 'Nuestro equipo esta listo para ayudarte',
    tagline: 'Contacto',
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

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Asystec + Innovación',
  subtitle:
    'Descubre cómo nuestra experiencia, pasión y compromiso se traducen en una colaboración sólida y exitosa con nuestros clientes. Confía en nuestro equipo para superar tus expectativas y lograr tus objetivos comerciales.',
  callToAction: {
    text: 'Registrarme',
    href: 'https://cobros.asystec.io/register',
    icon: IconUserPlus,
  },
  items: [
    {
      title: 'Ver Blog',
      description: 'Échale un vistazo a nuestro blog',
      href: 'https://blog.asystec.io/',
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
          autocomplete: 'email',
        },
        btn: {
          title: 'Suscribir',
          type: 'submit',
        },
      },
    },
  ],
};
