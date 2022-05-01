import React from 'react'
import styles from "../../styles/Notices.module.scss";
import Notices from '../../components/Notices';

const index = ({notices}) => {

    console.log(notices)
  return (
    <div className={styles["notices-container"]} >
        <Notices notices={notices} ></Notices>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/api/v1/notices`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-type": "application/json" },
  });

  const data = await res.json();

  return {
    props: {
      notices: data.notices,
    },
  };
};

export default index