import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const pageTitle = `${t("brand.name")} — ${t("navigation.contact")}`;

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (submitted) {
      setSubmitted(false);
    }
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      return;
    }
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    if (!submitted) {
      return undefined;
    }
    const timer = setTimeout(() => setSubmitted(false), 4000);
    return () => clearTimeout(timer);
  }, [submitted]);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={t("contact.heroTitle")} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={t("contact.heroTitle")} />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="contact-hero" data-aos="fade-up">
        <h1>{t("contact.heroTitle")}</h1>
      </section>

      <section className="contact-section">
        <div className="contact-details" data-aos="fade-up">
          <h2>{t("contact.detailsTitle")}</h2>
          <ul>
            <li>
              <span>{t("contact.phone")}</span>
              <a href="tel:+998917079732">+998 91 707 97 32</a>
            </li>
            <li>
              <span>{t("contact.email")}</span>
              <a href="mailto:info@nurandgarden.com">info@nurandgarden.com</a>
            </li>
            <li>
              <span>{t("contact.address")}</span>
              <p>{t("contact.addressValue")}</p>
            </li>
          </ul>
        </div>

        <div className="contact-form-wrapper" data-aos="fade-up">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">{t("contact.form.name")}</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
              placeholder={t("contact.form.name")}
              required
            />
            <label htmlFor="email">{t("contact.form.email")}</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              placeholder={t("contact.form.email")}
              required
            />
            <label htmlFor="message">{t("contact.form.message")}</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formState.message}
              onChange={handleChange}
              placeholder={t("contact.form.message")}
              required
            />
            <button type="submit">{t("contact.form.submit")}</button>
            {submitted && (
              <p className="contact-form__success" role="status" aria-live="polite">
                {t("contact.form.success")}
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="contact-map" data-aos="fade-up">
        <iframe
          title="Nur & Garden, Samarqand"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.12794117383!2d66.97497377653224!3d39.65444090161362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19c6417ff3d5%3A0x9db6466b740249b0!2sSamarkand!5e0!3m2!1sen!2suz!4v1700000000000!5m2!1sen!2suz"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

export default Contact;

