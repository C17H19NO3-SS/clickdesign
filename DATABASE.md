# MySQL Veritabanı Mimarısı ve Şeması (`DATABASE.md`)

Bu doküman, `PRODUCTS.md` içerisinde belirlenen gereksinimlere uygun olarak tasarlanmış **MySQL Relational Database** şemasını içermektedir.

> **Soft Delete ilkesi:** Tüm ana tablolarda (`users`, `products`, `categories`, `orders`, `custom_projects`, `tickets`, `reviews`, `blog_posts`) silme işlemleri `deleted_at` (TIMESTAMP, NULLABLE) sütunu üzerinden geçici mantıksal silme (Soft Delete) şeklinde yapılacak, veriler fiziksel olarak veritabanından silinmeyecektir.

---

## 1. Kullanıcı ve Yetkilendirme (`users`, `user_tokens`, `roles`, `permissions`, `role_permissions`)

### `roles` (Sistem Rolleri)
- `id` (INT UNSIGNED, PK, AUTO_INCREMENT)
- `name` (VARCHAR(50), UNIQUE) - Örn: 'super_admin', 'support_agent', 'content_manager', 'customer'
- `description` (VARCHAR(255), NULLABLE)

### `permissions` (Yetkiler / İzinler)
- `id` (INT UNSIGNED, PK, AUTO_INCREMENT)
- `name` (VARCHAR(100), UNIQUE) - Örn: 'products.create', 'tickets.reply', 'orders.refund'
- `description` (VARCHAR(255), NULLABLE)

### `role_permissions` (Rol-İzin Eşleştirmesi)
- `role_id` (INT UNSIGNED, FK)
- `permission_id` (INT UNSIGNED, FK)

### `users` (Kullanıcılar ve Profiller)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `name` (VARCHAR(100))
- `email` (VARCHAR(150), UNIQUE)
- `password_hash` (VARCHAR(255), NULLABLE - Social auth için)
- `role` (ENUM('admin', 'customer'), DEFAULT 'customer')
- `avatar` (VARCHAR(255), NULLABLE)
- **Güvenlik & Sosyal Giriş:**
  - `two_factor_secret` (VARCHAR(255), NULLABLE)
  - `two_factor_enabled` (TINYINT(1), DEFAULT 0)
  - `failed_login_attempts` (INT, DEFAULT 0) - Başarısız giriş deneme sayısı
  - `locked_until` (TIMESTAMP, NULLABLE) - Hesap kilitleme bitiş zamanı
  - `google_id` (VARCHAR(100), NULLABLE)
  - `github_id` (VARCHAR(100), NULLABLE)
- **Fatura Bilgileri:**
  - `billing_type` (ENUM('individual', 'corporate'), DEFAULT 'individual')
  - `identity_number` (VARCHAR(11), NULLABLE - TCKN)
  - `tax_office` (VARCHAR(100), NULLABLE - Vergi Dairesi)
  - `tax_number` (VARCHAR(20), NULLABLE - Vergi No)
  - `company_name` (VARCHAR(150), NULLABLE - Firma Unvanı)
  - `address` (TEXT, NULLABLE)
  - `phone` (VARCHAR(30), NULLABLE)
- **Yasal Onaylar:**
  - `kvkk_consent_at` (TIMESTAMP, NULLABLE - KVKK Açık Rıza onay zamanı)
- `created_at`, `updated_at` (TIMESTAMP)

### `user_tokens` (JWT Refresh Token Kayıtları)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `user_id` (BIGINT UNSIGNED, FK)
- `refresh_token` (VARCHAR(255), UNIQUE)
- `user_agent` (VARCHAR(255), NULLABLE)
- `ip_address` (VARCHAR(45), NULLABLE)
- `expires_at` (TIMESTAMP)
- `created_at` (TIMESTAMP)

### `password_resets` (Şifre Sıfırlama Token Kayıtları)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `email` (VARCHAR(150), INDEX)
- `token_hash` (VARCHAR(255), UNIQUE) - SHA-256 hash'lenmiş tek kullanımlık token
- `expires_at` (TIMESTAMP) - Oluşturulduktan 60 dakika sonra süresi dolar
- `created_at` (TIMESTAMP)

---

## 2. Ürün ve Kategori Yönetimi (`categories`, `products`, `product_addons`)

