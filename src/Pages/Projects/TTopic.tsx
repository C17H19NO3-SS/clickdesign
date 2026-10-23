import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { ProjectCredits } from "@/Components/ProjectCredits";

// Project Assets
import TTopicHero from "@/Resources/Projects/T-Topic.svg/T-TopicHero.svg";
import TTopicMain1 from "@/Resources/Projects/T-Topic.svg/T-TopicMain1.svg";
import TTopicMain2 from "@/Resources/Projects/T-Topic.svg/T-TopicMain2.svg";
import TTopicMain3 from "@/Resources/Projects/T-Topic.svg/T-TopicMain3.svg";
import TTopicMain4 from "@/Resources/Projects/T-Topic.svg/T-TopicMain4.svg";
import TTopicMain5 from "@/Resources/Projects/T-Topic.svg/T-TopicMain5.svg";
import TTopicMain6 from "@/Resources/Projects/T-Topic.svg/T-TopicMain6.svg";
import TTopicMain7 from "@/Resources/Projects/T-Topic.svg/T-TopicMain7.svg";
import TTopicMain8 from "@/Resources/Projects/T-Topic.svg/T-TopicMain8.svg";
import TTopicMain9 from "@/Resources/Projects/T-Topic.svg/T-TopicMain9.svg";
import TTopicMain10 from "@/Resources/Projects/T-Topic.svg/T-TopicMain10.svg";
import TTopicMain11 from "@/Resources/Projects/T-Topic.svg/T-TopicMain11.svg";
import TTopicMain12 from "@/Resources/Projects/T-Topic.svg/T-TopicMain12.svg";
import TTopicMain13 from "@/Resources/Projects/T-Topic.svg/T-TopicMain13.svg";
import TTopicMain14 from "@/Resources/Projects/T-Topic.svg/T-TopicMain14.svg";
import TTopicMain15 from "@/Resources/Projects/T-Topic.svg/T-TopicMain15.svg";
import TTopicMain16 from "@/Resources/Projects/T-Topic.svg/T-TopicMain16.svg";
import TTopicMain17 from "@/Resources/Projects/T-Topic.svg/T-TopicMain17.svg";
import TTopicMain18 from "@/Resources/Projects/T-Topic.svg/T-TopicMain18.svg";
import TTopicMain19 from "@/Resources/Projects/T-Topic.svg/T-TopicMain19.svg";
import TTopicMain20 from "@/Resources/Projects/T-Topic.svg/T-TopicMain20.svg";
import TTopicMain21 from "@/Resources/Projects/T-Topic.svg/T-TopicMain21.svg";
import TTopicMain22 from "@/Resources/Projects/T-Topic.svg/T-TopicMain22.svg";
import TTopicMain23 from "@/Resources/Projects/T-Topic.svg/T-TopicMain23.svg";
import TTopicMain24 from "@/Resources/Projects/T-Topic.svg/T-TopicMain24.svg";
import TTopicMain25 from "@/Resources/Projects/T-Topic.svg/T-TopicMain25.svg";
import TTopicMain26 from "@/Resources/Projects/T-Topic.svg/T-TopicMain26.svg";
import TTopicMain27 from "@/Resources/Projects/T-Topic.svg/T-TopicMain27.svg";
import TTopicMain28 from "@/Resources/Projects/T-Topic.svg/T-TopicMain28.svg";
import TTopicMain29 from "@/Resources/Projects/T-Topic.svg/T-TopicMain29.svg";
import TTopicMain30 from "@/Resources/Projects/T-Topic.svg/T-TopicMain30.svg";
import TTopicMain31 from "@/Resources/Projects/T-Topic.svg/T-TopicMain31.svg";

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  className = "",
  wrapperClassName = "",
  onLoad,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);

  const shouldShow = isLoaded && isInView;

  return (
    <div
      ref={containerRef}
      className={`relative transition-all duration-1000 ease-out will-change-transform will-change-opacity ${shouldShow
        ? "opacity-100 translate-y-0 scale-100 filter-none"
        : "opacity-0 translate-y-8 scale-[0.97] blur-[2px]"
        } ${wrapperClassName}`}
    >
      {/* Skeleton Shimmer Placeholder */}
      <div
        className={`absolute inset-0 bg-[#F9F4F0] transition-opacity duration-700 pointer-events-none ${isLoaded ? "opacity-0" : "opacity-100 animate-pulse"
          }`}
      />
      <img
        ref={imgRef}
        {...props}
        onLoad={(e) => {
          setIsLoaded(true);
          onLoad?.(e);
        }}
        className={`w-full h-auto transition-opacity duration-500 ${className}`}
      />
    </div>
  );
};

