import { motion } from 'motion/react';
import { PARTNER_LOGOS } from '../data/partnerLogos';

const MARQUEE_LOGOS = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

export function PartnerLogosMarquee() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 md:mt-20 mb-10 md:mb-12 rounded-2xl border-2 border-primary bg-transparent p-4 md:p-6 overflow-hidden"
      aria-label="Logotypy firm i instytucji współpracujących z JA YHYMM"
    >
      <div className="partner-marquee-mask">
        <div className="partner-marquee-track" aria-hidden>
          {MARQUEE_LOGOS.map((logo, index) => (
            <div key={`${logo.src}-${index}`} className="partner-marquee-item">
              <img
                src={logo.src}
                alt={index < PARTNER_LOGOS.length ? logo.alt : ''}
                className="max-h-12 md:max-h-14 w-auto max-w-[140px] md:max-w-[180px] object-contain"
                data-no-photo-filter
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
