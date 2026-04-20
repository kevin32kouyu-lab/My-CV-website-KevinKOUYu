/**
 * 这个文件集中管理站点内容数据，避免页面里直接写死展示结构。
 * 相关模块：site-chrome、首页、项目页、关于页、经历页。
 */

import { Bot, Briefcase, Code2, Cpu, Gauge, Sparkles, Workflow } from "lucide-react";

export const navItems = [
  { label: "首页", href: "/" },
  { label: "项目", href: "/projects" },
  { label: "关于我", href: "/about" },
  { label: "经历", href: "/experience" },
];

export const contact = {
  email: "ky2014lucky@163.com",
  phone: "18375833301",
};

export const siteProfile = {
  name: "寇宇 Kevin",
  shortName: "Kevin Kou",
  roleCn: "AI 产品经理 / Agent 开发者 / 机器人工程师",
  roleEn: "AI PM · Agent Builder · Robotics Engineer",
  tagline: "把 AI Agent、机器人控制与真实业务价值接到同一条链路上。",
  summary:
    "致力于在 AI Agent 与具身智能场景里，把算法能力、工程系统与真实业务价值连接起来。我关注的不只是把东西做出来，而是让它在真实环境里持续可用、持续产生价值。",
  status: {
    state: "online",
    label: "System Operational",
  },
  location: "Hong Kong · Shanghai",
  footerTitle: "让系统从想法变成稳定可用的现实",
  footerDescription:
    "如果你在找一个能同时理解产品价值、技术实现和交付现实的人，我们可以聊聊。",
};

export const homePage = {
  hero: {
    eyebrow: "Industrial Profile / Hong Kong · Shanghai",
    device: {
      title: "Field-to-Agent Deck",
      subtitle: "From delivery logic to embodied systems",
      logs: [
        "工业现场训练出来的问题意识，继续延伸到 Agent 与机器人系统。",
        "关注价值链路是否成立，也关注系统是否能被团队长期使用。",
        "习惯在复杂约束里推进闭环，而不是只停在概念验证。",
      ],
    },
  },
  metrics: [
    {
      label: "Field Delivery",
      value: "2.5Y",
      detail: "ABB 复杂交付",
      icon: "activity",
    },
    {
      label: "Master Track",
      value: "CUHK",
      detail: "Robotics 硕士在读",
      icon: "radar",
    },
    {
      label: "System Focus",
      value: "A + R",
      detail: "Agent / Robotics",
      icon: "workflow",
    },
  ],
  narratives: [
    {
      label: "System Position",
      title: "从工业交付走向 Agent 与 Robotics 的系统构建者",
      description:
        "我把工业现场打磨出来的问题意识、交付意识和系统意识，延伸到了 AI Agent 与具身智能领域，希望做出更接近真实世界的产品与系统。",
    },
    {
      label: "What I Build",
      title: "不是只做一个功能，而是把输入、决策、执行和反馈接成闭环。",
      description:
        "我更关注一套系统是否可调用、可观察、可复盘，也关注它在真实业务与物理环境里能不能长期工作。",
    },
    {
      label: "How I Work",
      title: "先抓核心约束，再推进成可交付的系统。",
      description:
        "习惯先判断目标、限制和关键主因，再把复杂方案收敛成团队能接住、能继续迭代的实现方式。",
    },
  ],
  focusTracks: [
    {
      label: "AI Agent",
      state: "online",
      description: "把模型能力做成工具可调度、流程可观察、结果可复盘的工作流。",
    },
    {
      label: "Embodied AI",
      state: "active",
      description: "围绕机器人控制与物理反馈，构建更贴近真实世界约束的系统理解。",
    },
    {
      label: "Delivery",
      state: "warning",
      description: "用工业现场训练出来的交付意识，确保系统从设计走向真正可用。",
    },
  ],
  directions: [
    "LLM Agent Workflow",
    "Embodied AI",
    "机器人控制系统",
    "ROS2 / IoT",
    "工程化交付",
  ],
};

