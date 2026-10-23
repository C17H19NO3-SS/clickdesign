import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { ProjectCredits } from "@/Components/ProjectCredits";

// Project Assets
import ParcadoluHero from "@/Resources/Projects/Parcadolu.svg/ParcadoluHero.svg";
import ParcadoluMain1 from "@/Resources/Projects/Parcadolu.svg/ParcadoluMain1.svg";
import ParcadoluMain2 from "@/Resources/Projects/Parcadolu.svg/ParcadoluMain2.svg";
import ParcadoluMain3 from "@/Resources/Projects/Parcadolu.svg/ParcadoluMain3.svg";
import ParcadoluMain4 from "@/Resources/Projects/Parcadolu.svg/ParcadoluMain4.svg";
import ParcadoluMain5 from "@/Resources/Projects/Parcadolu.svg/ParcadoluMain5.svg";
import ParcadoluMain6 from "@/Resources/Projects/Parcadolu.svg/ParcadoluMain6.svg";
import ParcadoluMain7 from "@/Resources/Projects/Parcadolu.svg/ParcadoluMain7.svg";
import ParcadoluMain8 from "@/Resources/Projects/Parcadolu.svg/ParcadoluMain8.svg";
import ParcadoluMain9 from "@/Resources/Projects/Parcadolu.svg/ParcadoluMain9.svg";

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
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);

  const shouldShow = isLoaded && isInView;

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${wrapperClassName}`}>
      <img
        ref={imgRef}
        onLoad={(e) => {
          setIsLoaded(true);
          if (onLoad) onLoad(e);
        }}
        className={`transition-all duration-700 ease-out will-change-transform ${shouldShow ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.98] translate-y-3"
          } ${className}`}
        {...props}
      />
    </div>
  );
};

export const Parcadolu: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] flex flex-col items-center selection:bg-[#F26522] selection:text-white">
      {/* Top Breadcrumb & Project Info Bar */}
      <nav
        aria-label="Proje Detay Navigasyonu"
        className="w-full max-w-[1440px] px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100"
      >
        <Link
          to="/projects"
          id="back-to-home-link"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-600 hover:text-[#F26522] transition-colors group"
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
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FFF0E6] text-[#F26522] uppercase tracking-wider">
            E-Ticaret &amp; Marka Tasarımı
          </span>
          <span className="text-xs text-neutral-400 font-medium">
            Parçadolu &copy; 2024
          </span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="w-full flex flex-col items-center overflow-x-hidden">
        {/* Section 1: Hero Banner (Red-Orange Gradient with 3D Balloon Gold 'pd' Logo) */}
        <header
          id="parcadolu-hero-section"
          onClick={() =>
            setSelectedImage({
              src: ParcadoluHero,
              title: "Parçadolu - 3D Logo & Hero Tasarımı",
            })
          }
          className="w-full max-w-[1440px] flex justify-center bg-[#FC0701] cursor-zoom-in group shadow-xs"
        >
          <h1 className="sr-only">Parçadolu - E-Ticaret ve Yedek Parça Marka Kimliği</h1>
          <AnimatedImage
            id="parcadolu-hero-image"
            src={ParcadoluHero}
            alt="Parçadolu kırmızı-turuncu degrade zemin üzerinde metalik altın 3D balon pd logosu"
            wrapperClassName="w-full max-w-[1440px]"
            className="w-full h-auto object-cover select-none group-hover:brightness-105 transition-all duration-300"
            fetchPriority="high"
            decoding="sync"
          />
        </header>

        {/* Section 2: Laptop Mockup on Tire Banner */}
        <section
          id="parcadolu-laptop-tire-section"
          aria-label="Parçadolu Masaüstü Web Arayüzü - Lastik Üzerinde Laptop"
          onClick={() =>
            setSelectedImage({
              src: ParcadoluMain1,
              title: "Parçadolu - Masaüstü Web Arayüzü & Laptop Mockup",
            })
          }
          className="w-full max-w-[1440px] flex justify-center bg-[#C2BDBD] cursor-zoom-in group"
        >
          <AnimatedImage
            id="parcadolu-main1-image"
            src={ParcadoluMain1}
            alt="Parçadolu e-ticaret web sitesi arayüzü lastik üzerinde laptop mockup sunumu"
            wrapperClassName="w-full max-w-[1440px]"
            className="w-full h-auto object-cover select-none group-hover:scale-[1.01] transition-transform duration-500"
            loading="eager"
            decoding="async"
          />
        </section>

        {/* Section 3: Dual Rounded Cards (Mobile Phone on Rock + 2x2 Auto Parts Icon Card) */}
        <section
          id="parcadolu-mobile-icons-section"
          aria-label="Mobil Uygulama ve İkonografi"
          className="w-full max-w-[1440px] bg-[#EFEFEF] py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 flex justify-center"
        >
          <div className="w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-stretch">
            {/* Left Card: Phone Mockup on Rock */}
            <div
              id="parcadolu-phone-card"
              onClick={() =>
                setSelectedImage({
                  src: ParcadoluMain2,
                  title: "Parçadolu - Mobil Uygulama Arayüzü",
                })
              }
              className="w-full aspect-square bg-[#0E0B07] rounded-3xl sm:rounded-4xl md:rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-zoom-in flex items-center justify-center p-0"
            >
              <AnimatedImage
                id="parcadolu-main2-image"
                src={ParcadoluMain2}
                alt="Parçadolu mobil uygulama tasarımı kaya üzerinde telefon mockup"
                wrapperClassName="w-full h-full flex items-center justify-center"
                className="w-full h-full object-cover select-none"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right Card: 2x2 Auto Parts Line Icons */}
            <div
              id="parcadolu-icons-card"
              className="w-full aspect-square bg-[#F7F7F7] rounded-3xl sm:rounded-4xl md:rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-8 sm:p-12 md:p-16 flex items-center justify-center"
            >
              <div className="w-full h-full max-w-[420px] max-h-[420px] grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 place-items-center">
                {/* Icon 1: Amortisör / Shock Absorber */}
                <div
                  onClick={() =>
                    setSelectedImage({
                      src: ParcadoluMain3,
                      title: "Parçadolu İkonografi - Amortisör",
                    })
                  }
                  className="w-full h-full flex items-center justify-center p-2 sm:p-4 hover:scale-110 transition-transform duration-300 cursor-zoom-in"
                >
                  <img
                    src={ParcadoluMain3}
                    alt="Amortisör oto parça ikonu"
                    className="w-full h-full max-w-[140px] max-h-[140px] object-contain select-none"
                    loading="lazy"
                  />
                </div>

                {/* Icon 2: Fren Diski / Brake Disc */}
                <div
                  onClick={() =>
                    setSelectedImage({
                      src: ParcadoluMain4,
                      title: "Parçadolu İkonografi - Fren Diski ve Balata",
                    })
                  }
                  className="w-full h-full flex items-center justify-center p-2 sm:p-4 hover:scale-110 transition-transform duration-300 cursor-zoom-in"
                >
                  <img
                    src={ParcadoluMain4}
                    alt="Fren diski ve balatası oto parça ikonu"
                    className="w-full h-full max-w-[140px] max-h-[140px] object-contain select-none"
                    loading="lazy"
                  />
                </div>

                {/* Icon 3: Filtre & Buji / Filter & Spark Plug */}
                <div
                  onClick={() =>
                    setSelectedImage({
                      src: ParcadoluMain5,
                      title: "Parçadolu İkonografi - Filtre ve Buji",
                    })
                  }
                  className="w-full h-full flex items-center justify-center p-2 sm:p-4 hover:scale-110 transition-transform duration-300 cursor-zoom-in"
                >
                  <img
                    src={ParcadoluMain5}
                    alt="Filtre, buji ve civata oto parça ikonu"
                    className="w-full h-full max-w-[140px] max-h-[140px] object-contain select-none"
                    loading="lazy"
                  />
                </div>

                {/* Icon 4: Pistonlar / Pistons */}
                <div
                  onClick={() =>
                    setSelectedImage({
                      src: ParcadoluMain6,
                      title: "Parçadolu İkonografi - Motor Pistonları",
                    })
                  }
                  className="w-full h-full flex items-center justify-center p-2 sm:p-4 hover:scale-110 transition-transform duration-300 cursor-zoom-in"
                >
                  <img
                    src={ParcadoluMain6}
                    alt="Motor pistonları oto parça ikonu"
                    className="w-full h-full max-w-[140px] max-h-[140px] object-contain select-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Angled Laptop on Black Podium with 'Premium AUTO PARTS' */}
        <section
          id="parcadolu-laptop-podium-section"
          aria-label="Premium Auto Parts - Siyah Podyum Laptop Mockup"
          onClick={() =>
            setSelectedImage({
              src: ParcadoluMain7,
              title: "Parçadolu - Premium Auto Parts Sunumu",
            })
          }
          className="w-full max-w-[1440px] flex justify-center bg-[#070502] cursor-zoom-in group"
        >
          <AnimatedImage
            id="parcadolu-main7-image"
            src={ParcadoluMain7}
            alt="Parçadolu Premium AUTO PARTS siyah podyum üzerinde açılı laptop web sitesi mockup"
            wrapperClassName="w-full max-w-[1440px]"
            className="w-full h-auto object-cover select-none group-hover:scale-[1.01] transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
        </section>

        {/* Section 5: Auto Parts Composite Grid & Social Links */}
        <section
          id="parcadolu-autoparts-grid-section"
          aria-label="Oto Yedek Parça Görselleri ve Sosyal Medya Kompozisyonu"
          onClick={() =>
            setSelectedImage({
              src: ParcadoluMain8,
              title: "Parçadolu - Oto Yedek Parça Ürün Kartları Kompozisyonu",
            })
          }
          className="w-full max-w-[1440px] -mt-8 sm:-mt-14 md:-mt-20 relative z-10 mb-16 sm:mb-20 flex justify-center cursor-zoom-in group"
        >
          <div className="w-full max-w-[1240px] px-4 sm:px-8 md:px-12 flex justify-center">
            <AnimatedImage
              id="parcadolu-main8-image"
              src={ParcadoluMain8}
              alt="Parçadolu buji, yağ tenekesi, filtreler, Black Friday fren balataları ve ampul ürün kartları"
              wrapperClassName="w-full max-w-[1240px] flex justify-center"
              className="w-full h-auto object-contain select-none group-hover:scale-[1.01] transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 6: Large Rounded Card with Illuminated Neon 'pd' Wall Sign */}
        <section
          id="parcadolu-neon-sign-section"
          aria-label="Parçadolu Işıklı Neon Tabela"
          className="w-full max-w-[1440px] bg-white pb-16 sm:pb-24 px-4 sm:px-8 md:px-12 flex justify-center"
        >
          <div
            id="parcadolu-neon-card"
            onClick={() =>
              setSelectedImage({
                src: ParcadoluMain9,
                title: "Parçadolu - Işıklı Neon Duvar Tabelası",
              })
            }
            className="w-full max-w-[1240px] rounded-3xl sm:rounded-4xl md:rounded-[44px] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1.5 cursor-zoom-in bg-[#0D0304]"
          >
            <AnimatedImage
              id="parcadolu-main9-image"
              src={ParcadoluMain9}
              alt="Parçadolu kırmızı ve gece mavisi duvara monte sarı neon ışıklı pd amblemi tabela sunumu"
              wrapperClassName="w-full flex justify-center"
              className="w-full h-auto object-cover select-none group-hover:scale-[1.01] transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 7: Project Details & Agency Footer */}
        <ProjectCredits
          title="Parçadolu"
          description="Otomotiv yedek parça sektörü için geliştirilen modern e-ticaret web platformu, mobil uygulama arayüzü (UI/UX), 3D ikonografi, ürün fotoğrafçılığı ve kurumsal marka kimliği tasarımı."
          className="mt-6"
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
              <h3 className="text-sm font-semibold text-neutral-800">{selectedImage.title}</h3>
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
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[#F26522] hover:bg-[#D95314] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Parcadolu;
