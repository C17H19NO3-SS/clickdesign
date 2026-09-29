import React, { useState } from "react";
import ClickDesignStudio from "@/Resources/HomePage/ClickDesignStudio.svg";
import ClickDesignStudioCircle from "@/Resources/HomePage/ClickDesignStudioCircle.svg";
import Pocket from "@/Resources/HomePage/Pocket.svg";
import Dots from "@/Resources/HomePage/Dots.svg";
import Text from "@/Resources/HomePage/Text.svg";
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

  const activeTheme = PRESET_THEMES;

  return (
    <div className="mt-5 min-h-100 flex flex-col gap-10 max-w-[100vw]">
      <div className="bg-[#F2F2F2] relative mx-20 min-h-200">
        <img
          src={ClickDesignStudio}
          alt=""
          className="absolute -top-10 -left-4"
        />
        <img src={Pocket} alt="" className="absolute -left-16" />
        <img
          src={ClickDesignStudioCircle}
          alt=""
          className="absolute -right-5 -bottom-25 w-60 animate-spin [animation-duration:5000ms] [animation-direction:reverse]"
        />
        <img src={Dots} alt="" className="absolute top-[60%] right-100" />
        <h2 className="absolute top-[40%] right-0 text-9xl font-montserrat">
          Click Design Studio
        </h2>
        <img
          src={ArrowDown}
          alt=""
          className="absolute top-[99%] right-1/2 animate-bounce"
        />
      </div>

      <div className="flex justify-center items-center w-full flex-col gap-20 px-8">
        <img src={Description} alt="" className="w-1/2" />
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

      <div className="bg-[#282828] h-160 flex flex-col items-center relative">
        <h1 className="text-8xl font-bold text-white uppercase">works</h1>
        <img className="absolute top-20" src={Monogaze} alt="" />
      </div>

      <div className="relative flex flex-col items-center mt-30">
        <h5 className="absolute top-2 text-2xl font-monserrat underline">
          All Projects
        </h5>
        <img src={AllProjects} alt="" />
      </div>

      <div className="relative flex flex-col items-center mt-30">
        <h1 className="absolute top-2 text-[240px] font-monserrat">
          TESTIMOTIONAL
        </h1>
        <img src={Testimotional} alt="" className="z-10" />
        <img src={GrayCircle} alt="" className="absolute z-10 top-15" />
        <h5 className="z-20 absolute max-w-70 text-2xl text-center top-45">
          Click studio ile çalışmaktan çok mutluyuz. Çok hızlı ve çözüm odaklı
          bakış açılarıyla, projemizi hayata geçirdiler. Emeği geçen herkese çok
          teşekkür ediyoruz.
        </h5>
      </div>

      <div className="relative flex flex-col items-center mt-30">
        <BrandProjectInquiry />
      </div>
    </div>
  );
};

export default Home;
