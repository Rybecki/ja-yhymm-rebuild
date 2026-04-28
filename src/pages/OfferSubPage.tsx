import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { getOfferBySlug } from '../data/offerPages';

const SCHOOL_TRIP_TOPICS = [
  'Wspinaczka skałkowa, zajęcia linowe',
  'Ścianka wspinaczkowa',
  'Strzelectwo, paintball, ASG, łuki, wiatrówki',
  'Survival, szkoła przetrwania',
  'Militaria, musztry i zabawy militarne, maskowanie',
  'Quady, przejażdżki i jazda po specjalnych torach',
  'Off-road, przejażdżki samochodami terenowymi',
  'Przejażdżka wojskowym ciężarowym pojazdem terenowym 6x6 typu KRAZ 255B (jednorazowo przewozimy około 50 osób)',
  'Samoobrona, sztuki walki',
  'Sporty wodne, kajakarstwo, pływanie motorówką, bananem, kołem wodnym, platformą, nurkowanie',
  'Pierwsza pomoc, praktyczne szkolenia z pierwszej pomocy',
  'Gry, zabawy, podchody, biegi na orientację',
];

const SCHOOL_TRIP_ORGANIZATION = ['Transport', 'Zakwaterowanie na ośrodku', 'Wyżywienie', 'Program', 'Ubezpieczenie'];

const UNIFORMED_TOPICS = ['Strzelectwo - broń palna', 'Paintball', 'Air Soft Gun', 'Łuki', 'Pneumatyczna broń krótka i długa'];

const UNIFORMED_MODULES = [
  {
    id: 'wojsko-militaria',
    title: 'Wojsko / Militaria',
    intro:
      'Każdy obóz może być zorganizowany w klimatach militarnych: musztra, ustalenie hierarchii wg stopni, wojskowy plan dnia i zadania zespołowe.',
    blocks: [
      {
        title: 'Maskowanie - zielona taktyka',
        body:
          'Nieodzownym elementem służb mundurowych jest umiejętność maskowania oraz poruszania się w sposób niezauważalny po terenie niezurbanizowanym (zielonym, leśnym).',
      },
      {
        title: 'Wspinaczka / techniki linowe',
        body:
          'Dysponujemy ścianką wspinaczkową i zajęciami w skałach o różnym stopniu trudności. Uczestnicy nabywają praktyczne umiejętności linowe przydatne w pracy służb.',
        items: ['Nauka węzłów', 'Budowanie stanowisk linowych', 'Przeprawy przez mosty linowe', 'Zjazdy pionowe na linach', 'Podchodzenie na linie'],
      },
      {
        title: 'Ścianka wspinaczkowa',
        items: [
          'Nauka podstaw wspinaczki',
          'Doskonalenie technik wspinaczkowych',
          'Cztery trasy o różnym stopniu trudności - dla początkujących i zaawansowanych',
        ],
      },
    ],
  },
  {
    id: 'survival',
    title: 'Survival',
    intro:
      'Zajęcia pozwalają zdobyć umiejętności przetrwania: budowa schronienia, poruszanie się w terenie, zdobywanie pożywienia i wody oraz działanie w trudnych warunkach.',
  },
  {
    id: 'samoobrona',
    title: 'Samoobrona, Krav Maga, Sztuka Walki bez Walki',
    intro:
      'Każdy przyszły żołnierz, policjant, strażak lub ratownik powinien umieć zadbać o bezpieczeństwo własne i innych w sytuacjach zagrożenia.',
    items: [
      'Jak unikać konfrontacji',
      'Obezwładnianie przeciwnika',
      '„Obrączkowanie”, czyli skuteczne zakładanie kajdanek',
      'Techniki antyterrorystyczne i służb specjalnych',
      'Techniki walki w stójce oraz w parterze',
    ],
  },
  {
    id: 'nurkowanie',
    title: 'Nurkowanie',
    intro:
      'Odkryjemy przed Wami podwodny świat i pokażemy bezpieczny start w nurkowaniu - od podstaw po zejście pod wodę w kompletnym zestawie płetwonurka.',
    items: [
      'Zasady obowiązujące pod wodą',
      'Podstawowa sygnalizacja pod wodą',
      'Nurkowanie w sprzęcie ABC (maska, fajka, płetwy)',
      'Zaznajomienie z profesjonalnym sprzętem typu aqualung',
      'Zejście pod wodę w kompletnym sprzęcie płetwonurka',
    ],
  },
  {
    id: 'kajakarstwo',
    title: 'Kajakarstwo',
    intro:
      'Kajakarstwo to świetna forma aktywnego wypoczynku i kontaktu z naturą. Podczas zajęć ćwiczymy technikę oraz bezpieczeństwo na wodzie.',
    items: [
      'Zasady bezpieczeństwa i budowa kajaka',
      'Technika wiosłowania i podstawowe manewry',
      'Zasady pływania kajakiem pojedynczo i w parach',
      'Organizacja spływów kajakowych',
      'Technika wsiadania i wysiadania z kajaka',
      'Szybkie zatrzymanie i zmiana kierunku płynięcia',
      'Manewr ratunkowy „człowiek za burtą”',
    ],
  },
  {
    id: 'ratownictwo',
    title: 'Ratownictwo',
    intro: 'Szkolenie z zakresu pierwszej pomocy z naciskiem na praktyczne działania w terenie.',
    items: [
      'Udzielanie pierwszej pomocy w nagłych zagrożeniach życia',
      'Opatrywanie ran',
      'Transport rannego i przemieszczanie poszkodowanego w trudnym terenie',
      'Resuscytacja krążeniowo-oddechowa na fantomach',
      'Ratowanie życia „za pomocą byle czego”',
    ],
  },
  {
    id: 'off-road',
    title: 'Off-Road',
    intro:
      'Dysponujemy samochodami terenowymi i quadami wykorzystywanymi do szkolenia praktycznego oraz przejazdów terenowych w warunkach zbliżonych do działań służb.',
    items: [
      'Szyki ubezpieczone za pojazdem',
      'Konwojowanie bandyty',
      'Ewakuacja z pojazdu podczas ostrzału',
      'Zatrzymanie pojazdu i obezwładnienie kierowcy',
      'Jazda w terenie OFF-ROAD i jazda na orientację',
      'Przejażdżka ciężarowym pojazdem transportowym 6x6 typu KRAZ 255B',
    ],
  },
  {
    id: 'sporty-wodne',
    title: 'Sporty wodne',
    intro: 'MNÓSTWO mokrej zabawy dla osób, które świetnie czują się w wodzie i lubią aktywne atrakcje.',
    items: [
      'Banan',
      'Koło wodne',
      'Platforma',
      'Sumo',
      'Narty wodne',
      'Skok odwagi',
    ],
  },
  {
    id: 'narciarstwo',
    title: 'Narciarstwo i snowboard',
    intro:
      'Zimową porą realizujemy szkolenia na stoku - od pierwszych kroków po doskonalenie techniki jazdy klasycznej, carvingowej i skitourowej.',
    body:
      'Zapewniamy pełne poczucie bezpieczeństwa oraz praktyczne wskazówki, jak skutecznie podnosić swoje kwalifikacje narciarskie, aby czas na stoku był czystą frajdą.',
  },
] as const;

