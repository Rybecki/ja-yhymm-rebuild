import type { SummerOfferEquipmentBlock } from './types';

export const JURA_SUMMER_EQUIPMENT_SECTION_TITLE = 'NASZ SPRZĘT: JAKOŚĆ, KTÓRA ROBI RÓŻNICĘ';

export const JURA_SUMMER_EQUIPMENT_INTRO =
  'Podczas naszych obozów nie uznajemy półśrodków. Korzystamy wyłącznie z markowego wyposażenia, które gwarantuje 100% bezpieczeństwa i maksymalne osiągi w terenie. Z nami trenujesz na profesjonalnym sprzęcie, na jakim pracują zawodowcy!';

const OFFROAD_PIT_PAINT_ALP_WATER: SummerOfferEquipmentBlock[] = [
  {
    title: 'OFF-ROAD & MOC',
    body:
      'Prowadzisz legendarne maszyny! Flota quadów to m.in. Arctic Cat 650, 700, Yamaha Grizzly 660, Honda TRX 500, Kymco KXR 250. Do tego terenówki Jeep Cherokee, Nissan Terrano oraz unikalna, wojskowa bestia Kraz 255B 6×6, która przejedzie przez wszystko.',
  },
  {
    title: 'PIT-BIKE',
    body: 'Zwinne minikrosy MRF 120 oraz X-Motos 125 – idealne do nauki dynamicznej jazdy w terenie.',
  },
  {
    title: 'PAINTBALL & STRZELECTWO',
    body:
      'Niezawodne markery Tippmann i BT oraz profesjonalne maski termiczne (Empire, Valken), które nie parują w ferworze walki. Na strzelnicy czekają wiatrówki, łuki i karabinki ASG.',
  },
  {
    title: 'ALPINISTYKA & WSPINACZKA',
    body:
      'Korzystamy z atestowanego sprzętu światowych liderów: Petzl, Mammut, Camp. Posiadamy własną mobilną ściankę wspinaczkową z 4 trasami o różnym stopniu trudności.',
  },
  {
    title: 'WODA',
    body:
      'Wytrzymałe kajaki polietylenowe – stabilne, bezpieczne, gotowe na każdą przygodę, wyposażone w kamizelki asekuracyjne i wiosła.',
  },
];


export const JURA_SUMMER_EQUIPMENT_BLOCKS_FULL: SummerOfferEquipmentBlock[] = [
  ...OFFROAD_PIT_PAINT_ALP_WATER,
  {
    title: 'INFRASTRUKTURA & TRANSPORT',
    body:
      'Własna baza z komfortowymi namiotami wojskowymi, poligonem paintballowym, torem off-road i parkiem linowym. Dzięki autolawetom i busom jesteśmy w pełni mobilni i niezależni.',
  },
];


export const JURA_SUMMER_EQUIPMENT_BLOCKS_KIDS: SummerOfferEquipmentBlock[] = [
  ...OFFROAD_PIT_PAINT_ALP_WATER,
  {
    title: 'INFRASTRUKTURA & TRANSPORT',
    body:
      'Własna baza z poligonem paintballowym, torem off-road i parkiem linowym. Dzięki autolawetom i busom jesteśmy w pełni mobilni i niezależni.',
  },
];
