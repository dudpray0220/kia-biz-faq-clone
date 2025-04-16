/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useRef } from 'react';
import styles from '@/app/styles/faq/SearchBar.module.css';

interface SearchBarProps {
  keyword: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  onReset: () => void;
  resultCount: number;
  isSearching: boolean;
}

const SearchBar = ({
  keyword,
  onChange,
  onSearch,
  onReset,
  resultCount,
  isSearching,
}: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <>
      <div className={styles.searchBarWrap}>
        <div className={styles.inputBox}>
          <input
            ref={inputRef}
            value={keyword}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="찾으시는 내용을 입력해주세요"
            className={styles.input}
          />

          {keyword && (
            <button
              className={styles.clearBtn}
              onClick={() => {
                onChange('');
                inputRef.current?.focus();
              }}
              aria-label="검색어 지우기"
            >
              <img src="/images/search_clear.svg" alt="검색어 지우기" />
            </button>
          )}

          <button className={styles.searchBtn} onClick={onSearch} aria-label="검색하기">
            <img src="/images/search.svg" alt="검색" />
          </button>
        </div>
      </div>

      {isSearching && (
        <div className={styles.searchMeta}>
          <p>
            검색결과 총 <strong>{resultCount}</strong>건
          </p>
          <button onClick={onReset} className={styles.resetBtn}>
            <img src="/images/search_reset.svg" alt="검색초기화" />
            검색초기화
          </button>
        </div>
      )}
    </>
  );
};

export default SearchBar;
