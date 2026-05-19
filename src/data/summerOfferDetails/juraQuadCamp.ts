import type { SummerOfferDetail } from './types';
import { LESNA_BAZA_ACCOMMODATION_BLOCK } from './sharedLesnaBazaAccommodation';
import {
  JURA_SUMMER_EQUIPMENT_BLOCKS_FULL,
  JURA_SUMMER_EQUIPMENT_INTRO,
  JURA_SUMMER_EQUIPMENT_SECTION_TITLE,
} from './sharedJuraSummerEquipment';

const G = '/utils/oferta-letnia/jura-quad-camp/gallery';

export const JURA_QUAD_CAMP_DETAIL: SummerOfferDetail = {
  heroBackgroundPosition: 'center 45%',
  heroImage: {
    src: `${G}/qc-hero.png`,
    alt: 'Jazda quadem o zachodzie słońca — rider na czerwonym quadzie w polu',
  },
  gallery: [
    { src: `${G}/qc-hero.png`, alt: 'Jazda quadem o zachodzie słońca — rider na czerwonym quadzie w polu' },
    { src: `${G}/qc-2.png`, alt: 'Jazda quadem po jurajskim piasku — rider na czarnym quadzie na wydmie' },
    { src: `${G}/qc-3.png`, alt: 'Grupa nastolatków z quadami pod namiotem w lesie' },
    { src: `${G}/qc-4.png`, alt: 'Quady na piaszczystym torze podczas jazdy grupowej' },
  ],
  youtubeVideoId: 'vcfExvLt-Jk',
  aboutSectionTitle: 'O obozie',
  aboutLeadTitle: 'QUAD OFF-ROAD ADVENTURE – POCZUJ MOC CZTERECH KÓŁ!',
  aboutBlocks: [
    {
      title: 'PUSTYNNY RAID I OFF-ROAD',
      body:
        'Podbij piaszczyste wydmy pustyni i pokonaj błotne przeszkody na profesjonalnym torze – 7 wypraw pełnych adrenaliny!',
    },
    {
      title: 'MISJA NOCNA',
      body:
        'Przetestuj swoje umiejętności po zmroku podczas nocnej wyprawy terenowej – to wyzwanie dla najodważniejszych kierowców!',
    },
    {
      title: 'ZOSTAŃ MISTRZEM KIEROWNICY',
      body:
        'Naucz się serwisu i techniki jazdy pod okiem ekspertów, a na koniec wygraj wielki turniej quadowy z nagrodami! Kurz, błoto i niezapomniane emocje na Szlaku Orlich Gniazd!',
    },
  ],
  aboutClosing: 'Wskocz za kierownicę!',
  programSectionTitle: 'Program',
  programHeadline: 'JURA QUAD CAMP – ADRENALINA NA CZTERECH KOŁACH!',
  programAgeLine: '(10–17 lat)',
  programIntro: [
    'Marzysz o wakacjach pełnych emocji, prędkości i błota po zderzaki? Na JURAJSKIM OBOZIE QUADOWYM poczujesz się jak prawdziwy rajdowiec!',
    'Setki kilometrów ścieżek, pagórki, strome zjazdy, błotne doliny i piaszczyste tory – pokażemy Ci polski odpowiednik Sahary. Z nami przekonasz się, czym jest prawdziwy off-road!',
  ],
  programBullets: [
    {
      title: 'Szkoła quadowca',
      body:
        'Na początku nauczysz się wszystkiego, co trzeba, by bezpiecznie prowadzić quada: zasady obsługi i serwisowania pojazdu, przygotowanie quada do jazdy, techniki utrzymania równowagi i reagowania w trudnym terenie.',
    },
    {
      title: 'Ekspedycje terenowe',
      body:
        'Czeka Cię aż siedem wypraw quadowych – każda po 2–3 godziny! Jazda po leśnych ścieżkach, polnych drogach i błotnych trasach, ostre podjazdy i zjazdy na piaszczystym torze i finałowa jazda na specjalnym torze off-roadowym.',
    },
    {
      title: 'Nocna wyprawa quadowa',
      body:
        'Dla najodważniejszych – emocjonująca nocna wyprawa z reflektorami i latarkami czołowymi.',
    },
    {
      title: 'Misje terenowe i rywalizacja',
      body:
        'Na koniec obozu gra terenowa na quadach i turniej z nagrodami. Dzień rajdowy z punktami kontrolnymi i mapą, zawody drużynowe Off-Road Challenge, warsztaty (świeca, olej, filtr), odznaki i certyfikaty tematyczne, wieczór rajdowy z filmami motoryzacyjnymi.',
    },
  ],
  programFooter: '',
  optionalSectionTitle: 'Program fakultatywny',
  optionalIntro:
    'Dla tych, którzy chcą przeżyć jeszcze więcej przygód i dodać do swojego obozu odrobinę adrenaliny, przygotowaliśmy bogaty program zajęć fakultatywnych. To idealny sposób, by urozmaicić pobyt na Jurze i odkryć nowe wrażenia od emocji off-roadowych po wodny relaks i zwiedzanie jurajskich zamków!',
  optionalItems: [
    'Przejażdżka autem terenowym – dynamiczna jazda po jurajskich szlakach (min. 5 osób) – 50 zł',
    'Ekspedycja 4×4 po Jurajskim Wąwozie pełnym błota i przeszkód terenowych – prawdziwa off-roadowa przygoda dla miłośników adrenaliny – 200 zł',
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
  accommodationParagraphs: [],
  accommodationImages: [],
  accommodationBlocks: [LESNA_BAZA_ACCOMMODATION_BLOCK],
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
    'dopłaty za dodatkowe świadczenia w przypadku łączenia turnusów (nocleg, wyżywienie, opieka kadry) – 300 zł,',
    'dopłaty za program fakultatywny,',
    'dopłat do wybranych diet.',
  ],
  practicalSectionTitle: 'Informacje praktyczne',
  practicalParagraphs: [
    'Obóz kierowany jest do osób lubiących większą aktywność fizyczną.',
    'Zajęcia prowadzone są przez wykwalifikowanych instruktorów.',
    'Przed każdą wyprawą sprawdzamy stan techniczny quadów i dopasowujemy trasy do poziomu umiejętności uczestników.',
    'Wszystkie zajęcia będą dopasowane do stanu psychofizycznego uczestników.',
    'W razie niepogody zajęcia terenowe są wstrzymywane z uwagi na bezpieczeństwo uczestników.',
    'Zabierz ze sobą: legitymację szkolną, wypełnioną i podpisaną kartę kwalifikacyjną, odzież i obuwie odpowiednie do planowanych aktywności, obuwie zmienne, ręcznik kąpielowy, 2 pary rękawic do jazdy quadem, podpisz bagaż.',
    'Mile widziane: własny kask, zbroja („żółw”), buty motocrossowe lub buty za kostkę i gogle.',
    'Zapewniamy cały sprzęt, pojazdy i zabezpieczenia dla osób, które nie mają własnego wyposażenia.',
    'Od każdego uczestnika pierwszego dnia pobytu pobierana jest kaucja w wysokości 50 zł na pokrycie ewentualnych strat spowodowanych przez niego w wyposażeniu ośrodka.',
  ],
  equipmentSectionTitle: JURA_SUMMER_EQUIPMENT_SECTION_TITLE,
  equipmentIntro: JURA_SUMMER_EQUIPMENT_INTRO,
  equipmentBlocks: JURA_SUMMER_EQUIPMENT_BLOCKS_FULL,
  termsSectionTitle: 'Terminy i ceny',
  termsSubtitle: 'Jura Quad Camp',
  termsDisclaimer: 'Uwaga! Ceny mogą ulec zmianie. Przed rezerwacją zapytaj o cenę telefonicznie lub mailowo.',
  terms: [
    {
      dateRange: '27.06 – 06.07.2026',
      durationLabel: '10 dni',
      price: '2899 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_QUAD_CAMP_2026_PAX_FB&skrot2=KPOH0627&klucz=JURA%20QUAD%20CAMP%202026',
    },
    {
      dateRange: '07.07 – 16.07.2026',
      durationLabel: '10 dni',
      price: '2899 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_QUAD_CAMP_2026_PAX_FB&skrot2=KPOH0707&klucz=JURA%20QUAD%20CAMP%202026',
    },
    {
      dateRange: '17.07 – 26.07.2026',
      durationLabel: '10 dni',
      price: '2899 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_QUAD_CAMP_2026_PAX_FB&skrot2=KPOH0717&klucz=JURA%20QUAD%20CAMP%202026',
    },
    {
      dateRange: '27.07 – 05.08.2026',
      durationLabel: '10 dni',
      price: '2899 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_QUAD_CAMP_2026_PAX_FB&skrot2=KPOH0727&klucz=JURA%20QUAD%20CAMP%202026',
    },
    {
      dateRange: '06.08 – 15.08.2026',
      durationLabel: '10 dni',
      price: '2899 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_QUAD_CAMP_2026_PAX_FB&skrot2=KPOH0806&klucz=JURA%20QUAD%20CAMP%202026',
    },
    {
      dateRange: '16.08 – 25.08.2026',
      durationLabel: '10 dni',
      price: '2899 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOH~JURA_QUAD_CAMP_2026_PAX_FB&skrot2=KPOH0816&klucz=JURA%20QUAD%20CAMP%202026',
    },
  ],
  reserveHref: 'mailto:biuro@ja-yhymm.pl?subject=Rezerwacja%20%E2%80%93%20Jura%20Quad%20Camp',
};
