import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import HeroSwiper from "../sections/HeroSwiper/HeroSwiper";
import CategoriesStrip from "../sections/Home/CategoriesStrip";
import HighlightsSection from "../sections/Home/HighlightsSection";
import FeaturedProducts from "../sections/Home/FeaturedProducts";
import PhilosophySection from "../sections/Home/PhilosophySection";
import ProcessTimeline from "../sections/Home/ProcessTimeline";
import StatsSection from "../sections/Home/StatsSection";
import RecipeIdeas from "../sections/Home/RecipeIdeas";
import TestimonialsSection from "../sections/Home/TestimonialsSection";
import FAQSection from "../sections/Home/FAQSection";
import PartnersSection from "../sections/Home/PartnersSection";
import NewsletterSection from "../sections/Home/NewsletterSection";
import CallToAction from "../sections/Home/CallToAction";

function Home() {
  const { t } = useTranslation();

  const pageTitle = `${t("brand.name")} — ${t("brand.tagline")}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={t("home.hero.slides.rice.caption")} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={t("home.hero.slides.rice.caption")} />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:type" content="website" />
      </Helmet>
      <HeroSwiper />
      <CategoriesStrip />
      <HighlightsSection />
      <FeaturedProducts />
      <PhilosophySection />
      <ProcessTimeline />
      <StatsSection />
      <RecipeIdeas />
      <TestimonialsSection />
      <FAQSection />
      <PartnersSection />
      <NewsletterSection />
      <CallToAction />
    </>
  );
}

export default Home;
