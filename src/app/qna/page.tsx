import Link from "next/link";
import { qnaPosts } from "@/data/qna";

export default function QnaPage() {
  const topPosts = qnaPosts.filter((p) => !p.isReply);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Question & Answer</h1>
        <p className="text-sm text-slate-500 mt-1">
          질문과 답변을 하는 게시판 (아카이브 데이터)
        </p>
      </div>

      {/* Board table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-0 text-sm">
          {/* Header */}
          <div className="contents font-bold text-slate-400 bg-slate-800">
            <div className="px-3 py-2 text-center border-b border-border">
              No
            </div>
            <div className="px-3 py-2 border-b border-border">제목</div>
            <div className="px-3 py-2 text-center border-b border-border hidden sm:block">
              작성자
            </div>
            <div className="px-3 py-2 text-center border-b border-border hidden md:block">
              날짜
            </div>
            <div className="px-3 py-2 text-center border-b border-border hidden md:block">
              조회
            </div>
          </div>

          {/* Rows */}
          {qnaPosts.map((post) => {
            const targetId = post.isReply ? post.parentId : post.id;

            return (
              <Link
                key={post.id}
                href={`/qna/${targetId}`}
                className="contents cursor-pointer hover:bg-slate-800/50 group"
              >
                <div className="px-3 py-2.5 text-center text-slate-600 border-b border-border/50 text-xs">
                  {post.isReply ? "" : post.id}
                </div>
                <div className="px-3 py-2.5 border-b border-border/50 truncate">
                  {post.isReply && (
                    <span className="inline-block w-4 ml-2 mr-1 text-slate-600">
                      └
                    </span>
                  )}
                  <span className="text-link group-hover:text-link-hover transition-colors">
                    {post.title}
                  </span>
                </div>
                <div className="px-3 py-2.5 text-center text-slate-500 border-b border-border/50 hidden sm:block text-xs">
                  {post.author}
                </div>
                <div className="px-3 py-2.5 text-center text-slate-600 border-b border-border/50 hidden md:block text-xs">
                  {post.date}
                </div>
                <div className="px-3 py-2.5 text-center text-slate-600 border-b border-border/50 hidden md:block text-xs">
                  {post.hits}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-slate-600 text-center">
        이 게시판의 데이터는 2001~2002년 아카이브에서 복원한 것입니다.
      </p>
    </div>
  );
}