export const projectsPage = {
  eyebrow: "Project Console",
  title: "我最想长期深挖的方向，是 Agent 与 Robotics 的交叉地带。",
  description:
    "这些项目覆盖智能体工作流、机器人控制系统与 IoT 软硬件联调，体现的是从算法、工程到系统落地的完整能力。",
  status: {
    state: "active",
    label: "3 Systems Verified",
  },
  projects: [
    {
      systemId: "System 01",
      title: "Financial Agent",
      subtitle: "基于微服务架构的 GenAI 智能分析系统",
      role: "独立设计并实现核心闭环工作流",
      impact: "降低复杂查询链路延迟，提升模型调用外部数据的稳定性与效率。",
      architecture: ["LLM Planner", "Tool API", "Data Fetcher", "FastAPI Service"],
      tags: ["LLM", "Agent Workflow", "FastAPI", "Python", "Microservices"],
      points: [
        "独立构建基于大语言模型的闭环智能体工作流，大幅降低复杂查询场景下的系统响应延迟。",
        "基于 Python 开发自动化抓取，并使用 FastAPI 封装标准工具 API，实现模型对外部数据源的高效调用。",
      ],
    },
    {
      systemId: "System 02",
      title: "BRUCE 双足机器人运动控制系统",
      subtitle: "底层控制链路修复与动态平衡优化",
      role: "聚焦底层控制链路与动态平衡控制实现",
      impact: "将控制频率从 20Hz 提升至 100Hz，显著改善系统实时性与稳定性。",
      architecture: ["State Machine", "IMU Feedback", "PD Controller", "High-Frequency Loop"],
      tags: ["IMU", "PD 控制", "闭环控制", "状态机", "100Hz"],
      points: [
        "修复底层状态机通信断层，将控制响应频率从 20Hz 提升至 100Hz。",
        "基于 IMU 数据从零开发底层 PD 闭环控制器，实现高动态自适应平衡控制。",
      ],
    },
    {
      systemId: "System 03",
      title: "ENGG5402 ROS 与 ESP32 智能水族箱",
      subtitle: "机器人控制流与 IoT 生态系统联调",
      role: "独立搭建控制链路与 IoT 生态系统",
      impact: "完成从控制流设计到硬件联调的完整闭环，体现系统集成与跨域协作能力。",
      architecture: ["ROS Nodes", "Sensor Control", "ESP32", "IoT Automation"],
      tags: ["ROS", "ESP32", "IoT", "控制流", "软硬件联调"],
      points: [
        "完成基于 ROS 架构的机器人控制流设计，梳理模块通信与执行链路。",
        "独立搭建基于 ESP32 微控制器的 IoT 智能生态系统，并完成软硬件系统联调。",
      ],
    },
  ],
  themes: [
    {
      title: "智能体系统",
      description: "关注模型如何从一次回答升级为持续可用、可组合、可调度的系统能力。",
    },
    {
      title: "机器人控制",
      description: "关注控制链路、反馈闭环与实时性，理解算法落到物理世界后的真实约束。",
    },
    {
      title: "系统集成",
      description: "关注软件、硬件、接口与交付流程如何在复杂场景中形成稳定协同。",
    },
  ],
};

