import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronDown, X } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const INFLATABLES_IMAGES = ['/images/tematyka/scianka1.png', '/images/wynajem-sprzetu/scianka.png'];

const REGULATIONS_TEXT = `REGULAMIN KORZYSTANIA Z URZĄDZEŃ DMUCHANYCH "JA YHYMM..."
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
(Wynajmujący) (Najemca)`;

export default function RentalInflatablesPage() {
  const [isRegulationsOpen, setIsRegulationsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    attraction: '',
    packageType: '',
    dateFrom: '',
    dateTo: '',
    message: '',
  });

  const updateFormData = (field: keyof typeof formData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('inflatablesForm', JSON.stringify(formData));
    const body = [
      'Nowe zapytanie o dmuchance i eventy:',
      '',
      `Imie i nazwisko: ${formData.fullName}`,
      `Telefon: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Atrakcja: ${formData.attraction}`,
      `Pakiet: ${formData.packageType}`,
      `Data od: ${formData.dateFrom}`,
      `Data do: ${formData.dateTo}`,
      '',
      'Wiadomosc:',
      formData.message || '-',
    ].join('\n');
    window.location.href = `mailto:biuro@ja-yhymm.pl?subject=${encodeURIComponent('Zapytanie dmuchance i eventy')}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    if (!isRegulationsOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsRegulationsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isRegulationsOpen]);

  useEffect(() => {
    const saved = localStorage.getItem('inflatablesForm');
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      setFormData((previous) => ({ ...previous, ...parsed }));
    } catch {
    }
  }, []);

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
              <span className="text-white/80">Wypożyczalnia</span>
              <span className="mx-2">/</span>
              <span className="text-white/80">Dmuchańce</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">Wypożyczalnia</h1>
            <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight">
              Dmuchańce i Eventy
            </motion.h2>
          </div>
        </section>
        <section className="section-padding bg-dark">
          <div className="max-w-6xl mx-auto px-6 space-y-8">
            <div className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10 space-y-5">
              <h3 className="text-primary font-bold uppercase tracking-wider">Wynajem Dmuchańców z Obsługą - Rozkręć Imprezę z JA YHYMM...</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                Szukasz sposobu na niezapomniane wydarzenie? Nasze dmuchańce to centra radości, adrenaliny i bezpiecznej zabawy.
                Zapewniamy kompleksową usługę: przywozimy, rozstawiamy i pilnujemy bezpieczeństwa.
              </p>
            </div>

            <section className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10 space-y-6">
              <h3 className="text-primary font-bold uppercase tracking-wider">Nasze atrakcje (wynajem na 6h z obsługą)</h3>
              <div className="space-y-3 md:hidden">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white/70 text-sm">Zjeżdżalnia Średnia "Mario"</p>
                  <p className="text-white/80 text-sm mt-1">Kultowy motyw i emocje na wysokości, półka zjazdowa na poziomie 3.6m.</p>
                  <p className="text-primary font-bold mt-2">1200 zł</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white/70 text-sm">Ścianka Wspinaczkowa</p>
                  <p className="text-white/80 text-sm mt-1">Cztery drogi wspinaczkowe o różnych poziomach trudności.</p>
                  <p className="text-primary font-bold mt-2">1500 zł</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white/70 text-sm">Zamek Klasyczny</p>
                  <p className="text-white/80 text-sm mt-1">Ponadczasowy skakaniec, który nigdy się nie nudzi.</p>
                  <p className="text-primary font-bold mt-2">700 zł</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white/70 text-sm">Żółw "Tropikalna Wysepka"</p>
                  <p className="text-white/80 text-sm mt-1">Unikalny suchy basen dla dzieci i wakacyjny klimat.</p>
                  <p className="text-primary font-bold mt-2">1000 zł</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white/70 text-sm">Wytwornica Piany</p>
                  <p className="text-white/80 text-sm mt-1">1h aktywnego lania piany wraz z płynem.</p>
                  <p className="text-primary font-bold mt-2">900 zł</p>
                </div>
              </div>
              <div className="hidden md:block rounded-2xl border border-white/10 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs">Atrakcja</th>
                      <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs">Opis</th>
                      <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs md:text-right">Cena</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-white/10">
                      <td className="px-4 py-3 text-white/80">Zjeżdżalnia Średnia "Mario"</td>
                      <td className="px-4 py-3 text-white/80">Kultowy motyw i emocje na wysokości, półka zjazdowa na poziomie 3.6m.</td>
                      <td className="px-4 py-3 text-primary font-bold md:text-right">1200 zł</td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="px-4 py-3 text-white/80">Ścianka Wspinaczkowa</td>
                      <td className="px-4 py-3 text-white/80">Cztery drogi wspinaczkowe o różnych poziomach trudności.</td>
                      <td className="px-4 py-3 text-primary font-bold md:text-right">1500 zł</td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="px-4 py-3 text-white/80">Zamek Klasyczny</td>
                      <td className="px-4 py-3 text-white/80">Ponadczasowy skakaniec, który nigdy się nie nudzi.</td>
                      <td className="px-4 py-3 text-primary font-bold md:text-right">700 zł</td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="px-4 py-3 text-white/80">Żółw "Tropikalna Wysepka"</td>
                      <td className="px-4 py-3 text-white/80">Unikalny suchy basen dla dzieci i wakacyjny klimat.</td>
                      <td className="px-4 py-3 text-primary font-bold md:text-right">1000 zł</td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="px-4 py-3 text-white/80">Wytwornica Piany</td>
                      <td className="px-4 py-3 text-white/80">1h aktywnego lania piany wraz z płynem.</td>
                      <td className="px-4 py-3 text-primary font-bold md:text-right">900 zł</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                {INFLATABLES_IMAGES.map((src, index) => (
                  <motion.div key={src} whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="group relative overflow-visible pb-2">
                    <img src={src} alt={`Dmuchańce - zdjęcie ${index + 1}`} className="w-full aspect-[4/3] object-cover rounded-2xl border border-primary/40" loading="lazy" />
                    <span className="pointer-events-none absolute left-0 right-0 bottom-0 h-0.5 bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10 space-y-8">
              <div>
                <h3 className="text-primary font-bold uppercase tracking-wider mb-3">Pakiety korzyści</h3>
                <ul className="list-disc pl-6 text-white/75 space-y-3">
                  <li><span className="text-primary font-semibold">Pakiet URODZINOWY OGRÓD:</span> Zamek + piana 45 min + 1 obsługa. Cena: 1200 zł.</li>
                  <li><span className="text-primary font-semibold">Pakiet PRZYGODA I ADRENALINA:</span> Mario + ścianka + 3 obsługa. Cena: 2200 zł.</li>
                  <li><span className="text-primary font-semibold">Pakiet KOMPLETNY FESTYN:</span> 4 dmuchańce + 2-3 wejścia piany + min. 4 obsługa. Cena: 4500 zł.</li>
                </ul>
                <p className="text-white/75 mt-4">Hit oferty: do dowolnego dmuchańca dodatek "PIANA PARTY MIX" za +500 zł.</p>
              </div>

              <div>
                <h4 className="text-primary font-bold mb-3">Cennik dojazdu</h4>
                <ul className="list-disc pl-6 text-white/75 space-y-2">
                  <li>Strefa I (do 15 km): GRATIS</li>
                  <li>Strefa II (16-50 km): 100-150 zł (ryczałt)</li>
                  <li>Strefa III (powyżej 50 km): 2,00 zł / km w obie strony</li>
                </ul>
                <p className="text-white/75 mt-3">Przy pakiecie KOMPLETNY FESTYN dojazd do 50 km często bierzemy na siebie.</p>
              </div>
            </section>

            <section className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10" id="formularz-kontaktowy">
              <h3 className="text-primary font-bold uppercase tracking-wider mb-3">Chcesz zarezerwować termin?</h3>
              <p className="text-white/70 mb-6">Zadzwoń do nas lub napisz - sprawimy, że Twoi goście powiedzą: "JA YHYMM... to była impreza!"</p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Imię i nazwisko*</label>
                    <input type="text" required value={formData.fullName} onChange={(event) => updateFormData('fullName', event.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Telefon*</label>
                    <input type="tel" required value={formData.phone} onChange={(event) => updateFormData('phone', event.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Email*</label>
                    <input type="email" required value={formData.email} onChange={(event) => updateFormData('email', event.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Atrakcja*</label>
                    <div className="relative min-w-0">
                      <select required value={formData.attraction} onChange={(event) => updateFormData('attraction', event.target.value)} className="w-full max-w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10 truncate">
                        <option value="" className="bg-dark">Wybierz atrakcję</option>
                        <option className="bg-dark">Zjeżdżalnia Mario</option>
                        <option className="bg-dark">Ścianka wspinaczkowa</option>
                        <option className="bg-dark">Zamek klasyczny</option>
                        <option className="bg-dark">Żółw "Tropikalna Wysepka"</option>
                        <option className="bg-dark">Wytwornica piany</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Pakiet*</label>
                    <div className="relative min-w-0">
                      <select required value={formData.packageType} onChange={(event) => updateFormData('packageType', event.target.value)} className="w-full max-w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10 truncate">
                        <option value="" className="bg-dark">Wybierz pakiet</option>
                        <option className="bg-dark">URODZINOWY OGRÓD</option>
                        <option className="bg-dark">PRZYGODA I ADRENALINA</option>
                        <option className="bg-dark">KOMPLETNY FESTYN</option>
                        <option className="bg-dark">Wynajem indywidualny</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Termin*</label>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                      <div className="flex-1">
                        <input type="date" required value={formData.dateFrom} onChange={(event) => updateFormData('dateFrom', event.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                      </div>
                      <span className="text-primary font-bold self-center">-</span>
                      <div className="flex-1">
                        <input type="date" required value={formData.dateTo} onChange={(event) => updateFormData('dateTo', event.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Wiadomość</label>
                  <textarea rows={5} value={formData.message} onChange={(event) => updateFormData('message', event.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" />
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  Przed wysłaniem zapytania zapoznaj się z{' '}
                  <button type="button" className="text-primary font-semibold hover:underline" onClick={() => setIsRegulationsOpen(true)}>
                    Regulaminem
                  </button>
                  .
                </p>
                <button type="submit" className="w-full btn-primary py-4 text-lg">Wyślij formularz</button>
              </form>
            </section>
          </div>
        </section>
      </main>

      {isRegulationsOpen && (
        <div className="fixed inset-0 z-[120] bg-dark/90 backdrop-blur-sm p-4 md:p-6 flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Regulamin dmuchańce i eventy" onClick={() => setIsRegulationsOpen(false)}>
          <div className="w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl border border-white/10 bg-dark-lighter p-6 md:p-8" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4 mb-5">
              <h3 className="text-primary font-bold uppercase tracking-wider">Regulamin i umowa wynajmu atrakcji</h3>
              <button type="button" className="rounded-full border border-white/20 p-2 text-white hover:text-primary hover:border-primary/40 transition-colors" onClick={() => setIsRegulationsOpen(false)} aria-label="Zamknij regulamin">
                <X size={18} />
              </button>
            </div>
            <pre className="text-white/75 whitespace-pre-wrap leading-relaxed text-sm md:text-base font-sans">{REGULATIONS_TEXT}</pre>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
