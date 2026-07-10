'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useState } from 'react';

import {
  createAnalyticsPayload,
  MARKETING_CONSENT_ACCEPTED,
  MARKETING_CONSENT_REJECTED,
  MARKETING_CONSENT_STORAGE_KEY,
  parseMarketingConsent,
} from './tracking.mjs';

type MarketingConsent = typeof MARKETING_CONSENT_ACCEPTED | typeof MARKETING_CONSENT_REJECTED;

interface MarketingTrackingProps {
  gtmId?: string;
  metaPixelId?: string;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
  }
}

const buildGtmBootstrap = (gtmId: string) => `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',${JSON.stringify(gtmId)});
`;

const buildMetaPixelBootstrap = (metaPixelId: string) => `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init',${JSON.stringify(metaPixelId)});
fbq('track','PageView');
`;

const MarketingTracking = ({ gtmId, metaPixelId }: MarketingTrackingProps) => {
  const [consent, setConsent] = useState<MarketingConsent | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [arePreferencesOpen, setArePreferencesOpen] = useState(false);

  useEffect(() => {
    let storedConsent: MarketingConsent | null = null;

    try {
      storedConsent = parseMarketingConsent(window.localStorage.getItem(MARKETING_CONSENT_STORAGE_KEY));
    } catch {
      // Keep measurement disabled when storage is unavailable.
    }

    setConsent(storedConsent);
    setArePreferencesOpen(storedConsent === null);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (consent !== MARKETING_CONSENT_ACCEPTED) return;

    const handleTrackedClick = (clickEvent: MouseEvent) => {
      if (!(clickEvent.target instanceof Element)) return;

      const trackedElement = clickEvent.target.closest<HTMLElement>('[data-analytics-event]');
      if (!trackedElement) return;

      const payload = createAnalyticsPayload(
        trackedElement.dataset.analyticsEvent,
        trackedElement.dataset.analyticsLabel,
      );

      if (!payload) return;

      if (gtmId) {
        window.dataLayer = window.dataLayer ?? [];
        window.dataLayer.push(payload);
      }

      if (metaPixelId && typeof window.fbq === 'function') {
        const { event, ...parameters } = payload;
        window.fbq('trackCustom', event, parameters);
      }
    };

    document.addEventListener('click', handleTrackedClick);
    return () => document.removeEventListener('click', handleTrackedClick);
  }, [consent, gtmId, metaPixelId]);

  const persistConsent = (nextConsent: MarketingConsent) => {
    try {
      window.localStorage.setItem(MARKETING_CONSENT_STORAGE_KEY, nextConsent);
    } catch {
      // The in-memory choice still applies for the current page.
    }
  };

  const acceptMeasurement = () => {
    persistConsent(MARKETING_CONSENT_ACCEPTED);
    setConsent(MARKETING_CONSENT_ACCEPTED);
    setArePreferencesOpen(false);
  };

  const rejectMeasurement = () => {
    const shouldReload = consent === MARKETING_CONSENT_ACCEPTED;

    persistConsent(MARKETING_CONSENT_REJECTED);
    setConsent(MARKETING_CONSENT_REJECTED);
    setArePreferencesOpen(false);

    if (shouldReload) window.location.reload();
  };

  if (!isReady) return null;

  return (
    <>
      {consent === MARKETING_CONSENT_ACCEPTED && (
        <>
          {gtmId && (
            <Script
              id="asystec-gtm"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: buildGtmBootstrap(gtmId) }}
            />
          )}
          {metaPixelId && (
            <Script
              id="asystec-meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: buildMetaPixelBootstrap(metaPixelId) }}
            />
          )}
        </>
      )}

      {arePreferencesOpen ? (
        <section
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl dark:border-slate-700 dark:bg-slate-900 sm:p-6"
          role="dialog"
          aria-labelledby="marketing-consent-title"
          aria-describedby="marketing-consent-description"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="marketing-consent-title" className="text-base font-semibold text-gray-900 dark:text-white">
                Preferencias de privacidad
              </h2>
              <p
                id="marketing-consent-description"
                className="mt-2 text-sm leading-6 text-gray-600 dark:text-slate-300"
              >
                Google Tag Manager y Meta Pixel son opcionales y solo se cargan si aceptás. Los eventos de este sitio no
                incluyen lo que escribís en formularios. Podés cambiar esta decisión en cualquier momento desde el botón
                Privacidad. Consultá la{' '}
                <Link className="font-medium text-blue-700 underline dark:text-blue-300" href="/privacy">
                  Política de Privacidad
                </Link>
                .
              </p>
              {consent && (
                <p className="mt-2 text-xs text-gray-500 dark:text-slate-400">
                  Estado actual: {consent === MARKETING_CONSENT_ACCEPTED ? 'medición aceptada' : 'medición rechazada'}.
                </p>
              )}
            </div>
            {consent && (
              <button
                type="button"
                className="rounded-md px-2 py-1 text-sm text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-slate-400 dark:hover:text-white"
                onClick={() => setArePreferencesOpen(false)}
                aria-label="Cerrar preferencias de privacidad"
              >
                Cerrar
              </button>
            )}
          </div>
          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800 dark:focus:ring-offset-slate-900"
              onClick={rejectMeasurement}
            >
              {consent === MARKETING_CONSENT_ACCEPTED ? 'Rechazar y detener' : 'Rechazar'}
            </button>
            <button
              type="button"
              className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              onClick={acceptMeasurement}
            >
              Aceptar medición
            </button>
          </div>
        </section>
      ) : (
        <button
          type="button"
          className="fixed bottom-3 left-3 z-[90] rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-lg transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          onClick={() => setArePreferencesOpen(true)}
        >
          Privacidad
        </button>
      )}
    </>
  );
};

export default MarketingTracking;
