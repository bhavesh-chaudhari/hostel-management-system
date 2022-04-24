import React from "react";
import styles from "../../styles/Form.module.scss"
import LoginForm from "../../components/LoginForm";

const index = () => {
  
 return (
   <div className={styles["login-container"]}>
     <div className={styles["form-container"]}>
       <div className={styles["form-content"]}>
         <h2>Login</h2>
         <LoginForm></LoginForm>
       </div>
     </div>
   </div>
 );
};

export default index;
