/**
 * 这个文件集中管理站点内容数据，避免页面里直接写死展示结构。
 * 相关模块：site-chrome、首页、项目页、关于页、经历页。
 */

import { Briefcase, Code, Cpu, Gauge, Robot, Sparkle, Translate, FlowArrow } from "@phosphor-icons/react/ssr";

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
  roleCn: "AI 产品经理 / Agent Builder",
  roleEn: "AI Product Manager · Agent Builder",
  tagline: "具备 ABB 工业交付与 CUHK Robotics 背景，面向 AI Agent 产品和系统落地。",
  summary:
    "拥有 2 年半 ABB 复杂自动化系统集成经验，现为香港中文大学机器人学硕士在读，专业排名前 5%。我希望把工业现场训练出的需求拆解、系统协同和交付意识，用到 AI Agent 产品与应用系统建设中。",
  resume: {
    label: "下载简历",
    href: "/kevin-kou-resume.pdf",
    fileName: "Kevin-Kou-Resume.pdf",
  },
  jobPreference: {
    title: "求职意向",
    description: "城市优先级为深圳、上海、香港；方向聚焦 AI 产品经理、Agent 产品 / 应用开发，机器人与工业工程背景作为差异化能力。",
    priorities: ["深圳", "上海", "香港"],
  },
  basicProfile: [
    { label: "年龄", value: "26岁" },
    { label: "性别", value: "男" },
    { label: "求职方向", value: "AI 产品经理 / Agent Builder" },
    { label: "到岗时间", value: "随时到岗" },
    { label: "城市意向", value: "深圳 / 上海 / 香港" },
    { label: "电话", value: "18375833301", href: "tel:18375833301" },
    { label: "邮箱", value: "ky2014lucky@163.com", href: "mailto:ky2014lucky@163.com" },
    { label: "教育背景", value: "香港中文大学 Robotics 硕士在读" },
    { label: "工作经验", value: "ABB 2.5 年复杂自动化系统集成" },
  ],
  status: {
    state: "online",
    label: "Open to Opportunities",
  },
  location: "Shenzhen · Shanghai · Hong Kong",
  footerTitle: "寻找能把 AI 能力真正做成业务系统的机会",
  footerDescription:
    "如果你在找一个能同时理解产品价值、技术实现和交付现实的人，我们可以聊聊。当前求职城市优先级为深圳、上海、香港。",
};