const UNIFORMED_ORGANIZATION = ['Transport', 'Zakwaterowanie na ośrodku', 'Wyżywienie', 'Program', 'Ubezpieczenie'];

const UNIFORMED_GALLERY = [
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/militaria-1.png', alt: 'Uczestnik obozu militarnego w kamuflażu i hełmie' },
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/militaria-2.png', alt: 'Ćwiczenia zespołowe podczas obozu militarnego' },
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/militaria-3.png', alt: 'Szkolenie taktyczne na świeżym powietrzu' },
  { src: '/images/klasy-mundurowe/militaria-4.png', alt: 'Ćwiczenia z replikami broni nad wodą' },
  { src: '/images/klasy-mundurowe/militaria-5.png', alt: 'Uczestnicy obozu prezentujący koszulki paintballowe' },
  { src: '/images/klasy-mundurowe/militaria-6.png', alt: 'Zajęcia terenowe w warunkach leśnych' },
];

const EVENTS_GALLERY = [
  { src: '/images/eventy/eventy.png', alt: 'Sprzęt i atrakcje eventowe w plenerze' },
  { src: '/images/eventy/eventy1.png', alt: 'Uczestnicy eventu podczas integracji' },
  { src: '/images/eventy/eventy3.png', alt: 'Wieczorna część integracyjna z animacjami' },
];

const EQUIPMENT_RENTAL_ITEMS = [
  'Sprzęt paintballowy (markery, maski, mundury, kamizelki)',
  'Quady różnej wielkości i pojemności',
  'Samochody terenowe (opcja tylko z kierowcą)',
  'Ścianka wspinaczkowa (pneumatyczna z 4 drogami wspinaczkowymi)',
  'Zamek dmuchany',
  'Kajaki (dwuosobowe z włókna szklanego), wiosła, kamizelki',
  'Rowery, kaski',
  'Przyczepa towarowa',
  'Motyl holowniczy',
  'Bus 9-cio osobowy (opcja tylko z kierowcą)',
  'Autolaweta (opcja tylko z kierowcą)',
];

const EQUIPMENT_RENTAL_GALLERY = [
  { src: '/images/wynajem-sprzetu/quady.png', alt: 'Quady i samochód terenowy dostępne na wynajem' },
  { src: '/images/wynajem-sprzetu/scianka.png', alt: 'Pneumatyczna ścianka wspinaczkowa na wydarzeniu plenerowym' },
  { src: '/images/eventy/eventy.png', alt: 'Sprzęt eventowy możliwy do wynajęcia na imprezy' },
];

