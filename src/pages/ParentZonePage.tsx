import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Download } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

type FaqItem = {
  question: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Jak wybrać obóz dla dziecka?',
    paragraphs: [
      'Obóz jest niewątpliwie niesamowitą przygodą i lekcją samodzielności dla dziecka. Dlatego warto dobrać obóz zgodny z zainteresowaniami przyszłego obozowicza.',
      'Wspólnie z dzieckiem wybierzcie tematykę obozu, nie pozostawiając go samego z tym wyborem.',
      'Dobierzcie tematykę pod względem zainteresowań oraz możliwości fizycznych dziecka. Nasze autorskie programy obozów dostępne są na stronie najlepszeobozy.pl.',
    ],
  },
  {
    question: 'O czym warto uprzedzić dziecko przed wyjazdem?',
    paragraphs: [
      'Jedną z najważniejszych kwestii stanowią kontakty z rówieśnikami oraz odnalezienie się w schemacie życia obozowego. Ogromna jest rola Rodziców i Opiekunów.',
    ],
    bullets: [
      'Wytłumacz dziecku, że wyjazd na obóz to fajna przygoda.',
      'Uświadom dziecku, że wychowawca na obozie to jego przyjaciel i opiekun.',
      'Poinformuj dziecko, że podczas obozu kontakt telefoniczny może być ograniczony.',
      'Zróbcie wszystko, aby dni poza domem były udane, a rozłąka jak najmniej bolesna.',
      'W razie problemu nasi pracownicy chętnie pomogą - dzwoń śmiało.',
    ],
  },
  {
    question: 'Jak kwaterujemy uczestników?',
    numbered: [
      'Ze względu na płeć.',
      'Ze względu na wiek.',
      'Ze względu na tematykę obozu.',
      'Staramy się spełniać życzenia wspólnego zakwaterowania (rodzeństwo, przyjaciele), jednak priorytetem jest powyższa kolejność.',
    ],
  },
  {
    question: 'Jak dokonać rezerwacji?',
    numbered: [
      'Przejdź do sekcji Kontakt → Formularze zgłoszeniowe → Obozy młodzieżowe i wyślij formularz.',
      'W ciągu 24h skontaktuje się z Tobą nasz pracownik i pomoże dopełnić formalności (sprawdzaj również spam).',
      'Po formalnościach pozostaje odliczać do pierwszego dnia obozu.',
    ],
  },
  {
    question: 'Jak spakować się na obóz?',
    paragraphs: ['Spakuj dziecko maksymalnie w dwa bagaże: główny i podręczny.'],
    bullets: [
      'Kurtka przeciwdeszczowa, strój kąpielowy, ciepły polar/swetry.',
      'Bielizna, t-shirty, skarpety, nakrycie głowy.',
      'Krem UV, preparaty na kleszcze i komary.',
      'Kosmetyczka, min. dwa ręczniki (w tym plażowy).',
      'Obuwie sportowe/trekkingowe oraz klapki/sandały.',
      'Kieszonkowe najlepiej w gotówce (10/20 zł).',
      'Dokumenty: karta kwalifikacyjna, legitymacja szkolna, wymagane oświadczenia i upoważnienia.',
      'DOBRY HUMOR I POZYTYWNE NASTAWIENIE.',
    ],
  },
  {
    question: 'Telefony i rzeczy wartościowe',
    bullets: [
      'Daj dziecku telefon o niskiej wartości i ładowarkę (opcjonalnie powerbank).',
      'Na czas zajęć telefony są w dyspozycji wychowawcy i udostępniane codziennie po obiedzie.',
      'W każdej chwili możesz skontaktować się z wychowawcą - numer otrzymasz SMS-em pierwszego dnia.',
      'Nie dawaj dziecku wartościowych rzeczy (laptop, tablet, konsola, drogie słuchawki).',
    ],
  },
  {
    question: 'FAQ: Dziecko jest na specjalnej diecie – czy może pojechać na obóz?',
    paragraphs: ['Tak, ale prosimy o wcześniejszy kontakt - wskażemy ośrodek spełniający wymagania diety.'],
  },
  {
    question: 'FAQ: Czy można otrzymać fakturę za obóz?',
    paragraphs: ['Tak, można otrzymać fakturę. Prosimy zgłosić taką potrzebę podczas zakupu imprezy.'],
  },
  {
    question: 'FAQ: Do czego służy karta kwalifikacyjna uczestnika imprezy?',
    paragraphs: [
      'Karta kwalifikacyjna to podstawowe źródło informacji o uczestniku i jego stanie zdrowia.',
      'Prosimy o skrupulatne wypełnienie i dołączenie do pozostałych dokumentów wymaganych w dniu rozpoczęcia obozu.',
    ],
  },
  {
    question: 'FAQ: Czy w razie potrzeby będę mogła skontaktować się z dzieckiem?',
    paragraphs: [
      'Kontakt telefoniczny jest możliwy codziennie podczas przerwy poobiedniej oraz w innych dostępnych oknach czasowych.',
      'W każdej chwili możesz skontaktować się z wychowawcą i poprosić dziecko do telefonu.',
    ],
  },
  {
    question: 'FAQ: Z jakich miast wyjeżdżają autokary i jaki jest koszt przejazdu?',
    paragraphs: ['Plan podróży i opłaty są dostępne na stronie oferty: Terminy i ceny → Plan podróży.'],
  },
  {
    question: 'FAQ: Czy zakwaterowanie nastąpi natychmiast po przyjeździe do ośrodka?',
    paragraphs: ['Zakwaterowanie w pokojach/domkach następuje zaraz po przyjeździe na obiekt wszystkich uczestników.'],
  },
  {
    question: 'FAQ: Dlaczego przed zakwaterowaniem czekamy na przyjazd wszystkich uczestników?',
    paragraphs: [
      'Uczestnicy dojeżdżają z różnych części kraju i często już podczas podróży nawiązują znajomości.',
      'Czekamy na wszystkich, aby maksymalnie uwzględnić ich życzenia związane ze wspólnym zakwaterowaniem.',
    ],
  },
  {
    question: 'FAQ: Wysyłam na kolonie dwóch synów (8 i 15 lat) - czy mogą być razem w pokoju?',
    paragraphs: [
      'Zakwaterowanie odbywa się według kryterium płci, wieku, tematyki oraz życzeń uczestników.',
      'Zawsze staramy się sprostać wszystkim życzeniom naszych młodych klientów.',
    ],
  },
  {
    question: 'FAQ: Kim jest kadra wychowawców i jak wygląda kontakt?',
    paragraphs: [
      'Kadra wywodzi się ze środowisk nauczycielskich, instruktorskich i ratowniczych.',
      'To osoby z odpowiednimi uprawnieniami i doświadczeniem w pracy z dziećmi i młodzieżą.',
      'W pierwszym dniu obozu wychowawca kontaktuje się z rodzicami i przekazuje numer telefonu.',
    ],
  },
  {
    question: 'FAQ: Co gdy kieszonkowego zabraknie?',
    paragraphs: ['Należy skontaktować się z kierownikiem obozu, który wyłoży potrzebną kwotę, a rodzic zwróci ją przelewem.'],
  },
  {
    question: 'FAQ: Czy dziecko może zmienić tematykę obozu w trakcie?',
    paragraphs: [
      'Jest to możliwe pod warunkiem, że wartości imprez są takie same i zmiana nie zaburzy przepisowej liczby osób w grupach.',
    ],
  },
  {
    question: 'FAQ: Dlaczego cena imprezy bywa inna niż w katalogu?',
    paragraphs: [
      'Cennik ma charakter dynamiczny i może zmieniać się w czasie (promocje first/last moment, popyt, warunki).',
      'Zalecamy wcześniejszą rezerwację, która zwykle zwiększa szansę na najlepszą cenę.',
    ],
  },
];

