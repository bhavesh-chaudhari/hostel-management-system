import React from 'react'
import styles from "../styles/Grievances.module.scss"
import GrievanceCard from './GrievanceCard'
import Link from 'next/link'

const Grievances = ({grievances}) => {
  return (
    <div className={styles["grievances-content"]}>
      <h2>Grievances</h2>
      <Link href="/create-notice" passHref>
        <a>Create Grievance</a>
      </Link>
      {grievances.map((grievance, index) => {
        return (
          <GrievanceCard
            key={index}
            index={index}
            grievance={grievance}
          ></GrievanceCard>
        );
      })}
    </div>
  );
}

export default Grievances