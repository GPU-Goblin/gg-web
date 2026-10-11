+++
title = "Baixar o GPU Goblin"
description = "Baixe o aplicativo GPU Goblin para emprestar seu computador à pesquisa: aplicativo de desktop para Linux com ícone na bandeja do sistema, modo console para servidores."
template = "download.html"
[extra]
lead = "Um único aplicativo para emprestar seu computador: ele faz seu login e permite pausar, escolher seus horários e seus limites."
items = [
  { name = "Linux desktop", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "O aplicativo com seu ícone na bandeja do sistema: entre, escolha o que emprestar e quando, veja o que sua máquina faz. Ubuntu, Debian, Fedora e outras distribuições com systemd." },
  { name = "Linux servidor (console)", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "O mesmo aplicativo no terminal para servidores e máquinas remotas: estado, pausa, horários e limites pela linha de comando, cada placa de vídeo calculando separadamente." },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "Muito em breve.", text = "O mesmo aplicativo para Windows 10 e 11, com as mesmas proteções.", text_win = "O aplicativo com seu ícone na bandeja do sistema para Windows 10 e 11 (64 bits): entre, escolha o que emprestar e quando, veja o que sua máquina faz." },
  { name = "Android", platform = "Android 12+", status = "planned", when = "Prevista: primeiro, medições em celulares.", text = "Emprestar o processador gráfico de um celular enquanto ele carrega no Wi-Fi com a tela desligada." },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## Verifique o que você baixa

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

Para verificar uma versão manualmente:

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

Salve esta linha, a chave pública de publicação, em um arquivo chamado `allowed_signers`:

```
release@gpu-goblin namespaces="gg-release" ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEVp1adRtKn6v2iU8hG/jSMsIALjae/LkpY3AODuih9v
```

Sua impressão digital é `SHA256:673XukOsx9kY85im+4qIA2IRxZU3+bEFVaD2VZwyBcM`; compare-a com a que
você receber por outro canal.

## Requisitos

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- para a placa de vídeo: um driver Vulkan (NVIDIA, AMD, Intel), ou o driver NVIDIA para CUDA;
- alguns gigabytes livres em disco.

O código-fonte está disponível no [GitHub](https://github.com/GPU-Goblin) sob a licença PolyForm
Noncommercial.
