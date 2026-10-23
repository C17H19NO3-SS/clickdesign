import React from "react";
import { Link } from "react-router";
import { AnimatedImage as BaseAnimatedImage, ScrollTopButton, zoomable, ImageLightbox, useLightbox, useDocumentTitle } from "@/Components/ProjectShowcase";
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

// Bu sayfanın görsel animasyon ayarları
const AnimatedImage: React.FC<React.ComponentProps<typeof BaseAnimatedImage>> = (props) => (
  <BaseAnimatedImage skeletonClassName="bg-neutral-200/50" clip={false} {...props} />
);

type SelectedImage = { src: string; title: string } | null;
const SelectImageContext = React.createContext<(img: SelectedImage) => void>(() => { });

// Tıklanabilir (lightbox) görsel yardımcı bileşeni
const Zoomable = ({
  id,
  src,
  title,
  alt,
  className = "",
  imgClassName = "",
  eager = false,
}: {
  id: string;
  src: string;
  title: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) => {
  const select = React.useContext(SelectImageContext);
  return (
    <div
      id={`${id}-wrapper`}
      {...zoomable(() => select({ src, title }))}
      className={`cursor-zoom-in group ${className}`}
    >
      <AnimatedImage
        id={`${id}-image`}
        src={src}
        alt={alt}
        wrapperClassName="w-full"
        className={`select-none object-cover group-hover:brightness-105 transition-all duration-300 ${imgClassName}`}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
};

export const Blavi = () => {
  const { selectedImage, setSelectedImage, close: closeLightbox } = useLightbox();
  useDocumentTitle("Blavi - Marka Kimliği & Mobil Market Deneyimi | Click Design Studio");

  return (
    <SelectImageContext.Provider value={setSelectedImage}>
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

        <main className="blavi-page w-full flex flex-col items-center overflow-x-hidden">
          {/* Hero + hero'nun alt kenarına ortalanan kayan band */}
          <div className="relative w-full max-w-[1440px]">
            <header
              id="blavi-hero-section"
              {...zoomable(() => setSelectedImage({ src: BlaviHero, title: "Blavi - Logo & Scooter Hero" }))}
              className="w-full bg-white cursor-zoom-in group"
            >
              <h1 className="sr-only">Blavi - Marka Kimliği ve Mobil Market Deneyimi</h1>
              <AnimatedImage
                id="blavi-hero-image"
                src={BlaviHero}
                alt="Blavi turuncu zemin üzerinde logo ve teslimat scooter'ı"
                wrapperClassName="w-full"
                className="object-cover select-none group-hover:brightness-105 transition-all duration-300"
                fetchPriority="high"
                decoding="sync"
              />
            </header>

            {/* Band: orijinal eğimle (≈7.77°) sonsuz kayan marquee. Kayma, şeridin eğim yönünde olur. */}
            <section id="blavi-band-section" aria-label="Social Media, Logo, Branding, Print, User Interface" className="absolute left-0 top-full -translate-y-[55%] w-full aspect-[1440/356] z-10 pointer-events-none overflow-hidden">
              <div
                className="absolute overflow-hidden bg-[#F21414]"
                style={{
                  left: "-2.7098%",
                  top: "67.5562%",
                  width: "123.6038%",
                  height: "32.5843%",
                  transformOrigin: "0 0",
                  transform: "rotate(-7.7656deg)",
                }}
              >
                <div className="blavi-marquee-track flex h-full w-[200%]">
                  <img src={BlaviBandLoop} alt="" aria-hidden="true" draggable={false} className="h-full w-1/2 select-none" loading="eager" decoding="async" />
                  <img src={BlaviBandLoop} alt="" aria-hidden="true" draggable={false} className="h-full w-1/2 select-none" loading="eager" decoding="async" />
                </div>
              </div>
            </section>
          </div>

          {/* Dış mekan: durak + billboard */}
          <section id="blavi-outdoor-section" aria-label="Blavi Dış Mekan Uygulamaları" className="w-full max-w-[1440px] flex flex-col sm:flex-row bg-black">
            <Zoomable
              id="blavi-main1"
              src={BlaviMain1}
              title="Blavi - Durak Afişi"
              alt="Gece otobüs durağında Blavi afişi"
              className="w-full sm:w-[50.3%]"
              imgClassName="w-full"
            />
            <Zoomable
              id="blavi-main2"
              src={BlaviMain2}
              title="Blavi - Billboard"
              alt="Şehir meydanında Blavi billboard tasarımı"
              className="w-full sm:w-[49.7%]"
              imgClassName="w-full"
            />
          </section>

          {/* Koyu ekran */}
          <section id="blavi-screen-section" aria-label="Blavi Dijital Ekran" className="w-full max-w-[1440px] bg-black">
            <Zoomable
              id="blavi-main3"
              src={BlaviMain3}
              title="Blavi - Dijital Ekran Afişi"
              alt="Koyu panel üzerinde Blavi dijital ekran afişi"
              eager
            />
          </section>

          {/* Turuncu: yüzen broşür */}
          <section id="blavi-flyer-section" aria-label="Blavi Broşür Tasarımı" className="w-full max-w-[1440px] bg-[#F95A0A]">
            <Zoomable
              id="blavi-main4"
              src={BlaviMain4}
              title="Blavi - Broşür Tasarımı"
              alt="Turuncu zeminde havada duran Blavi broşürleri"
            />
          </section>

          {/* Kartvizit + asma etiket */}
          <section
            id="blavi-print-section"
            aria-label="Blavi Kartvizit ve Asma Etiket"
            className="w-full max-w-[1440px] flex flex-col sm:flex-row sm:items-start gap-[2.7%] px-[3.1%] pb-[2.5%] bg-white relative h-160"
            style={{ backgroundImage: "linear-gradient(#F95A0A 0 14px, #fff 14px)", paddingTop: "14px" }}
          >
            <Zoomable
              id="blavi-main5"
              src={BlaviMain5}
              title="Blavi - Kartvizit"
              alt="Blavi turuncu kartvizit destesi"
              className="w-full sm:w-[60.1%] absolute -top-4"
              imgClassName="w-full"
            />
            <Zoomable
              id="blavi-main6"
              src={BlaviMain6}
              title="Blavi - Asma Etiket"
              alt="Metal yüzeyde Blavi asma etiket"
              className="w-full sm:w-[31.2%] absolute -top-4 right-10"
              imgClassName="w-full"
            />
          </section>

          {/* İkon seti + renk paleti */}
          <section id="blavi-icons-section" aria-label="Blavi İkon Seti ve Renk Paleti" className="w-full max-w-[1440px] bg-white py-12 sm:py-20 px-4 flex flex-col items-center gap-10 sm:gap-14">
            <Zoomable
              id="blavi-main7"
              src={BlaviMain7}
              title="Blavi - İkon Seti"
              alt="Blavi çizgi ikon seti: market, teslimat, ödeme ve konum ikonları"
              className="w-full max-w-[1188px]"
              imgClassName="w-full object-contain"
            />
            <Zoomable
              id="blavi-main8"
              src={BlaviMain8}
              title="Blavi - Renk Paleti"
              alt="Blavi marka renk paleti: turuncu, sarı, açık gri ve lacivert"
              className="w-full max-w-[770px]"
              imgClassName="w-full object-contain"
            />
          </section>

          {/* Turuncu: yatay broşürler */}
          <section id="blavi-flyer2-section" aria-label="Blavi Kampanya Broşürleri" className="w-full max-w-[1440px] bg-[#E2540C]">
            <Zoomable
              id="blavi-main9"
              src={BlaviMain9}
              title="Blavi - Kampanya Broşürleri"
              alt="Turuncu zeminde Blavi kampanya broşürleri"
            />
          </section>

          {/* Mavi: web & mobil arayüz */}
          <section id="blavi-ui-section" aria-label="Blavi Web ve Mobil Arayüz" className="w-full max-w-[1440px] bg-[#002250]">
            <Zoomable
              id="blavi-main10"
              src={BlaviMain10}
              title="Blavi - Web & Mobil Arayüz Tasarımı"
              alt="Mavi koltuk önünde laptop ve telefon ekranlarında Blavi arayüz tasarımı"
            />
          </section>

          {/* Amasya + mağaza */}
          <section id="blavi-store-section" aria-label="Blavi Mağaza Uygulaması" className="w-full max-w-[1440px] bg-white relative flex flex-col items-center -mt-px">
            {/* Yazı mavi/beyaz sınırının tam ortasında durur */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[47.8%] max-w-[688px] z-10 pointer-events-none">
              <AnimatedImage
                id="blavi-text-image"
                src={BlaviText}
                alt="Amasya"
                wrapperClassName="w-full"
                className="select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Ağaç yazının altına girecek şekilde yukarı çekilir */}
            <Zoomable
              id="blavi-main11"
              src={BlaviMain11}
              title="Blavi - Mağaza Uygulaması"
              alt="Blavi turuncu tabelalı market mağazası ve scooter 3D görseli"
              className="w-[92%] mt-1 mb-[3%] z-50"
              imgClassName="w-full object-contain"
            />
          </section>

          {/* Sosyal medya & ürün grid */}
          <section id="blavi-grid-section" aria-label="Blavi Sosyal Medya ve Ürün Görselleri" className="w-full max-w-[1440px] bg-white grid grid-cols-2 gap-[2.5%] px-[2.5%] pb-[2.5%]">
            <Zoomable id="blavi-main12" src={BlaviMain12} title="Blavi - Mobil Uygulama" alt="Taş yüzeyde duran telefonda Blavi uygulaması" className="rounded-2xl overflow-hidden" imgClassName="w-full" />
            <Zoomable id="blavi-main13" src={BlaviMain13} title="Blavi - Sosyal Medya Postları" alt="Blavi turuncu sosyal medya post tasarımları" className="rounded-2xl overflow-hidden" imgClassName="w-full" />
            <Zoomable id="blavi-main14" src={BlaviMain14} title="Blavi - 3D Uygulama İkonu" alt="Blavi 3D parlak uygulama ikonu" className="rounded-2xl overflow-hidden" imgClassName="w-full" />
            <Zoomable id="blavi-main15" src={BlaviMain15} title="Blavi - Web Sitesi" alt="Koyu zeminde laptop üzerinde Blavi web sitesi" className="rounded-2xl overflow-hidden" imgClassName="w-full" />
          </section>

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
    </SelectImageContext.Provider>
  );
};

export default Blavi;
