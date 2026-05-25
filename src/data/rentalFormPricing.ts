export const RENTAL_BANK_ACCOUNT = {
  company: 'A Bo Co... Spółka z o.o.',
  number: '54 1050 1214 1000 0090 8549 4533',
} as const;

export function formatRentalTransferTitle(renterName: string, equipmentLabel: string): string {
  const name = renterName.trim();
  const equipment = equipmentLabel.trim();
  if (name && equipment) return `${name} – ${equipment}`;
  if (name) return `${name} – wynajem sprzętu`;
  if (equipment) return `Wynajem – ${equipment}`;
  return '[imię i nazwisko] – [sprzęt]';
}

export type PriceLine = {
  label: string;
  value: string;
  amount?: number;
};

export type RentalPriceSummary = {
  lines: PriceLine[];
  subtotal: number | null;
  subtotalLabel: string;
  deposit: number | null;
  total: number | null;
  totalLabel: string;
  note?: string;
  isEstimate: boolean;
  emptyMessage?: string;
};

export function formatPln(amount: number): string {
  return `${amount.toLocaleString('pl-PL')} zł`;
}

export function rentalDays(dateFrom: string, dateTo: string): number {
  if (!dateFrom || !dateTo) return 1;
  const start = new Date(`${dateFrom}T12:00:00`);
  const end = new Date(`${dateTo}T12:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 1;
  const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(1, diff);
}

function emptySummary(message: string): RentalPriceSummary {
  return {
    lines: [],
    subtotal: null,
    subtotalLabel: 'Szacunkowa opłata',
    deposit: null,
    total: null,
    totalLabel: 'Razem',
    isEstimate: true,
    emptyMessage: message,
  };
}

function lineAmount(label: string, amount: number): PriceLine {
  return { label, value: formatPln(amount), amount };
}

export function calculateKayakPricing(
  packageType: string,
  kayakCount: string,
  dateFrom: string,
  dateTo: string
): RentalPriceSummary {
  if (!packageType) {
    return emptySummary('Wybierz pakiet i liczbę kajaków, aby zobaczyć podsumowanie cenowe.');
  }

  const count = Math.max(1, Number.parseInt(kayakCount, 10) || 1);
  const days = rentalDays(dateFrom, dateTo);
  const lines: PriceLine[] = [];
  let rental = 0;

  if (packageType === 'Doba (1-2 dni)') {
    rental = 90 * count * days;
    lines.push(lineAmount(`Wynajem — ${count} kajak(ów) × ${days} doba/dób × 90 zł`, rental));
  } else if (packageType === 'Weekend (pt-nd)') {
    rental = 220 * count;
    lines.push(lineAmount(`Weekend — ${count} kajak(ów) × 220 zł`, rental));
  } else if (packageType.includes('Mała Flota')) {
    rental = Math.round(90 * count * days * 0.9);
    lines.push(lineAmount(`Wynajem z rabatem −10% — ${count} kajak(ów)`, rental));
  } else if (packageType.includes('Wyprawa')) {
    rental = Math.round(90 * count * days * 0.85);
    lines.push(lineAmount(`Wynajem z rabatem −15% — ${count} kajak(ów)`, rental));
    lines.push({ label: 'Transport do 30 km', value: 'w cenie pakietu' });
  } else {
    return emptySummary('Wybierz pakiet, aby zobaczyć podsumowanie cenowe.');
  }

  const deposit = 200 * count;

  return {
    lines,
    subtotal: rental,
    subtotalLabel: 'Opłata za wynajem',
    deposit,
    total: rental,
    totalLabel: 'Do zapłaty (wynajem)',
    note: `Kaucja zwrotna: ${formatPln(deposit)} — pobierana przy wydaniu sprzętu, zwracana po zwrocie.`,
    isEstimate: false,
  };
}

export function calculateEBikePricing(packageType: string, dateFrom: string, dateTo: string): RentalPriceSummary {
  if (!packageType) {
    return emptySummary('Wybierz pakiet, aby zobaczyć podsumowanie cenowe.');
  }

  const days = rentalDays(dateFrom, dateTo);
  const lines: PriceLine[] = [];
  let rental = 0;
  let deposit = 500;
  let bikes = 1;

  if (packageType === '1 rower') {
    rental = 150 * days;
    bikes = 1;
    deposit = 500;
    lines.push(lineAmount(`Wynajem — 1 rower × ${days} doba/dób × 150 zł`, rental));
  } else if (packageType.includes('Duo')) {
    rental = 270 * days;
    bikes = 2;
    deposit = 1000;
    lines.push(lineAmount(`Pakiet Duo — 2 rowery × ${days} doba/dób × 270 zł`, rental));
  } else if (packageType.includes('Rodzinny') || packageType.includes('Ekipa')) {
    rental = 500 * days;
    bikes = 4;
    deposit = 2000;
    lines.push(lineAmount(`Pakiet Rodzinny/Ekipa — 4 rowery × ${days} doba/dób × 500 zł`, rental));
  } else {
    return emptySummary('Wybierz pakiet, aby zobaczyć podsumowanie cenowe.');
  }

  return {
    lines,
    subtotal: rental,
    subtotalLabel: 'Opłata za wynajem',
    deposit,
    total: rental,
    totalLabel: 'Do zapłaty (wynajem)',
    note: `Kaucja zwrotna: ${formatPln(deposit)} (${bikes} rower(y/ów) × 500 zł) — przy wydaniu sprzętu.`,
    isEstimate: false,
  };
}

const INFLATABLE_ATTRACTION_PRICES: Record<string, number> = {
  'Zjeżdżalnia Mario': 1200,
  'Ścianka wspinaczkowa': 1500,
  'Zamek klasyczny': 700,
  'Żółw "Tropikalna Wysepka"': 1000,
  'Wytwornica piany': 900,
};

const INFLATABLE_PACKAGE_PRICES: Record<string, number> = {
  'URODZINOWY OGRÓD': 1200,
  'PRZYGODA I ADRENALINA': 2200,
  'KOMPLETNY FESTYN': 4500,
};

export function calculateInflatablesPricing(packageType: string, attraction: string): RentalPriceSummary {
  if (!packageType) {
    return emptySummary('Wybierz pakiet lub atrakcję, aby zobaczyć podsumowanie cenowe.');
  }

  const lines: PriceLine[] = [];
  let total: number | null = null;

  if (packageType === 'Wynajem indywidualny') {
    if (!attraction) {
      return emptySummary('Wybierz atrakcję przy wynajmie indywidualnym.');
    }
    const price = INFLATABLE_ATTRACTION_PRICES[attraction];
    if (!price) {
      return {
        lines: [{ label: packageType, value: attraction }],
        subtotal: null,
        subtotalLabel: 'Cena pakietu',
        deposit: null,
        total: null,
        totalLabel: 'Razem',
        note: 'Ostateczna wycena zostanie potwierdzona po kontakcie.',
        isEstimate: true,
      };
    }
    total = price;
    lines.push(lineAmount(`Wynajem — ${attraction}`, price));
  } else {
    const price = INFLATABLE_PACKAGE_PRICES[packageType];
    if (!price) {
      return emptySummary('Wybierz pakiet, aby zobaczyć podsumowanie cenowe.');
    }
    total = price;
    lines.push(lineAmount(`Pakiet — ${packageType}`, price));
  }

  return {
    lines,
    subtotal: total,
    subtotalLabel: 'Cena pakietu (6 h obsługi w cenie)',
    deposit: null,
    total,
    totalLabel: 'Do zapłaty',
    note: 'Dojazd wyceniamy osobno według stref (do 15 km — gratis).',
    isEstimate: packageType === 'Wynajem indywidualny',
  };
}

export function calculateAutolawetaPricing(packageType: string): RentalPriceSummary {
  if (!packageType) {
    return emptySummary('Wybierz pakiet, aby zobaczyć orientacyjne widełki cenowe.');
  }

  const ranges: Record<string, { lines: PriceLine[]; note: string }> = {
    'Pakiet Lokalny (Szybki Strzał)': {
      lines: [{ label: 'Pakiet lokalny (do 30 km)', value: 'od 250–350 zł' }],
      note: 'Ostateczna cena zależy od trasy i ładunku.',
    },
    'Pakiet Trasa (Polska)': {
      lines: [{ label: 'Pakiet trasa (pow. 100 km)', value: '2,50–3,20 zł / km (w obie strony)' }],
      note: 'Wycena po ustaleniu dystansu i parametrów ładunku.',
    },
    'Pakiet Ekipa Remontowa': {
      lines: [{ label: 'Pakiet ekipa remontowa', value: 'wycena indywidualna' }],
      note: 'Skontaktujemy się z ofertą dopasowaną do zlecenia.',
    },
  };

  const match = ranges[packageType];
  if (!match) {
    return emptySummary('Wybierz pakiet, aby zobaczyć orientacyjne widełki cenowe.');
  }

  return {
    lines: match.lines,
    subtotal: null,
    subtotalLabel: 'Orientacyjna wycena',
    deposit: null,
    total: null,
    totalLabel: 'Razem',
    note: match.note,
    isEstimate: true,
  };
}

export function calculateVipBusPricing(packageType: string): RentalPriceSummary {
  if (!packageType) {
    return emptySummary('Wybierz pakiet, aby zobaczyć orientacyjne widełki cenowe.');
  }

  const ranges: Record<string, PriceLine> = {
    'LOKALNY (Short Distance)': {
      label: 'Pakiet LOKALNY',
      value: '150–200 zł / godz. (min. 3 h), do 50 km w cenie',
    },
    'TRASA (Long Distance)': {
      label: 'Pakiet TRASA',
      value: '2,50–3,50 zł / km, postój 500–800 zł / dzień',
    },
    'BUSINESS VIP': {
      label: 'Pakiet BUSINESS VIP',
      value: 'od 1 200 zł / 8 h',
    },
  };

  const line = ranges[packageType];
  if (!line) {
    return emptySummary('Wybierz pakiet, aby zobaczyć orientacyjne widełki cenowe.');
  }

  return {
    lines: [line],
    subtotal: null,
    subtotalLabel: 'Orientacyjna wycena (netto)',
    deposit: null,
    total: null,
    totalLabel: 'Razem',
    note: 'Bezpłatna wycena indywidualna w ciągu ok. 15 minut po wysłaniu formularza.',
    isEstimate: true,
  };
}

export function formatPaymentForEmail(renterName: string, equipmentLabel: string): string {
  return [
    '',
    '--- Platnosc (przedplata) ---',
    `Konto: ${RENTAL_BANK_ACCOUNT.company}`,
    `Nr konta: ${RENTAL_BANK_ACCOUNT.number}`,
    `Tytul przelewu: ${formatRentalTransferTitle(renterName, equipmentLabel)}`,
  ].join('\n');
}

export function formatSummaryForEmail(summary: RentalPriceSummary): string {
  if (summary.emptyMessage && summary.lines.length === 0) {
    return '';
  }

  const parts = ['', '--- Podsumowanie cenowe ---'];
  summary.lines.forEach((line) => {
    parts.push(`${line.label}: ${line.value}`);
  });
  if (summary.subtotal != null) {
    parts.push(`${summary.subtotalLabel}: ${formatPln(summary.subtotal)}`);
  }
  if (summary.deposit != null) {
    parts.push(`Kaucja zwrotna: ${formatPln(summary.deposit)}`);
  }
  if (summary.total != null) {
    parts.push(`${summary.totalLabel}: ${formatPln(summary.total)}`);
  }
  if (summary.note) {
    parts.push(summary.note);
  }
  if (summary.isEstimate) {
    parts.push('(Wycena orientacyjna — ostateczna kwota po potwierdzeniu rezerwacji)');
  }
  return parts.join('\n');
}
