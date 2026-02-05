/**
 * Configuração do Cloudinary para exibição de imagens
 * Cloud name: drzrliyw3
 */

const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || 'drzrliyw3';

/** Pasta onde as imagens estão no Cloudinary - vazio = raiz */
export const CLOUDINARY_FOLDER = process.env.REACT_APP_CLOUDINARY_FOLDER || '';

/**
 * Gera a URL de uma imagem no Cloudinary
 * @param {string} publicId - ID público da imagem (ex: 'brigadeiro', 'donaempadinha/camarao')
 * @param {object} options - Opções de transformação (width, height, crop, etc.)
 * @returns {string} URL completa da imagem
 */
export function cloudinaryUrl(publicId, options = {}) {
  if (!publicId) return '';

  const {
    width,
    height,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
    folder = '',
  } = options;

  const baseUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
  const transformations = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  transformations.push(`c_${crop}`, `q_${quality}`, `f_${format}`);

  const transformStr = transformations.join(',');
  const path = folder ? `${folder}/${publicId}` : publicId;

  return `${baseUrl}/${transformStr}/${path}`;
}

/**
 * URL simples (sem transformações) - útil quando a imagem já está otimizada
 */
export function cloudinaryUrlSimple(publicId, folder = '') {
  if (!publicId) return '';
  const baseUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
  const path = folder ? `${folder}/${publicId}` : publicId;
  return `${baseUrl}/f_auto,q_auto/${path}`;
}

export { CLOUD_NAME };
