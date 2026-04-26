/**
 * 这个文件定义项目页，重点把每个项目做成独立的系统模块而不是普通卡片。
 * 相关模块：工业风标题、工业风面板、lib/site-data。
 */

import { FolderOpen, Wrench } from "@phosphor-icons/react/ssr";
import IndustrialPanel from "../../components/industrial/industrial-panel";
import MechanicalButton from "../../components/industrial/mechanical-button";
import SectionHeading from "../../components/industrial/section-heading";
import StatusIndicator from "../../components/industrial/status-indicator";
import Reveal from "../../components/reveal";
import { projectsPage } from "../../lib/site-data";
import { cn } from "../../lib/cn";

export const metadata = {
  title: "项目",
};

// 渲染项目页，让每个案例都像一块独立的设备模块被清楚呈现。
export default function ProjectsPage() {
  return (
    <main className="page-shell pb-24">
      <section className="py-8">
        <Reveal>
          <SectionHeading
            icon={FolderOpen}
            eyebrow={projectsPage.eyebrow}
            title={projectsPage.title}
            description={projectsPage.description}
            status={projectsPage.status}
          />
        </Reveal>

        <div className="mt-12 space-y-8">
          {projectsPage.projects.map((project, index) => {
            const mainOrder = index % 2 === 0 ? "lg:order-1" : "lg:order-2";
            const sideOrder = index % 2 === 0 ? "lg:order-2" : "lg:order-1";

            return (
              <Reveal key={project.title} delay={index * 0.06}>
                <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
                  <IndustrialPanel
                    className={cn(mainOrder, "px-6 py-6 sm:px-8 sm:py-8")}
                    screws
                    vents
                    interactive
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="tech-label">{project.systemId}</div>
                        <h2 className="title-font mt-4 text-3xl font-semibold leading-tight tracking-normal text-[var(--foreground)] sm:text-4xl">
                          {project.title}
                        </h2>
                        <p className="mt-4 max-w-[58ch] text-base leading-8 text-[var(--muted)]">
                          {project.subtitle}
                        </p>
                        <div className="mt-4 inline-flex rounded-full bg-[rgba(233,79,95,0.08)] px-4 py-2 text-sm font-semibold text-[var(--foreground)]">
                          {project.period}
                        </div>
                      </div>
                      <StatusIndicator state="active" label="项目案例" compact />
                    </div>

                    <div className="mt-8 grid gap-4">
                      {project.points.map((point) => (
                        <div key={point} className="data-slot rounded-[20px] px-5 py-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
                          {point}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <div className="tech-label">关键词</div>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="slot-chip">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.launchUrl ? (
                      <div className="mt-8">
                        <MechanicalButton
                          href={project.launchUrl}
                          variant="primary"
                          iconName="arrowRight"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.launchLabel ?? "访问项目"}
                        </MechanicalButton>
                      </div>
                    ) : null}
                  </IndustrialPanel>

                  <div className={cn(sideOrder, "grid gap-6")}>
                    {project.proof ? (
                      <IndustrialPanel as="section" variant="floating" className="px-6 py-6 sm:px-7 sm:py-7" screws>
                        <div className="tech-label">{project.proof.label}</div>
                        <div className="title-font mt-4 text-2xl font-semibold leading-tight tracking-normal text-[var(--foreground)]">
                          {project.proof.title}
                        </div>

                        <div className="mt-6 grid gap-3">
                          {project.proof.items.map((item) => (
                            <div key={item.label} className="data-slot rounded-[18px] px-4 py-4">
                              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                                <div className="tech-label">{item.label}</div>
                                <div className="text-sm font-semibold text-[var(--foreground)] sm:text-right">
                                  {item.value}
                                </div>
                              </div>
                              <div className="mt-3 text-sm leading-7 text-[var(--muted)]">
                                {item.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </IndustrialPanel>
                    ) : null}

                    <IndustrialPanel as="section" variant="recessed" className="px-6 py-6 sm:px-7 sm:py-7">
                      <div className="tech-label">角色与影响</div>
                      <div className="mt-6 grid gap-4">
                        <div className="panel-shell rounded-[20px] px-5 py-5">
                          <div className="tech-label">角色</div>
                          <div className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                            {project.role}
                          </div>
                        </div>
                        <div className="panel-shell rounded-[20px] px-5 py-5">
                          <div className="tech-label">影响</div>
                          <div className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                            {project.impact}
                          </div>
                        </div>
                      </div>
                    </IndustrialPanel>

                    <IndustrialPanel as="section" variant="dark" className="blueprint-grid px-6 py-6 sm:px-7 sm:py-7">
                      <div className="flex items-center justify-between gap-3">
                        <div className="tech-label text-[rgba(224,229,236,0.68)]">系统结构</div>
                        <Wrench className="h-4 w-4 text-[var(--accent)]" weight="bold" />
                      </div>

                      <div className="mt-6 grid gap-3">
                        {project.architecture.map((item, itemIndex) => (
                          <div key={item} className="flex items-center gap-3">
                            <span className="system-node min-w-[4.25rem]">{`0${itemIndex + 1}`}</span>
                            <div className="connector-pipe flex-1" />
                            <div className="rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-[rgba(224,229,236,0.8)]">
                              {item}
                            </div>
                          </div>
                        ))}
                      </div>
                    </IndustrialPanel>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-8">
        <Reveal>
          <IndustrialPanel className="px-6 py-6 sm:px-8 sm:py-8" variant="dark" screws>
            <div className="tech-label text-[rgba(224,229,236,0.68)]">能力支撑</div>
            <div className="mt-4 title-font text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              比起单点功能，我更喜欢能牵动整条链路的问题。
            </div>
            <p className="mt-5 max-w-[62ch] text-base leading-8 text-[rgba(224,229,236,0.78)]">
              我对项目的兴趣，通常来自它是否同时涉及价值判断、系统设计、实现复杂度与真实世界反馈。
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {projectsPage.themes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-white/10 bg-white/6 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  <div className="title-font text-xl font-semibold text-white">{item.title}</div>
                  <div className="mt-4 text-sm leading-7 text-[rgba(224,229,236,0.78)] sm:text-base">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </IndustrialPanel>
        </Reveal>
      </section>
    </main>
  );
}
