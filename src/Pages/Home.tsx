import React, { useState } from "react";
import ClickDesignStudio from "@/Resources/HomePage/ClickDesignStudio.svg";
import ClickDesignStudioCircle from "@/Resources/HomePage/ClickDesignStudioCircle.svg";
import Pocket from "@/Resources/HomePage/Pocket.svg";
import Dots from "@/Resources/HomePage/Dots.svg";
import Description from "@/Resources/HomePage/Description.svg";
import Monogaze from "@/Resources/HomePage/Monogaze.svg";
import AllProjects from "@/Resources/HomePage/AllProjects.svg";
import Testimotional from "@/Resources/HomePage/Testimotional.svg";
import GrayCircle from "@/Resources/HomePage/GrayCircle.svg";
import ArrowDown from "@/Resources/Arrows/Down.svg";
import { PRESET_THEMES } from "@/Theme";
import { RibbonMarquee } from "@/Components/RibbonMarqueee/RibbonMarquee";
import type { RibbonBandConfig } from "@/types";
import { BrandProjectInquiry } from "@/Components/Form/Form";

export const Home = () => {
  const [selectedBandId, setSelectedBandId] = useState<string | null>(null);
  const dividerCount = 16;

  const activeTheme = PRESET_THEMES;

  return (
    <div className="mt-3 sm:mt-5 min-h-100 flex flex-col gap-10 sm:gap-14 md:gap-20 max-w-[100vw]">
      <div
        className="pointer-events-none -z-10 min-h-max min-w-full fixed inset-0 mx-auto max-w-360 grid border-x border-neutral-100"
        style={{
          gridTemplateColumns: `repeat(${dividerCount}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: dividerCount }).map((_, i, __) => (
          <div
            key={i}
            className="h-full border-l border-neutral-100/80"
            style={{
              width: `${100 / __.length}%`,
            }}
          />
        ))}
      </div>
      {/* Hero Section */}
      <div className="bg-[#F2F2F2] relative mx-4 sm:mx-8 md:mx-12 lg:mx-20 min-h-115 sm:min-h-145 md:min-h-170 lg:min-h-200 transition-all">
        <img
          src={ClickDesignStudio}
          alt="Click Design Studio"
          className="absolute -top-5 sm:-top-8 lg:-top-10 -left-2 sm:-left-4 w-44 sm:w-64 md:w-80 lg:w-auto max-w-[55%] sm:max-w-none"
        />
        <img
          src={Pocket}
          alt=""
          className="absolute -left-6 sm:-left-10 lg:-left-16 top-16 sm:top-24 md:top-auto w-60 lg:w-auto"
        />
        <img
          src={ClickDesignStudioCircle}
          alt=""
          className="absolute right-0 sm:-right-5 -bottom-10 sm:-bottom-18 md:-bottom-25 w-24 sm:w-40 md:w-52 lg:w-60 animate-spin [animation-duration:5000ms] [animation-direction:reverse] pointer-events-none"
        />
        <img
          src={Dots}
          alt=""
          className="absolute top-[62%] sm:top-[60%] right-8 sm:right-24 md:right-48 lg:right-100 w-16 sm:w-24 md:w-32 lg:w-auto opacity-70 sm:opacity-100"
        />
        <h2 className="absolute top-[38%] sm:top-[40%] right-3 sm:right-6 md:right-8 lg:right-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-montserrat text-right tracking-tight leading-[0.95] lg:max-w-[85%] sm:max-w-none max-w-60">
          Click Design Studio
        </h2>
        <img
          src={ArrowDown}
          alt=""
          className="absolute -bottom-2 lg:top-[99%] left-1/2 -translate-x-1/2 animate-bounce w-5 sm:w-6 md:w-auto"
        />
      </div>

      {/* Description Section */}
      <div className="flex justify-center items-center w-full flex-col gap-10 sm:gap-16 md:gap-20 px-4 sm:px-8">
        <img
          src={Description}
          alt="Description"
          className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 max-w-4xl h-auto"
        />
      </div>

      {/* Şerit Marquee Bileşeni */}
      <div className="w-full overflow-hidden">
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
      <div className="bg-[#282828] h-60 sm:h-80 md:h-100 lg:h-130 flex flex-col items-center relative px-4 pb-12 sm:pb-0">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-wider mt-4 sm:mt-0">
          works
        </h1>
        <img
          className="relative sm:absolute top-4 sm:top-14 md:top-20 w-full sm:w-[92%] md:w-auto max-w-4xl h-auto drop-shadow-2xl"
          src={Monogaze}
          alt="Monogaze Project Showcase"
        />
      </div>

      {/* All Projects Section */}
      <div className="relative flex flex-col items-center mt-40 md:mt-50 px-4">
        <h5 className="absolute top-1 sm:top-2 text-lg sm:text-xl md:text-2xl font-monserrat underline cursor-pointer hover:opacity-80 transition-opacity">
          All Projects
        </h5>
        <img
          src={AllProjects}
          alt="All Projects"
          className="w-48 sm:w-56 md:w-auto h-auto"
        />
      </div>

      {/* Testimotional Section */}
      <div className="relative w-full flex flex-col items-center mt-16 sm:mt-24 md:mt-30 overflow-hidden min-h-95 sm:min-h-120 md:min-h-145">
        <div className="w-full absolute top-65 lg:-mt-20 left-0 right-0 flex justify-center overflow-hidden pointer-events-none select-none">
          <h1 className="w-full text-center text-[12vw] font-monserrat font-bold tracking-tight uppercase leading-none whitespace-nowrap opacity-90">
            TESTIMOTIONAL
          </h1>
        </div>
        <img
          src={Testimotional}
          alt="Testimonial background"
          className="relative z-10 w-64 sm:w-80 md:w-auto max-w-full h-auto mt-35 sm:mt-8 md:mt-12"
        />
        <img
          src={GrayCircle}
          alt=""
          className="absolute z-10 top-40 sm:top-14 md:top-20 w-30 sm:w-56 md:w-auto h-auto pointer-events-none"
        />
        <h5 className="z-20 absolute max-w-55 sm:max-w-67.5 md:max-w-70 text-sm sm:text-lg md:text-2xl text-center top-70 sm:top-38 md:top-48 px-2 leading-relaxed sm:leading-normal font-sans text-neutral-800 font-semibold">
          Click studio ile çalışmaktan çok mutluyuz. Çok hızlı ve çözüm odaklı
          bakış açılarıyla, projemizi hayata geçirdiler. Emeği geçen herkese çok
          teşekkür ediyoruz.
        </h5>
      </div>

      {/* Brand Inquiry Form */}
      <div className="relative flex flex-col items-center mt-12 sm:mt-20 md:mt-30 w-full">
        <BrandProjectInquiry />
      </div>
    </div>
  );
};

export default Home;
