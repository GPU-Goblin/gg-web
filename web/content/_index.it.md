+++
title = "GPU Goblin"
description = "Presta la scheda grafica del tuo computer al calcolo scientifico, oppure usa la rete di calcolo di GPU Goblin per la tua ricerca. Gratuito per la ricerca, risultati verificati, il controllo resta a te."
template = "index.html"

[extra]
hero_title = "La tua scheda grafica inattiva può alimentare la scienza di domani"
hero_lead = "GPU Goblin riunisce i computer dei contributori in un'unica rete di calcolo dedicata alla ricerca. Grazie al tuo aiuto, i ricercatori possono eseguire i loro calcoli e far progredire la conoscenza scientifica."

steps_title = "Come funziona"
steps = [
  { title = "Installa l'applicazione", text = "Accedi con il tuo indirizzo e-mail e scegli cosa prestare: processore o scheda grafica." },
  { title = "Scegli tu quando", text = "Solo quando sei assente, di notte, sotto una certa temperatura: il tuo computer presta quando ti fa comodo, e puoi fermarlo in qualsiasi momento." },
  { title = "I ricercatori calcolano", text = "Gli scienziati usano le schede grafiche prestate per calcoli legati alle loro ricerche." },
]

sides = [
  { title = "Hai un computer", text = "Un PC da gioco, una workstation, un server di laboratorio: la sua scheda grafica resta inattiva per gran parte della giornata. Presta quel tempo alla ricerca.", points = ["Gira solo il codice della piattaforma stessa, in un ambiente isolato", "Decidi tu quando: assenza, orari, temperatura, memoria", "Fermati subito quando ti serve la macchina"], page = "contribute", cta = "Presta la tua GPU" },
  { title = "Sei un ricercatore", text = "Usa la rete di calcolo di GPU Goblin per i tuoi calcoli scientifici da Python: basta importare la libreria gpugoblin.", points = ["Calcoli grandi suddivisi automaticamente in pezzi", "I tuoi dati restano per impostazione predefinita sul nodo del tuo laboratorio", "Risultati verificati prima che tu li riceva"], page = "research", cta = "Per i ricercatori" },
]

trust_title = "Costruito perché tu possa fidarti"
trust_lead = "Il tuo computer resta protetto e i ricercatori possono fidarsi di ogni risultato."
trust = [
  { title = "Nessun codice estraneo", text = "La tua macchina esegue il codice di calcolo pubblicato da GPU Goblin stesso, mai un programma inviato da un ricercatore." },
  { title = "In un ambiente isolato", text = "Ogni attività gira isolata dai tuoi file e dalla tua rete, con limiti di memoria, disco e processore." },
  { title = "Risultati verificati", text = "Un risultato conta solo dopo un ricalcolo indipendente o una corrispondenza con quello di un altro contributore." },
  { title = "Il controllo resta a te", text = "Pausa, orari, solo quando non ci sei, limiti di temperatura e di memoria: la macchina è prima di tutto tua." },
]

status_title = "A che punto è il progetto"
faq_title = "Le prime domande che si fanno"
faq = [
  { q = "GPU Goblin è gratuito?", a = "Sì, per la ricerca e per qualsiasi uso non commerciale. Prestare il tuo computer non costa nulla se non l'elettricità, e usare la rete per la ricerca è gratuito. Il software ha il codice sorgente disponibile con la licenza PolyForm Noncommercial." },
  { q = "Sarò pagato per prestare il mio computer?", a = "No. I contributori guadagnano crediti che contano il loro contributo, ma i crediti non hanno alcun valore monetario e non ne viene promesso alcuno. GPU Goblin è calcolo volontario per la scienza." },
  { q = "Un ricercatore può eseguire quello che vuole sulla mia macchina?", a = "No. La tua macchina esegue solo il codice di calcolo proprio di GPU Goblin (prodotti di matrici, operazioni su tensori, passi di addestramento di modelli), all'interno di un ambiente isolato. I ricercatori descrivono modelli e dati; non inviano mai programmi." },
]

final_title = "Dai alla scienza la potenza che le manca"
final_text = "Iscriviti in un minuto con il tuo indirizzo e-mail, installa l'applicazione e scegli quando la tua macchina aiuta la ricerca."
+++

GPU Goblin è **in preparazione della beta**: la rete è in fase di test prima che contributori e
ricercatori si uniscano in numero maggiore. Cosa funziona già:

- grandi calcoli matriciali, e calcoli descritti come grafi di operazioni su tensori (scritti per
  esempio con PyTorch), compresi quelli più grandi di qualsiasi singolo computer, suddivisi in pezzi;
- addestrare modelli di apprendimento automatico, compresi modelli più grandi di qualsiasi singolo
  computer, suddivisi in stadi e blocchi;
- calcolare su processori, su schede grafiche tramite Vulkan (NVIDIA, AMD, Intel) e in modo nativo
  su schede NVIDIA con CUDA;
- verificare ogni risultato, con un ricalcolo indipendente oppure confrontandolo con il risultato di
  un altro contributore;
- {{ <os k="home_app" lang={lang} win={config.extra.windows_available} /> }}

{{ <os k="home_plans" lang={lang} win={config.extra.windows_available} /> }}
