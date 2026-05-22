export type PrivacyContentBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'sublist'; title: string; items: string[] };

export type PrivacyPolicySection = {
  roman: string;
  title: string;
  blocks: PrivacyContentBlock[];
};

export const PRIVACY_POLICY_INTRO = [
  'Dla Właściciela niniejszej strony internetowej ochrona danych osobowych Użytkowników jest sprawą najwyższej wagi. Dokłada on ogrom starań, aby Użytkownicy czuli się bezpiecznie, powierzając swoje dane osobowe w trakcie korzystania ze strony internetowej.',
  'Użytkownik to osoba fizyczna, osoba prawna albo jednostka organizacyjna, nieposiadająca osobowości prawnej, której ustawa przyznaje zdolność prawną, korzystająca z usług elektronicznych dostępnych w ramach strony internetowej.',
  'Niniejsza polityka prywatności wyjaśnia zasady i zakres przetwarzania danych osobowych Użytkownika, przysługujące mu prawa, jak też obowiązki administratora tych danych, a także informuje o używaniu plików cookies.',
  'Administrator stosuje najnowocześniejsze środki techniczne i rozwiązania organizacyjne, zapewniające wysoki poziom ochrony przetwarzanych danych osobowych oraz zabezpieczenia przed dostępem osób nieupoważnionych.',
] as const;

