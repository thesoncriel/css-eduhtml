# 디자인 변경 문서

## 원본 vs 모던 디자인 비교

### 1. 전체 레이아웃

**원본 (2000년)**
- HTML Frameset으로 좌측 메뉴(150px) + 우측 본문 분리
- IE 5.5 이상, 1024x768 해상도 전용
- 각 프레임이 독립적인 HTML 파일

**모던 (2026년)**
- React 컴포넌트 기반 사이드바 + 메인 콘텐츠
- 반응형 레이아웃 (모바일 ~ 4K 지원)
- 모바일에서 햄버거 메뉴로 사이드바 토글
- 사이드바 너비: 240px (lg 이상에서 표시)

### 2. 색상 체계

**원본**: font 태그로 인라인 색상 지정, 일관성 없는 색상 사용

| 원본 색상 | 용도 | 모던 변환 |
|-----------|------|-----------|
| #ff8800 (주황) | 포인트, 메뉴 아이콘 | amber-500 (#f59e0b) |
| #8888ff (보라) | 링크 | indigo-400 (#818cf8) |
| red | 강조 | rose-400/danger (#fb7185) |
| #00aaaa (청록) | HTML 관련 | mark 태그 (amber 배경) |
| blue | 코드/설명 | blue-400 |
| green | 주요 개념 | emerald-400 |
| 검정/남색 배경 | 페이지 배경 | slate-900 (#0f172a) |

### 3. 텍스트 그림자

**원본 기법**: 동일한 텍스트를 2개의 div로 생성하고, 하나는 밝은 색(그림자), 하나는 진한 색(본문)으로 배치. margin-top에 음수값을 주어 겹침.

```css
/* 원본 코드 예시 */
.edunets {margin-top:-50px; margin-left:2px; color:#eaeaea;}
.edunet {margin-top:-26px;}  /* 실제 텍스트 */
```

**모던 변환**: CSS text-shadow 속성 사용

```css
/* TailwindCSS에서 text-shadow 유틸리티 활용 */
text-shadow-lg  /* 또는 커스텀 shadow */
```

### 4. Marquee → CSS 애니메이션

**원본**:
```html
<marquee behavior="slide" scrollamount="30" scrolldelay="20">
  S T U D Y
</marquee>
```

**모던**:
```css
@keyframes marquee-scroll {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
.animate-marquee {
  animation: marquee-scroll 15s linear infinite;
}
```

### 5. 강조 텍스트 변환

**원본**: 다양한 font color로 강조

```html
<font color="red">CSS</font>는 <font color="green">중요합니다</font>
```

**모던**: 시맨틱 태그 + 절제된 색상

```html
<strong className="text-danger">CSS</strong>는
<em className="text-emerald-400">중요합니다</em>
```

변환 규칙:
- `<font color="red">` → `<strong className="text-danger">`
- `<font color="blue">` → `<em className="text-blue-400">`
- `<font color="green">` → `<em className="text-emerald-400">`
- `<font color="#00aaaa">` → `<mark>`
- `<font color="orange">` → `<em className="text-amber-400">`

### 6. 코드 블록

**원본**: `<xmp>` 태그 + `bgcolor="#ccccff"` 테이블

**모던**: `<pre><code>` + 다크 테마 코드 블록
- 배경: slate-700 (#334155)
- 텍스트: emerald-400 (#34d399)
- 라운드 코너 + 패딩

### 7. 네비게이션

**원본**: 프레임 내 table 기반 메뉴, `target="main"`으로 프레임간 이동

**모던**:
- `Sidebar` 컴포넌트로 구현
- Next.js `Link` 컴포넌트로 클라이언트 사이드 라우팅
- 현재 페이지 하이라이트 (pathname 기반)
- 모바일: 오버레이 + 슬라이드 인 애니메이션

### 8. 게시판 (Q&A)

**원본**: 제로보드(Zeroboard) 3.5.2 - PHP 기반 게시판

**모던**:
- JSON 데이터 기반 정적 게시판
- 목록 → 상세 보기 (클라이언트 상태 관리)
- 답글 스레드 표시
- CSS Grid 기반 반응형 테이블
