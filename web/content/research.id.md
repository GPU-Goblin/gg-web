+++
title = "Untuk peneliti: komputasi ilmiah yang lebih besar"
description = "Gunakan jaringan komputer pinjaman GPU Goblin untuk komputasi ilmiah Anda: perkalian matriks besar, graf operasi tensor, pelatihan model. Komputasi besar dipotong otomatis, hasil terverifikasi."
template = "page.html"
[extra]
lead = "Gunakan jaringan komputasi GPU Goblin untuk menjalankan komputasi Anda dari Python. Komputasi besar dipotong secara otomatis di antara komputer yang dipinjamkan oleh sukarelawan, dan setiap hasil diperiksa."
cta = "Minta akses"
cta_page = "account"
cta2 = "Baca tanya jawab"
cta2_page = "faq"
toc = true
+++

## Apa yang dapat Anda hitung

GPU Goblin menghitung jenis-jenis komputasi ilmiah yang ada dalam katalognya, pada prosesor dan
kartu grafis:

- **Perkalian matriks besar**, inti dari sebagian besar komputasi ilmiah, dibagi menjadi potongan
  ketika terlalu besar untuk satu mesin.
- **Komputasi pada graf operasi tensor**: komputasi yang dijelaskan sebagai graf berisi lebih dari
  45 operator (aritmetika, reduksi, tensor bilangan bulat, rumus khusus…), misalnya ditangkap dari
  program PyTorch oleh paket Python.
- **Pelatihan model machine learning**: jaringan konvolusional, transformer, model bahasa. Model
  yang lebih besar daripada mesin kontributor mana pun dipotong secara otomatis menjadi tahap
  (kelompok lapisan yang dihitung satu per satu), ubin (matriks besar yang dibagi menjadi potongan),
  dan micro-batch.

Anda menjelaskan komputasinya, dan jaringan menghitungnya dengan operasi terverifikasi miliknya sendiri. Jenis komputasi lain
ditambahkan ke katalog seiring waktu: beri tahu kami apa yang dibutuhkan riset Anda.

## Cara kerja sebuah komputasi

1. **Node** laboratorium Anda, sebuah layanan kecil yang dipasang di laboratorium Anda, menyimpan
   data dan memotong komputasi menjadi tugas-tugas.
2. Mesin kontributor mengambil input mereka, menghitung, dan mengembalikan hasilnya.
3. Setiap hasil **diverifikasi** — dihitung ulang oleh validator independen, atau dibandingkan
   dengan komputasi yang sama yang dilakukan kontributor lain — sebelum digunakan.
4. Hasil yang diterima digabungkan menjadi hasil Anda. Untuk model yang sedang dilatih, ini adalah
   satu putaran: gradien digabungkan, optimizer mengambil langkahnya, dan putaran berikutnya dimulai.

## Data Anda

- Secara bawaan, server **tidak menyimpan data riset apa pun**, dan node di laboratorium Anda tidak pernah mengirim kumpulan data Anda apa adanya: node mengirim **operasi untuk dihitung** ke mesin-mesin, hanya dengan angka yang dibutuhkan setiap tugas.
- Angka-angka ini tiba tanpa nama file dan tanpa deskripsi tentang apa yang diwakilinya (teks tiba
  sebagai token numerik). Data tidak dienkripsi selama perhitungan: larik piksel tetap dapat ditampilkan sebagai gambar, dan
  token dapat diubah kembali menjadi teks. Jangan kirim data yang harus tetap rahasia (misalnya data
  pribadi atau medis) ke jaringan terbuka.

## Akses

[Minta akses dari akun Anda](../account): masuk dengan alamat email Anda dan isi permintaan akses peneliti. Pertanyaan: [contact@gpugoblin.com](mailto:contact@gpugoblin.com).

## Biaya

Menggunakan jaringan untuk riset **gratis**. Perangkat lunaknya tersedia di bawah lisensi PolyForm
Noncommercial: gratis untuk riset dan setiap penggunaan nonkomersial. Penggunaan komersial
memerlukan persetujuan dengan penulis.
