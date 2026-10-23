export type FontVariant =
  | 'sans'
  | 'serif-slab'
  | 'script-lobster'
  | 'script-satisfy'
  | 'script-kaushan'
  | 'slab-heavy'
  | 'tech-wide'
  // Figma (Home > Group 5) şeritlerinde kullanılan fontlar
  | 'mozilla-headline'
  | 'mozilla-text'
  | 'montserrat'
  | 'norican'
  | 'niramit'
  | 'orbitron'
  | 'orbitron-semibold'
  | 'moul'
  | 'nokora';

export interface RibbonWordItem {
  id: string;
  text: string;
  font: FontVariant;
}

export type AngleOption =
  | '-18deg'
  | '-14deg'
  | '-13.5deg'
  | '-9deg'
  | '-4deg'
  | '0deg'
  | '+1.8deg'
  | '+2.2deg'
  | '+6deg'
  | '+7deg'
  | '+8.5deg'
  | '+14deg';

export type VerticalPositionOption =
  | '24%'
  | '32%'
  | '33%'
  | '40%'
  | '46%'
  | '52%'
  | '53%'
  | '57%'
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
    sizeClass: 'text-3xl sm:text-4xl md:text-[43px] lg:text-[64px]',
    fontFamilyCss: "'Plus Jakarta Sans', sans-serif",
  },
  'serif-slab': {
    label: 'Flare Serif',
    className: 'font-serif-slab font-normal tracking-tight',
    sizeClass: 'text-3xl sm:text-4xl md:text-[45px] lg:text-[64px]',
    fontFamilyCss: "'Crete Round', Georgia, serif",
  },
  'script-lobster': {
    label: 'Calligraphic Script',
    className: 'font-script-lobster font-normal tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[45px] lg:text-[64px]',
    fontFamilyCss: "'Lobster Two', cursive",
  },
  'script-satisfy': {
    label: 'Brush Script',
    className: 'font-script-satisfy font-normal tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[46px] lg:text-[64px]',
    fontFamilyCss: "'Satisfy', cursive",
  },
  'script-kaushan': {
    label: 'Vintage Script',
    className: 'font-script-kaushan font-normal tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[43px] lg:text-[64px]',
    fontFamilyCss: "'Kaushan Script', cursive",
  },
  'slab-heavy': {
    label: 'Heavy Slab',
    className: 'font-slab-heavy font-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[41px] lg:text-[64px]',
    fontFamilyCss: "'Alfa Slab One', serif",
  },
  'tech-wide': {
    label: 'Wide Tech Display',
    className: 'font-tech-wide font-normal tracking-tight',
    sizeClass: 'text-2xl sm:text-3xl md:text-[34px] lg:text-[50px]',
    fontFamilyCss: "'Michroma', sans-serif",
  },
  'mozilla-headline': {
    label: 'Mozilla Headline SemiBold',
    className: 'font-mozilla-headline font-semibold tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[43px] lg:text-[64px]',
    fontFamilyCss: "'Mozilla Headline', sans-serif",
  },
  'mozilla-text': {
    label: 'Mozilla Text SemiBold',
    className: 'font-mozilla-text font-semibold tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[43px] lg:text-[64px]',
    fontFamilyCss: "'Mozilla Text', sans-serif",
  },
  montserrat: {
    label: 'Montserrat SemiBold',
    className: 'font-montserrat font-semibold tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[43px] lg:text-[64px]',
    fontFamilyCss: "'Montserrat', sans-serif",
  },
  norican: {
    label: 'Norican Script',
    className: 'font-norican font-normal tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[43px] lg:text-[64px]',
    fontFamilyCss: "'Norican', cursive",
  },
  niramit: {
    label: 'Niramit',
    className: 'font-niramit font-normal tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[43px] lg:text-[64px]',
    fontFamilyCss: "'Niramit', sans-serif",
  },
  orbitron: {
    label: 'Orbitron',
    className: 'font-orbitron font-normal tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[43px] lg:text-[64px]',
    fontFamilyCss: "'Orbitron', sans-serif",
  },
  'orbitron-semibold': {
    label: 'Orbitron SemiBold',
    className: 'font-orbitron font-semibold tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[43px] lg:text-[64px]',
    fontFamilyCss: "'Orbitron', sans-serif",
  },
  moul: {
    label: 'Moul',
    className: 'font-moul font-normal tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[43px] lg:text-[64px]',
    fontFamilyCss: "'Moul', serif",
  },
  nokora: {
    label: 'Nokora',
    className: 'font-nokora font-normal tracking-normal',
    sizeClass: 'text-3xl sm:text-4xl md:text-[43px] lg:text-[64px]',
    fontFamilyCss: "'Nokora', sans-serif",
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
    label: 'Koyu Antrasit (#1A1A1A)',
    bgClass: 'bg-[#1A1A1A]',
    textClass: 'text-white',
    dividerClass: 'bg-white/75',
    swatchClass: 'bg-[#1A1A1A]',
    bgHex: '#1A1A1A',
    textHex: '#FFFFFF',
  },
  scarlet: {
    label: 'Canlı Kırmızı (#F21414)',
    bgClass: 'bg-[#F21414]',
    textClass: 'text-[#1A1A1A]',
    dividerClass: 'bg-[#1A1A1A]/75',
    swatchClass: 'bg-[#F21414]',
    bgHex: '#F21414',
    textHex: '#1A1A1A',
  },
  coral: {
    label: 'Mercan Kırmızı (#FF4343)',
    bgClass: 'bg-[#FF4343]',
    textClass: 'text-[#1A1A1A]',
    dividerClass: 'bg-[#1A1A1A]/75',
    swatchClass: 'bg-[#FF4343]',
    bgHex: '#FF4343',
    textHex: '#1A1A1A',
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
    dividerClass: '',
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
  '-13.5deg': '-rotate-[13.5deg]',
  '-9deg': '-rotate-[9deg]',
  '-4deg': '-rotate-[4deg]',
  '0deg': 'rotate-0',
  '+1.8deg': 'rotate-[1.8deg]',
  '+2.2deg': 'rotate-[2.2deg]',
  '+6deg': 'rotate-[6deg]',
  '+7deg': 'rotate-[7deg]',
  '+8.5deg': 'rotate-[8.5deg]',
  '+14deg': 'rotate-[14deg]',
};

export const VERTICAL_POS_CLASS_MAP: Record<VerticalPositionOption, string> = {
  '24%': 'top-[24%]',
  '32%': 'top-[32%]',
  '33%': 'top-[33%]',
  '40%': 'top-[40%]',
  '46%': 'top-[46%]',
  '52%': 'top-[52%]',
  '53%': 'top-[53%]',
  '57%': 'top-[57%]',
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
