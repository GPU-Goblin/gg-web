+++
title = "Sıkça sorulan sorular"
description = "GPU Goblin hakkında yanıtlar: maliyet, krediler, bilgisayarınızın güvenliği, elektrik ve ısı, desteklenen donanım, veriler ve araştırmacıların nasıl erişim aldığı."
template = "faq.html"
[extra]
lead = "Eksik bir şey mi var? contact@gpugoblin.com adresine yazın."
groups = [
  { id = "general", title = "Proje", items = [
    { q = "GPU Goblin nedir?", a = "İnsanların ödünç verdiği bilgisayarlardan oluşan, araştırmaya yönelik bir hesaplama ağı. Araştırmacılar bu ağı yüksek hesaplama gücü gerektiren araştırmaları için kullanabilir; katılımcılar da ekran kartlarını veya işlemcilerini ihtiyaç duymadıkları zamanlarda ödünç verir." },
    { q = "GPU Goblin'i kim yapıyor?", a = "GPU Goblin, Fransa'nın Toulouse kentindeki bir araştırma laboratuvarı olan LAAS-CNRS'in üyesi Nicolas Michel tarafından tasarlanıp geliştirilmektedir. Bu kişisel bir projedir, CNRS'in resmî bir hizmeti değildir." },
    { q = "Ücretsiz mi?", a = "Evet, araştırma ve ticari olmayan her kullanım için. Ödünç vermenin elektrik dışında bir maliyeti yoktur ve hesaplama ağında hesaplama yapmak araştırma için ücretsizdir. Yazılımın kaynak kodu PolyForm Noncommercial lisansıyla erişime açıktır." },
    { q = "Açık kaynak mı?", a = "Kaynak kodu yayımlanmıştır, ancak PolyForm Noncommercial lisansıyla: araştırma ve ticari olmayan kullanım için ücretsizdir, OSI tanımına göre açık kaynak değildir. Ticari kullanım için yazarın onayı gerekir." },
    { q = "Proje ne durumda?", a = "Beta hazırlığı aşamasında: hesaplama ağı çalışıyor ve daha geniş bir açılıştan önce test ediliyor. Bugün Linux üzerinde çalışıyor; bir Windows sürümü çok yakında geliyor, bir Android sürümü de planlanmaktadır.", a_win = "Beta hazırlığı aşamasında: hesaplama ağı çalışıyor ve daha geniş bir açılıştan önce test ediliyor. Windows ve Linux üzerinde çalışıyor; bir Android sürümü planlanmaktadır." },
  ] },
  { id = "contributors", title = "Bilgisayarınızı ödünç vermek", items = [
    { q = "Para alacak mıyım?", a = "Hayır. Katkınızı sayan krediler kazanırsınız, ancak kredilerin hiçbir parasal değeri yoktur ve böyle bir değer vaat edilmez." },
    { q = "Bilgisayarım için güvenli mi?", a = "Makineniz yalnızca GPU Goblin'in kendi hesaplama kodunu çalıştırır, asla bir araştırmacının gönderdiği bir programı çalıştırmaz; her görev ağ erişimi olmayan, dosyalarınızdan uzak, bellek ve disk sınırları konmuş bir korumalı alanda çalışır." },
    { q = "Bilgisayarımı ya da oyunlarımı yavaşlatır mı?", a = "Karar sizin: yalnızca siz yokken, seçtiğiniz saatlerde ödünç verin; bir oyun kartı kullanırken asla, belirli bir sıcaklığın üzerinde asla. İstediğiniz zaman sistem tepsisi simgesinden anında duraklatabilirsiniz." },
    { q = "Ne kadar elektrik harcar?", a = "Ekran kartınızın yük altında harcadığı kadar, yalnızca hesaplama yaptığı sürece. Saatleri ve sıcaklığı sınırlamak tüketimi de sınırlar." },
    { q = "Hangi donanımlar çalışır?", a = "Linux x86-64 bir bilgisayar (bir Windows sürümü çok yakında geliyor). Vulkan aracılığıyla NVIDIA, AMD veya Intel ekran kartları; NVIDIA kartlar daha hızlı olan doğal CUDA motorunu da kullanabilir. İşlemciler de çalışır, ancak daha yavaş.", a_win = "Windows 10 veya 11 ya da Linux x86-64 bir bilgisayar. Vulkan aracılığıyla NVIDIA, AMD veya Intel ekran kartları; NVIDIA kartlar daha hızlı olan doğal CUDA motorunu da kullanabilir. İşlemciler de çalışır, ancak daha yavaş." },
    { q = "Ekranı olmayan bir sunucuyu ya da birden fazla ekran kartı olan bir makineyi ödünç verebilir miyim?", a = "Evet. Uygulamanın sunucular için bir konsol modu vardır; birden fazla kartı olan bir makinede her kart ayrı ayrı hesaplama yapar ve hepsi hesabınıza bağlanır." },
    { q = "Bilgisayarım araştırmacıların verilerini görür mü?", a = "Yalnızca görevlerinin ihtiyaç duyduğu veri parçalarını alır: dosya adı ya da neyi temsil ettiklerine dair bir açıklama olmayan sayı dizileri (metin sayısal token'lar olarak gelir). Araştırmacılardan hassas verileri herkese açık hesaplama ağına göndermemeleri istenir." },
    { q = "IP adresim görünür mü?", a = "Sunucunun bant genişliğinden tasarruf etmek için makineler birbirleriyle veri paylaşır; bu paylaşım açıkken, aynı veriler için yetkilendirilmiş diğer makineler genel IP adresinizi görebilir. Bu paylaşımı kapatabilirsiniz." },
  ] },
  { id = "researchers", title = "Araştırmacılar için", items = [
    { q = "Neleri hesaplayabilirim?", a = "Bugün: büyük matris çarpımları, tensör işlemi grafları olarak tanımlanan hesaplamalar (45'ten fazla operatör, örneğin PyTorch'tan yakalanan) ve makine öğrenmesi modellerinin eğitimi (evrişimli ağlar, transformer'lar, dil modelleri). Tek bir makineye sığmayacak kadar büyük hesaplamalar otomatik olarak bölünür. Katılımcıların makineleri yalnızca platform kataloğundaki hesaplama türlerini çalıştırır, asla rastgele kod çalıştırmaz: kataloğa zamanla başka türler eklenir, bu yüzden neye ihtiyacınız olduğunu bize anlatın." },
    { q = "Sonuçlar nasıl doğrulanır?", a = "Her sonuç, kullanılmadan önce bağımsız bir doğrulayıcı tarafından yeniden hesaplanır ya da başka bir katılımcının yaptığı aynı hesaplamayla, ölçülmüş bir tolerans içinde karşılaştırılır." },
    { q = "Verilerim nerede?", a = "Varsayılan olarak laboratuvarınızın düğümünde; bu, laboratuvarınıza kurulan bir hizmettir. Veri kümelerinizi asla olduğu gibi göndermez: hesaplama yapan makinelere hesaplanacak işlemleri, yalnızca her görevin ihtiyaç duyduğu sayılarla birlikte gönderir. Sunucu hiçbir araştırma verisi saklamaz." },
    { q = "Nasıl erişim alırım?", a = "Hesabınızdan: e-posta adresinizle giriş yapın ve araştırmacı erişim talebini doldurun." },
  ] },
]
+++
