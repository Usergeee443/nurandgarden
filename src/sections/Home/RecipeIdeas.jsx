import { useTranslation } from "react-i18next";
import image1 from "../../assets/images/hero-03.png";
import image2 from "../../assets/images/hero-04.png";
import image3 from "../../assets/images/hero-07.png";
import "./RecipeIdeas.css";

const RECIPES = [
  { key: "pilaf", image: image1, tone: "yellow", emoji: "🍚", time: "45" },
  { key: "tea", image: image2, tone: "green", emoji: "🍵", time: "5" },
  { key: "dessert", image: image3, tone: "coral", emoji: "🥣", time: "15" },
];

function RecipeIdeas() {
  const { t } = useTranslation();

  return (
    <section className="home-recipes section" data-aos="fade-up">
      <div className="deco-blob deco-blob--coral" style={{ width: 340, height: 340, top: "10%", right: "-80px" }} />

      <div className="section__inner">
        <div className="section__header">
          <span className="eyebrow eyebrow--coral">{t("home.recipes.eyebrow")}</span>
          <h2>{t("home.recipes.title")}</h2>
          <p>{t("home.recipes.subtitle")}</p>
        </div>

        <div className="home-recipes__grid">
          {RECIPES.map((recipe, index) => (
            <article
              key={recipe.key}
              className={`home-recipes__card home-recipes__card--${recipe.tone}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="home-recipes__media">
                <img src={recipe.image} alt={t(`home.recipes.items.${recipe.key}.title`)} loading="lazy" />
                <span className="home-recipes__badge">⏱️ {t("home.recipes.minutes", { count: recipe.time })}</span>
              </div>
              <div className="home-recipes__body">
                <span className="home-recipes__emoji" aria-hidden="true">
                  {recipe.emoji}
                </span>
                <h3>{t(`home.recipes.items.${recipe.key}.title`)}</h3>
                <p>{t(`home.recipes.items.${recipe.key}.description`)}</p>
                <ul>
                  {(t(`home.recipes.items.${recipe.key}.steps`, { returnObjects: true }) || []).map((step, idx) => (
                    <li key={idx}>
                      <span>{idx + 1}</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecipeIdeas;