export const aboutPage = {
  eyebrow: "About Panel",
  title: "我擅长把复杂系统拆开，再把价值重新拼起来。",
  description:
    "拥有 2 年半 ABB 复杂自动化系统集成经验，现为香港中文大学机器人学硕士在读。我关注的不只是技术本身，更关注系统如何稳定落地、如何服务真实场景。",
  status: {
    state: "online",
    label: "Cross-Domain Builder",
  },
  background: {
    label: "Background Panel",
    title: "工业现场经验 + 机器人学训练，让我更自然地站在系统中间位置。",
    paragraphs: [
      "在 ABB 的跨国智能产线项目中，我长期处理高复杂度、多角色、多系统协同问题，对工程约束、交付节奏与现场闭环有深入理解。",
      "进入香港中文大学机器人学硕士后，我把重心推进到 Agent 工作流、机器人控制、ROS 与 IoT 系统，持续探索从算法到物理世界的完整链路。",
      "我习惯从第一性原理看问题，优先抓住系统的核心约束，再用简单、可维护的方式把方案做实。",
    ],
  },
  skillGroups: [
    {
      title: "AI 与算法",
      icon: Bot,
      items: ["LLM", "Agentic Workflow", "RAG", "Prompt Engineering", "Python", "FastAPI"],
    },
    {
      title: "机器人与硬件",
      icon: Cpu,
      items: ["ROS2", "闭环控制系统", "ESP32 IoT 开发", "运动学"],
    },
    {
      title: "工程与设计",
      icon: Code2,
      items: ["机械自动化设计", "SolidWorks", "Catia", "跨国敏捷交付"],
    },
  ],
  approach: {
    label: "Method Flow",
    title: "我的工作方式，更像在搭一台能持续运转的系统。",
    steps: [
      {
        step: "01",
        title: "先抓核心约束",
        description: "先判断目标是什么、系统卡在哪、哪个环节最影响结果，而不是一开始就沉进实现细节。",
      },
      {
        step: "02",
        title: "再设计闭环",
        description: "优先设计输入、决策、执行、反馈的完整链路，让方案不是单点功能，而是能持续运转的系统。",
      },
      {
        step: "03",
        title: "最后做可交付",
        description: "把复杂方案收敛成团队可维护、可复盘、可迭代的实现，而不是只追求短期炫技。",
      },
    ],
  },
  education: [
    {
      school: "香港中文大学",
      degree: "机器人学 (Robotics) - 硕士",
      period: "2025-09 至今",
      detail: "成绩 3.94 / 4.0，专业排名前 5%。",
    },
    {
      school: "合肥工业大学",
      degree: "机械工程 - 本科",
      period: "2018-09 ~ 2022-07",
      detail: "工程基础扎实，形成机械系统与自动化工程的系统训练。",
    },
  ],
  roleFit: [
    {
      title: "AI 产品与系统 Owner",
      description: "适合负责从价值定义、路径拆解到方案落地的一体化角色。",
    },
    {
      title: "软件与硬件的桥梁角色",
      description: "适合在算法、工程、硬件之间做翻译、抽象与整合。",
    },
    {
      title: "高不确定性项目推进者",
      description: "适合在目标明确但路径复杂的项目中，持续推动系统收敛。",
    },
  ],
};

export const experiencePage = {
  eyebrow: "Experience Console",
  title: "复杂工业系统里的交付经验，是我理解真实世界约束的起点。",
  description:
    "在 ABB 的跨国智能产线项目中，我经历过高压现场、复杂协同与交付节点，这些经验让我在做 AI 与机器人系统时，更关注稳定性、可维护性与真实价值。",
  status: {
    state: "warning",
    label: "Field Delivery Ready",
  },
  highlights: [
    { label: "公司", value: "上海 ABB 工程有限公司" },
    { label: "项目类型", value: "北美智能产线 / 跨国复杂交付" },
    { label: "认可", value: "ABB 2024 年度 Top Performer" },
  ],
  playbook: [
    {
      title: "问题定位",
      icon: Gauge,
      description: "在多系统耦合与高压交付环境下，快速定位关键约束与真正的主因。",
    },
    {
      title: "现场协同",
      icon: Workflow,
      description: "在海外现场连接设计、调试、供应商与客户需求，推动跨角色闭环。",
    },
    {
      title: "稳定交付",
      icon: Sparkles,
      description: "不追求表面上的完成，而是追求阶段节点内真正稳定、可复现的结果。",
    },
  ],
  timeline: [
    {
      company: "上海 ABB 工程有限公司",
      role: "机械设计工程师",
      period: "2023-04 ~ 2025-06",
      location: "上海 / 墨西哥 / 北美项目现场",
      scope: [
        "负责复杂自动化系统中的关键机械模块设计与跨专业集成配合。",
        "连接设计端、制造端与现场调试端，推动问题从发现到关闭的完整链路。",
        "在海外现场承担高密度、多角色协同下的技术推进与交付支持。",
      ],
      highlights: [
        "深度参与北美戴姆勒及 Magna 等千万级跨国智能产线项目，负责复杂自动化系统的关键机械与集成协同。",
        "作为海外现场核心技术枢纽，在墨西哥高压交付环境中主导 EVT / DVT 阶段软硬结合调试。",
        "以稳定交付与问题闭环能力获评 ABB 2024 年度 Top Performer。",
      ],
      keywords: ["EVT / DVT", "海外现场", "跨国交付", "机械系统", "集成调试"],
      transition:
        "这段经历让我形成了对复杂系统、真实约束与跨角色协同的基本判断，也成为后来转向 Agent 与 Robotics 的起点。",
    },
  ],
  closeout: {
    title: "工业交付给了我一套很硬的底层能力。",
    description:
      "它让我在面对 AI 与机器人系统时，不会只看模型和功能，而会更自然地去看约束、链路、稳定性与真实世界反馈。",
  },
};
