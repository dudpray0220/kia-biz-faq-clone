/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import styles from '@/app/styles/faq/ProcessSection.module.css';

const steps = [
  {
    icon: '/images/icon_step1.svg',
    title: '1. 문의 등록',
    desc: '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
  },
  {
    icon: '/images/icon_step2.svg',
    title: '2. 관리자 설정',
    desc: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
  },
  {
    icon: '/images/icon_step3.svg',
    title: '3. 임직원 가입',
    desc: '이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.',
  },
  {
    icon: '/images/icon_step4.svg',
    title: '4. 서비스 이용',
    desc: '이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!',
  },
];

const ProcessSection = () => {
  return (
    <section className={styles.processSection}>
      <h2 className={styles.title}>이용 프로세스 안내</h2>
      <ul className={styles.processList}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <li className={styles.processItem}>
              <img src={step.icon} alt={step.title} className={styles.icon} />
              <strong className={styles.stepTitle}>{step.title}</strong>
              <p className={styles.description}>{step.desc}</p>
            </li>
            {index < steps.length - 1 && (
              <li className={styles.arrowItem}>
                <img src="/images/step_arrow.svg" alt="단계 화살표" className={styles.arrowIcon} />
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default ProcessSection;
