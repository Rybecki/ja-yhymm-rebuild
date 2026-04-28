import type { SummerOfferDetail } from './types';

const G = '/utils/oferta-letnia/jura-survival-camp/gallery';
const LESNA = '/utils/oferta-letnia/jura-military-camp/gallery';

export const JURA_SURVIVAL_CAMP_DETAIL: SummerOfferDetail = {
  gallery: [
    { src: `${G}/survival-1.png`, alt: 'Survival — przygotowanie posiłku i ognia w lesie' },
    { src: `${G}/survival-2.png`, alt: 'Budowa szałasu z gałęzi — Leśna Baza przetrwania' },
    { src: `${G}/survival-3.png`, alt: 'Rozpalanie ognia i praca zespołowa przy ognisku' },
  ],
  youtubeVideoId: 'VPfshP1kDGw',
  aboutSectionTitle: 'O obozie',
  aboutLeadTitle: 'SURVIVAL EXPEDITION – ZOSTAŃ JURAJSKIM WOJOWNIKIEM PRZETRWANIA!',
  aboutBlocks: [
    {
      title: 'MISJA BAGNO',
      body:
        'Zapomnij o czystych butach! Czekają Cię przeprawy przez mokradła, forsowanie błota z linami w ręku i desant terenówkami w najdziksze zakątki Jury.',
    },
    {
      title: 'MISTRZ OGNIA I LEŚNA BAZA',
      body:
        'Przejmij kontrolę nad żywiołami. Nauczymy Cię rozpalać ogień bez zapałek, budować schronienie od zera i przetrwać noc w lesie, polegając tylko na sobie i swoim zespole.',
    },
    {
      title: 'PLENEROWY ESCAPE ROOM I TROPICIELSTWO',
      body:
        'Zmierz się z nocną presją czasu! Rozwiązuj kody w leśnym labiryncie, czytaj ślady zwierząt i naucz się poruszać bezszelestnie jak prawdziwy zwiadowca. Zdobądź odznakę lidera i udowodnij, że potrafisz przetrwać wszystko. Podejmij wyzwanie!',
    },
  ],
  aboutClosing: '',
  programSectionTitle: 'Program',
  programHeadline: 'JURA SURVIVAL CAMP – PRZETRWAJ, POKONAJ, ZWYCIĘŻ!',
  programAgeLine: '(11–14 lat) · (15–18 lat)',
  programIntro: [
    'Masz w sobie ducha odkrywcy? Chcesz sprawdzić, jak to jest polegać tylko na sobie w lesie, w górach, nad wodą i na bagnach?',
    'Pod okiem doświadczonych instruktorów survivalu nauczysz się radzić sobie w ekstremalnych warunkach niczym Bear Grylls!',
  ],
  programBullets: [],
  programSections: [
    {
      heading: 'I. STREFA SURVIVALU',
      items: [
        {
          title: 'MISTRZ OGNIA',
          body:
            'Rozpal ognisko bez zapałek, przygotuj posiłek w lesie i poznaj tajniki bezpiecznego korzystania z ognia.',
        },
        {
          title: 'LEŚNA BAZA PRZETRWANIA',
          body:
            'Zbuduj własny szałas, wybierz najlepsze miejsce na biwak i poznaj zasady bezpiecznego nocowania w terenie.',
        },
        {
          title: 'SZKOŁA LINOWA',
          body:
            'Poznaj węzły i techniki linowe przydatne w survivalu. Naucz się survivalowej wspinaczki.',
        },
        {
          title: 'IMPROWIZACYJNY SURVIVAL',
          body: 'Zrób coś z niczego! Korzystając z kilku przedmiotów, przygotuj schronienie lub posiłek.',
        },
      ],
    },
    {
      heading: 'II. STREFA WODY I TERENU',
      items: [
        {
          title: 'MISJA BAGNO',
          body:
            'Przeprawy przez mokradła, błoto i naturalne przeszkody z wykorzystaniem lin i pomysłowości.',
        },
        {
          title: 'WODNA EKSPEDYCJA',
          body:
            'Trening kajakowy i wodne szaleństwa. Nauka manewrowania kajakiem i zachowania bezpieczeństwa na wodzie.',
        },
        {
          title: 'JURAJSKI OFF-ROAD',
          body:
            'Przejażdżki terenowymi pojazdami po bezdrożach i błotnistych trasach. Emocje gwarantowane!',
        },
      ],
    },
    {
      heading: 'III. STREFA TAKTYKI I STRZELANIA',
      items: [
        {
          title: 'CEL I PRECYZJA',
          body: 'Strzelanie z broni pneumatycznej oraz łuków do celów nieruchomych i ruchomych.',
        },
        {
          title: 'ZGUBIONY? ZNAJDŹ DROGĘ!',
          body:
            'Zajęcia z orientacji w terenie. Nauka wyznaczania azymutu, obsługi busoli i czytania map.',
        },
        {
          title: 'GRA STRATEGICZNA: OPERACJA JURA',
          body:
            'Zespołowa gra terenowa z elementami survivalu i taktyki — wykonaj misję i zdobądź punkty!',
        },
      ],
    },
    {
      heading: 'IV. STREFA PRZYGODY I EMOCJI – TEST ODWAGI',
      items: [
        {
          title: 'NOCNA MISJA',
          body:
            'Wieczorna gra terenowa z latarkami: ciche poruszanie, tropienie, szyfrowanie, zadania pod presją czasu.',
        },
        {
          title: 'ESCAPE Z LASU',
          body: 'Plenerowy escape room z zagadkami, kodami i ukrytymi wskazówkami.',
        },
        {
          title: 'SZKOŁA TROPICIELI',
          body:
            'Nauka rozpoznawania tropów zwierząt, śladów, odgłosów lasu i technik maskowania.',
        },
      ],
    },
    {
      heading: 'V. STREFA RELAKSU I INTEGRACJI',
      items: [
        {
          title: 'AKTYWNE POPOŁUDNIA',
          body: 'Turnieje sportowe, plażowanie, siatkówka, frisbee i gry terenowe.',
        },
        {
          title: 'WIECZORNE OGNISKA I DYSKOTEKI',
          body: 'Muzyka, zabawa i przyjaźnie na całe życie — klasyka każdego obozu.',
        },
      ],
    },
    {
      heading: 'VI. STREFA ZAKOŃCZENIA MISJI',
      items: [
        {
          title: '',
          body:
            'Na koniec obozu każdy uczestnik otrzyma: Certyfikat „Jurajskiego Wojownika Przetrwania”, a najlepsi — specjalne odznaki: Mistrz Ognia, Najlepszy Strzelec, Zwiadowca Jury, Lider Drużyny.',
        },
      ],
    },
  ],
  programFooter: '',
  optionalSectionTitle: 'Program fakultatywny',
  optionalIntro:
    'Dla tych, którzy chcą przeżyć jeszcze więcej przygód i dodać do swojego obozu odrobinę adrenaliny, przygotowaliśmy bogaty program zajęć fakultatywnych. To idealny sposób, by urozmaicić pobyt na Jurze i odkryć nowe wrażenia — od emocji off-roadowych po wodny relaks i zwiedzanie jurajskich zamków!',
  optionalItems: [
    'Przejażdżka autem terenowym – dynamiczna jazda po jurajskich szlakach (min. 5 osób) – 50 zł',
    'Ekspedycja 4×4 po Jurajskim Wąwozie pełnym błota i przeszkód terenowych – prawdziwa off-roadowa przygoda dla miłośników adrenaliny – 200 zł',
    'Przejażdżka quadem – poczuj moc silnika i pokonaj jurajskie bezdroża! – 50 zł',
    'KRAZ – wojskowa ciężarówka terenowa – niezapomniany przejazd potężnym pojazdem! (min. 10 osób) – 75 zł',
    'Paintball – pełna emocji rozgrywka z dynamicznymi scenariuszami! (min. 8 osób, 100 kulek) – 130 zł',
    'Dodatkowe 100 kulek do paintballa – dla tych, którzy chcą grać dłużej – 50 zł',
    'Zajęcia na ściance wspinaczkowej – doskonały trening równowagi i odwagi – 30 zł',
    'Blok zabaw na dmuchańcach – skoki, wyścigi i śmiech do łez – 40 zł',
    'Mirów, Bobolice i Olsztyn – z przewodnikiem, zwiedzaniem kompleksu skalnego oraz słodkim finałem: gofry i gorąca czekolada dla każdego! (min. 20 osób) – 185 zł',
    'Park Wodny Jura – wodne atrakcje, zjeżdżalnie i pełen relaks (min. 7 osób) – 80 zł',
    'Całodniowa wycieczka do Ogrodzieńca i Parku Wodnego Jura – zwiedzanie zamku i wodne szaleństwa (min. 7 osób) – 130 zł',
    'Zamek Ogrodzieniec + Park Wodny Jura + Galeria Motoryzacji + degustacja burgera w restauracji „Mały Książę” – połączenie historii, relaksu i motoryzacyjnej pasji – 185 zł',
    'Stacja Grawitacja – Park Trampolin w Częstochowie, największy park trampolin w regionie (min. 8 osób) – 120 zł',
  ],
  accommodationSectionTitle: 'Zakwaterowanie',
  accommodationParagraphs: [
    'Drewniane domki letniskowe w „Leśnej Bazie” w Janowie przy bazie ZHP, na Jurze Krakowsko-Częstochowskiej.',
    'Domki 6–8-osobowe z łazienkami, możliwe łóżka piętrowe.',
    'Do dyspozycji uczestników: budynek z jadalnią, świetlica, miejsce na ognisko, teren rekreacyjny.',
  ],
  accommodationImages: [
    { src: `${LESNA}/lesna-baza-1.png`, alt: 'Leśna Baza — obóz w lesie, widok z góry' },
    { src: `${LESNA}/lesna-baza-2.png`, alt: 'Leśna Baza — jadalnia na świeżym powietrzu' },
  ],
  priceIncludesTitle: 'Cena zawiera',
  priceIncludes: [
    'Zakwaterowanie: 9 noclegów',
    'Wyżywienie: śniadania i kolacje w formie bufetu, obiad serwowany. Pierwszy posiłek: kolacja w dniu przyjazdu. Ostatni posiłek: śniadanie w dniu wyjazdu oraz prowiant na drogę powrotną. Możliwe wyżywienie w formie smacznego cateringu.',
    'Dopłata do diety: wegetariańskiej / bezglutenowej / bezlaktozowej – 200 zł.',
    'Transport: autokar turystyczny.',
    'Ubezpieczenie: Signal Iduna Polska TU S.A.: NNW 15 000 zł.',
    'Obowiązkowe składki na Turystyczny Fundusz Gwarancyjny i Turystyczny Fundusz Pomocowy – 4 zł.',
    'Opieka pedagogiczna i instruktorska.',
    'Realizacja programu.',
  ],
  priceExcludesTitle: 'Cena nie zawiera',
  priceExcludes: [
    'dopłaty za transport z miast wyszczególnionych w planie podróży,',
    'dopłaty za program fakultatywny,',
    'dopłat do wybranych diet,',
    'dopłaty za dodatkowe świadczenia w przypadku łączenia turnusów (nocleg, wyżywienie, opieka kadry) – 300 zł.',
  ],
  practicalSectionTitle: 'Informacje praktyczne',
  practicalParagraphs: [
    'Obóz kierowany jest do osób lubiących większą aktywność fizyczną.',
    'Zajęcia prowadzone są przez wykwalifikowanych instruktorów.',
    'Wszystkie zajęcia będą dopasowane do stanu psychofizycznego uczestników i warunków pogodowych.',
    'Zabierz ze sobą: legitymację szkolną, wypełnioną i podpisaną kartę kwalifikacyjną, odzież i obuwie odpowiednie do planowanych aktywności, obuwie zmienne, ręcznik kąpielowy, podpisz bagaż.',
    'Od każdego uczestnika pierwszego dnia pobytu pobierana jest kaucja w wysokości 50 zł na pokrycie ewentualnych strat spowodowanych przez niego w wyposażeniu ośrodka.',
  ],
  equipmentSectionTitle: 'NASZ SPRZĘT: JAKOŚĆ, KTÓRA ROBI RÓŻNICĘ',
  equipmentIntro:
    'Podczas naszych obozów nie uznajemy półśrodków. Korzystamy wyłącznie z markowego wyposażenia, które gwarantuje pełne bezpieczeństwo i maksymalne osiągi w terenie:',
  equipmentBlocks: [
    {
      title: 'OFF-ROAD I MOC',
      body:
        'Prowadzisz legendarne maszyny! Flota quadów to m.in. Arctic Cat 650, 700, Yamaha Grizzly 660, Honda TRX 500, Kymco KXR 250. Do tego terenówki Jeep Cherokee, Nissan Terrano oraz unikalna, wojskowa bestia Kraz 255B 6×6, która przejedzie przez wszystko.',
    },
    {
      title: 'PIT-BIKE',
      body: 'Zwinne minikrosy MRF 120 oraz X-Motos 125 – idealne do nauki dynamicznej jazdy w terenie.',
    },
    {
      title: 'PAINTBALL I STRZELECTWO',
      body:
        'Niezawodne markery Tippmann i BT oraz profesjonalne maski termiczne (Empire, Valken), które nie parują w ferworze walki. Na strzelnicy czekają wiatrówki, łuki i karabinki ASG.',
    },
    {
      title: 'ALPINISTYKA I WSPINACZKA',
      body:
        'Korzystamy z atestowanego sprzętu światowych liderów: Petzl, Mammut, Camp. Posiadamy własną mobilną ściankę wspinaczkową z 4 trasami o różnym stopniu trudności.',
    },
    {
      title: 'WODA',
      body:
        'Wytrzymałe kajaki polietylenowe – stabilne, bezpieczne, gotowe na każdą przygodę, wyposażone w kamizelki asekuracyjne i wiosła.',
    },
    {
      title: 'INFRASTRUKTURA I TRANSPORT',
      body:
        'Własna baza z komfortowymi namiotami wojskowymi, poligonem paintballowym, torem off-road i parkiem linowym. Dzięki autolawetom i busom jesteśmy w pełni mobilni i niezależni.',
    },
  ],
  termsSectionTitle: 'Terminy i ceny',
  termsSubtitle: 'Jura Survival Camp — Leśna Baza',
  termsDisclaimer: 'Uwaga! Ceny mogą ulec zmianie. Przed rezerwacją zapytaj o cenę telefonicznie lub mailowo.',
  terms: [
    {
      dateRange: '27.06 – 06.07.2026',
      durationLabel: '10 dni',
      price: '2699 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_SURVIVAL_CAMP_2026_PAX_FB&skrot2=KPOH0627&klucz=JURA%20SURVIVAL%20CAMP%202026',
    },
    {
      dateRange: '07.07 – 16.07.2026',
      durationLabel: '10 dni',
      price: '2699 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_SURVIVAL_CAMP_2026_PAX_FB&skrot2=KPOH0707&klucz=JURA%20SURVIVAL%20CAMP%202026',
    },
    {
      dateRange: '17.07 – 26.07.2026',
      durationLabel: '10 dni',
      price: '2699 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_SURVIVAL_CAMP_2026_PAX_FB&skrot2=KPOH0717&klucz=JURA%20SURVIVAL%20CAMP%202026',
    },
    {
      dateRange: '27.07 – 05.08.2026',
      durationLabel: '10 dni',
      price: '2699 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_SURVIVAL_CAMP_2026_PAX_FB&skrot2=KPOH0727&klucz=JURA%20SURVIVAL%20CAMP%202026',
    },
    {
      dateRange: '06.08 – 15.08.2026',
      durationLabel: '10 dni',
      price: '2699 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_SURVIVAL_CAMP_2026_PAX_FB&skrot2=KPOH0806&klucz=JURA%20SURVIVAL%20CAMP%202026',
    },
    {
      dateRange: '16.08 – 25.08.2026',
      durationLabel: '10 dni',
      price: '2699 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_SURVIVAL_CAMP_2026_PAX_FB&skrot2=KPOH0816&klucz=JURA%20SURVIVAL%20CAMP%202026',
    },
  ],
  reserveHref:
    'mailto:biuro@ja-yhymm.pl?subject=Rezerwacja%20%E2%80%93%20Jura%20Survival%20Camp',
};
