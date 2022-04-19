import React from 'react'
import styles from "../../styles/SignUp.module.scss"
import SignUpForm from '../../components/SignUpForm'

const index = () => {

  return (
    <div className={styles["signup-container"]}>
      <div className={styles["signup-content"]}>
        <h2>Sign Up</h2>
        <SignUpForm></SignUpForm>
      </div>
    </div>
  );
}

export default index