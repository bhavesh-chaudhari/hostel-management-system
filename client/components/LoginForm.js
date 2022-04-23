import React from "react";
import Link from "next/link";
import styles from "../styles/Form.module.scss";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked on register");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["inputs"]}>
        <div className={styles["input"]}>
          <label htmlFor="rollNo">Roll No.</label>
          <input type="text" name="rollNo" id="rollNo" />
        </div>
        <div className={styles["input"]}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
      </div>
      <div className={styles["form-actions"]}>
        <button type="submit">Login</button>
        <p>
          Don't have an account ?{" "}
          <Link href="/signup" passHref>
            <a>Register here</a>
          </Link>
        </p>
        <p className={styles["forgot-password"]} >
          Forgot Password ?
          <Link href="/forgot-password" passHref>
            <a> click here</a>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
