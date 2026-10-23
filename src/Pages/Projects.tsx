import React from "react";
import { Link } from "react-router";
import ArrowDown from "@/Resources/Arrows/Down.svg";
import ClickDesignStudio from "@/Resources/HomePage/ClickDesignStudio.svg";
import { BrandProjectInquiry } from "@/Components/Form/Form";

// Proje Hero Kapak Görselleri
import MoccaMoonHero from "@/Resources/Projects/MoccaMoon.svg/MoccaMoonHero.svg";
import HypeHero from "@/Resources/Projects/Hype.svg/HypeHero.svg";
import TTopicHero from "@/Resources/Projects/T-Topic.svg/T-TopicHero.svg";
import CMDHero from "@/Resources/Projects/CMD-Aluminyum/CMDHero.svg";
import ParcadoluHero from "@/Resources/Projects/Parcadolu.svg/ParcadoluHero.svg";
import TwoShineHero from "@/Resources/Projects/TwoShine.svg/TwoShineHero.svg";
import KSKStoreHero from "@/Resources/Projects/KSKStore.svg/KSKStoreHero.svg";
import BlaviHero from "@/Resources/Projects/Blavi.svg/BlaviHero.svg";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  link: string;
  image: string;
  aspect: string;
  color: string;
  bgColor: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "blavi",
    title: "Blavi",
    subtitle: "Mahalle Marketi & Hızlı Teslimat",
    tags: ["Logo", "Dış Mekan", "Mobil Arayüz"],
    link: "/projects/blavi",
    image: BlaviHero,
    aspect: "aspect-[16/9]",
    color: "#FD4B04",
    bgColor: "#FFF3EC",
  },
  {
    id: "kskstore",
    title: "KSK Store",
    subtitle: "1912 & Kaf-Kaf Mirası",
    tags: ["Spor Kulübü", "3D Görselleştirme", "Ürün Koleksiyonu"],
    link: "/projects/kskstore",
    image: KSKStoreHero,
    aspect: "aspect-[16/9]",
    color: "#E11D2A",
    bgColor: "#FFF5F5",
  },
  {
    id: "ttopic",
    title: "Ti-Potic (T-Topic)",
    subtitle: "Bebek & Çocuk Patikleri",
    tags: ["Katalog", "Kreatif Sahneleme", "Marka Kimliği"],
    link: "/projects/ttopic",
    image: TTopicHero,
    aspect: "aspect-[16/9]",
    color: "#C26B5C",
    bgColor: "#FAF4F2",
  },
  {
    id: "twoshine",
    title: "TwoShine",
    subtitle: "Dermokozmetik & Lüks Cilt Bakımı",
    tags: ["3D Render", "Kozmetik", "Lüks Ambalaj"],
    link: "/projects/twoshine",
    image: TwoShineHero,
    aspect: "aspect-[16/9]",
    color: "#8E3E6F",
    bgColor: "#FDF5FA",
  },
  {
    id: "moccamoon",
    title: "Mocca Moon",
    subtitle: "Tek Kökenli Nitelikli Kahve Deneyimi",
    tags: ["Tipografi", "İllüstrasyon", "Kahve Paketleme"],
    link: "/projects/moccamoon",
    image: MoccaMoonHero,
    aspect: "aspect-[16/9]",
    color: "#D97706",
    bgColor: "#FFFBF2",
  },
  {
    id: "hype",
    title: "Hype",
    subtitle: "Yeni Nesil Sosyal & Finansal Deneyim",
    tags: ["Arayüz Tasarımı", "Mobil Uygulama", "Fintech"],
    link: "/projects/hype",
    image: HypeHero,
    aspect: "aspect-[16/9]",
    color: "#1F5BFF",
    bgColor: "#F0F4FF",
  },
  {
    id: "cmd-aluminyum",
    title: "CMD Alüminyum",
    subtitle: "Endüstriyel Mimari & Cephe Sistemleri",
    tags: ["3D Mimari", "Endüstri", "Web Platformu"],
    link: "/projects/cmd-aluminyum",
    image: CMDHero,
    aspect: "aspect-[16/9]",
    color: "#0284C7",
    bgColor: "#F0F9FF",
  },
  {
    id: "parcadolu",
    title: "Parçadolu",
    subtitle: "Otomotiv Yedek Parça E-Ticaret Platformu",
    tags: ["Mobil Arayüz", "3D İkon", "Marka Tasarımı"],
    link: "/projects/parcadolu",
    image: ParcadoluHero,
    aspect: "aspect-[16/9]",
    color: "#F26522",
    bgColor: "#FFF6F0",
  },
];

