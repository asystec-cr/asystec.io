export const demoItems = [
  { name: 'Café molido', quantity: 1, price: 1500 },
  { name: 'Pan dulce', quantity: 2, price: 350 },
];

export const demoTotal = demoItems.reduce((total, item) => total + item.quantity * item.price, 0);
export const demoCash = 3000;
export const demoChange = demoCash - demoTotal;

export const offlineDemoSteps = [
  {
    label: '1. Preparar venta',
    connection: 'Con internet',
    title: 'El carrito está listo',
    description: 'Una caja ya configurada prepara una venta en efectivo. Todavía no se confirma el cobro.',
    sale: 'Por confirmar',
    fiscal: 'Sin envío',
  },
  {
    label: '2. Vender sin internet',
    connection: 'Sin internet',
    title: 'La venta queda registrada en la caja',
    description:
      'En el escenario simulado, se cobra en efectivo y se registra una venta local. El envío electrónico requiere conexión.',
    sale: 'Registrada localmente · DEMO-001',
    fiscal: 'Pendiente de conexión',
  },
  {
    label: '3. Recuperar conexión',
    connection: 'Conexión restablecida',
    title: 'La venta local sigue siendo la misma',
    description:
      'Con internet, se puede retomar el envío y consultar la respuesta, según la configuración. No registrés la venta otra vez solo porque volvió la conexión.',
    sale: 'Registrada localmente · DEMO-001',
    fiscal: 'Por verificar · no equivale a aceptado',
  },
];
