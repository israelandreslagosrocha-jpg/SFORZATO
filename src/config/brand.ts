import { BrandConfig } from '@/types';

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.GITHUB_ACTIONS ? '/SFORZATO' : '');

export const brandConfig: BrandConfig = {
  name: 'Sforzato Music',
  motto: 'Impulsando música con propósito.',
  projectTitle: 'EN TU MEMORIA',
  projectTagline: 'El álbum que abraza la fe, la historia y la esperanza.',
  logoAsset: {
    path: `${basePath}/assets/brand/sforzato-music-logo-512.webp`, // Asset web optimizado (11.57 KB - 95.76% reducción)
    originalMasterPath: `${basePath}/assets/brand/sforzato-music-logo.webp`, // Master original (272.91 KB)
    alt: 'Sforzato Music',
    width: 512,
    height: 512,
    status: 'CONFIRMADO',
  },
  heroProvisionalAsset: {
    path: `${basePath}/assets/brand/hero-image-provisional-ai.webp`, // Asset gráfico provisional de preproducción (28.36 KB)
    alt: 'Ambiente estético de estudio de grabación (Asset provisional de preproducción)',
    isProvisional: true,
    status: 'CONFIRMADO',
  },
  coverProvisionalAsset: {
    path: `${basePath}/assets/brand/en-tu-memoria-cover-provisional-ai.webp`, // Arte conceptual promocional provisional de portada (53.24 KB)
    alt: 'Arte conceptual promocional del álbum En Tu Memoria (Asset provisional de preproducción)',
    isProvisional: true,
    status: 'CONFIRMADO',
  },
  ogProvisionalAsset: {
    path: `${basePath}/assets/brand/og-image-provisional-ai.webp`, // Asset social preview provisional 1200x630 (50.20 KB)
    alt: 'Sforzato Music — En Tu Memoria (Social Preview Provisional)',
    width: 1200,
    height: 630,
    isProvisional: true,
    status: 'CONFIRMADO',
  },
  biblicalConcept: {
    reference: 'Lucas 22:19',
    verseText: 'Hagan esto en memoria de mí',
    status: 'CONFIRMADO',
  },
  homage: {
    personName: 'Nicolás Lagos',
    departureDate: '01 de octubre de 2024',
    role: 'Cofundador de Sforzato Music',
    status: 'CONFIRMADO',
  },
};
