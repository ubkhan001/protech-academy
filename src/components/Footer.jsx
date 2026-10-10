import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";
import { useLanguage } from "./LanguageContext";

const currentYear = new Date().getFullYear();

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const goToSection = (section) => {
    if (location.pathname !== "/") {
      navigate(`/#${section}`);
      return;
    }

    document
      .getElementById(section)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="site-footer">
      <div className="site-footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-brand-name">
            ProTech <span>Academy</span>
          </Link>
          <p>{t.heroDescription}</p>
          <span className="footer-tagline">
            INSTITUTE OF PROFESSIONAL GROWTH
          </span>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <h2>{t.aboutLabel}</h2>
          <button type="button" onClick={() => goToSection("home")}>
            {t.home}
          </button>
          <button type="button" onClick={() => goToSection("about")}>
            {t.about}
          </button>
          <button type="button" onClick={() => goToSection("courses")}>
            {t.courses}
          </button>
          <Link to="/teachers">{t.teachers}</Link>
          <Link to="/facilities">{t.facilities}</Link>
          <button type="button" onClick={() => goToSection("contact")}>
            {t.contact}
          </button>
        </nav>

        <div className="footer-contact">
          <h2>{t.getInTouch}</h2>
          <a href="tel:+923404988954">+92 340 4988954</a>
          <a href="mailto:info@protechacademy.com">
            info@protechacademy.com
          </a>
          <button type="button" onClick={() => goToSection("admission")}>
            {t.joinNow}
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>© {currentYear} ProTech Academy</span>
        <span>{t.learnBuildGrow}</span>
      </div>
    </footer>
  );
}

export default Footer;
