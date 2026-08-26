import React from 'react';
import Image from 'next/image';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Button } from '@/components/ui/Button';
import { contentConfig } from '@/config/content';
import { brandConfig } from '@/config/brand';

export const HeroSection: React.FC = () => {
  const { hero } = contentConfig;
  const { heroProvisionalAsset } = brandConfig;

  return (
    <SectionContainer id="inicio" theme="navy-hero" className="relative overflow-hidden pt-12 pb-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        {/* Left Editorial Text Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 animate-hero-entrance">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-accent-gold)]">
            {hero.label}
          </span>

          <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] text-[var(--color-text-white)]">
            {hero.title}
          </h1>

          <p className="text-xs sm:text-sm md:text-base tracking-[0.18em] uppercase font-medium text-[var(--color-text-white)]/90 leading-snug">
            {hero.subtitle}
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[var(--color-text-muted)] max-w-xl font-light">
            {hero.description}
          </p>

          {/* Fundamento Bíblico (Lucas 22:19) */}
          <div className="pt-2 pb-1 border-l-2 border-[var(--color-accent-gold)] pl-4 text-xs sm:text-sm italic text-[var(--color-text-muted)]">
            &ldquo;{brandConfig.biblicalConcept.verseText}&rdquo; &mdash; {brandConfig.biblicalConcept.reference}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
            <a href="#lanzamiento" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto">
                Notificarme el lanzamiento
              </Button>
            </a>
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent-gold)] font-medium">
              {hero.releaseNotice}
            </span>
          </div>
        </div>

        {/* Right Column: Hero Editorial Visual (Asset Provisorio de Preproducción) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/5] bg-gradient-to-b from-[var(--color-brand-navy-hero)] via-[var(--color-brand-navy)] to-black/80 border border-[var(--color-border-gold)] p-6 md:p-8 flex flex-col justify-between rounded.subtle shadow-2xl overflow-hidden group">
            {/* Background Image Layer (Provisional / IA - No Final) */}
            <div className="absolute inset-0 z-0">
              <Image
                src={heroProvisionalAsset.path}
                alt={heroProvisionalAsset.alt}
                width={800}
                height={800}
                className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-50 transition-opacity duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-navy)] via-transparent to-[var(--color-brand-navy-hero)]/80" />
            </div>

            {/* Ambient Gold Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-accent-gold)]/15 rounded-full blur-3xl pointer-events-none z-0" />

            {/* Editorial Header */}
            <div className="flex items-center justify-between border-b border-[var(--color-border-gold)] pb-3.5 z-10">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-gold)] font-semibold">
                EDICIÓN INÉDITA
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[var(--color-text-muted)]">
                2026
              </span>
            </div>

            {/* Central Typography Badge */}
            <div className="my-auto py-8 text-center flex flex-col items-center gap-4 z-10">
              <div className="w-8 h-[1px] bg-[var(--color-accent-gold)]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-white)]/80 font-light">
                {brandConfig.name}
              </span>
              <span className="font-serif-editorial text-4xl sm:text-5xl text-[var(--color-text-white)] font-normal leading-none tracking-tight drop-shadow-md">
                EN TU MEMORIA
              </span>
              <p className="text-xs italic text-[var(--color-text-muted)] max-w-xs font-light">
                Homenaje al legado y fe de {brandConfig.homage.personName}
              </p>
              <div className="w-8 h-[1px] bg-[var(--color-accent-gold)]" />
            </div>

            {/* Footer Specifications */}
            <div className="pt-3.5 border-t border-[var(--color-border-gold)] flex items-center justify-between z-10">
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                10 CANCIONES
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent-gold)] font-semibold">
                SFORZATO MUSIC
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
