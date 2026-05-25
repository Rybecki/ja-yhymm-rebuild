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
  { src: '/utils/oferta-letnia/quad-camp.png', alt: 'Quady na piaszczystym torze', category: 'Quady i motocross' },
  { src: '/images/tematyka/quady-1.png', alt: 'Jazda quadem i pit bike na piaszczystym szlaku w lesie', category: 'Quady i motocross' },
  { src: '/images/tematyka/quady-2.png', alt: 'Quad w dynamicznej jeździe po piasku — chmura pyłu za pojazdem', category: 'Quady i motocross' },
  { src: '/images/tematyka/quady-3.png', alt: 'Grupa uczestników na quadach w lesie — wyjazd integracyjny', category: 'Quady i motocross' },
  { src: '/images/tematyka/quady-4.png', alt: 'Czerwone quady na piaszczystych wzniesieniach w lesie', category: 'Quady i motocross' },
  { src: '/images/tematyka/quady-5.png', alt: 'Grupa na quadach w sosnowym lesie — złota godzina', category: 'Quady i motocross' },
  { src: '/images/tematyka/quady-6.png', alt: 'Kolumna quadów na torze off-road pod błękitnym niebem', category: 'Quady i motocross' },

  {
    src: '/images/tematyka/off-road-2.png',
    alt: 'Jeep Cherokee 4×4 ze snorklem na leśnym szlaku — uczestnicy obozu off-road',
    category: 'Off-Road',
  },
  {
    src: '/images/tematyka/off-road-3.png',
    alt: 'Jeep na nierównym podłożu w lesie — jazda terenowa z młodzieżą',
    category: 'Off-Road',
  },
  {
    src: '/images/tematyka/off-road-4.png',
    alt: 'Jeep 4×4 na piaszczystym torze w lesie — widok od tyłu z uczestnikami',
    category: 'Off-Road',
  },
  {
    src: '/images/tematyka/off-road-5.png',
    alt: 'Terenówka JA YHYMM w kamuflażu z grupą uczestników na leśnej trasie',
    category: 'Off-Road',
  },
  {
    src: '/images/tematyka/off-road-6.png',
    alt: 'Terenówka w błocie z uczestnikami obozu off-road na leśnym szlaku',
    category: 'Off-Road',
  },
  {
    src: '/images/tematyka/off-road-7.png',
    alt: 'Młodzież na dachu terenówki z dużymi oponami — wyjazd off-road w lesie',
    category: 'Off-Road',
  },

  { src: '/utils/oferta-letnia/military-camp.png', alt: 'Militarny patrol przy akwenie', category: 'Militaria' },
  {
    src: '/images/tematyka/militaria-1.png',
    alt: 'Uczestnik zajęć militarnych w kamuflażu, hełmie taktycznym i farbie maskującej',
    category: 'Militaria',
  },
  {
    src: '/images/tematyka/militaria-2.png',
    alt: 'Młodzież przenosząca ponton w dymie podczas ćwiczeń militarnych w błocie',
    category: 'Militaria',
  },
  {
    src: '/images/tematyka/militaria-3.png',
    alt: 'Przeprawa przez błotnisty rów — grupa czołga się w lesie podczas zajęć militarnych',
    category: 'Militaria',
  },
  {
    src: '/images/tematyka/militaria-4.png',
    alt: 'Grupa uczestników w mundurach wojskowych z replikami broni przed wojskowym transportem',
    category: 'Militaria',
  },
  {
    src: '/images/tematyka/militaria-5.png',
    alt: 'Strzelec w ghillie z repliką — pozycja leżąca w lesie',
    category: 'Militaria',
  },
  {
    src: '/images/tematyka/militaria-6.png',
    alt: 'Młodzież w kamuflażu z replikami broni na śniegu pod jurajskimi skałami',
    category: 'Militaria',
  },

  {
    src: '/images/tematyka/paintball-2.png',
    alt: 'Uczestnik paintballu w masce i kamizelce taktycznej — kciuk w górę',
    category: 'Paintball',
  },
  {
    src: '/images/tematyka/paintball-3.png',
    alt: 'Gracz paintballowy celujący za drewnianą zasłoną na polu',
    category: 'Paintball',
  },
  {
    src: '/images/tematyka/paintball-4.png',
    alt: 'Trójka graczy paintballowych za skałą — pozycja taktyczna w lesie',
    category: 'Paintball',
  },
  {
    src: '/images/tematyka/paintball-5.png',
    alt: 'Gracz paintballowy w pozycji bojowej na łące — wskazanie kierunku',
    category: 'Paintball',
  },
  {
    src: '/images/tematyka/paintball-6.png',
    alt: 'Duża grupa uczestników paintballu w lesie — zdjęcie zespołowe',
    category: 'Paintball',
  },
  {
    src: '/images/tematyka/paintball-7.png',
    alt: 'Grupa graczy paintballowych w kamuflażu na śniegu w lesie',
    category: 'Paintball',
  },

  {
    src: '/images/tematyka/survival-1.png',
    alt: 'Rozpalanie ognia krzemieniem i stalią — iskry na igiełkach sosnowych',
    category: 'Survival',
  },
  {
    src: '/images/tematyka/survival-3.png',
    alt: 'Gotowanie na ognisku w lesie — garnek nad płomieniami podczas zajęć survivalowych',
    category: 'Survival',
  },
  {
    src: '/images/tematyka/survival-4.png',
    alt: 'Schronienie survivalowe z gałęzi i świerku — uczestnik w kamuflażu w lesie',
    category: 'Survival',
  },
  {
    src: '/images/tematyka/survival-5.png',
    alt: 'Budowa schronienia z gałęzi i igiełek — zajęcia bushcraft w lesie',
    category: 'Survival',
  },
  {
    src: '/images/tematyka/survival-6.png',
    alt: 'Maskowanie w trawie — uczestnik z farbą maskującą podczas gry terenowej',
    category: 'Survival',
  },
  {
    src: '/images/tematyka/survival-7.png',
    alt: 'Uczestnik zajęć survivalowych z farbą maskującą i naturalnym kamuflażem',
    category: 'Survival',
  },

  { src: '/images/tematyka/wojskowe-pojazdy.png', alt: 'Wojskowy pojazd KRAZ 6x6', category: 'Kraz' },
  { src: '/images/tematyka/kraz-1.png', alt: 'Przejażdżka KRAZ-em z grupą uczestników', category: 'Kraz' },
  { src: '/images/tematyka/kraz-2.png', alt: 'Pojazd KRAZ 6x6 na postoju w terenie', category: 'Kraz' },
  { src: '/utils/oferta-letnia/jura-multi-camp/gallery/multi-kraz.png', alt: 'Przejazd wojskowym KrAzem 255B 6×6 z grupą uczestników', category: 'Kraz' },

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
  { src: '/utils/oferta-letnia/jura-multi-camp/gallery/multi-kajak.png', alt: 'Spływ kajakowy na jurajskiej rzece', category: 'Atrakcje wodne i podwodne' },

  { src: '/images/tematyka/linowe-1.png', alt: 'Grupa uczestników na szczycie skały — wspinaczka skałkowa w kaskach', category: 'Zajęcia linowe i wspniaczka' },
  { src: '/images/tematyka/linowe-2.png', alt: 'Wspinaczka na naturalnej skale z asekuracją na linie', category: 'Zajęcia linowe i wspniaczka' },
  { src: '/images/tematyka/linowe-3.png', alt: 'Zajęcia wspinaczkowe na skale — asekuracja i wspinaczka w terenie', category: 'Zajęcia linowe i wspniaczka' },
  { src: '/images/tematyka/linowe-4.png', alt: 'Tyrolka w lesie — uczestnik na linie w uprzęży i kasku', category: 'Zajęcia linowe i wspniaczka' },
  { src: '/images/tematyka/linowe-5.png', alt: 'Wspinaczka na czerwonej ściance z chwytami — zajęcia linowe', category: 'Zajęcia linowe i wspniaczka' },
  { src: '/images/tematyka/linowe-6.png', alt: 'Zawieszenie na linie przy ściance wspinaczkowej — zajęcia linowe', category: 'Zajęcia linowe i wspniaczka' },

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

  {
    src: '/utils/oferta-letnia/jura-fight-camp/gallery/fight-1.png',
    alt: 'Zapasy i rzut w obozie Fight Camp — trening na piasku w lesie',
    category: 'Samoobrona',
  },
  {
    src: '/utils/oferta-letnia/jura-fight-camp/gallery/fight-2.png',
    alt: 'Trening parterowy na niebieskiej macie pod okiem instruktora',
    category: 'Samoobrona',
  },
  {
    src: '/utils/oferta-letnia/jura-fight-camp/gallery/fight-3.png',
    alt: 'Ćwiczenia kopnięć z tarczą — trening samoobrony na świeżym powietrzu',
    category: 'Samoobrona',
  },
  {
    src: '/utils/oferta-letnia/jura-fight-camp/gallery/fight-4.png',
    alt: 'Grupowe zajęcia zapasów na matach w plenerze — Fight Camp',
    category: 'Samoobrona',
  },
  {
    src: '/utils/oferta-letnia/fight-camp.png',
    alt: 'Jura Fight Camp — zajęcia z samoobrony i sztuk walki',
    category: 'Samoobrona',
  },
];
