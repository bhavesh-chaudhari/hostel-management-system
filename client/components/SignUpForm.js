import React, { useState } from "react";
import styles from "../styles/Form.module.scss";
import Link from "next/link";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { PulseLoader } from "react-spinners";

const initalValues = {
  firstname: "",
  lastname: "",
  rollNo: "",
  course: "cse",
  contactNo: "",
  // dob: new Date(),
  guardianNo: "",
  email: "",
  roomPref: "triple",
  gender: "male",
  password: "",
};

const SignUpForm = () => {
  const [formValues, setFormValues] = useState(initalValues);
  const [date, onDateChange] = useState(new Date());
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  console.log(date);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    console.log("clicked on register");
    console.log(formValues);
    const submitValues = { ...formValues, dob: date };
    console.log("Values submitted: ", submitValues);
    const response = await fetch("http://localhost:5000/api/v1/auth/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitValues),
    });
    if(response.status === 200){
      setShow(true)
    }
    setLoading(false);
    const data = await response.json();

    console.log(data);
  };

  console.log(formValues);

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["inputs"]}>
        <div className={styles["input"]}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formValues.firstname}
            onChange={(e) =>
              setFormValues({ ...formValues, firstname: e.target.value })
            }
          />
        </div>
        <div className={styles["input"]}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formValues.lastname}
            onChange={(e) =>
              setFormValues({ ...formValues, lastname: e.target.value })
            }
          />
        </div>
      </div>
      <div className={styles["inputs"]}>
        <div className={styles["input"]}>
          <label htmlFor="rollNumber">Roll No.</label>
          <input
            value={formValues.rollNo}
            onChange={(e) =>
              setFormValues({ ...formValues, rollNo: e.target.value })
            }
            type="text"
            id="rollNumber"
            name="rollNumber"
          />
        </div>
        <div className={styles["input"]}>
          <label htmlFor="course">Course</label>
          <select
            onChange={(e) =>
              setFormValues({ ...formValues, course: e.target.value })
            }
            value={"cse"}
            name="course"
            id="course"
          >
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
          </select>
        </div>
      </div>
      <div className={styles["inputs"]}>
        <div className={styles["input"]}>
          <label htmlFor="contactNumber">Contact No.</label>
          <input
            value={formValues.contactNo}
            onChange={(e) =>
              setFormValues({ ...formValues, contactNo: e.target.value })
            }
            type="text"
            id="contactNumber"
            name="contactNumber"
          />
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
          <input
            value={formValues.guardianNo}
            onChange={(e) =>
              setFormValues({ ...formValues, guardianNo: e.target.value })
            }
            type="number"
            id="guardianNumber"
            name="guardianNumber"
          />
        </div>
        <div className={styles["input"]}>
          <label htmlFor="email">Email</label>
          <input
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
            type="email"
            id="email"
            name="email"
          />
        </div>
      </div>
      <div className={styles["inputs"]}>
        <div className={styles["input"]}>
          <label htmlFor="roomPref">Room Preference</label>
          <select
            value={"triple"}
            onChange={(e) =>
              setFormValues({ ...formValues, roomPref: e.target.value })
            }
            name="roomPref"
            id="roomPref"
          >
            <option value="triple">Triple seater</option>
            <option value="double">Double seater</option>
            <option value="single">Single seater</option>
          </select>
        </div>
        <div className={styles["input"]}>
          <label htmlFor="gender">Gender</label>
          <select
            onChange={(e) =>
              setFormValues({ ...formValues, gender: e.target.value })
            }
            value={"male"}
            name="gender"
            id="gender"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className={styles["inputs"]}>
        <div className={styles["input"]}>
          <label htmlFor="password">Password</label>
          <input
            value={formValues.password}
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
            autoComplete="false"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className={styles["input"]}>
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            autoComplete="false"
            type="password"
            id="cpassword"
            name="cpassword"
          />
        </div>
      </div>
      <div className={styles["form-actions"]}>
        <button type="submit">{loading ? <PulseLoader color="white" size={8} /> : "Register"}</button>
        <p>
          Already have an account ?{" "}
          <Link href="/login" passHref>
            <a>Login Here</a>
          </Link>
        </p>
        {
          show ? <p>
          Registered successfully ! Please check your mailbox, we have sent a confirmation email to{" "}
          <span>{formValues.rollNo.toLowerCase()}@iiitn.ac.in </span>
        </p> : null
        }
      </div>
    </form>
  );
};

export default SignUpForm;
