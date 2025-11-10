import PropTypes from "prop-types";
import "./LanguageToggle.css";

const LANGS = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

function LanguageToggle({ active, onChange }) {
  const normalizedActive = (active || "").toLowerCase();

  return (
    <nav className="language-toggle" aria-label="Til tanlash">
      {LANGS.map((language) => {
        const isActive = language.code === normalizedActive;
        return (
          <button
            type="button"
            key={language.code}
            className={`language-toggle__btn ${isActive ? "language-toggle__btn--active" : ""}`}
            onClick={() => {
              if (!isActive) {
                onChange(language.code);
              }
            }}
            aria-pressed={isActive}
          >
            {language.label}
          </button>
        );
      })}
    </nav>
  );
}

LanguageToggle.propTypes = {
  active: PropTypes.oneOf(["uz", "ru", "en"]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LanguageToggle;

