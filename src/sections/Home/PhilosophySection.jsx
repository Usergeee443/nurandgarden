import { useTranslation } from "react-i18next";
import purityIcon from "../../assets/icons/purity.svg";
import sustainabilityIcon from "../../assets/icons/sustainability.svg";
import careIcon from "../../assets/icons/care.svg";
import "./PhilosophySection.css";

const ITEMS = [
  { key: "purity", icon: purityIcon },
  { key: "sustainability", icon: sustainabilityIcon },
  { key: "care", icon: careIcon },
];

function PhilosophySection() {
  const { t } = useTranslation();
  const title = t("home.philosophy.title");
  const items = t("home.philosophy.items", { returnObjects: true });

  return (
    <section className="home-philosophy" data-aos="fade-up">
      <div className="home-philosophy__inner">
        <h2>{title}</h2>
        <div className="home-philosophy__grid">
          {ITEMS.map(({ key, icon }) => (
            <article key={key} className="home-philosophy__card" data-aos="fade-up" data-aos-delay="100">
              <span className="home-philosophy__icon">
                <img src={icon} alt="" aria-hidden="true" />
              </span>
              <h3>{items[key]?.title}</h3>
              <p>{items[key]?.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhilosophySection;

