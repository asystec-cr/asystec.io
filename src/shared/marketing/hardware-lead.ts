const LEAD_REFERENCES = {
  hardwareLanding: 'AS-WEB-FERRE',
  hardwareGuide: 'AS-WEB-FERRE-GUIA',
  miniSuperLanding: 'AS-WEB-MINISUPER',
} as const;

type LeadPage = keyof typeof LEAD_REFERENCES;

export const leadDemoHref = (page: LeadPage) => `/contact?ref=${LEAD_REFERENCES[page]}#coordinar-demo`;

export const getWebsiteLeadReference = (ref: string | string[] | undefined) =>
  typeof ref === 'string' && Object.values(LEAD_REFERENCES).some((code) => code === ref)
    ? `Referencia: ${ref}`
    : undefined;

export const websiteLeadMessage = (page: LeadPage, message: string) =>
  `${message}\nReferencia: ${LEAD_REFERENCES[page]}`;
