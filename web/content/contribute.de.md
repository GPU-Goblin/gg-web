+++
title = "Leih deine GPU der Forschung"
description = "So leihst du die Grafikkarte oder den Prozessor deines Computers mit GPU Goblin der wissenschaftlichen Forschung: was auf deinem Rechner läuft, wie du die Kontrolle behältst, was du brauchst."
template = "page.html"
[extra]
lead = "Deine Grafikkarte ist die meiste Zeit des Tages untätig. Mit GPU Goblin rechnet diese Zeit für die Wissenschaft, nur wenn du es erlaubst, und auf deinem Rechner läuft nichts außer dem eigenen Code der Plattform."
cta = "Mein Konto erstellen"
cta_page = "account"
cta2 = "Herunterladen"
cta2_page = "download"
toc = true
+++

## Was dein Computer tut

Wenn du deinen Rechner leihst, fragt die Anwendung das Rechennetz
nach einer Aufgabe, berechnet sie, schickt das Ergebnis zurück und fragt nach der nächsten. Eine
Aufgabe ist ein Stück einer wissenschaftlichen Berechnung: ein Stück eines großen Matrixprodukts,
eine Operation auf den Daten eines Modells, ein Trainingsschritt eines neuronalen Netzes oder die
Prüfung des Ergebnisses eines anderen Teilnehmenden.

Die Software führt nur **den eigenen Rechencode von GPU Goblin** aus. Forschende beschreiben ihre Berechnung
(die Operationen, die Größen) und ihre Daten, und die Software berechnet sie mit dem Code der Plattform.

## Du behältst die Kontrolle

Die GPU-Goblin-Anwendung sitzt im Infobereich deiner Taskleiste und zeigt, was der Rechner gerade
tut. Von dort aus, oder auf einem Server aus einem Terminal:

- **Pause** — nach der laufenden Aufgabe oder sofort (die Aufgabe geht an das Rechennetz zurück,
  ohne Nachteil);
- **Nur wenn ich nicht da bin** — solange deine Sitzung gesperrt ist oder nach ein paar Minuten ohne
  dich;
- **Uhrzeiten** — nur in gewählten Zeitfenstern leihen, Tag für Tag, auch über Nacht;
- **Vorrang für Spiele** — keine neue Aufgabe, solange ein Spiel oder ein anderes Programm die Karte
  nutzt;
- **Kühl bleiben** — keine neue Aufgabe oberhalb einer Temperatur, die du wählst;
- **Speicher** — wie viel vom Arbeitsspeicher des Computers und vom Speicher der Karte eine Aufgabe
  nutzen darf.

## Was du brauchst

- {{ <os k="req_os" lang={lang} win={config.extra.windows_available} /> }}
- Für die Grafikkarte: eine Karte von NVIDIA, AMD oder Intel mit funktionierendem Vulkan-Treiber.
  NVIDIA-Karten können auch die native CUDA-Engine nutzen, die bei manchen Modellen um ein Mehrfaches
  schneller ist (4 GB Download).
- Einen Internetanschluss für zu Hause; Glasfaser ist ideal, aber jede stabile Verbindung reicht.
- Ein paar Gigabyte freien Festplattenplatz für die laufende Arbeit.

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

Auf Rechnern mit mehreren Grafikkarten rechnet jede Karte für sich, alle mit deinem Konto verknüpft.
Auf einem Server ohne Bildschirm läuft dieselbe Anwendung im Terminal.

## Bevor du anfängst: was du wissen solltest

- **Dein Rechner erhält Stücke von Forschungsdaten** zum Berechnen: Zahlenfelder, ohne Namen oder
  Beschreibung, nur was seine Aufgabe braucht.
- **Dein Rechner teilt Daten mit anderen Teilnehmenden**, um die Bandbreite des Servers zu schonen:
  Andere Rechner, die für dieselben Daten berechtigt sind, können deine öffentliche Adresse sehen.
  Du kannst das abschalten.
- **Credits haben keinen Geldwert.** Sie zählen deinen Beitrag; es wird nichts bezahlt.
- Das Leihen verbraucht Strom und erwärmt den Rechner. Die Grenzen oben sind dafür da, dass es dich
  nie mehr kostet, als du entschieden hast.

Auf der [Sicherheitsseite](../security) erfährst du, wie die Sandbox und die Prüfungen
funktionieren.

## So fängst du an

1. [Erstelle dein Konto](../account) mit deiner E-Mail-Adresse (kein Passwort: Du bekommst einen
   Code zugeschickt).
2. [Lade die Anwendung herunter](../download) und melde dich mit derselben Adresse an.
3. Wähle, was du leihst und wann. Der Rechner verknüpft sich von selbst mit deinem Konto und legt los.
