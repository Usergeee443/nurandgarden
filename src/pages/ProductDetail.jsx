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
          <p className="product-detail__description">{detail?.longDescription}</p>

          <div className="product-detail__meta">
            <div>
              <span className="product-detail__meta-label">{detailLabels.origin}</span>
              <p>{detail?.origin}</p>
            </div>
            <div>
              <span className="product-detail__meta-label">{detailLabels.notes}</span>
              <ul>
                {detail?.notes?.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="product-detail__meta-label">{detailLabels.pairing}</span>
              <ul>
                {detail?.pairing?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default ProductDetail;

