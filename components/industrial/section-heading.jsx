/**
 * 这个文件定义全站统一的章节标题，负责标题、说明和右侧状态的节奏一致。
 * 相关模块：项目页、关于页、经历页。
 */

import StatusIndicator from "./status-indicator";
import { cn } from "../../lib/cn";

// 渲染统一的章节头部，减少每个页面自己拼标题造成的风格漂移。
export default function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  description,
  status,
  heading = "h1",
  className = "",
}) {
  const HeadingTag = heading;

  return (
    <div className={cn("flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between", className)}>
      <div className="max-w-3xl">
        <div className="flex items-center gap-3">
          {Icon ? (
            <span className="icon-housing h-12 w-12 text-[var(--accent)]">
              <Icon className="h-5 w-5" weight="bold" />
            </span>
          ) : null}
          <span className="tech-label">{eyebrow}</span>
        </div>
        <HeadingTag className="title-font mt-6 text-3xl font-bold leading-tight tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
          {title}
        </HeadingTag>
        <p className="mt-5 max-w-[62ch] text-base leading-8 text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      </div>

      {status ? <StatusIndicator state={status.state} label={status.label} /> : null}
    </div>
  );
}
