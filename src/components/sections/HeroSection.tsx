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
    <SectionContainer id="inicio" className="pt-20 pb-28 md:pt-28 md:pb-40">
      {/* Luces Ambientales Cálidas de Fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(218,165,32,0.14)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Monumental Editorial Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-50 border border-[#8C5E0A]/30 backdrop-blur-md w-fit shadow-xs mb-1">
            <span className="w-2 h-2 rounded-full bg-[#8C5E0A] animate-ping" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#8C5E0A]">
              {hero.label}
            </span>
          </div>

          <h1
            className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-slate-900"
            style={{ lineHeight: '1.18' }}
          >
            EN TU <br className="hidden sm:inline" />
            <span className="text-gold-shine italic font-normal">MEMORIA</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg tracking-[0.14em] uppercase font-bold text-slate-800 max-w-xl leading-snug">
            {hero.subtitle}
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 max-w-xl font-normal">
            {hero.description}
          </p>

          {/* Cita Bíblica (Lucas 22:19) */}
          <div className="relative p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-[#8C5E0A] shadow-sm max-w-lg my-2">
            <p className="text-sm italic text-slate-800 font-normal leading-relaxed">
              &ldquo;{brandConfig.biblicalConcept.verseText}&rdquo; &mdash;{' '}
              <span className="font-bold text-[#8C5E0A]">
                {brandConfig.biblicalConcept.reference}
              </span>
            </p>
          </div>

          {/* Call to Action Principal & Notice */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-3">
            <a href="#lanzamiento" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Notificarme el lanzamiento
              </Button>
            </a>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C5E0A] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#8C5E0A]" />
              <span>{hero.releaseNotice}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Vitrina Visual en Estilo Vinilo de Estudio */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden group shadow-2xl border-2 border-[#D4AF37]/50"
            style={{ backgroundColor: '#070C16' }}
          >
            {/* Imagen Conceptual de Fondo con Mezcla Cinematográfica Suave */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src={heroProvisionalAsset.path}
                alt={heroProvisionalAsset.alt}
                width={800}
                height={800}
                className="w-full h-full object-cover opacity-35 scale-105 group-hover:scale-110 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070C16] via-[#070C16]/60 to-transparent" />
            </div>

            {/* Header del Arte (100% Legible en Blanco y Oro Brillante) */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/20 pb-4">
              <div className="flex items-center gap-2">
                <div className="flex items-end gap-1 h-3.5">
                  <span className="w-0.5 bg-[#F3E08A] rounded-full animate-wave-1" />
                  <span className="w-0.5 bg-[#F3E08A] rounded-full animate-wave-2" />
                  <span className="w-0.5 bg-[#F3E08A] rounded-full animate-wave-3" />
                  <span className="w-0.5 bg-[#F3E08A] rounded-full animate-wave-4" />
                </div>
                <span
                  className="text-[11px] uppercase tracking-[0.22em] text-[#F3E08A] font-bold font-mono"
                  style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
                >
                  SFORZATO STUDIOS
                </span>
              </div>
              <span
                className="text-[10px] font-mono font-bold tracking-widest text-white bg-black/60 px-3 py-1 rounded-full border border-white/30 backdrop-blur-sm"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
              >
                2026
              </span>
            </div>

            {/* Centro: Sello Tipográfico de Prestigio en Blanco Brillante y Oro */}
            <div className="relative z-10 my-auto text-center flex flex-col items-center gap-3 py-6">
              <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#F3E08A] to-transparent" />
              <span
                className="text-xs uppercase tracking-[0.32em] text-[#F3E08A] font-bold"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
              >
                {brandConfig.name}
              </span>
              <span
                className="font-serif-editorial text-4xl sm:text-5xl text-white font-normal tracking-tight drop-shadow-md"
                style={{ lineHeight: '1.18', textShadow: '0 3px 14px rgba(0,0,0,0.95)' }}
              >
                EN TU MEMORIA
              </span>
              <p
                className="text-xs italic text-white/95 max-w-xs font-medium"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
              >
                Homenaje al legado y fe de {brandConfig.homage.personName}
              </p>
              <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#F3E08A] to-transparent" />
            </div>

            {/* Footer de Ficha de Producción (Blanco y Oro Brillante) */}
            <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest font-bold">
              <span className="text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                10 CANCIONES
              </span>
              <span className="text-[#F3E08A]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                EDICIÓN ESPECIAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
