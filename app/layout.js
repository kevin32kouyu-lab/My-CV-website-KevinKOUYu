import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
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

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
