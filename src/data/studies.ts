export interface Study {
  id: string;
  title: string;
  date: string;
  level: "기초" | "중급" | "고급";
}

export const studies: Study[] = [
  { id: "00", title: "스타일 시트 맛보기", date: "Dec. 10. 2000", level: "기초" },
  { id: "01", title: "스타일 시트 삽입 방법 ①", date: "Feb. 25. 2001", level: "기초" },
  { id: "02", title: "스타일 시트 삽입 방법 ②", date: "Feb. 25. 2001", level: "기초" },
  { id: "03", title: "스타일 시트 삽입 방법 ③", date: "Feb. 25. 2001", level: "기초" },
  { id: "04", title: "스타일 시트 삽입 방법 -총정리-", date: "Feb. 25. 2001", level: "기초" },
  { id: "05", title: "진짜 진짜 진짜 기본~! color", date: "Feb. 26. 2001", level: "중급" },
  { id: "06", title: "엄청 자주 쓰게 되여~ font", date: "Feb. 26. 2001", level: "중급" },
  { id: "07", title: "<TABLE>과 오브젝트의 합동 역할을 대신한다~! float", date: "Feb. 27. 2001", level: "중급" },
  { id: "08", title: "문장의 첫줄, 첫글자에만 효과를~ first-line, first-letter", date: "Feb. 27. 2001", level: "중급" },
  { id: "09", title: "마우스 커서에 반응하는 보조 속성", date: "Feb. 27. 2001", level: "중급" },
  { id: "10", title: "HTML의 <u>에서 진화 했다~ text-decoration", date: "Feb. 27. 2001", level: "중급" },
  { id: "11", title: "배경을 내 맘대로~! background", date: "Feb. 27. 2001", level: "중급" },
  { id: "12", title: "HTML의 리스트 목록을 자유롭게~! list-style", date: "Mar. 4. 2001", level: "중급" },
  { id: "13", title: "우리는 같은 동네의 모임 이예요~~ 대표 속성", date: "Mar. 4. 2001", level: "중급" },
  { id: "14", title: "오브젝트에 그래픽 효과를~! filter", date: "Nov. 26. 2002", level: "고급" },
  { id: "15", title: "스타일 시트의 디자이너~ Box Object ① -margin-", date: "Mar. 11. 2001", level: "고급" },
  { id: "16", title: "스타일 시트의 디자이너~ Box Object ② -border-", date: "Mar. 11. 2001", level: "고급" },
  { id: "17", title: "스타일 시트의 디자이너~ Box Object ③ -padding-", date: "Mar. 11. 2001", level: "고급" },
  { id: "18", title: "스타일 시트의 디자이너~ Box Object ④ -width, height-", date: "Mar. 11. 2001", level: "고급" },
];

export function getStudiesByLevel(level: Study["level"]) {
  return studies.filter((s) => s.level === level);
}
