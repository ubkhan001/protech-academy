import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import "./Contact.css";
import { useLanguage } from "./LanguageContext";

function Contact() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const mapLink = "https://maps.app.goo.gl/iCXwcKoN32LmPsfB6";
  const revealFrom = shouldReduceMotion ? false : { opacity: 0, y: 24 };

  return (
    <LazyMotion features={domAnimation}>
      <section className="contact" id="contact">
        <div className="contact-container">
          <m.div
            className="contact-heading"
            initial={revealFrom}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{t.getInTouch}</p>
            <h1>
              {t.contact} <span>{t.us}</span>
            </h1>
            <div className="contact-line" />
            <p className="contact-description">{t.contactDescription}</p>
          </m.div>

          <div className="contact-content">
            <m.div
              className="contact-info"
              initial={revealFrom}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.65,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <m.article
                className="contact-box"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <div className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </div>
                <div className="contact-detail">
                  <h3>{t.ourLocation}</h3>
                  <p>
                    Plot D/3, Block #3, Post Office Road,
                    <br />
                    Near Tayyaba Masjid, Metroville, Karachi
                  </p>
                </div>
                <span className="contact-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </m.article>

              <m.article
                className="contact-box"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <div className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7.2 3.5h2.4l1.2 4-1.8 1.8a15 15 0 0 0 5.7 5.7l1.8-1.8 4 1.2v2.4a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 5.2 5.7a2 2 0 0 1 2-2.2Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="contact-detail">
                  <h3>{t.phone}</h3>
                  <a href="tel:+923404988954">+92 340 4988954</a>
                </div>
                <span className="contact-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </m.article>

              <m.article
                className="contact-box"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.15 }}
              >
                <div className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3.5"
                      y="5"
                      width="17"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="m4.5 7 7.5 6 7.5-6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="contact-detail">
                  <h3>{t.email}</h3>
                  <a href="mailto:info@protechacademy.com">
                    info@protechacademy.com
                  </a>
                </div>
                <span className="contact-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </m.article>

              <m.article
                className="contact-box"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.2 }}
              >
                <div className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="8.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M12 7v5l3.5 2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="contact-detail">
                  <h3>Office Hours</h3>
                  <p>Contact us for current timings.</p>
                </div>
                <span className="contact-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </m.article>
            </m.div>

            <m.div
              className="contact-map-card"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.7,
                delay: 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="contact-map-heading">
                <span className="contact-map-indicator" aria-hidden="true" />
                <div>
                  <strong>{t.ourLocation}</strong>
                  <span>ProTech Academy · Karachi</span>
                </div>
              </div>

              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.2310721055414!2d66.99535837443189!3d24.924196942706004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fd0d0aee0a7%3A0xcada24c92072fd3f!2sProtech%20Academy!5e0!3m2!1sen!2s!4v1791385743886!5m2!1sen!2s"
                  title="ProTech Academy Location"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              <a
                className="directions-button"
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.getDirections}
                <span aria-hidden="true">↗</span>
              </a>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default Contact;
