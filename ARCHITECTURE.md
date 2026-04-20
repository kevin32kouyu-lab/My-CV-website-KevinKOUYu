# ARCHITECTURE

## 每个文件/模块的职责

- `app/layout.js`：站点总入口，负责全局字体、元信息和统一外壳。
- `app/globals.css`：全站工业风视觉系统，定义颜色、阴影、纹理、按钮和面板公共样式。
- `app/page.js`：首页，负责个人品牌首屏、设备主视觉和当前关注方向。
- `app/projects/page.js`：项目页，负责把每个项目展示成独立系统模块。
- `app/about/page.js`：关于页，负责背景、能力、方法流程和角色定位。
- `app/experience/page.js`：经历页，负责 ABB 主时间轴和交付能力表达。
- `components/site-chrome.jsx`：固定导航和页脚，负责全站外壳一致性。
- `components/reveal.jsx`：统一单块内容的入场动画。
- `components/stagger-group.jsx`：统一成组内容的错峰动画。
- `components/industrial/industrial-panel.jsx`：通用工业风面板容器。
- `components/industrial/mechanical-button.jsx`：通用机械按钮。
- `components/industrial/status-indicator.jsx`：通用状态灯。
- `components/industrial/device-screen.jsx`：首页设备屏幕主视觉。
- `components/industrial/section-heading.jsx`：各内页统一标题头。
- `lib/site-data.js`：集中管理页面文案、模块内容和展示数据。
- `lib/cn.js`：简单的类名拼接工具。

## 模块之间的调用关系

- `app/layout.js` 引入 `components/site-chrome.jsx`，让所有页面共用同一套导航和页脚。
- 四个页面从 `lib/site-data.js` 读取内容，再调用 `components/industrial/` 里的基础组件完成展示。
- `components/reveal.jsx` 和 `components/stagger-group.jsx` 为页面内容提供统一动效。
- `app/globals.css` 为所有页面和组件提供统一视觉变量和公共样式类。

## 关键的设计决定和原因

- 统一采用浅色工业控制台风格：这样识别度强，同时仍适合正式展示和求职场景。
- 不依赖外部图片做首页主视觉：改用纯 CSS 设备屏幕，维护成本更低，也更符合机械风语言。
- 保持路由不变：减少结构变化带来的额外风险，优先把视觉和表达做强。
- 内容集中配置到 `lib/site-data.js`：后续改文案、调顺序或新增模块时，改动更集中、更容易维护。
- 动效只保留抬起、按下、滑入和状态灯呼吸：这样既有质感，也不会让页面显得花哨。
