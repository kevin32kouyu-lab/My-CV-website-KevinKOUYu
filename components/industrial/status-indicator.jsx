/**
 * 这个文件定义全站统一的状态灯组件，用来表达在线、激活和提醒状态。
 * 相关模块：导航、首页英雄区、页面标题区、项目与经历信息模块。
 */

import { cn } from "../../lib/cn";

const toneClasses = {
  active: "bg-[var(--accent)] shadow-[var(--glow-accent)]",
  online: "bg-[#22c55e] shadow-[0_0_12px_rgba(34,197,94,0.72)]",
  warning: "bg-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,0.72)]",
  standby: "bg-[#94a3b8] shadow-none",
};

// 渲染带呼吸灯效果的状态提示，供全站复用。
export default function StatusIndicator({
  state = "active",
  label,
  className = "",
  compact = false,
}) {
  return (
    <span className={cn("status-pill", compact ? "status-pill-compact" : "", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "status-dot",
          state === "standby" ? "animate-none" : "",
          toneClasses[state] ?? toneClasses.active,
        )}
      />
      {label ? <span className="tech-label text-[var(--foreground)]">{label}</span> : null}
    </span>
  );
}
