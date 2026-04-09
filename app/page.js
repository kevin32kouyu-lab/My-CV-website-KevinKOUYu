import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { MotionDiv, MotionSpan } from "../components/motion-elements";
import Reveal from "../components/reveal";
import { StaggerGroup, StaggerItem } from "../components/stagger-group";
import {
  coreDirections,
  homeFocusTracks,
  homeHighlights,
  homeNarratives,
} from "../lib/site-data";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <section className="grid min-h-[calc(100vh-7rem)] items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <Reveal>
            <div className="mono-label text-slate-500">
              AI · Robotics · Product Delivery
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="title-font mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
              寇宇 <span className="text-gradient">(Kevin)</span>
              <span className="mt-4 block text-2xl font-medium text-slate-700 sm:text-3xl lg:text-4xl">
                AI 产品经理 / Agent 开发者 / 机器人工程师
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              致力于在 AI Agent 与具身智能场景中，把算法能力、工程系统与真实业务价值连接起来。
              我关注的不只是把东西做出来，而是让它在真实环境里持续可用、持续产生价值。
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MotionDiv whileHover={{ y: -2 }} transition={{ duration: 0.18 }}>
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  查看项目
                  <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
                </Link>
              </MotionDiv>
              <MotionDiv whileHover={{ y: -2 }} transition={{ duration: 0.18 }}>
                <a
                  href="mailto:ky2014lucky@163.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-black/20 hover:text-slate-900"
                >
                  联系我
                  <Mail className="h-4 w-4 transition duration-200 group-hover:-translate-y-0.5" />
                </a>
              </MotionDiv>
            </div>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-3">
            {homeHighlights.map((item) => (
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
        </div>

        <Reveal from="scale" delay={0.18}>
          <div className="surface rounded-[2rem] p-6 sm:p-8">
            <div className="mono-label text-slate-500">
              System Snapshot
            </div>
            <div className="title-font mt-4 text-2xl font-semibold leading-tight text-slate-900">
              从工业交付走向 Agent 与 Robotics 的系统构建者
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              我把工业现场打磨出来的问题意识、交付意识和系统意识，延伸到了 AI Agent
              与具身智能领域，希望做出更接近真实世界的产品与系统。
            </p>

            <div className="mt-8 space-y-4">
              {homeFocusTracks.map((item, index) => (
                <MotionDiv
                  key={item.label}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.22 + index * 0.08, duration: 0.55 }}
                  className="surface-soft rounded-[1.5rem] p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
                    <div className="mono-label text-slate-500">
                      {item.label}
                    </div>
                  </div>
                  <div className="mt-3 text-sm leading-7 text-slate-600">{item.description}</div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="space-y-6">
        <StaggerGroup className="grid gap-4 lg:grid-cols-3">
          {homeNarratives.map((item) => (
            <StaggerItem key={item.title}>
              <MotionDiv
                whileHover={{ y: -6 }}
                transition={{ duration: 0.22 }}
                className="surface h-full rounded-[1.75rem] p-6"
              >
                <div className="mono-label text-slate-500">
                  {item.title}
                </div>
                <div className="mt-4 text-base leading-7 text-slate-600">{item.description}</div>
              </MotionDiv>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.12}>
          <section className="surface rounded-[2rem] p-6 sm:p-8">
            <div className="mono-label text-slate-500">
              Current Focus
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {coreDirections.map((item, index) => (
                <MotionSpan
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                  whileHover={{ y: -2 }}
                  className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-slate-600"
                >
                  {item}
                </MotionSpan>
              ))}
            </div>
          </section>
        </Reveal>
      </section>
    </main>
  );
}
