import React from 'react';
import Image from 'next/image';
import { brandConfig } from '@/config/brand';
import { navigationConfig } from '@/config/navigation';
import { socialsConfig } from '@/config/socials';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { logoAsset } = brandConfig;

  return (
    <footer className="w-full bg-[#F1ECE1] text-slate-900 border-t border-black/5 pt-20 pb-16 px-6 sm:px-8">
      <div className="max-w-[var(--container-wide-width)] mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-8">
          {/* Brand Info with Official Logo */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-[var(--color-accent-gold)]/30 to-white border border-[var(--color-accent-gold)]/40 shadow-sm">
                <Image
                  src={logoAsset.path}
                  alt={logoAsset.alt}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-editorial text-xl font-normal tracking-wide text-slate-900">
                  {brandConfig.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-bold">
                  {brandConfig.motto}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-600 font-light leading-relaxed max-w-xs mt-1">
              {brandConfig.projectTagline}
            </p>
          </div>

          {/* Nav: El Proyecto */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-bold">
              {brandConfig.projectTitle}
            </span>
            <ul className="flex flex-col gap-2 text-xs text-slate-600 font-normal">
              {navigationConfig.footerNav.project.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="hover:text-slate-900 transition-colors py-0.5 inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav: Acerca de */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-bold">
              EL PROYECTO
            </span>
            <ul className="flex flex-col gap-2 text-xs text-slate-600 font-normal">
              {navigationConfig.footerNav.about.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="hover:text-slate-900 transition-colors py-0.5 inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-accent-gold)] font-bold">
              SÍGUENOS
            </span>
            <ul className="flex flex-col gap-2 text-xs text-slate-600 font-normal">
              {socialsConfig.channels.map((channel) => (
                <li key={channel.id}>
                  {channel.url ? (
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={channel.ariaLabel}
                      className="hover:text-slate-900 transition-colors py-0.5 inline-block"
                    >
                      {channel.platform}
                    </a>
                  ) : (
                    <span className="opacity-60 py-0.5 inline-block">{channel.platform}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-600 font-mono">
          <span>© {currentYear} {brandConfig.name}. Todos los derechos reservados.</span>
          <span className="text-[var(--color-accent-gold)] font-semibold">SANTIAGO, CHILE</span>
        </div>
      </div>
    </footer>
  );
};
