import { Briefcase, CalendarRange, MapPin } from "lucide-react";
import { MotionDiv } from "../../components/motion-elements";
import Reveal from "../../components/reveal";
import SectionTitle from "../../components/section-title";
import { StaggerGroup, StaggerItem } from "../../components/stagger-group";
import { experience, experienceHighlights, experiencePlaybook } from "../../lib/site-data";

export const metadata = {
  title: "经历",
};

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <section className="py-10 sm:py-14">
        <Reveal>
          <SectionTitle
            icon={Briefcase}
            eyebrow="Experience"
            title="复杂工业系统里的交付经验，是我理解真实世界约束的起点。"
            description="在 ABB 的跨国智能产线项目中，我经历过高压现场、复杂协同与交付节点，这些经验让我在做 AI 与机器人系统时，更关注稳定性、可维护性与真实价值。"
          />
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-3">
          {experienceHighlights.map((item) => (
            <StaggerItem key={item.label}>
              <MotionDiv
                whileHover={{ y: -6 }}
                transition={{ duration: 0.22 }}
                className="surface rounded-3xl p-4"
              >
                <div className="mono-label text-slate-500">
                  {item.label}
                </div>
                <div className="mt-3 text-lg font-semibold text-slate-900">{item.value}</div>
              </MotionDiv>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <StaggerGroup className="mt-10 grid gap-4 lg:grid-cols-3">
          {experiencePlaybook.map((item) => (
            <StaggerItem key={item.title}>
              <MotionDiv
                whileHover={{ y: -6 }}
                transition={{ duration: 0.22 }}
                className="surface h-full rounded-[1.75rem] p-6"
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

        <div className="relative mt-12 pl-10 sm:pl-12">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-black/10 sm:left-5" />
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <div className="relative">
                <div className="absolute left-[-2.35rem] top-6 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-slate-900 sm:left-[-2.75rem]">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="surface rounded-[2rem] p-6 sm:p-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="title-font text-2xl font-semibold text-slate-900">
                        {item.company}
                      </h3>
                      <p className="mt-2 text-lg text-slate-600">{item.role}</p>
                    </div>
                    <div className="grid gap-2 text-sm text-slate-500">
                      <div className="inline-flex items-center gap-2">
                        <CalendarRange className="h-4 w-4 text-slate-500" />
                        {item.period}
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-slate-500" />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-black/10 bg-white p-4">
                    <div className="mono-label text-slate-500">
                      Scope
                    </div>
                    <div className="mt-3 grid gap-3">
                      {item.scope.map((scopeItem) => (
                        <div key={scopeItem} className="text-sm leading-7 text-slate-600">
                          {scopeItem}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-2xl border border-black/10 bg-white px-4 py-4 text-sm leading-7 text-slate-600"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-slate-600"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
