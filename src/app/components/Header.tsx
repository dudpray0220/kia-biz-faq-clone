/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import styles from '@/app/styles/header.module.css';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <img src="/images/logo_kiabiz.svg" alt="Kia BIZ" className={styles.logoImg} />
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">서비스 소개</Link>
            </li>
            <li>
              <Link href="/">자주 묻는 질문</Link>
            </li>
            <li>
              <Link href="/">새소식</Link>
            </li>
            <li>
              <Link href="/">상담문의</Link>
            </li>
          </ul>
        </nav>

        {/* 모바일 메뉴 토글 버튼 */}
        <div className={styles.utilArea}>
          <button
            type="button"
            className={`${styles.menuBtn} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.srOnly}>메뉴 열기/닫기</span>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 사이드바 */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuInner}>
          <nav className={styles.mobileNav}>
            <ul>
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  새소식
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  상담문의
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
