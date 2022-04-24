import Head from "next/head";
import styles from "../styles/Home.module.scss"

const index = () => {
  return (
    <>
    <Head>
      <title>Hostel Management System | IIITN</title>
    </Head>
      <div className={styles["home-container"]}>
        <div className={styles["home-content"]}>
          <div className={styles["heading"]}>
            <h1>IIITN - Hostel Management System</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
