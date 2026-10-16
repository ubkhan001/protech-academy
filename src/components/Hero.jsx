
import "./Hero.css";
import academyPhoto from "../assets/hhh.jpg";
import { useLanguage } from "./LanguageContext";

function Hero() {
  const { t } = useLanguage();

  const goToSection = (section) => {
    document
      .getElementById(section)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="hero-layout">
        <div className="hero-content">
          <p className="hero-tag">
            <span className="hero-tag-dot" aria-hidden="true" />
            {t.welcome}
          </p>

          <h1>
            {t.master} <span>{t.technology}</span>
            <br />
            {t.buildFuture}
          </h1>

          <p className="hero-description">{t.heroDescription}</p>

          <div className="hero-buttons">
            <button
              className="hero-primary-button"
              type="button"
              onClick={() => goToSection("courses")}
            >
              {t.exploreCourses}
              <span aria-hidden="true">↗</span>
            </button>

            <button
              className="hero-secondary-button"
              type="button"
              onClick={() => goToSection("admission")}
            >
              {t.joinNow}
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <h3>10+</h3>
              <p>{t.coursesCount}</p>
            </div>

            <div className="hero-stat">
              <h3>11+</h3>
              <p>{t.expertTeachers}</p>
            </div>

            <div className="hero-stat">
              <h3>100%</h3>
              <p>{t.practical}</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="hero-image-frame">
            <img
              className="hero-image"
              src={academyPhoto}
              alt={t.heroImageAlt}
            />
            <div className="hero-image-shade" />
            <div className="hero-image-caption">
              <span className="hero-caption-mark" aria-hidden="true">
                PT
              </span>
              <span>
                <strong>{t.learnBuildGrow}</strong>
                <small>{t.aboutCardDescription}</small>
              </span>
              <span className="hero-caption-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </div>
          <div className="hero-float-card">
            <span className="hero-float-icon" aria-hidden="true">
              ✦
            </span>
            <span>
              <strong>{t.startLearning}</strong>
              <small>{t.admissionsOpen}</small>
            </span>
          </div>
        </div>
      </div>

      <div className="hero-bottom-note" aria-hidden="true">
        <span className="hero-note-line" />
        ProTech Academy · Karachi
      </div>
    </section>
  );
}

export default Hero;
