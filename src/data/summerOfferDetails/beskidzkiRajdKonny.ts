import type { SummerOfferDetail } from './types';
import { BESKID_HUCUL_ACCOMMODATION_BLOCK } from './sharedBeskidHuculAccommodation';
import { BRENNA_HORSE_EQUIPMENT_BLOCKS, BRENNA_HORSE_EQUIPMENT_INTRO } from './sharedBrennaHorseEquipment';

const G = '/utils/oferta-letnia/beskidzki-rajd-konny/gallery';

export const BESKIDZKI_RAJD_KONNY_DETAIL: SummerOfferDetail = {
  heroBackgroundPosition: 'center 6%',
  heroImage: {
    src: `${G}/rajd-3.png`,
    alt: 'Chłopiec na koniu w siodle — Beskidzki rajd konny',
  },
  /** Zawsze 4 zdjęcia w galerii. */
  gallery: [
    { src: `${G}/raid-2.png`, alt: 'Zajęcia na ujeżdżalni — młodzi jeźdźcy w kolejce za instruktorką' },
    { src: `${G}/rajd-2.png`, alt: 'Jazda konna w terenie — uczestnicy na rajdzie beskidzkim' },
    {
      src: `${G}/rajd-3.png`,
      alt: 'Chłopiec na koniu w siodle — Beskidzki rajd konny',
    },
    {
      src: `${G}/rajd-4.png`,
      alt: 'Jazda konna pod niebem — młody jeździec na koniu pinto',
    },
  ],
  aboutSectionTitle: 'O obozie',
  aboutLeadTitle: 'Beskidzki rajd konny',
  aboutBlocks: [
    {
      title: 'Ośrodek „Hucuł”',
      body:
        'Ośrodek Wypoczynkowy „Hucuł” znajduje się w Beskidach, w malowniczej miejscowości Brenna. To idealne miejsce dla miłośników gór, jazdy konnej i przygód na świeżym powietrzu.',
    },
    {
      title: 'Stadnina i okolica',
      body:
        'Stadnina koni rasy huculskiej, znanej z łagodnego usposobienia. Możliwość jazdy zarówno dla początkujących, jak i zaawansowanych jeźdźców. Dolina potoku Jatny otoczona lasami i górskimi szczytami.',
    },
    {
      title: 'Dlaczego warto?',
      body:
        'Połączenie jazdy konnej z górskimi wędrówkami, odkrywanie Beskidów i przyjazna atmosfera ośrodka. Przygotuj się na wakacje pełne emocji!',
    },
  ],
  aboutClosing: '',
  programSectionTitle: 'Program',
  programHeadline: 'Rajd konny',
  programAgeLine: '(12–17 lat)',
  programIntro: [
    'Jeśli lubisz wyjazdy w teren, czujesz się w siodle i potrafisz samodzielnie galopować – ten obóz jest dla Ciebie.',
  ],
  programBullets: [
    {
      title: 'W siodle',
      body:
        '15 godzin w siodle: 5 na ujeżdżalni i 10 w terenie. Przemierzysz fragmenty „Beskidzkiego Szlaku Konnego”, postaramy się zdobyć konno Błatnią i Klimczok, wyruszymy też w kierunku Trzech Kopców Wiślańskich. Jak przygotować konia do wyprawy i na co uważać w terenie – podczas rajdów czas na tradycyjny popas dla konia i jeźdźca.',
    },
    {
      title: 'Stajnia i przyroda',
      body:
        'Wachty w stajni – życie koni z bliska. Wyjście do obserwatorium nietoperzy.',
    },
  ],
  programFooter: `A poza tym: dużo gier i zabaw – stacjonarnie i terenowo, bilard, ognisko, dyskoteki, quizy, konkursy, turnieje. Zapraszamy do programu fakultatywnego.

* Umiejętności jeździeckie uczestników będą weryfikowane przez instruktorów w pierwszym dniu zajęć. Jeżeli nie będą one gwarantować bezpiecznego udziału w rajdzie – zaproponujemy udział w zmodyfikowanych zajęciach z grupą jeździecką w ośrodku.`,
  optionalSectionTitle: 'Program fakultatywny',
  optionalIntro: '',
  optionalItems: [
    'Wycieczka na krytą pływalnię Delfin do Skoczowa – przejazd busem, wodne szaleństwo na basenach ze zjeżdżalnią, gejzerami, biczami wodnymi – realizowana przy min. 8 osobach. Cena 150 zł.',
    'Wycieczka do Energylandii – przejazd busem, wstęp do największego parku rozrywki w Polsce (dostępność stref zależnie od wieku i wzrostu) – realizowana przy min. 15 osobach. Cena 350 zł.',
  ],
  accommodationSectionTitle: 'Zakwaterowanie',
  accommodationParagraphs: [],
  accommodationImages: [],
  accommodationBlocks: [BESKID_HUCUL_ACCOMMODATION_BLOCK],
  priceIncludesTitle: 'Cena zawiera',
  priceIncludes: [
    'Zakwaterowanie: 9 noclegów.',
    'Wyżywienie: całodzienne (3 posiłki i deser) w jadalni ośrodka. Śniadania i kolacje w formie bufetu, obiad serwowany. Pierwszy posiłek: kolacja w dniu przyjazdu. Ostatni posiłek: śniadanie w dniu wyjazdu oraz prowiant na drogę powrotną.',
    'Dopłata do diety: wegetariańskiej / bezglutenowej / bezlaktozowej – 200 zł.',
    'Transport: autokar turystyczny.',
    'Ubezpieczenie: Signal Iduna Polska TU S.A.: NNW 15 000 zł.',
    'Obowiązkowe składki na Turystyczny Fundusz Gwarancyjny i Turystyczny Fundusz Pomocowy – 4 zł.',
    'Opieka pedagogiczna i instruktorska.',
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
    'Kolejność zajęć ustali kadra obozu w zależności od pogody i predyspozycji psychofizycznych uczestników.',
    'Prosimy pamiętać o wypełnionej i wydrukowanej karcie kwalifikacyjnej, legitymacji szkolnej oraz o podpisaniu bagażu.',
    'Zabierz ze sobą: ręcznik kąpielowy, mały plecak na wycieczki, ciepły sweter lub polar, dres, kurtkę przeciwdeszczową, nakrycie głowy, buty sportowe i obuwie za kostkę do górskich spacerów, preparat na komary, krem z filtrem UV.',
    'Planowany dojazd do ośrodka autokarem ok. godz. 17:45, planowany wyjazd z ośrodka o godz. 09:45.',
    'Dojazd własny: zapraszamy na godzinę 18:00, wyjazd nie później niż o godz. 09:00.',
  ],
  equipmentSectionTitle: 'O koniach i sprzęcie',
  equipmentIntro: BRENNA_HORSE_EQUIPMENT_INTRO,
  equipmentBlocks: BRENNA_HORSE_EQUIPMENT_BLOCKS,
  termsSectionTitle: 'Terminy i ceny',
  termsSubtitle: 'Beskidzki rajd konny',
  termsDisclaimer: 'Uwaga! Ceny mogą ulec zmianie. Przed rezerwacją zapytaj o cenę telefonicznie lub mailowo.',
  terms: [
    {
      dateRange: '27.06 – 06.07.2026',
      durationLabel: '10 dni',
      price: '3299 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOB~BRENNA_-_RAJD_KONNY_2026_PAX_FB&skrot2=KPOB0627&klucz=BRENNA%20-%20RAJD%20KONNY%202026',
    },
    {
      dateRange: '07.07 – 16.07.2026',
      durationLabel: '10 dni',
      price: '3299 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOB~BRENNA_-_RAJD_KONNY_2026_PAX_FB&skrot2=KPOB0707&klucz=BRENNA%20-%20RAJD%20KONNY%202026',
    },
    {
      dateRange: '17.07 – 26.07.2026',
      durationLabel: '10 dni',
      price: '3299 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOB~BRENNA_-_RAJD_KONNY_2026_PAX_FB&skrot2=KPOB0717&klucz=BRENNA%20-%20RAJD%20KONNY%202026',
    },
    {
      dateRange: '27.07 – 05.08.2026',
      durationLabel: '10 dni',
      price: '3299 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOB~BRENNA_-_RAJD_KONNY_2026_PAX_FB&skrot2=KPOB0727&klucz=BRENNA%20-%20RAJD%20KONNY%202026',
    },
    {
      dateRange: '06.08 – 15.08.2026',
      durationLabel: '10 dni',
      price: '3299 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOB~BRENNA_-_RAJD_KONNY_2026_PAX_FB&skrot2=KPOB0806&klucz=BRENNA%20-%20RAJD%20KONNY%202026',
    },
    {
      dateRange: '16.08 – 25.08.2026',
      durationLabel: '10 dni',
      price: '3299 zł',
      planUrl:
        'https://www.almatur.pl/rozklad_ajax.php?sezon=lato&skrot=KPOB~BRENNA_-_RAJD_KONNY_2026_PAX_FB&skrot2=KPOB0816&klucz=BRENNA%20-%20RAJD%20KONNY%202026',
    },
  ],
  reserveHref: 'mailto:biuro@ja-yhymm.pl?subject=Rezerwacja%20%E2%80%93%20Beskidzki%20rajd%20konny',
};
