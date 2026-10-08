+++
title = "Preguntas frecuentes"
description = "Respuestas sobre GPU Goblin: coste, créditos, seguridad de tu ordenador, electricidad y calor, hardware compatible, datos y cómo acceden los investigadores."
template = "faq.html"
[extra]
lead = "¿Falta algo? Escribe a contact@gpugoblin.com."
groups = [
  { id = "general", title = "El proyecto", items = [
    { q = "¿Qué es GPU Goblin?", a = "Una red de cálculo para la investigación, formada por ordenadores que la gente presta. Los investigadores pueden usarla para investigaciones que necesitan mucha potencia de cálculo; los colaboradores prestan su tarjeta gráfica o su procesador cuando no los necesitan." },
    { q = "¿Quién hace GPU Goblin?", a = "GPU Goblin está diseñado y desarrollado por Nicolas Michel, miembro del LAAS-CNRS, un laboratorio de investigación en Toulouse, Francia. Es un proyecto personal, no un servicio oficial del CNRS." },
    { q = "¿Es gratuito?", a = "Sí, para la investigación y cualquier uso no comercial. Prestar no cuesta más que electricidad, y calcular en la red es gratuito para la investigación. El software tiene el código fuente disponible bajo la licencia PolyForm Noncommercial." },
    { q = "¿Es de código abierto?", a = "El código fuente está publicado, pero bajo la licencia PolyForm Noncommercial: gratuito para la investigación y el uso no comercial, no de código abierto en el sentido de la OSI. El uso comercial requiere el acuerdo del autor." },
    { q = "¿En qué punto está el proyecto?", a = "En preparación de la beta: la red funciona y se está probando antes de una apertura más amplia. Hoy funciona en Linux; una versión para Windows llegará muy pronto, y está prevista una versión para Android.", a_win = "En preparación de la beta: la red funciona y se está probando antes de una apertura más amplia. Funciona en Windows y Linux; está prevista una versión para Android." },
  ] },
  { id = "contributors", title = "Prestar tu ordenador", items = [
    { q = "¿Me pagarán?", a = "No. Ganas créditos que cuentan tu contribución, pero los créditos no tienen ningún valor monetario ni se promete ninguno." },
    { q = "¿Es seguro para mi ordenador?", a = "Tu máquina solo ejecuta el código de cálculo propio de GPU Goblin, nunca un programa enviado por un investigador, y cada tarea se ejecuta en un entorno aislado sin acceso a la red, lejos de tus archivos, con límites de memoria y de disco." },
    { q = "¿Ralentizará mi ordenador o mis juegos?", a = "Tú decides: presta solo mientras no estás, en las horas que elijas, nunca mientras un juego usa la tarjeta, nunca por encima de una temperatura. Pausa al instante desde el icono de la bandeja cuando quieras." },
    { q = "¿Cuánta electricidad consume?", a = "Lo que consume tu tarjeta gráfica en carga, y solo mientras calcula. Limitar las horas y la temperatura limita el consumo." },
    { q = "¿Qué hardware funciona?", a = "Un ordenador Linux x86-64 (una versión para Windows llegará muy pronto). Tarjetas gráficas NVIDIA, AMD o Intel mediante Vulkan; las tarjetas NVIDIA también pueden usar el motor CUDA nativo, más rápido. Los procesadores también funcionan, más despacio.", a_win = "Un ordenador con Windows 10 u 11 o Linux x86-64. Tarjetas gráficas NVIDIA, AMD o Intel mediante Vulkan; las tarjetas NVIDIA también pueden usar el motor CUDA nativo, más rápido. Los procesadores también funcionan, más despacio." },
    { q = "¿Puedo prestar un servidor sin pantalla, o una máquina con varias tarjetas gráficas?", a = "Sí. La aplicación tiene un modo consola para servidores, y en una máquina con varias tarjetas cada tarjeta calcula por separado, todas vinculadas a tu cuenta." },
    { q = "¿Ve mi ordenador los datos de los investigadores?", a = "Solo recibe fragmentos de los datos que necesitan sus tareas: tablas de números, sin nombre de archivo ni descripción de lo que representan (el texto llega como tokens numéricos). A los investigadores se les pide no enviar datos sensibles a la red abierta." },
    { q = "¿Es visible mi dirección IP?", a = "Para ahorrar ancho de banda del servidor, las máquinas comparten datos entre ellas; mientras esto está activado, las demás máquinas autorizadas sobre los mismos datos pueden ver tu dirección pública. Puedes desactivarlo." },
  ] },
  { id = "researchers", title = "Para investigadores", items = [
    { q = "¿Qué puedo calcular?", a = "Hoy: grandes productos de matrices, cálculos descritos como grafos de operaciones con tensores (más de 45 operadores, capturados desde PyTorch, por ejemplo) y entrenamiento de modelos de aprendizaje automático (redes convolucionales, transformers, modelos de lenguaje). Los cálculos más grandes que cualquier máquina individual se dividen automáticamente. Las máquinas de los colaboradores solo ejecutan los tipos de cálculo del catálogo de la plataforma, nunca código arbitrario: con el tiempo se añaden otros tipos al catálogo, así que cuéntanos qué necesitas." },
    { q = "¿Cómo se comprueban los resultados?", a = "Cada resultado lo recalcula un validador independiente o se compara con el mismo cálculo hecho por otro colaborador, dentro de una tolerancia medida, antes de usarse." },
    { q = "¿Dónde están mis datos?", a = "Por defecto, en el nodo de tu laboratorio, un servicio instalado en tu laboratorio. Nunca envía tus conjuntos de datos tal cual: envía a las máquinas que calculan operaciones que calcular, con solo los números que necesita cada tarea. El servidor no almacena ningún dato de investigación." },
    { q = "¿Cómo obtengo acceso?", a = "Desde tu cuenta: inicia sesión con tu dirección de correo y rellena la solicitud de acceso para investigadores." },
  ] },
]
+++
