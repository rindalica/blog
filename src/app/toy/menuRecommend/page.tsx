import React from "react";
import styles from "./page.module.css";
import ResultMenu from "./components/ResultMenu";
import Link from "next/link";

export default function page() {
  const data: { menu: string; storeNm: string }[] = [
    {
      menu: "포케",
      storeNm: "슬로우캘리",
    },
    {
      menu: "초밥",
      storeNm: "은행골",
    },
    {
      menu: "떡볶이",
      storeNm: "달떡볶이",
    },
    {
      menu: "쌀국수",
      storeNm: "에머이",
    },
    {
      menu: "치킨",
      storeNm: "교촌",
    },
  ];

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Link className={styles.link_home} href="/">
          🏠
        </Link>
        <div className={styles.title}>메뉴 추천</div>
        <table className={styles.table}>
          <thead>
            <tr className={styles.row}>
              <th className={styles.head}>메뉴</th>
              <th className={styles.head}>상호</th>
            </tr>
          </thead>
          <tbody>
            {data.map((menu) => {
              return (
                <tr className={styles.row}>
                  <td className={styles.data_row}>{menu.menu}</td>
                  <td className={styles.data_row}>{menu.storeNm}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ResultMenu data={data} />
        <div>
          {/* <button
          onClick={()=>{

          }}
          >
            추가
            </button>
          <button
          onClick={()=>{

          }}
          >
            삭제
            </button> */}
        </div>
      </div>
    </div>
  );
}
