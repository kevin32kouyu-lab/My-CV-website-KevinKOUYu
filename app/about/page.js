import { GraduationCap, Sparkles, UserRound } from "lucide-react";
import { MotionDiv } from "../../components/motion-elements";
import Reveal from "../../components/reveal";
import SectionTitle from "../../components/section-title";
import { StaggerGroup, StaggerItem } from "../../components/stagger-group";
import { aboutApproach, aboutRoleFit, education, skillGroups } from "../../lib/site-data";

export const metadata = {
  title: "关于我",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <section className="py-10 sm:py-14">
        <Reveal>
          <SectionTitle
            icon={UserRound}
            eyebrow="About"
            title="我擅长把复杂系统拆开，再把价值重新拼起来。"
            description="拥有 2 年半 ABB 复杂自动化系统集成经验，现为香港中文大学机器人学硕士在读。我关注的不只是技术本身，更关注系统如何稳定落地、如何服务真实场景。"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="surface rounded-[2rem] p-6 sm:p-8">
              <div className="flex items-center gap-3 text-slate-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white text-slate-900">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="title-font text-lg font-semibold">背景简介</div>
                  <div className="mt-1 text-sm text-slate-500">工业现场经验 + 机器人学训练</div>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                <p>
                  在 ABB 的跨国智能产线项目中，我长期处理高复杂度、多角色、多系统协同问题，对工程约束、交付节奏与现场闭环有深入理解。
                </p>
                <p>
                  进入香港中文大学机器人学硕士后，我把重心推进到 Agent 工作流、机器人控制、ROS 与
                  IoT 系统，持续探索从算法到物理世界的完整链路。
                </p>
                <p>
                  我习惯从第一性原理看问题，优先抓住系统的核心约束，再用简单、可维护的方式把方案做实。
                </p>
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <StaggerItem key={group.title}>
                  <MotionDiv
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="surface h-full rounded-[1.75rem] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-slate-900">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="title-font text-base font-semibold text-slate-900">
                        {group.title}
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className={`rounded-full border px-3 py-2 text-sm ${group.badgeClass}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </MotionDiv>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-6">
        <Reveal>
          <SectionTitle
            icon={Sparkles}
            eyebrow="Approach"
            title="我的工作方式，更像在搭系统，而不是堆功能。"
            description="我倾向于先把问题边界、系统结构和价值路径想清楚，再落到具体实现，这样方案更稳，也更容易被团队长期接住。"
          />
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-4 lg:grid-cols-3">
          {aboutApproach.map((item) => (
            <StaggerItem key={item.title}>
              <MotionDiv
                whileHover={{ y: -6 }}
                transition={{ duration: 0.22 }}
                className="glass-panel glow-card h-full rounded-[1.75rem] border border-white/8 p-6"
              >
                <div className="mono-label text-slate-500">
                  {item.title}
                </div>
                <div className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.description}
                </div>
              </MotionDiv>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="py-6">
        <Reveal>
          <SectionTitle
            icon={GraduationCap}
            eyebrow="Education"
            title="工程背景让我更重视落地，学术训练让我更重视系统。"
            description="教育经历是我的第二条主线，它把工业交付经验进一步升级成了更完整的系统化理解。"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.08}>
              <div className="surface rounded-[2rem] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="title-font text-2xl font-semibold text-slate-900">
                      {item.school}
                    </h3>
                    <p className="mt-2 text-base text-slate-600">{item.degree}</p>
                  </div>
                  <div className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-slate-500">
                    0{index + 1}
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-600">
                  {item.period}
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-6">
        <Reveal>
          <SectionTitle
            icon={UserRound}
            eyebrow="Fit"
            title="我比较适合站在复杂项目的中间位置。"
            description="如果一个项目需要同时理解产品价值、技术实现和交付现实，那通常就是我能发挥最大作用的地方。"
          />
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-4 lg:grid-cols-3">
          {aboutRoleFit.map((item) => (
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
