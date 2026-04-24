import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
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
      <div className="hero-swiper__deco hero-swiper__deco--yellow" aria-hidden="true" />
      <div className="hero-swiper__deco hero-swiper__deco--green" aria-hidden="true" />
      <div className="hero-swiper__deco hero-swiper__deco--blue" aria-hidden="true" />

      <Swiper
        ref={swiperRef}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect="fade"
        speed={800}
        loop
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`hero-swiper__slide hero-swiper__slide--${slide.tone || "yellow"}`}>
              <div className="hero-swiper__content">
                <span className={`eyebrow eyebrow--${slide.eyebrowTone || "yellow"}`}>
                  {t("home.hero.eyebrow")}
                </span>
                <h1>{t(slide.titleKey)}</h1>
                <p>{t(slide.captionKey)}</p>
                <div className="hero-swiper__actions">
                  <Link to="/products" className="btn btn--primary">
                    {t("home.hero.primaryCta")}
                  </Link>
                  <Link to="/about" className="btn btn--ghost">
                    {t("home.hero.secondaryCta")}
                  </Link>
                </div>
              </div>
              <div className="hero-swiper__media">
                <img
                  src={slide.image}
                  alt={t(slide.titleKey)}
                  loading="eager"
                  title={t(slide.captionKey)}
                />
                <span className="hero-swiper__media-badge" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSwiper;