### `categories` (Kategoriler)
- `id` (INT UNSIGNED, PK, AUTO_INCREMENT)
- `parent_id` (INT UNSIGNED, NULLABLE - Hiyerarşik kategoriler için)
- `slug` (VARCHAR(150), UNIQUE)
- `name` (VARCHAR(150))
- `description` (TEXT, NULLABLE)
- `icon` (VARCHAR(100), NULLABLE - Örn: 'code', 'smartphone', 'monitor')
- `created_at` (TIMESTAMP)

### `products` (Hazır Lisanslı Ürünler)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `category_id` (INT UNSIGNED, FK)
- `title` (VARCHAR(200))
- `slug` (VARCHAR(200), UNIQUE)
- `summary` (TEXT, NULLABLE)
- `description` (LONGTEXT, NULLABLE)
- `base_price` (DECIMAL(10,2)) - Taban Fiyat (KDV Hariç)
- `support_extension_price` (DECIMAL(10,2), NULLABLE) - +6 Ay Güncelleme & Destek Uzatma Fiyatı
- `currency` (VARCHAR(3), DEFAULT 'TRY')
- `thumbnail` (VARCHAR(255), NULLABLE) - Ürün ana kapak görseli yolu
- `demo_url` (VARCHAR(255), NULLABLE) - Canlı Web Demo Linki
- `source_code_file` (VARCHAR(255), NULLABLE) - Kaynak kod dosya yolu (ZIP/Depo)
- `supported_platforms` (SET('windows', 'linux', 'android'), NULLABLE)
- `security_update_months` (INT, DEFAULT 6) - Güvenlik güncelleme süresi
- `seo_meta_title` (VARCHAR(255), NULLABLE)
- `seo_meta_description` (TEXT, NULLABLE)
- `sales_count` (INT UNSIGNED, DEFAULT 0) - Satış adedi sayacı
- `download_count` (INT UNSIGNED, DEFAULT 0) - Toplam indirme sayacı
- `is_active` (TINYINT(1), DEFAULT 1)
- `created_at`, `updated_at` (TIMESTAMP)

### `product_images` (Ürün Galeri Resimleri)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `product_id` (BIGINT UNSIGNED, FK)
- `image_url` (VARCHAR(255))
- `sort_order` (INT, DEFAULT 0)
- `created_at` (TIMESTAMP)

### `product_addons` (Ek/Opsiyonel Paketler)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `product_id` (BIGINT UNSIGNED, NULLABLE - Genel veya ürüne özel)
- `title` (VARCHAR(150)) - Örn: "Hosting Kurulum Hizmeti", "Google Play Yükleme"
- `price` (DECIMAL(10,2))
- `currency` (VARCHAR(3), DEFAULT 'TRY')
- `is_active` (TINYINT(1), DEFAULT 1)

---

## 3. Özel Proje & Teklif Yönetimi (`custom_projects`, `project_milestones`)

### `custom_projects` (Özel Proje Talepleri ve Teklifler)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `user_id` (BIGINT UNSIGNED, FK)
- `title` (VARCHAR(200))
- `brief_description` (TEXT) - İhtiyaç açıklaması
- `budget_preference` (VARCHAR(100), NULLABLE) - Tercih edilen bütçe
- `attached_files` (JSON, NULLABLE) - Yüklenen dosya yolları
- `offered_price` (DECIMAL(10,2), NULLABLE) - Admin tarafından verilen teklif tutarı
- `currency` (VARCHAR(3), DEFAULT 'TRY')
- `status` (ENUM('pending_quote', 'quoted', 'approved', 'in_progress', 'completed', 'rejected'), DEFAULT 'pending_quote')
- `created_at`, `updated_at` (TIMESTAMP)

### `project_milestones` (Proje Canlı Aşama Takibi)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `project_id` (BIGINT UNSIGNED, FK)
- `title` (VARCHAR(150)) - Örn: "Arayüz Tasarımı", "Backend Kodlaması"
- `description` (TEXT, NULLABLE)
- `sort_order` (INT, DEFAULT 0)
- `status` (ENUM('pending', 'in_progress', 'completed'), DEFAULT 'pending')
- `completed_at` (TIMESTAMP, NULLABLE)

---

## 4. Sipariş, Ödeme ve Kuponlar (`orders`, `order_items`, `payments`, `coupons`)

