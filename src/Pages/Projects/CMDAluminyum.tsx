import React from "react";
import { Link } from "react-router";
import { AnimatedImage as BaseAnimatedImage, ScrollTopButton, zoomable, ImageLightbox, useLightbox, useDocumentTitle } from "@/Components/ProjectShowcase";
import { ProjectCredits } from "@/Components/ProjectCredits";

// Project Assets
import CMDHero from "@/Resources/Projects/CMD-Aluminyum/CMDHero.svg";
import CMDLogo from "@/Resources/Projects/CMD-Aluminyum/CMDLogo.svg";
import CMDMain1 from "@/Resources/Projects/CMD-Aluminyum/CMDMain1.svg";
import CMDMain2 from "@/Resources/Projects/CMD-Aluminyum/CMDMain2.svg";
import CMDMain3 from "@/Resources/Projects/CMD-Aluminyum/CMDMain3.svg";
import CMDMain4 from "@/Resources/Projects/CMD-Aluminyum/CMDMain4.svg";
import CMDMain5 from "@/Resources/Projects/CMD-Aluminyum/CMDMain5.svg";
import CMDMain6 from "@/Resources/Projects/CMD-Aluminyum/CMDMain6.svg";
import CMDMain7 from "@/Resources/Projects/CMD-Aluminyum/CMDMain7.svg";

// Bu sayfanın görsel animasyon ayarları
const AnimatedImage: React.FC<React.ComponentProps<typeof BaseAnimatedImage>> = (props) => (
  <BaseAnimatedImage skeletonClassName="bg-neutral-200/50" clip={false} {...props} />
);

