import { m, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import "./JourneyCircuitNetwork.css";

function JourneyCircuitNetwork({ journeyRef, scrollProgress }) {
  const [network, setNetwork] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const easedProgress = useSpring(scrollProgress, {
    damping: 30,
    stiffness: 180,
    mass: 0.35,
  });
  const drawnProgress = useTransform(
    easedProgress,
    [0, 0.1, 0.17, 0.96, 1],
    [0, 0, 0.03, 1, 1]
  );
  const visibleProgress = useTransform(
    easedProgress,
    [0, 0.1, 0.17, 0.3, 1],
    [0, 0, 0.2, 0.48, 0.48]
  );
  const pathLength = shouldReduceMotion ? 1 : drawnProgress;
  const opacity = shouldReduceMotion ? 0.32 : visibleProgress;

  useEffect(() => {
    const journey = journeyRef.current;
    if (!journey) return undefined;
    let measureFrame = 0;

    const measure = () => {
      measureFrame = 0;
      const robot = journey.querySelector(".ai-robot");
      const courseGrid = journey.querySelector("#courses .courses-grid");
      const cards = Array.from(
        journey.querySelectorAll("#courses .course-card")
      );

      if (!robot || !courseGrid || cards.length === 0) return;

      const journeyBounds = journey.getBoundingClientRect();
      const robotBounds = robot.getBoundingClientRect();
      const gridBounds = courseGrid.getBoundingClientRect();
      const firstRowTop = Math.min(
        ...cards.map((card) => card.getBoundingClientRect().top)
      );
      const firstRowCards = cards.filter(
        (card) => card.getBoundingClientRect().top <= firstRowTop + 4
      );
      const start = {
        x: robotBounds.left - journeyBounds.left + robotBounds.width / 2,
        y:
          robotBounds.top -
          journeyBounds.top +
          robotBounds.height * (156 / 640),
      };
      const ends = firstRowCards.map((card) => {
        const bounds = card.getBoundingClientRect();
        return {
          x: bounds.left - journeyBounds.left + bounds.width / 2,
          y: Math.max(
            gridBounds.top - journeyBounds.top + 8,
            bounds.top - journeyBounds.top - 12
          ),
        };
      });

      setNetwork({
        width: journeyBounds.width,
        height: journeyBounds.height,
        start,
        ends,
      });
    };

    const scheduleMeasure = () => {
      if (measureFrame) cancelAnimationFrame(measureFrame);
      measureFrame = requestAnimationFrame(measure);
    };

    if (typeof ResizeObserver === "undefined") {
      scheduleMeasure();
      window.addEventListener("resize", scheduleMeasure, { passive: true });
      return () => {
        cancelAnimationFrame(measureFrame);
        window.removeEventListener("resize", scheduleMeasure);
      };
    }

    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(journey);
    const robot = journey.querySelector(".ai-robot");
    const courseGrid = journey.querySelector("#courses .courses-grid");
    if (robot) observer.observe(robot);
    if (courseGrid) observer.observe(courseGrid);
    journey.querySelectorAll("#courses .course-card").forEach((card) => {
      observer.observe(card);
    });
    scheduleMeasure();

    return () => {
      cancelAnimationFrame(measureFrame);
      observer.disconnect();
    };
  }, [journeyRef]);

  if (!network || network.ends.length === 0) return null;

  const paths = network.ends.map((end, index) => {
    const distance = end.y - network.start.y;
    const direction = index % 2 === 0 ? -1 : 1;
    const curve = Math.min(170, Math.abs(end.x - network.start.x) * 0.28 + 55);
    return `M ${network.start.x} ${network.start.y} C ${
      network.start.x + direction * curve
    } ${network.start.y + distance * 0.4}, ${
      end.x - direction * curve
    } ${end.y - distance * 0.3}, ${end.x} ${end.y}`;
  });

  return (
    <svg
      className="journey-circuit-network"
      width={network.width}
      height={network.height}
      viewBox={`0 0 ${network.width} ${network.height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <filter
          id="journey-circuit-glow"
          x="-50%"
          y="-20%"
          width="200%"
          height="140%"
        >
          <feGaussianBlur stdDeviation="4" result="softGlow" />
          <feMerge>
            <feMergeNode in="softGlow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {paths.map((path, index) => (
        <m.path
          key={index}
          d={path}
          pathLength="1"
          fill="none"
          stroke={index === 0 ? "#ffad63" : "#f28c28"}
          strokeWidth={index === 0 ? 2.4 : 1.6}
          strokeLinecap="round"
          style={{ pathLength, opacity }}
          filter="url(#journey-circuit-glow)"
        />
      ))}
      {network.ends.map((end, index) => (
        <m.circle
          key={`node-${index}`}
          cx={end.x}
          cy={end.y}
          r={index === 0 ? 4 : 3}
          fill="#ffc17e"
          style={{ opacity }}
          filter="url(#journey-circuit-glow)"
        />
      ))}
    </svg>
  );
}

export default JourneyCircuitNetwork;
