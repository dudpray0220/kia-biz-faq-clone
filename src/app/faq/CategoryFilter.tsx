'use client';

import React from 'react';
import styles from '@/app/styles/faq/CategoryFilter.module.css';
import { Category, MainTab } from '@/app/types/tab';
import categoryTab from '@/mock/category-tab.json';

interface CategoryFilterProps {
  activeTab: MainTab;
  selectedCategory: string;
  onChange: (category: string) => void;
}

const CategoryFilter = ({ activeTab, selectedCategory, onChange }: CategoryFilterProps) => {
  const categoryList: Category[] = categoryTab[activeTab] ?? [];

  return (
    <div className={styles.categoryFilter}>
      <button
        className={`${styles.categoryButton} ${selectedCategory === '전체' ? styles.active : ''}`}
        onClick={() => onChange('전체')}
      >
        전체
      </button>
      {categoryList.map((category) => (
        <button
          key={category.categoryID}
          className={`${styles.categoryButton} ${
            selectedCategory === category.name ? styles.active : ''
          }`}
          onClick={() => onChange(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
