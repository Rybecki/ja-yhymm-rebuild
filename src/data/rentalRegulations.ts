export type RentalRegulation = {
  id: string;
  title: string;
  file: string;
  fullText: string;
};

export const RENTAL_REGULATIONS: RentalRegulation[] = [
  {
    id: 'e-rowery',
    title: 'Regulamin wypożyczalni rowerów elektrycznych',
    file: '/documents/regulaminy/regulamin-wypozyczalni-rowerow-elektrycznych.pdf',
    fullText: `REGULAMIN WYPOŻYCZALNI ROWERÓW ELEKTRYCZNYCH
§1. Postanowienia ogólne
Właścicielem wypożyczalni jest A Bo Co... spółka z.o.o z siedzibą w Katowicach przy ul. Niwnej 9.
Przedmiotem wynajmu są rowery elektryczne marki Kross Influx Hybrid 1.0 oraz WINORA Yucatan X8.
Wypożyczenie roweru następuje po podpisaniu Umowy Wynajmu oraz zaakceptowaniu niniejszego Regulaminu.

§2. Warunki wypożyczenia
Wypożyczającym może być osoba pełnoletnia, posiadająca ważny dokument tożsamości ze zdjęciem.
Osoby niepełnoletnie mogą korzystać z rowerów wyłącznie pod opieką prawnych opiekunów, którzy biorą za nie pełną odpowiedzialność.
Wypożyczający musi być w stanie trzeźwości. Wypożyczalnia ma prawo odmówić wydania roweru osobie pod wpływem alkoholu lub innych środków odurzających bez zwrotu kosztów rezerwacji.

§3. Opłaty i Kaucja
Opłata za wypożyczenie pobierana jest z góry zgodnie z aktualnym cennikiem dostępnym na stronie internetowej.
Przy wypożyczeniu pobierana jest kaucja zwrotna w wysokości 500 PLN za każdy rower.
Kaucja stanowi zabezpieczenie na wypadek uszkodzeń wynikających z niewłaściwego użytkowania sprzętu lub zagubienia akcesoriów.
Kaucja jest zwracana w całości w momencie oddania sprawnego i nieuszkodzonego roweru.

§4. Odpowiedzialność i użytkowanie
Wypożyczający otrzymuje rower czysty i w pełni sprawny technicznie i zobowiązuje się oddać go w takim samym stanie.
Rowery są przeznaczone do jazdy po drogach utwardzonych oraz wyznaczonych szlakach rowerowych. Zabrania się wykorzystywania rowerów do sportów ekstremalnych (downhill, skoki itp.).
Wypożyczający ponosi pełną odpowiedzialność za szkody powstałe od momentu wypożyczenia do momentu zwrotu roweru.
W przypadku kradzieży roweru, Wypożyczający ma obowiązek niezwłocznie powiadomić Policję oraz Właściciela wypożyczalni. Wypożyczający odpowiada finansowo za utratę roweru do pełnej jego wartości rynkowej.

§5. Dowóz i Zwrot
Dowóz roweru jest bezpłatny do 15 km od aktualnej bazy (Jura/Katowice). Powyżej tej odległości naliczana jest opłata 2,50 PLN / km.
Rower należy zwrócić w ustalonym terminie. Przekroczenie czasu najmu o ponad 30 minut skutkuje naliczeniem opłaty za kolejną pełną dobę.
W przypadku zwrotu roweru brudnego (błoto uniemożliwiające ocenę stanu technicznego), wypożyczalnia może naliczyć opłatę serwisową za czyszczenie w wysokości 50 PLN.

§6. Awarie i wypadki
W przypadku awarii silnika lub osprzętu elektrycznego nie wynikającej z winy klienta, Wypożyczalnia zobowiązuje się do podstawienia roweru zastępczego (w miarę dostępności) lub zwrotu części kosztów najmu.
Wypożyczalnia nie ponosi odpowiedzialności za wypadki i szkody na zdrowiu powstałe podczas użytkowania rowerów przez Wypożyczającego.

§7. Dane osobowe (RODO)
Podpisując umowę, Wypożyczający wyraża zgodę na przetwarzanie danych osobowych wyłącznie w celu realizacji umowy najmu, zgodnie z obowiązującymi przepisami o ochronie danych osobowych.

UMOWA WYNAJMU ROWERU ELEKTRYCZNEGO nr ____/202X
Data i miejsce zawarcia umowy: ________________________________________

1. STRONY UMOWY
Wynajmujący: A Bo Co... spółka z.o.o, ul. Niwna 9, 40-406 Katowice, NIP: 954 289 00 70
Najemca:
Imię i nazwisko: ______________________________________________________
Nr dokumentu tożsamości (PESEL/Paszport): _____________________________
Adres zamieszkania: __________________________________________________
Numer telefonu: ______________________________________________________

2. PRZEDMIOT WYNAJMU
Wynajmujący oddaje do używania Najemcy rower elektryczny:
[] KROSS Influx Hybrid 1.0 (Nr ramy: ______________________)
[] WINORA Yucatan X8 (Nr ramy: ______________________)
Dodatki: [] Kask [] Zapięcie [] Ładowarka [] Inne: __________________

3. CZAS I KOSZT WYNAJMU
Data i godzina wydania: _____________________________________________
Planowana data i godzina zwrotu: ____________________________________
Opłata za wynajem: _____________ PLN (opłacono: [] Gotówka [] Karta/BLIK)
Kaucja zwrotna: _____________ PLN (pobrano: [] Gotówka [] Preautoryzacja)

4. OŚWIADCZENIA I ZASADY
Najemca potwierdza, że otrzymał rower w dobrym stanie technicznym, bez widocznych wad (z wyjątkiem uwag w pkt 5).
Najemca zobowiązuje się do przestrzegania Regulaminu Wypożyczalni, który stanowi załącznik do niniejszej umowy.
Najemca ponosi pełną odpowiedzialność za uszkodzenia wynikające z niewłaściwego użytkowania oraz za kradzież roweru.
W przypadku opóźnienia w zwrocie, Najemca zobowiązuje się do uiszczenia dopłaty zgodnie z cennikiem.

5. STAN TECHNICZNY (UWAGI)
(Miejsce na opisanie istniejących zarysowań lub uwag technicznych przed wydaniem)

6. PODPISY
Wynajmujący: _____________________ Najemca: _____________________

Protokół zwrotu (wypełniany przy oddaniu roweru):
Data zwrotu: ________________ Godzina: ________
[] Rower zwrócono w stanie niepogorszonym.
[] Stwierdzono uszkodzenia: ________________________________________________
[] Kaucję zwrócono w całości / [] Kaucję zatrzymano w kwocie: ____________ PLN
Podpis Wynajmującego: ____________________ Podpis Najemcy: ____________________`,
  },
  {
    id: 'kajaki',
    title: 'Regulamin wypożyczalni Kajako-Mobil',
    file: '/documents/regulaminy/regulamin-wypozyczalni-kajakow.pdf',
    fullText: `REGULAMIN WYPOŻYCZALNI KAJAKO-MOBIL
(Właścicielem marki jest A Bo Co... Sp. z o.o. z siedzibą w Katowicach)
1. Postanowienia ogólne
1.1. Wypożyczalnia oferuje wynajem kajaków polietylenowych wraz z osprzętem (wiosła, kamizelki, siedziska dla dzieci).
1.2. Wypożyczalnia działa w modelu mobilnym, bez stacjonarnej przystani wodnej. Sprzęt dostarczany jest pod wskazany adres lub odbierany przez Klienta z punktu wydań (Jura/Katowice).
1.3. Sprzęt jest własnością spółki A Bo Co... Sp. z o.o., realizującej cele statutowe Fundacji JA YHYMM...

2. Zasady wynajmu
2.1. Wypożyczającym może być osoba pełnoletnia, legitymująca się ważnym dokumentem tożsamości.
2.2. Wypożyczenie następuje po podpisaniu Umowy Najmu oraz wpłaceniu kaucji zwrotnej.
2.3. Klient ponosi pełną odpowiedzialność za wypożyczony sprzęt od momentu jego odebrania do momentu zwrotu.

3. Bezpieczeństwo
3.1. Każdy uczestnik spływu ma obowiązek posiadania założonej i zapiętej kamizelki asekuracyjnej podczas przebywania na wodzie.
3.2. Wypożyczalnia nie organizuje spływów i nie zapewnia ratowników. Klient pływa na własną odpowiedzialność.
3.3. Zabrania się korzystania ze sprzętu pod wpływem alkoholu lub innych środków odurzających.

4. Odpowiedzialność i opłaty
4.1. Za zgubienie lub zniszczenie sprzętu Klient odpowiada do pełnej wartości rynkowej szkody.
4.2. Opłata za zagubienie wiosła: 150 zł, kamizelki: 120 zł, siedziska dla dziecka: 100 zł.
4.3. Zwrot brudnego sprzętu (zaschnięte błoto, piasek wewnątrz) skutkuje potrąceniem 50 zł z kaucji za czyszczenie.

UMOWA NAJMU NR ........./202X
Zawarta w dniu .................... pomiędzy:
A Bo Co... Sp. z o.o., ul. Niwna 9, 40-406 Katowice, NIP: 954 289 00 70, zwaną dalej Wynajmującym,
a
Imię i Nazwisko: .....................................................................
PESEL: ........................................., Nr tel: .......................................
Adres: ..........................................................................................., zwanym dalej Najemcą.

§1 Przedmiot Umowy
1. Wynajmujący oddaje do używania Najemcy:
o Kajak polietylenowy (szt. .....), wiosła (szt. .....), kamizelki (szt. .....), siedzisko dziecięce (szt. .....).
2. Okres najmu: od dnia .................... godz. .......... do dnia .................... godz. ..........

§2 Finanse
1. Cena za wynajem wynosi: .................... zł brutto.
2. Koszt transportu (jeśli dotyczy): .................... zł.
3. Kaucja zwrotna w wysokości .................... zł została wpłacona gotówką/kartą.
4. Najemca upoważnia Wynajmującego do potrącenia z kaucji kwot należnych za uszkodzenia sprzętu lub opóźnienie w zwrocie.

§3 Oświadczenia Najemcy
1. Najemca oświadcza, że zapoznał się z Regulaminem i akceptuje jego warunki.
2. Najemca potwierdza, że potrafi pływać i bierze na siebie pełną odpowiedzialność za bezpieczeństwo własne oraz osób płynących w wypożyczonym kajaku.

.................................................. ..................................................
Podpis Wynajmującego Podpis Najemcy

PROTOKÓŁ ZDAWCZO-ODBIORCZY DO UMOWY NR ........./202X
I. WYDANIE SPRZĘTU (Data: .................... Godz: ..........)
Element zestawu Ilość Stan techniczny / Uwagi
Kajak polietylenowy [ ] Nowy/Bdb [ ] Rysy użytkowe [ ] Inne:
Wiosła [ ] Sprawne [ ] Inne:
Kamizelki [ ] Suche/Czyste [ ] Inne:
Dodatkowe siedzisko [ ] Kompletne
Potwierdzam odbiór sprzętu sprawnego, czystego i bez wad widocznych:
.................................................. (Podpis Najemcy)

II. ZWROT SPRZĘTU (Data: .................... Godz: ..........)
1. Stan techniczny przy zwrocie:
[ ] Bez zastrzeżeń
[ ] Stwierdzono uszkodzenia (opis): ....................................................................................
[ ] Sprzęt wymaga czyszczenia (opłata 30 zł)
2. Rozliczenie kaucji:
[ ] Zwrócono w całości
[ ] Potrącono kwotę .................... zł z tytułu: .....................................................................
.................................................. ..................................................
Podpis Wynajmującego Podpis Najemcy`,
  },
  {
    id: 'autolaweta',
    title: 'Regulamin usługi Auto-laweta',
    file: '/documents/regulaminy/regulamin-uslugi-autolaweta.pdf',
    fullText: `REGULAMIN USŁUGI AUTO-LAWETA
1. Usługa transportu realizowana jest przez A Bo Co... Sp. z o.o.
2. Każde zlecenie wyceniane jest indywidualnie na podstawie trasy, czasu i rodzaju ładunku.
3. Zleceniodawca odpowiada za poprawne informacje o ładunku, wymiarach i wadze.
4. Załadunek i rozładunek realizowane są zgodnie z zasadami bezpieczeństwa.
5. Szczegółowe warunki określa zlecenie transportowe i umowa.

UMOWA TRANSPORTU AUTO-LAWETA nr ____/202X
Data i miejsce zawarcia umowy: ________________________________________
Wynajmujący: A Bo Co... sp. z o.o., ul. Niwna 9, 40-406 Katowice
Zleceniodawca: ________________________________________________________
Ładunek: ______________________________________________________________
Trasa: ________________________________________________________________
Termin: _______________________________________________________________
Cena: _________________________________________________________________
Podpisy stron: ________________________________________________________`,
  },
  {
    id: 'vip-bus',
    title: 'Regulamin usługi VIP Bus',
    file: '/documents/regulaminy/regulamin-uslugi-vip-bus.pdf',
    fullText: `REGULAMIN USŁUGI VIP BUS A BO CO...
1. Usługa przewozu realizowana jest przez A Bo Co... Sp. z o.o.
2. Każdy przejazd wyceniany jest indywidualnie na podstawie trasy, czasu i zakresu obsługi.
3. Rezerwacja jest potwierdzona po akceptacji wyceny i ustaleniu terminu.
4. Pasażerowie zobowiązani są do przestrzegania zasad bezpieczeństwa i poleceń kierowcy.
5. W pojeździe obowiązuje zakaz spożywania alkoholu bez zgody Wynajmującego.
6. Za szkody powstałe z winy pasażerów odpowiada osoba zamawiająca usługę.
7. Szczegółowe warunki przejazdu określa umowa/zlecenie transportowe.

UMOWA USŁUGI TRANSPORTOWEJ VIP BUS nr ____/202X
Data i miejsce zawarcia umowy: ________________________________________

1. STRONY UMOWY
Wynajmujący: A Bo Co... sp. z o.o., ul. Niwna 9, 40-406 Katowice, NIP: 954 289 00 70
Zamawiający:
Imię i nazwisko / firma: ______________________________________________
Telefon: _____________________  Email: ________________________________

2. ZAKRES USŁUGI
Trasa: _______________________________________________________________
Data i godziny: _______________________________________________________
Liczba pasażerów: ____________________________________________________
Pakiet: _______________________________________________________________

3. FINANSE
Cena netto: ______________________ PLN
Dodatkowe koszty: ______________________ PLN
Sposób płatności: ________________________________________________

4. OŚWIADCZENIA
Zamawiający potwierdza zapoznanie się z regulaminem i akceptuje warunki usługi.

Podpis Wynajmującego: ____________________  Podpis Zamawiającego: ____________________`,
  },
  {
    id: 'dmuchance',
    title: 'Regulamin korzystania z urządzeń dmuchanych',
    file: '/documents/regulaminy/regulamin-urzadzen-dmuchanych.pdf',
    fullText: `REGULAMIN KORZYSTANIA Z URZĄDZEŃ DMUCHANYCH "JA YHYMM..."
I. Zasady Ogólne
1. Urządzenia są wynajmowane wraz z profesjonalną obsługą na czas 6 godzin, chyba że umowa stanowi inaczej.
2. Korzystanie z atrakcji dozwolone jest wyłącznie pod nadzorem pracownika obsługi.
3. Opiekę nad dziećmi przebywającymi na terenie atrakcji sprawują ich rodzice lub opiekunowie prawni.

II. Zasady Bezpieczeństwa
1. Przed wejściem na urządzenie należy zdjąć obuwie, okulary, biżuterię, zegarki oraz wszelkie ostre przedmioty.
2. Na urządzeniach obowiązuje bezwzględny zakaz wnoszenia jedzenia, napojów oraz żucia gumy.
3. Zabrania się:
- pchania innych użytkowników, robienia salt oraz niebezpiecznych akrobacji,
- wspinania się po ścianach zewnętrznych i siatkach ochronnych,
- zjeżdżania głową w dół (dotyczy Zjeżdżalni "Mario"),
- wchodzenia na urządzenie osób pod wpływem alkoholu lub środków odurzających.
4. Na ściance wspinaczkowej mogą przebywać wyłącznie osoby odpowiednio zabezpieczone przez instruktora.

III. Warunki Techniczne
1. Najemca zobowiązany jest zapewnić płaski, uprzątnięty teren oraz stały dostęp do źródła prądu 230V.
2. W przypadku niekorzystnych warunków atmosferycznych (wiatr powyżej 10 m/s, ulewny deszcz, burza), obsługa ma prawo przerwać pracę urządzeń.

UMOWA WYNAJMU ATRAKCJI EVENTOWYCH
Zawarta w dniu ........................... w ........................................... pomiędzy:
Wynajmującym: Ja Yhymm (www.ja-yhymm.pl), reprezentowanym przez ...........................................
a
Najemcą: ....................................................................................................................................

§ 1. Przedmiot Umowy
1. Wynajmujący zobowiązuje się do wynajęcia, transportu i obsługi następujących atrakcji:
[ ] Zjeżdżalnia "Mario" (1200 zł)
[ ] Ścianka Wspinaczkowa (1500 zł)
[ ] Zamek (700 zł)
[ ] Żółw "Suchy basen" (1000 zł)
[ ] Wytwornica Piany (900 zł / 1h)
[ ] Pakiet: ..........................................................................
2. Czas pracy atrakcji wynosi 6 godzin.
3. Data i miejsce realizacji: ...........................................................................................................

§ 2. Wynagrodzenie i Płatność
1. Strony ustalają łączną kwotę wynajmu brutto na: ........................... zł.
2. Koszt dojazdu wynosi: ........................... zł.
3. Łączna należność płatna jest: [ ] Gotówką / [ ] Przelewem.

§ 3. Oświadczenia Najemcy
1. Najemca oświadcza, że zapoznał się z Regulaminem Korzystania z Urządzeń i zobowiązuje się do jego przestrzegania.
2. Najemca zapewnia odpowiednie miejsce do rozstawienia urządzeń oraz przyłącze elektryczne.

§ 4. Postanowienia Końcowe
1. Wszelkie zmiany umowy wymagają formy pisemnej.
2. Umowę sporządzono w dwóch jednobrzmiących egzemplarzach.

.................................................. ..................................................
(Wynajmujący) (Najemca)`,
  },
];

export function getRentalRegulationText(id: RentalRegulation['id']): string {
  const regulation = RENTAL_REGULATIONS.find((item) => item.id === id);
  if (!regulation) throw new Error(`Unknown rental regulation: ${id}`);
  return regulation.fullText;
}
