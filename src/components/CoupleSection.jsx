import React from 'react';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function CoupleSection() {
  const { groom, bride } = weddingData.couple;

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#141210] via-[#1c1917] to-[#141210]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <p className="font-cinzel text-xs md:text-sm tracking-[0.3em] uppercase text-[#cca37f] mb-3">
          Groom &amp; Bride
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-[#f5f0e8] mb-6 gold-gradient-text">
          Kedua Mempelai
        </h2>

        <p className="font-sans text-sm md:text-base text-[#a39b90] max-w-2xl mx-auto mb-16 leading-relaxed">
          Assalamu’alaikum Warahmatullahi Wabarakatuh.
          <br />
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan memohon rahmat dan ridho-Nya, kami bermaksud menyelenggarakan pernikahan kami:
        </p>

        {/* Couple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Groom */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-6">
              {/* Outer decorative golden rings */}
              <div className="absolute -inset-3 rounded-full border border-[#d4af37]/30 scale-100 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute -inset-1.5 rounded-full border border-[#d4af37]/50" />
              
              {/* Photo */}
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[#d4af37] shadow-2xl relative">
                <img
                  src={groom.avatar}
                  alt={groom.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-[#f5f0e8] font-medium mb-2 gold-gradient-text">
              {groom.name}
            </h3>
            <p className="font-cinzel text-xs tracking-widest text-[#cca37f] uppercase mb-3">
              The Groom
            </p>
            <p className="font-sans text-sm text-[#a39b90] max-w-xs leading-relaxed">
              Putra dari <span className="text-[#f5f0e8] font-medium">{groom.father}</span>
              <br />
              &amp; <span className="text-[#f5f0e8] font-medium">{groom.mother}</span>
            </p>
          </div>

          {/* Bride */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-6">
              {/* Outer decorative golden rings */}
              <div className="absolute -inset-3 rounded-full border border-[#d4af37]/30 scale-100 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute -inset-1.5 rounded-full border border-[#d4af37]/50" />
              
              {/* Photo */}
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[#d4af37] shadow-2xl relative">
                <img
                  src={bride.avatar}
                  alt={bride.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-[#f5f0e8] font-medium mb-2 gold-gradient-text">
              {bride.name}
            </h3>
            <p className="font-cinzel text-xs tracking-widest text-[#cca37f] uppercase mb-3">
              The Bride
            </p>
            <p className="font-sans text-sm text-[#a39b90] max-w-xs leading-relaxed">
              Putri dari <span className="text-[#f5f0e8] font-medium">{bride.father}</span>
              <br />
              &amp; <span className="text-[#f5f0e8] font-medium">{bride.mother}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
