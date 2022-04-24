import React from 'react'
import styles from "../../styles/Form.module.scss"
import SignUpForm from '../../components/SignUpForm'

const index = () => {

  return (
    <div className={styles["form-container"]}>
      <div className={styles["form-content"]}>
        <h2>Sign Up</h2>
        <SignUpForm></SignUpForm>
      </div>
    </div>
  );
}

export default index