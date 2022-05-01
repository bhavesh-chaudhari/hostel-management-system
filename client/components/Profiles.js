import React from 'react'
import ProfileCard from './ProfileCard'
import styles from "../styles/Profiles.module.scss"

const Profiles = ({users}) => {

    console.log(users)
    
  return (
    <div className={styles["profiles-content"]}>
            {
                users.map(user=>{
                    return <ProfileCard user={user} ></ProfileCard>;
                })
            }
    </div>
  )
}

export default Profiles