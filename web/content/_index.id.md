+++
title = "GPU Goblin"
description = "Pinjamkan kartu grafis komputer Anda untuk komputasi ilmiah, atau gunakan jaringan komputasi GPU Goblin untuk riset Anda. Gratis untuk riset, hasil terverifikasi, Anda tetap memegang kendali."
template = "index.html"

[extra]
hero_title = "Kartu grafis Anda yang menganggur dapat menggerakkan sains masa depan"
hero_lead = "GPU Goblin menyatukan komputer para kontributor menjadi satu jaringan komputasi yang didedikasikan untuk riset. Dengan bantuan Anda, para peneliti dapat menjalankan komputasi mereka dan memajukan pengetahuan ilmiah."

steps_title = "Cara kerjanya"
steps = [
  { title = "Pasang aplikasinya", text = "Masuk dengan alamat email Anda dan pilih apa yang Anda pinjamkan: prosesor atau kartu grafis." },
  { title = "Anda yang menentukan kapan", text = "Hanya saat Anda pergi, pada malam hari, di bawah suhu tertentu: komputer Anda membantu saat Anda berkenan, dan Anda bisa menghentikannya kapan saja." },
  { title = "Para peneliti menghitung", text = "Para ilmuwan memakai kartu grafis yang dipinjamkan untuk perhitungan yang terkait dengan riset mereka." },
]

sides = [
  { title = "Anda punya komputer", text = "PC gaming, workstation, server laboratorium: kartu grafisnya menganggur hampir sepanjang hari. Pinjamkan waktu itu untuk riset.", points = ["Hanya kode milik platform yang berjalan, di dalam sandbox", "Anda yang menentukan kapan: saat tidak di tempat, jam, suhu, memori", "Berhenti seketika kapan pun Anda membutuhkan mesin"], page = "contribute", cta = "Pinjamkan GPU Anda" },
  { title = "Anda seorang peneliti", text = "Gunakan jaringan komputasi GPU Goblin untuk komputasi ilmiah Anda dari Python: cukup impor pustaka gpugoblin.", points = ["Komputasi besar otomatis dipotong menjadi potongan-potongan", "Data Anda secara bawaan tetap di node laboratorium Anda", "Hasil diverifikasi sebelum Anda menerimanya"], page = "research", cta = "Untuk peneliti" },
]

trust_title = "Dibangun agar Anda dapat memercayainya"
trust_lead = "Komputer Anda tetap terlindungi, dan para peneliti dapat mengandalkan setiap hasil."
trust = [
  { title = "Tanpa kode asing", text = "Mesin Anda menjalankan kode komputasi GPU Goblin sendiri yang dipublikasikan, tidak pernah program yang dikirim oleh peneliti." },
  { title = "Di dalam sandbox", text = "Setiap tugas berjalan terisolasi dari berkas dan jaringan Anda, dengan batas memori, disk, dan prosesor." },
  { title = "Hasil terverifikasi", text = "Sebuah hasil baru dihitung setelah penghitungan ulang yang independen atau kecocokan dengan hasil kontributor lain." },
  { title = "Anda tetap memegang kendali", text = "Jeda, jam, hanya saat Anda tidak di tempat, batas suhu dan memori: mesin itu pertama-tama milik Anda." },
]

status_title = "Posisi proyek saat ini"
faq_title = "Pertanyaan yang paling sering diajukan"
faq = [
  { q = "Apakah GPU Goblin gratis?", a = "Ya, untuk riset dan setiap penggunaan nonkomersial. Meminjamkan komputer Anda tidak memakan biaya selain listrik, dan menggunakan jaringan untuk riset gratis. Kode sumber perangkat lunaknya tersedia di bawah lisensi PolyForm Noncommercial." },
  { q = "Apakah saya dibayar karena meminjamkan komputer?", a = "Tidak. Kontributor mendapatkan kredit yang mencatat kontribusi mereka, tetapi kredit tidak memiliki nilai uang dan tidak ada nilai uang yang dijanjikan. GPU Goblin adalah komputasi sukarela untuk sains." },
  { q = "Bisakah peneliti menjalankan apa saja di mesin saya?", a = "Tidak. Mesin Anda hanya menjalankan kode komputasi GPU Goblin sendiri (perkalian matriks, operasi pada tensor, langkah pelatihan model), di dalam sandbox. Peneliti menjelaskan model dan data; mereka tidak pernah mengirim program." },
]

final_title = "Berikan sains daya yang dibutuhkannya"
final_text = "Daftar dalam satu menit dengan alamat e-mail Anda, pasang aplikasinya, dan pilih kapan mesin Anda membantu riset."
+++

GPU Goblin **sedang dalam persiapan beta**: jaringan sedang diuji sebelum kontributor dan peneliti
bergabung dalam jumlah yang lebih besar. Yang sudah berfungsi:

- komputasi matriks besar, dan komputasi yang dijelaskan sebagai graf operasi tensor (ditulis
  dengan PyTorch, misalnya), termasuk yang lebih besar daripada komputer mana pun, dipotong menjadi
  potongan-potongan;
- pelatihan model machine learning, termasuk model yang lebih besar daripada komputer mana pun,
  dipotong menjadi tahap dan ubin;
- komputasi pada prosesor, pada kartu grafis melalui Vulkan (NVIDIA, AMD, Intel), dan secara native
  pada kartu NVIDIA dengan CUDA;
- pemeriksaan setiap hasil, baik dengan penghitungan ulang yang independen maupun dengan
  membandingkannya dengan hasil kontributor lain;
- {{ <os k="home_app" lang={lang} win={config.extra.windows_available} /> }}

{{ <os k="home_plans" lang={lang} win={config.extra.windows_available} /> }}
