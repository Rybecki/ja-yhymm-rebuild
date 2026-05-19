import type { SummerOfferDetail } from './types';

const G = '/utils/oferta-letnia/jura-fight-camp/gallery';
const ZLOTY = '/utils/oferta-letnia/zloty-jelen';

export const JURA_FIGHT_CAMP_DETAIL: SummerOfferDetail = {
  heroBackgroundPosition: 'center 55%',
  heroImage: {
    src: `${G}/fight-1.png`,
    alt: 'Trening samoobrony na świeżym powietrzu — Fight Camp',
  },
  gallery: [
    {
      src: `${G}/fight-1.png`,
      alt: 'Trening samoobrony na świeżym powietrzu — Fight Camp',
    },
    {
      src: `${G}/fight-2.png`,
      alt: 'Zajęcia samoobrony na świeżym powietrzu na niebieskich matach',
    },
    {
      src: `${G}/fight-3.png`,
      alt: 'Ćwiczenia w parterze pod okiem instruktora — bezpieczna nauka technik',
    },
    {
      src: `${G}/fight-4.png`,
      alt: 'Trening samoobrony pod drewnianą altaną — ćwiczenia na matach, Fight Camp',
    },
  ],
  aboutSectionTitle: 'O obozie',
  aboutLeadTitle: 'FIGHT CAMP – ODKRYJ SIŁĘ, KTÓRA NIE POTRZEBUJE AGRESJI!',
  aboutBlocks: [
    {
      title: 'MISTRZOWSKA SAMOOBRONA W PRAKTYCE',
      body:
        'Opanuj skuteczne techniki w stójce i parterze pod okiem profesjonalistów. Nauczysz się uwalniania z chwytów, bezpiecznego padania i reagowania w realnych sytuacjach zagrożenia.',
    },
    {
      title: 'TRENING MENTALNY I „STREFA ZERO”',
      body:
        'Buduj stalową odporność na stres! Dowiedz się, jak zachować zimną krew, kontrolować emocje i podejmować błyskawiczne decyzje, gdy inni tracą głowę.',
    },
    {
      title: 'FILOZOFIA WOJOWNIKA',
      body:
        'Zrozum różnicę między siłą a przemocą. Nauczysz się dyscypliny, szacunku do przeciwnika i odpowiedzialności prawnej, zyskując pewność siebie, która zostanie z Tobą na lata.',
    },
  ],
  aboutClosing:
    'Hartuj charakter, trenuj ciało i poznaj granice swoich możliwości. Zacznij swoją transformację!',
  programSectionTitle: 'Program',
  programHeadline: 'FIGHT CAMP – SZTUKI WALKI I SAMOOBRONA',
  programAgeLine: '(12–17 lat)',
  programIntro: [
    'Siła. Odwaga. Kontrola. Tu hartuje się charakter.',
    'Chcesz poczuć, czym naprawdę jest pewność siebie, opanowanie w stresie i siła, która nie potrzebuje agresji?',
    'Fight Camp to intensywny obóz samoobrony i sztuk walki stworzony dla tych, którzy chcą poznać swoje możliwości, przełamać słabości i nauczyć się właściwie reagować w każdej sytuacji. To nie będzie zwykły obóz – to będzie trening ciała i umysłu, który zmieni Twoje spojrzenie na siłę, odwagę i odpowiedzialność.',
  ],
  programBullets: [],
  programSections: [
    {
      heading: '',
      items: [
        {
          title: 'Bezpieczna samoobrona w praktyce',
          body:
            'Poznasz skuteczne techniki obrony w stójce i w parterze, nauczysz się, jak uwolnić się z chwytów i obronić w pozycji leżącej, przećwiczysz scenariusze obrony przed jednym lub kilkoma napastnikami, dowiesz się, kiedy walka to konieczność, a kiedy mądrością jest jej unikanie.',
        },
        {
          title: 'Trening mentalny i siła psychiczna',
          body:
            'Ćwiczenia podnoszące odporność na stres, praca nad emocjami i pewnością siebie, techniki koncentracji i panowania nad ciałem oraz oddechem, warsztaty: „Jak zachować spokój, gdy inni tracą głowę”.',
        },
        {
          title: 'Taktyka i realne sytuacje',
          body:
            'Symulacje realnych zagrożeń i nauka podejmowania decyzji w sekundę, jak reagować, gdy ktoś prowokuje, grozi lub atakuje krok po kroku, jak pomóc innym i reagować jako świadek przemocy, poznasz zasady odpowiedzialności prawnej i jak nie przekroczyć granic obrony.',
        },
        {
          title: 'Trening ciała',
          body:
            'Codzienne zajęcia ogólnorozwojowe: kondycja, koordynacja, szybkość, gibkość, treningi prowadzone z użyciem mat, tarcz, rękawic i ochraniaczy, nauka bezpiecznego padania, przewrotów i poruszania się w walce, praca z partnerem, elementy walki kontrolowanej i scenariuszowej.',
        },
        {
          title: 'Spotkanie z policjantem lub instruktorem bezpieczeństwa',
          body: 'Jak wygląda agresja z perspektywy prawa i jak się chronić.',
        },
        {
          title: 'Warsztaty z pierwszej pomocy',
          body: 'W sytuacjach realnego zagrożenia.',
        },
        {
          title: 'Analiza najczęstszych błędów',
          body: 'Zachowania, które mogą sprowokować niebezpieczne sytuacje.',
        },
        {
          title: 'Walka bez walki',
          body:
            'Zrozumiesz, czym różni się przemoc od samoobrony, nauczysz się szacunku do przeciwnika i dyscypliny wojownika, odkryjesz, że prawdziwa siła to kontrola, nie agresja.',
        },
      ],
    },
  ],
  programFooter: `Poza tym: wiele dodatkowych atrakcji: wieczorne ogniska, chill z ekipą i nocny pokaz filmów o mistrzach walki, mini turniej pokazowy z nagrodami, joga i stretching po treningach — regeneracja jak u profesjonalnych sportowców, relaks nad wodą, plażowanie, dyskoteka i turniej Just Dance.`,
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
    'W Ośrodku Wypoczynkowym „Złoty Jeleń” w miejscowości Złoty Potok, na terenie Rezerwatu przyrody Parkowe.',
    'Pokoje 3– i 4-osobowe z łazienką, Wi-Fi.',
    'Do dyspozycji uczestników: jadalnia, sala kominkowa, sala dyskotekowa, duży teren rekreacyjny do gier i zabaw wokół obiektu.',
  ],
  accommodationImages: [
    { src: `${ZLOTY}/zloty-jelen-1.png`, alt: 'Ośrodek Złoty Jeleń — zabudowa wśród zieleni' },
    { src: `${ZLOTY}/zloty-jelen-2.png`, alt: 'Złoty Jeleń — teren rekreacyjny ośrodka' },
    { src: `${ZLOTY}/zloty-jelen-3.png`, alt: 'Złoty Jeleń — wnętrza i infrastruktura' },
    { src: `${ZLOTY}/zloty-jelen-4.png`, alt: 'Złoty Jeleń — pokój gościnny z łóżkami' },
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
    'Zajęcia prowadzone są przez wykwalifikowanych instruktorów i będą dopasowane do stanu psychofizycznego uczestników.',
    'Obóz kierowany jest do osób lubiących większą aktywność fizyczną.',
    'Zabierz ze sobą: legitymację szkolną, wypełnioną i podpisaną kartę kwalifikacyjną, odzież i obuwie odpowiednie do planowanych aktywności, obuwie zmienne, ręcznik kąpielowy, podpisz bagaż.',
    'Od każdego uczestnika pierwszego dnia pobytu pobierana jest kaucja w wysokości 50 zł na pokrycie ewentualnych strat spowodowanych przez niego w wyposażeniu ośrodka.',
  ],
  equipmentSectionTitle: 'NASZ SPRZĘT: JAKOŚĆ, KTÓRA ROBI RÓŻNICĘ',
  equipmentIntro:
    'Podczas naszych obozów nie uznajemy półśrodków. Korzystamy wyłącznie z markowego wyposażenia, które gwarantuje 100% bezpieczeństwa i maksymalne osiągi w terenie:',
  equipmentBlocks: [
    {
      title: 'OFF-ROAD & MOC',
      body:
        'Prowadzisz legendarne maszyny! Flota quadów to m.in. Arctic Cat 650, 700, Yamaha Grizzly 660, Honda TRX 500, Kymco KXR 250. Do tego terenówki Jeep Cherokee, Nissan Terrano oraz unikalna, wojskowa bestia Kraz 255B 6×6, która przejedzie przez wszystko.',
    },
    {
      title: 'PIT-BIKE',
      body: 'Zwinne minikrosy MRF 120 oraz X-Motos 125 – idealne do nauki dynamicznej jazdy w terenie.',
    },
    {
      title: 'PAINTBALL & STRZELECTWO',
      body:
        'Niezawodne markery Tippmann i BT oraz profesjonalne maski termiczne (Empire, Valken), które nie parują w ferworze walki. Na strzelnicy czekają wiatrówki, łuki i karabinki ASG.',
    },
    {
      title: 'ALPINISTYKA & WSPINACZKA',
      body:
        'Korzystamy z atestowanego sprzętu światowych liderów: Petzl, Mammut, Camp. Posiadamy własną mobilną ściankę wspinaczkową z 4 trasami o różnym stopniu trudności.',
    },
    {
      title: 'WODA',
      body:
        'Wytrzymałe kajaki polietylenowe – stabilne, bezpieczne, gotowe na każdą przygodę, wyposażone w kamizelki asekuracyjne i wiosła.',
    },
    {
      title: 'INFRASTRUKTURA & TRANSPORT',
      body:
        'Własna baza z poligonem paintballowym, torem off-road i parkiem linowym. Dzięki autolawetom i busom jesteśmy w pełni mobilni i niezależni.',
    },
  ],
  termsSectionTitle: 'Terminy i ceny',
  termsSubtitle: 'Jura Fight Camp — Złoty Jeleń',
  termsDisclaimer: 'Uwaga! Ceny mogą ulec zmianie. Przed rezerwacją zapytaj o cenę telefonicznie lub mailowo.',
  terms: [
    {
      dateRange: '07.07 – 16.07.2026',
      durationLabel: '10 dni',
      price: '2799 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-_FIGHT_CAMP_2026_PAX_FB&skrot2=KPOJ0707&klucz=JURA%20-%20FIGHT%20CAMP%202026',
    },
    {
      dateRange: '17.07 – 26.07.2026',
      durationLabel: '10 dni',
      price: '2799 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-_FIGHT_CAMP_2026_PAX_FB&skrot2=KPOJ0717&klucz=JURA%20-%20FIGHT%20CAMP%202026',
    },
    {
      dateRange: '27.07 – 05.08.2026',
      durationLabel: '10 dni',
      price: '2799 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-_FIGHT_CAMP_2026_PAX_FB&skrot2=KPOJ0727&klucz=JURA%20-%20FIGHT%20CAMP%202026',
    },
    {
      dateRange: '06.08 – 15.08.2026',
      durationLabel: '10 dni',
      price: '2799 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-_FIGHT_CAMP_2026_PAX_FB&skrot2=KPOJ0806&klucz=JURA%20-%20FIGHT%20CAMP%202026',
    },
  ],
  reserveHref:
    'mailto:biuro@ja-yhymm.pl?subject=Rezerwacja%20%E2%80%93%20Jura%20Fight%20Camp',
};
