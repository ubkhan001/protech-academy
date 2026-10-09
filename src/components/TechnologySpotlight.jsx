import "./TechnologySpotlight.css";
import RobotIllustration from "./RobotIllustration";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageContext";

function TechnologySpotlight({ scrollProgress }) {
  const { t } = useLanguage();

  const goToCourses = () => {
    document
      .getElementById("courses")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="technology-spotlight" id="technology">
      <div className="technology-spotlight-container">
        <Reveal className="technology-copy">
          <p className="technology-eyebrow">
            <span aria-hidden="true" />
            {t.whatWeTeach}
          </p>
          <h2>
            {t.courseAI}
            <span className="technology-heading-accent">.</span>
          </h2>
          <p className="technology-description">{t.courseAIDesc}</p>
          <p className="technology-note">{t.aboutCardDescription}</p>
          <button
            className="technology-button"
            type="button"
            onClick={goToCourses}
          >
            {t.exploreCourses}
            <span aria-hidden="true">↗</span>
          </button>
        </Reveal>

        <Reveal className="technology-art" delay={0.08}>
          <RobotIllustration scrollProgress={scrollProgress} />
        </Reveal>
      </div>
    </section>
  );
}

export default TechnologySpotlight;
