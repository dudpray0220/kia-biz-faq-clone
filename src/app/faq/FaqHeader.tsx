import styles from '@/app/styles/faq/FaqHeader.module.css';

export default function FaqHeader() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        자주 묻는 질문<em>궁금하신 내용을 빠르게 찾아보세요.</em>
      </h1>
    </div>
  );
}