export const CMDAluminyum = () => {
  const { selectedImage, setSelectedImage, close: closeLightbox } = useLightbox();
  useDocumentTitle("CMD Alüminyum - Kurumsal Kimlik & Marka Tasarımı | Click Design Studio");

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] flex flex-col items-center selection:bg-[#E30613] selection:text-white">
      {/* Top Breadcrumb & Project Info Bar */}
      <nav aria-label="Proje Detay Navigasyonu" className="w-full max-w-[1440px] px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100">
        <Link
          to="/projects"
          id="back-to-home-link"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-600 hover:text-[#E30613] transition-colors group"
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
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FEECEC] text-[#E30613] uppercase tracking-wider">
            Kurumsal Kimlik
          </span>
          <span className="text-xs text-neutral-400 font-medium">
            CMD Alüminyum &copy; 2024
          </span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="w-full flex flex-col items-center overflow-x-hidden">
        {/* Section 1: Hero Banner (Red & Dark Gradient with Floating Chrome Sphere) */}
        <header
          id="cmd-hero-section"
          {...zoomable(() => setSelectedImage({ src: CMDHero, title: "CMD Alüminyum - Hero Görseli & Krom Küre" }))}
          className="w-full max-w-[1440px] flex justify-center bg-[#1A1A1A] cursor-zoom-in group shadow-xs"
        >
          <h1 className="sr-only">CMD Alüminyum - Kurumsal Kimlik ve Marka Tasarımı</h1>
          <AnimatedImage
            id="cmd-hero-image"
            src={CMDHero}
            alt="CMD Alüminyum - Kırmızı ve koyu antrasit zemin üzerinde metalik krom küre hero kompozisyonu"
            wrapperClassName="w-full max-w-[1440px]"
            className="w-full h-auto object-cover select-none group-hover:brightness-105 transition-all duration-300"
            fetchPriority="high"
            decoding="sync"
          />
        </header>

        {/* Section 2: Logo Showcase on Clean White Minimal Background */}
        <section
          id="cmd-logo-section"
          aria-label="CMD Alüminyum Logo"
          className="w-full max-w-[1440px] bg-white py-16 sm:py-20 md:py-24 flex flex-col items-center justify-center px-4"
        >
          <div
            id="cmd-logo-wrapper"
            {...zoomable(() => setSelectedImage({ src: CMDLogo, title: "CMD Alüminyum - Logo Tasarımı" }))}
            className="w-full max-w-[341px] flex justify-center cursor-zoom-in group transition-transform duration-500 hover:scale-[1.03]"
          >
            <AnimatedImage
              id="cmd-logo-image"
              src={CMDLogo}
              alt="CMD Alüminyum kırmızı kurumsal logo ve tipografi"
              wrapperClassName="w-full flex justify-center"
              className="w-full h-auto object-contain select-none"
              loading="eager"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 3: Stationery & Corporate Kit Flatlay Showcase */}
        <section
          id="cmd-stationery-section"
          aria-label="CMD Alüminyum Kurumsal Kırtasiye ve Tanıtım Seti"
          className="w-full max-w-[1440px] flex justify-center bg-[#141414]"
        >
          <div
            id="cmd-main1-wrapper"
            {...zoomable(() => setSelectedImage({ src: CMDMain1, title: "CMD Alüminyum - Kurumsal Kırtasiye ve Kartvizit Seti" }))}
            className="w-full max-w-[1440px] flex justify-center cursor-zoom-in group"
          >
            <AnimatedImage
              id="cmd-main1-image"
              src={CMDMain1}
              alt="CMD Alüminyum kurumsal kırtasiye seti, antetli kağıt, akıllı telefon, kartvizit ve taş dokulu zemin kompozisyonu"
              wrapperClassName="w-full max-w-[1440px]"
              className="w-full h-auto object-cover select-none group-hover:brightness-105 transition-all duration-300"
              loading="eager"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 4: Split Cards - Red Business Card on Grid & 2024 Agenda Overlapping Building */}
        <section
          id="cmd-split-grid-section"
          aria-label="CMD Alüminyum Kartvizit ve Ajanda Seti"
          className="w-full max-w-[1440px] bg-white relative z-20"
        >
          <div className="w-full flex flex-row items-start justify-between">
            {/* Left: Red Business Card on Dark Grid Wall (CMDMain2) */}
            <div
              id="cmd-main2-wrapper"
              {...zoomable(() => setSelectedImage({ src: CMDMain2, title: "CMD Alüminyum - Kırmızı Kurumsal Kartvizit" }))}
              className="w-[50.8%] ml-[7%] max-w-[731px] mb-[2.3%] cursor-zoom-in group transition-transform duration-500 hover:scale-[1.01]"
            >
              <AnimatedImage
                id="cmd-main2-image"
                src={CMDMain2}
                alt="CMD Alüminyum kırmızı kurumsal kartvizit metal ızgara zemin üzerinde"
                wrapperClassName="w-full"
                className="w-full h-auto object-cover select-none shadow-md"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right: 2024 Notebook Agenda & Folder Overlapping Building (CMDMain3) */}
            <div
              id="cmd-main3-wrapper"
              {...zoomable(() => setSelectedImage({ src: CMDMain3, title: "CMD Alüminyum - 2024 Ajanda ve Sunum Dosyası" }))}
              className="w-[34.3%] mr-[4.3%] max-w-[494px] mt-[5.4%] -mb-[8.6%] relative z-20 cursor-zoom-in group transition-transform duration-500 hover:scale-[1.01]"
            >
              <AnimatedImage
                id="cmd-main3-image"
                src={CMDMain3}
                alt="CMD Alüminyum 2024 kırmızı dokulu ajanda defter ve siyah kurumsal dosya mockup"
                wrapperClassName="w-full shadow-2xl"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Section 5: Modern Architecture Building Signage Showcase (CMDMain4) */}
        <section
          id="cmd-building-section"
          aria-label="CMD Alüminyum Fabrika ve Bina Dış Cephe Tabela Uygulaması"
          className="w-full max-w-[1440px] flex justify-center bg-[#2B3542] relative z-10"
        >
          <div
            id="cmd-main4-wrapper"
            {...zoomable(() => setSelectedImage({ src: CMDMain4, title: "CMD Alüminyum - Dış Cephe Tabela Tasarımı" }))}
            className="w-full max-w-[1440px] flex justify-center cursor-zoom-in group"
          >
            <AnimatedImage
              id="cmd-main4-image"
              src={CMDMain4}
              alt="CMD Alüminyum modern mimari fabrika ve yönetim binası cam cephesinde krom kabartma tabela"
              wrapperClassName="w-full max-w-[1440px]"
              className="w-full h-auto object-cover select-none group-hover:brightness-105 transition-all duration-300"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 6: Promotional Gear (Hardhat Helmet on Left & Mug Overlapping Catalog Floor on Right) */}
        <section
          id="cmd-promo-section"
          aria-label="CMD Alüminyum İş Güvenliği Bareti ve Kurumsal Kupa"
          className="w-full max-w-[1440px] bg-white relative z-20 pt-[1.5%]"
        >
          <div className="w-full flex flex-row items-start justify-between">
            {/* Left: Red Construction Safety Helmet (CMDMain5) */}
            <div
              id="cmd-main5-wrapper"
              {...zoomable(() => setSelectedImage({ src: CMDMain5, title: "CMD Alüminyum - İş Güvenliği Bareti" }))}
              className="w-[58.1%] max-w-[837px] ml-0 mb-[5%] flex justify-start cursor-zoom-in group transition-transform duration-500 hover:scale-[1.02]"
            >
              <AnimatedImage
                id="cmd-main5-image"
                src={CMDMain5}
                alt="CMD Alüminyum logolu kırmızı iş güvenliği bareti koruyucu kask"
                wrapperClassName="w-full"
                className="w-full h-auto object-contain select-none"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right: Black & Red Branded Mug Overlapping Catalog Surface (CMDMain6) */}
            <div
              id="cmd-main6-wrapper"
              {...zoomable(() => setSelectedImage({ src: CMDMain6, title: "CMD Alüminyum - Kurumsal Kupa Tasarımı" }))}
              className="w-[43.8%] max-w-[630px] mr-0 mt-[31%] -mb-[11.5%] relative z-20 flex justify-end cursor-zoom-in group transition-transform duration-500 hover:scale-[1.02]"
            >
              <AnimatedImage
                id="cmd-main6-image"
                src={CMDMain6}
                alt="CMD Alüminyum geometrik kırmızı beyaz siyah çizgili seramik kupa"
                wrapperClassName="w-full"
                className="w-full h-auto object-contain select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Section 7: Product Catalog & Technical Brochure Open Book (CMDMain7) */}
        <section
          id="cmd-catalog-section"
          aria-label="CMD Alüminyum Ürün Kataloğu ve Broşür Tasarımı"
          className="w-full max-w-[1440px] bg-[#EBEBEB] flex justify-center relative z-10"
        >
          <div
            id="cmd-main7-wrapper"
            {...zoomable(() => setSelectedImage({ src: CMDMain7, title: "CMD Alüminyum - Ürün ve Teknik Detay Kataloğu" }))}
            className="w-full max-w-[1440px] flex justify-center cursor-zoom-in group"
          >
            <AnimatedImage
              id="cmd-main7-image"
              src={CMDMain7}
              alt="CMD Alüminyum açık ürün kataloğu ve teknik özellikler kitapçığı mockup tasarımı"
              wrapperClassName="w-full max-w-[1440px]"
              className="w-full h-auto object-cover select-none group-hover:brightness-105 transition-all duration-300"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Section 8: Project Details & Agency Footer */}
        <ProjectCredits
          title="CMD Alüminyum"
          description="Endüstriyel alüminyum profil ve mimari sistemler için tasarlanan modern kurumsal kimlik, katalog tasarımı, açık hava giydirme ve promosyon ürünleri görsel dili."
        />
      </main>

      {/* Lightbox Modal */}
      <ImageLightbox image={selectedImage} onClose={closeLightbox} />

      {/* Floating Scroll to Top Button */}
      <ScrollTopButton colorClassName="bg-[#E30613] hover:bg-[#BA050F]" />
    </div>
  );
};

export default CMDAluminyum;
