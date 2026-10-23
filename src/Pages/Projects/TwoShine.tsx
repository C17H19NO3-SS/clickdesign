import React, { useEffect } from "react";
import { Link } from "react-router";
import {
  DesignCanvas,
  CanvasImage,
  ScrollTopButton,
  ImageLightbox,
  useLightbox,
  useDocumentTitle,
  Placed,
} from "@/Components/ProjectShowcase";
import { ProjectCredits } from "@/Components/ProjectCredits";

// Project Assets
import TwoShineHero from "@/Resources/Projects/TwoShine.svg/TwoShineHero.svg";
import TwoShineMain1 from "@/Resources/Projects/TwoShine.svg/TwoShineMain1.svg";
import TwoShineMain2 from "@/Resources/Projects/TwoShine.svg/TwoShineMain2.svg";
import TwoShineMain3 from "@/Resources/Projects/TwoShine.svg/TwoShineMain3.svg";
import TwoShineMain4 from "@/Resources/Projects/TwoShine.svg/TwoShineMain4.svg";
import TwoShineMain5 from "@/Resources/Projects/TwoShine.svg/TwoShineMain5.svg";
import TwoShineMain6 from "@/Resources/Projects/TwoShine.svg/TwoShineMain6.svg";
import TwoShineMain7 from "@/Resources/Projects/TwoShine.svg/TwoShineMain7.svg";
import TwoShineMain8 from "@/Resources/Projects/TwoShine.svg/TwoShineMain8.svg";
import TwoShineMain9 from "@/Resources/Projects/TwoShine.svg/TwoShineMain9.svg";
import TwoShineMain10 from "@/Resources/Projects/TwoShine.svg/TwoShineMain10.svg";
import TwoShineMainBG1 from "@/Resources/Projects/TwoShine.svg/TwoShineMainBG1.svg";

