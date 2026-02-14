'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

type CarouselImage = {
  src: string;
  alt: string;
};

type PosImageCarouselProps = {
  images: CarouselImage[];
  heightClassName?: string;
  showThumbnails?: boolean;
};

const PosImageCarousel = ({
  images,
  heightClassName = 'h-[320px] sm:h-[390px]',
  showThumbnails = true,
}: PosImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const changeSlide = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex) return;
      setIsFading(true);
      setTimeout(() => {
        setActiveIndex(nextIndex);
        setIsFading(false);
      }, 180);
    },
    [activeIndex],
  );

  useEffect(() => {
    if (images.length <= 1 || isHovered || isModalOpen) return;

    const interval = setInterval(() => {
      changeSlide((activeIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length, isHovered, isModalOpen, activeIndex, changeSlide]);

  const goToNext = () => changeSlide((activeIndex + 1) % images.length);
  const goToPrev = () => changeSlide((activeIndex - 1 + images.length) % images.length);

  return (
    <>
      <div className="space-y-3" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className={`relative overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900 ${heightClassName}`}>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group relative block h-full w-full text-left"
            aria-label="Abrir imagen en grande"
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className={`h-full w-full object-cover transition-all duration-300 group-hover:scale-[1.02] ${
                isFading ? 'opacity-0' : 'opacity-100'
              }`}
              width={1400}
              height={900}
              priority={activeIndex === 0}
            />
            <span className="absolute bottom-3 right-3 rounded-md bg-black/55 px-2 py-1 text-xs font-medium text-white">
              Click para ampliar
            </span>
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-900 shadow transition hover:bg-white dark:bg-slate-800/90 dark:text-white"
                aria-label="Imagen anterior"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-900 shadow transition hover:bg-white dark:bg-slate-800/90 dark:text-white"
                aria-label="Siguiente imagen"
              >
                ›
              </button>
            </>
          )}
        </div>

        {showThumbnails && images.length > 1 && (
          <div className="grid grid-cols-3 gap-3">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => changeSlide(index)}
                className={`overflow-hidden rounded-xl border bg-white shadow-sm dark:bg-slate-900 ${
                  index === activeIndex
                    ? 'border-blue-500 ring-2 ring-blue-200 dark:border-blue-400 dark:ring-blue-900/60'
                    : 'border-blue-100 dark:border-slate-700'
                }`}
                aria-label={`Mostrar imagen ${index + 1}`}
              >
                <Image src={image.src} alt={image.alt} className="h-20 w-full object-cover" width={900} height={600} />
              </button>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="absolute right-4 top-4 rounded-md bg-white/90 px-3 py-1 text-sm font-semibold text-gray-900"
            aria-label="Cerrar imagen ampliada"
          >
            Cerrar
          </button>
          <div
            className="relative max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="h-auto max-h-[88vh] w-full object-contain"
              width={1800}
              height={1200}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PosImageCarousel;
