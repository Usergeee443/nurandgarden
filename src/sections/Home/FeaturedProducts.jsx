import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { products } from "../../data/productsData";
import "./FeaturedProducts.css";

const CATEGORY_TONES = {
  rice: "yellow",
  nuts: "coral",
  driedFruits: "pink",
  teas: "green",
};

function FeaturedProducts() {
  const { t } = useTranslation();
  const featured = products.slice(0, 6);
  const categoryLabels = t("products.categories", { returnObjects: true });

  return (
    <section className="home-featured section" data-aos="fade-up">
      <div className="section__inner">
        <div className="section__header">
          <span className="eyebrow eyebrow--coral">{t("home.featured.eyebrow")}</span>
          <h2>{t("home.featured.title")}</h2>
          <p>{t("home.featured.subtitle")}</p>
        </div>

        <div className="home-featured__grid">
          {featured.map((product, index) => {
            const tone = CATEGORY_TONES[product.category] || "yellow";
            return (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className={`home-featured__card home-featured__card--${tone}`}
                data-aos="fade-up"
                data-aos-delay={index * 70}
              >
                <div className="home-featured__media">
                  <img src={product.image} alt={t(product.nameKey)} loading="lazy" />
                </div>
                <div className="home-featured__body">
                  <span className={`eyebrow eyebrow--${tone === "yellow" ? "yellow" : tone === "coral" ? "coral" : tone === "pink" ? "coral" : "green"}`}>
                    {categoryLabels[product.category] || product.category}
                  </span>
                  <h3>{t(product.nameKey)}</h3>
                  <p>{t(product.descriptionKey)}</p>
                  <span className="home-featured__cta">{t("common.learnMore")} →</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="home-featured__footer">
          <Link to="/products" className="btn btn--green">
            {t("home.featured.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
