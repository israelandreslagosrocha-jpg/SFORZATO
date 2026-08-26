import React from 'react';
import Image from 'next/image';
import { brandConfig } from '@/config/brand';
import { navigationConfig } from '@/config/navigation';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const { logoAsset } = brandConfig;

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-brand-navy)]/90 backdrop-blur-md border-b border-white/10 px-5 md:px-8 py-3.5">
      <div className="max-w-[var(--container-max-width)] mx-auto flex items-center justify-between gap-4">
        {/* Brand Link with Official Logo Image */}
        <a
          href="#inicio"
          aria-label={brandConfig.name}
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-sm"
        >
          <div className="relative w-9 h-9 md:w-10 md:h-10 flex-shrink-0">
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
            <span className="font-serif-editorial text-lg md:text-xl font-bold tracking-tight text-[var(--color-text-white)] leading-none">
              {brandConfig.name}
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-gold)] mt-0.5">
              {brandConfig.motto}
            </span>
          </div>
        </a>

        {/* Navigation - Main Links */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6">
          {navigationConfig.mainNav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div>
          <a href="#lanzamiento">
            <Button variant="primary" className="text-xs px-5 py-2.5">
              Notificarme
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};
