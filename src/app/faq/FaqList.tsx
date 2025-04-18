/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import styles from '@/app/styles/faq/FaqList.module.css';
import { FaqItem as FaqItemType } from '@/app/types/tab';
import FaqItem from './FaqItem';

interface Props {
  items: FaqItemType[];
}

const FaqList = ({ items }: Props) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.container}>
      {items.length === 0 ? (
        <div className={styles.empty}>
          <img src="/images/search_alert.svg" alt="검색결과 없음" />
          <p className={styles.emptyText}>검색결과가 없습니다.</p>
        </div>
      ) : (
        <ul className={styles.list}>
          {items.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={handleToggle}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FaqList;
