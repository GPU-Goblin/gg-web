+++
title = "Für Forschende: größere wissenschaftliche Berechnungen"
description = "Nutze das Rechennetz aus geliehenen Computern von GPU Goblin für deine wissenschaftlichen Berechnungen: große Matrixprodukte, Graphen von Tensoroperationen, das Training von Modellen. Große Berechnungen automatisch zerlegt, geprüfte Ergebnisse."
template = "page.html"
[extra]
lead = "Nutze das Rechennetz von GPU Goblin, um deine Berechnungen aus Python heraus auszuführen. Große Berechnungen werden automatisch auf Computer verteilt, die Freiwillige leihen, und jedes Ergebnis wird geprüft."
cta = "Zugang beantragen"
cta_page = "account"
cta2 = "Zu den FAQ"
cta2_page = "faq"
toc = true
+++

## Was du berechnen kannst

GPU Goblin berechnet die Arten wissenschaftlicher Berechnungen aus seinem Katalog, auf Prozessoren
und Grafikkarten:

- **Große Matrixprodukte**, der Kern eines großen Teils des wissenschaftlichen Rechnens, in Stücke
  geteilt, wenn sie für einen einzelnen Rechner zu groß sind.
- **Berechnungen auf Graphen von Tensoroperationen**: eine Berechnung, die als Graph aus mehr als
  45 Operatoren beschrieben ist (Arithmetik, Reduktionen, ganzzahlige Tensoren, eigene Formeln…),
  zum Beispiel vom Python-Paket aus einem PyTorch-Programm erfasst.
- **Training von Machine-Learning-Modellen**: Convolutional Networks, Transformer, Sprachmodelle.
  Ein Modell, das größer ist als der Rechner jedes einzelnen Teilnehmenden, wird automatisch in
  Stufen (Gruppen von Schichten, die nacheinander berechnet werden), Kacheln (große Matrizen, in
  Stücke geteilt) und Micro-Batches zerlegt.

Du beschreibst die Berechnung, und das Rechennetz berechnet sie mit seinen eigenen, geprüften Operationen. Weitere Arten von Berechnungen
kommen nach und nach in den Katalog: Sag uns, was deine Forschung braucht.

## Wie eine Berechnung abläuft

1. Der **Knoten** deines Labors, ein kleiner Dienst, der in deinem Labor installiert ist, hält die
   Daten und zerlegt die Berechnung in Aufgaben.
2. Die Rechner der Teilnehmenden holen ihre Eingaben, rechnen und liefern ihre Ergebnisse zurück.
3. Jedes Ergebnis wird **geprüft** — von einem unabhängigen Validator neu berechnet oder mit
   derselben Berechnung eines anderen Teilnehmenden verglichen —, bevor es verwendet wird.
4. Die akzeptierten Ergebnisse werden zu deinem Ergebnis zusammengeführt. Bei einem Modell, das
   trainiert wird, ist das eine Runde: Die Gradienten werden zusammengeführt, der Optimierer macht
   seinen Schritt, und die nächste Runde beginnt.

## Deine Daten

- Standardmäßig speichert der Server **keine Forschungsdaten**, und der Knoten in deinem Labor verschickt deine Datensätze nie so, wie sie sind: Er schickt den Rechnern **Operationen zum Berechnen**, nur mit den Zahlen, die jede Aufgabe braucht.
- Diese Zahlen kommen ohne Dateinamen und ohne Beschreibung dessen an, was sie darstellen (Text
  kommt als numerische Tokens an). Die Daten sind während der Berechnung nicht verschlüsselt: Ein Feld aus Pixeln lässt sich weiterhin
  als Bild anzeigen, und Tokens lassen sich wieder in Text zurückverwandeln. Schick keine Daten an
  das offene Rechennetz, die vertraulich bleiben müssen (zum Beispiel personenbezogene oder
  medizinische Daten).

## Zugang

[Zugang über dein Konto beantragen](../account): Melde dich mit deiner E-Mail-Adresse an und fülle den Antrag auf Zugang für Forschende aus. Fragen: [contact@gpugoblin.com](mailto:contact@gpugoblin.com).

## Kosten

Das Rechennetz für die Forschung zu nutzen ist **kostenlos**. Die Software ist unter der Lizenz
PolyForm Noncommercial verfügbar: kostenlos für die Forschung und jede nicht kommerzielle Nutzung.
Für kommerzielle Nutzung ist eine Vereinbarung mit dem Autor nötig.
