import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { NEWS_ARTICLES } from '../data/newsArticles';

export default function NewsPage() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section className="section-padding bg-dark-lighter border-b border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <nav className="text-sm text-white/50 mb-6">
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
              5 najnowszych artykułów
            </motion.h2>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className="max-w-5xl mx-auto px-6 space-y-10">
            {NEWS_ARTICLES.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden"
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
