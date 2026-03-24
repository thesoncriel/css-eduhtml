export default function DownloadPage() {
  const downloads = [
    {
      title: "특수문자 사전",
      description:
        "HTML 문서를 만들때 필요한 특수문자 200가지를 나열해 놓았습니다.",
      category: "HTML 참고자료",
    },
    {
      title: "그림폰트 사전",
      description:
        "이미지 대신 이걸 넣어보는건 어떨까요? 윈도용 기본 그림폰트 2가지를 분석 하였습니다.",
      category: "폰트 자료",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Download Files</h1>
        <p className="text-sm text-slate-500 mt-1">
          CSS 공부를 하는데 필요한 문서 및 유틸리티
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {downloads.map((item, i) => (
          <div
            key={i}
            className="bg-card rounded-xl border border-border p-5 hover:border-accent/30 transition-colors"
          >
            <div className="text-xs text-accent font-mono mb-2">
              {item.category}
            </div>
            <h3 className="text-lg font-bold text-slate-200">{item.title}</h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              {item.description}
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 bg-slate-800 px-3 py-1.5 rounded-lg">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                원본 파일 없음 (아카이브 미보존)
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/30 rounded-xl p-5 border border-border/50 text-sm text-slate-500">
        <p>
          <strong className="text-slate-400">참고:</strong> 원본 자료실은 외부
          제로보드(Zeroboard) 게시판으로 운영되었으며, 해당 파일들은 인터넷
          아카이브에 보존되지 않았습니다. 위 목록은 원본 사이트의 자료실 정보를
          기반으로 복원한 것입니다.
        </p>
      </div>
    </div>
  );
}
