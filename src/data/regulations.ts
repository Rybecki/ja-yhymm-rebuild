import { RENTAL_REGULATIONS } from './rentalRegulations';

export type Regulation = {
  title: string;
  file: string;
  content?: string[];
  fullText?: string;
};

const GENERAL_REGULATIONS: Regulation[] = [
  {
    title: 'Regulamin gier paintballowych',
    file: '/documents/regulaminy/regulamin-gier-paintballowych.pdf',
    content: [
      'W grze mogą brać udział osoby pełnoletnie oraz osoby poniżej 18 roku życia za pisemną zgodą rodziców/opiekunów prawnych.',
      'Osoby będące pod wpływem alkoholu lub innych środków odurzających nie mogą brać udziału w grze.',
      'Do gry służy tylko sprzęt do paintballa dostarczony przez organizatora.',
      'Strzelanie może odbywać się wyłącznie na wyznaczonym terenie (pole gry).',
      'Każda osoba na polu gry ma obowiązek noszenia maski ochronnej.',
      'Zdjęcie maski podczas gry grozi usunięciem z rozgrywki bez zwrotu opłaty.',
      'Maskę można zdjąć wyłącznie w strefie neutralnej.',
      'Poza polem broń musi być zabezpieczona i skierowana lufą do ziemi.',
      'Minimalna odległość oddania strzału to 6 metrów.',
      'Walka wręcz, atakowanie osób postronnych i zachowania niebezpieczne są zabronione.',
      'Zabrania się samowolnego demontowania i ulepszania broni paintballowej.',
      'Każdy uczestnik przechodzi szkolenie BHP i podpisuje oświadczenie.',
      'Udział w grze odbywa się na własną odpowiedzialność uczestnika.',
      'Nieprzestrzeganie zasad bezpieczeństwa skutkuje usunięciem z gry bez zwrotu kosztów.',
    ],
  },
  {
    title: 'Regulamin korzystania z kajaków i innego sprzętu wodnego',
    file: '/documents/regulaminy/regulamin-sprzetu-wodnego.pdf',
    content: [
      'Każdy korzystający ma obowiązek zapoznania się z regulaminem przed rozpoczęciem użytkowania sprzętu.',
      'Obowiązuje bezwzględny zakaz pływania pod wpływem alkoholu i środków odurzających.',
      'Osoby nieletnie mogą płynąć wyłącznie pod opieką osób pełnoletnich.',
      'Grupy szkolne i młodzieżowe płyną pod nadzorem opiekunów/wychowawców.',
      'Kamizelki asekuracyjne są obowiązkowe i należy ich używać zgodnie z przeznaczeniem.',
      'Wynajem sprzętu nie oznacza organizacji spływu przez Fundację - uczestnicy płyną na własną odpowiedzialność.',
      'Wynajmujący odpowiada za wypożyczony sprzęt oraz szkody wynikające z jego użycia.',
      'Za zgubienie lub trwałe zniszczenie sprzętu naliczana jest wartość rynkowa (z uwzględnieniem amortyzacji).',
      'Zwrot sprzętu następuje w ustalonym miejscu i czasie, w stanie umożliwiającym dalsze użytkowanie.',
      'Fundacja nie odpowiada za wypadki, utratę zdrowia, śmierć oraz straty materialne uczestników.',
      'Zabrania się m.in. podnajmu sprzętu, przekraczania ładowności, pływania w miejscach niedozwolonych i korzystania bez kamizelki.',
    ],
  },
  {
    title: 'Regulamin korzystania z quadów',
    file: '/documents/regulaminy/regulamin-quady.pdf',
    content: [
      'Quadem mogą poruszać się maksymalnie dwie osoby: kierowca i pasażer.',
      'Przed jazdą należy sprawdzić pojazd zgodnie z check-listą.',
      'Prędkość jazdy musi być dostosowana do warunków terenu, pogody i umiejętności kierowcy.',
      'Zabroniona jest jazda na dwóch kołach, podrywanie pojazdu i ryzykowne manewry.',
      'Obowiązuje zakaz jazdy poza wyznaczonym torem oraz zakaz samowolnej zmiany szyku.',
      'Kask ochronny i odpowiednie obuwie są obowiązkowe.',
      'W czasie jazdy ręce pozostają na kierownicy, a nogi na podłodze pojazdu.',
      'Użytkownicy bezwzględnie stosują się do poleceń osoby prowadzącej zajęcia.',
      'W przypadku naruszenia zasad instruktor może przerwać jazdę i odebrać pojazd.',
      'Osoby pod wpływem alkoholu lub środków odurzających nie mogą brać udziału w jeździe.',
    ],
  },
  {
    title: 'Regulamin korzystania ze ścianki wspinaczkowej',
    file: '/documents/regulaminy/regulamin-scianka-wspinaczkowa.pdf',
    content: [
      'Przed wejściem na ściankę należy zapoznać się z regulaminem i stosować do poleceń personelu.',
      'Wstęp odbywa się na własną odpowiedzialność (za osoby niepełnoletnie odpowiada opiekun prawny).',
      'Obowiązkowe jest szkolenie prowadzone przez personel przed rozpoczęciem wspinaczki.',
      'Na każdej drodze wspinaczkowej wymagana jest wykwalifikowana asekuracja.',
      'Obowiązuje limit wagowy do 100 kg i minimalny wiek 5 lat.',
      'Zakazane jest poruszanie się po ściance bez sprzętu asekuracyjnego.',
      'Instruktor może odmówić udziału osobie pod wpływem alkoholu/środków odurzających.',
      'Po szkoleniu i rozpoczęciu zajęć rezygnacja nie uprawnia do zwrotu kosztów.',
      'W razie złych warunków pogodowych zajęcia mogą zostać przerwane.',
      'Osoby łamiące regulamin mogą zostać wyproszone bez zwrotu opłaty.',
    ],
  },
  {
    title: 'Regulamin wypoczynku dzieci i młodzieży',
    file: '/documents/regulaminy/regulamin-wypoczynku-dzieci-i-mlodziezy.pdf',
    content: [
      'Nadrzędnym celem jest bezpieczny i wartościowy wypoczynek uczestników.',
      'Uczestnik zobowiązuje się wykonywać polecenia kadry i brać aktywny udział w zajęciach.',
      'Obowiązuje całkowity zakaz alkoholu, tytoniu, narkotyków i środków psychoaktywnych (w tym e-papierosów).',
      'Uczestnik stosuje się do regulaminów obiektu, zasad ruchu, ppoż. i ciszy nocnej.',
      'Bez zgody kadry nie wolno oddalać się z terenu zakwaterowania i zajęć.',
      'Cisza nocna obowiązuje co do zasady od 22:00 do 7:00.',
      'Podczas zajęć telefony i wartościowe rzeczy mogą być zdeponowane u wychowawcy.',
      'Organizator nie odpowiada za rzeczy zgubione, jeśli nie zostały oddane do depozytu.',
      'Rodzice/opiekunowie odpowiadają materialnie za szkody wyrządzone przez uczestnika.',
      'Poważne naruszenia regulaminu mogą skutkować wydaleniem z obozu bez zwrotu kosztów.',
      'Koszty transportu i opieki przy wcześniejszym odbiorze uczestnika ponoszą rodzice/opiekunowie.',
    ],
  },
];

const RENTAL_REGULATION_ENTRIES: Regulation[] = RENTAL_REGULATIONS.map((regulation) => ({
  title: regulation.title,
  file: regulation.file,
  fullText: regulation.fullText,
}));

export const ALL_REGULATIONS: Regulation[] = [...GENERAL_REGULATIONS, ...RENTAL_REGULATION_ENTRIES];
