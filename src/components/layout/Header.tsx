import React from 'react';
import Image from 'next/image';
import { brandConfig } from '@/config/brand';
import { navigationConfig } from '@/config/navigation';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const { logoAsset } = brandConfig;

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-300">
      <div className="max-w-[var(--container-wide-width)] mx-auto">
        <div className="glass-panel rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {/* Brand Link with Official Logo */}
          <a
            href="#inicio"
            aria-label={brandConfig.name}
            className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent-gold)] rounded-xl py-1 group"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-[var(--color-accent-gold)]/30 to-transparent border border-[var(--color-accent-gold)]/40 shadow-[0_0_15px_rgba(229,192,88,0.15)] group-hover:border-[var(--color-accent-gold)] transition-colors">
              <Image
                src={logoAsset.path}
                alt={logoAsset.alt}
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-editorial text-lg sm:text-xl font-normal tracking-wide text-white leading-none group-hover:text-[var(--color-accent-gold)] transition-colors">
                {brandConfig.name}
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[var(--color-accent-gold)] mt-1 font-medium">
                {brandConfig.motto}
              </span>
            </div>
          </a>

          {/* Navigation - Main Links */}
          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8">
            {navigationConfig.mainNav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] hover:text-white hover:text-shadow transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent-gold)] py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--color-accent-gold)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center gap-3">
            <a href="#lanzamiento">
              <Button variant="primary" size="sm" className="shadow-md">
                Notificarme
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
