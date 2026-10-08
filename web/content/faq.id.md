+++
title = "Pertanyaan yang sering diajukan"
description = "Jawaban tentang GPU Goblin: biaya, kredit, keamanan komputer Anda, listrik dan panas, perangkat keras yang didukung, data, dan cara peneliti mendapatkan akses."
template = "faq.html"
[extra]
lead = "Ada yang kurang? Tulis ke contact@gpugoblin.com."
groups = [
  { id = "general", title = "Proyek", items = [
    { q = "Apa itu GPU Goblin?", a = "Jaringan komputasi untuk riset yang terdiri dari komputer yang dipinjamkan orang-orang. Peneliti dapat menggunakannya untuk riset yang membutuhkan daya komputasi besar; kontributor meminjamkan kartu grafis atau prosesor mereka saat tidak membutuhkannya." },
    { q = "Siapa yang membuat GPU Goblin?", a = "GPU Goblin dirancang dan dikembangkan oleh Nicolas Michel, anggota LAAS-CNRS, sebuah laboratorium riset di Toulouse, Prancis. Ini adalah proyek pribadi, bukan layanan resmi CNRS." },
    { q = "Apakah gratis?", a = "Ya, untuk riset dan setiap penggunaan nonkomersial. Meminjamkan tidak memakan biaya selain listrik, dan komputasi di jaringan gratis untuk riset. Kode sumber perangkat lunaknya tersedia di bawah lisensi PolyForm Noncommercial." },
    { q = "Apakah ini sumber terbuka?", a = "Kode sumbernya dipublikasikan, tetapi di bawah lisensi PolyForm Noncommercial: gratis untuk riset dan penggunaan nonkomersial, bukan sumber terbuka dalam pengertian OSI. Penggunaan komersial memerlukan persetujuan penulis." },
    { q = "Bagaimana posisi proyek saat ini?", a = "Dalam persiapan beta: jaringan berfungsi dan sedang diuji sebelum dibuka lebih luas. Saat ini berjalan di Linux; versi Windows segera hadir, dan versi Android direncanakan.", a_win = "Dalam persiapan beta: jaringan berfungsi dan sedang diuji sebelum dibuka lebih luas. Berjalan di Windows dan Linux; versi Android direncanakan." },
  ] },
  { id = "contributors", title = "Meminjamkan komputer Anda", items = [
    { q = "Apakah saya akan dibayar?", a = "Tidak. Anda mendapatkan kredit yang mencatat kontribusi Anda, tetapi kredit tidak memiliki nilai uang dan tidak ada nilai uang yang dijanjikan." },
    { q = "Apakah aman untuk komputer saya?", a = "Mesin Anda hanya menjalankan kode komputasi GPU Goblin sendiri, tidak pernah program yang dikirim oleh peneliti, dan setiap tugas berjalan di dalam sandbox tanpa akses jaringan, terpisah dari berkas Anda, dengan batas memori dan disk." },
    { q = "Apakah ini akan memperlambat komputer atau game saya?", a = "Anda yang menentukan: pinjamkan hanya saat Anda tidak di tempat, pada jam pilihan, tidak pernah selama game memakai kartu, tidak pernah di atas suhu tertentu. Jeda seketika dari ikon di area notifikasi kapan pun Anda mau." },
    { q = "Berapa banyak listrik yang dipakai?", a = "Sebanyak yang dipakai kartu grafis Anda saat bekerja penuh, hanya selama ia menghitung. Membatasi jam dan suhu akan membatasi konsumsinya." },
    { q = "Perangkat keras apa yang didukung?", a = "Komputer Linux x86-64 (versi Windows segera hadir). Kartu grafis NVIDIA, AMD, atau Intel melalui Vulkan; kartu NVIDIA juga dapat memakai mesin CUDA native yang lebih cepat. Prosesor juga bisa, dengan lebih lambat.", a_win = "Komputer Windows 10 atau 11, atau Linux x86-64. Kartu grafis NVIDIA, AMD, atau Intel melalui Vulkan; kartu NVIDIA juga dapat memakai mesin CUDA native yang lebih cepat. Prosesor juga bisa, dengan lebih lambat." },
    { q = "Bisakah saya meminjamkan server tanpa layar, atau mesin dengan beberapa kartu grafis?", a = "Bisa. Aplikasinya memiliki mode konsol untuk server, dan pada mesin dengan beberapa kartu, setiap kartu menghitung secara terpisah, semuanya terhubung ke akun Anda." },
    { q = "Apakah komputer saya melihat data para peneliti?", a = "Komputer Anda hanya menerima potongan data yang dibutuhkan tugas-tugasnya: larik angka, tanpa nama file atau deskripsi tentang apa yang diwakilinya (teks tiba sebagai token numerik). Peneliti diminta untuk tidak mengirim data sensitif ke jaringan terbuka." },
    { q = "Apakah alamat IP saya terlihat?", a = "Untuk menghemat bandwidth server, mesin-mesin saling berbagi data; selama fitur ini aktif, mesin lain yang diberi izin atas data yang sama dapat melihat alamat publik Anda. Anda dapat mematikannya." },
  ] },
  { id = "researchers", title = "Untuk peneliti", items = [
    { q = "Apa yang bisa saya hitung?", a = "Saat ini: perkalian matriks besar, komputasi yang dijelaskan sebagai graf operasi tensor (lebih dari 45 operator, misalnya ditangkap dari PyTorch), dan pelatihan model machine learning (jaringan konvolusional, transformer, model bahasa). Komputasi yang lebih besar daripada mesin mana pun dipotong secara otomatis. Mesin kontributor hanya menjalankan jenis komputasi yang ada dalam katalog platform, tidak pernah kode sembarang: jenis lain ditambahkan ke katalog seiring waktu, jadi beri tahu kami apa yang Anda butuhkan." },
    { q = "Bagaimana hasil diperiksa?", a = "Setiap hasil dihitung ulang oleh validator independen atau dibandingkan dengan komputasi yang sama yang dilakukan kontributor lain, dalam toleransi yang terukur, sebelum digunakan." },
    { q = "Di mana data saya?", a = "Secara bawaan di node laboratorium Anda, sebuah layanan yang dipasang di laboratorium Anda. Node tidak pernah mengirim kumpulan data Anda apa adanya: node mengirim operasi untuk dihitung ke mesin-mesin yang menghitung, hanya dengan angka yang dibutuhkan setiap tugas. Server tidak menyimpan data riset apa pun." },
    { q = "Bagaimana cara mendapatkan akses?", a = "Dari akun Anda: masuk dengan alamat email Anda dan isi permintaan akses peneliti." },
  ] },
]
+++
