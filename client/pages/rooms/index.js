import React from 'react'
import styles from "../../styles/Rooms.module.scss"

const index = ({rooms}) => {
  return (
    <div className={styles["rooms-container"]}>
      <div className={styles["rooms-content"]}>
        <div className={styles["col"]}>
          <p className={styles["red"]}>101</p>
          <p>201</p>
          <p>301</p>
          <p className={styles["red"]}>401</p>
          <p>501</p>
          <p>601</p>
          <p className={styles["yellow"]}>701</p>
          <p className={styles["red"]}>801</p>
          <p>901</p>
          <p>1001</p>
        </div>
        <div className={styles["col"]}>
          <p className={styles["red"]}>102</p>
          <p>202</p>
          <p className={styles["yellow"]}>302</p>
          <p>402</p>
          <p className={styles["yellow"]}>502</p>
          <p className={styles["red"]}>602</p>
          <p>702</p>
          <p>802</p>
          <p className={styles["red"]}>902</p>
          <p>1002</p>
        </div>
        <div className={styles["col"]}>
          <p>103</p>
          <p>203</p>
          <p className={styles["red"]}>303</p>
          <p className={styles["yellow"]}>403</p>
          <p>503</p>
          <p className={styles["red"]}>603</p>
          <p>703</p>
          <p className={styles["yellow"]}>803</p>
          <p className={styles["red"]}>903</p>
          <p className={styles["yellow"]}>1003</p>
        </div>
      </div>
    </div>
  );
}

// export const getStaticProps = async ({ params }) => {
//   const res = await fetch(`http://localhost:5000/api/v1/rooms`, {
//     method: "GET",
//     credentials: "include",
//     headers: { "Content-type": "application/json" },
//   });

//   const data = await res.json();

//   return {
//     props: {
//       rooms: data.rooms,
//     },
//   };
// };

export default index