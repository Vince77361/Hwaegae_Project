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
        창업 관련 설문조사(전체 84명 중 창업 희망자 48명 대상)
      </h1>
      <div className={styles.questionContainer}>
        <h2 className={styles.question}>
          Q. 창업을 하게 된다면, 그 이유는 무엇인가요?
        </h2>
        <Image src="/Startup1.jpg" alt="ㅇㅇ" width={600} height={600} />
      </div>
      <div className={styles.questionContainer}>
        <h2 className={styles.question}>
          Q. 당신은 창업 교육 등을 받아 보신 적이 있으신가요?
        </h2>
        <Image src="/Startup2.jpg" alt="ㅇㅇ" width={840} height={280} />
      </div>
      <div className={styles.questionContainer}>
        <h2 className={styles.question}>
          Q. 창업을 위해 무엇을 준비하고 계신가요?
        </h2>
        <Image src="/Startup3.jpg" alt="ㅇㅇ" width={600} height={600} />
      </div>
    </div>
  );
}
