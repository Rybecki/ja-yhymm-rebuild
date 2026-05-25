export type SchoolTripPackage = {
  name: string;
  price: string;
  details: string;
};

export type SchoolTripDestination = {
  id: string;
  title: string;
  subtitle?: string;
  intro: string[];
  images?: { src: string; alt: string }[];
  programLabel?: string;
  program: string[];
  price: string;
  packages: SchoolTripPackage[];
  showExtras?: boolean;
  showTransport?: boolean;
  transportNote?: string;
};

export const SCHOOL_TRIPS_TAGLINE =
  'Jura Krakowsko‑Częstochowska • Śląsk • Edukacja • Integracja • Przygoda';

export const SCHOOL_TRIPS_INTRO = [
  'Od ponad 25 lat organizujemy autorskie wycieczki szkolne dla szkół podstawowych i ponadpodstawowych. Specjalizujemy się w wycieczkach po Jurze Krakowsko‑Częstochowskiej — regionie zamków, skał, jaskiń i niezwykłych legend.',
  'Tworzymy programy, które łączą edukację, aktywny wypoczynek, integrację oraz nowoczesne animacje dla dzieci i młodzieży.',
  'Nasze wycieczki nie są przypadkowymi, gotowymi schematami. Każdy program budujemy tak, aby uczniowie naprawdę przeżyli przygodę i wrócili z wyjazdu z emocjami, wspomnieniami i nową wiedzą. Wyjazdy, które proponujemy, to połączenie edukacji, integracji i prawdziwej przygody — każdy program dopasowujemy indywidualnie do wieku grupy oraz oczekiwań szkoły.',
];

export const SCHOOL_TRIPS_EXTRA_ATTRACTIONS = [
  'Wizyta w Muzeum Motoryzacji – niesamowite motocykle i zabytkowe pojazdy na wyciągnięcie ręki. Cena: +30 zł / osoba',
  'Przejażdżka wojskowym transportem 6×6 – ekstremalna przejażdżka potężną ciężarówką w terenie. Cena: +30 zł / osoba (min. 20 osób)',
  'Mini park linowy – bezpieczna dawka adrenaliny na wysokościach, dostosowana do wieku. Cena: +35 zł / osoba (min. 20 osób)',
  'Paintball (wersja tradycyjna lub strzelanie do celu dla młodszych) – dynamiczna gra zespołowa z pełnym sprzętem ochronnym. Cena: od +45 zł / osoba',
  'Strzelnica ASG – trening celności z replikami broni. Cena: od +25 zł / osoba',
  'Wiatrówki i łuki – turniej strzelecki z tradycyjnych łuków oraz wiatrówek sportowych. Cena: od +20 zł / osoba',
  'Quady – emocjonująca jazda na czterokołowcach po przygotowanym torze pod okiem instruktora. Cena: +50 zł / osoba',
  'Samochody terenowe (Off-road 4×4) – przeprawy autami terenowymi przez jurajskie bezdroża. Cena: od +50 zł / osoba',
  'Ścianka wspinaczkowa (pneumatyczna) – 1500 zł za 6 h + dwie osoby obsługi',
  'Dmuchańce – cztery dmuchane atrakcje w pakiecie (zjeżdżalnia Mario, wspinalnia Egzotyczny Żółw, zamek do skakania, ścianka wspinaczkowa). Cena: 4500 zł za 6 h',
];

export const SCHOOL_TRIPS_GASTRONOMY = [
  'Burger premium — od 39 zł/os.',
  'Obiad dwudaniowy — wycena indywidualna.',
];

export const SCHOOL_TRIPS_TRANSPORT = {
  intro:
    'Wychodzimy naprzeciw Waszym potrzebom – nasz kierowca odbierze Was spod samych drzwi szkoły. Cenę transportu rozliczamy sprawiedliwie i przejrzyście: za każdy przejechany kilometr (liczony od bazy/szkoły i z powrotem).',
  retro: {
    title: 'Opcja Retro: Autokar PRL Autosan H9-21 (max. 39 miejsc)',
    text: 'Prawdziwy hit i żywa lekcja historii na kółkach! Podróż, którą uczniowie zapamiętają na zawsze. Autokar sam w sobie jest atrakcją i żywą lekcją historii — to wyjątkowy klimat podróży, którego nie zapewni żaden zwykły autokar. Uczniowie uwielbiają przejazdy naszym retro autobusem, a nauczyciele doceniają niepowtarzalną atmosferę wyjazdu.',
  },
  modern: {
    title: 'Opcja Nowoczesna: transport zewnętrzny (autokary 45–60 miejsc)',
    text: 'Komfortowe, nowoczesne autokary turystyczne dopasowane do większych grup.',
  },
  warning:
    'Ze względu na dynamikę rynku stawki za kilometr (zarówno dla naszego Autosana, jak i przewoźników zewnętrznych) mogą ulec zmianie w zależności od aktualnych cen paliwa na rynku w dniu rezerwacji.',
};

