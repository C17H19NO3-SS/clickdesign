# Frontend Sayfa ve Mimari Ağaç Şeması (`FRONTEND_PAGES.md`)

Bu doküman, yazılım satış ve proje yönetim platformunun **Frontend (Arayüz)** sayfa yapısını, müşteri ve yönetici paneli rotalarını ağaç (tree) şeması biçiminde gösterir.

---

## 🛠️ Teknoloji Stack & Mimari
- **Framework & Build Tool:** React (v18+) + Vite (SPA - Single Page Application)
- **Styling & UI:** Vanilla CSS / TailwindCSS + Modern UI Component kütüphanesi (Lucide Icons, Headless UI / Radix Primitives)
- **Tema & Dark Mode:** Sistem tercihi uyumlu + Manuel Dark/Light Mode geçiş desteği (localStorage & Tailwind `dark` class toggle)
- **Toast Notifications:** Sonner / React Hot Toast (İşlem bildirimleri için modern toast bileşeni)
- **Responsive & PWA Stratejisi:** Mobile-First tasarım yaklaşımı (Breakpoint'ler: sm: 640px, md: 768px, lg: 1024px, xl: 1280px) + PWA (Progressive Web App) manifest ve service worker altyapısı.
- **State & API Management:** Axios (JWT Bearer Token Interceptor ile) + TanStack Query (React Query)
- **Form Management & Validation:** React Hook Form + Zod (Tip güvenli istemci taraflı şema doğrulaması)
- **Routing:** React Router v6
- **Klasör & Kod Organizasyonu:** Modüler Feature-Based Klasör Yapısı (`src/features/{auth,products,checkout,account,admin}` altında bileşen, hook ve servislerin modüler olarak toplanması + `src/components/ui/` altında ortak arayüz bileşenleri + `src/services/api/` altında Axios istemcisi).
- **Backend Haberleşme:** RESTful Headless API (`/api/v1/` endpoint'leri)

---

## 🌳 Genel Sayfa Ağacı (Sitemap & Route Tree)

```text
frontend-app/
│
├── 🌐 PUBLIC (Herkese Açık Ziyaretçi Sayfaları)
│   ├── 🏠 / (Ana Sayfa - Öne Çıkan Ürünler, Hizmet Özeti, Referanslar)
│   │
│   ├── 📦 /products (Ürün Kataloğu)
│   │   ├── 🔍 Filtreler: Category (Web, Masaüstü, Mobil), Fiyat, Sıralama
│   │   └── 📄 /products/:slug (Ürün Detay Sayfası)
│   │       ├── 🔗 Canlı Demo Butonu (Web Demo Önizleme)
│   │       ├── 🧩 Ek Paket (Add-on) Seçim Alanı
│   │       ├── ⭐ Yıldızlı Puanlama ve Onaylı Yorumlar
│   │       └── 📜 Sürüm Notları (Changelog) Tabı
│   │
│   ├── 📝 /custom-project (Özel Proje Teklif İsteme Sihirbazı)
│   │   ├── 📋 Brief / İhtiyaç Açıklama Formu
│   │   ├── 📁 Dosya / Görsel Yükleme Alanı
│   │   └── 💰 Bütçe ve Teslimat Süresi Tercihi
│   │
│   ├── 🛒 /cart (Alışveriş Sepeti)
│   │   └── 🏷️ Kupon Kodu Uygulama Alanı
│   │
│   ├── 💳 /checkout (Ödeme ve Sipariş Tamamlama)
│   │   ├── 🏢 Fatura Türü Seçimi (Bireysel TCKN / Kurumsal Vergi No)
│   │   ├── 🔌 Sanal POS Eklenti Ödeme Formu
│   │   ├── ✅ /checkout/success (Ödeme Başarılı & Sipariş Özeti)
│   │   └── ❌ /checkout/failed (Ödeme Başarısız & Tekrar Dene)
│   │
│   ├── 📰 /blog (Blog & Haberler)
│   │   └── 📖 /blog/:slug (Blog Detay Sayfası - SEO Uyumlu)
│   │
│   ├── ❓ /faq (Sıkça Sorulan Sorular & Bilgi Bankası)
│   │
│   ├── 📞 /contact (İletişim Sayfası - Harita, İletişim Formu, Şirket Bilgileri)
│   │
│   ├── 📜 /legal (Yasal ve Kurumsal Sayfalar - Sanal POS Onayı için Zorunlu)
│   │   ├── 📄 /legal/terms (Kullanım Koşulları ve Mesafeli Satış Sözleşmesi)
│   │   ├── 🔒 /legal/privacy (Gizlilik Politikası & KVKK Aydınlatma Metni)
│   │   └── ↩️ /legal/refund (İptal ve İade Koşulları - Yazılım/Kaynak Kod Teslimat Şartları)
│   │
│   ├── ⚠️ /error (Hata Sayfaları)
│   │   ├── 🚫 /404 (Sayfa Bulunamadı)
│   │   └── 💥 /500 (Sunucu Hatası)
│   │
│   └── 🔑 /auth (Kimlik Doğrulama)
│       ├── 🚪 /auth/login (Giriş Yap - E-posta, Google, GitHub, 2FA Doğrulama Adımı)
│       ├── ✍️ /auth/register (Kayıt Ol)
│       └── 🔒 /auth/forgot-password (Şifremi Unuttum)
│
├── 👤 CUSTOMER PORTAL (Müşteri Paneli - /account)
│   ├── 📊 /account/dashboard (Müşteri Paneli Özet & Son Aktiviteler)
│   │
│   ├── 📄 /account/orders (Sipariş Geçmişi & Faturalarım)
│   │   └── 🔍 /account/orders/:id (Sipariş Detayı & Yazdırılabilir Fatura Görüntüleme)
│   │
│   ├── 📥 /account/purchases (Satın Alınan Hazır Ürünler)
│   │   ├── ⚡ GCS Signed URL ile Güvenli İndirme Butonu
│   │   └── 🛡️ 6 Aylık Güvenlik Güncelleme Desteği Durumu
│   │
│   ├── 🛠️ /account/projects (Özel Proje Taleplerim)
│   │   └── 🔍 /account/projects/:id (Canlı Aşamalı Milestone Takip Ekranı)
│   │
│   ├── 🎫 /account/tickets (Destek Taleplerim)
│   │   ├── ➕ /account/tickets/create (Yeni Ticket Oluştur)
│   │   └── 💬 /account/tickets/:id (Ticket Mesajlaşma ve Dosya Eki)
│   │
│   ├── 🔔 /account/notifications (Canlı Bildirimler)
│   │
│   └── ⚙️ /account/settings
│       ├── 👤 /account/settings/profile (Profil & Fatura Bilgileri Düzenleme)
│       └── 🔒 /account/settings/security (2FA Etkinleştirme, Şifre Değiştirme, Aktif Oturum Açan Cihazlar & Diğer Cihazlardan Çıkış Yap / Revoke)
│
└── 🛠️ ADMIN PORTAL (Yönetici Paneli - /admin)
    ├── 📈 /admin/dashboard (Genel Analitik & Raporlama - Recharts/Chart.js ile Gelir/Satış Çizgi Grafikleri, En Çok Satılan Ürün Pasta Grafiği, Aktif Proje & Destek Talebi KPI Kartları)
    │
    ├── 📦 /admin/products (Hazır Ürün Yönetimi)
    │   ├── ➕ /admin/products/create (Yeni Ürün & GCS Dosya Yükleme)
    │   └── ✏️ /admin/products/edit/:id (Taban Fiyat, Demo Linki, Güncelleme Ayarları)
    │
    ├── 🏷️ /admin/categories (Kategori Yönetimi)
    │
    ├── 📝 /admin/custom-projects (Özel Proje & Teklif Yönetimi)
    │   └── 🛠️ /admin/custom-projects/:id (Teklif Verme, Milestone Oluşturma & Durum Güncelleme)
    │
    ├── 💳 /admin/orders (Siparişler & Fatura Detayları)
    │
    ├── 🎟️ /admin/coupons (Kupon & Promosyon Yönetimi - Kullanım Sınırı & Tarih Ayarları)
    │
    ├── 🧩 /admin/addons (Ek Paket / Hizmet Yönetimi)
    │
    ├── ⭐ /admin/reviews (Yorum Onay Paneli)
    │
    ├── 💬 /admin/tickets (Destek Talepleri Yanıtlama)
    │
    ├── 👥 /admin/users (Müşteri & Yönetici Yetki Yönetimi)
    │
    ├── ✏️ /admin/content (İçerik Yönetimi)
    │   ├── 📰 /admin/content/blog (Blog Yazıları)
    │   ├── ❓ /admin/content/faq (SSS Yönetimi)
    │   └── 📜 /admin/content/changelog (Sürüm Notları)
    │
    └── ⚙️ /admin/settings (Sistem & Eklenti Ayarları)
        ├── 🔌 Sanal POS Eklenti Yapılandırmaları
        ├── 📱 Vatan SMS & WhatsApp API Ayarları
        ├── 💬 Tawk.to Canlı Destek Yapılandırması
        └── 💱 TCMB Kur & Varsayılan Para Birimi (TRY) Ayarları
```

---

## 📌 Sayfa Grubu Özet Özellikleri

| Sayfa Grubu | Erişim Seviyesi | Öne Çıkan Ana İşlevler |
| :--- | :--- | :--- |
| **Public Site** | Herkese Açık | Ürün Kataloğu, Canlı Demo, Özel Proje Sihirbazı, Sepet, Kupon, Ödeme, Blog, FAQ |
| **Customer Portal** | Müşteri (`role: customer`) | Signed URL ile Kod İndirme, Milestone Canlı Takip, Ticket Sistemi, 2FA Ayarları |
| **Admin Portal** | Yönetici (`role: admin`) | Gelir/Analiz Grafikleri, Teklif Verme, Milestone Tanımlama, Yorum Onayı, Eklenti Ayarları |
