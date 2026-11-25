---
title: 'Cómo probar una devolución parcial en tu punto de venta'
description: 'Probá en tu POS qué pasa con el dinero, el stock y el cierre cuando un cliente devuelve solo uno de dos productos. Ejemplo en colones.'
publishDate: '2026-11-25'
---

Vendiste dos productos en una sola compra y el cliente devuelve solo uno. Antes de elegir un sistema de punto de venta, pedí que te muestren qué queda en **tres lugares**: la venta original, el dinero que se devuelve y las existencias del artículo. Que el total de caja se vea bien no garantiza que el inventario también esté correcto.

## Prepará una venta de práctica con dos productos

Usá una caja de demostración, sin facturas ni pagos reales. Imaginá que se vendió en efectivo una botella por **₡8.000** y un vaso por **₡4.000**. Los montos son los precios finales del ejemplo y no hay descuentos. El cliente se queda con la botella y devuelve el vaso al día siguiente, cuando la caja original ya cerró.

| Qué comprobar | Resultado esperado de la prueba |
| --- | --- |
| Venta original | Se puede consultar el registro de ₡12.000 y ver cuál línea se devolvió. No se borra la venta ni se anula la botella. |
| Dinero | Si se devuelve efectivo, salen ₡4.000 en el turno que atendió la devolución; no se registra un retiro adicional por el mismo movimiento. |
| Inventario | Si el vaso está en condiciones de venderse, vuelve **una unidad del vaso** a existencias disponibles. La botella no cambia. |

Los **₡8.000** son lo que se conserva de esa compra tras la devolución. No esperés ver ese importe como una venta nueva en el segundo turno. Compará el reporte de cada turno y verificá dónde aparece la salida de ₡4.000 sin contarla dos veces.

## Repetí la prueba con un artículo dañado

Ahora imaginá que el vaso vuelve quebrado. El reembolso del ejemplo sigue siendo ₡4.000, pero esa unidad no debería aparecer como disponible para otra venta. Preguntá cómo distinguir un producto devuelto a stock de uno separado para revisión o dado de baja, quién autoriza esa decisión y dónde queda anotado el motivo.

Si el sistema no distingue esos casos, pedí que te muestren cuál es el control alternativo y quién queda a cargo. La prueba no es que exista un botón de devolución: es que la siguiente persona en caja o bodega pueda saber qué pasó sin depender de la memoria del turno anterior.

## Qué pedir antes de dar la prueba por buena

1. Que se pueda localizar la devolución desde la venta original, con su producto, monto y turno.
2. Que caja y bodega puedan revisar el mismo caso sin perder el historial del cierre anterior.
3. Que quede claro cómo se registra la devolución con tarjeta o un pago mixto, sin asumir que ese dinero sale del cajón. Para esta primera prueba solo usamos efectivo.
4. Si el negocio emite comprobantes electrónicos, que el proveedor muestre en un entorno de prueba cómo se relaciona el documento que corresponda con la operación original. No hace falta emitir ni reenviar documentos reales para evaluar el flujo.

Para comparar los movimientos de un turno, usá la [guía para cuadrar efectivo, tarjeta y SINPE](/blog/como-cuadrar-caja-minisuper). Si lo que querés comprobar es qué unidades pueden volver a venderse, revisá también los [controles de inventario para tiendas](/soluciones/inventario).

Si querés evaluar el flujo con tu comercio, [coordiná una demo](/contact) y contanos en qué turno se suelen atender las devoluciones y qué hacen con los artículos que no se pueden revender. No hace falta compartir facturas ni datos de clientes.
