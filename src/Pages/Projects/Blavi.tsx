import React from "react";
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
import BlaviHero from "@/Resources/Projects/Blavi.svg/BlaviHero.svg";
import BlaviBandLoop from "@/Resources/Projects/Blavi.svg/BlaviBandLoop.svg";
import BlaviText from "@/Resources/Projects/Blavi.svg/BlaviText.svg";
import BlaviMain1 from "@/Resources/Projects/Blavi.svg/BlaviMain1.svg";
import BlaviMain2 from "@/Resources/Projects/Blavi.svg/BlaviMain2.svg";
import BlaviMain3 from "@/Resources/Projects/Blavi.svg/BlaviMain3.svg";
import BlaviMain4 from "@/Resources/Projects/Blavi.svg/BlaviMain4.svg";
import BlaviMain5 from "@/Resources/Projects/Blavi.svg/BlaviMain5.svg";
import BlaviMain6 from "@/Resources/Projects/Blavi.svg/BlaviMain6.svg";
import BlaviMain7 from "@/Resources/Projects/Blavi.svg/BlaviMain7.svg";
import BlaviMain8 from "@/Resources/Projects/Blavi.svg/BlaviMain8.svg";
import BlaviMain9 from "@/Resources/Projects/Blavi.svg/BlaviMain9.svg";
import BlaviMain10 from "@/Resources/Projects/Blavi.svg/BlaviMain10.svg";
import BlaviMain11 from "@/Resources/Projects/Blavi.svg/BlaviMain11.svg";
import BlaviMain12 from "@/Resources/Projects/Blavi.svg/BlaviMain12.svg";
import BlaviMain13 from "@/Resources/Projects/Blavi.svg/BlaviMain13.svg";
import BlaviMain14 from "@/Resources/Projects/Blavi.svg/BlaviMain14.svg";
import BlaviMain15 from "@/Resources/Projects/Blavi.svg/BlaviMain15.svg";

const ACCENT = "#FD4B04";

