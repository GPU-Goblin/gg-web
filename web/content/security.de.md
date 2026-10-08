+++
title = "Sicherheit und Vertrauen"
description = "Wie GPU Goblin die Rechner der Teilnehmenden und die Ergebnisse der Forschenden schützt: kein fremder Code, Aufgaben in der Sandbox, geprüfte Ergebnisse, und was nicht geschützt ist."
template = "page.html"
[extra]
lead = "Wie GPU Goblin deinen Rechner schützt und Ergebnisse prüft, und was nicht geschützt ist."
toc = true
+++

## Auf deinem Computer

- **Kein fremder Code.** Die Software führt nur den eigenen Rechencode von GPU Goblin aus. Eine Aufgabe
  ist eine *Beschreibung* (die Schichten eines Modells, ein Datenstapel, eine Größe).
- **Eine Sandbox für jede Aufgabe.** {{ <os k="sec_sandbox" lang={lang} win={config.extra.windows_available} /> }}
- **Geprüfte Daten.** Vor dem Rechnen prüft die Software beim Empfang der Daten die Signatur des Servers. Wurde ein Datenstück verändert, wird die Berechnung abgelehnt.
- **Lokale Steuerung.** Die Software lässt sich nur von deinem eigenen Rechner aus steuern.

## Bei den Ergebnissen

- **Prüfung der Berechnungen.** Jedes Ergebnis wird entweder von einem unabhängigen Validator neu
  berechnet oder von zwei verschiedenen Teilnehmenden zweimal berechnet und innerhalb einer
  gemessenen Toleranz verglichen.
- **Stichproben.** Ein Teil der Ergebnisse wird zufällig ein drittes Mal berechnet, auch wenn zwei
  Teilnehmende übereinstimmen.

## Was nicht geschützt ist

- **Teilnehmende erhalten Stücke der Daten, die sie berechnen**: Zahlenfelder ohne Namen oder
  Beschreibung, nur was jede Aufgabe braucht. Die Daten sind während der Berechnung nicht verschlüsselt: Schick keine
  vertraulichen Daten an das offene Rechennetz.
- **Deine öffentliche Adresse ist sichtbar** für die anderen Rechner, die für dieselben Daten
  berechtigt sind, wenn das Teilen zwischen Teilnehmenden aktiviert ist (standardmäßig ist es das,
  und es lässt sich abschalten).

## Ein Problem melden

Du hast eine Sicherheitslücke gefunden? Schreib an [contact@gpugoblin.com](mailto:contact@gpugoblin.com),
bevor du sie veröffentlichst.
