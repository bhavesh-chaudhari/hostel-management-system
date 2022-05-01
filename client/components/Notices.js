import React from 'react'
import NoticeCard from './NoticeCard'
import styles from "../styles/Notices.module.scss"
import Link from "next/link"

const Notices = ({notices}) => {
  return (
    <div className={styles["notices-content"]}>
      <h2>Notices</h2>
      <Link href="/create-notice" passHref>
        <a>Create Notice</a>
      </Link>
      {notices.map((notice, index) => {
        return (
          <NoticeCard key={index} index={index} notice={notice}></NoticeCard>
        );
      })}
    </div>
  );
}

export default Notices