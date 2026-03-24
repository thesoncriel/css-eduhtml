export default function LinkPage() {
  const links = [
    {
      category: "CSS 표준 및 레퍼런스",
      items: [
        {
          title: "W3C CSS Specifications",
          url: "https://www.w3.org/Style/CSS/",
          description: "CSS 공식 표준 문서 (W3C)",
        },
        {
          title: "MDN Web Docs - CSS",
          url: "https://developer.mozilla.org/ko/docs/Web/CSS",
          description: "Mozilla 개발자 문서의 CSS 레퍼런스 (한국어)",
        },
      ],
    },
    {
      category: "CSS 학습 사이트",
      items: [
        {
          title: "CSS-Tricks",
          url: "https://css-tricks.com/",
          description: "CSS 팁과 트릭, 튜토리얼",
        },
        {
          title: "web.dev - Learn CSS",
          url: "https://web.dev/learn/css/",
          description: "Google의 CSS 학습 코스",
        },
      ],
    },
    {
      category: "원본 관련 링크",
      items: [
        {
          title: "EduHTML.com (아카이브)",
          url: "https://web.archive.org/web/2003/http://eduhtml.com/",
          description: "CSS.EduHTML.com의 모체 사이트 (인터넷 아카이브)",
        },
        {
          title: "CSS.EduHTML.com 원본 (아카이브)",
          url: "https://web.archive.org/web/20030212122119/http://css.eduhtml.com/",
          description: "이 사이트의 2003년 원본 (인터넷 아카이브)",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Web Site Link</h1>
        <p className="text-sm text-slate-500 mt-1">
          CSS 관련 추천 웹사이트
        </p>
      </div>

      {links.map((section, i) => (
        <section key={i}>
          <h2 className="text-sm font-bold text-accent mb-3">
            {section.category}
          </h2>
          <div className="space-y-2">
            {section.items.map((link, j) => (
              <a
                key={j}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card rounded-lg border border-border p-4 hover:border-link/30 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-link group-hover:text-link-hover transition-colors font-medium">
                    {link.title}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </section>
      ))}

      <div className="bg-slate-800/30 rounded-xl p-5 border border-border/50 text-sm text-slate-500">
        <p>
          <strong className="text-slate-400">참고:</strong> 원본 사이트의 링크
          목록은 외부 제로보드 게시판에 있었으며, 대부분의 링크가 2000년대
          초반의 것이라 현재는 접속이 불가합니다. 위 목록은 현재 유효한 CSS 관련
          리소스와 원본 아카이브 링크로 재구성하였습니다.
        </p>
      </div>
    </div>
  );
}
