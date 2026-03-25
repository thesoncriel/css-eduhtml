import Link from "next/link";
import { getStudiesByLevel } from "@/data/studies";

const levels = [
  { key: "기초" as const, label: "스타일 시트 기초", range: "0~4" },
  { key: "중급" as const, label: "스타일 시트 중급", range: "5~13" },
  { key: "고급" as const, label: "스타일 시트 고급", range: "14~18" },
];

export default function StudyPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-border p-6">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-accent"
                style={{ opacity: 1 - i * 0.15 }}
              />
            ))}
          </div>
          <h1 className="text-2xl font-black text-white tracking-widest">
            S T U D Y
          </h1>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
        </div>
      </div>

      {/* Study sections */}
      {levels.map(({ key, label }) => {
        const items = getStudiesByLevel(key);
        return (
          <section key={key}>
            <h2 className="text-lg font-bold text-slate-200 mb-3 flex items-center gap-2">
              <span
                className={`text-xs px-2 py-0.5 rounded ${
                  key === "기초"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : key === "중급"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-rose-500/20 text-rose-400"
                }`}
              >
                {key}
              </span>
              {label}
            </h2>

            <ol className="space-y-1">
              {items.map((study) => (
                <li key={study.id}>
                  <Link
                    href={`/study/${study.id}`}
                    className="group flex items-baseline gap-3 px-4 py-2.5 rounded-lg hover:bg-card transition-colors"
                  >
                    <span className="text-xs text-slate-600 font-mono w-5 shrink-0">
                      {parseInt(study.id)}
                    </span>
                    <span className="text-link group-hover:text-link-hover transition-colors font-medium text-sm">
                      {study.title}
                    </span>
                    <span className="text-xs text-accent/70 ml-auto shrink-0">
                      ({study.date})
                    </span>
                    {study.id === "14" && (
                      <span className="text-xs text-danger">← Fixed</span>
                    )}
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
