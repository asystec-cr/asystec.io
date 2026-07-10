import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import {
  createAnalyticsPayload,
  MARKETING_CONSENT_ACCEPTED,
  MARKETING_CONSENT_REJECTED,
  normalizeGtmId,
  normalizeMetaPixelId,
  parseMarketingConsent,
} from '../src/components/analytics/tracking.mjs';

test('normalizes valid public tracking identifiers and rejects unsafe values', () => {
  assert.equal(normalizeGtmId(' gtm-AbC123 '), 'GTM-ABC123');
  assert.equal(normalizeGtmId("GTM-ABC';alert(1)//"), undefined);
  assert.equal(normalizeMetaPixelId(' 1234567890 '), '1234567890');
  assert.equal(normalizeMetaPixelId('1234<script>'), undefined);
});

test('accepts only known stored consent values', () => {
  assert.equal(parseMarketingConsent(MARKETING_CONSENT_ACCEPTED), MARKETING_CONSENT_ACCEPTED);
  assert.equal(parseMarketingConsent(MARKETING_CONSENT_REJECTED), MARKETING_CONSENT_REJECTED);
  assert.equal(parseMarketingConsent('unknown'), null);
});

test('creates a minimal analytics payload from explicit data attributes', () => {
  assert.deepEqual(createAnalyticsPayload(' cta_demo ', ' Asystec POS hero demo '), {
    event: 'cta_demo',
    event_label: 'Asystec POS hero demo',
  });
  assert.equal(createAnalyticsPayload('cta-demo', 'Invalid event'), null);
});

test('does not forward email or phone-like labels', () => {
  assert.deepEqual(createAnalyticsPayload('cta_contact', 'persona@example.com'), { event: 'cta_contact' });
  assert.deepEqual(createAnalyticsPayload('cta_contact', '+506 8888-7777'), { event: 'cta_contact' });
});

test('privacy policy discloses the actual hosting and optional measurement providers', () => {
  const policy = readFileSync(new URL('../src/content/privacy/privacy.md', import.meta.url), 'utf8');
  assert.match(policy, /Vercel/);
  assert.match(policy, /Amazon Web Services \(AWS\)/);
  assert.match(policy, /Google/);
  assert.match(policy, /Meta Platforms/);
  assert.match(policy, /WhatsApp/);
});
