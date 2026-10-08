+++
title = "Скачать GPU Goblin"
description = "Скачайте приложение GPU Goblin, чтобы предоставить свой компьютер науке: настольное приложение для Linux со значком в области уведомлений, консольный режим для серверов."
template = "download.html"
[extra]
lead = "Одно приложение, чтобы предоставить компьютер: оно выполняет вход и позволяет ставить паузу, выбирать расписание и ограничения."
items = [
  { name = "Linux, рабочий стол", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "Приложение со значком в области уведомлений: вход, выбор того, что и когда предоставлять, наблюдение за работой компьютера. Ubuntu, Debian, Fedora и другие дистрибутивы с systemd." },
  { name = "Linux, сервер (консоль)", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "То же приложение в терминале для серверов и удалённых компьютеров: состояние, пауза, расписание и ограничения из командной строки, каждая видеокарта вычисляет отдельно." },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "Совсем скоро.", text = "То же приложение для Windows 10 и 11, с той же защитой.", text_win = "Приложение со значком в области уведомлений для Windows 10 и 11 (64-разрядных): вход, выбор того, что и когда предоставлять, наблюдение за работой компьютера." },
  { name = "Android", platform = "Android 12+", status = "planned", when = "Запланировано: сначала измерения на телефонах.", text = "Предоставление графического процессора телефона, пока он заряжается, подключён к Wi-Fi и экран выключен." },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## Проверьте то, что скачиваете

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

Чтобы проверить выпуск вручную:

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

Файл `allowed_signers` содержит открытый ключ выпуска. Его отпечаток будет опубликован на этой
странице вместе с первым выпуском; сравните его с отпечатком, полученным по другому каналу.

## Системные требования

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- для видеокарты: драйвер Vulkan (NVIDIA, AMD, Intel) или драйвер NVIDIA для CUDA;
- несколько гигабайт свободного места на диске.

Исходный код доступен на [GitHub](https://github.com/GPU-Goblin) по лицензии PolyForm
Noncommercial.
