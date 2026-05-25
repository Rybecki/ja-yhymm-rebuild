import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GalleryLightbox, type GalleryImageItem } from '../components/GalleryLightbox';
import { getOfferBySlug } from '../data/offerPages';
import { PhotoBottomScrim } from '../components/PhotoBottomScrim';
import { SchoolTripsContent } from '../components/SchoolTripsContent';

const SCHOOL_TRIPS_GALLERY: GalleryImageItem[] = [
  {
    src: '/images/wycieczki-szkolne/galeria-1.png',
    alt: 'Grupa uczniów na skalnym urwisku podczas wycieczki szkolnej w terenie',
  },
  {
    src: '/images/wycieczki-szkolne/galeria-2.png',
    alt: 'Uczniowie zwiedzający ruiny zamku podczas wycieczki szkolnej',
  },
  {
    src: '/images/wycieczki-szkolne/galeria-3.png',
    alt: 'Uczeń fotografujący panoramę podczas wycieczki szkolnej',
  },
];

const BACHELOR_ATTRACTIONS: { title: string; paragraphs: string[] }[] = [
  {
    title: 'Porwanie',
    paragraphs: [
      'Każdy na kogo dostaniemy zlecenie zostanie porwany (np. przez bramkarzy na dyskotece, zatrzymany przez „ABW”, przetrzymany i odpowiednio przesłuchany. Całość oczywiście musi być przygotowana z odpowiednim wyprzedzeniem czasowym oraz w pełnej konspiracji przed „głównym zainteresowanym”.',
    ],
  },
  {
    title: 'Pierwsza Pomoc',
    paragraphs: [
      'Tego wieczoru musicie koniecznie zachorować, a my będziemy Was leczyć. Oczywiście obsługa medyczna będzie bardzo HOT i przez cały wieczór będziecie w dobrych rękach. W trakcie imprezy mnóstwo zabaw, konkursów „medycznych” po których już nigdy nie będziecie chcieli być zdrowi, a medykamenty będą lały się strumieniami.',
    ],
  },
  {
    title: 'Militarnie',
    paragraphs: [
      'Musztra tego wieczoru to oczywiście podstawa, a karabin to Twój jedyny przyjaciel. Poza tym mnóstwo strzelania (ASG, Paintball), czołgania, ćwiczeń w małpim gaju, wyzwisk i przekleństw czyli FALA w najlepszym wydaniu. Z pewnością nie będzie nudno.',
    ],
  },
  {
    title: 'Off Road',
    paragraphs: [
      'Piach, błoto, woda, przeszkody to będzie charakteryzowało ten wieczór. Wszystkie te przeciwności losu postaramy się pokonać za pomocą samochodów terenowych i quadów. Poznacie możliwości różnego rodzaju pojazdów terenowych oraz ich niekonwencjonalne zastosowanie. Ostre pojazdy, oraz strome zjazdy i przechyły z pewnością dostarczą mnóstwa wrażeń i adrenaliny. Możemy również wybrać się na wyprawę nocną, co dodatkowo potęguje wrażenia. Po spędzeniu kilku godzin w terenie istnieje możliwość zorganizowania imprezy w motoryzacyjnych klimatach.',
    ],
  },
  {
    title: 'Na Wodzie',
    paragraphs: [
      'Chcesz poczuć się tego wieczoru jak prawdziwy WILK MORSKI? Masz to załatwione! Na tej imprezie z każdego szczura lądowego zrobimy prawdziwego wilka morskiego. Tego dnia będziemy spędzali czas pod żaglami, popływamy łodzią motorową, jak również spróbujemy swoich sił w kajaku. Możemy popływać również za motorówką na bananie, kole wodnym, platformie dwuosobowej lub w stroju sumo – jednym słowem, mnóstwo mokrej zabawy. Oczywiście chrzest morski nikogo nie ominie. Całość możemy zakończyć imprezą w żeglarskiej tawernie. Tę imprezę śmiało możemy nazwać PRZECHYŁ, ponieważ ta pozycja będzie dominowała cały czas!',
    ],
  },
  {
    title: 'Wspinaczka',
    paragraphs: [
      'Tego wieczoru bez liny ani rusz. W zależności od stopnia zaawansowania w tej tematyce uczestników wieczoru będziemy się bawili na sztucznej ścianie wspinaczkowej, w skałach, jaskiniach, zjedziemy na mega tyrolce oraz poszybujemy na linie pionowo w dół, a jeżeli zechcecie aby ten wieczór był naprawdę inny niż wszystkie, możecie spędzić go np. w uprzężach zawieszeni pod skałą, a my zorganizujemy Wam tam imprezę. O tym będziecie jeszcze długo mówili.',
    ],
  },
  {
    title: 'Pod Wodą',
    paragraphs: [
      'To propozycja zarówno dla tych, którzy posiadają już patent nurkowy, jak również dla osób, które chcą dopiero po raz pierwszy spróbować swoich zejść pod wodę w sprzęcie płetwonurka (aqualungu). W zależności od zaawansowania nurkowego proponujemy nurkowania nocne, nurkowanie na wraku, gry i konkursy pod wodą. GWARANTUJEMY, że zabawa zacznie się już w trakcie ubierania sprzętu.',
      'Istnieje możliwość zorganizowania, zaręczyn pod wodą!',
    ],
  },
  {
    title: 'Survival',
    paragraphs: [
      'Ten wieczór spędzamy w terenie. W zależności od zapotrzebowania może to być wieczór pełen niespodzianek, który odbędzie się stacjonarnie w jednym miejscu, lub wieczór wędrowny gdzie będziemy musieli przedostać się z punktu A do punktu B. Po drodze oczywiście zapewniamy mnóstwo przygód oraz niespodzianek.',
    ],
  },
  {
    title: 'Klasycznie',
    paragraphs: [
      'W tym przypadku poza naszym profesjonalizmem niczym szczególnym was niezaskoczymy. Zorganizujemy waszą imprezę w klubie, pubie, mieszkaniu, limuzynie i tam gdzie sobie wymyślicie. Może być to np. impreza karaoke, dyskoteka lat 80/90, impreza techno, wieczór w klimatach PRL itp. Z pewnością będzie imprezowo.',
    ],
  },
  {
    title: 'W Siodle',
    paragraphs: [
      'To propozycja dla wszystkich tych, którzy nie wyobrażają sobie życia bez koni lub chcą dopiero spróbować swoich sił w tej dziedzinie. Ten wieczór spędzamy w siodle, w zależności od stopnia zaawansowania jeździeckiego może to być wyprawa na malowniczy teren, jazda na padoku czy na hali. Całość może być zakończona imprezą na terenie stadniny gdzie mamy do dyspozycji piękną, klimatyczną salę kominkową lub równie klimatyczną wiatę grillową.',
    ],
  },
];

