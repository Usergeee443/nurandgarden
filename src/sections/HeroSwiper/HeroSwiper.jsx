import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { heroSlides } from "./heroData";
import "./HeroSwiper.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

function HeroSwiper() {
  const { t } = useTranslation();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) {
      return undefined;
    }
    const swiperInstance = swiperRef.current.swiper;
    return () => {
      if (swiperInstance) {
        swiperInstance.destroy(true, false);
      }
    };
  }, []);

  return (
    <section className="hero-swiper-section" id="home">
      <Swiper
        ref={swiperRef}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect="fade"
        speed={800}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-swiper__slide">
              <img
                className="hero-swiper__image"
                src={slide.image}
                alt={t(slide.titleKey)}
                loading="eager"
                title={t(slide.captionKey)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSwiper;

