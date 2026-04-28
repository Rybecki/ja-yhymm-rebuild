import type { SummerOfferAccommodationBlock } from './types';

const ZLOTY = '/utils/oferta-letnia/zloty-jelen';

export const ZLOTY_JELEN_ACCOMMODATION_BLOCK: SummerOfferAccommodationBlock = {
  blockTitle: 'Ośrodek „Złoty Jeleń” (Złoty Potok)',
  paragraphs: [
    'W Ośrodku Wypoczynkowym „Złoty Jeleń” — obiekcie położonym w miejscowości Złoty Potok, na terenie rezerwatu przyrody Parkowe.',
    'Pokoje: 3-, 4-osobowe z łazienką, Wi-Fi.',
    'Do dyspozycji uczestników: jadalnia, sala kominkowa, sala dyskotekowa, duży teren rekreacyjny do gier i zabaw.',
  ],
  images: [
    { src: `${ZLOTY}/zloty-jelen-1.png`, alt: 'Ośrodek Złoty Jeleń — zabudowa wśród zieleni' },
    { src: `${ZLOTY}/zloty-jelen-2.png`, alt: 'Złoty Jeleń — teren rekreacyjny ośrodka' },
    { src: `${ZLOTY}/zloty-jelen-3.png`, alt: 'Złoty Jeleń — wnętrza i infrastruktura' },
    {
      src: `${ZLOTY}/zloty-jelen-4.png`,
      alt: 'Złoty Jeleń — pokój gościnny z łóżkami, widok na las',
    },
  ],
};
