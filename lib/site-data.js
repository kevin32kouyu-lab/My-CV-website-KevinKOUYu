import { Bot, Code2, Cpu } from "lucide-react";

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

export const homeHighlights = [
  { label: "经验", value: "2.5 年 ABB 世界 500 强复杂交付" },
  { label: "教育", value: "香港中文大学 Robotics 硕士在读" },
  { label: "方向", value: "Agent / Robotics / Product" },
];

export const coreDirections = [
  "LLM Agent Workflow",
  "Embodied AI",
  "机器人控制系统",
  "ROS2 / IoT",
  "工程化交付",
];

export const homeNarratives = [
  {
    title: "我在做什么",
    description:
      "把 AI Agent、机器人控制与真实业务场景连接起来，做成能落地、可复用、可持续迭代的系统。",
  },
  {
    title: "我擅长什么",
    description:
      "产品抽象、系统拆解、软硬件协同，以及在高不确定性场景中持续推进闭环交付。",
  },
  {
    title: "我看重什么",
    description:
      "不是只做 demo，而是更关注价值是否成立、链路是否稳定、方案是否能被真实团队长期使用。",
  },
];

export const homeFocusTracks = [
  {
    label: "AI Agent",
    description: "把模型能力做成工具可调度、流程可观察、结果可复盘的工作流。",
  },
  {
    label: "Embodied AI",
    description: "围绕机器人控制与物理反馈，构建更贴近真实世界约束的系统理解。",
  },
  {
    label: "Delivery",
    description: "用工业现场训练出来的交付意识，确保系统从设计走向真正可用。",
  },
];

export const skillGroups = [
  {
    title: "AI & 算法",
    icon: Bot,
    badgeClass: "border-black/10 bg-white text-slate-600",
    items: [
      "LLM",
      "Agentic Workflow",
      "RAG",
      "Prompt Engineering",
      "Python",
      "FastAPI",
    ],
  },
  {
    title: "机器人与硬件",
    icon: Cpu,
    badgeClass: "border-black/10 bg-white text-slate-600",
    items: ["ROS2", "闭环控制系统", "ESP32 IoT 开发", "运动学"],
  },
  {
    title: "工程与设计",
    icon: Code2,
    badgeClass: "border-black/10 bg-white text-slate-600",
    items: ["机械自动化设计", "SolidWorks", "Catia", "跨国敏捷交付"],
  },
];

export const experienceHighlights = [
  { label: "公司", value: "上海 ABB 工程有限公司" },
  { label: "项目类型", value: "北美智能产线 / 跨国复杂交付" },
  { label: "认可", value: "ABB 2024 年度 Top Performer" },
];

export const experiencePlaybook = [
  {
    title: "问题定位",
    description: "在多系统耦合与高压交付环境下，快速定位关键约束与真正的主因。",
  },
  {
    title: "现场协同",
    description: "在海外现场连接设计、调试、供应商与客户需求，推动跨角色闭环。",
  },
  {
    title: "稳定交付",
    description: "不追求表面上的完成，而是追求阶段节点内真正稳定、可复现的结果。",
  },
];

export const experience = [
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
  },
];

export const projects = [
  {
    title: "Financial Agent",
    subtitle: "基于微服务架构的 GenAI 智能分析系统",
    icon: Bot,
    accent: "from-cyan-400/30 via-cyan-300/10 to-transparent",
    tags: ["LLM", "Agent Workflow", "FastAPI", "Python", "Microservices"],
    role: "独立设计并实现核心闭环工作流",
    impact: "降低复杂查询链路延迟，提升模型调用外部数据的稳定性与效率。",
    architecture: ["LLM Planner", "Tool API", "Data Fetcher", "FastAPI Service"],
    points: [
      "独立构建基于大语言模型的闭环智能体工作流，大幅降低复杂查询场景下的系统响应延迟。",
      "基于 Python 开发自动化抓取，并使用 FastAPI 封装标准工具 API，实现模型对外部数据源的高效调用。",
    ],
  },
  {
    title: "BRUCE 双足机器人运动控制系统",
    subtitle: "底层控制链路修复与动态平衡优化",
    icon: Cpu,
    accent: "from-emerald-400/30 via-emerald-300/10 to-transparent",
    tags: ["IMU", "PD 控制", "闭环控制", "状态机", "100Hz"],
    role: "聚焦底层控制链路与动态平衡控制实现",
    impact: "将控制频率从 20Hz 提升至 100Hz，显著改善系统实时性与稳定性。",
    architecture: ["State Machine", "IMU Feedback", "PD Controller", "High-Frequency Loop"],
    points: [
      "修复底层状态机通信断层，将控制响应频率从 20Hz 提升至 100Hz。",
      "基于 IMU 数据从零开发底层 PD 闭环控制器，实现高动态自适应平衡控制。",
    ],
  },
  {
    title: "ENGG5402 ROS 与 ESP32 智能水族箱",
    subtitle: "机器人控制流与 IoT 生态系统联调",
    icon: Code2,
    accent: "from-fuchsia-400/30 via-fuchsia-300/10 to-transparent",
    tags: ["ROS", "ESP32", "IoT", "控制流", "软硬件联调"],
    role: "独立搭建控制链路与 IoT 生态系统",
    impact: "完成从控制流设计到硬件联调的完整闭环，体现系统集成与跨域协作能力。",
    architecture: ["ROS Nodes", "Sensor Control", "ESP32", "IoT Automation"],
    points: [
      "完成基于 ROS 架构的机器人控制流设计，梳理模块通信与执行链路。",
      "独立搭建基于 ESP32 微控制器的 IoT 智能生态系统，并完成软硬件系统联调。",
    ],
  },
];

export const projectThemes = [
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
];

export const aboutApproach = [
  {
    title: "先抓核心约束",
    description: "先判断目标是什么、系统卡在哪、哪个环节最影响结果，而不是一开始就沉进实现细节。",
  },
  {
    title: "再设计闭环",
    description: "优先设计输入、决策、执行、反馈的完整链路，让方案不是单点功能，而是能持续运转的系统。",
  },
  {
    title: "最后做可交付",
    description: "把复杂方案收敛成团队可维护、可复盘、可迭代的实现，而不是只追求短期炫技。",
  },
];

export const aboutRoleFit = [
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
];

export const education = [
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
];
