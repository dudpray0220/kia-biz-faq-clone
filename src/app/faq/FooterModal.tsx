/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '@/app/styles/faq/FooterModal.module.css';

interface TermsData {
  termsName: string;
  termsVersion: number;
  startDate: number;
  endDate: number;
  contents: string;
}

interface FooterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FooterModal({ isOpen, onClose }: FooterModalProps) {
  const [termsData, setTermsData] = useState<TermsData | null>(null);
  const [termsDataList, setTermsDataList] = useState<TermsData[]>([]);
  const [selectedVersion, setSelectedVersion] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const modalRef = useRef<HTMLDivElement>(null);

  // 현재 날짜 포맷팅 함수
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  // 약관 데이터 가져오기
  useEffect(() => {
    const fetchTermsData = async () => {
      try {
        setLoading(true);

        const response = await fetch('/data/terms_data.json');
        const data = await response.json();

        // 데이터가 배열인 경우 처리
        if (Array.isArray(data)) {
          setTermsDataList(data);
          // 가장 최신 버전 선택 (일반적으로 첫 번째 항목)
          setTermsData(data[0]);
          setSelectedVersion(0);
        } else {
          // 단일 객체인 경우
          setTermsData(data);
          setTermsDataList([data]);
        }
      } catch (error) {
        console.error('약관 데이터를 불러오는 데 실패했습니다.', error);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchTermsData();
    }
  }, [isOpen]);

  // 버전 변경 핸들러
  const handleVersionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const versionIndex = parseInt(e.target.value);
    setSelectedVersion(versionIndex);
    setTermsData(termsDataList[versionIndex]);
  };

  // 모달 외부 클릭 시 닫기
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // ESC 키 누를 때 모달 닫기
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // 모달이 열릴 때 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const title = '이용약관';

  // 선택 옵션 생성
  const options = termsDataList.map((data, index) => {
    const date = new Date(data.startDate);
    const formatted = formatDate(date);
    return {
      value: index,
      label: `${formatted} ~ 현재`,
    };
  });

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer} ref={modalRef}>
        <div className={styles.modalHeader}>
          <h2 className={styles.title}>{title}</h2>
          <button type="button" className={styles.closeButton} onClick={onClose}>
            <span className={styles.srOnly}>닫기</span>
            <img src="/images/icon_close.svg" alt="닫기" />
          </button>
        </div>

        <div className={styles.dateSelector}>
          <select
            className={styles.dateDisplay}
            value={selectedVersion}
            onChange={handleVersionChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.modalContent}>
          {loading ? (
            <div className={styles.loading}>로딩 중...</div>
          ) : (
            <>
              <div
                className={styles.termsContent}
                dangerouslySetInnerHTML={{ __html: termsData?.contents || '' }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
