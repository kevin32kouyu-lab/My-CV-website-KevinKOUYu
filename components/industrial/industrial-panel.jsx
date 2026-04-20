/**
 * 这个文件定义全站通用的工业风面板容器，负责统一层级、螺丝和散热槽细节。
 * 相关模块：首页、项目页、关于页、经历页、站点导航与页脚。
 */

import { cn } from "../../lib/cn";

const variantClasses = {
  panel: "panel-shell",
  floating: "floating-shell",
  recessed: "recessed-shell",
  dark: "dark-panel",
};

// 渲染统一的工业风容器，并按需要附带装配细节。
export default function IndustrialPanel({
  as = "div",
  variant = "panel",
  interactive = false,
  screws = false,
  vents = false,
  className = "",
  children,
}) {
  const Component = as;

  return (
    <Component
      className={cn(
        "relative overflow-hidden",
        variantClasses[variant] ?? variantClasses.panel,
        interactive ? "panel-interactive" : "",
        className,
      )}
    >
      {screws ? (
        <>
          <span aria-hidden="true" className="panel-screw panel-screw-tl" />
          <span aria-hidden="true" className="panel-screw panel-screw-tr" />
          <span aria-hidden="true" className="panel-screw panel-screw-bl" />
          <span aria-hidden="true" className="panel-screw panel-screw-br" />
        </>
      ) : null}

      {vents ? (
        <div aria-hidden="true" className="panel-vents">
          <span className="panel-vent" />
          <span className="panel-vent" />
          <span className="panel-vent" />
        </div>
      ) : null}

      <div className="relative z-[1]">{children}</div>
    </Component>
  );
}
