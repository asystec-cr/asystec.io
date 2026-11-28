'use client';

import { useState } from 'react';

import { demoProblems, demoWhatsAppHref, getDemoProduct } from '~/shared/marketing/demo-contact.mjs';

const selectClass =
  'mt-1 w-full rounded-md border border-gray-400 bg-white px-3 py-2 dark:bg-slate-900 dark:text-white';

const DemoContactForm = ({ productKey, leadReference }: { productKey?: string; leadReference?: string }) => {
  const [problem, setProblem] = useState('');
  const [range, setRange] = useState('');
  const product = getDemoProduct(productKey);
  const whatsappUrl = demoWhatsAppHref(productKey, leadReference, problem, range);

  return (
    <section
      id="coordinar-demo"
      className="card mx-auto w-full max-w-2xl scroll-mt-32 self-start p-5 md:p-12"
      aria-labelledby="demo-form-title"
    >
      <h2 id="demo-form-title" className="mb-3 text-2xl font-bold">
        Prepará tu mensaje
      </h2>
      {product && (
        <p className="mb-3 text-sm">
          <strong>Producto:</strong> {product.label}
        </p>
      )}
      <p className="mb-5 text-sm text-gray-600 dark:text-slate-300">
        Elegí el problema más importante. Si no está en la lista, podés escribirlo directamente en WhatsApp.
      </p>
      <div className="mb-4">
        <label htmlFor="demo-problem" className="text-sm font-semibold">
          Problema principal (opcional)
        </label>
        <select
          id="demo-problem"
          className={selectClass}
          value={problem}
          onChange={(event) => setProblem(event.target.value)}
        >
          <option value="">Lo cuento en WhatsApp</option>
          {demoProblems.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      {product && (
        <div className="mb-4">
          <label htmlFor="demo-range" className="text-sm font-semibold">
            {product.scope} (opcional)
          </label>
          <select
            id="demo-range"
            className={selectClass}
            value={range}
            onChange={(event) => setRange(event.target.value)}
          >
            <option value="">Prefiero no indicarlo</option>
            {product.ranges.map((option: string) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      )}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mt-2 w-full"
        data-analytics-event="contact_whatsapp_form_submit"
        data-analytics-label="Formulario de demo en contacto"
      >
        Continuar en WhatsApp
      </a>
      <p className="mt-3 text-sm text-gray-600 dark:text-slate-300">
        Revisá y enviá el mensaje desde WhatsApp. También podés continuar sin completar nada.
      </p>
      <a className="mt-3 inline-block font-semibold text-blue-700 underline dark:text-blue-300" href="#soporte">
        ¿Ya sos cliente? Ir a soporte
      </a>
    </section>
  );
};

export default DemoContactForm;
