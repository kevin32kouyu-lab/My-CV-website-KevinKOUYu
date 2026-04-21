/**
 * 这个文件定义关于页，重点展示背景、能力结构、方法论和角色适配度。
 * 相关模块：工业风标题、工业风面板、lib/site-data。
 */

import { GraduationCap, Sparkles, UserRound } from "lucide-react";
import IndustrialPanel from "../../components/industrial/industrial-panel";
import SectionHeading from "../../components/industrial/section-heading";
import Reveal from "../../components/reveal";
import { StaggerGroup, StaggerItem } from "../../components/stagger-group";
import { aboutPage } from "../../lib/site-data";
import { cn } from "../../lib/cn";

export const metadata = {
  title: "关于我",
};

// 渲染关于页，把背景、能力和工作方式放到一套连续的系统叙事里。
export default function AboutPage() {
  return (
    <main className="page-shell pb-24">
      <section className="py-8">
        <Reveal>
          <SectionHeading
            icon={UserRound}
            eyebrow={aboutPage.eyebrow}
            title={aboutPage.title}
            description={aboutPage.description}
            status={aboutPage.status}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <Reveal>
            <IndustrialPanel className="h-full px-6 py-6 sm:px-8 sm:py-8" screws vents>
              <div className="tech-label">{aboutPage.background.label}</div>
              <div className="title-font mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
                {aboutPage.background.title}
              </div>

              <div className="mt-8 grid gap-4">
                {aboutPage.background.paragraphs.map((paragraph) => (
                  <div key={paragraph} className="data-slot rounded-[20px] px-5 py-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {paragraph}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[20px] border border-[rgba(255,71,87,0.16)] bg-[rgba(255,71,87,0.05)] px-5 py-5">
                <div className="tech-label">{aboutPage.status.label}</div>
                <div className="mt-3 text-sm leading-7 text-[var(--foreground)] sm:text-base">
                  当前求职城市优先级为深圳、上海、香港，优先关注 AI 产品、Agent 系统和机器人相关岗位。
                </div>
              </div>
            </IndustrialPanel>
          </Reveal>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {aboutPage.skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <StaggerItem key={group.title} className={index === 0 ? "sm:col-span-2" : ""}>
                  <IndustrialPanel
                    className="h-full px-5 py-5 sm:px-6 sm:py-6"
                    variant={index === 2 ? "dark" : "floating"}
                    interactive
                    screws={index === 0}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn("icon-housing h-12 w-12", index === 2 ? "bg-white/8 text-white shadow-none" : "text-[var(--accent)]")}>
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <div>
                        <div className={cn("tech-label", index === 2 ? "text-[rgba(224,229,236,0.7)]" : "")}>Skill Module</div>
                        <div className={cn("title-font text-xl font-semibold", index === 2 ? "text-white" : "text-[var(--foreground)]")}>
                          {group.title}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className={cn(
                            "slot-chip",
                            index === 2 ? "bg-white/8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" : "",
                          )}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </IndustrialPanel>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-8">
        <Reveal>
          <IndustrialPanel className="px-6 py-6 sm:px-8 sm:py-8" screws>
            <div className="flex items-center gap-3">
              <span className="icon-housing h-12 w-12 text-[var(--accent)]">
                <Sparkles className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <div className="tech-label">{aboutPage.approach.label}</div>
                <div className="title-font mt-2 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
                  {aboutPage.approach.title}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
              {aboutPage.approach.steps.map((item, index) => (
                <div key={item.step} className={cn(index === 1 ? "lg:col-start-3" : "", index === 2 ? "lg:col-start-5" : "")}>
                  <div className="data-slot rounded-[22px] px-5 py-5 sm:px-6 sm:py-6">
                    <div className="tech-label">{`Step ${item.step}`}</div>
                    <div className="title-font mt-3 text-xl font-semibold text-[var(--foreground)]">
                      {item.title}
                    </div>
                    <div className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {item.description}
                    </div>
                  </div>
                  {index < aboutPage.approach.steps.length - 1 ? (
                    <div className="hidden lg:flex lg:items-center lg:justify-center">
                      <div className="connector-pipe mt-4 w-full" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </IndustrialPanel>
        </Reveal>
      </section>

      <section className="grid gap-6 py-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <IndustrialPanel className="h-full px-6 py-6 sm:px-8 sm:py-8" screws>
            <div className="flex items-center gap-3">
              <span className="icon-housing h-12 w-12 text-[var(--accent)]">
                <GraduationCap className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <div className="tech-label">Education Rack</div>
                <div className="title-font mt-2 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
                  工程背景让我更重视落地，学术训练让我更重视系统。
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {aboutPage.education.map((item, index) => (
                <div key={item.school} className="panel-shell rounded-[22px] px-5 py-5 sm:px-6 sm:py-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="title-font text-2xl font-semibold text-[var(--foreground)]">
                        {item.school}
                      </div>
                      <div className="mt-2 text-base text-[var(--muted)]">{item.degree}</div>
                    </div>
                    <span className="slot-chip slot-chip-muted">{`0${index + 1}`}</span>
                  </div>
                  <div className="mt-5 tech-label">{item.period}</div>
                  <div className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </IndustrialPanel>
        </Reveal>

        <Reveal delay={0.08}>
          <IndustrialPanel className="h-full px-6 py-6 sm:px-8 sm:py-8" variant="dark" screws>
            <div className="tech-label text-[rgba(224,229,236,0.68)]">Role Fit</div>
            <div className="title-font mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              我比较适合站在复杂项目的中间位置。
            </div>
            <p className="mt-5 max-w-[56ch] text-base leading-8 text-[rgba(224,229,236,0.78)]">
              如果一个项目需要同时理解产品价值、技术实现和交付现实，那通常就是我能发挥最大作用的地方。
            </p>

            <div className="mt-8 grid gap-4">
              {aboutPage.roleFit.map((item) => (
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
