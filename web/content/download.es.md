+++
title = "Descargar GPU Goblin"
description = "Descarga la aplicación GPU Goblin para prestar tu ordenador a la investigación: aplicación de escritorio para Linux con icono en la bandeja del sistema, modo consola para servidores."
template = "download.html"
[extra]
lead = "Una sola aplicación para prestar tu ordenador: inicia tu sesión y te permite pausar, elegir tus horarios y tus límites."
items = [
  { name = "Linux escritorio", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "La aplicación con su icono en la bandeja del sistema: inicia sesión, elige qué prestar y cuándo, mira lo que hace tu máquina. Ubuntu, Debian, Fedora y otras distribuciones con systemd." },
  { name = "Linux servidor (consola)", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "La misma aplicación en el terminal para servidores y máquinas remotas: estado, pausa, horarios y límites desde la línea de comandos, cada tarjeta gráfica calculando por separado." },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "Muy pronto.", text = "La misma aplicación para Windows 10 y 11, con las mismas protecciones.", text_win = "La aplicación con su icono en la bandeja del sistema para Windows 10 y 11 (64 bits): inicia sesión, elige qué prestar y cuándo, mira lo que hace tu máquina." },
  { name = "Android", platform = "Android 12+", status = "planned", when = "Prevista: primero, mediciones en teléfonos.", text = "Prestar el procesador gráfico de un teléfono mientras se carga con wifi y la pantalla apagada." },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## Comprueba lo que descargas

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

Para comprobar una versión a mano:

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

Guarda esta línea, la clave pública de publicación, en un archivo llamado `allowed_signers`:

```
release@gpu-goblin namespaces="gg-release" ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEVp1adRtKn6v2iU8hG/jSMsIALjae/LkpY3AODuih9v
```

Su huella es `SHA256:673XukOsx9kY85im+4qIA2IRxZU3+bEFVaD2VZwyBcM`; compárala con la que recibas por
otro canal.

## Requisitos

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- para la tarjeta gráfica: un controlador Vulkan (NVIDIA, AMD, Intel), o el controlador NVIDIA para CUDA;
- unos pocos gigabytes libres en disco.

El código fuente está disponible en [GitHub](https://github.com/GPU-Goblin) bajo la licencia PolyForm
Noncommercial.
