import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Download, X } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

type Regulation = {
  title: string;
  file: string;
  content: string[];
};

const REGULATIONS: Regulation[] = [
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

export default function ContactSubpage() {
  const [activeRegulation, setActiveRegulation] = useState<Regulation | null>(null);

  useEffect(() => {
    if (!activeRegulation) {
      document.body.style.overflow = '';
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveRegulation(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeRegulation]);

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
              <Link to="/dla-ciebie/formularze" className="hover:text-primary transition-colors text-white/80">
                Dla Ciebie
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Regulaminy</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">Dla Ciebie</h1>
            <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight">
              Regulaminy
            </motion.h2>
          </div>
        </section>
        <section className="section-padding bg-dark">
          <div className="max-w-5xl mx-auto px-6">
            <div className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10">
              <p className="text-white/75 leading-relaxed text-lg mb-6">
                Wybierz regulamin, aby otworzyć podgląd w modalu. Na dole każdego regulaminu znajdziesz przycisk pobrania dokumentu PDF.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {REGULATIONS.map((regulation) => (
                  <button
                    key={regulation.title}
                    type="button"
                    onClick={() => setActiveRegulation(regulation)}
                    className="rounded-2xl border border-primary/50 bg-white/5 px-5 py-4 text-left text-white font-semibold hover:bg-primary/10 hover:border-primary transition-colors"
                  >
                    {regulation.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {activeRegulation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveRegulation(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-3xl rounded-3xl border border-white/15 bg-dark-lighter max-h-[85vh] overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-white/10">
                <h3 className="text-lg md:text-xl font-bold text-primary">{activeRegulation.title}</h3>
                <button
                  type="button"
                  onClick={() => setActiveRegulation(null)}
                  className="rounded-full border border-white/20 p-2 text-white/80 hover:text-white hover:border-primary transition-colors"
                  aria-label="Zamknij modal"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="px-6 py-5 overflow-y-auto max-h-[calc(85vh-10rem)] space-y-3 text-white/80 leading-relaxed">
                {activeRegulation.content.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="px-6 py-4 border-t border-white/10">
                <a
                  href={activeRegulation.file}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-dark transition-colors"
                >
                  <Download size={16} />
                  Pobierz dokument PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
