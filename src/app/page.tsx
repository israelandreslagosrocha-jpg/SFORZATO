import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ConceptSection } from '@/components/sections/ConceptSection';
import { AlbumInfoSection } from '@/components/sections/AlbumInfoSection';
import { TeaserArtistsSection } from '@/components/sections/TeaserArtistsSection';
import { DocumentarySection } from '@/components/sections/DocumentarySection';
import { CaptureSection } from '@/components/sections/CaptureSection';
import { SocialSection } from '@/components/sections/SocialSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-brand-navy)] text-[var(--color-text-white)]">
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <ConceptSection />
        <AlbumInfoSection />
        <TeaserArtistsSection />
        <DocumentarySection />
        <CaptureSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}
