import { NavigationConfig } from '@/types';

export const navigationConfig: NavigationConfig = {
  mainNav: [
    { id: 'inicio', label: 'En Tu Memoria', href: '#inicio' },
    { id: 'proyecto', label: 'El Proyecto', href: '#proyecto' },
    { id: 'album', label: 'El Álbum', href: '#album' },
    { id: 'produccion', label: 'Detrás de la Producción', href: '#produccion' },
    { id: 'documental', label: 'Documental', href: '#documental' },
  ],
  footerNav: {
    project: [
      { id: 'f-album', label: 'El Álbum', href: '#album' },
      { id: 'f-expectativa', label: 'Próximamente', href: '#album' },
    ],
    about: [
      { id: 'f-historia', label: 'Nuestra Historia', href: '#proyecto' },
      { id: 'f-produccion', label: 'Detrás de la Producción', href: '#produccion' },
      { id: 'f-documental', label: 'Documental', href: '#documental' },
    ],
  },
};
