/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import styles from '@/app/styles/faq/ScrollTopButton.module.css';

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footer = document.querySelector('footer');
      const button = document.querySelector(`.${styles.scrollButton}`) as HTMLElement;

      if (footer && button) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        const overlap = footerTop < windowHeight;
        if (overlap) {
          button.style.bottom = `${windowHeight - footerTop + 32}px`;
        } else {
          button.style.bottom = `32px`;
        }
      }

      setVisible(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.scrollButton} ${visible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="맨 위로 이동"
    >
      <img src="/images/top_arrow.svg" alt="맨 위로" />
    </button>
  );
};

export default ScrollTopButton;
