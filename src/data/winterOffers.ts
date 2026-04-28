import type { SummerOfferDetail } from './summerOfferDetails';

export type WinterOffer = {
  slug: string;
  title: string;
  imageSrc: string;
};

export const WINTER_OFFERS: WinterOffer[] = [
  {
    slug: 'jurajska-akademia-komandosow',
    title: 'Jurajska akademia komandosów',
    imageSrc: '/utils/oferta-zimowa/jurajska-akademia-komandosow/hero.png',
  },
  {
    slug: 'jurajska-zimowa-multi-przygoda',
    title: 'Jurajska zimowa multi-przygoda',
    imageSrc: '/utils/oferta-zimowa/jurajska-zimowa-multi-przygoda/hero.png',
  },
];

const JURA_MIL_BASE = '/utils/oferta-letnia/jura-military-camp/gallery';

export const JURAJSKA_AKADEMIA_KOMANDOSOW_DETAIL: SummerOfferDetail = {
  gallery: [
    { src: `${JURA_MIL_BASE}/militaria-1.png`, alt: 'Uczestnik obozu militarniego w kamuflazu i helmie' },
    { src: `${JURA_MIL_BASE}/militaria-2.png`, alt: 'Cwiczenia w dymie - przenoszenie sprzetu zespolowo' },
    { src: `${JURA_MIL_BASE}/militaria-3.png`, alt: 'Grupa taktyczna z replikami broni przy stawie' },
  ],
  aboutSectionTitle: 'O obozie',
  aboutLeadTitle: 'Zloty Potok - serce Jury Krakowsko-Czestochowskiej',
  aboutBlocks: [
    {
      title: 'JURAJSKA LOKALIZACJA',
      body:
        'Mnostwo atrakcji w najblizszej okolicy: Zrodlo spelnionych marzen, Mlyn Kolaczew, Staw Sen Nocy Letniej.',
    },
    {
      title: 'REZERWAT PARKOWE',
      body:
        'Diabelskie Mosty i Brama Twardowskiego poznacie podczas spaceru z przewodnikiem, laczacego przyrode i historie regionu.',
    },
  ],
  aboutClosing: 'To zima pelna przygody, wspolpracy i emocji na Szlaku Orlich Gniazd.',
  programSectionTitle: 'Program',
  programHeadline: 'JURAJSKA AKADEMIA KOMANDOSOW',
  programAgeLine: '(13-18 LAT)',
  programIntro: [
    'Gotowi na wyzwanie? Zapomnij o nudnych feriach!',
    'Nasz oboz to ekstremalna mieszanka militarnego szkolenia, survivalowych umiejetnosci, paintballowych potyczek i treningow sztuk walki.',
    'Przezyj prawdziwa przygode na Szlaku Orlich Gniazd.',
  ],
  programBullets: [
    {
      title: 'PODSTAWY SZKOLENIA WOJSKOWEGO',
      body: 'Musztra, maskowanie zima, zasady dzialania w trudnym terenie oraz ochrona VIP-ow.',
    },
    {
      title: 'PIERWSZA POMOC W EKSTREMALNYCH WARUNKACH',
      body:
        'Nauka udzielania pomocy w niskich temperaturach, symulacja ewakuacji rannych i ogrzewania poszkodowanych.',
    },
    {
      title: 'PAINTBALL W SNIEZNYM LESIE',
      body:
        'Taktyczne scenariusze z wykorzystaniem naturalnych oslon. Zapewniamy 600 kul, kombinezon, kamizelke ochronna, maske i rekawice.',
    },
    {
      title: 'SZTUKA PRZETRWANIA',
      body: 'Szukanie schronienia, rozpalanie ognia w wilgotnym sniegu i przygotowanie posilku w warunkach polowych.',
    },
    {
      title: 'TECHNIKI LINOWE',
      body: 'Zjazdy, ewakuacje i przeprawy przez zasniezone przeszkody terenowe.',
    },
    {
      title: 'INO - ZIMOWA IMPREZA NA ORIENTACJE',
      body:
        'Nocny rajd, przejazdy terenowkami i poruszanie sie po nieznanym terenie przy ograniczonej widocznosci.',
    },
    {
      title: 'TRENINGI SAMOOBRONY',
      body: 'Zajecia z Jiu-Jitsu i Krav Maga.',
    },
    {
      title: 'WYPRAWY ZAMKOWE',
      body:
        'Zwiedzanie zamku w Bobolicach i ruin zamku w Olsztynie, polaczone z integracyjnymi grami terenowymi i zadaniami wojownika.',
    },
    {
      title: 'KULIG Z OGNISKIEM',
      body: 'Obowiazkowy punkt zimowego programu.',
    },
    {
      title: 'PLAY ROOM I STREFA GIER',
      body: 'PlayStation, dart, planszowki, kregle i Jenga XXL.',
    },
    {
      title: 'WIECZORY FILMOWE I TEMATYCZNE',
      body: 'Quizy, just dance i bingo.',
    },
  ],
  programFooter: '',
  optionalSectionTitle: 'Program fakultatywny',
  optionalIntro:
    'Dla chetnych przygotowalismy dodatkowe aktywnosci realizowane przy wymaganej liczbie uczestnikow.',
  optionalItems: [
    'Stacja Grawitacja Czestochowa - zabawa w najwiekszym Parku Trampolin w regionie - 120 PLN (realizacja przy 10 osobach)',
    'Ogrodzieniec z Parkiem Wodnym - spacer po zamku i godzinne szalenstwo wodne na basenach - 130 PLN (realizacja przy min 10 osobach)',
    'Przejazdzka autem terenowym - 30 min - 50 PLN (realizacja przy min 5 osobach)',
    'Przejazdzka quadem (dostepnosc uzalezniona od warunkow atmosferycznych) - 15 min - 50 PLN',
    'Przejazdzka wojskowym terenowym samochodem ciezarowym marki KRAZ - 20 min - 75 PLN',
  ],
  accommodationSectionTitle: 'Zakwaterowanie',
  accommodationParagraphs: [
    'Zloty Jelen - obiekt polozony w miejscowosci Zloty Potok, na terenie rezerwatu przyrody Parkowe.',
    'Pokoje 3-, 4-osobowe z lazienka, telewizorem i Wi-Fi.',
    'W budynku glownym: jadalnia, sala kominkowa, sala dyskotekowa oraz duzy teren rekreacyjny do gier i zabaw.',
  ],
  accommodationImages: [
    { src: `${JURA_MIL_BASE}/lesna-baza-1.png`, alt: 'Obiekt wsrod zieleni - widok ogolny' },
    { src: `${JURA_MIL_BASE}/lesna-baza-2.png`, alt: 'Przestrzen wspolna osrodka i zaplecze rekreacyjne' },
  ],
  priceIncludesTitle: 'Cena zawiera',
  priceIncludes: [
    'Zakwaterowanie: 7 noclegow.',
    'Wyzywienie: 3 posilki i deser. Pierwszy posilek: kolacja w dniu przyjazdu. Ostatni posilek: sniadanie w dniu wyjazdu oraz prowiant na droge powrotna.',
    'Transport: autokar turystyczny.',
    'Ubezpieczenie: Signal Iduna S.A.',
    'Opieka pedagogiczna i instruktorska.',
    'Realizacja programu.',
  ],
  priceExcludesTitle: 'Cena nie zawiera',
  priceExcludes: [
    'Doplat za transport z miast wyszczegolnionych w planie podrozy.',
    'Doplat za program fakultatywny.',
  ],
  practicalSectionTitle: 'Informacje praktyczne',
  practicalParagraphs: [
    'Zajecia prowadzone sa przez wykwalifikowanych wychowawcow.',
    'Wszystkie zajecia beda dopasowane do stanu psychofizycznego uczestnikow.',
    'Zabierz ze soba: legitymacje szkolna, wypelniona i podpisana karte kwalifikacyjna, odziez zimowa, obuwie zmienne, recznik kapielowy, podpisz bagaz.',
    'Od kazdego uczestnika pierwszego dnia pobytu pobierana jest kaucja w wysokosci 30 zl na pokrycie ewentualnych strat w wyposazeniu osrodka.',
    'Planowany przyjazd do osrodka ok. godz. 15:30. Planowany wyjazd z osrodka ok. godz. 10:30.',
    'Dojazd wlasny: przyjazd nie wczesniej niz o godz. 16:00, wyjazd nie pozniej niz o godz. 09:00.',
  ],
  equipmentSectionTitle: 'Sprzet i zaplecze',
  equipmentIntro: 'Podczas obozu korzystamy z profesjonalnego i bezpiecznego wyposazenia terenowego.',
  equipmentBlocks: [
    {
      title: 'WYPOSAZENIE SZKOLENIOWE',
      body: 'Sprzet do paintballa, treningow taktycznych, zajec linowych i scenariuszy survivalowych.',
    },
    {
      title: 'ZAPLECZE OBOZU',
      body: 'Teren do gier i zajec zespolowych oraz infrastruktura osrodka przystosowana do programu zimowego.',
    },
  ],
  termsSectionTitle: 'Terminy i ceny',
  termsSubtitle: 'Zloty Potok na Jurze - Jurajska Akademia Komandosow',
  termsDisclaimer: '',
  terms: [
    {
      dateRange: '14.02 - 21.02.2026',
      durationLabel: '8 dni',
      price: '2399 zl',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=zima&skrot=KPZZ~ZLOTY_POTOK_NA_JURZE_-_AKADEMIA_KOMANDOSOW_2026_PAX_FB&skrot2=KPZZ0214&klucz=ZLOTY%20POTOK%20NA%20JURZE%20-%20AKADEMIA%20KOMANDOSOW%202026',
    },
    {
      dateRange: '21.02 - 28.02.2026',
      durationLabel: '8 dni',
      price: '2399 zl',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=zima&skrot=KPZZ~ZLOTY_POTOK_NA_JURZE_-_AKADEMIA_KOMANDOSOW_2026_PAX_FB&skrot2=KPZZ0221&klucz=ZLOTY%20POTOK%20NA%20JURZE%20-%20AKADEMIA%20KOMANDOSOW%202026',
    },
  ],
  reserveHref:
    'mailto:biuro@ja-yhymm.pl?subject=Rezerwacja%20%E2%80%93%20Jurajska%20akademia%20komandosow',
};