export const Projects = () => {
  const dividerCount = 16;

  // Aşağı kaydırma süresi (milisaniye cinsinden - istediğiniz gibi değiştirebilirsiniz)
  const SCROLL_DURATION_MS = 1000;

  const scrollToProjects = (duration = SCROLL_DURATION_MS) => {
    const target = document.getElementById("projects-grid");
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 24; // 24px üst boşluk (offset)
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    // Yumuşak hızlanma ve yavaşlama eğrisi (easeInOutCubic)
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="mt-3 sm:mt-5 min-h-screen flex flex-col gap-12 sm:gap-16 md:gap-24 max-w-[100vw] overflow-x-clip selection:bg-[#e51921] selection:text-white">
      {/* Arka Plan Dikey Grid Çizgileri (Ana Sayfa ile Birebir Uyumlu) */}
      <div
        className="pointer-events-none -z-10 min-h-max min-w-full fixed inset-0 mx-auto max-w-360 grid border-x border-neutral-100"
        style={{
          gridTemplateColumns: `repeat(${dividerCount}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: dividerCount }).map((_, i, arr) => (
          <div
            key={i}
            className="h-full border-l border-neutral-100/80"
            style={{
              width: `${100 / arr.length}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Başlık Bölümü */}
      <section className="bg-[#F2F2F2] relative mx-4 sm:mx-8 md:mx-12 lg:mx-20 min-h-[300px] sm:min-h-[360px] md:min-h-[420px] flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 transition-all">
        {/* Logo (gri kutuya göre ana sayfadaki ile aynı boyut ve konum; tıklayınca ana sayfaya döner) */}
        <Link
          to="/"
          aria-label="Click Design Studio Ana Sayfa"
          className="absolute z-[60] -top-9 left-0 sm:-left-5 lg:-top-[61px] lg:-left-[56px]"
        >
          <img
            src={ClickDesignStudio}
            alt="Click Design Studio"
            className="block h-8 sm:h-10 md:h-16 lg:h-20 w-auto object-contain"
            fetchPriority="high"
          />
        </Link>

        {/* Dekoratif Tipografik Arka Plan */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <span className="absolute -right-4 -bottom-6 md:-bottom-12 text-[18vw] sm:text-[14vw] md:text-[12vw] font-montserrat font-black uppercase tracking-tight text-neutral-300/80 leading-none">
            PORTFOLIO
          </span>
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <Link
              to="/"
              className="text-xs font-semibold tracking-widest text-[#e51921] uppercase hover:underline transition-all cursor-pointer"
            >
              Click Design Studio
            </Link>
            <span className="text-xs text-neutral-400">/</span>
            <span className="text-xs text-neutral-500 font-medium">Seçkin İşler</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold tracking-tight text-neutral-900 leading-[1.05]">
            Tüm Projeler
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 max-w-xl leading-relaxed">
            Marka kimliği, mobil UI / UX, kurumsal web ve e-ticaret deneyimleri.
          </p>
        </div>

        {/* Aşağı Ok (Projelerin olduğu kısma doğru smooth scroll yapar) */}
        <button
          type="button"
          onClick={() => scrollToProjects()}
          aria-label="Projeler bölümüne kaydır"
          className="absolute z-20 -bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer p-1 hover:scale-110 active:scale-95 transition-transform focus:outline-none"
        >
          <img
            src={ArrowDown}
            alt=""
            className="w-5 sm:w-6 md:w-auto"
            loading="lazy"
            decoding="async"
          />
        </button>
      </section>

      {/* Proje Sayacı */}
      <div id="projects-grid" className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 flex items-center justify-end border-b border-neutral-200 pb-6 scroll-mt-6">
        <div className="text-xs sm:text-sm font-medium text-neutral-500 shrink-0">
          Toplam <span className="font-bold text-neutral-900">{PROJECTS_DATA.length}</span> proje listeleniyor
        </div>
      </div>

      {/* Proje Kartları Izgarası (Grid) */}
      <section className="mx-4 sm:mx-8 md:mx-12 lg:mx-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-14 lg:gap-16">
          {PROJECTS_DATA.map((project, index) => (
            <article
              key={project.id}
              className="group flex flex-col relative"
            >
              {/* Kart Görsel Alanı */}
              <Link
                to={project.link}
                className="relative block w-full overflow-hidden bg-neutral-100 cursor-pointer group"
                style={{ backgroundColor: project.bgColor }}
              >
                {/* Hero Görseli */}
                <div className={`${project.aspect} w-full flex items-center justify-center overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>

                {/* Hover Kaplaması & İnce Kırmızı Köşe Çizgisi */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#e51921] transition-colors duration-300 pointer-events-none" />
              </Link>

              {/* Bilgi Başlığı ve Detayları */}
              <div className="mt-5 sm:mt-6 flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 group-hover:text-[#e51921] transition-colors">
                  <Link to={project.link}>{project.title}</Link>
                </h2>

                <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                  {project.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* İletişim / Form Alanı */}
      <div className="relative flex flex-col items-center mt-6 sm:mt-12 w-full">
        <BrandProjectInquiry />
      </div>
    </div>
  );
};

export default Projects;
