import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useLanguage } from "./LanguageContext";
const languages = [
  
  { code: "en", label: "EN", name: "English" },
  { code: "ur", label: "UR", name: "اردو" },
  { code: "ps", label: "PS", name: "پښتو" },
  { code: "pa", label: "PA", name: "ਪੰਜਾਬੀ" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "hi", label: "HI", name: "हिन्दी" },
  { code: "bn", label: "BN", name: "বাংলা" },
  { code: "fa", label: "FA", name: "فارسی" },
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "es", label: "ES", name: "Español" },
  { code: "it", label: "IT", name: "Italiano" },
  { code: "pt", label: "PT", name: "Português" },
  { code: "zh", label: "ZH", name: "中文" },
  { code: "ja", label: "JA", name: "日本語" },
  { code: "ko", label: "KO", name: "한국어" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const currentLanguage =
    languages.find((item) => item.code === language) || languages[0];

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/" || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const sections = ["home", "about", "courses", "admission", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        const marker = window.innerHeight * 0.35;
        const current = sections.find((section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= marker && bounds.bottom > marker;
        });

        if (current) setActiveSection(current.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  const goToSection = (section) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${section}`);
      return;
    }

    document
      .getElementById(section)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`navbar${scrolled ? " navbar-scrolled" : ""}`}
      aria-label={t.mainNavigation}
    >
      <Link className="nav-logo" to="/" onClick={closeMenu}>
        <span className="nav-logo-image">
          <img src={logo} alt="" />
        </span>
        <span className="nav-brand-name">ProTech Academy</span>
      </Link>

      <div
        className={`nav-links${menuOpen ? " nav-links-open" : ""}`}
        id="main-navigation-links"
      >
        <button
          type="button"
          aria-current={
            location.pathname === "/" && activeSection === "home"
              ? "location"
              : undefined
          }
          onClick={() => goToSection("home")}
        >
          {t.home}
        </button>
        <button
          type="button"
          aria-current={
            location.pathname === "/" && activeSection === "about"
              ? "location"
              : undefined
          }
          onClick={() => goToSection("about")}
        >
          {t.about}
        </button>
        <button
          type="button"
          aria-current={
            location.pathname === "/" && activeSection === "courses"
              ? "location"
              : undefined
          }
          onClick={() => goToSection("courses")}
        >
          {t.courses}
        </button>
        <NavLink to="/membership" onClick={closeMenu}>
          {t.membership}
        </NavLink>
        <NavLink to="/teachers" onClick={closeMenu}>
          {t.teachers}
        </NavLink>
        <NavLink to="/facilities" onClick={closeMenu}>
          {t.facilities}
        </NavLink>
        <button
          type="button"
          aria-current={
            location.pathname === "/" && activeSection === "contact"
              ? "location"
              : undefined
          }
          onClick={() => goToSection("contact")}
        >
          {t.contact}
        </button>
      </div>

      <div className="nav-right">
        <div className="language-wrapper">
          <button
            className="language"
            type="button"
            onClick={() => setLanguageOpen((open) => !open)}
            aria-label={`${t.selectLanguage}, ${t.currentLanguage}: ${currentLanguage.name}`}
            aria-expanded={languageOpen}
            aria-controls="language-menu"
          >
            <svg
              className="language-globe"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3.5 12h17M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" />
            </svg>
            <span>{currentLanguage.label}</span>
            <span className="language-chevron" aria-hidden="true">
              {languageOpen ? "⌃" : "⌄"}
            </span>
          </button>
          {languageOpen && (
            <div className="language-menu" id="language-menu">
              {languages.map((item) => (
                <button
                  type="button"
                  key={item.code}
                  className={item.code === language ? "selected-language" : ""}
                  aria-current={item.code === language ? "true" : undefined}
                  onClick={() => {
                    setLanguage(item.code);
                    setLanguageOpen(false);
                  }}
                >
                  <span>{item.label}</span>
                  <span lang={item.code}>{item.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          className="join-btn"
          type="button"
          aria-label={t.joinNow}
          onClick={() => goToSection("admission")}
        >
          <span aria-hidden="true">✦</span>
          {t.joinNow}
        </button>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? " nav-toggle-open" : ""}`}
          aria-label={menuOpen ? t.closeNavigation : t.openNavigation}
          aria-expanded={menuOpen}
          aria-controls="main-navigation-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
