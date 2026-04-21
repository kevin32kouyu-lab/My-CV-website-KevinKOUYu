"use client";

/**
 * 这个文件定义全站固定导航和页脚，把站点包装成统一的工业控制台外壳。
 * 相关模块：app 下所有页面、机械按钮、状态灯、工业风面板组件。
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { List, Radio, X } from "@phosphor-icons/react";
import IndustrialPanel from "./industrial/industrial-panel";
import MechanicalButton from "./industrial/mechanical-button";
import StatusIndicator from "./industrial/status-indicator";
import { contact, navItems, siteProfile } from "../lib/site-data";

// 判断当前页面是否命中导航项，保证高亮逻辑一致。
function isActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

// 渲染桌面和移动端共用的导航按钮，避免两套结构分别维护。
function NavLinks({ pathname, onNavigate, mobile = false }) {
  return navItems.map((item) => (
    <MechanicalButton
      key={item.href}
      href={item.href}
      variant="nav"
      active={isActive(pathname, item.href)}
      fullWidth={mobile}
      onClick={onNavigate}
      className={mobile ? "justify-start" : ""}
    >
      {item.label}
    </MechanicalButton>
  ));
}

// 渲染统一的站点外壳，让导航、内容和页脚在视觉上连成一台设备。
export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="relative min-h-screen pb-6">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <IndustrialPanel
          className="mx-auto max-w-[var(--page-max)] px-4 py-3 sm:px-5"
          screws
          vents
        >
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="icon-housing h-12 w-12 shrink-0 text-[var(--accent)]">
                  <Radio className="h-5 w-5" weight="bold" />
                </span>
                <div className="min-w-0">
                  <div className="truncate title-font text-lg font-semibold text-[var(--foreground)] sm:text-xl">
                    {siteProfile.name}
                  </div>
                  <div className="hidden truncate tech-label sm:block">{siteProfile.roleEn}</div>
                </div>
              </div>
            </Link>

            <div className="hidden items-center gap-3 lg:flex">
              <StatusIndicator state={siteProfile.status.state} label={siteProfile.status.label} compact />
              <nav className="flex items-center gap-2">
                <NavLinks pathname={pathname} />
              </nav>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <StatusIndicator state={siteProfile.status.state} compact />
              <MechanicalButton
                variant="nav"
                aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? (
                  <X className="h-4 w-4" weight="bold" />
                ) : (
                  <List className="h-4 w-4" weight="bold" />
                )}
              </MechanicalButton>
            </div>
          </div>
        </IndustrialPanel>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: [0.175, 0.885, 0.32, 1.275] }}
              className="mx-auto mt-3 max-w-[var(--page-max)] lg:hidden"
            >
              <IndustrialPanel className="px-4 py-4" screws>
                <div className="grid gap-3">
                  <NavLinks pathname={pathname} onNavigate={() => setMenuOpen(false)} mobile />
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <MechanicalButton href={`mailto:${contact.email}`} variant="connector" fullWidth iconName="mail">
                      邮件联系
                    </MechanicalButton>
                    <MechanicalButton href={`tel:${contact.phone}`} variant="connector" fullWidth iconName="phone">
                      电话联系
                    </MechanicalButton>
                  </div>
                </div>
              </IndustrialPanel>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <div className="pt-[102px] sm:pt-[110px] lg:pt-[114px]">{children}</div>

      <footer className="mt-16 px-3 sm:px-5">
        <IndustrialPanel className="mx-auto max-w-[var(--page-max)] px-5 py-6 sm:px-6 sm:py-7" screws>
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="tech-label">Output Ports</div>
              <div className="mt-3 title-font text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
                {siteProfile.footerTitle}
              </div>
              <p className="mt-4 max-w-[58ch] text-base leading-8 text-[var(--muted)]">
                {siteProfile.footerDescription}
              </p>
              <div className="mt-5">
                <StatusIndicator state={siteProfile.status.state} label={siteProfile.location} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <MechanicalButton href={`mailto:${contact.email}`} variant="connector" fullWidth iconName="mail">
                {contact.email}
              </MechanicalButton>
              <MechanicalButton href={`tel:${contact.phone}`} variant="connector" fullWidth iconName="phone">
                {contact.phone}
              </MechanicalButton>
            </div>
          </div>
        </IndustrialPanel>
      </footer>
    </div>
  );
}
