import Link from "next/link";
import { qnaPosts } from "@/data/qna";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return qnaPosts
    .filter((p) => !p.isReply)
    .map((p) => ({ id: String(p.id) }));
}

export default async function QnaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = parseInt(id);
  const post = qnaPosts.find((p) => p.id === postId && !p.isReply);

  if (!post) {
    notFound();
  }

  const replies = qnaPosts.filter((p) => p.parentId === post.id);

  return (
    <div className="space-y-4">
      <Link
        href="/qna"
        className="text-sm text-link hover:text-link-hover transition-colors"
      >
        ← 목록으로
      </Link>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-5 border-b border-border">
          <h2 className="text-lg font-bold text-slate-100">{post.title}</h2>
          <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
            <span>작성자: {post.author}</span>
            <span>{post.date}</span>
            <span>조회: {post.hits}</span>
          </div>
        </div>
        <div className="p-5 text-slate-300 whitespace-pre-line leading-relaxed">
          {post.content}
        </div>
      </div>

      {replies.length > 0 && (
        <div className="space-y-2 ml-4">
          <h3 className="text-sm text-slate-500 font-bold">답글</h3>
          {replies.map((reply) => (
            <div
              key={reply.id}
              className="bg-slate-800/50 rounded-lg border border-border/50 overflow-hidden"
            >
              <div className="px-4 py-3 border-b border-border/50">
                <h4 className="text-sm font-semibold text-indigo-300">
                  {reply.title}
                </h4>
                <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                  <span>{reply.author}</span>
                  <span>{reply.date}</span>
                </div>
              </div>
              <div className="px-4 py-3 text-sm text-slate-400 whitespace-pre-line">
                {reply.content}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="border-t border-border pt-4">
        <Link
          href="/qna"
          className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
        >
          ← 목록으로
        </Link>
      </div>
    </div>
  );
}
