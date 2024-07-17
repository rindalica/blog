import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.background}>
      <h1 className={styles.hello}>Hello</h1>
      <Link className={styles.link_menu_rec} href="/toy/menuRecommend">
        메뉴 추천
      </Link>
    </div>
  );
}
