# Backend Mimari ve Modül Planlaması (`BACKEND.md`)

Bu doküman, yazılım satış ve proje yönetim platformunun **Backend (Sunucu Tarafı)** mimarisini, servis modüllerini ve iş mantığı kurallarını tanımlar.

---

## 1. Mimari Desen ve Klasör Yapısı
- **Framework & Dil:** CodeIgniter 4 (PHP 8.x)
- **Mimari:** RESTful Headless API (JSON yanıtları, CORS desteği, Standardized API Error & Success Handlers)
- **API Versiyonlama:** Tüm API rotaları `/api/v1/` ön eki ile versiyonlanır (Örn: `/api/v1/products`, `/api/v1/auth/login`). İleride geriye dönük uyumluluğu bozacak değişikliklerde `/api/v2/` açılabilir.
- **Desen:** API Controllers + Service Layer + Repository/Model Layer
- **Veritabanı Yönetimi (Migrations & Seeds):** Tüm veritabanı şeması ve sürümleri CodeIgniter 4 Migration (`app/Database/Migrations/`) sınıfları ile yönetilecek, varsayılan sistem ayarları ve admin hesabı Seeder (`app/Database/Seeds/`) sınıfları ile otomatik oluşturulacaktır (`php spark migrate` & `php spark db:seed`).
- **Input Validation & Sanitization:** Tüm gelen API istekleri CodeIgniter 4 `Validation` kütüphanesi ile doğrulanır. Hatalı isteklerde `422 Unprocessable Entity` veya `400 Bad Request` koduyla standart JSON formatında (`{ "status": "error", "message": "...", "errors": {...} }`) yanıt dönülür.
- **Sayfalama (Pagination) Standardı:** Tüm listeleme API'lerinde `?page=1&per_page=15` query parametreleri kullanılır. Yanıtlar `{ "status": "success", "data": [...], "meta": { "current_page": 1, "last_page": 5, "per_page": 15, "total": 75 } }` yapısında döner.
- **CORS Güvenlik Yapılandırması:** CodeIgniter 4 `Cors.php` filtresi ile `.env` dosyasındaki `CORS_ALLOWED_ORIGINS` değişkeninden okunan izinli domain'lere yetki verilir, preflight istekleri 3600 saniye (1 saat) önbelleklenir.
- **Eklenti (Plugin) Mimarisi:** Sanal POS ve İletişim servislerinin çekirdek kod değiştirilmeden dinamik olarak yüklenmesini sağlayan **Interface / Driver** deseni.

---

## 2. Çekirdek Servis Modülleri (Core Backend Services)

### A. Eklenti Tabanlı Ödeme Sürücüsü (`PaymentGatewayInterface`)
Tüm sanal POS servisleri bu interface'i uygulayacaktır. İlk aşamada **iyzico** (`IyzicoPaymentDriver`) ve **PayTR** (`PaytrPaymentDriver`) sürücüleri dahili olarak sunulacaktır:
- `initializePayment(Order $order)`: Ödeme formunu/token'ını başlatır (3D Secure zorunlu yönlendirme veya iframe HTML yanıtı döner).
- `handleCallback(array $requestData)`: POS'tan gelen webhook/callback yanıtını doğrular, HMAC/Hash imzasını kontrol eder, `payments` tablosundaki `transaction_id` unique kontrolü ile mükerrer (idempotent) ödeme işlenmesini önler ve sipariş durumunu `paid` yapar.
- `refund(Payment $payment)`: İade işlemini POS API'sine iletir. Sipariş statüsü `refunded` veya `cancelled` olduğunda, ilgili ürün için indirme ve güncelleme hakları otomatik olarak iptal edilir.

### B. Bildirim Sürücüsü (`NotificationServiceInterface`)
- **SMS & WhatsApp (Vatan SMS):** `sendSms(phone, message)` ve WhatsApp mesaj tetikleyici.
- **E-Posta Servisi (`MailService` / SMTP):** CodeIgniter 4 HTML View şablonları (`app/Views/emails/`) kullanılarak Sipariş Onayı (`order_success.php`), PDF Fatura Eki (`invoice.php`), Şifre Sıfırlama (`password_reset.php`), Özel Proje Teklifi (`custom_quote.php`) ve Destek Yanıtı (`ticket_reply.php`) responsive e-postaları gönderilir.
- **Fatura Servisi (`InvoiceService`):** Ödeme `paid` olduğunda Dompdf kütüphanesi ile TCKN/Vergi bilgileri içeren PDF fatura oluşturulur. Fatura e-posta eki olarak iletilir ve Müşteri Paneli'nden indirilebilir.
- **Canlı Bildirim:** `notifications` tablosuna anlık müşteri paneli bildirimi ekleme.

