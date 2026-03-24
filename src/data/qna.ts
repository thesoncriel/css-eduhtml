export interface QnaPost {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  isReply: boolean;
  parentId?: number;
  hits: number;
}

export const qnaPosts: QnaPost[] = [
  {
    id: 1,
    title: "여긴 게시판 입니다. 질문과 답변을 자유로이 하세요 ^.^",
    author: "The SON",
    date: "2001/02/27",
    content:
      "안녕하세요~ 운영자 TheSON 입니다.\n\n이 게시판은 CSS에 관한 질문과 답변을 자유롭게 할 수 있는 곳입니다.\nCSS를 공부하시면서 궁금한 점이 있으시면 편하게 질문해 주세요.\n가능한 빨리 답변 드리도록 하겠습니다.\n\n그리고 서로서로 도와가면서 공부하면 더 재밌겠죠? ^^",
    isReply: false,
    hits: 4,
  },
  {
    id: 3,
    title: "더 선님 안녕하세요 질문있어요",
    author: "이규암",
    date: "2001/03/02",
    content:
      "안녕하세요~ 더 선님!\n\nCSS 강좌 잘 보고 있습니다.\n근데 질문이 있어요.\nCSS에서 글자 그림자를 넣으려면 어떻게 해야 하나요?\nfilter를 쓰면 되는건가요?",
    isReply: false,
    hits: 3,
  },
  {
    id: 4,
    title: "[RE] 더 선님 안녕하세요 질문있어요",
    author: "The SON",
    date: "2001/03/03",
    content:
      "안녕하세요 이규암님 ^^!\n\n글자 그림자는 filter:shadow를 사용하시면 됩니다.\n예를 들면:\n\nfilter:shadow(color=gray, direction=135)\n\n이렇게 하시면 회색 그림자가 135도 방향으로 생깁니다.\n근데 이건 IE에서만 되구요..\n범용적으로 하려면 제 사이트처럼 글자를 두 번 겹쳐서 표현하는 방법도 있습니다 ^^",
    isReply: true,
    parentId: 3,
    hits: 5,
  },
  {
    id: 5,
    title: "더 선님 투명은 자바 ? 스타일?",
    author: "규암이",
    date: "2001/03/05",
    content:
      "더 선님 안녕하세요~\n투명한 효과를 주려면 자바스크립트를 써야 하나요?\n아니면 스타일시트로도 가능한가요?",
    isReply: false,
    hits: 4,
  },
  {
    id: 6,
    title: "[RE] 더 선님 투명은 자바 ? 스타일?",
    author: "The SON",
    date: "2001/03/06",
    content:
      "규암이님 안녕하세요 ^^!\n\n투명 효과는 CSS의 filter를 사용하면 됩니다.\nfilter:alpha(opacity=50) 이런식으로요!\nopacity 값은 0~100 사이인데, 0이 완전 투명이고 100이 불투명입니다.\n\n자바스크립트 없이도 가능하답니다~\n참고로 이건 IE 전용이에요 ^^;",
    isReply: true,
    parentId: 5,
    hits: 3,
  },
  {
    id: 7,
    title: "왜 안됄까요..해결해주세여",
    author: "조성일",
    date: "2001/03/25",
    content:
      "안녕하세요..\n스타일시트 강좌 보고 따라하고 있는데\n왜 안되는지 모르겠어요 ㅠㅠ\n코드를 넣었는데 적용이 안됩니다..\n도와주세요~",
    isReply: false,
    hits: 2,
  },
  {
    id: 8,
    title: "[RE] 왜 안됄까요..해결해주세여",
    author: "The SON",
    date: "2001/03/26",
    content:
      "조성일님 안녕하세요~\n\n코드를 올려주시면 어디가 잘못됐는지 봐 드릴수 있는데..\n혹시 style 속성에서 세미콜론(;)을 빼먹으신건 아닌지요?\n여러 속성을 쓸 때는 반드시 세미콜론으로 구분해야 합니다.\n\n예: style=\"color:red; font-size:12pt;\"\n\n한번 확인해 보시고 그래도 안되시면 다시 글 올려주세요 ^^",
    isReply: true,
    parentId: 7,
    hits: 3,
  },
  {
    id: 9,
    title: "와우~잘만들었네여~!!^^",
    author: "Mr.im",
    date: "2001/05/12",
    content:
      "와우~~ 사이트 진짜 잘 만드셨네요!!\n이미지 하나도 안 쓰고 이렇게 만들다니..\nCSS의 위력이 대단하군요 ^^",
    isReply: false,
    hits: 6,
  },
  {
    id: 10,
    title: "[RE] 와우~잘만들었네여~!!^^",
    author: "방랑자",
    date: "2001/05/15",
    content: "저도 동감이에요~ 정말 대단하십니다!",
    isReply: true,
    parentId: 9,
    hits: 2,
  },
  {
    id: 11,
    title: "정말 대단해",
    author: "bluesky777",
    date: "2001/07/20",
    content:
      "CSS만으로 이렇게 만들 수 있다니..\n정말 대단합니다.\n강좌도 잘 보고 있습니다.",
    isReply: false,
    hits: 3,
  },
  {
    id: 12,
    title: "전 웹디자이너인데요..",
    author: "디자이너",
    date: "2001/09/10",
    content:
      "안녕하세요~ 전 웹디자이너인데요..\nCSS를 공부하려고 여기 왔습니다.\n강좌가 정말 알기 쉽게 되어있네요.\n감사합니다~",
    isReply: false,
    hits: 5,
  },
  {
    id: 13,
    title: "[RE] 공부하는 곳이니 당연하죠..ㆀ",
    author: "TheSON",
    date: "2001/09/11",
    content:
      "디자이너님 반갑습니다 ^^!\n\n웹디자이너시라면 CSS는 꼭 알아두셔야 할 거에요.\n앞으로도 열심히 공부하시고, 궁금한거 있으면 질문 올려주세요~",
    isReply: true,
    parentId: 12,
    hits: 3,
  },
  {
    id: 14,
    title: "아.. 현빈이냐..",
    author: "현빈이",
    date: "2002/02/14",
    content: "오랜만에 왔어요~\n그동안 잘 지내셨나요? ^^",
    isReply: false,
    hits: 2,
  },
  {
    id: 15,
    title: "[RE] 아, 반갑습니다 *^^*",
    author: "TheSON",
    date: "2002/02/15",
    content:
      "현빈이님 오랜만이에요~~!\n네 잘 지내고 있습니다 ^^*\n자주 놀러오세요~",
    isReply: true,
    parentId: 14,
    hits: 2,
  },
  {
    id: 16,
    title: "7과 에서의 의문점",
    author: "학생",
    date: "2002/05/20",
    content:
      "7과 float 부분을 공부하고 있는데요..\nfloat을 쓰면 옆에 다른 요소가 붙는건 알겠는데\nclear는 어떻게 쓰는건가요?",
    isReply: false,
    hits: 4,
  },
  {
    id: 17,
    title: "스타일 시트 중복 사용 질문",
    author: "atto",
    date: "2002/06/10",
    content:
      "안녕하세요~\n인라인 스타일과 내부 스타일시트를 동시에 사용하면\n어떤게 우선인가요?",
    isReply: false,
    hits: 3,
  },
  {
    id: 18,
    title: "[RE] 흠.. 그것은.. [2]",
    author: "TheSON",
    date: "2002/06/11",
    content:
      "좋은 질문입니다 ^^!\n\nCSS의 우선순위는:\n1. 인라인 스타일 (style 속성)\n2. 내부 스타일시트 (<style> 태그)\n3. 외부 스타일시트 (link)\n4. 브라우저 기본값\n\n이 순서로 적용됩니다.\n같은 레벨이면 나중에 선언된 것이 우선합니다~",
    isReply: true,
    parentId: 17,
    hits: 5,
  },
  {
    id: 19,
    title: "[RE] 흠.. 맞을진 잘 모르겠군요..",
    author: "TheSON",
    date: "2002/06/15",
    content:
      "추가로 말씀드리면..\n!important 선언을 쓰면 다른 모든 스타일보다 우선 적용됩니다.\n예: color:red !important;\n\n근데 남용하면 안되요~ ^^;",
    isReply: true,
    parentId: 17,
    hits: 3,
  },
  {
    id: 20,
    title: "[RE] 흠.. 그것은..",
    author: "청강생",
    date: "2002/07/01",
    content: "아~ 그렇군요! 감사합니다.\n덕분에 잘 이해됐습니다 ^^",
    isReply: true,
    parentId: 17,
    hits: 2,
  },
];
