"use client";

import { motion } from "framer-motion";

const directionMap = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  scale: { x: 0, y: 0, scale: 0.96 },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
  duration = 0.6,
}) {
  const hiddenState = directionMap[from] ?? directionMap.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...hiddenState }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