const UNIFORMED_BASE_FACILITIES = [
  'Profesjonalny poligon paintballowy.',
  'Dynamiczną strzelnicę ASG.',
  'Tory Off-Road dla samochodów terenowych i quadów.',
  'Survival Park oraz specjalistyczny szkoleniowy park linowy.',
  'Wojskową bazę noclegową wyposażoną w kultowe, nowoczesne namioty NS-64.',
  'Flotę wodną: pontony desantowe oraz niezniszczalne kajaki polietylenowe.',
];

const UNIFORMED_MODULES = [
  {
    id: 'arsenal',
    title: 'Arsenał strzelecki',
    intro:
      'U nas realizm stoi na pierwszym miejscu. Uczniowie przechodzą pełną ścieżkę strzelecką: od broni pneumatycznej, przez dynamiczne systemy ASG, aż po profesjonalne markery paintballowe idealnie imitujące wagę i obsługę prawdziwej broni palnej. Wisienką na torcie jest ostre strzelanie z prawdziwej broni palnej pod okiem licencjonowanych instruktorów!',
  },
  {
    id: 'linowe',
    title: 'Techniki linowe',
    intro:
      'Jura to stolica polskiego wspinania, a my wykorzystujemy to w 100%. Uczymy bezpiecznej pracy na wysokościach, technik zjazdowych (w tym zjazdów w kluczu i z przyrządami), budowania mostów linowych oraz technik ewakuacji poszkodowanych z rejonów wysokogórskich i skalnych.',
  },
  {
    id: 'off-road',
    title: 'Off-Road',
    intro:
      'Dysponujemy własną flotą samochodów terenowych 4x4 oraz quadów. Uczniowie wykorzystują je do realnych ćwiczeń taktycznych: nauki szyków ubezpieczonych za pojazdem, dynamicznej ewakuacji pod ostrzałem czy konwojowania.',
  },
  {
    id: 'wodne',
    title: 'Podwodny świat i desant',
    intro:
      'Wprowadzamy elementy nurkowania sprzętowego – to pierwszy krok dla przyszłych płetwonurków bojowych czy strażackich. Do tego dochodzą dynamiczne ćwiczenia z użyciem pontonów desantowych i wyprawy kajakami polietylenowymi.',
  },
  {
    id: 'medycyna',
    title: 'Medycyna i samoobrona',
    intro:
      'Realistyczne misje poszukiwawczo-ratownicze pod presją czasu oraz intensywny trening samoobrony oparty na systemach Krav Maga i filozofii „Sztuki Walki bez Walki”.',
  },
] as const;

const UNIFORMED_SCHOOL_BENEFITS = [
  {
    title: 'Własny transport = tańszy wyjazd!',
    body:
      'Posiadamy własny, kultowy autokar w klimacie PRL – Autosan H9-21, który może bezpiecznie dowieźć grupę do 39 osób z Waszej szkoły lub stacji PKP bezpośrednio na miejsce działań (operujemy w promieniu do 100 km od naszej bazy na Jurze). To potężna oszczędność na kosztach transportu dla uczniów i rodziców!',
  },
  {
    title: 'Strefa komfortu dla opiekunów (VIP dla nauczycieli)',
    body:
      'Doceniamy Waszą ciężką pracę. Podczas gdy instruktorzy Fundacji prowadzą zajęcia z młodzieżą, opiekunowie mają czas wolny. Aby ułatwić Wam rekreację i poznanie uroków Jury, bezpłatnie udostępniamy samochód osobowy lub busa do swobodnego zwiedzania okolicy lub nowoczesne rowery elektryczne na wycieczki po jurajskich szlakach!',
  },
  {
    title: 'Elastyczność i certyfikacja',
    body:
      'Organizujemy obozy wyjazdowe (2, 3, 4, 5-dniowe), ale możemy też przyjechać do Was i zorganizować profesjonalne szkolenie stacjonarne na terenie Waszej szkoły. Każdy uczeń kończący obóz otrzymuje oficjalny, imienny certyfikat – realny atut w przyszłej karierze w strukturach MON czy MSWiA.',
  },
] as const;

const UNIFORMED_GALLERY = [
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/militaria-1.png', alt: 'Uczestnik obozu militarnego w kamuflażu i hełmie' },
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/militaria-2.png', alt: 'Ćwiczenia zespołowe podczas obozu militarnego' },
  { src: '/utils/oferta-letnia/jura-military-camp/gallery/militaria-3.png', alt: 'Szkolenie taktyczne na świeżym powietrzu' },
  { src: '/images/klasy-mundurowe/militaria-4.png', alt: 'Ćwiczenia z replikami broni nad wodą' },
  { src: '/images/klasy-mundurowe/militaria-5.png', alt: 'Uczestnicy obozu prezentujący koszulki paintballowe' },
  { src: '/images/klasy-mundurowe/militaria-6.png', alt: 'Zajęcia terenowe w warunkach leśnych' },
];

const EVENTS_GALLERY = [
  { src: '/images/eventy/galeria-grill.png', alt: 'Grill i ognisko podczas wieczornej integracji firmowej' },
  { src: '/images/eventy/galeria-grupa.png', alt: 'Grupa uczestników eventu firmowego na łące — integracja zespołu' },
  { src: '/images/tematyka/paintball-3.png', alt: 'Gracz paintballowy podczas realizacji zadania terenowego' },
  { src: '/images/eventy/eventy-firma-1.png', alt: 'Zespół uczestników wydarzenia firmowego pod wiatą' },
  { src: '/images/eventy/eventy-firma-2.png', alt: 'Wieczorna integracja firmowa przy ognisku' },
  { src: '/images/eventy/eventy-firma-3.png', alt: 'Aktywności strzeleckie podczas eventu firmowego' },
];

