export type FontVariant =
  | 'sans'
  | 'serif-slab'
  | 'script-lobster'
  | 'script-satisfy'
  | 'script-kaushan'
  | 'slab-heavy'
  | 'tech-wide';

export interface RibbonWordItem {
  id: string;
  text: string;
  font: FontVariant;
}

export type AngleOption =
  | '-18deg'
  | '-14deg'
  | '-9deg'
  | '-4deg'
  | '0deg'
  | '+2.2deg'
  | '+6deg'
  | '+8.5deg'
  | '+14deg';

export type VerticalPositionOption =
  | '24%'
  | '32%'
  | '40%'
  | '46%'
  | '52%'
  | '62%'
  | '70%';

export type BandColorOption =
  | 'charcoal'
  | 'scarlet'
  | 'coral'
  | 'ivory'
  | 'cobalt'
  | 'lime'
  | 'amber';

export type SpeedDurationOption = 14 | 20 | 28 | 36 | 48;

export type ZIndexOption = 10 | 20 | 30 | 40;

export interface RibbonBandConfig {
  id: string;
  label: string;
  enabled: boolean;
  angle: AngleOption;
  verticalPos: VerticalPositionOption;
  colorScheme: BandColorOption;
  direction: 'left' | 'right';
  speedSeconds: SpeedDurationOption;
  zIndex: ZIndexOption;
  initialOffsetClass: string;
  hasShadow: boolean;
  items: RibbonWordItem[];
}

export interface MarqueeThemePreset {
  id: string;
  name: string;
  subtitle: string;
  canvasBg: 'light-grid' | 'dark-grid' | 'pure-white' | 'stark-black';
  bands: RibbonBandConfig[];
}

export const FONT_VARIANT_META: Record<
  FontVariant,
  {
    label: string;
    className: string;
    sizeClass: string;
    fontFamilyCss: string;
  }
> = {
  sans: {
    label: 'Geometric Sans',
    className: 'font-sans-clean font-medium tracking-tight',
    sizeClass: 'text-3xl sm:text-4xl md:text-[43px]',
    fontFamilyCss: "'Plus Jakarta Sans', sans-serif",
  },
  'serif-slab': {
    label: 'Flare Serif',
    className: 'font-serif-slab font-normal tracking-tight',
    sizeClass: 'text-3xl sm:text-4xl md:text-[45px]',
    fontFamilyCss: "'Crete Round', Georgia, serif",
  },
  'script-lobster': {
    label: 'Calligraphic Script',
    className: 'font-script-lobster font-normal tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[45px]',
    fontFamilyCss: "'Lobster Two', cursive",
  },
  'script-satisfy': {
    label: 'Brush Script',
    className: 'font-script-satisfy font-normal tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[46px]',
    fontFamilyCss: "'Satisfy', cursive",
  },
  'script-kaushan': {
    label: 'Vintage Script',
    className: 'font-script-kaushan font-normal tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[43px]',
    fontFamilyCss: "'Kaushan Script', cursive",
  },
  'slab-heavy': {
    label: 'Heavy Slab',
    className: 'font-slab-heavy font-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[41px]',
    fontFamilyCss: "'Alfa Slab One', serif",
  },
  'tech-wide': {
    label: 'Wide Tech Display',
    className: 'font-tech-wide font-normal tracking-tight',
    sizeClass: 'text-2xl sm:text-3xl md:text-[34px]',
    fontFamilyCss: "'Michroma', sans-serif",
  },
};

export const BAND_COLOR_META: Record<
  BandColorOption,
  {
    label: string;
    bgClass: string;
    textClass: string;
    dividerClass: string;
    swatchClass: string;
    bgHex: string;
    textHex: string;
  }
