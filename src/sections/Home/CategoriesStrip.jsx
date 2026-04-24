import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import riceImage from "../../assets/images/products/Artboard 7.png";
import nutsImage from "../../assets/images/products/okokokokkookk.png";
import driedFruitsImage from "../../assets/images/products/dried-fruits-image.png";
import teaImage from "../../assets/images/products/tea-image.png";
import "./CategoriesStrip.css";

const CATEGORIES = [
  { key: "rice", tone: "yellow", image: riceImage, emoji: "🌾" },
  { key: "nuts", tone: "coral", image: nutsImage, emoji: "🥜" },
  { key: "driedFruits", tone: "pink", image: driedFruitsImage, emoji: "🍑" },
  { key: "teas", tone: "green", image: teaImage, emoji: "🍵" },
];

function CategoriesStrip() {
  const { t } = useTranslation();

  return (
    <section className="home-categories section" data-aos="fade-up">
      <div className="deco-blob deco-blob--yellow" style={{ width: 360, height: 360, top: -80, left: -120 }} />
      <div className="deco-blob deco-blob--green" style={{ width: 280, height: 280, bottom: -100, right: -80 }} />

      <div className="section__inner">
        <div className="section__header">
          <span className="eyebrow eyebrow--yellow">{t("home.categories.eyebrow")}</span>
          <h2>{t("home.categories.title")}</h2>
          <p>{t("home.categories.subtitle")}</p>
        </div>

        <div className="home-categories__grid">
          {CATEGORIES.map((item, index) => (
            <Link
              key={item.key}
              to={`/products?category=${item.key}`}
              className={`home-categories__card home-categories__card--${item.tone}`}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
            >
              <span className="home-categories__emoji" aria-hidden="true">
                {item.emoji}
              </span>
              <div className="home-categories__media">
                <img src={item.image} alt={t(`products.categories.${item.key}`)} loading="lazy" />
              </div>
              <div className="home-categories__body">
                <h3>{t(`products.categories.${item.key}`)}</h3>
                <p>{t(`home.categories.items.${item.key}`)}</p>
                <span className="home-categories__link">{t("home.categories.cta")} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesStrip;
