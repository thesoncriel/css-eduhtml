"use client";

import { useState } from "react";
import { qnaPosts, QnaPost } from "@/data/qna";

function PostDetail({
  post,
  onBack,
}: {
  post: QnaPost;
  onBack: () => void;
}) {
  const replies = qnaPosts.filter((p) => p.parentId === post.id);

  return (
    <div className="space-y-4">
      <button
        onClick={onBack}
        className="text-sm text-link hover:text-link-hover transition-colors"
      >
        ← 목록으로
      </button>

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
    </div>
  );
}

export default function QnaPage() {
  const [selectedPost, setSelectedPost] = useState<QnaPost | null>(null);

  const topPosts = qnaPosts.filter((p) => !p.isReply);

  if (selectedPost) {
    return (
      <PostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
    );
  }

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
          {qnaPosts.map((post) => (
            <div
              key={post.id}
              className="contents cursor-pointer hover:bg-slate-800/50 group"
              onClick={() =>
                setSelectedPost(post.isReply ? qnaPosts.find(p => p.id === post.parentId) || post : post)
              }
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
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-slate-600 text-center">
        이 게시판의 데이터는 2001~2002년 아카이브에서 복원한 것입니다.
      </p>
    </div>
  );
}