### `cart_items` (Kullanıcı Alışveriş Sepetleri)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `user_id` (BIGINT UNSIGNED, FK)
- `product_id` (BIGINT UNSIGNED, FK)
- `addon_ids` (JSON, NULLABLE) - Seçilen ek paket ID'leri
- `created_at`, `updated_at` (TIMESTAMP)

### `coupons` (İndirim Kuponları)
- `id` (INT UNSIGNED, PK, AUTO_INCREMENT)
- `code` (VARCHAR(50), UNIQUE)
- `discount_type` (ENUM('percentage', 'fixed'), DEFAULT 'percentage')
- `discount_value` (DECIMAL(10,2))
- `usage_limit` (INT, NULLABLE) - Toplam kaç defa kullanılabilir
- `per_user_limit` (INT, DEFAULT 1) - Bir kullanıcının bu kuponu maksimum kaç defa kullanabileceği
- `used_count` (INT, DEFAULT 0)
- `min_order_amount` (DECIMAL(10,2), DEFAULT 0.00)
- `applicable_product_ids` (JSON, NULLABLE) - Sadece belirli ürünlerde geçerli kılma (NULL ise tüm ürünler)
- `applicable_category_ids` (JSON, NULLABLE) - Sadece belirli kategorilerde geçerli kılma
- `starts_at` (TIMESTAMP, NULLABLE)
- `expires_at` (TIMESTAMP, NULLABLE)

