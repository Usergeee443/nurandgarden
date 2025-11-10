import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./HighlightsSection.css";

function HighlightsSection() {
  const { t } = useTranslation();
  const highlights = t("home.highlights.items", { returnObjects: true }) || [];

  return (
    <section className="home-highlights" data-aos="fade-up">
      <div className="home-highlights__inner">
        <h2>{t("home.highlights.title")}</h2>
        <div className="home-highlights__grid">
          {highlights.map((item, index) => (
            <article key={`${item.title}-${index}`} className="home-highlights__card" data-aos="fade-up">
              <div className="home-highlights__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <Link to={item.href} className="home-highlights__link">
                {item.button}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;

