import React from 'react'
import styles from "../../styles/Grievances.module.scss";
import Grievances from '../../components/Grievances';

const index = ({grievances}) => {

    console.log(grievances)
    
  return (
    <div className={styles["grievances-container"]} >
      <Grievances grievances={grievances} ></Grievances>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/api/v1/grievances`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-type": "application/json" },
  });

  const data = await res.json();

  return {
    props: {
      grievances: data.grievances,
    },
  };
};

export default index