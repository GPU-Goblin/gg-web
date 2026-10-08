+++
title = "Keamanan dan kepercayaan"
description = "Cara GPU Goblin melindungi mesin kontributor dan hasil para peneliti: tanpa kode asing, tugas di dalam sandbox, hasil terverifikasi, dan apa yang tidak dilindunginya."
template = "page.html"
[extra]
lead = "Cara GPU Goblin melindungi mesin Anda dan memeriksa hasil, serta apa yang tidak dilindungi."
toc = true
+++

## Di komputer Anda

- **Tanpa kode asing.** Perangkat lunak hanya menjalankan kode komputasi GPU Goblin sendiri. Sebuah tugas
  adalah *deskripsi* (lapisan sebuah model, satu batch data, sebuah ukuran).
- **Sandbox untuk setiap tugas.** {{ <os k="sec_sandbox" lang={lang} win={config.extra.windows_available} /> }}
- **Data diperiksa.** Sebelum menghitung, perangkat lunak memeriksa tanda tangan server saat data diterima. Jika ada data yang diubah, perhitungan ditolak.
- **Kendali lokal.** Perangkat lunak hanya dapat dikendalikan dari mesin Anda sendiri.

## Pada hasil

- **Verifikasi perhitungan.** Setiap hasil dihitung ulang oleh validator
  independen, atau dihitung dua kali oleh dua kontributor berbeda dan dibandingkan dalam toleransi
  yang terukur.
- **Pemeriksaan acak.** Sebagian hasil dihitung ulang untuk ketiga kalinya, secara acak, bahkan
  ketika dua kontributor sepakat.

## Apa yang tidak dilindungi

- **Kontributor menerima potongan data yang mereka hitung**: larik angka tanpa nama atau deskripsi,
  hanya yang dibutuhkan setiap tugas. Data tidak dienkripsi selama perhitungan: jangan kirim data rahasia ke jaringan
  terbuka.
- **Alamat publik Anda terlihat** oleh mesin lain yang diberi izin atas data yang sama ketika berbagi
  antarkontributor aktif (secara bawaan aktif, dan dapat dimatikan).

## Melaporkan masalah

Menemukan masalah keamanan? Tulis ke [contact@gpugoblin.com](mailto:contact@gpugoblin.com) sebelum
mempublikasikannya.
