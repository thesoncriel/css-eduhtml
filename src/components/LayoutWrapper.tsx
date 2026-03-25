"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-h-screen">
        {/* Mobile header */}
        <header className="lg:hidden sticky top-0 z-30 bg-[#0c1222]/95 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="메뉴 열기"
          >
            <svg
              className="w-6 h-6 text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <span className="text-accent font-bold text-sm">
            CSS.EduHTML.com
          </span>
        </header>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-8 max-w-5xl w-full mx-auto">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border px-4 py-6 text-center text-xs text-slate-500">
          <p>
            Copyleft(C) 2000 The SON | Originally created at <a href="https://web.archive.org/web/20030212122119/http://css.eduhtml.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">css.eduhtml.com</a>
          </p>
          <p className="mt-1">
            Rebuilt in 2026 with Next.js + TailwindCSS
          </p>
        </footer>
      </div>
    </div>
  );
}
