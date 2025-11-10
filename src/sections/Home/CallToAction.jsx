import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./CallToAction.css";

function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className="home-cta" data-aos="fade-up">
      <div className="home-cta__inner">
        <div className="home-cta__content">
          <h2>{t("home.cta.title")}</h2>
          <Link to="/contact" className="home-cta__button">
            {t("home.cta.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;

