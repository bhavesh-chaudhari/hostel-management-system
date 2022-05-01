import React, { useState, useEffect } from "react";
import styles from "../styles/Notices.module.scss"

const NoticeCard = ({notice, index}) => {

  const [user, setUser] = useState(null)

  useEffect(()=>{
    fetch(`http://localhost:5000/api/v1/users/id/${notice.postedBy}`, {method: "GET", credentials: "include"})
    .then(res=>res.json())
    .then(data=>{
      setUser(data.user)
      console.log(data)
    })
  }, [])

  return (
    <div className={styles["notice-card"]} >
        <h2>{notice?.heading}</h2>
        <p>{notice?.description}</p>
        <p className={styles["notice-no"]} >
          {index + 1}
        </p>
    </div>
  )
}

export default NoticeCard