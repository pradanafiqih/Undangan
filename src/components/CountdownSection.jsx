import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = weddingData.date.countdownTarget;

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate Google Calendar Link
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Pernikahan Febria & Fiqih"
  )}&dates=20260519T010000Z/20260519T070000Z&details=${encodeURIComponent(
    "Pernikahan Febria Nur Kirani Mukti & Pradana Fiqih Priambodo di The Winner Premiere Hotel Pemalang."
  )}&location=${encodeURIComponent(
    "The Winner Premiere Hotel Pemalang, Jl. Jend. A. Yani No.1, Mulyoharjo, Kebondalem, Kec. Pemalang, Jawa Tengah 52312"
  )}`;

  return (
    <section className="relative py-20 px-6 bg-[#141210] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-cinzel text-xs md:text-sm tracking-[0.3em] uppercase text-[#cca37f] mb-3">
          Save The Date
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#f5f0e8] mb-10 gold-gradient-text">
          Menghitung Hari Menuju Bahagia
        </h2>

        {/* Timer Box Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto mb-10">
          {[
            { label: 'Hari', value: timeLeft.days },
            { label: 'Jam', value: timeLeft.hours },
            { label: 'Menit', value: timeLeft.minutes },
            { label: 'Detik', value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="glass-panel rounded-2xl p-4 md:p-6 border border-[#d4af37]/25 shadow-xl flex flex-col items-center justify-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="font-serif text-3xl md:text-5xl font-bold gold-gradient-text mb-1">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-cinzel text-[11px] md:text-xs tracking-widest uppercase text-[#a39b90]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Save to Calendar Button */}
        <a
          href={gcalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1c1917] border border-[#d4af37]/40 text-[#fdf9ee] text-xs uppercase tracking-widest hover:bg-[#d4af37]/10 hover:border-[#d4af37] transition-all duration-300 shadow-lg"
        >
          <Calendar className="w-4 h-4 text-[#d4af37]" />
          <span>Simpan ke Google Calendar</span>
        </a>
      </div>
    </section>
  );
}
