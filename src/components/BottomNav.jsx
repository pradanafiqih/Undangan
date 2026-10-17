import React, { useState, useEffect } from 'react';
import { Home, Heart, Calendar, Image, Send, Gift, MessageSquare } from 'lucide-react';

export default function BottomNav({ isInvitationOpen }) {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'couple', label: 'Mempelai', icon: Heart },
    { id: 'event', label: 'Acara', icon: Calendar },
    { id: 'gallery', label: 'Galeri', icon: Image },
    { id: 'rsvp', label: 'RSVP', icon: Send },
    { id: 'gift', label: 'Kado', icon: Gift },
    { id: 'wishes', label: 'Ucapan', icon: MessageSquare },
  ];

  useEffect(() => {
    if (!isInvitationOpen) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop - 200 <= scrollY) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInvitationOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  if (!isInvitationOpen) return null;

  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] sm:max-w-md animate-fade-in"
    >
      <div className="glass-panel px-3 py-2 rounded-full border border-[#d4af37]/35 shadow-2xl shadow-black/80 flex items-center justify-between gap-1 sm:gap-2 backdrop-blur-xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              aria-label={item.label}
              className={`relative flex flex-col items-center justify-center p-2 sm:px-3 sm:py-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-[#b8942b] via-[#d4af37] to-[#cca37f] text-black font-semibold shadow-md shadow-[#d4af37]/20 scale-105'
                  : 'text-[#a39b90] hover:text-[#fdf9ee] hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline-block text-[10px] mt-0.5 tracking-tight font-sans">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
