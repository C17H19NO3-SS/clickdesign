import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { ProjectCredits } from "@/Components/ProjectCredits";

// Project Assets
import HypeHero from "@/Resources/Projects/Hype.svg/HypeHero.svg";
import HypeMain1 from "@/Resources/Projects/Hype.svg/HypeMain1.svg";
import HypeMain2 from "@/Resources/Projects/Hype.svg/HypeMain2.svg";
import HypeMain3 from "@/Resources/Projects/Hype.svg/HypeMain3.svg";
import HypeFooter from "@/Resources/Projects/Hype.svg/HypeFooter.svg";

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

    // Ekranda belirdikçe (scroll edildikçe) tetiklenmesi için IntersectionObserver
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
      className={`relative overflow-hidden transition-all duration-1000 ease-out will-change-transform will-change-opacity ${shouldShow
        ? "opacity-100 translate-y-0 scale-100 filter-none"
        : "opacity-0 translate-y-8 scale-[0.97] blur-[2px]"
        } ${wrapperClassName}`}
    >
      {/* Skeleton Shimmer Placeholder */}
      <div
        className={`absolute inset-0 bg-neutral-100 transition-opacity duration-700 pointer-events-none ${isLoaded ? "opacity-0" : "opacity-100 animate-pulse"
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

export const Hype = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    // Set Page Title
    if (typeof document !== "undefined") {
      document.title = "Hype VPN - Mobil Uygulama & UI/UX Tasarımı | Click Design Studio";
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

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] flex flex-col items-center selection:bg-[#1F5BFF] selection:text-white">
      {/* Top Breadcrumb & Project Info Bar */}
      <nav aria-label="Proje Detay Navigasyonu" className="w-full max-w-[1440px] px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100">
        <Link
          to="/projects"
          id="back-to-home-link"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-600 hover:text-[#1F5BFF] transition-colors group"
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
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EBF1FF] text-[#1F5BFF] uppercase tracking-wider">
            Mobil UI / UX
          </span>
          <span className="text-xs text-neutral-400 font-medium">
            Hype VPN &copy; 2024
          </span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="w-full flex flex-col items-center overflow-x-hidden">
        {/* Section 1: Hero Banner (Night City Skyline + 3 Ninjas) */}
        <header
          id="hype-hero-section"
          onClick={() => setSelectedImage({ src: HypeHero, title: "Hype VPN - Şehir İllüstrasyonu & Ninja Karakterleri" })}
          className="w-full max-w-[1440px] flex justify-center bg-[#09153D] cursor-zoom-in group"
        >
          <h1 className="sr-only">Hype VPN - Yeni Nesil Hızlı ve Güvenli Mobil VPN Uygulaması Tasarımı</h1>
          <AnimatedImage
            id="hype-hero-image"
            src={HypeHero}
            alt="Hype VPN - Gece şehir silüeti ve mavi ninja karakterleri illüstrasyonu"
            wrapperClassName="w-full max-w-[1440px]"
            className="w-full h-auto object-cover select-none group-hover:brightness-105 transition-all duration-300"
            fetchPriority="high"
            decoding="sync"
          />
        </header>

        {/* Section 2: Logotype Banner (Large 'hype' letters on electric blue) */}
        <section
          id="hype-logotype-section"
          aria-label="Hype Marka Logosu"
          className="w-full max-w-[1440px] flex justify-center -mt-px bg-[#1F5BFF]"
        >
          <AnimatedImage
            id="hype-logotype-image"
            src={HypeMain1}
            alt="Hype VPN - Elektrik mavisi zemin üzerinde büyük beyaz Hype marka logosu"
            wrapperClassName="w-full max-w-[1440px]"
            className="w-full h-auto object-cover select-none"
            loading="eager"
            decoding="async"
          />
        </section>

        {/* Section 3: 3D App Mockup & Hand holding iPhone */}
        <section
          id="hype-mockup-section"
          aria-label="Hype VPN Mobil Mockup Gösterimi"
          className="w-full max-w-[1440px] flex justify-center relative -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 xl:-mt-44 z-20 px-4"
        >
          <div
            id="phone-hand-mockup"
            onClick={() => setSelectedImage({ src: HypeMain2, title: "Hype VPN - Akıllı Telefon ve 3D Uygulama İkonları" })}
            className="w-full max-w-[760px] sm:max-w-[800px] md:max-w-[806px] flex justify-center cursor-zoom-in group transition-transform duration-500 hover:scale-[1.02]"
          >
            <AnimatedImage
              id="hype-hand-phone-image"
              src={HypeMain2}
              alt="Hype VPN - Elde tutulan akıllı telefon ekranı ve havada süzülen 3D Hype VPN ikonları"
              wrapperClassName="w-full flex justify-center"
              className="w-full h-auto object-contain select-none drop-shadow-2xl"
              loading="eager"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 4: Brand Identity & UI Kit / Styleguide (Color Palette, Buttons, Indicators, Flags) */}
        <section
          id="hype-styleguide-section"
          aria-label="Tasarım Sistemi, Renk Paleti ve Arayüz Bileşenleri"
          className="w-full max-w-[1440px] px-4 sm:px-8 pt-4 sm:pt-8 md:pt-12 pb-6 sm:pb-10 flex justify-center"
        >
          <div
            id="styleguide-swatches-row"
            onClick={() => setSelectedImage({ src: HypeMain3, title: "Hype VPN - Renk Paleti, Butonlar ve Ülke Bayrakları" })}
            className="w-full max-w-[1262px] flex justify-center cursor-zoom-in group transition-transform duration-500 hover:scale-[1.01]"
          >
            <AnimatedImage
              id="hype-styleguide-image"
              src={HypeMain3}
              alt="Hype VPN - Renk paleti (Dark Blue, Blue, Light Blue, Orange, Red, Green, Light Green), buton varyantları ve bağlantı ülke bayrakları"
              wrapperClassName="w-full"
              className="w-full h-auto object-contain select-none"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 5: App Screens Showcase (Splash & Menu, Connect & Disconnect, Select Country, Get Premium) */}
        <section
          id="hype-screens-showcase-section"
          aria-label="Mobil Uygulama Ekran Akışları"
          className="w-full max-w-[1440px] px-3 sm:px-6 md:px-8 pt-2 sm:pt-4 pb-12 sm:pb-20 md:pb-28 flex justify-center"
        >
          <div
            id="app-screens-showcase"
            onClick={() => setSelectedImage({ src: HypeFooter, title: "Hype VPN - Splash, Bağlantı, Ülke Seçimi ve Premium Ekranları" })}
            className="w-full max-w-[1381px] flex justify-center cursor-zoom-in group transition-transform duration-500 hover:scale-[1.008]"
          >
            <AnimatedImage
              id="hype-screens-image"
              src={HypeFooter}
              alt="Hype VPN - Splash & Menu Screen, Disconnect & Connect Screen, Select Country & Setup Screen ve Get Premium Screen mobil uygulama akışları"
              wrapperClassName="w-full"
              className="w-full h-auto object-contain select-none"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 6: Project Details & Agency Footer */}
        <ProjectCredits
          title="Hype VPN Mobile App"
          description="Gizlilik, yüksek bağlantı hızı ve kullanıcı dostu arayüz odaklı yeni nesil VPN mobil uygulaması. Özgün ninja illüstrasyonları, 3D ikonografi, sezgisel bağlantı durumu ve akıcı kullanıcı akışlarıyla tasarlanmış bütünleşik mobil deneyim."
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
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[#1F5BFF] hover:bg-[#1647D6] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Hype;
