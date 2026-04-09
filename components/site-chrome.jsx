"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Bot, Mail, Phone } from "lucide-react";
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
    <div className="relative isolate min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-20 -translate-x-1/2">
          <div className="radial-ring float-slow h-64 w-64" />
        </div>
        <div className="absolute left-1/2 top-12 -translate-x-1/2">
          <div className="radial-ring float-slower h-[28rem] w-[28rem]" />
        </div>
        <div className="absolute left-[10%] top-24 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl pulse-soft" />
        <div className="absolute right-[12%] top-40 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl pulse-soft-delayed" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/6 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-200">
                <Bot className="h-5 w-5" />
              </span>
              <span>
                寇宇 Kevin
                <span className="mt-1 block font-mono text-xs font-normal text-zinc-400">
                  AI PM / Agent Developer / Robotics Engineer
                </span>
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
                        ? "border-cyan-400/25 text-white"
                        : "border-white/8 bg-white/4 text-zinc-400 hover:border-white/14 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    {active ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-cyan-400/12"
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

      <footer className="border-t border-white/6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-sm text-zinc-500">© 2026 Kevin Kou</div>
            <div className="mt-1 font-mono text-xs text-zinc-600">
              Next.js / Tailwind CSS / Framer Motion
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition hover:border-cyan-400/30 hover:bg-cyan-400/14"
            >
              <Mail className="h-4 w-4" />
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-100 transition hover:border-emerald-400/30 hover:bg-emerald-400/14"
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
