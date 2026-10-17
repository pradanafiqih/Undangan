import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, Heart, User, CheckCircle } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function WishesSection({ guestName }) {
  const [wishes, setWishes] = useState([]);
  const [author, setAuthor] = useState(guestName || '');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState('Hadir');

  useEffect(() => {
    if (guestName) setAuthor(guestName);

    const savedWishes = localStorage.getItem('wedding_wishes');
    if (savedWishes) {
      try {
        setWishes(JSON.parse(savedWishes));
      } catch (e) {
        setWishes(weddingData.initialWishes);
      }
    } else {
      setWishes(weddingData.initialWishes);
    }
  }, [guestName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    const newWish = {
      id: `w-${Date.now()}`,
      name: author,
      message,
      date: 'Baru saja',
      attendance,
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('wedding_wishes', JSON.stringify(updated));
    setMessage('');
  };

  return (
    <section className="relative py-24 px-6 bg-[#141210]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs md:text-sm tracking-[0.3em] uppercase text-[#cca37f] mb-3">
            Wishes &amp; Prayers
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#f5f0e8] mb-4 gold-gradient-text">
            Ucapan &amp; Doa
          </h2>
          <p className="font-sans text-sm text-[#a39b90] max-w-lg mx-auto">
            Untaian doa dan harapan terbaik dari para sahabat dan keluarga tercinta.
          </p>
        </div>

        {/* Wish Form */}
        <div className="glass-panel rounded-3xl p-6 md:p-8 border border-[#d4af37]/25 shadow-2xl mb-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#cca37f] mb-1.5 font-medium">
                Nama Anda
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#d4af37] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Masukkan nama Anda..."
                  className="w-full bg-[#1c1917]/80 border border-[#d4af37]/30 rounded-xl py-3 pl-11 pr-4 text-sm text-[#f5f0e8] placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#cca37f] mb-1.5 font-medium">
                Kehadiran
              </label>
              <select
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                className="w-full bg-[#1c1917]/80 border border-[#d4af37]/30 rounded-xl py-3 px-4 text-sm text-[#f5f0e8] focus:outline-none focus:border-[#d4af37] transition-colors"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                <option value="Belum Pasti">Masih Ragu</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#cca37f] mb-1.5 font-medium">
                Pesan &amp; Doa
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan ucapan selamat dan doa restu..."
                className="w-full bg-[#1c1917]/80 border border-[#d4af37]/30 rounded-xl p-4 text-sm text-[#f5f0e8] placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#b8942b] via-[#d4af37] to-[#cca37f] text-black font-semibold text-xs tracking-widest uppercase shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
            >
              <Send className="w-4 h-4 text-black" />
              <span>Kirim Ucapan</span>
            </button>
          </form>
        </div>

        {/* Wishes List */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
          {wishes.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-2xl p-5 border border-[#d4af37]/15 shadow-md hover:border-[#d4af37]/35 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-base text-[#f5f0e8] font-medium gold-gradient-text">
                    {item.name}
                  </h4>
                  {item.attendance && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-sans uppercase tracking-wider font-semibold ${
                        item.attendance === 'Hadir'
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : 'bg-stone-500/15 text-stone-400 border border-stone-500/30'
                      }`}
                    >
                      {item.attendance}
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-[#a39b90] font-sans">
                  {item.date}
                </span>
              </div>
              <p className="font-sans text-xs md:text-sm text-[#d2cdc5] leading-relaxed">
                {item.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