export const TwoShine: React.FC = () => {
  const { selectedImage, setSelectedImage, close: closeLightbox } = useLightbox();
  useDocumentTitle("TwoShine - Kozmetik & Cilt Bakımı Marka Kimliği | Click Design Studio");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1E121A] flex flex-col items-center selection:bg-[#D08BBD] selection:text-white">
      {/* Top Breadcrumb & Project Info Bar */}
      <nav
        aria-label="Proje Detay Navigasyonu"
        className="w-full max-w-[1440px] px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100 bg-white"
      >
        <Link
          to="/projects"
          id="back-to-home-link"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-600 hover:text-[#8E3E6F] transition-colors group"
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
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FDF4F9] text-[#8E3E6F] uppercase tracking-wider border border-[#F2D7E9]">
            Kozmetik &amp; Cilt Bakımı
          </span>
          <span className="text-xs text-neutral-400 font-medium">
            TwoShine &copy; 2024
          </span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="w-full flex flex-col items-center">
        <h1 className="sr-only">TwoShine - Kozmetik ve Cilt Bakımı Marka Kimliği Tasarımı</h1>
        {/* Figma "Work-Twoshine" frame'i: 1440×4990 tasarım tuvali, ekran genişliğine oranlı */}
        <DesignCanvas height={4990} onOpen={setSelectedImage} imageProps={{ skeletonClassName: "bg-[#F5EDF3]", hiddenClassName: "opacity-0 translate-y-6 scale-[0.98] blur-[1px]", rootMargin: "0px 0px -30px 0px" }}>
          <CanvasImage src={TwoShineHero} x={0} y={0} w={1440} h={810} eager title="TwoShine - Kurumsal Logo & Hero Tasarımı" alt="TwoShine koyu bordo zemin üzerinde pembe logo ve amblem hero sunumu" />
          <CanvasImage src={TwoShineMain5} x={0} y={2396} w={1439} h={785} title="TwoShine - Kristal Parfüm Şişesi ve Prizmatik Işık Yansımaları" alt="TwoShine fasetli kristal parfüm şişesi mor saten zemin üzerinde ışık kırılmaları ve gölgeler" />
          <CanvasImage src={TwoShineMain1} x={137} y={780} w={847} h={484} title="TwoShine - Vücut Losyonu ve Yüz Kremi Doğal Taş Sahnesi" alt="TwoShine vücut losyonu şişesi ve yüz kremi kavanozu doğal taş tezgah üzerinde okaliptüs dalı ile" />
          <CanvasImage src={TwoShineMain2} x={938} y={915} w={396} h={663} title="TwoShine - Amblem & Monogram Kartı" alt="TwoShine pembe zeminli oval kemer içerisindeki siyah amblem kartı" />
          <CanvasImage src={TwoShineMain4} x={94} y={1601} w={1251} h={679} title="TwoShine - Lüks Hediye Kutusu ve Ambalaj Seti" alt="TwoShine mat siyah hediye kutusu içinde sünger yuvalı losyon ve krem seti" />
          <CanvasImage src={TwoShineMain3} x={33} y={1516} w={379} h={286} title="TwoShine - Yoğun Nemlendirici Krem Dokusu Swatch" alt="TwoShine kadifemsi nemlendirici krem fırça darbesi doku görseli" />
          <CanvasImage src={TwoShineMainBG1} x={1029} y={4126} w={354} h={758} alt="" />
          <CanvasImage src={TwoShineMain9} x={1117} y={4207} w={215} h={245} title="TwoShine İkonografi - Serum & Damlalık ile Cilt Bakım Rutini" alt="TwoShine damlalık ve serum ile cilt bakım rutini çizgi piktogramı" />
          <CanvasImage src={TwoShineMain10} x={1081} y={4562} w={234} h={226} title="TwoShine İkonografi - Açık Kapaklı Nemlendirici Krem Kavanozu" alt="TwoShine açık kapaklı nemlendirici yüz kremi kavanozu çizgi piktogramı" />
          <CanvasImage src={TwoShineMain6} x={0} y={3238} w={890} h={760} title="TwoShine - Vücut Losyonu 100ml Şişe Tasarımı" alt="TwoShine 100ml Soften & Renew siyah mat pompalı vücut losyonu şişesi stüdyo sunumu" />
          <Placed x={597} y={3389} w={205} h={205} radius={50} className="bg-[#D08BBD]" />
          <CanvasImage src={TwoShineMain7} x={597} y={3389} w={700} h={458} title="TwoShine - Marka Renk Paleti ve Amblem Varyasyonları Matrisi" alt="TwoShine kurumsal renk tonlarında 6 farklı amblem ve ikon varyasyon matrisi" />
          <CanvasImage src={TwoShineMain8} x={58} y={4019} w={922} h={865} title="TwoShine - Kampanya Görseli: Işıltılı Yüz Spreyi ve Ferahlatıcı Sis" alt="TwoShine mor elbiseli zarif model ışıltılı yüz spreyi uygularken ışıltı partikülleri sahnesi" />
        </DesignCanvas>

        <ProjectCredits
          title="TwoShine"
          description="Kozmetik ve dermokozmetik cilt bakımı sektörü için hazırlanan TwoShine marka kimliği; zarif tipografi, lüks cam ve mat siyah ambalaj tasarımları, 3D ürün renderları, renk sistemi ve ikonografi piktogramlarıyla bütüncül bir estetik sunmaktadır."
          tags={[
            "Kozmetik & Parfüm",
            "Ambalaj & Kutu Tasarımı",
            "3D Görselleştirme",
            "İkonografi",
          ]}
          className="mt-4"
        />
      </main>

      {/* Lightbox Modal */}
      <ImageLightbox image={selectedImage} onClose={closeLightbox} overlayClassName="z-50 bg-black/85" />

      {/* Floating Scroll to Top Button */}
      <ScrollTopButton colorClassName="bg-[#8E3E6F] hover:bg-[#732A55]" />
    </div>
  );
};

export default TwoShine;
