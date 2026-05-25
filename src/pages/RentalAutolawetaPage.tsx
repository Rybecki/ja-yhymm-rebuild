import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronDown, X } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PhotoBottomScrim } from '../components/PhotoBottomScrim';
import { GalleryLightbox, type GalleryImageItem } from '../components/GalleryLightbox';
import { RentalFormSummary } from '../components/RentalFormSummary';
import { getRentalRegulationText } from '../data/rentalRegulations';
import { RENTAL_CONTENT_WIDE, RENTAL_GLASS_INNER } from '../constants/rentalPageLayout';
import { FormRecaptcha, FormSubmitButton, FormSubmitFeedback } from '../components/FormRecaptcha';
import { PhoneInput } from '../components/PhoneInput';
import { calculateAutolawetaPricing, formatPaymentForEmail, formatSummaryForEmail } from '../data/rentalFormPricing';
import { submitRentalForm } from '../lib/rentalFormSubmit';
import { useRecaptcha } from '../hooks/useRecaptcha';

const AUTOLAWETA_HERO_SRC = '/images/wypozyczalnia/autolaweta/laweta-1.png';

const AUTOLAWETA_GALLERY: readonly GalleryImageItem[] = [
  { src: '/images/wypozyczalnia/autolaweta/laweta-1.png', alt: 'Autolaweta z samochodem na platformie' },
  { src: '/images/wypozyczalnia/autolaweta/laweta-2.png', alt: 'Autolaweta z zabezpieczonym pojazdem na pace' },
  { src: '/images/wypozyczalnia/autolaweta/laweta-3.png', alt: 'Autolaweta — widok z boku z ładunkiem' },
  { src: '/images/wypozyczalnia/autolaweta/laweta-4.png', alt: 'Autolaweta z przyczepą kempingową na platformie' },
  { src: '/images/wypozyczalnia/autolaweta/laweta-5.png', alt: 'Autolaweta z drewnem na lawecie' },
  { src: '/images/wypozyczalnia/autolaweta/laweta-6.png', alt: 'Autolaweta — zestaw na placu' },
];

const REGULATIONS_TEXT = getRentalRegulationText('autolaweta');

export default function RentalAutolawetaPage() {
  const recaptcha = useRecaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<{ success?: string | null; error?: string | null }>({});
  const [isRegulationsOpen, setIsRegulationsOpen] = useState(false);
  const [photoGallery, setPhotoGallery] = useState<{ images: readonly GalleryImageItem[]; index: number } | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    packageType: '',
    cargoType: '',
    dateFrom: '',
    dateTo: '',
    message: '',
  });

  const updateFormData = (field: keyof typeof formData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const priceSummary = useMemo(() => calculateAutolawetaPricing(formData.packageType), [formData.packageType]);

  const equipmentLabel = useMemo(() => {
    const parts = ['autolaweta'];
    if (formData.packageType) parts.push(formData.packageType);
    if (formData.cargoType) parts.push(formData.cargoType);
    return parts.join(' – ');
  }, [formData.packageType, formData.cargoType]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    localStorage.setItem('autolawetaForm', JSON.stringify(formData));

    const body = [
      'Formularz: Auto-laweta (/wypozyczalnia/autolaweta)',
      '',
      'Nowe zapytanie o Auto-lawete:',
      '',
      `Imie i nazwisko: ${formData.fullName}`,
      `Telefon: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Pakiet: ${formData.packageType}`,
      `Rodzaj ladunku: ${formData.cargoType}`,
      `Data od: ${formData.dateFrom}`,
      `Data do: ${formData.dateTo}`,
      '',
      'Wiadomosc:',
      formData.message || '-',
      formatSummaryForEmail(priceSummary),
      formatPaymentForEmail(formData.fullName, equipmentLabel),
    ].join('\n');

    await submitRentalForm(event, recaptcha, {
      subject: 'Formularz: Auto-laweta',
      body,
      replyTo: formData.email,
      phone: formData.phone,
      setSubmitting: setIsSubmitting,
      setFeedback: setSubmitFeedback,
    });
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
    const saved = localStorage.getItem('autolawetaForm');
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
        <section className="section-padding border-b border-white/5 relative overflow-hidden min-h-[56vh] md:min-h-[68vh] flex items-center">
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: `url(${AUTOLAWETA_HERO_SRC})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 35%',
            }}
            aria-hidden
          />
          <div className="app-photo-scrim" aria-hidden />
          <PhotoBottomScrim />
          <div className={`${RENTAL_CONTENT_WIDE} relative z-10`}>
            <nav className="text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-primary transition-colors">
                Strona główna
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Wypożyczalnia</span>
              <span className="mx-2">/</span>
              <span className="text-white/80">Autolaweta</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">Wypożyczalnia</h1>
            <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight">
              Autolaweta 7-osobowa + Gabaryt
            </motion.h2>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className={`${RENTAL_CONTENT_WIDE} space-y-8`}>
            <div className={`glass-card ${RENTAL_GLASS_INNER} space-y-6`}>
              <h3 className="text-primary font-bold uppercase tracking-wider">Transport, który mieści więcej — ludzi i gabaryty</h3>
              <div className="space-y-4 border-l-2 border-primary/45 pl-5">
                <p className="text-white/80 leading-relaxed text-lg">
                  Szukasz transportu, który nie kończy się na samym pojeździe? Nasza specjalistyczna autolaweta z 7-osobową kabiną to idealne
                  rozwiązanie, gdy trzeba przewieźć ładunek razem z ekipą lub rodziną.
                </p>
                <p className="text-white/75 leading-relaxed">
                  Platforma nośna o wymiarach 220 cm × 470 cm i ładowności do 1,6 tony. Jeśli coś zmieści się na naszej lawecie — my to
                  przewieziemy.
                </p>
                <p className="text-white/75 leading-relaxed">
                  Duża kabina (6 pasażerów + kierowca): nie musisz dokładać drugiego auta tylko dla ludzi. Jedna jednostka, jedna trasa —
                  oszczędzasz czas i pieniądze.
                </p>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  Ceny mają charakter poglądowy i wynikają ze specyfikacji ładunku oraz trasy. Przy stałej współpracy oferujemy indywidualne
                  rabaty.
                </p>
              </div>
            </div>

            <section className={`glass-card ${RENTAL_GLASS_INNER} space-y-6`}>
              <h3 className="text-primary font-bold uppercase tracking-wider">Co najczęściej transportujemy?</h3>
              <ul className="list-disc pl-6 text-white/75 space-y-2">
                <li><span className="text-primary font-semibold">Pojazdy:</span> samochody osobowe, quady, motocykle, minikoparki.</li>
                <li><span className="text-primary font-semibold">Budownictwo:</span> materiały budowlane, profile, długie elementy, palety.</li>
                <li><span className="text-primary font-semibold">Ogród i rolnictwo:</span> kosiarki traktorki, mniejsze maszyny rolnicze.</li>
                <li><span className="text-primary font-semibold">Nietypowe ładunki:</span> konstrukcje stalowe, zbiorniki, meble, łodzie, kajaki, dmuchańce.</li>
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {AUTOLAWETA_GALLERY.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    className="group relative overflow-hidden rounded-2xl border border-primary/40 bg-white/5 text-left cursor-zoom-in"
                    onClick={() => setPhotoGallery({ images: AUTOLAWETA_GALLERY, index })}
                    aria-label={`Powiększ: ${item.alt}`}
                  >
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-[1.02] pointer-events-none" loading="lazy" />
                  </button>
                ))}
              </div>
            </section>

            <section className={`glass-card ${RENTAL_GLASS_INNER} space-y-8`}>
              <div>
                <h3 className="text-primary font-bold uppercase tracking-wider mb-3">Cennik i pakiety usług</h3>
                <p className="text-white/75 leading-relaxed mb-5">
                  Poniżej orientacyjne pakiety — ostateczna wycena zależy od trasy i ładunku (jak wyżej).
                </p>
                <div className="space-y-3 md:hidden">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">Pakiet Lokalny (Szybki Strzał)</p>
                    <p className="text-primary font-bold mt-1">do 30 km, od 250-350 zł</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">Pakiet Trasa (Polska)</p>
                    <p className="text-primary font-bold mt-1">powyżej 100 km, 2,50-3,20 zł / km (w obie strony)</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">Pakiet Ekipa Remontowa</p>
                    <p className="text-primary font-bold mt-1">wycena indywidualna</p>
                  </div>
                </div>
                <div className="hidden md:block rounded-2xl border border-white/10 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs">Pakiet</th>
                        <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs md:text-right">Warunki / cena</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">Pakiet Lokalny (Szybki Strzał)</td>
                        <td className="px-4 py-3 text-primary font-bold md:text-right">do 30 km, od 250-350 zł</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">Pakiet Trasa (Polska)</td>
                        <td className="px-4 py-3 text-primary font-bold md:text-right">powyżej 100 km, 2,50-3,20 zł / km (w obie strony)</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">Pakiet Ekipa Remontowa</td>
                        <td className="px-4 py-3 text-primary font-bold md:text-right">wycena indywidualna</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-primary font-bold mb-3">Parametry techniczne naszej jednostki</h4>
                <div className="space-y-3 md:hidden">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">Wymiary platformy</p>
                    <p className="text-primary font-bold mt-1">220 cm x 470 cm</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">Ładowność</p>
                    <p className="text-primary font-bold mt-1">do 1,6 tony</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">Liczba miejsc</p>
                    <p className="text-primary font-bold mt-1">7 (kierowca + 6 pasażerów)</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/70 text-sm">Wyposażenie</p>
                    <p className="text-primary font-bold mt-1">wyciągarka elektryczna, pasy transportowe, najazdy</p>
                  </div>
                </div>
                <div className="hidden md:block rounded-2xl border border-white/10 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs">Cecha</th>
                        <th className="px-4 py-3 text-white/60 uppercase tracking-wider text-xs md:text-right">Specyfikacja</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">Wymiary platformy</td>
                        <td className="px-4 py-3 text-primary font-bold md:text-right">220 cm x 470 cm</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">Ładowność</td>
                        <td className="px-4 py-3 text-primary font-bold md:text-right">do 1,6 tony</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">Liczba miejsc</td>
                        <td className="px-4 py-3 text-primary font-bold md:text-right">7 (kierowca + 6 pasażerów)</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-white/80">Wyposażenie</td>
                        <td className="px-4 py-3 text-primary font-bold md:text-right">wyciągarka elektryczna, pasy transportowe, najazdy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className={`glass-card ${RENTAL_GLASS_INNER}`} id="formularz-kontaktowy">
              <h3 className="text-primary font-bold uppercase tracking-wider mb-3">Zadzwoń i zapytaj o wolny termin</h3>
              <p className="text-white/70 mb-6">Działamy na terenie Katowic, aglomeracji śląskiej i całej Polski.</p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Imię i nazwisko*</label>
                    <input type="text" required value={formData.fullName} onChange={(event) => updateFormData('fullName', event.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Telefon*</label>
                    <PhoneInput
                      required
                      value={formData.phone}
                      onChange={(value) => updateFormData('phone', value)}
                    />
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
                        <option className="bg-dark">Pakiet Lokalny (Szybki Strzał)</option>
                        <option className="bg-dark">Pakiet Trasa (Polska)</option>
                        <option className="bg-dark">Pakiet Ekipa Remontowa</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Rodzaj ładunku*</label>
                    <input type="text" required value={formData.cargoType} onChange={(event) => updateFormData('cargoType', event.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
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
                <RentalFormSummary summary={priceSummary} renterName={formData.fullName} equipmentLabel={equipmentLabel} />
                <p className="text-sm text-white/70 leading-relaxed">
                  Przed wysłaniem zapytania zapoznaj się z{' '}
                  <button type="button" className="text-primary font-semibold hover:underline" onClick={() => setIsRegulationsOpen(true)}>
                    Regulaminem
                  </button>
                  .
                </p>
                <FormRecaptcha recaptcha={recaptcha} className="pt-2" />
                <FormSubmitFeedback message={submitFeedback.success} error={submitFeedback.error} />
                <FormSubmitButton verified={recaptcha.isVerified} verifying={isSubmitting || recaptcha.isVerifying}>
                  Wyślij formularz
                </FormSubmitButton>
              </form>
            </section>
          </div>
        </section>
      </main>

      {isRegulationsOpen && (
        <div className="fixed inset-0 z-[120] bg-dark/90 backdrop-blur-sm p-4 md:p-6 flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Regulamin usługi autolaweta" onClick={() => setIsRegulationsOpen(false)}>
          <div className="w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl border border-white/10 bg-dark-lighter p-6 md:p-8" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4 mb-5">
              <h3 className="text-primary font-bold uppercase tracking-wider">Regulamin i umowa usługi autolaweta</h3>
              <button type="button" className="rounded-full border border-white/20 p-2 text-white hover:text-primary hover:border-primary/40 transition-colors" onClick={() => setIsRegulationsOpen(false)} aria-label="Zamknij regulamin">
                <X size={18} />
              </button>
            </div>
            <pre className="text-white/75 whitespace-pre-wrap leading-relaxed text-sm md:text-base font-sans">{REGULATIONS_TEXT}</pre>
          </div>
        </div>
      )}

      {photoGallery ? (
        <GalleryLightbox
          images={photoGallery.images}
          index={photoGallery.index}
          onIndexChange={(i) => setPhotoGallery((g) => (g ? { ...g, index: i } : null))}
          onClose={() => setPhotoGallery(null)}
          zIndexClass="z-[135]"
        />
      ) : null}

      <Footer />
    </div>
  );
}
