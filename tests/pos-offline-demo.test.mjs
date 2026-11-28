import assert from 'node:assert/strict';
import test from 'node:test';

import { demoCash, demoChange, demoTotal, offlineDemoSteps } from '../src/shared/marketing/pos-offline-demo.mjs';

test('the fictional cash receipt reconciles', () => {
  assert.equal(demoTotal, 2200);
  assert.equal(demoCash, 3000);
  assert.equal(demoChange, 800);
  assert.equal(demoTotal + demoChange, demoCash);
});

test('the same local sale persists across the simulated reconnection without showing fiscal acceptance', () => {
  const [ready, offline, reconnected] = offlineDemoSteps;
  assert.equal(ready.sale, 'Por confirmar');
  assert.equal(offline.sale, reconnected.sale);
  assert.match(offline.sale, /DEMO-001/);
  assert.match(offline.fiscal, /Pendiente de conexión/);
  assert.match(reconnected.fiscal, /no equivale a aceptado/);
});
