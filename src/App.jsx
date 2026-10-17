import React, { useState, useEffect } from 'react';
import CoverOverlay from './components/CoverOverlay';
import AudioPlayer from './components/AudioPlayer';
import BottomNav from './components/BottomNav';
import RevealOnScroll from './components/RevealOnScroll';
import HeroSection from './components/HeroSection';
import QuoteSection from './components/QuoteSection';
import CoupleSection from './components/CoupleSection';
import CountdownSection from './components/CountdownSection';
import EventSection from './components/EventSection';
import StorySection from './components/StorySection';
import GallerySection from './components/GallerySection';
import RsvpSection from './components/RsvpSection';
import GiftSection from './components/GiftSection';
import WishesSection from './components/WishesSection';
import FooterSection from './components/FooterSection';

export default function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [guestName, setGuestName] = useState('Nama Tamu');

  useEffect(() => {
    // Lock scroll initially until cover is opened
    if (!isInvitationOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Read URL query param ?to=Nama+Tamu
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to');
    if (toParam) {
      const decoded = decodeURIComponent(toParam.replace(/\+/g, ' '));
      setGuestName(decoded);
    }
  }, [isInvitationOpen]);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    document.body.style.overflow = '';
  };

  return (
    <div className="min-h-screen bg-[#141210] text-[#f5f0e8] relative selection:bg-[#d4af37] selection:text-black">
      {/* Cover / Welcome Screen */}
      <CoverOverlay
        isOpen={isInvitationOpen}
        onOpen={handleOpenInvitation}
        guestName={guestName}
      />

      {/* Floating Audio BGM Player */}
      <AudioPlayer isInvitationOpen={isInvitationOpen} />

      {/* Floating Bottom Navigation Bar */}
      <BottomNav isInvitationOpen={isInvitationOpen} />

      {/* Main Invitation Content */}
      <main className="w-full overflow-x-hidden">
        <section id="hero">
          <HeroSection />
        </section>

        <RevealOnScroll>
          <QuoteSection />
        </RevealOnScroll>

        <section id="couple">
          <RevealOnScroll>
            <CoupleSection />
          </RevealOnScroll>
        </section>

        <section id="countdown">
          <RevealOnScroll>
            <CountdownSection />
          </RevealOnScroll>
        </section>

        <section id="event">
          <RevealOnScroll>
            <EventSection />
          </RevealOnScroll>
        </section>

        <section id="story">
          <RevealOnScroll>
            <StorySection />
          </RevealOnScroll>
        </section>

        <section id="gallery">
          <RevealOnScroll>
            <GallerySection />
          </RevealOnScroll>
        </section>

        <section id="rsvp">
          <RevealOnScroll>
            <RsvpSection guestName={guestName} />
          </RevealOnScroll>
        </section>

        <section id="gift">
          <RevealOnScroll>
            <GiftSection />
          </RevealOnScroll>
        </section>

        <section id="wishes">
          <RevealOnScroll>
            <WishesSection guestName={guestName} />
          </RevealOnScroll>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}