### C. Güvenli Dosya Teslimat Motoru (`SecureDownloadService`)
- **Depolama Servisi:** Sunucu içi korumalı yerel dizin (`writable/private_downloads/` ve `writable/uploads/`). Dışarıdan doğrudan web erişimi engellenmiştir (`.htaccess` / Nginx deny all).
- **Güvenli Dosya İndirme Akışı:** Müşteri indirme talebi gönderdiğinde JWT Token, sipariş statüsü (`paid`) ve 6 aylık güncelleme süresi doğrulanır. İndirme onaylanırsa PHP `readfile()` akışı (stream) ile zaman sınırı olan tek kullanımlık indirme jetonu üzerinden dosya güvenle müşteriye aktarılır. İade edilen (`refunded`) veya süresi dolan siparişlerde indirme reddedilir.
- **Müşteri Dosya Yükleme Kuralları (Brief & Ticket Ekleri):** Maksimum dosya boyutu 20MB ile sınırlandırılır. Sadece `pdf`, `zip`, `rar`, `png`, `jpg`, `docx` uzantılarına izin verilir. Çift uzantı kontrolü ve strictly MIME-type doğrulaması ile zararlı çalıştırma riski taşıyan (`php`, `exe`, `sh`, `js`, `html`) dosyaların yüklenmesi engellenir.
- **6 Aylık Güncelleme Kontrolü:** Sipariş tarihinin üzerinden 6 ay geçmişse ve güncellenmemişse indirme engellenir veya ek destek uyarısı verilir.

### D. Kimlik Doğrulama & Güvenlik Servisi (`AuthService`)
- **JWT Kimlik Doğrulama:** Short-lived JWT Access Token (15 dakika geçerli, `.env` içerisinden `JWT_SECRET` ile imzalanır) + DB tabanlı Refresh Token (30 gün geçerli, `user_tokens` tablosunda saklanır ve sliding expiration destekler).
- **Sosyal Giriş (OAuth 2.0):** Google & GitHub OAuth token alımı ve `users` eşleştirmesi.
- **2FA (İki Aşamalı Doğrulama):** TOTP (Google Authenticator) gizli anahtar üretimi, QR kod oluşturma ve 6 haneli kod doğrulaması.
- **Yetki Kontrolü (Filter / Middleware):** `JWTAuthFilter` (Müşteri & Admin rolleri için yetkilendirme).
- **Rate Limiting & Brute Force Koruması:** CodeIgniter 4 Throttler (`Services::throttler()`) kullanılarak IP bazlı istek sınırlaması uygulanacaktır. Login (`/auth/login`), şifre sıfırlama, hassas API ve ödeme endpoint'leri için dakikada maksimum istek sınırı (örn: Login için 5 istek/dk) uygulanacaktır.
- **Hesap Kilitleme Koruması:** 5 ardışık hatalı şifre denemesinde kullanıcı hesabı 15 dakika süreyle kilitlenir (`users.locked_until`), `failed_login_attempts` sayacı sıfırlanır ve e-posta ile bilgilendirme uyarısı gönderilir.
- **CSRF Koruma Stratejisi:** API iletişimi HTTP `Authorization: Bearer <token>` header üzerinden yapılacaktır. Tarayıcı cookie'leri kullanılmayacağı için klasik CSRF riski ortadan kaldırılacak, cookie kullanılan durumlarda ise `SameSite=Lax/Strict` ve `Secure` politikası uygulanacaktır.

### E. Para Birimi & Kur Servisi (`CurrencyExchangeService`)
- **Varsayılan Para Birimi:** TRY (TL).
- **Otomatik Kur Güncellemesi:** TCMB (Merkez Bankası) API'sinden günlük Cron ile USD ve EUR kurlarının çekilmesi + Admin panelinden manuel kur ezebilme (override) imkanı.

---

## 3. Sipariş ve Özel Proje Durum Makinesi (State Machine)