export const projectsPage = {
  eyebrow: "项目案例",
  title: "我的项目主线，是把 AI 工作流、机器人控制和工程系统做成真实闭环。",
  description:
    "这些项目覆盖 Financial Research Agent、双足机器人运动控制，以及光机电一体化结构设计，体现从产品定义、算法控制到工程交付的复合能力。",
  status: {
    state: "active",
    label: "3 个简历项目",
  },
  projects: [
    {
      systemId: "System 01",
      title: "Financial Research Agent",
      subtitle: "面向美股投研场景的双语 AI 研究终端",
      period: "2026-01 ~ 至今",
      role: "独立开发者",
      impact: "支持中英文输入、结构化运行追踪、研究报告生成、图表展示与报告导出。",
      launchUrl: "https://kevin-financial-agent-production.up.railway.app/",
      launchLabel: "访问线上 Agent",
      architecture: ["React Terminal", "FastAPI Service", "SQLite Cache", "Tool Calling", "RAG Guardrails"],
      tags: ["LLM", "Agent Workflow", "RAG", "React", "FastAPI", "SQLite"],
      proof: {
        label: "可验证证据",
        title: "这是一个已经部署的真实 Agent 项目，不只是概念说明。",
        items: [
          {
            label: "线上 Demo",
            value: "Railway Production",
            description: "点击项目按钮可直接访问线上版本，验证输入、运行追踪和报告生成流程。",
          },
          {
            label: "核心链路",
            value: "输入 → 筛选 → 聚合 → 校验 → 报告",
            description: "把自然语言需求拆成可观察、可调试、可复盘的 Agent 工作流。",
          },
          {
            label: "交付范围",
            value: "产品定义 + 前后端 + 工具链",
            description: "独立完成需求拆解、React 终端、FastAPI 服务、SQLite 缓存和数据源接入。",
          },
          {
            label: "输出结果",
            value: "结构化投研报告",
            description: "汇总股票筛选、宏观环境、新闻、技术面和风险信息，并支持图表展示与导出。",
          },
        ],
      },
      points: [
        "从 0 到 1 设计面向金融研究场景的 Agent 闭环，将自然语言需求拆解为意图识别、股票筛选、多源数据聚合、风险校验和报告生成。",
        "基于 Python 封装金融研究工具链，接入 yfinance、SEC EDGAR、Yahoo RSS、Alpha Vantage、Finnhub、FRED 等数据源。",
        "独立完成 React + FastAPI + SQLite 前后端系统搭建，设计用户研究终端 /terminal 与内部调试台 /debug。",
        "将筛选结果、宏观环境、新闻、技术面与审计信息汇总为正式投资研究报告，并通过结构化输入和备用链路提升稳定性。",
      ],
    },
    {
      systemId: "System 02",
      title: "BRUCE 双足机器人运动控制与姿态反馈系统",
      subtitle: "高频控制架构优化与自适应闭环控制",
      period: "2025-10 ~ 2025-12",
      role: "核心算法负责人",
      impact: "将核心控制回路响应频率从 20Hz 提升至 100Hz，改善低延迟控制与姿态稳定性。",
      architecture: ["State Machine", "IMU Feedback", "PD Controller", "Offset Tuning", "100Hz Loop"],
      tags: ["IMU", "PD 控制", "闭环控制", "状态机", "运动学"],
      points: [
        "深入排查并修复底层状态机通信断层问题，提升上位机指令下发与底层驱动器执行效率。",
        "基于 IMU 实时反馈数据，从零开发底层 PD 闭环控制器，完成姿态反馈计算与运动学参数整定。",
        "通过 Offset Tuning 解决重心滞后问题，实现复杂物理环境下的高动态自适应平衡控制。",
      ],
    },
    {
      systemId: "System 03",
      title: "小型光机电一体化教学系统结构设计",
      subtitle: "本科毕业设计中的自动化分拣与机电集成方案",
      period: "2021-10 ~ 2022-06",
      role: "独立开发者",
      impact: "完成从机械结构、执行器选型到光电传感与动作时序规划的完整机电一体化方案。",
      architecture: ["3D Assembly", "2D Drawings", "Stepper Motor", "Pneumatic Actuator", "Sensor Logic"],
      tags: ["机械结构", "SolidWorks", "AutoCAD", "光电传感", "机电一体化"],
      points: [
        "针对自动化物料分拣需求，独立完成系统整体三维结构设计，构建自动上料、多级传送带及搬运机械手装配体模型。",
        "主导传动机构设计计算，完成步进电机、气动元件等执行器选型与力矩/负载校核。",
        "整合光电传感器检测逻辑与执行机构动作时序，规划物料自动识别、定位输送与分类下料流程。",
      ],
    },
  ],
  themes: [
    {
      title: "AI 产品定义",
      description: "关注用户需求如何转化为可运行、可调试、可验证的 Agent 产品闭环。",
    },
    {
      title: "机器人控制",
      description: "关注控制链路、反馈闭环与实时性，理解算法落到物理世界后的真实约束。",
    },
    {
      title: "工程系统交付",
      description: "关注软件、硬件、接口与协作流程如何在复杂项目中形成稳定结果。",
    },
  ],
};

