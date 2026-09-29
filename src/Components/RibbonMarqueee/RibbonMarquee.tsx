import React from "react";
import {
  ANGLE_CLASS_MAP,
  BAND_COLOR_META,
  FONT_VARIANT_META,
  SPEED_CLASS_MAP,
  VERTICAL_POS_CLASS_MAP,
  Z_INDEX_CLASS_MAP,
  type RibbonBandConfig,
} from "@/types.ts";

export interface RibbonMarqueeProps {
  bands: RibbonBandConfig[];
  canvasBg?: "light-grid" | "dark-grid" | "pure-white" | "stark-black";
  isPaused?: boolean;
  isStaticReference?: boolean;
  pauseOnHover?: boolean;
  selectedBandId?: string | null;
  onSelectBand?: (bandId: string) => void;
}

const CANVAS_BG_CLASSES: Record<
  NonNullable<RibbonMarqueeProps["canvasBg"]>,
  { wrapper: string; gridLine: string; showGrid: boolean }
> = {
  "light-grid": {
    wrapper: "",
    gridLine: "border-r border-black/[0.05]",
    showGrid: true,
  },
  "dark-grid": {
    wrapper: "",
    gridLine: "border-r border-white/[0.06]",
    showGrid: true,
  },
  "pure-white": {
    wrapper: "",
    gridLine: "",
    showGrid: false,
  },
  "stark-black": {
    wrapper: "",
    gridLine: "",
    showGrid: false,
  },
};

export const RibbonMarquee: React.FC<RibbonMarqueeProps> = ({
  bands,
  canvasBg = "light-grid",
  isPaused = false,
  isStaticReference = false,
  pauseOnHover = true,
  selectedBandId = null,
  onSelectBand,
}) => {
  const bgConfig = CANVAS_BG_CLASSES[canvasBg];
  const activeBands = bands.filter((b) => b.enabled && b.items.length > 0);

  return (
    <div
      className={`relative w-full h-80 sm:h-96 md:h-150 overflow-hidden select-none transition-colors duration-200 ${bgConfig.wrapper}`}
      role="region"
      aria-label="Kinetik Kesişen Yazı Bantları"
    >
      {/* Self-contained Keyframes & Motion Rules */}
      <style>{`
        @keyframes marquee-scroll-left {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-scroll-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0%, 0, 0); }
        }
        .scroll-track-left {
          animation: marquee-scroll-left linear infinite !important;
          will-change: transform !important;
        }
        .scroll-track-right {
          animation: marquee-scroll-right linear infinite !important;
          will-change: transform !important;
        }
        .scroll-speed-14 { animation-duration: 14s !important; }
        .scroll-speed-20 { animation-duration: 20s !important; }
        .scroll-speed-28 { animation-duration: 28s !important; }
        .scroll-speed-36 { animation-duration: 36s !important; }
        .scroll-speed-48 { animation-duration: 48s !important; }
        .scroll-pause:hover .scroll-track-left,
        .scroll-pause:hover .scroll-track-right {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Intersecting Angled Ribbon Bands */}
      {activeBands.map((band) => {
        const colorMeta = BAND_COLOR_META[band.colorScheme];
        const angleClass = ANGLE_CLASS_MAP[band.angle];
        const verticalPosClass = VERTICAL_POS_CLASS_MAP[band.verticalPos];
        const speedClass = SPEED_CLASS_MAP[band.speedSeconds];
        const zIndexClass = Z_INDEX_CLASS_MAP[band.zIndex];
        const directionClass =
          band.direction === "left"
            ? "scroll-track-left"
            : "scroll-track-right";

        const singleHalfItems = [
          ...band.items,
          ...band.items,
          ...band.items,
          ...band.items,
        ];

        const isSelected = selectedBandId === band.id;

        return (
          <div
            key={band.id}
            onClick={() => onSelectBand && onSelectBand(band.id)}
            className={`
              group absolute left-[-30%] w-[160%] -translate-y-1/2 origin-center
              h-16 sm:h-20 md:h-22 flex items-center
              transition-transform duration-200
              ${verticalPosClass}
              ${angleClass}
              ${zIndexClass}
              ${colorMeta.bgClass}
              ${colorMeta.textClass}
              ${band.hasShadow ? "shadow-[0_10px_28px_rgba(0,0,0,0.22)]" : ""}
              ${pauseOnHover ? "scroll-pause" : ""}
              ${onSelectBand ? "cursor-pointer" : ""}
              ${isSelected ? "ring-2 ring-offset-0 ring-black/40 dark:ring-white/60" : ""}
            `}
          >
            <div
              className={`
                marquee-track flex items-center w-max whitespace-nowrap
                ${isStaticReference ? `marquee-static ${band.initialOffsetClass}` : `${directionClass} ${speedClass}`}
                ${isPaused && !isStaticReference ? "marquee-paused" : ""}
              `}
            >
              {[0, 1].map((halfIndex) => (
                <div
                  key={halfIndex}
                  className="flex items-center shrink-0"
                  aria-hidden={halfIndex === 1 ? "true" : undefined}
                >
                  {singleHalfItems.map((item, idx) => {
                    const fontMeta = FONT_VARIANT_META[item.font];
                    return (
                      <React.Fragment key={`${halfIndex}-${item.id}-${idx}`}>
                        <span
                          className={`
                            inline-flex items-center px-6 sm:px-8 md:px-9 leading-none
                            ${fontMeta.className}
                            ${fontMeta.sizeClass}
                          `}
                        >
                          {item.text}
                        </span>
                        <span
                          className={`inline-block w-[1.5px] h-10 sm:h-12 md:h-14 shrink-0 ${colorMeta.dividerClass}`}
                          aria-hidden="true"
                        />
                      </React.Fragment>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
