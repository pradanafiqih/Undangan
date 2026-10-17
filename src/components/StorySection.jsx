import React from 'react';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function StorySection() {
  const { story } = weddingData;

  return (
    <section className="relative py-24 px-6 bg-[#141210]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs md:text-sm tracking-[0.3em] uppercase text-[#cca37f] mb-3">
            Our Journey
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#f5f0e8] mb-4 gold-gradient-text">
            Kisah Cinta Kami
          </h2>
          <p className="font-sans text-sm text-[#a39b90] max-w-lg mx-auto">
            Setiap cerita cinta itu indah, namun cerita cinta kita adalah yang paling berharga bagi kami.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#d4af37]/30 ml-4 md:mx-auto md:max-w-2xl space-y-12">
          {story.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-10 group">
              {/* Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#1c1917] border-2 border-[#d4af37] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#d4af37] transition-all duration-300">
                <Heart className="w-3.5 h-3.5 text-[#d4af37] group-hover:text-black transition-colors" />
              </div>

              {/* Year Badge */}
              <span className="font-cinzel text-xs font-semibold tracking-widest text-[#d4af37] px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 inline-block mb-2">
                {item.year}
              </span>

              {/* Title & Description */}
              <h3 className="font-serif text-xl md:text-2xl text-[#f5f0e8] font-medium mb-2 gold-gradient-text">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-[#a39b90] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
