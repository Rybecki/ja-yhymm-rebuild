import type { SummerOfferDetail } from './types';
import { ZLOTY_JELEN_ACCOMMODATION_BLOCK } from './sharedZlotyJelenAccommodation';
import {
  JURA_SUMMER_EQUIPMENT_BLOCKS_KIDS,
  JURA_SUMMER_EQUIPMENT_INTRO,
  JURA_SUMMER_EQUIPMENT_SECTION_TITLE,
} from './sharedJuraSummerEquipment';

const G = '/utils/oferta-letnia/jura-kids-patrol-camp/gallery';

export const JURA_KIDS_PATROL_CAMP_DETAIL: SummerOfferDetail = {
  gallery: [
    { src: `${G}/kp-1.png`, alt: 'Uczestnik w umundurowaniu podczas gry terenowej' },
    { src: `${G}/kp-2.png`, alt: 'Dzieci w kamuflażu — zabawa terenowa i malowanie twarzy' },
    { src: `${G}/kp-3.png`, alt: 'Dwoje chłopców w kamuflażu na obozie przygody' },
    { src: `${G}/kp-4.png`, alt: 'Dzieci podczas zajęć terenowych Kids Patrol Camp' },
  ],
  aboutSectionTitle: 'O obozie',
  aboutLeadTitle: 'JURA KIDS PATROL – TWOJA PIERWSZA MISJA SPECJALNA!',
  aboutBlocks: [
    {
      title: 'AKADEMIA STRZELECKA I TAKTYKA',
      body:
        'Sprawdź swoją celność z markerów paintballowych, ASG i łuków! Buduj punkty obserwacyjne, szyfruj wiadomości i weź udział w wielkim turnieju o tytuł Najlepszego Strzelca.',
    },
    {
      title: 'SZKOŁA TROPICIELI I SKARBÓW',
      body:
        'Wyrusz na wyprawę z wykrywaczem metalu i odkryj tajemnice Jury! Naucz się rozpoznawać tropy zwierząt, budować leśne kryjówki i maskować się tak, by nikt Cię nie zauważył.',
    },
    {
      title: 'WODNE BITWY I WSPINACZKA',
      body:
        'Przeżyj epickie starcia na balony i pistolety wodne w gorące dni, a potem pokonaj własne słabości na ściance wspinaczkowej pod okiem instruktorów.',
    },
  ],
  aboutClosing: 'Zostań bohaterem swojej drużyny i przeżyj przygodę życia! Dołącz do patrolu.',
  programSectionTitle: 'Program',
  programHeadline: 'JURA KIDS PATROL – obóz dla najmłodszych twardzieli!',
  programAgeLine: '(7–11 lat)',
  programIntro: [
    'Gotowi na największą przygodę wakacji? Zapraszamy młodych odkrywców, poszukiwaczy emocji i przyszłych bohaterów na JURA KIDS PATROL – obóz pełen akcji, przygód i świetnej zabawy w duchu drużynowej współpracy!',
    'Pod okiem doświadczonych instruktorów dzieciaki wcielą się w role żołnierzy, policjantów i komandosów! Przeżyją niezapomniane misje terenowe i wezmą udział w zmaganiach godnych prawdziwych bohaterów!',
  ],
  programBullets: [
    {
      title: 'I. Misje specjalne',
      body:
        'Strzelanie do celu – paintballowe markery, karabinki ASG, wiatrówki i łuk; na zakończenie wielki turniej o tytuł Najlepszego Strzelca. Terenowe gry i podchody: szyfrowanie wiadomości, punkt obserwacyjny, zdobycie flagi drużyny. Ścianka wspinaczkowa i szkoła węzłów.',
    },
    {
      title: 'II. Wodne szaleństwa',
      body: 'Baloniada i bitwy na pistolety wodne – dużo ruchu, śmiechu i ochłodzenia w gorące dni!',
    },
    {
      title: 'III. Tropiciele i odkrywcy',
      body:
        'Poszukiwanie skarbów z wykrywaczem metali, mini survival (szałasy, ognisko, maskowanie w lesie), leśna szkoła przetrwania: tropy zwierząt, rośliny i grzyby, orientacja, komunikacja drużynowa.',
    },
  ],
  programFooter:
    'Poza tym – wiele atrakcji: wieczorne ogniska, chill z ekipą i nocny pokaz ulubionych bajek, relaks nad wodą, plażowanie, dyskoteka i turniej Just Dance.',
  optionalSectionTitle: 'Program fakultatywny',
  optionalIntro:
    'Dla tych, którzy chcą przeżyć jeszcze więcej przygód i dodać do swojego obozu odrobinę adrenaliny, przygotowaliśmy bogaty program zajęć fakultatywnych. To idealny sposób, by urozmaicić pobyt na Jurze i odkryć nowe wrażenia od emocji off-roadowych po wodny relaks i zwiedzanie jurajskich zamków!',
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
  accommodationParagraphs: [],
  accommodationImages: [],
  accommodationBlocks: [ZLOTY_JELEN_ACCOMMODATION_BLOCK],
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
    'Zajęcia prowadzone są przez wykwalifikowanych instruktorów i wychowawców.',
    'Wszystkie zajęcia będą dopasowane do stanu psychofizycznego uczestników.',
    'Zabierz ze sobą: legitymację szkolną, wypełnioną i podpisaną kartę kwalifikacyjną, odzież i obuwie odpowiednie do planowanych aktywności, obuwie zmienne, ręcznik kąpielowy, podpisz bagaż.',
    'Od każdego uczestnika pierwszego dnia pobytu pobierana jest kaucja w wysokości 50 zł na pokrycie ewentualnych strat spowodowanych przez niego w wyposażeniu ośrodka.',
  ],
  equipmentSectionTitle: JURA_SUMMER_EQUIPMENT_SECTION_TITLE,
  equipmentIntro: JURA_SUMMER_EQUIPMENT_INTRO,
  equipmentBlocks: JURA_SUMMER_EQUIPMENT_BLOCKS_KIDS,
  termsSectionTitle: 'Terminy i ceny',
  termsSubtitle: 'Jura Kids Patrol Camp',
  termsDisclaimer: 'Uwaga! Ceny mogą ulec zmianie. Przed rezerwacją zapytaj o cenę telefonicznie lub mailowo.',
  terms: [
    {
      dateRange: '07.07 – 16.07.2026',
      durationLabel: '10 dni',
      price: '2899 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-_KIDS_PATROL_CAMP_2026_PAX_FB&skrot2=KPOJ0707&klucz=JURA%20-%20KIDS%20PATROL%20CAMP%202026',
    },
    {
      dateRange: '17.07 – 26.07.2026',
      durationLabel: '10 dni',
      price: '2899 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-_KIDS_PATROL_CAMP_2026_PAX_FB&skrot2=KPOJ0717&klucz=JURA%20-%20KIDS%20PATROL%20CAMP%202026',
    },
    {
      dateRange: '27.07 – 05.08.2026',
      durationLabel: '10 dni',
      price: '2899 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-_KIDS_PATROL_CAMP_2026_PAX_FB&skrot2=KPOJ0727&klucz=JURA%20-%20KIDS%20PATROL%20CAMP%202026',
    },
    {
      dateRange: '06.08 – 15.08.2026',
      durationLabel: '10 dni',
      price: '2899 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-_KIDS_PATROL_CAMP_2026_PAX_FB&skrot2=KPOJ0806&klucz=JURA%20-%20KIDS%20PATROL%20CAMP%202026',
    },
  ],
  reserveHref:
    'mailto:biuro@ja-yhymm.pl?subject=Rezerwacja%20%E2%80%93%20Jura%20Kids%20Patrol%20Camp',
};
