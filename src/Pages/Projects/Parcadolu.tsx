import React, { useEffect } from "react";
import { Link } from "react-router";
import {
  DesignCanvas,
  CanvasImage,
  ScrollTopButton,
  ImageLightbox,
  useLightbox,
  Placed,
} from "@/Components/ProjectShowcase";
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

export const Parcadolu: React.FC = () => {
  const { selectedImage, setSelectedImage, close: closeLightbox } = useLightbox();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <main className="w-full flex flex-col items-center">
        <h1 className="sr-only">Parçadolu - E-Ticaret ve Yedek Parça Marka Kimliği</h1>
        {/* Figma "Parcadolu.com" frame'i: 1440×5867 tasarım tuvali, ekran genişliğine oranlı */}
        <DesignCanvas height={5867} onOpen={setSelectedImage} imageProps={{ mode: "image", hiddenClassName: "opacity-0 scale-[0.98] translate-y-3", threshold: 0.05, rootMargin: "0px 0px -20px 0px" }}>
          <CanvasImage src={ParcadoluHero} x={0} y={0} w={1440} h={810} eager title="Parçadolu - 3D Logo & Hero Tasarımı" alt="Parçadolu kırmızı-turuncu degrade zemin üzerinde metalik altın 3D balon pd logosu" />
          <Placed x={0} y={1769} w={1440} h={793} className="bg-[#EFEFEF]" />
          <CanvasImage src={ParcadoluMain2} x={111} y={1864} w={599} h={599} title="Parçadolu - Mobil Uygulama Arayüzü" alt="Parçadolu mobil uygulama tasarımı kaya üzerinde telefon mockup" />
          <Placed x={761} y={1864} w={599} h={599} radius={50} className="bg-linear-to-b from-white to-[#DFDFDF]" />
          <CanvasImage src={ParcadoluMain3} x={852} y={1953} w={189} h={189} title="Parçadolu İkonografi - Amortisör" alt="Amortisör oto parça ikonu" />
          <CanvasImage src={ParcadoluMain4} x={1097} y={1971} w={171} h={171} title="Parçadolu İkonografi - Fren Diski ve Balata" alt="Fren diski ve balatası oto parça ikonu" />
          <CanvasImage src={ParcadoluMain5} x={852} y={2182} w={190} h={190} title="Parçadolu İkonografi - Filtre ve Buji" alt="Filtre, buji ve civata oto parça ikonu" />
          <CanvasImage src={ParcadoluMain6} x={1082} y={2182} w={201} h={193} title="Parçadolu İkonografi - Motor Pistonları" alt="Motor pistonları oto parça ikonu" />
          <CanvasImage src={ParcadoluMain7} x={0} y={2562} w={1440} h={813} title="Parçadolu - Premium Auto Parts Sunumu" alt="Parçadolu Premium AUTO PARTS siyah podyum üzerinde açılı laptop web sitesi mockup" />
          <CanvasImage src={ParcadoluMain8} x={38} y={3332} w={1364.17} h={1344} title="Parçadolu - Oto Yedek Parça Ürün Kartları Kompozisyonu" alt="Parçadolu buji, yağ tenekesi, filtreler, Black Friday fren balataları ve ampul ürün kartları" />
          <CanvasImage src={ParcadoluMain9} x={81} y={4736} w={1261} h={1027} title="Parçadolu - Işıklı Neon Duvar Tabelası" alt="Parçadolu kırmızı ve gece mavisi duvara monte sarı neon ışıklı pd amblemi tabela sunumu" />
          <CanvasImage src={ParcadoluMain1} x={0} y={810} w={1440} h={957} eager title="Parçadolu - Masaüstü Web Arayüzü & Laptop Mockup" alt="Parçadolu e-ticaret web sitesi arayüzü lastik üzerinde laptop mockup sunumu" />
        </DesignCanvas>

        <ProjectCredits
          title="Parçadolu"
          description="Otomotiv yedek parça sektörü için geliştirilen modern e-ticaret web platformu, mobil uygulama arayüzü (UI/UX), 3D ikonografi, ürün fotoğrafçılığı ve kurumsal marka kimliği tasarımı."
          className="mt-6"
        />
      </main>

      {/* Lightbox Modal */}
      <ImageLightbox image={selectedImage} onClose={closeLightbox} />

      {/* Floating Scroll to Top Button */}
      <ScrollTopButton colorClassName="bg-[#F26522] hover:bg-[#D95314]" />
    </div>
  );
};

export default Parcadolu;
