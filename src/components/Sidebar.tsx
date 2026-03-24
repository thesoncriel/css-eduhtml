"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/", label: "Home", icon: "◆" },
  { href: "/what", label: "What's CSS?", icon: "▶" },
  { href: "/study", label: "Web Studings", icon: "▶" },
  { href: "/download", label: "Download Files", icon: "▶" },
  { href: "/qna", label: "Q & A", icon: "▶" },
  { href: "/link", label: "Web Site Link", icon: "▶" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-60 bg-[#0c1222] border-r border-border
          flex flex-col
          transition-transform duration-300
          lg:translate-x-0 lg:static lg:z-auto
          ${isOpen ? "translate-x-0 animate-slide-in" : "-translate-x-full"}
        `}
      >
        {/* Logo area */}
        <div className="p-6 border-b border-border">
          <div className="relative">
            <span className="text-5xl text-accent leading-none">◆</span>
            <div className="mt-[-8px]">
              <span className="text-lg font-black text-slate-400 tracking-tight">
                EduHtml
              </span>
            </div>
            <div className="mt-[-4px]">
              <span className="text-lg font-black text-indigo-400 tracking-tight">
                EduHtml
              </span>
            </div>
          </div>
          <div className="mt-4 border-t border-accent pt-3">
            <h2 className="text-xl font-bold italic text-indigo-300">Menu</h2>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg
                  transition-all duration-200 text-sm
                  ${
                    isActive
                      ? "bg-indigo-500/20 text-indigo-300 font-semibold"
                      : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }
                `}
              >
                <span className="text-accent text-xs">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border text-xs text-slate-500">
          <p>Copyleft(C) 2000 The SON</p>
          <p className="mt-1">css.eduhtml.com</p>
        </div>
      </aside>
    </>
  );
}
