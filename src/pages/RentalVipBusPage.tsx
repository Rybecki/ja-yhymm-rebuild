import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { X, ChevronDown } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const VIP_BUS_IMAGES = [
  '/images/wypozyczalnia/vip-bus/bus-1.png',
  '/images/wypozyczalnia/vip-bus/bus-2.png',
  '/images/wypozyczalnia/vip-bus/bus-3.png',
  '/images/wypozyczalnia/vip-bus/bus-4.png',
];

const REGULATIONS_TEXT = `REGULAMIN USŁUGI VIP BUS A BO CO...
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

Podpis Wynajmującego: ____________________  Podpis Zamawiającego: ____________________`;

export default function RentalVipBusPage() {
  const [isRegulationsOpen, setIsRegulationsOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    packageType: '',
    passengers: '',
    dateFrom: '',
    dateTo: '',
    message: '',
  });

  const updateFormData = (field: keyof typeof formData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('vipBusForm', JSON.stringify(formData));

    const body = [
      'Nowe zapytanie o VIP BUS:',
      '',
      `Imie i nazwisko: ${formData.fullName}`,
      `Telefon: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Pakiet: ${formData.packageType}`,
      `Liczba pasazerow: ${formData.passengers}`,
      `Data od: ${formData.dateFrom}`,
      `Data do: ${formData.dateTo}`,
      '',
      'Wiadomosc:',
      formData.message || '-',
    ].join('\n');

    window.location.href = `mailto:biuro@ja-yhymm.pl?subject=${encodeURIComponent('Zapytanie VIP BUS')}&body=${encodeURIComponent(body)}`;
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
    if (!lightboxImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxImage(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxImage]);

  useEffect(() => {
    const saved = localStorage.getItem('vipBusForm');
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
              <span className="text-white/80">VIP Bus</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">Wypożyczalnia</h1>
            <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight">
              Podróżuj w Standardzie VIP - Komfort, Na Który Zasługujesz
            </motion.h2>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className="max-w-6xl mx-auto px-6 space-y-8">
            <div className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10 space-y-5">
              <h3 className="text-primary font-bold uppercase tracking-wider">VIP BUS A Bo Co...</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                Szukasz transportu, który połączy bezpieczeństwo, prestiż i najwyższą wygodę? Nasz nowy, 9-osobowy bus klasy VIP to mobilny salon,
                w którym każda trasa, od krótkiego transferu po daleką podróż staje się czystą przyjemnością.
              </p>
              <p className="text-white/75 leading-relaxed">To wnętrze wykonane na specjalne zamówienie, z myślą o najbardziej wymagających pasażerach.</p>
            </div>

            <section className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10 space-y-6">
              <h3 className="text-primary font-bold uppercase tracking-wider">Co znajdziesz na pokładzie?</h3>
              <ul className="list-disc pl-6 text-white/75 space-y-2">
                <li><span className="text-primary font-semibold">Ergonomiczne fotele:</span> osobno regulowane siedziska z podłokietnikami dla każdego pasażera.</li>
                <li><span className="text-primary font-semibold">Rozrywka w trasie:</span> system DVD z monitorem Blaupunkt oraz stabilne Wi-Fi.</li>
                <li><span className="text-primary font-semibold">Pełna elektryka:</span> gniazda USB przy każdym fotelu.</li>
                <li><span className="text-primary font-semibold">Komfort termiczny:</span> dwustrefowa klimatyzacja + ogrzewanie postojowe Webasto.</li>
                <li><span className="text-primary font-semibold">Atmosfera premium:</span> alcantara i nastrojowe czerwone oświetlenie LED.</li>
                <li><span className="text-primary font-semibold">Ogromna przestrzeń bagażowa:</span> dwupoziomowa zabudowa bagażnika dla całej grupy.</li>
              </ul>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                {VIP_BUS_IMAGES.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    className="rounded-2xl overflow-hidden border border-primary/40 bg-white/5 text-left cursor-zoom-in"
                    onClick={() => setLightboxImage(src)}
                    aria-label={`Powiększ zdjęcie VIP Bus ${index + 1}`}
                  >
                    <img src={src} alt={`VIP Bus - zdjęcie ${index + 1}`} className="w-full h-full object-cover aspect-[4/3]" loading="lazy" />
                  </button>
                ))}
              </div>
            </section>

            <section className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10 space-y-8">
              <div>
                <h3 className="text-primary font-bold uppercase tracking-wider mb-3">Nasze pakiety i cennik</h3>
                <p className="text-white/75 leading-relaxed mb-5">
                  Podane ceny są kwotami netto i mają charakter poglądowy. Każde zlecenie wyceniamy indywidualnie.
                </p>
                <div className="space-y-3 md:hidden">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">LOKALNY (Short Distance)</p>
                    <p className="text-primary font-bold mt-1">150-200 PLN / godz. (min. 3h), do 50 km w cenie</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">TRASA (Long Distance)</p>
                    <p className="text-primary font-bold mt-1">2,50-3,50 PLN / km, postój 500-800 PLN / dzień</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">BUSINESS VIP</p>
                    <p className="text-primary font-bold mt-1">od 1 200 PLN / 8h</p>
                  </div>
                </div>
                <div className="hidden md:block rounded-2xl border border-white/10 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs">Pakiet</th>
                        <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs">Cena / zakres</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">LOKALNY (Short Distance)</td>
                        <td className="px-4 py-3 text-primary font-bold">150-200 PLN / godz. (min. 3h), do 50 km w cenie</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">TRASA (Long Distance)</td>
                        <td className="px-4 py-3 text-primary font-bold">2,50-3,50 PLN / km, postój 500-800 PLN / dzień</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">BUSINESS VIP</td>
                        <td className="px-4 py-3 text-primary font-bold">od 1 200 PLN / 8h</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-primary font-bold">Dlaczego my?</h4>
                <ul className="list-disc pl-6 text-white/75 space-y-1.5">
                  <li>Pełna homologacja i wszystkie certyfikaty do profesjonalnego przewozu osób.</li>
                  <li>Elastyczna trasa i postoje dopasowane do Twoich potrzeb.</li>
                  <li>Wysoki standard każdej podróży - od pierwszego kilometra.</li>
                  <li>Asysta kierowcy: pomoc przy bagażu i pełne wsparcie w trasie.</li>
                </ul>
              </div>

              <p className="text-white/75 leading-relaxed">
                Gotowy na bezpieczną i komfortową podróż? Zapnij pasy i poczuj różnicę. Zadzwoń do nas lub wypełnij formularz,
                aby otrzymać darmową wycenę w 15 minut.
              </p>
            </section>

            <section className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10" id="formularz-kontaktowy">
              <h3 className="text-primary font-bold uppercase tracking-wider mb-3">Zapytaj o darmową wycenę</h3>
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
                    <label className="text-xs uppercase tracking-widest text-white/40">Pakiet*</label>
                    <div className="relative min-w-0">
                      <select required value={formData.packageType} onChange={(event) => updateFormData('packageType', event.target.value)} className="w-full max-w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none pr-10 truncate">
                        <option value="" className="bg-dark">Wybierz pakiet</option>
                        <option className="bg-dark">LOKALNY (Short Distance)</option>
                        <option className="bg-dark">TRASA (Long Distance)</option>
                        <option className="bg-dark">BUSINESS VIP</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Liczba pasażerów*</label>
                    <input type="number" min={1} max={9} required value={formData.passengers} onChange={(event) => updateFormData('passengers', event.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
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
        <div className="fixed inset-0 z-[120] bg-dark/90 backdrop-blur-sm p-4 md:p-6 flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Regulamin usługi VIP Bus" onClick={() => setIsRegulationsOpen(false)}>
          <div className="w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl border border-white/10 bg-dark-lighter p-6 md:p-8" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4 mb-5">
              <h3 className="text-primary font-bold uppercase tracking-wider">Regulamin i umowa usługi VIP Bus</h3>
              <button type="button" className="rounded-full border border-white/20 p-2 text-white hover:text-primary hover:border-primary/40 transition-colors" onClick={() => setIsRegulationsOpen(false)} aria-label="Zamknij regulamin">
                <X size={18} />
              </button>
            </div>
            <pre className="text-white/75 whitespace-pre-wrap leading-relaxed text-sm md:text-base font-sans">{REGULATIONS_TEXT}</pre>
          </div>
        </div>
      )}

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[130] bg-black/90 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Powiększone zdjęcie VIP Bus"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 rounded-full border border-white/20 p-2 text-white hover:text-primary hover:border-primary/40 transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Zamknij podgląd zdjęcia"
          >
            <X size={18} />
          </button>
          <img
            src={lightboxImage}
            alt="VIP Bus - powiększenie"
            className="max-h-[90vh] max-w-full object-contain rounded-xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}