export const PRIVACY_POLICY_SECTIONS: PrivacyPolicySection[] = [
  {
    roman: 'I',
    title: 'ADMINISTRATOR DANYCH OSOBOWYCH',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Administratorem danych osobowych jest FUNDACJA JA YHYMM…INTEGRACJA, SPORT, TURYSTYKA, WYPOCZYNEK z siedzibą przy: ul. NIWNA 9/— 40-406 KATOWICE ŚLĄSKIE, wpisany do rejestru przedsiębiorców prowadzonego przez Sąd Rejonowy Katowice-Wschód w Katowicach, Wydział VIII Gospodarczy, pod numerem KRS: 0000597760, NIP: 9542761993 (zwany dalej: „Właściciel”).',
      },
      {
        kind: 'paragraph',
        text: 'Inspektorem ochrony danych jest Andrzej Wiśniewski, adres e-mail: biuro@ja-yhymm.pl (zwany dalej: „IOD”).',
      },
    ],
  },
  {
    roman: 'II',
    title: 'CEL PRZETWARZANIA DANYCH OSOBOWYCH',
    blocks: [
      { kind: 'paragraph', text: 'Administrator przetwarza dane osobowe Użytkownika w celu:' },
      {
        kind: 'list',
        items: [
          'dostarczania ofert oraz usług Użytkownikom, w tym treści dopasowanych do ich zainteresowań,',
          'wykonania umowy zawartej z podmiotem zlecającym organizację imprezy lub osobą, która zawarła umowę o usługę na rzecz uczestnika,',
          'prowadzenia pomiaru i ulepszania treści oraz usług,',
          'możliwości kontaktu z uczestnikiem imprezy w celu zapewnienia prawidłowego przebiegu imprezy,',
          'umieszczenia na liście uczestników imprezy, transportu, imprez fakultatywnych,',
          'rozpatrzenia ewentualnych reklamacji,',
          'możliwości przedstawienia historii uczestnictwa w imprezach turystycznych, na życzenie osoby, której dane dotyczą,',
          'informowania o treściach i usługach FUNDACJA JA YHYMM…Integracja, Sport, Turystyka, Wypoczynek oraz treściach i usługach innych firm współpracujących z FUNDACJA JA YHYMM…Integracja, Sport, Turystyka, Wypoczynek,',
          'udostępniania w Serwisach przestrzeni reklamowej,',
          'prowadzenia marketingu bezpośredniego, wysyłania bezpłatnego newslettera z informacjami dotyczącymi FUNDACJA JA YHYMM…Integracja, Sport, Turystyka, Wypoczynek, o ile Użytkownik uprzednio wyraził zgodę na otrzymywanie korespondencji promocyjnej o FUNDACJA JA YHYMM…Integracja, Sport, Turystyka, Wypoczynek,',
          'zapewnienia bezpieczeństwa przetwarzania informacji w FUNDACJA JA YHYMM…Integracja, Sport, Turystyka, Wypoczynek,',
          'zarządzania systemami teleinformatycznymi,',
          'dochodzenia roszczeń.',
        ],
      },
      {
        kind: 'sublist',
        title: 'Pani/Pana dane będą ujawniane następującym kategoriom odbiorców:',
        items: [
          'upoważnionym i przeszkolonym osobom przetwarzającym dane,',
          'podmiotom przetwarzającym na podstawie umów powierzenia przetwarzania zawartych na piśmie,',
          'towarzystwu ubezpieczeniowemu wystawiającemu polisę ubezpieczenia,',
          'podmiotom udzielającym świadczeń finansowanych z polisy ubezpieczenia.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Dane będą przechowywane nie dłużej niż 1 rok po zakończeniu okresu obowiązkowego przechowywania dokumentacji księgowo-podatkowej określonego w przepisach. Ma Pani/Pan prawo do żądania od administratora dostępu do danych osobowych dotyczących Pani/Pana osoby, żądania ich sprostowania, usunięcia, ograniczenia ich przetwarzania, prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.',
      },
      {
        kind: 'paragraph',
        text: 'Ponadto, na podstawie art. 21 ust. 1 RODO, ma Pani/Pan prawo do wniesienia w dowolnym momencie sprzeciwu — z przyczyn związanych z Pani/Pana szczególną sytuacją — wobec przetwarzania Pani/Pana danych opartego na art. 6 ust. 1 lit. f) RODO.',
      },
      { kind: 'paragraph', text: 'Oznacza to, że dane te są potrzebne w szczególności do:' },
      {
        kind: 'list',
        items: [
          'zawarcia umowy;',
          'dokonania rozliczeń;',
          'dostarczenia zamówionego przez Użytkownika towaru lub wykonania usług;',
          'korzystania przez Użytkownika z wszelkich uprawnień konsumenckich (np. odstąpienie od umowy, rękojmia);',
          'przyjmowania zamówień, obsługi zleceń, rozpatrywania reklamacji.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Użytkownik może również wyrazić zgodę na otrzymywanie informacji o nowościach i promocjach, co spowoduje, że administrator będzie również przetwarzać dane osobowe w celu przesyłania Użytkownikowi informacji handlowych, dotyczących m.in. nowych produktów lub usług, promocji czy wyprzedaży.',
      },
      {
        kind: 'paragraph',
        text: 'Dane osobowe są również przetwarzane w ramach wypełnienia prawnych obowiązków ciążących na administratorze danych oraz realizacji zadań w interesie publicznym, m.in. do wykonywania zadań związanych z bezpieczeństwem i obronnością lub przechowywaniem dokumentacji podatkowej.',
      },
      {
        kind: 'paragraph',
        text: 'Dane osobowe mogą być również przetwarzane w celach marketingu bezpośredniego produktów, zabezpieczenia i dochodzenia roszczeń lub ochrony przed roszczeniami Użytkownika lub osoby trzeciej, jak również marketingu usług i produktów podmiotów trzecich lub marketingu własnego, niebędącego marketingiem bezpośrednim.',
      },
    ],
  },
  {
    roman: 'III',
    title: 'RODZAJ DANYCH',
    blocks: [
      { kind: 'paragraph', text: 'Administrator przetwarza następujące dane osobowe, których podanie jest niezbędne do:' },
      {
        kind: 'sublist',
        title: 'a) dokonywania zakupów za pomocą strony internetowej:',
        items: ['imię i nazwisko;', 'płeć;', 'adres dostawy;', 'numer telefonu;', 'adres e-mail;', 'PESEL;'],
      },
      {
        kind: 'sublist',
        title: 'b) dane podawane przez Użytkownika opcjonalnie:',
        items: ['data urodzenia;', 'numer NIP (w przypadku żądania wystawienia faktury dla przedsiębiorcy).'],
      },
      {
        kind: 'paragraph',
        text: 'W przypadku odstąpienia od umowy bądź uznania reklamacji, gdy zwrot należności następuje bezpośrednio na rachunek bankowy Użytkownika, w celu dokonania zwrotu należności przetwarzamy również informacje dotyczące numeru rachunku bankowego.',
      },
    ],
  },
  {
    roman: 'IV',
    title: 'PODSTAWA PRAWNA PRZETWARZANIA DANYCH OSOBOWYCH',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Dane osobowe są przetwarzane zgodnie z przepisami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych), OJ L 119, 4.5.2016, p. 1–88, dalej zwane: „rozporządzenie RODO”.',
      },
      {
        kind: 'paragraph',
        text: 'Administrator przetwarza dane osobowe wyłącznie po uprzednim uzyskaniu zgody Użytkownika w chwili potwierdzenia dokonanej na stronie internetowej transakcji.',
      },
      {
        kind: 'paragraph',
        text: 'Wyrażenie zgody na przetwarzanie danych osobowych jest całkowicie dobrowolne, jednakże brak jej udzielenia uniemożliwia dokonywanie zakupów za pośrednictwem strony internetowej.',
      },
    ],
  },
  {
    roman: 'V',
    title: 'PRAWA PRZYSŁUGUJĄCE UŻYTKOWNIKOWI',
    blocks: [
      {
        kind: 'list',
        items: [
          'Użytkownik może w każdej chwili zażądać od administratora informacji o zakresie przetwarzania danych osobowych.',
          'Użytkownik może w każdej chwili zażądać poprawienia bądź sprostowania swoich danych osobowych.',
          'Użytkownik może w każdej chwili wycofać swoją zgodę na przetwarzanie jego danych osobowych, bez podawania przyczyny. Żądanie nieprzetwarzania danych może dotyczyć wskazanego przez Użytkownika konkretnego celu przetwarzania, np. wycofanie zgody na otrzymywanie informacji handlowych, bądź dotyczyć wszystkich celów przetwarzania danych. Wycofanie zgody co do wszystkich celów przetwarzania spowoduje, że konto Użytkownika zostanie usunięte ze strony internetowej wraz ze wszystkimi wcześniej przetwarzanymi przez administratora danymi osobowymi Użytkownika. Wycofanie zgody nie wpłynie na już dokonane czynności.',
          'Użytkownik może w każdej chwili żądać, bez podawania przyczyny, aby administrator usunął jego dane. Żądanie usunięcia danych nie wpłynie na dotychczas dokonane czynności. Usunięcie danych oznacza jednoczesne usunięcie konta Użytkownika wraz ze wszystkimi zapisanymi i przetwarzanymi do tej pory przez administratora danymi osobowymi.',
          'Użytkownik może w każdej chwili wyrazić sprzeciw przeciwko przetwarzaniu danych osobowych, zarówno w zakresie wszystkich przetwarzanych przez administratora danych osobowych Użytkownika, jak również jedynie w ograniczonym zakresie, np. co do przetwarzania danych w konkretnie wskazanym celu. Sprzeciw nie wpłynie na dotychczas dokonane czynności. Wniesienie sprzeciwu spowoduje usunięcie konta Użytkownika wraz ze wszystkimi zapisanymi i przetwarzanymi do tej pory przez administratora danymi osobowymi.',
          'Użytkownik może zażądać ograniczenia przetwarzania danych osobowych, czy to przez określony czas, czy też bez ograniczenia czasowego, ale w określonym zakresie, co administrator będzie obowiązany spełnić. Żądanie to nie wpłynie na dotychczas dokonane czynności.',
          'Użytkownik może zażądać, aby administrator przekazał innemu podmiotowi przetwarzane dane osobowe Użytkownika. Powinien w tym celu napisać prośbę do administratora, wskazując, jakiemu podmiotowi (nazwa, adres) należy przekazać dane osobowe Użytkownika oraz jakie konkretnie dane Użytkownik życzy sobie, żeby administrator przekazał. Po potwierdzeniu przez Użytkownika swojego życzenia administrator przekaże w formie elektronicznej wskazanemu podmiotowi dane osobowe Użytkownika. Potwierdzenie przez Użytkownika żądania jest niezbędne z uwagi na bezpieczeństwo danych osobowych Użytkownika oraz uzyskanie pewności, że żądanie pochodzi od osoby uprawnionej.',
          'Administrator informuje Użytkownika o podjętych działaniach przed upływem miesiąca od otrzymania jednego z żądań wymienionych w poprzednich punktach.',
        ],
      },
    ],
  },
  {
    roman: 'VI',
    title: 'OKRES PRZECHOWYWANIA DANYCH OSOBOWYCH',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Zasadniczo dane osobowe są przechowywane tylko tak długo, jak to jest konieczne do wypełnienia zobowiązań umownych lub ustawowych, dla których zostały one zgromadzone. Dane te zostaną usunięte natychmiast, gdy ich przechowywanie nie będzie konieczne w celach dowodowych, zgodnie z prawem cywilnym lub w związku z ustawowym obowiązkiem przechowywania danych.',
      },
      {
        kind: 'paragraph',
        text: 'Informacje dotyczące umowy przechowuje się w celach dowodowych przez okres trzech lat, począwszy od końca roku, w którym zakończono relacje handlowe z Użytkownikiem. Usunięcie danych nastąpi po upływie ustawowego terminu przedawnienia dochodzenia roszczeń umownych.',
      },
      {
        kind: 'paragraph',
        text: 'Ponadto administrator może zachować informacje archiwalne dotyczące zawartych transakcji, gdyż ich przechowywanie jest związane z przysługującymi Użytkownikowi roszczeniami, np. z tytułu rękojmi.',
      },
      {
        kind: 'paragraph',
        text: 'Jeśli żadna umowa nie została zawarta między Użytkownikiem a Właścicielem, dane osobowe Użytkownika są przechowywane do czasu usunięcia konta Użytkownika na stronie internetowej. Usunięcie konta może nastąpić w wyniku złożenia żądania przez Użytkownika, wycofania zgody na przetwarzanie danych osobowych bądź zgłoszenia sprzeciwu co do przetwarzania tych danych.',
      },
    ],
  },
  {
    roman: 'VII',
    title: 'POWIERZENIE PRZETWARZANIA DANYCH INNYM PODMIOTOM',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Administrator może powierzać przetwarzanie danych osobowych podmiotom współpracującym z administratorem w zakresie niezbędnym dla realizacji transakcji, np. w celu przygotowania zamówionego towaru oraz dostarczania przesyłek lub przekazywania informacji handlowych pochodzących od administratora (ostatnie dotyczy Użytkowników, którzy wyrazili zgodę na otrzymywanie informacji handlowych).',
      },
      {
        kind: 'paragraph',
        text: 'Poza celami wskazanymi w niniejszej Polityce Prywatności dane osobowe Użytkowników nie będą w żaden sposób udostępniane osobom trzecim ani przekazywane innym podmiotom w celu przesyłania materiałów marketingowych tych osób trzecich.',
      },
      {
        kind: 'paragraph',
        text: 'Dane osobowe Użytkowników strony internetowej nie są przekazywane poza obszar Unii Europejskiej.',
      },
      {
        kind: 'paragraph',
        text: 'Niniejsza Polityka Prywatności jest zgodna z przepisami wynikającymi z art. 13 ust. 1 i ust. 2 rozporządzenia RODO.',
      },
    ],
  },
];
