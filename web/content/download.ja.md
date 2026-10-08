+++
title = "GPU Goblin をダウンロード"
description = "コンピューターを研究に貸し出す GPU Goblin アプリをダウンロード。システムトレイ付きの Linux デスクトップアプリ、サーバー向けコンソールモード。"
template = "download.html"
[extra]
lead = "コンピューターを貸し出すためのアプリはひとつだけ。ログイン、一時停止、時間帯や上限の設定まで行えます。"
items = [
  { name = "Linux デスクトップ", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "システムトレイにアイコンが表示されるアプリです。ログインし、何をいつ貸すかを選び、マシンが何をしているかを確認できます。Ubuntu、Debian、Fedora など、systemd を使うディストリビューションに対応しています。" },
  { name = "Linux サーバー（コンソール）", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "同じアプリのターミナル版で、サーバーやリモートマシン向けです。状態確認、一時停止、スケジュール、上限をコマンドラインで操作でき、グラフィックカードはそれぞれ個別に計算します。" },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "まもなく公開。", text = "Windows 10 と 11 向けの同じアプリで、同じ保護機能を備えています。", text_win = "Windows 10 と 11（64 ビット）向けの、システムトレイにアイコンが表示されるアプリです。ログインし、何をいつ貸すかを選び、マシンが何をしているかを確認できます。" },
  { name = "Android", platform = "Android 12+", status = "planned", when = "計画中：まずスマートフォンでの計測から。", text = "Wi-Fi 接続で充電中、画面オフのときに、スマートフォンのグラフィックプロセッサーを貸し出します。" },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## ダウンロードしたものを確認する

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

リリースを手動で確認するには：

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

`allowed_signers` ファイルにはリリース用の公開鍵が入っています。そのフィンガープリントは最初のリリースと同時にこのページで公開します。別の経路で入手したものと照らし合わせてください。

## 動作環境

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- グラフィックカードを使う場合：Vulkan ドライバー（NVIDIA、AMD、Intel）、または CUDA 用の NVIDIA ドライバー
- 数 GB の空きディスク容量

ソースコードは PolyForm Noncommercial ライセンスのもと、[GitHub](https://github.com/GPU-Goblin) で公開しています。
