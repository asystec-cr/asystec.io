export const NEXO_TITLE = 'Agente Nexo | Su agente de IA para empresas, 24/7';

export const NEXO_DESCRIPTION =
  'Un agente de IA que trabaja para su empresa, 24/7. Automatice reportes, ventas, marketing, redes sociales y operaciones con una solución diseñada para su negocio.';

export const NEXO_CONTACT_HREF =
  'https://wa.me/50689754741?text=' +
  encodeURIComponent(
    'Hola Asystec, me interesa Agente Nexo para mi empresa. Quiero conocer cómo podemos automatizar una tarea o proceso de mi negocio.',
  );

export type NexoUseCase = {
  id: 'reportes' | 'ventas' | 'marketing' | 'redes' | 'operaciones';
  label: string;
  title: string;
  description: string;
  benefits: string[];
  request: string;
  work: string;
  result: string;
};

// These scenarios illustrate a proposed workflow. They are not live executions
// or a list of integrations already available for every customer.
export const nexoUseCases: NexoUseCase[] = [
  {
    id: 'reportes',
    label: 'Reportes',
    title: 'De la información a la decisión.',
    description:
      'Convierta información de su negocio en reportes, resúmenes e indicadores con la frecuencia que su equipo necesita.',
    benefits: ['Reportes recurrentes', 'Resúmenes de actividad', 'Seguimiento de indicadores'],
    request: 'Prepare el reporte semanal de ventas y destaque los pendientes.',
    work: 'Revisa las fuentes autorizadas, organiza la información y señala los datos que requieren atención.',
    result: 'Un reporte con el resumen de ventas, los pendientes y sus fuentes, listo para revisar.',
  },
  {
    id: 'ventas',
    label: 'Ventas',
    title: 'Dé continuidad a cada oportunidad comercial.',
    description:
      'Configure un agente para responder consultas, organizar oportunidades y dar seguimiento en los canales de su negocio, incluido WhatsApp.',
    benefits: ['Atención de consultas', 'Seguimiento comercial', 'Información para su equipo'],
    request: 'Dé seguimiento a las personas que solicitaron información sobre nuestros servicios.',
    work: 'Revisa el contexto de cada consulta y prepara el seguimiento según las reglas comerciales acordadas.',
    result: 'Oportunidades organizadas y mensajes de seguimiento preparados para el proceso de su equipo.',
  },
  {
    id: 'marketing',
    label: 'Marketing',
    title: 'Avance sus campañas con un agente que conoce su marca.',
    description:
      'Prepare ideas, textos y propuestas de campaña alineadas con sus objetivos, su audiencia y la información de su negocio.',
    benefits: ['Ideas de campaña', 'Textos de marca', 'Análisis de resultados'],
    request: 'Prepare una propuesta de campaña para presentar nuestro nuevo servicio.',
    work: 'Utiliza el brief y las referencias de marca para organizar el mensaje, las piezas y los próximos pasos.',
    result: 'Una propuesta de campaña con mensajes y contenidos para la revisión de su equipo.',
  },
  {
    id: 'redes',
    label: 'Redes sociales',
    title: 'Mantenga el contenido de su negocio en movimiento.',
    description:
      'Organice su calendario, prepare publicaciones y defina las tareas de gestión que quiere automatizar en sus redes sociales.',
    benefits: ['Calendario de contenido', 'Borradores de publicaciones', 'Flujos de aprobación'],
    request: 'Organice las publicaciones de la próxima semana alrededor de nuestros servicios.',
    work: 'Distribuye los temas en el calendario y prepara borradores siguiendo el tono y los objetivos de su marca.',
    result: 'Un calendario de publicaciones y sus textos, listos para aprobar antes de publicar.',
  },
  {
    id: 'operaciones',
    label: 'Operaciones',
    title: 'Haga avanzar el trabajo que se repite cada día.',
    description:
      'Organice información, prepare documentos y conecte los pasos de sus procesos con las herramientas y permisos definidos para su empresa.',
    benefits: ['Tareas recurrentes', 'Documentos y registros', 'Seguimiento de pendientes'],
    request: 'Organice las solicitudes recibidas y prepare el resumen de pendientes.',
    work: 'Clasifica la información disponible, identifica datos faltantes y agrupa los pendientes por responsable.',
    result: 'Un resumen organizado para que cada persona conozca sus pendientes y el siguiente paso.',
  },
];

export type NexoFaq = {
  question: string;
  answer: string;
};

export const nexoFaqs: NexoFaq[] = [
  {
    question: '¿Qué es Agente Nexo?',
    answer:
      'Es un agente de inteligencia artificial configurado para realizar tareas y automatizar procesos de su empresa. Partimos del trabajo que quiere delegar y definimos qué información utilizará, qué hará y qué resultados entregará.',
  },
  {
    question: '¿Solo sirve para vender por WhatsApp?',
    answer:
      'Nexo puede configurarse para reportes, ventas, marketing, redes sociales y operaciones. WhatsApp es uno de los canales que puede formar parte de la solución. El punto de partida es la necesidad de su empresa.',
  },
  {
    question: '¿Qué significa que trabaja 24/7?',
    answer:
      'Los procesos configurados pueden operar durante el día y la noche, según la programación y las reglas acordadas. La ejecución depende de la disponibilidad de los sistemas conectados y de las aprobaciones que requiera cada tarea. El horario de soporte humano se define en la propuesta de servicio.',
  },
  {
    question: '¿Puede automatizar el proceso que tengo en mente?',
    answer:
      'Cuéntenos cómo realiza el trabajo hoy, qué herramientas utiliza y qué resultado necesita. Evaluamos la viabilidad y definimos qué puede ejecutar Nexo y qué pasos requieren revisión de una persona. Puede empezar con una tarea concreta y ampliar el alcance después.',
  },
  {
    question: '¿Se puede conectar con las herramientas de mi empresa?',
    answer:
      'Revisamos sus herramientas y las opciones de conexión antes de definir la solución. La propuesta detalla las integraciones, los accesos necesarios y cualquier configuración o desarrollo adicional. No necesita usar Asystec POS para iniciar esa evaluación.',
  },
  {
    question: '¿Cuánto cuesta y cómo puedo comenzar?',
    answer:
      'Preparamos una propuesta según la complejidad de los procesos, las integraciones y el volumen de trabajo. Allí se detallan la configuración, la operación, el soporte y los costos adicionales que apliquen. Para comenzar, comparta la tarea que quiere delegar y un ejemplo del resultado que espera.',
  },
];
