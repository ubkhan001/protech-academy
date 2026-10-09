import "./Teachers.css";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageContext";

import teacher1 from "../assets/teacher1.png";
import teacher2 from "../assets/teacher2.png";
import teacher3 from "../assets/teacher3.png";

function Teachers() {
  const { t } = useLanguage();

  const teachers = [
    {
      image: teacher1,
      category: t.graphicDesigner,
      name: "Sir Munawar hassan",
      role: t.graphicDesigner,
    },
    {
      image: teacher2,
      category: t.websiteDeveloper,
      name: "Fahad Bin Ashfaq",
      role: t.fullStackDeveloper,
    },
    {
      image: teacher3,
      category: t.digitalMarketing,
      name: "sir ejaz ur rehman ",
      role: t.digitalMarketingExpert,
    },
  ];

  return (
    <section id="teachers" className="teachers">
      <div className="teachers-container">

        <Reveal className="teachers-heading">
          <p>{t.ourInstructors}</p>

          <h2>
            {t.meetOur} <span>{t.experts}</span>
          </h2>

          <div className="teachers-line"></div>

          <p className="teachers-description">
            {t.teachersDescription}
          </p>
        </Reveal>

        <div className="teachers-grid">
          {teachers.map((teacher, index) => (
            <Reveal
              className="teacher-card"
              key={index}
              delay={index * 0.08}
              hover
            >

              <div className="teacher-image">
                <img src={teacher.image} alt={teacher.name} />
              </div>

              <div className="teacher-info">
                <p>{teacher.category}</p>
                <h3>{teacher.name}</h3>
                <span>{teacher.role}</span>
              </div>

            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Teachers;