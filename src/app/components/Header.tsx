import styles from '@/app/styles/header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo_kiabiz.svg" alt="Kia BIZ" className={styles.logoImg} />
        </Link>

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
        <span className={styles.util}>
          <button type="button" className={styles.menuBtn}>
            메뉴 열기/닫기
          </button>
        </span>
      </div>
    </header>
  );
}
