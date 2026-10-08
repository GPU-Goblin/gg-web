+++
title = "Presta la tua GPU alla ricerca"
description = "Come prestare la scheda grafica o il processore del tuo computer alla ricerca scientifica con GPU Goblin: cosa gira sulla tua macchina, come mantieni il controllo, di cosa hai bisogno."
template = "page.html"
[extra]
lead = "La tua scheda grafica resta inattiva per gran parte della giornata. Con GPU Goblin, quel tempo calcola per la scienza, solo quando lo consenti tu, e sulla tua macchina non gira nient'altro che il codice della piattaforma stessa."
cta = "Crea il mio account"
cta_page = "account"
cta2 = "Scarica"
cta2_page = "download"
toc = true
+++

## Cosa fa il tuo computer

Quando presti la tua macchina, l'applicazione chiede un'attività
alla rete, la calcola, rimanda il risultato e chiede la successiva. Un'attività è un pezzo di un
calcolo scientifico: un pezzo di un grande prodotto di matrici, un'operazione sui dati di un
modello, un passo di addestramento di una rete neurale o la verifica del risultato di un altro
contributore.

Il software esegue solo **il codice di calcolo proprio di GPU Goblin**. I ricercatori descrivono il
loro calcolo (le operazioni, le dimensioni) e i loro dati, e il software li calcola con il codice della piattaforma.

## Il controllo resta a te

L'applicazione GPU Goblin si trova nell'area di notifica e mostra cosa sta facendo la macchina. Da
lì, o da un terminale su un server:

- **Pausa** — dopo l'attività in corso, o subito (l'attività torna alla rete, senza penalità);
- **Solo quando non ci sono** — mentre la sessione è bloccata, o dopo qualche minuto senza di te;
- **Orari** — presta solo nelle fasce scelte, per giorno, anche durante la notte;
- **Precedenza ai giochi** — nessuna nuova attività mentre un gioco o un altro programma usa la scheda;
- **Tienila fresca** — nessuna nuova attività sopra una temperatura che scegli tu;
- **Memoria** — quanta memoria del computer e della scheda può usare un'attività.

## Di cosa hai bisogno

- {{ <os k="req_os" lang={lang} win={config.extra.windows_available} /> }}
- Per la scheda grafica: una scheda NVIDIA, AMD o Intel con un driver Vulkan funzionante. Le schede
  NVIDIA possono usare anche il motore CUDA nativo, parecchie volte più veloce su alcuni modelli (un
  download di 4 GB).
- Una connessione internet domestica; la fibra è l'ideale, ma va bene qualsiasi connessione stabile.
- Qualche gigabyte libero su disco per il lavoro in corso.

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

Nelle macchine con più schede grafiche ogni scheda calcola separatamente, tutte collegate al tuo account.
Su un server senza schermo, la stessa applicazione gira nel terminale.

## Prima di iniziare: cosa devi sapere

- **La tua macchina riceve pezzi di dati di ricerca** da calcolare: tabelle di numeri, senza nome né
  descrizione, solo ciò che serve alla sua attività.
- **La tua macchina condivide dati con altri contributori** per risparmiare la banda del server:
  altre macchine autorizzate sugli stessi dati possono vedere il tuo indirizzo pubblico. Puoi
  disattivarlo.
- **I crediti non hanno alcun valore monetario.** Contano il tuo contributo; non viene pagato nulla.
- Prestare consuma elettricità e scalda la macchina. I limiti qui sopra servono perché non ti costi
  mai più di quanto hai deciso.

Leggi la [pagina sulla sicurezza](../security) per sapere come funzionano l'ambiente isolato e le
verifiche.

## Come iniziare

1. [Crea il tuo account](../account) con il tuo indirizzo e-mail (nessuna password: ti viene inviato un codice).
2. [Scarica l'applicazione](../download) e accedi con lo stesso indirizzo.
3. Scegli cosa prestare e quando. La macchina si collega da sola al tuo account e parte.
