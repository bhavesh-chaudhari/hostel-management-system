import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Form.module.scss";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const initialValues = { rollNo: "", password: "" };

const LoginForm = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked on login");
    setLoading(true);
    const response = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    setLoading(false);

    const data = await response.json();

    if (response.status === 200) {
      if (data.loggedInUser.role === "user") {
        router.replace(`/profiles/${data.loggedInUser.rollNo.toLowerCase()}`);
      } else {
        router.replace("/dashboard");
      }
      toast.success("LoggedIn Successfully !");
    }

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["inputs"]}>
        <div className={styles["input"]}>
          <label htmlFor="rollNo">Roll No.</label>
          <input
            onChange={(e) =>
              setFormValues({ ...formValues, rollNo: e.target.value })
            }
            value={formValues.rollNo}
            type="text"
            name="rollNo"
            id="rollNo"
          />
        </div>
        <div className={styles["input"]}>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
            value={formValues.password}
            type="password"
            name="password"
            id="password"
          />
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
        <p className={styles["forgot-password"]}>
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
