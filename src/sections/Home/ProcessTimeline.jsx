import { useTranslation } from "react-i18next";
import seedIcon from "../../assets/icons/seed.svg";
import cultivationIcon from "../../assets/icons/cultivation.svg";
import packagingIcon from "../../assets/icons/packaging.svg";
import qualityIcon from "../../assets/icons/quality.svg";
import "./ProcessTimeline.css";

const STEPS = [
  { key: "seed", icon: seedIcon },
  { key: "cultivation", icon: cultivationIcon },
  { key: "packaging", icon: packagingIcon },
  { key: "quality", icon: qualityIcon },
];

function ProcessTimeline() {
  const { t } = useTranslation();
  const title = t("home.process.title");
  const steps = t("home.process.steps", { returnObjects: true });

  return (
    <section className="home-process">
      <div className="home-process__inner">
        <h2>{title}</h2>
        <div className="home-process__timeline">
          {STEPS.map(({ key, icon }, index) => (
            <div
              key={key}
              className="home-process__step"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <span className="home-process__icon" aria-hidden="true">
                <img src={icon} alt="" />
              </span>
              <div className="home-process__content">
                <h3>{steps[key]?.title}</h3>
                <p>{steps[key]?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessTimeline;

