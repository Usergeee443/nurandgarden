import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialsSection.css";

const STARS = [1, 2, 3, 4, 5];
const AVATAR_TONES = ["yellow", "green", "coral", "blue", "pink"];

function TestimonialsSection() {
  const { t } = useTranslation();
  const title = t("home.testimonials.title");
  const testimonials = t("home.testimonials.items", { returnObjects: true }) || [];

  return (
    <section className="home-testimonials section" data-aos="fade-up">
      <div className="section__inner">
        <div className="section__header">
          <span className="eyebrow eyebrow--coral">{t("home.testimonials.eyebrow")}</span>
          <h2>{title}</h2>
          <p>{t("home.testimonials.subtitle")}</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="home-testimonials__swiper"
        >
          {testimonials.map((item, index) => {
            const tone = AVATAR_TONES[index % AVATAR_TONES.length];
            const initials = (item.name || "")
              .split(" ")
              .map((part) => part.charAt(0))
              .slice(0, 2)
              .join("")
              .toUpperCase();
            return (
              <SwiperSlide key={`${item.name}-${index}`}>
                <article className={`home-testimonials__card home-testimonials__card--${tone}`}>
                  <div className="home-testimonials__header">
                    <span className={`home-testimonials__avatar home-testimonials__avatar--${tone}`}>
                      {initials || "★"}
                    </span>
                    <div>
                      <span className="home-testimonials__name">{item.name}</span>
                      <div className="home-testimonials__stars" aria-label="5 of 5">
                        {STARS.map((star) => (
                          <span key={star} aria-hidden="true">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="home-testimonials__quote">“{item.quote}”</p>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialsSection;
