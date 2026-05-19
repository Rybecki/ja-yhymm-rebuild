import type { SummerOfferDetail } from './types';
import { ZLOTY_JELEN_ACCOMMODATION_BLOCK } from './sharedZlotyJelenAccommodation';
import {
  JURA_SUMMER_EQUIPMENT_BLOCKS_FULL,
  JURA_SUMMER_EQUIPMENT_INTRO,
  JURA_SUMMER_EQUIPMENT_SECTION_TITLE,
} from './sharedJuraSummerEquipment';

const G = '/utils/oferta-letnia/jura-art-camp/gallery';

export const JURA_ART_CAMP_DETAIL: SummerOfferDetail = {
  heroBackgroundPosition: 'center 55%',
  heroImage: {
    src: `${G}/art-2.png`,
    alt: 'Uczestniczka obozu przy rysowaniu kolorowych kompozycji — Jura Art Camp',
  },
  /** Zawsze 4 zdjęcia w galerii. */
  gallery: [
    {
      src: `${G}/art-1.png`,
      alt: 'Dzieci podczas warsztatów plastycznych — wycinanie i prace z kolorowego papieru',
    },
    {
      src: `${G}/art-2.png`,
      alt: 'Uczestniczka obozu przy rysowaniu kolorowych kompozycji — Jura Art Camp',
    },
    {
      src: `${G}/art-3.png`,
      alt: 'Warsztaty artystyczne — twórcza praca uczestników obozu',
    },
    {
      src: `${G}/art-4.jpg`,
      alt: 'Malowanie stóp kolorowymi farbami — warsztat plastyczny',
    },
  ],
  aboutSectionTitle: 'O obozie',
  aboutLeadTitle: 'GDZIE SZTUKA SPOTYKA NATURĘ – ODKRYJ ARTYSTYCZNĄ DUSZĘ SWOJEGO DZIECKA!',
  aboutBlocks: [
    {
      title: 'AROMATYCZNE MALARSTWO',
      body: 'Malujemy zamki kawą i cynamonem – odkryj sztukę, która pachnie przygodą!',
    },
    {
      title: 'WARSZTATY STRING ART & GLINA',
      body: 'Wyplatamy obrazy z nici i lepimy z gliny – zamień jurajskie minerały w autorskie arcydzieła!',
    },
    {
      title: 'MAGIA TEATRU KAMISHIBAI',
      body: 'Stwórz własne kukiełki i opowiedz legendę o rycerzach w japońskim teatrze ilustracji!',
    },
  ],
  aboutClosing: 'Sztuka, natura i nowe przyjaźnie w sercu Jury!',
  programSectionTitle: 'Program',
  programHeadline: 'JURA ART CAMP – KOLOROWA PRZYGODA ZE SZTUKĄ!',
  programAgeLine: 'obóz artystyczny dla najmłodszych (7–11 lat)',
  programIntro: [
    'Masz duszę artysty, uwielbiasz tworzyć i marzysz o wakacjach pełnych koloru, fantazji i magii? Zapraszamy na Jura Art Camp – niezwykły obóz dla młodych twórców.',
    'Tutaj każdy dzień to nowa przygoda, nowy pomysł i nowe dzieło!',
  ],
  programBullets: [
    {
      title: 'Sztuka i przygoda na Szlaku Orlich Gniazd',
      body:
        'Zamek w Ogrodzieńcu, Bobolicach i Mirowie, Muzeum Krasińskiego – inspiracje, a potem „aromatyczne zamki” malowane kawą, cynamonem i kurkumą.',
    },
    {
      title: 'Tworzymy, odkrywamy, wyobrażamy',
      body:
        'Kukiełki do teatru, łapacze snów w duchu zero waste, stworki i rzeźby z gliny, makramy, obrazy z gwoździ i nici, miniatury z kamieni.',
    },
    {
      title: 'Sztuka, którą można… zjeść!',
      body:
        'Słodki plener malarski – autoportrety z popcornu, wafli tortowych i innych smakowitych materiałów.',
    },
    {
      title: 'Artyści w akcji',
      body:
        'Malowanie, kolaż, decoupage, makrama, modelowanie i inne techniki. Prace oprawimy w stylu passe-partout lub w drewniane ramki, które samodzielnie ozdobisz.',
    },
    {
      title: 'Wielki wernisaż',
      body: 'Twój moment – prezentacja talentu i dzieł jak u prawdziwego artysty.',
    },
  ],
  programFooter: `Poza tym: gry i zabawy integracyjne, wieczory tematyczne i filmowe, wieczorne ogniska, relaks nad wodą i plażowanie, fluorescencyjna dyskoteka FLUO PARTY, Just Dance Party, piżama party z konkursami.`,
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
    'Wszystkie zajęcia będą dopasowane do stanu psychofizycznego uczestników.',
    'Zabierz ze sobą: legitymację szkolną, wypełnioną i podpisaną kartę kwalifikacyjną, odzież i obuwie odpowiednie do planowanych aktywności, obuwie zmienne, ręcznik kąpielowy, podpisz bagaż.',
    'Od każdego uczestnika pierwszego dnia pobytu pobierana jest kaucja w wysokości 50 zł na pokrycie ewentualnych strat spowodowanych przez niego w wyposażeniu ośrodka.',
  ],
  equipmentSectionTitle: JURA_SUMMER_EQUIPMENT_SECTION_TITLE,
  equipmentIntro: JURA_SUMMER_EQUIPMENT_INTRO,
  equipmentBlocks: JURA_SUMMER_EQUIPMENT_BLOCKS_FULL,
  termsSectionTitle: 'Terminy i ceny',
  termsSubtitle: 'Jura Art Camp',
  termsDisclaimer: 'Uwaga! Ceny mogą ulec zmianie. Przed rezerwacją zapytaj o cenę telefonicznie lub mailowo.',
  terms: [
    {
      dateRange: '07.07 – 16.07.2026',
      durationLabel: '10 dni',
      price: '2799 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-_ART_CAMP_2026_PAX_FB&skrot2=KPOJ0707&klucz=JURA%20-%20ART%20CAMP%202026',
    },
    {
      dateRange: '17.07 – 26.07.2026',
      durationLabel: '10 dni',
      price: '2799 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-_ART_CAMP_2026_PAX_FB&skrot2=KPOJ0717&klucz=JURA%20-%20ART%20CAMP%202026',
    },
  ],
  reserveHref: 'mailto:biuro@ja-yhymm.pl?subject=Rezerwacja%20%E2%80%93%20Jura%20Art%20Camp',
};
