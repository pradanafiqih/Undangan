import React, { useState, useEffect, useRef } from 'react';
import { Music, Disc } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function AudioPlayer({ isInvitationOpen }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  // Play audio when invitation is opened
  useEffect(() => {
    if (isInvitationOpen && audioRef.current && !isPlaying) {
      startAudioWithFade();
    }
  }, [isInvitationOpen]);

  // Handle visibility change (pause on background, resume on active)
  useEffect(() => {
    const handleVisibility = () => {
      if (!audioRef.current) return;
      if (document.hidden) {
        if (isPlaying) {
          audioRef.current.pause();
        }
      } else {
        if (isPlaying && isInvitationOpen) {
          audioRef.current.play().catch(() => {});
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, [isPlaying, isInvitationOpen]);

  const startAudioWithFade = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          // Fade volume from 0 to 1 over 1.5 seconds
          let vol = 0;
          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = setInterval(() => {
            vol += 0.05;
            if (vol >= 0.8) {
              audio.volume = 0.8;
              clearInterval(fadeIntervalRef.current);
            } else {
              audio.volume = vol;
            }
          }, 75);
        })
        .catch((err) => {
          console.log('Audio autoplay prevented:', err);
          setIsPlaying(false);
        });
    }
  };

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  if (!isInvitationOpen) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingData.couple.audioSrc}
        loop
        preload="auto"
      />

      {/* Floating Audio Controller */}
      <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40">
        <button
          onClick={toggleAudio}
          aria-label={isPlaying ? "Mute audio" : "Play audio"}
          className={`relative group flex items-center justify-center w-12 h-12 rounded-full glass-panel border border-[#d4af37]/40 shadow-xl shadow-black/50 text-[#d4af37] hover:scale-110 active:scale-95 transition-all duration-300 ${
            isPlaying ? 'bg-[#1c1917]/90' : 'bg-[#1c1917]/70 opacity-80'
          }`}
        >
          {/* Animated pulse ring when playing */}
          {isPlaying && (
            <span className="absolute -inset-1 rounded-full border border-[#d4af37]/40 animate-ping opacity-30" />
          )}

          <Disc
            className={`w-6 h-6 transition-transform ${
              isPlaying ? 'animate-spin-slow text-[#ecd07a]' : 'text-gray-400'
            }`}
          />
        </button>
      </div>
    </>
  );
}
