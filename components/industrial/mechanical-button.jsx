"use client";

/**
 * 这个文件定义全站统一的机械按钮，负责按压感、导航按钮和联系方式入口。
 * 相关模块：site-chrome、首页 CTA、页脚连接按钮、移动端菜单。
 */

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, EnvelopeSimple, FileArrowDown, Phone } from "@phosphor-icons/react";
import { cn } from "../../lib/cn";

const variantClasses = {
  primary:
    "border border-white/20 bg-[var(--accent)] text-white shadow-[3px_3px_10px_rgba(166,50,60,0.24),-3px_-3px_10px_rgba(255,255,255,0.35)] hover:brightness-105 active:shadow-[inset_4px_4px_10px_rgba(166,50,60,0.32),inset_-4px_-4px_10px_rgba(255,121,132,0.18)]",
  secondary:
    "border border-white/70 bg-[linear-gradient(145deg,var(--panel),#e6ebf2)] text-[var(--foreground)] shadow-[var(--shadow-card)] hover:text-[var(--accent)] active:shadow-[var(--shadow-pressed)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--muted)] shadow-none hover:bg-white/35 hover:text-[var(--foreground)] hover:shadow-[var(--shadow-recessed)] active:shadow-[var(--shadow-recessed)]",
  nav:
    "min-h-11 rounded-[14px] border border-white/70 bg-[linear-gradient(145deg,var(--panel),#e6ebf2)] px-4 py-2.5 text-[var(--foreground)] shadow-[var(--shadow-card)] hover:text-[var(--accent)] active:shadow-[var(--shadow-pressed)]",
  connector:
    "w-full border border-white/70 bg-[linear-gradient(145deg,var(--panel),#e6ebf2)] text-[var(--foreground)] shadow-[var(--shadow-card)] hover:text-[var(--accent)] active:shadow-[var(--shadow-pressed)]",
};

const activeClasses = {
  nav: "border border-white/15 bg-[var(--accent)] text-white shadow-[4px_4px_8px_rgba(166,50,60,0.35),-4px_-4px_8px_rgba(255,121,132,0.42)] hover:text-white",
};

const iconMap = {
  arrowRight: ArrowRight,
  download: FileArrowDown,
  mail: EnvelopeSimple,
  phone: Phone,
};

// 判断链接是否需要使用原生 a 标签，避免下载文件被路由组件接管。
function isNativeHref(href) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.endsWith(".pdf");
}

// 渲染统一风格的按钮，并根据链接类型自动选择标签。
export default function MechanicalButton({
  href,
  children,
  icon: Icon,
  iconName,
  variant = "secondary",
  active = false,
  className = "",
  fullWidth = false,
  type = "button",
  ...props
}) {
  const ResolvedIcon = Icon ?? iconMap[iconName];
  const classes = cn(
    "mechanical-button",
    variantClasses[variant] ?? variantClasses.secondary,
    active ? activeClasses[variant] ?? "" : "",
    fullWidth ? "w-full" : "",
    className,
  );

  const content = (
    <>
      {ResolvedIcon ? <ResolvedIcon className="h-4 w-4 shrink-0" weight="bold" /> : null}
      <span className="relative z-[1]">{children}</span>
    </>
  );

  return (
    <motion.div
      className={fullWidth ? "w-full" : ""}
      whileHover={{ y: -1 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
    >
      {href ? (
        isNativeHref(href) ? (
          <a href={href} className={classes} {...props}>
            {content}
          </a>
        ) : (
          <Link href={href} className={classes} {...props}>
            {content}
          </Link>
        )
      ) : (
        <button type={type} className={classes} {...props}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
