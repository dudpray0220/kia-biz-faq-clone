import styles from '@/app/styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.information}>
          <span className={styles.util}>
            <button type="button">
              <b>개인정보 처리방침</b>
            </button>
            <button type="button">이용약관</button>
          </span>
          <address className={styles.address}>
            <span>
              서울특별시 서초구 헌릉로 12 <em>기아㈜</em>
            </span>
            <span>
              대표:&nbsp;<i>송호성, 최준영</i>
            </span>
            <span>
              사업자등록번호:&nbsp;<i>119-81-02316</i>
            </span>
            <span>
              통신판매번호:&nbsp;<i>2006-07935</i>
            </span>
            <span>
              고객센터:&nbsp;<i>1833-4964</i>
            </span>
            <span>
              제휴문의:&nbsp;<a href="mailto:kiabiz@kia.com">kiabiz@kia.com</a>
            </span>
          </address>
        </div>
        <p className={styles.copyright}>© 2023 KIA CORP. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
