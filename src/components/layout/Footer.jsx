import { useTranslation } from "react-i18next";
import "./Footer.css";
import logo from "../../assets/mainLogo.png";

const socials = [
  {
    href: "https://instagram.com/nurandgarden",
    title: "Instagram",
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm10.5 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
      </svg>
    ),
  },
  {
    href: "https://t.me/nurandgarden",
    title: "Telegram",
    name: "Telegram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.5 3.5a1.25 1.25 0 0 0-1.285-.09l-17 9a1.25 1.25 0 0 0 .142 2.3l3.87 1.39 2.02 4.8a1.25 1.25 0 0 0 2.214.18l2.33-3.51 4.26 3.09a1.25 1.25 0 0 0 1.954-.77l2.5-15a1.25 1.25 0 0 0-.998-1.47ZM6.64 12.78 18.26 7.1l-8.61 7.3a1.25 1.25 0 0 0-.41.83l-.18 1.98-1.05-2.5a1.25 1.25 0 0 0-.74-.7l-.63-.22Zm7.26 4.12-.98 1.48.24-2.67 7.44-6.31-6.7 7.5z" />
      </svg>
    ),
  },
  {
    href: "https://tiktok.com",
    title: "TikTok",
    name: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 3a1 1 0 0 1 1-1h2.25a1 1 0 0 1 1 1 3.75 3.75 0 0 0 3.75 3.75 1 1 0 0 1 1 1V9.5a1 1 0 0 1-1.15.99 7.73 7.73 0 0 1-3.85-1.31v7.2a5.62 5.62 0 1 1-5.62-5.63 5.5 5.5 0 0 1 1.57.23V9.37a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6.31a3.62 3.62 0 1 0-2.5 3.45V4a1 1 0 0 1 1-1Z" />
      </svg>
    ),
  },
];

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src={logo} alt="Nur & Garden logotipi" />
        </div>
        <div className="site-footer__contact">
          <h2>{t("footer.contact")}</h2>
          <p>
            {t("contact.phone")}: <a href="tel:+998917079732">+998 91 707 97 32</a>
          </p>
          <p>
            {t("contact.email")}: <a href="mailto:info@nurandgarden.com">info@nurandgarden.com</a>
          </p>
          <p>
            {t("contact.address")}: {t("contact.addressValue")}
          </p>
        </div>
        <div className="site-footer__socials">
          {socials.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noreferrer" aria-label={item.title}>
              <span className="site-footer__social-icon">{item.icon}</span>
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="site-footer__bottom">{t("footer.rights")}</div>
    </footer>
  );
}

export default Footer;

