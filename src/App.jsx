import "./App.css";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
} from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Admission from "./components/Admission";
import Teachers from "./components/Teachers";
import Facilities from "./components/Facilities";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const JourneyCircuitNetwork = lazy(
  () => import("./components/JourneyCircuitNetwork")
);
const TechnologySpotlight = lazy(
  () => import("./components/TechnologySpotlight")
);

function Home() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const journeyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start end", "end start"],
  });

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);

    setTimeout(() => {
      document
        .getElementById("admission")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  return (
    <>
      <Hero />

      <About />

      <div className="ai-journey" ref={journeyRef}>
        <Suspense
          fallback={
            <div
              className="technology-spotlight-fallback"
              aria-hidden="true"
            />
          }
        >
          <TechnologySpotlight scrollProgress={scrollYProgress} />
        </Suspense>

        <Admission
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />

        <Courses onCourseSelect={handleCourseSelect} />

        <Suspense fallback={null}>
          <JourneyCircuitNetwork
            journeyRef={journeyRef}
            scrollProgress={scrollYProgress}
          />
        </Suspense>
      </div>

      <Contact />
    </>
  );
}

function App() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!location.hash) return undefined;

    const section = decodeURIComponent(location.hash.slice(1));
    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById(section)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.pathname]);

  return (
    <LazyMotion features={domAnimation}>
      <Navbar />

      <m.main
        key={location.pathname}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/facilities" element={<Facilities />} />
        </Routes>
      </m.main>

      <Footer />
    </LazyMotion>
  );
}

export default App;
