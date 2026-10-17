import React from 'react';
import { MapPin, Calendar, Clock, Navigation } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function EventSection() {
  const { events } = weddingData;

  return (
    <section className="relative py-24 px-6 bg-[#1c1917]/70">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs md:text-sm tracking-[0.3em] uppercase text-[#cca37f] mb-3">
            Wedding Events
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#f5f0e8] mb-4 gold-gradient-text">
            Agenda Acara
          </h2>
          <p className="font-sans text-sm text-[#a39b90] max-w-xl mx-auto">
            Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="glass-panel rounded-3xl p-8 md:p-10 border border-[#d4af37]/25 shadow-2xl flex flex-col justify-between hover:border-[#d4af37]/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Corner decor glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl group-hover:bg-[#d4af37]/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Event Title */}
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
                  <span className="font-cinzel text-xs tracking-widest text-[#cca37f] uppercase font-semibold">
                    {evt.title}
                  </span>
                </div>

                {/* Day & Date */}
                <div className="flex items-center gap-3 text-[#f5f0e8] mb-3">
                  <Calendar className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <p className="font-serif text-xl md:text-2xl font-normal">
                    {evt.day}, {evt.date}
                  </p>
                </div>

                {/* Time */}
                <div className="flex items-center gap-3 text-[#dec3a7] mb-6">
                  <Clock className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <p className="font-sans text-sm md:text-base font-medium">
                    {evt.time}
                  </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent my-6" />

                {/* Venue & Address */}
                <div className="flex items-start gap-3 mb-8">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg text-[#f5f0e8] font-medium mb-1">
                      {evt.venue}
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-[#a39b90] leading-relaxed">
                      {evt.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <a
                  href={evt.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#b8942b] via-[#d4af37] to-[#cca37f] text-black font-semibold text-xs tracking-widest uppercase shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <Navigation className="w-4 h-4 text-black" />
                  <span>Lihat Lokasi (Google Maps)</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
