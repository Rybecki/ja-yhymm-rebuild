import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GalleryLightbox, type GalleryImageItem } from '../components/GalleryLightbox';
import { getTopicBySlug } from '../data/topicPages';

const QUADS_GALLERY = [
  { src: '/images/tematyka/quady-1.png', alt: 'Quad przejeżdżający przez błotnistą przeszkodę terenową' },
  { src: '/images/tematyka/quady-2.png', alt: 'Czerwony quad z dwoma uczestnikami w kaskach w lesie' },
  { src: '/images/tematyka/quady-3.png', alt: 'Grupa uczestników na quadach pozujących na piaszczystym terenie' },
];

const OFFROAD_GALLERY = [
  { src: '/utils/oferta-letnia/jura-off-road-camp-4x4/gallery/offroad-4.png', alt: 'Samochód terenowy pokonujący błotną przeszkodę' },
  { src: '/utils/oferta-letnia/jura-off-road-camp-4x4/gallery/offroad-3.png', alt: 'Zajęcia off-road z elementami technik terenowych' },
];

const MILITARY_VEHICLES_GALLERY = [
  { src: '/images/tematyka/kraz-1.png', alt: 'Przejażdżka wojskowym pojazdem KRAZ z uczestnikami na pace' },
  { src: '/images/tematyka/kraz-2.png', alt: 'Wojskowy pojazd terenowy KRAZ 6x6 na zielonej polanie' },
  { src: '/utils/oferta-letnia/jura-multi-camp/gallery/multi-4.png', alt: 'Przejażdżka wojskowym pojazdem KRAZ w terenie' },
  { src: '/images/tematyka/wojskowe-pojazdy.png', alt: 'Wojskowy pojazd terenowy KRAZ 6x6 na torze off-road' },
];

const CLIMBING_WALL_GALLERY = [
  { src: '/images/tematyka/scianka1.png', alt: 'Dmuchana ścianka wspinaczkowa podczas zajęć linowych' },
  { src: '/images/wynajem-sprzetu/scianka.png', alt: 'Uczestnicy pikniku korzystający ze ścianki wspinaczkowej' },
];

const CLIMBING_ROCK_GALLERY = [
  { src: '/images/tematyka/linowe-1.png', alt: 'Instruktor asekurujący uczestnika wspinającego się po skale w lesie' },
  { src: '/images/tematyka/linowe-2.png', alt: 'Uczestnik podczas zjazdu na linie z drzewa nad zboczem' },
  { src: '/images/tematyka/linowe-3.png', alt: 'Wspinaczka po skale z asekuracją w słoneczny dzień' },
  { src: '/images/tematyka/linowe-4.png', alt: 'Uczestnik zajęć linowych wiszący na linie w leśnym wąwozie' },
];

const PAINTBALL_GALLERY = [
  { src: '/images/tematyka/paintball-1.png', alt: 'Paintballowe działania w lesie' },
  { src: '/images/tematyka/paintball-2.png', alt: 'Zespół uczestników w pełnym wyposażeniu paintballowym' },
  { src: '/images/tematyka/paintball-3.png', alt: 'Gracz paintballowy podczas realizacji zadania terenowego' },
  { src: '/utils/oferta-letnia/jura-multi-camp/gallery/multi-3.png', alt: 'Drużyna paintballowa podczas zajęć integracyjnych' },
];

const MILITARIA_GALLERY = [
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/militaria-3.png', alt: 'Uczestnicy zajęć militarnych podczas zadań terenowych' },
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/militaria-2.png', alt: 'Ćwiczenia zespołowe i ewakuacja w warunkach polowych' },
];

const SURVIVAL_GALLERY = [
  { src: '/images/tematyka/survival-1.png', alt: 'Uczestnicy zajęć survivalowych przy nocnym obozowisku' },
  { src: '/images/tematyka/survival-2.png', alt: 'Przeprawa przez tereny podmokłe podczas zadań survivalowych' },
  { src: '/utils/oferta-letnia/jura-survival-camp/gallery/survival-1.png', alt: 'Przygotowanie ogniska i posiłku w warunkach terenowych' },
];

const WATER_GALLERY = [
  { src: '/images/tematyka/wodne-1.png', alt: 'Skoki i manewry na łodzi motorowej podczas zajęć wodnych' },
  { src: '/images/tematyka/wodne-2.png', alt: 'Przejażdżka na bananie wodnym' },
  { src: '/utils/obozy-kolonie/lato.png', alt: 'Atrakcje wodne i rekreacja na kole wodnym' },
];

const WATER_MODULES = [
  {
    id: 'gry-i-zabawy',
    title: 'Gry i zabawy na wodzie',
    items: [
      'Pływanie na nartach wodnych',
      'Pływanie na kole wodnym za motorówką',
      'Wyścig: łodzie rybackie → rowerki wodne → kajaki',
      'Gra w piłkę na kajakach bez użycia wioseł',
      'Wyścig na kajakach z przeszkodami',
      'Wyścig na rowerkach wodnych z przeszkodami',
      'Zamiana miejsc w kajaku i rzut piłką do celu',
      'Dla wybranych: wyskok do wody i powrót do kajaka',
      'Wyścig na canoe (wiosłowanie z jednej strony)',
      'Bitwa na kajakach (wiosłujący + osoba z miękkim drągiem)',
      'Sztafeta: łódka rybacka → kajak → kanadyjka → rowerek wodny',
    ],
  },
  {
    id: 'desant-wodny',
    title: 'Desant wodny',
    intro:
      'Desant wodny to skok do wody z płynącej motorówki i wykonanie zespołowej misji: zdesantować się, wykonać zadanie, wrócić do bazy.',
    items: [
      'Zaminowanie terenu i sprzętu nieprzyjaciela (atrapy min i granatów ćwiczebnych)',
      'Misja zwiadowcza terenu wroga (dokumentacja strategicznych punktów)',
      'Akcja ratunkowa rannego żołnierza i transport na noszach/pontonie',
      'Wykradnięcie prototypu tajnej łodzi z terenu zaminowanego',
      'Odnalezienie skrzyni z bronią i transport lądowo-wodny',
      'Misja zwiadowcza: pobór i dostarczenie próbek terenowych',
    ],
    note:
      'Podane scenariusze są przykładowe - możemy zrealizować także autorskie pomysły uczestników.',
  },
  {
    id: 'chrzest-morski',
    title: 'Chrzest morski',
    intro:
      'Wesoła wersja Neptunalii - idealna na rozpoczęcie lub zakończenie imprezy nad wodą. To integracja, humor i morski klimat w praktyce.',
    body:
      'Całość zabawy kończy się nadaniem uczestnikom certyfikatu z imieniem związanym z wodą, np. „Połamany Handszpak” lub „Zatarta Likszpara”.',
  },
] as const;

