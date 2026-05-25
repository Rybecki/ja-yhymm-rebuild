
export type SummerOffer = {
  slug: string;
  title: string;
  /** Krótki podpis na kafelku listy obozów letnich */
  subtitle: string;
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
      { slug: 'jura-military-camp', title: 'Jura Military Camp', subtitle: 'obóz militarny', imageKey: 'military-camp' },
      { slug: 'jura-survival-camp', title: 'Jura Survival Camp', subtitle: 'obóz przetrwania', imageKey: 'survival-camp' },
    ],
  },
  {
    id: 'wspinaczka-samoobrona',
    title: 'Wspinaczka & Samoobrona',
    offers: [
      { slug: 'jura-climbing-camp', title: 'Jura Climbing Camp', subtitle: 'obóz wspinaczkowy', imageKey: 'climbing-camp' },
      { slug: 'jura-fight-camp', title: 'Jura Fight Camp', subtitle: 'obóz samoobrony', imageKey: 'fight-camp' },
    ],
  },
  {
    id: 'offroad-multiprzygoda',
    title: 'Off-Road 4x4 & Multiprzygoda',
    offers: [
      {
        slug: 'jura-off-road-camp-4x4',
        title: 'Jura Off-Road Camp 4x4',
        subtitle: 'obóz off-roadowy',
        imageKey: '@public/utils/oferta-letnia/jura-off-road-camp-4x4/gallery/offroad-1.png',
      },
      {
        slug: 'jura-multi-camp',
        title: 'Jura Multi Camp',
        subtitle: 'obóz multiprzygodowy',
        imageKey: '@public/utils/oferta-letnia/jura-multi-camp/gallery/multi-4.png',
      },
    ],
  },
  {
    id: 'quady',
    title: 'Adrenalina na 4 kołach — Quady',
    offers: [
      { slug: 'jura-quad-academy-camp', title: 'Jura Quad Academy Camp', subtitle: 'obóz quadowy', imageKey: 'quad-academy-camp' },
      { slug: 'jura-quad-camp', title: 'Jura Quad Camp', subtitle: 'obóz quadowy', imageKey: 'quad-camp' },
    ],
  },
  {
    id: 'najmlodsi',
    title: 'Przygody dla najmłodszych',
    offers: [
      {
        slug: 'jura-kids-patrol-camp',
        title: 'Jura Kids Patrol Camp',
        subtitle: 'obóz leśnej misji dla najmłodszych',
        imageKey: 'kids-patrol-camp',
      },
      {
        slug: 'jura-lego-camp',
        title: 'Jura LEGO® Camp',
        subtitle: 'obóz LEGO',
        imageKey: '@public/utils/oferta-letnia/jura-lego-camp/gallery/lego-1.png',
      },
      {
        slug: 'jura-art-camp',
        title: 'Jura Art Camp',
        subtitle: 'obóz artystyczny',
        imageKey: '@public/utils/oferta-letnia/jura-art-camp/gallery/art-1.png',
      },
      {
        slug: 'jura-chill-fun',
        title: 'Jura Chill & Fun',
        subtitle: 'obóz relaksu i zabawy',
        imageKey: 'chill-fun',
      },
    ],
  },
  {
    id: 'jazda-konna',
    title: 'Jazda konna',
    offers: [
      {
        slug: 'oboz-jazdy-konnej',
        title: 'Obóz jazdy konnej',
        subtitle: 'obóz jeździecki',
        imageKey: '@public/utils/oferta-letnia/oboz-jazdy-konnej/gallery/kon-2.png',
      },
      {
        slug: 'beskidzki-rajd-konny',
        title: 'Beskidzki rajd konny',
        subtitle: 'obóz rajdu konnego',
        imageKey: '@public/utils/oferta-letnia/beskidzki-rajd-konny/gallery/rajd-4.png',
      },
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
