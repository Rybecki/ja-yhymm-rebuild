import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import type { SummerOfferDetail, SummerOfferGalleryImage } from '../data/summerOfferDetails';
import { parseOptionalFacultyLine } from '../utils/parseOptionalFacultyLine';
import { GalleryLightbox } from './GalleryLightbox';


const WIDE = 'max-w-4xl xl:max-w-6xl 2xl:max-w-[72rem] mx-auto px-6 sm:px-8 lg:px-10';

const CARD_HOVER =
  'transition-all duration-300 hover:border-primary/50 hover:bg-white/[0.05] hover:shadow-[0_0_36px_rgba(247,199,59,0.07)]';

const SECTION_PAD = 'py-14 md:py-16 lg:py-20';

function SectionTitle({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-6 md:mb-8 text-center"
    >
      {children}
    </h2>
  );
}

function ProseCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`group/card rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6 sm:px-7 sm:py-7 md:px-9 md:py-8 ${CARD_HOVER} ${className}`}
    >
      {children}
    </div>
  );
}

function SectionDivider() {
  return (
    <div
      className="pointer-events-none h-[2px] w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-90 shadow-[0_0_12px_rgba(247,199,59,0.25)]"
      aria-hidden
    />
  );
}

export function SummerOfferDetailLayout({
  detail,
  tileImage,
  backTo = '/oferta/obozy-i-kolonie/lato',
  backLabel = 'Powrót do pełnej oferty',
}: {
  detail: SummerOfferDetail;
  
  tileImage: SummerOfferGalleryImage;
  backTo?: string;
  backLabel?: string;
}) {
  const galleryImages: SummerOfferGalleryImage[] = [tileImage, ...detail.gallery];

  const accommodationGalleryImages: SummerOfferGalleryImage[] = useMemo(() => {
    if (detail.accommodationBlocks && detail.accommodationBlocks.length > 0) {
      return detail.accommodationBlocks.flatMap((b) => b.images);
    }
    return detail.accommodationImages;
  }, [detail.accommodationBlocks, detail.accommodationImages]);

  
  const lightboxImages: SummerOfferGalleryImage[] = useMemo(
    () => [...galleryImages, ...accommodationGalleryImages],
    [galleryImages, accommodationGalleryImages]
  );

  const accommodationLightboxOffset = galleryImages.length;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      {lightboxIndex !== null && lightboxImages[lightboxIndex] ? (
        <GalleryLightbox
          images={lightboxImages}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
          zIndexClass="z-[240]"
        />
      ) : null}
      <section id="galeria" className={`${SECTION_PAD} bg-dark`}>
        <div className={`${WIDE} w-full`}>
          <SectionTitle>Galeria</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {galleryImages.map((img, i) => (
              <motion.figure
                key={`${img.src}-${i}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`group min-w-0 overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 ${CARD_HOVER} cursor-zoom-in`}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-2xl"
                  aria-label={`Powiększ: ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03] pointer-events-none"
                    loading="lazy"
                  />
                </button>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section
        id="o-obozie"
        className={`${SECTION_PAD} bg-dark-lighter`}
      >
        <div className={`${WIDE} w-full`}>
          <SectionTitle>{detail.aboutSectionTitle}</SectionTitle>
          <ProseCard>
            <p className="text-center font-display font-bold text-white text-lg md:text-xl tracking-tight mb-8">
              {detail.aboutLeadTitle}
            </p>
            <div className="max-w-3xl mx-auto space-y-8 text-white/85 leading-relaxed text-center">
              {detail.aboutBlocks.map((block) => (
                <div key={block.title}>
                  <p className="font-bold text-primary mb-2">{block.title}</p>
                  <p>{block.body}</p>
                </div>
              ))}
            </div>
            {detail.aboutClosing.trim() ? (
              <p className="font-semibold text-white mt-10 pt-8 border-t border-white/10 text-center max-w-3xl mx-auto">
                {detail.aboutClosing}
              </p>
            ) : null}
          </ProseCard>
        </div>
      </section>

      <SectionDivider />

      {detail.youtubeVideoId ? (
        <section id="film" className={`${SECTION_PAD} bg-dark`}>
          <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
            <SectionTitle>Film</SectionTitle>
            <div
              className={`aspect-video rounded-2xl overflow-hidden border-2 border-white/10 bg-black shadow-xl ${CARD_HOVER}`}
            >
              <iframe
                title="Film o obozie"
                src={`https://www.youtube-nocookie.com/embed/${detail.youtubeVideoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      ) : null}

      {detail.youtubeVideoId ? <SectionDivider /> : null}

      <section id="program" className={`${SECTION_PAD} bg-dark-lighter`}>
        <div className={`${WIDE} w-full`}>
          <SectionTitle>{detail.programSectionTitle}</SectionTitle>
          <ProseCard>
            <p className="text-center font-display font-bold text-white text-base md:text-lg mb-2">
              {detail.programHeadline}
            </p>
            <p className="text-center text-primary/90 text-sm font-semibold mb-6 md:mb-8">{detail.programAgeLine}</p>
            <div className="max-w-3xl mx-auto space-y-4 mb-8 md:mb-10 text-center text-white/85 leading-relaxed">
              {detail.programIntro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="font-bold text-white mb-4 text-center">W programie:</p>
            {detail.programSections && detail.programSections.length > 0 ? (
              <div className="max-w-4xl mx-auto space-y-10 text-white/85 leading-relaxed text-sm md:text-base text-center">
                {detail.programSections.map((sec) => (
                  <div key={sec.heading || sec.items[0]?.title || 'section'}>
                    {sec.heading.trim() ? (
                      <h3 className="text-primary font-bold text-sm md:text-base mb-4 tracking-wide">{sec.heading}</h3>
                    ) : null}
                    <ul className="space-y-5 list-none">
                      {sec.items.map((b, j) => (
                        <li key={`${sec.heading}-${j}`}>
                          {b.title ? (
                            <>
                              <span className="font-bold text-primary">{b.title}: </span>
                              {b.body}
                            </>
                          ) : (
                            b.body
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="max-w-4xl mx-auto space-y-6 text-white/85 leading-relaxed text-sm md:text-base text-center list-none">
                {detail.programBullets.map((b) => (
                  <li key={b.title}>
                    <span className="font-bold text-primary">{b.title}: </span>
                    {b.body}
                  </li>
                ))}
              </ul>
            )}
            {detail.programFooter.trim() ? (
              <p className="mt-8 md:mt-10 text-white/80 text-sm leading-relaxed border-t border-white/10 pt-6 md:pt-8 max-w-3xl mx-auto text-center whitespace-pre-line">
                {detail.programFooter}
              </p>
            ) : null}
          </ProseCard>
        </div>
      </section>

      <SectionDivider />

      <section id="program-fakultatywny" className={`${SECTION_PAD} bg-dark`}>
        <div className={`${WIDE} w-full`}>
          <SectionTitle>{detail.optionalSectionTitle}</SectionTitle>
          <ProseCard>
            <p className="text-white/85 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
              {detail.optionalIntro}
            </p>
            <ul className="max-w-3xl mx-auto space-y-6 list-none text-sm md:text-base leading-relaxed">
              {detail.optionalItems.map((line) => {
                const cleaned = line.replace(/^\s*[–—\-]\s*/, '');
                const { title, middle, price } = parseOptionalFacultyLine(cleaned);
                return (
                  <li key={line} className="text-center">
                    {price ? (
                      <p>
                        <span className="font-semibold text-white">{title}</span>
                        {middle ? <span className="text-white/75"> – {middle}</span> : null}
                        <span className="font-semibold text-white"> – {price}</span>
                      </p>
                    ) : (
                      <p className="text-white/85">{line}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </ProseCard>
        </div>
      </section>

      <SectionDivider />

      <section id="zakwaterowanie" className={`${SECTION_PAD} bg-dark-lighter`}>
        <div className={`${WIDE} w-full`}>
          <SectionTitle>{detail.accommodationSectionTitle}</SectionTitle>
          {detail.accommodationBlocks && detail.accommodationBlocks.length > 0 ? (
            <div className="space-y-14 md:space-y-16">
              {(() => {
                let accCursor = 0;
                return detail.accommodationBlocks.map((block) => (
                  <div key={block.blockTitle}>
                    <h3 className="text-center font-display font-semibold text-white text-lg md:text-xl mb-6 md:mb-8">
                      {block.blockTitle}
                    </h3>
                    <div className="mb-8 md:mb-10 max-w-3xl mx-auto space-y-6 text-white/85 leading-relaxed text-center">
                      {block.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 min-w-0">
                      {block.images.map((img, i) => {
                        const lbIndex = accommodationLightboxOffset + accCursor++;
                        return (
                          <motion.figure
                            key={`${block.blockTitle}-${img.src}-${i}`}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className={`group min-w-0 overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 ${CARD_HOVER} cursor-zoom-in`}
                          >
                            <button
                              type="button"
                              onClick={() => setLightboxIndex(lbIndex)}
                              className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-lighter rounded-2xl"
                              aria-label={`Powiększ: ${img.alt}`}
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.02] pointer-events-none"
                                loading="lazy"
                              />
                            </button>
                          </motion.figure>
                        );
                      })}
                    </div>
                  </div>
                ));
              })()}
            </div>
          ) : (
            <>
              <div className="mb-8 md:mb-10 max-w-3xl mx-auto space-y-6 text-white/85 leading-relaxed text-center">
                {detail.accommodationParagraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 min-w-0">
                {detail.accommodationImages.map((img, i) => (
                  <motion.figure
                    key={img.src}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`group min-w-0 overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 ${CARD_HOVER} cursor-zoom-in`}
                  >
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(accommodationLightboxOffset + i)}
                      className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-lighter rounded-2xl"
                      aria-label={`Powiększ: ${img.alt}`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.02] pointer-events-none"
                        loading="lazy"
                      />
                    </button>
                  </motion.figure>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <SectionDivider />

      <section id="cena-zawiera" className={`${SECTION_PAD} bg-dark`}>
        <div className={`${WIDE} grid md:grid-cols-2 gap-10 md:gap-12 xl:gap-16 w-full`}>
          <ProseCard className="h-full">
            <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-5">{detail.priceIncludesTitle}</h3>
            <ul className="space-y-3 text-white/80 text-sm leading-relaxed list-disc pl-5 marker:text-primary">
              {detail.priceIncludes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </ProseCard>
          <ProseCard className="h-full">
            <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-5">{detail.priceExcludesTitle}</h3>
            <ul className="space-y-3 text-white/80 text-sm leading-relaxed list-disc pl-5 marker:text-primary/70">
              {detail.priceExcludes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </ProseCard>
        </div>
      </section>

      <SectionDivider />

      <section id="informacje-praktyczne" className={`${SECTION_PAD} bg-dark-lighter`}>
        <div className={`${WIDE} w-full`}>
          <SectionTitle>{detail.practicalSectionTitle}</SectionTitle>
          <ProseCard>
            <div className="max-w-3xl mx-auto space-y-4 text-white/85 leading-relaxed text-sm md:text-base text-center">
              {detail.practicalParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </ProseCard>
        </div>
      </section>

      <SectionDivider />

      <section id="sprzet" className={`${SECTION_PAD} bg-dark`}>
        <div className={`${WIDE} w-full`}>
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4 text-center">
            {detail.equipmentSectionTitle}
          </h2>
          <p className="text-center text-white/75 text-sm md:text-base mb-8 md:mb-10 max-w-3xl xl:max-w-4xl mx-auto leading-relaxed">
            {detail.equipmentIntro}
          </p>
          <div className="grid gap-5 md:gap-6 lg:grid-cols-2 lg:gap-x-8 xl:gap-x-10">
            {detail.equipmentBlocks.map((block) => (
              <div
                key={block.title}
                className={`rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 md:px-7 md:py-6 ${CARD_HOVER}`}
              >
                <p className="font-bold text-primary mb-3">{block.title}</p>
                <p className="text-white/85 text-sm md:text-base leading-relaxed">{block.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/90 font-semibold mt-10 max-w-3xl mx-auto">
            Z nami trenujesz na profesjonalnym sprzęcie, na jakim pracują zawodowcy!
          </p>
        </div>
      </section>

      <SectionDivider />

      <section id="terminy" className={`${SECTION_PAD} bg-dark-lighter`}>
        <div className="max-w-6xl 2xl:max-w-[80rem] mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <SectionTitle>{detail.termsSectionTitle}</SectionTitle>
          {detail.termsGroups && detail.termsGroups.length > 0 ? (
            <div>
              {detail.termsGroups.map((group, groupIdx) => (
                <div key={group.groupTitle}>
                  {groupIdx > 0 ? (
                    <div className="py-8 md:py-10 lg:py-12">
                      <SectionDivider />
                    </div>
                  ) : null}
                  <div className="mb-8 md:mb-10">
                    <p className="text-center font-display font-semibold text-white text-lg mb-2">{group.groupTitle}</p>
                    {group.groupDisclaimer ? (
                      <p className="text-center text-white/55 text-sm max-w-2xl mx-auto">{group.groupDisclaimer}</p>
                    ) : null}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full">
                    {group.terms.map((t, i) => (
                      <motion.article
                        key={`${group.groupTitle}-${t.dateRange}`}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className={`w-full min-w-0 rounded-2xl border-2 border-white/10 bg-dark/60 p-6 flex flex-col ${CARD_HOVER}`}
                      >
                        <p className="font-display font-bold text-white text-lg">{t.dateRange}</p>
                        <p className="text-white/50 text-sm mt-1">{t.durationLabel}</p>
                        <p className="text-primary font-bold text-xl mt-4">{t.price}</p>
                        <div className="mt-auto pt-6 flex flex-col gap-3">
                          <a
                            href={t.planUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-primary hover:bg-primary/25 transition-colors"
                          >
                            Plan podróży
                            <ExternalLink size={16} />
                          </a>
                          <a
                            href={detail.reserveHref}
                            className="inline-flex items-center justify-center rounded-full bg-primary text-dark text-sm font-bold uppercase tracking-wide py-2.5 hover:brightness-110 transition-all"
                          >
                            Zarezerwuj
                          </a>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <p className="text-center font-display font-semibold text-white mb-2">{detail.termsSubtitle}</p>
              <p className="text-center text-white/55 text-sm mb-8 md:mb-10 max-w-2xl mx-auto">{detail.termsDisclaimer}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full">
                {detail.terms.map((t, i) => (
                  <motion.article
                    key={t.dateRange}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className={`w-full min-w-0 rounded-2xl border-2 border-white/10 bg-dark/60 p-6 flex flex-col ${CARD_HOVER}`}
                  >
                    <p className="font-display font-bold text-white text-lg">{t.dateRange}</p>
                    <p className="text-white/50 text-sm mt-1">{t.durationLabel}</p>
                    <p className="text-primary font-bold text-xl mt-4">{t.price}</p>
                    <div className="mt-auto pt-6 flex flex-col gap-3">
                      <a
                        href={t.planUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-primary hover:bg-primary/25 transition-colors"
                      >
                        Plan podróży
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={detail.reserveHref}
                        className="inline-flex items-center justify-center rounded-full bg-primary text-dark text-sm font-bold uppercase tracking-wide py-2.5 hover:brightness-110 transition-all"
                      >
                        Zarezerwuj
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className={`${SECTION_PAD} bg-dark border-t border-white/[0.06]`}>
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 text-center">
          <Link
            to={backTo}
            className="inline-flex text-sm font-bold uppercase tracking-wider text-primary hover:text-white transition-colors"
          >
            {backLabel}
          </Link>
          <span className="hidden sm:inline text-white/20">|</span>
          <Link to="/oferta" className="text-sm text-white/50 hover:text-primary transition-colors">
            Przegląd oferty
          </Link>
        </div>
      </section>
    </>
  );
}
