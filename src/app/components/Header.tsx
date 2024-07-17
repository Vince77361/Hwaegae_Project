"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Header = () => {
  const path = usePathname();

  return (
    <nav className={styles.navbar}>
      <h1>Eunttoring</h1>
      <div className={styles.lists}>
        <Link
          href="/"
          className={clsx(styles.link, {
            [styles["link--activated"]]: path === "/",
          })}
        >
          메인
        </Link>
        <Link
          href="/employment"
          className={clsx(styles.link, {
            [styles["link--activated"]]: path === "/employment",
          })}
        >
          취업
        </Link>
        <Link
          href="/startup"
          className={clsx(styles.link, {
            [styles["link--activated"]]: path === "/startup",
          })}
        >
          창업
        </Link>
        <Link
          href="/madeby"
          className={clsx(styles.link, {
            [styles["link--activated"]]: path === "/madeby",
          })}
        >
          만든사람들
        </Link>
      </div>
    </nav>
  );
};

export default Header;
