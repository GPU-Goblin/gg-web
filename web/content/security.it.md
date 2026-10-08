+++
title = "Sicurezza e fiducia"
description = "Come GPU Goblin protegge le macchine dei contributori e i risultati dei ricercatori: nessun codice estraneo, attività in un ambiente isolato, risultati verificati, e ciò che non protegge."
template = "page.html"
[extra]
lead = "Come GPU Goblin protegge la tua macchina e verifica i risultati, e ciò che non è protetto."
toc = true
+++

## Sul tuo computer

- **Nessun codice estraneo.** Il software esegue solo il codice di calcolo proprio di GPU Goblin.
  Un'attività è una *descrizione* (gli strati di un modello, un lotto di dati, una dimensione).
- **Un ambiente isolato per ogni attività.** {{ <os k="sec_sandbox" lang={lang} win={config.extra.windows_available} /> }}
- **Dati controllati.** Prima di calcolare, il software verifica la firma del server alla ricezione dei dati. Se un dato è stato modificato, il calcolo viene rifiutato.
- **Controllo locale.** Il software si controlla solo dalla tua macchina.

## Sui risultati

- **Verifica dei calcoli.** Ogni risultato viene ricalcolato da un validatore indipendente
  oppure calcolato due volte da due contributori diversi e confrontato entro una tolleranza misurata.
- **Controlli a campione.** Una parte dei risultati viene ricalcolata una terza volta, a caso, anche
  quando due contributori sono d'accordo.

## Cosa non è protetto

- **I contributori ricevono pezzi dei dati che calcolano**: tabelle di numeri senza nome né
  descrizione, solo ciò che serve a ogni attività. I dati non sono cifrati durante il calcolo: non inviare dati riservati
  alla rete aperta.
- **Il tuo indirizzo pubblico è visibile** alle altre macchine autorizzate sugli stessi dati quando
  la condivisione tra contributori è attiva (lo è per impostazione predefinita, e può essere
  disattivata).

## Segnalare un problema

Hai trovato un problema di sicurezza? Scrivi a [contact@gpugoblin.com](mailto:contact@gpugoblin.com)
prima di renderlo pubblico.
