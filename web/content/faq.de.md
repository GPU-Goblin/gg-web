+++
title = "Häufige Fragen"
description = "Antworten zu GPU Goblin: Kosten, Credits, Sicherheit deines Computers, Strom und Wärme, unterstützte Hardware, Daten und wie Forschende Zugang bekommen."
template = "faq.html"
[extra]
lead = "Fehlt etwas? Schreib an contact@gpugoblin.com."
groups = [
  { id = "general", title = "Das Projekt", items = [
    { q = "Was ist GPU Goblin?", a = "Ein Rechennetz für die Forschung aus Computern, die Menschen leihen. Forschende können es für Forschung nutzen, die viel Rechenleistung braucht; Teilnehmende leihen ihre Grafikkarte oder ihren Prozessor, wenn sie ihn gerade nicht brauchen." },
    { q = "Wer steckt hinter GPU Goblin?", a = "GPU Goblin wird von Nicolas Michel konzipiert und entwickelt, Mitglied des LAAS-CNRS, eines Forschungslabors in Toulouse, Frankreich. Es ist ein persönliches Projekt, kein offizieller Dienst des CNRS." },
    { q = "Ist es kostenlos?", a = "Ja, für die Forschung und jede nicht kommerzielle Nutzung. Das Leihen kostet nur Strom, und das Rechnen im Rechennetz ist für die Forschung kostenlos. Der Quellcode der Software ist unter der Lizenz PolyForm Noncommercial verfügbar." },
    { q = "Ist es Open Source?", a = "Der Quellcode ist veröffentlicht, aber unter der Lizenz PolyForm Noncommercial: kostenlos für die Forschung und nicht kommerzielle Nutzung, aber nicht Open Source im Sinne der OSI. Für kommerzielle Nutzung ist die Zustimmung des Autors nötig." },
    { q = "Wo steht das Projekt?", a = "In der Vorbereitung zur Beta: Das Rechennetz funktioniert und wird vor einer breiteren Öffnung getestet. Heute läuft es unter Linux; eine Windows-Version kommt sehr bald, eine Android-Version ist geplant.", a_win = "In der Vorbereitung zur Beta: Das Rechennetz funktioniert und wird vor einer breiteren Öffnung getestet. Es läuft unter Windows und Linux; eine Android-Version ist geplant." },
  ] },
  { id = "contributors", title = "Deinen Computer leihen", items = [
    { q = "Werde ich bezahlt?", a = "Nein. Du erhältst Credits, die deinen Beitrag zählen, aber Credits haben keinen Geldwert, und es wird auch keiner versprochen." },
    { q = "Ist es sicher für meinen Computer?", a = "Dein Rechner führt nur den eigenen Rechencode von GPU Goblin aus, niemals ein Programm, das Forschende schicken, und jede Aufgabe läuft in einer Sandbox ohne Netzwerkzugang, abgeschottet von deinen Dateien, mit Grenzen für Speicher und Festplatte." },
    { q = "Wird mein Computer oder werden meine Spiele dadurch langsamer?", a = "Das entscheidest du: nur leihen, wenn du nicht da bist, zu gewählten Uhrzeiten, nie während ein Spiel die Karte nutzt, nie oberhalb einer Temperatur. Über das Symbol im Infobereich pausierst du jederzeit sofort." },
    { q = "Wie viel Strom verbraucht das?", a = "So viel, wie deine Grafikkarte unter Last verbraucht, und nur, während sie rechnet. Wer die Uhrzeiten und die Temperatur begrenzt, begrenzt auch den Verbrauch." },
    { q = "Welche Hardware funktioniert?", a = "Ein Linux-Computer mit x86-64 (eine Windows-Version kommt sehr bald). Grafikkarten von NVIDIA, AMD oder Intel über Vulkan; NVIDIA-Karten können auch die schnellere native CUDA-Engine nutzen. Prozessoren funktionieren ebenfalls, nur langsamer.", a_win = "Ein Computer mit Windows 10 oder 11 oder mit Linux x86-64. Grafikkarten von NVIDIA, AMD oder Intel über Vulkan; NVIDIA-Karten können auch die schnellere native CUDA-Engine nutzen. Prozessoren funktionieren ebenfalls, nur langsamer." },
    { q = "Kann ich einen Server ohne Bildschirm oder einen Rechner mit mehreren Grafikkarten leihen?", a = "Ja. Die Anwendung hat einen Konsolenmodus für Server, und auf einem Rechner mit mehreren Karten rechnet jede Karte für sich, alle mit deinem Konto verknüpft." },
    { q = "Sieht mein Computer die Daten der Forschenden?", a = "Er erhält nur Stücke der Daten, die seine Aufgaben brauchen: Zahlenfelder, ohne Dateinamen oder Beschreibung dessen, was sie darstellen (Text kommt als numerische Tokens an). Forschende werden gebeten, keine sensiblen Daten an das offene Rechennetz zu schicken." },
    { q = "Ist meine IP-Adresse sichtbar?", a = "Um die Bandbreite des Servers zu schonen, teilen die Rechner Daten untereinander; solange das aktiviert ist, können die anderen Rechner, die für dieselben Daten berechtigt sind, deine öffentliche Adresse sehen. Du kannst es abschalten." },
  ] },
  { id = "researchers", title = "Für Forschende", items = [
    { q = "Was kann ich berechnen?", a = "Heute: große Matrixprodukte, Berechnungen, die als Graphen von Tensoroperationen beschrieben sind (mehr als 45 Operatoren, zum Beispiel aus PyTorch erfasst), und das Training von Machine-Learning-Modellen (Convolutional Networks, Transformer, Sprachmodelle). Berechnungen, die größer sind als jeder einzelne Rechner, werden automatisch zerlegt. Die Rechner der Teilnehmenden führen nur die Arten von Berechnungen aus dem Katalog der Plattform aus, niemals beliebigen Code: Weitere Arten kommen nach und nach in den Katalog, sag uns also, was du brauchst." },
    { q = "Wie werden Ergebnisse geprüft?", a = "Jedes Ergebnis wird von einem unabhängigen Validator neu berechnet oder mit derselben Berechnung eines anderen Teilnehmenden verglichen, innerhalb einer gemessenen Toleranz, bevor es verwendet wird." },
    { q = "Wo liegen meine Daten?", a = "Standardmäßig auf dem Knoten deines Labors, einem Dienst, der in deinem Labor installiert ist. Er verschickt deine Datensätze nie so, wie sie sind: Er schickt den rechnenden Rechnern Operationen zum Berechnen, nur mit den Zahlen, die jede Aufgabe braucht. Der Server speichert keine Forschungsdaten." },
    { q = "Wie bekomme ich Zugang?", a = "Über dein Konto: Melde dich mit deiner E-Mail-Adresse an und fülle den Antrag auf Zugang für Forschende aus." },
  ] },
]
+++
