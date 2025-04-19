/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import styles from '@/app/styles/faq/FaqItem.module.css';
import { FaqItem as FaqItemType } from '@/app/types/tab';

interface Props {
  item: FaqItemType;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const FaqItem = ({ item, isOpen, onToggle }: Props) => {
  return (
    <li className={styles.item}>
      <button
        className={`${styles.question} ${isOpen ? styles.open : ''}`}
        onClick={() => onToggle(item.id)}
      >
        <div className={styles.questionWrapper}>
          <span className={styles.category}>{item.subCategoryName}</span>
          <div className={styles.content}>
            <span className={styles.title}>{item.question}</span>
          </div>
        </div>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>
          <img src="/images/down_arrow.svg" alt="화살표" className={styles.arrowIcon} />
        </span>
      </button>

      <div className={`${styles.answerWrap} ${isOpen ? styles.expanded : ''}`}>
        <div className={styles.answer} dangerouslySetInnerHTML={{ __html: item.answer }} />
      </div>
    </li>
  );
};

export default FaqItem;
