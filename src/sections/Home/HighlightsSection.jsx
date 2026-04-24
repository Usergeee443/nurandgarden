import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./HighlightsSection.css";

const TONES = ["yellow", "green", "coral"];
const EMOJIS = ["🌿", "🛍️", "💬"];

function HighlightsSection() {
  const { t } = useTranslation();
  const highlights = t("home.highlights.items", { returnObjects: true }) || [];

  return (
    <section className="home-highlights section" data-aos="fade-up">
      <div className="deco-blob deco-blob--yellow" style={{ width: 320, height: 320, top: "-100px", right: "-120px" }} />

      <div className="section__inner">
        <div className="section__header">
          <span className="eyebrow eyebrow--green">{t("home.highlights.eyebrow")}</span>
          <h2>{t("home.highlights.title")}</h2>
          <p>{t("home.highlights.subtitle")}</p>
        </div>

        <div className="home-highlights__grid">
          {highlights.map((item, index) => {
            const tone = TONES[index % TONES.length];
            return (
              <article
                key={`${item.title}-${index}`}
                className={`home-highlights__card home-highlights__card--${tone}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="home-highlights__emoji" aria-hidden="true">
                  {EMOJIS[index % EMOJIS.length]}
                </span>
                <div className="home-highlights__body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <Link to={item.href} className="home-highlights__link">
                  {item.button} →
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;
