"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Page() {
  const elementRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.classList.add(styles.visible);
    }
  }, []);
  return (
    <div className={styles.container}>
      <h1 ref={elementRef} className={styles.head}>
        우리는 초라하지만 대단한 사람들입니다.
      </h1>
      <h1 className={styles.title}>이유비</h1>
      <p className={styles.desc}>인포그래픽 웹 페이지 제작</p>
      <h1 className={styles.title}>김민기</h1>
      <p className={styles.desc}>인포그래픽 제작</p>
    </div>
  );
}
