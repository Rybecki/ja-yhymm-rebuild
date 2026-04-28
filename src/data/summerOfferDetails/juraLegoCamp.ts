import type { SummerOfferDetail } from './types';
import { ZLOTY_JELEN_ACCOMMODATION_BLOCK } from './sharedZlotyJelenAccommodation';
import {
  JURA_SUMMER_EQUIPMENT_BLOCKS_FULL,
  JURA_SUMMER_EQUIPMENT_INTRO,
  JURA_SUMMER_EQUIPMENT_SECTION_TITLE,
} from './sharedJuraSummerEquipment';

const G = '/utils/oferta-letnia/jura-lego-camp/gallery';

export const JURA_LEGO_CAMP_DETAIL: SummerOfferDetail = {
  gallery: [{ src: `${G}/lego-2.png`, alt: 'Dziecko z tabletem i robotem z klocków LEGO' }],
  aboutSectionTitle: 'O obozie',
  aboutLeadTitle: 'JURAJSCY MISTRZOWIE LEGO® – ZBUDUJ WŁASNĄ LEGENDĘ!',
  aboutBlocks: [
    {
      title: 'OD RUIN DO KONSTRUKCJI',
      body:
        'Zwiedzaj potężne zamki w Ogrodzieńcu i Mirowie, poznaj ich tajemnice, a potem odtwórz te średniowieczne warownie w skali mikro i makro z klocków LEGO®!',
    },
    {
      title: 'TURNIEJE LEGO MASTERS',
      body:
        'Podejmij inżynierskie wyzwania! Buduj działające katapulty, mosty zwodzone i całe jurajskie miasta, biorąc udział w emocjonujących konkursach z nagrodami.',
    },
    {
      title: 'MISJA: ZAGINIONA KORONA',
      body:
        'Wejdź do gry terenowej pełnej zagadek i tropów. Wykorzystaj logiczne myślenie i współpracę, by odnaleźć skarb króla Kazimierza w samym sercu Jury!',
    },
  ],
  aboutClosing: 'Kreatywność bez granic w świecie klocków i rycerzy! Zostań mistrzem budowania.',
  programSectionTitle: 'Program',
  programHeadline: 'Jura LEGO® Camp',
  programAgeLine: '(8–13 lat)',
  programIntro: [
    'Zapraszamy na niezwykły obóz, który połączy świat fantazji z rzeczywistością! Jurajscy Mistrzowie LEGO® to wyjątkowa letnia przygoda w Złotym Potoku.',
    'Tu odkryjecie tajemnice średniowiecznych zamków, a potem… zbudujecie je z klocków LEGO®! To połączenie kreatywności, historii i niezapomnianej zabawy w jednym z najpiękniejszych zakątków Jury Krakowsko-Częstochowskiej.',
    'Każdy dzień to nowa misja – od odkrywania legend i zwiedzania ruin po tworzenie niezwykłych konstrukcji inspirowanych prawdziwymi zamkami. Uczestnicy nauczą się współpracy, planowania i logicznego myślenia.',
  ],
  programBullets: [
    {
      title: 'LEGO® Strefa Mistrzów',
      body:
        'Budujemy zamki, katapulty, mosty i jurajskie miasta! Warsztaty kreatywne, turnieje budowniczych i konkursy LEGO® Masters z nagrodami.',
    },
    {
      title: 'Zwiedzanie jurajskich warowni',
      body:
        'Ogrodzieniec, Olsztyn, Mirów, Bobolice – historie rycerzy, królów i duchów, a potem przeniesienie ich w świat klocków.',
    },
    {
      title: 'Jurajska gra terenowa',
      body: '„Zaginiona Korona Króla Kazimierza” – tropy, zagadki, przygoda i współpraca.',
    },
    {
      title: 'Warsztaty historii i archeologii',
      body: 'Jak naprawdę wyglądały zamki i ich LEGO® wersje.',
    },
  ],
  programFooter: `A dodatkowo: zabawy ruchowe, jurajska olimpiada, spacery po rezerwacie „Parkowe”, wycieczka do Dworku Krasińskiego, kąpiele słoneczne, ogniska i dyskoteki tematyczne. Wieczorami quizy, kino LEGO®, kalambury i pasowanie na Jurajskiego Mistrza Klocków LEGO®!

Jurajscy Mistrzowie LEGO® – buduj, odkrywaj, baw się! Zbuduj z nami swoją własną jurajską legendę!`,
  optionalSectionTitle: 'Program fakultatywny',
  optionalIntro:
    'Dla tych, którzy chcą przeżyć jeszcze więcej przygód i dodać do swojego obozu odrobinę adrenaliny, przygotowaliśmy bogaty program zajęć fakultatywnych. To idealny sposób, by urozmaicić pobyt na Jurze i odkryć nowe wrażenia od emocji off-roadowych po wodny relaks i zwiedzanie jurajskich zamków!',
  optionalItems: [
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
    'dopłaty za dodatkowe świadczenia w przypadku łączenia turnusów (nocleg, wyżywienie, opieka kadry) – 300 zł,',
    'dopłaty za program fakultatywny,',
    'dopłat do wybranych diet.',
  ],
  practicalSectionTitle: 'Informacje praktyczne',
  practicalParagraphs: [
    'Obóz kierowany jest do dzieci i młodzieży lubiących twórczą zabawę i umiarkowaną aktywność na świeżym powietrzu.',
    'Zajęcia prowadzone są przez wykwalifikowanych instruktorów i wychowawców.',
    'Wszystkie zajęcia będą dopasowane do stanu psychofizycznego uczestników.',
    'Zabierz ze sobą: legitymację szkolną, wypełnioną i podpisaną kartę kwalifikacyjną, odzież i obuwie na pogodę, obuwie zmienne, ręcznik kąpielowy, podpisz bagaż.',
    'Od każdego uczestnika pierwszego dnia pobytu pobierana jest kaucja w wysokości 50 zł na pokrycie ewentualnych strat spowodowanych przez niego w wyposażeniu ośrodka.',
  ],
  equipmentSectionTitle: JURA_SUMMER_EQUIPMENT_SECTION_TITLE,
  equipmentIntro: JURA_SUMMER_EQUIPMENT_INTRO,
  equipmentBlocks: JURA_SUMMER_EQUIPMENT_BLOCKS_FULL,
  termsSectionTitle: 'Terminy i ceny',
  termsSubtitle: 'Jura LEGO® Camp',
  termsDisclaimer: 'Uwaga! Ceny mogą ulec zmianie. Przed rezerwacją zapytaj o cenę telefonicznie lub mailowo.',
  terms: [
    {
      dateRange: '27.07 – 05.08.2026',
      durationLabel: '10 dni',
      price: '2799 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-_LEGO_CAMP_2026_PAX_FB&skrot2=KPOJ0727&klucz=JURA%20-%20LEGO%20CAMP%202026',
    },
    {
      dateRange: '06.08 – 15.08.2026',
      durationLabel: '10 dni',
      price: '2799 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOJ~JURA_-_LEGO_CAMP_2026_PAX_FB&skrot2=KPOJ0806&klucz=JURA%20-%20LEGO%20CAMP%202026',
    },
  ],
  reserveHref: 'mailto:biuro@ja-yhymm.pl?subject=Rezerwacja%20%E2%80%93%20Jura%20LEGO%20Camp',
};
