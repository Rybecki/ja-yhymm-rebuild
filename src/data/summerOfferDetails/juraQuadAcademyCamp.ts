import type { SummerOfferDetail } from './types';
import { ZLOTY_JELEN_ACCOMMODATION_BLOCK } from './sharedZlotyJelenAccommodation';
import {
  JURA_SUMMER_EQUIPMENT_BLOCKS_FULL,
  JURA_SUMMER_EQUIPMENT_INTRO,
  JURA_SUMMER_EQUIPMENT_SECTION_TITLE,
} from './sharedJuraSummerEquipment';

const G = '/utils/oferta-letnia/jura-quad-academy-camp/gallery';

export const JURA_QUAD_ACADEMY_CAMP_DETAIL: SummerOfferDetail = {
  gallery: [
    { src: `${G}/academy-2.png`, alt: 'Jazda quadem po jurajskim piasku — dwójka riderów na quadach' },
    { src: `${G}/academy-3.png`, alt: 'Grupa młodzieży z quadami pod namiotem w lesie' },
    { src: `${G}/academy-4.png`, alt: 'Kolumna quadów i uczestników przed wyjazdem w teren' },
  ],
  youtubeVideoId: 'vcfExvLt-Jk',
  aboutSectionTitle: 'O obozie',
  aboutLeadTitle: 'JURAJSKA AKADEMIA QUADA 2026 – TWOJE 21 GODZIN TOTALNEJ JAZDY!',
  aboutBlocks: [
    {
      title: 'PROFESJONALNY TRENING TECHNICZNY',
      body:
        'Zapomnij o zwykłych przejażdżkach! Czeka Cię intensywne szkolenie z balansu ciałem, pokonywania trawersów i stromych podjazdów. Opanujesz obsługę wyciągarki i dowiesz się, jak technicznie wykorzystać pełną moc maszyny w ekstremalnych warunkach.',
    },
    {
      title: 'WYPRAWA Z GPS',
      body:
        'Poczuj prawdziwą wolność podczas całodniowej wyprawy przez jurajskie bezdroża. Nauczysz się nawigacji na systemach Garmin, by pewnie prowadzić grupę przez piachy, kamienie i leśne odcinki.',
    },
    {
      title: 'PEŁNE DOŚWIADCZENIE OFF-ROAD',
      body:
        'To więcej niż jazda – to styl życia. Poznasz mechanikę pojazdu w praktyce, nauczysz się pierwszej pomocy w terenie i przeżyjesz niezapomniany biwak z noclegiem survivalowym, budując klimat prawdziwej motoryzacyjnej ekipy.',
    },
  ],
  aboutClosing: 'Moc, technika i 10 dni w samym centrum jurajskiego raju dla riderów!',
  programSectionTitle: 'Program',
  programHeadline: 'QUAD ACADEMY CAMP – JURAJSKA AKADEMIA QUADA',
  programAgeLine: '(14–18 lat)',
  programIntro: [
    'Zapraszamy na szkoleniowy obóz jazdy terenowej na quadach i jednocześnie niezapomnianą przygodę w sercu Jury Krakowsko-Częstochowskiej.',
    'Nasz obóz to połączenie intensywnego szkolenia jazdy na quadach z aktywną turystyką terenową, survivalem i atrakcjami charakterystycznymi dla tego niezwykłego zakątka Polski.',
    'W programie szkoleniowym przewidzianych jest aż 21 godzin jazd (plac i teren)! Dodatkowo – 10 godzin warsztatów i zajęć terenowych. Działamy w kameralnych grupach: 6–12 uczestników. Adrenalina, prędkość, emocje – gwarantowane!',
  ],
  programBullets: [
    {
      title: 'Szkolenie na placu manewrowym (dla początkujących)',
      body:
        'Podstawy obsługi quada i techniki jazdy, pozycja na quadzie, podjazdy, zjazdy, trawersy, balans ciałem i jazda w parach, podstawy mechaniki i eksploatacji pojazdu, korzystanie z wyciągarki.',
    },
    {
      title: 'Szkolenie terenowe',
      body:
        'Jazda po jurajskich bezdrożach oraz specjalistycznych torach, techniki jazdy w piachu i na kamieniach, orientacja w terenie i jazda wg wskazań GPS.',
    },
    {
      title: 'Rajd terenowy z noclegiem survivalowym',
      body:
        'Całodniowy przejazd po jurajskich trasach, trekking z elementami wspinaczki skałkowej, nocleg w terenie z nauką rozpalania ognia i przygotowania posiłku.',
    },
    {
      title: 'Warsztaty i zajęcia dodatkowe',
      body:
        'Z nawigacji GPS (Garmin, aplikacje mobilne, kompas), topografii Jury i orientacji w terenie, pierwszej pomocy w warunkach terenowych i survivalu – budowa schronienia i podstawy biwakowania.',
    },
  ],
  programFooter: `A poza tym – chwila relaksu i wytchnienia:

gry i zabawy integracyjne, wieczory tematyczne i filmowe, quizy, rozgrywki sportowe na wesoło, wieczorne ogniska, relaks nad wodą, plażowanie, dyskoteka i turniej Just Dance.`,
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
    'dopłaty za dodatkowe świadczenia w przypadku łączenia turnusów (nocleg, wyżywienie, opieka kadry) – 300 zł,',
    'dopłaty za program fakultatywny,',
    'dopłat do wybranych diet.',
  ],
  practicalSectionTitle: 'Informacje praktyczne',
  practicalParagraphs: [
    'Zajęcia prowadzone są przez wykwalifikowanych instruktorów, instruktorów off-roadu i ratowników.',
    'Wszystkie zajęcia będą dopasowane do stanu psychofizycznego uczestników.',
    'Zabierz ze sobą: legitymację szkolną, wypełnioną i podpisaną kartę kwalifikacyjną, odzież i obuwie odpowiednie do planowanych aktywności, obuwie zmienne, ręcznik kąpielowy, 2 pary rękawic do jazdy quadem, podpisz bagaż.',
    'Mile widziane: własny kask, zbroja („żółw”), buty motocrossowe lub buty za kostkę i gogle.',
    'Zapewniamy cały sprzęt, pojazdy i zabezpieczenia dla osób, które nie mają własnego wyposażenia.',
    'Od każdego uczestnika pierwszego dnia pobytu pobierana jest kaucja w wysokości 50 zł na pokrycie ewentualnych strat spowodowanych przez niego w wyposażeniu ośrodka.',
    'Weryfikację umiejętności dokonają instruktorzy na miejscu.',
    'WYMAGANE WYPOSAŻENIE: quad z napędem 4×4 – możliwość wypożyczenia u organizatora (1500 zł/turnus) – płatne na miejscu; kask z osłoną szczęki, zbroja ochronna, rękawice, buty crossowe/trekkingowe; telefon z aplikacjami GPS i wolną pamięcią.',
  ],
  equipmentSectionTitle: JURA_SUMMER_EQUIPMENT_SECTION_TITLE,
  equipmentIntro: JURA_SUMMER_EQUIPMENT_INTRO,
  equipmentBlocks: JURA_SUMMER_EQUIPMENT_BLOCKS_FULL,
  termsSectionTitle: 'Terminy i ceny',
  termsSubtitle: 'Jura Quad Academy Camp',
  termsDisclaimer: 'Uwaga! Ceny mogą ulec zmianie. Przed rezerwacją zapytaj o cenę telefonicznie lub mailowo.',
  terms: [
    {
      dateRange: '07.07 – 16.07.2026',
      durationLabel: '10 dni',
      price: '4499 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-_QUAD_ACADEMY_CAMP_2026_PAX_FB&skrot2=KPOJ0707&klucz=JURA%20-%20QUAD%20ACADEMY%20CAMP%202026',
    },
    {
      dateRange: '17.07 – 26.07.2026',
      durationLabel: '10 dni',
      price: '4499 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-_QUAD_ACADEMY_CAMP_2026_PAX_FB&skrot2=KPOJ0717&klucz=JURA%20-%20QUAD%20ACADEMY%20CAMP%202026',
    },
  ],
  reserveHref:
    'mailto:biuro@ja-yhymm.pl?subject=Rezerwacja%20%E2%80%93%20Jura%20Quad%20Academy%20Camp',
};
