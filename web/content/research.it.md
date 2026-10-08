+++
title = "Per i ricercatori: calcoli scientifici più grandi"
description = "Usa per i tuoi calcoli scientifici la rete di calcolo di GPU Goblin, fatta di computer prestati: grandi prodotti di matrici, grafi di operazioni su tensori, addestramento di modelli. Calcoli grandi suddivisi automaticamente, risultati verificati."
template = "page.html"
[extra]
lead = "Usa la rete di calcolo di GPU Goblin per eseguire i tuoi calcoli da Python. I calcoli grandi vengono suddivisi automaticamente tra computer prestati da volontari, e ogni risultato viene verificato."
cta = "Richiedi l'accesso"
cta_page = "account"
cta2 = "Leggi le domande frequenti"
cta2_page = "faq"
toc = true
+++

## Cosa puoi calcolare

GPU Goblin calcola i tipi di calcolo scientifico presenti nel suo catalogo, su processori e schede
grafiche:

- **Grandi prodotti di matrici**, il cuore di gran parte del calcolo scientifico, suddivisi in pezzi
  quando sono troppo grandi per una sola macchina.
- **Calcoli su grafi di operazioni su tensori**: un calcolo descritto come un grafo di più di 45
  operatori (aritmetica, riduzioni, tensori di interi, formule personalizzate…), per esempio
  catturato da un programma PyTorch dal pacchetto Python.
- **Addestramento di modelli di apprendimento automatico**: reti convoluzionali, transformer, modelli
  linguistici. Un modello più grande della macchina di qualsiasi contributore viene suddiviso
  automaticamente in stadi (gruppi di strati calcolati uno dopo l'altro), blocchi (grandi matrici
  divise in pezzi) e micro-batch.

Tu descrivi il calcolo, e la rete lo calcola con le proprie operazioni verificate. Altri tipi di calcolo vengono aggiunti al catalogo
nel tempo: dicci di cosa ha bisogno la tua ricerca.

## Come si svolge un calcolo

1. Il **nodo** del tuo laboratorio, un piccolo servizio installato nel tuo laboratorio, conserva i
   dati e suddivide il calcolo in attività.
2. Le macchine dei contributori recuperano i loro input, calcolano e restituiscono i loro risultati.
3. Ogni risultato viene **verificato** — ricalcolato da un validatore indipendente, o confrontato con
   lo stesso calcolo fatto da un altro contributore — prima di essere usato.
4. I risultati accettati vengono combinati nel tuo. Per un modello in addestramento, questo è un
   ciclo: i gradienti vengono combinati, l'ottimizzatore fa il suo passo e inizia il ciclo
   successivo.

## I tuoi dati

- Per impostazione predefinita, il server non conserva **alcun dato di ricerca**, e il nodo del tuo laboratorio non invia mai i tuoi insiemi di dati così come sono: invia alle macchine **operazioni da calcolare**, con solo i numeri di cui ogni compito ha bisogno.
- Questi numeri arrivano senza nome di file né descrizione di ciò che rappresentano (il testo
  arriva come token numerici). I dati non sono cifrati durante il calcolo: una tabella di pixel può ancora essere mostrata come
  immagine, e i token possono essere ritrasformati in testo. Non inviare alla rete aperta dati che
  devono restare riservati (per esempio dati personali o medici).

## Accesso

[Richiedi l'accesso dal tuo account](../account): accedi con il tuo indirizzo e-mail e compila la richiesta di accesso per ricercatori. Domande: [contact@gpugoblin.com](mailto:contact@gpugoblin.com).

## Costi

Usare la rete per la ricerca è **gratuito**. Il software è disponibile con la licenza PolyForm
Noncommercial: gratuito per la ricerca e per qualsiasi uso non commerciale. L'uso commerciale
richiede un accordo con l'autore.
