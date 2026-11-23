import type { LandingLink, LandingPageData } from '../seo-landings.data';

const slug = 'reporte-antiguedad-cuentas-por-cobrar';
const demo = { label: 'Pedí una demo de Cobros Pro', href: '/contact' };
const product = { label: 'Conocé Cobros Pro', href: '/cobrosapp' };

export const agingGuideLink: LandingLink = {
  label: 'Cómo probar un reporte de antigüedad',
  href: `/guias/${slug}`,
};

export const agingGuidePage: LandingPageData = {
  slug,
  path: agingGuideLink.href,
  kind: 'guide',
  schemaType: 'Article',
  title: 'Reporte de antigüedad de cuentas por cobrar',
  seoTitle: 'Reporte de antigüedad de cuentas por cobrar | Asystec',
  description:
    'Probá si tu software de cobros clasifica los saldos por vencimiento, aplica abonos correctamente y permite verificar cada monto del reporte.',
  eyebrow: 'Guía de cuentas por cobrar para pymes',
  heroTitle: 'Reporte de antigüedad de cuentas por cobrar: cómo probarlo antes de elegir software',
  intro:
    'Si vendés a crédito en Costa Rica, llevá este caso a una demo de software de cobros. Podés probar el reporte sin compartir datos de tus clientes.',
  answer:
    'Un reporte de antigüedad te dice cuánto te deben a una fecha y cuánto tiempo lleva vencido cada saldo. La prueba es poder explicar de dónde sale cada monto: qué documento lo originó, qué abonos se aplicaron y por qué cae en ese rango.',
  primaryCta: demo,
  secondaryCta: product,
  modulesTitle: 'Qué conviene revisar en la demo',
  modulesIntro:
    'Llevá el ejemplo de abajo y compará las cifras que arroja el sistema con los saldos y vencimientos esperados.',
  modules: ['Fecha de corte', 'Abonos y saldo pendiente', 'Rangos de vencimiento', 'Detalle por documento'],
  highlightsTitle: 'Resultados esperados al 30 de noviembre',
  highlights: [
    '₡225.000 pendientes entre los tres documentos.',
    '₡135.000 vencidos, correspondientes a los documentos A y C.',
    '₡90.000 por vencer, correspondientes al documento B.',
    '₡75.000 vencidos en el rango de 1 a 30 días, después de aplicar el abono del documento A.',
  ],
  sections: [
    {
      title: 'Separá lo vencido de lo que está por vencer',
      body: 'Si la vista agrupa lo que está por vencer dentro de «0 a 30 días», ese grupo sumaría ₡165.000. De ese monto, solo ₡75.000 están vencidos. No usés el grupo completo como cifra de mora.',
    },
    {
      title: 'Comprobá el cierre histórico si lo necesitás',
      body: 'Simulá otro abono de ₡20.000 al documento A el 1 de diciembre. Su saldo actual bajaría a ₡55.000, pero al cierre del 30 de noviembre era de ₡75.000. Pedí ver cómo se conserva o reconstruye ese cierre. El saldo de hoy no responde por sí solo cuánto te debían el mes pasado.',
    },
    {
      title: 'Seguí el monto hasta su origen',
      body: 'Tomá los ₡60.000 del rango de 31 a 60 días y pedí ver qué documento lo explica, su vencimiento y su historial. Si gerencia necesita exportar el reporte, pedí una exportación de prueba y compará los totales. Si manejás colones y dólares, comprobá que los montos se distingan por moneda o que el reporte explique el criterio de conversión.',
    },
    {
      title: 'Cuándo vale la pena pedir una demo',
      body: 'Si cada cierre exige unir facturas, comprobantes y varias hojas, probá el flujo con quien prepara el reporte. Llevá este ejemplo, los rangos que usa tu equipo y las preguntas que gerencia necesita responder.',
    },
  ],
  decisionTable: {
    title: 'Probá el reporte con tres saldos conocidos',
    body: 'Usá el 30 de noviembre como fecha de corte. Cargá estos tres documentos ficticios y aplicá un abono de ₡45.000 al documento A antes del corte.',
    headers: {
      factor: 'Documento',
      question: 'Vencimiento, importe y abonos al corte',
      impact: 'Saldo y clasificación esperados',
    },
    rows: [
      {
        factor: 'A',
        question: 'Vence el 15 de noviembre. Importe: ₡120.000. Abonos: ₡45.000.',
        impact: '₡75.000 pendientes, con 15 días de atraso.',
      },
      {
        factor: 'B',
        question: 'Vence el 2 de diciembre. Importe: ₡90.000. Sin abonos.',
        impact: '₡90.000 pendientes, todavía por vencer.',
      },
      {
        factor: 'C',
        question: 'Vence el 15 de octubre. Importe: ₡60.000. Sin abonos.',
        impact: '₡60.000 pendientes, con 46 días de atraso.',
      },
    ],
  },
  faqs: [
    {
      question: '¿Desde cuándo se cuentan los días de atraso?',
      answer:
        'Contá los días desde el vencimiento hasta la fecha de corte. En este ejemplo, al 30 de noviembre un documento que venció el 15 de noviembre lleva 15 días de atraso.',
    },
    {
      question: '¿Se compara el importe original o el saldo pendiente?',
      answer:
        'Para el reporte de antigüedad compará el saldo que seguía pendiente al corte. En el documento A son ₡75.000, no los ₡120.000 originales.',
    },
  ],
  relatedTitle: 'Más recursos para ordenar tu cartera',
  relatedIntro:
    'Si todavía estás definiendo responsables y próximos pasos, empezá por la guía general de cuentas por cobrar.',
  related: [
    { label: 'Cómo organizar las cuentas por cobrar de una pyme', href: '/guias/como-organizar-cuentas-por-cobrar' },
    { label: 'Software de cuentas por cobrar', href: '/soluciones/cuentas-por-cobrar' },
    product,
  ],
  finalCta: {
    title: 'Probá el flujo de cobros con tu equipo',
    body: 'Revisá si el flujo de abonos, saldos, estados de cuenta y reportes encaja con tu operación. Confirmá en la demo los rangos, el corte histórico y la exportación que necesitás. Usá datos ficticios o anonimizados.',
    primary: demo,
    secondary: product,
  },
};
