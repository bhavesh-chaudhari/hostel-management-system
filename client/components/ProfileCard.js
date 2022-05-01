import React from 'react'
import styles from "../styles/Profiles.module.scss"
import Avatar from "react-avatar"
import Link from 'next/link'

const ProfileCard = ({user}) => {
  return (
    <Link href={`/profiles/${user?.rollNo.toLowerCase()}`} passHref>
      <a className={styles["profile-card"]}>
        <Avatar round size="100px" name={user?.firstname}></Avatar>
        <div className={styles["name"]}>
          <p>
            {user?.firstname} {user?.lastname}
          </p>
          <p>{user.rollNo}</p>
        </div>
        <p className={styles["room"]}>
          Room no. <span>201</span>
        </p>
      </a>
    </Link>
  );
}

export default ProfileCard