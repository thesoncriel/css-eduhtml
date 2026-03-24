# CSS.EduHTML.com 프로젝트 진행 보고서

## 프로젝트 개요

- **프로젝트명**: css-eduhtml
- **목적**: 2000년에 제작된 CSS 강좌 웹사이트(css.eduhtml.com)를 2026년 모던 스타일로 리뉴얼
- **기술 스택**: Next.js 16 + TypeScript + TailwindCSS v4
- **원본 소스**: Internet Archive (Wayback Machine)

---

## 1단계: 아카이브 사이트 분석 및 콘텐츠 수집

### 수행 내용
- Internet Archive의 Wayback Machine에서 원본 사이트 크롤링
- 메인 URL: `https://web.archive.org/web/20030212122119/http://css.eduhtml.com/`
- 보조 URL: `https://web.archive.org/web/20050205231638/http://css.eduhtml.com/css.htm`

### 수집된 페이지 목록

| 페이지 | 파일명 | 설명 |
|--------|--------|------|
| 인트로 | index.htm | 랜딩 페이지 (Cascading Style Sheet 타이포그래피) |
| 프레임셋 | css.htm | menu.htm + main.htm 프레임 구조 |
| 메뉴 | menu.htm | 좌측 사이드바 네비게이션 |
| 메인 | main.htm | 환영 인사, NEWS, Free Talk |
| CSS란? | what.htm | CSS 소개 에세이 |
| 강좌 목록 | study.htm | 19개 강좌 목록 (기초/중급/고급) |
| 강좌 상세 | study/00~18.htm | 개별 강좌 페이지 19개 |
| 자료실 | download.htm | 특수문자 사전, 그림폰트 사전 |
| Q&A | (제로보드 외부) | 게시판 - CDX API로 목록 복원 |

### 수집된 CSS 파일

| 파일 | 용도 |
|------|------|
| index.css | 인트로 페이지 스타일 |
| menu.css | 사이드바 메뉴 스타일 |
| main.css | 메인 콘텐츠 스타일 |
| what.css | What's CSS 페이지 스타일 |
| study.css | 강좌 목록 스타일 |
| down.css | 자료실 스타일 |

### 인코딩 처리
- 원본: EUC-KR 인코딩
- `iconv -f euc-kr -t utf-8`로 UTF-8 변환 후 처리

### Q&A 게시판 데이터 복원
- CDX API로 `educgi.jung-hun.net/zeroboard/zboard.php3?id=css_bbs` 검색
- 2001년 4월 아카이브에서 게시판 목록 페이지 발견 (6개 게시글)
- 2002년 8월 아카이브에서 확장된 목록 발견 (20개 게시글)
- 개별 게시글 본문은 아카이브 미보존으로 메타데이터(제목, 작성자, 날짜) 기반 복원

---

## 2단계: Next.js 프로젝트 초기 설정

### 수행 내용
- Node.js v24.14.0 설치 (nvm v0.40.1)
- `create-next-app` 으로 프로젝트 생성
- TypeScript + TailwindCSS v4 + ESLint + App Router 구성

### 프로젝트 구조
```
css-eduhtml/
├── docs/                    # 프로젝트 문서
├── public/images/           # 이미지 파일
├── src/
│   ├── app/
│   │   ├── layout.tsx       # 루트 레이아웃
│   │   ├── globals.css      # 글로벌 스타일
│   │   ├── page.tsx         # 홈 (메인)
│   │   ├── what/page.tsx    # What's CSS?
│   │   ├── study/
│   │   │   ├── page.tsx     # 강좌 목록
│   │   │   └── [id]/page.tsx # 강좌 상세
│   │   ├── download/page.tsx # 자료실
│   │   ├── qna/page.tsx     # Q&A 게시판
│   │   └── link/page.tsx    # 링크 모음
│   ├── components/
│   │   ├── Sidebar.tsx      # 사이드 네비게이션
│   │   └── LayoutWrapper.tsx # 레이아웃 래퍼
│   └── data/
│       ├── studies.ts       # 강좌 메타데이터
│       ├── study-content.json # 강좌 본문 (JSON)
│       └── qna.ts           # Q&A 게시판 데이터
└── package.json
```

---

## 3단계: 디자인 변환

### 주요 변환 사항

| 원본 | 모던 변환 |
|------|-----------|
| `<frameset>` + `<frame>` | 사이드바 네비게이션 (Sidebar 컴포넌트) |
| IE filter:shadow 텍스트 그림자 | TailwindCSS text-shadow |
| 중복 텍스트 그림자 기법 | 단일 텍스트 + CSS text-shadow |
| `<marquee>` 가로 스크롤 | CSS @keyframes 애니메이션 |
| `<font color>` 과다 사용 | `<mark>`, `<strong>`, `<em>` + 제한된 색상 |
| 테이블 레이아웃 | CSS Flexbox / Grid |
| IE 전용 filter | 표준 CSS 속성 |
| 고정 해상도 (1024x768) | 반응형 디자인 (모바일/태블릿/데스크톱) |

### 반응형 구현
- **모바일 (< 1024px)**: 사이드바 숨김, 햄버거 메뉴로 토글
- **데스크톱 (≥ 1024px)**: 사이드바 항상 표시

---

## 4단계: 페이지 구현

### 구현된 페이지

1. **홈 (/)**: Hero 섹션 + 환영 메시지 + NEWS + Free Talk
2. **What's CSS? (/what)**: CSS 소개 에세이 전문
3. **Study (/study)**: 기초/중급/고급 분류된 19개 강좌 목록
4. **Study 상세 (/study/[id])**: 개별 강좌 본문 + 이전/다음 네비게이션
5. **Download (/download)**: 자료실 카드 (원본 파일 미보존 안내)
6. **Q&A (/qna)**: 게시판 UI + 게시글 상세 보기
7. **Link (/link)**: CSS 관련 링크 모음 (현재 유효한 링크로 재구성)

### 빌드 결과
- 정적 페이지 28개 생성 (SSG)
- TypeScript 컴파일 오류 없음
- 빌드 시간: ~3초

---

## 결과

- 2000년대 초반 IE 전용 사이트를 2026년 모던 웹 표준으로 완전 리뉴얼
- 프레임 기반 → 반응형 SPA로 전환
- 원본 콘텐츠 최대한 보존하면서 가독성 대폭 향상
- 19개 CSS 강좌를 구조화된 JSON 데이터로 변환
- Q&A 게시판 데이터를 아카이브에서 복원하여 읽기 전용 게시판으로 구현
