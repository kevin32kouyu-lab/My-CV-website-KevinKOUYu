/**
 * 这个文件定义首页主视觉里的设备屏幕，用纯 CSS 做出控制台面板感。
 * 相关模块：首页英雄区。
 */

import { Activity, Gauge, LoaderCircle, Radar, Workflow } from "lucide-react";
import { cn } from "../../lib/cn";

const iconMap = {
  activity: Activity,
  gauge: Gauge,
  workflow: Workflow,
  radar: Radar,
};

// 渲染屏幕内部的一条系统读数，统一视觉密度和图标风格。
function ScreenMetric({ item }) {
  const Icon = iconMap[item.icon] ?? Activity;

  return (
    <div className="screen-slot">
      <div className="flex items-center justify-between gap-3">
        <span className="tech-label text-[rgba(224,229,236,0.72)]">{item.label}</span>
        <Icon className="h-4 w-4 text-[var(--accent)]" strokeWidth={1.8} />
      </div>
      <div className="mt-3 flex items-end justify-between gap-3">
        <div className="screen-value">{item.value}</div>
        <div className="tech-label text-[rgba(224,229,236,0.6)]">{item.detail}</div>
      </div>
    </div>
  );
}

// 渲染首页右侧设备模型，让首屏在没有图片的情况下仍然有明显视觉中心。
export default function DeviceScreen({
  tone = "dark",
  scanlines = true,
  title,
  subtitle,
  stats = [],
  logs = [],
}) {
  return (
    <div className="device-frame">
      <div aria-hidden="true" className="device-side-buttons device-side-buttons-left">
        <span />
        <span />
      </div>
      <div aria-hidden="true" className="device-side-buttons device-side-buttons-right">
        <span />
        <span />
      </div>

      <div className="device-chassis">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="tech-label">Control Deck</div>
            <div className="mt-2 title-font text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
              {title}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="device-led" />
            <span className="tech-label text-[var(--foreground)]">PWR</span>
          </div>
        </div>

        <div className={cn("device-screen mt-6", tone === "dark" ? "device-screen-dark" : "")}>
          {scanlines ? <div aria-hidden="true" className="screen-scanlines" /> : null}
          <div className="relative z-[1]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="tech-label text-[rgba(224,229,236,0.7)]">Live Overview</div>
                <div className="mt-2 text-lg font-semibold text-white sm:text-xl">{subtitle}</div>
              </div>
              <div className="radar-sweep">
                <Radar className="h-8 w-8 text-[var(--accent)]" strokeWidth={1.8} />
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {stats.map((item) => (
                <ScreenMetric key={item.label} item={item} />
              ))}
            </div>

            <div className="mt-5 grid gap-3 lg:grid-cols-[0.62fr_0.38fr]">
              <div className="screen-slot">
                <div className="flex items-center justify-between gap-3">
                  <span className="tech-label text-[rgba(224,229,236,0.72)]">Process Chain</span>
                  <Workflow className="h-4 w-4 text-[var(--accent)]" strokeWidth={1.8} />
                </div>
                <div className="mt-4 flex items-center gap-3 text-[rgba(224,229,236,0.72)]">
                  <div className="connector-pipe flex-1" />
                  <span className="screen-node">PLAN</span>
                  <div className="connector-pipe flex-1" />
                  <span className="screen-node">BUILD</span>
                  <div className="connector-pipe flex-1" />
                  <span className="screen-node">DELIVER</span>
                </div>
              </div>

              <div className="screen-slot">
                <div className="flex items-center justify-between gap-3">
                  <span className="tech-label text-[rgba(224,229,236,0.72)]">Sync</span>
                  <LoaderCircle className="h-4 w-4 animate-spin text-[var(--accent)]" strokeWidth={1.8} />
                </div>
                <div className="mt-4 text-sm leading-7 text-[rgba(224,229,236,0.72)]">
                  数据、流程与交付节奏保持同频，不只停在 demo。
                </div>
              </div>
            </div>

            <div className="mt-5 screen-log">
              {logs.map((log) => (
                <div key={log} className="screen-log-row">
                  <span className="screen-log-dot" />
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
