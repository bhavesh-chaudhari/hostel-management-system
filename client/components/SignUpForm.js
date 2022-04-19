import React from 'react'
import styles from "../styles/SignUp.module.scss"
import Link from "next/link"

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log("clicked on register")
}

const SignUpForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["name-inputs"]}>
        <div className={styles["name"]}>
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" />
        </div>
        <div className={styles["name"]}>
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" />
        </div>
      </div>
      <label htmlFor="rollNumber">Roll No.</label>
      <input type="text" id="rollNumber" />
      <label htmlFor="contactNumber">Contact No.</label>
      <input type="text" id="contactNumber" />
      <label htmlFor="dob">Date Of Birth</label>
      <input type="text" id="dob" />
      <label htmlFor="guardianName">Guardian Name</label>
      <input type="text" id="guardianName" />
      <label htmlFor="guardianNumber">Guardian No.</label>
      <input type="text" id="guardianNumber" />
      <div className={styles["form-actions"]}>
        <button type="submit">Register</button>
        <p>
          Already have an account ?{" "}
          <Link href="/login" passHref>
            <a>Login Here</a>
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUpForm