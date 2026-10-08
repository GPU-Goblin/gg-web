+++
title = "Araştırmacılar için: daha büyük bilimsel hesaplamalar"
description = "Bilimsel hesaplamalarınız için GPU Goblin'in ödünç verilen bilgisayarlardan oluşan hesaplama ağını kullanın: büyük matris çarpımları, tensör işlemi grafları, model eğitimi. Otomatik olarak bölünen büyük hesaplamalar, doğrulanmış sonuçlar."
template = "page.html"
[extra]
lead = "Hesaplamalarınızı Python'dan çalıştırmak için GPU Goblin'in hesaplama ağını kullanın. Büyük hesaplamalar, gönüllülerin ödünç verdiği bilgisayarlar arasında otomatik olarak bölünür ve her sonuç doğrulanır."
cta = "Erişim isteyin"
cta_page = "account"
cta2 = "SSS'yi okuyun"
cta2_page = "faq"
toc = true
+++

## Neleri hesaplayabilirsiniz?

GPU Goblin, kataloğundaki bilimsel hesaplama türlerini işlemcilerde ve ekran kartlarında
hesaplar:

- **Büyük matris çarpımları**: bilimsel hesaplamanın büyük bölümünün temelidir; tek bir makine için
  fazla büyük olduklarında parçalara bölünürler.
- **Tensör işlemi grafları üzerindeki hesaplamalar**: 45'ten fazla operatörden (aritmetik,
  indirgemeler, tamsayı tensörleri, özel formüller…) oluşan bir graf olarak tanımlanan bir hesaplama;
  örneğin Python paketi tarafından bir PyTorch programından yakalanır.
- **Makine öğrenmesi modellerinin eğitimi**: evrişimli ağlar, transformer'lar, dil modelleri.
  Herhangi bir katılımcının makinesinden daha büyük bir model otomatik olarak aşamalara (birbiri
  ardına hesaplanan katman grupları), karolara (parçalara ayrılan büyük matrisler) ve mikro yığınlara
  bölünür.

Siz hesaplamayı tanımlarsınız, hesaplama ağı da onu kendi doğrulanmış işlemleriyle hesaplar. Kataloğa zamanla başka hesaplama türleri eklenir:
araştırmanızın neye ihtiyaç duyduğunu bize anlatın.

## Bir hesaplama nasıl işler?

1. Laboratuvarınıza kurulan küçük bir hizmet olan laboratuvar **düğümünüz**, verileri tutar ve
   hesaplamayı görevlere böler.
2. Katılımcıların makineleri girdilerini alır, hesaplar ve sonuçlarını geri gönderir.
3. Her sonuç, kullanılmadan önce **doğrulanır** — bağımsız bir doğrulayıcı tarafından yeniden
   hesaplanır ya da başka bir katılımcının yaptığı aynı hesaplamayla karşılaştırılır.
4. Kabul edilen sonuçlar sizin sonucunuzda birleştirilir. Eğitilen bir model için bu bir turdur:
   gradyanlar birleştirilir, optimize edici adımını atar ve bir sonraki tur başlar.

## Verileriniz

- Varsayılan olarak sunucu **hiçbir araştırma verisi saklamaz** ve laboratuvarınızın düğümü veri kümelerinizi asla olduğu gibi göndermez: makinelere **hesaplanacak işlemleri**, yalnızca her görevin ihtiyaç duyduğu sayılarla birlikte gönderir.
- Bu sayılar dosya adı ya da neyi temsil ettiklerine dair bir açıklama olmadan gelir (metin
  sayısal token'lar olarak gelir). Veriler hesaplama sırasında şifrelenmez: piksellerden oluşan bir
  dizi yine de görüntü olarak gösterilebilir ve token'lar yeniden metne dönüştürülebilir. Gizli
  kalması gereken verileri (örneğin kişisel veya tıbbi veriler) herkese açık hesaplama ağına
  göndermeyin.

## Erişim

[Hesabınızdan erişim isteyin](../account): e-posta adresinizle giriş yapın ve araştırmacı erişim talebini doldurun. Sorular: [contact@gpugoblin.com](mailto:contact@gpugoblin.com).

## Maliyet

Hesaplama ağını araştırma için kullanmak **ücretsizdir**. Yazılım PolyForm Noncommercial lisansıyla
erişime açıktır: araştırma ve ticari olmayan her kullanım için ücretsizdir. Ticari kullanım için
yazarla bir anlaşma yapılması gerekir.
