export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: 'jak-zaczac-przygode-z-quadami',
    title: 'Jak zacząć przygodę z quadami?',
    excerpt:
      'Quady to aktywny wypoczynek, adrenalina i miejsca niedostępne zwykłym autem — od pierwszych metrów pod okiem instruktora, bez wcześniejszego doświadczenia.',
    date: '10.05.2026',
    imageSrc: '/images/tematyka/quady-1.png',
    imageAlt: 'Quady na trasie terenowej — nagłówek artykułu',
    paragraphs: [
      'Quady to świetny sposób na aktywny wypoczynek, sporą dawkę adrenaliny i odkrywanie miejsc, do których zwykłym autem trudno dotrzeć. Coraz więcej osób wybiera jazdę terenową jako formę weekendowej przygody, integracji ze znajomymi lub pomysł na wyjątkowy event.',
      'Na początek warto postawić na spokojną jazdę pod okiem instruktora i dobrze poznać możliwości pojazdu. Quad daje dużo frajdy zarówno na leśnych trasach, błotnistych odcinkach, jak i podczas bardziej technicznych przejazdów terenowych. Najważniejsze są bezpieczeństwo, odpowiedni sprzęt i dobra zabawa.',
      'Nie trzeba mieć wcześniejszego doświadczenia — większość osób już po kilku minutach czuje się pewnie za kierownicą. Wystarczy odrobina odwagi i chęć przeżycia czegoś innego niż standardowy spacer czy wyjazd do miasta.',
      'Jeśli szukasz emocji, kontaktu z naturą i niezapomnianych wspomnień, przygoda z quadami może być dokładnie tym, czego potrzebujesz.',
    ],
  },
  {
    slug: 'paintball-co-warto-wiedziec',
    title: 'Paintball - co warto wiedzieć?',
    excerpt:
      'Paintball łączy sport, strategię i integrację. Sprawdź, dlaczego to bezpieczna i pełna emocji forma aktywności.',
    date: '20.04.2026',
    imageSrc: '/images/tematyka/paintball-2.png',
    imageAlt: 'Uczestnicy gry paintballowej w lesie',
    paragraphs: [
      'Paintball to jedna z najpopularniejszych form aktywnej rozrywki na świeżym powietrzu. Łączy w sobie sport, strategię i świetną zabawę w grupie. To idealna opcja zarówno dla początkujących, jak i osób szukających adrenaliny.',
      'Na początku warto wiedzieć, że paintball jest bezpieczny - pod warunkiem przestrzegania zasad i używania odpowiedniego sprzętu ochronnego. Każdy uczestnik otrzymuje maskę, marker oraz specjalne kulki z farbą.',
      'Gra rozwija umiejętność pracy zespołowej, szybkiego podejmowania decyzji i planowania. To także świetny sposób na integrację - sprawdza się na wyjazdach firmowych, wieczorach kawalerskich czy szkolnych wycieczkach.',
      'Jeśli jeszcze nie próbowałeś - zdecydowanie warto!',
    ],
  },
  {
    slug: 'obozy-2026-sprawdz-nasza-oferte',
    title: 'Obozy 2026 - sprawdź naszą ofertę',
    excerpt:
      'Już teraz zaplanuj lato 2026. Zobacz obozy survivalowe, sportowe, militarne i integracyjne dla dzieci i młodzieży.',
    date: '20.04.2026',
    imageSrc: '/utils/obozy-kolonie/lato.png',
    imageAlt: 'Letnie aktywności obozowe nad wodą',
    paragraphs: [
      'Planujesz wakacje 2026? Już teraz warto pomyśleć o wyjątkowym wyjeździe dla dzieci i młodzieży! Nasze obozy to połączenie aktywności, przygody i rozwoju w bezpiecznym środowisku.',
      'W ofercie znajdują się m.in. obozy survivalowe, sportowe, militarne oraz integracyjne. Każdy uczestnik znajdzie coś dla siebie - niezależnie od wieku czy zainteresowań.',
      'Stawiamy na aktywne spędzanie czasu: zajęcia w terenie, gry zespołowe, naukę nowych umiejętności oraz świetną atmosferę. Nad wszystkim czuwają doświadczeni instruktorzy.',
      'Nie czekaj do ostatniej chwili - liczba miejsc jest ograniczona. Sprawdź naszą ofertę i wybierz obóz idealny na lato 2026!',
    ],
  },
  {
    slug: 'survival-jak-zaczac-przygode',
    title: 'Survival - jak zacząć przygodę?',
    excerpt: 'Podstawy survivalu, pierwsze kroki i bezpieczny start pod okiem instruktorów.',
    date: '20.04.2026',
    imageSrc: '/images/tematyka/survival-2.png',
    imageAlt: 'Uczestnicy zajęć survivalowych podczas przeprawy',
    paragraphs: [
      'Survival to coś więcej niż hobby - to umiejętność radzenia sobie w trudnych warunkach i bliskość z naturą. Jeśli chcesz zacząć, nie potrzebujesz od razu profesjonalnego sprzętu.',
      'Na początek warto nauczyć się podstaw: rozpalania ognia, budowy schronienia czy orientacji w terenie. To fundament, który daje poczucie bezpieczeństwa i niezależności.',
      'Najlepszym sposobem na start jest udział w zorganizowanych zajęciach lub obozie survivalowym. Pod okiem instruktorów szybko zdobędziesz praktyczne umiejętności i unikniesz typowych błędów.',
      'W naszej ofercie znajdziesz programy survivalowe dla początkujących i zaawansowanych - to świetna okazja, by rozpocząć swoją przygodę!',
    ],
  },
  {
    slug: 'obozy-dla-klas-mundurowych-co-daja',
    title: 'Obozy dla klas mundurowych - co dają?',
    excerpt: 'Dyscyplina, współpraca, taktyka i pierwsza pomoc - praktyczne przygotowanie do służb mundurowych.',
    date: '20.04.2026',
    imageSrc: '/images/klasy-mundurowe/militaria-4.png',
    imageAlt: 'Uczestnicy obozu klas mundurowych podczas ćwiczeń',
    paragraphs: [
      'Obozy dla klas mundurowych to doskonałe uzupełnienie edukacji dla uczniów zainteresowanych służbami takimi jak wojsko, policja czy straż pożarna.',
      'Podczas takich wyjazdów uczestnicy rozwijają dyscyplinę, sprawność fizyczną oraz umiejętności pracy w zespole. Program często obejmuje elementy taktyki, szkolenia terenowego, pierwszej pomocy czy musztry.',
      'To nie tylko nauka, ale także budowanie charakteru - odpowiedzialności, wytrwałości i radzenia sobie w stresujących sytuacjach.',
      'Dla wielu uczestników to pierwszy krok do przyszłej kariery w służbach mundurowych.',
    ],
  },
  {
    slug: 'dlaczego-warto-znac-pierwsza-pomoc',
    title: 'Dlaczego warto znać pierwszą pomoc?',
    excerpt: 'Każda sekunda ma znaczenie. Zobacz, dlaczego wiedza z pierwszej pomocy jest tak ważna.',
    date: '20.04.2026',
    imageSrc: '/images/szkolenia/szkolenia3.png',
    imageAlt: 'Ćwiczenia pierwszej pomocy na fantomie',
    paragraphs: [
      'Umiejętność udzielania pierwszej pomocy może uratować życie - dosłownie. W nagłych sytuacjach liczy się każda sekunda, a szybka reakcja świadków zdarzenia jest kluczowa.',
      'Podstawowe czynności, takie jak resuscytacja krążeniowo-oddechowa (RKO), tamowanie krwotoków czy ułożenie poszkodowanego w pozycji bezpiecznej, są stosunkowo proste do nauczenia.',
      'Znajomość pierwszej pomocy daje pewność siebie i pozwala działać zamiast panikować. To umiejętność, która przydaje się w codziennym życiu - nie tylko w ekstremalnych sytuacjach.',
      'Warto regularnie odświeżać wiedzę i brać udział w szkoleniach - nigdy nie wiadomo, kiedy okaże się potrzebna.',
    ],
  },
];
