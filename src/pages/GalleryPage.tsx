import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GalleryLightbox, type GalleryImageItem } from '../components/GalleryLightbox';
import { GALLERY_CATEGORIES, GALLERY_IMAGES, type GalleryCategory } from '../data/galleryImages';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Wszystkie');
  const [galleryOpen, setGalleryOpen] = useState<{ images: readonly GalleryImageItem[]; index: number } | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'Wszystkie') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((image) => image.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setGalleryOpen(null);
  }, [activeCategory]);

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main>
        <section className="section-padding bg-dark-lighter border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <nav className="text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-primary transition-colors">
                Strona główna
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Galeria</span>
            </nav>
            <h1 className="text-primary font-bold uppercase tracking-widest mb-4 text-sm md:text-base">Galeria</h1>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight mb-8"
            >
              Zdjęcia z naszych aktywności
            </motion.h2>

            <div className="flex flex-wrap gap-2">
              {GALLERY_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-dark border-primary'
                      : 'bg-white/5 text-white/70 border-white/10 hover:border-primary hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredImages.map((image, i) => (
                <motion.button
                  key={`${image.category}-${image.src}`}
                  type="button"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => setGalleryOpen({ images: filteredImages, index: i })}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 text-left hover:border-primary transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Powiększ: ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-56 object-cover pointer-events-none" loading="lazy" />
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {galleryOpen ? (
        <GalleryLightbox
          images={galleryOpen.images}
          index={galleryOpen.index}
          onIndexChange={(idx) => setGalleryOpen((g) => (g ? { ...g, index: idx } : null))}
          onClose={() => setGalleryOpen(null)}
          zIndexClass="z-[130]"
        />
      ) : null}

      <Footer />
    </div>
  );
}
