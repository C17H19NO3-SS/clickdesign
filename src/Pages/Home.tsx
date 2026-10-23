import React, { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router";
import ClickDesignStudioCircle from "@/Resources/HomePage/ClickDesignStudioCircle.svg";
import Pocket from "@/Resources/HomePage/Pocket.svg";
import TextSvg from "@/Resources/HomePage/Text.svg";
import Dots from "@/Resources/HomePage/Dots.svg";
import Description from "@/Resources/HomePage/Description.svg";
import Monogaze from "@/Resources/HomePage/Monogaze.svg";
import Testimotional from "@/Resources/HomePage/Testimotional.svg";
import ArrowDown from "@/Resources/Arrows/Down.svg";
import { PRESET_THEMES } from "@/Theme";
import { RibbonMarquee } from "@/Components/RibbonMarqueee/RibbonMarquee";
import type { RibbonBandConfig } from "@/types";
import { BrandProjectInquiry } from "@/Components/Form/Form";
import ClickDesignStudio from "@/Resources/HomePage/ClickDesignStudio.svg"

// Figma "Line": ortalanmış 1100px alanda 220px aralıklı 6 dikey çizgi (#F2F2F2)
const GuideLines = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute inset-x-0 -z-10 ${className}`}
  >
    <div className="mx-auto h-full w-[1100px] max-w-[calc(100%-2rem)] grid grid-cols-5 border-x border-[#F2F2F2]">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-full border-r border-[#F2F2F2]" />
      ))}
    </div>
  </div>
);

export const Home = () => {
  const [selectedBandId, setSelectedBandId] = useState<string | null>(null);
  const heroTextWrapRef = useRef<HTMLDivElement>(null);
  const heroTextImgRef = useRef<HTMLImageElement>(null);

  // Yazının ekranın en sağından en soluna kadar kayması için ofsetleri ölç
  useLayoutEffect(() => {
    const measure = () => {
      const wrap = heroTextWrapRef.current;
      const img = heroTextImgRef.current;
      if (!wrap || !img) return;
      // Animasyon transform'u ölçümü etkilemesin diye wrapper'ın (animasyonsuz) konumunu kullan
      const left = wrap.getBoundingClientRect().left;
      const vw = document.documentElement.clientWidth;
      const width = img.getBoundingClientRect().width;
      const buffer = 40;
      wrap.style.setProperty("--hero-start", `${vw - left + buffer}px`);
      wrap.style.setProperty("--hero-end", `${-(left + width + buffer)}px`);
    };
    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (heroTextImgRef.current) ro.observe(heroTextImgRef.current);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  const activeTheme = PRESET_THEMES;

  return (
    // lg+: bölümler arası boşluklar Figma (1440) ölçülerine göre her bölümün lg:mt değeriyle verilir
    <div className="min-h-screen flex flex-col gap-10 sm:gap-14 md:gap-20 lg:gap-0 max-w-[100vw] overflow-x-clip">
      {/* Hero Section (Figma: 1267×650, x=87 y=86) */}
      <div className="bg-[#F2F2F2] relative mx-4 sm:mx-8 md:mx-12 lg:mt-[6px] lg:ml-[87px] lg:mr-[86px] min-h-[440px] sm:min-h-[500px] md:min-h-[560px] lg:min-h-[650px] flex items-center justify-end px-4 sm:px-10 md:px-16 lg:px-20 transition-all overflow-visible">
        {/* Sol Taraftaki Vakumlu Paket Görseli */}
        <img
          src={ClickDesignStudio}
          alt="Click Design Studio"
          className="h-8 sm:h-10 md:h-16 lg:h-20 absolute z-9999 -top-9 left-0 sm:-left-5 lg:-top-[61px] lg:-left-[56px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          fetchPriority="high"
        />
        <img
          src={Pocket}
          alt="Click Design Studio Packaging"
          className="absolute -left-18 bottom-0 lg:-left-[93px] lg:top-[16px] lg:bottom-auto w-48 sm:w-64 md:w-80 lg:w-[504px] h-auto max-w-[46%] sm:max-w-[42%] lg:max-w-none pointer-events-none z-10 drop-shadow-sm select-none"
          fetchPriority="high"
        />

        {/* Başlık ve Noktalar Grubu */}
        {/* lg+: Figma'daki konumlar (gri kutuya göre) */}
        <div className="relative z-10 w-full pl-[190px] sm:pl-[270px] md:pl-[340px] pr-2 sm:pr-8 md:pr-12 flex flex-col items-start justify-center gap-4 sm:gap-6 md:gap-10 lg:static lg:p-0">
          <h1 className="sr-only">Click Design Studio</h1>
          {/* Vektörel Click Design Studio Yazısı (Figma: Montserrat SemiBold 128px) — ekranın sağından soluna kayar */}
          <div ref={heroTextWrapRef} className="w-full lg:absolute lg:z-10 lg:left-[410px] lg:top-[238px] lg:w-auto">
            <style>{`@keyframes hero-text-slide{from{transform:translate3d(var(--hero-start,100vw),0,0)}to{transform:translate3d(var(--hero-end,-100%),0,0)}}`}</style>
            <img
              ref={heroTextImgRef}
              src={TextSvg}
              alt="Click Design Studio"
              className="block max-w-none w-[500px] sm:w-[700px] md:w-[850px] lg:w-[1345px] h-auto object-contain select-none"
              style={{ animation: "hero-text-slide 12s linear infinite" }}
              fetchPriority="high"
            />
          </div>

          {/* Kırmızı Noktalar (Figma: 199×46) */}
          <img
            src={Dots}
            alt=""
            className="self-center lg:self-auto w-24 sm:w-32 md:w-40 lg:absolute lg:z-10 lg:left-[737px] lg:top-[436px] lg:w-[199px] h-auto select-none"
            fetchPriority="high"
          />
        </div>

        {/* Dönen Kırmızı Dairesel Rozet (Sağ Alt Köşe) */}
        <img
          src={ClickDesignStudioCircle}
          alt=""
          className="absolute -right-4 sm:-right-7 md:-right-9 lg:-right-[34px] -bottom-8 sm:-bottom-12 md:-bottom-16 lg:-bottom-[60px] w-28 sm:w-38 md:w-48 lg:w-[229px] h-auto pointer-events-none z-20 select-none"
          fetchPriority="high"
        />

        {/* Aşağı Kaydırma Oku (Alt Orta) */}
        <button
          type="button"
          onClick={() => {
            const target = document.getElementById("hakkimizda");
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          aria-label="Aşağı kaydır"
          className="absolute top-[calc(100%-12px)] left-1/2 -translate-x-1/2 z-20 cursor-pointer hover:scale-110 active:scale-95 transition-transform focus:outline-none"
        >
          {/* Figma: kutunun alt kenarının 8px üstünden başlar, ortalı */}
          <img
            src={ArrowDown}
            alt=""
            className="block w-10 sm:w-[50px] h-auto"
            fetchPriority="high"
          />
        </button>
      </div>

      {/* Şerit Marquee Bileşeni */}
      <div className="lg:mt-[100px]">
        {/* Description Section */}
        <div
          id="hakkimizda"
          className="relative flex justify-center items-center w-full"
        >
          {/* Üst ızgara: sayfanın başından açıklama bölümünün sonuna kadar (sayfa üstünü aşan kısım görünmez) */}
          <GuideLines className="bottom-0 h-[1600px]" />
          <img
            src={Description}
            alt="Click, multidisipliner yapısıyla yenilikçi ve zamanın ötesinde tasarımlar üreten bağımsız bir tasarım stüdyosudur."
            className="w-full max-w-[805px] h-auto drop-shadow-sm select-none"
            fetchPriority="high"
          />
        </div>
        <div className="w-full">
          <RibbonMarquee
            bands={activeTheme?.bands as RibbonBandConfig[]}
            canvasBg={activeTheme?.canvasBg ?? "light-grid"}
            isPaused={false}
            isStaticReference={false}
            pauseOnHover={true}
            selectedBandId={selectedBandId}
            onSelectBand={(id: React.SetStateAction<string | null>) =>
              setSelectedBandId(id)
            }
          />
        </div>

        {/* Works Section */}
        {/* Figma: koyu zemin 628px; WORKS (Montserrat Bold 128px) zeminin 10px üstünden başlar, laptop 1156×650 zeminden 122px taşar */}
        <div className="bg-[#282828] relative z-10 flex flex-col items-center pt-6 sm:pt-8 md:pt-10 lg:pt-0 px-4">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[128px] font-montserrat font-black lg:font-bold text-white uppercase tracking-normal select-none leading-none lg:leading-[1.219] z-0 mt-0 lg:-mt-[10px]">
            WORKS
          </h2>
          {/* Monogaze Laptop Görseli (Üstü WORKS yazısının altını örter, alt yansıması beyaz zemine taşar) */}
          <div className="w-full max-w-[1156px] flex justify-center -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-[46px] -mb-8 sm:-mb-12 md:-mb-16 lg:-mb-[122px] z-10 px-2 sm:px-4 lg:px-0">
            <img
              className="w-full h-auto select-none"
              src={Monogaze}
              alt="Monogaze Project Showcase"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* All Projects Section */}
      <div className="flex flex-col items-center mt-12 sm:mt-14 md:mt-16 lg:mt-[203px] px-4">
        <Link
          to="/projects"
          className="relative inline-flex flex-col items-center group cursor-pointer"
          aria-label="All Project"
        >
          <div className="relative w-[212px] h-[60px] flex items-center justify-center">
            {/* Sol Kırmızı Kare (#FF4343) */}
            <div className="absolute left-0 top-[11px] w-4 h-4 bg-[#FF4343]" />
            {/* Sağ Kırmızı Kare (#F21414) */}
            <div className="absolute right-0 top-0 w-4 h-4 bg-[#F21414]" />
            {/* Alt Kırmızı Kare (#AF0404) */}
            <div className="absolute left-[113px] bottom-0 w-4 h-4 bg-[#AF0404]" />
            {/* Ortadaki All Project Metni (Tasarımdaki gibi altı çizili) */}
            <span className="text-lg md:text-xl lg:text-[24px] font-montserrat font-medium text-black underline underline-offset-4 group-hover:text-[#F21414] transition-colors select-none pb-3">
              All Project
            </span>
          </div>
        </Link>
      </div>

      {/* Testimonial Section */}
      <div className="relative w-full lg:mt-[91px] flex flex-col items-center justify-center overflow-hidden select-none">
        {/* Arka Plandaki Dev "TESTIMONIAL" Yazısı */}
        <div className="w-full absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          {/* Figma: Montserrat SemiBold, 170px @1440 (≈11.8vw), siyah */}
          <h2 className="text-[11.8vw] font-montserrat font-semibold uppercase leading-none lg:leading-[1.219] lg:-translate-y-4 whitespace-nowrap text-black">
            TESTIMONIAL
          </h2>
        </div>

        {/* Testimonial Kartı */}
        <div className="relative z-10 w-[320px] sm:w-[380px] md:w-[419px] aspect-[419/525] flex flex-col items-center justify-start">
          {/* Kart Çerçevesi (Arka kırmızı kart, beyaz ön kart ve alt 3D el) */}
          <img
            src={Testimotional}
            alt=""
            className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            fetchPriority="high"
          />

          {/* Kart İçi İçerikler */}
          <div className="relative z-20 w-full h-full flex flex-col items-center pt-8 sm:pt-11 md:pt-12 px-6 sm:px-10">
            {/* Müşteri Fotoğrafı (Figma: 110px daire) */}
            <img
              src="/Resources/HomePage/TestimonialAvatar.jpg"
              alt="Müşteri"
              className="w-22 h-22 sm:w-26 sm:h-26 md:w-[110px] md:h-[110px] rounded-full object-cover shrink-0 select-none"
              loading="lazy"
            />

            {/* Müşteri Yorumu (Figma: Montserrat Medium 24px, 299px genişlik) */}
            <p className="mt-5 sm:mt-7 md:mt-10 text-[16px] sm:text-[20px] md:text-[24px] font-montserrat font-medium text-black text-center leading-[1.22] max-w-[240px] sm:max-w-[280px] md:max-w-[299px]">
              Click studio ile çalışmaktan çok mutluyuz. Çok hızlı ve çözüm odaklı bakış açılarıyla, projemizi hayata geçirdiler. Emeği geçen herkese çok teşekkür ediyoruz.
            </p>
          </div>
        </div>
      </div>
      {/* Brand Inquiry Form */}
      <div
        id="contact"
        className="relative flex flex-col items-center w-full scroll-mt-20 lg:mt-[48px]"
      >
        {/* Alt ızgara: Figma'da form kartının 266px üstünden sayfa sonuna kadar */}
        <GuideLines className="-top-[266px] bottom-0" />
        <BrandProjectInquiry />
      </div>
    </div>
  );
};

export default Home;

