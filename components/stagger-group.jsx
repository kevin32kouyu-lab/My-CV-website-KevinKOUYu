"use client";

/**
 * 这个文件提供统一的错峰出现动效，适合成组面板和列表模块。
 * 相关模块：首页指标区、项目模块、关于页能力区、经历页指标区。
 */

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.175, 0.885, 0.32, 1.275],
    },
  },
};

// 渲染带错峰节奏的容器，让一组内容按统一顺序出现。
export function StaggerGroup({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

// 渲染组内的单个元素，让每个项目沿用同一套位移和缩放节奏。
export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