export const SCHOOL_TRIP_DESTINATIONS: SchoolTripDestination[] = [
  {
    id: 'ogrodzieniec',
    title: 'Zamek Ogrodzieniec',
    subtitle: '„Jurajski gigant w pełnej krasie”',
    intro: [
      'Najbardziej rozpoznawalny zamek Jury Krakowsko‑Częstochowskiej i prawdziwa perła Szlaku Orlich Gniazd. Monumentalne ruiny Zamku Ogrodzieniec są symbolem regionu i jednym z najbardziej imponujących miejsc na szlaku.',
      'Ogromne mury, tajemnicze przejścia i wapienne skały tworzą niezwykły klimat, który zachwyca zarówno młodsze dzieci, jak i starszą młodzież. Zamek położony na wapiennym wzgórzu buduje atmosferę średniowiecznej przygody.',
    ],
    images: [
      {
        src: '/images/wycieczki-szkolne/zamek-ogrodzieniec-1.png',
        alt: 'Ruiny Zamku Ogrodzieniec na wapiennym wzgórzu — wycieczka szkolna',
      },
      {
        src: '/images/wycieczki-szkolne/zamek-ogrodzieniec-2.png',
        alt: 'Panorama Zamku Ogrodzieniec z zielonymi polami — wycieczka szkolna',
      },
    ],
    program: [
      'legendy o Czarnym Psie i dawnych rycerzach',
      'zwiedzanie dziedzińców, baszt i punktów widokowych',
      'miejsca znane z serialowego „Wiedźmina”, „Janosika”, „Zemsty”',
      'animacje terenowe i zagadki historyczne',
      'elementy historii średniowiecznej architektury obronnej',
    ],
    price: 'od 155 zł/os. bez transportu | transport od 35 zł/os. za każde przejechane 100 km (cena uzależniona od cen paliwa oraz wyboru rodzaju transportu)',
    packages: [
      { name: 'BASIC', price: 'od 155 zł/os.', details: 'zwiedzanie zamku, przewodnik, NNW' },
      { name: 'ACTIVE', price: 'od 200 zł/os.', details: 'BASIC + ognisko + gra terenowa' },
      { name: 'PREMIUM', price: 'od 280 zł/os.', details: 'ACTIVE + Piana Party lub dmuchańce + burger premium' },
    ],
    showExtras: true,
    showTransport: true,
  },
  {
    id: 'mirow-bobolice',
    title: 'Mirów i Bobolice',
    subtitle: '„Tajemnica dwóch braci”',
    intro: [
      'Jedna z najpiękniejszych tras Jury. Spacer pomiędzy zamkami prowadzi przez malowniczą Grzędę Mirowską pełną skał, jaskiń i jurajskich panoram. To połączenie aktywnej wycieczki, historii i prawdziwej przygody.',
    ],
    images: [
      {
        src: '/images/wycieczki-szkolne/zamek-mirow.png',
        alt: 'Ruiny zamku w Mirowie na wapiennym wzgórzu — wycieczka szkolna',
      },
      {
        src: '/images/wycieczki-szkolne/zamek-bobolice.png',
        alt: 'Zamek Bobolice na Jurze — wycieczka szkolna',
      },
    ],
    program: [
      'zwiedzanie ruin zamku w Mirowie',
      'zwiedzanie odbudowanego zamku Bobolice',
      'spacer Grzędą Mirowską',
      'gra terenowa i legendy Jury',
      'warsztaty i animacje dla młodszych grup',
    ],
    price: 'od 155 zł/os. bez transportu | transport od 35 zł/os. za każde przejechane 100 km (cena uzależniona od cen paliwa oraz wyboru rodzaju transportu)',
    packages: [
      { name: 'BASIC', price: 'od 155 zł/os.', details: 'zwiedzanie zamków, przewodnik, NNW' },
      { name: 'ACTIVE', price: 'od 200 zł/os.', details: 'BASIC + gra terenowa + ognisko' },
      { name: 'PREMIUM', price: 'od 280 zł/os.', details: 'ACTIVE + mini survival + burger premium' },
    ],
    showExtras: true,
    showTransport: true,
  },
  {
    id: 'olsztyn',
    title: 'Olsztyn Jurajski',
    subtitle: '„Baszta i podziemne sekrety”',
    intro: [
      'Ruiny zamku w Olsztynie położone pośród wapiennych skał i jurajskich ostańców tworzą wyjątkowy krajobraz. To idealna wycieczka dla grup, które chcą połączyć historię, przyrodę oraz aktywne poznawanie Jury.',
    ],
    program: [
      'poznawanie legend o podziemnych tunelach',
      'eksploracja jurajskich skał i ruin',
      'historia Maćka Borkowica',
      'elementy edukacji przyrodniczej i krasowej',
      'zajęcia terenowe i integracyjne',
    ],
    price: 'od 155 zł/os. bez transportu | transport od 35 zł/os. za każde przejechane 100 km (cena uzależniona od cen paliwa oraz wyboru rodzaju transportu)',
    packages: [
      { name: 'BASIC', price: 'od 155 zł/os.', details: 'zwiedzanie zamku, przewodnik, NNW' },
      { name: 'ACTIVE', price: 'od 200 zł/os.', details: 'BASIC + ognisko + strzelnica' },
      { name: 'PREMIUM', price: 'od 280 zł/os.', details: 'ACTIVE + atrakcje linowe + burger premium' },
    ],
    showExtras: true,
    showTransport: true,
  },
];

