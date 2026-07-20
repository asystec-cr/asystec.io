import type { LandingPageData } from '../seo-landings.data';

const contactCta = { label: 'Solicitar demo de FitPro', href: '/contact' };
const whatsappCta = {
  label: 'Consultar por WhatsApp',
  href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20evaluar%20FitPro%20para%20mi%20gimnasio%20o%20centro%20fitness.',
};

export const gimnasiosIndustryPage: LandingPageData = {
  slug: 'gimnasios',
  path: '/industrias/gimnasios',
  kind: 'industry',
  schemaType: 'Service',
  title: 'Software para gimnasios en Costa Rica',
  seoTitle: 'Software para gimnasios en Costa Rica | Asystec',
  description:
    'Software para gimnasios y centros fitness en Costa Rica con membresias, pagos, clases, cupos, asistencia, check-ins y reportes operativos.',
  eyebrow: 'FitPro para gimnasios y centros fitness',
  heroTitle: 'Controla membresias, cobros, clases y asistencia con FitPro',
  answer:
    'Un software para gimnasios debe conectar clientes, membresias, pagos, vencimientos, clases, cupos, asistencia y reportes. FitPro permite ordenar esos procesos desde una plataforma web; la demo confirma tipos de membresia, usuarios, sedes y controles que requiere cada centro fitness.',
  intro:
    'Esta pagina ayuda a gimnasios, estudios boutique y centros de entrenamiento en Costa Rica a comparar el alcance operativo que necesitan y preparar una demostracion basada en su flujo real.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  highlights: [
    'Membresias activas, renovaciones y vencimientos visibles.',
    'Pagos y saldos pendientes conectados con cada cliente.',
    'Clases, horarios, cupos y asistencia en un mismo flujo.',
    'Reportes operativos para recepcion y administracion.',
  ],
  modules: ['Clientes', 'Membresias', 'Pagos', 'Clases y cupos', 'Check-ins', 'Reportes'],
  sections: [
    {
      title: 'Membresias, renovaciones y cobros',
      body: 'La recepcion necesita saber quien tiene una membresia activa, que pago se registro, que saldo sigue pendiente y cuando corresponde revisar una renovacion. Centralizar esa informacion evita reconstruir el estado del cliente entre hojas, mensajes y recibos separados.',
      items: [
        'Clientes y contratos asociados a la operacion',
        'Membresias activas y fechas de vencimiento',
        'Pagos, saldos pendientes y renovaciones',
        'Informacion disponible para recepcion y administracion',
      ],
    },
    {
      title: 'Clases, horarios y cupos',
      body: 'Los estudios y centros que trabajan por horario deben revisar disponibilidad, asistencia y ocupacion sin depender de conversaciones aisladas. FitPro permite organizar clases y cupos; la demo debe validar reglas, responsables y excepciones del centro.',
      items: [
        'Agenda de clases por horario',
        'Cupos disponibles para cada sesion',
        'Asistencia por clase o instructor',
        'Informacion operativa para ajustar horarios',
      ],
    },
    {
      title: 'Check-ins y seguimiento de asistencia',
      body: 'Registrar entradas ayuda a confirmar uso, asistencia y actividad diaria. FitPro contempla check-ins y reportes de asistencia; cualquier lector, control biometrico, torniquete o integracion externa debe revisarse por separado antes de asumir compatibilidad.',
      items: [
        'Registro de check-ins del cliente',
        'Consulta de asistencia por periodo',
        'Indicadores para recepcion y gerencia',
        'Validacion aparte de hardware o integraciones de acceso',
      ],
    },
    {
      title: 'Una demo con el flujo real del gimnasio',
      body: 'La demostracion debe partir del tipo de centro, cantidad de clientes, membresias, clases, usuarios, sedes y reportes esperados. Asi se separa lo que FitPro ya cubre de cualquier configuracion o integracion que necesite validacion adicional.',
      items: [
        'Tipos de membresia, cobro y vencimiento',
        'Clases, horarios, cupos e instructores',
        'Usuarios de recepcion y administracion',
        'Sedes, reportes y controles que deben confirmarse',
      ],
    },
  ],
  decisionTable: {
    title: 'Que revisar al elegir software para un gimnasio',
    body: 'Estas preguntas convierten una lista de funciones en una evaluacion practica para comparar FitPro con el proceso diario del centro fitness.',
    rows: [
      {
        factor: 'Membresias',
        question: 'Que planes, vigencias, renovaciones y estados necesita controlar el gimnasio?',
        impact: 'Define como recepcion consulta clientes activos, vencimientos y cambios de membresia.',
      },
      {
        factor: 'Pagos y saldos',
        question: 'Como se registran pagos, pendientes y renovaciones de cada cliente?',
        impact: 'Permite comprobar si administracion puede revisar cobros sin mantener controles paralelos.',
      },
      {
        factor: 'Clases y cupos',
        question: 'Que horarios, limites, instructores y reglas de asistencia maneja el centro?',
        impact: 'Aclara como se organiza la agenda y que informacion necesita el equipo en cada sesion.',
      },
      {
        factor: 'Acceso y asistencia',
        question: 'Como se registran hoy los check-ins y se necesita conectar algun equipo externo?',
        impact: 'Separa el registro operativo incluido de cualquier hardware o integracion por validar.',
      },
      {
        factor: 'Usuarios, sedes y reportes',
        question: 'Quien usa el sistema, que debe consultar y que indicadores necesita cada sede?',
        impact: 'Ayuda a confirmar permisos, alcance administrativo y reportes antes de implementar.',
      },
    ],
  },
  faqs: [
    {
      question: 'Que debe tener un software para gimnasios en Costa Rica?',
      answer:
        'Como base conviene evaluar clientes, membresias, pagos, vencimientos, clases, cupos, asistencia, usuarios y reportes. Si existen varias sedes o equipos de acceso, ese alcance debe confirmarse durante la demo.',
    },
    {
      question: 'FitPro permite controlar pagos y vencimientos?',
      answer:
        'Si. FitPro permite dar seguimiento a membresias activas, vencimientos, pagos y saldos pendientes para que recepcion y administracion consulten el estado del cliente.',
    },
    {
      question: 'Se pueden administrar clases y cupos?',
      answer:
        'Si. FitPro contempla horarios, clases, cupos y asistencia. En la demo conviene revisar tipos de sesion, instructores, limites y reglas especiales del centro.',
    },
    {
      question: 'FitPro se conecta con lectores, biometria o torniquetes?',
      answer:
        'No debe asumirse compatibilidad automatica. FitPro contempla check-ins y asistencia, pero cualquier lector, control biometrico, torniquete o integracion debe validarse con el equipo y el flujo existente.',
    },
    {
      question: 'Que informacion conviene llevar a la demo?',
      answer:
        'Conviene llevar tipos de membresia, cantidad de clientes, formas de pago, clases, horarios, cupos, usuarios, sedes, reportes actuales y cualquier control de acceso que deba evaluarse.',
    },
  ],
  related: [
    { label: 'Conocer FitPro', href: '/fitpro' },
    { label: 'Cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
    { label: 'Reportes para pymes', href: '/soluciones/reportes' },
    { label: 'Software multi-sucursal', href: '/soluciones/multi-sucursal' },
    { label: 'Integraciones de software', href: '/soluciones/integraciones' },
    { label: 'Servicios profesionales', href: '/industrias/servicios-profesionales' },
    { label: 'Coordinar demo', href: '/contact' },
  ],
  finalCta: {
    title: 'Prepara una demo de FitPro con tu operacion real',
    body: 'Comparte como manejas membresias, pagos, clases, asistencia, usuarios y sedes para confirmar el alcance sin asumir funciones o integraciones que no hayas validado.',
    primary: contactCta,
    secondary: whatsappCta,
  },
};