> = {
  charcoal: {
    label: 'Koyu Antrasit (#1B1B1B)',
    bgClass: 'bg-[#1B1B1B]',
    textClass: 'text-white',
    dividerClass: 'bg-white/75',
    swatchClass: 'bg-[#1B1B1B]',
    bgHex: '#1B1B1B',
    textHex: '#FFFFFF',
  },
  scarlet: {
    label: 'Canlı Kırmızı (#F21313)',
    bgClass: 'bg-[#F21313]',
    textClass: 'text-[#181818]',
    dividerClass: 'bg-[#181818]/75',
    swatchClass: 'bg-[#F21313]',
    bgHex: '#F21313',
    textHex: '#181818',
  },
  coral: {
    label: 'Mercan Kırmızı (#FF4A4A)',
    bgClass: 'bg-[#FF4A4A]',
    textClass: 'text-[#1E1E1E]',
    dividerClass: 'bg-[#1E1E1E]/75',
    swatchClass: 'bg-[#FF4A4A]',
    bgHex: '#FF4A4A',
    textHex: '#1E1E1E',
  },
  ivory: {
    label: 'Kırık Beyaz (#F4F4F0)',
    bgClass: 'bg-[#F4F4F0] border-y border-neutral-300',
    textClass: 'text-[#121212]',
    dividerClass: 'bg-[#121212]/70',
    swatchClass: 'bg-[#F4F4F0]',
    bgHex: '#F4F4F0',
    textHex: '#121212',
  },
  cobalt: {
    label: 'Elektrik Kobalt (#1D4ED8)',
    bgClass: 'bg-[#1D4ED8]',
    textClass: 'text-white',
    dividerClass: 'bg-white/75',
    swatchClass: 'bg-[#1D4ED8]',
    bgHex: '#1D4ED8',
    textHex: '#FFFFFF',
  },
  lime: {
    label: 'Asit Yeşil (#CCF32F)',
    bgClass: 'bg-[#CCF32F]',
    textClass: 'text-[#121212]',
    dividerClass: 'bg-[#121212]/75',
    swatchClass: 'bg-[#CCF32F]',
    bgHex: '#CCF32F',
    textHex: '#121212',
  },
  amber: {
    label: 'Endüstriyel Kehribar (#F59E0B)',
    bgClass: 'bg-[#F59E0B]',
    textClass: 'text-[#141414]',
    dividerClass: 'bg-[#141414]/75',
    swatchClass: 'bg-[#F59E0B]',
    bgHex: '#F59E0B',
    textHex: '#141414',
  },
};

export const ANGLE_CLASS_MAP: Record<AngleOption, string> = {
  '-18deg': '-rotate-[18deg]',
  '-14deg': '-rotate-[14deg]',
  '-9deg': '-rotate-[9deg]',
  '-4deg': '-rotate-[4deg]',
  '0deg': 'rotate-0',
  '+2.2deg': 'rotate-[2.2deg]',
  '+6deg': 'rotate-[6deg]',
  '+8.5deg': 'rotate-[8.5deg]',
  '+14deg': 'rotate-[14deg]',
};

export const VERTICAL_POS_CLASS_MAP: Record<VerticalPositionOption, string> = {
  '24%': 'top-[24%]',
  '32%': 'top-[32%]',
  '40%': 'top-[40%]',
  '46%': 'top-[46%]',
  '52%': 'top-[52%]',
  '62%': 'top-[62%]',
  '70%': 'top-[70%]',
};

export const SPEED_CLASS_MAP: Record<SpeedDurationOption, string> = {
  14: 'scroll-speed-14',
  20: 'scroll-speed-20',
  28: 'scroll-speed-28',
  36: 'scroll-speed-36',
  48: 'scroll-speed-48',
};

export const Z_INDEX_CLASS_MAP: Record<ZIndexOption, string> = {
  10: 'z-10',
  20: 'z-20',
  30: 'z-30',
  40: 'z-40',
};

