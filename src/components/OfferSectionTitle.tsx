import type { ReactNode } from 'react';
import { motion } from 'motion/react';

type OfferSectionTitleProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function OfferSectionTitle({ children, id, className = '' }: OfferSectionTitleProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-6 flex items-center justify-center gap-4 md:mb-8 md:gap-6 ${className}`.trim()}
    >
      <span className="h-0.5 w-16 shrink-0 rounded-sm bg-primary sm:w-20 md:w-28" aria-hidden />
      <h2 className="min-w-0 shrink-0 text-center text-primary font-bold uppercase tracking-[0.15em] text-sm leading-snug sm:text-base md:text-lg md:tracking-widest">
        {children}
      </h2>
      <span className="h-0.5 w-16 shrink-0 rounded-sm bg-primary sm:w-20 md:w-28" aria-hidden />
    </motion.div>
  );
}
