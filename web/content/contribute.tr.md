+++
title = "GPU'nuzu araştırmaya ödünç verin"
description = "GPU Goblin ile bilgisayarınızın ekran kartını veya işlemcisini bilimsel araştırmaya nasıl ödünç verirsiniz: makinenizde ne çalışır, kontrolü nasıl elinizde tutarsınız, nelere ihtiyacınız var."
template = "page.html"
[extra]
lead = "Ekran kartınız günün büyük kısmında boşta durur. GPU Goblin ile bu zaman, yalnızca siz izin verdiğinizde bilim için hesaplama yapar ve makinenizde platformun kendi kodundan başka hiçbir şey çalışmaz."
cta = "Hesabımı oluştur"
cta_page = "account"
cta2 = "İndir"
cta2_page = "download"
toc = true
+++

## Bilgisayarınız ne yapar?

Makinenizi ödünç verdiğinizde uygulama hesaplama ağından bir görev
ister, onu hesaplar, sonucu geri gönderir ve bir sonrakini ister. Bir görev, bilimsel bir hesaplamanın
bir parçasıdır: büyük bir matris çarpımının bir parçası, bir modelin verileri üzerinde bir işlem,
bir sinir ağının bir eğitim adımı ya da başka bir katılımcının sonucunun doğrulanması.

Yazılım yalnızca **GPU Goblin'in kendi hesaplama kodunu** çalıştırır. Araştırmacılar hesaplamalarını
(işlemlerini, boyutlarını) ve verilerini tanımlar, yazılım da bunları platformun koduyla hesaplar.

## Kontrol sizde

GPU Goblin uygulaması sistem tepsisinde durur ve makinenin ne yaptığını gösterir. Uygulamadan ya da
bir sunucuda terminalden:

- **Duraklatma** — mevcut görevden sonra ya da hemen (görev hesaplama ağına geri döner, herhangi bir
  ceza yoktur);
- **Yalnızca ben yokken** — oturumunuz kilitliyken ya da birkaç dakika bilgisayar başında
  olmadığınızda;
- **Saatler** — yalnızca seçtiğiniz zaman aralıklarında, gün gün, gece boyunca bile ödünç verme;
- **Oyunlara yol verme** — bir oyun ya da başka bir program kartı kullanırken yeni görev yok;
- **Serin tutma** — seçtiğiniz bir sıcaklığın üzerinde yeni görev yok;
- **Bellek** — bir görevin bilgisayarın ve kartın belleğinden ne kadarını kullanabileceği.

## Nelere ihtiyacınız var?

- {{ <os k="req_os" lang={lang} win={config.extra.windows_available} /> }}
- Ekran kartı için: çalışan bir Vulkan sürücüsüne sahip NVIDIA, AMD veya Intel kart. NVIDIA kartlar,
  bazı modellerde birkaç kat daha hızlı olan doğal CUDA motorunu da kullanabilir (4 GB indirme).
- Ev tipi bir internet bağlantısı; fiber idealdir, ancak kararlı her bağlantı işe yarar.
- Devam eden işler için diskte birkaç gigabayt boş alan.

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

Birden fazla ekran kartı olan makinelerde her kart ayrı ayrı hesaplama yapar ve hepsi hesabınıza
bağlanır. Ekranı olmayan bir sunucuda aynı uygulama terminalde çalışır.

## Başlamadan önce bilmeniz gerekenler

- **Makineniz hesaplamak için araştırma verisi parçaları alır**: adı ya da açıklaması olmayan sayı
  dizileri, yalnızca görevinin ihtiyaç duyduğu kadarı.
- **Makineniz, sunucunun bant genişliğinden tasarruf etmek için diğer katılımcılarla veri
  paylaşır**: aynı veriler için yetkilendirilmiş diğer makineler genel IP adresinizi görebilir. Bu
  paylaşımı kapatabilirsiniz.
- **Kredilerin hiçbir parasal değeri yoktur.** Katkınızı sayarlar; hiçbir ödeme yapılmaz.
- Ödünç vermek elektrik tüketir ve makineyi ısıtır. Yukarıdaki sınırlar, bunun size asla karar
  verdiğinizden fazlasına mal olmaması için vardır.

Korumalı alanın ve doğrulamaların nasıl çalıştığını öğrenmek için [güvenlik sayfasını](../security)
okuyun.

## Nasıl başlanır?

1. E-posta adresinizle [hesabınızı oluşturun](../account) (parola yok: size bir kod gönderilir).
2. [Uygulamayı indirin](../download) ve aynı adresle giriş yapın.
3. Neyi ve ne zaman ödünç vereceğinizi seçin. Makine hesabınıza kendiliğinden bağlanır ve çalışmaya
   başlar.