const HORSE_RIDING_GALLERY = [
  { src: '/images/tematyka/konie-1.png', alt: 'Jazda konna na padoku w terenie zielonym' },
  { src: '/images/tematyka/konie-2.png', alt: 'Uczestniczka zajęć podczas jazdy konnej' },
];

const FIRST_AID_GALLERY = [
  { src: '/images/szkolenia/szkolenia1.png', alt: 'Ratownicy podczas działań i manewrów na łodzi' },
  { src: '/images/szkolenia/szkolenia2.png', alt: 'Szkolenie ratownicze z technikami linowymi nad wodą' },
  { src: '/images/szkolenia/szkolenia3.png', alt: 'Ćwiczenia resuscytacji i pierwszej pomocy na fantomie' },
  { src: '/images/tematyka/ratownictwo-1.png', alt: 'Zespół uczestników szkolenia i pokazu ratownictwa' },
];

const OTHER_ATTRACTIONS_GALLERY = [
  { src: '/images/tematyka/inne-1.png', alt: 'Dodatkowe atrakcje terenowe i wyprawowe' },
  { src: '/images/tematyka/inne-2.png', alt: 'Urodzinowa atrakcja dla najmłodszych uczestników' },
  { src: '/images/tematyka/inne-3.png', alt: 'Organizacja pikniku i zaplecze eventowe' },
  { src: '/images/tematyka/inne-4.png', alt: 'Wyjazd i transport uczestników wydarzenia' },
];

