import React, {useState} from "react";
import styles from "../styles/Profile.module.scss"
import Avatar from "react-avatar"
import { useRouter } from "next/router";

const Profile = ({user}) => {

  console.log(user)

  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-content"]}>
        <div className={styles["profile-main"]}>
          <div className={styles["profile-pic"]}>
            <Avatar size="150px" round name={user.firstname}></Avatar>
          </div>
          <div className={styles["profile-room"]}>
            <h2>
              {user.firstname} {user.lastname}
            </h2>
            <h3>Room no. 729</h3>
            <h3>Roll no. {user.rollNo}</h3>
          </div>
        </div>
        <div className={styles["profile-details"]}>
          <table>
            <tbody>
              <tr>
                <td>Firstname</td>
                <td>{user.firstname}</td>
              </tr>
              <tr>
                <td>Lastname</td>
                <td>{user.lastname}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>Contact No.</td>
                <td>{user.contactNo}</td>
              </tr>
              <tr>
                <td>Course</td>
                <td>{user.course}</td>
              </tr>
              <tr>
                <td>Roll Number</td>
                <td>{user.rollNo}</td>
              </tr>
              <tr>
                <td>Dob</td>
                <td>{user.dob}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
              </tr>
              <tr>
                <td>Room Preference</td>
                <td>{user.roomPref}</td>
              </tr>
              <tr>
                <td>Alloted Room</td>
                <td>729</td>
              </tr>
              <tr>
                <td>Room Type</td>
                <td>double</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
