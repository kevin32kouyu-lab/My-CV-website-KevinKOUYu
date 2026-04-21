/**
 * 这个文件负责站点的全局布局、字体和基础元信息。
 * 相关模块：app 下所有页面、SiteChrome、globals.css。
 */

import "@fontsource/geist/400.css";
import "@fontsource/geist/500.css";
import "@fontsource/geist/600.css";
import "@fontsource/geist/700.css";
import "@fontsource/geist/800.css";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/500.css";
import "@fontsource/geist-mono/600.css";
import "./globals.css";
import SiteChrome from "../components/site-chrome";

export const metadata = {
  title: {
    default: "寇宇 Kevin | AI 产品经理 / Agent 开发者 & 机器人工程师",
    template: "%s | 寇宇 Kevin",
  },
  description:
    "寇宇（Kevin）个人作品集，聚焦 AI Agent、具身智能、机器人控制与工程化交付。",
};

// 渲染站点根布局，让所有页面复用统一的导航与页脚。
export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
