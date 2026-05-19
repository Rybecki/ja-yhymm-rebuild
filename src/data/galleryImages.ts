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
  'Samoobrona',
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
  {
    src: '/images/tematyka/wodne-4.png',
    alt: 'Skok z motorówki do wody w kamizelce ratunkowej',
    category: 'Atrakcje wodne i podwodne',
  },
  {
    src: '/images/tematyka/wodne-5.png',
    alt: 'Grupa na dmuchanym bananie wodnym holowanym za łodzią',
    category: 'Atrakcje wodne i podwodne',
  },
  {
    src: '/images/tematyka/wodne-6.png',
    alt: 'Nurkowanie podlodowe przy otworze w lodzie',
    category: 'Atrakcje wodne i podwodne',
  },
  { src: '/utils/oferta-letnia/jura-multi-camp/gallery/multi-4.png', alt: 'Grupa obozowiczów na jurajskiej skale', category: 'Obozy i kolonie' },
  { src: '/utils/oferta-letnia/jura-multi-camp/gallery/multi-1.png', alt: 'Paintball na polu — uczestnicy Jura Multi Camp', category: 'Paintball' },
  { src: '/utils/oferta-letnia/jura-multi-camp/gallery/multi-kraz.png', alt: 'Przejazd wojskowym KrAzem 255B 6×6 z grupą uczestników', category: 'Kraz' },
  { src: '/utils/oferta-letnia/jura-multi-camp/gallery/multi-kajak.png', alt: 'Spływ kajakowy na jurajskiej rzece', category: 'Atrakcje wodne i podwodne' },

  { src: '/images/tematyka/linowe-1.png', alt: 'Wspinaczka skałkowa z asekuracją instruktora', category: 'Zajęcia linowe i wspniaczka' },
  { src: '/images/tematyka/linowe-2.png', alt: 'Uczestnik podczas zjazdu linowego w terenie leśnym', category: 'Zajęcia linowe i wspniaczka' },
  { src: '/images/tematyka/linowe-3.png', alt: 'Wspinanie po skale z asekuracją', category: 'Zajęcia linowe i wspniaczka' },
  { src: '/images/tematyka/linowe-4.png', alt: 'Zajęcia linowe z perspektywy górnego stanowiska', category: 'Zajęcia linowe i wspniaczka' },

  { src: '/images/tematyka/konie-1.png', alt: 'Jazda konna na padoku', category: 'Jazda konna' },
  { src: '/images/tematyka/konie-2.png', alt: 'Portret uczestniczki w siodle', category: 'Jazda konna' },
  {
    src: '/images/tematyka/konie-3.png',
    alt: 'Dwoje dzieci w kaskach podczas nauki jazdy konnej na piaszczystym padoku',
    category: 'Jazda konna',
  },
  {
    src: '/images/tematyka/konie-4.png',
    alt: 'Vaulting — zajęcia woltyżerskie na koniu w hali jeździeckiej',
    category: 'Jazda konna',
  },
  { src: '/utils/oferta-letnia/oboz-jazdy-konnej/gallery/kon-2.png', alt: 'Nauka jazdy konnej — Brenna', category: 'Jazda konna' },
  { src: '/utils/oferta-letnia/oboz-jazdy-konnej/gallery/oboz-2.png', alt: 'Jazda konna w terenie — grupa na koniach', category: 'Jazda konna' },
  { src: '/utils/oferta-letnia/oboz-jazdy-konnej/gallery/kon-3.png', alt: 'Wyjazd konny z grupą uczestników', category: 'Jazda konna' },
  { src: '/utils/oferta-letnia/oboz-jazdy-konnej/gallery/kon-4.png', alt: 'Dziecko na koniu z instruktorką', category: 'Jazda konna' },
  { src: '/utils/oferta-letnia/beskidzki-rajd-konny/gallery/raid-2.png', alt: 'Zajęcia na ujeżdżalni — Beskidzki rajd konny', category: 'Jazda konna' },
  { src: '/utils/oferta-letnia/beskidzki-rajd-konny/gallery/rajd-2.png', alt: 'Rajd konny w terenie — Brenna', category: 'Jazda konna' },
  { src: '/utils/oferta-letnia/beskidzki-rajd-konny/gallery/rajd-3.png', alt: 'Chłopiec na koniu — rajd konny', category: 'Jazda konna' },
  { src: '/utils/oferta-letnia/beskidzki-rajd-konny/gallery/rajd-4.png', alt: 'Młody jeździec na koniu pinto', category: 'Jazda konna' },
  {
    src: '/images/tematyka/konie-5.png',
    alt: 'Portret konia — ujęcie z szerokiej optyki na padoku',
    category: 'Jazda konna',
  },
  {
    src: '/images/tematyka/konie-6.png',
    alt: 'Amazonka tuląca szyję konia podczas zajęć jeździeckich',
    category: 'Jazda konna',
  },

  { src: '/images/szkolenia/szkolenia1.png', alt: 'Manewry ratownicze na łodzi', category: 'Szkolenia i kursy' },
  { src: '/images/szkolenia/szkolenia2.png', alt: 'Szkolenie linowe nad wodą', category: 'Szkolenia i kursy' },
  { src: '/images/szkolenia/szkolenia3.png', alt: 'Ćwiczenia BLS na fantomie', category: 'Szkolenia i kursy' },
  { src: '/images/tematyka/ratownictwo-1.png', alt: 'Grupa uczestników szkolenia', category: 'Szkolenia i kursy' },
  {
    src: '/images/tematyka/ratownictwo-2.png',
    alt: 'Ratownicy na łodzi RIB podczas ćwiczeń na wodzie',
    category: 'Szkolenia i kursy',
  },
  {
    src: '/images/tematyka/ratownictwo-3.png',
    alt: 'Akcja ratownicza z wody — amfibia Argo i ratownicy w kombinezonach',
    category: 'Szkolenia i kursy',
  },

  { src: '/images/tematyka/wojskowe-pojazdy.png', alt: 'Wojskowy pojazd KRAZ 6x6', category: 'Kraz' },
  { src: '/images/tematyka/kraz-1.png', alt: 'Przejażdżka KRAZ-em z grupą uczestników', category: 'Kraz' },
  { src: '/images/tematyka/kraz-2.png', alt: 'Pojazd KRAZ 6x6 na postoju w terenie', category: 'Kraz' },

  { src: '/utils/oferta-letnia/military-camp.png', alt: 'Militarny patrol przy akwenie', category: 'Militaria' },
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/militaria-3.png', alt: 'Ćwiczenia w warunkach terenowych', category: 'Militaria' },
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/militaria-2.png', alt: 'Ewakuacja i zadania zespołowe', category: 'Militaria' },
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/militaria-1.png', alt: 'Uczestnik obozu militarnego w pełnym kamuflażu', category: 'Militaria' },

  { src: '/utils/oferta-letnia/jura-off-road-camp-4x4/gallery/offroad-1.png', alt: 'Jeep Cherokee 4×4 na stromym podjeździe w lesie', category: 'Off-Road' },
  { src: '/utils/oferta-letnia/jura-off-road-camp-4x4/gallery/offroad-2.png', alt: 'Uczestnicy obozu w Jeepie na błotnistym terenie', category: 'Off-Road' },
  { src: '/utils/oferta-letnia/jura-off-road-camp-4x4/gallery/offroad-3.png', alt: 'Obozowicze na Jeepie 4×4 na piaszczystym torze', category: 'Off-Road' },
  { src: '/utils/oferta-letnia/jura-off-road-camp-4x4/gallery/offroad-4.png', alt: 'Młodzież z Jeepem Cherokee w lesie', category: 'Off-Road' },

  { src: '/images/tematyka/paintball-1.png', alt: 'Paintball w lesie', category: 'Paintball' },
  { src: '/images/tematyka/paintball-2.png', alt: 'Drużyna paintballowa', category: 'Paintball' },
  { src: '/images/tematyka/paintball-3.png', alt: 'Snajperska pozycja paintball', category: 'Paintball' },

  { src: '/utils/oferta-letnia/quad-camp.png', alt: 'Quady na piaszczystym torze', category: 'Quady i motocross' },
  { src: '/images/tematyka/quady-1.png', alt: 'Quad podczas przejazdu przez błotnistą przeszkodę', category: 'Quady i motocross' },
  { src: '/images/tematyka/quady-2.png', alt: 'Czerwony quad z uczestnikami na leśnej trasie', category: 'Quady i motocross' },
  { src: '/images/tematyka/quady-3.png', alt: 'Grupa uczestników na quadach na piaszczystym terenie', category: 'Quady i motocross' },

  { src: '/images/tematyka/survival-1.png', alt: 'Nocleg i ognisko w lesie', category: 'Survival' },
  { src: '/images/tematyka/survival-2.png', alt: 'Przeprawa bagienna', category: 'Survival' },
  { src: '/utils/oferta-letnia/jura-survival-camp/gallery/survival-1.png', alt: 'Gotowanie w warunkach terenowych', category: 'Survival' },
  { src: '/utils/oferta-letnia/jura-survival-camp/gallery/survival-3.png', alt: 'Rozpalanie ognia podczas zajęć survivalowych', category: 'Survival' },

  {
    src: '/utils/oferta-letnia/jura-fight-camp/gallery/fight-4.png',
    alt: 'Trening samoobrony pod drewnianą altaną — ćwiczenia na matach, Fight Camp',
    category: 'Samoobrona',
  },
  {
    src: '/utils/oferta-letnia/jura-fight-camp/gallery/fight-2.png',
    alt: 'Zajęcia samoobrony na świeżym powietrzu na niebieskich matach',
    category: 'Samoobrona',
  },
  {
    src: '/utils/oferta-letnia/jura-fight-camp/gallery/fight-3.png',
    alt: 'Ćwiczenia w parterze pod okiem instruktora — Fight Camp',
    category: 'Samoobrona',
  },
  {
    src: '/utils/oferta-letnia/fight-camp.png',
    alt: 'Jura Fight Camp — zajęcia z samoobrony i sztuk walki',
    category: 'Samoobrona',
  },

  {
    src: '/utils/oferta-letnia/jura-art-camp/gallery/art-1.png',
    alt: 'Warsztaty plastyczne — dzieci tworzą prace z kolorowego papieru',
    category: 'Szkolenia i kursy',
  },
  {
    src: '/utils/oferta-letnia/jura-art-camp/gallery/art-2.png',
    alt: 'Rysowanie kolorowych kompozycji podczas Jura Art Camp',
    category: 'Szkolenia i kursy',
  },
  {
    src: '/utils/oferta-letnia/jura-art-camp/gallery/art-3.png',
    alt: 'Warsztaty artystyczne — twórcza praca uczestników obozu',
    category: 'Szkolenia i kursy',
  },
  {
    src: '/utils/oferta-letnia/jura-art-camp/gallery/art-4.jpg',
    alt: 'Malowanie stóp kolorowymi farbami — warsztat plastyczny',
    category: 'Szkolenia i kursy',
  },

  { src: '/utils/oferta-letnia/jura-lego-camp/gallery/lego-1.png', alt: 'Budowanie z klocków LEGO na obozie', category: 'Szkolenia i kursy' },
  { src: '/utils/oferta-letnia/jura-lego-camp/gallery/lego-2.png', alt: 'Dziecko z robotem z klocków LEGO', category: 'Szkolenia i kursy' },
  { src: '/utils/oferta-letnia/jura-lego-camp/gallery/lego-3.png', alt: 'Warsztaty LEGO — budowa pojazdów i domów', category: 'Szkolenia i kursy' },
  { src: '/utils/oferta-letnia/jura-lego-camp/gallery/lego-4.png', alt: 'Kreatywna zabawa klockami LEGO', category: 'Szkolenia i kursy' },
];
