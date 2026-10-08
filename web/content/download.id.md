+++
title = "Unduh GPU Goblin"
description = "Unduh aplikasi GPU Goblin untuk meminjamkan komputer Anda untuk riset: aplikasi desktop Linux dengan ikon di area notifikasi, mode konsol untuk server."
template = "download.html"
[extra]
lead = "Satu aplikasi untuk meminjamkan komputer Anda: aplikasi ini memasukkan Anda dan memungkinkan Anda menjeda, memilih jam dan batas Anda."
items = [
  { name = "Desktop Linux", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "Aplikasi dengan ikon di area notifikasi sistem: masuk, pilih apa yang dipinjamkan dan kapan, lihat apa yang dilakukan mesin Anda. Ubuntu, Debian, Fedora, dan distribusi lain dengan systemd." },
  { name = "Server Linux (konsol)", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "Aplikasi yang sama di terminal untuk server dan mesin jarak jauh: status, jeda, jadwal, dan batas dari baris perintah, setiap kartu grafis menghitung secara terpisah." },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "Segera hadir.", text = "Aplikasi yang sama untuk Windows 10 dan 11, dengan perlindungan yang sama.", text_win = "Aplikasi dengan ikon di area notifikasi sistem untuk Windows 10 dan 11 (64-bit): masuk, pilih apa yang dipinjamkan dan kapan, lihat apa yang dilakukan mesin Anda." },
  { name = "Android", platform = "Android 12+", status = "planned", when = "Direncanakan: pengukuran di ponsel terlebih dahulu.", text = "Meminjamkan prosesor grafis ponsel saat sedang diisi daya melalui Wi-Fi dengan layar mati." },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## Periksa apa yang Anda unduh

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

Untuk memeriksa rilis secara manual:

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

Berkas `allowed_signers` berisi kunci publik rilis. Sidik jarinya akan dipublikasikan di halaman
ini bersama rilis pertama; bandingkan dengan sidik jari yang Anda terima melalui saluran lain.

## Persyaratan

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- untuk kartu grafis: driver Vulkan (NVIDIA, AMD, Intel), atau driver NVIDIA untuk CUDA;
- beberapa gigabyte ruang disk kosong.

Kode sumber tersedia di [GitHub](https://github.com/GPU-Goblin) di bawah lisensi PolyForm
Noncommercial.
