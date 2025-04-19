/* eslint-disable @next/next/no-img-element */

import React from 'react';
import styles from '@/app/styles/faq/AppDownloadSection.module.css';

const AppDownloadSection = () => {
  return (
    <section className={styles.appSection}>
      <h2 className={styles.title}>기아 비즈 App 지금 만나보세요!</h2>
      <div className={styles.buttonWrap}>
        <a
          href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
          target="_blank"
          rel="noreferrer"
          className={styles.storeButton}
        >
          <img src="/images/icon_googleplay.svg" alt="Google Play" className={styles.icon} />
          Google Play
        </a>
        <a
          href="https://apps.apple.com/kr/app/kia-biz-%EA%B8%B0%EC%95%84-%EB%B9%84%EC%A6%88/id1598065794"
          target="_blank"
          rel="noreferrer"
          className={styles.storeButton}
        >
          <img src="/images/icon_appstore.svg" alt="App Store" className={styles.icon} />
          App Store
        </a>
      </div>
    </section>
  );
};

export default AppDownloadSection;
