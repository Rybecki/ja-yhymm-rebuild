import type { SummerOfferDetail } from './types';

const BASE = '/utils/oferta-letnia/jura-military-camp/gallery';

export const JURA_MILITARY_CAMP_DETAIL: SummerOfferDetail = {
  heroBackgroundPosition: '68% 50%',
  gallery: [
    { src: '/utils/oferta-letnia/military-camp.png', alt: 'Militarny patrol przy akwenie — Jura Military Camp' },
    { src: `${BASE}/militaria-1.png`, alt: 'Uczestnik obozu militarniego w kamuflażu i hełmie' },
    { src: `${BASE}/militaria-2.png`, alt: 'Ćwiczenia w dymie — przenoszenie sprzętu zespołowo' },
    { src: `${BASE}/militaria-3.png`, alt: 'Grupa taktyczna z replikami broni przy stawie' },
  ],
  youtubeVideoId: 'UxkhhSiKiTI',
  aboutSectionTitle: 'O obozie',
  aboutLeadTitle: 'OPERACJA JURA: MILITARNA SZKOŁA PRZETRWANIA',
  aboutBlocks: [
    {
      title: 'TOTALNY FRONT PAINTBALLOWY',
      body:
        'To nie jest zwykła strzelanka. Masz do dyspozycji 1000 kul, replikę AK47 i misję do wykonania. Odbijanie zakładników, czyszczenie budynków i walka o każdy metr poligonu!',
    },
    {
      title: 'TAKTYKA „STREFY ZERO”',
      body:
        'Naucz się poruszać jak duch w lesie. Opanujesz kamuflaż, czytanie terenu bez słowa i walkę wręcz w sytuacjach kryzysowych. Tu liczysz się Ty i Twój zespół.',
    },
    {
      title: 'MISJA NOCNA I WOJSKOWY DRYLL',
      body:
        'Tej nocy zapomnij o wygodnym łóżku. Czekają Cię nocne warty, spanie w namiotach NS, patrole przy świetle księżyca i ewakuacja rannych pod ostrzałem.',
    },
  ],
  aboutClosing: 'To nie są wakacje. To sprawdzian charakteru. Zaciągnij się teraz!',
  programSectionTitle: 'Program',
  programHeadline: 'JURA MILITARY CAMP – obóz militarny czyli: SZKOLENIE DLA NAJLEPSZYCH!',
  programAgeLine: '(10–13 lat) · (14–18 lat)',
  programIntro: [
    'Czy marzysz o przeżyciu przygody jak z filmu akcji?',
    'Chcesz poczuć adrenalinę i sprawdzić granice swojej wytrzymałości?',
    'Jeśli tak – dołącz do nas! Nasz obóz przeniesie Cię w świat prawdziwych komandosów i elitarnych sił specjalnych!',
  ],
  programBullets: [
    {
      title: 'PAINTBALLOWE BITWY',
      body:
        'Zasiądź za sterami karabinka imitującego AK47 lub M4 i weź udział w dynamicznych starciach na poligonie i w terenie leśnym. Z 1000 kul amunicji, w ochronnym kombinezonie, kamizelce i masce, będziesz walczył o zwycięstwo!',
    },
    {
      title: 'TAKTYKA I SZTUKA WOJENNA',
      body:
        'Opanuj tajniki zielonej taktyki, ucz się poruszania w zalesionym terenie, kamuflażu i komunikacji niewerbalnej. Prowadź grupę bojową, ucz się rozmieszczania stanowisk strzeleckich, odbijania zakładników i rozpoznania terenowego.',
    },
    {
      title: 'SURVIVAL W TRUDNYCH WARUNKACH',
      body:
        'Dowiedz się, jak przetrwać w dziczy – od rozpalania ogniska i budowania schronienia po znajdowanie pożywienia. Wiązanie węzłów i mierzenie odległości to podstawa!',
    },
    {
      title: 'SAMOOBRONA I TECHNIKI BOJOWE',
      body:
        'Naucz się niekonwencjonalnych metod obezwładniania przeciwnika, skutecznej obrony i unikania konfrontacji. Poznaj taktykę „strefy zero” i udzielania pomocy przedmedycznej pod ostrzałem.',
    },
    {
      title: 'POKONYWANIE PRZESZKÓD',
      body:
        'Zmierz się z przeszkodami wodnymi i terenowymi. Wykorzystaj techniki linowe do zjazdów pionowych, ewakuacji i przepraw. Czekają na Ciebie także emocjonujące przejażdżki quadem po specjalnym torze off-roadowym!',
    },
    {
      title: 'MUSZTRA I DZIAŁANIA GRUPOWE',
      body: 'Naucz się poruszać w szyku i współpracować w zespole, co jest kluczowe w każdej operacji.',
    },
    {
      title: 'IMPREZA NA ORIENTACJĘ (INO)',
      body: 'Sprawdź swoje umiejętności nawigacyjne, nocując w wojskowych namiotach NS.',
    },
    {
      title: 'STRZELECTWO',
      body:
        'Ćwiczenia z pneumatycznej broni krótkiej i długiej, strzelanie do celów ruchomych i nieruchomych.',
    },
    {
      title: 'PATROLE I WARTY',
      body: 'Poczuj się jak prawdziwy żołnierz podczas patroli pieszych, nocnych rajdów i trzymania warty.',
    },
  ],
  programFooter:
    'Poza tym w programie: rowerowe wycieczki, spływy kajakowe, gry sportowe, ogniska, plażowanie i dyskoteki. W razie niepogody czeka na Ciebie obozowy turniej gier komputerowych lub treningi strzeleckie na PlayStation.',
  optionalSectionTitle: 'Program fakultatywny',
  optionalIntro:
    'Dla tych, którzy chcą przeżyć jeszcze więcej przygód i dodać do swojego obozu odrobinę adrenaliny, przygotowaliśmy bogaty program zajęć fakultatywnych. To idealny sposób, by urozmaicić pobyt na Jurze i odkryć nowe wrażenia – od emocji off-roadowych po wodny relaks i zwiedzanie jurajskich zamków!',
  optionalItems: [
    'Przejażdżka autem terenowym – dynamiczna jazda po jurajskich szlakach (min. 5 osób) – 50 zł',
    'Ekspedycja 4×4 po Jurajskim Wąwozie pełnym błota i przeszkód terenowych – prawdziwa off-roadowa przygoda dla miłośników adrenaliny – 200 zł',
    'Przejażdżka quadem – poczuj moc silnika i pokonaj jurajskie bezdroża! – 50 zł',
    'KRAZ – wojskowa ciężarówka terenowa – niezapomniany przejazd potężnym pojazdem! (min. 10 osób) – 75 zł',
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
    { src: `${BASE}/lesna-baza-1.png`, alt: 'Leśna Baza — obóz w lesie, widok z góry' },
    { src: `${BASE}/lesna-baza-2.png`, alt: 'Leśna Baza — jadalnia na świeżym powietrzu' },
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
    'dopłaty za dodatkowe świadczenia w przypadku łączenia turnusów (nocleg, wyżywienie, opieka kadry) – 300 zł,',
    'dopłaty za program fakultatywny,',
    'dopłat do wybranych diet.',
  ],
  practicalSectionTitle: 'Informacje praktyczne',
  practicalParagraphs: [
    'Obóz kierowany jest do osób lubiących większą aktywność fizyczną.',
    'Zajęcia prowadzone są przez wykwalifikowanych instruktorów.',
    'Wszystkie zajęcia będą dopasowane do stanu psychofizycznego uczestników.',
    'W razie niepogody zajęcia terenowe są wstrzymywane z uwagi na bezpieczeństwo uczestników.',
    'Zabierz ze sobą: legitymację szkolną, wypełnioną i podpisaną kartę kwalifikacyjną, odzież moro i obuwie odpowiednie do planowanych aktywności, obuwie zmienne, ręcznik kąpielowy, podpisz bagaż.',
    'Mile widziane: własne gadżety militarne (hełmy, kamizelki, pasy).',
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
  termsSubtitle: 'Jura Military Camp — Leśna Baza',
  termsDisclaimer: 'Uwaga! Ceny mogą ulec zmianie. Przed rezerwacją zapytaj o cenę telefonicznie lub mailowo.',
  terms: [
    {
      dateRange: '27.06 – 06.07.2026',
      durationLabel: '10 dni',
      price: '2699 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_MILITARY_CAMP_2026_PAX_FB&skrot2=KPOH0627&klucz=JURA%20MILITARY%20CAMP%202026',
    },
    {
      dateRange: '07.07 – 16.07.2026',
      durationLabel: '10 dni',
      price: '2699 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_MILITARY_CAMP_2026_PAX_FB&skrot2=KPOH0707&klucz=JURA%20MILITARY%20CAMP%202026',
    },
    {
      dateRange: '17.07 – 26.07.2026',
      durationLabel: '10 dni',
      price: '2699 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_MILITARY_CAMP_2026_PAX_FB&skrot2=KPOH0717&klucz=JURA%20MILITARY%20CAMP%202026',
    },
    {
      dateRange: '27.07 – 05.08.2026',
      durationLabel: '10 dni',
      price: '2699 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_MILITARY_CAMP_2026_PAX_FB&skrot2=KPOH0727&klucz=JURA%20MILITARY%20CAMP%202026',
    },
    {
      dateRange: '06.08 – 15.08.2026',
      durationLabel: '10 dni',
      price: '2699 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_MILITARY_CAMP_2026_PAX_FB&skrot2=KPOH0806&klucz=JURA%20MILITARY%20CAMP%202026',
    },
    {
      dateRange: '16.08 – 25.08.2026',
      durationLabel: '10 dni',
      price: '2699 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_MILITARY_CAMP_2026_PAX_FB&skrot2=KPOH0816&klucz=JURA%20MILITARY%20CAMP%202026',
    },
  ],
  reserveHref:
    'mailto:biuro@ja-yhymm.pl?subject=Rezerwacja%20%E2%80%93%20Jura%20Military%20Camp',
};
