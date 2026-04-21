/**
 * 这个文件定义经历页，重点把 ABB 经历做成主时间轴和交付能力展示。
 * 相关模块：工业风标题、工业风面板、lib/site-data。
 */

import { Briefcase, CalendarDots, MapPin } from "@phosphor-icons/react/ssr";
import IndustrialPanel from "../../components/industrial/industrial-panel";
import SectionHeading from "../../components/industrial/section-heading";
import Reveal from "../../components/reveal";
import { StaggerGroup, StaggerItem } from "../../components/stagger-group";
import { experiencePage } from "../../lib/site-data";

export const metadata = {
  title: "经历",
};

// 渲染经历页，让工业交付经验以更完整的时间轴方式呈现出来。
export default function ExperiencePage() {
  return (
    <main className="page-shell pb-24">
      <section className="py-8">
        <Reveal>
          <SectionHeading
            icon={Briefcase}
            eyebrow={experiencePage.eyebrow}
            title={experiencePage.title}
            description={experiencePage.description}
            status={experiencePage.status}
          />
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-3">
          {experiencePage.highlights.map((item) => (
            <StaggerItem key={item.label}>
              <IndustrialPanel className="px-5 py-5" variant="floating" screws interactive>
                <div className="tech-label">{item.label}</div>
                <div className="mt-4 text-2xl font-semibold leading-tight text-[var(--foreground)]">
                  {item.value}
                </div>
              </IndustrialPanel>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="grid gap-6 py-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <IndustrialPanel className="h-full px-6 py-6 sm:px-8 sm:py-8" variant="dark" screws>
            <div className="tech-label text-[rgba(224,229,236,0.68)]">Field Playbook</div>
            <div className="title-font mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              这段经历最核心的价值，是我学会了如何在高压现场把事情做稳。
            </div>

            <div className="mt-8 grid gap-4">
              {experiencePage.playbook.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-white/10 bg-white/6 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="icon-housing h-12 w-12 bg-white/8 text-[var(--accent)] shadow-none">
                        <Icon className="h-5 w-5" weight="bold" />
                      </span>
                      <div className="title-font text-xl font-semibold text-white">{item.title}</div>
                    </div>
                    <div className="mt-4 text-sm leading-7 text-[rgba(224,229,236,0.78)] sm:text-base">
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </IndustrialPanel>
        </Reveal>

        <Reveal delay={0.08}>
          <IndustrialPanel className="relative px-6 py-6 sm:px-8 sm:py-8" screws vents>
            <div className="tech-label">Main Timeline</div>
            <div className="title-font mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
              ABB 是我理解复杂系统与真实约束的第一块底盘。
            </div>

            <div className="relative mt-8 pl-10 sm:pl-12">
              <div className="timeline-rail" aria-hidden="true" />

              {experiencePage.timeline.map((item) => (
                <div key={item.company} className="relative">
                  <span className="timeline-node absolute left-[-0.15rem] top-3" />

                  <div className="panel-shell rounded-[24px] px-5 py-5 sm:px-6 sm:py-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="title-font text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
                          {item.company}
                        </div>
                        <div className="mt-2 text-base text-[var(--muted)] sm:text-lg">{item.role}</div>
                      </div>

                      <div className="grid gap-2 text-sm text-[var(--muted)]">
                        <div className="inline-flex items-center gap-2">
                          <CalendarDots className="h-4 w-4 text-[var(--accent)]" weight="bold" />
                          {item.period}
                        </div>
                        <div className="inline-flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[var(--accent)]" weight="bold" />
                          {item.location}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 data-slot rounded-[20px] px-5 py-5">
                      <div className="tech-label">Scope</div>
                      <div className="mt-4 grid gap-3">
                        {item.scope.map((scopeItem) => (
                          <div key={scopeItem} className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                            {scopeItem}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="panel-shell rounded-[18px] px-4 py-4 text-sm leading-7 text-[var(--muted)] sm:text-base"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {item.projectList ? (
                      <div className="mt-6 data-slot rounded-[20px] px-5 py-5">
                        <div className="tech-label">Project Records</div>
                        <div className="mt-4 grid gap-3">
                          {item.projectList.map((project) => (
                            <div key={project} className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                              {project}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.keywords.map((keyword) => (
                        <span key={keyword} className="slot-chip">
                          {keyword}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[20px] border border-[rgba(233,79,95,0.18)] bg-[rgba(233,79,95,0.06)] px-5 py-5 text-sm leading-7 text-[var(--foreground)] sm:text-base">
                      {item.transition}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </IndustrialPanel>
        </Reveal>
      </section>

      <section className="py-8">
        <Reveal>
          <IndustrialPanel className="px-6 py-6 sm:px-8 sm:py-8" variant="dark" screws>
            <div className="tech-label text-[rgba(224,229,236,0.68)]">Why It Matters</div>
            <div className="title-font mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              {experiencePage.closeout.title}
            </div>
            <p className="mt-5 max-w-[60ch] text-base leading-8 text-[rgba(224,229,236,0.78)]">
              {experiencePage.closeout.description}
            </p>
          </IndustrialPanel>
        </Reveal>
      </section>
    </main>
  );
}
