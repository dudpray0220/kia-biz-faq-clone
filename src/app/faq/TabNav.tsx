'use client';

import React from 'react';
import styles from '@/app/styles/faq/TabNav.module.css';
import { MainTab } from '@/app/types/tab';

interface TabNavProps {
  activeTab: MainTab;
  onChange: (tab: MainTab) => void;
}

const TabNav = ({ activeTab, onChange }: TabNavProps) => {
  const tabs: MainTab[] = ['서비스 도입', '서비스 이용'];

  return (
    <div className={styles.tabNav}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNav;
