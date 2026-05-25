import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export type GalleryImageItem = { src: string; alt: string };

const SWIPE_THRESHOLD_PX = 56;

type GalleryLightboxProps = {
  images: readonly GalleryImageItem[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  zIndexClass?: string;
};

export function GalleryLightbox({
  images,
  index,
  onIndexChange,
  onClose,
  zIndexClass = 'z-[200]',
}: GalleryLightboxProps) {
  const swipeStartX = useRef<number | null>(null);
  const len = images.length;
  const current = images[index];

  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (len <= 1) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        onIndexChange((index + 1) % len);
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onIndexChange((index - 1 + len) % len);
      }
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [current, index, len, onClose, onIndexChange]);

  if (!current) return null;

  const showNav = len > 1;
  const goPrev = () => onIndexChange((index - 1 + len) % len);
  const goNext = () => onIndexChange((index + 1) % len);

  return createPortal(
    <div
      className={`fixed inset-0 ${zIndexClass} flex items-center justify-center bg-black/78 p-4 sm:p-8`}
      role="dialog"
      aria-modal="true"
      aria-label="Podgląd zdjęć"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-3 z-20 rounded-full border border-white/20 bg-dark/80 p-2 text-white hover:bg-white/10 hover:border-primary/50 transition-colors"
        aria-label="Zamknij podgląd"
      >
        <X size={22} />
      </button>
      <div
        className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          const t = e.touches[0];
          if (t) swipeStartX.current = t.clientX;
        }}
        onTouchEnd={(e) => {
          if (!showNav) return;
          const start = swipeStartX.current;
          swipeStartX.current = null;
          const end = e.changedTouches[0]?.clientX;
          if (start === null || end === undefined) return;
          const dx = end - start;
          if (dx < -SWIPE_THRESHOLD_PX) goNext();
          else if (dx > SWIPE_THRESHOLD_PX) goPrev();
        }}
      >
        <div className="flex w-full items-center justify-center gap-2 md:gap-4">
          {showNav ? (
            <button
              type="button"
              onClick={goPrev}
              className="hidden shrink-0 rounded-full border border-white/20 bg-dark/80 p-3 text-white hover:border-primary hover:text-primary transition-colors md:flex"
              aria-label="Poprzednie zdjęcie"
            >
              <ChevronLeft size={28} />
            </button>
          ) : null}
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[min(90vh,900px)] max-w-[min(92vw,900px)] w-auto select-none rounded-2xl border border-white/20 object-contain shadow-2xl"
            draggable={false}
          />
          {showNav ? (
            <button
              type="button"
              onClick={goNext}
              className="hidden shrink-0 rounded-full border border-white/20 bg-dark/80 p-3 text-white hover:border-primary hover:text-primary transition-colors md:flex"
              aria-label="Następne zdjęcie"
            >
              <ChevronRight size={28} />
            </button>
          ) : null}
        </div>
        {showNav ? (
          <div className="flex md:hidden items-center justify-center gap-8">
            <button
              type="button"
              onClick={goPrev}
              className="rounded-full border border-white/20 bg-dark/80 p-3 text-white hover:border-primary"
              aria-label="Poprzednie zdjęcie"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="rounded-full border border-white/20 bg-dark/80 p-3 text-white hover:border-primary"
              aria-label="Następne zdjęcie"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        ) : null}
      </div>
    </div>,
    document.body
  );
}
