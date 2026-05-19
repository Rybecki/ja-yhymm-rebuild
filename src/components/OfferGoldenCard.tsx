import type { ReactNode } from 'react';
import { motion } from 'motion/react';

type Surface = 'dark' | 'dark-lighter';

const badgeBg: Record<Surface, string> = {
  dark: 'bg-dark',
  'dark-lighter': 'bg-dark-lighter',
};

type OfferGoldenCardProps = {
  /** Label embedded in the top border (home page golden frame pattern). */
  label: string;
  children: ReactNode;
  surface?: Surface;
  /** `card` — inner frosted panel; `plain` — content directly inside the golden frame. */
  variant?: 'card' | 'plain';
  className?: string;
  innerClassName?: string;
};

const CARD_HOVER =
  'transition-all duration-300 hover:border-primary/50 hover:bg-white/[0.05] hover:shadow-[0_0_36px_rgba(247,199,59,0.07)]';

/** Content area inside the golden frame (no inner border). */
export const OFFER_GOLDEN_CARD_INNER =
  'rounded-2xl bg-white/[0.03] px-5 py-6 sm:px-7 sm:py-7 md:px-9 md:py-8';

export function OfferGoldenCard({
  label,
  children,
  surface = 'dark',
  variant = 'plain',
  className = '',
  innerClassName = OFFER_GOLDEN_CARD_INNER,
}: OfferGoldenCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative rounded-[2rem] border-2 border-primary px-4 pt-14 pb-8 sm:px-6 md:px-8 md:pt-16 md:pb-10 ${className}`.trim()}
    >
      <motion.div
        className={`absolute left-1/2 top-0 z-10 max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 ${badgeBg[surface]} px-4 text-center sm:max-w-[calc(100%-3rem)] sm:px-6 md:px-10`}
      >
        <p className="text-primary font-bold uppercase tracking-[0.12em] text-sm leading-tight whitespace-nowrap sm:tracking-[0.15em] md:text-base md:tracking-widest">
          {label}
        </p>
      </motion.div>
      {variant === 'plain' ? (
        <div className={innerClassName}>{children}</div>
      ) : (
        <motion.div
          className={`rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6 sm:px-7 sm:py-7 md:px-9 md:py-8 ${CARD_HOVER} ${innerClassName}`.trim()}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
