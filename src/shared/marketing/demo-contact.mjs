const products = {
  'factura-pro': { label: 'Factura Pro', scope: 'Facturas al mes', ranges: ['Hasta 100', '101 a 500', 'Más de 500'] },
  'cobros-pro': {
    label: 'Cobros Pro',
    scope: 'Cuentas por cobrar activas',
    ranges: ['Hasta 50', '51 a 250', 'Más de 250'],
  },
  'asystec-pos': { label: 'Asystec POS', scope: 'Cantidad de cajas', ranges: ['1', '2 a 5', '6 o más'] },
  'restaurante-pro': { label: 'Restaurante Pro', scope: 'Cantidad de sucursales', ranges: ['1', '2 a 5', '6 o más'] },
};

export const demoProblems = [
  'Ordenar caja o inventario',
  'Simplificar la facturación',
  'Dar seguimiento a cobros',
  'Reducir trabajo manual',
];

export const getDemoProduct = (value) =>
  typeof value === 'string' && Object.prototype.hasOwnProperty.call(products, value) ? products[value] : undefined;

export const productDemoHref = (key) =>
  getDemoProduct(key) ? `/contact?producto=${key}#coordinar-demo` : '/contact#coordinar-demo';

export const demoWhatsAppHref = (key, reference, problem, range) => {
  const product = getDemoProduct(key);
  const message = [
    'Hola Asystec, quiero coordinar una demo para mi negocio.',
    product && `Producto: ${product.label}`,
    reference,
    demoProblems.includes(problem) && `Problema principal: ${problem}`,
    product?.ranges.includes(range) && `${product.scope}: ${range}`,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/50689754741?text=${encodeURIComponent(message)}`;
};
