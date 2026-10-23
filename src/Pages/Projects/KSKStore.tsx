import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import {
  AnimatedImage as BaseAnimatedImage,
  ScrollTopButton,
  zoomable,
  LightboxModal,
  LightboxButton,
  useDocumentTitle,
} from "@/Components/ProjectShowcase";

// Project Assets
import KSKStoreHero from "@/Resources/Projects/KSKStore.svg/KSKStoreHero.svg";
import KSKStoreMain1 from "@/Resources/Projects/KSKStore.svg/KSKStoreMain1.svg";
import KSKStoreMain2 from "@/Resources/Projects/KSKStore.svg/KSKStoreMain2.svg";
import KSKStoreMain3 from "@/Resources/Projects/KSKStore.svg/KSKStoreMain3.svg";
import KSKStoreMain4 from "@/Resources/Projects/KSKStore.svg/KSKStoreMain4.svg";
import KSKStoreMain5 from "@/Resources/Projects/KSKStore.svg/KSKStoreMain5.svg";
import KSKStoreMain6Red from "@/Resources/Projects/KSKStore.svg/KSKStoreMain6Red.svg";
import KSKStoreMain6White from "@/Resources/Projects/KSKStore.svg/KSKStoreMain6White.svg";
import KSKStoreMain8 from "@/Resources/Projects/KSKStore.svg/KSKStoreMain8.svg";

// Individual Card Assets for Lightbox & Interactive Previews
import KSKStoreCardCleat from "@/Resources/Projects/KSKStore.svg/KSKStoreCardCleat.svg";
import KSKStoreCardEntrance from "@/Resources/Projects/KSKStore.svg/KSKStoreCardEntrance.svg";
import KSKStoreCardJersey from "@/Resources/Projects/KSKStore.svg/KSKStoreCardJersey.svg";
import KSKStoreCardBall from "@/Resources/Projects/KSKStore.svg/KSKStoreCardBall.svg";
import KSKFlowingRibbon from "@/Components/KSKFlowingRibbon";
import { ProjectCredits } from "@/Components/ProjectCredits";

// Bu sayfanın görsel animasyon ayarları
const AnimatedImage: React.FC<React.ComponentProps<typeof BaseAnimatedImage>> = (props) => (
  <BaseAnimatedImage skeletonClassName="bg-[#F2F2F2]" hiddenClassName="opacity-0 translate-y-6 scale-[0.99] blur-[1px]" threshold={0.06} rootMargin="0px 0px -20px 0px" {...props} />
);

