import React from 'react';
import { weddingData } from '../data/weddingData';

export default function QuoteSection() {
  return (
    <section className="relative py-20 px-6 bg-[#141210] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center glass-panel rounded-3xl p-8 md:p-12 border border-[#d4af37]/20 shadow-2xl">
        {/* Arabic Calligraphy */}
        <p className="font-serif text-xl md:text-2xl lg:text-3xl text-[#ecd07a] leading-loose mb-6 tracking-wide font-normal">
          {weddingData.quote.arabic}
        </p>

        {/* Translation */}
        <p className="font-cormorant italic text-base md:text-lg text-[#d2cdc5] leading-relaxed mb-6 font-normal">
          "{weddingData.quote.translation}"
        </p>

        {/* Surah Reference */}
        <div className="inline-block px-4 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30">
          <span className="font-cinzel text-xs tracking-widest text-[#cca37f] uppercase font-semibold">
            {weddingData.quote.surah}
          </span>
        </div>
      </div>
    </section>
  );
}
