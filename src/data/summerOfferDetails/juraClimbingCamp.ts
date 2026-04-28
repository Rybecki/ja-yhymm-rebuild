import type { SummerOfferDetail } from './types';

const G = '/utils/oferta-letnia/jura-climbing-camp/gallery';
const LESNA = '/utils/oferta-letnia/jura-military-camp/gallery';
const ZLOTY = '/utils/oferta-letnia/zloty-jelen';

export const JURA_CLIMBING_CAMP_DETAIL: SummerOfferDetail = {
  gallery: [
    { src: `${G}/climbing-1.png`, alt: 'Zjazd linowy w jurajskiej szczelinie skalnej' },
    { src: `${G}/climbing-2.png`, alt: 'Przygotowanie do zjazdu ze skały z uprzężą i liną' },
    { src: `${G}/climbing-3.png`, alt: 'Wspinaczka na jurajskiej ścianie wapiennej' },
  ],
  youtubeVideoId: '0GCXpgQo1oY',
  aboutSectionTitle: 'O obozie',
  aboutLeadTitle: 'JURAJSKI SZCZYT PRZYGODY – ZOSTAŃ MISTRZEM SKAŁ!',
  aboutBlocks: [
    {
      title: 'OD ŚCIANKI DO PRAWDZIWEJ SKAŁY',
      body:
        'Przejdź profesjonalne szkolenie od podstaw! Zacznij od sztucznej ścianki, by później pod okiem instruktorów zdobyć prawdziwe wapienne szczyty Jury.',
    },
    {
      title: 'SZKOŁA ASEKURACJI I LIN',
      body:
        'Naucz się profesjonalnej obsługi sprzętu (Grigri, ósemka, rolka) oraz wiązania węzłów. Buduj mosty linowe i poczuj dreszcz emocji podczas zjazdów pionowych!',
    },
    {
      title: 'NOC W GROCIE LUB POD NAMIOTEM',
      body:
        'Przeżyj niezapomnianą noc podczas prawdziwego biwaku w jaskini lub pod gwiazdami. Poznaj Jurę od środka i poczuj klimat prawdziwej górskiej wyprawy!',
    },
    {
      title: 'WSPINACZKA, PASJA I WIDOKI',
      body: 'Wspinaczka, pasja i widoki, których nie zapomnisz! Zacznij swoją wspinaczkę tutaj.',
    },
  ],
  aboutClosing: '',
  programSectionTitle: 'Program',
  programHeadline: 'Jura Climb Camp – obóz wspinaczkowy',
  programAgeLine: '(10–14 lat) · (15–18 lat)',
  programIntro: [
    'Wspinaczka i przygoda w jednym!',
    'Poczuj moc adrenaliny i odkryj swoje granice! Jeśli marzysz o prawdziwej górskiej przygodzie, chcesz nauczyć się wspinaczki wśród majestatycznych jurajskich skał i przeżyć coś, czego nie da się zapomnieć — ten obóz jest stworzony właśnie dla Ciebie!',
    'Czeka Cię intensywny trening wspinaczkowy, współpraca w grupie, nocne biwaki wśród jurajskich skał oraz zabawa w gronie rówieśników.',
  ],
  programBullets: [],
  programSections: [
    {
      heading: '',
      items: [
        {
          title: 'ETAP I: PODSTAWY WSPINACZKI I BEZPIECZEŃSTWO',
          body:
            'Nauczysz się asekuracji partnera i obsługi sprzętu (grigri, kubek, ósemka, płytka Stichta, rolka), opanujesz wiązanie węzłów, które uratują Ci skórę w terenie, weźmiesz udział w zajęciach na sztucznej ściance wspinaczkowej i specjalnej „wieży ze skrzynek” — zabawie, która uczy równowagi i zaufania.',
        },
        {
          title: 'ETAP II: TRENING TECHNIKI I MOCY',
          body:
            'Treningi na ściance i w terenie, ćwiczenia na „małpce” torze linowym rozwieszonym nad ziemią, budowa mostów linowych i przejścia nad przeszkodami, wspinaczka zespołowa i elementy rywalizacji — kto szybciej zdobędzie szczyt?',
        },
        {
          title: 'ETAP III: WYPRAWA W SKAŁY',
          body:
            'Kulminacja obozu! Czekają Cię realne wspinaczki w jurajskich skałach o różnym stopniu trudności. A wszystko to pod okiem doświadczonych instruktorów. Tu sprawdzisz swoje umiejętności, nabierzesz pewności siebie i poczujesz prawdziwą satysfakcję ze zdobycia szczytu!',
        },
        {
          title: 'BIWAK W GROCIE LUB POD NAMIOTEM',
          body:
            'Jedna z ciekawszych propozycji na obozową noc. Przeżyjesz z nami wyjątkową wakacyjną przygodę — biwak w jurajskiej grocie lub pod namiotem, z ogniskiem i opowieściami pod gwiazdami. To chwile, których się nie zapomina.',
        },
      ],
    },
  ],
  programFooter: `Poza tym, czekają na Was:

– gry i zabawy integracyjne,
– wieczory tematyczne i filmowe,
– quizy i rozgrywki sportowe na wesoło,
– wieczorne ogniska,
– relaks nad wodą,
– plażowanie, dyskoteka, turniej Just Dance,
– mini turniej wspinaczkowy z nagrodami dla najlepszych

* Każdy uczestnik na czas obozu otrzymuje: uprząż wspinaczkową, kask ochronny.
* Do zajęć wspinaczkowych wskazane obuwie typu korkotrampki z obciętymi korakmi lub miękkie buty z gumową podeszwą.`,
  optionalSectionTitle: 'Program fakultatywny',
  optionalIntro:
    'Dla tych, którzy chcą przeżyć jeszcze więcej przygód i dodać do swojego obozu odrobinę adrenaliny, przygotowaliśmy bogaty program zajęć fakultatywnych. To idealny sposób, by urozmaicić pobyt na Jurze i odkryć nowe wrażenia — od emocji off-roadowych po wodny relaks i zwiedzanie jurajskich zamków!',
  optionalItems: [
    'Przejażdżka autem terenowym – dynamiczna jazda po jurajskich szlakach (min. 5 osób) – 50 zł',
    'Ekspedycja 4×4 po Jurajskim Wąwozie pełnym błota i przeszkód terenowych – prawdziwa off-roadowa przygoda dla miłośników adrenaliny – 200 zł',
    'Przejażdżka quadem – poczuj moc silnika i pokonaj jurajskie bezdroża! – 50 zł',
    'KRAZ wojskowa ciężarówka terenowa – niezapomniany przejazd potężnym pojazdem! (min. 10 osób) – 75 zł',
    'Paintball – pełna emocji rozgrywka z dynamicznymi scenariuszami! (min. 8 osób, 100 kulek) – 130 zł',
    'Dodatkowe 100 kulek do paintballa – dla tych, którzy chcą grać dłużej – 50 zł',
    'Blok zabaw na dmuchańcach – skoki, wyścigi i śmiech do łez – 40 zł',
    'Mirów, Bobolice i Olsztyn – wycieczka z przewodnikiem, zwiedzaniem kompleksu skalnego oraz słodkim finałem: gofry i gorąca czekolada dla każdego! (min. 20 osób) – 185 zł',
    'Park Wodny Jura – wodne atrakcje, zjeżdżalnie i pełen relaks (min. 7 osób) – 80 zł',
    'Całodniowa wycieczka do Ogrodzieńca i Parku Wodnego Jura – zwiedzanie zamku i wodne szaleństwa (min. 7 osób) – 130 zł',
    'Zamek Ogrodzieniec + Park Wodny Jura + Galeria Motoryzacji + degustacja burgera w restauracji „Mały Książę” – połączenie historii, relaksu i motoryzacyjnej pasji – 185 zł',
    'Stacja Grawitacja – Park Trampolin w Częstochowie, największy park trampolin w regionie (min. 8 osób) – 120 zł',
  ],
  accommodationSectionTitle: 'Zakwaterowanie',
  accommodationParagraphs: [],
  accommodationImages: [],
  accommodationBlocks: [
    {
      blockTitle: 'Leśna Baza (Janów)',
      paragraphs: [
        'Turnusy: 27.06 – 06.07 oraz 16.08 – 25.08.',
        'Noclegi w drewnianych domkach letniskowych w „Leśnej Bazie” w Janowie, na Jurze Krakowsko-Częstochowskiej.',
        'Domki 6–8-osobowe z łazienkami, możliwe łóżka piętrowe.',
        'Do dyspozycji uczestników: budynek z jadalnią, świetlica, miejsce na ognisko, teren rekreacyjny.',
        'Kod imprezy: KPOH.',
      ],
      images: [
        { src: `${LESNA}/lesna-baza-1.png`, alt: 'Leśna Baza — obóz w lesie, widok z góry' },
        { src: `${LESNA}/lesna-baza-2.png`, alt: 'Leśna Baza — jadalnia na świeżym powietrzu' },
      ],
    },
    {
      blockTitle: '„Złoty Jeleń” (Złoty Potok)',
      paragraphs: [
        'Turnusy: 07.07 – 16.07, 17.07 – 26.07, 27.07 – 05.08 oraz 06.08 – 15.08.',
        'Noclegi w Ośrodku Wypoczynkowym „Złoty Jeleń” w miejscowości Złoty Potok, na terenie rezerwatu przyrody Parkowe.',
        'Pokoje 3– i 4-osobowe z łazienką, Wi-Fi.',
        'Do dyspozycji uczestników: jadalnia, sala kominkowa, sala dyskotekowa, duży teren rekreacyjny do gier i zabaw.',
        'Kod imprezy: KPOJ.',
      ],
      images: [
        { src: `${ZLOTY}/zloty-jelen-1.png`, alt: 'Ośrodek Złoty Jeleń — zabudowa wśród zieleni' },
        { src: `${ZLOTY}/zloty-jelen-2.png`, alt: 'Złoty Jeleń — teren rekreacyjny ośrodka' },
        { src: `${ZLOTY}/zloty-jelen-3.png`, alt: 'Złoty Jeleń — wnętrza i infrastruktura' },
        {
          src: `${ZLOTY}/zloty-jelen-4.png`,
          alt: 'Złoty Jeleń — pokój gościnny z łóżkami, widok na las',
        },
      ],
    },
  ],
  priceIncludesTitle: 'Cena zawiera',
  priceIncludes: [
    'Zakwaterowanie: 9 noclegów',
    'Wyżywienie: śniadania i kolacje w formie bufetu, obiad serwowany. Pierwszy posiłek: kolacja w dniu przyjazdu. Ostatni posiłek: śniadanie w dniu wyjazdu oraz prowiant na drogę powrotną. Możliwe wyżywienie w formie smacznego cateringu. Dopłata do diety: wegetariańskiej / bezglutenowej / bezlaktozowej – 200 zł.',
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
    'Kolejność zajęć ustali kadra obozu w zależności od pogody i predyspozycji psychofizycznych uczestników.',
    'Prosimy pamiętać o zabraniu wypełnionej i wydrukowanej karty kwalifikacyjnej, legitymacji szkolnej oraz o podpisaniu bagażu.',
    'Zabierz ze sobą odpowiedni strój do zajęć przewidzianych programem, ręcznik kąpielowy, mały plecak na wycieczki, ciepły sweter lub polar, dres, kurtkę przeciwdeszczową, nakrycie głowy, buty sportowe i obuwie za kostkę, preparat do ochrony przed komarami, krem z filtrem UV.',
    'Prosimy zabrać również: śpiwór, karimatę, menażkę i niezbędnik / sztućce.',
    'Obozy przeznaczone są dla osób lubiących aktywność ruchową.',
    'Wszystkie zajęcia specjalistyczne odbywać się będą z zastosowaniem niezbędnych elementów zapewniających bezpieczeństwo (kaski, ochronniki słuchu, okulary, uprzęże i kamizelki asekuracyjne).',
    'Od uczestników powyżej 13. roku życia przy zakwaterowaniu pobieramy kaucję w wysokości 50 zł, która zwracana jest w dniu wyjazdu.',
    'W przypadku ograniczonej ilości miejsc możliwe zakwaterowanie wybranych tematyk w pobliskim ośrodku Jura – Janów „Leśna Baza”.',
    'Planowany dojazd do ośrodka autokarem ok. godz. 16:00, planowany wyjazd z ośrodka o godz. 12:00.',
    'Dojazd własny: zapraszamy na godzinę 16:00, wyjazd nie później niż o godz. 11:00.',
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
  termsSubtitle: '',
  termsDisclaimer: '',
  terms: [],
  termsGroups: [
    {
      groupTitle: 'Jura Climbing Camp — Leśna Baza',
      groupDisclaimer: 'Uwaga! Ceny mogą ulec zmianie. Przed rezerwacją zapytaj o cenę telefonicznie lub mailowo.',
      terms: [
        {
          dateRange: '27.06 – 06.07.2026',
          durationLabel: '10 dni',
          price: '2699 zł',
          planUrl:
            'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~274&skrot2=KPOH0627&klucz=JURA%20CLIMBING%20CAMP%202026',
        },
        {
          dateRange: '16.08 – 25.08.2026',
          durationLabel: '10 dni',
          price: '2699 zł',
          planUrl:
            'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~274&skrot2=KPOH0816&klucz=JURA%20CLIMBING%20CAMP%202026',
        },
      ],
    },
    {
      groupTitle: 'Jura Climbing Camp — Złoty Jeleń',
      groupDisclaimer: 'Uwaga! Ceny mogą ulec zmianie. Przed rezerwacją zapytaj o cenę telefonicznie lub mailowo.',
      terms: [
        {
          dateRange: '07.07 – 16.07.2026',
          durationLabel: '10 dni',
          price: '2899 zł',
          planUrl:
            'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~274&skrot2=KPOJ0707&klucz=JURA%20-%20%20CLIMBING%20CAMP%202026',
        },
        {
          dateRange: '17.07 – 26.07.2026',
          durationLabel: '10 dni',
          price: '2899 zł',
          planUrl:
            'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~274&skrot2=KPOJ0717&klucz=JURA%20-%20%20CLIMBING%20CAMP%202026',
        },
        {
          dateRange: '27.07 – 05.08.2026',
          durationLabel: '10 dni',
          price: '2899 zł',
          planUrl:
            'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~274&skrot2=KPOJ0727&klucz=JURA%20-%20%20CLIMBING%20CAMP%202026',
        },
        {
          dateRange: '06.08 – 15.08.2026',
          durationLabel: '10 dni',
          price: '2899 zł',
          planUrl:
            'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~274&skrot2=KPOJ0806&klucz=JURA%20-%20%20CLIMBING%20CAMP%202026',
        },
      ],
    },
  ],
  reserveHref:
    'mailto:biuro@ja-yhymm.pl?subject=Rezerwacja%20%E2%80%93%20Jura%20Climbing%20Camp',
};
