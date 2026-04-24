import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ctaImage from "../../assets/images/Nur Garden pr 1.png";
import "./CallToAction.css";

function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className="home-cta section" data-aos="fade-up">
      <div className="section__inner">
        <div className="home-cta__card">
          <div className="home-cta__content">
            <span className="eyebrow eyebrow--yellow">{t("home.cta.eyebrow")}</span>
            <h2>{t("home.cta.title")}</h2>
            <p>{t("home.cta.subtitle")}</p>
            <div className="home-cta__actions">
              <Link to="/contact" className="btn btn--primary">
                {t("home.cta.button")}
              </Link>
              <Link to="/products" className="btn btn--ghost">
                {t("home.cta.secondary")}
              </Link>
            </div>
          </div>
          <div className="home-cta__media">
            <img src={ctaImage} alt={t("home.cta.title")} loading="lazy" />
            <span className="home-cta__bubble home-cta__bubble--yellow" aria-hidden="true" />
            <span className="home-cta__bubble home-cta__bubble--green" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
