+++
title = "Güvenlik ve güven"
description = "GPU Goblin katılımcıların makinelerini ve araştırmacıların sonuçlarını nasıl korur: yabancı kod yok, korumalı alanda çalışan görevler, doğrulanmış sonuçlar ve neyin korunmadığı."
template = "page.html"
[extra]
lead = "GPU Goblin'in makinenizi nasıl koruduğu, sonuçları nasıl doğruladığı ve neyin korunmadığı."
toc = true
+++

## Bilgisayarınızda

- **Yabancı kod yok.** Yazılım yalnızca GPU Goblin'in kendi hesaplama kodunu çalıştırır. Bir görev
  bir *tanımdır* (bir modelin katmanları, bir veri yığını, bir boyut).
- **Her görev için bir korumalı alan.** {{ <os k="sec_sandbox" lang={lang} win={config.extra.windows_available} /> }}
- **Denetlenen veriler.** Yazılım, hesaplamadan önce veriler geldiğinde sunucunun imzasını doğrular. Bir veri değiştirilmişse hesaplama reddedilir.
- **Yerel kontrol.** Yazılım yalnızca kendi makinenizden yönetilebilir.

## Sonuçlarda

- **Hesaplamaların doğrulanması.** Her sonuç ya bağımsız bir doğrulayıcı tarafından
  yeniden hesaplanır ya da iki farklı katılımcı tarafından iki kez hesaplanıp ölçülmüş bir tolerans
  içinde karşılaştırılır.
- **Rastgele denetimler.** İki katılımcı aynı sonuca ulaşsa bile, sonuçların bir kısmı rastgele
  seçilerek üçüncü kez hesaplanır.

## Neler korunmuyor?

- **Katılımcılar hesapladıkları verilerin parçalarını alır**: adı ya da açıklaması olmayan sayı
  dizileri, yalnızca her görevin ihtiyaç duyduğu kadarı. Veriler hesaplama sırasında şifrelenmez: gizli verileri
  herkese açık hesaplama ağına göndermeyin.
- Katılımcılar arası paylaşım açıkken **genel IP adresiniz**, aynı veriler için yetkilendirilmiş
  diğer makineler tarafından **görülebilir** (paylaşım varsayılan olarak açıktır ve kapatılabilir).

## Bir sorun bildirme

Bir güvenlik açığı mı buldunuz? Yayımlamadan önce
[contact@gpugoblin.com](mailto:contact@gpugoblin.com) adresine yazın.
