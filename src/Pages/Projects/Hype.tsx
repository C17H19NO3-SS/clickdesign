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
      <main className="w-full flex flex-col items-center">
        <h1 className="sr-only">Hype VPN - Yeni Nesil Hızlı ve Güvenli Mobil VPN Uygulaması Tasarımı</h1>
        {/* Figma "Hype" frame'i: 1440×5827 tasarım tuvali, ekran genişliğine oranlı */}
        <DesignCanvas height={5827} onOpen={setSelectedImage}>
          <CanvasImage src={HypeHero} x={0} y={0} w={1440} h={810} eager title="Hype VPN - Şehir İllüstrasyonu & Ninja Karakterleri" alt="Hype VPN - Gece şehir silüeti ve mavi ninja karakterleri illüstrasyonu" />
          <CanvasImage src={HypeMain1} x={0} y={810} w={1440} h={411} eager alt="Hype VPN - Elektrik mavisi zemin üzerinde büyük beyaz Hype marka logosu" />
          <CanvasImage src={HypeMain2} x={317} y={1114} w={806} h={841} title="Hype VPN - Akıllı Telefon ve 3D Uygulama İkonları" alt="Hype VPN - Elde tutulan akıllı telefon ekranı ve havada süzülen 3D Hype VPN ikonları" />
          <CanvasImage src={HypeMain3} x={89} y={1976} w={1262} h={519} title="Hype VPN - Renk Paleti, Butonlar ve Ülke Bayrakları" alt="Hype VPN - Renk paleti (Dark Blue, Blue, Light Blue, Orange, Red, Green, Light Green), buton varyantları ve bağlantı ülke bayrakları" />
          <CanvasImage src={HypeFooter} x={30} y={2516} w={1381} h={3169} title="Hype VPN - Splash, Bağlantı, Ülke Seçimi ve Premium Ekranları" alt="Hype VPN - Splash & Menu Screen, Disconnect & Connect Screen, Select Country & Setup Screen ve Get Premium Screen mobil uygulama akışları" />
        </DesignCanvas>

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
