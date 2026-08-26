import React from 'react';
import Image from 'next/image';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentConfig } from '@/config/content';
import { brandConfig } from '@/config/brand';
import { featureFlags } from '@/config/featureFlags';

export const AlbumInfoSection: React.FC = () => {
  const { album } = contentConfig;
  const { coverProvisionalAsset } = brandConfig;

  return (
    <SectionContainer id="album" className="py-28 sm:py-36 border-t border-slate-200/60 relative">
      {/* Luz Ambiental de Fondo */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(218,165,32,0.07)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-14 relative z-10">
        <SectionHeader
          label={album.subtitle}
          title={album.title}
          subtitle="Una reinterpretación solemne y contemporánea"
          align="left"
        />

        {/* Lead Narrative con Espaciado y Contraste */}
        <p
          className="text-xl sm:text-2xl font-normal leading-relaxed text-slate-900 font-serif-editorial max-w-3xl"
          style={{ lineHeight: '1.6' }}
        >
          Una producción de <span className="text-[#8C5E0A] font-bold">{album.songCount} canciones</span> que reúne a destacados artistas y grupos cristianos para reinterpretar alabanzas que han marcado generaciones.
        </p>

        {/* Optional Provisional Album Cover Preview when feature flag is toggled */}
        {featureFlags.showAlbumCover && (
          <div className="flex justify-center my-4">
            <div className="relative w-full max-w-sm aspect-square glass-card rounded-3xl overflow-hidden p-3 group shadow-lg">
              <Image
                src={coverProvisionalAsset.path}
                alt={coverProvisionalAsset.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-[10px] uppercase tracking-widest text-[#8C5E0A] font-mono bg-amber-50 px-3 py-1 rounded-full backdrop-blur-md border border-[#8C5E0A]/40 font-bold">
                  ARTE PROMOCIONAL PROVISIONAL
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Bento Grid: Fichas Técnicas de Estudio en Cristal Blanco */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1: Producción y Mezcla */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 group shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C5E0A] font-mono font-bold">
                PRODUCCIÓN & MEZCLA
              </span>
              <div className="flex items-end gap-1 h-3">
                <span className="w-0.5 bg-[#8C5E0A] rounded-full animate-wave-1" />
                <span className="w-0.5 bg-[#8C5E0A] rounded-full animate-wave-3" />
                <span className="w-0.5 bg-[#8C5E0A] rounded-full animate-wave-5" />
              </div>
            </div>
            <div>
              <span className="font-serif-editorial text-2xl text-slate-900 block font-normal">
                {album.production}
              </span>
              <span className="text-xs text-slate-700 font-normal mt-1 block">
                Dirección artística y arreglos originales
              </span>
            </div>
          </div>

          {/* Card 2: Grabación */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 group shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C5E0A] font-mono font-bold">
                SESIONES EN ESTUDIO
              </span>
              <span className="w-2 h-2 rounded-full bg-[#8C5E0A]" />
            </div>
            <div>
              <span className="font-serif-editorial text-2xl text-slate-900 block font-normal">
                {album.recording}
              </span>
              <span className="text-xs text-slate-700 font-normal mt-1 block">
                Captura acústica e instrumental en vivo
              </span>
            </div>
          </div>

          {/* Card 3: Masterización */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 group shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C5E0A] font-mono font-bold">
                MASTERIZACIÓN
              </span>
              <span className="text-[10px] font-mono text-[#8C5E0A] bg-amber-50 px-2.5 py-0.5 rounded-full border border-[#8C5E0A]/30 font-bold">
                HI-RES
              </span>
            </div>
            <div>
              <span className="font-serif-editorial text-2xl text-slate-900 block font-normal">
                {album.mastering}
              </span>
              <span className="text-xs text-slate-700 font-normal mt-1 block">
                Finalización en estándar para plataformas
              </span>
            </div>
          </div>
        </div>

        {/* Expectativa de Artistas en Vitrina Editorial */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-l-4 border-l-[#8C5E0A] shadow-md border border-slate-200">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C5E0A] font-bold font-mono">
              PARTICIPANTES & COLABORADORES
            </span>
            <p className="font-serif-editorial text-xl sm:text-2xl text-slate-900 italic font-normal">
              &ldquo;{album.teaserMessage}&rdquo;
            </p>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#8C5E0A] font-mono whitespace-nowrap bg-amber-50 px-4 py-2 rounded-full border border-[#8C5E0A]/40 font-bold">
            PRÓXIMAMENTE
          </span>
        </div>
      </div>
    </SectionContainer>
  );
};
