import React from 'react';
import { ChevronDown, Calendar, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center px-4">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={weddingData.couple.heroImage}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src={weddingData.couple.videoBg} type="video/mp4" />
      </video>

      {/* Dark & Gold Tint Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#141210]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-[#141210]/90" />

      {/* Framing Lines */}
      <div className="absolute inset-4 md:inset-8 border border-[#d4af37]/20 rounded-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto py-20 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-[#d4af37]/30 backdrop-blur-sm mb-6">
          <Heart className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#cca37f] uppercase">
            The Wedding of
          </span>
          <Heart className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal tracking-wide gold-gradient-text mb-4 leading-tight">
          Febria &amp; Fiqih
        </h1>

        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-4" />

        <p className="font-cormorant italic text-xl md:text-2xl text-[#dec3a7] tracking-wider mb-2">
          {weddingData.date.display}
        </p>

        <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#a39b90]">
          Pemalang, Jawa Tengah
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-[#cca37f] opacity-80 animate-bounce">
          <span className="text-[11px] tracking-widest uppercase font-cinzel">Scroll Down</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
