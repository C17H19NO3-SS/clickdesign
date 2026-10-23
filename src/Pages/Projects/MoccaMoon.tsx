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

export const MoccaMoon = () => {
  const { selectedImage, setSelectedImage, close: closeLightbox } = useLightbox();
  useDocumentTitle("Mocca Moon Coffee - Ambalaj Tasarımı | Click Design Studio");

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
      <main className="w-full flex flex-col items-center">
        <h1 className="sr-only">Mocca Moon Coffee - Premium Ambalaj ve Marka Kimliği Tasarımı</h1>
        {/* Figma "Mocca Moon" frame'i: 1440×9744 tasarım tuvali, ekran genişliğine oranlı */}
        <DesignCanvas height={9744} onOpen={setSelectedImage} imageProps={{ threshold: 0.12 }}>
          <CanvasImage src={MoccaMoonHero} x={0} y={0} w={1440} h={810} eager alt="Mocca Moon Coffee - Kahve çekirdekleri çerçevesinde marka logosu" />
          <CanvasImage src={MoccaMoonCoffeePocket} x={0} y={810} w={1440} h={1562} alt="Mocca Moon aromatik tek köken kahve paketleri dinamik yerleşim" />
          <CanvasImage src={MoccaMoonCoffePocketMini1} x={184} y={2247} w={1072} h={911} title="Colombia Single Origin" alt="Mocca Moon Colombia Single Origin Kahve Paketi" />
          <CanvasImage src={MoccaMoonCoffePocketMini2} x={115} y={3237} w={1211} h={830} title="Ethiopia Single Origin" alt="Mocca Moon Ethiopia Single Origin Kahve Paketi ve Kahve Yaprakları" />
          <CanvasImage src={MoccaMoonCoffePocketMini3} x={171} y={4118} w={1106} h={834} title="Sumatra Single Origin" alt="Mocca Moon Sumatra Single Origin Kahve Paketi ve Özel Pul Çerçevesi" />
          <CanvasImage src={MoccaMoonCoffePocketMini4} x={84} y={5031} w={1356} h={803} title="Guatemala Single Origin" alt="Mocca Moon Guatemala Single Origin Kahve Paketi ve Tipografi Kompozisyonu" />
          <CanvasImage src={MoccaMoonCoffeePocket4Pocket} x={65} y={5973} w={1375} h={516} title="Mocca Moon 4 Origin Paketi Yan Yana" alt="Mocca Moon 4 Paket Yan Yana Koleksiyon Gösterimi" />
          <CanvasImage src={MoccaMoonCoffeeGlas} x={202} y={6628} w={1120} h={429} title="Mocca Moon Emaye Kahve Kupası" alt="Mocca Moon Logolu Emaye Kahve Kupası" />
          <CanvasImage src={MoccaMoonFooter1} x={34} y={7150} w={675} h={743} title="Portakal & Bitter Çikolata Nüanslı Kahve" alt="Mocca Moon Portakal ve Bitter Çikolata Notalı Kahve Paketi" />
          <CanvasImage src={MoccaMoonFooter2} x={731} y={7150} w={675} h={830} title="Kırmızı Orman Meyveleri Nüanslı Kahve" alt="Mocca Moon Orman Meyveleri Notalı Kahve Paketi" />
          <CanvasImage src={MoccaMoonFooter3} x={32} y={7968} w={676} h={773} title="Özel Kavrum Öğütülmüş Kahve Serisi" alt="Mocca Moon Özel Kavrum Öğütülmüş Kahve Paketi Mandala Motifli Çerçeve" />
          <CanvasImage src={MoccaMoonFooter4} x={731} y={7968} w={676} h={773} title="Yoğun Espresso Kavrumu Kahve Serisi" alt="Mocca Moon Koyu Kavrum Espresso Kahve Paketi Koyu Mandala Motifli Çerçeve" />
          <CanvasImage src={MoccaMoonFooter5} x={32} y={8816} w={676} h={742} title="Taze Çilek Nüanslı Tatlı Kahve Harmanı" alt="Mocca Moon Çilek Notalı Tatlı Kahve Paketi" />
          <CanvasImage src={MoccaMoonFooter6} x={730} y={8816} w={676} h={730} title="Yoğun Kakao & Çikolata Nüanslı Kahve" alt="Mocca Moon Kakao Çekirdekli Çikolata Notalı Kahve Paketi" />
        </DesignCanvas>

        <ProjectCredits
          title="Mocca Moon Coffee"
          description="Tek kökenli kahveler ve özel aromatik harmanlar için tasarlanan özgün ambalaj mimarisi, tipografi ve illüstrasyon dili."
        />
      </main>

      {/* Lightbox Modal */}
      <ImageLightbox image={selectedImage} onClose={closeLightbox} />

      {/* Floating Scroll to Top Button */}
      <ScrollTopButton colorClassName="bg-[#1A1A1A] hover:bg-[#5C8D4B]" />
    </div>
  );
};

export default MoccaMoon;