const TRAININGS_ITEMS = [
  'Kursy/szkolenia wspinaczkowe (różne poziomy zaawansowania)',
  'Kursy/szkolenia wysokościowe (desant, ewakuacja, ratownictwo)',
  'Szkolenia quadowe (technika jazdy, obsługa sprzętu)',
  'Szkolenia Off-Road 4x4 (technika jazdy, obsługa sprzętu)',
  'Kursy/szkolenia z zakresu pierwszej pomocy (BLS, AED, AHA)',
  'Kursy/szkolenia motorowodne (kurs na patent motorowodny)',
  'Kursy/szkolenia Sea Survival dla pracowników farm wiatrowych oraz platform wiertniczych',
  'Szkolenia strzeleckie',
  'Szkolenia survivalowe',
  'Szkolenia lodowe (ratownictwo, auto ratownictwo)',
];

const TRAININGS_GALLERY = [
  { src: '/images/szkolenia/szkolenia1.png', alt: 'Ratownicy podczas manewrów na łodzi' },
  { src: '/images/szkolenia/szkolenia2.png', alt: 'Szkolenie wysokościowe i działania linowe nad wodą' },
  { src: '/images/szkolenia/szkolenia3.png', alt: 'Szkolenie pierwszej pomocy i resuscytacji' },
];

const TRANSPORT_ITEMS = [
  'Przewóz busami 9-cio osobowymi',
  'Transport autolawetą 7-mio osobową o ładowności 1560 kg i długości najazdu 4,70 m',
  'Transport przyczepą dwuosiową',
  'Transport pojazdu motylem holowniczym',
];

const TRANSPORT_GALLERY = [
  { src: '/images/transport/transport2.png', alt: 'Autolaweta i przyczepa z quadem podczas transportu nocnego' },
  { src: '/images/transport/transport1.png', alt: 'Flota transportowa na stacji paliw' },
  { src: '/images/transport/transport3.png', alt: 'Bus 9-osobowy wykorzystywany do przewozu' },
];

const ACCOMMODATION_GALLERY = [
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/lesna-baza-1.png', alt: 'Leśna Baza z lotu ptaka' },
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/lesna-baza-2.png', alt: 'Domki i infrastruktura noclegowa Leśnej Bazy' },
];

const SERVICE_BASE_GALLERY = [
  { src: '/images/eventy/eventy.png', alt: 'Sprzęt specjalistyczny wykorzystywany w działaniach terenowych' },
  { src: '/images/serwis/serwis.png', alt: 'Narzędzia wykorzystywane w bazie serwisowej' },
];

