import React, { useState } from 'react';
import { Gift, Copy, Check, ChevronDown, ChevronUp, MapPin, CreditCard } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function GiftSection() {
  const { banks, physical } = weddingData.gift;
  const [isOpen, setIsOpen] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
    } else {
      const input = document.createElement('textarea');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }

    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section className="relative py-24 px-6 bg-[#1c1917]/70">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12">
          <p className="font-cinzel text-xs md:text-sm tracking-[0.3em] uppercase text-[#cca37f] mb-3">
            Wedding Gift
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#f5f0e8] mb-4 gold-gradient-text">
            Tanda Kasih
          </h2>
          <p className="font-sans text-sm text-[#a39b90] max-w-lg mx-auto leading-relaxed">
            Kehadiran dan doa restu Anda adalah hadiah terindah bagi kami. Namun, apabila Anda berkenan memberikan tanda kasih, Anda dapat mengirimkannya melalui:
          </p>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b8942b] via-[#d4af37] to-[#cca37f] text-black font-semibold text-xs tracking-widest uppercase shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 mb-8"
        >
          <Gift className="w-4 h-4 text-black" />
          <span>{isOpen ? 'Sembunyikan Hadiah' : 'Kirim Hadiah / Rekening'}</span>
          {isOpen ? <ChevronUp className="w-4 h-4 text-black" /> : <ChevronDown className="w-4 h-4 text-black" />}
        </button>

        {/* Collapsible Content */}
        {isOpen && (
          <div className="space-y-6 animate-fade-in">
            {/* Bank Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {banks.map((b) => (
                <div
                  key={b.id}
                  className="glass-panel rounded-2xl p-6 border border-[#d4af37]/30 shadow-xl relative overflow-hidden group hover:border-[#d4af37]/60 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-cinzel text-xs uppercase tracking-widest px-3 py-1 rounded-full border font-semibold ${
                        b.bankName.includes('Maybank')
                          ? 'bg-[#ffc800]/15 text-[#ffc800] border-[#ffc800]/30'
                          : b.bankName.includes('CIMB')
                          ? 'bg-[#b31e2c]/15 text-[#ff8080] border-[#b31e2c]/30'
                          : 'bg-[#ff7a00]/15 text-[#ffa940] border-[#ff7a00]/30'
                      }`}
                    >
                      {b.bankName}
                    </span>
                    <CreditCard className="w-5 h-5 text-[#d4af37]/70" />
                  </div>

                  <p className="font-mono text-lg md:text-xl font-bold text-[#fdf9ee] tracking-wider mb-1">
                    {b.accountNumber}
                  </p>
                  <p className="font-sans text-xs text-[#a39b90] mb-5">
                    a.n. <span className="text-[#f5f0e8] font-medium">{b.accountHolder}</span>
                  </p>

                  <button
                    onClick={() => handleCopy(b.id, b.accountNumber)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#141210] border border-[#d4af37]/30 text-xs tracking-wider uppercase text-[#fdf9ee] hover:bg-[#d4af37]/15 hover:border-[#d4af37] transition-all duration-300"
                  >
                    {copiedId === b.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Berhasil Disalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>Salin Rekening</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Physical Gift Address Card */}
            <div className="glass-panel rounded-2xl p-6 md:p-8 border border-[#d4af37]/30 text-left shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
                <h3 className="font-serif text-lg text-[#f5f0e8] font-medium gold-gradient-text">
                  Kirim Kado Fisik
                </h3>
              </div>
              <p className="font-sans text-sm text-[#f5f0e8] font-medium mb-1">
                Penerima: {physical.recipient}
              </p>
              <p className="font-sans text-xs md:text-sm text-[#a39b90] leading-relaxed mb-4">
                {physical.address}
              </p>
              <button
                onClick={() => handleCopy('physical', physical.address)}
                className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-[#141210] border border-[#d4af37]/30 text-xs tracking-wider uppercase text-[#fdf9ee] hover:bg-[#d4af37]/15 hover:border-[#d4af37] transition-all duration-300"
              >
                {copiedId === 'physical' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Alamat Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Salin Alamat</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
