export const GALLERY_CATEGORIES = [
  'Wszystkie',
  'Atrakcje wodne i podwodne',
  'Zajęcia linowe i wspniaczka',
  'Jazda konna',
  'Szkolenia i kursy',
  'Kraz',
  'Militaria',
  'Off-Road',
  'Paintball',
  'Quady i motocross',
  'Survival',
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export type GalleryImage = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, 'Wszystkie'>;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/images/tematyka/wodne-1.png', alt: 'Skoki i manewry na łodzi motorowej', category: 'Atrakcje wodne i podwodne' },
  { src: '/images/tematyka/wodne-2.png', alt: 'Przejażdżka na bananie wodnym', category: 'Atrakcje wodne i podwodne' },
  { src: '/utils/obozy-kolonie/lato.png', alt: 'Rekreacja na kole wodnym', category: 'Atrakcje wodne i podwodne' },
  { src: '/utils/oferta-letnia/jura-multi-camp/gallery/multi-1.png', alt: 'Spływ kajakowy na jurajskim akwenie', category: 'Atrakcje wodne i podwodne' },

  { src: '/images/tematyka/linowe-1.png', alt: 'Wspinaczka skałkowa z asekuracją instruktora', category: 'Zajęcia linowe i wspniaczka' },
  { src: '/images/tematyka/linowe-2.png', alt: 'Uczestnik podczas zjazdu linowego w terenie leśnym', category: 'Zajęcia linowe i wspniaczka' },
  { src: '/images/tematyka/linowe-3.png', alt: 'Wspinanie po skale z asekuracją', category: 'Zajęcia linowe i wspniaczka' },
  { src: '/images/tematyka/linowe-4.png', alt: 'Zajęcia linowe z perspektywy górnego stanowiska', category: 'Zajęcia linowe i wspniaczka' },

  { src: '/images/tematyka/konie-1.png', alt: 'Jazda konna na padoku', category: 'Jazda konna' },
  { src: '/images/tematyka/konie-2.png', alt: 'Portret uczestniczki w siodle', category: 'Jazda konna' },
  { src: '/images/tematyka/konie-3.png', alt: 'Nauka jazdy konnej w hali pod okiem instruktora', category: 'Jazda konna' },
  { src: '/images/tematyka/konie-4.png', alt: 'Grupowy przejazd konny szlakiem w górskim krajobrazie', category: 'Jazda konna' },

  { src: '/images/szkolenia/szkolenia1.png', alt: 'Manewry ratownicze na łodzi', category: 'Szkolenia i kursy' },
  { src: '/images/szkolenia/szkolenia2.png', alt: 'Szkolenie linowe nad wodą', category: 'Szkolenia i kursy' },
  { src: '/images/szkolenia/szkolenia3.png', alt: 'Ćwiczenia BLS na fantomie', category: 'Szkolenia i kursy' },
  { src: '/images/tematyka/ratownictwo-1.png', alt: 'Grupa uczestników szkolenia', category: 'Szkolenia i kursy' },

  { src: '/images/tematyka/wojskowe-pojazdy.png', alt: 'Wojskowy pojazd KRAZ 6x6', category: 'Kraz' },
  { src: '/utils/oferta-letnia/jura-multi-camp/gallery/multi-4.png', alt: 'Przejażdżka KRAZ-em', category: 'Kraz' },
  { src: '/images/tematyka/kraz-1.png', alt: 'Przejażdżka KRAZ-em z grupą uczestników', category: 'Kraz' },
  { src: '/images/tematyka/kraz-2.png', alt: 'Pojazd KRAZ 6x6 na postoju w terenie', category: 'Kraz' },

  { src: '/utils/oferta-letnia/military-camp.png', alt: 'Militarny patrol przy akwenie', category: 'Militaria' },
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/militaria-3.png', alt: 'Ćwiczenia w warunkach terenowych', category: 'Militaria' },
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/militaria-2.png', alt: 'Ewakuacja i zadania zespołowe', category: 'Militaria' },
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/militaria-1.png', alt: 'Uczestnik obozu militarnego w pełnym kamuflażu', category: 'Militaria' },

  { src: '/utils/oferta-letnia/jura-off-road-camp-4x4/gallery/offroad-4.png', alt: 'Off-road w błotnym terenie', category: 'Off-Road' },
  { src: '/utils/oferta-letnia/jura-off-road-camp-4x4/gallery/offroad-3.png', alt: 'Techniki terenowe OFF-ROAD', category: 'Off-Road' },
  { src: '/utils/oferta-letnia/jura-off-road-camp-4x4/gallery/offroad-1.png', alt: 'Załoga off-roadowa przy samochodzie 4x4', category: 'Off-Road' },
  { src: '/utils/oferta-letnia/jura-off-road-camp-4x4/gallery/offroad-2.png', alt: 'Samochód terenowy i quad na piaszczystym torze', category: 'Off-Road' },

  { src: '/images/tematyka/paintball-1.png', alt: 'Paintball w lesie', category: 'Paintball' },
  { src: '/images/tematyka/paintball-2.png', alt: 'Drużyna paintballowa', category: 'Paintball' },
  { src: '/images/tematyka/paintball-3.png', alt: 'Snajperska pozycja paintball', category: 'Paintball' },
  { src: '/utils/oferta-letnia/jura-multi-camp/gallery/multi-3.png', alt: 'Paintball na skałkach', category: 'Paintball' },

  { src: '/utils/oferta-letnia/quad-camp.png', alt: 'Quady na piaszczystym torze', category: 'Quady i motocross' },
  { src: '/images/tematyka/quady-1.png', alt: 'Quad podczas przejazdu przez błotnistą przeszkodę', category: 'Quady i motocross' },
  { src: '/images/tematyka/quady-2.png', alt: 'Czerwony quad z uczestnikami na leśnej trasie', category: 'Quady i motocross' },
  { src: '/images/tematyka/quady-3.png', alt: 'Grupa uczestników na quadach na piaszczystym terenie', category: 'Quady i motocross' },

  { src: '/images/tematyka/survival-1.png', alt: 'Nocleg i ognisko w lesie', category: 'Survival' },
  { src: '/images/tematyka/survival-2.png', alt: 'Przeprawa bagienna', category: 'Survival' },
  { src: '/utils/oferta-letnia/jura-survival-camp/gallery/survival-1.png', alt: 'Gotowanie w warunkach terenowych', category: 'Survival' },
  { src: '/utils/oferta-letnia/jura-survival-camp/gallery/survival-3.png', alt: 'Rozpalanie ognia podczas zajęć survivalowych', category: 'Survival' },
];
