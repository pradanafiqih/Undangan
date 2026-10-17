import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function GallerySection() {
  const { gallery } = weddingData;
  const [selectedIdx, setSelectedIdx] = useState(null);

  const openLightbox = (index) => {
    setSelectedIdx(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
    document.body.style.overflow = '';
  };

  const prevImage = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + gallery.length) % gallery.length);
  };

  const nextImage = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % gallery.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  return (
    <section className="relative py-24 px-6 bg-[#1c1917]/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs md:text-sm tracking-[0.3em] uppercase text-[#cca37f] mb-3">
            Moments
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#f5f0e8] mb-4 gold-gradient-text">
            Galeri Prewedding
          </h2>
          <p className="font-sans text-sm text-[#a39b90] max-w-lg mx-auto">
            Potret bahagia dari perjalanan cinta kami menuju pelaminan.
          </p>
        </div>

        {/* Gallery Masonry/Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {gallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[#d4af37]/20 cursor-pointer shadow-lg hover:shadow-2xl hover:border-[#d4af37]/60 transition-all duration-500"
            >
              <img
                src={item.src}
                alt={`Photo ${item.id}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-black/60 border border-[#d4af37]/60 flex items-center justify-center text-[#d4af37] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/60 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Current Image */}
          <div className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-[#d4af37]/30">
            <img
              src={gallery[selectedIdx].src}
              alt="Gallery Preview"
              className="max-h-[85vh] w-auto object-contain mx-auto"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image index indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-cinzel text-xs text-[#a39b90] bg-black/60 px-4 py-1.5 rounded-full border border-white/10">
            {selectedIdx + 1} / {gallery.length}
          </div>
        </div>
      )}
    </section>
  );
}
