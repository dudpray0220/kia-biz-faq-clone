'use client';

import TabNav from '@/app/faq/TabNav';
import FaqHeader from './FaqHeader';
import styles from '@/app/styles/faq/FaqPage.module.css';
import { useState } from 'react';
import { MainTab } from '@/app/types/tab';

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState<MainTab>('서비스 도입');

  return (
    <div className={styles.container}>
      <div className={styles.faqContent}>
        <FaqHeader />
        <TabNav activeTab={activeTab} onChange={setActiveTab} />
      </div>
    </div>
  );
}
