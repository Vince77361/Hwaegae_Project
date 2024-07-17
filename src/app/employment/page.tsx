"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
  const headref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (headref.current) {
      headref.current.classList.add(styles.visible);
    }
  }, []);
  return (
    <div className={styles.container}>
      <h1 ref={headref} className={styles.head}>
        취업 관련 설문조사 (전체 84명 대상)
      </h1>
      <div className={styles.questionContainer}>
        <h2 className={styles.question}>
          Q. 취업을 하게 된다면, 어느 계열로 취업하실 생각이신가요?
        </h2>
        <Image src="/Employment1.jpg" alt="ㅇㅇ" width={600} height={600} />
      </div>
      <div className={styles.questionContainer}>
        <h2 className={styles.question}>
          Q. 취업에서 학벌과 개인의 능력 중 무엇이 더 중요하다고 생각하시나요?
        </h2>
        <Image src="/Employment2.jpg" alt="ㅇㅇ" width={840} height={280} />
      </div>
    </div>
  );
}
