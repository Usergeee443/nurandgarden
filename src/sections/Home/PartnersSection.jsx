import "./PartnersSection.css";
import partner1 from "../../assets/partners/partner-01.svg";
import partner2 from "../../assets/partners/partner-02.svg";
import partner3 from "../../assets/partners/partner-03.svg";
import partner4 from "../../assets/partners/partner-04.svg";
import partner5 from "../../assets/partners/partner-05.svg";
import partner6 from "../../assets/partners/partner-06.svg";
import { useTranslation } from "react-i18next";

const PARTNERS = [partner1, partner2, partner3, partner4, partner5, partner6];

function PartnersSection() {
  const { t } = useTranslation();

  return (
    <section className="home-partners" data-aos="fade-up">
      <div className="home-partners__inner">
        <h2>{t("home.partners.title")}</h2>
        <div className="home-partners__grid">
          {PARTNERS.map((logo, index) => (
            <div key={logo} className="home-partners__item" data-aos="fade-up" data-aos-delay={index * 80}>
              <img src={logo} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;

