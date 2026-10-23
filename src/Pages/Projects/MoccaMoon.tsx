import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { ProjectCredits } from "@/Components/ProjectCredits";

// Project Assets
import MoccaMoonHero from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonHero.svg";
import MoccaMoonCoffeePocket from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonCoffeePocket.svg";
import MoccaMoonCoffePocketMini1 from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonCoffePocketMini1.svg";
import MoccaMoonCoffePocketMini2 from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonCoffePocketMini2.svg";
import MoccaMoonCoffePocketMini3 from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonCoffePocketMini3.svg";
import MoccaMoonCoffePocketMini4 from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonCoffePocketMini4.svg";
import MoccaMoonCoffeePocket4Pocket from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonCoffeePocket4Pocket.svg";
import MoccaMoonCoffeeGlas from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonCoffeeGlas.svg";
import MoccaMoonFooter1 from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonFooter1.svg";
import MoccaMoonFooter2 from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonFooter2.svg";
import MoccaMoonFooter3 from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonFooter3.svg";
import MoccaMoonFooter4 from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonFooter4.svg";
import MoccaMoonFooter5 from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonFooter5.svg";
import MoccaMoonFooter6 from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonFooter6.svg";

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
        if (typeof entry === "undefined") return;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
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

export const MoccaMoon = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    // Set Page Title
    if (typeof document !== "undefined") {
      document.title = "Mocca Moon Coffee - Ambalaj Tasarımı | Click Design Studio";
    }

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] flex flex-col items-center selection:bg-[#5C8D4B] selection:text-white">
      {/* Top Breadcrumb & Project Info Bar */}
      <nav aria-label="Proje Detay Navigasyonu" className="w-full max-w-[1440px] px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100">
        <Link
          to="/projects"
          id="back-to-home-link"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-600 hover:text-black transition-colors group"
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
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EBF5E8] text-[#3D712C] uppercase tracking-wider">
            Ambalaj Tasarımı
          </span>
          <span className="text-xs text-neutral-400 font-medium">
            Mocca Moon Coffee &copy; 2024
          </span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="w-full flex flex-col items-center overflow-x-hidden">
        {/* Section 1: Hero Banner (Coffee Beans Frame + Logo) */}
        <header className="w-full max-w-[1440px] flex justify-center bg-white shadow-xs">
          <h1 className="sr-only">Mocca Moon Coffee - Premium Ambalaj ve Marka Kimliği Tasarımı</h1>
          <AnimatedImage
            id="moccamoon-hero-image"
            src={MoccaMoonHero}
            alt="Mocca Moon Coffee - Kahve çekirdekleri çerçevesinde marka logosu"
            wrapperClassName="w-full max-w-[1440px]"
            className="w-full h-auto object-cover select-none"
            fetchPriority="high"
            decoding="sync"
          />
        </header>

        {/* Section 2: Floating Coffee Bags Showcase with Scalloped Edge */}
        <section aria-label="Mocca Moon Çeşitleri Tanıtımı" className="w-full max-w-[1440px] flex justify-center -mt-px">
          <AnimatedImage
            id="moccamoon-floating-packets"
            src={MoccaMoonCoffeePocket}
            alt="Mocca Moon aromatik tek köken kahve paketleri dinamik yerleşim"
            wrapperClassName="w-full max-w-[1440px]"
            className="w-full h-auto object-cover select-none"
            loading="eager"
            decoding="async"
          />
        </section>

        {/* Section 3: Single Origin Lineup (Colombia, Ethiopia, Sumatra, Guatemala) */}
        <section aria-label="Tek Köken Kahve Serisi" className="w-full max-w-[1440px] px-4 sm:px-8 py-10 sm:py-16 md:py-24 flex flex-col items-center gap-12 sm:gap-20 md:gap-28">
          {/* Colombia */}
          <div
            id="origin-colombia"
            onClick={() => setSelectedImage({ src: MoccaMoonCoffePocketMini1, title: "Colombia Single Origin" })}
            className="w-full max-w-[1072px] flex justify-center cursor-zoom-in group transition-transform duration-500 hover:scale-[1.01]"
          >
            <AnimatedImage
              src={MoccaMoonCoffePocketMini1}
              alt="Mocca Moon Colombia Single Origin Kahve Paketi"
              wrapperClassName="w-full rounded-lg"
              className="w-full h-auto object-contain select-none"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Ethiopia */}
          <div
            id="origin-ethiopia"
            onClick={() => setSelectedImage({ src: MoccaMoonCoffePocketMini2, title: "Ethiopia Single Origin" })}
            className="w-full max-w-[1211px] flex justify-center cursor-zoom-in group transition-transform duration-500 hover:scale-[1.01]"
          >
            <AnimatedImage
              src={MoccaMoonCoffePocketMini2}
              alt="Mocca Moon Ethiopia Single Origin Kahve Paketi ve Kahve Yaprakları"
              wrapperClassName="w-full rounded-lg"
              className="w-full h-auto object-contain select-none"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Sumatra */}
          <div
            id="origin-sumatra"
            onClick={() => setSelectedImage({ src: MoccaMoonCoffePocketMini3, title: "Sumatra Single Origin" })}
            className="w-full max-w-[1106px] flex justify-center cursor-zoom-in group transition-transform duration-500 hover:scale-[1.01]"
          >
            <AnimatedImage
              src={MoccaMoonCoffePocketMini3}
              alt="Mocca Moon Sumatra Single Origin Kahve Paketi ve Özel Pul Çerçevesi"
              wrapperClassName="w-full rounded-lg"
              className="w-full h-auto object-contain select-none"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Guatemala */}
          <div
            id="origin-guatemala"
            onClick={() => setSelectedImage({ src: MoccaMoonCoffePocketMini4, title: "Guatemala Single Origin" })}
            className="w-full max-w-[1356px] flex justify-center cursor-zoom-in group transition-transform duration-500 hover:scale-[1.01]"
          >
            <AnimatedImage
              src={MoccaMoonCoffePocketMini4}
              alt="Mocca Moon Guatemala Single Origin Kahve Paketi ve Tipografi Kompozisyonu"
              wrapperClassName="w-full rounded-lg"
              className="w-full h-auto object-contain select-none"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 4: Four Pockets in a Row Showcase */}
        <section aria-label="Kahve Paketleri Koleksiyonu" className="w-full max-w-[1440px] px-4 sm:px-8 py-6 sm:py-12 flex justify-center">
          <div
            id="all-packets-row"
            onClick={() => setSelectedImage({ src: MoccaMoonCoffeePocket4Pocket, title: "Mocca Moon 4 Origin Paketi Yan Yana" })}
            className="w-full max-w-[1375px] flex justify-center cursor-zoom-in group transition-transform duration-500 hover:scale-[1.01]"
          >
            <AnimatedImage
              src={MoccaMoonCoffeePocket4Pocket}
              alt="Mocca Moon 4 Paket Yan Yana Koleksiyon Gösterimi"
              wrapperClassName="w-full rounded-lg"
              className="w-full h-auto object-contain select-none"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 5: Enamel Mug / Coffee Glass */}
        <section aria-label="Mocca Moon Emaye Kupa" className="w-full max-w-[1440px] px-4 sm:px-8 py-8 sm:py-16 flex justify-center">
          <div
            id="coffee-cup-section"
            onClick={() => setSelectedImage({ src: MoccaMoonCoffeeGlas, title: "Mocca Moon Emaye Kahve Kupası" })}
            className="w-full max-w-[1120px] flex justify-center cursor-zoom-in group transition-transform duration-500 hover:scale-[1.02]"
          >
            <AnimatedImage
              src={MoccaMoonCoffeeGlas}
              alt="Mocca Moon Logolu Emaye Kahve Kupası"
              wrapperClassName="w-full rounded-lg"
              className="w-full h-auto object-contain select-none"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 6: Signature / Flavor Infused Footer Cards (2-Column Grid) */}
        <section aria-label="Özel Aromatik Kahve Serisi" className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-[1380px] mx-auto items-stretch">
            {/* Card 1: Orange & Chocolate */}
            <article
              id="flavor-card-1"
              onClick={() => setSelectedImage({ src: MoccaMoonFooter1, title: "Portakal & Bitter Çikolata Nüanslı Kahve" })}
              className="flex justify-center items-center cursor-zoom-in group transition-transform duration-300 hover:scale-[1.015] w-full"
            >
              <AnimatedImage
                src={MoccaMoonFooter1}
                alt="Mocca Moon Portakal ve Bitter Çikolata Notalı Kahve Paketi"
                wrapperClassName="w-full aspect-[675/743] rounded-2xl shadow-xs group-hover:shadow-lg transition-shadow duration-300 bg-white"
                className="w-full h-full object-cover select-none"
                loading="lazy"
                decoding="async"
              />
            </article>

            {/* Card 2: Wild Berries & Crimson */}
            <article
              id="flavor-card-2"
              onClick={() => setSelectedImage({ src: MoccaMoonFooter2, title: "Kırmızı Orman Meyveleri Nüanslı Kahve" })}
              className="flex justify-center items-center cursor-zoom-in group transition-transform duration-300 hover:scale-[1.015] w-full"
            >
              <AnimatedImage
                src={MoccaMoonFooter2}
                alt="Mocca Moon Orman Meyveleri Notalı Kahve Paketi"
                wrapperClassName="w-full aspect-[675/743] rounded-2xl shadow-xs group-hover:shadow-lg transition-shadow duration-300 bg-white"
                className="w-full h-full object-cover object-top select-none"
                loading="lazy"
                decoding="async"
              />
            </article>

            {/* Card 3: Tan Mandala Ground Coffee */}
            <article
              id="flavor-card-3"
              onClick={() => setSelectedImage({ src: MoccaMoonFooter3, title: "Özel Kavrum Öğütülmüş Kahve Serisi" })}
              className="flex justify-center items-center cursor-zoom-in group transition-transform duration-300 hover:scale-[1.015] w-full"
            >
              <AnimatedImage
                src={MoccaMoonFooter3}
                alt="Mocca Moon Özel Kavrum Öğütülmüş Kahve Paketi Mandala Motifli Çerçeve"
                wrapperClassName="w-full aspect-[675/743] rounded-2xl shadow-xs group-hover:shadow-lg transition-shadow duration-300 bg-white"
                className="w-full h-full object-cover select-none"
                loading="lazy"
                decoding="async"
              />
            </article>

            {/* Card 4: Dark Mandala Intense Espresso */}
            <article
              id="flavor-card-4"
              onClick={() => setSelectedImage({ src: MoccaMoonFooter4, title: "Yoğun Espresso Kavrumu Kahve Serisi" })}
              className="flex justify-center items-center cursor-zoom-in group transition-transform duration-300 hover:scale-[1.015] w-full"
            >
              <AnimatedImage
                src={MoccaMoonFooter4}
                alt="Mocca Moon Koyu Kavrum Espresso Kahve Paketi Koyu Mandala Motifli Çerçeve"
                wrapperClassName="w-full aspect-[675/743] rounded-2xl shadow-xs group-hover:shadow-lg transition-shadow duration-300 bg-white"
                className="w-full h-full object-cover select-none"
                loading="lazy"
                decoding="async"
              />
            </article>

            {/* Card 5: Strawberry Sweet Blend */}
            <article
              id="flavor-card-5"
              onClick={() => setSelectedImage({ src: MoccaMoonFooter5, title: "Taze Çilek Nüanslı Tatlı Kahve Harmanı" })}
              className="flex justify-center items-center cursor-zoom-in group transition-transform duration-300 hover:scale-[1.015] w-full"
            >
              <AnimatedImage
                src={MoccaMoonFooter5}
                alt="Mocca Moon Çilek Notalı Tatlı Kahve Paketi"
                wrapperClassName="w-full aspect-[675/743] rounded-2xl shadow-xs group-hover:shadow-lg transition-shadow duration-300 bg-white"
                className="w-full h-full object-cover select-none"
                loading="lazy"
                decoding="async"
              />
            </article>

            {/* Card 6: Rich Cocoa / Roasted Beans */}
            <article
              id="flavor-card-6"
              onClick={() => setSelectedImage({ src: MoccaMoonFooter6, title: "Yoğun Kakao & Çikolata Nüanslı Kahve" })}
              className="flex justify-center items-center cursor-zoom-in group transition-transform duration-300 hover:scale-[1.015] w-full"
            >
              <AnimatedImage
                src={MoccaMoonFooter6}
                alt="Mocca Moon Kakao Çekirdekli Çikolata Notalı Kahve Paketi"
                wrapperClassName="w-full aspect-[675/743] rounded-2xl shadow-xs group-hover:shadow-lg transition-shadow duration-300 bg-white"
                className="w-full h-full object-cover select-none"
                loading="lazy"
                decoding="async"
              />
            </article>
          </div>
        </section>

        {/* Section 7: Project Details & Agency Footer */}
        <ProjectCredits
          title="Mocca Moon Coffee"
          description="Tek kökenli kahveler ve özel aromatik harmanlar için tasarlanan özgün ambalaj mimarisi, tipografi ve illüstrasyon dili."
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
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[#1A1A1A] hover:bg-[#5C8D4B] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default MoccaMoon;
