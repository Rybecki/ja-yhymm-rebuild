import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {
  PRIVACY_POLICY_INTRO,
  PRIVACY_POLICY_SECTIONS,
  type PrivacyContentBlock,
} from '../data/privacyPolicy';

function PrivacyBlock({ block }: { block: PrivacyContentBlock }) {
  if (block.kind === 'paragraph') {
    return <p>{block.text}</p>;
  }
  if (block.kind === 'list') {
    return (
      <ul className="space-y-2 list-none">
        {block.items.map((item) => (
          <li key={item} className="pl-5 relative">
            <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      <p className="font-semibold text-white/90 mb-3">{block.title}</p>
      <ul className="space-y-2 list-none">
        {block.items.map((item) => (
          <li key={item} className="pl-5 relative">
            <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section className="section-padding border-b border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <nav className="text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-primary transition-colors">
                Strona główna
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Polityka prywatności</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">
              Dokumenty prawne
            </h1>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-white leading-tight mb-4"
            >
              Polityka prywatności
            </motion.h2>
            <p className="text-white/60 text-sm md:text-base">
              Strona internetowa{' '}
              <a href="https://www.ja-yhymm.pl/" className="text-primary hover:underline" rel="noopener noreferrer">
                www.ja-yhymm.pl
              </a>
            </p>
          </div>
        </section>

        <section className="section-padding bg-dark border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="bg-white/5 backdrop-blur-md border-2 border-primary rounded-[2rem] p-8 md:p-12"
            >
              <div className="space-y-6 text-white/80 leading-relaxed text-sm md:text-base">
                {PRIVACY_POLICY_INTRO.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 space-y-10 border-t border-white/10 pt-10">
                {PRIVACY_POLICY_SECTIONS.map((section) => (
                  <section key={section.roman} aria-labelledby={`privacy-section-${section.roman}`}>
                    <h3
                      id={`privacy-section-${section.roman}`}
                      className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-5"
                    >
                      {section.roman}. {section.title}
                    </h3>
                    <div className="space-y-5 text-white/80 leading-relaxed text-sm md:text-base">
                      {section.blocks.map((block, index) => (
                        <div key={`${section.roman}-${index}`}>
                          <PrivacyBlock block={block} />
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <p className="mt-10 pt-8 border-t border-white/10 text-white/60 text-sm">
                W sprawach dotyczących danych osobowych prosimy o kontakt:{' '}
                <a href="mailto:biuro@ja-yhymm.pl" className="text-primary hover:underline">
                  biuro@ja-yhymm.pl
                </a>
              </p>
            </motion.article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