interface GalleryItem {
  src: string;
  title: string;
  description: string;
  category: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: KSKStoreHero,
    title: "Karşıyaka Spor Kulübü - Hero & Arma Sunumu",
    description: "1912'den günümüze uzanan asırlık K.S.K. arması, kırmızı topografik dalga çizgileri ve derin siyah zemin atmosferi.",
    category: "Hero Banner",
  },
  {
    src: KSKStoreMain1,
    title: "KSK Store - Tipografik Şerit & Marka Sloganı",
    description: "Social Media, Logo ve Branding kavramlarını birleştiren kırmızı açılı dinamik bant tasarımı.",
    category: "Branding Ribbon",
  },
  {
    src: KSKStoreMain2,
    title: "KSK Store - Mağaza Dış Cephe & Işıklı 3D Tabela",
    description: "Mat siyah dış cephe üzerine uygulanan kırmızı/beyaz 3D ışıklı kabartma KSK STORE tabelası ve cam vitrin girişi.",
    category: "3D Mimari Cephe",
  },
  {
    src: KSKStoreMain3,
    title: "KSK Store - Mağaza İçi Deneyim & Perakende Alanı",
    description: "Yeşil ve kırmızı duvar konsepti, çubuklu formalar, atkı reyonları, lisanslı ürün stantları ve kasa karşılama bankosu.",
    category: "Mağaza İçi Tasarım",
  },
  {
    src: KSKStoreMain4,
    title: "KSK Store - Teknik Çizim & Mimari Blueprint",
    description: "Lazer kesim kabartma alüminyum tabela teknik detayları, 1:5 ölçeklendirme, milimetrik kılavuz ve montaj paftası.",
    category: "Teknik Pafta",
  },
  {
    src: KSKStoreMain5,
    title: "KSK Store - Kurumsal Logo & Tipografi",
    description: "Kırmızı ve yeşil renk dengesi, beyaz konturlar ve kulüp armasıyla bütünleşen güçlü slab-serif kurumsal logo.",
    category: "Kurumsal Kimlik",
  },
  {
    src: KSKStoreMain6Red,
    title: "KSK Store - Kırmızı Zemin Logo Varyasyonu",
    description: "Kulübün tutkulu kırmızı rengi üzerinde beyaz tipografi ve amblem uygulaması.",
    category: "Logo Varyasyonu",
  },
  {
    src: KSKStoreMain6White,
    title: "KSK Store - Beyaz Zemin Logo Varyasyonu",
    description: "Açık renk arka planlar ve resmi evraklar için kırmızı/yeşil logo uygulaması.",
    category: "Logo Varyasyonu",
  },
  {
    src: KSKStoreCardCleat,
    title: "KSK Store - Krampon & 3D Krom Tipografi",
    description: "Kırmızı Nike krampon, 3D sıvı krom KSK STORE tipografisi ve topografik kontur çizgileri.",
    category: "Ürün Görselleştirme",
  },
  {
    src: KSKStoreCardEntrance,
    title: "KSK Store - Mağaza Girişi & Hoş Geldiniz",
    description: "Işıklı tabela, cam kapı üzerinde '#kskstore' ve 'HOŞ GELDİNİZ' karşılaması.",
    category: "Perakende Tasarımı",
  },
  {
    src: KSKStoreCardJersey,
    title: "KSK Store - Efsane Çubuklu Forma",
    description: "Karşıyaka'nın simgesi yeşil-kırmızı çubuklu maç forması ve 3D krom logo sunumu.",
    category: "Lisanslı Forma",
  },
  {
    src: KSKStoreCardBall,
    title: "KSK Store - Resmi Maç Topu Koleksiyonu",
    description: "Nike Flight desenli resmi maç topu ve 3D krom tipografik sahne.",
    category: "Lisanslı Ürün",
  },
  {
    src: KSKStoreMain8,
    title: "KSK Store - Jakarlı Kırmızı Taraftar Atkısı",
    description: "Yumuşak dokulu kırmızı akrilik örgü, beyaz saçaklar ve jakar dokuma KSK STORE amblemiyle stüdyo ürün çekimi.",
    category: "Taraftar Atkısı",
  },
];