export const SCHOOL_TRIP_JURAJSKIE_TRIO = {
  title: 'Dwudniowa wycieczka „Jurajskie Trio”',
  intro: [
    'Najbardziej kompleksowa i najbardziej emocjonująca wycieczka JA‑YHYMM. Dwa dni pełne zwiedzania zamków, aktywności terenowych, integracji oraz wieczornego klimatu w samym sercu Jury Krakowsko‑Częstochowskiej.',
  ],
  program: [
    'zwiedzanie Olsztyna, Mirowa i Bobolic',
    'nocleg w ośrodku Złoty Jeleń w Złotym Potoku',
    'ognisko, karaoke lub dyskoteka integracyjna',
    'mini survival, paintball i gry terenowe',
    'finał wycieczki na Zamku Ogrodzieniec',
  ],
  price: 'od 590 zł/os. | transport od 35 zł/os. za każde przejechane 100 km (cena uzależniona od cen paliwa oraz wyboru rodzaju transportu)',
  packages: [
    { name: 'BASIC', price: 'od 590 zł/os.', details: '3 zamki, nocleg, śniadanie, przewodnik' },
    { name: 'ACTIVE', price: 'od 650 zł/os.', details: 'BASIC + ognisko + mini survival' },
    { name: 'PREMIUM', price: 'od 770 zł/os.', details: 'ACTIVE + paintball + dyskoteka + burger premium' },
  ],
};

export const SCHOOL_TRIP_SLASKI_WEHIKUL = {
  title: '„Śląski wehikuł czasu”',
  intro: [
    'Autorska wycieczka regionalna realizowana klimatycznym Autosanem PRL H9‑21. Podczas wyjazdu uczniowie poznają prawdziwy Śląsk — od familoków i osiedli robotniczych po nowoczesne centrum Katowic.',
  ],
  program: [
    'Nikiszowiec i Giszowiec',
    'Szopienice i historia przemysłu',
    'gra miejska i śląskie tradycje',
    'Strefa Kultury i Spodek',
    'animacje i integracja',
  ],
  price: 'od 170 zł/os. bez transportu | transport od 35 zł/os. za każde przejechane 100 km (cena uzależniona od cen paliwa oraz wyboru rodzaju transportu)',
  packages: [
    { name: 'BASIC', price: 'od 170 zł/os.', details: 'gra miejska, przewodnik, NNW' },
    { name: 'ACTIVE', price: 'od 210 zł/os.', details: 'BASIC + kręgle lub park trampolin' },
    { name: 'PREMIUM', price: 'od 270 zł/os.', details: 'ACTIVE + karaoke lub Piana Party + burger premium' },
  ],
  transportNote:
    'Transport realizowany naszym kultowym autokarem PRL — dodatkowa opcja nowoczesnego autokaru nie dotyczy tej wycieczki.',
};

export const SCHOOL_TRIPS_WHY_US = [
  '25 lat doświadczenia',
  'specjalizacja w Jurze Krakowsko‑Częstochowskiej oraz Śląsku',
  'autorskie programy i scenariusze',
  'bezpieczeństwo i profesjonalna kadra',
  'pełna organizacja wyjazdu',
  'połączenie edukacji, integracji i aktywności',
];
