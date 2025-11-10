import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { galleryItems } from "../data/galleryData";
import "./Gallery.css";

function Gallery() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const pageTitle = `${t("brand.name")} — ${t("navigation.gallery")}`;

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  }, [activeIndex]);

  const showPrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
      if (event.key === "ArrowRight") {
        showNext();
      }
      if (event.key === "ArrowLeft") {
        showPrev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, closeModal, showNext, showPrev]);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={t("gallery.heroSubtitle")} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={t("gallery.heroSubtitle")} />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="gallery-hero" data-aos="fade-up">
        <h1>{t("gallery.heroTitle")}</h1>
        <p>{t("gallery.heroSubtitle")}</p>
      </section>

      <section className="gallery-grid" data-aos="fade-up">
        <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 640: 2, 960: 3 }}>
          <Masonry gutter="1.5rem">
            {galleryItems.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className="gallery-grid__item"
                onClick={() => setActiveIndex(index)}
              >
                <img src={item.image} alt={t(item.captionKey)} loading="lazy" />
                <span>{t(item.captionKey)}</span>
              </button>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>

      {activeIndex !== null && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <button type="button" className="gallery-modal__close" onClick={closeModal} aria-label={t("common.close")}>
            ×
          </button>
          <button type="button" className="gallery-modal__control gallery-modal__control--prev" onClick={showPrev} aria-label={t("common.previous")}>
            ‹
          </button>
          <figure className="gallery-modal__figure">
            <img src={galleryItems[activeIndex].image} alt={t(galleryItems[activeIndex].captionKey)} />
            <figcaption>{t(galleryItems[activeIndex].captionKey)}</figcaption>
          </figure>
          <button type="button" className="gallery-modal__control gallery-modal__control--next" onClick={showNext} aria-label={t("common.next")}>
            ›
          </button>
        </div>
      )}
    </>
  );
}

export default Gallery;

