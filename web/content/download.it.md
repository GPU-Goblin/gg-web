+++
title = "Scarica GPU Goblin"
description = "Scarica l'applicazione GPU Goblin per prestare il tuo computer alla ricerca: app desktop per Linux con icona nell'area di notifica, modalità console per i server."
template = "download.html"
[extra]
lead = "Un'unica applicazione per prestare il tuo computer: ti fa accedere e ti permette di mettere in pausa, scegliere i tuoi orari e i tuoi limiti."
items = [
  { name = "Linux desktop", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "L'applicazione con la sua icona nell'area di notifica: accedi, scegli cosa prestare e quando, guarda cosa fa la tua macchina. Ubuntu, Debian, Fedora e altre distribuzioni con systemd." },
  { name = "Linux server (console)", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "La stessa applicazione nel terminale per server e macchine remote: stato, pausa, orari e limiti dalla riga di comando, con ogni scheda grafica che calcola separatamente." },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "Molto presto.", text = "La stessa applicazione per Windows 10 e 11, con le stesse protezioni.", text_win = "L'applicazione con la sua icona nell'area di notifica per Windows 10 e 11 (64 bit): accedi, scegli cosa prestare e quando, guarda cosa fa la tua macchina." },
  { name = "Android", platform = "Android 12+", status = "planned", when = "Prevista: prima, misurazioni sui telefoni.", text = "Prestare il processore grafico di un telefono mentre è in carica con il Wi-Fi e lo schermo spento." },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## Verifica ciò che scarichi

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

Per verificare una versione a mano:

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

Salva questa riga, la chiave pubblica di rilascio, in un file chiamato `allowed_signers`:

```
release@gpu-goblin namespaces="gg-release" ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEVp1adRtKn6v2iU8hG/jSMsIALjae/LkpY3AODuih9v
```

La sua impronta è `SHA256:673XukOsx9kY85im+4qIA2IRxZU3+bEFVaD2VZwyBcM`; confrontala con quella che
ricevi tramite un altro canale.

## Requisiti

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- per la scheda grafica: un driver Vulkan (NVIDIA, AMD, Intel), o il driver NVIDIA per CUDA;
- qualche gigabyte libero su disco.

Il codice sorgente è disponibile su [GitHub](https://github.com/GPU-Goblin) con la licenza PolyForm
Noncommercial.