export default function TopicSubPage() {
  const { slug } = useParams<{ slug: string }>();
  const topic = getTopicBySlug(slug);
  const isQuadsPage = topic?.slug === 'quady';
  const isOffRoadPage = topic?.slug === 'off-road';
  const isMilitaryVehiclesPage = topic?.slug === 'wojskowe-pojazdy-terenowe';
  const isClimbingPage = topic?.slug === 'zajecia-linowe-i-wspinaczka';
  const isPaintballPage = topic?.slug === 'paintball';
  const isMilitariaPage = topic?.slug === 'militaria';
  const isSurvivalPage = topic?.slug === 'survival';
  const isWaterPage = topic?.slug === 'atrakcje-wodne-i-podwodne';
  const isHorsePage = topic?.slug === 'jazda-konna';
  const isFirstAidPage = topic?.slug === 'pierwsza-pomoc-i-ratownictwo';
  const isOtherPage = topic?.slug === 'inne';
  const [activeWaterModuleId, setActiveWaterModuleId] = useState(WATER_MODULES[0].id);
  const [topicGallery, setTopicGallery] = useState<{ images: readonly GalleryImageItem[]; index: number } | null>(null);
  const activeWaterModule = useMemo(
    () => WATER_MODULES.find((module) => module.id === activeWaterModuleId) ?? WATER_MODULES[0],
    [activeWaterModuleId]
  );

  if (!topic) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section
          className={`section-padding border-b border-white/5 ${
            isQuadsPage || isOffRoadPage || isMilitaryVehiclesPage || isClimbingPage || isPaintballPage
              || isMilitariaPage || isSurvivalPage || isWaterPage || isHorsePage || isFirstAidPage || isOtherPage
              ? 'relative overflow-hidden'
              : 'bg-dark-lighter'
          }`}
        >
          {(isQuadsPage || isOffRoadPage || isMilitaryVehiclesPage || isClimbingPage || isPaintballPage || isMilitariaPage || isSurvivalPage || isWaterPage || isHorsePage || isFirstAidPage || isOtherPage) && (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    isQuadsPage
                      ? '/utils/oferta-letnia/quad-academy-camp.png'
                      : isOffRoadPage
                        ? '/utils/oferta-letnia/jura-off-road-camp-4x4/gallery/offroad-4.png'
                        : isMilitaryVehiclesPage
                          ? '/images/tematyka/kraz-1.png'
                          : isClimbingPage
                            ? '/images/tematyka/scianka1.png'
                            : isPaintballPage
                              ? '/images/tematyka/paintball-1.png'
                              : isMilitariaPage
                                ? '/utils/oferta-letnia/military-camp.png'
                                : isSurvivalPage
                                  ? '/images/tematyka/survival-2.png'
                                  : isWaterPage
                                    ? '/utils/obozy-kolonie/lato.png'
                                    : isHorsePage
                                      ? '/images/tematyka/konie-1.png'
                                      : isFirstAidPage
                                        ? '/images/szkolenia/szkolenia1.png'
                                        : '/images/tematyka/inne-1.png'
                  })`,
                }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/55" aria-hidden />
            </>
          )}
          <div className="max-w-4xl mx-auto px-6">
            <nav
              className={`text-sm mb-6 relative z-10 ${
                isQuadsPage || isOffRoadPage || isMilitaryVehiclesPage || isClimbingPage || isPaintballPage || isMilitariaPage
                || isSurvivalPage || isWaterPage || isHorsePage || isFirstAidPage || isOtherPage
                  ? 'text-white/70'
                  : 'text-white/50'
              }`}
            >
              <Link to="/" className="hover:text-primary transition-colors">
                Strona główna
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Tematyka</span>
              <span className="mx-2">/</span>
              <span className="text-white/80">{topic.title}</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base relative z-10">Tematyka</h1>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight mb-8 relative z-10"
            >
              {topic.title}
            </motion.h2>
            {isQuadsPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Piach, błoto, woda i terenowe wyzwania - to naturalne środowisko naszych wypraw quadowych.
              </p>
            )}
            {isOffRoadPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                OFF-ROAD to czysta adrenalina, terenowe wyzwania i praktyczna nauka jazdy samochodem 4x4 w warunkach, których nie spotkasz na co dzień.
              </p>
            )}
            {isMilitaryVehiclesPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Przejażdżka wojskowym KRAZ-em 6x6 to wyjątkowa atrakcja terenowa, która łączy potężną maszynę z niezapomnianymi emocjami.
              </p>
            )}
            {isClimbingPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Atestowana dmuchana ścianka wspinaczkowa z obsługą to gotowa atrakcja na festyny, pikniki i wydarzenia, gdzie liczy się ruch, zabawa i
                odrobina adrenaliny.
              </p>
            )}
            {isPaintballPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Emocjonująca gra zespołowa, w której liczą się spryt, szybkie decyzje i współpraca pod presją czasu.
              </p>
            )}
            {isMilitariaPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Program militarny łączy dyscyplinę, taktykę i działania terenowe, które uczą współpracy, odporności i skutecznego reagowania.
              </p>
            )}
            {isSurvivalPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Survival to praktyczna szkoła przetrwania w terenie: od ognia i schronienia po orientację, wodę, pożywienie i działania zespołowe.
              </p>
            )}
            {isWaterPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Atrakcje wodne i podwodne to połączenie integracji, aktywności i scenariuszy przygodowych realizowanych pod opieką ratowników oraz
                instruktorów.
              </p>
            )}
            {isHorsePage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Zajęcia konne dla początkujących i zaawansowanych - od spokojnego spaceru po trening na padoku i wyjazdy w malowniczy teren.
              </p>
            )}
            {isFirstAidPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Szkolenia z pierwszej pomocy i pokazy ratownictwa realizujemy z naciskiem na praktykę, odpowiedzialność i gotowość do realnego działania.
              </p>
            )}
            {isOtherPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Oprócz standardowej oferty przygotowujemy także dodatkowe atrakcje i niestandardowe realizacje dopasowane do charakteru wydarzenia.
              </p>
            )}
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-md border-2 border-primary rounded-[2rem] p-8 md:p-12"
            >
              {isQuadsPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">Piach, błoto, woda, przeszkody... czyli to, co quady lubią najbardziej.</p>
                  <p>
                    Wszystkie te przeciwności losu postaramy się pokonać za pomocą naszych quadów. Poznacie możliwości tych wspaniałych maszyn i ich
                    niekonwencjonalne zastosowania. Ostre pojazdy oraz strome zjazdy i przechyły z pewnością dostarczą mnóstwa wrażeń i adrenaliny.
                  </p>
                  <p>
                    Możemy również wybrać się na wyprawę nocną, co dodatkowo potęguje wrażenia. Po spędzeniu kilku godzin w terenie istnieje
                    możliwość zorganizowania imprezy w motoryzacyjnych klimatach.
                  </p>
                  <p>
                    Quady to doskonała zabawa, którą zapewnimy Ci podczas Twojego eventu, urodzin, wieczoru kawalerskiego lub panieńskiego.
                    Organizujemy również obozy quadowe oraz wypady na quadach jedno i wielodniowe.
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {QUADS_GALLERY.map((image, i) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setTopicGallery({ images: QUADS_GALLERY, index: i })}
                        className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Powiększ: ${image.alt}`}
                      >
                        <img src={image.src} alt={image.alt} className="w-full h-52 object-cover pointer-events-none" loading="lazy" />
                      </button>
                    ))}
                  </div>

                  <p className="font-semibold text-white border-t border-white/10 pt-8">QUADOWA JAZDA INNA NIŻ WSZYSTKIE!</p>
                </div>
              ) : isOffRoadPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">
                    OFF-ROAD to niesamowita przygoda, mnóstwo pozytywnych emocji oraz adrenalina, której nie uświadczysz nigdzie indziej.
                  </p>
                  <p>
                    Nasi instruktorzy pokażą Wam niesamowite możliwości samochodów terenowych. Strome podjazdy, trawersy i zjazdy podniosą poziom
                    adrenaliny i umożliwią zupełnie inne spojrzenie na jazdę samochodem.
                  </p>
                  <p>
                    Omówimy zasady pokonywania trudnych przeszkód terenowych, na przykład jazdę w przechyle bocznym, maksymalne kąty natarcia i
                    zejścia oraz wiele innych tajników. Umożliwimy sprawdzenie swoich umiejętności jako kierowcy samochodów o niewiarygodnych
                    możliwościach terenowych.
                  </p>
                  <p>
                    Nauka jazdy samochodem terenowym prowadzona jest w bardzo zróżnicowanym terenie. Przejażdżki zawsze poprzedzone są instruktarzem,
                    po czym każdy uczestnik pod kontrolą instruktora może spróbować swoich sił w jeździe w terenie.
                  </p>

                  <p className="font-semibold text-white">UMÓW SIĘ NA SWOJĄ JAZDĘ JUŻ DZIŚ!</p>

                  <p>
                    Samochody terenowe i szeroko rozumiany OFF-ROAD są znakomitym uzupełnieniem każdej imprezy integracyjnej, firmowej, urodzin,
                    pikniku itp. Mogą też być główną atrakcją lub super prezentem urodzinowym.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {OFFROAD_GALLERY.map((image, i) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setTopicGallery({ images: OFFROAD_GALLERY, index: i })}
                        className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Powiększ: ${image.alt}`}
                      >
                        <img src={image.src} alt={image.alt} className="w-full h-56 object-cover pointer-events-none" loading="lazy" />
                      </button>
                    ))}
                  </div>

                  <p className="font-semibold text-white border-t border-white/10 pt-8">JAZDA INNA NIŻ WSZYSTKIE!</p>
                </div>
              ) : isMilitaryVehiclesPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">
                    KRAZ to radziecka super maszyna z silnikiem V8 o pojemności piętnaście litrów, mocy 240 koni, momencie obrotowym 883 Nm i
                    napędzie 6x6 na trzy osie... Brzmi ciekawie? To MUSISZ SIĘ NIM PRZEJECHAĆ!!!
                  </p>
                  <p>
                    Oferujemy przejażdżki naszym „POTWOREM”. Mamy specjalnie przystosowaną pakę z ławkami do przewozu osób, gdzie bez problemu
                    pomieści się około 30 chętnych na krazową przygodę. KRAZ-em jeździmy głównie na terenie Jury Krakowsko-Częstochowskiej, okolice
                    Złotego Potoku, ale jeżeli chcesz, abyśmy obsłużyli Twoją imprezę w innym miejscu w Polsce, możemy go tam dowieźć.
                  </p>
                  <p>
                    Musimy tylko doliczyć koszty transportu „POTWORA”, które wcale nie są jakieś przerażające. Obsługujemy zarówno grupy
                    zorganizowane, jak też osoby indywidualne. Minimalna ilość osób, z którą ruszamy to 10. Przejażdżki trwają średnio 15/20 minut,
                    ale jeżeli masz inne propozycje to skontaktuj się z nami i z pewnością się dogadamy.
                  </p>
                  <p>
                    To wspaniała atrakcja podczas wycieczki szkolnej, wypadu na Jurę, wieczoru kawalerskiego/panieńskiego i na każdą inną okazję.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {MILITARY_VEHICLES_GALLERY.map((image, i) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setTopicGallery({ images: MILITARY_VEHICLES_GALLERY, index: i })}
                        className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Powiększ: ${image.alt}`}
                      >
                        <img src={image.src} alt={image.alt} className="w-full h-56 object-cover pointer-events-none" loading="lazy" />
                      </button>
                    ))}
                  </div>

                  <p className="font-semibold text-white border-t border-white/10 pt-8">PRAWDZIWA JAZDA PRAWDZIWYM POTWOREM!</p>
                </div>
              ) : isClimbingPage ? (
                <div className="space-y-12 text-white/80 leading-relaxed">
                  <div className="space-y-6">
                    <p className="text-lg font-semibold text-white">WYNAJEM ŚCIANKI WSPINACZKOWEJ</p>
                    <p>
                      NOWOŚĆ! Jeżeli chciałbyś, aby Twój festyn, piknik, wycieczkę, urodziny, czy też wieczór kawalerski urozmaiciło coś nietypowego i
                      dającego wiele zabawy oraz szczyptę adrenaliny, dajemy Ci możliwość wypożyczenia atestowanej dmuchanej ścianki wspinaczkowej wraz
                      z obsługą.
                    </p>
                    <p>Ścianka posiada cztery trasy o różnym poziomie trudności.</p>
                    <p>
                      Ściankę można ustawić praktycznie na każdym w miarę równym terenie. Zapewniamy transport, montaż oraz obsługę ścianki.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {CLIMBING_WALL_GALLERY.map((image, i) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setTopicGallery({ images: CLIMBING_WALL_GALLERY, index: i })}
                          className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          aria-label={`Powiększ: ${image.alt}`}
                        >
                          <img src={image.src} alt={image.alt} className="w-full h-56 object-cover pointer-events-none" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 border-t border-white/10 pt-8">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base">
                      Zajęcia linowe i wspinaczka w terenie
                    </h3>
                    <p>
                      Tyrolka, „małpi most”, czy wspinanie się na kilkumetrową wieżę ze skrzynek to już klasyka aktywnych zajęć, których celem jest
                      integracja zespołu. Jesteśmy w stanie zorganizować atrakcyjne, pełne pozytywnych emocji, a jednocześnie w 100% bezpieczne zajęcia
                      linowe w prawie każdym terenie (od leśnego, przez wodę i góry, aż po tereny zurbanizowane).
                    </p>
                    <p>
                      Zapraszamy do zapoznania się z ofertą programową zajęć integracyjno-motywacyjnych prowadzonych w oparciu o alpinistyczne techniki
                      przestrzenne. Wszystkie zajęcia są prowadzone przez doskonale wyselekcjonowaną i doświadczoną kadrę wywodzącą się głównie ze
                      środowiska ratowników i przewodników górskich.
                    </p>
                    <p>
                      Doświadczenie zdobywaliśmy zajmując się zawodowo ratownictwem górskim, alpinizmem, przewodnictwem, ski-alpinizmem oraz podczas
                      wielu szkoleń, sympozjów, manewrów i zawodów na szczeblu krajowym i międzynarodowym.
                    </p>
                    <p>
                      Podczas naszych zajęć korzystamy wyłącznie z atestowanego, niezawodnego sprzętu, a stosowanie zdublowanych systemów zabezpieczeń,
                      kamizelek asekuracyjnych i kasków daje naszym klientom komfort i poczucie bezpieczeństwa, co pozwala na bezstresowe oddawanie się
                      przyjemności wynikającej z realizowanych zadań.
                    </p>

                    <div className="space-y-4">
                      <div className="bg-dark/60 border border-white/15 rounded-2xl p-5 md:p-6">
                        <h4 className="font-semibold text-primary mb-2 uppercase tracking-wide">Tyrolka</h4>
                        <p className="mb-2">
                          Przednia zabawa znana też pod nazwą windy desantowej lub kolejki amerykańskiej. Uczestnicy pojedynczo lub parami są
                          podczepiani do „wózka” windy przy jej górnym stanowisku, a następnie samodzielnie lub z pomocą instruktora wykonują
                          brawurowy zjazd po napiętej linie w kierunku dolnego stanowiska, gdzie w bezpiecznej, wcześniej ustalonej odległości są
                          przez obsługę zatrzymywani, a następnie bardzo powoli opuszczani na ziemię.
                        </p>
                        <p>
                          W naszych dotychczasowych imprezach furorę robiły konkursy zjazdów parami w przeróżnych pozycjach, często z lądowaniem w
                          wodzie (wymaga to oczywiście odpowiednich warunków terenowych).
                        </p>
                      </div>

                      <div className="bg-dark/60 border border-white/15 rounded-2xl p-5 md:p-6">
                        <h4 className="font-semibold text-primary mb-2 uppercase tracking-wide">Wahadło</h4>
                        <p>
                          Rodzaj potężnej huśtawki, na której końcu huśta się uczestnik – przeżycia bardzo zbliżone do skoku Bungee. Wymaga
                          specyficznych warunków terenowych, ale gwarantuje ogromną dawkę adrenaliny i satysfakcji po przełamaniu własnych barier.
                        </p>
                      </div>

                      <div className="bg-dark/60 border border-white/15 rounded-2xl p-5 md:p-6">
                        <h4 className="font-semibold text-primary mb-2 uppercase tracking-wide">Zjazdy pionowe</h4>
                        <p>
                          Uczestnicy samodzielnie zjeżdżają na linach alpinistycznych z górnego stanowiska usytuowanego na drzewie, konstrukcji lub
                          odpowiedniej wyniosłości terenu. To doskonały sposób na oswojenie wysokości pod czujnym okiem instruktorów.
                        </p>
                      </div>

                      <div className="bg-dark/60 border border-white/15 rounded-2xl p-5 md:p-6">
                        <h4 className="font-semibold text-primary mb-2 uppercase tracking-wide">Drabinka</h4>
                        <p>
                          Wykorzystanie drabinki sznurowej pozwala na wspinaczkę nawet na 20 metrów. W zależności od predyspozycji uczestników
                          drabinka może wisieć swobodnie w powietrzu lub przy pniu drzewa. Często traktujemy ją jako wejście na stanowisko tyrolki lub
                          osobną konkurencję konkursową.
                        </p>
                      </div>

                      <div className="bg-dark/60 border border-white/15 rounded-2xl p-5 md:p-6">
                        <h4 className="font-semibold text-primary mb-2 uppercase tracking-wide">Wyciąganie lidera</h4>
                        <p>
                          Przy pomocy sprzętu alpinistycznego i odpowiednio dobranych zadań potrafimy zmotywować grupę do współpracy oraz
                          zidentyfikować i wzmocnić naturalnych liderów. To ćwiczenie świetnie sprawdza się podczas szkoleń integracyjnych.
                        </p>
                      </div>

                      <div className="bg-dark/60 border border-white/15 rounded-2xl p-5 md:p-6">
                        <h4 className="font-semibold text-primary mb-2 uppercase tracking-wide">Mosty linowe</h4>
                        <p>
                          Uczestnicy pokonują odcinek między punktami zaczepienia liny, najczęściej w poziomie. Proponujemy m.in. most pojedynczy
                          (przeciąganie się po jednej linie z asekuracją) oraz most podwójny – z liną pod nogami i „poręczą” do trzymania się rękoma.
                        </p>
                      </div>

                      <div className="bg-dark/60 border border-white/15 rounded-2xl p-5 md:p-6">
                        <h4 className="font-semibold text-primary mb-2 uppercase tracking-wide">Skrzynki</h4>
                        <p>
                          Uczestnicy wspinają się na układane własnoręcznie pod siebie skrzynki, podawane przez instruktora. Idealna konkurencja
                          konkursowa lub czasowa, która uczy zaufania do zespołu i koordynacji.
                        </p>
                      </div>

                      <div className="bg-dark/60 border border-white/15 rounded-2xl p-5 md:p-6">
                        <h4 className="font-semibold text-primary mb-2 uppercase tracking-wide">Wchodzenie po linie</h4>
                        <p>
                          Specjalistyczny sprzęt alpinistyczny pozwala już po krótkim szkoleniu nauczyć uczestników samodzielnego wchodzenia po linie
                          na dowolną wysokość. Zjazd na dół odbywa się pod pełną kontrolą instruktora. Często organizujemy wejścia parami – obok siebie
                          – aby wzmocnić element zdrowej rywalizacji lub partnerstwa.
                        </p>
                      </div>

                      <div className="bg-dark/60 border border-white/15 rounded-2xl p-5 md:p-6">
                        <h4 className="font-semibold text-primary mb-2 uppercase tracking-wide">
                          Przeprawy przez rwącą wodę i tory przeszkód
                        </h4>
                        <p className="mb-2">
                          Z pomocą sprzętu linowego i kompleksowej asekuracji umożliwiamy przejście brodem przez najbardziej wymagające odcinki rzek –
                          to doskonały poligon doświadczalny do przełamywania własnych barier i budowania pewności siebie.
                        </p>
                        <p>
                          Łączymy opisane elementy w logiczne tory przeszkód, które mogą być samodzielną przygodą lub częścią większego scenariusza
                          zadaniowego dla grupy lub pojedynczych uczestników.
                        </p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                      {CLIMBING_ROCK_GALLERY.map((image, i) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setTopicGallery({ images: CLIMBING_ROCK_GALLERY, index: i })}
                          className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          aria-label={`Powiększ: ${image.alt}`}
                        >
                          <img src={image.src} alt={image.alt} className="w-full h-56 object-cover pointer-events-none" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : isPaintballPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">
                    Emocjonująca, pełna akcji gra, w której zdolność myślenia zespołowego, szybkie podejmowanie decyzji i spryt są ważniejsze, niż
                    siła mięśni graczy.
                  </p>
                  <p>
                    Niebezpieczeństwo wyeliminowania przez wrogi zespół tworzy realne warunki walki, w której rośnie adrenalina, a gracz uświadamia
                    sobie, na ile jest odporny na stres, a także jak szybko i trafnie potrafi podejmować w tych trudnych warunkach właściwe decyzje.
                  </p>
                  <p>
                    Podczas naszych zajęć korzystamy wyłącznie z atestowanego, niezawodnego sprzętu, a stosowanie zdublowanych systemów zabezpieczeń,
                    kamizelek asekuracyjnych i kasków daje naszym klientom komfort i poczucie bezpieczeństwa, co pozwala na bezstresowe oddawanie się
                    przyjemności wynikającej z realizowanych zadań.
                  </p>
                  <p>
                    Pole tworzymy wykorzystując naturalne przeszkody: drzewa, kępy krzaków, ukształtowanie terenu. Gdy elementów takich zabraknie,
                    posiadamy własne przeszkody - system ścianek, z których łatwo można wykonać tunele, przeszkody niskie, wysokie, szerokie jak i
                    wąskie.
                  </p>
                  <p>
                    Posiadamy również własny poligon paintballowy, dzięki czemu możemy realizować scenariusze gry w sprawdzonej, dobrze przygotowanej
                    przestrzeni.
                  </p>
                  <p>
                    Po zakończonej grze istnieje możliwość zorganizowania grilla, ogniska lub wieczornej imprezy integracyjnej.
                  </p>

                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">
                      W swej ofercie posiadamy kilkadziesiąt zestawów, w skład których wchodzą
                    </h3>
                    <ul className="space-y-3">
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        kompletny marker Spyder Victor II, Tippmann Custom lub BRAVO ONE Tactical US army Guns
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        maska
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        kamizelka ochronna
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        rękawiczki ochronne
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        kombinezon
                      </li>
                    </ul>
                  </div>

                  <p>
                    Na życzenie klienta możemy także zaaranżować miejsce do gry w paintball: teren leśny, poligon wojskowy, różne zabudowania.
                  </p>
                  <p>
                    Grę paintballową można doskonale połączyć z wypoczynkiem w miejscach przez nas proponowanych oraz z wszelkimi innymi atrakcjami z
                    działu Oferta.
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PAINTBALL_GALLERY.map((image, i) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setTopicGallery({ images: PAINTBALL_GALLERY, index: i })}
                        className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Powiększ: ${image.alt}`}
                      >
                        <img src={image.src} alt={image.alt} className="w-full h-52 object-cover pointer-events-none" loading="lazy" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : isMilitariaPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">
                    Musztra to oczywiście podstawa, a karabin to Twój jedyny przyjaciel. Nabędziesz umiejętności posługiwania się oraz strzelania z
                    broni ASG, Paintball (możliwe jest również zorganizowania zajęć na strzelnicy z użyciem broni palnej). Poza tym mnóstwo czołgania,
                    ćwiczeń w małpim gaju, wyzwisk i przekleństw, czyli FALA w najlepszym wydaniu 🙂 Z pewnością nie będzie nudno!!!
                  </p>

                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">
                      PRZYKŁADOWE ZAJĘCIA MILITARNE W KTÓRYCH MOŻESZ WZIĄĆ UDZIAŁ
                    </h3>
                    <ul className="space-y-3">
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Czarna taktyka czyli sposoby prowadzenia działań wojskowych, specjalnych policyjnych i antyterrorystycznych w warunkach
                        miejskich, w pomieszczeniach i budynkach.
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Zielona taktyka czyli działania w terenie niezurbanizowanym, szczególnie leśnym, maskowanie, terenoznawstwo, rajdy za linie
                        wroga i zasadzki.
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Wojskowy tor przeszkód (małpi gaj)
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Dostarczanie amunicji na przedni skraj pola walki (atrapy amunicji)
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Nawiązywanie łączności telefonami polowymi, cb radiem, stacjami ukf
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Strzelanie
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Wykonywanie okopów i stanowisk ogniowych
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Rozminowanie terenu, ustawianie grupy min
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Desantowanie się jednostek specjalnych z wody na ląd za pomocą łodzi motorowej i pontonów
                      </li>
                    </ul>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {MILITARIA_GALLERY.map((image, i) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setTopicGallery({ images: MILITARIA_GALLERY, index: i })}
                        className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Powiększ: ${image.alt}`}
                      >
                        <img src={image.src} alt={image.alt} className="w-full h-56 object-cover pointer-events-none" loading="lazy" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : isSurvivalPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">SURVIVAL to inaczej PRZEŻYCIE/PRZETRWANIE dlatego te zajęcia spędzamy w terenie.</p>
                  <p>
                    W zależności od zapotrzebowania może to być przygoda pełna niespodzianek, która odbędzie się stacjonarnie w jednym miejscu, lub
                    wyzwanie w postaci wędrówki, gdzie będziemy musieli przedostać się z punktu A do punktu B.
                  </p>
                  <p>Po drodze zaliczając punkty, w których zapewnimy Wam mnóstwo przygód oraz niespodzianek survivalowych, między innymi takich jak:</p>

                  <ul className="space-y-3">
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      Budowa tratw - przeprawy przez mokradła, bagna, rzeki i jeziora
                    </li>
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      Nauka wiązania węzłów, techniki linowe
                    </li>
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      Rozpalanie ognisk
                    </li>
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      Budowa bezpiecznego obozowiska, nocleg w szałasach
                    </li>
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      Konstruowanie noszy, udzielanie pierwszej pomocy, transport rannego w trudnych warunkach terenowych na lądzie i w wodzie
                    </li>
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      Samodzielne przygotowanie posiłków
                    </li>
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      Nauka poruszania się w różnego rodzaju uwarunkowaniach terenu (las, tereny podmokłe, góry)
                    </li>
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      Maskowanie siebie i sprzętu
                    </li>
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      Zdobywanie wody i pożywienia
                    </li>
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      Survival wodny (nauka przetrwania na wodzie w morskich tratwach ratunkowych)
                    </li>
                  </ul>

                  <p>
                    Zajęcia survivalowe są znakomitym dodatkiem do większości aktywności, jakimi się zajmujemy. Ale mogą być także tematem przewodnim
                    wyjazdu firmowego, urodzin, wieczoru kawalerskiego lub panieńskiego. Organizujemy również obozy survivalowe, obozy dla klas
                    mundurowych oraz wypady jedno i wielodniowe.
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {SURVIVAL_GALLERY.map((image, i) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setTopicGallery({ images: SURVIVAL_GALLERY, index: i })}
                        className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Powiększ: ${image.alt}`}
                      >
                        <img src={image.src} alt={image.alt} className="w-full h-52 object-cover pointer-events-none" loading="lazy" />
                      </button>
                    ))}
                  </div>

                  <p className="font-semibold text-white border-t border-white/10 pt-8">CHODZENIE PO BAGNACH WCIĄGA! 🙂</p>
                </div>
              ) : isWaterPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">
                    To właśnie nad wodą najchętniej wypoczywamy i spędzamy wolny czas - tam najłatwiej integrujemy się ze środowiskiem, jak też z innymi
                    ludźmi. Zabawy proponowane przez nas mogą być typową rekreacją, jak również ekstremalnym wyzwaniem.
                  </p>
                  <p>
                    Jedną z form zorganizowania imprezy integracyjnej, którą chcemy zaproponować, są zajęcia na wodzie i w jej otoczeniu. Mamy Ci do
                    zaproponowania szereg gotowych programów zabaw na wodzie, jesteśmy też otwarci na każdy pomysł, do którego dostosujemy program lub
                    stworzymy całkowicie nowy, w pełni dostosowany do Twoich potrzeb.
                  </p>
                  <p>
                    Na wodzie używamy najróżniejszych sprzętów, począwszy od łodzi motorowych, poprzez morskie tratwy ratunkowe, kajaki, pontony,
                    łodzie wiosłowe, łodzie żaglowe oraz wiele innych. Najchętniej jednak bawimy się z uczestnikami, kiedy sami muszą coś zbudować, a
                    to coś musi jeszcze pływać.
                  </p>
                  <p>
                    Charakter tych zabaw może się opierać na scenariuszu akcji ratunkowej, misji specjalnej czy też survivalu na wodzie. To, co
                    Państwu proponujemy, to wspaniała zabawa i niezapomniane wrażenia, ale nie zapominamy przy tym wszystkim o bezpieczeństwie.
                  </p>
                  <p>
                    Każde z naszych zajęć odbywa się zawsze pod bacznym okiem ratowników WOPR, GOPR oraz instruktorów poszczególnych form wypoczynku.
                    Cała nasza kadra dysponuje niezbędnym atestowanym sprzętem ratunkowym.
                  </p>
                  <p>Zapraszamy do obejrzenia filmu przedstawiającego część naszej oferty wodnej!</p>
                  <p>
                    Każdy z programów może ulec rozszerzeniu lub pomniejszeniu w zależności od warunków atmosferycznych oraz stanu psychofizycznego
                    uczestników. Wszystkie przedsięwzięcia realizujemy z wielką pasją, dlatego największą nagrodą dla nas jest zadowolenie Klienta.
                  </p>

                  <div className="border-t border-white/10 pt-8">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-5">Programy wodne - wybierz moduł</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {WATER_MODULES.map((module) => (
                        <button
                          key={module.id}
                          type="button"
                          onClick={() => setActiveWaterModuleId(module.id)}
                          className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border transition-colors ${
                            activeWaterModuleId === module.id
                              ? 'bg-primary text-dark border-primary'
                              : 'bg-white/5 text-white/70 border-white/10 hover:border-primary hover:text-white'
                          }`}
                        >
                          {module.title}
                        </button>
                      ))}
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-7 min-h-[320px]">
                      <h4 className="text-white font-semibold text-lg md:text-xl mb-3">{activeWaterModule.title}</h4>
                      {'intro' in activeWaterModule && activeWaterModule.intro && <p className="mb-4">{activeWaterModule.intro}</p>}
                      {'body' in activeWaterModule && activeWaterModule.body && <p className="mb-4">{activeWaterModule.body}</p>}
                      {'items' in activeWaterModule && activeWaterModule.items && (
                        <ul className="space-y-2 mb-4">
                          {activeWaterModule.items.map((item) => (
                            <li key={item} className="pl-5 relative">
                              <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {'note' in activeWaterModule && activeWaterModule.note && (
                        <p className="text-white/70 border-t border-white/10 pt-4">{activeWaterModule.note}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {WATER_GALLERY.map((image, i) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setTopicGallery({ images: WATER_GALLERY, index: i })}
                        className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Powiększ: ${image.alt}`}
                      >
                        <img src={image.src} alt={image.alt} className="w-full h-52 object-cover pointer-events-none" loading="lazy" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : isHorsePage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">
                    To propozycja dla wszystkich tych, którzy nie wyobrażają sobie życia bez koni lub chcą dopiero spróbować swoich sił w tej
                    dziedzinie.
                  </p>
                  <p>
                    Proponujemy zajęcia w siodle, niezależnie od stopnia zaawansowania jeździeckiego. Możemy wybrać się konno w malowniczy teren,
                    pojechać na konny spacer lub potrenować na padoku.
                  </p>
                  <p>
                    Atrakcje konne mogą być główną i jedyną atrakcją eventu, urodzin, imprezy lub też ich częścią i uzupełnieniem. To Wy decydujecie
                    jaki charakter ma mieć Wasza impreza!
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {HORSE_RIDING_GALLERY.map((image, i) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setTopicGallery({ images: HORSE_RIDING_GALLERY, index: i })}
                        className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Powiększ: ${image.alt}`}
                      >
                        <img src={image.src} alt={image.alt} className="w-full h-56 object-cover pointer-events-none" loading="lazy" />
                      </button>
                    ))}
                  </div>

                  <p className="font-semibold text-white">MOŻLIWOŚĆ ZORGANIZOWANIA PASOWANIA NA JEŹDZCA! tzw CHRZEST ☺</p>
                  <p className="font-semibold text-white border-t border-white/10 pt-8">SERDECZNIE ZAPRASZAMY!</p>
                </div>
              ) : isFirstAidPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">
                    We wszytkich działaniach jakich się podejmujemy zawsze główny nacisk kładziemy na bezpieczeństwo. Stąd w naszych szeregach tak
                    wiele osób wywodzących sie ze środowiska ratowniczego - ratownicy WOPR, GOPR, ratownicy medyczni i wielu innych.
                  </p>

                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">Kursy pierwszej pomocy</h3>
                    <p>
                      Od wielu lat na całym świecie, a od długiego czasu również i u nas w kraju bardzo duży nacisk kładzie się na szkolenie różnego
                      rodzaju instytucji oraz coraz częściej zwykłego „szarego” obywatela z zakresu pierwszej pomocy.
                    </p>
                    <p className="mt-4">
                      Nasza firma, wychodząc naprzeciw takiemu zapotrzebowaniu i popierając tego typu idee, od paru już lat z wielkim powodzeniem
                      oragaznizuje kursy i szkolenia z zakresu pierwszej pomocy BLS (Basic Life Support) i automatycznej defibrylacji zewnętrznej AED
                      (Automated External Defibrillation) Europejskiej Rady Resuscytacji ERC (European Resuscitation Council).
                    </p>
                  </div>

                  <div>
                    <p className="mb-4">
                      Po przeprowadzonym przez nas kursie lub szkoleniu, każda osoba biorąca w nim udział będzie miała wiedzę oraz przede wszystkim
                      praktyczne umiejętności m.in. w następujących dziedzinach:
                    </p>
                    <ul className="space-y-3">
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        jak wykonać ocenę osoby nieprzytomnej
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        jak wykonać uciskanie klatki piersiowej i oddechy ratownicze
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        jak ułożyć nieprzytomnego, oddychającego poszkodowanego w pozycji bezpiecznej
                      </li>
                    </ul>
                    <p className="mt-4">Po dodatkowym kursie AED:</p>
                    <ul className="space-y-3 mt-3">
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        jak bezpiecznie używać automatycznego defibrylatora zewnętrznego
                      </li>
                    </ul>
                  </div>

                  <p>
                    Każde zajęcia są dodatkowo urozmaicone poprzez symulację różnego rodzaju wypadków i zdarzeń, które każdego z nas w zwykłym,
                    codziennym życiu mogą spotkać, a z którymi jako świadome osoby powinniśmy potrafić sobie poradzić.
                  </p>

                  <div className="border-t border-white/10 pt-8">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">POKAZY RATOWNICTWA</h3>
                    <p>
                      Pokazy są formą, w jakiej chcemy propagować wszelkiego rodzaju ratownictwo. My wiemy, że każda sekunda w ratowaniu życia ludzkiego
                      jest ważna, dlatego pragniemy uświadamiać ludzi, jak ważna jest właśnie świadomość tego, że każdy z nas może je uratować.
                    </p>
                    <p className="mt-4">
                      Nasze pokazy mają na celu bezpośrednie dotarcie do każdego z widzów tak, aby w przyszłości mógł zareagować w sposób właściwy, tzn.
                      aby nie bał się wziąć odpowiedzialności za ratowanie czyjegoś życia. Dziedziny, w jakich się spełniamy to ratownictwo wodne,
                      ratownictwo górskie, jak również ratownictwo medyczne.
                    </p>
                    <p className="mt-4">
                      W pokazach używamy profesjonalnego sprzętu ratunkowego: łodzi motorowych, morskich tratew ratunkowych, sprzętu do nurkowania,
                      atestowanego sprzętu alpinistycznego oraz sprzętu medycznego i asekuracyjnego.
                    </p>
                    <p className="mt-4">
                      Pokazy, które wykonujemy, mają charakter show i są bardzo widowiskową imprezą. Łączymy techniki ratownictwa powietrznego, wodnego,
                      linowego i medycznego, co daje bardzo dobry efekt widowiskowy, ale przede wszystkim pokazuje, jak wygląda profesjonalna akcja
                      ratunkowa. Pokazujemy również, jak każda z osób, także za pomocą przedmiotów codziennego użytku, może uratować ludzkie życie.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {FIRST_AID_GALLERY.map((image, i) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setTopicGallery({ images: FIRST_AID_GALLERY, index: i })}
                        className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Powiększ: ${image.alt}`}
                      >
                        <img src={image.src} alt={image.alt} className="w-full h-52 object-cover pointer-events-none" loading="lazy" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : isOtherPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <p className="text-lg">
                    Poza standardowymi usługami dostępnymi w naszej ofercie mamy do zaoferowania jeszcze kilka dodatkowych atrakcji.
                  </p>
                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">Pozostałe atrakcje</h3>
                    <ul className="space-y-3">
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Organizacja pikników/festynów
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Organizacja urodzin zarówno dla młodszych jak i starszych
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Organizacja wieczorów kawalerskich i panieńskich
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Organizacja szkoleń
                      </li>
                      <li className="pl-5 relative">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Niekonwencjonalne sesje fotograficzne w trakcie naszych zajęć
                      </li>
                    </ul>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {OTHER_ATTRACTIONS_GALLERY.map((image, i) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setTopicGallery({ images: OTHER_ATTRACTIONS_GALLERY, index: i })}
                        className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Powiększ: ${image.alt}`}
                      >
                        <img src={image.src} alt={image.alt} className="w-full h-52 object-cover pointer-events-none" loading="lazy" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-lg text-white/80 leading-relaxed mb-8">{topic.lead}</p>
                  <p className="text-white/50 text-sm leading-relaxed border-t border-white/10 pt-8">
                    Rozbudowany opis dla tej tematyki przygotujemy pod konkretny program wydarzenia.{' '}
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
                to="/#tematyka"
                className="inline-flex text-sm font-bold uppercase tracking-wider text-primary hover:text-white transition-colors"
              >
                ← Powrót do sekcji tematyka
              </Link>
            </div>
          </div>
        </section>
      </main>

      {topicGallery ? (
        <GalleryLightbox
          images={topicGallery.images}
          index={topicGallery.index}
          onIndexChange={(i) => setTopicGallery((g) => (g ? { ...g, index: i } : null))}
          onClose={() => setTopicGallery(null)}
          zIndexClass="z-[130]"
        />
      ) : null}

      <Footer />
    </div>
  );
}
