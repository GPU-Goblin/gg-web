+++
title = "Télécharger GPU Goblin"
description = "Téléchargez l'application GPU Goblin pour prêter votre ordinateur à la recherche : application de bureau Linux avec icône de notification, mode console pour les serveurs."
template = "download.html"
[extra]
lead = "Une seule application pour prêter votre ordinateur : elle vous connecte et vous laisse mettre en pause, choisir vos horaires et vos limites. "
items = [
  { name = "Linux, bureau", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "L'application avec son icône dans la zone de notification : connexion, choix de ce que vous prêtez et quand, suivi de ce que fait votre machine. Ubuntu, Debian, Fedora et autres distributions avec systemd." },
  { name = "Linux, serveur (console)", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "La même application dans le terminal, pour les serveurs et les machines à distance : état, pause, horaires et limites en ligne de commande, chaque carte graphique calculant séparément." },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "Très bientôt.", text = "La même application pour Windows 10 et 11, avec les mêmes protections.", text_win = "L'application avec son icône dans la zone de notification, pour Windows 10 et 11 (64 bits) : connexion, choix de ce que vous prêtez et quand, suivi de ce que fait votre machine." },
  { name = "Android", platform = "Android 12+", status = "planned", when = "Prévu : des mesures sur téléphones d'abord.", text = "Prêter le processeur graphique d'un téléphone pendant qu'il charge, en Wi-Fi, écran éteint." },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## Vérifiez ce que vous téléchargez

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

Pour vérifier une version à la main :

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

Le fichier `allowed_signers` contient la clé publique de publication. Son empreinte sera publiée sur
cette page avec la première version ; comparez-la avec celle qu'on vous donne par un autre canal.

## Configuration requise

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- pour la carte graphique : un pilote Vulkan (NVIDIA, AMD, Intel), ou le pilote NVIDIA pour CUDA ;
- quelques gigaoctets libres sur le disque.

Le code source est disponible sur [GitHub](https://github.com/GPU-Goblin) sous la licence PolyForm
Noncommercial.
