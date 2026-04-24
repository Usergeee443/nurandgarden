import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./FAQSection.css";

function FAQSection() {
  const { t } = useTranslation();
  const items = t("home.faq.items", { returnObjects: true }) || [];
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="home-faq section" data-aos="fade-up">
      <div className="section__inner home-faq__inner">
        <div className="home-faq__intro">
          <span className="eyebrow eyebrow--green">{t("home.faq.eyebrow")}</span>
          <h2>{t("home.faq.title")}</h2>
          <p>{t("home.faq.subtitle")}</p>
          <div className="home-faq__sticker" aria-hidden="true">
            <span>?</span>
          </div>
        </div>

        <div className="home-faq__list">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={index}
                type="button"
                className={`home-faq__item ${isOpen ? "home-faq__item--open" : ""}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <div className="home-faq__row">
                  <span className="home-faq__index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.question}</h3>
                  <span className="home-faq__toggle" aria-hidden="true">
                    {isOpen ? "–" : "+"}
                  </span>
                </div>
                <div className="home-faq__answer" hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
