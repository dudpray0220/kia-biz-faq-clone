# KIA BIZ FAQ Clone 프로젝트

KIA BIZ 사이트의 FAQ 페이지를 클론한 프로젝트입니다.

자주 묻는 질문과 답변을 카테고리별로 분류하고 검색할 수 있는 인터페이스를 제공합니다.

<br />

## 기술 스택

- **Frontend**: Next.js, React 19, TypeScript
- **Styling**: CSS Modules (모듈화된 스타일 적용)

<br />

## 주요 기능

- 탭 기반 카테고리 분류 (서비스 도입, 서비스 이용)
- 서브 카테고리 필터링
- 검색 기능
- 모바일/태블릿/데스크톱 반응형 디자인
- 아코디언 스타일 FAQ 목록
- 앱 다운로드 및 문의하기 섹션
- 원본은 /FAQ 경로지만 편의를 위해 메인 페이지에 구현했다

<br />

## 프로젝트 구조

```bash
/src
  /app            # App Router 구조
    /components   # 공통 컴포넌트 (헤더, 푸터 등)
    /faq          # FAQ 관련 컴포넌트
    /styles       # CSS 모듈
    /types        # TypeScript 타입 정의
  /mock           # 목업 데이터
/public           # 정적 파일 (이미지, 폰트 등)
```

<br />

## 실행 방법

로컬 환경에서 프로젝트를 실행하는 방법:

```bash
# 의존성 설치
npm install
# or
yarn

# 개발 서버 실행
npm run dev
# or
yarn dev
```
