import "./Admission.css";
import Reveal from "./Reveal";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";

function Admission({ selectedCourse, setSelectedCourse }) {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    phone: "",
    email: "",
    age: "",
    education: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "923404988954";

    const whatsappMessage = `
*PROTECH ACADEMY - ADMISSION FORM*

*Full Name:* ${formData.fullName}
*Father Name:* ${formData.fatherName}
*Phone Number:* ${formData.phone}
*Email:* ${formData.email}
*Age:* ${formData.age}
*Education:* ${formData.education}
*Selected Course:* ${selectedCourse}
*Address:* ${formData.address}
*Message:* ${formData.message}
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="admission" className="admission">
      <div className="admission-container">

        <Reveal className="admission-info">
          <div className="admission-label">
            <span></span>
            PROTECH ACADEMY
          </div>

          <h2>
            {t.startYour}
            <strong> {t.techJourney}</strong>
          </h2>

          <p className="admission-intro">
            {t.admissionIntro}
          </p>

          <div className="admission-features">

            <div className="admission-feature">
              <div className="feature-number">01</div>
              <div>
                <h3>{t.practicalTraining}</h3>
                <p>{t.practicalTrainingDesc}</p>
              </div>
            </div>

            <div className="admission-feature">
              <div className="feature-number">02</div>
              <div>
                <h3>{t.expertInstructors}</h3>
                <p>{t.expertInstructorsDesc}</p>
              </div>
            </div>

            <div className="admission-feature">
              <div className="feature-number">03</div>
              <div>
                <h3>{t.careerFocused}</h3>
                <p>{t.careerFocusedDesc}</p>
              </div>
            </div>

          </div>

          <div className="admission-note">
            <span>●</span>
            {t.admissionsOpen}
          </div>
        </Reveal>

        <Reveal className="admission-form-wrapper" delay={0.08}>

          <div className="form-header">
            <div>
              <p>{t.admissionForm}</p>
              <h3>{t.applyNow}</h3>
            </div>

            <span className="form-number">01</span>
          </div>

          <form className="admission-form" onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="admission-full-name">{t.fullName}</label>

                <input
                  type="text"
                  id="admission-full-name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={t.fullNamePlaceholder}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="admission-father-name">{t.fatherName}</label>

                <input
                  type="text"
                  id="admission-father-name"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder={t.fatherNamePlaceholder}
                  required
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="admission-phone">{t.phoneNumber}</label>

                <input
                  type="tel"
                  id="admission-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="03XX-XXXXXXX"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="admission-email">{t.emailAddress}</label>

                <input
                  type="email"
                  id="admission-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="admission-age">{t.age}</label>

                <input
                  type="number"
                  id="admission-age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder={t.agePlaceholder}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="admission-education">{t.education}</label>

                <input
                  type="text"
                  id="admission-education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder={t.educationPlaceholder}
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="admission-course">{t.selectCourse}</label>

              <select
                id="admission-course"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
              >
                <option value="">{t.chooseCourse}</option>

                <option value="C.I.T">{t.courseCit}</option>
                <option value="Digital Marketing">
                  {t.courseDigitalMarketing}
                </option>
                <option value="Graphic Designing">
                  {t.courseGraphicDesigning}
                </option>
                <option value="Full Stack Website Development">
                  {t.courseFullStack}
                </option>
                <option value="E-Commerce">
                  {t.courseEcommerce}
                </option>
                <option value="Shopify">
                  {t.courseShopify}
                </option>
                <option value="Front-End Web Development">
                  {t.courseFrontend}
                </option>
                <option value="Back-End Web Development">
                  {t.courseBackend}
                </option>
                <option value="A.I">
                  {t.courseAI}
                </option>
                <option value="English Language">
                  {t.courseEnglish}
                </option>
                <option value="Cyber Security">
                  {t.courseCyberSecurity}
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="admission-address">{t.address}</label>

              <input
                type="text"
                id="admission-address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={t.addressPlaceholder}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="admission-message">{t.yourMessage}</label>

              <textarea
                name="message"
                id="admission-message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {t.submitForm}
              <span>→</span>
            </button>

            <p className="form-security">
              {t.formSecurity}
            </p>

          </form>
        </Reveal>

      </div>
    </section>
  );
}

export default Admission;
