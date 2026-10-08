+++
title = "GPU Goblin"
description = "Presta la tarjeta gráfica de tu ordenador al cálculo científico, o usa la red de cálculo de GPU Goblin para tu investigación. Gratuito para la investigación, resultados verificados, tú mantienes el control."
template = "index.html"

[extra]
hero_title = "Tu tarjeta gráfica ociosa puede impulsar la ciencia del mañana"
hero_lead = "GPU Goblin reúne los ordenadores de los contribuyentes en una única red de cálculo dedicada a la investigación. Gracias a tu ayuda, los investigadores pueden realizar sus cálculos y hacer avanzar el conocimiento científico."

steps_title = "Cómo funciona"
steps = [
  { title = "Instala la aplicación", text = "Inicia sesión con tu correo electrónico y elige qué prestas: procesador o tarjeta gráfica." },
  { title = "Tú decides cuándo", text = "Solo cuando no estás, de noche, por debajo de una temperatura: tu equipo presta cuando te conviene, y puedes detenerlo en cualquier momento." },
  { title = "Los investigadores calculan", text = "Los científicos usan las tarjetas gráficas prestadas para cálculos ligados a sus investigaciones." },
]

sides = [
  { title = "Tienes un ordenador", text = "Un PC para juegos, una estación de trabajo, un servidor de laboratorio: su tarjeta gráfica está ociosa la mayor parte del día. Presta ese tiempo a la investigación.", points = ["Solo se ejecuta el código de la propia plataforma, en un entorno aislado", "Tú decides cuándo: ausencia, horarios, temperatura, memoria", "Detente al instante cuando necesites la máquina"], page = "contribute", cta = "Presta tu GPU" },
  { title = "Eres investigador", text = "Usa la red de cálculo de GPU Goblin para tus cálculos científicos desde Python: basta con importar la biblioteca gpugoblin.", points = ["Cálculos grandes divididos en fragmentos automáticamente", "Tus datos se quedan por defecto en el nodo de tu laboratorio", "Resultados verificados antes de que los recibas"], page = "research", cta = "Para investigadores" },
]

trust_title = "Diseñado para que puedas confiar en él"
trust_lead = "Tu equipo sigue protegido y los investigadores pueden confiar en cada resultado."
trust = [
  { title = "Ningún código ajeno", text = "Tu máquina ejecuta el código de cálculo publicado por el propio GPU Goblin, nunca un programa enviado por un investigador." },
  { title = "En un entorno aislado", text = "Cada tarea se ejecuta aislada de tus archivos y de tu red, con límites de memoria, disco y procesador." },
  { title = "Resultados verificados", text = "Un resultado solo cuenta tras un recálculo independiente o una coincidencia con el de otro colaborador." },
  { title = "Tú mantienes el control", text = "Pausa, horarios, solo cuando no estás, límites de temperatura y de memoria: la máquina es tuya antes que nada." },
]

status_title = "En qué punto está el proyecto"
faq_title = "Las primeras preguntas que se hace la gente"
faq = [
  { q = "¿GPU Goblin es gratuito?", a = "Sí, para la investigación y cualquier uso no comercial. Prestar tu ordenador no cuesta más que electricidad, y usar la red para investigar es gratuito. El software tiene el código fuente disponible bajo la licencia PolyForm Noncommercial." },
  { q = "¿Me pagarán por prestar mi ordenador?", a = "No. Los colaboradores ganan créditos que cuentan su contribución, pero los créditos no tienen ningún valor monetario ni se promete ninguno. GPU Goblin es computación voluntaria para la ciencia." },
  { q = "¿Puede un investigador ejecutar lo que quiera en mi máquina?", a = "No. Tu máquina solo ejecuta el código de cálculo propio de GPU Goblin (productos de matrices, operaciones con tensores, pasos de entrenamiento de modelos), dentro de un entorno aislado. Los investigadores describen modelos y datos; nunca envían programas." },
]

final_title = "Dale a la ciencia la potencia que le falta"
final_text = "Regístrate en un minuto con tu dirección de correo electrónico, instala la aplicación y elige cuándo ayuda tu máquina a la investigación."
+++

GPU Goblin está **en preparación de la beta**: la red se está probando antes de que colaboradores e
investigadores se sumen en mayor número. Lo que ya funciona:

- grandes cálculos matriciales, y cálculos descritos como grafos de operaciones con tensores
  (escritos con PyTorch, por ejemplo), incluidos cálculos más grandes que cualquier ordenador
  individual, divididos en fragmentos;
- entrenar modelos de aprendizaje automático, incluidos modelos más grandes que cualquier
  ordenador individual, divididos en etapas y bloques;
- calcular en procesadores, en tarjetas gráficas mediante Vulkan (NVIDIA, AMD, Intel) y de forma
  nativa en tarjetas NVIDIA con CUDA;
- comprobar cada resultado, ya sea mediante un recálculo independiente o comparándolo con el
  resultado de otro colaborador;
- {{ <os k="home_app" lang={lang} win={config.extra.windows_available} /> }}

{{ <os k="home_plans" lang={lang} win={config.extra.windows_available} /> }}
