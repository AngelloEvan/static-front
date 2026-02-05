// src/data/products.js
// Imagens carregadas do Cloudinary (cloud: drzrliyw3)
// Ajuste os publicIds conforme a estrutura da sua biblioteca no Cloudinary

import { cloudinaryUrlSimple, CLOUDINARY_FOLDER } from '../config/cloudinary';

const products = [
  {
    id: 1,
    name: 'Empadinha de Brigadeiro',
    price: 'R$ 5,00',
    imageUrl: cloudinaryUrlSimple('brigadeiro', CLOUDINARY_FOLDER),
    description: 'feita com cacau.',
    featured: true,
    category: 'doce',
  },
  {
    id: 2,
    name: 'Empadinha de Brigadeiro Branco',
    price: 'R$ 5,00',
    imageUrl: cloudinaryUrlSimple('brigadeiroBranco', CLOUDINARY_FOLDER),
    description: 'feita com chocolate branco.',
    featured: true,
    category: 'doce',
  },
  {
    id: 3,
    name: 'Empadinha de camarão',
    price: 'R$ 5,00',
    imageUrl: cloudinaryUrlSimple('camarao', CLOUDINARY_FOLDER),
    description: 'feita com camarão rose.',
    featured: true,
    category: 'salgado',
  },
  {
    id: 4,
    name: 'Empadinha de calabresa',
    price: 'R$ 5,00',
    imageUrl: cloudinaryUrlSimple('calabresa', CLOUDINARY_FOLDER),
    description: 'feita com camarão rose.',
    category: 'salgado',
  },
  {
    id: 5,
    name: 'Empadinha de carneSeca',
    price: 'R$ 5,00',
    imageUrl: cloudinaryUrlSimple('carneSeca', CLOUDINARY_FOLDER),
    description: 'feita com carne seca desfiada.',
    category: 'salgado',
  },
  {
    id: 6,
    name: 'Empadinha de frangoPalmito',
    price: 'R$ 5,00',
    imageUrl: cloudinaryUrlSimple('frangoPalmito', CLOUDINARY_FOLDER),
    description: 'feita com palmitos selecionados.',
    category: 'salgado',
  },
];

export default products;
