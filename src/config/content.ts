import { ContentConfig } from '@/types';

export const contentConfig: ContentConfig = {
  hero: {
    label: 'SFORZATO MUSIC PRESENTA',
    title: 'EN TU MEMORIA',
    subtitle: 'EL ÁLBUM QUE ABRAZA LA FE, LA HISTORIA Y LA ESPERANZA.',
    description:
      'Un proyecto musical que reúne a destacados artistas cristianos para reinterpretar las canciones que han marcado generaciones, nacido en memoria de Nicolás Lagos.',
    releaseNotice: 'PRÓXIMAMENTE EN PLATAFORMAS DIGITALES',
    primaryCtaLabel: 'Notificarme el lanzamiento',
  },
  history: {
    label: 'NUESTRA HISTORIA',
    title: 'Un proyecto nacido para recordar.',
    bodyParagraphs: [
      'Basado en el mandato de Lucas 22:19, "Hagan esto en memoria de mí", nace En Tu Memoria, un álbum que celebra la trascendencia de la alabanza y honra la memoria de Nicolás Lagos, cofundador de esta iniciativa, cuyo legado de entrega y pasión musical trasciende desde su partida el 01 de octubre de 2024.',
    ],
  },
  album: {
    title: '10 canciones. Una misma historia.',
    subtitle: 'EL ÁLBUM',
    songCount: 10,
    confirmedArtistsCount: 5,
    production: 'Sforzato Music',
    recording: 'Grabado en varios estudios',
    mixing: 'Sforzato Music',
    mastering: 'Los Ángeles, EE. UU.',
    tracks: [], // Nombres de canciones no revelados (NO UTILIZAR)
    teaserMessage:
      'Próximamente conocerás a los artistas y músicos que forman parte de esta historia.',
    status: 'CONFIRMADO',
  },
  production: {
    label: 'DETRÁS DE LA PRODUCCIÓN',
    title: 'Pasión, excelencia y propósito.',
    description:
      'Cada detalle importa. Desde los arreglos hasta la mezcla final, trabajamos con dedicación para ofrecer una experiencia musical que honre el mensaje y conecte corazones.',
  },
  documentary: {
    title: 'La historia detrás de En Tu Memoria.',
    subtitle: 'DOCUMENTAL',
    description:
      'Registro audiovisual del proceso creativo y de producción del álbum.',
    status: 'PENDIENTE',
  },
  capture: {
    label: 'SÉ PARTE DEL LANZAMIENTO',
    title: 'No te pierdas En Tu Memoria.',
    description:
      'Déjanos tu correo y sé el primero en enterarte del lanzamiento, contenido exclusivo y novedades del proyecto.',
    inputPlaceholder: 'Tu correo electrónico',
    buttonLabel: 'Quiero ser parte',
  },
};
