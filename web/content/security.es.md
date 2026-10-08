+++
title = "Seguridad y confianza"
description = "Cómo protege GPU Goblin las máquinas de los colaboradores y los resultados de los investigadores: ningún código ajeno, tareas en un entorno aislado, resultados verificados, y lo que no protege."
template = "page.html"
[extra]
lead = "Cómo protege GPU Goblin tu máquina y comprueba los resultados, y lo que no está protegido."
toc = true
+++

## En tu ordenador

- **Ningún código ajeno.** El software solo ejecuta el código de cálculo propio de GPU Goblin. Una
  tarea es una *descripción* (las capas de un modelo, un lote de datos, un tamaño).
- **Un entorno aislado para cada tarea.** {{ <os k="sec_sandbox" lang={lang} win={config.extra.windows_available} /> }}
- **Datos controlados.** Antes de calcular, el software comprueba la firma del servidor al recibir los datos. Si un dato ha sido modificado, el cálculo se rechaza.
- **Control local.** El software solo se controla desde tu propia máquina.

## En los resultados

- **Verificación de los cálculos.** Cada resultado, o bien lo recalcula un validador independiente,
  o bien lo calculan dos veces dos colaboradores distintos y se compara dentro de una tolerancia
  medida.
- **Controles por muestreo.** Una parte de los resultados se recalcula una tercera vez, al azar,
  incluso cuando dos colaboradores coinciden.

## Lo que no está protegido

- **Los colaboradores reciben fragmentos de los datos que calculan**: tablas de números sin nombre
  ni descripción, solo lo que necesita cada tarea. Los datos no están cifrados durante el cálculo: no envíes datos
  confidenciales a la red abierta.
- **Tu dirección pública es visible** para las demás máquinas autorizadas sobre los mismos datos
  cuando el intercambio entre colaboradores está activado (lo está por defecto, y se puede
  desactivar).

## Informar de un problema

¿Has encontrado un problema de seguridad? Escribe a [contact@gpugoblin.com](mailto:contact@gpugoblin.com)
antes de publicarlo.
