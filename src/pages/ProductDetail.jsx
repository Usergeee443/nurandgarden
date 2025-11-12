import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link, Navigate, useParams } from "react-router-dom";
import { products } from "../data/productsData";
import "./ProductDetail.css";

function ProductDetail() {
  const { productId } = useParams();
  const { t } = useTranslation();

  const product = useMemo(() => products.find((item) => item.id === productId), [productId]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const categoryLabels = t("products.categories", { returnObjects: true });
  const detailLabels = t("products.detailLabels", { returnObjects: true });
  const detail = t(`products.details.${product.id}`, { returnObjects: true });

  const titleText = `${t(product.nameKey)} — ${t("brand.name")}`;
  const descriptionText = detail?.longDescription ?? t(product.descriptionKey);

  const sizes = detail?.sizes || [];

  return (
    <>
      <Helmet>
        <title>{titleText}</title>
        <meta name="description" content={descriptionText} />
        <meta property="og:title" content={titleText} />
        <meta property="og:description" content={descriptionText} />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:type" content="product" />
      </Helmet>

      <article className="product-detail" data-aos="fade-up">
        <div className="product-detail__media">
          <img src={product.image} alt={t(product.nameKey)} />
        </div>

        <div className="product-detail__content">
          <Link to="/products" className="product-detail__back">
            ← {t("navigation.products")}
          </Link>
          <span className="product-detail__category">
            {categoryLabels[product.category] ?? product.category}
          </span>
          <h1>{t(product.nameKey)}</h1>
          {detail?.story && <p className="product-detail__story">{detail.story}</p>}
          <p className="product-detail__description">{detail?.longDescription}</p>

          <div className="product-detail__meta">
            <section>
              <span className="product-detail__meta-label">{detailLabels.origin}</span>
              <p>{detail?.origin}</p>
            </section>
            <section>
              <span className="product-detail__meta-label">{detailLabels.notes}</span>
              <ul>
                {detail?.notes?.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
            <section>
              <span className="product-detail__meta-label">{detailLabels.pairing}</span>
              <ul>
                {detail?.pairing?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {sizes.length > 0 && (
          <section className="product-detail__sizes" data-aos="fade-up">
            <h2>{detailLabels.sizes}</h2>
            <div className="product-detail__sizes-grid">
              {sizes.map((size) => (
                <article key={size.title} className="product-detail__size-card">
                  {size.image && (
                    <div className="product-detail__size-image">
                      <img src={size.image} alt={size.title} />
                    </div>
                  )}
                  <div className="product-detail__size-body">
                    <h3>{size.title}</h3>
                    <p>{size.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}

export default ProductDetail;

