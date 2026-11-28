'use client';

import { useState } from 'react';

import { demoCash, demoChange, demoItems, demoTotal, offlineDemoSteps } from '~/shared/marketing/pos-offline-demo.mjs';

const money = (amount: number) => `₡${new Intl.NumberFormat('en-US').format(amount).replace(/,/g, '.')}`;

const PosOfflineDemo = () => {
  const [step, setStep] = useState(0);
  const current = offlineDemoSteps[step];

  return (
    <section
      id="demo-venta-sin-internet"
      aria-labelledby="demo-offline-title"
      className="mt-12 scroll-mt-32 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 dark:border-slate-700 dark:bg-slate-800 sm:p-8"
    >
      <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">Simulación guiada · datos ficticios</p>
      <h2 id="demo-offline-title" className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
        ¿Qué pasa en caja si se va internet?
      </h2>
      <p className="mt-2 max-w-3xl text-gray-700 dark:text-slate-200">
        Probá una venta en efectivo en tres pasos, sin instalar nada. Esta demo no registra ventas reales ni envía
        comprobantes a Hacienda.
      </p>
      <div role="group" aria-label="Pasos de la simulación" className="mt-5 grid gap-2 sm:grid-cols-3">
        {offlineDemoSteps.map(({ label }, index) => (
          <button
            key={label}
            type="button"
            aria-pressed={index === step}
            aria-controls="demo-offline-result"
            onClick={() => setStep(index)}
            className={`rounded-lg border px-3 py-2 text-left text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
              index === step
                ? 'border-blue-800 bg-blue-800 text-white'
                : 'border-slate-300 bg-white text-gray-900 hover:bg-blue-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
          <h3 className="font-semibold text-gray-900 dark:text-white">Caja de ejemplo</h3>
          <ul
            aria-label="Productos de ejemplo"
            className="mt-2 divide-y divide-slate-200 text-sm dark:divide-slate-700"
          >
            {demoItems.map(({ name, quantity, price }) => (
              <li key={name} className="flex justify-between gap-3 py-2">
                <span>
                  {quantity} × {name}
                </span>
                <span>{money(quantity * price)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-3 space-y-1 border-t border-slate-200 pt-3 text-sm dark:border-slate-700">
            <div className="flex justify-between gap-3 font-semibold">
              <dt>Total</dt>
              <dd>{money(demoTotal)}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Efectivo del ejemplo</dt>
              <dd>{money(demoCash)}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Cambio del ejemplo</dt>
              <dd>{money(demoChange)}</dd>
            </div>
          </dl>
        </div>
        <div
          id="demo-offline-result"
          aria-live="polite"
          aria-atomic="true"
          className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
        >
          <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">{current.connection}</p>
          <h3 className="mt-2 font-semibold text-gray-900 dark:text-white">{current.title}</h3>
          <p className="mt-2 text-sm">{current.description}</p>
          <dl className="mt-3 space-y-2 text-sm">
            <div>
              <dt className="font-semibold">Venta en caja</dt>
              <dd>{current.sale}</dd>
            </div>
            <div>
              <dt className="font-semibold">Comprobante electrónico de ejemplo</dt>
              <dd>{current.fiscal}</dd>
            </div>
          </dl>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-700 dark:text-slate-200">
        La venta local y la aceptación fiscal son estados distintos. El envío, la consulta de respuesta y otros
        servicios externos requieren conexión. Confirmá el flujo de contingencia que corresponde a tu negocio.
      </p>
    </section>
  );
};

export default PosOfflineDemo;
