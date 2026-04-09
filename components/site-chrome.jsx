"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { contact, navItems } from "../lib/site-data";

function isActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export default function SiteChrome({ children }) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-slate-900">
              <span className="title-font text-base">寇宇 Kevin</span>
              <span className="hidden text-xs text-slate-500 sm:block">
                AI PM · Agent Developer · Robotics Engineer
              </span>
            </Link>
          </motion.div>

          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <motion.div key={item.href} whileHover={{ y: -2 }} transition={{ duration: 0.18 }}>
                  <Link
                    href={item.href}
                    className={`relative overflow-hidden rounded-full border px-4 py-2 text-sm transition ${
                      active
                        ? "border-black/10 bg-black text-white"
                        : "border-black/5 bg-white text-slate-600 hover:border-black/15 hover:text-slate-900"
                    }`}
                  >
                    {active ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-black"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </div>
      </header>

      <div className="pt-24">{children}</div>

      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-sm text-slate-500">© 2026 Kevin Kou</div>
            <div className="mt-1 text-xs text-slate-400">Product · Agent · Robotics</div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-black/20 hover:text-slate-900"
            >
              <Mail className="h-4 w-4" />
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-black/20 hover:text-slate-900"
            >
              <Phone className="h-4 w-4" />
              {contact.phone}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
