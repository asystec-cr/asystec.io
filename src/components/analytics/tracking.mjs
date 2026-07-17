const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/;
const META_PIXEL_ID_PATTERN = /^\d{5,32}$/;
const EVENT_NAME_PATTERN = /^[A-Za-z][A-Za-z0-9_]{0,63}$/;
const ANALYTICS_DIMENSION_PATTERN = /^[A-Za-z][A-Za-z0-9_-]{0,47}$/;
const EMAIL_PATTERN = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
const PHONE_PATTERN = /(?:\+?\d[\s().-]*){7,}/;

export const MARKETING_CONSENT_STORAGE_KEY = 'asystec_marketing_consent_v1';
export const MARKETING_CONSENT_ACCEPTED = 'accepted';
export const MARKETING_CONSENT_REJECTED = 'rejected';

export const normalizeGtmId = (value) => {
  if (typeof value !== 'string') return undefined;

  const normalized = value.trim().toUpperCase();
  return GTM_ID_PATTERN.test(normalized) ? normalized : undefined;
};

export const normalizeMetaPixelId = (value) => {
  if (typeof value !== 'string') return undefined;

  const normalized = value.trim();
  return META_PIXEL_ID_PATTERN.test(normalized) ? normalized : undefined;
};

export const parseMarketingConsent = (value) => {
  if (value === MARKETING_CONSENT_ACCEPTED || value === MARKETING_CONSENT_REJECTED) return value;

  return null;
};

const normalizeAnalyticsDimension = (value) => {
  if (typeof value !== 'string') return undefined;

  const normalized = value.trim().toLowerCase();
  return ANALYTICS_DIMENSION_PATTERN.test(normalized) ? normalized : undefined;
};

export const createAnalyticsPayload = (eventName, label, context = {}) => {
  if (typeof eventName !== 'string') return null;

  const event = eventName.trim();
  if (!EVENT_NAME_PATTERN.test(event)) return null;

  const payload = { event };
  const location = normalizeAnalyticsDimension(context.location);
  const type = normalizeAnalyticsDimension(context.type);

  if (location) payload.cta_location = location;
  if (type) payload.cta_type = type;

  if (typeof label !== 'string') return payload;

  const normalizedLabel = label.trim().replace(/\s+/g, ' ');
  if (!normalizedLabel || EMAIL_PATTERN.test(normalizedLabel) || PHONE_PATTERN.test(normalizedLabel)) {
    return payload;
  }

  payload.event_label = normalizedLabel.slice(0, 120);
  return payload;
};