const BACHELOR_BACHELORETTE_GALLERY = [
  {
    src: '/images/wieczory-kawalerskie/galeria-kawalerski-1.png',
    alt: 'Grupa mężczyzn świętująca wieczór kawalerski — toast piwem w klubie',
  },
  {
    src: '/images/wieczory-kawalerskie/galeria-kawalerski-2.png',
    alt: 'Wieczór kawalerski pod namiotem — cygara, karty i drinki przy stole',
  },
  {
    src: '/images/wieczory-kawalerskie/galeria-kawalerski-3.png',
    alt: 'Toast whisky podczas wieczoru kawalerskiego — szklanki w dłoniach',
  },
  {
    src: '/images/wieczory-kawalerskie/galeria-1.png',
    alt: 'Wieczór panieński — grupa w sukienkach z balonami i girlandą w jasnym wnętrzu',
  },
  {
    src: '/images/wieczory-kawalerskie/galeria-2.png',
    alt: 'Grill na trawie z przyjaciółmi — lato, piwo i wspólne jedzenie na świeżym powietrzu',
  },
  {
    src: '/images/eventy/eventy3.png',
    alt: 'Plenerowa impreza okolicznościowa — wspólna zabawa i integracja grupy',
  },
];

const RENTAL_WWW_TILES = [
  {
    to: '/wypozyczalnia/e-rowery',
    title: 'E-rowery',
    description:
      'Rower elektryczny na Jurze i Śląsku — komfortowe pokonywanie wzniesień i szlaków bez zadyszki, z opcją dowozu i pełnym wsparciem wypożyczalni.',
    img: '/images/wypozyczalnia/e-rowery/kross-tile.png',
  },
  {
    to: '/wypozyczalnia/kajaki',
    title: 'Kajaki',
    description:
      'KAJAKO-MOBIL — mobilny wynajem kajaków polietylenowych z kompletem osprzętu i możliwością dowozu pod wskazane miejsce.',
    img: '/images/wypozyczalnia/kajaki/kajaki-hero.png',
  },
  {
    to: '/wypozyczalnia/vip-bus',
    title: 'VIP Bus',
    description:
      '9-osobowy bus klasy VIP — komfortowy transport na eventy, wyjazdy i transfery, z indywidualną wyceną trasy.',
    img: '/images/wypozyczalnia/vip-bus/bus-2.png',
  },
  {
    to: '/wypozyczalnia/autolaweta',
    title: 'Autolaweta',
    description:
      'Autolaweta 7-osobowa z kabiną — transport pojazdów i ładunków gabarytowych, zlecenia ustalane indywidualnie.',
    img: '/images/wypozyczalnia/autolaweta/laweta-1.png',
  },
  {
    to: '/wypozyczalnia/dmuchance',
    title: 'Dmuchańce i eventy',
    description:
      'Atrakcje plenerowe z obsługą — m.in. dmuchańce i ścianka wspinaczkowa, rozstaw i logistyka pod Twoją imprezę.',
    img: '/images/wypozyczalnia/dmuchance/dmuchance-mario.png',
  },
] as const;

const RENTAL_WWW_CTA = {
  to: '/kontakt',
  title: 'Chcesz wypożyczyć sprzęt?',
  description:
    'Nie znalazłeś tego, czego szukasz? Napisz do nas — dopasujemy ofertę do Twojego eventu, wyjazdu lub imprezy.',
  action: 'Zapytaj o wynajem',
} as const;

const EQUIPMENT_RENTAL_CATALOG = [
  {
    text: 'Sprzęt paintballowy (markery, maski, mundury, kamizelki)',
    img: '/images/eventy/eventy.png',
    alt: 'Sprzęt paintballowy i atrakcje terenowe',
  },
  {
    text: 'Quady różnej wielkości i pojemności',
    img: '/images/wynajem-sprzetu/quady.png',
    alt: 'Quady dostępne do wynajęcia',
  },
  {
    text: 'Samochody terenowe (opcja tylko z kierowcą)',
    img: '/utils/oferta-letnia/jura-off-road-camp-4x4/gallery/offroad-4.png',
    alt: 'Samochód terenowy 4×4 podczas jazdy off-road',
  },
  {
    text: 'Ścianka wspinaczkowa (pneumatyczna z 4 drogami wspinaczkowymi)',
    img: '/images/wynajem-sprzetu/scianka.png',
    alt: 'Pneumatyczna ścianka wspinaczkowa',
  },
  {
    text: 'Zamek dmuchany',
    img: '/images/wynajem-sprzetu/zamek-dmuchany.png',
    alt: 'Kolorowy zamek dmuchany na trawie',
  },
  {
    text: 'Dmuchaniec żółw (suchy basen)',
    img: '/images/wypozyczalnia/dmuchance/dmuchance-4.png',
    alt: 'Dmuchaniec Żółw z suchym basenem na evencie plenerowym',
  },
  {
    text: 'Dmuchaniec Mario (zjeżdżalnia)',
    img: '/images/wypozyczalnia/dmuchance/dmuchance-mario.png',
    alt: 'Wielki dmuchaniec i zjeżdżalnia w motywie Super Mario',
  },
  {
    text: 'Kajaki (dwuosobowe z włókna szklanego), wiosła, kamizelki',
    img: '/images/wypozyczalnia/kajaki/kajak-1.png',
    alt: 'Kajak z osprzętem',
  },
  {
    text: 'Rowery, kaski',
    img: '/images/wypozyczalnia/e-rowery/winora-1-v3.png',
    alt: 'Rower elektryczny z kaskiem',
  },
  {
    text: 'Przyczepa towarowa',
    img: '/images/wynajem-sprzetu/przyczepa-towarowa.png',
    alt: 'Dwuośowa przyczepa towarowa z najazdem',
  },
  {
    text: 'Motyl holowniczy',
    img: '/images/wynajem-sprzetu/motyl-holowniczy.png',
    alt: 'Motyl holowniczy — wózek transportowy',
  },
  {
    text: 'Bus 9-cio osobowy (opcja tylko z kierowcą)',
    img: '/images/wypozyczalnia/vip-bus/bus-2.png',
    alt: 'Bus 9-osobowy',
  },
  {
    text: 'Autolaweta (opcja tylko z kierowcą)',
    img: '/images/wypozyczalnia/autolaweta/laweta-2.png',
    alt: 'Autolaweta z ładunkiem',
  },
] as const;

