import React from "react";
import Profiles from "../../components/Profiles";
import styles from "../../styles/Profiles.module.scss";

const index = ({users}) => {

  return <div className={styles["profiles-container"]}>
    <Profiles users={users} />
  </div>;
};

export const getStaticProps = async ({params}) => {
  const res = await fetch(`http://localhost:5000/api/v1/users`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-type": "application/json" },
  });

  const data = await res.json();

  // console.log(data)

  const allUsers = data.users.map((user)=> {
    delete user.password
    return user
  })

  return {
    props: {
      users: allUsers,
    },
  };
};

export default index;
