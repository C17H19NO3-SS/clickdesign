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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = React.useState<number | null>(null);

  const bgConfig = CANVAS_BG_CLASSES[canvasBg];
  const activeBands = bands.filter((b) => b.enabled && b.items.length > 0);

  // Re-calculate the exact height needed so the bottom-most band tip meets the bottom edge
  React.useEffect(() => {
    const updateHeight = () => {
      const container = containerRef.current;
      if (!container) return;
      const width = container.clientWidth || window.innerWidth;

      // Band height depending on Tailwind responsive breakpoints:
      // h-16 (64px) < 640px, sm:h-20 (80px) < 768px, md:h-22 (88px) < 1024px, lg:h-30 (120px) >= 1024px
      const bandHeight = width < 640 ? 64 : width < 768 ? 80 : width < 1024 ? 88 : 120;

      let maxRequiredHeight = 0;

      activeBands.forEach((band) => {
        // Parse angle in degrees
        const angleMatch = band.angle.match(/([+-]?\d+(?:\.\d+)?)/);
        const angleDeg = angleMatch ? Math.abs(parseFloat(angleMatch[1])) : 0;
        const theta = (angleDeg * Math.PI) / 180;

        // Parse vertical position percentage
        const posMatch = band.verticalPos.match(/(\d+(?:\.\d+)?)/);
        const p = posMatch ? parseFloat(posMatch[1]) / 100 : 0.5;

        // The lowest point of the angled band on screen [0, width] occurs at the edge:
        // y_bottom = p * H + (width / 2) * tan(theta) + (bandHeight / 2) / cos(theta)
        // Solving for H where H == y_bottom:
        // H = ((width / 2) * tan(theta) + (bandHeight / 2) / cos(theta)) / (1 - p)
        if (1 - p > 0.05) {
          const requiredH =
            ((width / 2) * Math.tan(theta) + (bandHeight / 2) / Math.cos(theta)) /
            (1 - p);
          if (requiredH > maxRequiredHeight) {
            maxRequiredHeight = requiredH;
          }
        }
      });

      if (maxRequiredHeight > 0) {
        setContainerHeight(Math.ceil(maxRequiredHeight));
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [activeBands]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none transition-colors duration-200 ${bgConfig.wrapper}`}
      style={containerHeight ? { height: `${containerHeight}px` } : undefined}
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
              h-16 sm:h-20 md:h-22 lg:h-30 flex items-center
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
                          className={`inline-block w-[1.5px] h-10 sm:h-12 md:h-14 lg:h-24 shrink-0 ${colorMeta.dividerClass}`}
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
