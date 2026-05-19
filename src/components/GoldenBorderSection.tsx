import type { ReactNode } from 'react';
import { motion } from 'motion/react';

type Surface = 'dark' | 'dark-lighter';

export type GoldenBorderSectionProps = {
  /** Label on the top border (e.g. „Oferta”, „Aktualności”). */
  label: string;
  /** Optional heading inside the frame. */
  title?: ReactNode;
  /** Optional intro copy inside the frame. */
  description?: ReactNode;
  /** Extra row under title/description (e.g. link). */
  headerExtra?: ReactNode;
  /** CTA overlapping the bottom border (same break pattern as `label` on top). */
  footerAction?: ReactNode;
  children: ReactNode;
  /** Background behind the badge that breaks the border. */
  surface?: Surface;
  /** Outer section id / extra classes. */
  id?: string;
  className?: string;
  /** Inner max width wrapper. */
  maxWidthClassName?: string;
};

const badgeBg: Record<Surface, string> = {
  dark: 'bg-dark',
  'dark-lighter': 'bg-dark-lighter',
};

const sectionBg: Record<Surface, string> = {
  dark: 'bg-dark',
  'dark-lighter': 'bg-dark-lighter',
};

/**
 * Golden frame with a label overlapping the top edge — same pattern as home Offer / News blocks.
 */
export function GoldenBorderSection({
  label,
  title,
  description,
  headerExtra,
  footerAction,
  children,
  surface = 'dark',
  id,
  className = '',
  maxWidthClassName = 'max-w-7xl',
}: GoldenBorderSectionProps) {
  const hasHeader = Boolean(title || description || headerExtra);

  return (
    <section id={id} className={`section-padding ${sectionBg[surface]} ${className}`.trim()}>
      <motion.div className={`${maxWidthClassName} mx-auto`}>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`relative rounded-[2rem] border-2 border-primary px-4 pt-14 sm:px-6 md:px-8 md:pt-16 lg:px-10 ${
            footerAction ? 'pb-12 md:pb-14' : 'pb-8 md:pb-10'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`absolute left-1/2 top-0 z-10 max-w-[calc(100%-2.5rem)] -translate-x-1/2 -translate-y-1/2 ${badgeBg[surface]} px-6 text-center sm:max-w-[calc(100%-4rem)] sm:px-10 md:px-14 lg:px-16`}
          >
            <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm md:text-base whitespace-nowrap">
              {label}
            </p>
          </motion.div>

          {hasHeader && (
            <motion.div className="mb-10 px-2 sm:px-6 md:mb-12">
              {title && (
                <h2 className="text-center text-2xl font-extrabold uppercase font-display text-white sm:text-3xl md:text-4xl">
                  {title}
                </h2>
              )}
              {description && (
                <div className="mt-4 text-center text-base text-white/70 leading-relaxed max-w-2xl mx-auto md:text-lg">
                  {description}
                </div>
              )}
              {headerExtra}
            </motion.div>
          )}

          {children}
          </motion.div>

          {footerAction && (
            <div
              className={`absolute left-1/2 bottom-0 z-10 w-max max-w-[calc(100%-1.5rem)] -translate-x-1/2 translate-y-1/2 ${badgeBg[surface]} px-3 text-center sm:max-w-none sm:px-10 md:px-14`}
            >
              {footerAction}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
