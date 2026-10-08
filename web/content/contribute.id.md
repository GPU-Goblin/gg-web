+++
title = "Pinjamkan GPU Anda untuk riset"
description = "Cara meminjamkan kartu grafis atau prosesor komputer Anda untuk riset ilmiah dengan GPU Goblin: apa yang berjalan di mesin Anda, bagaimana Anda tetap memegang kendali, apa yang Anda perlukan."
template = "page.html"
[extra]
lead = "Kartu grafis Anda menganggur hampir sepanjang hari. Dengan GPU Goblin, waktu itu menghitung untuk sains, hanya saat Anda mengizinkannya, dan tidak ada apa pun selain kode milik platform sendiri yang berjalan di mesin Anda."
cta = "Buat akun saya"
cta_page = "account"
cta2 = "Unduh"
cta2_page = "download"
toc = true
+++

## Apa yang dilakukan komputer Anda

Saat Anda meminjamkan mesin, aplikasi meminta tugas dari
jaringan, menghitungnya, mengirim kembali hasilnya, lalu meminta tugas berikutnya. Sebuah tugas
adalah bagian dari komputasi ilmiah: potongan dari perkalian matriks besar, operasi pada data
sebuah model, langkah pelatihan jaringan saraf, atau pemeriksaan hasil kontributor lain.

Perangkat lunak hanya menjalankan **kode komputasi GPU Goblin sendiri**. Peneliti menjelaskan komputasi mereka
(operasinya, ukurannya) dan data mereka, dan perangkat lunak menghitungnya dengan kode platform.

## Anda tetap memegang kendali

Aplikasi GPU Goblin berada di area notifikasi sistem Anda dan menunjukkan apa yang sedang dilakukan
mesin. Dari sana, atau dari terminal di server:

- **Jeda** — setelah tugas saat ini, atau seketika (tugas kembali ke jaringan, tanpa penalti);
- **Hanya saat saya tidak di tempat** — selama sesi Anda terkunci, atau setelah beberapa menit tanpa Anda;
- **Jam** — pinjamkan hanya dalam rentang waktu pilihan, per hari, bahkan melewati tengah malam;
- **Beri jalan untuk game** — tidak ada tugas baru selama game atau program lain memakai kartu;
- **Tetap dingin** — tidak ada tugas baru di atas suhu yang Anda pilih;
- **Memori** — berapa banyak memori komputer dan kartu yang boleh dipakai sebuah tugas.

## Apa yang Anda perlukan

- {{ <os k="req_os" lang={lang} win={config.extra.windows_available} /> }}
- Untuk kartu grafis: kartu NVIDIA, AMD, atau Intel dengan driver Vulkan yang berfungsi. Kartu
  NVIDIA juga dapat memakai mesin CUDA native, beberapa kali lebih cepat pada sebagian model
  (unduhan 4 GB).
- Koneksi internet rumahan; fiber optik ideal, tetapi koneksi stabil apa pun dapat digunakan.
- Beberapa gigabyte ruang disk kosong untuk pekerjaan yang sedang berjalan.

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

Pada mesin dengan beberapa kartu grafis, setiap kartu menghitung secara terpisah, semuanya terhubung ke akun
Anda. Di server tanpa layar, aplikasi yang sama berjalan di terminal.

## Sebelum mulai: yang perlu Anda ketahui

- **Mesin Anda menerima potongan data riset** untuk dihitung: larik angka, tanpa nama atau
  deskripsi, hanya yang dibutuhkan tugasnya.
- **Mesin Anda berbagi data dengan kontributor lain** untuk menghemat bandwidth server: mesin lain
  yang diberi izin atas data yang sama dapat melihat alamat publik Anda. Anda dapat mematikan ini.
- **Kredit tidak memiliki nilai uang.** Kredit mencatat kontribusi Anda; tidak ada yang dibayarkan.
- Meminjamkan mesin memakai listrik dan membuat mesin hangat. Batas-batas di atas ada agar biayanya
  tidak pernah melebihi apa yang Anda tetapkan.

Baca [halaman keamanan](../security) untuk mengetahui cara kerja sandbox dan pemeriksaan.

## Cara memulai

1. [Buat akun Anda](../account) dengan alamat e-mail Anda (tanpa kata sandi: kode dikirimkan kepada Anda).
2. [Unduh aplikasinya](../download) dan masuk dengan alamat yang sama.
3. Pilih apa yang dipinjamkan dan kapan. Mesin akan terhubung sendiri ke akun Anda dan mulai bekerja.
