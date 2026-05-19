export type SummerOfferGalleryImage = {
  src: string;
  alt: string;
};

export type SummerOfferAboutBlock = {
  title: string;
  body: string;
};

export type SummerOfferProgramBullet = {
  title: string;
  body: string;
};

export type SummerOfferProgramSection = {
  heading: string;
  items: SummerOfferProgramBullet[];
};

export type SummerOfferEquipmentBlock = {
  title: string;
  body: string;
};

export type SummerOfferTerm = {
  dateRange: string;
  durationLabel: string;
  price: string;
  planUrl: string;
};


export type SummerOfferAccommodationBlock = {
  blockTitle: string;
  paragraphs: string[];
  images: SummerOfferGalleryImage[];
};


export type SummerOfferTermsGroup = {
  groupTitle: string;
  groupDisclaimer?: string;
  terms: SummerOfferTerm[];
};

export type SummerOfferDetail = {
  /** Override hero `background-position` on the detail page (e.g. `center 22%`). */
  heroBackgroundPosition?: string;
  /** Tło hero na stronie szczegółów (niezależnie od kolejności w `gallery`). */
  heroImage?: SummerOfferGalleryImage;
  gallery: SummerOfferGalleryImage[];
  youtubeVideoId?: string;
  aboutSectionTitle: string;
  aboutLeadTitle: string;
  aboutBlocks: SummerOfferAboutBlock[];
  aboutClosing: string;
  programSectionTitle: string;
  programHeadline: string;
  programAgeLine: string;
  programIntro: string[];
  
  programBullets: SummerOfferProgramBullet[];
  
  programSections?: SummerOfferProgramSection[];
  programFooter: string;
  optionalSectionTitle: string;
  optionalIntro: string;
  optionalItems: string[];
  accommodationSectionTitle: string;
  accommodationParagraphs: string[];
  accommodationImages: SummerOfferGalleryImage[];
  
  accommodationBlocks?: SummerOfferAccommodationBlock[];
  priceIncludesTitle: string;
  priceIncludes: string[];
  priceExcludesTitle: string;
  priceExcludes: string[];
  practicalSectionTitle: string;
  practicalParagraphs: string[];
  equipmentSectionTitle: string;
  equipmentIntro: string;
  equipmentBlocks: SummerOfferEquipmentBlock[];
  termsSectionTitle: string;
  termsSubtitle: string;
  termsDisclaimer: string;
  terms: SummerOfferTerm[];
  
  termsGroups?: SummerOfferTermsGroup[];
  reserveHref: string;
};
