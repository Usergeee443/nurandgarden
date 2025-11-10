import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import aboutStoryImage from "../assets/images/hero-02.png";
import aboutValuesImage from "../assets/images/hero-03.png";
import "./About.css";

const valuesKeys = ["quality", "sustainability", "tradition"];

function About() {
  const { t } = useTranslation();

  const pageTitle = `${t("brand.name")} — ${t("navigation.about")}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={t("about.heroSubtitle")} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={t("about.ourStory.body")} />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="about-hero" data-aos="fade-up">
        <div className="about-hero__overlay" />
        <div className="about-hero__content">
          <h1>{t("about.heroTitle")}</h1>
          <p>{t("about.heroSubtitle")}</p>
        </div>
        <button type="button" className="about-hero__scroll" aria-label={t("home.hero.scrollHint")}>
          <span />
        </button>
      </section>

      <section className="about-story" data-aos="fade-up">
        <div className="about-story__text">
          <h2>{t("about.ourStory.title")}</h2>
          <p>{t("about.ourStory.body")}</p>
        </div>
        <div className="about-story__media">
          <img src={aboutStoryImage} alt={t("about.ourStory.title")} loading="lazy" />
        </div>
      </section>

      <section className="about-values" data-aos="fade-up">
        <div className="about-values__intro">
          <h2>{t("about.ourValues.title")}</h2>
          <img src={aboutValuesImage} alt={t("about.ourValues.title")} loading="lazy" />
        </div>
        <div className="about-values__grid">
          {valuesKeys.map((key) => (
            <article key={key} className="about-values__card" data-aos="fade-up">
              <span className="about-values__eyebrow">{t(`about.ourValues.items.${key}.title`)}</span>
              <p>{t(`about.ourValues.items.${key}.description`)}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;

