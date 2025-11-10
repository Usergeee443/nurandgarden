import PropTypes from "prop-types";
import logo from "../../assets/blackLogo.png";
import "./Preloader.css";

function Preloader({ isVisible }) {
  return (
    <div className={`preloader ${isVisible ? "" : "preloader--hidden"}`} aria-hidden="true">
      <div className="preloader__inner">
        <img src={logo} alt="Nur & Garden logotipi" />
      </div>
    </div>
  );
}

Preloader.propTypes = {
  isVisible: PropTypes.bool,
};

Preloader.defaultProps = {
  isVisible: false,
};

export default Preloader;

