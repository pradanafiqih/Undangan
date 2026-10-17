import React from 'react';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function FooterSection() {
  return (
    <footer className="relative py-20 px-6 bg-gradient-to-b from-[#141210] to-black text-center overflow-hidden border-t border-[#d4af37]/15">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-[#d4af37]/5 rounded-t-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <Heart className="w-6 h-6 text-[#d4af37] fill-[#d4af37]/20 mb-6" />

        <p className="font-sans text-sm md:text-base text-[#a39b90] leading-relaxed mb-8">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu bagi lembaran baru kehidupan kami.
        </p>

        <p className="font-cinzel text-xs tracking-[0.25em] text-[#cca37f] uppercase mb-2">
          Kami yang berbahagia,
        </p>

        <h2 className="font-serif text-3xl md:text-5xl text-[#f5f0e8] gold-gradient-text mb-2">
          Febria &amp; Fiqih
        </h2>

        <p className="font-sans text-xs text-[#a39b90] mb-12">
          Beserta segenap keluarga besar kedua mempelai
        </p>

        <div className="w-16 h-px bg-[#d4af37]/30 mb-8" />

        <p className="font-sans text-[11px] text-[#766e63] tracking-widest uppercase">
          Wedding Invitation &bull; 19 Mei 2026
        </p>
      </div>
    </footer>
  );
}