### Özel Proje İş Akışı Durumları:
1. `pending_quote` (Müşteri brief yükledi, admin teklifi bekleniyor)
2. `quoted` (Admin teklif verdi, müşteri onayı/ödemesi bekleniyor)
3. `approved` / `in_progress` (Ödeme alındı, milestone'lar başladı)
4. `completed` (Tüm milestone'lar bitti, kaynak kod teslim edildi)
5. `rejected` (Müşteri veya admin projeyi iptal etti)

*Her durum değişiminde Vatan SMS + E-posta + Panel Bildirimi tetiklenir.*

### Sipariş & Lisans Formatsal Kuralları:
- **Sipariş Numarası Üretimi:** `orders.order_number` alanı sıralı sayaç formatında otomatik üretilir (Örn: `ORD-00001001`, `ORD-00001002`). Ve her yeni siparişte sayaç 1 artırılarak benzersizliği sağlanır.
- **Lisans Anahtarı Üretimi:** `order_items.license_key` alanı `CLK-` öneki + 12 karakterlik alfanümerik kriptografik rastgele güvenli dizi (`random_bytes()`) ile üretilir (Örn: `CLK-X8Z9-4K2P-9M1N`).

---

## 4. Arka Plan Görevleri (Cron Jobs & Queues)
- **SMS Queue Worker:** Bildirim SMS'lerinin asenkron gönderilmesi.
- **Süresi Dolan Kupon Temizliği:** Tarihi geçen kuponların pasife alınması.
- **Ödenmemiş Sipariş Temizleyici:** 24 saattir `pending` durumunda bekleyen ödenmemiş siparişlerin otomatik olarak `cancelled` statüsüne çekilmesi (Müşteri panelden de bekleyen siparişini istediği an iptal edebilir).
- **Güncelleme Desteği Hatırlatıcı:** Güvenlik güncellemesi bitimine 15 gün kalan müşterilere otomatik Vatan SMS/E-posta uyarısı.
- **Otomatik Veritabanı Yedekleyici (Backup):** Her gece 03:00'te `mysqldump` ile gzip sıkıştırmalı tam veritabanı dökümü alınarak korumalı yedek dizinine ve uzak depolamaya aktarılır (Son 30 günlük yedekler saklanır).

---

## 5. DevOps, Versiyon Kontrol & Deployment (Coolify)
- **Versiyon Kontrol:** GitHub özel depoda (Private Repository) tutulacaktır.
- **Deployment Otomasyonu:** **Coolify** (Self-Hosted PaaS) entegrasyonu ile GitHub `main` branch'ine yapılan push'lar otomatik olarak Coolify webhook'ları üzerinden Docker containera deploy edilecektir.
- **Ortam Değişkenleri:** `.env` değişkenleri Coolify panelinde güvenli environment sekmesinde yönetilecektir.

---

## 6. RESTful API Endpoint Rota Haritası (`/api/v1/`)

### A. Kimlik Doğrulama (`/api/v1/auth`)
- `POST /auth/login` (Giriş yap, Access & Refresh Token al)
- `POST /auth/register` (Yeni müşteri kaydı)
- `POST /auth/refresh` (Refresh token ile yeni Access Token al)
- `POST /auth/logout` (Oturumu kapat, refresh token'ı geçersiz kıl)
- `POST /auth/forgot-password` (Şifre sıfırlama e-postası iste)
- `POST /auth/reset-password` (Token ile yeni şifre belirle)
- `GET/POST /auth/oauth/:provider` (Google & GitHub OAuth giriş/callback)

### B. Ürün Kataloğu & İçerik (`/api/v1/public`)
- `GET /products` (Ürünleri listele, filtrele, ara, sayfala)
- `GET /products/:slug` (Ürün detayları, galeri resimleri, addon'lar, yorumlar, changelog)
- `GET /categories` (Kategori ağacını listele)
- `GET /blog` & `GET /blog/:slug` (Blog listesi ve detayı)
- `GET /faqs` (Sıkça sorulan sorular)
- `GET /sitemap.xml` (Dinamik sitemap XML çıktısı)
- `GET /health` (Sistem sağlık kontrolü: MySQL ve Redis bağlantı durumunu JSON döner)

### C. Alışveriş Sepeti & Kupon (`/api/v1/cart`)
- `GET /cart` (Sepet içeriğini getir)
- `POST /cart/items` (Sepete ürün ekle)
- `DELETE /cart/items/:id` (Sepetten ürün çıkar)
- `POST /cart/apply-coupon` (İndirim kuponu uygula)

### D. Ödeme & Siparişler (`/api/v1/checkout` & `/api/v1/orders`)
- `POST /checkout/process` (Siparişi oluştur ve Sanal POS ödeme formunu başlat)
- `POST /checkout/callback/:gateway` (iyzico / PayTR webhook callback adresi)
- `GET /orders` (Müşteri sipariş geçmişi)
- `GET /orders/:id` (Sipariş detayı & PDF Fatura indirme)

### E. Müşteri Paneli (`/api/v1/account`)
- `GET/PUT /account/profile` (Profil & Fatura bilgilerini getir/güncelle)
- `GET /account/purchases` (Satın alınan hazır ürünler & İndirme bağlantısı al)
- `GET /account/purchases/:id/download` (Güvenli `readfile` indirme jetonu)
- `GET/POST /account/projects` (Özel proje taleplerim ve brief yükleme)
- `GET /account/projects/:id` (Canlı milestone takibi)
- `GET/POST /account/tickets` (Destek taleplerim ve bilet oluşturma)
- `GET /account/notifications` (Canlı bildirimleri listele & okundu işaretle)

### F. Yönetici Paneli (`/api/v1/admin`)
- `GET /admin/dashboard/stats` (Gelir/Satış metrikleri ve grafik verileri)
- `GET/POST/PUT/DELETE /admin/products` (Ürün CRUD ve galeri görsel yükleme)
- `GET/POST/PUT/DELETE /admin/categories` (Kategori CRUD)
- `GET/PUT /admin/custom-projects/:id` (Teklif verme ve milestone yönetimi)
- `GET/PUT /admin/orders/:id` (Sipariş yönetimi ve iade tetikleme)
- `GET/POST/PUT/DELETE /admin/coupons` (Kupon yönetimi)
- `PUT /admin/reviews/:id/approve` (Yorum onaylama ve yanıt verme)
- `POST /admin/tickets/:id/reply` (Destek talebi yanıtlama)
- `GET /admin/logs/activity` (Audit trail işlem logları)
