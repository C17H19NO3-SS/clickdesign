import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import {
  DesignCanvas,
  CanvasImage,
  ScrollTopButton,
  LightboxModal,
  LightboxButton,
  useDocumentTitle,
  Placed,
  zoomable,
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
import KSKStoreMain7 from "@/Resources/Projects/KSKStore.svg/KSKStoreMain7.svg";
import KSKStoreMain8 from "@/Resources/Projects/KSKStore.svg/KSKStoreMain8.svg";

// Individual Card Assets for Lightbox & Interactive Previews
import KSKStoreCardCleat from "@/Resources/Projects/KSKStore.svg/KSKStoreCardCleat.svg";
import KSKStoreCardEntrance from "@/Resources/Projects/KSKStore.svg/KSKStoreCardEntrance.svg";
import KSKStoreCardJersey from "@/Resources/Projects/KSKStore.svg/KSKStoreCardJersey.svg";
import KSKStoreCardBall from "@/Resources/Projects/KSKStore.svg/KSKStoreCardBall.svg";
import KSKFlowingRibbon from "@/Components/KSKFlowingRibbon";
import { ProjectCredits } from "@/Components/ProjectCredits";

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
      <main className="w-full flex flex-col items-center">
        <h1 className="sr-only">KSK Store - Karşıyaka Spor Kulübü Mağaza ve Marka Kimliği Tasarımı</h1>
        {/* Figma "Work-KSK Store" frame'i: 1440×6282 tasarım tuvali, ekran genişliğine oranlı */}
        <DesignCanvas height={6282} onOpen={(image) => openLightboxBySrc(image.src)} imageProps={{ skeletonClassName: "bg-[#F2F2F2]", hiddenClassName: "opacity-0 translate-y-6 scale-[0.99] blur-[1px]", threshold: 0.06, rootMargin: "0px 0px -20px 0px" }}>
          <CanvasImage src={KSKStoreMain2} x={0} y={810} w={1440} h={1078} title="KSK Store - Mağaza Dış Cephe & Işıklı 3D Tabela" alt="KSK Store siyah mağaza dış cephesi üzerinde 3D ışıklı kabartma logo ve cam vitrin görüntüsü" />
          <CanvasImage src={KSKStoreHero} x={0} y={0} w={1440} h={810} eager title="Karşıyaka Spor Kulübü - Hero & Arma Sunumu" alt="Karşıyaka Spor Kulübü 1912 yeşil kırmızı kalkan arması ve kırmızı topografik dalgalı zemin sunumu" />
          {/* Akan kırmızı şerit (Figma: -9.52° eğimli band, 0..1440 × 704..1179) */}
          <Placed
            x={0}
            y={704}
            w={1440}
            h={475}
            {...zoomable(() => openLightboxBySrc(KSKStoreMain1))}
            className="cursor-zoom-in select-none"
            title="Akan KSK Store Şeridi - Yakınlaştırmak için tıklayın"
          >
            <KSKFlowingRibbon speedSeconds={16} />
          </Placed>
          <CanvasImage src={KSKStoreMain7} x={0} y={4600} w={1440} h={784} alt="KSK Store sosyal medya görselleri: krampon, mağaza girişi, forma ve maç topu" />
          {/* Sosyal medya kartları (görsel: KSKStoreMain7); tam görünen iki kart lightbox'ta açılır */}
          <Placed x={74} y={4600} w={628} h={784} radius={40} {...zoomable(() => openLightboxBySrc(KSKStoreCardCleat))} aria-label="KSK Store - Krampon & 3D Krom Tipografi" className="cursor-zoom-in" />
          <Placed x={742} y={4600} w={628} h={784} radius={40} {...zoomable(() => openLightboxBySrc(KSKStoreCardEntrance))} aria-label="KSK Store - Mağaza Girişi & Hoş Geldiniz" className="cursor-zoom-in" />
          <CanvasImage src={KSKStoreMain4} x={65} y={2652} w={1315} h={984} radius={40} title="KSK Store - Teknik Çizim & Mimari Blueprint" alt="Mavi grid arka plan üzerinde KSK STORE logosu milimetrik teknik çizimi ve malzeme özellikleri" />
          <CanvasImage src={KSKStoreMain5} x={64} y={3697} w={1316} h={740} radius={50} title="KSK Store - Kurumsal Logo & Tipografi" alt="Siyah zemin üzerinde beyaz ve kırmızı KSK STORE ana logosu ve kulüp arması" />
          <CanvasImage src={KSKStoreMain6Red} x={118.83} y={4218.84} w={571.24} h={321.32} radius={50} title="KSK Store - Kırmızı Zemin Logo Varyasyonu" alt="Kırmızı zemin üzerinde beyaz KSK STORE logosu" />
          <CanvasImage src={KSKStoreMain6White} x={753.93} y={4218.84} w={571.24} h={321.32} radius={50} title="KSK Store - Beyaz Zemin Logo Varyasyonu" alt="Beyaz zemin üzerinde kırmızı KSK STORE logosu" />
          <CanvasImage src={KSKStoreMain3} x={0} y={1781} w={1440} h={810} title="KSK Store - Mağaza İçi Deneyim & Perakende Alanı" alt="KSK Store mağaza içi yeşil ve kırmızı duvarlar, çubuklu Karşıyaka formaları, şapkalar, atkılar ve satış bankosu" />
          <CanvasImage src={KSKStoreMain8} x={73} y={5470} w={1295} h={729} radius={40} title="KSK Store - Jakarlı Kırmızı Taraftar Atkısı" alt="Beton zemin üzerinde katlanmış kırmızı örgü KSK STORE logolu ve saçaklı jakar taraftar atkısı" />
        </DesignCanvas>

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
