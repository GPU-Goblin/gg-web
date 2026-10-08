+++
title = "Domande frequenti"
description = "Risposte su GPU Goblin: costi, crediti, sicurezza del tuo computer, elettricità e calore, hardware supportato, dati e come ottengono l'accesso i ricercatori."
template = "faq.html"
[extra]
lead = "Manca qualcosa? Scrivi a contact@gpugoblin.com."
groups = [
  { id = "general", title = "Il progetto", items = [
    { q = "Che cos'è GPU Goblin?", a = "Una rete di calcolo per la ricerca, fatta di computer che le persone prestano. I ricercatori possono usarla per ricerche che richiedono molta potenza di calcolo; i contributori prestano la loro scheda grafica o il loro processore quando non ne hanno bisogno." },
    { q = "Chi realizza GPU Goblin?", a = "GPU Goblin è ideato e sviluppato da Nicolas Michel, membro del LAAS-CNRS, un laboratorio di ricerca a Tolosa, in Francia. È un progetto personale, non un servizio ufficiale del CNRS." },
    { q = "È gratuito?", a = "Sì, per la ricerca e per qualsiasi uso non commerciale. Prestare non costa nulla se non l'elettricità, e calcolare sulla rete è gratuito per la ricerca. Il software ha il codice sorgente disponibile con la licenza PolyForm Noncommercial." },
    { q = "È open source?", a = "Il codice sorgente è pubblicato, ma con la licenza PolyForm Noncommercial: gratuito per la ricerca e l'uso non commerciale, non open source nel senso dell'OSI. L'uso commerciale richiede l'accordo dell'autore." },
    { q = "A che punto è il progetto?", a = "In preparazione della beta: la rete funziona ed è in fase di test prima di un'apertura più ampia. Oggi funziona su Linux; una versione per Windows arriverà molto presto, ed è prevista una versione per Android.", a_win = "In preparazione della beta: la rete funziona ed è in fase di test prima di un'apertura più ampia. Funziona su Windows e Linux; è prevista una versione per Android." },
  ] },
  { id = "contributors", title = "Prestare il tuo computer", items = [
    { q = "Sarò pagato?", a = "No. Guadagni crediti che contano il tuo contributo, ma i crediti non hanno alcun valore monetario e non ne viene promesso alcuno." },
    { q = "È sicuro per il mio computer?", a = "La tua macchina esegue solo il codice di calcolo proprio di GPU Goblin, mai un programma inviato da un ricercatore, e ogni attività gira in un ambiente isolato senza accesso alla rete, lontano dai tuoi file, con limiti di memoria e di disco." },
    { q = "Rallenterà il mio computer o i miei giochi?", a = "Decidi tu: presta solo quando non ci sei, negli orari scelti, mai mentre un gioco usa la scheda, mai sopra una certa temperatura. Metti in pausa subito dall'icona nell'area di notifica quando vuoi." },
    { q = "Quanta elettricità consuma?", a = "Quanta ne consuma la tua scheda grafica sotto carico, e solo mentre calcola. Limitare gli orari e la temperatura limita il consumo." },
    { q = "Quale hardware funziona?", a = "Un computer Linux x86-64 (una versione per Windows arriverà molto presto). Schede grafiche NVIDIA, AMD o Intel tramite Vulkan; le schede NVIDIA possono usare anche il motore CUDA nativo, più veloce. Funzionano anche i processori, più lentamente.", a_win = "Un computer con Windows 10 o 11 o Linux x86-64. Schede grafiche NVIDIA, AMD o Intel tramite Vulkan; le schede NVIDIA possono usare anche il motore CUDA nativo, più veloce. Funzionano anche i processori, più lentamente." },
    { q = "Posso prestare un server senza schermo, o una macchina con più schede grafiche?", a = "Sì. L'applicazione ha una modalità console per i server, e in una macchina con più schede ogni scheda calcola separatamente, tutte collegate al tuo account." },
    { q = "Il mio computer vede i dati dei ricercatori?", a = "Riceve solo pezzi dei dati che servono alle sue attività: tabelle di numeri, senza nome di file né descrizione di ciò che rappresentano (il testo arriva come token numerici). Ai ricercatori viene chiesto di non inviare dati sensibili alla rete aperta." },
    { q = "Il mio indirizzo IP è visibile?", a = "Per risparmiare la banda del server, le macchine condividono dati tra loro; mentre questa funzione è attiva, le altre macchine autorizzate sugli stessi dati possono vedere il tuo indirizzo pubblico. Puoi disattivarla." },
  ] },
  { id = "researchers", title = "Per i ricercatori", items = [
    { q = "Cosa posso calcolare?", a = "Oggi: grandi prodotti di matrici, calcoli descritti come grafi di operazioni su tensori (più di 45 operatori, catturati per esempio da PyTorch) e addestramento di modelli di apprendimento automatico (reti convoluzionali, transformer, modelli linguistici). I calcoli più grandi di qualsiasi singola macchina vengono suddivisi automaticamente. Le macchine dei contributori eseguono solo i tipi di calcolo presenti nel catalogo della piattaforma, mai codice arbitrario: altri tipi vengono aggiunti al catalogo nel tempo, quindi dicci di cosa hai bisogno." },
    { q = "Come vengono verificati i risultati?", a = "Ogni risultato viene ricalcolato da un validatore indipendente o confrontato con lo stesso calcolo fatto da un altro contributore, entro una tolleranza misurata, prima di essere usato." },
    { q = "Dove sono i miei dati?", a = "Per impostazione predefinita sul nodo del tuo laboratorio, un servizio installato nel tuo laboratorio. Non invia mai i tuoi insiemi di dati così come sono: invia alle macchine che calcolano operazioni da calcolare, con solo i numeri di cui ogni compito ha bisogno. Il server non conserva alcun dato di ricerca." },
    { q = "Come ottengo l'accesso?", a = "Dal tuo account: accedi con il tuo indirizzo e-mail e compila la richiesta di accesso per ricercatori." },
  ] },
]
+++
