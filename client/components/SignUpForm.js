import React, { useState } from "react";
import styles from "../styles/Form.module.scss";
import Link from "next/link";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const initalValues = {
  firstname: "",
  lastname: "",
  rollNo: "",
  course: "",
  contactNo: "",
  // dob: new Date(),
  guardianNo: "",
  email: "",
  roomPref: "",
  gender: "",
  password: "",
};

const SignUpForm = () => {
  const [formValues, setFormValues] = useState(initalValues);
  const [date, onDateChange] = useState(new Date());

  console.log(date)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked on register");
  };

  console.log(formValues)

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["inputs"]}>
        <div className={styles["input"]}>
          <label htmlFor="firstname">First Name</label>
          <input
            value={formValues.firstname}
            onChange={(e) =>
              setFormValues({ ...initalValues, firstname: e.target.value })
            }
            type="text"
            id="firstname"
          />
        </div>
        <div className={styles["input"]}>
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" />
        </div>
      </div>
      <div className={styles["inputs"]}>
        <div className={styles["input"]}>
          <label htmlFor="rollNumber">Roll No.</label>
          <input type="text" id="rollNumber" />
        </div>
        <div className={styles["input"]}>
          <label htmlFor="course">Course</label>
          <select name="course" id="course">
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
          </select>
        </div>
      </div>
      <div className={styles["inputs"]}>
        <div className={styles["input"]}>
          <label htmlFor="contactNumber">Contact No.</label>
          <input type="text" id="contactNumber" />
        </div>
        <div className={styles["input"]}>
          <label htmlFor="dob">Date Of Birth</label>
          {/* <input type="text" id="dob" /> */}
          <DatePicker onChange={onDateChange} value={date} />
        </div>
      </div>
      <div className={styles["inputs"]}>
        <div className={styles["input"]}>
          <label htmlFor="guardianNumber">Guardian No.</label>
          <input type="text" id="guardianNumber" />
        </div>
        <div className={styles["input"]}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
      </div>
      <div className={styles["inputs"]}>
        <div className={styles["input"]}>
          <label htmlFor="roomPref">Room Preference</label>
          <select name="roomPref" id="roomPref">
            <option value="single">Single seater</option>
            <option value="double">Double seater</option>
            <option value="triple">Triple seater</option>
          </select>
        </div>
        <div className={styles["input"]}>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className={styles["inputs"]}>
        <div className={styles["input"]}>
          <label htmlFor="password">Password</label>
          <input autoComplete="false" type="password" id="password" />
        </div>
        <div className={styles["input"]}>
          <label htmlFor="cpassword">Confirm Password</label>
          <input autoComplete="false" type="password" id="cpassword" />
        </div>
      </div>
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
};

export default SignUpForm;
