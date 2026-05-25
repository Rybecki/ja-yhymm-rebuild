import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { X, ChevronDown } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PhotoBottomScrim } from '../components/PhotoBottomScrim';
import { GalleryLightbox, type GalleryImageItem } from '../components/GalleryLightbox';
import { RentalFormSummary } from '../components/RentalFormSummary';
import { getRentalRegulationText } from '../data/rentalRegulations';
import { RENTAL_CONTENT_WIDE, RENTAL_GLASS_INNER } from '../constants/rentalPageLayout';
import { FormRecaptcha, FormSubmitButton, FormSubmitFeedback } from '../components/FormRecaptcha';
import { PhoneInput } from '../components/PhoneInput';
import { calculateVipBusPricing, formatPaymentForEmail, formatSummaryForEmail } from '../data/rentalFormPricing';
import { submitRentalForm } from '../lib/rentalFormSubmit';
import { useRecaptcha } from '../hooks/useRecaptcha';

const VIP_BUS_HERO_SRC = '/images/wypozyczalnia/vip-bus/bus-hero.png';

const VIP_BUS_GALLERY: GalleryImageItem[] = [
  {
    src: '/images/wypozyczalnia/vip-bus/bus-1.png',
    alt: 'VIP Bus Renault Master — widok zewnętrzny całego pojazdu z otwartymi drzwiami',
  },
  {
    src: '/images/wypozyczalnia/vip-bus/bus-2.png',
    alt: 'Wnętrze VIP Bus — fotele skórzane i drewniana podłoga',
  },
  {
    src: '/images/wypozyczalnia/vip-bus/bus-3.png',
    alt: 'VIP Bus — kabina z monitorem na suficie i oświetleniem LED',
  },
  {
    src: '/images/wypozyczalnia/vip-bus/bus-4.png',
    alt: 'VIP Bus — kokpit i fotele pasażerskie z widokiem na przód',
  },
];

const REGULATIONS_TEXT = getRentalRegulationText('vip-bus');

export default function RentalVipBusPage() {
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
    passengers: '',
    dateFrom: '',
    dateTo: '',
    message: '',
  });

  const updateFormData = (field: keyof typeof formData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const priceSummary = useMemo(() => calculateVipBusPricing(formData.packageType), [formData.packageType]);

  const equipmentLabel = useMemo(() => {
    const parts = ['VIP Bus'];
    if (formData.packageType) parts.push(formData.packageType);
    if (formData.passengers) parts.push(`${formData.passengers} pasażerów`);
    return parts.join(' – ');
  }, [formData.packageType, formData.passengers]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    localStorage.setItem('vipBusForm', JSON.stringify(formData));

    const body = [
      'Formularz: VIP BUS (/wypozyczalnia/vip-bus)',
      '',
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
      formatSummaryForEmail(priceSummary),
      formatPaymentForEmail(formData.fullName, equipmentLabel),
    ].join('\n');

    await submitRentalForm(event, recaptcha, {
      subject: 'Formularz: VIP BUS',
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
        <section className="section-padding border-b border-white/5 relative overflow-hidden min-h-[56vh] md:min-h-[68vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${VIP_BUS_HERO_SRC})`, backgroundPosition: 'center 40%' }}
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
              <span className="text-white/80">VIP Bus</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">Wypożyczalnia</h1>
            <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight">
              Podróżuj w Standardzie VIP - Komfort, Na Który Zasługujesz
            </motion.h2>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className={`${RENTAL_CONTENT_WIDE} space-y-8`}>
            <div className={`glass-card ${RENTAL_GLASS_INNER} space-y-5`}>
              <h3 className="text-primary font-bold uppercase tracking-wider">VIP BUS A Bo Co...</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                Szukasz transportu, który połączy bezpieczeństwo, prestiż i najwyższą wygodę? Nasz nowy, 9-osobowy bus klasy VIP to mobilny salon,
                w którym każda trasa, od krótkiego transferu po daleką podróż staje się czystą przyjemnością.
              </p>
              <p className="text-white/75 leading-relaxed">To wnętrze wykonane na specjalne zamówienie, z myślą o najbardziej wymagających pasażerach.</p>
            </div>

            <section className={`glass-card ${RENTAL_GLASS_INNER} space-y-6`}>
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
                {VIP_BUS_GALLERY.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    className="rounded-2xl overflow-hidden border border-primary/40 bg-white/5 text-left cursor-zoom-in"
                    onClick={() => setPhotoGallery({ images: VIP_BUS_GALLERY, index })}
                    aria-label={`Powiększ: ${item.alt}`}
                  >
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover aspect-[4/3] pointer-events-none" loading="lazy" />
                  </button>
                ))}
              </div>
            </section>

            <section className={`glass-card ${RENTAL_GLASS_INNER} space-y-8`}>
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
                Asysta ubezpieczenia: pomoc przy zasilaniu i pełne wsparcie w sieci. Gotowy na bezpieczną i komfortową podróż?
                Zapnij pasy i poczuj różnicę. Zadzwoń do nas lub wypełnij formularz, aby otrzymać bezpłatną wycenę w 15 minut.
              </p>
            </section>

            <section className={`glass-card ${RENTAL_GLASS_INNER}`} id="formularz-kontaktowy">
              <h3 className="text-primary font-bold uppercase tracking-wider mb-3">Zapytaj o darmową wycenę</h3>
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