export default function OfferSubPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = getOfferBySlug(slug);
  const isSchoolTripsPage = page?.slug === 'wycieczki-szkolne';
  const isUniformedClassesPage = page?.slug === 'obozy-dla-klas-mundurowych';
  const isEventsPage = page?.slug === 'eventy';
  const isBachelorAndBachelorettePage = page?.slug === 'wieczory-kawalerskie-i-panienskie';
  const isEquipmentRentalPage = page?.slug === 'wynajem-sprzetu';
  const isTrainingPage = page?.slug === 'szkolenia-i-kursy';
  const isTransportPage = page?.slug === 'transport';
  const isAccommodationPage = page?.slug === 'baza-noclegowa';
  const isServiceBasePage = page?.slug === 'baza-serwisowa';
  const schoolTripHeroSrc = '/images/wycieczki-szkolne/wycieczka-hero.png';
  const schoolTripDescriptionImageSrc = '/images/wycieczki-szkolne/wycieczka-opis.png';
  const uniformedHeroSrc = '/images/klasy-mundurowe/militaria-4.png';
  const uniformedDescriptionImageSrc = '/images/klasy-mundurowe/militaria-5.png';
  const eventsHeroSrc = '/images/eventy/eventy1.png';
  const equipmentRentalHeroSrc = '/images/wynajem-sprzetu/quady.png';
  const trainingsHeroSrc = '/images/szkolenia/szkolenia2.png';
  const transportHeroSrc = '/images/transport/transport2.png';
  const accommodationHeroSrc = '/utils/oferta-letnia/jura-military-camp/gallery/lesna-baza-1.png';
  const serviceBaseHeroSrc = '/images/eventy/eventy.png';
  const [activeUniformedModuleId, setActiveUniformedModuleId] = useState(UNIFORMED_MODULES[0].id);
  const activeUniformedModule = useMemo(
    () => UNIFORMED_MODULES.find((module) => module.id === activeUniformedModuleId) ?? UNIFORMED_MODULES[0],
    [activeUniformedModuleId]
  );

  if (!page) {
    return <Navigate to="/oferta" replace />;
  }

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section
          className={`section-padding border-b border-white/5 ${
            isSchoolTripsPage || isUniformedClassesPage || isEventsPage || isEquipmentRentalPage || isTrainingPage
              || isTransportPage || isAccommodationPage || isServiceBasePage
              ? 'relative overflow-hidden'
              : 'bg-dark-lighter'
          }`}
        >
          {(isSchoolTripsPage || isUniformedClassesPage || isEventsPage || isEquipmentRentalPage || isTrainingPage || isTransportPage || isAccommodationPage || isServiceBasePage) && (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    isSchoolTripsPage
                      ? schoolTripHeroSrc
                      : isUniformedClassesPage
                        ? uniformedHeroSrc
                        : isEventsPage
                          ? eventsHeroSrc
                          : isEquipmentRentalPage
                            ? equipmentRentalHeroSrc
                            : isTrainingPage
                              ? trainingsHeroSrc
                              : isTransportPage
                                ? transportHeroSrc
                                : isAccommodationPage
                                  ? accommodationHeroSrc
                                  : serviceBaseHeroSrc
                  })`,
                }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/65 to-dark/55" aria-hidden />
            </>
          )}
          <div className="max-w-4xl mx-auto px-6">
            <nav className={`text-sm mb-6 relative z-10 ${isSchoolTripsPage ? 'text-white/70' : 'text-white/50'}`}>
              <Link to="/oferta" className="hover:text-primary transition-colors">
                Oferta
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">{page.title}</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base relative z-10">Oferta</h1>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight mb-8 relative z-10"
            >
              {page.title}
            </motion.h2>
            {isSchoolTripsPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Organizujemy wycieczki szkolne pełne aktywności, przygody i bezpieczeństwa - od krótkich wyjazdów po kompleksowe programy
                realizowane od A do Z.
              </p>
            )}
            {isUniformedClassesPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Programy dla szkół i klas mundurowych łączące szkolenie praktyczne, bezpieczeństwo i aktywny wyjazd z realnym przełożeniem na
                przyszłą służbę.
              </p>
            )}
            {isEventsPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Organizujemy eventy firmowe, integracyjne, motywacyjne oraz wieczory tematyczne szyte pod charakter grupy i założony budżet.
              </p>
            )}
            {isBachelorAndBachelorettePage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Organizujemy wieczory kawalerskie i panieńskie od A do Z - od logistyki i miejsca po scenariusz całego wydarzenia.
              </p>
            )}
            {isEquipmentRentalPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Oferujemy wynajem sprawdzonego sprzętu eventowego, terenowego i sportowego - z opcją obsługi kierowcy tam, gdzie jest wymagana.
              </p>
            )}
            {isTrainingPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Prowadzimy profesjonalne szkolenia i kursy dla grup cywilnych oraz służb mundurowych, z naciskiem na praktykę, bezpieczeństwo i
                wysokie standardy realizacji.
              </p>
            )}
            {isTransportPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Zapraszamy do skorzystania z naszej oferty transportowej dla osób, sprzętu i pojazdów.
              </p>
            )}
            {isAccommodationPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Nasza baza noclegowa na Jurze Krakowsko-Częstochowskiej łączy komfort zakwaterowania z bezpośrednim dostępem do infrastruktury
                terenowej i aktywności.
              </p>
            )}
            {isServiceBasePage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Dysponujemy bazą serwisową, w której stale utrzymujemy i naprawiamy sprzęt wykorzystywany podczas naszych działań terenowych.
              </p>
            )}
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className={`mx-auto px-6 ${isUniformedClassesPage ? 'max-w-4xl lg:max-w-[74rem]' : 'max-w-4xl'}`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-md border-2 border-primary rounded-[2rem] p-8 md:p-12"
            >
              {isSchoolTripsPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">
                    Oferta skierowana jest do szkół, uczelni, dyrektorów i nauczycieli placówek edukacyjnych oraz wszystkich tych, którzy chcą
                    zorganizować wycieczkę w trakcie roku szkolnego.
                  </p>
                  <p>
                    Zajmujemy się profesjonalną organizacją wycieczek szkolnych o różnorodnych zabarwieniach tematycznych. Możemy zająć się
                    kompleksową organizacją wycieczki od A do Z, jak również możemy zorganizować tylko część programową i zapewnić jeden z bloków
                    Państwa wycieczki.
                  </p>

                  <img
                    src={schoolTripDescriptionImageSrc}
                    alt="Uczestnicy wycieczki szkolnej podczas zajęć terenowych"
                    className="w-full rounded-2xl border border-white/10"
                    loading="lazy"
                  />

                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">Tematyki jakie oferujemy</h3>
                    <ul className="space-y-3">
                      {SCHOOL_TRIP_TOPICS.map((topic) => (
                        <li key={topic} className="pl-5 relative">
                          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Szczególną uwagę chcemy zwrócić na fakt, iż wycieczki szkolne nie muszą uczniom kojarzyć się wyłącznie z nudą, zwiedzaniem i
                    &#34;oklepanymi&#34; miejscami, natomiast nauczycielom z ciągłym uporczywym pilnowaniem młodzieży aby czegoś nie zbroiła. To co mamy
                    do zaproponowania to pobyt wypełniony programem, opieka nad uczestnikami 24h, ciekawe zajęcia, a wszystko w miłej i sympatycznej
                    atmosferze. Nauczyciele natomiast nie ponoszą żadnych kosztów związanych z pobytem podczas wycieczki.
                  </p>
                  <p>
                    Wszystkie wyżej wymienione tematyki składają się na programy wycieczek, które tworzymy tak aby dopasować się do Państwa potrzeb.
                    Idealnym miejscem do realizacji tego typu zajęć jest Jura Krakowsko-Częstochowska, i właśnie tam najchętniej działamy. Poza tym,
                    że mamy tam stworzoną całą niezbędną infrastrukturę tj. strzelnice, stanowiska linowe, pole biwakowe, 10-osobowe wojskowe namioty
                    typu NS 64, akweny wodne, pola paintballowe, tor off-roadowy, samochody terenowe itp. Jura to wspaniałe miejsce pod względem
                    zróżnicowanego uwarunkowania terenowego. Znajdziemy tam zarówno równiny jak i wzgórza, które w dużej mierze pokryte są lasem
                    (głównie sosnowym).
                  </p>
                  <p>
                    Na rozległym terenie Jury znajdziemy mnóstwo bloków skalnych, ostańców oraz grot i jaskiń, które dodatkowo uatrakcyjniają ten
                    region Polski, a wszystko to składa się na jakość zajęć, które mamy przyjemność Państwu zaproponować.
                  </p>
                  <p>
                    Jura Krakowsko-Częstochowska ma jeszcze jeden znaczący atut. Chcąc dojechać do nas z miejscowości położonych w południowej i
                    centralnej Polsce nie powinno to zająć więcej niż 3,5h i mierzyć więcej niż około 200 km, a co za tym idzie koszty dojazdu będą
                    stosunkowo niskie, co pozwoli aby koszt całego wyjazdu był przystępny.
                  </p>

                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">
                      Zajmujemy się organizacją takiego wyjazdu w 100%
                    </h3>
                    <ul className="space-y-2">
                      {SCHOOL_TRIP_ORGANIZATION.map((item) => (
                        <li key={item} className="pl-5 relative">
                          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Istnieje możliwość zorganizowania tego typu wyjazdu w każdy zakątek Polski, jednak Jura Krakowsko-Częstochowska daje największe
                    możliwości aby realizować tak wszechstronne i atrakcyjne zajęcia.
                  </p>
                  <p className="font-semibold text-white">Organizujemy tego typu wyjazdy o każdej porze roku!</p>
                  <p className="border-t border-white/10 pt-8">
                    Liczymy na zainteresowanie z Państwa strony naszą ofertą i zapraszamy do kontaktu.
                  </p>
                  <p className="text-white/60 text-sm">
                    <a href="mailto:biuro@ja-yhymm.pl" className="text-primary hover:underline">
                      biuro@ja-yhymm.pl
                    </a>
                    {' · '}
                    <a href="tel:794997714" className="text-primary hover:underline">
                      794 997 714
                    </a>
                  </p>
                </div>
              ) : isUniformedClassesPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">
                    Oferta przeznaczona dla szkół oraz klas o profilach mundurowych (policja, wojsko, straż pożarna, ratownictwo itp.).
                  </p>
                  <p>
                    Jesteśmy jedną z nielicznych instytucji, które zajmują się profesjonalną organizacją tego typu wyjazdów dla młodzieży w wieku
                    szkolnym (gimnazjum, liceum, technikum), jak również dla studentów uczelni wyższych (zarządzanie kryzysowe, ratownictwo itp.).
                  </p>
                  <p>Chcemy zaproponować Państwu zorganizowanie aktywnego wyjazdu dla uczniów i studentów Waszej placówki.</p>

                  <img
                    src={uniformedDescriptionImageSrc}
                    alt="Uczestnicy obozu militarnego prezentujący wyposażenie"
                    className="w-full rounded-2xl border border-white/10"
                    loading="lazy"
                  />

                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">Tematyki jakimi zajmujemy się</h3>
                    <ul className="space-y-3">
                      {UNIFORMED_TOPICS.map((topic) => (
                        <li key={topic} className="pl-5 relative">
                          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-5">Bloki szkoleniowe</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {UNIFORMED_MODULES.map((module) => (
                        <button
                          key={module.id}
                          type="button"
                          onClick={() => setActiveUniformedModuleId(module.id)}
                          className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border transition-colors ${
                            activeUniformedModuleId === module.id
                              ? 'bg-primary text-dark border-primary'
                              : 'bg-white/5 text-white/70 border-white/10 hover:border-primary hover:text-white'
                          }`}
                        >
                          {module.title}
                        </button>
                      ))}
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-7 min-h-[320px]">
                      <h4 className="text-white font-semibold text-lg md:text-xl mb-3">{activeUniformedModule.title}</h4>
                      <p className="mb-4">{activeUniformedModule.intro}</p>
                      {'body' in activeUniformedModule && activeUniformedModule.body && <p className="mb-4">{activeUniformedModule.body}</p>}
                      {'items' in activeUniformedModule && activeUniformedModule.items && (
                        <ul className="space-y-2 mb-4">
                          {activeUniformedModule.items.map((item) => (
                            <li key={item} className="pl-5 relative">
                              <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {'blocks' in activeUniformedModule && activeUniformedModule.blocks && (
                        <div className="space-y-4">
                          {activeUniformedModule.blocks.map((block) => (
                            <div key={block.title} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                              <h5 className="text-white font-semibold mb-2">{block.title}</h5>
                              {block.body && <p className="mb-3">{block.body}</p>}
                              {block.items && (
                                <ul className="space-y-2">
                                  {block.items.map((item) => (
                                    <li key={item} className="pl-5 relative">
                                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {UNIFORMED_GALLERY.map((image) => (
                      <figure key={image.src} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                        <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" loading="lazy" />
                      </figure>
                    ))}
                  </div>

                  <p>
                    Wszystkie wyżej wymienione tematyki składają się na programy obozów, które tworzymy tak, aby dopasować się do Państwa potrzeb.
                  </p>
                  <p>
                    Idealnym miejscem do realizacji tego typu zajęć jest Jura Krakowsko-Częstochowska i właśnie tam najchętniej działamy. Mamy tam
                    stworzoną infrastrukturę: strzelnice, stanowiska linowe, pole biwakowe, wojskowe namioty NS 64, akweny wodne, pola paintballowe,
                    tor off-roadowy oraz samochody terenowe. Jura to także zróżnicowany teren - równiny, wzgórza i lasy sosnowe.
                  </p>
                  <p>
                    Na rozległym terenie Jury znajdziemy mnóstwo bloków skalnych, ostańców oraz grot i jaskiń, które dodatkowo uatrakcyjniają ten
                    region Polski i podnoszą jakość zajęć.
                  </p>
                  <p>
                    Jura Krakowsko-Częstochowska ma jeszcze jeden znaczący atut: z miejscowości południowej i centralnej Polski dojazd zwykle nie
                    przekracza 3,5h i około 200 km, co obniża koszt całego wyjazdu.
                  </p>
                  <p>
                    Szczególną uwagę chcemy zwrócić na fakt, iż wycieczki szkolne nie muszą uczniom kojarzyć się wyłącznie z nudą i „oklepanymi”
                    miejscami, a nauczycielom z ciągłym pilnowaniem młodzieży. Oferujemy pobyt wypełniony programem, opiekę 24h, ciekawe zajęcia z
                    praktycznym przełożeniem na przyszłą pracę w służbach mundurowych i przyjazną atmosferę. Nauczyciele nie ponoszą kosztów pobytu.
                  </p>

                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">
                      Zajmujemy się organizacją takiego wyjazdu w 100%
                    </h3>
                    <ul className="space-y-2">
                      {UNIFORMED_ORGANIZATION.map((item) => (
                        <li key={item} className="pl-5 relative">
                          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Istnieje możliwość zorganizowania tego typu wyjazdu w każdy zakątek Polski, jednak Jura Krakowsko-Częstochowska daje największe
                    możliwości, aby realizować tak wszechstronne i atrakcyjne zajęcia.
                  </p>
                  <p className="font-semibold text-white">Organizujemy tego typu wyjazdy o każdej porze roku!</p>
                  <p className="border-t border-white/10 pt-8">Liczymy na zainteresowanie z Państwa strony naszą ofertą i zapraszamy do kontaktu.</p>
                  <p className="text-white/60 text-sm">
                    <a href="mailto:biuro@ja-yhymm.pl" className="text-primary hover:underline">
                      biuro@ja-yhymm.pl
                    </a>
                    {' · '}
                    <a href="tel:794997714" className="text-primary hover:underline">
                      794 997 714
                    </a>
                  </p>
                </div>
              ) : isEventsPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">Imprezy integracyjne</h3>
                    <p>
                      Organizacja imprez dla firm jest jednym z ważniejszych elementów naszej działalności. Przygotowujemy imprezy na miejscu jak
                      pikniki firmowe, turnieje oraz imprezy wyjazdowe - integracyjne, szkoleniowe i motywacyjne. Tworzymy scenariusze letnie i
                      zimowe oraz szeroką gamę zajęć rekreacyjnych, rekreacyjno-sportowych i integracyjnych (team building).
                    </p>
                    <p className="mt-4">
                      Zawsze staramy się optymalnie dopasować scenariusz imprezy do oczekiwań uczestników, dlatego oprócz gotowych propozycji
                      przygotowujemy też programy autorskie pod kątem danej firmy. Program budujemy zależnie od profilu grupy, liczby uczestników i
                      budżetu, dlatego cennik opracowujemy indywidualnie pod każde zamówienie. Stopień trudności jest dopasowany tak, aby wszyscy -
                      bez względu na płeć i wiek - mogli aktywnie uczestniczyć.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {EVENTS_GALLERY.map((image) => (
                      <figure key={image.src} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                        <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" loading="lazy" />
                      </figure>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">Wieczory kawalerskie i panieńskie</h3>
                    <p>
                      Fundacja JA YHYMM... Integracja, Sport, Turystyka, Wypoczynek jest właścicielem marki Kawalerskie-Panienskie.pl, która zajmuje
                      się profesjonalną organizacją najlepszych wieczorów kawalerskich i panieńskich.
                    </p>
                    <p className="mt-4">
                      Wieczór kawalerski i panieński nie musi kojarzyć się tylko i wyłącznie z utratą pamięci oraz striptizem (aczkolwiek obydwu tych
                      rzeczy nie wykluczamy). Proponujemy Wam coś zupełnie innego. Specjalizujemy się w kompleksowej organizacji „ostatnich dni
                      wolności” od transportu, poprzez lokal i miejsce imprezy, aż po pełną formułę całego wydarzenia.
                    </p>
                    <a
                      href="http://kawalerskie-panienskie.pl"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex mt-6 px-6 py-3 rounded-full bg-primary text-dark font-bold uppercase tracking-wider text-xs md:text-sm hover:opacity-90 transition-opacity"
                    >
                      Przejdź do kawalerskie-panienskie.pl
                    </a>
                  </div>
                </div>
              ) : isBachelorAndBachelorettePage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">Wieczory kawalerskie i panieńskie</h3>
                    <p>
                      Fundacja JA YHYMM... Integracja, Sport, Turystyka, Wypoczynek jest właścicielem marki Kawalerskie-Panienskie.pl, która zajmuje
                      się profesjonalną organizacją najlepszych wieczorów kawalerskich i panieńskich.
                    </p>
                    <p className="mt-4">
                      Wieczór kawalerski i panieński nie musi kojarzyć się tylko i wyłącznie z utratą pamięci oraz striptizem (aczkolwiek obydwu tych
                      rzeczy nie wykluczamy). Proponujemy Wam coś zupełnie innego. Specjalizujemy się w kompleksowej organizacji „ostatnich dni
                      wolności” od transportu, poprzez lokal i miejsce imprezy, aż po pełną formułę całego wydarzenia.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {EVENTS_GALLERY.map((image) => (
                      <figure key={image.src} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                        <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" loading="lazy" />
                      </figure>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <a
                      href="http://kawalerskie-panienskie.pl"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex px-6 py-3 rounded-full bg-primary text-dark font-bold uppercase tracking-wider text-xs md:text-sm hover:opacity-90 transition-opacity"
                    >
                      Przejdź do kawalerskie-panienskie.pl
                    </a>
                  </div>
                </div>
              ) : isEquipmentRentalPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">Oferujemy Wam możliwość wynajmu sprzętu.</p>
                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">Co można u nas wynająć?</h3>
                    <ul className="space-y-3">
                      {EQUIPMENT_RENTAL_ITEMS.map((item) => (
                        <li key={item} className="pl-5 relative">
                          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {EQUIPMENT_RENTAL_GALLERY.map((image) => (
                      <figure key={image.src} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                        <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" loading="lazy" />
                      </figure>
                    ))}
                  </div>
                </div>
              ) : isTrainingPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">
                    Organizujemy profesjonalne szkolenia i kursy zarówno dla grup cywilnych jak też dla służb mundurowych takich jak: WOJSKO,
                    POLICJA, STRAŻ POŻARNA, STRAŻ GRANICZNA, WOPR, GOPR, OBRONA CYWILNA.
                  </p>

                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">
                      Zapraszamy na następujące kursy i szkolenia
                    </h3>
                    <ul className="space-y-3">
                      {TRAININGS_ITEMS.map((item) => (
                        <li key={item} className="pl-5 relative">
                          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="font-semibold text-white">MOŻEMY ZORGANIZOWAĆ SZKOLENIE ŁĄCZĄC POSZCZEGÓLNE MODUŁY ZE SOBĄ.</p>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {TRAININGS_GALLERY.map((image) => (
                      <figure key={image.src} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                        <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" loading="lazy" />
                      </figure>
                    ))}
                  </div>

                  <p>
                    Jesteśmy w stanie przeszkolić grupę osób, jak i każdą indywidualną osobę z każdego z ww. zagadnień. Przede wszystkim stawiamy na
                    rzetelność, bezpieczeństwo i profilaktykę, dlatego nasze zajęcia prowadzone są przez wykwalifikowaną kadrę, na którą składają się
                    doświadczeni instruktorzy poszczególnych form aktywności.
                  </p>
                </div>
              ) : isTransportPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">Zapraszamy do skorzystania z naszej oferty transportowej.</p>
                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">Oferujemy</h3>
                    <ul className="space-y-3">
                      {TRANSPORT_ITEMS.map((item) => (
                        <li key={item} className="pl-5 relative">
                          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {TRANSPORT_GALLERY.map((image) => (
                      <figure key={image.src} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                        <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" loading="lazy" />
                      </figure>
                    ))}
                  </div>
                </div>
              ) : isAccommodationPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">
                    Nasza baza noclegowa znajduje się w przepięknej miejscowości Góry Gorzkowskie na terenie Jury Krakowsko-Częstochowskiej.
                  </p>
                  <p>
                    Właśnie tam mamy do dyspozycji 6 nowoczesnych wojskowych namiotów NS 64, w których jesteśmy w stanie zakwaterować od 60 do 100
                    osób. Namioty mają drewniane podłogi, co pozwala na wygodne i bezproblemowe funkcjonowanie w ich wnętrzu.
                  </p>
                  <p>
                    Na terenie naszej bazy noclegowej posiadamy miejsce na ognisko wraz z ławkami, grill oraz kuchnię polową. Do dyspozycji mamy
                    również kontener sanitarny, w którym znajdują się 4 prysznice i 4 toalety.
                  </p>
                  <p>
                    Na terenie obiektu znajdują się takie atrakcje jak: poligon paintballowy, mini park linowy, drogi wspinaczkowe, bouldering, trasa
                    off-road/quad, strzelnica na broń pneumatyczną, strzelnica łucznicza oraz tor przeszkód.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {ACCOMMODATION_GALLERY.map((image) => (
                      <figure key={image.src} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                        <img src={image.src} alt={image.alt} className="w-full h-56 object-cover" loading="lazy" />
                      </figure>
                    ))}
                  </div>

                  <p>W najbliższym czasie planujemy postawienie kilku całorocznych domków, każdy dla 8/10 osób.</p>
                  <p className="border-t border-white/10 pt-8">
                    Wszystkich żądnych przygód zapraszamy serdecznie do kontaktu z nami i odwiedzenia nas :)
                  </p>
                </div>
              ) : isServiceBasePage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">Dysponujemy bazą serwisową, w której naprawiamy nasz cały sprzęt.</p>
                  <p>
                    Sprzęt, którym się zajmujemy to przede wszystkim sprzęt paintballowy marek Tippmann, BT, Spyder. Na bieżąco staramy się
                    utrzymywać nasze karabinki w dobrym stanie tak, abyście zawsze dostali sprawny sprzęt.
                  </p>
                  <p>
                    Poza tym na bieżąco serwisujemy nasze quady, samochody terenowe, busy, tak aby ich użytkowanie zawsze było bezpieczne i
                    przyjemne. W wolnych chwilach (choć nie ma ich wiele) serwisujemy również ww. sprzęt naszym indywidualnym klientom.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {SERVICE_BASE_GALLERY.map((image) => (
                      <figure key={image.src} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                        <img src={image.src} alt={image.alt} className="w-full h-56 object-cover" loading="lazy" />
                      </figure>
                    ))}
                  </div>

                  <p className="border-t border-white/10 pt-8">
                    Jeżeli masz jakiś problem ze sprzętem paintballowym lub motoryzacyjnym, skontaktuj się z nami - postaramy się pomóc!
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-lg text-white/80 leading-relaxed mb-8">{page.lead}</p>
                  <p className="text-white/50 text-sm leading-relaxed border-t border-white/10 pt-8">
                    Pełny opis oferty, harmonogramy i wyceny — ustalamy indywidualnie.{' '}
                    <a href="mailto:biuro@ja-yhymm.pl" className="text-primary hover:underline">
                      Napisz do nas
                    </a>
                    {' '}lub zadzwoń:{' '}
                    <a href="tel:794997714" className="text-primary hover:underline">
                      794 997 714
                    </a>
                    .
                  </p>
                </>
              )}
            </motion.div>

            <div className="mt-12">
              <Link
                to="/oferta"
                className="inline-flex text-sm font-bold uppercase tracking-wider text-primary hover:text-white transition-colors"
              >
                ← Przegląd oferty
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