export const KSKStore: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  useDocumentTitle("KSK Store - Karşıyaka Spor Kulübü Mağaza & Marka Kimliği | Click Design Studio");

  const closeLightbox = useCallback(() => setSelectedItemIndex(null), []);
  const showPrev = useCallback(
    () => setSelectedItemIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null)),
    []
  );
  const showNext = useCallback(
    () => setSelectedItemIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null)),
    []
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    // Galeride ok tuşlarıyla gezinme (Escape, LightboxModal içinde)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPrev, showNext]);

  const openLightboxBySrc = (src: string) => {
    const idx = GALLERY_ITEMS.findIndex((item) => item.src === src);
    if (idx !== -1) {
      setSelectedItemIndex(idx);
    } else {
      setSelectedItemIndex(0);
    }
  };


  const currentModalItem = selectedItemIndex !== null ? GALLERY_ITEMS[selectedItemIndex] : null;

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] flex flex-col items-center selection:bg-[#E11D2A] selection:text-white">
      {/* Top Breadcrumb & Project Meta Bar */}
      <nav
        aria-label="Proje Detay Navigasyonu"
        className="w-full max-w-[1440px] px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100 bg-white"
      >
        <Link
          to="/projects"
          id="back-to-home-link"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-600 hover:text-[#E11D2A] transition-colors group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Tüm Projeler
        </Link>

        <div className="flex items-center flex-wrap gap-2.5">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F0FDF4] text-[#15803D] border border-[#DCFCE7] uppercase tracking-wider">
            Karşıyaka Spor Kulübü
          </span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FDF2F2] text-[#E11D2A] border border-[#FCDADA] uppercase tracking-wider">
            Lisanslı Mağazacılık
          </span>
          <span className="text-xs text-neutral-400 font-medium ml-1">
            KSK Store &copy; 2024
          </span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="w-full flex flex-col items-center overflow-x-hidden bg-[#FDFDFD]">
        {/* Dark Showcase Top Block: Hero -> Flowing Ribbon Seam -> Facade -> Interior */}
        <div className="w-full flex flex-col items-center relative z-0">
          {/* Section 1: Hero Banner (Crest with glowing aura & red topographic waves) */}
          <header
            id="kskstore-hero-section"
            {...zoomable(() => openLightboxBySrc(KSKStoreHero))}
            className="w-full max-w-[1440px] flex justify-center cursor-zoom-in group relative z-0"
          >
            <h1 className="sr-only">KSK Store - Karşıyaka Spor Kulübü Mağaza ve Marka Kimliği Tasarımı</h1>
            <AnimatedImage
              id="kskstore-hero-image"
              src={KSKStoreHero}
              alt="Karşıyaka Spor Kulübü 1912 yeşil kırmızı kalkan arması ve kırmızı topografik dalgalı zemin sunumu"
              wrapperClassName="w-full max-w-[1440px]"
              className="w-full h-auto object-cover select-none group-hover:brightness-105 transition-all duration-300 block"
              fetchPriority="high"
              decoding="sync"
              skeletonClassName="bg-black"
            />
          </header>

          {/* Section 2: Flowing Angled Red Ribbon Marquee (Positioned right at the seam between Hero and Facade) */}
          <section
            id="kskstore-ribbon-section"
            aria-label="KSK Store Tipografik Akan Şerit"
            className="w-full max-w-[1440px] relative z-20 h-0 flex justify-center pointer-events-none"
          >
            <div
              {...zoomable(() => openLightboxBySrc(KSKStoreMain1))}
              className="w-full absolute top-0 -translate-y-[50%] max-w-[1440px] cursor-zoom-in group pointer-events-auto select-none"
              title="Akan KSK Store Şeridi - Yakınlaştırmak için tıklayın"
            >
              <KSKFlowingRibbon speedSeconds={16} />
            </div>
          </section>

          {/* Section 3: Storefront Exterior (3D illuminated logo on dark facade) */}
          <section
            id="kskstore-facade-section"
            aria-label="KSK Store Dış Cephe ve Işıklı Tabela"
            {...zoomable(() => openLightboxBySrc(KSKStoreMain2))}
            className="w-full max-w-[1440px] relative z-10 flex justify-center cursor-zoom-in group"
          >
            <AnimatedImage
              id="kskstore-facade-image"
              src={KSKStoreMain2}
              alt="KSK Store siyah mağaza dış cephesi üzerinde 3D ışıklı kabartma logo ve cam vitrin görüntüsü"
              wrapperClassName="w-full max-w-[1440px]"
              className="w-full h-auto object-cover select-none group-hover:brightness-105 transition-all duration-300 block"
              loading="eager"
              decoding="async"
              skeletonClassName="bg-black"
            />
          </section>

          {/* Section 4: Store Interior Experience (Mannequins, jerseys, shelving, counter) */}
          <section
            id="kskstore-interior-section"
            aria-label="KSK Store Mağaza İçi Perakende Deneyimi"
            {...zoomable(() => openLightboxBySrc(KSKStoreMain3))}
            className="w-full max-w-[1440px] flex justify-center cursor-zoom-in group relative z-0"
          >
            <AnimatedImage
              id="kskstore-interior-image"
              src={KSKStoreMain3}
              alt="KSK Store mağaza içi yeşil ve kırmızı duvarlar, çubuklu Karşıyaka formaları, şapkalar, atkılar ve satış bankosu"
              wrapperClassName="w-full max-w-[1440px]"
              className="w-full h-auto object-cover select-none group-hover:brightness-105 transition-all duration-300 block"
              loading="lazy"
              decoding="async"
              skeletonClassName="bg-black"
            />
          </section>
        </div>

        {/* Section 5: Architectural Blueprint / CAD Drawing Card */}
        <section
          id="kskstore-blueprint-section"
          aria-label="KSK Store Teknik Mimari Çizim ve Pafta"
          {...zoomable(() => openLightboxBySrc(KSKStoreMain4))}
          className="w-full max-w-[1316px] px-4 sm:px-8 my-8 sm:my-14 md:my-18 flex justify-center cursor-zoom-in group"
        >
          <div className="w-full rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-[#0F223D]">
            <AnimatedImage
              id="kskstore-blueprint-image"
              src={KSKStoreMain4}
              alt="Mavi grid arka plan üzerinde KSK STORE logosu milimetrik teknik çizimi ve malzeme özellikleri"
              wrapperClassName="w-full"
              className="w-full h-auto object-contain select-none group-hover:scale-[1.01] transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 6: Brand Identity Matrix / Logo Variations Card */}
        <section
          id="kskstore-logo-matrix-section"
          aria-label="KSK Store Marka Kimliği ve Logo Varyasyonları"
          className="w-full max-w-[1316px] px-4 sm:px-8 my-8 sm:my-14 md:my-18 flex justify-center"
        >
          {/* Outer Black Container with rounded corners */}
          <div className="w-full bg-[#181818] rounded-[36px] sm:rounded-[46px] md:rounded-[50px] p-6 sm:p-10 md:p-14 relative shadow-xl border border-neutral-800 flex flex-col items-center mb-30">
            {/* Upper Logo: KSKStoreMain5 */}
            <div
              id="kskstore-main-logo-card"
              {...zoomable(() => openLightboxBySrc(KSKStoreMain5))}
              className="w-full max-w-[1000px] cursor-zoom-in group py-2 sm:py-6"
              title="Ana Logoyu Büyüt"
            >
              <AnimatedImage
                id="kskstore-main5-image"
                src={KSKStoreMain5}
                alt="Siyah zemin üzerinde beyaz ve kırmızı KSK STORE ana logosu ve kulüp arması"
                wrapperClassName="w-full"
                className="w-full h-auto object-contain select-none group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Bottom Subcards: Red Card (left) & White Card (right) - both symmetrically hanging down past the container edge */}
            <div className="w-full max-w-[1100px] grid grid-cols-2 gap-3 sm:gap-6 md:gap-10 items-end mt-4 sm:mt-6 md:mt-8 absolute -bottom-50">
              {/* Left Card: Red Background Logo (Protrudes past the bottom container edge) */}
              <div
                id="kskstore-red-logo-tile"
                {...zoomable(() => openLightboxBySrc(KSKStoreMain6Red))}
                className="w-full rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 translate-y-6 sm:translate-y-10 md:translate-y-14 hover:translate-y-4 md:hover:translate-y-8 cursor-zoom-in relative z-10 border border-white/10 group"
                title="Kırmızı Logo Kartını Büyüt"
              >
                <AnimatedImage
                  id="kskstore-red-card-image"
                  src={KSKStoreMain6Red}
                  alt="Kırmızı zemin üzerinde beyaz KSK STORE logosu"
                  wrapperClassName="w-full bg-[#F21414]"
                  className="w-full h-auto object-contain select-none group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Right Card: White Background Logo (Also protrudes past the bottom container edge symmetrically) */}
              <div
                id="kskstore-white-logo-tile"
                {...zoomable(() => openLightboxBySrc(KSKStoreMain6White))}
                className="w-full rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 translate-y-6 sm:translate-y-10 md:translate-y-14 hover:translate-y-4 md:hover:translate-y-8 cursor-zoom-in relative z-10 border border-neutral-200/50 group"
                title="Beyaz Logo Kartını Büyüt"
              >
                <AnimatedImage
                  id="kskstore-white-card-image"
                  src={KSKStoreMain6White}
                  alt="Beyaz zemin üzerinde kırmızı KSK STORE logosu"
                  wrapperClassName="w-full bg-white"
                  className="w-full h-auto object-contain select-none group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Dual Grid Showcase Cards (Cleat with chrome type & Storefront entrance) */}
        <section
          id="kskstore-cards-showcase-section"
          aria-label="KSK Store Ürün ve Giriş Vitrini"
          className="w-full max-w-[1360px] px-4 sm:px-8 mt-16 sm:mt-24 md:mt-32 relative z-0 flex flex-col items-center"
        >
          {/* Dual Cards: Left (Cleat) & Right (Store Entrance) */}
          <div className="w-full grid grid-cols-2 gap-3 sm:gap-6 md:gap-10 items-center justify-center">
            {/* Left Card: KSK Krampon */}
            <div
              id="kskstore-cleat-card"
              {...zoomable(() => openLightboxBySrc(KSKStoreCardCleat))}
              className="w-full rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-zoom-in group"
              title="Krampon Vitrinini Büyüt"
            >
              <AnimatedImage
                id="kskstore-cleat-image"
                src={KSKStoreCardCleat}
                alt="KSK Store kırmızı kramponu, 3D krom tipografi ve topografik kontur çizgileri"
                wrapperClassName="w-full"
                className="w-full h-auto object-contain select-none group-hover:scale-[1.015] transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right Card: Mağaza Girişi */}
            <div
              id="kskstore-entrance-card"
              {...zoomable(() => openLightboxBySrc(KSKStoreCardEntrance))}
              className="w-full rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-zoom-in group"
              title="Mağaza Girişini Büyüt"
            >
              <AnimatedImage
                id="kskstore-entrance-image"
                src={KSKStoreCardEntrance}
                alt="KSK Store mağaza cam girişi, ışıklı tabela ve hoş geldiniz karşılama alanı"
                wrapperClassName="w-full"
                className="w-full h-auto object-contain select-none group-hover:scale-[1.015] transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Section 8: Knitted Fan Scarf Showcase */}
        <section
          id="kskstore-scarf-section"
          aria-label="KSK Store Jakarlı Taraftar Atkısı"
          {...zoomable(() => openLightboxBySrc(KSKStoreMain8))}
          className="w-full max-w-[1295px] px-4 sm:px-8 my-10 sm:my-16 md:my-22 flex justify-center cursor-zoom-in group"
        >
          <div className="w-full rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white border border-neutral-100">
            <AnimatedImage
              id="kskstore-scarf-image"
              src={KSKStoreMain8}
              alt="Beton zemin üzerinde katlanmış kırmızı örgü KSK STORE logolu ve saçaklı jakar taraftar atkısı"
              wrapperClassName="w-full"
              className="w-full h-auto object-contain select-none group-hover:scale-[1.01] transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 9: Project Details & Agency Footer */}
        <ProjectCredits
          title="KSK Store"
          badge="1912 • Kaf-Kaf"
          description="1912 yılında kurulan Karşıyaka Spor Kulübü'nün asırlık yeşil-kırmızı mirası; modern tipografi, 3D cephe ve iç mekan mimari modellemesi, lisanslı ürün koleksiyonları (çubuklu forma, özel seri krampon, jakarlı atkı, maç topu) ve kurumsal kimlik standartları ile çağdaş bir spor mağazacılığı vizyonuna dönüştürüldü."
          tags={[
            "Spor Kulübü Marka Kimliği",
            "3D Mimari Görselleştirme",
            "Mağaza İçi Deneyim Tasarımı",
            "Lisanslı Ürün Koleksiyonu",
            "Teknik Pafta & Blueprint",
          ]}
        />
      </main>

      {/* Lightbox Modal */}
      {currentModalItem && (
        <LightboxModal label={currentModalItem.title} onClose={closeLightbox} overlayClassName="z-50">
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50">
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E11D2A]">
                {currentModalItem.category} &bull; {selectedItemIndex! + 1} / {GALLERY_ITEMS.length}
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-neutral-800">
                {currentModalItem.title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <LightboxButton onClick={showPrev} aria-label="Önceki Görsel" title="Önceki (Sol Ok)">
                &larr;
              </LightboxButton>
              <LightboxButton onClick={showNext} aria-label="Sonraki Görsel" title="Sonraki (Sağ Ok)">
                &rarr;
              </LightboxButton>
              <LightboxButton onClick={closeLightbox} aria-label="Kapat" title="Kapat (ESC)" className="ml-1">
                &times;
              </LightboxButton>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-6 overflow-auto max-h-[calc(90vh-120px)] flex items-center justify-center bg-[#FAFAFA]">
            <img
              src={currentModalItem.src}
              alt={currentModalItem.title}
              className="max-w-full max-h-[70vh] object-contain select-none rounded-lg"
            />
          </div>

          {/* Modal Footer Description */}
          <div className="px-6 py-3 border-t border-neutral-100 bg-neutral-50 flex items-center justify-between text-xs text-neutral-500">
            <p className="line-clamp-2 pr-4">{currentModalItem.description}</p>
            <span className="shrink-0 text-neutral-400 hidden sm:inline">Klavye: &larr; &rarr; Ok tuşları &bull; ESC</span>
          </div>
        </LightboxModal>
      )}

      {/* Floating Scroll to Top Button */}
      <ScrollTopButton colorClassName="bg-[#E11D2A] hover:bg-[#C01520]" />
    </div>
  );
};

export default KSKStore;
