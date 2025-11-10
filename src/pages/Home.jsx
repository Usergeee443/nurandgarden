import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import HeroSwiper from "../sections/HeroSwiper/HeroSwiper";
import HighlightsSection from "../sections/Home/HighlightsSection";
import PhilosophySection from "../sections/Home/PhilosophySection";
import ProcessTimeline from "../sections/Home/ProcessTimeline";
import TestimonialsSection from "../sections/Home/TestimonialsSection";
import PartnersSection from "../sections/Home/PartnersSection";
import CallToAction from "../sections/Home/CallToAction";

function Home() {
  const { t } = useTranslation();

  const pageTitle = `${t("brand.name")} — ${t("brand.tagline")}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={t("home.hero.slides.luxuryGarden.caption")} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={t("home.hero.slides.fromNature.caption")} />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:type" content="website" />
      </Helmet>
      <HeroSwiper />
      <HighlightsSection />
      <PhilosophySection />
      <ProcessTimeline />
      <TestimonialsSection />
      <PartnersSection />
      <CallToAction />
    </>
  );
}

export default Home;

