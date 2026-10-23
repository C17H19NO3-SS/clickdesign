import React, { useEffect } from "react";
import { Link } from "react-router";
import { AnimatedImage as BaseAnimatedImage, ScrollTopButton, zoomable, ImageLightbox, useLightbox, useDocumentTitle } from "@/Components/ProjectShowcase";
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

// Bu sayfanın görsel animasyon ayarları
const AnimatedImage: React.FC<React.ComponentProps<typeof BaseAnimatedImage>> = (props) => (
  <BaseAnimatedImage skeletonClassName="bg-[#F5EDF3]" hiddenClassName="opacity-0 translate-y-6 scale-[0.98] blur-[1px]" rootMargin="0px 0px -30px 0px" {...props} />
);

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
      <main className="w-full flex flex-col items-center overflow-x-hidden">
        {/* Section 1: Hero Banner (Dark Burgundy/Plum Gradient with centered TwoShine wordmark & sparkle emblem) */}
        <header
          id="twoshine-hero-section"
          {...zoomable(() =>
            setSelectedImage({
              src: TwoShineHero,
              title: "TwoShine - Kurumsal Logo & Hero Tasarımı",
            })
          )}
          className="w-full max-w-[1440px] flex justify-center bg-[#1D121B] cursor-zoom-in group shadow-xs relative z-0"
        >
          <h1 className="sr-only">TwoShine - Kozmetik ve Cilt Bakımı Marka Kimliği Tasarımı</h1>
          <AnimatedImage
            id="twoshine-hero-image"
            src={TwoShineHero}
            alt="TwoShine koyu bordo zemin üzerinde pembe logo ve amblem hero sunumu"
            wrapperClassName="w-full max-w-[1440px]"
            className="w-full h-auto object-cover select-none group-hover:brightness-105 transition-all duration-300"
            fetchPriority="high"
            decoding="sync"
          />
        </header>

        {/* Section 2: Products on Stone Counter + Pink Arch Emblem Card */}
        <section
          id="twoshine-products-arch-section"
          aria-label="TwoShine Ürün Serisi ve Amblem Kartı"
          className="w-full max-w-[1440px] relative z-10 -mt-10 -mt-15 px-4 sm:px-8 md:px-12 flex justify-center"
        >
          <div className="w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-12 gap-0 items-start">
            {/* Left Card: TwoShineMain1 (Bottles on Stone Counter) - Overlaps Hero, underneath Arch Card */}
            <div
              id="twoshine-products-card"
              {...zoomable(() =>
                setSelectedImage({
                  src: TwoShineMain1,
                  title: "TwoShine - Vücut Losyonu ve Yüz Kremi Doğal Taş Sahnesi",
                })
              )}
              className="md:col-span-8 relative z-10 rounded-3xl sm:rounded-4xl md:rounded-[40px] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 cursor-zoom-in"
            >
              <AnimatedImage
                id="twoshine-main1-image"
                src={TwoShineMain1}
                alt="TwoShine vücut losyonu şişesi ve yüz kremi kavanozu doğal taş tezgah üzerinde okaliptüs dalı ile"
                wrapperClassName="w-full"
                className="w-full h-auto object-cover select-none"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Right Card: TwoShineMain2 (Pink Card with Star/Arch) - Overlaps Left Card on Top (z-20) */}
            <div
              id="twoshine-arch-card"
              {...zoomable(() =>
                setSelectedImage({
                  src: TwoShineMain2,
                  title: "TwoShine - Amblem & Monogram Kartı",
                })
              )}
              className="md:col-span-4 w-full max-w-[340px] mx-auto md:max-w-none md:mx-0 -mt-6 sm:-mt-10 md:mt-24 lg:mt-32 xl:mt-36 md:-ml-8 lg:-ml-12 xl:-ml-16 relative z-20 rounded-3xl sm:rounded-4xl md:rounded-[40px] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 cursor-zoom-in bg-[#D08BBD]"
            >
              <AnimatedImage
                id="twoshine-main2-image"
                src={TwoShineMain2}
                alt="TwoShine pembe zeminli oval kemer içerisindeki siyah amblem kartı"
                wrapperClassName="w-full"
                className="w-full h-auto object-contain select-none block"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Luxury Gift Box with Floating Cream Swatch */}
        <section
          id="twoshine-giftbox-section"
          aria-label="TwoShine Özel Hediye Kutusu ve Krem Dokusu"
          className="w-full max-w-[1440px] bg-white pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-14 md:pb-18 px-4 sm:px-8 md:px-12 flex justify-center"
        >
          <div className="w-full max-w-[1240px] relative">
            {/* Floating Cream Texture Swatch (TwoShineMain3) Overlapping Top-Left */}
            <div
              id="twoshine-cream-swatch"
              {...zoomable(() =>
                setSelectedImage({
                  src: TwoShineMain3,
                  title: "TwoShine - Yoğun Nemlendirici Krem Dokusu Swatch",
                })
              )}
              className="absolute -top-6 -left-2 sm:-top-10 sm:-left-4 md:-top-14 md:-left-6 z-20 w-28 sm:w-44 md:w-56 cursor-zoom-in hover:scale-105 transition-transform duration-300 drop-shadow-xl"
              title="Krem Dokusunu Yakından İncele"
            >
              <img
                src={TwoShineMain3}
                alt="TwoShine kadifemsi nemlendirici krem fırça darbesi doku görseli"
                className="w-full h-auto object-contain select-none"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Gift Box Card (TwoShineMain4) */}
            <div
              id="twoshine-giftbox-card"
              {...zoomable(() =>
                setSelectedImage({
                  src: TwoShineMain4,
                  title: "TwoShine - Lüks Hediye Kutusu ve Ambalaj Seti",
                })
              )}
              className="w-full rounded-3xl sm:rounded-4xl md:rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-zoom-in bg-[#CDBAB8]"
            >
              <AnimatedImage
                id="twoshine-main4-image"
                src={TwoShineMain4}
                alt="TwoShine mat siyah hediye kutusu içinde sünger yuvalı losyon ve krem seti"
                wrapperClassName="w-full"
                className="w-full h-auto object-cover select-none group-hover:scale-[1.01] transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Section 4: Full-Width Crystal Perfume Bottle with Prismatic Caustic Reflections */}
        <section
          id="twoshine-crystal-bottle-section"
          aria-label="TwoShine Kristal Cam Şişe ve Işık Kırılmaları"
          {...zoomable(() =>
            setSelectedImage({
              src: TwoShineMain5,
              title: "TwoShine - Kristal Parfüm Şişesi ve Prizmatik Işık Yansımaları",
            })
          )}
          className="w-full max-w-[1440px] flex justify-center bg-[#813369] cursor-zoom-in group shadow-xs overflow-hidden"
        >
          <AnimatedImage
            id="twoshine-main5-image"
            src={TwoShineMain5}
            alt="TwoShine fasetli kristal parfüm şişesi mor saten zemin üzerinde ışık kırılmaları ve gölgeler"
            wrapperClassName="w-full max-w-[1440px]"
            className="w-full h-auto object-cover select-none group-hover:scale-[1.01] transition-transform duration-700"
            loading="lazy"
            decoding="async"
          />
        </section>

        {/* Section 5: Minimal Body Lotion Bottle + 2x3 Icon & Brand Color Grid */}
        <section
          id="twoshine-bottle-icons-section"
          aria-label="Vücut Losyonu Ambalajı ve Marka İkonografi Varyasyonları"
          className="w-full max-w-[1440px] bg-white py-12 sm:py-18 md:py-24 px-4 sm:px-8 md:px-12 flex justify-center"
        >
          <div className="w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
            {/* Left: Pump Bottle */}
            <div
              id="twoshine-lotion-bottle"
              {...zoomable(() =>
                setSelectedImage({
                  src: TwoShineMain6,
                  title: "TwoShine - Vücut Losyonu 100ml Şişe Tasarımı",
                })
              )}
              className="md:col-span-5 flex justify-center items-center cursor-zoom-in hover:scale-[1.02] transition-transform duration-500"
            >
              <AnimatedImage
                id="twoshine-main6-image"
                src={TwoShineMain6}
                alt="TwoShine 100ml Soften & Renew siyah mat pompalı vücut losyonu şişesi stüdyo sunumu"
                wrapperClassName="w-full max-w-[380px]"
                className="w-full h-auto object-contain select-none"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right: 2x3 Icon Matrix */}
            <div
              id="twoshine-icons-matrix"
              {...zoomable(() =>
                setSelectedImage({
                  src: TwoShineMain7,
                  title: "TwoShine - Marka Renk Paleti ve Amblem Varyasyonları Matrisi",
                })
              )}
              className="md:col-span-7 flex justify-center items-center cursor-zoom-in hover:scale-[1.02] transition-transform duration-500"
            >
              <AnimatedImage
                id="twoshine-main7-image"
                src={TwoShineMain7}
                alt="TwoShine kurumsal renk tonlarında 6 farklı amblem ve ikon varyasyon matrisi"
                wrapperClassName="w-full max-w-[620px]"
                className="w-full h-auto object-contain select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Section 6: Model Face Mist Spray + Skincare Dual-Icon Card */}
        <section
          id="twoshine-model-pictograms-section"
          aria-label="Model Kampanya Görseli ve Cilt Bakım Piktogramları"
          className="w-full max-w-[1440px] bg-white pb-16 sm:pb-24 px-4 sm:px-8 md:px-12 flex justify-center"
        >
          <div className="w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-stretch">
            {/* Left: Model Spraying Mist */}
            <div
              id="twoshine-model-card"
              {...zoomable(() =>
                setSelectedImage({
                  src: TwoShineMain8,
                  title: "TwoShine - Kampanya Görseli: Işıltılı Yüz Spreyi ve Ferahlatıcı Sis",
                })
              )}
              className="md:col-span-8 rounded-3xl sm:rounded-4xl md:rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-zoom-in bg-[#4F1A3A] flex items-center justify-center"
            >
              <AnimatedImage
                id="twoshine-main8-image"
                src={TwoShineMain8}
                alt="TwoShine mor elbiseli zarif model ışıltılı yüz spreyi uygularken ışıltı partikülleri sahnesi"
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover select-none"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right: Skincare Pictograms Card (TwoShineMainBG1 style card with TwoShineMain9 & TwoShineMain10) */}
            <div
              id="twoshine-pictograms-card"
              className="md:col-span-4 rounded-3xl sm:rounded-4xl md:rounded-[40px] bg-[#D08BBD] p-6 sm:p-8 md:p-10 flex flex-col items-center justify-between shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Top Icon: Skincare Dropper & Face */}
              <div
                id="twoshine-icon-dropper"
                {...zoomable(() =>
                  setSelectedImage({
                    src: TwoShineMain9,
                    title: "TwoShine İkonografi - Serum & Damlalık ile Cilt Bakım Rutini",
                  })
                )}
                className="flex-1 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300 cursor-zoom-in w-full max-w-[220px]"
                title="Serum İkonunu Büyüt"
              >
                <img
                  src={TwoShineMain9}
                  alt="TwoShine damlalık ve serum ile cilt bakım rutini çizgi piktogramı"
                  className="w-full max-h-[170px] object-contain select-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Dashed Divider Line */}
              <div className="w-3/4 border-t-2 border-dashed border-white/60 my-4 sm:my-6" />

              {/* Bottom Icon: Open Cream Jar */}
              <div
                id="twoshine-icon-jar"
                {...zoomable(() =>
                  setSelectedImage({
                    src: TwoShineMain10,
                    title: "TwoShine İkonografi - Açık Kapaklı Nemlendirici Krem Kavanozu",
                  })
                )}
                className="flex-1 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300 cursor-zoom-in w-full max-w-[220px]"
                title="Krem Kavanozu İkonunu Büyüt"
              >
                <img
                  src={TwoShineMain10}
                  alt="TwoShine açık kapaklı nemlendirici yüz kremi kavanozu çizgi piktogramı"
                  className="w-full max-h-[170px] object-contain select-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Project Details & Agency Footer */}
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
