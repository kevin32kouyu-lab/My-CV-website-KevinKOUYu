"use client";

/**
 * 这个文件提供统一的入场动效，让页面切换后依然保持机械感节奏。
 * 相关模块：首页、项目页、关于页、经历页。
 */

import { motion } from "framer-motion";

const directionMap = {
  up: { x: 0, y: 18 },
  down: { x: 0, y: -18 },
  left: { x: 18, y: 0 },
  right: { x: -18, y: 0 },
  scale: { x: 0, y: 0, scale: 0.96 },
};

// 渲染统一的滑入或缩放出现效果，避免每个页面各写一套动画参数。
export default function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
  duration = 0.55,
}) {
  const hiddenState = directionMap[from] ?? directionMap.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...hiddenState }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration, delay, ease: [0.175, 0.885, 0.32, 1.275] }}
    >
      {children}
    </motion.div>
  );
}
