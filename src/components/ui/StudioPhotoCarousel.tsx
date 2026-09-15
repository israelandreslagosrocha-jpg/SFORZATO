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
      className="glass-card rounded-3xl overflow-hidden shadow-2xl relative select-none"
      style={{
        border: '1px solid rgba(140, 94, 10, 0.35)',
        boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)',
      }}
      tabIndex={0}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Contenedor principal de imagen con relación de aspecto panorámica 16:9 */}
      <div
        className="relative aspect-video w-full overflow-hidden"
        style={{
          maxHeight: '540px',
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

        {/* Degradado cinematográfico inferior para máxima legibilidad de textos */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(7, 12, 22, 0.95) 0%, rgba(7, 12, 22, 0.45) 45%, rgba(7, 12, 22, 0.15) 100%)',
          }}
        />

        {/* Barra superior: Badge de categoría y contador de fotos */}
        <div
          className="absolute top-0 left-0 right-0 p-4 sm:p-7 flex items-center justify-between pointer-events-none"
          style={{ zIndex: 30 }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full pointer-events-auto shadow-sm"
            style={{
              backgroundColor: 'rgba(7, 12, 22, 0.85)',
              border: '1px solid rgba(245, 215, 127, 0.50)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: '#F5D77F' }}
            />
            <span
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-mono font-bold"
              style={{ color: '#F5D77F', textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}
            >
              {currentItem.tag}
            </span>
          </div>

          <div
            className="font-mono text-xs sm:text-sm tracking-widest px-3.5 py-1.5 rounded-full font-bold pointer-events-auto shadow-sm"
            style={{
              backgroundColor: 'rgba(7, 12, 22, 0.85)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>
        </div>

        {/* Flecha Lateral Izquierda (Anterior) */}
        <button
          type="button"
          onClick={handlePrev}
          onMouseEnter={() => setIsHoverPrev(true)}
          onMouseLeave={() => setIsHoverPrev(false)}
          aria-label="Ver fotografía anterior de la sesión"
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: `translateY(-50%) ${isHoverPrev ? 'scale(1.08)' : 'scale(1)'}`,
            zIndex: 40,
            width: '48px',
            height: '48px',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isHoverPrev ? '#8C5E0A' : 'rgba(7, 12, 22, 0.82)',
            border: isHoverPrev ? '2px solid #F5D77F' : '1.5px solid rgba(245, 215, 127, 0.65)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
            cursor: 'pointer',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            outline: 'none',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isHoverPrev ? '#FFFFFF' : '#F5D77F'}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: isHoverPrev ? 'translateX(-1px)' : 'none',
              transition: 'transform 0.2s ease',
            }}
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Flecha Lateral Derecha (Siguiente) */}
        <button
          type="button"
          onClick={handleNext}
          onMouseEnter={() => setIsHoverNext(true)}
          onMouseLeave={() => setIsHoverNext(false)}
          aria-label="Ver fotografía siguiente de la sesión"
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: `translateY(-50%) ${isHoverNext ? 'scale(1.08)' : 'scale(1)'}`,
            zIndex: 40,
            width: '48px',
            height: '48px',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isHoverNext ? '#8C5E0A' : 'rgba(7, 12, 22, 0.82)',
            border: isHoverNext ? '2px solid #F5D77F' : '1.5px solid rgba(245, 215, 127, 0.65)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
            cursor: 'pointer',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            outline: 'none',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isHoverNext ? '#FFFFFF' : '#F5D77F'}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: isHoverNext ? 'translateX(1px)' : 'none',
              transition: 'transform 0.2s ease',
            }}
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Pie de foto y leyenda descriptiva de la toma */}
        <div
          className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 flex flex-col gap-1.5 pointer-events-none"
          style={{ zIndex: 25 }}
        >
          <h4
            className="font-serif-editorial text-lg sm:text-2xl font-normal leading-tight max-w-2xl"
            style={{
              color: '#FFFFFF',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.95)',
            }}
          >
            {currentItem.title}
          </h4>
          <p
            className="text-xs sm:text-sm font-normal leading-relaxed max-w-xl"
            style={{
              color: '#E2E8F0',
              textShadow: '0 1px 6px rgba(0, 0, 0, 0.9)',
            }}
          >
            {currentItem.caption}
          </p>
        </div>
      </div>

      {/* Barra de controles inferior: Indicadores de puntos y navegación directa */}
      <div
        className="py-3.5 px-4 sm:px-6 flex items-center justify-between gap-3"
        style={{
          backgroundColor: '#070C16',
          borderTop: '1px solid rgba(245, 215, 127, 0.25)',
        }}
      >
        <span
          className="text-[10px] uppercase font-mono tracking-widest font-bold hidden sm:inline"
          style={{ color: '#F5D77F' }}
        >
          REGISTRO REAL EN ESTUDIO
        </span>

        {/* Puntos de navegación directa (10 tomas) */}
        <div
          className="flex items-center justify-center gap-2 mx-auto sm:mx-0 flex-1 sm:flex-initial"
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
                  width: isActive ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: isActive ? '#F5D77F' : 'rgba(255, 255, 255, 0.35)',
                  boxShadow: isActive ? '0 0 10px rgba(245, 215, 127, 0.7)' : 'none',
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

        <span
          className="text-[10px] uppercase font-mono tracking-widest font-bold hidden sm:inline"
          style={{ color: '#E2E8F0' }}
        >
          {currentIndex + 1} DE {total}
        </span>
      </div>
    </div>
  );
};
