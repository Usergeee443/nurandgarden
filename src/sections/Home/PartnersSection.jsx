import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./PartnersSection.css";
import partner1 from "../../assets/partners/partner-01.svg";
import partner2 from "../../assets/partners/partner-02.svg";
import partner3 from "../../assets/partners/partner-03.svg";
import partner4 from "../../assets/partners/partner-04.svg";
import partner5 from "../../assets/partners/partner-05.svg";
import partner6 from "../../assets/partners/partner-06.svg";

const PARTNERS = [partner1, partner2, partner3, partner4, partner5, partner6];

function PartnersSection() {
  const { t } = useTranslation();

  return (
    <section className="home-partners" data-aos="fade-up">
      <div className="home-partners__inner">
        <h2>{t("home.partners.title")}</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 70,
            },
          }}
          className="home-partners__swiper"
        >
          {PARTNERS.map((logo, index) => (
            <SwiperSlide key={`partner-${index}`}>
              <div className="home-partners__item">
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default PartnersSection;

