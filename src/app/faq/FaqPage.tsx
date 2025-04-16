'use client';

import { useMemo, useState } from 'react';
import { FaqItem, MainTab } from '@/app/types/tab';
import faqJson from '@/mock/faq.json';

import TabNav from '@/app/faq/TabNav';
import FaqHeader from './FaqHeader';
import styles from '@/app/styles/faq/FaqPage.module.css';
import CategoryFilter from './CategoryFilter';
import SearchBar from '@/app/faq/SearchBar';

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState<MainTab>('서비스 도입');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [inputValue, setInputValue] = useState(''); //	input에 실시간으로 변하는 값
  const [searchKeyword, setSearchKeyword] = useState(''); // 	검색을 실제 실행했을 때 확정된 값
  const [isSearching, setIsSearching] = useState(false);

  const allFaqItems: FaqItem[] = faqJson.items;

  const handleSearch = () => {
    if (inputValue.trim().length < 2) {
      alert('검색어는 2자 이상 입력해주세요.');
      return;
    }
    setSearchKeyword(inputValue);
    setIsSearching(true);
  };

  const handleResetSearch = () => {
    setInputValue('');
    setSearchKeyword('');
    setSelectedCategory('전체');
    setIsSearching(false);
  };

  const filteredFaq = useMemo(() => {
    return allFaqItems.filter((item) => {
      const isTabMatched =
        activeTab === '서비스 도입'
          ? item.categoryName === '도입문의'
          : item.categoryName !== '도입문의';

      const isCategoryMatched =
        selectedCategory === '전체' || item.subCategoryName === selectedCategory;

      const isKeywordMatched =
        !isSearching ||
        item.question.includes(searchKeyword) ||
        item.answer.includes(searchKeyword);

      return isTabMatched && isCategoryMatched && isKeywordMatched;
    });
  }, [allFaqItems, activeTab, selectedCategory, searchKeyword, isSearching]);

  return (
    <div className={styles.container}>
      <div className={styles.faqContent}>
        <FaqHeader />
        <TabNav
          activeTab={activeTab}
          onChange={(tab) => {
            setActiveTab(tab);
            setSelectedCategory('전체');
          }}
        />
        <SearchBar
          keyword={inputValue}
          onChange={setInputValue}
          onSearch={handleSearch}
          onReset={handleResetSearch}
          resultCount={filteredFaq.length}
          isSearching={isSearching}
        />
        <CategoryFilter
          activeTab={activeTab}
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>
    </div>
  );
}