const DOCUMENTS = [
  { title: 'Poradnik rodzica i obozowicza', href: '/documents/strefa-rodzica/poradnik-rodzica-i-obozowicza.pdf' },
  { title: 'Karta kwalifikacyjna uczestnika', href: '/documents/strefa-rodzica/karta-kwalifikacyjna-uczestnika.pdf' },
  { title: 'Oświadczenie rodziców – opiekunów', href: '/documents/strefa-rodzica/oswiadczenie-rodzicow-opiekunow.pdf' },
  { title: 'Upoważnienie do odbioru dziecka', href: '/documents/strefa-rodzica/upowaznienie-do-odbioru-dziecka.pdf' },
  { title: 'Oświadczenie o wcześniejszym odbiorze dziecka', href: '/documents/strefa-rodzica/oswiadczenie-o-wczesniejszym-odbiorze-dziecka.pdf' },
  { title: 'Regulamin wypoczynku dzieci i młodzieży', href: '/documents/strefa-rodzica/regulamin-wypoczynku-dzieci-i-mlodziezy.pdf' },
] as const;

export default function ParentZonePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <main>
        <section className="section-padding bg-dark-lighter border-b border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <nav className="text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-primary transition-colors">
                Strona główna
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Kontakt</span>
              <span className="mx-2">/</span>
              <span className="text-white/80">Strefa rodzica</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">Kontakt</h1>
            <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight">
              Strefa rodzica
            </motion.h2>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className="max-w-6xl mx-auto px-6 space-y-8">
            <div className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10">
              <p className="text-white/75 leading-relaxed text-lg">
                Zależy nam, aby wysyłając z nami dziecko na obóz obdarzyli Państwo zaufaniem naszą kadrę. Jesteśmy doświadczonym organizatorem
                wyjazdów dla dzieci i młodzieży, a wszystkie obozy zgłaszamy do kuratorium oświaty.
              </p>
              <p className="mt-4 text-primary font-bold">
                Uwaga! Nie odpowiadamy za cenne rzeczy zgubione na obozie. Prosimy pamiętać o tym przy pakowaniu.
              </p>
              <p className="mt-4 text-white/75">
                Programy obozów sprawdzisz na{' '}
                <a className="text-primary hover:underline" href="http://najlepszeobozy.pl/" target="_blank" rel="noreferrer">
                  najlepszeobozy.pl
                </a>
                .
              </p>
            </div>

            <section className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10">
              <h3 className="text-primary font-bold uppercase tracking-wider mb-6">FAQ</h3>
              <div className="space-y-3">
                {FAQ_ITEMS.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                      <button
                        type="button"
                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-white">{item.question}</span>
                        <ChevronDown className={`shrink-0 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} size={18} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 space-y-3 text-white/75 leading-relaxed">
                              {item.paragraphs?.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                              ))}
                              {item.bullets && (
                                <ul className="list-disc pl-6 space-y-1.5">
                                  {item.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                  ))}
                                </ul>
                              )}
                              {item.numbered && (
                                <ol className="list-decimal pl-6 space-y-1.5">
                                  {item.numbered.map((entry) => (
                                    <li key={entry}>{entry}</li>
                                  ))}
                                </ol>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10">
              <h3 className="text-primary font-bold uppercase tracking-wider mb-6">Dokumenty do pobrania</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {DOCUMENTS.map((document) => (
                  <div key={document.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between gap-4">
                    <p className="text-white/80 font-medium">{document.title}</p>
                    <a
                      href={document.href}
                      download
                      className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-dark transition-colors"
                    >
                      <Download size={14} />
                      Pobierz
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
