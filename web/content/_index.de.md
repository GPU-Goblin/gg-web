+++
title = "GPU Goblin"
description = "Leih die Grafikkarte deines Computers dem wissenschaftlichen Rechnen, oder nutze das Rechennetz von GPU Goblin für deine Forschung. Kostenlos für die Forschung, geprüfte Ergebnisse, du behältst die Kontrolle."
template = "index.html"

[extra]
hero_title = "Deine ungenutzte Grafikkarte kann die Wissenschaft von morgen antreiben"
hero_lead = "GPU Goblin verbindet die Computer der Mitwirkenden zu einem einzigen Rechennetz für die Forschung. Mit deiner Hilfe können Forschende ihre Berechnungen ausführen und das wissenschaftliche Wissen voranbringen."

steps_title = "So funktioniert es"
steps = [
  { title = "Installiere die App", text = "Melde dich mit deiner E-Mail-Adresse an und wähle, was du verleihst: Prozessor oder Grafikkarte." },
  { title = "Du entscheidest, wann", text = "Nur wenn du weg bist, nachts, unter einer bestimmten Temperatur: Dein Rechner hilft, wenn es dir passt, und du kannst ihn jederzeit anhalten." },
  { title = "Forschende rechnen", text = "Wissenschaftlerinnen und Wissenschaftler nutzen die verliehenen Grafikkarten für Berechnungen rund um ihre Forschung." },
]

sides = [
  { title = "Du hast einen Computer", text = "Ein Gaming-PC, eine Workstation, ein Laborserver: Die Grafikkarte liegt die meiste Zeit des Tages brach. Leih diese Zeit der Forschung.", points = ["Nur der eigene Code der Plattform läuft, in einer Sandbox", "Du entscheidest, wann: Abwesenheit, Uhrzeiten, Temperatur, Speicher", "Sofort stoppen, sobald du den Rechner brauchst"], page = "contribute", cta = "GPU leihen" },
  { title = "Du forschst", text = "Nutze das Rechennetz von GPU Goblin für deine wissenschaftlichen Berechnungen aus Python heraus: Importiere einfach die Bibliothek gpugoblin.", points = ["Große Berechnungen automatisch in Stücke zerlegt", "Deine Daten bleiben standardmäßig auf dem Knoten deines Labors", "Ergebnisse geprüft, bevor du sie erhältst"], page = "research", cta = "Für Forschende" },
]

trust_title = "So gebaut, dass du ihm vertrauen kannst"
trust_lead = "Dein Rechner bleibt geschützt, und Forschende können sich auf jedes Ergebnis verlassen."
trust = [
  { title = "Kein fremder Code", text = "Dein Rechner führt nur den veröffentlichten Rechencode von GPU Goblin aus, niemals ein Programm, das Forschende schicken." },
  { title = "In der Sandbox", text = "Jede Aufgabe läuft abgeschottet von deinen Dateien und vom Netzwerk, mit Grenzen für Speicher, Festplatte und Prozessor." },
  { title = "Geprüfte Ergebnisse", text = "Ein Ergebnis zählt erst nach einer unabhängigen Neuberechnung oder einer Übereinstimmung mit dem eines anderen Teilnehmenden." },
  { title = "Du behältst die Kontrolle", text = "Pause, Uhrzeiten, nur bei Abwesenheit, Temperatur- und Speichergrenzen: Der Rechner gehört zuerst dir." },
]

status_title = "Wo das Projekt steht"
faq_title = "Die häufigsten ersten Fragen"
faq = [
  { q = "Ist GPU Goblin kostenlos?", a = "Ja, für die Forschung und jede nicht kommerzielle Nutzung. Deinen Computer zu leihen kostet nur Strom, und das Rechennetz für die Forschung zu nutzen ist kostenlos. Der Quellcode der Software ist unter der Lizenz PolyForm Noncommercial verfügbar." },
  { q = "Werde ich dafür bezahlt, dass ich meinen Computer leihe?", a = "Nein. Teilnehmende erhalten Credits, die ihren Beitrag zählen, aber Credits haben keinen Geldwert, und es wird auch keiner versprochen. GPU Goblin ist freiwilliges Rechnen für die Wissenschaft." },
  { q = "Können Forschende auf meinem Rechner ausführen, was sie wollen?", a = "Nein. Dein Rechner führt nur den eigenen Rechencode von GPU Goblin aus (Matrixprodukte, Operationen auf Tensoren, Trainingsschritte von Modellen), in einer Sandbox. Forschende beschreiben Modelle und Daten; sie schicken niemals Programme." },
]

final_title = "Gib der Wissenschaft die Rechenleistung, die ihr fehlt"
final_text = "Registriere dich in einer Minute mit deiner E-Mail-Adresse, installiere die Anwendung und wähle, wann dein Rechner der Forschung hilft."
+++

GPU Goblin ist **in der Vorbereitung zur Beta**: Das Rechennetz wird getestet, bevor Teilnehmende und
Forschende in größerer Zahl dazukommen. Was schon funktioniert:

- große Matrixberechnungen und Berechnungen, die als Graphen von Tensoroperationen beschrieben
  sind (zum Beispiel mit PyTorch geschrieben), auch solche, die größer sind als jeder einzelne
  Computer, zerlegt in Stücke;
- das Training von Machine-Learning-Modellen, auch von Modellen, die größer sind als jeder
  einzelne Computer, zerlegt in Stufen und Kacheln;
- Rechnen auf Prozessoren, auf Grafikkarten über Vulkan (NVIDIA, AMD, Intel) und nativ auf
  NVIDIA-Karten mit CUDA;
- die Prüfung jedes Ergebnisses, entweder durch eine unabhängige Neuberechnung oder durch den
  Vergleich mit dem Ergebnis eines anderen Teilnehmenden;
- {{ <os k="home_app" lang={lang} win={config.extra.windows_available} /> }}

{{ <os k="home_plans" lang={lang} win={config.extra.windows_available} /> }}
