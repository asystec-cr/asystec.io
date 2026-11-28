import assert from 'node:assert/strict';
import test from 'node:test';

import { demoWhatsAppHref, getDemoProduct, productDemoHref } from '../src/shared/marketing/demo-contact.mjs';

const message = (...args) => {
  const url = new URL(demoWhatsAppHref(...args));
  assert.equal(url.origin + url.pathname, 'https://wa.me/50689754741');
  return url.searchParams.get('text');
};

test('only fixed product keys get product-specific contact links', () => {
  for (const [key, label] of [
    ['factura-pro', 'Factura Pro'],
    ['cobros-pro', 'Cobros Pro'],
    ['asystec-pos', 'Asystec POS'],
    ['restaurante-pro', 'Restaurante Pro'],
  ]) {
    assert.equal(getDemoProduct(key).label, label);
    assert.equal(productDemoHref(key), `/contact?producto=${key}#coordinar-demo`);
    assert.match(message(key), new RegExp(`Producto: ${label}`));
  }
});

test('direct, unknown and repeated product queries fall back to generic contact', () => {
  const expected = 'Hola Asystec, quiero coordinar una demo para mi negocio.';
  for (const key of [undefined, 'desconocido', 'Factura-Pro', 'constructor', ['asystec-pos', 'asystec-pos']]) {
    assert.equal(getDemoProduct(key), undefined);
    assert.equal(productDemoHref(key), '/contact#coordinar-demo');
    assert.equal(message(key), expected);
  }
});

test('product, attribution, problem and volume retain separate lines', () => {
  assert.equal(
    message('asystec-pos', 'Referencia: AS-WEB-FERRE', 'Ordenar caja o inventario', '2 a 5'),
    'Hola Asystec, quiero coordinar una demo para mi negocio.\nProducto: Asystec POS\nReferencia: AS-WEB-FERRE\nProblema principal: Ordenar caja o inventario\nCantidad de cajas: 2 a 5',
  );
});

test('does not add problem or scope text outside the fixed options', () => {
  for (const extra of ['Texto de prueba libre', '2 a 5', '']) {
    assert.equal(message('factura-pro', undefined, extra, extra), message('factura-pro'));
  }
  assert.equal(message(undefined, undefined, '', '1'), message());
});
