+++
title = "GPU Goblin'i indirin"
description = "Bilgisayarınızı araştırmaya ödünç vermek için GPU Goblin uygulamasını indirin: sistem tepsisi simgeli Linux masaüstü uygulaması, sunucular için konsol modu."
template = "download.html"
[extra]
lead = "Bilgisayarınızı ödünç vermek için tek bir uygulama: giriş yapmanızı sağlar ve duraklatmanıza, saatlerinizi ve sınırlarınızı seçmenize olanak tanır."
items = [
  { name = "Linux masaüstü", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "Sistem tepsisi simgesiyle uygulama: giriş yapın, neyi ve ne zaman ödünç vereceğinizi seçin, makinenizin ne yaptığını görün. Ubuntu, Debian, Fedora ve systemd kullanan diğer dağıtımlar." },
  { name = "Linux sunucu (konsol)", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "Sunucular ve uzak makineler için terminalde aynı uygulama: durum, duraklatma, zamanlama ve sınırlar komut satırından; her ekran kartı ayrı ayrı hesaplar." },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "Çok yakında.", text = "Aynı korumalarla, Windows 10 ve 11 için aynı uygulama.", text_win = "Windows 10 ve 11 (64 bit) için sistem tepsisi simgesiyle uygulama: giriş yapın, neyi ve ne zaman ödünç vereceğinizi seçin, makinenizin ne yaptığını görün." },
  { name = "Android", platform = "Android 12+", status = "planned", when = "Planlandı: önce telefonlarda ölçümler yapılacak.", text = "Bir telefonun grafik işlemcisini, ekranı kapalıyken Wi-Fi'da şarj olurken ödünç verme." },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## İndirdiğiniz şeyi doğrulayın

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

Bir sürümü elle doğrulamak için:

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

`allowed_signers` dosyası, sürümün genel anahtarını içerir. Anahtarın parmak izi ilk sürümle
birlikte bu sayfada yayımlanacaktır; onu size başka bir kanaldan iletilen parmak iziyle
karşılaştırın.

## Gereksinimler

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- ekran kartı için: bir Vulkan sürücüsü (NVIDIA, AMD, Intel) ya da CUDA için NVIDIA sürücüsü;
- diskte birkaç gigabayt boş alan.

Kaynak kodu, PolyForm Noncommercial lisansıyla [GitHub](https://github.com/GPU-Goblin) üzerinde
erişime açıktır.