export const Blavi = () => {
  const { selectedImage, setSelectedImage, close: closeLightbox } = useLightbox();
  useDocumentTitle("Blavi - Marka Kimliği & Mobil Market Deneyimi | Click Design Studio");

  return (
      <div
        className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] flex flex-col items-center selection:text-white"
        style={{ ["--blavi" as string]: ACCENT }}
      >
        <style>{`.blavi-page ::selection{background:${ACCENT};color:#fff}
@keyframes blavi-marquee{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
.blavi-marquee-track{animation:blavi-marquee 28s linear infinite;will-change:transform}
@media (prefers-reduced-motion:reduce){.blavi-marquee-track{animation:none}}`}</style>

        {/* Top Breadcrumb & Project Info Bar */}
        <nav aria-label="Proje Detay Navigasyonu" className="w-full max-w-[1440px] px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100">
          <Link
            to="/projects"
            id="blavi-back-link"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-600 hover:text-[#FD4B04] transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Tüm Projeler
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FFEDE5] text-[#FD4B04] uppercase tracking-wider">
              Marka Kimliği
            </span>
            <span className="text-xs text-neutral-400 font-medium">Blavi &copy; 2024</span>
          </div>
        </nav>

        <main className="blavi-page w-full flex flex-col items-center">
          <h1 className="sr-only">Blavi - Marka Kimliği ve Mobil Market Deneyimi</h1>
          {/* Figma "Work-Blavi" frame'i: 1440×11023 tasarım tuvali, ekran genişliğine oranlı */}
          <DesignCanvas height={11023} onOpen={setSelectedImage} imageProps={{ skeletonClassName: "bg-neutral-200/50", clip: false }}>
            <CanvasImage src={BlaviHero} x={0} y={0} w={1440} h={810} eager title="Blavi - Logo & Scooter Hero" alt="Blavi turuncu zemin üzerinde logo ve teslimat scooter'ı" />
            <CanvasImage src={BlaviMain1} x={0} y={810} w={724} h={1084} title="Blavi - Durak Afişi" alt="Gece otobüs durağında Blavi afişi" />
            <CanvasImage src={BlaviMain2} x={724} y={810} w={716} h={1084} title="Blavi - Billboard" alt="Şehir meydanında Blavi billboard tasarımı" />
            <CanvasImage src={BlaviMain9} x={0} y={5445} w={1440} h={1154} title="Blavi - Kampanya Broşürleri" alt="Turuncu zeminde Blavi kampanya broşürleri" />
            <CanvasImage src={BlaviMain7} x={126} y={4520} w={1188} h={533} title="Blavi - İkon Seti" alt="Blavi çizgi ikon seti: market, teslimat, ödeme ve konum ikonları" />
            <CanvasImage src={BlaviMain4} x={0} y={2700} w={1440} h={1080} title="Blavi - Broşür Tasarımı" alt="Turuncu zeminde havada duran Blavi broşürleri" />
            <CanvasImage src={BlaviMain5} x={43} y={3710} w={866} h={673} radius={30} title="Blavi - Kartvizit" alt="Blavi turuncu kartvizit destesi" />
            <CanvasImage src={BlaviMain6} x={948} y={3710} w={449} h={673} radius={30} title="Blavi - Asma Etiket" alt="Metal yüzeyde Blavi asma etiket" />
            <CanvasImage src={BlaviMain10} x={0} y={6599} w={1440} h={1814} title="Blavi - Web & Mobil Arayüz Tasarımı" alt="Mavi koltuk önünde laptop ve telefon ekranlarında Blavi arayüz tasarımı" />
            <CanvasImage src={BlaviMain12} x={44} y={9246} w={659} h={824} radius={30} title="Blavi - Mobil Uygulama" alt="Taş yüzeyde duran telefonda Blavi uygulaması" />
            <CanvasImage src={BlaviMain13} x={738} y={9246} w={659} h={824} radius={30} title="Blavi - Sosyal Medya Postları" alt="Blavi turuncu sosyal medya post tasarımları" />
            <CanvasImage src={BlaviMain14} x={44} y={10112} w={659} h={824} radius={30} title="Blavi - 3D Uygulama İkonu" alt="Blavi 3D parlak uygulama ikonu" />
            <CanvasImage src={BlaviMain15} x={738} y={10112} w={659} h={824} radius={30} title="Blavi - Web Sitesi" alt="Koyu zeminde laptop üzerinde Blavi web sitesi" />
            <CanvasImage src={BlaviMain8} x={335} y={5132} w={770} h={155} title="Blavi - Renk Paleti" alt="Blavi marka renk paleti: turuncu, sarı, açık gri ve lacivert" />
            <CanvasImage src={BlaviText} x={376} y={8337} w={688} h={121} alt="Amasya" />
            <CanvasImage src={BlaviMain11} x={138} y={8424} w={1163} h={771} title="Blavi - Mağaza Uygulaması" alt="Blavi turuncu tabelalı market mağazası ve scooter 3D görseli" />
            {/* Kayan band (Figma: -7.49° eğimli, 1794.87×122.57 şerit) */}
            <Placed x={-55} y={683} w={1795.53} h={355.5} aria-label="Social Media, Logo, Branding, Print, User Interface" className="pointer-events-none">
              <div
                className="absolute left-1/2 top-1/2 overflow-hidden bg-[#F21414]"
                style={{ width: "99.963%", height: "34.479%", transform: "translate(-50%, -50%) rotate(-7.49deg)" }}
              >
                <div className="blavi-marquee-track flex h-full w-[200%]">
                  <img src={BlaviBandLoop} alt="" aria-hidden="true" draggable={false} className="h-full w-1/2 select-none" loading="eager" decoding="async" />
                  <img src={BlaviBandLoop} alt="" aria-hidden="true" draggable={false} className="h-full w-1/2 select-none" loading="eager" decoding="async" />
                </div>
              </div>
            </Placed>
            <CanvasImage src={BlaviMain3} x={0} y={1891} w={1440} h={810} title="Blavi - Dijital Ekran Afişi" alt="Koyu panel üzerinde Blavi dijital ekran afişi" />
          </DesignCanvas>

          <ProjectCredits
            title="Blavi"
            description="Mahalle marketlerini kapıya getiren hızlı alışveriş uygulaması Blavi için tasarlanan logo, marka kimliği, dış mekan, basılı ve dijital arayüz çalışmaları."
          />
        </main>

        {/* Lightbox Modal */}
        <ImageLightbox image={selectedImage} onClose={closeLightbox} overlayClassName="z-100 bg-black/80" />

        {/* Floating Scroll to Top Button */}
        <ScrollTopButton colorClassName="bg-[#FD4B04] hover:bg-[#D93D00]" id="blavi-scroll-top-btn" />
      </div>
  );
};

export default Blavi;
