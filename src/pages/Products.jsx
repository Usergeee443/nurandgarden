import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { products } from "../data/productsData";
import "./Products.css";

function Products() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const pageTitle = `${t("brand.name")} — ${t("navigation.products")}`;
  const categoryLabels = t("products.categories", { returnObjects: true });
  const filterLabels = t("products.filters", { returnObjects: true });

  const categories = useMemo(() => {
    const list = products.reduce((acc, product) => {
      if (!acc.includes(product.category)) {
        acc.push(product.category);
      }
      return acc;
    }, []);
    return ["all", ...list];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!query.trim()) {
        return true;
      }

      const searchValue = query.trim().toLowerCase();
      const name = t(product.nameKey).toLowerCase();
      const description = t(product.descriptionKey).toLowerCase();
      return name.includes(searchValue) || description.includes(searchValue);
    });
  }, [query, selectedCategory, t]);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={t("products.heroSubtitle")} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={t("products.heroSubtitle")} />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="products-hero" data-aos="fade-up">
        <h1>{t("products.heroTitle")}</h1>
        <p>{t("products.heroSubtitle")}</p>
      </section>

      <section className="products-filters" data-aos="fade-up">
        <div className="products-filters__controls">
          <div className="products-filters__search">
            <input
              id="products-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={filterLabels.searchPlaceholder}
              aria-label={filterLabels.searchPlaceholder}
            />
          </div>
          <div className="products-filters__categories" role="group" aria-label={filterLabels.categoryLabel}>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`products-filters__category ${
                  selectedCategory === category ? "products-filters__category--active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {categoryLabels[category] ?? category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="products-grid">
        {filteredProducts.length === 0 ? (
          <div className="products-empty" data-aos="fade-up">
            {filterLabels.noResults}
          </div>
        ) : (
          filteredProducts.map((product, index) => (
            <article
              key={product.id}
              className="products-card"
              data-aos="fade-up"
              data-aos-delay={index * 70}
            >
              <div className="products-card__media">
                <img src={product.image} alt={t(product.nameKey)} loading="lazy" />
              </div>
              <div className="products-card__content">
                <span className="products-card__category-tag">
                  {categoryLabels[product.category] ?? product.category}
                </span>
                <div className="products-card__body">
                  <h2>{t(product.nameKey)}</h2>
                  <p>{t(product.descriptionKey)}</p>
                </div>
                <div className="products-card__actions">
                  <button type="button" className="products-card__cta" onClick={() => navigate(`/products/${product.id}`)}>
                    {t("common.learnMore")}
                  </button>
                </div>
              </div>
            </article>
          ))
        )}
      </section>
    </>
  );
}

export default Products;