export const PRESET_THEMES: MarqueeThemePreset[] = [
  {
    id: 'reference-exact',
    name: 'Orijinal Görsel (1:1 Referans)',
    subtitle: 'Görseldeki siyah, mercan ve parlak kırmızı 3 katmanlı kesişen bant tasarımı',
    canvasBg: 'light-grid',
    bands: [
      {
        id: 'band-1',
        label: '1. Bant — Üst Çapraz Siyah Şerit',
        enabled: true,
        angle: '+8.5deg',
        verticalPos: '32%',
        colorScheme: 'charcoal',
        direction: 'left',
        speedSeconds: 28,
        zIndex: 10,
        initialOffsetClass: 'pl-[18vw]',
        hasShadow: false,
        items: [
          { id: 'b1-1', text: 'Animation', font: 'serif-slab' },
          { id: 'b1-2', text: 'User Experience', font: 'script-lobster' },
          { id: 'b1-3', text: 'AI', font: 'sans' },
          { id: 'b1-4', text: 'Motion Design', font: 'tech-wide' },
          { id: 'b1-5', text: '3D Visuals', font: 'slab-heavy' },
          { id: 'b1-6', text: 'Creative Direction', font: 'script-satisfy' },
        ],
      },
      {
        id: 'band-2',
        label: '2. Bant — Alt Çapraz Mercan Şerit',
        enabled: true,
        angle: '-14deg',
        verticalPos: '52%',
        colorScheme: 'coral',
        direction: 'right',
        speedSeconds: 36,
        zIndex: 20,
        initialOffsetClass: 'pl-[18vw]',
        hasShadow: false,
        items: [
          { id: 'b2-1', text: 'Frontend', font: 'sans' },
          { id: 'b2-2', text: 'Backend', font: 'script-kaushan' },
          { id: 'b2-3', text: 'Webflow', font: 'slab-heavy' },
          { id: 'b2-4', text: 'App Design', font: 'sans' },
          { id: 'b2-5', text: 'Design Systems', font: 'tech-wide' },
          { id: 'b2-6', text: 'Prototyping', font: 'script-satisfy' },
        ],
      },
      {
        id: 'band-3',
        label: '3. Bant — Ön Katman Kırmızı Şerit',
        enabled: true,
        angle: '+2.2deg',
        verticalPos: '46%',
        colorScheme: 'scarlet',
        direction: 'left',
        speedSeconds: 20,
        zIndex: 30,
        initialOffsetClass: 'pl-[19vw]',
        hasShadow: false,
        items: [
          { id: 'b3-1', text: 'Social Media', font: 'sans' },
          { id: 'b3-2', text: 'Logo', font: 'slab-heavy' },
          { id: 'b3-3', text: 'Branding', font: 'tech-wide' },
          { id: 'b3-4', text: 'Print', font: 'script-satisfy' },
          { id: 'b3-5', text: 'User Interface', font: 'sans' },
          { id: 'b3-6', text: 'Editorial', font: 'serif-slab' },
        ],
      },
    ],
  },
  {
    id: 'brutalist-dark',
    name: 'Koyu Brutalist Stüdyo',
    subtitle: 'Siyah ızgara zemin üzerinde asit yeşili, kırık beyaz ve elektrik kobalt bantlar',
    canvasBg: 'dark-grid',
    bands: [
      {
        id: 'band-1',
        label: '1. Bant — Üst Çapraz Kobalt',
        enabled: true,
        angle: '+8.5deg',
        verticalPos: '32%',
        colorScheme: 'cobalt',
        direction: 'left',
        speedSeconds: 28,
        zIndex: 10,
        initialOffsetClass: 'pl-[18vw]',
        hasShadow: true,
        items: [
          { id: 'd1-1', text: 'Animation', font: 'serif-slab' },
          { id: 'd1-2', text: 'User Experience', font: 'script-lobster' },
          { id: 'd1-3', text: 'AI', font: 'sans' },
          { id: 'd1-4', text: 'Creative Coding', font: 'tech-wide' },
          { id: 'd1-5', text: 'WebGL Shaders', font: 'slab-heavy' },
        ],
      },
      {
        id: 'band-2',
        label: '2. Bant — Alt Çapraz Beyaz',
        enabled: true,
        angle: '-14deg',
        verticalPos: '52%',
        colorScheme: 'ivory',
        direction: 'right',
        speedSeconds: 28,
        zIndex: 20,
        initialOffsetClass: 'pl-[18vw]',
        hasShadow: true,
        items: [
          { id: 'd2-1', text: 'Frontend', font: 'sans' },
          { id: 'd2-2', text: 'Backend', font: 'script-kaushan' },
          { id: 'd2-3', text: 'Fullstack', font: 'slab-heavy' },
          { id: 'd2-4', text: 'App Design', font: 'sans' },
          { id: 'd2-5', text: 'Architecture', font: 'tech-wide' },
        ],
      },
      {
        id: 'band-3',
        label: '3. Bant — Ön Katman Asit Yeşili',
        enabled: true,
        angle: '+2.2deg',
        verticalPos: '46%',
        colorScheme: 'lime',
        direction: 'left',
        speedSeconds: 20,
        zIndex: 30,
        initialOffsetClass: 'pl-[19vw]',
        hasShadow: true,
        items: [
          { id: 'd3-1', text: 'Social Media', font: 'sans' },
          { id: 'd3-2', text: 'Logo', font: 'slab-heavy' },
          { id: 'd3-3', text: 'Branding', font: 'tech-wide' },
          { id: 'd3-4', text: 'Print', font: 'script-satisfy' },
          { id: 'd3-5', text: 'User Interface', font: 'sans' },
        ],
      },
    ],
  },
  {
    id: 'swiss-editorial',
    name: 'İsviçre Editoryal Monokrom',
    subtitle: 'Antrasit, kırık beyaz ve tek bir vurgu kırmızısı ile yüksek kontrastlı tipografi',
    canvasBg: 'light-grid',
    bands: [
      {
        id: 'band-1',
        label: '1. Bant — Üst Çapraz Antrasit',
        enabled: true,
        angle: '+6deg',
        verticalPos: '32%',
        colorScheme: 'charcoal',
        direction: 'left',
        speedSeconds: 36,
        zIndex: 10,
        initialOffsetClass: 'pl-[18vw]',
        hasShadow: true,
        items: [
          { id: 's1-1', text: 'Typography', font: 'serif-slab' },
          { id: 's1-2', text: 'Art Direction', font: 'script-lobster' },
          { id: 's1-3', text: 'Exhibition', font: 'sans' },
          { id: 's1-4', text: 'Identity', font: 'tech-wide' },
        ],
      },
      {
        id: 'band-2',
        label: '2. Bant — Alt Çapraz Kırık Beyaz',
        enabled: true,
        angle: '-9deg',
        verticalPos: '52%',
        colorScheme: 'ivory',
        direction: 'right',
        speedSeconds: 28,
        zIndex: 20,
        initialOffsetClass: 'pl-[18vw]',
        hasShadow: true,
        items: [
          { id: 's2-1', text: 'Frontend', font: 'sans' },
          { id: 's2-2', text: 'Backend', font: 'script-kaushan' },
          { id: 's2-3', text: 'Interactive', font: 'slab-heavy' },
          { id: 's2-4', text: 'App Design', font: 'sans' },
        ],
      },
      {
        id: 'band-3',
        label: '3. Bant — Ön Katman Kırmızı',
        enabled: true,
        angle: '0deg',
        verticalPos: '46%',
        colorScheme: 'scarlet',
        direction: 'left',
        speedSeconds: 20,
        zIndex: 30,
        initialOffsetClass: 'pl-[19vw]',
        hasShadow: true,
        items: [
          { id: 's3-1', text: 'Social Media', font: 'sans' },
          { id: 's3-2', text: 'Logo', font: 'slab-heavy' },
          { id: 's3-3', text: 'Branding', font: 'tech-wide' },
          { id: 's3-4', text: 'Print', font: 'script-satisfy' },
          { id: 's3-5', text: 'Packaging', font: 'sans' },
        ],
      },
    ],
  },
];
