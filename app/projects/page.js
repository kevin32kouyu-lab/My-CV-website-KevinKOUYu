import { Bot, FolderOpen } from "lucide-react";
import { MotionArticle, MotionDiv } from "../../components/motion-elements";
import Reveal from "../../components/reveal";
import SectionTitle from "../../components/section-title";
import { StaggerGroup, StaggerItem } from "../../components/stagger-group";
import { projectThemes, projects } from "../../lib/site-data";

export const metadata = {
  title: "项目",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <section className="py-10 sm:py-14">
        <Reveal>
          <SectionTitle
            icon={FolderOpen}
            eyebrow="Projects"
            title="我最想长期深挖的方向，是 Agent 与 Robotics 的交叉地带。"
            description="这些项目覆盖智能体工作流、机器人控制系统与 IoT 软硬件联调，体现的是从算法、工程到系统落地的完整能力。"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-slate-600">
            <Bot className="h-4 w-4" />
            重点关注 AI Agent、机器人控制与工程化交付
          </div>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <StaggerItem key={project.title}>
                <MotionArticle
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="surface h-full rounded-[2rem] p-6 sm:p-7"
                >
                  <div className="hairline absolute inset-x-6 top-6" />
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white text-slate-900">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-slate-500">
                      Project 0{index + 1}
                    </span>
                  </div>
                  <h3 className="title-font mt-6 text-2xl font-semibold leading-tight text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{project.subtitle}</p>
                  <div className="mt-6 grid gap-3">
                    <div className="rounded-2xl border border-black/10 bg-white px-4 py-4">
                      <div className="mono-label text-slate-500">
                        Role
                      </div>
                      <div className="mt-2 text-sm leading-7 text-slate-600">{project.role}</div>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-white px-4 py-4">
                      <div className="mono-label text-slate-500">
                        Impact
                      </div>
                      <div className="mt-2 text-sm leading-7 text-slate-700">{project.impact}</div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    {project.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-black/10 bg-white px-4 py-4 text-sm leading-7 text-slate-600"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <div className="mono-label text-slate-500">
                      Architecture
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.architecture.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-slate-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </MotionArticle>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      <section className="py-6">
        <Reveal>
          <SectionTitle
            icon={FolderOpen}
            eyebrow="Themes"
            title="比起单点功能，我更喜欢能牵动整条链路的问题。"
            description="我对项目的兴趣，通常来自它是否同时涉及价值判断、系统设计、实现复杂度与真实世界反馈。"
          />
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-4 lg:grid-cols-3">
          {projectThemes.map((item) => (
            <StaggerItem key={item.title}>
              <MotionDiv
                whileHover={{ y: -6 }}
                transition={{ duration: 0.22 }}
                className="surface h-full rounded-[1.75rem] p-6"
              >
                <div className="title-font text-lg font-semibold text-slate-900">{item.title}</div>
                <div className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.description}
                </div>
              </MotionDiv>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </main>
  );
}