export const aboutPage = {
  eyebrow: "关于我",
  title: "我是一名从复杂工程现场转向 AI 产品与 Agent 系统的复合型候选人。",
  description:
    "我有 ABB 世界 500 强复杂自动化系统集成经验，也有香港中文大学机器人学训练。现在希望把 AI Agent、机器人控制和工程落地能力结合起来，进入真实业务场景创造价值。",
  status: {
    state: "online",
    label: "AI Product Candidate",
  },
  background: {
    label: "背景概览",
    title: "工程交付、AI 产品定义和机器人系统，是我当前最核心的三条能力线。",
    paragraphs: [
      "在 ABB 的跨国智能产线项目中，我长期处理高复杂度、多角色、多系统协同问题，对工程约束、交付节奏与现场闭环有深入理解。",
      "在 Financial Research Agent 项目中，我独立完成从产品定义、Agent 工作流设计到前后端原型开发的闭环实践。",
      "在香港中文大学机器人学硕士阶段，我持续学习机器人系统、物联网嵌入式、微纳米与软体机器人等课程，并保持专业排名前 5%。",
    ],
  },
  skillGroups: [
    {
      title: "AI 产品与 Agent",
      icon: Robot,
      items: ["LLM", "RAG", "Prompt Engineering", "Agentic Workflow", "Tool Calling"],
    },
    {
      title: "编程与后端",
      icon: Code,
      items: ["Python", "FastAPI", "React", "SQLite", "JSON", "Git", "Linux"],
    },
    {
      title: "机器人与嵌入式",
      icon: Cpu,
      items: ["ROS2", "闭环控制", "状态机", "IMU", "ESP32", "边缘计算"],
    },
    {
      title: "机械与自动化",
      icon: Gauge,
      items: ["Catia", "SolidWorks", "AutoCAD", "GD&T", "BIW 工装夹具", "产线 Layout"],
    },
    {
      title: "语言与协作",
      icon: Translate,
      items: ["英语工作语言", "IELTS 7.0", "跨国会议", "商务谈判", "Design Review"],
    },
  ],
  approach: {
    label: "方法流程",
    title: "我的工作方式，是先把真实需求和系统约束对齐，再推进可交付方案。",
    steps: [
      {
        step: "01",
        title: "拆解需求",
        description: "把业务目标、用户输入、工程限制和关键风险先拆清楚，避免一开始就陷入实现细节。",
      },
      {
        step: "02",
        title: "设计闭环",
        description: "优先设计输入、工具调用、执行、反馈和校验链路，让方案不是单点功能，而是可运行系统。",
      },
      {
        step: "03",
        title: "交付验证",
        description: "用调试台、备用链路、现场联调和结构化结果验证系统是否真的稳定可用。",
      },
    ],
  },
  education: [
    {
      school: "香港中文大学",
      degree: "机器人学 (Robotics) - 硕士",
      period: "2025-09 至今",
      detail: "成绩 3.94 / 4.0，专业排名前 5%。",
      courses: ["基础机器人与系统(A)", "高等机器人(A-)", "微纳米与软体机器人(A)", "物联网嵌入式 IoT(A)", "机器人创业与商业化(A)"],
    },
    {
      school: "合肥工业大学",
      degree: "机械工程 - 本科",
      period: "2018-09 ~ 2022-07",
      detail: "成绩 3.07 / 4.3，专业排名前 30%。",
      courses: ["机械原理", "机械设计", "工业机器人技术", "C/C++语言程序设计", "人工智能基础"],
    },
  ],
  certifications: [
    "ABB 机器人中国区 2024 年度优秀员工",
    "雅思 IELTS 7.0，英语四级 618，英语六级 537",
    "2019 年、2020 年全国大学生英语竞赛三等奖",
    "合肥工业大学北辰濠梁杯辩论赛冠军及优秀辩手",
  ],
  roleFit: [
    {
      title: "AI 产品经理 / Agent PM",
      description: "适合负责从场景定义、工作流拆解到原型落地的一体化角色。",
    },
    {
      title: "Agent 应用开发者",
      description: "适合把 LLM、工具调用、数据源和前后端系统组合成可用产品。",
    },
    {
      title: "机器人与具身智能桥梁角色",
      description: "适合在算法、软件、硬件和工程现场之间做翻译、抽象与推进。",
    },
  ],
};

