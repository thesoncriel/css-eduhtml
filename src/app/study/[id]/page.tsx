import Link from "next/link";
import { studies } from "@/data/studies";
import studyContent from "@/data/study-content.json";
import { notFound } from "next/navigation";

const contentData = studyContent as Record<
  string,
  { chapter: string; title: string; content: string }
>;

export function generateStaticParams() {
  return studies.map((s) => ({ id: s.id }));
}

function renderContent(content: string) {
  const parts = content.split(/```\n?/);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      // Code block
      return (
        <pre
          key={i}
          className="bg-code-bg rounded-lg p-4 overflow-x-auto my-4 text-sm"
        >
          <code className="text-code-text whitespace-pre">{part.trim()}</code>
        </pre>
      );
    }

    // Text content - split by lines and render
    const lines = part.split("\n");
    return (
      <div key={i} className="space-y-1">
        {lines.map((line, j) => {
          if (!line.trim()) return <br key={j} />;
          return (
            <p
              key={j}
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: line }}
            />
          );
        })}
      </div>
    );
  });
}

export default async function StudyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const study = studies.find((s) => s.id === id);
  const content = contentData[id];

  if (!study || !content) {
    notFound();
  }

  const currentIndex = studies.findIndex((s) => s.id === id);
  const prev = currentIndex > 0 ? studies[currentIndex - 1] : null;
  const next =
    currentIndex < studies.length - 1 ? studies[currentIndex + 1] : null;

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <div className="flex items-center justify-between text-sm">
        {prev ? (
          <Link
            href={`/study/${prev.id}`}
            className="text-link hover:text-link-hover transition-colors"
          >
            ◀ {prev.title}
          </Link>
        ) : (
          <span className="text-slate-600">None</span>
        )}
        {next ? (
          <Link
            href={`/study/${next.id}`}
            className="text-link hover:text-link-hover transition-colors"
          >
            {next.title} ▶
          </Link>
        ) : (
          <span className="text-slate-600">End</span>
        )}
      </div>

      {/* Chapter header */}
      <div className="border-b border-border pb-4">
        <div className="text-accent text-sm font-mono">
          Chapter {parseInt(id)}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mt-1">
          {study.title}
        </h1>
        <div className="flex items-center gap-3 mt-2 text-sm text-slate-500">
          <span>{study.date}</span>
          <span
            className={`px-2 py-0.5 rounded text-xs ${
              study.level === "기초"
                ? "bg-emerald-500/20 text-emerald-400"
                : study.level === "중급"
                  ? "bg-amber-500/20 text-amber-400"
                  : "bg-rose-500/20 text-rose-400"
            }`}
          >
            {study.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <article className="text-slate-300 text-[15px]">
        {renderContent(content.content)}
      </article>

      {/* Bottom navigation */}
      <div className="border-t border-border pt-4 flex items-center justify-between text-sm">
        {prev ? (
          <Link
            href={`/study/${prev.id}`}
            className="text-link hover:text-link-hover transition-colors"
          >
            ◀ 이전 강좌
          </Link>
        ) : (
          <span />
        )}
        <Link
          href="/study"
          className="text-slate-500 hover:text-slate-300 transition-colors"
        >
          목록으로
        </Link>
        {next ? (
          <Link
            href={`/study/${next.id}`}
            className="text-link hover:text-link-hover transition-colors"
          >
            다음 강좌 ▶
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
