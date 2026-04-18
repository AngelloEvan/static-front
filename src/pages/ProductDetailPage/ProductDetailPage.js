import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../../data/products'; // Importa os dados dos produtos
import './ProductDetailPage.css'; // Estilos para a página de detalhes

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Encontra o produto correspondente no array de dados
  const product = productsData.find(p => p.id === parseInt(id));

  // Se o produto não for encontrado, exibe uma mensagem
  if (!product) {
    return (
      <div className="product-detail-container">
        <h2>Produto não encontrado :(</h2>
        <p>Parece que o produto que você está procurando não existe ou foi removido.</p>
      </div>
    );
  }

  // Se o produto for encontrado, exibe seus detalhes
  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <div className="product-detail-image-gallery">
          <img src={product.imageUrl} alt={product.name} className="main-product-image" />
          {/* Futuramente: galeria de imagens secundárias */}
        </div>
        <div className="product-detail-info">
          <h2 className="product-detail-name">{product.name}</h2>
          <p className="product-detail-description">{product.description}</p>
          <p className="product-detail-price">{product.price}</p>

          <button
            type="button"
            className="back-button"
            onClick={() => navigate(-1)}
          >
            ← Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;