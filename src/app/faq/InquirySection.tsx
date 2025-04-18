/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '@/app/styles/faq/InquirySection.module.css';

const InquirySection = () => {
  return (
    <section className={styles.inquirySection}>
      <h2 className={styles.title}>서비스 문의</h2>
      <div className={styles.buttonWrap}>
        <a
          href="data/proposal.pdf"
          download="기아 비즈 서비스 제안서"
          className={styles.inquiryButton}
          aria-label="서비스 제안서 다운로드"
        >
          <img src="/images/icon_download.svg" alt="다운로드" className={styles.icon} />
          서비스 제안서 다운로드
        </a>

        <a href="#" className={styles.inquiryButton} aria-label="상담문의 등록하기">
          <img src="/images/icon_pen.svg" alt="상담문의" className={styles.icon} />
          상담문의 등록하기
        </a>

        <a
          href="https://pf.kakao.com/_xfLxjdb"
          target="_blank"
          rel="noreferrer"
          className={styles.inquiryButton}
          aria-label="카카오톡으로 문의하기"
        >
          <img src="/images/icon_talk.svg" alt="카카오톡" className={styles.icon} />

          <span className={styles.textWrap}>
            카톡으로 문의하기
            <br />
            <em className={styles.iconEm}>ID : 기아 비즈</em>
          </span>
        </a>
      </div>
    </section>
  );
};

export default InquirySection;
