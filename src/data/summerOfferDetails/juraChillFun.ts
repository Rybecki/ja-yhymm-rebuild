import type { SummerOfferDetail } from './types';
import { ZLOTY_JELEN_ACCOMMODATION_BLOCK } from './sharedZlotyJelenAccommodation';
import {
  JURA_SUMMER_EQUIPMENT_BLOCKS_FULL,
  JURA_SUMMER_EQUIPMENT_INTRO,
  JURA_SUMMER_EQUIPMENT_SECTION_TITLE,
} from './sharedJuraSummerEquipment';

const G = '/utils/oferta-letnia/jura-chill-fun/gallery';

export const JURA_CHILL_FUN_DETAIL: SummerOfferDetail = {
  gallery: [
    { src: `${G}/chill-1.png`, alt: 'Kolorowy festiwal Holi — grupa uczestników obozu' },
    { src: `${G}/chill-2.png`, alt: 'Dzieci bawiące się klockami na kocu na trawie' },
    { src: `${G}/chill-3.png`, alt: 'Dzieci na leżakach na trawie — relaks na obozie' },
    { src: `${G}/chill-4.png`, alt: 'Dmuchańce i zabawy na świeżym powietrzu — Chill & Fun Camp' },
  ],
  aboutSectionTitle: 'O obozie',
  aboutLeadTitle: 'CHILL & FUN CAMP – TWOJA STREFA LETNIEGO LUZU!',
  aboutBlocks: [
    {
      title: 'PLAŻOWY CHILLOUT',
      body:
        'Słońce, piasek i błękitne jezioro – odpocznij na plaży lub rozkręć epicką bitwę wodną na kajakach!',
    },
    {
      title: 'FESTIWAL EMOCJI',
      body:
        'Poczuj magię kolorów podczas festiwalu Holi, baw się na nocnej dyskotece i integruj przy wielkim ognisku!',
    },
    {
      title: 'PRZYGODA BEZ SPINY',
      body:
        'Odkrywaj leśne skarby w grach terenowych i poczuj dreszczyk emocji na strzelnicy – Ty decydujesz o tempie zabawy!',
    },
  ],
  aboutClosing: '',
  programSectionTitle: 'Program',
  programHeadline: 'JURAJSKI CHILL & FUN CAMP',
  programAgeLine: 'czyli wakacyjny relaks na maxa! (10–18 lat)',
  programIntro: [
    'Masz dość porannych pobudek, pośpiechu i obowiązków? Na Jurajskim Chill & Fun Camp zwalniamy tempo i włączamy tryb totalnego luzu!',
    'To obóz dla tych, którzy chcą chillować, plażować, bawić się i ładować baterie w najlepszym towarzystwie.',
  ],
  programBullets: [
    {
      title: 'Strefa chillu – tylko relaks, zero presji',
      body:
        'Urokliwe jeziorko z piaszczystą plażą, słońce, woda, hamaki, leżaki i dobra muzyka. Wodne szaleństwa – kajaki, bitwy na wodzie.',
    },
    {
      title: 'Aktywny chill',
      body:
        'Turniej siatkówki plażowej z nagrodami, koszykówka, piłka nożna, mini zawody sportowe, rowerowe wyprawy, spacery po szlakach, gra terenowa ze skarbami. Dla chętnych: strzelanie z broni pneumatycznej.',
    },
  ],
  programFooter: `Poza tym w programie: gry i zabawy integracyjne, mini turnieje zręcznościowe i quizy na świeżym powietrzu, ognisko z muzyką i kiełbaskami, wakacyjna dyskoteka pod gwiazdami, kolorowy festiwal Holi, wieczory tematyczne.`,
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
    'Park Wodny Jura – wodne atrakcje, zjeżdżalnie i pełen relaks (min. 7 osób) – 80 zł',
    'Mirów, Bobolice i Olsztyn – wycieczka z przewodnikiem, zwiedzaniem kompleksu skalnego oraz słodkim finałem: gofry i gorąca czekolada dla każdego! (min. 20 osób) – 185 zł',
    'Całodniowa wycieczka do Ogrodzieńca i Parku Wodnego Jura – zwiedzanie zamku i wodne szaleństwa (min. 7 osób) – 130 zł',
    'Zamek Ogrodzieniec + Park Wodny Jura + Galeria Motoryzacji + degustacja burgera w restauracji „Mały Książę” – połączenie historii, relaksu i motoryzacyjnej pasji – 185 zł',
    'Stacja Grawitacja – Park Trampolin w Częstochowie – największy park trampolin w regionie (min. 8 osób) – 120 zł',
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
  termsSubtitle: 'Jura Chill & Fun Camp',
  termsDisclaimer: 'Uwaga! Ceny mogą ulec zmianie. Przed rezerwacją zapytaj o cenę telefonicznie lub mailowo.',
  terms: [
    {
      dateRange: '07.07 – 16.07.2026',
      durationLabel: '10 dni',
      price: '2599 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-__CHILL_FUN_CAMP_2026_PAX_FB&skrot2=KPOJ0707&klucz=JURA%20-%20%20CHILL%20FUN%20CAMP%202026',
    },
    {
      dateRange: '17.07 – 26.07.2026',
      durationLabel: '10 dni',
      price: '2599 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-__CHILL_FUN_CAMP_2026_PAX_FB&skrot2=KPOJ0717&klucz=JURA%20-%20%20CHILL%20FUN%20CAMP%202026',
    },
    {
      dateRange: '27.07 – 05.08.2026',
      durationLabel: '10 dni',
      price: '2599 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-__CHILL_FUN_CAMP_2026_PAX_FB&skrot2=KPOJ0727&klucz=JURA%20-%20%20CHILL%20FUN%20CAMP%202026',
    },
    {
      dateRange: '06.08 – 15.08.2026',
      durationLabel: '10 dni',
      price: '2599 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-__CHILL_FUN_CAMP_2026_PAX_FB&skrot2=KPOJ0806&klucz=JURA%20-%20%20CHILL%20FUN%20CAMP%202026',
    },
  ],
  reserveHref: 'mailto:biuro@ja-yhymm.pl?subject=Rezerwacja%20%E2%80%93%20Jura%20Chill%20%26%20Fun',
};