### `orders` (Siparişler)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `order_number` (VARCHAR(50), UNIQUE) - Örn: ORD-20260731-X8Z9
- `user_id` (BIGINT UNSIGNED, FK)
- `order_type` (ENUM('ready_product', 'custom_project'), DEFAULT 'ready_product')
- `subtotal` (DECIMAL(10,2)) - KDV Hariç Ara Toplam
- `discount_amount` (DECIMAL(10,2), DEFAULT 0.00)
- `tax_amount` (DECIMAL(10,2), DEFAULT 0.00) - KDV Tutarı (%20 veya system_settings'den dinamik oran)
- `total_amount` (DECIMAL(10,2)) - Genel Toplam (Subtotal - Discount + Tax)
- `currency` (VARCHAR(3), DEFAULT 'TRY')
- `status` (ENUM('pending', 'paid', 'cancelled', 'refunded'), DEFAULT 'pending')
- `coupon_id` (INT UNSIGNED, NULLABLE, FK)
- `created_at`, `updated_at` (TIMESTAMP)

### `order_items` (Sipariş Kalemleri)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `order_id` (BIGINT UNSIGNED, FK)
- `product_id` (BIGINT UNSIGNED, NULLABLE, FK)
- `custom_project_id` (BIGINT UNSIGNED, NULLABLE, FK)
- `addon_ids` (JSON, NULLABLE) - Seçilen ek paket ID'leri
- `price` (DECIMAL(10,2))
- `license_key` (VARCHAR(100), NULLABLE, UNIQUE) - Otomatik üretilen benzersiz lisans anahtarı (Örn: `CLK-X8Z9-4K2P-9M1N`)

### `payments` (Sanal POS Ödeme Logları)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `order_id` (BIGINT UNSIGNED, FK)
- `gateway_plugin` (VARCHAR(50)) - Örn: 'iyzico', 'paytr'
- `transaction_id` (VARCHAR(100), NULLABLE)
- `amount` (DECIMAL(10,2))
- `currency` (VARCHAR(3))
- `status` (ENUM('success', 'failed', 'pending'))
- `response_payload` (JSON, NULLABLE)
- `created_at` (TIMESTAMP)

---

## 5. İletişim, Yorumlar & Destek (`reviews`, `tickets`, `ticket_replies`, `notifications`, `contact_messages`)

### `contact_messages` (İletişim Formu Mesajları)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `name` (VARCHAR(100))
- `email` (VARCHAR(150))
- `subject` (VARCHAR(200), NULLABLE)
- `message` (TEXT)
- `ip_address` (VARCHAR(45), NULLABLE)
- `is_read` (TINYINT(1), DEFAULT 0)
- `created_at` (TIMESTAMP)

### `reviews` (Yıldızlı Puanlama ve Yorumlar)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `product_id` (BIGINT UNSIGNED, FK)
- `user_id` (BIGINT UNSIGNED, FK)
- `rating` (TINYINT, CHECK: rating BETWEEN 1 AND 5)
- `comment` (TEXT)
- `is_verified_purchase` (TINYINT(1), DEFAULT 0) - Doğrulanmış satın alma işareti
- `is_approved` (TINYINT(1), DEFAULT 0) - Admin onayı kontrolü
- `admin_reply` (TEXT, NULLABLE) - Yöneticinin yoruma verdiği yanıt
- `replied_at` (TIMESTAMP, NULLABLE)
- `created_at` (TIMESTAMP)

### `tickets` & `ticket_replies` (Destek Talepleri)
- **`tickets`**: `id`, `user_id` (FK), `product_id` (BIGINT UNSIGNED, NULLABLE, FK), `order_id` (BIGINT UNSIGNED, NULLABLE, FK), `subject`, `priority` ('low','medium','high'), `status` ('open','answered','closed'), `created_at`, `updated_at`
- **`ticket_replies`**: `id`, `ticket_id`, `user_id`, `message`, `attachments` (JSON), `created_at`

### `notifications` (Müşteri Paneli Canlı Bildirimler)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `user_id` (BIGINT UNSIGNED, FK)
- `type` (ENUM('order', 'ticket', 'project', 'system'), DEFAULT 'system')
- `title` (VARCHAR(150))
- `message` (TEXT)
- `action_url` (VARCHAR(255), NULLABLE) - Tıklandığında yönlendirilecek panel rotası
- `is_read` (TINYINT(1), DEFAULT 0)
- `created_at` (TIMESTAMP)

---

## 6. İçerik ve Ayarlar (`blog_posts`, `faqs`, `changelogs`, `system_settings`)

### `blog_categories` (Blog Kategorileri)
- `id` (INT UNSIGNED, PK, AUTO_INCREMENT)
- `name` (VARCHAR(150))
- `slug` (VARCHAR(150), UNIQUE)
- `created_at` (TIMESTAMP)

### `blog_posts` (Blog / Haberler)
- `id` (INT UNSIGNED, PK, AUTO_INCREMENT)
- `category_id` (INT UNSIGNED, NULLABLE, FK) - İlişkili blog kategorisi
- `author_id` (BIGINT UNSIGNED, NULLABLE, FK) - Yazıyı oluşturan kullanıcı/admin
- `title` (VARCHAR(200))
- `slug` (VARCHAR(200), UNIQUE)
- `cover_image` (VARCHAR(255), NULLABLE) - Kapak görseli yolu
- `content` (LONGTEXT)
- `seo_meta_title` (VARCHAR(255), NULLABLE)
- `seo_meta_description` (TEXT, NULLABLE)
- `is_published` (TINYINT(1), DEFAULT 1)
- `created_at`, `updated_at` (TIMESTAMP)

### `faqs` (Sıkça Sorulan Sorular)
- `id`, `question`, `answer`, `category`, `sort_order`

### `changelogs` (Sürüm Notları)
- `id`, `product_id` (FK), `version` (VARCHAR(20)), `changes_summary` (TEXT), `release_date` (DATE)

### `system_settings` (Sistem & Eklenti Konfigürasyonu)
- `key_name` (VARCHAR(100), PK) - Örn: `vatansms_api_key`, `tawkto_property_id`, `default_support_months`
- `value` (TEXT)
- `updated_at` (TIMESTAMP)

### `exchange_rates` (Döviz Kurları Kayıtları)
- `currency_code` (VARCHAR(3), PK) - Örn: 'USD', 'EUR'
- `rate_to_try` (DECIMAL(10,4)) - 1 Birim Döviz = Kaç TL (TCMB Cron ile güncellenir)
- `manual_override_rate` (DECIMAL(10,4), NULLABLE) - Admin panelinden manuel kur ezme
- `updated_at` (TIMESTAMP)

### `admin_activity_logs` (Yönetici İşlem Logları - Audit Trail)
- `id` (BIGINT UNSIGNED, PK, AUTO_INCREMENT)
- `user_id` (BIGINT UNSIGNED, FK) - İşlemi yapan admin ID
- `action` (VARCHAR(100)) - Örn: 'product_delete', 'refund_issued', 'price_update'
- `description` (TEXT) - Yapılan işlemin detay açıklaması
- `ip_address` (VARCHAR(45), NULLABLE)
- `created_at` (TIMESTAMP)