/* Proportional canvas: children are positioned in design-pixel coordinates (w x h) and scale fluidly */
const CanvasCtx = React.createContext({ w: 1, h: 1 });

const Canvas: React.FC<{ w: number; h: number; children: React.ReactNode }> = ({ w, h, children }) => (
  <CanvasCtx.Provider value={{ w, h }}>
    <div className="relative w-full" style={{ aspectRatio: `${w} / ${h}` }}>
      {children}
    </div>
  </CanvasCtx.Provider>
);

interface TileProps {
  src: string;
  title: string;
  alt: string;
  onOpen: (src: string, title: string) => void;
  x?: number;
  y?: number;
  w?: number;
  z?: number;
  floating?: boolean;
  flow?: boolean;
}

const Tile: React.FC<TileProps> = ({ src, title, alt, onOpen, x = 0, y = 0, w = 0, z = 0, floating, flow }) => {
  const c = React.useContext(CanvasCtx);
  const style: React.CSSProperties = flow
    ? {}
    : { position: "absolute", left: `${(x / c.w) * 100}%`, top: `${(y / c.h) * 100}%`, width: `${(w / c.w) * 100}%`, zIndex: z || undefined };
  return (
    <div
      onClick={() => onOpen(src, title)}
      style={style}
      className={`cursor-zoom-in group transition-transform duration-500 ${floating ? "hover:scale-[1.02]" : "hover:scale-[1.015]"}`}
    >
      <AnimatedImage
        src={src}
        alt={alt}
        wrapperClassName={`w-full rounded-2xl md:rounded-[28px] overflow-hidden ${floating ? "shadow-2xl ring-2 sm:ring-4 ring-white" : "shadow-xs hover:shadow-md"}`}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export const TTopic = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = "Ti-Potic (T-Topic) - Bebek Patikleri & Ürün Fotoğrafçılığı | Click Design Studio";
    }

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = (src: string, title: string) => {
    setSelectedImage({ src, title });
  };

  return (
    <div className="min-h-screen bg-white text-[#2C2623] flex flex-col items-center selection:bg-[#E8A598] selection:text-white">
      {/* Top Breadcrumb & Project Info Bar */}
      <nav aria-label="Proje Detay Navigasyonu" className="w-full max-w-[1440px] px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100">
        <Link
          to="/projects"
          id="back-to-home-link"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-600 hover:text-[#D98A7B] transition-colors group"
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

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAECE8] text-[#C26B5C] uppercase tracking-wider">
            Ürün & Marka Fotoğrafçılığı
          </span>
          <span className="text-xs text-neutral-400 font-medium">
            Ti-Potic &copy; 2024
          </span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="w-full flex flex-col items-center overflow-x-hidden">
        {/* Section 1: Hero Banner */}
        <header
          id="ttopic-hero-section"
          onClick={() => openModal(TTopicHero, "Ti-Potic - Bebek Patik Koleksiyonu Hero")}
          className="w-full max-w-[1440px] flex justify-center bg-[#F3D7CE] cursor-zoom-in group shadow-xs"
        >
          <h1 className="sr-only">Ti-Potic (T-Topic) - Premium Bebek Patikleri & Çocuk Koleksiyonu</h1>
          <AnimatedImage
            id="ttopic-hero-image"
            src={TTopicHero}
            alt="Ti-Potic - Bebek patikleri illüstratif logo ve doğa sevimli hayvan figürleri"
            wrapperClassName="w-full max-w-[1440px]"
            className="w-full h-auto object-cover select-none group-hover:brightness-105 transition-all duration-300"
            fetchPriority="high"
            decoding="sync"
          />
        </header>

        {/* Gallery Container - Pixel-matched to reference layout with continuous composite masonry and intentional offsets */}
        <div className="w-full max-w-[1440px] px-3 sm:px-6 md:px-10 lg:px-12 py-4 sm:py-6 md:py-8 flex flex-col gap-4 sm:gap-6 md:gap-8">

          {/* Part A: Main1 - Main8 (coordinates measured from the reference, design width 665) */}
          <Canvas w={665} h={1456}>
            <Tile x={0} y={0} w={285} src={TTopicMain1} title="Sonbahar Yapraklı Bebek Patiği" alt="Ti-Potic Sonbahar Yaprak Desenli Siyah Patik" onOpen={openModal} />
            <Tile x={307} y={0} w={358} src={TTopicMain2} title="Unicorn & Tatlı Bulutlar Bebek Patiği" alt="Ti-Potic Unicorn ve Bulutlar Pembe Bebek Patiği" onOpen={openModal} />
            <Tile x={397} y={382} w={268} src={TTopicMain4} title="Denizci & Pusula Bebek Patiği" alt="Ti-Potic Deniz Temalı Mavi Bebek Patiği ve Dümen" onOpen={openModal} />
            <Tile x={379} y={945} w={286} src={TTopicMain8} title="Pastel Çemberler Pembe Kürsü Patik" alt="Ti-Potic Pembe Kürsü Üzerinde Pastel Desenli Patik" onOpen={openModal} />
            <Tile x={0} y={314} w={370} src={TTopicMain3} title="Doğal Pamuk Yağmur Damlası Patik" alt="Ti-Potic Elde Tutulan Su Damlalı Yeşil Bebek Patiği" onOpen={openModal} />
            <Tile x={0} y={707} w={221} src={TTopicMain5} title="Taze Kiraz Desenli Patik" alt="Ti-Potic Kiraz Desenli Beyaz Bebek Patiği" onOpen={openModal} />
            <Tile x={2} y={1124} w={330} src={TTopicMain7} title="Sevimli İnek Desenli Patik" alt="Ti-Potic İnek Figürlü Kahverengi Ahşap Zemin Bebek Patiği" onOpen={openModal} />
            <Tile x={244} y={784} w={273} z={20} src={TTopicMain6} title="Bıyık & Çam Ağacı Desenli Yeşil Patik" alt="Ti-Potic Yeşil Zemin Bıyık ve Ağaç Desenli Bebek Patiği" onOpen={openModal} />
          </Canvas>

          {/* Part B: Main9 - Main24 (design width 672) */}
          <Canvas w={672} h={3860}>
            <Tile x={0} y={0} w={212} src={TTopicMain9} title="Sarı Zemin Örgü Ayıcıklı Patik" alt="Ti-Potic Sarı Zemin Spiral Bebek Patiği" onOpen={openModal} />
            <Tile x={230} y={0} w={212} src={TTopicMain10} title="Papatya Tarlası Bebek Patiği" alt="Ti-Potic Papatya Çiçekli Mavi Zemin Patik" onOpen={openModal} />
            <Tile x={460} y={0} w={212} src={TTopicMain11} title="Altın Geometrik Spiral Patik" alt="Ti-Potic Altın Aksesuarlı Pudra Spiral Bebek Patiği" onOpen={openModal} />
            <Tile x={0} y={234} w={441} src={TTopicMain12} title="Peluş Tavşan & Balıklı Organik Bebek Patiği" alt="Ti-Potic Peluş Tavşan ve Yıldız Çıngırak Eşliğinde Balıklı Bebek Patiği" onOpen={openModal} />
            <Tile x={460} y={234} w={212} src={TTopicMain13} title="Doğal Taş & Yeşil Kelebekli Patik" alt="Ti-Potic Taş Platform Üzerinde Kelebek ve Yaprak Bebek Patiği" onOpen={openModal} />
            <Tile x={460} y={464} w={212} src={TTopicMain14} title="Tilki & Gökkuşağı Bebek Patiği" alt="Ti-Potic Ahşap Tilki ve Çıngıraklı Mint Bebek Patiği" onOpen={openModal} />
            <Tile x={0} y={714} w={316} src={TTopicMain15} title="Renkli Eğitici Bloklar & Otobüslü Patik" alt="Ti-Potic Mavi Zemin Renkli Ahşap Bloklar ve Otobüs Desenli Patik" onOpen={openModal} />
            <Tile x={356} y={714} w={316} src={TTopicMain16} title="Sarı Tulum & Ekose Bebek Patiği" alt="Ti-Potic Sarı Örgü Tulum ve Ekoseli Siyah Beyaz Patik" onOpen={openModal} />
            <Tile x={2} y={1068} w={414} src={TTopicMain17} title="Oyun Odası & Meyveli Patik" alt="Ti-Potic Renkli Halı ve Oyuncak Karpuz Eşliğinde Tropik Patik" onOpen={openModal} />
            <Tile x={369} y={1118} w={289} z={10} src={TTopicMain18} title="Yıldızlı Gece Tulumu & Mutlu Bebek" alt="Ti-Potic Yatakta Gülen Bebek ve Gece Yıldızları Patik" onOpen={openModal} />
            <Tile x={0} y={1562} w={272} src={TTopicMain19} title="Bordo Kadife & Örgü Ayıcık Patik" alt="Ti-Potic Bordo Süet/Kadife Yumuşak Bebek Patiği" onOpen={openModal} />
            <Tile x={300} y={1462} w={371} z={10} src={TTopicMain20} title="Mavi Gökyüzü & Yaprak Desenli Patik" alt="Ti-Potic Mavi Bulutlar ve Peluş Ayı ile Yaprak Bebek Patiği" onOpen={openModal} />
            <Tile x={223} y={1872} w={447} src={TTopicMain22} title="Yeni! Peek Serisi Kırmızı Petek Patik" alt="Ti-Potic Yeni Peek Serisi Kırmızı Dokulu Patik ve Puantiyeli Tulum" onOpen={openModal} />
            <Tile x={315} y={2341} w={357} src={TTopicMain24} title="Bal Arısı & Ahşap Sepet Patik" alt="Ti-Potic Bal Arısı Desenli Sarı Patik ve Bal Kavanozu" onOpen={openModal} />
            <Tile x={0} y={1912} w={292} z={10} src={TTopicMain21} title="Ahşap Zemin Sevimli Maymun Patik" alt="Ti-Potic Maymun Figürlü Bebek Patiği ve Örgü Bere" onOpen={openModal} />
            <Tile x={0} y={2547} w={294} src={TTopicMain25} title="Işıklı Bulut & Gece Patikleri" alt="Ti-Potic Işıklı Bulut Lambası ve Ay Dede Bebek Patiği" onOpen={openModal} />
            <Tile x={0} y={2917} w={227} src={TTopicMain27} title="Yeni! Peek Serisi Krem Patik & Hediye Paketi" alt="Ti-Potic Mavi Polar Zemin Hediye Paketli Krem Patik" onOpen={openModal} />
            <Tile x={256} y={2723} w={419} z={10} src={TTopicMain26} title="Yeni! Mee Potic Pamuklu Sepet Koleksiyonu" alt="Ti-Potic Yeni Mee Potic Pamuk ve Peluş Bebek Patikleri" onOpen={openModal} />
            <Tile x={0} y={3184} w={321} src={TTopicMain28} title="Mavi Polar & Şişeli Patik" alt="Ti-Potic Mavi Polar Zemin Peluş Deniz Kızı ve Gri Bebek Patiği" onOpen={openModal} />
            <Tile x={353} y={3184} w={321} src={TTopicMain29} title="Çamaşır İpi & Örgü Tulum" alt="Ti-Potic Çamaşır İpinde Asılı Beyaz Tulum ve Mint Yeşili Patik" onOpen={openModal} />
            <Tile x={0} y={3535} w={321} src={TTopicMain30} title="Gri Örgü Patik & Çizgili Elbise" alt="Ti-Potic Çizgili Elbise Bez Bebek ve Gri Süet Patik" onOpen={openModal} />
            <Tile x={353} y={3535} w={321} src={TTopicMain31} title="Yeni! Mee Potic Pembe Bukle Patik" alt="Ti-Potic Ahşap Zemin Pembe Bukle Kürk Bebek Patiği" onOpen={openModal} />
            <Tile x={0} y={2235} w={292} z={10} src={TTopicMain23} title="Canlı Sarı Süet Bebek Patiği" alt="Ti-Potic Sarı Süet Patik ve Beyaz Bebek Zıbını" onOpen={openModal} />
          </Canvas>

        </div>

        {/* Section: Project Details & Agency Footer */}
        <ProjectCredits
          title="Ti-Potic (T-Topic) Koleksiyonu"
          description="Bebek ve çocuk patikleri için hazırlanan doğal konseptli ürün fotoğrafçılığı, yaratıcı sahneleme, marka kimliği ve katalog sunumu."
        />
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50">
              <h3 className="text-sm font-semibold text-neutral-800">
                {selectedImage.title}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Kapat"
                className="w-8 h-8 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-auto max-h-[calc(90vh-70px)] flex items-center justify-center bg-[#FAFAFA]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] object-contain select-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          aria-label="Sayfanın Başına Dön"
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[#2C2623] hover:bg-[#C26B5C] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default TTopic;
