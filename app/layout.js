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

const siteUrl = "https://my-cv-website-kevin-kou-yu.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KOU Yu的简历网站",
    template: "%s | KOU Yu的简历网站",
  },
  description:
    "寇宇 Kevin 的公开简历与项目站，聚焦 AI 产品经理、Agent Builder、工业交付和机器人系统背景。",
  keywords: ["寇宇", "Kevin Kou", "AI 产品经理", "Agent Builder", "Robotics", "ABB", "香港中文大学"],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "KOU Yu的简历网站",
    description:
      "具备 ABB 工业交付与 CUHK Robotics 背景，面向 AI Agent 产品和系统落地。",
    url: siteUrl,
    siteName: "KOU Yu的简历网站",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-card.svg",
        width: 1200,
        height: 630,
        alt: "KOU Yu的简历网站",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KOU Yu的简历网站",
    description:
      "具备 ABB 工业交付与 CUHK Robotics 背景，面向 AI Agent 产品和系统落地。",
    images: ["/og-card.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
