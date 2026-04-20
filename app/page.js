/**
 * 这个文件定义首页，重点突出个人品牌、设备主视觉和当前关注方向。
 * 相关模块：SiteChrome、工业风基础组件、lib/site-data。
 */

import DeviceScreen from "../components/industrial/device-screen";
import IndustrialPanel from "../components/industrial/industrial-panel";
import MechanicalButton from "../components/industrial/mechanical-button";
import StatusIndicator from "../components/industrial/status-indicator";
import Reveal from "../components/reveal";
import { StaggerGroup, StaggerItem } from "../components/stagger-group";
import { contact, homePage, siteProfile } from "../lib/site-data";

// 渲染首页，让访问者先记住“你是谁、做什么、为什么值得继续看”。
export default function Page() {
  return (
    <main className="page-shell pb-24">
      <section className="grid gap-8 py-8 lg:min-h-[calc(100dvh-12rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="min-w-0">
          <Reveal>
            <StatusIndicator state={siteProfile.status.state} label={siteProfile.status.label} />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-6 tech-label">{homePage.hero.eyebrow}</div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="title-font mt-6 text-5xl font-bold leading-[0.92] tracking-[-0.05em] text-[var(--foreground)] drop-shadow-[0_1px_0_#ffffff] sm:text-6xl lg:text-7xl">
              {siteProfile.name}
              <span className="mt-4 block text-2xl font-semibold leading-tight tracking-[-0.03em] text-[var(--muted)] sm:text-3xl lg:text-4xl">
                {siteProfile.roleCn}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[62ch] text-base leading-8 text-[var(--muted)] sm:text-lg">
              {siteProfile.tagline} {siteProfile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MechanicalButton href="/projects" variant="primary" iconName="arrowRight">
                查看项目
              </MechanicalButton>
              <MechanicalButton href={`mailto:${contact.email}`} variant="secondary" iconName="mail">
                联系我
              </MechanicalButton>
            </div>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-3">
            {homePage.metrics.map((item) => (
              <StaggerItem key={item.label}>
                <IndustrialPanel className="px-5 py-5" variant="floating" screws interactive>
                  <div className="tech-label">{item.label}</div>
                  <div className="metric-value mt-4">{item.value}</div>
                  <div className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.detail}</div>
                </IndustrialPanel>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal from="scale" delay={0.18} className="min-w-0">
          <DeviceScreen
            title={homePage.hero.device.title}
            subtitle={homePage.hero.device.subtitle}
            stats={homePage.metrics}
            logs={homePage.hero.device.logs}
          />
        </Reveal>
      </section>

      <section className="grid gap-6 py-8 lg:grid-cols-[1.03fr_0.97fr]">
        <Reveal className="min-w-0">
          <IndustrialPanel className="h-full px-6 py-6 sm:px-8 sm:py-8" screws vents>
            <div className="tech-label">{homePage.narratives[0].label}</div>
            <div className="title-font mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
              {homePage.narratives[0].title}
            </div>
            <p className="mt-5 max-w-[60ch] text-base leading-8 text-[var(--muted)]">
              {homePage.narratives[0].description}
            </p>

            <div className="mt-8 grid gap-4">
              {homePage.narratives.slice(1).map((item) => (
                <div key={item.title} className="data-slot rounded-[20px] p-5 sm:p-6">
                  <div className="tech-label">{item.label}</div>
                  <div className="mt-3 title-font text-xl font-semibold text-[var(--foreground)]">
                    {item.title}
                  </div>
                  <div className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </IndustrialPanel>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0">
          <IndustrialPanel className="h-full px-6 py-6 sm:px-8 sm:py-8" variant="dark" screws>
            <div className="tech-label text-[rgba(224,229,236,0.7)]">Current Focus</div>
            <div className="mt-4 title-font text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
              现在重点做的，不是单点功能，而是一整条可运行链路。
            </div>
            <p className="mt-5 max-w-[58ch] text-base leading-8 text-[rgba(224,229,236,0.76)]">
              从模型能力、控制链路到工程交付，我更关注系统是否真的能跑起来、稳下来、被团队接住。
            </p>

            <div className="mt-8 grid gap-4">
              {homePage.focusTracks.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-white/10 bg-white/6 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="tech-label text-[rgba(224,229,236,0.68)]">{item.label}</div>
                    <StatusIndicator state={item.state} label={item.state === "warning" ? "Priority Track" : "Live Track"} compact />
                  </div>
                  <div className="mt-4 text-sm leading-7 text-[rgba(224,229,236,0.8)] sm:text-base">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="tech-label text-[rgba(224,229,236,0.68)]">Control Tags</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {homePage.directions.map((item) => (
                  <span key={item} className="slot-chip bg-white/8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </IndustrialPanel>
        </Reveal>
      </section>
    </main>
  );
}
