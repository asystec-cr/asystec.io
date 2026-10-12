import Link from 'next/link';

const whatsappDemoHref =
  'https://wa.me/50689754741?text=Hola%2C%20quiero%20una%20demo%20del%20Agente%20Nexo';

const NexoHero = () => {
  return (
    <section id="hero-nexo-home" className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:pt-20">
      <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-sm lg:p-10 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-blue-300/35 blur-2xl dark:bg-blue-500/20" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-cyan-300/30 blur-2xl dark:bg-cyan-500/20" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-800 dark:border-blue-700 dark:bg-slate-800 dark:text-blue-300">
              Nuevo de Asystec • Agente Nexo
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Agente Nexo: su agente de IA para WhatsApp que atiende y vende todos los días
            </h1>
            <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg dark:text-slate-300">
              Nexo responde a sus clientes, da seguimiento, maneja objeciones y registra las ventas cerradas sin
              intervención humana, de 6:00 a. m. a 11:00 p. m. Al final del día, usted recibe un resumen.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappDemoHref}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="cta_whatsapp"
                data-analytics-label="Agente Nexo solicitar demo"
                data-analytics-location="hero"
                data-analytics-type="primary"
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Solicitar una demo por WhatsApp
              </a>
              <Link
                href="/agente-nexo#planes"
                className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50 dark:border-blue-700 dark:bg-transparent dark:text-blue-300 dark:hover:bg-blue-900/20"
                data-analytics-event="cta_navigation"
                data-analytics-label="Ver planes Agente Nexo"
                data-analytics-location="hero"
                data-analytics-type="secondary"
              >
                Ver planes
              </Link>
            </div>

            <div className="mt-5 grid gap-2 text-sm text-gray-700 dark:text-slate-300 sm:grid-cols-2">
              <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                6 a. m. – 11 p. m., todos los días
              </p>
              <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                Seguimiento y manejo de objeciones
              </p>
              <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                Consulta su POS en solo lectura
              </p>
              <p className="rounded-lg border border-blue-100 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
                Resumen diario de su operación
              </p>
            </div>
          </div>

          {/* Phone/chat mockup */}
          <div className="mx-auto w-full max-w-sm">
            <div className="relative z-10 rounded-[28px] border border-slate-700 bg-slate-900 p-3 shadow-2xl">
              <div className="overflow-hidden rounded-2xl bg-[#efeae2]">
                <div className="flex items-center gap-2 bg-emerald-900 px-3 py-2 text-white">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white font-extrabold text-emerald-800">
                    N
                  </div>
                  <div className="leading-tight">
                    <p className="text-[13px] font-semibold">Nexo | Su Empresa</p>
                    <p className="text-[11px] opacity-80">en línea</p>
                  </div>
                </div>
                <div className="space-y-2 px-2 py-3 text-[13px] leading-snug">
                  <div className="max-w-[85%] rounded-md bg-white px-2 py-2 shadow-sm">
                    Buenas, ¿tienen disponible este producto?
                    <div className="mt-0.5 text-right text-[10px] text-[#667781]">7:42 p. m.</div>
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-md bg-[#d9fdd3] px-2 py-2 shadow-sm">
                    ¡Hola! Con gusto le ayudo. Ya revisé y sí lo tenemos disponible. ¿Desea que se lo aparte?
                    <div className="mt-0.5 text-[11px] font-semibold text-emerald-900">Nexo | Su Empresa</div>
                    <div className="text-right text-[10px] text-[#667781]">7:42 p. m.</div>
                  </div>
                  <div className="max-w-[85%] rounded-md bg-white px-2 py-2 shadow-sm">
                    Me interesa, pero lo voy a pensar.
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-md bg-[#d9fdd3] px-2 py-2 shadow-sm">
                    Claro que sí. Si gusta, le cuento las opciones de pago y entrega para que decida con toda la
                    información.
                    <div className="mt-0.5 text-[11px] font-semibold text-emerald-900">Nexo | Su Empresa</div>
                    <div className="text-right text-[10px] text-[#667781]">7:43 p. m.</div>
                  </div>
                  <div className="max-w-[85%] rounded-md bg-white px-2 py-2 shadow-sm">Perfecto, lo quiero. 👍</div>
                  <div className="ml-auto max-w-[85%] rounded-md bg-[#d9fdd3] px-2 py-2 shadow-sm">
                    ¡Excelente! Su pedido quedó registrado. ¡Muchas gracias por su compra!
                    <div className="mt-0.5 text-[11px] font-semibold text-emerald-900">Nexo | Su Empresa</div>
                    <div className="text-right text-[10px] text-[#667781]">7:45 p. m.</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-gray-500 dark:text-slate-400">
              Conversación de ejemplo, con fines ilustrativos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NexoHero;

