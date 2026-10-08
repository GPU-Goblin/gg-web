+++
title = "Download GPU Goblin"
description = "Download the GPU Goblin application to lend your computer to research: Linux desktop app with system tray, console mode for servers."
template = "download.html"
[extra]
lead = "One application to lend your computer: it signs you in and lets you pause, choose your hours and your limits."
items = [
  { name = "Linux desktop", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "The application with its system-tray icon: sign in, choose what to lend and when, see what your machine does. Ubuntu, Debian, Fedora and other distributions with systemd." },
  { name = "Linux server (console)", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "The same application in the terminal for servers and remote machines: status, pause, schedule and limits from the command line, each graphics card computing separately." },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "Very soon.", text = "The same application for Windows 10 and 11, with the same protections.", text_win = "The application with its system-tray icon for Windows 10 and 11 (64-bit): sign in, choose what to lend and when, see what your machine does." },
  { name = "Android", platform = "Android 12+", status = "planned", when = "Planned: measurements on phones first.", text = "Lending a phone's graphics processor while it charges on Wi-Fi with the screen off." },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## Check what you download

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

To check a release by hand:

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

The `allowed_signers` file holds the release public key. Its fingerprint is published on this
page with the first release; compare it with the one you are given through another channel.

## Requirements

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- for the graphics card: a Vulkan driver (NVIDIA, AMD, Intel), or the NVIDIA driver for CUDA;
- a few gigabytes of free disk.

The source code is available on [GitHub](https://github.com/GPU-Goblin) under the PolyForm
Noncommercial license.