const EQUIPMENT_RENTAL_LIGHTBOX_IMAGES: GalleryImageItem[] = EQUIPMENT_RENTAL_CATALOG.map((item) => ({
  src: item.img,
  alt: item.alt,
}));

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
  {
    src: '/images/szkolenia/szkolenie-linowe-stretcher.png',
    alt: 'Szkolenie ratownictwa technicznego — praca na linach i żółtym stretcherze przy budynku szkoleniowym',
  },
  {
    src: '/images/szkolenia/szkolenie-ratownictwo-wodne-argo.png',
    alt: 'Ratownictwo wodne — ćwiczenia z amfibii Argo, wyciąganie poszkodowanego w kombinezonie z wody',
  },
  {
    src: '/images/szkolenia/szkolenie-manewry-lodz-rhib.png',
    alt: 'Manewry na łodzi typu RIB z silnikiem zaburtowym — szkolenie na wodzie (widok z góry)',
  },
];

const TRANSPORT_ITEMS = [
  'Przewóz busami 9-cio osobowymi',
  'Transport autolawetą 7-mio osobową o ładowności 1560 kg i długości najazdu 4,70 m',
  'Transport przyczepą dwuosiową',
  'Transport pojazdu motylem holowniczym',
];

const TRANSPORT_GALLERY = [
  { src: '/images/transport/transport2.png', alt: 'Autolaweta i przyczepa z quadem podczas transportu nocnego' },
  { src: '/images/transport/przyczepa.png', alt: 'Przyczepa towarowa dwuosiowa z najazdem' },
  {
    src: '/images/wypozyczalnia/vip-bus/bus-2.png',
    alt: 'Wnętrze VIP Bus — fotele skórzane i drewniana podłoga',
  },
];

const ACCOMMODATION_LESNA_GALLERY = '/utils/oferta-letnia/jura-military-camp/gallery';
const ACCOMMODATION_ZLOTY_GALLERY = '/utils/oferta-letnia/zloty-jelen';
const ACCOMMODATION_GORY_GORZKOWSKIE = '/images/baza-noclegowa/gory-gorzkowskie.png';
const ACCOMMODATION_NAMIOTY_NS64 = '/images/baza-noclegowa/namioty-ns64.png';
const ACCOMMODATION_PONIK = '/images/baza-noclegowa/ponik';

const ACCOMMODATION_CARD_HOVER =
  'transition-all duration-300 hover:border-primary/50 hover:bg-white/[0.05] hover:shadow-[0_0_36px_rgba(247,199,59,0.07)]';

const ACCOMMODATION_VENUE_BLOCKS = [
  {
    blockTitle: 'Góry Gorzkowskie',
    paragraphs: [
      'Nasza baza noclegowa znajduje się w przepięknej miejscowości Góry Gorzkowskie na terenie Jury Krakowsko-Częstochowskiej.',
      'Właśnie tam mamy do dyspozycji 6 nowoczesnych wojskowych namiotów NS 64, w których jesteśmy w stanie zakwaterować od 60 do 100 osób. Namioty mają drewniane podłogi, co pozwala na wygodne i bezproblemowe funkcjonowanie w ich wnętrzu.',
      'Na terenie naszej bazy noclegowej posiadamy miejsce na ognisko wraz z ławkami, grill oraz kuchnię polową. Do dyspozycji mamy również kontener sanitarny, w którym znajdują się 4 prysznice i 4 toalety.',
      'Na terenie obiektu znajdują się takie atrakcje jak: poligon paintballowy, mini park linowy, drogi wspinaczkowe, bouldering, trasa off-road/quad, strzelnica na broń pneumatyczną, strzelnica łucznicza oraz tor przeszkód.',
    ],
    images: [
      {
        src: ACCOMMODATION_GORY_GORZKOWSKIE,
        alt: 'Baza noclegowa Góry Gorzkowskie — namioty NS 64 i teren rekreacyjny, widok z góry o zachodzie słońca',
      },
      {
        src: ACCOMMODATION_NAMIOTY_NS64,
        alt: 'Namioty wojskowe NS 64 na terenie bazy — uczestnicy przy namiotach',
      },
    ],
  },
  {
    blockTitle: '„Złoty Jeleń” (Złoty Potok)',
    paragraphs: [
      'Noclegi w Ośrodku Wypoczynkowym „Złoty Jeleń” w miejscowości Złoty Potok, na terenie rezerwatu przyrody Parkowe.',
      'Pokoje 3– i 4-osobowe z łazienką, Wi-Fi.',
      'Do dyspozycji uczestników: jadalnia, sala kominkowa, sala dyskotekowa, duży teren rekreacyjny do gier i zabaw.',
      'Kod imprezy: KPOJ.',
    ],
    images: [
      { src: `${ACCOMMODATION_ZLOTY_GALLERY}/zloty-jelen-1.png`, alt: 'Ośrodek Złoty Jeleń — zabudowa wśród zieleni' },
      { src: `${ACCOMMODATION_ZLOTY_GALLERY}/zloty-jelen-2.png`, alt: 'Złoty Jeleń — teren rekreacyjny ośrodka' },
      { src: `${ACCOMMODATION_ZLOTY_GALLERY}/zloty-jelen-3.png`, alt: 'Złoty Jeleń — wnętrza i infrastruktura' },
      { src: `${ACCOMMODATION_ZLOTY_GALLERY}/zloty-jelen-4.png`, alt: 'Złoty Jeleń — pokój gościnny z łóżkami, widok na las' },
    ],
  },
  {
    blockTitle: 'Ośrodek Wypoczynkowy w Poniku',
    paragraphs: [
      'Ośrodek położony jest na wydzielonym i ogrodzonym terenie leśnym. Bazę noclegową stanowią 4, 5, 6-osobowe domki letniskowe, które jednorazowo mogą pomieścić do 140 osób. Wszystkie domki posiadają łazienki.',
      'Na terenie ośrodka znajdują się dwie altany, boiska do gry w piłkę nożną, w siatkówkę i piłkę koszykową, a także akweny wodne i kąpielisko.',
    ],
    images: [
      {
        src: `${ACCOMMODATION_PONIK}/ponik-1.png`,
        alt: 'Ośrodek Wypoczynkowy w Poniku — widok z góry na ośrodek, kąpielisko i las',
      },
      {
        src: `${ACCOMMODATION_PONIK}/ponik-2.png`,
        alt: 'Ośrodek Wypoczynkowy w Poniku — kąpielisko, plaża i altana nad wodą',
      },
    ],
  },
  {
    blockTitle: 'Leśna Baza (Janów)',
    paragraphs: [
      'Noclegi w drewnianych domkach letniskowych w „Leśnej Bazie” w Janowie, na Jurze Krakowsko-Częstochowskiej.',
      'Domki 6–8-osobowe z łazienkami, możliwe łóżka piętrowe.',
      'Do dyspozycji uczestników: budynek z jadalnią, świetlica, miejsce na ognisko, teren rekreacyjny.',
      'Kod imprezy: KPOH.',
    ],
    images: [
      { src: `${ACCOMMODATION_LESNA_GALLERY}/lesna-baza-1.png`, alt: 'Leśna Baza — obóz w lesie, widok z góry' },
      {
        src: `${ACCOMMODATION_LESNA_GALLERY}/lesna-baza-2.png`,
        alt: 'Leśna Baza — drewniane domki letniskowe w lesie',
      },
    ],
  },
];

