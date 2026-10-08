+++
title = "GPU Goblin"
description = "Bilgisayarınızın ekran kartını bilimsel hesaplamaya ödünç verin ya da araştırmanız için GPU Goblin'in hesaplama ağını kullanın. Araştırma için ücretsiz, sonuçlar doğrulanmış, kontrol sizde."
template = "index.html"

[extra]
hero_title = "Boşta duran ekran kartınız yarının bilimine güç verebilir"
hero_lead = "GPU Goblin, katkıda bulunanların bilgisayarlarını araştırmaya adanmış tek bir hesaplama ağında birleştirir. Sizin yardımınızla araştırmacılar hesaplamalarını çalıştırabilir ve bilimsel bilgiyi ileriye taşıyabilir."

steps_title = "Nasıl çalışır?"
steps = [
  { title = "Uygulamayı yükleyin", text = "E-posta adresinizle giriş yapın ve neyi ödünç vereceğinizi seçin: işlemci veya ekran kartı." },
  { title = "Ne zaman olacağına siz karar verirsiniz", text = "Yalnızca siz yokken, geceleri, belirli bir sıcaklığın altında: bilgisayarınız size uygun olduğunda çalışır ve onu istediğiniz an durdurabilirsiniz." },
  { title = "Araştırmacılar hesaplar", text = "Bilim insanları ödünç verilen ekran kartlarını araştırmalarıyla ilgili hesaplamalar için kullanır." },
]

sides = [
  { title = "Bir bilgisayarınız var", text = "Bir oyun bilgisayarı, bir iş istasyonu, bir laboratuvar sunucusu: ekran kartı günün büyük kısmında boşta durur. Bu zamanı araştırmaya ödünç verin.", points = ["Yalnızca platformun kendi kodu, korumalı alanda çalışır", "Ne zaman olacağına siz karar verirsiniz: yokluğunuz, saatler, sıcaklık, bellek", "Makineye ihtiyacınız olduğunda anında durdurun"], page = "contribute", cta = "GPU'nuzu ödünç verin" },
  { title = "Araştırmacısınız", text = "Bilimsel hesaplamalarınız için GPU Goblin'in hesaplama ağını Python'dan kullanın: gpugoblin kütüphanesini içe aktarmanız yeterli.", points = ["Büyük hesaplamalar otomatik olarak parçalara bölünür", "Verileriniz varsayılan olarak laboratuvarınızın düğümünde kalır", "Sonuçlar size ulaşmadan önce doğrulanır"], page = "research", cta = "Araştırmacılar için" },
]

trust_title = "Güvenebilmeniz için tasarlandı"
trust_lead = "Bilgisayarınız korunur, araştırmacılar da her sonuca güvenebilir."
trust = [
  { title = "Yabancı kod yok", text = "Makineniz yalnızca GPU Goblin'in yayımlanmış kendi hesaplama kodunu çalıştırır; asla bir araştırmacının gönderdiği bir programı çalıştırmaz." },
  { title = "Korumalı alan", text = "Her görev dosyalarınızdan ve ağdan yalıtılmış olarak, bellek, disk ve işlemci sınırlarıyla çalışır." },
  { title = "Doğrulanmış sonuçlar", text = "Bir sonuç ancak bağımsız bir yeniden hesaplamadan ya da başka bir katılımcının sonucuyla eşleşmesinden sonra geçerli sayılır." },
  { title = "Kontrol sizde", text = "Duraklatma, saatler, yalnızca siz yokken, sıcaklık ve bellek sınırları: makine her şeyden önce sizindir." },
]

status_title = "Proje ne durumda?"
faq_title = "En sık sorulan ilk sorular"
faq = [
  { q = "GPU Goblin ücretsiz mi?", a = "Evet, araştırma ve ticari olmayan her kullanım için. Bilgisayarınızı ödünç vermenin elektrik dışında bir maliyeti yoktur ve hesaplama ağını araştırma için kullanmak ücretsizdir. Yazılımın kaynak kodu PolyForm Noncommercial lisansıyla erişime açıktır." },
  { q = "Bilgisayarımı ödünç verdiğim için para alacak mıyım?", a = "Hayır. Katılımcılar katkılarını sayan krediler kazanır, ancak kredilerin hiçbir parasal değeri yoktur ve böyle bir değer vaat edilmez. GPU Goblin, bilim için gönüllü hesaplamadır." },
  { q = "Bir araştırmacı makinemde istediği her şeyi çalıştırabilir mi?", a = "Hayır. Makineniz yalnızca GPU Goblin'in kendi hesaplama kodunu (matris çarpımları, tensörler üzerindeki işlemler, modellerin eğitim adımları) bir korumalı alan içinde çalıştırır. Araştırmacılar modelleri ve verileri tanımlar; asla program göndermezler." },
]

final_title = "Bilime eksik olan gücü verin"
final_text = "E-posta adresinizle bir dakikada kaydolun, uygulamayı kurun ve makinenizin araştırmaya ne zaman yardım edeceğini seçin."
+++

GPU Goblin **beta hazırlığı aşamasındadır**: hesaplama ağı, daha çok sayıda katılımcı ve araştırmacı
katılmadan önce test ediliyor. Şu anda çalışanlar:

- büyük matris hesaplamaları ve tensör işlemi grafları olarak tanımlanan hesaplamalar (örneğin
  PyTorch ile yazılmış), tek bir bilgisayara sığmayacak kadar büyük olanlar da parçalara bölünerek;
- makine öğrenmesi modellerinin eğitimi; tek bir bilgisayara sığmayacak kadar büyük modeller de
  aşamalara ve karolara bölünerek eğitilebilir;
- işlemcilerde, Vulkan aracılığıyla ekran kartlarında (NVIDIA, AMD, Intel) ve NVIDIA kartlarda CUDA ile
  doğal olarak hesaplama;
- her sonucun ya bağımsız bir yeniden hesaplamayla ya da başka bir katılımcının sonucuyla
  karşılaştırılarak doğrulanması;
- {{ <os k="home_app" lang={lang} win={config.extra.windows_available} /> }}

{{ <os k="home_plans" lang={lang} win={config.extra.windows_available} /> }}
