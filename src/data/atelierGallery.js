import { cloudinaryUrlSimple, CLOUDINARY_FOLDER } from '../config/cloudinary';

/**
 * Cada seção do Ateliê: imagem de prévia na página, texto ao lado e lista própria na galeria em tela cheia.
 * Ajuste `photos` com os publicIds e legendas que quiser no Cloudinary.
 */
export const atelierSections = [
  {
    id: 'bolos-tematicos',
    previewImage: cloudinaryUrlSimple('bolo_branco', CLOUDINARY_FOLDER),
    text: 'Onde a imaginação vira sabor. Explore nossa galeria de criações exclusivas feitas para surpreender e alegrar.',
    photos: [
     
      {
        image: cloudinaryUrlSimple('bolo_branco', CLOUDINARY_FOLDER),
        caption: 'Sabores que combinam com qualquer celebração.',
      },
       {
        image: cloudinaryUrlSimple('bolo_rosa', CLOUDINARY_FOLDER),
        caption: 'Sabores que combinam com qualquer celebração.',
      }
    ],
  },
  {
    id: 'casamento-doces',
    previewImage: cloudinaryUrlSimple('bolo_florido', CLOUDINARY_FOLDER),
    text: 'A perfeição artesanal para grandes momentos. Conheça nossa curadoria de bolos de casamento e doces finos de alta confeitaria.',
    photos: [
      {
        image: cloudinaryUrlSimple('bolo_florido', CLOUDINARY_FOLDER),
        caption: 'Doces clássicos com toque artesanal.',
      },
      {
        image: cloudinaryUrlSimple('moranguinho', CLOUDINARY_FOLDER),
        caption: 'Doces clássicos com toque artesanal.',
      },
      {
        image: cloudinaryUrlSimple('doce_mousseChocolate', CLOUDINARY_FOLDER),
        caption: 'Doces clássicos com toque artesanal.',
      },
      {
        image: cloudinaryUrlSimple('doce_ninhoNutela', CLOUDINARY_FOLDER),
        caption: 'Variedades para mesas de doces e eventos.',
      },
    ],
  },
];

export function getAtelierSectionById(sectionId) {
  if (!sectionId) return null;
  return atelierSections.find((s) => s.id === sectionId) ?? null;
}
