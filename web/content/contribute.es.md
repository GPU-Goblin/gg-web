+++
title = "Presta tu GPU a la investigación"
description = "Cómo prestar la tarjeta gráfica o el procesador de tu ordenador a la investigación científica con GPU Goblin: qué se ejecuta en tu máquina, cómo mantienes el control, qué necesitas."
template = "page.html"
[extra]
lead = "Tu tarjeta gráfica está ociosa la mayor parte del día. Con GPU Goblin, ese tiempo calcula para la ciencia, solo cuando tú lo permites, y en tu máquina no se ejecuta nada más que el código de la propia plataforma."
cta = "Crear mi cuenta"
cta_page = "account"
cta2 = "Descargar"
cta2_page = "download"
toc = true
+++

## Qué hace tu ordenador

Cuando prestas tu máquina, la aplicación pide una tarea a la
red, la calcula, devuelve el resultado y pide la siguiente. Una tarea es un fragmento de un cálculo
científico: un fragmento de un gran producto de matrices, una operación sobre los datos de un
modelo, un paso de entrenamiento de una red neuronal o la comprobación del resultado de otro
colaborador.

El software solo ejecuta **el código de cálculo propio de GPU Goblin**. Los investigadores describen
su cálculo (las operaciones, los tamaños) y sus datos, y el software los calcula con el código de la plataforma.

## Tú mantienes el control

La aplicación GPU Goblin se sitúa en la bandeja del sistema y muestra lo que hace la máquina. Desde
ella, o desde un terminal en un servidor:

- **Pausa** — tras la tarea en curso, o al instante (la tarea vuelve a la red, sin penalización);
- **Solo cuando no estoy** — mientras tu sesión está bloqueada, o tras unos minutos sin ti;
- **Horarios** — presta solo dentro de las franjas elegidas, por día, incluso durante la noche;
- **Ceder el paso a los juegos** — ninguna tarea nueva mientras un juego u otro programa usa la tarjeta;
- **Mantenerla fresca** — ninguna tarea nueva por encima de la temperatura que elijas;
- **Memoria** — cuánta memoria del ordenador y de la tarjeta puede usar una tarea.

## Qué necesitas

- {{ <os k="req_os" lang={lang} win={config.extra.windows_available} /> }}
- Para la tarjeta gráfica: una tarjeta NVIDIA, AMD o Intel con un controlador Vulkan que funcione.
  Las tarjetas NVIDIA también pueden usar el motor CUDA nativo, varias veces más rápido en algunos
  modelos (una descarga de 4 GB).
- Una conexión a internet doméstica; la fibra es ideal, pero cualquier conexión estable sirve.
- Unos pocos gigabytes libres en disco para el trabajo en curso.

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

En las máquinas con varias tarjetas gráficas, cada tarjeta calcula por separado, todas vinculadas a tu
cuenta. En un servidor sin pantalla, la misma aplicación se ejecuta en el terminal.

## Antes de empezar: lo que debes saber

- **Tu máquina recibe fragmentos de datos de investigación** para calcular: tablas de números, sin
  nombre ni descripción, solo lo que necesita su tarea.
- **Tu máquina comparte datos con otros colaboradores** para ahorrar ancho de banda del servidor:
  otras máquinas autorizadas sobre los mismos datos pueden ver tu dirección pública. Puedes
  desactivarlo.
- **Los créditos no tienen ningún valor monetario.** Cuentan tu contribución; no se paga nada.
- Prestar consume electricidad y calienta la máquina. Los límites anteriores están ahí para que
  nunca te cueste más de lo que decidiste.

Lee la [página de seguridad](../security) para saber cómo funcionan el entorno aislado y las
comprobaciones.

## Cómo empezar

1. [Crea tu cuenta](../account) con tu dirección de correo electrónico (sin contraseña: se te envía un código).
2. [Descarga la aplicación](../download) e inicia sesión con la misma dirección.
3. Elige qué prestar y cuándo. La máquina se vincula sola a tu cuenta y empieza.
