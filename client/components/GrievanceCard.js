import React, {useState, useEffect} from 'react'
import styles from "../styles/Grievances.module.scss"

const GrievanceCard = ({grievance, index}) => {

    const [user, setUser] = useState(null)

//    useEffect(() => {
//      fetch(`http://localhost:5000/api/v1/users/id/${grievance.postedBy}`, {
//        method: "GET",
//        credentials: "include",
//      })
//        .then((res) => res.json())
//        .then((data) => {
//          setUser(data.user);
//          console.log(data);
//        });
//    }, []);
    
  return (
    <div className={styles["grievance-card"]}>
      <h2>{grievance.heading}</h2>
      <p>{grievance.description}</p>
      <p className={styles["number"]}>{index + 1}</p>
      <p className={styles["reporter"]}>
        Reported By - <span>{grievance.user}</span>
      </p>
    </div>
  );
}

export default GrievanceCard