const ZIMA_MULTI_BASE = '/utils/oferta-zimowa/jurajska-zimowa-multi-przygoda';

export const JURAJSKA_ZIMOWA_MULTI_PRZYGODA_DETAIL: SummerOfferDetail = {
  gallery: [
    { src: `${ZIMA_MULTI_BASE}/gallery/multi-1.png`, alt: 'Uczestnicy na pojezdzie terenowym podczas obozu' },
    { src: `${ZIMA_MULTI_BASE}/gallery/multi-2.png`, alt: 'Przejazdzka quadami w zimowej scenerii' },
    { src: `${ZIMA_MULTI_BASE}/gallery/multi-3.png`, alt: 'Paintball w sniegu - zimowa rywalizacja druzynowa' },
  ],
  aboutSectionTitle: 'O obozie',
  aboutLeadTitle: 'Zloty Potok - serce Jury Krakowsko-Czestochowskiej',
  aboutBlocks: [
    {
      title: 'JURAJSKA LOKALIZACJA',
      body:
        'Mnostwo atrakcji w najblizszej okolicy: Zrodlo spelnionych marzen, Mlyn Kolaczew, Staw Sen Nocy Letniej.',
    },
    {
      title: 'REZERWAT PARKOWE',
      body:
        'Diabelskie Mosty i Brama Twardowskiego poznacie podczas spaceru z przewodnikiem, laczacego przyrode i historie regionu.',
    },
  ],
  aboutClosing: 'To cos wiecej niz ferie - to prawdziwa przygoda, wspolpraca i dobra zabawa w zimowej scenerii Jury.',
  programSectionTitle: 'Program',
  programHeadline: 'JURAJSKA ZIMOWA MULTI-PRZYGODA',
  programAgeLine: '(10-16 LAT)',
  programIntro: [
    'Wyobraz sobie ferie zimowe inne niz wszystkie - pelne ekscytujacych wyzwan, przygody, zimowej aury i nowych przyjazni.',
    'Taki wlasnie jest nasz oboz w Zlotym Potoku, sercu malowniczej Jury Krakowsko-Czestochowskiej.',
    'To cos wiecej niz ferie - to prawdziwa przygoda, w ktorej poczujesz radosc odkrywania, wspolpracy i zabawy.',
  ],
  programBullets: [
    {
      title: 'JURAJSKI PAINTBALL',
      body:
        'Misja pelna wyzwan na jurajskim poligonie: 200 kulek do dyspozycji, zaskakujace scenariusze i druzynowa rywalizacja.',
    },
    {
      title: 'ZAJECIA STRZELECKIE',
      body:
        'Strzelanie z lukow i wiatrowek - instruktorzy wprowadza Cie w swiat koncentracji i precyzji.',
    },
    {
      title: 'OFF-ROAD',
      body:
        'Szalona ekspedycja po bezdrozach Jury samochodami terenowymi (30 min): predkosc, adrenalina, piasek, bloto i snieg.',
    },
    {
      title: 'ZIMOWA SZKOLA PRZETRWANIA',
      body: 'Survival w praktyce i umiejetnosci przetrwania w trudnych terenowych oraz pogodowych warunkach.',
    },
    {
      title: 'KULIG Z OGNISKIEM',
      body: 'Obowiazkowy punkt zimowego programu - relaks i piekne widoki.',
    },
    {
      title: 'BODY SUMO',
      body: 'Zabawa w rozmiarze XXL.',
    },
    {
      title: 'MEGA PILKA NA SNIEGU',
      body:
        'Gigantyczna pilka, snieg i druzynowe wyzwania. Dodatkowo budowanie igloo i epicka bitwa na sniezki.',
    },
    {
      title: 'PLAY ROOM I STREFA GIER',
      body: 'Przestrzen relaksu i zabawy dla calej grupy.',
    },
    {
      title: 'WIECZORY FILMOWE I TEMATYCZNE',
      body: 'Integracja, dobra atmosfera i aktywnosci wieczorne.',
    },
    {
      title: 'ZIMOWA OLIMPIADA',
      body: 'Konkurencje w stylu rzut sniezka do celu, slalom i przeciaganie liny na sniegu.',
    },
    {
      title: 'SPOTKANIE Z RATOWNIKAMI GOPR',
      body: 'Pokaz sprzetu i nauka podstaw bezpieczenstwa w gorach.',
    },
  ],
  programFooter: '',
  optionalSectionTitle: 'Program fakultatywny',
  optionalIntro:
    'Dla chetnych przygotowalismy dodatkowe aktywnosci realizowane przy wymaganej liczbie uczestnikow.',
  optionalItems: [
    'Stacja Grawitacja Czestochowa - zabawa w najwiekszym Parku Trampolin w regionie - 120 PLN (realizacja przy 10 osobach)',
    'Ogrodzieniec z Parkiem Wodnym - spacer po zamku i godzinne szalenstwo wodne na basenach - 130 PLN (realizacja przy min 10 osobach)',
    'Przejazdzka autem terenowym - 30 min - 50 PLN (realizacja przy min 5 osobach)',
    'Przejazdzka quadem (dostepnosc uzalezniona od warunkow atmosferycznych) - 15 min - 50 PLN',
    'Przejazdzka wojskowym terenowym samochodem ciezarowym marki KRAZ - 20 min - 75 PLN',
  ],
  accommodationSectionTitle: 'Zakwaterowanie',
  accommodationParagraphs: [
    'Zloty Jelen - obiekt polozony w miejscowosci Zloty Potok, na terenie rezerwatu przyrody Parkowe.',
    'Pokoje 3-, 4-osobowe z lazienka, telewizorem i Wi-Fi.',
    'W budynku glownym: jadalnia, sala kominkowa, sala dyskotekowa oraz duzy teren rekreacyjny do gier i zabaw.',
  ],
  accommodationImages: [
    { src: `${JURA_MIL_BASE}/lesna-baza-1.png`, alt: 'Obiekt wsrod zieleni - widok ogolny' },
    { src: `${JURA_MIL_BASE}/lesna-baza-2.png`, alt: 'Przestrzen wspolna osrodka i zaplecze rekreacyjne' },
  ],
  priceIncludesTitle: 'Cena zawiera',
  priceIncludes: [
    'Zakwaterowanie: 7 noclegow.',
    'Wyzywienie: 3 posilki i deser. Pierwszy posilek: kolacja w dniu przyjazdu. Ostatni posilek: sniadanie w dniu wyjazdu oraz prowiant na droge powrotna.',
    'Transport: autokar turystyczny.',
    'Ubezpieczenie: Signal Iduna S.A.',
    'Opieka pedagogiczna i instruktorska.',
    'Realizacja programu.',
  ],
  priceExcludesTitle: 'Cena nie zawiera',
  priceExcludes: [
    'Doplat za transport z miast wyszczegolnionych w planie podrozy.',
    'Doplat za program fakultatywny.',
  ],
  practicalSectionTitle: 'Informacje praktyczne',
  practicalParagraphs: [
    'Zajecia prowadzone sa przez wykwalifikowanych wychowawcow.',
    'Wszystkie zajecia beda dopasowane do stanu psychofizycznego uczestnikow.',
    'Zabierz ze soba: legitymacje szkolna, wypelniona i podpisana karte kwalifikacyjna, odziez zimowa, obuwie zmienne, recznik kapielowy, podpisz bagaz.',
    'Od kazdego uczestnika pierwszego dnia pobytu pobierana jest kaucja w wysokosci 30 zl na pokrycie ewentualnych strat w wyposazeniu osrodka.',
    'Planowany przyjazd do osrodka ok. godz. 15:30. Planowany wyjazd z osrodka ok. godz. 10:30.',
    'Dojazd wlasny: przyjazd nie wczesniej niz o godz. 16:00, wyjazd nie pozniej niz o godz. 09:00.',
  ],
  equipmentSectionTitle: 'Sprzet i zaplecze',
  equipmentIntro: 'Podczas obozu korzystamy z profesjonalnego i bezpiecznego wyposazenia terenowego.',
  equipmentBlocks: [
    {
      title: 'WYPOSAZENIE SZKOLENIOWE',
      body: 'Sprzet do paintballa, zajec strzeleckich, aktywnosci zimowych i scenariuszy survivalowych.',
    },
    {
      title: 'ZAPLECZE OBOZU',
      body: 'Teren do gier i zajec zespolowych oraz infrastruktura osrodka przystosowana do programu zimowego.',
    },
  ],
  termsSectionTitle: 'Terminy i ceny',
  termsSubtitle: 'Zloty Potok na Jurze - Jurajska zimowa multi-przygoda',
  termsDisclaimer: '',
  terms: [
    {
      dateRange: '14.02 - 21.02.2026',
      durationLabel: '8 dni',
      price: '2399 zl',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=zima&skrot=KPZZ~ZLOTY_POTOK_NA_JURZE_-_ZIMOWA_MULTI-PRZYGODA_2026_PAX_FB&skrot2=KPZZ0214&klucz=ZLOTY%20POTOK%20NA%20JURZE%20-%20ZIMOWA%20MULTI-PRZYGODA%202026',
    },
    {
      dateRange: '21.02 - 28.02.2026',
      durationLabel: '8 dni',
      price: '2399 zl',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=zima&skrot=KPZZ~ZLOTY_POTOK_NA_JURZE_-_ZIMOWA_MULTI-PRZYGODA_2026_PAX_FB&skrot2=KPZZ0221&klucz=ZLOTY%20POTOK%20NA%20JURZE%20-%20ZIMOWA%20MULTI-PRZYGODA%202026',
    },
  ],
  reserveHref:
    'mailto:biuro@ja-yhymm.pl?subject=Rezerwacja%20%E2%80%93%20Jurajska%20zimowa%20multi-przygoda',
};

const WINTER_DETAILS: Record<string, SummerOfferDetail> = {
  'jurajska-akademia-komandosow': JURAJSKA_AKADEMIA_KOMANDOSOW_DETAIL,
  'jurajska-zimowa-multi-przygoda': JURAJSKA_ZIMOWA_MULTI_PRZYGODA_DETAIL,
};

export function getWinterOfferBySlug(slug: string | undefined): WinterOffer | undefined {
  if (!slug) return undefined;
  return WINTER_OFFERS.find((offer) => offer.slug === slug);
}

export function getWinterOfferDetail(slug: string | undefined): SummerOfferDetail | undefined {
  if (!slug) return undefined;
  return WINTER_DETAILS[slug];
}
