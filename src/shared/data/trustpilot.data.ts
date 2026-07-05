export type TrustpilotReview = {
  author: string;
  country: string;
  date: string;
  rating: 5;
  topic: string;
  excerpt: string;
  summary: string;
  tags: string[];
};

export type TrustpilotTheme = {
  title: string;
  body: string;
};

export const trustpilotProfile = {
  source: 'Trustpilot',
  profileUrl: 'https://es.trustpilot.com/review/asystec.io',
  score: '4,5/5',
  scoreLabel: 'Excelente',
  reviewCount: 15,
  fiveStarShare: '100%',
  category: 'Compania de software',
  lastChecked: '5 de julio de 2026',
  profileClaimed: 'Perfil reclamado en noviembre de 2023',
  disclosure:
    'Resenas publicas de clientes, usadas con autorizacion expresa para mostrarlas en asystec.io. El perfil original se puede verificar en Trustpilot.',
};

export const trustpilotThemes: TrustpilotTheme[] = [
  {
    title: 'Soporte cercano',
    body: 'Los clientes destacan atencion rapida, acompanamiento y respuesta cuando necesitan resolver dudas operativas.',
  },
  {
    title: 'Facturacion y orden diario',
    body: 'Varias opiniones conectan a Asystec con facturacion electronica, continuidad y simplificacion del trabajo administrativo.',
  },
  {
    title: 'Mejora continua',
    body: 'La retroalimentacion resalta que el equipo escucha recomendaciones y convierte mejoras en una mejor experiencia.',
  },
];

export const trustpilotReviews: TrustpilotReview[] = [
  {
    author: 'Yanela Jimenez Cruz',
    country: 'CR',
    date: '6 de mayo de 2025',
    rating: 5,
    topic: 'Atencion rapida y amable',
    excerpt: 'Excelente servicio, muy rapidos',
    summary: 'Recomienda a Asystec por responder con rapidez y buen trato durante la atencion.',
    tags: ['Soporte', 'Atencion', 'Recomendacion'],
  },
  {
    author: 'Ivette Araya Otarola',
    country: 'CR',
    date: '7 de febrero de 2024',
    rating: 5,
    topic: 'Facturacion electronica',
    excerpt: 'Lo mejor en facturacion electronica',
    summary: 'Destaca la ayuda recibida cuando necesita soporte alrededor de facturacion electronica.',
    tags: ['Facturacion', 'Soporte', 'Pyme'],
  },
  {
    author: 'Jose Aguero',
    country: 'CR',
    date: '19 de noviembre de 2023',
    rating: 5,
    topic: 'Soporte recomendado',
    excerpt: 'Excelente soporte',
    summary: 'Resume su experiencia en una recomendacion directa por la calidad del soporte recibido.',
    tags: ['Soporte', 'Confianza'],
  },
  {
    author: 'Joe Avila',
    country: 'CR',
    date: '15 de noviembre de 2023',
    rating: 5,
    topic: 'Orden fiscal y acompananamiento',
    excerpt: 'Muy recomendados',
    summary:
      'Relata que Asystec le ayudo a ordenar atrasos, procesos de tributacion, facturacion y presentaciones diarias.',
    tags: ['Tributacion', 'Facturacion', 'Acompanamiento'],
  },
  {
    author: 'Jherson Kayro Trigoso Ysuiza',
    country: 'MX',
    date: '14 de noviembre de 2023',
    rating: 5,
    topic: 'Servicio profesional',
    excerpt: 'servicio de primera',
    summary: 'Describe una experiencia positiva y recomienda a Asystec por la calidad del servicio.',
    tags: ['Servicio', 'Recomendacion'],
  },
  {
    author: 'Luis Andrey Vasquez Saenz',
    country: 'CR',
    date: '17 de mayo de 2025',
    rating: 5,
    topic: 'Problemas, inquietudes y mejoras',
    excerpt: 'atentos a solucionar problemas',
    summary: 'Valora que el equipo atienda problemas, inquietudes y mejoras para beneficio del cliente.',
    tags: ['Soporte', 'Mejoras', 'Cliente'],
  },
];
