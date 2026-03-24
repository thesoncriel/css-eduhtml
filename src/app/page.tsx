export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero section - inspired by original intro */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-border p-8 md:p-12">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold italic text-rose-200/80 tracking-tighter leading-tight">
            Cascading
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-indigo-300 mt-1">
            Style Sheet
          </h2>
          <div className="mt-4 text-7xl md:text-9xl font-black text-red-900/30 tracking-tight">
            CSS
          </div>
        </div>
        {/* "YOU CAN DO IT" text */}
        <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-right opacity-20">
          {"YOUCANDOIT".split("").map((char, i) => (
            <div
              key={i}
              className="text-4xl md:text-6xl font-black leading-none"
              style={{ color: `rgb(255, ${220 - i * 15}, ${220 - i * 15})` }}
            >
              {char}
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
          <span className="font-mono">CSS.EDUHTML.COM</span>
        </div>
      </section>

      {/* Welcome message */}
      <section className="space-y-4">
        <div className="flex items-baseline gap-3">
          <hr className="flex-1 border-slate-700" />
          <div>
            <span className="text-accent text-lg">Cascading</span>{" "}
            <span className="text-indigo-400 text-xl font-bold">
              Style Sheet
            </span>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border leading-relaxed text-slate-300">
          <p>이제 여기도 마지막이군요..</p>
          <p>그동안 저랑 함께해 주셔서 감사했습니다 (__)</p>
          <p>그럼 언제나 즐공하시구요.. ^-^</p>
          <p>
            <strong>TheSON</strong>은 물러갑니다..
          </p>
          <p className="mt-3">
            질문사항은.. <mark>theson@hanmir.com</mark> 으로 저에게 멜주시면 답변
            해 드립니다.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            ※ CSS의 특성을 살리기 위해 이미지를 사용하지 않았습니다.
          </p>
          <p className="text-sm text-slate-600">
            ※ (능력이 없어서가 아닙니다.. -_-ㆀ)
          </p>
        </div>
      </section>

      {/* NEWS section */}
      <section>
        <div className="relative mb-4">
          <h3 className="text-2xl font-black text-blue-600">
            NEWS{" "}
            <span className="text-blue-500/80">I</span>
            <span className="text-blue-400/60">I</span>
            <span className="text-blue-300/40">I</span>
            <span className="text-blue-200/20">I</span>
          </h3>
          <div className="text-base font-bold text-indigo-200/50 mt-[-4px] ml-1 tracking-widest">
            N E W S
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-border">
          {[
            {
              date: "2002.11.26",
              text: "Filter 강좌 Up Date 되었습니다..",
              color: "bg-yellow-500/20",
            },
            {
              date: "2001.2.27",
              text: "자료실, 게시판 오픈 입니다 *^^*",
              color: "bg-yellow-500/15",
            },
            {
              date: "2000.12.26",
              text: "css.eduhtml.com 이 개설 되었습니다.",
              color: "bg-yellow-500/10",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.color} px-4 py-2.5 border-b border-border last:border-0 flex items-center gap-3 text-sm`}
            >
              <span className="text-accent">•</span>
              <span className="text-danger font-mono text-xs">{item.date}</span>
              <span className="text-slate-300">/ {item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Free Talk */}
      <section>
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="px-4 py-2 border-b border-border bg-slate-800/50">
            <span className="text-slate-500 text-sm">
              [<span className="text-indigo-400 italic"> Free Talk </span>]
            </span>
          </div>
          <div className="p-5 text-sm leading-loose text-slate-400 space-y-1">
            <p>진짜 올만이네요 ㅡㅡ;; 1년 반만인가..</p>
            <p>그동안 업뎃을 안하다보니 점점 잊혀지고..</p>
            <p>그러다 보니 또 안오게 되죠 ^^ㆀ</p>
            <p>그게 홈페이지 수명의 끝인가 봅니다..</p>
            <p>그래도 가끔씩 찾아 오셔서 질문 올려주신분께..</p>
            <p>
              <strong>정말 감사드립니다. ㅁ(__)ㅁ</strong>
            </p>
            <p className="mt-2">제 갠적 생각인데..</p>
            <p>지금 하는 업뎃이 마지막일 것같군요..</p>
            <p>CSS는 별로 인기도 없고..</p>
            <p>요즘엔 거의 다 에디터를 써서 하니.. 쩝..</p>
            <p>ㅠ_ㅠ</p>
            <p className="mt-2">그대로 혹시나 CSS에 관심있으신 분들은..</p>
            <p>제 강좌를 다 보시고..</p>
            <p>그래도 뭔가 허전하다 싶으시면..</p>
            <p>
              <em>이 사이트의 소스코드를 분석하셔도 무방합니다 ^-^</em>
            </p>
            <p>(특히 대문이 인상적이지 않으셨나요? ^^</p>
            <p className="mt-2">벌써 겨울이군요.. 많이 추워졌죠? ^^a</p>
            <p>제방은 다시 얼음굴이 되었답니다.. 쿠쿠</p>
            <p>그럼 즐공 하시고..</p>
            <p>감기 조심하시구요~~</p>
            <p>여러분.. 안녕히 계십시오~~</p>
            <p>
              <strong className="text-accent">빠빠~ ^^*</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
