+++
title = "GPU Goblin herunterladen"
description = "Lade die GPU-Goblin-Anwendung herunter, um deinen Computer der Forschung zu leihen: Linux-Desktop-Anwendung mit Symbol im Infobereich, Konsolenmodus für Server."
template = "download.html"
[extra]
lead = "Eine einzige Anwendung, um deinen Computer zu leihen: Sie meldet dich an und lässt dich pausieren, deine Uhrzeiten und deine Grenzen wählen."
items = [
  { name = "Linux-Desktop", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "Die Anwendung mit ihrem Symbol im Infobereich: anmelden, wählen, was du leihst und wann, sehen, was dein Rechner tut. Ubuntu, Debian, Fedora und andere Distributionen mit systemd." },
  { name = "Linux-Server (Konsole)", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "Dieselbe Anwendung im Terminal, für Server und entfernte Rechner: Status, Pause, Zeitplan und Grenzen über die Kommandozeile, jede Grafikkarte rechnet für sich." },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "Sehr bald.", text = "Dieselbe Anwendung für Windows 10 und 11, mit denselben Schutzmaßnahmen.", text_win = "Die Anwendung mit ihrem Symbol im Infobereich für Windows 10 und 11 (64 Bit): anmelden, wählen, was du leihst und wann, sehen, was dein Rechner tut." },
  { name = "Android", platform = "Android 12+", status = "planned", when = "Geplant: zuerst Messungen auf Smartphones.", text = "Den Grafikprozessor eines Smartphones leihen, während es im WLAN lädt und der Bildschirm aus ist." },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## Prüf, was du herunterlädst

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

So prüfst du eine Version von Hand:

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

Die Datei `allowed_signers` enthält den öffentlichen Release-Schlüssel. Sein Fingerabdruck wird mit
der ersten Version auf dieser Seite veröffentlicht; vergleich ihn mit dem, den du über einen anderen
Kanal erhältst.

## Voraussetzungen

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- für die Grafikkarte: ein Vulkan-Treiber (NVIDIA, AMD, Intel) oder der NVIDIA-Treiber für CUDA;
- ein paar Gigabyte freier Festplattenplatz.

Der Quellcode ist auf [GitHub](https://github.com/GPU-Goblin) unter der Lizenz PolyForm
Noncommercial verfügbar.
