"use client";

import styles from "./my.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.name}>
        <h1>박상원</h1>
      </div>
      <div className={styles.no}>
        <h1>201830213</h1>
      </div>
      <div className={styles.path}>
        <h1>final/src/app/page.js</h1>
      </div>
    </>
  );
}
