import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { X, ChevronDown } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const KAYAK_IMAGES = ['/images/wypozyczalnia/kajaki/kajak-1.png', '/images/wypozyczalnia/kajaki/kajak-2.png'];

const REGULATIONS_TEXT = `REGULAMIN WYPOŻYCZALNI KAJAKO-MOBIL
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
Podpis Wynajmującego Podpis Najemcy`;

export default function RentalKayaksPage() {
  const [isRegulationsOpen, setIsRegulationsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    kayakType: '',
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

    localStorage.setItem('kayakRentalForm', JSON.stringify(formData));

    const body = [
      'Nowe zapytanie o rezerwacje kajakow:',
      '',
      `Imie i nazwisko: ${formData.fullName}`,
      `Telefon: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Rodzaj zestawu: ${formData.kayakType}`,
      `Pakiet: ${formData.packageType}`,
      `Data od: ${formData.dateFrom}`,
      `Data do: ${formData.dateTo}`,
      '',
      'Wiadomosc:',
      formData.message || '-',
    ].join('\n');

    window.location.href = `mailto:biuro@ja-yhymm.pl?subject=${encodeURIComponent('Rezerwacja kajakow')}&body=${encodeURIComponent(body)}`;
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
    const saved = localStorage.getItem('kayakRentalForm');
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
        <section
          className="section-padding border-b border-white/5 bg-cover bg-center relative"
          style={{ backgroundImage: "linear-gradient(rgba(8,12,18,0.68), rgba(8,12,18,0.8)), url('/images/wypozyczalnia/kajaki/kajaki-hero.png')" }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <nav className="text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-primary transition-colors">
                Strona główna
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Wypożyczalnia</span>
              <span className="mx-2">/</span>
              <span className="text-white/80">Kajaki</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">Wypożyczalnia</h1>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight"
            >
              KAJAKO-MOBIL A Bo Co... Twoja przygoda, Twoje zasady.
            </motion.h2>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className="max-w-6xl mx-auto px-6 space-y-8">
            <div className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10 space-y-5">
              <h3 className="text-primary font-bold uppercase tracking-wider">Wolność płynie z Tobą</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                Wypożyczalnia KAJAKO-MOBIL to projekt stworzony przez pasjonatów ze spółki A Bo Co... oraz Fundacji JA YHYMM...
                Integracja Sport Turystyka Wypoczynek.
              </p>
              <p className="text-white/75 leading-relaxed">
                Nasza filozofia jest prosta: nie ograniczamy Cię do jednej rzeki. Nie jesteśmy typową przystanią. U nas to Ty decydujesz,
                gdzie zwodujesz kajak. Chcesz sprawdzić ukryte jezioro? A może marzy Ci się spływ rzeką, na której nie ma komercyjnych
                tłumów? My dajemy Ci sprzęt i logistykę, Ty zabierasz mapę i wyobraźnię.
              </p>
            </div>

            <section className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10 space-y-6">
              <h3 className="text-primary font-bold uppercase tracking-wider">Dlaczego warto wybrać KAJAKO-MOBIL?</h3>
              <ul className="list-disc pl-6 text-white/75 space-y-2">
                <li>Pancerny sprzęt: nowoczesne kajaki polietylenowe, wytrzymałe, stabilne i bezpieczne.</li>
                <li>Pełny zestaw: 2 wiosła, kamizelki asekuracyjne i opcjonalne trzecie siedzisko dla dziecka (gratis).</li>
                <li>Mobilność 100%: odbiór osobisty lub dostawa pod drzwi / nad brzeg wody.</li>
                <li>Wsparcie misji: korzystając z usług, wspierasz działania statutowe Fundacji JA YHYMM...</li>
              </ul>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                {KAYAK_IMAGES.map((src, index) => (
                  <motion.div key={src} whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="group relative overflow-visible pb-2">
                    <img src={src} alt={`Kajak - zdjęcie ${index + 1}`} className="w-full aspect-[4/3] object-contain bg-transparent" loading="lazy" />
                    <span className="pointer-events-none absolute left-0 right-0 bottom-0 h-0.5 bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </motion.div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h4 className="text-primary font-bold mb-2">Gdzie nas znajdziesz? - Sezon letni</h4>
                  <p className="text-white/70">Jesteśmy w samym sercu Jury Krakowsko-Częstochowskiej, gotowi na Twoje zapytania.</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h4 className="text-primary font-bold mb-2">Poza sezonem</h4>
                  <p className="text-white/70">Nasza baza mieści się w Katowicach, ul. Niwna 9.</p>
                </div>
              </div>
            </section>

            <section className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10 space-y-8">
              <div>
                <h3 className="text-primary font-bold uppercase tracking-wider mb-3">Dostawa i odbiór</h3>
                <p className="text-white/75 leading-relaxed mb-5">Nie masz bagażnika dachowego? Żaden problem. Przywieziemy kajaki tam, gdzie ich potrzebujesz.</p>
                <div className="space-y-3 md:hidden">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">do 15 km</p>
                    <p className="text-primary font-bold mt-1">BEZPŁATNIE (przy min. 2 kajakach)</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">powyżej 15 km</p>
                    <p className="text-primary font-bold mt-1">2,50 zł / km (w obie strony)</p>
                  </div>
                </div>
                <div className="hidden md:block rounded-2xl border border-white/10 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs">Odległość od bazy</th>
                        <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs">Koszt transportu</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">do 15 km</td>
                        <td className="px-4 py-3 text-primary font-bold">BEZPŁATNIE (przy min. 2 kajakach)</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">powyżej 15 km</td>
                        <td className="px-4 py-3 text-primary font-bold">2,50 zł / km (w obie strony)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-white/75 mt-4">Odbiór własny: 0 zł. Pomagamy w bezpiecznym montażu na Twoim aucie.</p>
              </div>

              <div>
                <h3 className="text-primary font-bold uppercase tracking-wider mb-3">Cennik i pakiety</h3>
                <p className="text-white/75 leading-relaxed mb-5">Cena obejmuje kajak, 2 wiosła i 2-3 kamizelki.</p>
                <div className="space-y-3 md:hidden">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">Doba (1-2 dni)</p>
                    <p className="text-primary font-bold mt-1">90 zł / doba</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">Weekend (pt-nd)</p>
                    <p className="text-primary font-bold mt-1">220 zł (oszczędzasz 50 zł)</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">Kaucja zwrotna</p>
                    <p className="text-primary font-bold mt-1">200 zł / kajak</p>
                  </div>
                </div>
                <div className="hidden md:block rounded-2xl border border-white/10 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs">Usługa</th>
                        <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs">Cena</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">Doba (1-2 dni)</td>
                        <td className="px-4 py-3 text-primary font-bold">90 zł / doba</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">Weekend (pt-nd)</td>
                        <td className="px-4 py-3 text-primary font-bold">220 zł (oszczędzasz 50 zł)</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">Kaucja zwrotna</td>
                        <td className="px-4 py-3 text-primary font-bold">200 zł / kajak</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h4 className="text-white font-bold mb-2">Pakiet "Mała Flota" (3-4 kajaki)</h4>
                  <p className="text-primary font-bold">-10% od ceny całkowitej</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h4 className="text-white font-bold mb-2">Pakiet "Wyprawa" (5+ kajaków)</h4>
                  <p className="text-primary font-bold">-15% + transport do 30 km w cenie</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-primary font-bold">Formy płatności</h4>
                <ul className="list-disc pl-6 text-white/75 space-y-1.5">
                  <li>BLIK / Przelew na telefon</li>
                  <li>Karta płatnicza (terminal u kierowcy)</li>
                  <li>Szybki przelew online (Przelewy24/PayU)</li>
                  <li>Gotówka przy odbiorze sprzętu</li>
                </ul>
              </div>

              <p className="text-white/75 leading-relaxed">
                Kajaki polietylenowe są lżejsze niż myślisz. Dwuosobowy model waży około 35-40 kg. Jeśli Twoje auto ma relingi, transport
                na dachu jest prosty - dostarczymy pasy i podkładki.
              </p>
            </section>

            <section className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10" id="formularz-kontaktowy">
              <h3 className="text-primary font-bold uppercase tracking-wider mb-3">Zarezerwuj swój termin już dziś</h3>
              <p className="text-white/70 mb-6">A Bo Co... sp. z o.o. Wspierane przez Fundację JA YHYMM...</p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Imię i nazwisko*</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(event) => updateFormData('fullName', event.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Telefon*</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(event) => updateFormData('phone', event.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Email*</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(event) => updateFormData('email', event.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Rodzaj zestawu*</label>
                    <div className="relative min-w-0">
                      <select
                        required
                        value={formData.kayakType}
                        onChange={(event) => updateFormData('kayakType', event.target.value)}
                        className="w-full max-w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10 truncate"
                      >
                        <option value="" className="bg-dark">
                          Wybierz zestaw
                        </option>
                        <option className="bg-dark">Kajak 2-osobowy + osprzęt</option>
                        <option className="bg-dark">Kajak 2-osobowy + osprzęt + siedzisko dziecka</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Pakiet*</label>
                    <div className="relative min-w-0">
                      <select
                        required
                        value={formData.packageType}
                        onChange={(event) => updateFormData('packageType', event.target.value)}
                        className="w-full max-w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10 truncate"
                      >
                        <option value="" className="bg-dark">
                          Wybierz pakiet
                        </option>
                        <option className="bg-dark">Doba (1-2 dni)</option>
                        <option className="bg-dark">Weekend (pt-nd)</option>
                        <option className="bg-dark">Pakiet Mała Flota (3-4 kajaki)</option>
                        <option className="bg-dark">Pakiet Wyprawa (5+ kajaków)</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Termin*</label>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                      <div className="flex-1">
                        <input
                          type="date"
                          required
                          value={formData.dateFrom}
                          onChange={(event) => updateFormData('dateFrom', event.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <span className="text-primary font-bold self-center">-</span>
                      <div className="flex-1">
                        <input
                          type="date"
                          required
                          value={formData.dateTo}
                          onChange={(event) => updateFormData('dateTo', event.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Wiadomość</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(event) => updateFormData('message', event.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  Przed rezerwacją zapoznaj się z{' '}
                  <button type="button" className="text-primary font-semibold hover:underline" onClick={() => setIsRegulationsOpen(true)}>
                    Regulaminem
                  </button>
                  , który podpiszesz przed wydaniem sprzętu.
                </p>
                <button type="submit" className="w-full btn-primary py-4 text-lg">
                  Wyślij formularz
                </button>
              </form>
            </section>
          </div>
        </section>
      </main>

      {isRegulationsOpen && (
        <div
          className="fixed inset-0 z-[120] bg-dark/90 backdrop-blur-sm p-4 md:p-6 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Regulamin wypożyczalni kajaków"
          onClick={() => setIsRegulationsOpen(false)}
        >
          <div
            className="w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl border border-white/10 bg-dark-lighter p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <h3 className="text-primary font-bold uppercase tracking-wider">Regulamin i umowa najmu</h3>
              <button
                type="button"
                className="rounded-full border border-white/20 p-2 text-white hover:text-primary hover:border-primary/40 transition-colors"
                onClick={() => setIsRegulationsOpen(false)}
                aria-label="Zamknij regulamin"
              >
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
