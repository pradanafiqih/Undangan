import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, User, Users, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RsvpSection({ guestName }) {
  const [name, setName] = useState(guestName || '');
  const [attendance, setAttendance] = useState('Hadir');
  const [guestCount, setGuestCount] = useState('1');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (guestName) setName(guestName);
    // Check if previously submitted
    const saved = localStorage.getItem('rsvp_submitted');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setName(parsed.name || '');
        setAttendance(parsed.attendance || 'Hadir');
        setGuestCount(parsed.guestCount || '1');
        setIsSubmitted(true);
      } catch (e) {}
    }
  }, [guestName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Trigger confetti if attending
    if (attendance === 'Hadir') {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#d4af37', '#cca37f', '#ffffff', '#b8942b'],
      });
    }

    const payload = {
      name,
      attendance,
      guestCount,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem('rsvp_submitted', JSON.stringify(payload));
    setIsSubmitted(true);
  };

  return (
    <section className="relative py-24 px-6 bg-[#141210]">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-cinzel text-xs md:text-sm tracking-[0.3em] uppercase text-[#cca37f] mb-3">
            RSVP
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#f5f0e8] mb-4 gold-gradient-text">
            Konfirmasi Kehadiran
          </h2>
          <p className="font-sans text-sm text-[#a39b90]">
            Mohon kesediaan Bapak/Ibu/Saudara/i untuk mengonfirmasi kehadiran Anda.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 md:p-10 border border-[#d4af37]/25 shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto mb-4 text-[#d4af37]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#f5f0e8] mb-2 gold-gradient-text">
                Terima Kasih!
              </h3>
              <p className="font-sans text-sm text-[#a39b90] mb-6">
                Konfirmasi kehadiran Anda telah tersimpan ({attendance}
                {attendance === 'Hadir' ? `, ${guestCount} orang` : ''}).
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs uppercase tracking-widest text-[#d4af37] underline hover:text-[#fdf9ee] transition-colors"
              >
                Ubah Konfirmasi
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#cca37f] mb-2 font-medium">
                  Nama Tamu
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#d4af37] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama Anda..."
                    className="w-full bg-[#1c1917]/80 border border-[#d4af37]/30 rounded-xl py-3.5 pl-11 pr-4 text-sm text-[#f5f0e8] placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>
              </div>

              {/* Attendance confirmation */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#cca37f] mb-2 font-medium">
                  Konfirmasi Kehadiran
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['Hadir', 'Tidak Hadir'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setAttendance(opt)}
                      className={`py-3 px-4 rounded-xl border text-xs tracking-wider uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        attendance === opt
                          ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-lg shadow-[#d4af37]/20 font-bold'
                          : 'bg-[#1c1917]/50 text-[#a39b90] border-[#d4af37]/20 hover:border-[#d4af37]/40'
                      }`}
                    >
                      {attendance === opt && <Check className="w-3.5 h-3.5" />}
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest count (only if Hadir) */}
              {attendance === 'Hadir' && (
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#cca37f] mb-2 font-medium">
                    Jumlah Tamu (Orang)
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#d4af37] absolute left-4 top-1/2 -translate-y-1/2" />
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full bg-[#1c1917]/80 border border-[#d4af37]/30 rounded-xl py-3.5 pl-11 pr-4 text-sm text-[#f5f0e8] focus:outline-none focus:border-[#d4af37] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="1">1 Orang</option>
                      <option value="2">2 Orang</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#b8942b] via-[#d4af37] to-[#cca37f] text-black font-semibold text-xs tracking-widest uppercase shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <Send className="w-4 h-4 text-black" />
                <span>Kirim Konfirmasi</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
