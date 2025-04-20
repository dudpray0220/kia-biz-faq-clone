# 🚘 KIA BIZ FAQ Clone 프로젝트

기아 비즈 공식 FAQ 페이지를 클론한 프로젝트입니다.  


## 💻 기술 스택

- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: CSS Modules (모듈화된 스타일 적용)
- **기능 구성**:
  - ✅ 카테고리/탭 필터링
  - ✅ 키워드 기반 검색 + 초기화 버튼
  - ✅ 아코디언 형태 FAQ 리스트
  - ✅ 스크롤 최상단 이동 버튼
  - ✅ 이용약관 모달
  - ✅ 모바일 헤더 메뉴 토글
  - ✅ 반응형 UI 대응


## 프로젝트 구조

- `src/app`: 메인 애플리케이션 코드
- `public`: 정적 파일 (이미지, 아이콘 등)

## 📁 폴더 구조

/public
  ├─ /fonts
  └─ /images

/mock
  ├─ category-tab.json  ✅ 탭별 카테고리
  └─ faq.json           ✅ 전체 FAQ 목록 + 페이지네이션

/src
  └─ /app
      ├─ layout.tsx     ✅ 공통 헤더/푸터 조립
      ├─ page.tsx       ✅ "/" 홈이자 FAQ 본문 뷰
      └─ /components
          ├─ Header.tsx
          └─ Footer.tsx
      └─ /faq
          ├─ FaqPage.tsx        ✅ 전체 조립 컨테이너
          ├─ FaqHeader.tsx      ✅ 상단 "자주 묻는 질문"
          ├─ TabNav.tsx         ✅ 서비스 도입/이용 탭
          ├─ SearchBar.tsx
          ├─ CategoryFilter.tsx
          ├─ FaqList.tsx
          ├─ FaqItem.tsx
          ├─ LoadMoreButton.tsx
          ├─ InquirySection.tsx
          └─ ProcessSection.tsx

/styles
  ├─ globals.css
  ├─ header.module.css
  ├─ footer.module.css
  └─ /faq
      ├─ faqHeader.module.css
      ├─ tabNav.module.css
      ├─ searchBar.module.css
      ├─ categoryFilter.module.css
      ├─ faqList.module.css
      ├─ faqItem.module.css
      ├─ loadMoreButton.module.css
      ├─ inquirySection.module.css
      └─ processSection.module.css

