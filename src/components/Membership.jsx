import "./Membership.css";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

const courses = [
  {
    nameKey: "courseCit",
    subtitleKey: "courseCitFullName",
    selection: "C.I.T",
    monthlyFee: "Rs. 3,500",
  },
  {
    nameKey: "courseGraphicDesigning",
    selection: "Graphic Designing",
    monthlyFee: "Rs. 4,500",
  },
  {
    nameKey: "courseWebsiteDevelopment",
    selection: "Website Development",
  },
  {
    nameKey: "courseFullStack",
    selection: "Full Stack Website Development",
    monthlyFee: "Rs. 6,000",
  },
  {
    nameKey: "courseCyberSecurity",
    selection: "Cyber Security",
    monthlyFee: "Rs. 6,000",
  },
  {
    nameKey: "courseFrontend",
    selection: "Front-End Web Development",
    monthlyFee: "Rs. 4,500",
  },
  {
    nameKey: "courseBackend",
    selection: "Back-End Web Development",
    monthlyFee: "Rs. 4,500",
  },
  {
    nameKey: "courseEcommerce",
    selection: "E-Commerce",
    courseFee: "Rs. 40,000",
    duration: "40 Days",
  },
  {
    nameKey: "courseEnglish",
    selection: "English Language",
    monthlyFee: "Rs. 3,000",
  },
];

function Membership() {
  const { t } = useLanguage();

  return (
    <section className="membership-page">
      <div className="membership-page-container">
        <header className="membership-page-heading">
          <p>{t.membershipEyebrow}</p>
          <h1>
            {t.membershipTitle} <span>{t.membershipTitleAccent}</span>
          </h1>
          <div className="membership-page-rule" aria-hidden="true" />
          <p className="membership-page-description">
            {t.membershipDescription}
          </p>
        </header>

        <div className="membership-page-grid">
          {courses.map((course, index) => (
            <article className="membership-page-card" key={course.selection}>
              <div className="membership-page-card-heading">
                <span className="membership-page-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2>{t[course.nameKey]}</h2>
                {course.subtitleKey && <p>{t[course.subtitleKey]}</p>}
              </div>

              {course.duration && (
                <div className="membership-page-duration">
                  <span>{t.courseDuration}</span>
                  <strong>{t.courseDuration40Days}</strong>
                </div>
              )}

              <dl className="membership-page-fees">
                <div>
                  <dt>{t.admissionFee}</dt>
                  <dd>Rs. 500</dd>
                </div>
                <div>
                  <dt>{t.monthlyFee}</dt>
                  <dd>
                    {course.monthlyFee ||
                      (course.courseFee ? t.notApplicable : t.feeNotSpecified)}
                  </dd>
                </div>
                {course.courseFee && (
                  <div className="membership-page-course-fee">
                    <dt>{t.courseFee}</dt>
                    <dd>{course.courseFee}</dd>
                  </div>
                )}
              </dl>

              <Link
                className="membership-page-enroll"
                to={`/?course=${encodeURIComponent(course.selection)}#admission`}
              >
                {t.enrollNow} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Membership;
