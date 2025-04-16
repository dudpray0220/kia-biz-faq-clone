'use client';

import { useState } from 'react';
import { MainTab } from '@/app/types/tab';

import TabNav from '@/app/faq/TabNav';
import FaqHeader from './FaqHeader';
import styles from '@/app/styles/faq/FaqPage.module.css';
import CategoryFilter from './CategoryFilter';

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState<MainTab>('서비스 도입');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

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
        <CategoryFilter
          activeTab={activeTab}
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>
    </div>
  );
}
