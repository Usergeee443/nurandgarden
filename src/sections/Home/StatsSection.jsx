import { useTranslation } from "react-i18next";
import "./StatsSection.css";

const ICONS = ["🌱", "🏡", "⭐", "📦"];

function StatsSection() {
  const { t } = useTranslation();
  const stats = t("home.stats.items", { returnObjects: true }) || [];

  return (
    <section className="home-stats section" data-aos="fade-up">
      <div className="section__inner">
        <div className="home-stats__card">
          <div className="home-stats__intro">
            <span className="eyebrow eyebrow--blue">{t("home.stats.eyebrow")}</span>
            <h2>{t("home.stats.title")}</h2>
            <p>{t("home.stats.subtitle")}</p>
          </div>
          <div className="home-stats__grid">
            {stats.map((item, index) => (
              <article
                key={`${item.value}-${index}`}
                className="home-stats__item"
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >
                <span className="home-stats__icon" aria-hidden="true">
                  {ICONS[index % ICONS.length]}
                </span>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
