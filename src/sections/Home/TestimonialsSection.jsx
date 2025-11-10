import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialsSection.css";

const STARS = [1, 2, 3, 4, 5];

function TestimonialsSection() {
  const { t } = useTranslation();
  const title = t("home.testimonials.title");
  const testimonials = t("home.testimonials.items", { returnObjects: true }) || [];

  return (
    <section className="home-testimonials">
      <div className="home-testimonials__inner">
        <h2 data-aos="fade-up">{title}</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          className="home-testimonials__swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={`${item.name}-${index}`}>
              <article className="home-testimonials__card" data-aos="fade-up">
                <header>
                  <span className="home-testimonials__name">{item.name}</span>
                  <div className="home-testimonials__stars" aria-label="5 out of 5 stars">
                    {STARS.map((star) => (
                      <span key={star} aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>
                </header>
                <p>{item.quote}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialsSection;

