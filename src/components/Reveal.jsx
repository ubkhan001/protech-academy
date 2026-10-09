import { m, useReducedMotion } from "framer-motion";

function Reveal({ children, className, delay = 0, hover = false }) {
  const shouldReduceMotion = useReducedMotion();
  const animate = shouldReduceMotion === false;

  return (
    <m.div
      className={className}
      initial={animate ? { opacity: 0, y: 18 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      whileHover={animate && hover ? { y: -5 } : undefined}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.48,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </m.div>
  );
}

export default Reveal;
