import { animate, m, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function StatCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(shouldReduceMotion ? value : 0);
  const displayValue = useTransform(
    count,
    (current) => `${Math.round(current).toLocaleString()}${suffix}`
  );

  useEffect(() => {
    if (shouldReduceMotion) {
      count.set(value);
      return undefined;
    }

    if (!inView) return undefined;

    const controls = animate(count, value, {
      duration: 1.1,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, inView, shouldReduceMotion, value]);

  return (
    <m.strong ref={ref} className="stat-counter">
      {displayValue}
    </m.strong>
  );
}

export default StatCounter;
