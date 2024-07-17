import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "Eunttoring",
  description: "회계원리 프로젝트 입니다",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        회계원리 프로젝트 인포그래픽 사이트에
        <br />
        오신 것을 환영합니다!
      </h1>
      <h3 className={styles.subtitle}>
        페이지 이동은 위 네비게이션 바를 이용해 주세요
      </h3>
      <div className={styles.questionContainer}>
        <h2 className={styles.question}>
          (공통질문) 당신은 기회가 되면 창업할 생각이 있나요?
        </h2>
        <Image src="/Uniform1.jpg" alt="ㅇㅇ" width={840} height={280} />
      </div>
    </div>
  );
}
