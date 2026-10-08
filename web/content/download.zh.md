+++
title = "下载 GPU Goblin"
description = "下载 GPU Goblin 应用，把电脑借给科研：带系统托盘的 Linux 桌面应用、面向服务器的控制台模式。"
template = "download.html"
[extra]
lead = "一个应用即可出借电脑：它为您登录，并让您暂停、选择时段和设定限制。"
items = [
  { name = "Linux 桌面版", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "带系统托盘图标的应用：登录、选择出借什么以及何时出借、查看机器正在做什么。支持 Ubuntu、Debian、Fedora 及其他使用 systemd 的发行版。" },
  { name = "Linux 服务器版（控制台）", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "同一个应用的终端版本，适用于服务器和远程机器：在命令行中查看状态、暂停、设置时段和限制，每块显卡各自独立计算。" },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "即将推出。", text = "适用于 Windows 10 和 11 的同一个应用，提供同样的保护。", text_win = "适用于 Windows 10 和 11（64 位）、带系统托盘图标的应用：登录、选择出借什么以及何时出借、查看机器正在做什么。" },
  { name = "Android", platform = "Android 12+", status = "planned", when = "计划中：先在手机上进行测量。", text = "在手机连接 Wi-Fi 充电且屏幕关闭时，出借其图形处理器。" },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## 校验您下载的文件

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

手动校验某个版本：

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

`allowed_signers` 文件包含发布公钥。其指纹将随首个版本发布在本页面上；请将它与您通过其他渠道获得的指纹进行比对。

## 系统要求

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- 使用显卡时：Vulkan 驱动（NVIDIA、AMD、Intel），或用于 CUDA 的 NVIDIA 驱动；
- 几 GB 的可用磁盘空间。

源代码以 PolyForm Noncommercial 许可证发布在 [GitHub](https://github.com/GPU-Goblin) 上。
