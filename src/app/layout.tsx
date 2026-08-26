import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';
import { brandConfig } from '@/config/brand';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.canonicalBase || 'https://sforzatomusic.cl'),
  title: seoConfig.defaultTitle || 'En Tu Memoria — Sforzato Music | Álbum Homenaje',
  description: seoConfig.siteDescription,
  applicationName: brandConfig.name,
  authors: [{ name: brandConfig.name }],
  generator: 'Next.js',
  keywords: [
    'Sforzato Music',
    'En Tu Memoria',
    'álbum cristiano',
    'música cristiana',
    'alabanzas tradicionales',
    'música de adoración',
    'Santiago de Chile',
    'sforzatomusic.cl',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: seoConfig.ogTitle,
    description: seoConfig.ogDescription,
    siteName: seoConfig.siteName,
    url: seoConfig.canonicalBase || 'https://sforzatomusic.cl',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoConfig.ogTitle,
    description: seoConfig.ogDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Corrección de Entidad en JSON-LD (Fase 5B.1): Descripción propia de la Organización, no del proyecto.
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brandConfig.name,
    slogan: brandConfig.motto,
    description:
      'Iniciativa de producción musical cristiana con base en Santiago de Chile, dedicada a impulsar producciones con propósito y rescatar el legado musical de fe.',
    url: seoConfig.canonicalBase || 'https://sforzatomusic.cl',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santiago',
      addressCountry: 'CL',
    },
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
