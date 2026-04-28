
export type SummerOffer = {
  slug: string;
  title: string;
  
  imageKey: string;
};

export type SummerOfferSection = {
  id: string;
  title: string;
  offers: SummerOffer[];
};

export const SUMMER_OFFER_SECTIONS: SummerOfferSection[] = [
  {
    id: 'militaria-survival',
    title: 'Militaria & Survival',
    offers: [
      { slug: 'jura-military-camp', title: 'Jura Military Camp', imageKey: 'military-camp' },
      { slug: 'jura-survival-camp', title: 'Jura Survival Camp', imageKey: 'survival-camp' },
    ],
  },
  {
    id: 'wspinaczka-samoobrona',
    title: 'Wspinaczka & Samoobrona',
    offers: [
      { slug: 'jura-climbing-camp', title: 'Jura Climbing Camp', imageKey: 'climbing-camp' },
      { slug: 'jura-fight-camp', title: 'Jura Fight Camp', imageKey: 'fight-camp' },
    ],
  },
  {
    id: 'offroad-multiprzygoda',
    title: 'Off-Road 4x4 & Multiprzygoda',
    offers: [
      { slug: 'jura-off-road-camp-4x4', title: 'Jura Off-Road Camp 4x4', imageKey: 'off-road-camp' },
      { slug: 'jura-multi-camp', title: 'Jura Multi Camp', imageKey: 'multi-camp' },
    ],
  },
  {
    id: 'quady',
    title: 'Adrenalina na 4 kołach — Quady',
    offers: [
      { slug: 'jura-quad-academy-camp', title: 'Jura Quad Academy Camp', imageKey: 'quad-academy-camp' },
      { slug: 'jura-quad-camp', title: 'Jura Quad Camp', imageKey: 'quad-camp' },
    ],
  },
  {
    id: 'najmlodsi',
    title: 'Przygody dla najmłodszych',
    offers: [
      { slug: 'jura-kids-patrol-camp', title: 'Jura Kids Patrol Camp', imageKey: 'kids-patrol-camp' },
      { slug: 'jura-lego-camp', title: 'Jura LEGO® Camp', imageKey: 'lego-camp' },
      { slug: 'jura-art-camp', title: 'Jura Art Camp', imageKey: 'art-camp' },
      { slug: 'jura-chill-fun', title: 'Jura Chill & Fun', imageKey: 'chill-fun' },
    ],
  },
  {
    id: 'jazda-konna',
    title: 'Jazda konna',
    offers: [
      {
        slug: 'oboz-jazdy-konnej',
        title: 'Obóz jazdy konnej',
        imageKey: '@public/utils/oferta-letnia/oboz-jazdy-konnej/gallery/kon-2.png',
      },
      { slug: 'beskidzki-rajd-konny', title: 'Beskidzki rajd konny', imageKey: 'rajd-konny' },
    ],
  },
];

export function getSummerOfferBySlug(slug: string | undefined): { offer: SummerOffer; section: SummerOfferSection } | undefined {
  if (!slug) return undefined;
  for (const section of SUMMER_OFFER_SECTIONS) {
    const offer = section.offers.find((o) => o.slug === slug);
    if (offer) return { offer, section };
  }
  return undefined;
}

export function summerOfferImageSrc(imageKey: string): string {
  if (imageKey.startsWith('@public/')) {
    return `/${imageKey.slice('@public/'.length)}`;
  }
  if (imageKey.startsWith('/')) {
    return imageKey;
  }
  return `/utils/oferta-letnia/${imageKey}.png`;
}
