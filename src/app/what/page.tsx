export default function WhatPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end gap-4">
        <div>
          <div className="text-slate-500 text-sm tracking-widest">
            ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-serif italic text-shadow-lg text-slate-200">
            What&apos;s
          </h1>
          <h2 className="text-5xl font-serif italic mt-[-8px]">
            <span className="text-red-700">C</span>
            <span className="text-blue-700">S</span>
            <span className="text-amber-700">S</span>
            <span className="text-slate-200"> ?</span>
          </h2>
        </div>
      </div>

      {/* Content */}
      <article className="bg-card rounded-xl border border-border p-6 md:p-8 leading-loose text-slate-300 space-y-4">
        <p>안녕하세요.</p>
        <p>
          운영자 <strong className="text-accent">The SON</strong> 입니다.
        </p>

        <p>
          다들, <strong className="text-danger">CSS</strong>가 뭔지 알고
          계신가요?
        </p>
        <p>
          <strong className="text-danger">CSS</strong>는{" "}
          <em className="text-emerald-400">
            <strong className="text-danger">C</strong>ascading{" "}
            <strong className="text-danger">S</strong>tyle{" "}
            <strong className="text-danger">S</strong>heet
          </em>
          의 약자로, 간단히 <strong className="text-danger">CSS</strong>라고도
          말하고 <strong className="text-danger">스타일 시트</strong>라
          불리기도 합니다.
        </p>
        <p>
          <em className="text-orange-400 font-bold">
            발음은 여러분 편한대로 하세요
          </em>{" "}
          ^^
        </p>

        <p>
          <mark>HTML</mark>은 운영체제나 사용하는 웹브라우저, (또는 프로그램)에
          관계없이 똑같은 화면을 보여주겠다는{" "}
          <strong className="text-blue-400">W3C</strong>의 아주 황당한(?)
          목적아래 만들어진 작품이라 할 수 있습니다.
        </p>
        <p>
          근데, 컴퓨터 기술은 점점 발전하고, 따라서 인터넷 웹기술도 역시 따라서
          발전하죠. 이미지나, 여러가지 특수효과(플레시나 자바 스크립트, 애플릿
          같은거..)가 등장함에따라
        </p>
        <p className="text-purple-400 underline">
          HTML은 거의 왕따 당하다시피 해지는 지경까지 이르렀습니다.
        </p>

        <p>
          이에 열번한 <strong className="text-blue-400">W3C</strong>은{" "}
          <strong className="text-danger">CSS</strong>라는 새로운 기술은 도입,{" "}
          <strong className="text-cyan-400">HTML의 한계를 극복</strong>하려고
          애를쓰고 있다고 봐야할까요? ^^
        </p>

        <p>
          그래서 <strong className="text-danger">CSS</strong>는 간단히 말해서{" "}
          <mark>HTML</mark> <strong className="text-indigo-400">Tag</strong>
          (이하 <strong className="text-indigo-400">태그</strong>)의{" "}
          <strong className="text-danger">확장판</strong> 정도 된다고 할 수
          있는것 입니다.
        </p>
        <p>
          그래서 태그가 할 수 없는 일들도 이 녀석이 잘 처리한다 이겁니다.
        </p>
        <p>
          대표적인 예가{" "}
          <mark>
            레이아웃, 글자 간격조정, 배경 색상및 그림지정, 글자체, 글자 크기,
            글자 색깔, 글자 모양
          </mark>{" "}
          심지어 <strong className="text-red-800">그림자 효과</strong>까지~!
        </p>
        <p>실제로 나열하면 이것 외에도 굉장히 많이 있습니다 ^.^</p>
        <p>할 수 있는게 많은만큼, 배워야 할것도 많다는 예기일텐데..</p>
        <p>
          <strong className="text-danger">
            실제론 전혀 그렇지 않습니다.
          </strong>
        </p>
        <p>
          <em className="font-bold">
            사실상 글자 간격 조정과 글자크기 지정만 배워도 위와같은 그림자 효과를
            재현할 수 있습니다.
          </em>
        </p>
        <p>
          (혹시 위의 글자가 그림이라고 착각하신 분들이 있으신 지요... ^-^)
        </p>

        <p>
          게다가 <em className="text-amber-400">일반 HTML Tag와 연관성</em>을
          지니고 있어서,{" "}
          <em className="text-emerald-400">태그를 배우신 분들은 쉽게</em> 접하실
          수 있는게 바로 요{" "}
          <strong className="text-danger">CSS</strong>이기도 합니다.
        </p>

        <p>
          이런 여러가지 장점이 있는 가운데, 또한 단점도 가지 각색 입니다. 그중
          제일 심각한것은 <strong className="text-danger">CSS</strong>는{" "}
          <mark>HTML</mark> 처럼{" "}
          <strong className="text-indigo-400">
            모든 웹브라우저에 통일되지는 않았다는것
          </strong>{" "}
          입니다.
        </p>

        <p>
          구체적으로 예를들면 filter와 같은 element를 네스케이프에서 실행시키면
          페이지 오류가 발생합니다. 또, 브라우저마다 자신이 꾸며놓은 레이아웃이
          다르게 보일때도 있습니다.
        </p>

        <p>
          아직 <strong className="text-danger">CSS 2.0</strong> 버전이 완성되지
          않은 상태 라지만, 그것조차 제대로 구현 되지 않는다면, 이건 정말 심각한
          문제가 아닐 수 없습니다.
        </p>

        <p>
          그 밖의 <strong className="text-danger">CSS</strong>의 활용
          분야로는.. 자바 스크립트, <mark>HTML</mark> 등이겠지만.. 요즘 새로운
          언어로 대두되고 있는{" "}
          <strong className="text-pink-400">XML</strong>(E
          <strong className="text-pink-400">x</strong>tensible{" "}
          <strong className="text-pink-400">M</strong>arkup{" "}
          <strong className="text-pink-400">L</strong>anguage)에선{" "}
          <strong className="text-danger">CSS</strong> 개념이 매우 중요합니다.
        </p>

        <p>
          아무튼 <strong className="text-danger">CSS</strong>는 결과적으로{" "}
          <strong className="text-accent">
            홈페이지를 꾸미는 역할엔 그만
          </strong>
          이라고 말씀드리고 싶군요.
        </p>

        <p>
          그래서 저는 이 자리에서{" "}
          <strong className="text-danger text-lg">한번 써봐~</strong>
          <span className="text-sm">(반말을.. -_-ㆀ)</span>라고 말하고 싶군요.
        </p>

        <p>
          곧 인터넷상에서 <strong className="text-danger">CSS</strong>는 기초로
          다뤄질것 입니다. 아니, 이미 기초인지도 모르죠..
        </p>

        <p>
          <strong className="text-cyan-400">아는것이 힘이다~!</strong>
        </p>

        <p>
          머리가 나빠서 이걸 누가 말했는지 잘 기억이 나질않지만.. 제가 쓴
          글들이 여기 오신 소중한 분들께 조금이라도 도움이 되었으면 하는 저의
          바램입니다.
        </p>

        <div className="text-right mt-8 text-purple-400">
          DEC. 10. 2000 - The SON -
        </div>
      </article>

      {/* Bottom decoration */}
      <div className="text-right text-slate-500 text-sm tracking-widest">
        ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■
      </div>
    </div>
  );
}
