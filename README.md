# Kevin 个人站

## 项目功能简介

这是一个展示寇宇 Kevin 个人资料、项目、方法论和职业经历的网站。
首页现在更像一页公开简历，重点让访问者快速看到基本资料、求职方向、联系方式、简历下载和个人介绍。

## 技术架构

- 使用 Next.js 搭建整站页面和路由。
- 使用 Tailwind CSS 结合自定义全局样式，做统一的工业风视觉系统。
- 使用 Framer Motion 处理页面出现、错峰进入和菜单展开等轻量动效。
- 使用 Geist / Geist Mono 作为主要字体，使用 Phosphor Icons 统一图标风格。
- 使用 `lib/site-data.js` 集中管理页面内容，页面本身主要负责展示结构。
- 使用一组工业风基础组件复用按钮、状态灯、面板和章节标题。
- 使用 `public/kevin-kou-resume.pdf` 提供简历下载，使用 `public/og-card.svg` 提供分享预览图。

## 本地运行方法

1. 安装依赖：`npm install`
2. 启动开发环境：`npm run dev`
3. 打开浏览器访问：`http://localhost:3000`

## 部署方法和命令

- 构建生产版本：`npm run build`
- 本地启动生产版本：`npm run start`
- 如果部署到支持 Next.js 的平台，按平台流程执行构建和启动即可。

## 测试方法和常用命令

- 构建检查：`npm run build`
- 本地预览：`npm run dev`
- 访问页面检查：`/`、`/projects`、`/about`、`/experience`

## 搜索记录

- 2026-04-21 [skills.sh](https://skills.sh/)：确认这次改版更适合走“统一视觉系统 + 复用组件 + 强首屏”的路线，不适合继续使用松散卡片式作品集布局。
- 2026-04-21 [GitHub 搜索：nextjs portfolio industrial ui](https://github.com/search?q=nextjs+portfolio+industrial+ui&type=repositories)：多数现成作品集模板偏通用 SaaS 或极简卡片风，可借鉴“内容集中配置”的做法，但不适合直接套用到这个个人站。

## 已完成功能列表 + 待办事项

### 已完成

- 全站切换为更轻量的浅色工业机械风。
- 首页改成简洁公开简历结构，只展示个人基本资料和个人介绍。
- 项目页改成系统模块式展示，不再是均匀作品卡。
- 关于页改成背景、能力、方法论和角色适配四段结构。
- 经历页改成主时间轴 + 辅助能力面板。
- 导航、页脚、状态灯、按钮和面板已统一复用。
- 页面内容已集中到 `lib/site-data.js`。
- Financial Agent 已作为项目外链保留，可直接访问线上应用。
- 首页、导航和页脚已加入简历下载入口。
- 项目页已为 Financial Agent 增加可验证证据区。
- 已补充网站 SEO、Open Graph 和分享预览图。

### 待办事项

- 暂无。
