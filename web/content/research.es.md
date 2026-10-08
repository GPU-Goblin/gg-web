+++
title = "Para investigadores: cálculos científicos más grandes"
description = "Usa para tus cálculos científicos la red de cálculo de GPU Goblin, formada por ordenadores prestados: grandes productos de matrices, grafos de operaciones con tensores, entrenamiento de modelos. Cálculos grandes divididos automáticamente, resultados verificados."
template = "page.html"
[extra]
lead = "Usa la red de cálculo de GPU Goblin para realizar tus cálculos desde Python. Los cálculos grandes se dividen automáticamente entre ordenadores prestados por voluntarios, y cada resultado se comprueba."
cta = "Solicitar acceso"
cta_page = "account"
cta2 = "Leer las preguntas frecuentes"
cta2_page = "faq"
toc = true
+++

## Qué puedes calcular

GPU Goblin calcula los tipos de cálculo científico de su catálogo, en procesadores y tarjetas
gráficas:

- **Grandes productos de matrices**, el núcleo de buena parte del cálculo científico, divididos en
  fragmentos cuando son demasiado grandes para una sola máquina.
- **Cálculos sobre grafos de operaciones con tensores**: un cálculo descrito como un grafo de más de
  45 operadores (aritmética, reducciones, tensores de enteros, fórmulas personalizadas…), capturado
  por ejemplo desde un programa PyTorch por el paquete de Python.
- **Entrenamiento de modelos de aprendizaje automático**: redes convolucionales, transformers,
  modelos de lenguaje. Un modelo más grande que la máquina de cualquier colaborador se divide
  automáticamente en etapas (grupos de capas calculados uno tras otro), bloques (matrices grandes
  partidas en trozos) y microlotes.

Tú describes el cálculo y la red lo calcula con sus propias operaciones verificadas. Con el tiempo se añaden otros tipos de
cálculo al catálogo: cuéntanos qué necesita tu investigación.

## Cómo se ejecuta un cálculo

1. El **nodo** de tu laboratorio, un pequeño servicio instalado en tu laboratorio, guarda los datos
   y divide el cálculo en tareas.
2. Las máquinas de los colaboradores obtienen sus entradas, calculan y devuelven sus resultados.
3. Cada resultado se **verifica** — lo recalcula un validador independiente, o se compara con el
   mismo cálculo hecho por otro colaborador — antes de usarse.
4. Los resultados aceptados se combinan en el tuyo. Para un modelo en entrenamiento, esto es una
   ronda: los gradientes se combinan, el optimizador aplica su paso y empieza la ronda siguiente.

## Tus datos

- Por defecto, el servidor no almacena **ningún dato de investigación**, y el nodo de tu laboratorio nunca envía tus conjuntos de datos tal cual: envía a las máquinas **operaciones que calcular**, con solo los números que necesita cada tarea.
- Estos números llegan sin nombre de archivo ni descripción de lo que representan (el texto llega
  como tokens numéricos). Los datos no están cifrados durante el cálculo: una tabla de píxeles puede seguir mostrándose
  como una imagen, y los tokens pueden volver a convertirse en texto. No envíes a la red abierta
  datos que deban seguir siendo confidenciales (datos personales o médicos, por ejemplo).

## Acceso

[Solicita acceso desde tu cuenta](../account): inicia sesión con tu dirección de correo y rellena la solicitud de acceso para investigadores. Preguntas: [contact@gpugoblin.com](mailto:contact@gpugoblin.com).

## Coste

Usar la red para la investigación es **gratuito**. El software está disponible bajo la licencia
PolyForm Noncommercial: gratuito para la investigación y cualquier uso no comercial. El uso
comercial requiere un acuerdo con el autor.
