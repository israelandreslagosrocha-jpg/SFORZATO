/**
 * Definiciones de tipos para el proyecto Sforzato Music - Landing "En Tu Memoria"
 */

export type ContentStatus = 'CONFIRMADO' | 'PENDIENTE' | 'NO_UTILIZAR';

export interface BrandConfig {
  name: string;
  motto: string;
  projectTitle: string;
  projectTagline: string;
  logoAsset: {
    path: string;
    originalMasterPath?: string;
    alt: string;
    width: number;
    height: number;
    status: ContentStatus;
  };
  heroProvisionalAsset: {
    path: string;
    alt: string;
    isProvisional: boolean;
    status: ContentStatus;
  };
  coverProvisionalAsset: {
    path: string;
    alt: string;
    isProvisional: boolean;
    status: ContentStatus;
  };
  ogProvisionalAsset: {
    path: string;
    alt: string;
    width: number;
    height: number;
    isProvisional: boolean;
    status: ContentStatus;
  };
  biblicalConcept: {
    reference: string;
    verseText: string;
    status: ContentStatus;
  };
  homage: {
    personName: string;
    departureDate: string;
    role: string;
    status: ContentStatus;
  };
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavigationConfig {
  mainNav: NavItem[];
  footerNav: {
    project: NavItem[];
    about: NavItem[];
  };
}

export interface SocialLink {
  id: string;
  platform: 'Instagram' | 'YouTube';
  url: string | null;
  status: ContentStatus;
  ariaLabel: string;
}

export interface SocialsConfig {
  channels: SocialLink[];
}

export interface TrackData {
  title: string;
  status: ContentStatus;
}

export interface AlbumContent {
  title: string;
  subtitle: string;
  songCount: number;
  confirmedArtistsCount: number;
  production: string;
  recording: string;
  mixing: string;
  mastering: string;
  tracks: TrackData[];
  teaserMessage: string;
  status: ContentStatus;
}

export interface DocumentaryContent {
  title: string;
  subtitle: string;
  description: string;
  status: ContentStatus;
}

export interface ContentConfig {
  hero: {
    label: string;
    title: string;
    subtitle: string;
    description: string;
    releaseNotice: string;
    primaryCtaLabel: string;
  };
  history: {
    label: string;
    title: string;
    bodyParagraphs: string[];
  };
  album: AlbumContent;
  production: {
    label: string;
    title: string;
    description: string;
  };
  documentary: DocumentaryContent;
  capture: {
    label: string;
    title: string;
    description: string;
    inputPlaceholder: string;
    buttonLabel: string;
  };
}

export interface SeoConfig {
  siteName: string;
  defaultTitle?: string;
  siteDescription: string;
  canonicalBase: string | null;
  ogTitle: string;
  ogDescription: string;
  status: ContentStatus;
}

export interface FeatureFlags {
  showArtistsSection: boolean;
  showDocumentaryTeaser: boolean;
  showAlbumCover: boolean;
  showSocialLinks: boolean;
}