export const experiencePage = {
  eyebrow: "工作经历",
  title: "ABB 的跨国交付经历，是我理解真实工程约束和复杂协作的底盘。",
  description:
    "我曾在上海 ABB 工程有限公司机器人与离散自动化事业部工作，参与白车身、焊装、总装相关业务，在跨国产线项目中承担机械设计、系统逻辑规划、现场联调和需求拆解工作。",
  status: {
    state: "warning",
    label: "工业交付经验",
  },
  highlights: [
    { label: "跨国项目", value: "千万级智能产线" },
    { label: "现场阶段", value: "EVT / DVT 联调" },
    { label: "认可", value: "ABB 2024 Top Performer" },
  ],
  playbook: [
    {
      title: "机械设计与非标自动化",
      icon: Gauge,
      description: "负责白车身焊装线、物料输送系统、工装夹具和抓手等非标自动化模块的设计与工程图输出。",
    },
    {
      title: "全局系统逻辑规划",
      icon: FlowArrow,
      description: "参与工厂 Layout、Workflow & Logistic、能源点分配和 Sequence Diagram 规划，实现上下游设备协同。",
    },
    {
      title: "跨国现场交付",
      icon: Sparkle,
      description: "统筹中、墨、瑞典等多国工程团队与供应链，在 EVT/DVT 阶段推进软硬件联调与工程变更闭环。",
    },
  ],
  timeline: [
    {
      company: "上海 ABB 工程有限公司",
      role: "机械设计工程师（白车身 / 焊装 / 总装业务）",
      period: "2023-04 ~ 2025-06",
      location: "上海 / 墨西哥 / 北美项目现场",
      scope: [
        "深度参与北美戴姆勒及 Magna 等千万级跨国智能产线项目，负责核心非标自动化设备架构设计。",
        "带领设计团队完成各工位夹具、抓手等工装 3D 建模，定义焊枪、SPR 枪等关键结构，并输出 2D/3D 图纸与 BOM。",
        "深入负责整体 Layout 绘制和 Workflow & Logistic 规划，主导传感器与气动/电气能源点分配。",
        "对接海内外客户和供应商，将 RFQ、产品树和产能指标拆解为工程团队可落地的技术节点与系统方案。",
      ],
      highlights: [
        "作为海外现场核心技术枢纽，在墨西哥高压交付环境中主导 EVT/DVT 阶段软硬结合调试。",
        "通过排查物理干涉与公差瓶颈，协同 PLC 与机器人工程师优化底层传感器触发逻辑与运动轨迹。",
        "保障首个中墨联合项目按期高质量落地，并获评 ABB 机器人中国区 2024 年度优秀员工。",
      ],
      projectList: [
        "北美 Daimler e100 卡车白车身智能柔性生产线 | Main Mechanical Designer | 2023.11 - 2025.06",
        "墨西哥 Magna KM49 电动掀背车门组装生产线 | Associate Designer | 2023.04 - 2023.11",
        "北美 Magna KM74 电动掀背车门二期组装生产线 | Associate Designer | 2023.11 - 2024.06",
        "瑞典哥德堡 Volvo V436 轿车前支撑白车身项目 | 前期工艺分析 | 2024.01 - 2024.03",
        "土耳其布尔萨 Tofas K0 白车身底板总装线项目 | 设计和图纸审核 | 2024.06 - 2024.07",
      ],
      keywords: ["BIW", "焊装 / 总装", "Layout", "Sequence Diagram", "EVT / DVT", "跨国交付"],
      transition:
        "这段经历让我形成了对复杂系统、真实约束与跨角色协同的基本判断，也成为后来转向 AI Agent 与 Robotics 的起点。",
    },
  ],
  closeout: {
    title: "工业交付给了我一套很硬的底层能力。",
    description:
      "它让我在面对 AI 与机器人系统时，不会只看模型和功能，而会更自然地去看需求、约束、链路、稳定性与真实世界反馈。",
  },
};
