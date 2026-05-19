import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { OfferSectionTitle } from './OfferSectionTitle';

type SummerOfferSectionFrameProps = {
  title: string;
  children: ReactNode;
};

export function SummerOfferSectionFrame({ title, children }: SummerOfferSectionFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <OfferSectionTitle className="mb-8 md:mb-10">{title}</OfferSectionTitle>
      {children}
    </motion.div>
  );
}
