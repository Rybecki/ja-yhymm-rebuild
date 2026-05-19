import { motion } from 'motion/react';
import type { RentalPriceSummary } from '../data/rentalFormPricing';
import { RENTAL_BANK_ACCOUNT, formatPln, formatRentalTransferTitle } from '../data/rentalFormPricing';

type RentalFormSummaryProps = {
  summary: RentalPriceSummary;
  renterName?: string;
  equipmentLabel?: string;
};

type RentalFormPaymentInfoProps = {
  renterName?: string;
  equipmentLabel?: string;
};

export function RentalFormPaymentInfo({ renterName = '', equipmentLabel = '' }: RentalFormPaymentInfoProps) {
  const transferTitle = formatRentalTransferTitle(renterName, equipmentLabel);

  return (
    <motion.div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6 space-y-4">
      <h4 className="text-primary font-bold uppercase tracking-wider text-sm">Możliwości płatności</h4>
      <ul className="space-y-2 text-white/80 text-sm leading-relaxed">
        <li className="flex gap-2">
          <span className="text-primary shrink-0" aria-hidden>
            •
          </span>
          <span>
            <strong className="text-white">Na miejscu:</strong> karta płatnicza lub BLIK (terminal mobilny przy wydaniu
            sprzętu / na evencie).
          </span>
        </li>
        <li className="flex gap-2">
          <span className="text-primary shrink-0" aria-hidden>
            •
          </span>
          <span>
            <strong className="text-white">Przedpłata:</strong> przelew bankowy na konto{' '}
            <strong className="text-white">{RENTAL_BANK_ACCOUNT.company}</strong> — rezerwacja potwierdzona po
            zaksięgowaniu wpłaty.
          </span>
        </li>
      </ul>

      <motion.div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2 text-sm">
        <p className="text-white/60 text-xs uppercase tracking-widest">Numer konta</p>
        <p className="font-mono text-white font-semibold tracking-tight break-all">{RENTAL_BANK_ACCOUNT.number}</p>
        <p className="text-white/60 text-xs uppercase tracking-widest pt-2">Tytuł przelewu</p>
        <p className="text-primary font-semibold break-words">{transferTitle}</p>
        <p className="text-white/50 text-xs leading-relaxed">
          W tytule podaj imię i nazwisko osoby wynajmującej oraz rodzaj sprzętu (np. „Jan Kowalski – kajaki”).
        </p>
      </motion.div>

      <p className="text-white/55 text-xs leading-relaxed">
        Kaucja zwrotna (jeśli dotyczy) pobierana przy odbiorze i zwracana po zwrocie sprzętu w stanie zgodnym z regulaminem.
      </p>
    </motion.div>
  );
}

export function RentalFormSummary({ summary, renterName = '', equipmentLabel = '' }: RentalFormSummaryProps) {
  return (
    <motion.div className="space-y-5">
      <motion.div className="rounded-2xl border border-primary/35 bg-primary/5 p-5 md:p-6 space-y-4">
        <h4 className="text-primary font-bold uppercase tracking-wider text-sm">Podsumowanie cenowe</h4>

        {summary.emptyMessage && summary.lines.length === 0 ? (
          <p className="text-white/65 text-sm leading-relaxed">{summary.emptyMessage}</p>
        ) : summary.lines.length === 0 ? (
          <p className="text-white/65 text-sm leading-relaxed">Uzupełnij pola formularza, aby zobaczyć podsumowanie cenowe.</p>
        ) : (
          <>
            <ul className="space-y-2">
              {summary.lines.map((line) => (
                <li key={`${line.label}-${line.value}`} className="flex justify-between gap-4 text-sm">
                  <span className="text-white/75">{line.label}</span>
                  <span className="text-white font-semibold text-right shrink-0">{line.value}</span>
                </li>
              ))}
            </ul>

            {(summary.subtotal != null || summary.deposit != null || summary.total != null) && (
              <motion.div className="border-t border-white/10 pt-4 space-y-2">
                {summary.subtotal != null && (
                  <motion.div className="flex justify-between gap-4 text-sm">
                    <span className="text-white/70">{summary.subtotalLabel}</span>
                    <span className="text-primary font-bold">{formatPln(summary.subtotal)}</span>
                  </motion.div>
                )}
                {summary.deposit != null && (
                  <motion.div className="flex justify-between gap-4 text-sm">
                    <span className="text-white/70">Kaucja zwrotna</span>
                    <span className="text-white font-semibold">{formatPln(summary.deposit)}</span>
                  </motion.div>
                )}
                {summary.total != null && (
                  <motion.div className="flex justify-between gap-4 pt-2 border-t border-white/10">
                    <span className="text-white font-semibold">{summary.totalLabel}</span>
                    <span className="text-primary font-extrabold text-lg">{formatPln(summary.total)}</span>
                  </motion.div>
                )}
              </motion.div>
            )}

            {summary.isEstimate && summary.lines.length > 0 && (
              <p className="text-white/55 text-xs italic">Kwoty orientacyjne — ostateczna wycena po potwierdzeniu rezerwacji.</p>
            )}

            {summary.note && <p className="text-white/60 text-xs leading-relaxed">{summary.note}</p>}
          </>
        )}
      </motion.div>

      <RentalFormPaymentInfo renterName={renterName} equipmentLabel={equipmentLabel} />
    </motion.div>
  );
}
