import type { LandingPageData } from '../seo-landings.data';

const contactCta = { label: 'Coordinar demo', href: '/contact' };
const whatsappCta = {
  label: 'Escribir por WhatsApp',
  href: 'https://wa.me/50689754741?text=Hola%20Asystec%2C%20quiero%20revisar%20las%20diferencias%20de%20inventario%20de%20mi%20negocio.',
};

export const inventoryDifferencesGuidePage: LandingPageData = {
  slug: 'como-reducir-diferencias-inventario',
  path: '/guias/como-reducir-diferencias-inventario',
  kind: 'guide',
  schemaType: 'Article',
  title: 'Como reducir diferencias de inventario en un negocio',
  seoTitle: 'Como reducir diferencias de inventario | Asystec Costa Rica',
  description:
    'Guia para detectar por que el inventario fisico no coincide con el sistema, revisar movimientos y preparar una demo de inventario en Costa Rica.',
  eyebrow: 'Guia para control de inventario',
  heroTitle: 'Como reducir diferencias de inventario en un negocio',
  answer:
    'Si el inventario fisico no coincide con el sistema, primero delimita la diferencia, repite un conteo controlado y revisa ventas, compras, devoluciones, traslados y ajustes del mismo periodo. Corrige la causa antes de actualizar todas las existencias y valida el cambio con una muestra de productos.',
  intro:
    'Esta guia ayuda a negocios en Costa Rica a convertir una diferencia de inventario en una revision trazable. No sustituye el criterio contable ni un procedimiento interno aprobado: organiza la informacion que conviene revisar antes de ajustar datos, cambiar el proceso o evaluar software de inventario.',
  primaryCta: contactCta,
  secondaryCta: whatsappCta,
  heroNote:
    'El origen puede variar por producto, bodega, usuario y periodo. Una demo util debe partir de ejemplos reales y no de una lista generica de funciones.',
  highlightsTitle: 'Senales de que el problema necesita una revision estructurada',
  highlights: [
    'El conteo fisico cambia cada vez que se repite o depende de archivos separados.',
    'Ventas, compras, devoluciones, mermas o traslados no dejan un historial facil de seguir.',
    'Los ajustes corrigen la existencia, pero la misma diferencia vuelve a aparecer.',
    'Caja, bodega y gerencia trabajan con cantidades o reportes distintos.',
  ],
  modulesTitle: 'Informacion que conviene conectar',
  modulesIntro:
    'La lista exacta depende de la operacion, pero cada movimiento debe poder relacionarse con una fecha, una ubicacion y una persona responsable.',
  modules: [
    'Catalogo, codigos y unidades',
    'Compras y recepciones',
    'Ventas y devoluciones',
    'Traslados entre ubicaciones',
    'Mermas y ajustes',
    'Usuarios y permisos',
    'Conteos fisicos',
    'Reportes de movimientos',
  ],
  sections: [
    {
      title: '1. Delimita donde aparece la diferencia',
      body: 'No empieces con un ajuste general. Define una fecha de corte, la ubicacion y un grupo de productos para comparar la cantidad esperada contra el conteo fisico. Asi evitas mezclar diferencias antiguas con movimientos que siguen ocurriendo durante la revision.',
      items: [
        'Selecciona productos de mayor movimiento, valor o recurrencia del problema.',
        'Confirma codigos, unidades, presentaciones y ubicaciones antes de contar.',
        'Registra cantidad del sistema, cantidad fisica, diferencia, fecha y responsable.',
        'Separa errores de catalogo de diferencias reales de existencias.',
      ],
    },
    {
      title: '2. Repite el conteo con un procedimiento claro',
      body: 'Una segunda verificacion ayuda a descartar errores de conteo, productos en otra ubicacion o movimientos registrados mientras se revisaba. El metodo debe ser suficientemente simple para que otra persona pueda repetirlo y obtener el mismo resultado.',
      items: [
        'Ordena el area y evita contar el mismo producto en dos ubicaciones.',
        'Usa una lista o captura que identifique cada producto sin ambiguedad.',
        'Anota ventas, recepciones o traslados ocurridos durante el conteo.',
        'Pide una segunda revision para las diferencias mas importantes.',
      ],
    },
    {
      title: '3. Reconstruye los movimientos del periodo',
      body: 'Compara el historial de entradas y salidas desde el ultimo conteo confiable. La pregunta no es solo cuanto falta o sobra, sino que operacion debio cambiar la existencia y si quedo registrada con producto, cantidad, ubicacion y usuario correctos.',
      items: [
        'Compras recibidas parcialmente, duplicadas o pendientes de registrar.',
        'Ventas, anulaciones, devoluciones y cambios de producto.',
        'Traslados entre tienda, bodega o sucursal sin confirmacion completa.',
        'Mermas, consumo interno, ajustes manuales y permisos utilizados.',
      ],
    },
    {
      title: '4. Corrige la causa y valida con una muestra',
      body: 'Antes de actualizar todo el inventario, acuerda como se registrara el movimiento que origino la diferencia y quien puede autorizar ajustes. Despues prueba el proceso con una muestra y repite el conteo para confirmar que el historial y la existencia se mantienen alineados.',
      items: [
        'Documenta el paso que faltaba y la persona responsable de ejecutarlo.',
        'Limita ajustes y operaciones sensibles a usuarios autorizados.',
        'Prueba compra, venta, devolucion, traslado y ajuste cuando apliquen.',
        'Programa revisiones por grupos de productos en lugar de esperar una crisis.',
      ],
    },
  ],
  decisionTable: {
    title: 'Checklist para investigar una diferencia de inventario',
    body: 'Estas preguntas ayudan a preparar la revision interna o una demo basada en el problema real del negocio.',
    rows: [
      {
        factor: 'Producto y unidad',
        question: 'El codigo, la presentacion y la unidad contada coinciden con el registro del sistema?',
        impact:
          'Evita tratar como faltante una diferencia causada por duplicados, paquetes o unidades mal configuradas.',
      },
      {
        factor: 'Entradas',
        question: 'Las compras y recepciones quedaron registradas con cantidad, fecha y ubicacion correctas?',
        impact: 'Permite detectar mercaderia recibida que nunca aumento la existencia o se asigno a otra bodega.',
      },
      {
        factor: 'Salidas',
        question: 'Ventas, devoluciones, anulaciones y mermas actualizaron el producto correcto?',
        impact: 'Ayuda a seguir operaciones que cambian el inventario aunque no sean una venta normal.',
      },
      {
        factor: 'Ubicaciones',
        question: 'Los traslados entre tienda, bodega o sucursal se enviaron y recibieron completamente?',
        impact: 'Separa una diferencia total de un producto ubicado o confirmado en el punto equivocado.',
      },
      {
        factor: 'Usuarios y ajustes',
        question: 'Quien puede modificar existencias y que historial queda despues de cada ajuste?',
        impact: 'Facilita revisar responsabilidades y reducir correcciones sin causa documentada.',
      },
    ],
  },
  faqs: [
    {
      question: 'Por que el inventario fisico no coincide con el sistema?',
      answer:
        'Puede deberse a conteos incorrectos, productos duplicados, unidades mal configuradas, compras sin recibir, ventas o devoluciones mal registradas, traslados incompletos, mermas o ajustes manuales. Conviene revisar una muestra y el historial antes de asumir una sola causa.',
    },
    {
      question: 'Debo ajustar el sistema al resultado del conteo fisico?',
      answer:
        'No conviene hacer un ajuste masivo sin validar el conteo, el periodo y los movimientos pendientes. El procedimiento y el tratamiento contable deben acordarse con las personas responsables del inventario y la contabilidad del negocio.',
    },
    {
      question: 'Cada cuanto conviene hacer conteos de inventario?',
      answer:
        'La frecuencia depende del volumen, valor y movimiento de los productos. Un negocio puede programar conteos por grupos y revisar con mayor frecuencia los productos criticos, siempre con una fecha de corte y un responsable definidos.',
    },
    {
      question: 'Un POS puede ayudar a reducir diferencias de inventario?',
      answer:
        'Puede ayudar si ventas, compras, devoluciones, traslados y ajustes actualizan existencias con usuarios e historial claros. La demo debe probar esos movimientos con productos reales y confirmar que reportes y permisos necesita el negocio.',
    },
    {
      question: 'Que informacion conviene llevar a una demo de inventario?',
      answer:
        'Lleva una muestra de productos, codigos, unidades, existencias actuales, ubicaciones, ejemplos de diferencias, archivos usados y los movimientos que hoy son dificiles de rastrear. Eso permite evaluar el flujo sin prometer una importacion o configuracion antes de revisar los datos.',
    },
  ],
  relatedTitle: 'Recursos para ordenar el control de inventario',
  relatedIntro:
    'Compara la operacion actual con las soluciones y guias que conectan inventario, venta, ubicaciones y datos para gerencia.',
  related: [
    { label: 'Software de inventario', href: '/soluciones/inventario' },
    { label: 'Sistema POS', href: '/soluciones/pos' },
    { label: 'Alternativas a Excel', href: '/guias/alternativas-excel-inventario' },
    { label: 'Multi-sucursal', href: '/soluciones/multi-sucursal' },
    { label: 'Software para tiendas retail', href: '/industrias/retail' },
    { label: 'Reportes para pymes', href: '/soluciones/reportes' },
    { label: 'Coordinar demo', href: '/contact' },
  ],
  finalCta: {
    title: 'Lleva una diferencia real de inventario a la demo',
    body: 'Asystec puede revisar productos, ubicaciones, movimientos, usuarios y reportes para demostrar como quedaria el control de inventario en el flujo real de tu negocio.',
    primary: contactCta,
    secondary: whatsappCta,
  },
};
