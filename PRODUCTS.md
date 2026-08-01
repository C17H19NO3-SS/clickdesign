# Yazılım Satış ve Hizmet Platformu Ürün & Hizmet Planlaması (`PRODUCTS.md`)

Bu doküman, platformun ürün çeşitliliği, satış modelleri, teknik altyapısı ve yönetim süreçlerine dair yanıtlanan 20 soruluk planlama çalışmasının sonuçlarını içermektedir.

---

## 1. Ürün ve Hizmet Çeşitliliği
- **Kapsam:** 
  - Web Siteleri
  - Masaüstü Uygulamaları
  - Mobil Uygulamalar
- **Satış Modeli:** Karma Model
  - Hazır Lisanslı Ürün Satışı
  - Kişiye veya Kuruma Özel Proje Geliştirme Hizmeti

---

## 2. Hedef Kitle (Müşteri Profili)
- B2C (Bireysel Son Kullanıcılar)
- KOBİ'ler
- Kişisel Hizmet Arayan Müşteriler

---

## 3. Fiyatlandırma ve Ödeme Mimarisi
- **Fiyatlandırma Yapısı:** Admin panelinden yönetilen taban fiyat + Sipariş talebine göre özelleştirilebilir tekliflendirme sistemi.
- **Ödeme Altyapısı:** Eklenti (Plugin) mimarisi ile esnek ve modüler sanal POS entegrasyon desteği.

---

## 4. Teslimat ve Lisanslama Yöntemi
- **Teslimat Biçimi:** Doğrudan Kaynak Kod Teslimi (Source Code Delivery).
- **Web Alt Kategorileri:** İlerleyen aşamalarda netleştirilmek üzere TBD (To Be Determined) olarak bırakılmıştır.

---

## 5. Destek, Bakım ve Güncelleme Politikası
- **Güvenlik Güncellemeleri:** 6 ay ücretsiz güvenlik güncellemesi desteği dahildir.
- **Esneklik:** Destek süresi admin paneli üzerinden dinamik olarak değiştirilebilir ve yönetilebilir yapıdadır.
- **Tekrar Satın Alma & Destek Uzatma Akışı:** Bir müşteri daha önce satın aldığı bir ürünü tekrar sepete eklemek istediğinde "Bu ürüne zaten sahipsiniz" uyarısı verilir ve tam ürün fiyatı yerine indirimli **+6 Ay Güncelleme / Destek Uzatma Paketini** indirimli fiyattan satın alması teklif edilir.

---

## 6. Özel Proje Süreç Yönetimi
- **Müşteri Paneli ve Talep Akışı:**
  - İhtiyaç / Brief Formu doldurma
  - Dosya / Görsel Yükleme altyapısı
  - Bütçe ve Teslim Süresi Tercihi
  - Müşteri Paneli üzerinden canlı Aşamalı (Milestone) Proje Takip Sistemi
  - Destek / Ticket Sistemi

---

## 7. Hedef Platformlar ve İşletim Sistemleri
- **Masaüstü:** Windows ve Linux
- **Mobil:** Android
- **Mimari:** Platform seçenekleri sisteme dinamik olarak eklenebilir ve genişletilebilir esnekliktedir.

---

## 8. Canlı Demo ve Önizleme
- **Demo Modeli:** Ürünler için Canlı Web Demoları (Live Demo) bağlantıları sunulacaktır.

---

## 9. Değerlendirme ve Yorum Sistemi
- **Puanlama:** Yıldızlı Puanlama (Star Rating) sistemi.
- **Yorum Yönetimi:** Sadece admin/yönetici onayından geçen yorumlar sitede yayınlanır.

---

## 10. Ek Hizmetler ve Opsiyonel Paketler (Add-ons)
- Dinamik ve özelleştirilebilir ek paket/hizmet seçenekleri (Örn: Sunucu kurulumu, ek özelleştirmeler vb.) admin panelinden tanımlanabilir.

---

## 11. İndirim ve Promosyon Yönetimi
- **Kupon Kodu Sistemi:** Kullanım sayısı, tarih, tutar sınırları gibi kısıtlamalar tanımlanabilen Kupon/Promosyon kodu altyapısı.

---

## 12. Mağaza / Pazaryeri Modeli
- **Yapı:** Tekil Satıcı (Single-Vendor) yapısı. Sadece platform sahibine ait ürün ve hizmetler sunulacaktır.

---

## 13. Faturalandırma ve Mükellefiyet
- Standart Bireysel (TCKN) ve Kurumsal (Vergi No, Vergi Dairesi, Unvan) fatura bilgileri toplama yapısı.
- E-Fatura entegrasyonu ilk aşamada olmayacak, ileride modüler olarak eklenebilir mimaride kurgulanacaktır.

---

## 14. Bildirim ve İletişim Kanalları
- E-posta Bildirimleri (SMTP)
- SMS & WhatsApp Bildirim Entegrasyonu (**Vatan SMS** - https://www.vatansms.com/ altyapısı ile)
- Müşteri Paneli İçi Canlı Bildirimler

---

## 15. Dil ve Para Birimi Desteği
- **Çoklu Dil Desteği (Multi-Language):** Türkçe (`tr`) ve İngilizce (`en`) dilleri desteklenecektir. Statik arayüz metinleri CodeIgniter 4 `app/Language/` altında dil dosyalarında; ürün başlığı, açıklama vb. dinamik veritabanı içerikleri ise JSON formatında (Örn: `{"tr": "...", "en": "..."}`) saklanacaktır. Request header'dan (`Accept-Language: en`) veya dil parametresinden aktif dil tespit edilir.
- **Çoklu Para Birimi Desteği (Multi-Currency):** TRY, USD ve EUR desteği.

---

## 16. İçerik Yönetimi ve SEO Modülleri
- Blog / Haberler Modülü (SEO uyumlu URL slug)
- Bilgi Bankası / Sıkça Sorulan Sorular (SSS)
- Sürüm Notları / Güncelleme Geçmişi (Changelog)
- **Gelişmiş Dinamik SEO & Sitemap Servisi (`SitemapService`):** `/api/v1/sitemap.xml` üzerinden tüm aktif ürünler, bloglar ve dinamik sayfalar için otomatik güncellenen XML sitemap sunulacaktır. Her sayfa ve ürün için meta title/description, OpenGraph (`og:title`, `og:image`) sosyal medya görsel etiketleri ve Google Zengin Sonuçlar için JSON-LD Schema (SoftwareApplication & Product) desteği dahil edilecektir.

---

## 17. Güvenlik ve Oturum Yönetimi
- İki Aşamalı Doğrulama (2FA) Desteği
- Google ve GitHub Sosyal Giriş (OAuth) Entegrasyonu

---

## 18. Raporlama ve Analiz Paneli
- **Kapsam:** Satış, Gelir, Dönüşüm Oranları, Müşteri Davranışları, İndirme İstatistikleri ve Destek Talebi Analizlerini kapsayan geniş ve detaylı Raporlama Modülü.

---

## 19. Canlı Destek ve Ek Entegrasyonlar
- **Canlı İletişim (Live Chat - Tawk.to):** Property ID veritabanı `system_settings` üzerinden yönetilecek ve admin panelinden aktif/pasif yapılabilecektir. Kullanıcı giriş yaptığında isim ve e-posta bilgileri Tawk.to JavaScript API'sine (`Tawk_API.visitor = { name, email }`) otomatik aktarılarak temsilcilerin müşteriyi tanıması sağlanacaktır.
