import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { NEWS_ARTICLES } from '../data/newsArticles';

const NEWS_HERO_SRC = '/images/aktualnosci/aktualnosci-hero.jpg';

export default function NewsPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section className="section-padding border-b border-white/5 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: `url(${NEWS_HERO_SRC})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
            aria-hidden
          />
          <div className="app-photo-scrim" aria-hidden />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <nav className="text-sm text-white/70 mb-6">
              <Link to="/" className="hover:text-primary transition-colors">
                Strona główna
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Aktualności</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">Aktualności</h1>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight"
            >
              6 najnowszych artykułów
            </motion.h2>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className="max-w-5xl mx-auto px-6 space-y-10">
            {NEWS_ARTICLES.map((article, index) => (
              <motion.article
                id={article.slug}
                key={article.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden scroll-mt-28"
              >
                <img
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  className="w-full h-64 md:h-80 object-cover border-b border-white/10"
                  loading="lazy"
                />
                <div className="p-7 md:p-9">
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">{article.date}</p>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-6">{article.title}</h3>
                  <div className="space-y-4 text-white/75 leading-relaxed">
                    {article.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
