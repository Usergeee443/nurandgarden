import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../ui/LanguageToggle";
import "./Header.css";
import logo from "../../assets/mainLogo.png";

function Header() {
  const { i18n, t } = useTranslation();
  const activeLang = (i18n.language || "uz").split("-")[0];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Scroll yo'nalishini aniqlash
          if (currentScrollY < lastScrollY) {
            // Tepaga scroll qilmoqda
            setIsScrolled(false);
          } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Pastga scroll qilmoqda va 50px dan oshgan
            setIsScrolled(true);
          }
          
          // Agar eng tepada bo'lsa, header o'z holiga qaytsin
          if (currentScrollY <= 10) {
            setIsScrolled(false);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = useMemo(
    () => [
      { to: "/", label: t("navigation.home"), exact: true },
      { to: "/products", label: t("navigation.products") },
      { to: "/about", label: t("navigation.about") },
      { to: "/gallery", label: t("navigation.gallery") },
      { to: "/contact", label: t("navigation.contact") },
    ],
    [t]
  );

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <NavLink to="/" className="site-header__logo" aria-label={t("brand.name")}>
          <img src={logo} alt="Nur & Garden logotipi" />
        </NavLink>

        <button
          type="button"
          className={`site-header__menu-btn ${isMenuOpen ? "site-header__menu-btn--active" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-header__nav ${isMenuOpen ? "site-header__nav--open" : ""} ${isScrolled ? "site-header__nav--hidden" : ""}`} aria-label="Asosiy navigatsiya">
          <ul className="site-header__nav-list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `site-header__nav-link ${isActive ? "site-header__nav-link--active" : ""}`
                  }
                  end={item.exact}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="site-header__mobile-controls">
            <LanguageToggle active={activeLang} onChange={(lang) => i18n.changeLanguage(lang)} />
          </div>
        </nav>

        <div className={`site-header__controls ${isScrolled ? "site-header__controls--hidden" : ""}`}>
          <LanguageToggle active={activeLang} onChange={(lang) => i18n.changeLanguage(lang)} />
        </div>
      </div>
    </header>
  );
}

export default Header;

