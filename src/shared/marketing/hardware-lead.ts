const HARDWARE_LEAD_REF = 'AS-WEB-FERRE';

export const hardwareDemoHref = `/contact?ref=${HARDWARE_LEAD_REF}#coordinar-demo`;

export const getHardwareLeadReference = (ref: string | string[] | undefined) =>
  ref === HARDWARE_LEAD_REF ? `Referencia: ${HARDWARE_LEAD_REF}` : undefined;

export const hardwareWhatsAppMessage =
  `Hola Asystec, quiero evaluar un POS para mi ferretería.\nReferencia: ${HARDWARE_LEAD_REF}`;
