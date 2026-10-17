import React, { useState, useEffect } from 'react';
import { Mail, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function CoverOverlay({ isOpen, onOpen, guestName }) {
  const [shouldRender, setShouldRender] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  const handleOpen = () => {
    setAnimateOut(true);
    onOpen();
    setTimeout(() => {
      setShouldRender(false);
    }, 1000);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-1000 ease-in-out ${
        animateOut ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(14, 12, 10, 0.75), rgba(14, 12, 10, 0.85)), url(${weddingData.couple.coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-black/60 pointer-events-none" />

      {/* Decorative Border Frame */}
      <div className="absolute inset-4 md:inset-8 border border-[#d4af37]/30 rounded-2xl pointer-events-none" />
      <div className="absolute inset-6 md:inset-10 border border-[#d4af37]/15 rounded-xl pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center flex flex-col items-center">
        {/* Subtitle */}
        <p className="font-cinzel tracking-[0.3em] text-xs md:text-sm text-[#cca37f] uppercase mb-4 animate-fade-in">
          The Wedding of
        </p>

        {/* Bride & Groom Names */}
        <h1 className="font-serif text-4xl md:text-6xl text-[#f5f0e8] tracking-wide font-normal mb-2 gold-gradient-text leading-tight">
          Febria &amp; Fiqih
        </h1>

        <p className="font-cormorant italic text-lg md:text-xl text-[#dec3a7] mb-8">
          {weddingData.date.display}
        </p>

        {/* Guest Name Card */}
        <div className="w-full glass-panel rounded-2xl p-6 mb-8 border border-[#d4af37]/25 shadow-2xl backdrop-blur-md">
          <p className="text-xs uppercase tracking-widest text-[#cca37f] mb-2 font-sans font-medium">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <div className="py-2 px-4 rounded-xl bg-black/40 border border-[#d4af37]/20 inline-block max-w-full">
            <h2 className="text-xl md:text-2xl font-serif text-[#fdf9ee] font-semibold tracking-wide truncate">
              {guestName || "Tamu Undangan"}
            </h2>
          </div>
          <p className="text-[11px] text-[#a39b90] mt-3 italic">
            *Mohon maaf bila ada kesalahan penulisan nama/gelar
          </p>
        </div>

        {/* Open Button */}
        <button
          onClick={handleOpen}
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b8942b] via-[#d4af37] to-[#cca37f] text-black font-semibold text-sm tracking-widest uppercase shadow-lg shadow-[#d4af37]/25 hover:shadow-[#d4af37]/40 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <Mail className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
          <span>Buka Undangan</span>
          <Sparkles className="w-3.5 h-3.5 text-black animate-pulse" />
        </button>
      </div>
    </div>
  );
}