const ACCOMMODATION_LIGHTBOX_IMAGES = ACCOMMODATION_VENUE_BLOCKS.flatMap((b) => b.images);

const SERVICE_BASE_GALLERY = [
  { src: '/images/serwis/serwis-1.png', alt: 'Quad podczas prac serwisowych w warsztacie' },
  { src: '/images/serwis/serwis-2.png', alt: 'Samochód terenowy w trakcie naprawy w bazie serwisowej' },
  { src: '/images/serwis/serwis-3.png', alt: 'Serwisowanie quadów i motocykli czterokołowych w warsztacie' },
  { src: '/images/serwis/serwis-4.png', alt: 'Komora silnika samochodu terenowego po obsłudze serwisowej' },
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
  const uniformedHeroSrc = '/images/klasy-mundurowe/militaria-4.png';
  const uniformedDescriptionImageSrc = '/images/klasy-mundurowe/militaria-5.png';
  const eventsHeroSrc = '/images/eventy/galeria-grupa.png';
  const bachelorHeroSrc = '/images/wieczory-kawalerskie/galeria-kawalerski-1.png';
  const equipmentRentalHeroSrc = '/images/wynajem-sprzetu/wynajem-sprzetu-hero.png';
  const trainingsHeroSrc = '/images/szkolenia/szkolenie-linowe-stretcher.png';
  const transportHeroSrc = '/images/transport/transport2.png';
  const accommodationHeroSrc = ACCOMMODATION_NAMIOTY_NS64;
  const serviceBaseHeroSrc = '/images/serwis/serwis-1.png';
  const [activeUniformedModuleId, setActiveUniformedModuleId] = useState(UNIFORMED_MODULES[0].id);
  const [offerGallery, setOfferGallery] = useState<{ images: readonly GalleryImageItem[]; index: number } | null>(null);
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
            isSchoolTripsPage || isUniformedClassesPage || isEventsPage || isBachelorAndBachelorettePage || isEquipmentRentalPage || isTrainingPage
              || isTransportPage || isAccommodationPage || isServiceBasePage
              ? 'relative overflow-hidden'
              : 'bg-dark-lighter'
          }`}
        >
          {(isSchoolTripsPage || isUniformedClassesPage || isEventsPage || isBachelorAndBachelorettePage || isEquipmentRentalPage || isTrainingPage || isTransportPage || isAccommodationPage || isServiceBasePage) && (
            <>
              <div
                className="absolute inset-0 bg-no-repeat"
                style={{
                  backgroundImage: `url(${
                    isSchoolTripsPage
                      ? schoolTripHeroSrc
                      : isUniformedClassesPage
                        ? uniformedHeroSrc
                        : isEventsPage
                          ? eventsHeroSrc
                          : isBachelorAndBachelorettePage
                            ? bachelorHeroSrc
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
                  backgroundSize: 'cover',
                  backgroundPosition: isEventsPage
                    ? 'center 15%'
                    : isAccommodationPage
                      ? 'center 40%'
                      : 'center center',
                }}
                aria-hidden
              />
              <div
                className="app-photo-scrim"
                aria-hidden
              />
              <PhotoBottomScrim />
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
              <div className="relative z-10 max-w-3xl space-y-3">
                <p className="text-primary font-bold uppercase tracking-[0.15em] text-xs sm:text-sm">
                  Jura Krakowsko‑Częstochowska • Śląsk • Edukacja • Integracja • Przygoda
                </p>
                <p className="text-base md:text-lg text-white/85 leading-relaxed">
                  Od ponad 25 lat organizujemy autorskie wycieczki szkolne — zamki, aktywności terenowe i programy szyte na miarę wieku
                  grupy.
                </p>
              </div>
            )}
            {isUniformedClassesPage && (
              <div className="relative z-10 max-w-3xl space-y-4">
                <p className="text-xl md:text-2xl font-extrabold font-display text-white leading-tight">
                  Ponad standardem. Poza schematem. 25 lat tradycji w szkoleniu elity!
                </p>
                <p className="text-base md:text-lg text-white/85 leading-relaxed">
                  Profesjonalne Obozy Szkoleniowe dla Klas Mundurowych z Fundacją JA YHYMM… Integracja Sport Turystyka Wypoczynek.
                </p>
              </div>
            )}
            {isEventsPage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Organizujemy eventy firmowe, integracyjne, motywacyjne oraz wieczory tematyczne szyte pod charakter grupy i założony budżet.
              </p>
            )}
            {isBachelorAndBachelorettePage && (
              <p className="relative z-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                Wieczór kawalerski lub panieński nie musi kojarzyć się tylko i wyłącznie z utratą pamięci oraz striptizem.
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
          <div className={`mx-auto px-6 ${isUniformedClassesPage || isSchoolTripsPage ? 'max-w-4xl lg:max-w-[74rem]' : 'max-w-4xl'}`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-md border-2 border-primary rounded-[2rem] p-8 md:p-12"
            >
              {isSchoolTripsPage ? (
                <div className="space-y-12">
                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-5">Galeria</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {SCHOOL_TRIPS_GALLERY.map((image, i) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setOfferGallery({ images: SCHOOL_TRIPS_GALLERY, index: i })}
                          className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          aria-label={`Powiększ: ${image.alt}`}
                        >
                          <img src={image.src} alt={image.alt} className="w-full h-48 object-cover pointer-events-none" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-10">
                    <SchoolTripsContent />
                  </div>
                </div>
              ) : isUniformedClassesPage ? (
                <div className="space-y-12 text-white/80 leading-relaxed">
                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-5">Galeria</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {UNIFORMED_GALLERY.map((image, i) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setOfferGallery({ images: UNIFORMED_GALLERY, index: i })}
                          className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          aria-label={`Powiększ: ${image.alt}`}
                        >
                          <img src={image.src} alt={image.alt} className="w-full h-48 object-cover pointer-events-none" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8 border-t border-white/10 pt-8">
                  <p className="text-lg">
                    Tradycyjne marsze to za mało? Twoi uczniowie zasługują na szkolenie XXI wieku. Nie oferujemy zwykłych obozów przetrwania ani
                    nudnych wykładów o dyscyplinie. Fundacja JA YHYMM… Integracja Sport Turystyka Wypoczynek od ćwierć wieku przenosi szkolenia klas o
                    profilu wojskowym, policyjnym i ratowniczym na zupełnie nowy, elitarny poziom.
                  </p>
                  <p>
                    Łączymy ekstremalną taktykę wojskową, zaawansowane techniki linowe, pełen arsenał strzelecki oraz potężny, własny park maszynowy
                    i infrastrukturę szkoleniową. Zobacz, jak pod okiem ekspertów rodzi się prawdziwa elita.
                  </p>

                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">
                      Nasza baza – Jura Krakowsko-Częstochowska
                    </h3>
                    <p className="font-semibold text-white mb-4">Serce szkolenia w najlepszej lokalizacji w Polsce</p>
                    <p className="mb-4">
                      Nasze operacje koncentrują się na malowniczej i strategicznie doskonałej Jurze Krakowsko-Częstochowskiej. To region idealnie
                      skomunikowany z każdym zakątkiem Polski. To właśnie tutaj stworzyliśmy kompleksowe, własne zaplecze logistyczno-szkoleniowe,
                      dzięki czemu nie jesteśmy zależni od podwykonawców. Do dyspozycji Twojej klasy oddajemy:
                    </p>
                    <ul className="space-y-3 mb-4">
                      {UNIFORMED_BASE_FACILITIES.map((item) => (
                        <li key={item} className="pl-5 relative">
                          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p>
                      Szkolenia przez cały rok! Dzięki stałej współpracy z kilkoma sprawdzonymi ośrodkami wypoczynkowymi na Jurze, organizujemy
                      profesjonalne obozy i zgrupowania przez 365 dni w roku, niezależnie od warunków atmosferycznych.
                    </p>
                  </div>

                  <img
                    src={uniformedDescriptionImageSrc}
                    alt="Uczestnicy obozu militarnego prezentujący wyposażenie"
                    className="w-full rounded-2xl border border-white/10"
                    loading="lazy"
                  />

                  <div className="border-t border-white/10 pt-8">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4">
                      Co nas wyróżnia i zostawia konkurencję w tyle?
                    </h3>
                    <p className="mb-5">
                      Większość firm oferuje „szkolenia z zielonej taktyki w lesie”. My idziemy o krok dalej. Oferujemy program naszpikowany sprzętem
                      i specjalizacjami, których nie znajdziesz nigdzie indziej:
                    </p>
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

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-7 min-h-[200px]">
                      <h4 className="text-white font-semibold text-lg md:text-xl mb-3">{activeUniformedModule.title}</h4>
                      <p>{activeUniformedModule.intro}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-8 space-y-6">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base">
                      Dla szkół i nauczycieli – maksymalna redukcja kosztów i święty spokój
                    </h3>
                    <p>
                      Zajmujemy się organizacją oraz realizacją tego typu wyjazdów od 25 lat. Doskonale rozumiemy logistyczne wyzwania stojące przed
                      szkołą. Dlatego przygotowaliśmy rozwiązania, które czynią naszą ofertę bezkonkurencyjną:
                    </p>
                    {UNIFORMED_SCHOOL_BENEFITS.map((benefit) => (
                      <div key={benefit.title}>
                        <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                        <p>{benefit.body}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-8 space-y-6">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base">
                      Zaufaj 25-letniemu doświadczeniu. Stwórzmy razem elitę jutra!
                    </h3>
                    <p>
                      Terminy na nadchodzący sezon kurczą się błyskawicznie, a nasza własna infrastruktura przyciąga najlepsze szkoły z całego kraju.
                      Nie pozwól, aby Twoją klasę ominęło najbardziej kompleksowe szkolenie mundurowe w Polsce.
                    </p>
                    <Link
                      to="/kontakt"
                      className="inline-flex items-center gap-2 bg-primary text-dark font-bold uppercase tracking-wider text-xs md:text-sm px-6 py-3 rounded-full hover:bg-white transition-colors"
                    >
                      Skontaktuj się z nami – odbierz spersonalizowaną ofertę
                      <ArrowRight size={16} aria-hidden />
                    </Link>
                    <p className="text-white/60 text-sm">
                      Zadzwoń:{' '}
                      <a href="tel:794997714" className="text-primary hover:underline">
                        794 997 714
                      </a>
                      {' · '}
                      Napisz:{' '}
                      <a href="mailto:biuro@ja-yhymm.pl" className="text-primary hover:underline">
                        biuro@ja-yhymm.pl
                      </a>
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Fundacja JA YHYMM… Integracja Sport Turystyka Wypoczynek
                      <br />
                      Baza Szkoleniowa: Jura Krakowsko-Częstochowska
                      <br />
                      Bo prawdziwego rzemiosła uczy się od praktyków z 25-letnim doświadczeniem.
                    </p>
                  </div>
                  </div>
                </div>
              ) : isEventsPage ? (
                <div className="space-y-12 text-white/80 leading-relaxed">
                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-5">Galeria</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {EVENTS_GALLERY.map((image, i) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setOfferGallery({ images: EVENTS_GALLERY, index: i })}
                          className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          aria-label={`Powiększ: ${image.alt}`}
                        >
                          <img src={image.src} alt={image.alt} className="w-full h-48 object-cover pointer-events-none" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8 border-t border-white/10 pt-8">
                  <p>
                    Organizacja imprez firmowych stanowi jeden z kluczowych obszarów działalności firmy JA YHYMM – Integracja, Sport, Turystyka,
                    Wypoczynek. Specjalizujemy się w kompleksowym przygotowaniu wydarzeń, które łączą w sobie elementy integracji zespołu, aktywności
                    fizycznej oraz atrakcyjnego wypoczynku.
                  </p>
                  <p>
                    Realizujemy zarówno wydarzenia lokalne, takie jak pikniki firmowe, festyny, gry terenowe czy turnieje sportowe, jak i wyjazdy
                    integracyjne, szkoleniowe oraz motywacyjne – w kraju i za granicą. Każde wydarzenie tworzymy od podstaw, opracowując spójny i
                    angażujący scenariusz dopasowany do charakteru grupy oraz celów organizacji.
                  </p>
                  <p>
                    W naszej ofercie znajdują się programy letnie i zimowe, obejmujące szeroki wachlarz aktywności: od rekreacyjnych, przez sportowe,
                    aż po rozbudowane scenariusze team buildingowe. Proponujemy m.in. gry zespołowe, warsztaty integracyjne, wyzwania terenowe,
                    zajęcia outdoorowe oraz kreatywne formy współpracy, które wzmacniają relacje i poprawiają komunikację w zespole.
                  </p>
                  <p>
                    Każdy projekt traktujemy indywidualnie. Oprócz gotowych pakietów oferujemy autorskie programy tworzone na miarę – uwzględniające
                    specyfikę firmy, jej kulturę organizacyjną oraz oczekiwania uczestników. Scenariusz wydarzenia budujemy w oparciu o profil grupy,
                    liczbę uczestników, poziom zaawansowania oraz założony budżet.
                  </p>
                  <p>
                    Dbamy o to, aby proponowane aktywności były dostępne dla wszystkich – niezależnie od wieku, płci czy kondycji fizycznej. Stopień
                    trudności oraz dynamika zajęć są odpowiednio wyważone, tak aby każdy uczestnik mógł aktywnie i komfortowo wziąć udział w
                    wydarzeniu, czerpiąc z niego satysfakcję i pozytywne doświadczenia.
                  </p>
                  <p>
                    Cennik każdorazowo opracowujemy indywidualnie, gwarantując optymalne dopasowanie oferty do potrzeb i możliwości klienta.
                  </p>
                  </div>
                </div>
              ) : isBachelorAndBachelorettePage ? (
                <div className="space-y-12 text-white/80 leading-relaxed">
                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-5">Galeria</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {BACHELOR_BACHELORETTE_GALLERY.map((image, i) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setOfferGallery({ images: BACHELOR_BACHELORETTE_GALLERY, index: i })}
                          className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          aria-label={`Powiększ: ${image.alt}`}
                        >
                          <img src={image.src} alt={image.alt} className="w-full h-48 object-cover pointer-events-none" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8 border-t border-white/10 pt-8">
                  <div>
                    <p>
                      Wieczór kawalerski lub panieński… …nie musi kojarzyć się tylko i wyłącznie z utratą pamięci oraz striptizem (aczkolwiek obydwu
                      tych rzeczy nie wykluczamy). Proponujemy Wam coś zupełnie innego.
                    </p>
                    <p className="mt-4">
                      Specjalizujemy się: w kompleksowej organizacji „OSTATNICH DNI WOLNOŚCI” od transportu, poprzez lokal, miejsce gdzie ma się odbyć
                      impreza, a przede wszystkim specjalizujemy się w formie w jakiej to wszystko ma się odbyć.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {BACHELOR_ATTRACTIONS.map((attraction) => (
                      <div key={attraction.title}>
                        <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-3">{attraction.title}</h3>
                        {attraction.paragraphs.map((paragraph, i) => (
                          <p key={i} className={i > 0 ? 'mt-4' : undefined}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
              ) : isEquipmentRentalPage ? (
                <div className="space-y-12 text-white/80 leading-relaxed">
                  <p className="text-lg">Oferujemy Wam możliwość wynajmu sprzętu.</p>

                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-6">
                      Oferta wypożyczalni
                    </h3>
                    <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                      {RENTAL_WWW_TILES.map((tile, index) => (
                        <motion.div
                          key={tile.to}
                          className="h-full"
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={tile.to}
                            className="group relative block h-full min-h-[220px] overflow-hidden rounded-2xl border-2 border-white/10 p-6 transition-colors duration-300 hover:border-primary"
                            aria-label={`${tile.title}: ${tile.description}`}
                          >
                            <img
                              src={tile.img}
                              alt=""
                              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                              aria-hidden
                            />
                            <div className="absolute inset-0 z-[1] bg-black/15 pointer-events-none" aria-hidden />
                            <div className="app-photo-scrim-card z-[2]" aria-hidden />
                            <PhotoBottomScrim card />
                            <motion.div className="relative z-10 flex h-full min-h-[188px] flex-col justify-end">
                              <h4 className="text-lg md:text-xl font-bold font-display text-white mb-2 group-hover:text-primary transition-colors">
                                {tile.title}
                              </h4>
                              <p className="text-sm text-white leading-relaxed mb-4 line-clamp-4 drop-shadow-sm">{tile.description}</p>
                              <span className="inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest">
                                Szczegóły
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                              </span>
                            </motion.div>
                          </Link>
                        </motion.div>
                      ))}
                      <motion.div
                        key="rental-cta"
                        className="h-full"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: RENTAL_WWW_TILES.length * 0.05 }}
                      >
                        <Link
                          to={RENTAL_WWW_CTA.to}
                          className="group relative flex h-full min-h-[220px] flex-col rounded-2xl border-2 border-primary bg-dark-lighter/60 p-6 text-center transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_36px_rgba(247,199,59,0.14)]"
                          aria-label={`${RENTAL_WWW_CTA.title} ${RENTAL_WWW_CTA.action}`}
                        >
                          <div className="relative z-10 flex h-full min-h-[188px] flex-col justify-end">
                            <h4 className="text-lg md:text-xl font-bold font-display text-primary mb-2">
                              {RENTAL_WWW_CTA.title}
                            </h4>
                            <p className="text-sm text-white/80 leading-relaxed mb-4 line-clamp-4">
                              {RENTAL_WWW_CTA.description}
                            </p>
                            <span className="inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest">
                              {RENTAL_WWW_CTA.action}
                              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>

                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-6">Co można u nas wynająć?</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {EQUIPMENT_RENTAL_CATALOG.map((item, i) => (
                        <div
                          key={item.text}
                          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-primary/40"
                        >
                          <button
                            type="button"
                            onClick={() => setOfferGallery({ images: EQUIPMENT_RENTAL_LIGHTBOX_IMAGES, index: i })}
                            className="block w-full aspect-[16/10] overflow-hidden bg-white/5 text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                            aria-label={`Powiększ: ${item.alt}`}
                          >
                            <img src={item.img} alt={item.alt} className="h-full w-full object-cover pointer-events-none" loading="lazy" />
                          </button>
                          <p className="p-4 text-sm md:text-base text-white/85 leading-snug">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : isTrainingPage ? (
                <div className="space-y-12 text-white/80 leading-relaxed">
                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-5">Galeria</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {TRAININGS_GALLERY.map((image, i) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setOfferGallery({ images: TRAININGS_GALLERY, index: i })}
                          className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          aria-label={`Powiększ: ${image.alt}`}
                        >
                          <img src={image.src} alt={image.alt} className="w-full h-48 object-cover pointer-events-none" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8 border-t border-white/10 pt-8">
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

                  <p>
                    Jesteśmy w stanie przeszkolić grupę osób, jak i każdą indywidualną osobę z każdego z ww. zagadnień. Przede wszystkim stawiamy na
                    rzetelność, bezpieczeństwo i profilaktykę, dlatego nasze zajęcia prowadzone są przez wykwalifikowaną kadrę, na którą składają się
                    doświadczeni instruktorzy poszczególnych form aktywności.
                  </p>
                  </div>
                </div>
              ) : isTransportPage ? (
                <div className="space-y-12 text-white/80 leading-relaxed">
                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-5">Galeria</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {TRANSPORT_GALLERY.map((image, i) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setOfferGallery({ images: TRANSPORT_GALLERY, index: i })}
                          className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          aria-label={`Powiększ: ${image.alt}`}
                        >
                          <img src={image.src} alt={image.alt} className="w-full h-48 object-cover pointer-events-none" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8 border-t border-white/10 pt-8">
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
                  </div>
                </div>
              ) : isAccommodationPage ? (
                <div className="space-y-8 text-white/80 leading-relaxed">
                  <div className="space-y-14 md:space-y-16 pt-4">
                    {(() => {
                      let lightboxCursor = 0;
                      return ACCOMMODATION_VENUE_BLOCKS.map((block) => (
                        <div key={block.blockTitle}>
                          <h3 className="text-center font-display font-semibold text-white text-lg md:text-xl mb-6 md:mb-8">
                            {block.blockTitle}
                          </h3>
                          <div className="mb-8 md:mb-10 max-w-3xl mx-auto space-y-6 text-white/85 leading-relaxed text-center">
                            {block.paragraphs.map((p) => (
                              <p key={p}>{p}</p>
                            ))}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 min-w-0">
                            {block.images.map((img, i) => {
                              const lbIndex = lightboxCursor++;
                              return (
                                <motion.figure
                                  key={`${block.blockTitle}-${img.src}-${i}`}
                                  initial={{ opacity: 0, y: 12 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.05 }}
                                  className={`group min-w-0 overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 ${ACCOMMODATION_CARD_HOVER} cursor-zoom-in`}
                                >
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setOfferGallery({ images: ACCOMMODATION_LIGHTBOX_IMAGES, index: lbIndex })
                                    }
                                    className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-2xl"
                                    aria-label={`Powiększ: ${img.alt}`}
                                  >
                                    <img
                                      src={img.src}
                                      alt={img.alt}
                                      className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.02] pointer-events-none"
                                      loading="lazy"
                                    />
                                  </button>
                                </motion.figure>
                              );
                            })}
                          </div>
                        </div>
                      ));
                    })()}
                  </div>

                  <p>W najbliższym czasie planujemy postawienie kilku całorocznych domków, każdy dla 8/10 osób.</p>
                  <p className="border-t border-white/10 pt-8">
                    Wszystkich żądnych przygód zapraszamy serdecznie do kontaktu z nami i odwiedzenia nas :)
                  </p>
                </div>
              ) : isServiceBasePage ? (
                <div className="space-y-12 text-white/80 leading-relaxed">
                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-5">Galeria</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {SERVICE_BASE_GALLERY.map((image, i) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setOfferGallery({ images: SERVICE_BASE_GALLERY, index: i })}
                          className="rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          aria-label={`Powiększ: ${image.alt}`}
                        >
                          <img src={image.src} alt={image.alt} className="w-full h-56 object-cover pointer-events-none" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8 border-t border-white/10 pt-8">
                  <p className="text-lg">Dysponujemy bazą serwisową, w której naprawiamy nasz cały sprzęt.</p>
                  <p>
                    Sprzęt, którym się zajmujemy to przede wszystkim sprzęt paintballowy marek Tippmann, BT, Spyder. Na bieżąco staramy się
                    utrzymywać nasze karabinki w dobrym stanie tak, abyście zawsze dostali sprawny sprzęt.
                  </p>
                  <p>
                    Poza tym na bieżąco serwisujemy nasze quady, samochody terenowe, busy, tak aby ich użytkowanie zawsze było bezpieczne i
                    przyjemne. W wolnych chwilach (choć nie ma ich wiele) serwisujemy również ww. sprzęt naszym indywidualnym klientom.
                  </p>

                  <p className="border-t border-white/10 pt-8">
                    Jeżeli masz jakiś problem ze sprzętem paintballowym lub motoryzacyjnym, skontaktuj się z nami - postaramy się pomóc!
                  </p>
                  </div>
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

      {offerGallery ? (
        <GalleryLightbox
          images={offerGallery.images}
          index={offerGallery.index}
          onIndexChange={(i) => setOfferGallery((g) => (g ? { ...g, index: i } : null))}
          onClose={() => setOfferGallery(null)}
          zIndexClass="z-[130]"
        />
      ) : null}

      <Footer />
    </div>
  );
}
