/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import styles from '@/app/styles/faq/FaqList.module.css';
import { FaqItem as FaqItemType } from '@/app/types/tab';
import FaqItem from './FaqItem';

interface Props {
  items: FaqItemType[];
  isSearching: boolean;
  visibleCount: number;
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
}

const FaqList = ({ items, isSearching, visibleCount, setVisibleCount }: Props) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleItems = items.slice(0, visibleCount);

  return (
    <div className={styles.container}>
      {items.length === 0 ? (
        <div className={styles.empty}>
          <img src="/images/search_alert.svg" alt="검색결과 없음" />
          <p className={styles.emptyText}>검색결과가 없습니다.</p>
        </div>
      ) : (
        <>
          <ul className={styles.list}>
            {visibleItems.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={handleToggle}
              />
            ))}
          </ul>

          {!isSearching && items.length > 1 && visibleCount < items.length && (
            <div className={styles.moreWrap}>
              <button type="button" className={styles.moreButton} onClick={handleMore}>
                + 더보기
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FaqList;
