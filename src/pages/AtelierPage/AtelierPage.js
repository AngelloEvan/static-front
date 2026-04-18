import React from 'react';
import { useNavigate } from 'react-router-dom';
import { atelierSections } from '../../data/atelierGallery';
import './AtelierPage.css';

const AtelierPage = () => {
  const navigate = useNavigate();

  const openGallery = (sectionId) => {
    navigate(`/atelier/galeria/${encodeURIComponent(sectionId)}`);
  };

  return (
    <div className="atelier-page-container">
      <h2>Ateliê</h2>
      <p className="atelier-intro">Conheça um pouco do nosso espaço e do que fazemos com tanto carinho em um click.</p>

      <div className="atelier-content">
        {atelierSections.map((section, index) => (
          <div
            key={section.id}
            className={`atelier-row ${index % 2 === 1 ? 'atelier-row-reverse' : ''}`}
          >
            <div className="atelier-image-wrapper">
              <button
                type="button"
                className="atelier-image-button"
                onClick={() => openGallery(section.id)}
                aria-label={`Abrir galeria: ${section.text.slice(0, 48)}…`}
              >
                <img src={section.previewImage} alt="" className="atelier-image" />
              </button>
            </div>

            <div className="atelier-text-wrapper">
              <p className="atelier-text">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AtelierPage;
