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
    <SectionContainer id="inicio" className="pt-16 pb-24 md:pt-24 md:pb-36">
      {/* Luces Ambientales Cálidas de Fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(218,165,32,0.12)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(245,241,232,0.8)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Monumental Editorial Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--color-accent-gold)]/10 border border-[var(--color-accent-gold)]/30 backdrop-blur-md w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-gold)] animate-ping" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-accent-gold)]">
              {hero.label}
            </span>
          </div>

          <h1 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight text-slate-900">
            EN TU <br className="hidden sm:inline" />
            <span className="text-gold-shine italic font-light">MEMORIA</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg tracking-[0.16em] uppercase font-medium text-slate-800 max-w-xl leading-snug">
            {hero.subtitle}
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 max-w-xl font-light">
            {hero.description}
          </p>

          {/* Cita Bíblica (Lucas 22:19) con Acento Lumínico */}
          <div className="relative p-5 rounded-2xl bg-white border border-black/5 border-l-4 border-l-[var(--color-accent-gold)] shadow-sm max-w-lg my-1">
            <p className="text-xs sm:text-sm italic text-slate-800 font-light leading-relaxed">
              &ldquo;{brandConfig.biblicalConcept.verseText}&rdquo; &mdash;{' '}
              <span className="font-semibold text-[var(--color-accent-gold)]">
                {brandConfig.biblicalConcept.reference}
              </span>
            </p>
          </div>

          {/* Call to Action Principal & Notice */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-2">
            <a href="#lanzamiento" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Notificarme el lanzamiento
              </Button>
            </a>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-accent-gold)] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)]" />
              <span>{hero.releaseNotice}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Vitrina Visual en Cristal Blanco */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/5] glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden group shadow-xl">
            {/* Imagen Conceptual de Fondo */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src={heroProvisionalAsset.path}
                alt={heroProvisionalAsset.alt}
                width={800}
                height={800}
                className="w-full h-full object-cover opacity-20 scale-105 group-hover:scale-110 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>

            {/* Header del Arte */}
            <div className="relative z-10 flex items-center justify-between border-b border-black/5 pb-4">
              <div className="flex items-center gap-2">
                <div className="flex items-end gap-1 h-3.5">
                  <span className="w-0.5 bg-[var(--color-accent-gold)] rounded-full animate-wave-1" />
                  <span className="w-0.5 bg-[var(--color-accent-gold)] rounded-full animate-wave-2" />
                  <span className="w-0.5 bg-[var(--color-accent-gold)] rounded-full animate-wave-3" />
                  <span className="w-0.5 bg-[var(--color-accent-gold)] rounded-full animate-wave-4" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-gold)] font-semibold font-mono">
                  SFORZATO STUDIOS
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-slate-600 bg-white px-2 py-0.5 rounded-full border border-black/5 shadow-xs">
                2026
              </span>
            </div>

            {/* Centro: Sello Tipográfico de Prestigio */}
            <div className="relative z-10 my-auto text-center flex flex-col items-center gap-3 py-6">
              <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-accent-gold)] to-transparent" />
              <span className="text-xs uppercase tracking-[0.3em] text-slate-600 font-medium">
                {brandConfig.name}
              </span>
              <span className="font-serif-editorial text-4xl sm:text-5xl text-slate-900 font-normal leading-tight tracking-tight">
                EN TU MEMORIA
              </span>
              <p className="text-xs italic text-slate-600 max-w-xs font-light">
                Homenaje al legado y fe de {brandConfig.homage.personName}
              </p>
              <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-accent-gold)] to-transparent" />
            </div>

            {/* Footer de Ficha de Producción */}
            <div className="relative z-10 pt-4 border-t border-black/5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-600">
              <span>10 CANCIONES</span>
              <span className="text-[var(--color-accent-gold)] font-semibold">EDICIÓN ESPECIAL</span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
