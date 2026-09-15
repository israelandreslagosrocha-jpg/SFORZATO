'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { StudioPhotoItem } from '@/types';

export interface StudioPhotoCarouselProps {
  items: StudioPhotoItem[];
}

export const StudioPhotoCarousel: React.FC<StudioPhotoCarouselProps> = ({ items }) => {
  // El carrusel inicia SIEMPRE en el índice 0 (la toma de la batería acústica en vivo)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHoverPrev, setIsHoverPrev] = useState(false);
  const [isHoverNext, setIsHoverNext] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = items.length;
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 260);
  }, [total, isTransitioning]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 260);
  }, [total, isTransitioning]);

  const handleSelect = useCallback(
    (index: number) => {
      if (index === currentIndex || isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 260);
    },
    [currentIndex, isTransitioning]
  );

  // Manejo de navegación mediante teclado (flechas izquierda / derecha)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Soporte táctil para gestos swipe en dispositivos móviles
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label="Registro fotográfico de sesiones de grabación en estudio de En Tu Memoria"
      className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative select-none"
      style={{
        border: '1px solid rgba(140, 94, 10, 0.35)',
        boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)',
      }}
      tabIndex={0}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Contenedor principal de imagen: 100% despejado y nítido */}
      <div
        className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-video w-full overflow-hidden"
        style={{
          maxHeight: '520px',
          backgroundColor: '#070C16',
        }}
      >
        {/* Renderizado de la imagen activa con transición suave */}
        <div
          key={currentItem.id}
          className="relative w-full h-full"
          style={{
            opacity: isTransitioning ? 0.7 : 1,
            transition: 'opacity 0.26s ease-out',
          }}
        >
          <Image
            src={currentItem.path}
            alt={currentItem.alt}
            width={currentItem.width}
            height={currentItem.height}
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1024px, 1200px"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Flecha Lateral Izquierda flotante (sólo en md y desktop para no obstaculizar la vista en móvil) */}
        <button
          type="button"
          onClick={handlePrev}
          onMouseEnter={() => setIsHoverPrev(true)}
          onMouseLeave={() => setIsHoverPrev(false)}
          aria-label="Ver fotografía anterior de la sesión"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center cursor-pointer outline-none transition-all"
          style={{
            transform: `translateY(-50%) ${isHoverPrev ? 'scale(1.08)' : 'scale(1)'}`,
            backgroundColor: isHoverPrev ? '#8C5E0A' : 'rgba(7, 12, 22, 0.82)',
            border: isHoverPrev ? '2px solid #F5D77F' : '1.5px solid rgba(245, 215, 127, 0.65)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isHoverPrev ? '#FFFFFF' : '#F5D77F'}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Flecha Lateral Derecha flotante (sólo en md y desktop) */}
        <button
          type="button"
          onClick={handleNext}
          onMouseEnter={() => setIsHoverNext(true)}
          onMouseLeave={() => setIsHoverNext(false)}
          aria-label="Ver fotografía siguiente de la sesión"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center cursor-pointer outline-none transition-all"
          style={{
            transform: `translateY(-50%) ${isHoverNext ? 'scale(1.08)' : 'scale(1)'}`,
            backgroundColor: isHoverNext ? '#8C5E0A' : 'rgba(7, 12, 22, 0.82)',
            border: isHoverNext ? '2px solid #F5D77F' : '1.5px solid rgba(245, 215, 127, 0.65)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isHoverNext ? '#FFFFFF' : '#F5D77F'}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Indicador minimalista en esquina superior (no tapa detalles) */}
        <div
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider pointer-events-none"
          style={{
            backgroundColor: 'rgba(7, 12, 22, 0.75)',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(6px)',
          }}
        >
          {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      </div>

      {/* Placa editorial inferior dedicada: Título, etiqueta y descripción técnica */}
      <div
        className="p-4 sm:p-6 md:p-7 flex flex-col gap-2 sm:gap-2.5"
        style={{
          backgroundColor: '#070C16',
          borderTop: '1px solid rgba(245, 215, 127, 0.25)',
        }}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Badge de categoría de sesión */}
          <div
            className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(14, 23, 38, 0.9)',
              border: '1px solid rgba(245, 215, 127, 0.45)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: '#F5D77F' }}
            />
            <span
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-mono font-bold"
              style={{ color: '#F5D77F' }}
            >
              {currentItem.tag}
            </span>
          </div>

          <span
            className="text-[10px] uppercase font-mono tracking-widest font-semibold text-slate-400"
            style={{ color: '#94A3B8' }}
          >
            TOMA {currentIndex + 1} DE {total}
          </span>
        </div>

        {/* Título de la toma */}
        <h4
          className="font-serif-editorial text-lg sm:text-2xl font-normal leading-tight text-white"
          style={{ color: '#FFFFFF' }}
        >
          {currentItem.title}
        </h4>

        {/* Leyenda y detalles de producción */}
        <p
          className="text-xs sm:text-sm font-normal leading-relaxed text-slate-300"
          style={{ color: '#CBD5E1' }}
        >
          {currentItem.caption}
        </p>
      </div>

      {/* Barra de navegación inferior: Flechas ergonómicas táctiles + Dots de selección */}
      <div
        className="py-3 px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4"
        style={{
          backgroundColor: '#040811',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Botón Anterior ergonómico */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Fotografía anterior"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider cursor-pointer active:scale-95 transition-all outline-none"
          style={{
            backgroundColor: 'rgba(14, 23, 38, 0.95)',
            color: '#F5D77F',
            border: '1px solid rgba(245, 215, 127, 0.45)',
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="hidden sm:inline">ANTERIOR</span>
        </button>

        {/* Puntos de navegación directa (10 tomas) */}
        <div
          className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mx-auto"
          role="tablist"
          aria-label="Fotografías del carrusel"
        >
          {items.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Ir a fotografía ${idx + 1}: ${item.title}`}
                onClick={() => handleSelect(idx)}
                style={{
                  width: isActive ? '22px' : '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  backgroundColor: isActive ? '#F5D77F' : 'rgba(255, 255, 255, 0.30)',
                  boxShadow: isActive ? '0 0 8px rgba(245, 215, 127, 0.6)' : 'none',
                  border: 'none',
                  padding: 0,
                  margin: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  outline: 'none',
                }}
              />
            );
          })}
        </div>

        {/* Botón Siguiente ergonómico */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Fotografía siguiente"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider cursor-pointer active:scale-95 transition-all outline-none"
          style={{
            backgroundColor: 'rgba(14, 23, 38, 0.95)',
            color: '#F5D77F',
            border: '1px solid rgba(245, 215, 127, 0.45)',
          }}
        >
          <span className="hidden sm:inline">SIGUIENTE</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};
