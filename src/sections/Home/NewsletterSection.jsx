import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./NewsletterSection.css";

function NewsletterSection() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 3500);
  };

  return (
    <section className="home-newsletter section" data-aos="fade-up">
      <div className="section__inner">
        <div className="home-newsletter__card">
          <div className="home-newsletter__copy">
            <span className="eyebrow eyebrow--yellow">{t("home.newsletter.eyebrow")}</span>
            <h2>{t("home.newsletter.title")}</h2>
            <p>{t("home.newsletter.subtitle")}</p>
          </div>

          <form className="home-newsletter__form" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder={t("home.newsletter.placeholder")}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button type="submit" className="btn btn--primary">
              {t("home.newsletter.button")}
            </button>
          </form>

          {success && (
            <p className="home-newsletter__success" role="status" aria-live="polite">
              ✅ {t("home.newsletter.success")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
