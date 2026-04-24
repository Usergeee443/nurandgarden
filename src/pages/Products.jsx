import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { products } from "../data/productsData";
import "./Products.css";

const CATEGORY_TONES = {
  all: "yellow",
  rice: "yellow",
  nuts: "coral",
  driedFruits: "pink",
  teas: "green",
};

const CATEGORY_EMOJIS = {
  all: "🌟",
  rice: "🌾",
  nuts: "🥜",
  driedFruits: "🍑",
  teas: "🍵",
};

function Products() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );
  const navigate = useNavigate();

  const pageTitle = `${t("brand.name")} — ${t("navigation.products")}`;
  const categoryLabels = t("products.categories", { returnObjects: true });
  const filterLabels = t("products.filters", { returnObjects: true });

  useEffect(() => {
    const nextCategory = searchParams.get("category") || "all";
    setSelectedCategory(nextCategory);
  }, [searchParams]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams, { replace: true });
  };

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
      if (!query.trim()) return true;
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
        <div className="products-hero__deco products-hero__deco--yellow" aria-hidden="true" />
        <div className="products-hero__deco products-hero__deco--green" aria-hidden="true" />
        <div className="products-hero__inner">
          <span className="eyebrow eyebrow--yellow">{t("products.heroEyebrow")}</span>
          <h1>{t("products.heroTitle")}</h1>
          <p>{t("products.heroSubtitle")}</p>
        </div>
      </section>

      <section className="products-filters" data-aos="fade-up">
        <div className="products-filters__search">
          <span className="products-filters__search-icon" aria-hidden="true">🔎</span>
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
          {categories.map((category) => {
            const tone = CATEGORY_TONES[category] || "yellow";
            return (
              <button
                key={category}
                type="button"
                className={`products-filters__category products-filters__category--${tone} ${
                  selectedCategory === category ? "is-active" : ""
                }`}
                onClick={() => handleSelectCategory(category)}
              >
                <span aria-hidden="true">{CATEGORY_EMOJIS[category] || "✨"}</span>
                {categoryLabels[category] ?? category}
              </button>
            );
          })}
        </div>
      </section>

      <section className="products-grid">
        {filteredProducts.length === 0 ? (
          <div className="products-empty" data-aos="fade-up">
            {filterLabels.noResults}
          </div>
        ) : (
          filteredProducts.map((product, index) => {
            const tone = CATEGORY_TONES[product.category] || "yellow";
            return (
              <article
                key={product.id}
                className={`products-card products-card--${tone}`}
                data-aos="fade-up"
                data-aos-delay={index * 70}
              >
                <div className="products-card__media">
                  <img src={product.image} alt={t(product.nameKey)} loading="lazy" />
                  <span className="products-card__tag">
                    {CATEGORY_EMOJIS[product.category]} {categoryLabels[product.category] ?? product.category}
                  </span>
                </div>
                <div className="products-card__content">
                  <div className="products-card__body">
                    <h2>{t(product.nameKey)}</h2>
                    <p>{t(product.descriptionKey)}</p>
                  </div>
                  <div className="products-card__actions">
                    <button
                      type="button"
                      className="btn btn--primary btn--sm"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      {t("common.learnMore")}
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </section>
    </>
  );
}

export default Products;
