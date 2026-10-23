import React from "react";
import { Link } from "react-router";
import {
  DesignCanvas,
  CanvasImage,
  ScrollTopButton,
  ImageLightbox,
  useLightbox,
  useDocumentTitle,
} from "@/Components/ProjectShowcase";
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
      <main className="w-full flex flex-col items-center">
        <h1 className="sr-only">CMD Alüminyum - Kurumsal Kimlik ve Marka Tasarımı</h1>
        {/* Figma "CMD Aluminyum" frame'i: 1440×5714 tasarım tuvali, ekran genişliğine oranlı */}
        <DesignCanvas height={5714} onOpen={setSelectedImage} imageProps={{ skeletonClassName: "bg-neutral-200/50", clip: false }}>
          <CanvasImage src={CMDMain7} x={0} y={4634} w={1440} h={1080} title="CMD Alüminyum - Ürün ve Teknik Detay Kataloğu" alt="CMD Alüminyum açık ürün kataloğu ve teknik özellikler kitapçığı mockup tasarımı" />
          <CanvasImage src={CMDHero} x={0} y={0} w={1440} h={810} eager title="CMD Alüminyum - Hero Görseli & Krom Küre" alt="CMD Alüminyum - Kırmızı ve koyu antrasit zemin üzerinde metalik krom küre hero kompozisyonu" />
          <CanvasImage src={CMDMain4} x={0} y={2961} w={1440} h={810} title="CMD Alüminyum - Dış Cephe Tabela Tasarımı" alt="CMD Alüminyum modern mimari fabrika ve yönetim binası cam cephesinde krom kabartma tabela" />
          <CanvasImage src={CMDMain1} x={0} y={1304} w={1440} h={1080} title="CMD Alüminyum - Kurumsal Kırtasiye ve Kartvizit Seti" alt="CMD Alüminyum kurumsal kırtasiye seti, antetli kağıt, akıllı telefon, kartvizit ve taş dokulu zemin kompozisyonu" />
          <CanvasImage src={CMDMain2} x={101} y={2313} w={731} h={541} title="CMD Alüminyum - Kırmızı Kurumsal Kartvizit" alt="CMD Alüminyum kırmızı kurumsal kartvizit metal ızgara zemin üzerinde" />
          <CanvasImage src={CMDMain5} x={14} y={3897} w={905} h={737} title="CMD Alüminyum - İş Güvenliği Bareti" alt="CMD Alüminyum logolu kırmızı iş güvenliği bareti koruyucu kask" />
          <CanvasImage src={CMDMain6} x={687} y={4226} w={689} h={556} title="CMD Alüminyum - Kurumsal Kupa Tasarımı" alt="CMD Alüminyum geometrik kırmızı beyaz siyah çizgili seramik kupa" />
          <CanvasImage src={CMDMain3} x={884} y={2465} w={494} h={621} title="CMD Alüminyum - 2024 Ajanda ve Sunum Dosyası" alt="CMD Alüminyum 2024 kırmızı dokulu ajanda defter ve siyah kurumsal dosya mockup" />
          <CanvasImage src={CMDLogo} x={550} y={968} w={341} h={157} title="CMD Alüminyum - Logo Tasarımı" alt="CMD Alüminyum kırmızı kurumsal logo ve tipografi" />
        </DesignCanvas>

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
