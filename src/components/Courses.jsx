import "./Courses.css";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageContext";

function Courses({ onCourseSelect }) {
  const { t } = useLanguage();

  const courses = [
    {
      icon: "CIT",
      title: t.courseCit,
      description: t.courseCitDesc,
      value: "C.I.T",
    },
    {
      icon: "DM",
      title: t.courseDigitalMarketing,
      description: t.courseDigitalMarketingDesc,
      value: "Digital Marketing",
    },
    {
      icon: "GD",
      title: t.courseGraphicDesigning,
      description: t.courseGraphicDesigningDesc,
      value: "Graphic Designing",
    },
    {
      icon: "FS",
      title: t.courseFullStack,
      description: t.courseFullStackDesc,
      value: "Full Stack Website Development",
    },
    {
      icon: "EC",
      title: t.courseEcommerce,
      description: t.courseEcommerceDesc,
      value: "E-Commerce",
    },
    {
      icon: "S",
      title: t.courseShopify,
      description: t.courseShopifyDesc,
      value: "Shopify",
      specialIcon: true,
    },
    {
      icon: "FE",
      title: t.courseFrontend,
      description: t.courseFrontendDesc,
      value: "Front-End Web Development",
    },
    {
      icon: "BE",
      title: t.courseBackend,
      description: t.courseBackendDesc,
      value: "Back-End Web Development",
    },
    {
      icon: "AI",
      title: t.courseAI,
      description: t.courseAIDesc,
      value: "A.I",
    },
    {
      icon: "EN",
      title: t.courseEnglish,
      description: t.courseEnglishDesc,
      value: "English Language",
    },
    {
      icon: "CS",
      title: t.courseCyberSecurity,
      description: t.courseCyberSecurityDesc,
      value: "Cyber Security",
    },
  ];

  return (
    <section className="courses" id="courses">
      <div className="courses-container">

        <Reveal className="courses-heading">
          <p>{t.whatWeTeach}</p>

          <h1>
            {t.our} <span>{t.coursesTitle}</span>
          </h1>

          <div className="courses-line"></div>

          <p className="courses-description">
            {t.coursesDescription}
          </p>
        </Reveal>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <Reveal
              className="course-card"
              key={course.value}
              delay={(index % 3) * 0.06}
              hover
            >

              <div
                className={`course-icon ${
                  course.specialIcon ? "shopify-icon" : ""
                }`}
                aria-hidden="true"
              >
                {course.icon}
              </div>

              <span className="course-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <button
                className="course-button"
                onClick={() => onCourseSelect(course.value)}
              >
                {t.learnMore}
              </button>

            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Courses;
