import "./Facilities.css";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageContext";

function Facilities() {
  const { t } = useLanguage();

  const facilities = [
    {
      icon: "LAB",
      title: t.modernComputerLab,
      description: t.modernComputerLabDesc,
    },
    {
      icon: "AID",
      title: t.scholarship,
      description: t.scholarshipDesc,
    },
    {
      icon: "LEARN",
      title: t.comfortableClassrooms,
      description: t.comfortableClassroomsDesc,
    },
    {
      icon: "TEAM",
      title: t.expertInstructorsFacility,
      description: t.expertInstructorsFacilityDesc,
    },
    {
      icon: "BUILD",
      title: t.practicalTrainingFacility,
      description: t.practicalTrainingFacilityDesc,
    },
    {
      icon: "AC",
      title: t.airConditionedRooms,
      description: t.airConditionedRoomsDesc,
    },
  ];

  return (
    <section className="facilities">
      <div className="facilities-container">

        <Reveal className="facilities-heading">
          <p>{t.whyChooseUs}</p>

          <h1>
            {t.our} <span>{t.facilitiesTitle}</span>
          </h1>

          <div className="facilities-line"></div>

          <p className="facilities-description">
            {t.facilitiesDescription}
          </p>
        </Reveal>

        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <Reveal
              className="facility-card"
              key={index}
              delay={(index % 3) * 0.06}
              hover
            >

              <div className="facility-icon" aria-hidden="true">
                {facility.icon}
              </div>

              <h3>{facility.title}</h3>

              <p>{facility.description}</p>

            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Facilities;
