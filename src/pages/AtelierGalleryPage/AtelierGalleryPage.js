import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getAtelierSectionById } from '../../data/atelierGallery';
import './AtelierGalleryPage.css';

const AtelierGalleryPage = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();

  const section = useMemo(() => getAtelierSectionById(sectionId), [sectionId]);
  const photos = section?.photos ?? [];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [sectionId]);

  const total = photos.length;
  const current = photos[index];

  const goPrev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : total - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i < total - 1 ? i + 1 : 0));
  }, [total]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape') navigate(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext, navigate]);

  if (!section || total === 0) {
    return (
      <div className="atelier-gallery-page atelier-gallery-empty">
        <p className="atelier-gallery-empty-text">Galeria não encontrada.</p>
        <Link to="/atelier" className="atelier-gallery-back-link">
          Voltar ao Ateliê
        </Link>
      </div>
    );
  }

  return (
    <div className="atelier-gallery-page" role="dialog" aria-modal="true" aria-label="Galeria de imagens">
      <button
        type="button"
        className="atelier-gallery-close"
        onClick={() => navigate(-1)}
        aria-label="Fechar galeria"
      >
        ×
      </button>

      <div className="atelier-gallery-main">
        <button
          type="button"
          className="atelier-gallery-nav atelier-gallery-nav-prev"
          onClick={goPrev}
          aria-label="Imagem anterior"
        >
          ‹
        </button>

        <figure className="atelier-gallery-figure">
          <img
            src={current.image}
            alt={current.caption || `Foto ${index + 1}`}
            className="atelier-gallery-image"
          />
          {current.caption && (
            <figcaption className="atelier-gallery-caption">{current.caption}</figcaption>
          )}
        </figure>

        <button
          type="button"
          className="atelier-gallery-nav atelier-gallery-nav-next"
          onClick={goNext}
          aria-label="Próxima imagem"
        >
          ›
        </button>
      </div>

      <p className="atelier-gallery-counter" aria-live="polite">
        {index + 1} / {total}
      </p>
      <p className="atelier-gallery-hint">Use as setas do teclado ou os botões para navegar · Esc para fechar</p>
    </div>
  );
};

export default AtelierGalleryPage;
