import "./About.css";
import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import { useLanguage } from "./LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="about-container">

        <Reveal className="about-left">

          <div className="about-label">
            <span></span>
            {t.aboutLabel}
          </div>

          <h2>
            {t.aboutWhere} <strong>{t.aboutSkills}</strong>
            <br />
            {t.aboutMeet} <strong>{t.aboutOpportunity}</strong>
          </h2>

          <p className="about-intro">
            {t.aboutIntro}
          </p>

          <p className="about-description">
            {t.aboutDescription}
          </p>

          <div className="about-bottom">

            <button
              className="about-btn"
              type="button"
              onClick={() =>
                document
                  .getElementById("courses")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              {t.discoverMore}
              <span>→</span>
            </button>

            <div className="about-mini-stat">
              <StatCounter value={500} suffix="+" />
              <span>{t.studentsTrained}</span>
            </div>

          </div>
        </Reveal>

        <div className="about-right">

          <Reveal className="about-main-card">

            <div className="card-top">
              <span>PROTECH</span>
              <span>01 / 04</span>
            </div>

            <div className="tech-circle">
              <div className="circle-inner">
                <span>PT</span>
              </div>
            </div>

            <h3>{t.learnBuildGrow}</h3>

            <p>
              {t.aboutCardDescription}
            </p>

          </Reveal>

          <div className="about-stats">

            <Reveal className="stat-box" hover delay={0.04}>
              <StatCounter value={10} suffix="+" />
              <span>{t.professionalCourses}</span>
            </Reveal>

            <Reveal className="stat-box" hover delay={0.08}>
              <StatCounter value={500} suffix="+" />
              <span>{t.students}</span>
            </Reveal>

            <Reveal className="stat-box" hover delay={0.12}>
              <StatCounter value={11} suffix="+" />
              <span>{t.expertTrainers}</span>
            </Reveal>

            <Reveal className="stat-box" hover delay={0.16}>
              <StatCounter value={100} suffix="%" />
              <span>{t.practicalLearning}</span>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
