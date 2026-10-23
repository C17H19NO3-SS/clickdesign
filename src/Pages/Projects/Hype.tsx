import React from "react";
import { Link } from "react-router";
import { AnimatedImage, ScrollTopButton, zoomable, ImageLightbox, useLightbox, useDocumentTitle } from "@/Components/ProjectShowcase";
import { ProjectCredits } from "@/Components/ProjectCredits";

// Project Assets
import HypeHero from "@/Resources/Projects/Hype.svg/HypeHero.svg";
import HypeMain1 from "@/Resources/Projects/Hype.svg/HypeMain1.svg";
import HypeMain2 from "@/Resources/Projects/Hype.svg/HypeMain2.svg";
import HypeMain3 from "@/Resources/Projects/Hype.svg/HypeMain3.svg";
import HypeFooter from "@/Resources/Projects/Hype.svg/HypeFooter.svg";


export const Hype = () => {
  const { selectedImage, setSelectedImage, close: closeLightbox } = useLightbox();
  useDocumentTitle("Hype VPN - Mobil Uygulama & UI/UX Tasarımı | Click Design Studio");

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
          {...zoomable(() => setSelectedImage({ src: HypeHero, title: "Hype VPN - Şehir İllüstrasyonu & Ninja Karakterleri" }))}
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
            {...zoomable(() => setSelectedImage({ src: HypeMain2, title: "Hype VPN - Akıllı Telefon ve 3D Uygulama İkonları" }))}
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
            {...zoomable(() => setSelectedImage({ src: HypeMain3, title: "Hype VPN - Renk Paleti, Butonlar ve Ülke Bayrakları" }))}
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
            {...zoomable(() => setSelectedImage({ src: HypeFooter, title: "Hype VPN - Splash, Bağlantı, Ülke Seçimi ve Premium Ekranları" }))}
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
      <ImageLightbox image={selectedImage} onClose={closeLightbox} />

      {/* Floating Scroll to Top Button */}
      <ScrollTopButton colorClassName="bg-[#1F5BFF] hover:bg-[#1647D6]" />
    </div>
  );
};

export default Hype;
