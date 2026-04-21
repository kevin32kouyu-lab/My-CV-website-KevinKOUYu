/**
 * 这个文件定义首页，只展示公开简历中的个人基本资料和个人介绍。
 * 相关模块：SiteChrome、工业风基础组件、lib/site-data。
 */

import IndustrialPanel from "../components/industrial/industrial-panel";
import MechanicalButton from "../components/industrial/mechanical-button";
import StatusIndicator from "../components/industrial/status-indicator";
import Reveal from "../components/reveal";
import { contact, siteProfile } from "../lib/site-data";

// 渲染简洁首页，让招聘方快速获得基本资料和个人定位。
export default function Page() {
  return (
    <main className="page-shell pb-20">
      <section className="grid gap-6 py-8 md:py-10 lg:min-h-[calc(100dvh-12rem)] lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <Reveal className="min-w-0">
          <div className="max-w-[68ch]">
            <StatusIndicator state={siteProfile.status.state} label={siteProfile.status.label} />

            <div className="mt-8 tech-label">Resume Profile / Public Version</div>
            <h1 className="title-font mt-5 text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {siteProfile.name}
            </h1>
            <div className="mt-5 title-font text-xl font-semibold leading-snug tracking-[-0.025em] text-[var(--muted)] sm:text-2xl">
              {siteProfile.roleCn}
            </div>

            <p className="mt-7 max-w-[62ch] text-base leading-8 text-[var(--muted)] sm:text-lg">
              {siteProfile.summary}
            </p>

            <IndustrialPanel className="mt-8 px-5 py-5 sm:px-6 sm:py-6" variant="recessed">
              <div className="tech-label">{siteProfile.jobPreference.title}</div>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                {siteProfile.jobPreference.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {siteProfile.jobPreference.priorities.map((item, index) => (
                  <span key={item} className="slot-chip slot-chip-muted">
                    {`${index + 1}. ${item}`}
                  </span>
                ))}
              </div>
            </IndustrialPanel>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MechanicalButton href={`mailto:${contact.email}`} variant="primary" iconName="mail">
                联系我
              </MechanicalButton>
              <MechanicalButton href="/projects" variant="secondary" iconName="arrowRight">
                查看项目
              </MechanicalButton>
            </div>
          </div>
        </Reveal>

        <Reveal from="right" delay={0.08} className="min-w-0">
          <IndustrialPanel className="px-5 py-5 sm:px-7 sm:py-7" screws vents>
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="tech-label">Basic Profile</div>
                <div className="title-font mt-2 text-2xl font-semibold tracking-[-0.035em] text-[var(--foreground)] sm:text-3xl">
                  个人基本资料
                </div>
              </div>
              <StatusIndicator state="online" compact />
            </div>

            <div className="mt-7 divide-y divide-[rgba(74,85,104,0.14)]">
              {siteProfile.basicProfile.map((item) => {
                const content = (
                  <>
                    <span className="tech-label shrink-0 text-[0.7rem]">{item.label}</span>
                    <span className="text-right text-sm font-semibold leading-7 text-[var(--foreground)] sm:text-base">
                      {item.value}
                    </span>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="grid grid-cols-[6.5rem_1fr] items-center gap-4 py-4 transition-colors hover:text-[var(--accent)]"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="grid grid-cols-[6.5rem_1fr] items-center gap-4 py-4">
                    {content}
                  </div>
                );
              })}
            </div>
          </IndustrialPanel>
        </Reveal>
      </section>
    </main>
  );
}
