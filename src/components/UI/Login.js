import { useRef } from "react";
import Input from "./Input";
import styles from "./Login.module.css";

const Login = (props) => {

  const usernameRef = useRef()

  const loginHandler = () => {
    let username = "";
    username = usernameRef.current.value;
    console.log(username);
    if (username.length > 0) {
      props.login(username);
      props.hideLogin();
    } 
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.header}>
          <button className={styles["close-button"]} onClick={props.hideLogin}>
            X
          </button>
          <h3>Login</h3>
        </div>
        <Input ref={usernameRef} label="Username:" name="username" labelStyle={{ width: "100px" }} inputStyle={{ width: "150px" }}/>
        <Input label="Password:" name="password" type="password" labelStyle={{ width: "100px" }} inputStyle={{ width: "150px" }}/>
        <button className={styles["login-button"]} onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
};

export default Login;
